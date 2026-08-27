'use client'

import { useState, useMemo } from 'react'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { countWords, hasCJK } from '@/lib/text-stats'

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

  // 句子数:按西文 . ! ? 和 CJK 句末标点 。！？(全角)分割,过滤空串
  const sentences = trimmed
    ? trimmed
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

export function WordCounterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('word-counter', locale, key, fb)

  const [text, setText] = useState('')

  const stats = useMemo(() => analyzeText(text), [text])

  const metricCards = [
    { label: L('words', 'Words'), value: stats.words.toLocaleString('en-US'), highlight: true },
    { label: L('characters', 'Characters'), value: stats.characters.toLocaleString('en-US') },
    { label: L('charactersNoSpaces', 'Characters (no spaces)'), value: stats.charactersNoSpaces.toLocaleString('en-US') },
    { label: L('sentences', 'Sentences'), value: stats.sentences.toLocaleString('en-US') },
    { label: L('paragraphs', 'Paragraphs'), value: stats.paragraphs.toLocaleString('en-US') },
    { label: L('readingTime', 'Reading Time'), value: formatTime(stats.readingTime, L) },
    { label: L('speakingTime', 'Speaking Time'), value: formatTime(stats.speakingTime, L) },
  ]

  return (
    <div className="space-y-6">
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
          {text && (
            <button
              type="button"
              onClick={() => setText('')}
              className="-my-1 rounded-md px-2 py-1 text-xs text-slate-400 hover:text-red-500 dark:text-slate-500 dark:hover:text-red-400 sm:text-sm"
            >
              {L('clear', 'Clear')}
            </button>
          )}
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
