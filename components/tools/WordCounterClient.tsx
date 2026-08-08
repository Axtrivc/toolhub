'use client'

import { useState, useMemo } from 'react'

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

  // 字符数(含空格)
  const characters = text.length
  // 字符数(不含空格)
  const charactersNoSpaces = text.replace(/\s/g, '').length

  // 单词数:西文按空白分词;CJK(中日韩)字符每个计为一个"词"
  // (CJK 文本无词间空格,按字计更符合用户对"字数"的预期)
  const cjkRegex = /[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/g
  // 先移除 CJK 字符,再对剩余西文按空白分词
  const nonCjk = trimmed.replace(cjkRegex, '')
  const westernWords = nonCjk ? nonCjk.split(/\s+/).filter(Boolean).length : 0
  const cjkChars = (trimmed.match(cjkRegex) || []).length
  const words = trimmed ? westernWords + cjkChars : 0

  // 句子数:按西文 . ! ? 和 CJK 句末标点 。!? 分割,过滤空串
  const sentences = trimmed
    ? trimmed
        .split(/[.!?。!?]+/)
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

  // 阅读速度:平均 200 词/分钟;演讲速度:130 词/分钟
  const readingTime = words / 200
  const speakingTime = words / 130

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

/** 把分钟数格式化为 "X 分 Y 秒" */
function formatTime(minutes: number): string {
  if (minutes <= 0) return '0 sec'
  const totalSec = Math.round(minutes * 60)
  const m = Math.floor(totalSec / 60)
  const s = totalSec % 60
  if (m === 0) return `${s} sec`
  return `${m} min ${s} sec`
}

export function WordCounterClient() {
  const [text, setText] = useState('')

  const stats = useMemo(() => analyzeText(text), [text])

  const metricCards = [
    { label: 'Words', value: stats.words.toLocaleString(), highlight: true },
    { label: 'Characters', value: stats.characters.toLocaleString() },
    { label: 'Characters (no spaces)', value: stats.charactersNoSpaces.toLocaleString() },
    { label: 'Sentences', value: stats.sentences.toLocaleString() },
    { label: 'Paragraphs', value: stats.paragraphs.toLocaleString() },
    { label: 'Reading Time', value: formatTime(stats.readingTime) },
    { label: 'Speaking Time', value: formatTime(stats.speakingTime) },
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
                ? 'border-brand-200 bg-brand-50'
                : 'border-slate-200 bg-white'
            }`}
          >
            <div
              className={`text-2xl font-bold ${
                m.highlight ? 'text-brand-600' : 'text-slate-900'
              }`}
            >
              {m.value}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500">{m.label}</div>
          </div>
        ))}
      </div>

      {/* 文本输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="text-input" className="text-sm font-medium text-slate-700">
            Your text
          </label>
          {text && (
            <button
              type="button"
              onClick={() => setText('')}
              className="-my-1 rounded-md px-2 py-1 text-xs text-slate-400 hover:text-red-500 sm:text-sm"
            >
              Clear
            </button>
          )}
        </div>
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          rows={10}
          className="w-full rounded-lg border border-slate-300 p-4 text-slate-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
      </div>

      <p className="rounded-md bg-slate-50 p-3 text-xs text-slate-500">
        🔒 Your text is analyzed locally in your browser and never uploaded anywhere.
      </p>
    </div>
  )
}
