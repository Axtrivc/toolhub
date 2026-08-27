'use client'

import { useState, useMemo, useCallback } from 'react'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { countWords, hasCJK } from '@/lib/text-stats'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { CopyButton } from '@/components/CopyButton'

export interface TextStats {
  characters: number
  charactersNoSpaces: number
  words: number
  sentences: number
  paragraphs: number
  readingTime: number // 分钟
  speakingTime: number // 分钟
}

/** 统计文本的各项指标 - 纯函数 */
function analyzeText(text: string): TextStats {
  const trimmed = text.trim()

  // 字符数(含空格):按 Unicode 码点计,与 makeTextTool 全站口径一致(emoji 记 1 不记 2)
  const characters = [...text].length
  // 字符数(不含空格)
  const charactersNoSpaces = [...text.replace(/\s/g, '')].length

  // 单词数:统一走 lib/text-stats 的混合口径(CJK 按字计、西文按空白分词)
  const words = countWords(trimmed)

  // 句子数:按西文 . ! ? 和 CJK 句末标点 。！？(全角)分割,过滤空串。
  // 断句前先抹掉小数点(3.14→314,与 lib/text-stats.countSentences 同一口径),
  // 避免 "Pi is 3.14." 被计成 2 句、且与本站阅读时长工具的句数互相矛盾。
  const normDecimal = trimmed ? trimmed.replace(/(\d)\.(\d)/g, '$1$2') : ''
  const sentences = normDecimal
    ? normDecimal
        .split(/[.!?。！？…]+/)
        .map((s) => s.trim())
        .filter(Boolean).length
    : 0

  // 段落数:按空行分割
  const paragraphs = trimmed
    ? trimmed
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean).length
    : 0

  // 阅读速度分口径:纯拉丁文本 200 词/分、朗读 130 词/分;含 CJK 时按字计
  // (words 为混合口径,CJK 按字数),阅读 350 字/分、朗读 220 字/分——否则
  // 中文按 200 词/分会高估约 2 倍
  const cjk = hasCJK(trimmed)
  const readingTime = words / (cjk ? 350 : 200)
  const speakingTime = words / (cjk ? 220 : 130)

  return {
    characters,
    charactersNoSpaces,
    words,
    sentences,
    paragraphs,
    readingTime,
    speakingTime,
  }
}

/** 把分钟数格式化为 "X 分 Y 秒"(单位经 L 本地化) */
function formatTime(minutes: number, L: (key: string, fb: string) => string): string {
  if (minutes <= 0) return L('tZero', '0 sec')
  const totalSec = Math.round(minutes * 60)
  const m = Math.floor(totalSec / 60)
  const s = totalSec % 60
  if (m === 0) return `${s} ${L('tSec', 'sec')}`
  return `${m} ${L('tMin', 'min')} ${s} ${L('tSec', 'sec')}`
}

/** 快速示例:几行有代表性的中英混排文本(与 texttools 家族 LoadSample 惯例一致) */
const SAMPLE = `ToolHub runs entirely in your browser — fast, private, and free.
Paste any article, essay, or script here to see live statistics.
这一段是中文示例:统计口径对汉字按字计数,对英文按词计数。`

// P-1 大输入防线:统计在每次输入时同步跑多趟线性扫描(码点展开/分词/断句/分段),
// 超大粘贴会冻结 UI。超过 200k 字符只统计前 200k 并给出截断提示(阈值与 makeTextTool 底座一致)。
const MAX_ANALYZE_CHARS = 200_000

export function WordCounterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('word-counter', locale, key, fb)

  const [text, setText] = useState('')

  const handleLoadSample = useCallback(() => setText(SAMPLE), [])

  // P-1 门控:仅对前 MAX_ANALYZE_CHARS 字符做统计,超出部分跳过(下方横幅提示)
  const safeText = text.length > MAX_ANALYZE_CHARS ? text.slice(0, MAX_ANALYZE_CHARS) : text
  const truncated = text.length > MAX_ANALYZE_CHARS
  const stats = useMemo(() => analyzeText(safeText), [safeText])

  const metricCards = [
    { label: L('words', 'Words'), value: stats.words.toLocaleString('en-US'), highlight: true },
    { label: L('characters', 'Characters'), value: stats.characters.toLocaleString('en-US') },
    { label: L('charactersNoSpaces', 'Characters (no spaces)'), value: stats.charactersNoSpaces.toLocaleString('en-US') },
    { label: L('sentences', 'Sentences'), value: stats.sentences.toLocaleString('en-US') },
    { label: L('paragraphs', 'Paragraphs'), value: stats.paragraphs.toLocaleString('en-US') },
    { label: L('readingTime', 'Reading Time'), value: formatTime(stats.readingTime, L) },
    { label: L('speakingTime', 'Speaking Time'), value: formatTime(stats.speakingTime, L) },
  ]

  // 统计摘要纯文本(复用已本地化的标签,零新增 key):词数常被贴进简报/SEO 工单(C1)
  const summary = metricCards.map((m) => `${m.label}: ${m.value}`).join('\n')

  return (
    <div className="space-y-6">
      {/* 截断提示(P-1) */}
      {truncated && (
        <div role="status" className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-300">
          ⚠️ {L('textExceeds', 'Text exceeds')} {MAX_ANALYZE_CHARS.toLocaleString('en-US')} {L('truncatedForSafety', 'characters — only the first part is counted to keep the page responsive.')}
        </div>
      )}

      {/* 指标卡片网格 */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {metricCards.map((m) => (
          <div
            key={m.label}
            className={`rounded-lg border p-4 text-center ${
              m.highlight
                ? 'border-brand-200 bg-brand-50 dark:border-brand-800/60 dark:bg-brand-900/30'
                : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'
            }`}
          >
            <div
              className={`text-2xl font-bold tabular-nums ${
                m.highlight ? 'text-brand-600 dark:text-brand-400' : 'text-slate-900 dark:text-white'
              }`}
            >
              {m.value}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{m.label}</div>
          </div>
        ))}
      </div>

      {/* 文本输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="text-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {L('yourText', 'Your text')}
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
            <CopyButton value={summary} disabled={!text} />
            {text && (
              <button
                type="button"
                onClick={() => setText('')}
                className="-my-1 rounded-md px-2 py-1.5 text-xs text-slate-400 hover:text-red-500 dark:text-slate-500 dark:hover:text-red-400 sm:text-sm"
              >
                {L('clear', 'Clear')}
              </button>
            )}
          </div>
        </div>
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={L('textPlaceholder', 'Type or paste your text here...')}
          rows={10}
          className="w-full rounded-lg border border-slate-300 bg-white p-4 text-slate-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:focus:ring-brand-500/30"
        />
      </div>

      <p className="rounded-md bg-slate-50 p-3 text-xs text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
        {L('privacyNote', '🔒 Your text is analyzed locally in your browser and never uploaded anywhere.')}
      </p>
    </div>
  )
}
