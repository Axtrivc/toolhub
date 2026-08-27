'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { CalculatorField, CalculatorNote, ResultCard } from '../calculator/CalculatorField'
import { ResultActions } from '../ResultActions'
import { CopyButton } from '@/components/CopyButton'
import { fmtNum } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { describeCron } from '@/lib/cron'

/**
 * 第十三批:AI 时代开发者工具(自定义 client)
 * JWT Generator / Hash Comparator / Base Converter / Cron Generator
 * htaccess Redirects / Unicode Lookup / TOML to JSON
 */

const selVars = { borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }
const taVars = selVars

function b64url(bytes: Uint8Array): string {
  let bin = ''
  bytes.forEach((b) => { bin += String.fromCharCode(b) })
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

// ── JWT Generator ──
export function JwtGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('jwt-generator', locale, key, fb)
  // 首帧恒为静态内容(不带 iat):Date.now() 放在 useState 初始化里会随构建/加载
  // 时刻变化,静态导出的 SSR HTML 与客户端水合首帧不一致。挂载后且用户未编辑时,
  // 再补一个当下的 iat(与 makeTextTool 的 pristine 门控同款机制)。
  const [header, setHeader] = useState('{\n  "alg": "HS256",\n  "typ": "JWT"\n}')
  const [payload, setPayload] = useState('{\n  "sub": "user-123",\n  "name": "Ada"\n}')
  const payloadPristineRef = useRef(true)
  const [secret, setSecret] = useState('')
  const [token, setToken] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!payloadPristineRef.current) return
    setPayload('{\n  "sub": "user-123",\n  "name": "Ada",\n  "iat": ' + Math.floor(Date.now() / 1000) + '\n}')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let cancelled = false
    void (async () => {
      try {
        const h = JSON.parse(header) as { alg?: string }
        const alg = (h.alg ?? 'HS256').toUpperCase()
        if (!['HS256', 'HS384', 'HS512'].includes(alg)) throw new Error(L('algErr', 'Only HS256/384/512 are supported here'))
        if (!crypto?.subtle) throw new Error(L('insecure', 'WebCrypto requires HTTPS or localhost'))
        JSON.parse(payload)
        const enc = new TextEncoder()
        const signingInput =
          b64url(enc.encode(JSON.stringify(JSON.parse(header)))) + '.' + b64url(enc.encode(JSON.stringify(JSON.parse(payload))))
        if (!secret) { setToken(signingInput + '.'); setError(''); return }
        const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: `SHA-${alg.slice(2)}` }, false, ['sign'])
        const sig = await crypto.subtle.sign('HMAC', key, enc.encode(signingInput))
        if (!cancelled) { setToken(`${signingInput}.${b64url(new Uint8Array(sig))}`); setError('') }
      } catch (e) {
        if (!cancelled) { setError((e as Error).message); setToken('') }
      }
    })()
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [header, payload, secret])

  // D1 报错时机:JSON 输到一半(比如刚敲下 "{" 或删了半个字符串)不该立刻红字。
  // 校验本身保持即时(token 照常刷新),仅错误横幅延迟 ~700ms 显示;
  // 持续输入会不断重置计时器,停顿下来才出现,修正后或恢复合法立即消失。
  const [shownError, setShownError] = useState('')
  useEffect(() => {
    if (!error) { setShownError(''); return }
    const id = setTimeout(() => setShownError(error), 700)
    return () => clearTimeout(id)
  }, [error])

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="jw-h" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('headerLabel', 'Header (JSON)')}</label>
          <textarea id="jw-h" value={header} onChange={(e) => setHeader(e.target.value)} rows={5} spellCheck={false}
            className="w-full rounded-lg border p-3 font-mono text-xs outline-none transition focus:ring-2" style={taVars} />
        </div>
        <div>
          <label htmlFor="jw-p" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('payloadLabel', 'Payload (JSON)')}</label>
          <textarea id="jw-p" value={payload}
            onChange={(e) => { payloadPristineRef.current = false; setPayload(e.target.value) }} rows={5} spellCheck={false}
            className="w-full rounded-lg border p-3 font-mono text-xs outline-none transition focus:ring-2" style={taVars} />
        </div>
      </div>
      <CalculatorField id="jw-secret" type="text" label={L('secretLabel', 'Signing secret (leave empty for unsigned preview)')} value={secret} onChange={setSecret} placeholder="your-256-bit-secret" />

      {shownError && (
        <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">⚠️ {shownError}</p>
      )}
      {token && (
        <div role="status" aria-live="polite">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('tokenLabel', 'Signed token')}</span>
            <CopyButton value={token} />
          </div>
          <pre className="max-h-72 overflow-x-auto overflow-y-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap break-all" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{token}</pre>
        </div>
      )}
      <ResultActions summary={token} filename="token.jwt" downloadContent={token} mime="text/plain;charset=utf-8;" copyLabel={L('copyToken', 'Copy Token')} />
      <CalculatorNote>{L('note', '🔑 Test-only tool: HS* secrets live client-side here, never ship them in front-end code. For RS256/ES256 use a server-side library — asymmetric signing needs the private key kept private.')}</CalculatorNote>
    </div>
  )
}

