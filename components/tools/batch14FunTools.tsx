'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CalculatorField, CalculatorNote, ResultCard } from '../calculator/CalculatorField'
import { CopyButton } from '@/components/CopyButton'
import { fmtNum } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { getCalculatorSample } from '@/lib/tool-samples'

/**
 * 第十四批:趣味/决策类(自定义 client)
 * Dice / Coin Flip / Wheel Spinner / Morse Translator
 * Typing Speed Test / Random Team Generator / Password Entropy
 * 随机源统一走 crypto.getRandomValues(公平性可宣传),拒绝 Math.random。
 */

const selVars = { borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }

/** 加密级随机整数 [0, max) —— rejection sampling 无模偏差 */
function randInt(max: number): number {
  if (max <= 0) return 0
  const range = 4294967296 // 2^32
  const limit = range - (range % max)
  const buf = new Uint32Array(1)
  let v = 0
  do {
    crypto.getRandomValues(buf)
    v = buf[0]
  } while (v >= limit)
  return v % max
}

// ── 骰子 ──
const DIE_TYPES = [4, 6, 8, 10, 12, 20, 100] as const

export function DiceRollerClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('dice-roller', locale, key, fb)
  const [sides, setSides] = useState<number>(6)
  const [count, setCount] = useState('2')
  const [rolls, setRolls] = useState<number[]>([])
  const [history, setHistory] = useState<string[]>([])

  const roll = useCallback(() => {
    const n = Math.min(Math.max(Math.round(Number(count) || 1), 1), 20)
    const out = Array.from({ length: n }, () => randInt(sides) + 1)
    setRolls(out)
    setHistory((h) => [`${n}d${sides}: ${out.join(' + ')} = ${out.reduce((a, b) => a + b, 0)}`, ...h].slice(0, 6))
  }, [sides, count])

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {DIE_TYPES.map((d) => (
          <button key={d} type="button" onClick={() => setSides(d)} aria-pressed={sides === d}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              sides === d ? 'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500 dark:bg-brand-950/40 dark:text-brand-300' : ''
            }`}
            style={sides === d ? undefined : { borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}>
            d{d}
          </button>
        ))}
        <div className="w-24">
          <CalculatorField id="dr-count" label={L('countLabel', '# dice')} value={count} onChange={setCount} placeholder="2" />
        </div>
      </div>

      <button type="button" onClick={roll}
        className="btn btn-primary w-full rounded-xl py-4 text-lg font-bold">
        🎲 {L('rollBtn', `Roll ${count || 1}× d${sides}`)}
      </button>

      {rolls.length > 0 && (
        <div role="status" aria-live="polite" className="flex flex-wrap items-center justify-center gap-3">
          {rolls.map((r, i) => (
            <span key={`${i}-${r}`} className="flex h-16 w-16 items-center justify-center rounded-xl border-2 text-2xl font-bold shadow-sm"
              style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}>
              {r}
            </span>
          ))}
          <span className="ml-2 text-xl font-semibold tabular-nums" style={{ color: 'rgb(var(--text-muted))' }}>
            = {rolls.reduce((a, b) => a + b, 0)}
          </span>
        </div>
      )}

      {history.length > 0 && (
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>{L('history', 'Recent rolls')}</span>
            <button type="button" onClick={() => setHistory([])} className="text-xs text-slate-400 hover:text-red-500 dark:text-slate-500">{L('clear', 'Clear')}</button>
          </div>
          <ul className="overflow-hidden rounded-lg border font-mono text-xs" style={{ borderColor: 'rgb(var(--border))' }}>
            {history.map((h, i) => (
              <li key={i} className="border-b px-3 py-1.5 last:border-b-0" style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-subtle))' }}>{h}</li>
            ))}
          </ul>
        </div>
      )}
      <CalculatorNote>{L('note', '🎲 Rolls come from crypto-grade randomness with rejection sampling — no modulo bias, no predictable sequences. Chipped physical dice cannot say the same.')}</CalculatorNote>
    </div>
  )
}

// ── 抛硬币 ──
export function CoinFlipClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('coin-flip', locale, key, fb)
  const [result, setResult] = useState<'H' | 'T' | null>(null)
  const [tally, setTally] = useState({ H: 0, T: 0 })
  const [flipping, setFlipping] = useState(false)

  const flip = useCallback(() => {
    setFlipping(true)
    setTimeout(() => {
      const r = randInt(2) === 0 ? 'H' : 'T'
      setResult(r)
      setTally((t) => ({ ...t, [r]: t[r] + 1 }))
      setFlipping(false)
    }, 450)
  }, [])

  const total = tally.H + tally.T

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <button type="button" onClick={flip}
          className={`flex h-44 w-44 items-center justify-center rounded-full border-8 text-6xl font-black shadow-lg transition-transform duration-300 ${
            flipping ? '[transform:rotateY(180deg)_scale(0.9)]' : 'hover:scale-105'
          }`}
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}>
          {flipping ? '…' : result === null ? L('tapFlip', 'FLIP') : result === 'H' ? L('heads', 'HEADS') : L('tails', 'TAILS')}
        </button>
      </div>

      <div className="flex justify-center">
        <button type="button" onClick={flip} className="btn btn-primary px-8">{L('flipBtn', 'Flip coin')}</button>
      </div>

      {total > 0 && (
        <div role="status" aria-live="polite" className="grid grid-cols-3 gap-3 sm:max-w-md sm:mx-auto">
          <ResultCard label={L('headsN', 'Heads')} value={String(tally.H)} />
          <ResultCard label={L('tailsN', 'Tails')} value={String(tally.T)} />
          <ResultCard label={L('headsShare', 'Heads %')} value={`${fmtNum((tally.H / total) * 100, 1)}%`} highlight />
        </div>
      )}
      <CalculatorNote>{L('note', '🪙 Each flip draws from crypto-grade entropy — statistically indistinguishable from a fair coin over any session length. The running percentage converges to 50% as expected.')}</CalculatorNote>
    </div>
  )
}

// ── 转盘选择器 ──
const WHEEL_COLORS = ['#2563eb', '#7c3aed', '#db2777', '#ea580c', '#16a34a', '#0891b2', '#ca8a04', '#dc2626', '#4f46e5', '#059669', '#9333ea', '#e11d48']

export function WheelSpinnerClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('wheel-spinner', locale, key, fb)
  const sample = getCalculatorSample('wheel-spinner')
  const [itemsText, setItemsText] = useState(sample?.items ?? '')
  const [angle, setAngle] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [winner, setWinner] = useState('')
  const spinRef = useRef(0)

  const items = useMemo(
    () => itemsText.split('\n').map((x) => x.trim()).filter(Boolean).slice(0, 12),
    [itemsText],
  )

  const spin = useCallback(() => {
    if (items.length < 2 || spinning) return
    setSpinning(true)
    setWinner('')
    const pick = randInt(items.length)
    // 目标角度:让选中扇区停在指针(顶部)。每圈 +5 转保证动画感
    const seg = 360 / items.length
    const target = 360 * 5 + (360 - (pick * seg + seg / 2))
    spinRef.current += target - (spinRef.current % 360) + 360
    setAngle(spinRef.current)
    setTimeout(() => {
      setWinner(items[pick])
      setSpinning(false)
    }, 4200)
  }, [items, spinning])

  const gradient = items.length > 0
    ? `conic-gradient(${items.map((it, i) => `${WHEEL_COLORS[i % WHEEL_COLORS.length]} ${(i * 360) / items.length}deg ${((i + 1) * 360) / items.length}deg`).join(', ')})`
    : 'conic-gradient(rgb(var(--bg-subtle)) 0deg 360deg)'

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr]">
        {/* 转盘 */}
        <div className="mx-auto">
          <div className="relative h-64 w-64">
            <div aria-hidden="true" className="absolute left-1/2 top-[-8px] z-10 -translate-x-1/2 text-2xl" style={{ color: 'rgb(var(--text))' }}>▼</div>
            <div
              role="img"
              aria-label={L('wheelAlt', 'Prize wheel')}
              className="h-full w-full rounded-full border-8 shadow-lg transition-transform duration-[4000ms] motion-reduce:transition-none"
              style={{
                background: gradient,
                borderColor: 'rgb(var(--bg-card))',
                transform: `rotate(${angle}deg)`,
                transitionTimingFunction: 'cubic-bezier(0.15, 0.9, 0.25, 1)',
              }}
            />
            <button
              type="button" onClick={spin} disabled={items.length < 2 || spinning}
              className="absolute left-1/2 top-1/2 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-sm font-bold text-slate-800 shadow-lg transition hover:scale-110 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-800 dark:text-slate-100"
            >
              SPIN
            </button>
          </div>
          {winner && !spinning && (
            <div
              role="status"
              aria-live="polite"
              className="mt-4 rounded-xl border px-6 py-4 text-center"
              style={{ borderColor: 'rgb(var(--primary) / 0.3)', backgroundColor: 'rgb(var(--primary) / 0.06)' }}
            >
              <div className="text-[10px] font-medium uppercase tracking-widest" style={{ color: 'rgb(var(--text-faint))' }}>
                {L('winnerLabel', 'Winner')}
              </div>
              <div className="mt-1 text-2xl font-bold" style={{ color: 'rgb(var(--primary))' }}>
                🎉 {winner}
              </div>
            </div>
          )}
        </div>

        {/* 选项输入 */}
        <div>
          <label htmlFor="ws-items" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('itemsLabel', 'Options — one per line (max 12)')}</label>
          <textarea id="ws-items" value={itemsText} onChange={(e) => setItemsText(e.target.value)} rows={10}
            placeholder={'Pizza\nSushi\nTacos\nBurgers'}
            className="w-full rounded-lg border p-4 text-sm outline-none transition focus:ring-2" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
          <p className="mt-1 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>{L('itemsHint', '{n} options on the wheel').replace('{n}', String(items.length))}</p>
        </div>
      </div>
      <CalculatorNote>{L('note', '🎡 The winning sector is drawn with crypto-grade randomness before the wheel animates to it — pretty motion on top of genuinely fair selection.')}</CalculatorNote>
    </div>
  )
}



// ── 摩斯电码 ──
const MORSE_MAP: Record<string, string> = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....',
  I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.',
  Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
  Y: '-.--', Z: '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--', "'": '.----.',
  '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
  ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
  '"': '.-..-.', '@': '.--.-.',
}

const REVERSE_MORSE: Record<string, string> = Object.fromEntries(Object.entries(MORSE_MAP).map(([k, v]) => [v, k]))

function encodeMorse(text: string): string {
  return text.toUpperCase().split('').map((ch) => (ch === ' ' ? '/' : MORSE_MAP[ch] ?? '')).filter(Boolean).join(' ')
}

function decodeMorse(morse: string): string {
  return morse.trim().split(/\s+/).map((tok) => (tok === '/' ? ' ' : REVERSE_MORSE[tok] ?? '?')).join('')
}

export function MorseCodeTranslatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('morse-code-translator', locale, key, fb)
  const sample = getCalculatorSample('morse-code-translator')
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')
  const [input, setInput] = useState(sample?.text ?? '')

  const output = useMemo(() => (mode === 'encode' ? encodeMorse(input) : decodeMorse(input)), [mode, input])

  // 音频播放:标准点=1 单位 @ 600Hz,划=3,符号间 1,字符间 3,词间 7
  const play = useCallback(() => {
    if (!output || mode !== 'encode') return
    try {
      const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!Ctx) return
      const ctx = new Ctx()
      const unit = 0.09
      let t = ctx.currentTime + 0.1
      for (const tok of output.split(' ')) {
        if (tok === '/') { t += unit * 4; continue }
        for (const sym of tok) {
          const dur = sym === '.' ? unit : unit * 3
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          osc.frequency.value = 600
          osc.connect(gain)
          gain.connect(ctx.destination)
          gain.gain.setValueAtTime(0.15, t)
          gain.gain.setValueAtTime(0, t + dur)
          osc.start(t)
          osc.stop(t + dur)
          t += dur + unit
        }
        t += unit * 2
      }
    } catch { /* audio unavailable */ }
  }, [output, mode])

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {([['encode', L('toMorse', 'Text → Morse')], ['decode', L('fromMorse', 'Morse → Text')]] as const).map(([m, label]) => (
          <button key={m} type="button" onClick={() => { setMode(m); setInput('') }} aria-pressed={mode === m}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              mode === m ? 'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500 dark:bg-brand-950/40 dark:text-brand-300' : ''
            }`}
            style={mode === m ? undefined : { borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}>
            {label}
          </button>
        ))}
      </div>

      <div>
        <label htmlFor="mc-in" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {mode === 'encode' ? L('inText', 'Your text') : L('inMorse', 'Morse code (. and -, space between letters, / between words)')}
        </label>
        <textarea id="mc-in" value={input} onChange={(e) => setInput(mode === 'encode' ? e.target.value : e.target.value.replace(/[^.\-/ ]/g, ''))}
          rows={4} spellCheck={false}
          placeholder={mode === 'encode' ? 'SOS we are sinking' : '... --- ...'}
          className="w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2"
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
      </div>

      {output && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('resultLabel', 'Result')}</span>
            <div className="flex gap-2">
              {mode === 'encode' && (
                <button type="button" onClick={play} className="btn btn-secondary">▶ {L('play', 'Play audio')}</button>
              )}
              <CopyButton value={output} />
            </div>
          </div>
          <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-sm whitespace-pre-wrap" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{output}</pre>
        </div>
      )}
      <CalculatorNote>{L('note', '📡 International Morse standard: dot = 1 unit, dash = 3, intra-character gap = 1, letter gap = 3, word gap = 7. Audio plays at 600 Hz with exactly that timing.')}</CalculatorNote>
    </div>
  )
}

