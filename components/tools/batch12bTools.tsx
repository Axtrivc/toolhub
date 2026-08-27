'use client'

import { useEffect, useMemo, useState } from 'react'
import { CalculatorField, CalculatorNote, ResultCard } from '../calculator/CalculatorField'
import { ResultActions } from '../ResultActions'
import { CopyButton } from '@/components/CopyButton'
import { fmtNum } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * 第十二批续:LogFilter / AsciiTable / ScreenTime / ReadingLevel / HMAC
 * (与 batch12Tools.tsx 同批;拆文件避免单文件过长)
 */

const selVars = { borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }

// ── 日志过滤 ──
const LOG_LEVELS = ['ERROR', 'WARN', 'INFO', 'DEBUG', 'TRACE'] as const

export function LogFilterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('log-filter-tool', locale, key, fb)
  const [logs, setLogs] = useState('')
  const [include, setInclude] = useState('')
  const [exclude, setExclude] = useState('')
  const [level, setLevel] = useState<string>('')
  const [useRegex, setUseRegex] = useState(false)
  const [regexError, setRegexError] = useState(false)

  const result = useMemo(() => {
    const lines = logs.split(/\r?\n/)
    if (!include.trim() && !exclude.trim() && !level) {
      return { out: logs, matched: lines.filter((l) => l.trim()).length, total: lines.filter((l) => l.trim()).length }
    }
    let re: RegExp | null = null
    let reEx: RegExp | null = null
    try {
      if (useRegex && include.trim()) re = new RegExp(include, 'i')
      if (useRegex && exclude.trim()) reEx = new RegExp(exclude, 'i')
      setRegexError(false)
    } catch {
      setRegexError(true)
      return { out: '', matched: 0, total: lines.length }
    }
    const inc = include.trim().toLowerCase()
    const exc = exclude.trim().toLowerCase()
    const filtered = lines.filter((line) => {
      if (level && !new RegExp(`\\b${level}\\b`, 'i').test(line)) return false
      if (inc || re) {
        const hit = re ? re.test(line) : line.toLowerCase().includes(inc)
        if (!hit) return false
      }
      if (exc || reEx) {
        const bad = reEx ? reEx.test(line) : line.toLowerCase().includes(exc)
        if (bad) return false
      }
      return true
    })
    return { out: filtered.join('\n'), matched: filtered.length, total: lines.filter((l) => l.trim()).length }
  }, [logs, include, exclude, level, useRegex])

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="lf-in" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Paste your logs')}</label>
        <textarea id="lf-in" value={logs} onChange={(e) => setLogs(e.target.value)} rows={10} spellCheck={false}
          placeholder={'2025-08-25 10:14:02 INFO  Request served in 42ms\n2025-08-25 10:14:05 ERROR DB timeout on /api/users'}
          className="w-full rounded-lg border p-4 font-mono text-xs outline-none transition focus:ring-2"
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="lf-inc" type="text" label={L('includeLabel', 'Include (keyword or regex)')} value={include} onChange={setInclude} placeholder="error|timeout" />
        <CalculatorField id="lf-exc" type="text" label={L('excludeLabel', 'Exclude')} value={exclude} onChange={setExclude} placeholder="healthcheck" />
        <div>
          <label htmlFor="lf-level" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('levelLabel', 'Log level')}</label>
          <select id="lf-level" value={level} onChange={(e) => setLevel(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={selVars}>
            <option value="">{L('allLevels', 'All levels')}</option>
            {LOG_LEVELS.map((lv) => <option key={lv} value={lv}>{lv}</option>)}
          </select>
        </div>
        <label className="flex items-end pb-3">
          <input type="checkbox" checked={useRegex} onChange={(e) => setUseRegex(e.target.checked)}
            className="mr-2 h-4 w-4 rounded border-slate-300 text-brand-600 dark:border-slate-600" />
          <span className="text-sm" style={{ color: 'rgb(var(--text-muted))' }}>{L('regexToggle', 'Treat patterns as regex')}</span>
        </label>
      </div>

      {regexError && (
        <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">
          ⚠️ {L('invalidRegex', 'Invalid regular expression')}
        </p>
      )}
      {logs && result.matched === 0 && !regexError && (
        <p className="text-sm" style={{ color: 'rgb(var(--text-faint))' }}>{L('noLines', 'No lines match the current filters.')}</p>
      )}
      {result.out && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('matchedN', '{m} of {t} lines').replace('{m}', String(result.matched)).replace('{t}', String(result.total))}
            </span>
            <CopyButton value={result.out} />
          </div>
          <pre className="max-h-96 overflow-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{result.out}</pre>
        </div>
      )}
      <CalculatorNote>{L('note', '🔒 Filtering runs entirely client-side — paste production logs without fear. Level match is word-boundary exact (WARN matches WARN, not WARNING).')}</CalculatorNote>
    </div>
  )
}