// ── Hash Comparator ──
export function HashComparatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('hash-comparator', locale, key, fb)
  const [expected, setExpected] = useState('')
  const [actual, setActual] = useState('')

  const result = useMemo(() => {
    const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, '')
    const a = norm(expected)
    const b = norm(actual)
    if (!a || !b) return null
    if (a.length !== b.length) return { match: false, note: L('lenDiff', 'Different lengths — cannot be the same digest.') }
    // 恒时比较:异或累积所有字节差,避免提前返回造成的 timing 泄漏
    let diff = 0
    for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
    return { match: diff === 0, note: '' }
  }, [expected, actual])

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="hc-exp" type="text" label={L('expectedLabel', 'Expected hash (from publisher)')} value={expected} onChange={setExpected} placeholder="e3b0c442…" />
        <CalculatorField id="hc-act" type="text" label={L('actualLabel', 'Actual hash (you computed)')} value={actual} onChange={setActual} placeholder="e3b0c442…" />
      </div>

      {result && (
        <div role="status" aria-live="polite">
          <ResultCard label={L('verdict', 'Verdict')}
            highlight={result.match}
            error={!result.match}
            value={result.match ? `✓ ${L('match', 'MATCH — digests are identical')}` : `✗ ${L('mismatch', 'MISMATCH — do not trust this file')}`}
          />
          {!result.match && !result.note && (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-300">
              ⚠️ {L('mismatchWarn', 'A mismatch on a downloaded file can mean corruption or tampering. Re-download from the official source and compare again.')}
            </p>
          )}
        </div>
      )}
      <CalculatorNote>{L('note', '🛡️ Comparison is constant-time: every byte is XOR-checked even after a difference appears, so response timing reveals nothing about where hashes diverge. Case and spaces are normalized first.')}</CalculatorNote>
    </div>
  )
}

// ── Base Converter(任意进制含小数)──
const DIGITS = '0123456789abcdefghijklmnopqrstuvwxyz'.split('')

function parseInBase(s: string, base: number): number | null {
  const v = s.trim().toLowerCase()
  if (!v) return null
  const neg = v.startsWith('-')
  const body = neg ? v.slice(1) : v
  const [intPart, fracPart] = body.split('.')
  if (!intPart && !fracPart) return null
  let total = 0
  for (const ch of intPart) {
    const d = DIGITS.indexOf(ch)
    if (d < 0 || d >= base) return null
    total = total * base + d
  }
  let frac = 0
  let scale = 1 / base
  if (fracPart) {
    for (const ch of fracPart) {
      const d = DIGITS.indexOf(ch)
      if (d < 0 || d >= base) return null
      frac += d * scale
      scale /= base
    }
  }
  return (neg ? -1 : 1) * (total + frac)
}

