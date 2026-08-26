'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { CalculatorNote } from '@/components/calculator/CalculatorField'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Random Choice Picker 客户端组件
 *
 * 每行一个选项,点 Pick 后大显示区快速轮播(~60ms 起步、缓动放慢,全程约 1.8s),
 * 最终停在获奖者上。获奖者用 crypto.getRandomValues + 拒绝采样(消除模偏差)。
 * 支持:获奖人数(钳制到选项数)、不允许重复(默认开)、抽中后移除。
 * 定时器在卸载/新一轮抽取前清理。
 */

const SAMPLE = ['Pizza', 'Sushi', 'Tacos', 'Burgers', 'Pasta', 'Salad'].join('\n')

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n))
}

/** 无偏随机下标:拒绝采样消除 2^32 % n 的模偏差 */
function cryptoIndex(n: number): number {
  const limit = Math.floor(0x100000000 / n) * n
  const buf = new Uint32Array(1)
  do {
    crypto.getRandomValues(buf)
  } while (buf[0] >= limit)
  return buf[0] % n
}

interface HistoryEntry {
  id: number
  winners: string[]
  time: string
}

const inputStyle = {
  borderColor: 'rgb(var(--border-strong))',
  backgroundColor: 'rgb(var(--bg-card))',
  color: 'rgb(var(--text))',
}