// ── ASCII 表 ──
interface AsciiRow { dec: number; hex: string; bin: string; oct: string; ch: string; name?: string }

function buildAsciiRows(): AsciiRow[] {
  const ctrlNames = ['NUL','SOH','STX','ETX','EOT','ENQ','ACK','BEL','BS','HT','LF','VT','FF','CR','SO','SI','DLE','DC1','DC2','DC3','DC4','NAK','SYN','ETB','CAN','EM','SUB','ESC','FS','GS','RS','US']
  const rows: AsciiRow[] = []
  for (let i = 0; i < 128; i++) {
    rows.push({
      dec: i,
      hex: i.toString(16).toUpperCase().padStart(2, '0'),
      bin: i.toString(2).padStart(8, '0'),
      oct: i.toString(8).padStart(3, '0'),
      ch: i === 32 ? '(space)' : i < 32 ? '' : String.fromCharCode(i),
      name: i < 32 ? ctrlNames[i] : undefined,
    })
  }
  return rows
}
const ASCII_ROWS = buildAsciiRows()

export function AsciiTableClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('ascii-table', locale, key, fb)
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()

  const rows = useMemo(() => {
    if (!query) return ASCII_ROWS
    return ASCII_ROWS.filter((r) =>
      r.name?.toLowerCase().includes(query) ||
      r.ch.toLowerCase().includes(query) ||
      String(r.dec).startsWith(query) ||
      r.hex.toLowerCase().startsWith(query.replace(/^0x/, '')) ||
      r.bin.startsWith(query))
  }, [query])

  return (
    <div className="space-y-4">
      <input
        type="search" value={q} onChange={(e) => setQ(e.target.value)}
        placeholder={L('searchPlaceholder', 'Search char ("A"), decimal (65), hex (41), or binary…')}
        aria-label={L('searchPlaceholder', 'Search characters or codes')}
        className="w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2"
        style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
      />
      <div className="max-h-[28rem] overflow-auto rounded-lg border border-border bg-card">
        <table className="w-full text-left font-mono text-xs">
          <thead className="sticky top-0">
            <tr style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
              {['Dec', 'Hex', 'Oct', 'Bin', 'Char'].map((h) => (
                <th key={h} className="border-b px-3 py-2 font-medium" style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.dec} className="border-b last:border-b-0 hover:bg-slate-100 dark:hover:bg-slate-800" style={{ borderColor: 'rgb(var(--border))' }}>
                <td className="px-3 py-1.5" style={{ color: 'rgb(var(--text))' }}>{r.dec}</td>
                <td className="px-3 py-1.5" style={{ color: 'rgb(var(--text))' }}>0x{r.hex}</td>
                <td className="px-3 py-1.5" style={{ color: 'rgb(var(--text-faint))' }}>{r.oct}</td>
                <td className="px-3 py-1.5" style={{ color: 'rgb(var(--text-faint))' }}>{r.bin}</td>
                <td className="px-3 py-1.5" style={{ color: 'rgb(var(--text))' }}>{r.name ? `␃ ${r.name}` : r.ch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CalculatorNote>{L('note', '🔢 ASCII covers codes 0-127. Control characters (0-31) are named but unprintable; code 127 is DEL. Everything beyond is extended encodings or Unicode.')}</CalculatorNote>
    </div>
  )
}

// ── 屏幕时间计算器 ──
export function ScreenTimeCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('screen-time-calculator', locale, key, fb)
  const [hours, setHours] = useState('4')
  const [age, setAge] = useState('30')

  const stats = useMemo(() => {
    const h = Number(hours)
    const a = Number(age)
    if (!Number.isFinite(h) || h <= 0 || h > 24 || !Number.isFinite(a) || a <= 0 || a > 120) return null
    const perYearDays = (h * 365) / 24
    const toLife = 80 - Math.min(a, 79)
    // 清醒年:每天 h 小时占 16 小时清醒时间的 h/16,乘剩余年数
    const yearsAwake = (h / 16) * toLife
    const reclaimOne = (1 / 16) * toLife
    return { perYearDays, yearsAwake, reclaimOne, toLife, dailyPct: (h / 16) * 100 }
  }, [hours, age])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="st-hours" label={L('hoursLabel', 'Screen hours per day')} value={hours} onChange={setHours} placeholder="4" />
        <CalculatorField id="st-age" label={L('ageLabel', 'Your age')} value={age} onChange={setAge} placeholder="30" />
      </div>

      {stats ? (
        <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ResultCard label={L('perYear', 'Per year that is…')} highlight value={`${fmtNum(stats.perYearDays, 0)} ${L('fullDays', 'full days')}`} />
          <ResultCard label={L('dailyShare', 'Share of waking hours')} value={`${fmtNum(stats.dailyPct, 0)}%`} />
          <ResultCard
            label={L('restOfLife', 'Over the next {n} years').replace('{n}', String(stats.toLife))}
            value={`${fmtNum(stats.yearsAwake, 1)} ${L('yearsAwake', 'years awake-time')}`}
          />
          <ResultCard
            label={L('reclaim', 'Reclaiming just 1 h/day for {n} years').replace('{n}', String(stats.toLife))}
            value={`+${fmtNum(stats.reclaimOne, 1)} ${L('yearsBack', 'years back')}`}
          />
        </div>
      ) : (
        <p className="text-sm" style={{ color: 'rgb(var(--text-faint))' }}>{L('invalid', 'Enter valid hours (0-24) and age')}</p>
      )}

      <ResultActions
        summary={stats ? `${hours} h/day → ${fmtNum(stats.perYearDays, 0)} full days/year` : ''}
        filename="screen-time.txt"
        downloadContent={stats ? `${hours} h/day → ${fmtNum(stats.perYearDays, 0)} full days/year; ~${fmtNum(stats.yearsAwake, 1)} waking years over the next ${stats.toLife} years` : ''}
        copyLabel={L('copySummary', 'Copy Summary')}
      />
      <CalculatorNote>{L('note', '📱 Averages assume 16 waking hours/day. US adults average about 4.5-5 hours on mobile alone; adding TV pushes total screen time past 7 hours.')}</CalculatorNote>
    </div>
  )
}