// ── 打字速度测试 ──
const PROMPTS = [
  'The quick brown fox jumps over the lazy dog while the cat watches from the warm windowsill without much interest at all.',
  'Programming is the art of telling another human what one wants the computer to do before translating it into symbols it obeys.',
  'She sold seashells by the seashore, but the shells she sold were surely not the same as the shells others sought that day.',
  'A journey of a thousand miles begins with a single step, and so does every essay, program, and half-finished side project.',
  'Coffee tastes best in the quiet hour before the city wakes, when the machines hum softly and nobody expects a reply yet.',
]

interface TypeStats { wpmGross: number; wpmNet: number; accuracy: number; elapsed: number }

export function TypingSpeedTestClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('typing-speed-test', locale, key, fb)
  const [promptIdx, setPromptIdx] = useState(() => randInt(PROMPTS.length))
  const prompt = PROMPTS[promptIdx]
  const [typed, setTyped] = useState('')
  const [startedAt, setStartedAt] = useState<number | null>(null)
  const [done, setDone] = useState<TypeStats | null>(null)

  useEffect(() => {
    if (startedAt === null || done) return
    if (typed.length >= prompt.length) {
      const elapsedMin = ((Date.now() - startedAt) / 60000)
      const words = prompt.length / 5 // 标准换算:5 字符 = 1 词
      const errors = [...typed].filter((c, i) => c !== prompt[i]).length
      setDone({
        wpmGross: Math.round(words / elapsedMin),
        wpmNet: Math.max(0, Math.round((words - errors) / elapsedMin)),
        accuracy: Math.round(((prompt.length - errors) / prompt.length) * 100),
        elapsed: Math.round((Date.now() - startedAt) / 1000),
      })
    }
  }, [typed, startedAt, prompt, done])

  const reset = () => {
    setPromptIdx(randInt(PROMPTS.length))
    setTyped('')
    setStartedAt(null)
    setDone(null)
  }

  const onChange = (v: string) => {
    if (done) return
    if (!startedAt && v.length > 0) setStartedAt(Date.now())
    setTyped(v.slice(0, prompt.length))
  }

  return (
    <div className="space-y-5">
      <div className="rounded-lg border p-4 font-mono text-base leading-relaxed" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}>
        {[...prompt].map((ch, i) => {
          const state = i < typed.length ? (typed[i] === ch ? 'ok' : 'bad') : 'pending'
          return (
            <span key={i}
              className={state === 'ok' ? 'text-green-600 dark:text-green-400' : state === 'bad' ? 'bg-red-200 text-red-800 line-through dark:bg-red-900/60 dark:text-red-200' : ''}
              style={state === 'pending' ? { color: 'rgb(var(--text-faint))' } : undefined}>
              {ch}
            </span>
          )
        })}
      </div>
      <div>
        <label htmlFor="ts-in" className="sr-only">{L('typeHere', 'Type here')}</label>
        <textarea id="ts-in" value={typed} onChange={(e) => onChange(e.target.value)} rows={3}
          placeholder={L('startTyping', 'Start typing here — the clock starts on your first keystroke')}
          autoFocus
          className="w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2"
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
      </div>

      {done ? (
        <div role="status" aria-live="polite" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <ResultCard label={L('netWpm', 'Net WPM')} highlight value={String(done.wpmNet)} sublabel={L('netExplain', 'errors subtracted')} />
          <ResultCard label={L('grossWpm', 'Gross WPM')} value={String(done.wpmGross)} />
          <ResultCard label={L('accuracy', 'Accuracy')} value={`${done.accuracy}%`} />
          <ResultCard label={L('timeSec', 'Time')} value={`${done.elapsed}s`} />
        </div>
      ) : (
        <div className="flex items-center justify-between text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
          <span>{L('progress', '{n}/{m} characters').replace('{n}', String(typed.length)).replace('{m}', String(prompt.length))}</span>
          <button type="button" onClick={reset} className="hover:text-red-500">{L('reset', 'Reset')}</button>
        </div>
      )}
      {done && (
        <button type="button" onClick={reset} className="btn btn-primary">{L('tryAgain', 'Try another sentence')}</button>
      )}
      <CalculatorNote>{L('note', '⌨️ Net WPM follows the standard formula: characters ÷ 5 per minute minus errors. Average adults type 38-42 net; professional transcriptionists exceed 80.')}</CalculatorNote>
    </div>
  )
}

