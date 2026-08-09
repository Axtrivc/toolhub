'use client'

import { useMemo, useState } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'

/**
 * Reading & Speaking Time 客户端组件
 *
 * 粘贴文本,实时统计:词数(空白切分)、字符数、句子数;
 * 按 WPM 预设/自定义滑块估算朗读时间(mm:ss),演讲时间同理;
 * 附 250 词/页的页数估算。全部本地计算。
 */

const READING_PRESETS = [
  { label: 'Slow', wpm: 100 },
  { label: 'Average', wpm: 150 },
  { label: 'Fast', wpm: 200 },
  { label: 'Skim', wpm: 300 },
]

const SPEAKING_PRESETS = [
  { label: 'Presentation', wpm: 100 },
  { label: 'Conversation', wpm: 130 },
  { label: 'Fast speaker', wpm: 160 },
]

function pad(n: number) {
  return String(n).padStart(2, '0')
}

/** 秒 → "m:ss" */
function mmss(seconds: number): string {
  const s = Math.round(seconds)
  return `${Math.floor(s / 60)}:${pad(s % 60)}`
}

const inputStyle = {
  borderColor: 'rgb(var(--border-strong))',
  backgroundColor: 'rgb(var(--bg-card))',
  color: 'rgb(var(--text))',
}

export function ReadingSpeakingTimeClient() {
  const [text, setText] = useState('')
  const [readWpm, setReadWpm] = useState(150)
  const [speakWpm, setSpeakWpm] = useState(130)

  const stats = useMemo(() => {
    const trimmed = text.trim()
    const words = trimmed ? trimmed.split(/\s+/).length : 0
    const sentenceMatches = trimmed ? trimmed.match(/[^.!?]+[.!?]+/g) : null
    const sentences = sentenceMatches ? sentenceMatches.length : trimmed ? 1 : 0
    return { words, chars: text.length, sentences }
  }, [text])

  const { words, chars, sentences } = stats
  const pages = words / 250

  const summary = useMemo(
    () =>
      [
        'Reading & Speaking Time',
        `Words: ${words}`,
        `Characters: ${chars}`,
        `Sentences: ${sentences}`,
        `Pages (250 words/page): ${words === 0 ? '0' : pages.toFixed(1)}`,
        `Reading time @ ${readWpm} wpm: ${mmss((words / readWpm) * 60)}`,
        `Speaking time @ ${speakWpm} wpm: ${mmss((words / speakWpm) * 60)}`,
      ].join('\n'),
    [words, chars, sentences, pages, readWpm, speakWpm],
  )

  const presetTable = (
    presets: { label: string; wpm: number }[],
    active: number,
  ) => (
    <div className="overflow-hidden rounded-lg border" style={{ borderColor: 'rgb(var(--border))' }}>
      <table className="w-full text-sm">
        <tbody>
          {presets.map((p) => (
            <tr
              key={p.label}
              className="border-t first:border-t-0"
              style={{
                borderColor: 'rgb(var(--border))',
                backgroundColor: p.wpm === active ? 'rgb(var(--bg-subtle))' : undefined,
              }}
            >
              <td className="px-4 py-2" style={{ color: 'rgb(var(--text))' }}>
                {p.label}
                {p.wpm === active && (
                  <span className="ml-2 text-xs font-medium text-primary">selected</span>
                )}
              </td>
              <td className="px-4 py-2 text-right font-mono" style={{ color: 'rgb(var(--text-muted))' }}>
                {p.wpm} wpm
              </td>
              <td className="px-4 py-2 text-right font-mono font-semibold" style={{ color: 'rgb(var(--text))' }}>
                {mmss((words / p.wpm) * 60)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const presetButtons = (
    presets: { label: string; wpm: number }[],
    active: number,
    set: (n: number) => void,
  ) => (
    <div className="flex flex-wrap gap-2">
      {presets.map((p) => (
        <button
          key={p.label}
          type="button"
          onClick={() => set(p.wpm)}
          className="rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-brand-50"
          style={{
            borderColor: p.wpm === active ? 'rgb(var(--border-strong))' : 'rgb(var(--border))',
            color: p.wpm === active ? 'rgb(var(--text))' : 'rgb(var(--text-muted))',
          }}
        >
          {p.label} · {p.wpm}
        </button>
      ))}
    </div>
  )

  return (
    <div className="space-y-5">
      {/* 文本输入 */}
      <div>
        <label htmlFor="rst-text" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          Paste your text
        </label>
        <textarea
          id="rst-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          placeholder="Paste an article, script, or speech draft here…"
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={inputStyle}
        />
      </div>

      {/* 基础统计 */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <ResultCard label="Words" value={words} />
        <ResultCard label="Characters" value={chars} />
        <ResultCard label="Sentences" value={sentences} />
        <ResultCard label="Pages" value={words === 0 ? '0' : pages.toFixed(1)} sublabel="at 250 words per page" />
      </div>

      {/* 朗读时间 */}
      <div className="space-y-3 rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
        <h3 className="text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
          Reading time
        </h3>
        {presetButtons(READING_PRESETS, readWpm, setReadWpm)}
        <div>
          <label htmlFor="rst-read-wpm" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            Custom speed: <span className="font-mono">{readWpm} wpm</span>
          </label>
          <input
            id="rst-read-wpm"
            type="range"
            min={50}
            max={400}
            step={5}
            value={readWpm}
            onChange={(e) => setReadWpm(+e.target.value)}
            className="w-full accent-blue-600"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ResultCard
            label={`Reading time @ ${readWpm} wpm`}
            value={<span className="font-mono">{mmss((words / readWpm) * 60)}</span>}
            highlight
            sublabel={words === 0 ? 'paste some text first' : `${words} words`}
          />
          {presetTable(READING_PRESETS, readWpm)}
        </div>
      </div>

      {/* 演讲时间 */}
      <div className="space-y-3 rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
        <h3 className="text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
          Speaking time
        </h3>
        {presetButtons(SPEAKING_PRESETS, speakWpm, setSpeakWpm)}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ResultCard
            label={`Speaking time @ ${speakWpm} wpm`}
            value={<span className="font-mono">{mmss((words / speakWpm) * 60)}</span>}
            highlight
            sublabel={words === 0 ? 'paste some text first' : `${words} words`}
          />
          {presetTable(SPEAKING_PRESETS, speakWpm)}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <CopyButton value={summary} label="Copy summary" disabled={words === 0} />
      </div>

      <CalculatorNote>
        ⏱️ Estimates assume steady pacing: silent reading averages roughly 150–200 wpm for adults, while clear
        presentation speech sits near 100–130 wpm. Real delivery runs slower with pauses, slides, and audience
        interaction — budget a 10–20% buffer for live talks.
      </CalculatorNote>
    </div>
  )
}