// ── 阅读级别(Flesch)──
function countSyllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, '')
  if (!w) return 0
  if (w.length <= 3) return 1
  const trimmed = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '')
  const groups = trimmed.match(/[aeiouy]{1,2}/g)
  return Math.max(1, groups ? groups.length : 1)
}

export function ReadingLevelCheckerClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('reading-level-checker', locale, key, fb)
  const [text, setText] = useState('')

  const stats = useMemo(() => {
    const sentences = text.split(/[.!?]+(\s|$)/).filter((s) => s && s.trim())
    const words = text.split(/\s+/).filter((w) => /[a-zA-Z]/.test(w))
    if (words.length < 3 || sentences.length === 0) return null
    const syllables = words.reduce((sum, w) => sum + countSyllables(w), 0)
    const W = words.length
    const S = sentences.length
    const fleschEase = 206.835 - 1.015 * (W / S) - 84.6 * (syllables / W)
    const fkGrade = 0.39 * (W / S) + 11.8 * (syllables / W) - 15.59
    const longest = sentences
      .map((s) => ({ s: s.trim(), n: s.split(/\s+/).filter(Boolean).length }))
      .sort((a, b) => b.n - a.n)[0]
    return {
      ease: Math.round(fleschEase * 10) / 10,
      grade: Math.max(0, Math.round(fkGrade * 10) / 10),
      words: W,
      sentences: S,
      avgWords: Math.round((W / S) * 10) / 10,
      hardestLen: longest.n,
    }
  }, [text])

  const easeLabel =
    stats == null ? '' :
    stats.ease >= 90 ? L('easeVeryEasy', 'Very easy — 5th grade') :
    stats.ease >= 80 ? L('easeEasy', 'Easy — 6th grade') :
    stats.ease >= 70 ? L('easeFairlyEasy', 'Fairly easy — 7th grade') :
    stats.ease >= 60 ? L('easeStandard', 'Standard — 8th-9th grade') :
    stats.ease >= 50 ? L('easeFairlyHard', 'Fairly difficult — 10th-12th grade') :
    stats.ease >= 30 ? L('easeDifficult', 'Difficult — college level') :
    L('easeVeryHard', 'Very confusing — graduate level')

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="rl-text" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Paste your text')}</label>
        <textarea id="rl-text" value={text} onChange={(e) => setText(e.target.value)} rows={8}
          placeholder={L('placeholder', 'Paste at least three sentences for meaningful scores…')}
          className="w-full rounded-lg border p-4 text-sm outline-none transition focus:ring-2"
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
      </div>

      {stats && (
        <>
          <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ResultCard label={L('fleschEase', 'Flesch reading ease')} highlight value={`${stats.ease} · ${easeLabel}`} />
            <ResultCard label={L('fkGrade', 'Flesch-Kincaid grade level')} value={`${stats.grade}`} />
            <ResultCard label={L('wordsSentences', 'Words / sentences')} value={`${stats.words} / ${stats.sentences}`} />
            <ResultCard label={L('avgSentenceLen', 'Avg sentence length')} value={`${stats.avgWords} ${L('wordsUnit', 'words')}`} />
          </div>
          {stats.hardestLen >= 25 && (
            <p className="rounded-lg border p-3 text-xs" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-muted))' }}>
              ✂️ {L('longestSentenceHint', 'Your longest sentence runs {n} words — consider splitting it.').replace('{n}', String(stats.hardestLen))}
            </p>
          )}
        </>
      )}
      <CalculatorNote>{L('note', '📖 Formulas run fully offline: Flesch ease = 206.835 − 1.015 × words/sentence − 84.6 × syllables/word. General web copy targets 60-70; legal and academic text legitimately scores lower.')}</CalculatorNote>
    </div>
  )
}