// ── 随机分组 ──
function shuffled<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function RandomTeamGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('random-team-generator', locale, key, fb)
  const [namesText, setNamesText] = useState('')
  const [teamCount, setTeamCount] = useState('2')
  const [teams, setTeams] = useState<string[][]>([])

  const names = useMemo(() => namesText.split(/\r?\n/).map((x) => x.trim()).filter(Boolean), [namesText])

  const generate = () => {
    const k = Math.min(Math.max(Math.round(Number(teamCount) || 2), 2), 10)
    const pool = shuffled(names)
    const out: string[][] = Array.from({ length: k }, () => [])
    // 均衡分配:按序轮流放入,保证各队差 ≤1
    pool.forEach((name, i) => out[i % k].push(name))
    setTeams(out)
  }

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="rt-names" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('namesLabel', 'Names — one per line')}</label>
        <textarea id="rt-names" value={namesText} onChange={(e) => setNamesText(e.target.value)} rows={8}
          placeholder={'Ada\nGrace\nLinus\nMargaret\nKen\nBarbara'}
          className="w-full rounded-lg border p-4 text-sm outline-none transition focus:ring-2"
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
        {names.length > 0 && <p className="mt-1 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>{L('nNames', '{n} people entered').replace('{n}', String(names.length))}</p>}
      </div>

      <div className="flex flex-wrap items-end gap-3">
        <div className="w-36">
          <CalculatorField id="rt-count" label={L('teamsLabel', 'Number of teams')} value={teamCount} onChange={setTeamCount} placeholder="2" />
        </div>
        <button type="button" onClick={generate} disabled={names.length < 2}
          className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50">
          🎯 {L('generate', 'Generate teams')}
        </button>
        {teams.length > 0 && (
          <button type="button" onClick={generate} className="btn btn-secondary">{L('reshuffle', 'Reshuffle')}</button>
        )}
      </div>

      {teams.length > 0 && (
        <div role="status" aria-live="polite" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team, i) => (
            <div key={i} className="rounded-xl border p-4" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('teamN', 'Team {n}').replace('{n}', String(i + 1))}
              </h3>
              <ul className="space-y-1 text-sm" style={{ color: 'rgb(var(--text))' }}>
                {team.map((n) => <li key={n}>• {n}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
      <CalculatorNote>{L('note', '👥 Fisher-Yates shuffle with crypto-grade randomness, then round-robin dealing keeps team sizes within one of each other. First-entered names get no advantage.')}</CalculatorNote>
    </div>
  )
}

// ── 密码熵检查 ──
const COMMON_PATTERNS: [RegExp, string][] = [
  [/^(?:password|passwort|contrasena|motdepasse)/i, 'starts with "password"'],
  [/(?:123|abc|qwe|asd)/i, 'keyboard sequence'],
  [/^(.{0,3})\1+\1+$/i, 'single repeated character run'],
]

export function PasswordEntropyCheckerClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('password-entropy-checker', locale, key, fb)
  const [pw, setPw] = useState('')

  const stats = useMemo(() => {
    if (!pw) return null
    let pool = 0
    if (/[a-z]/.test(pw)) pool += 26
    if (/[A-Z]/.test(pw)) pool += 26
    if (/\d/.test(pw)) pool += 10
    if (/[^a-zA-Z0-9]/.test(pw)) pool += 33
    let bits = pw.length * Math.log2(pool || 1)
    const penalties: string[] = []
    // 重复字符占比惩罚
    const uniqRatio = new Set(pw).size / pw.length
    if (uniqRatio < 0.6) { bits *= uniqRatio / 0.6 * 0.8; penalties.push(L('penRepeat', 'many repeated characters')) }
    for (const [re, label] of COMMON_PATTERNS) {
      if (re.test(pw)) { bits *= 0.5; penalties.push(label) }
    }
    // 熵→破解时间:离线攻击 1e11 guesses/s
    const seconds = Math.pow(2, bits) / 1e11 / 2
    const crackTime =
      seconds < 1 ? L('instant', 'instantly') :
      seconds < 3600 ? L('minutes', '< 1 hour') :
      seconds < 86400 * 365 ? `${fmtNum(seconds / 86400, 0)} days` :
      seconds < 86400 * 365 * 1e6 ? `${fmtNum(seconds / 86400 / 365, 0)} years` :
      seconds < 86400 * 365 * 1e12 ? `${fmtNum(seconds / 86400 / 365 / 1e6, 0)} million years` :
      L('heatDeath', 'beyond cosmic timescales')
    return { bits: Math.round(bits), pool, crackTime, penalties }
  }, [pw])

  return (
    <div className="space-y-5">
      <CalculatorField id="pe-pw" type="text" label={L('pwLabel', 'Password to analyze (never leaves this page)')} value={pw} onChange={setPw} placeholder="correct horse battery staple" />

      {stats && (
        <div role="status" aria-live="polite" className="space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ResultCard label={L('entropyBits', 'Entropy')} highlight value={`${stats.bits} bits`} />
            <ResultCard label={L('crackEstimate', 'Offline crack estimate')} value={stats.crackTime} sublabel={L('crackAssume', 'at 100 billion guesses/sec')} />
          </div>
          {stats.penalties.length > 0 && (
            <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-300">
              ⚠️ {L('penalties', 'Penalties applied: {list}').replace('{list}', stats.penalties.join(', '))}
            </p>
          )}
          {stats.bits >= 75 && (
            <p className="rounded-lg border-2 border-green-200 bg-green-50 p-3 text-sm text-green-700 dark:border-green-800/60 dark:bg-green-950/30 dark:text-green-300">
              ✓ {L('strongVerdict', 'Strong: above the 75-bit threshold security teams recommend for high-value accounts.')}
            </p>
          )}
        </div>
      )}
      <CalculatorNote>{L('note', '🔐 Baseline = length × log2(charset pool): "correct horse battery staple" beats "P@ssw0rd!" because length dominates. Penalties model real crackers, which try dictionary words and patterns long before exhausting the space. Analysis is 100% offline.')}</CalculatorNote>
    </div>
  )
}