function formatInBase(value: number, base: number, fracDigits = 10): string {
  if (!Number.isFinite(value)) return '—'
  const neg = value < 0
  const abs = Math.abs(value)
  let int = Math.floor(abs)
  let frac = abs - int
  let intStr = ''
  do {
    intStr = DIGITS[int % base] + intStr
    int = Math.floor(int / base)
  } while (int > 0)
  if (frac > 0) {
    let fracStr = ''
    let f = frac
    for (let i = 0; i < fracDigits && f > 1e-12; i++) {
      f *= base
      const d = Math.floor(f)
      fracStr += DIGITS[Math.min(d, base - 1)]
      f -= d
    }
    fracStr = fracStr.replace(/0+$/, '')
    return `${neg ? '-' : ''}${intStr}${fracStr ? '.' : ''}${fracStr}`
  }
  return `${neg ? '-' : ''}${intStr}`
}

export function BaseConverterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('base-converter', locale, key, fb)
  const [value, setValue] = useState('255')
  const [base, setBase] = useState(10)

  const parsed = useMemo(() => parseInBase(value, base), [value, base])
  const bases: Array<[number, string]> = [
    [2, L('binary', 'Binary (2)')],
    [8, 'Octal (8)'],
    [10, 'Decimal (10)'],
    [16, 'Hexadecimal (16)'],
    [32, 'Base32'],
    [36, 'Base36'],
  ]

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="bc-val" type="text" label={L('valueLabel', 'Value')} value={value} onChange={setValue} placeholder="255.5" />
        <div>
          <label htmlFor="bc-base" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inBase', 'Input base')}</label>
          <select id="bc-base" value={base} onChange={(e) => setBase(Number(e.target.value))}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={selVars}>
            {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36].map((b) => (
              <option key={b} value={b}>Base {b}{[2, 8, 10, 16].includes(b) ? ` (${L('common', 'common')})` : ''}</option>
            ))}
          </select>
        </div>
      </div>

      {parsed === null && value.trim() && (
        <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">
          ⚠️ “{value}” {L('invalidDigit', 'is not a valid number in base')} {base}
        </p>
      )}

      <div role="status" aria-live="polite" className="space-y-3">
        {bases.map(([b, label]) => (
          <div key={b} className="flex items-center gap-3 rounded-lg border p-3" style={{ borderColor: 'rgb(var(--border))' }}>
            <span className="w-40 shrink-0 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>{label}</span>
            <code className="min-w-0 flex-1 break-all font-mono text-sm" style={{ color: 'rgb(var(--text))' }}>
              {parsed === null ? '—' : formatInBase(parsed, b)}
            </code>
            {parsed !== null && <CopyButton value={formatInBase(parsed, b)} />}
          </div>
        ))}
      </div>
      <CalculatorNote>{L('note', '🔢 Digits above 9 are letters a-z (so base 36 uses 0-9 then a-z). Fractional conversions round at ~10 digits; binary fractions like 0.1 decimal repeat forever by nature.')}</CalculatorNote>
    </div>
  )
}

