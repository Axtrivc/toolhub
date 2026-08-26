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
 */

import type { ToolMeta } from './tools'

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

/** 查询分词:小写、去重、丢弃 1 字符词;空查询返回 [] */
export function tokenizeQuery(query: string): string[] {
  const seen = new Set<string>()
  for (const raw of query.toLowerCase().split(/\s+/)) {
    if (raw.length >= 2) seen.add(raw)
  }
  return [...seen]
}

/**
 * 单词对一组字段文本的最好得分:完整词命中 = 权重,前缀命中 = 权重 × 0.6。
 * 词边界完整命中用首尾锚定判定(避免 "sin" 完整命中 "sing" 的假完整词)。
 */
function tokenScore(token: string, texts: string[], weight: number): number {
  let best = 0
  for (const raw of texts) {
    const text = raw.toLowerCase()
    if (!text) continue
    if (new RegExp(`\\b${escapeRe(token)}`).test(text)) {
      // 完整词开头(\b 锚定):"res" 对 "resize" 也算,词首命中即视为完整意图
      best = Math.max(best, weight)
    } else if (text.includes(token)) {
      best = Math.max(best, weight * 0.6)
    }
  }
  return best
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** 单工具对 token 组的 (AND 是否全命中, 总分) */
function scoreTool(tool: ToolMeta, tokens: string[]): { and: boolean; score: number } {
  let total = 0
  let hits = 0
  for (const token of tokens) {
    let best = 0
    for (const f of FIELD_WEIGHTS) {
      best = Math.max(best, tokenScore(token, f.get(tool), f.weight))
    }
    if (best > 0) hits++
    total += best
  }
  return { and: hits === tokens.length, score: total }
}

/**
 * 主入口:查询词命中的工具,按得分降序。
 * AND 全灭时自动 OR 兜底(任意词命中);查询为空/全是短词时返回 null(调用方走默认列表)。
 */
export function searchTools(allTools: ToolMeta[], query: string, limit = 12): ToolMeta[] | null {
  const tokens = tokenizeQuery(query)
  if (tokens.length === 0) return null
  const scored = allTools
    .map((tool, idx) => ({ tool, idx, ...scoreTool(tool, tokens) }))
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
