'use client'

import { useState, useMemo, useCallback, useRef } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { ResultActions } from '@/components/ResultActions'

/**
 * SRT Subtitle Shifter —— 字幕时间轴平移/清洗
 *
 * 解析 cue(index 可选、容忍 \r\n),整体平移秒数(支持负数/小数),
 * 负数时间钳制到 0,可重编号、剥离 <i>/<b>/ASS 特效块/♪。
 * 时间运算全部用整数毫秒,100% 本地。
 */

const SAMPLE_SRT = `1
00:00:01,500 --> 00:00:04,000
<i>Hello, world!</i>

2
00:00:05,250 --> 00:00:08,000
{\\an8}<b>♪ Music playing ♪</b>

00:00:09,100 --> 00:00:12,500
This cue had no index number.
`

interface Cue {
  index: number | null
  startMs: number
  endMs: number
  lines: string[]
}

const TIME_RE =
  /(\d{1,3}):(\d{2}):(\d{2})[,.](\d{1,3})\s*-->\s*(\d{1,3}):(\d{2}):(\d{2})[,.](\d{1,3})/

function partToMs(h: string, m: string, s: string, ms: string): number {
  return (
    parseInt(h, 10) * 3600000 +
    parseInt(m, 10) * 60000 +
    parseInt(s, 10) * 1000 +
    parseInt(ms.padEnd(3, '0'), 10)
  )
}

/** 解析 SRT 文本,容忍缺失索引与 \r\n;返回 cue 列表与无法解析的块数 */
function parseSrt(text: string): { cues: Cue[]; errorBlocks: number } {
  const normalized = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  const blocks = normalized.split(/\n{2,}/).filter((b) => b.trim() !== '')
  const cues: Cue[] = []
  let errorBlocks = 0

  for (const block of blocks) {
    const lines = block.split('\n')
    let cursor = 0
    let index: number | null = null
    if (/^\d+$/.test(lines[0].trim())) {
      index = parseInt(lines[0].trim(), 10)
      cursor = 1
    }
    const timeLine = lines[cursor] ?? ''
    const m = TIME_RE.exec(timeLine)
    if (!m) {
      errorBlocks++
      continue
    }
    cues.push({
      index,
      startMs: partToMs(m[1], m[2], m[3], m[4]),
      endMs: partToMs(m[5], m[6], m[7], m[8]),
      lines: lines.slice(cursor + 1),
    })
  }
  return { cues, errorBlocks }
}

/** 剥离 HTML 标签、ASS 覆盖块 {\…}、♪/♫ 符号 */
function stripFormatting(line: string): string {
  return line
    .replace(/\{[^}]*\}/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[♪♫]/g, '')
    .replace(/ {2,}/g, ' ')
    .trim()
}

function formatMs(ms: number): string {
  const sign = ms < 0 ? '-' : ''
  const abs = Math.abs(ms)
  const h = Math.floor(abs / 3600000)
  const min = Math.floor((abs % 3600000) / 60000)
  const sec = Math.floor((abs % 60000) / 1000)
  const milli = abs % 1000
  const pad = (n: number, len = 2) => String(n).padStart(len, '0')
  return `${sign}${pad(h)}:${pad(min)}:${pad(sec)},${pad(milli, 3)}`
}

interface ShiftResult {
  output: string
  cueCount: number
  errorBlocks: number
  clampedCues: number
}

function shiftSrt(
  input: string,
  offsetMs: number,
  clamp: boolean,
  renumber: boolean,
  strip: boolean,
): ShiftResult {
  const { cues, errorBlocks } = parseSrt(input)
  let clampedCues = 0

  const out = cues
    .map((cue, i) => {
      let start = cue.startMs + offsetMs
      let end = cue.endMs + offsetMs
      if (clamp && (start < 0 || end < 0)) {
        clampedCues++
        start = Math.max(0, start)
        end = Math.max(0, end)
      }
      const idx = renumber ? i + 1 : cue.index
      const lines = strip ? cue.lines.map(stripFormatting) : cue.lines
      const header = idx === null ? '' : `${idx}\n`
      return `${header}${formatMs(start)} --> ${formatMs(end)}\n${lines.join('\n')}`
    })
    .join('\n\n')

  return { output: out ? out + '\n' : '', cueCount: cues.length, errorBlocks, clampedCues }
}

const inputStyle = {
  borderColor: 'rgb(var(--border-strong))',
  backgroundColor: 'rgb(var(--bg-card))',
  color: 'rgb(var(--text))',
}