// ── Cron 表达式生成器 ──
export function CronGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('cron-expression-generator', locale, key, fb)
  const [preset, setPreset] = useState<'everyNMin' | 'hourly' | 'daily' | 'weekdays' | 'weekly' | 'custom'>('everyNMin')
  const [minutes, setMinutes] = useState(15)
  const [hour, setHour] = useState(3)
  const [minuteOfHour, setMinuteOfHour] = useState(0)
  const [weekday, setWeekday] = useState(1)

  const expr = useMemo(() => {
    switch (preset) {
      case 'everyNMin': return minutes === 1 ? '* * * * *' : `*/${minutes} * * * *`
      case 'hourly': return `${minuteOfHour} * * * *`
      case 'daily': return `${minuteOfHour} ${hour} * * *`
      case 'weekdays': return `${minuteOfHour} ${hour} * * 1-5`
      case 'weekly': return `${minuteOfHour} ${hour} * * ${weekday}`
      default: return '* * * * *'
    }
  }, [preset, minutes, hour, minuteOfHour, weekday])

  // 复用站内 cron 引擎做人类可读描述与未来触发时间
  const description = useMemo(() => {
    try {
      return describeCron(expr, locale)
    } catch {
      return expr
    }
  }, [expr, locale])

  const presets: Array<[typeof preset, string]> = [
    ['everyNMin', L('pEveryN', 'Every N minutes')],
    ['hourly', L('pHourly', 'Hourly')],
    ['daily', L('pDaily', 'Daily at time')],
    ['weekdays', L('pWeekdays', 'Weekdays at time')],
    ['weekly', L('pWeekly', 'Weekly on day')],
  ]
  // 星期下拉的可见文案走 tui 本地化(0=周日),表达式本身仍用数字字段
  const dayNames = Array.from({ length: 7 }, (_, i) => L(`day${i}`, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]))

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        {presets.map(([key, label]) => (
          <button key={key} type="button" onClick={() => setPreset(key)} aria-pressed={preset === key}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              preset === key || (preset === 'custom' && false) ? 'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500 dark:bg-brand-950/40 dark:text-brand-300' : ''
            }`}
            style={preset === key ? undefined : { borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}>
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        {preset === 'everyNMin' && (
          <CalculatorField id="cg-min" label={L('everyNLabel', 'Run every N minutes')} value={String(minutes)} onChange={(v) => setMinutes(Math.min(59, Math.max(1, Number(v) || 1)))} placeholder="15" />
        )}
        {(preset === 'daily' || preset === 'weekdays' || preset === 'weekly') && (
          <>
            <CalculatorField id="cg-hour" label={L('hourLabel', 'Hour (0-23)')} value={String(hour)} onChange={(v) => setHour(Math.min(23, Math.max(0, Number(v) || 0)))} placeholder="3" />
            <CalculatorField id="cg-mof" label={L('minuteLabel', 'Minute (0-59)')} value={String(minuteOfHour)} onChange={(v) => setMinuteOfHour(Math.min(59, Math.max(0, Number(v) || 0)))} placeholder="0" />
          </>
        )}
        {preset === 'weekly' && (
          <div>
            <label htmlFor="cg-dow" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('dayLabel', 'Day of week')}</label>
            <select id="cg-dow" value={weekday} onChange={(e) => setWeekday(Number(e.target.value))} className="w-full rounded-lg border p-3" style={selVars}>
              {dayNames.map((d, i) => <option key={d} value={i}>{d}</option>)}
            </select>
          </div>
        )}
      </div>

      <div role="status" aria-live="polite" className="space-y-3">
        <ResultCard label={L('expression', 'Cron expression')} highlight value={expr} />
        <ResultCard label={L('readable', 'Human-readable')} value={description} />
      </div>

      <div className="flex items-center gap-3">
        <CopyButton value={expr} />
        <ResultActions summary={`${expr}\n${description}`} filename="cron.txt" downloadContent={`${expr}\n${description}`} mime="text/plain;charset=utf-8;" copyLabel={L('copySummary', 'Copy Summary')} />
      </div>
      <CalculatorNote>{L('note', '⏰ Standard 5-field Vixie cron syntax — works in crontab, GitHub Actions (with minute granularity), Kubernetes CronJobs, and most schedulers. Quartz users: prepend a seconds field.')}</CalculatorNote>
    </div>
  )
}

// ── .htaccess 重定向生成 ──
// 行可中途删除,key 必须稳定唯一(index key 删行后受控输入焦点/内容错位)
interface RedirectPair { id: number; from: string; to: string }
let nextRedirectPairId = 1
const mkPair = (from: string, to: string): RedirectPair => ({ id: nextRedirectPairId++, from, to })

export function HtaccessRedirectGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('htaccess-redirect-generator', locale, key, fb)
  const [pairs, setPairs] = useState<RedirectPair[]>([mkPair('/old-page', '/new-page')])
  const [oldDomain, setOldDomain] = useState('https://old-example.com')
  const [newDomain, setNewDomain] = useState('https://new-example.com')
  const [forceHttps, setForceHttps] = useState(true)
  const [canonicalWww, setCanonicalWww] = useState<'none' | 'www' | 'nonwww'>('none')

  const output = useMemo(() => {
    const blocks: string[] = []
    blocks.push('RewriteEngine On')
    if (forceHttps) {
      blocks.push('\n# Force HTTPS\nRewriteCond %{HTTPS} off\nRewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]')
    }
    if (canonicalWww === 'www') {
      blocks.push('\n# Canonical: add www\nRewriteCond %{HTTP_HOST} !^www\\. [NC]\nRewriteRule ^(.*)$ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]')
    } else if (canonicalWww === 'nonwww') {
      blocks.push('\n# Canonical: remove www\nRewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]\nRewriteRule ^(.*)$ https://%1/$1 [L,R=301]')
    }
    if (oldDomain.trim() && newDomain.trim()) {
      blocks.push(`\n# Whole-domain migration\nRewriteCond %{HTTP_HOST} ^${oldDomain.replace(/^https?:\/\//, '').replace(/\./g, () => '\\.')} [NC]\nRewriteRule ^(.*)$ ${newDomain}/$1 [L,R=301]`)
    }
    const singles = pairs.filter((p) => p.from.trim() && p.to.trim())
      .map((p) => {
        const from = p.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/^\/+/, '/').replace(/\/+$/, '')
        return `# ${p.from} → ${p.to}\nRewriteRule ^${from.slice(1)}/?$ ${p.to} [R=301,L]`
      })
      .join('\n\n')
    if (singles) blocks.push(`\n# Individual redirects\n${singles}`)
    return blocks.join('\n')
  }, [pairs, oldDomain, newDomain, forceHttps, canonicalWww])

  const inpCls = 'w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2'

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <CalculatorField id="ht-old" type="text" label={L('oldDomainLabel', 'Old domain (optional)')} value={oldDomain} onChange={setOldDomain} placeholder="https://old.com" />
        <CalculatorField id="ht-new" type="text" label={L('newDomainLabel', 'New domain (optional)')} value={newDomain} onChange={setNewDomain} placeholder="https://new.com" />
      </div>

      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          <input type="checkbox" checked={forceHttps} onChange={(e) => setForceHttps(e.target.checked)} className="h-4 w-4 rounded border-slate-300 text-brand-600 dark:border-slate-600" />
          {L('httpsToggle', 'Force HTTPS')}
        </label>
        <label className="flex items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('wwwLabel', 'Canonical host:')}
          <select value={canonicalWww} onChange={(e) => setCanonicalWww(e.target.value as typeof canonicalWww)} aria-label={L('wwwLabel', 'Canonical host')}
            className="rounded border px-2 py-1" style={selVars}>
            <option value="none">{L('wwwNone', 'Leave as-is')}</option>
            <option value="www">{L('wwwAdd', 'Always www')}</option>
            <option value="nonwww">{L('wwwRemove', 'Never www')}</option>
          </select>
        </label>
      </div>

      <div className="space-y-3">
        <span className="block text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('pairsLabel', 'Individual page redirects')}</span>
        {pairs.map((p) => (
          <div key={p.id} className="grid grid-cols-[1fr_1fr_auto] gap-3">
            <input id={`ht-from-${p.id}`} aria-label={L('fromLabel', 'From path')} value={p.from} placeholder="/old-url"
              onChange={(e) => setPairs(pairs.map((x) => (x.id === p.id ? { ...x, from: e.target.value } : x)))} className={inpCls} style={selVars} />
            <input aria-label={L('toLabel', 'To path')} value={p.to} placeholder="/new-url"
              onChange={(e) => setPairs(pairs.map((x) => (x.id === p.id ? { ...x, to: e.target.value } : x)))} className={inpCls} style={selVars} />
            <button type="button"
              onClick={() => {
                // A-5 焦点流:删除行后焦点落到相邻行的首个输入框,避免丢到 body
                const idx = pairs.findIndex((x) => x.id === p.id)
                const neighbor = pairs[idx + 1] ?? pairs[idx - 1]
                setPairs(pairs.filter((x) => x.id !== p.id))
                if (neighbor) requestAnimationFrame(() => document.getElementById(`ht-from-${neighbor.id}`)?.focus())
              }}
              disabled={pairs.length <= 1}
              aria-label={L('removeRedirect', 'Remove redirect')}
              className="rounded-lg px-3 text-sm text-slate-400 hover:text-red-500 dark:text-slate-500">✕</button>
          </div>
        ))}
        <button type="button" onClick={() => setPairs([...pairs, mkPair('', '')])} className="text-sm font-medium text-brand-600 hover:underline dark:text-blue-400">
          + {L('addPair', 'Add redirect')}
        </button>
      </div>

      <div role="status" aria-live="polite">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>.htaccess</span>
          <CopyButton value={output} />
        </div>
        <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{output}</pre>
      </div>
      <CalculatorNote>{L('note', '🔧 Requires Apache with mod_rewrite enabled (near-universal on shared hosting). Place your rules before any conflicting blocks. Test with R=302 first and switch to R=301 once verified, so browsers don’t cache a wrong permanent redirect.')}</CalculatorNote>
    </div>
  )
}