export function RandomChoicePickerClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('random-choice-picker', locale, key, fb)

  const [text, setText] = useState(SAMPLE)
  const [countStr, setCountStr] = useState('1')
  const [unique, setUnique] = useState(true)
  const [removeAfter, setRemoveAfter] = useState(false)
  const [spinning, setSpinning] = useState(false)
  const [display, setDisplay] = useState('')
  const [winners, setWinners] = useState<string[]>([])
  const [history, setHistory] = useState<HistoryEntry[]>([])

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const historyIdRef = useRef(0)

  const options = useMemo(
    () =>
      text
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
    [text],
  )
  const tooFew = options.length < 2
  const k = clamp(parseInt(countStr, 10) || 1, 1, Math.max(1, options.length))

  // 卸载时清理定时器
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const pick = () => {
    if (spinning) return
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (tooFew) return

    // 预生成获奖者(真正随机,crypto + 拒绝采样)
    let winIdx: number[]
    if (unique) {
      const idx = options.map((_, i) => i)
      for (let i = 0; i < k; i++) {
        const j = i + cryptoIndex(idx.length - i)
        ;[idx[i], idx[j]] = [idx[j], idx[i]]
      }
      winIdx = idx.slice(0, k)
    } else {
      winIdx = Array.from({ length: k }, () => cryptoIndex(options.length))
    }
    const picked = winIdx.map((i) => options[i])

    // 轮播动画:起步 60ms,二次缓动放慢,总时长 ~1.8s
    setSpinning(true)
    setWinners([])
    const start = performance.now()
    const total = 1800
    const tick = () => {
      const p = Math.min(1, (performance.now() - start) / total)
      if (p >= 1) {
        finish(picked)
        return
      }
      // 视觉轮播用 Math.random 即可(不影响结果)
      setDisplay(options[Math.floor(Math.random() * options.length)])
      timerRef.current = setTimeout(tick, 60 + p * p * 220)
    }
    timerRef.current = setTimeout(tick, 60)
  }

  const finish = (picked: string[]) => {
    timerRef.current = null
    setSpinning(false)
    setWinners(picked)
    setDisplay(picked[0])
    historyIdRef.current += 1
    setHistory((h) => [
      { id: historyIdRef.current, winners: picked, time: new Date().toLocaleTimeString() },
      ...h,
    ])
    if (removeAfter) {
      const remaining = [...options]
      for (const w of picked) {
        const i = remaining.indexOf(w)
        if (i >= 0) remaining.splice(i, 1)
      }
      setText(remaining.join('\n'))
    }
  }

  const toggleStyle = (on: boolean) => ({
    borderColor: on ? 'rgb(var(--border-strong))' : 'rgb(var(--border))',
    backgroundColor: on ? 'rgb(var(--bg-subtle))' : 'transparent',
    color: on ? 'rgb(var(--text))' : 'rgb(var(--text-muted))',
  })

  return (
    <div className="space-y-5">
      {/* 选项输入 */}
      <div>
        <label htmlFor="rcp-options" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('optionsLabel', 'Options — one per line')} ({options.length} {options.length === 1 ? L('optionSingular', 'option') : L('optionPlural', 'options')})
        </label>
        <textarea
          id="rcp-options"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={7}
          placeholder={'Pizza\nSushi\nTacos'}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={inputStyle}
        />
      </div>

      {tooFew && (
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">
          {L('tooFewError', '⚠️ Add at least 2 options (one per line) to pick from.')}
        </div>
      )}

      {/* 控制区 */}
      <div
        className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3"
        style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
      >
        <div>
          <label htmlFor="rcp-count" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('numberOfWinners', 'Number of winners')}
          </label>
          <input
            id="rcp-count"
            type="number"
            min={1}
            max={Math.max(1, options.length)}
            value={countStr}
            onChange={(e) => setCountStr(e.target.value)}
            onBlur={() => setCountStr(String(k))}
            className="w-full rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
            style={inputStyle}
          />
        </div>
        <button
          type="button"
          onClick={() => setUnique((v) => !v)}
          aria-pressed={unique}
          className="self-end rounded-lg border p-3 text-left text-sm font-medium transition"
          style={toggleStyle(unique)}
        >
          <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: unique ? 'rgb(34 197 94)' : 'rgb(var(--border-strong))' }} />
          {L('noRepeatWinners', 'No repeat winners')} {unique ? L('stateOn', '(on)') : L('stateOff', '(off)')}
        </button>
        <button
          type="button"
          onClick={() => setRemoveAfter((v) => !v)}
          aria-pressed={removeAfter}
          className="self-end rounded-lg border p-3 text-left text-sm font-medium transition"
          style={toggleStyle(removeAfter)}
        >
          <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: removeAfter ? 'rgb(34 197 94)' : 'rgb(var(--border-strong))' }} />
          {L('removeWinnerAfterPicking', 'Remove winner after picking')} {removeAfter ? L('stateOn', '(on)') : L('stateOff', '(off)')}
        </button>
      </div>

      {/* 大显示区 + Pick */}
      <div
        className="flex min-h-28 items-center justify-center rounded-xl border p-6 text-center"
        style={{
          borderColor: 'rgb(var(--border))',
          backgroundColor: spinning ? 'rgb(var(--bg-subtle))' : 'rgb(var(--bg-card))',
        }}
      >
        <span
          className={`text-2xl font-bold sm:text-3xl ${spinning ? 'animate-pulse' : ''}`}
          style={{ color: display ? 'rgb(var(--text))' : 'rgb(var(--text-faint))' }}
        >
          {spinning ? display : display || L('pressPickToChoose', 'Press Pick to choose')}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={pick} disabled={spinning || tooFew} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50">
          {spinning ? L('picking', 'Picking…') : `${L('pick', 'Pick')} ${k} ${k === 1 ? L('winnerSingular', 'winner') : L('winnerPlural', 'winners')}`}
        </button>
        <CopyButton value={winners.join('\n')} label={L('copyWinners', 'Copy winners')} disabled={winners.length === 0} />
      </div>

      {/* 获奖者卡片 */}
      {winners.length > 0 && !spinning && (
        <div className="flex flex-wrap gap-2">
          {winners.map((w, i) => (
            <div
              key={`${w}-${i}`}
              className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 px-4 py-2.5 text-lg font-bold text-primary shadow-sm"
            >
              {w}
            </div>
          ))}
        </div>
      )}

      {/* 历史 */}
      {history.length > 0 && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
              {L('history', 'History')}
            </h3>
            <button
              type="button"
              onClick={() => setHistory([])}
              className="text-xs font-medium text-primary hover:underline"
            >
              {L('clear', 'Clear')}
            </button>
          </div>
          <ol className="space-y-2">
            {history.map((h) => (
              <li
                key={h.id}
                className="flex items-center gap-3 rounded-md border px-4 py-2.5 text-sm"
                style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
              >
                <span className="font-semibold" style={{ color: 'rgb(var(--text))' }}>
                  {h.winners.join(', ')}
                </span>
                <span className="ml-auto text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                  {h.time}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <CalculatorNote>
        {L('noteIntro', '🎲 Winners are drawn with ')}<code>crypto.getRandomValues</code>
        {L('noteMid', ' and rejection sampling (no modulo bias), so every option has an exactly equal chance. With ')}
        &quot;{L('noteNoRepeat', 'no repeat winners')}&quot;
        {L('noteOutro', ' on, picks are sampled without replacement; turn it off to allow the same option to win multiple times in one draw.')}
      </CalculatorNote>
    </div>
  )
}