export function SrtSubtitleShiftClient() {
  const [input, setInput] = useState('')
  const [offsetStr, setOffsetStr] = useState('0')
  const [clamp, setClamp] = useState(true)
  const [renumber, setRenumber] = useState(true)
  const [strip, setStrip] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const offsetSeconds = useMemo(() => {
    if (offsetStr.trim() === '') return 0
    const n = parseFloat(offsetStr)
    return Number.isFinite(n) ? n : null
  }, [offsetStr])

  const result = useMemo<ShiftResult | null>(() => {
    if (!input.trim() || offsetSeconds === null) return null
    return shiftSrt(input, Math.round(offsetSeconds * 1000), clamp, renumber, strip)
  }, [input, offsetSeconds, clamp, renumber, strip])

  const handleLoadSample = useCallback(() => {
    setInput(SAMPLE_SRT)
    setOffsetStr('-1.5')
  }, [])

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    file.text().then((text) => setInput(text)).catch(() => {})
    // 允许重复选择同一文件
    e.target.value = ''
  }, [])

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="srt-input" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            Paste SRT subtitles
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
            <button type="button" onClick={() => fileRef.current?.click()} className="btn btn-secondary px-3 py-1.5 text-xs">
              Upload .srt
            </button>
            <input ref={fileRef} type="file" accept=".srt,text/plain" onChange={handleFile} className="hidden" />
            {input && (
              <button
                type="button"
                onClick={() => setInput('')}
                className="-my-1 rounded-md px-2 py-1 text-xs hover:text-red-500 sm:text-sm"
                style={{ color: 'rgb(var(--text-faint))' }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
        <textarea
          id="srt-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={'1\n00:00:01,500 --> 00:00:04,000\nFirst subtitle line'}
          rows={10}
          spellCheck={false}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={inputStyle}
        />
      </div>

      {/* 控制区 */}
      <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
        <div>
          <label htmlFor="srt-offset" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            Offset (seconds, negative ok)
          </label>
          <input
            id="srt-offset"
            type="number"
            step="0.1"
            value={offsetStr}
            onChange={(e) => setOffsetStr(e.target.value)}
            className="w-40 rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
            style={inputStyle}
          />
        </div>
        <label className="flex cursor-pointer items-center gap-2 pb-2 text-sm" style={{ color: 'rgb(var(--text))' }}>
          <input type="checkbox" checked={clamp} onChange={(e) => setClamp(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          Clamp negative times to 00:00:00,000
        </label>
        <label className="flex cursor-pointer items-center gap-2 pb-2 text-sm" style={{ color: 'rgb(var(--text))' }}>
          <input type="checkbox" checked={renumber} onChange={(e) => setRenumber(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          Renumber cues
        </label>
        <label className="flex cursor-pointer items-center gap-2 pb-2 text-sm" style={{ color: 'rgb(var(--text))' }}>
          <input type="checkbox" checked={strip} onChange={(e) => setStrip(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          Strip formatting (tags, ASS blocks, ♪)
        </label>
      </div>

      {/* 无效 offset 提示 */}
      {offsetSeconds === null && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⚠️ Please enter a valid number of seconds, e.g. <code>-2.5</code> or <code>1.75</code>.
        </div>
      )}

      {/* 输出区 */}
      {result && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
              Shifted SRT — {result.cueCount} cue{result.cueCount === 1 ? '' : 's'}
            </span>
            <CopyButton value={result.output} label="Copy" />
          </div>
          {result.errorBlocks > 0 && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              ⚠️ {result.errorBlocks} block{result.errorBlocks === 1 ? '' : 's'} could not be parsed (no valid
              timestamp line) and {result.errorBlocks === 1 ? 'was' : 'were'} skipped.
            </div>
          )}
          {result.clampedCues > 0 && clamp && (
            <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
              ⚠️ {result.clampedCues} cue{result.clampedCues === 1 ? '' : 's'} went below zero after shifting and
              {result.clampedCues === 1 ? ' was' : ' were'} clamped to 00:00:00,000.
            </p>
          )}
          <pre
            className="max-h-96 overflow-auto rounded-lg border p-4 font-mono text-sm"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}
          >
            <code>{result.output}</code>
          </pre>
          <ResultActions
            summary={result.output}
            filename="shifted.srt"
            downloadContent={result.output}
            disabled={!result.output}
            copyLabel="Copy SRT"
          />
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        🔒 100% client-side — your subtitle file never leaves your browser.
      </p>
    </div>
  )
}
