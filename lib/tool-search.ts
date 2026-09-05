/**
 * 站内工具统一搜索引擎 - 供 ⌘K SearchPalette 与首页 ToolHubExplorer 共用。
 *
 * 设计(相对旧"连续子串 includes"的升级):
 *  - 分词 + AND 语义:查询按空格切词,每个词都必须命中至少一个字段;
 *    "mortgage pmi" 两词分处 name/keywords 也能命中(旧引擎必须连续出现)。
 *  - 分层加权:name/h1 ×6 > 长尾词 ×5 > keywords ×4 > shortIntro/分类 ×3 > slug ×2;
 *    完整词命中系数 1,前缀命中 ×0.6("resiz" 命中 "resize")。
 *  - OR 兜底:AND 全灭时降级为任意词命中排序,保证总有候选(分数自然更低)。
 *  - 结果稳定:同分按注册表顺序(不抖动)。
 *  - 多语言:locale ≠ en 时追加当前语种字段(本地化名称/简介/分类),
 *    让"房贷""时间戳"等母语词直接命中,而非只匹配英文原文。
 *  - CJK 适配:中日韩文字没有 \b 词边界概念,非 ASCII token 直接子串命中给满权重;
 *    无空格的 CJK 查询额外生成 2~4 字滑窗切片,整词与切片都参与 AND/OR 评分。
 */

import type { ToolMeta } from './tools'
import type { Locale } from './i18n'
import { getToolName, getToolShortIntro, tc } from './i18n'

/** 字段 → 权重(命中该字段的词得分基数) */
const FIELD_WEIGHTS: Array<{ get: (t: ToolMeta) => string[]; weight: number }> = [
  { get: (t) => [t.name], weight: 6 },
  { get: (t) => [t.h1], weight: 6 },
  { get: (t) => t.longTailKeywords ?? [], weight: 5 },
  { get: (t) => t.keywords, weight: 4 },
  { get: (t) => [t.shortIntro], weight: 3 },
  { get: (t) => [t.category], weight: 3 },
  { get: (t) => [t.slug], weight: 2 },
]

/** locale ≠ en 时追加的本地化字段:名称 ×6 > 简介 ×4 > 分类 ×3 */
function localizedFields(tool: ToolMeta, locale: Locale): Array<{ texts: string[]; weight: number }> {
  if (locale === 'en') return []
  return [
    { texts: [getToolName(locale, tool.slug, tool.name)], weight: 6 },
    { texts: [getToolShortIntro(locale, tool.slug, tool.shortIntro)], weight: 4 },
    { texts: [tc(locale, tool.category)], weight: 3 },
  ]
}

/** CJK 字符(汉/假名/谚文)检测 —— 无空格分词的语言需要特殊处理 */
const CJK_RE = /[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/
/** 纯 ASCII 检测:\b 词边界只对 ASCII 文本有意义 */
const ASCII_ONLY_RE = /^[\x00-\x7f]+$/

/**
 * 查询分词:小写、去重、丢弃 1 字符词;空查询返回 []。
 * CJK 无空格查询(如"房贷计算器"):整词 + 2~4 字滑窗切片全部入集合 ——
 * 整词命中排最前,只命中切片("房贷")的工具经 OR 兜底也能浮出。
 */
export function tokenizeQuery(query: string): string[] {
  const seen = new Set<string>()
  for (const raw of query.toLowerCase().split(/\s+/)) {
    if (raw.length >= 2) seen.add(raw)
  }
  const trimmed = query.trim()
  if (CJK_RE.test(trimmed) && !/\s/.test(trimmed)) {
    const chars = [...trimmed.toLowerCase()]
    if (chars.length >= 2) seen.add(chars.join(''))
    for (let size = 2; size <= 4 && size < chars.length; size++) {
      for (let i = 0; i + size <= chars.length; i++) {
        seen.add(chars.slice(i, i + size).join(''))
      }
    }
  }
  return [...seen]
}

/**
 * 单词对一组字段文本的最好得分:完整词命中 = 权重,前缀命中 = 权重 × 0.6。
 * 词边界完整命中用首尾锚定判定(避免 "sin" 完整命中 "sing" 的假完整词)。
 * 非 ASCII token(如中文)跳过 \b 判定:\b 基于 [A-Za-z0-9_],对 CJK 无意义,
 * 直接 text.includes(token) 命中即给满权重。
 */
function tokenScore(token: string, texts: string[], weight: number): number {
  let best = 0
  const bounded = ASCII_ONLY_RE.test(token)
  for (const raw of texts) {
    const text = raw.toLowerCase()
    if (!text) continue
    if (bounded && new RegExp(`\\b${escapeRe(token)}`).test(text)) {
      // 完整词开头(\b 锚定):"res" 对 "resize" 也算,词首命中即视为完整意图
      best = Math.max(best, weight)
    } else if (text.includes(token)) {
      best = Math.max(best, bounded ? weight * 0.6 : weight)
    }
  }
  return best
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** 单工具对 token 组的 (AND 是否全命中, 总分);fields 为该工具展开后的字段文本 */
function scoreTool(
  tool: ToolMeta,
  tokens: string[],
  fields: Array<{ texts: string[]; weight: number }>,
): { and: boolean; score: number } {
  let total = 0
  let hits = 0
  for (const token of tokens) {
    let best = 0
    for (const f of fields) {
      best = Math.max(best, tokenScore(token, f.texts, f.weight))
    }
    if (best > 0) hits++
    total += best
  }
  return { and: hits === tokens.length, score: total }
}

/**
 * 主入口:查询词命中的工具,按得分降序。
 * AND 全灭时自动 OR 兜底(任意词命中);查询为空/全是短词时返回 null(调用方走默认列表)。
 * locale ≠ en 时附加本地化字段参与评分(默认 'en' 仅匹配注册表英文原文)。
 */
export function searchTools(
  allTools: ToolMeta[],
  query: string,
  limit = 12,
  locale: Locale = 'en',
): ToolMeta[] | null {
  const tokens = tokenizeQuery(query)
  if (tokens.length === 0) return null
  const scored = allTools
    .map((tool, idx) => {
      const fields = FIELD_WEIGHTS.map((f) => ({ texts: f.get(tool), weight: f.weight }))
        .concat(localizedFields(tool, locale))
      return { tool, idx, ...scoreTool(tool, tokens, fields) }
    })
    .filter((s) => s.score > 0)
  const andHits = scored.filter((s) => s.and)
  const pool = andHits.length > 0 ? andHits : scored
  if (pool.length === 0) return []
  return pool
    .sort((a, b) => b.score - a.score || a.idx - b.idx)
    .slice(0, limit)
    .map((s) => s.tool)
}

/**
 * 命中词高亮:把文本中命中的 token 包上 <mark> 样式标记。
 * 供搜索结果行展示(SearchPalette);返回 React 可用的分段数组。
 */
export function highlightSegments(text: string, query: string): Array<{ text: string; hit: boolean }> {
  const tokens = tokenizeQuery(query)
  if (tokens.length === 0 || !text) return [{ text, hit: false }]
  const re = new RegExp(`(${tokens.map(escapeRe).join('|')})`, 'ig')
  const parts = text.split(re)
  return parts
    .filter((p) => p !== '')
    .map((p) => ({ text: p, hit: tokens.includes(p.toLowerCase()) }))
}