// ── HMAC(SHA-256/384/512 via WebCrypto)──
function bufToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('')
}
function bufToB64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf)
  let bin = ''
  bytes.forEach((b) => { bin += String.fromCharCode(b) })
  return btoa(bin)
}

export function HmacGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('hmac-generator', locale, key, fb)
  const [message, setMessage] = useState('')
  const [secret, setSecret] = useState('')
  const [algo, setAlgo] = useState<'SHA-256' | 'SHA-384' | 'SHA-512'>('SHA-256')
  const [hex, setHex] = useState('')
  const [b64, setB64] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    const compute = async () => {
      if (!crypto?.subtle) {
        setError(L('insecureContext', 'WebCrypto requires HTTPS or localhost'))
        return
      }
      if (!message || !secret) { setHex(''); setB64(''); setError(''); return }
      try {
        const enc = new TextEncoder()
        const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: algo }, false, ['sign'])
        const sig = await crypto.subtle.sign('HMAC', key, enc.encode(message))
        if (!cancelled) { setHex(bufToHex(sig)); setB64(bufToB64(sig)); setError('') }
      } catch (e) {
        if (!cancelled) setError((e as Error).message)
      }
    }
    void compute()
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, secret, algo])

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="hm-msg" type="text" label={L('messageLabel', 'Message')} value={message} onChange={setMessage} placeholder="payload body…" />
        <CalculatorField id="hm-secret" type="text" label={L('secretLabel', 'Secret key')} value={secret} onChange={setSecret} placeholder="whsec_…" />
        <div>
          <label htmlFor="hm-algo" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('algoLabel', 'Algorithm')}</label>
          <select id="hm-algo" value={algo} onChange={(e) => setAlgo(e.target.value as typeof algo)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={selVars}>
            {(['SHA-256', 'SHA-384', 'SHA-512'] as const).map((a) => <option key={a} value={a}>HMAC-{a}</option>)}
          </select>
        </div>
      </div>

      {error && (
        <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">⚠️ {error}</p>
      )}
      {hex && (
        <div role="status" aria-live="polite" className="space-y-3">
          {/* 长 token(hex/base64):break-all + 缩小字号防撑破宽度;
              传 ReactNode 绕开 AnimatedNumber(哈希串做数字滚动无意义) */}
          <ResultCard
            label="HMAC (hex)"
            value={<span className="block break-all font-mono text-sm leading-relaxed sm:text-base">{hex}</span>}
            highlight
          />
          <ResultCard
            label="HMAC (base64)"
            value={<span className="block break-all font-mono text-sm leading-relaxed sm:text-base">{b64}</span>}
          />
        </div>
      )}
      {hex && (
        <div className="flex gap-3">
          <CopyButton value={hex} disabled={!hex} />
          <CopyButton value={b64} disabled={!b64} />
        </div>
      )}
      <CalculatorNote>{L('note', '🔐 HMAC ≠ hashing: the signature depends on both message and secret, so an attacker cannot forge it without the key. Computed with native WebCrypto — the secret never leaves this page.')}</CalculatorNote>
    </div>
  )
}