// ── Unicode 字符查询 ──
interface UniChar { ch: string; name: string; block: string }

function buildUnicodeSet(): UniChar[] {
  const list: UniChar[] = []
  const push = (cp: number, name: string, block: string) => list.push({ ch: String.fromCodePoint(cp), name, block })
  // Arrows (U+2190–21D2 subset)
  ;[['←', 'leftwards arrow'], ['↑', 'upwards arrow'], ['→', 'rightwards arrow'], ['↓', 'downwards arrow'], ['↔', 'left right arrow'], ['↕', 'up down arrow'], ['⇐', 'leftwards double arrow'], ['⇒', 'rightwards double arrow'], ['⇔', 'left right double arrow']].forEach(([ch, n]) => list.push({ ch, name: n, block: 'Arrows' }))
  // Math & logic
  ;[['±', 'plus-minus sign'], ['×', 'multiplication sign'], ['÷', 'division sign'], ['≈', 'almost equal to'], ['≠', 'not equal to'], ['≤', 'less-than or equal to'], ['≥', 'greater-than or equal to'], ['√', 'square root'], ['∞', 'infinity'], ['∑', 'n-ary summation'], ['∏', 'n-ary product'], ['∫', 'integral'], ['∂', 'partial differential'], ['∆', 'increment'], ['∈', 'element of'], ['∉', 'not an element of'], ['⊂', 'subset of'], ['∪', 'union'], ['∩', 'intersection'], ['∅', 'empty set'], ['¬', 'not sign'], ['∧', 'logical and'], ['∨', 'logical or'], ['∴', 'therefore'], ['≡', 'identical to'], ['∝', 'proportional to'], ['°', 'degree sign'], ['µ', 'micro sign'], ['π', 'greek small letter pi'], ['Ω', 'greek capital letter omega'], ['α', 'alpha'], ['β', 'beta'], ['γ', 'gamma'], ['θ', 'theta'], ['λ', 'lambda'], ['σ', 'sigma'], ['φ', 'phi']].forEach(([ch, n]) => list.push({ ch, name: n, block: 'Math & Greek' }))
  // Typography & punctuation
  ;[['—', 'em dash'], ['–', 'en dash'], ['‘', 'left single quotation'], ['’', 'right single quotation'], ['“', 'left double quotation'], ['”', 'right double quotation'], ['…', 'horizontal ellipsis'], ['·', 'middle dot'], ['•', 'bullet'], ['§', 'section sign'], ['¶', 'pilcrow'], ['†', 'dagger'], ['‡', 'double dagger'], ['©', 'copyright'], ['®', 'registered sign'], ['™', 'trade mark'], ['€', 'euro sign'], ['£', 'pound sign'], ['¥', 'yen sign'], ['¢', 'cent sign'], ['₹', 'indian rupee'], ['₿', 'bitcoin sign'], ['№', 'numero sign'], ['‰', 'per mille'], ['′', 'prime'], ['″', 'double prime']].forEach(([ch, n]) => list.push({ ch, name: n, block: 'Typography & Currency' }))
  // Symbols & checks
  ;[['✓', 'check mark'], ['✔', 'heavy check mark'], ['✗', 'ballot x'], ['★', 'black star'], ['☆', 'white star'], ['♥', 'black heart suit'], ['♦', 'black diamond suit'], ['♣', 'black club suit'], ['♠', 'black spade suit'], ['☀', 'black sun with rays'], ['☁', 'cloud'], ['☂', 'umbrella'], ['⚙', 'gear'], ['⚡', 'high voltage'], ['☎', 'telephone'], ['✉', 'envelope'], ['⌘', 'place of interest (command)'], ['⌥', 'option key'], ['⇧', 'shift symbol'], ['⏎', 'return symbol'], ['⌫', 'erase to the left'], ['♪', 'eighth note'], ['♫', 'beamed notes'], ['☯', 'yin yang'], ['☠', 'skull and crossbones'], ['♻', 'recycling symbol'], ['⚖', 'balance scale'], ['Ⓐ', 'circled latin capital A']].forEach(([ch, n]) => list.push({ ch, name: n, block: 'Symbols' }))
  // Box drawing
  ;[['─', 'box drawings light horizontal'], ['│', 'box drawings light vertical'], ['┌', 'light down and right'], ['┐', 'light down and left'], ['└', 'light up and right'], ['┘', 'light up and left'], ['├', 'light vertical and right'], ['┤', 'light vertical and left'], ['┬', 'light down and horizontal'], ['┴', 'light up and horizontal'], ['┼', 'light vertical and horizontal'], ['═', 'double horizontal'], ['║', 'double vertical']].forEach(([ch, n]) => list.push({ ch, name: n, block: 'Box Drawing' }))
  return list
}
const UNICODE_SET = buildUnicodeSet()

export function UnicodeLookupClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('unicode-character-lookup', locale, key, fb)
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()

  const results = useMemo(() => {
    if (!query) return UNICODE_SET.slice(0, 60)
    return UNICODE_SET.filter((u) =>
      u.name.includes(query) ||
      u.block.toLowerCase().includes(query) ||
      u.ch === q.trim())
  }, [query])

  const codePoint = (ch: string) => 'U+' + ch.codePointAt(0)!.toString(16).toUpperCase().padStart(4, '0')

  return (
    <div className="space-y-5">
      <input
        type="search" value={q} onChange={(e) => setQ(e.target.value)}
        placeholder={L('searchPlaceholder', 'Search by name ("arrow", "star") or paste a character…')}
        aria-label={L('searchPlaceholder', 'Search unicode characters')}
        className="w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2"
        style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
      />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((u, i) => (
          <div key={`${u.ch}-${i}`} className="flex items-center gap-3 rounded-lg border p-3" style={{ borderColor: 'rgb(var(--border))' }}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xl dark:bg-slate-800" aria-hidden="true">{u.ch}</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm capitalize" style={{ color: 'rgb(var(--text))' }}>{u.name}</span>
              <span className="font-mono text-xs" style={{ color: 'rgb(var(--text-faint))' }}>{codePoint(u.ch)}</span>
            </span>
            <CopyButton value={u.ch} />
          </div>
        ))}
        {results.length === 0 && (
          <div
            className="rounded-lg border-2 border-dashed p-6 text-center text-sm sm:col-span-2 lg:col-span-3"
            style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}
          >
            {L('noMatch', 'No matches — try "arrow", "star", "quote"…')}
          </div>
        )}
      </div>
      <CalculatorNote>{L('note', '🔤 Curated set covering the characters people actually search for. Paste any character from it as the search term to identify its code point. Full Unicode has 150k+ characters — emoji pickers cover that space.')}</CalculatorNote>
    </div>
  )
}
