'use client'

import { useMemo, useState } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { ResultActions } from '../ResultActions'
import { LoadSampleButton } from '../LoadSampleButton'
import { CopyButton } from '@/components/CopyButton'
import { fmtNum, toNum } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { getCalculatorSample } from '@/lib/tool-samples'

/**
 * 第十批:2025-08 新增工具(自定义 client)
 * Epoch / JSON Diff / Line Diff / Robots.txt / Sleep / Cooking
 * 样式与主题全部沿用 CSS 变量口径(暗色安全),交互对齐工厂形态。
 */

// ── Unix 时间戳(Epoch)转换器 ──
export function EpochConverterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('epoch-converter', locale, key, fb)
  // ts 为空串时不输出误导结果;now 仅在挂载后填充(SSR 首帧空,无 hydration 问题)
  const [ts, setTs] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [nowSec, setNowSec] = useState<number | null>(null)
  useMemo(() => {
    setNowSec(Math.floor(Date.now() / 1000))
  }, [])

  const digits = ts.replace(/[^\d]/g, '').length
  // ≥1e12 视为毫秒;否则秒。负值(1970 前)也支持
  const parsed = /^-?\d+$/.test(ts.trim()) ? Number(ts.trim()) : NaN
  const msValid = !isNaN(parsed) && digits >= 11 && digits <= 14
  const secValid = !isNaN(parsed) && digits >= 9 && digits <= 11
  const date = !isNaN(parsed) ? new Date(msValid ? parsed : secValid ? parsed * 1000 : NaN) : null

  const dateToTs = useMemo(() => {
    if (!dateInput) return null
    const d = new Date(dateInput)
    return isNaN(d.getTime()) ? null : Math.floor(d.getTime() / 1000)
  }, [dateInput])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputs', 'Inputs')}</span>
        <button
          type="button"
          onClick={() => setTs(String(nowSec ?? ''))}
          className="btn btn-secondary px-3 py-1.5 text-xs"
          disabled={nowSec === null}
        >
          {L('useNow', 'Use current time')}
        </button>
      </div>

      {/* 时间戳 → 日期 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="epoch-ts" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('tsLabel', 'Unix timestamp (seconds or milliseconds)')}
          </label>
          <input
            id="epoch-ts" type="text" inputMode="numeric" autoComplete="off"
            value={ts} onChange={(e) => setTs(e.target.value)} placeholder="1735689600"
            className="w-full rounded-lg border p-3 font-mono shadow-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div>
          <label htmlFor="epoch-date" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('dateLabel', 'Or pick a date (local timezone)')}
          </label>
          <input
            id="epoch-date" type="datetime-local" value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
      </div>

      <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ResultCard label={L('isoOut', 'ISO 8601 (UTC)')} highlight
          value={date && !isNaN(date.getTime()) ? date.toISOString() : '—'} />
        <ResultCard label={L('localOut', 'Your local time')}
          value={date && !isNaN(date.getTime()) ? date.toLocaleString() : '—'} />
        <ResultCard label={L('secOut', 'Seconds')}
          value={dateToTs !== null ? String(dateToTs) : date && !isNaN(date.getTime()) ? String(Math.floor(date.getTime() / 1000)) : '—'} />
        <ResultCard label={L('msOut', 'Milliseconds')}
          value={dateToTs !== null ? `${dateToTs}000` : date && !isNaN(date.getTime()) ? String(date.getTime()) : '—'} />
      </div>

      {!isNaN(parsed) && !secValid && !msValid && (
        <p className="rounded-lg border p-3 text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}>
          {L('digitHint', 'Timestamps are usually 10 digits (seconds) or 13 digits (milliseconds). You entered something else — showing best guess anyway.')}
        </p>
      )}
      <ResultActions summary={`${L('summaryTitle', 'Epoch Conversion')}\n${date && !isNaN(date.getTime()) ? `${ts} → ${date.toISOString()}` : ''}`} filename="epoch-conversion.txt"
        downloadContent={`${L('summaryTitle', 'Epoch Conversion')}\n${date && !isNaN(date.getTime()) ? `${ts} → ${date.toISOString()}` : ''}`} />
      <CalculatorNote>{L('note', '🕒 Unix time counts seconds since 1970-01-01 UTC and ignores leap seconds. JavaScript ecosystems commonly use milliseconds (13 digits).')}</CalculatorNote>
    </div>
  )
}

// ── JSON Diff ──
type JsonValue = unknown

/** 结构化 diff:返回 [path, kind, oldVal?, newVal?] 列表;kind: added|removed|changed */
function diffJson(a: JsonValue, b: JsonValue, path: string, out: [string, string, string, string][]): void {
  const show = (x: JsonValue) => (typeof x === 'string' ? `"${x}"` : JSON.stringify(x) ?? String(x))
  if (JSON.stringify(a) === JSON.stringify(b)) return
  const bothObj = a !== null && b !== null && typeof a === 'object' && typeof b === 'object'
    && !Array.isArray(a) === !Array.isArray(b)
  if (bothObj) {
    const ao = a as Record<string, JsonValue>
    const bo = b as Record<string, JsonValue>
    for (const k of Object.keys(ao)) {
      if (!(k in bo)) out.push([`${path}.${k}`, 'removed', show(ao[k]), ''])
      else diffJson(ao[k], bo[k], `${path}.${k}`, out)
    }
    for (const k of Object.keys(bo)) {
      if (!(k in ao)) out.push([`${path}.${k}`, 'added', '', show(bo[k])])
    }
    return
  }
  out.push([path || '(root)', 'changed', show(a), show(b)])
}

export function JsonDiffClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('json-diff', locale, key, fb)
  const sample = getCalculatorSample('json-diff')
  const [left, setLeft] = useState(sample?.left ?? '{\n  "name": "Ada",\n  "age": 36,\n  "langs": ["en", "de"]\n}')
  const [right, setRight] = useState(sample?.right ?? '{\n  "name": "Ada",\n  "age": 37,\n  "langs": ["en", "fr"],\n  "admin": true\n}')

  const { rows, error } = useMemo(() => {
    try {
      const a = JSON.parse(left) as JsonValue
      const b = JSON.parse(right) as JsonValue
      const out: [string, string, string, string][] = []
      diffJson(a, b, '', out)
      return { rows: out, error: '' }
    } catch (e) {
      return { rows: [], error: (e as Error).message }
    }
  }, [left, right])

  const taCls =
    'w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2'

  const summaryText = rows.length === 0 && !error ? L('identical', '✓ The two documents are structurally identical') : ''

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="jd-left" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('original', 'Original JSON')}</label>
          <textarea id="jd-left" value={left} onChange={(e) => setLeft(e.target.value)} rows={8}
            spellCheck={false} className={taCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
        </div>
        <div>
          <label htmlFor="jd-right" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('compared', 'Compared JSON')}</label>
          <textarea id="jd-right" value={right} onChange={(e) => setRight(e.target.value)} rows={8}
            spellCheck={false} className={taCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
        </div>
      </div>

      {error && (
        <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 p-4 font-mono text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">
          ⚠️ {error}
        </p>
      )}
      {!error && (
        <>
          {rows.length === 0 ? (
            <p className="rounded-lg border-2 border-green-200 bg-green-50 p-4 text-sm text-green-700 dark:border-green-800/60 dark:bg-green-950/30 dark:text-green-300">
              {L('identical', '✓ The two documents are structurally identical')}
            </p>
          ) : (
            <div className="overflow-hidden rounded-lg border border-border bg-card">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}>
                    <th className="px-4 py-2 font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('thPath', 'Path')}</th>
                    <th className="px-4 py-2 font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('thChange', 'Change')}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([path, kind, oldV, newV], i) => (
                    <tr key={`${path}-${i}`} className="border-b last:border-b-0" style={{ borderColor: 'rgb(var(--border))' }}>
                      <td className="px-4 py-2 font-mono text-xs break-all" style={{ color: 'rgb(var(--text))' }}>{path}</td>
                      <td className="px-4 py-2 font-mono text-xs break-all">
                        {kind === 'added' && <span className="text-green-600 dark:text-green-400">+ {newV}</span>}
                        {kind === 'removed' && <span className="text-red-600 dark:text-red-400">− {oldV}</span>}
                        {kind === 'changed' && (
                          <span className="text-amber-600 dark:text-amber-400">
                            {oldV} → {newV}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
      <ResultActions
        summary={summaryText || `${rows.length} difference(s):\n${rows.map(([p, k, o, n]) => `${k === 'added' ? '+' : k === 'removed' ? '-' : '~'} ${p}: ${k === 'added' ? n : k === 'removed' ? o : `${o} → ${n}`}`).join('\n')}`}
        filename="json-diff.txt"
        downloadContent={summaryText || `${rows.map(([p, k, o, n]) => `${k}\t${p}\t${o}\t${n}`).join('\n')}`}
        copyLabel={L('copySummary', 'Copy Summary')}
      />
      <CalculatorNote>{L('note', '🔍 Comparison is structural: object key order does not matter, but array order does. Values are compared deep-equal after JSON parsing.')}</CalculatorNote>
    </div>
  )
}

// ── 行级文本 Diff ──
export function LineDiffCheckerClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('line-diff-checker', locale, key, fb)
  const sample = getCalculatorSample('line-diff-checker')
  const [a, setA] = useState(sample?.left ?? 'The quick brown fox\njumps over\nthe lazy dog.')
  const [b, setB] = useState(sample?.right ?? 'The quick brown fox\nleaps over\nthe lazy dog.\nAmazingly.')

  const result = useMemo(() => {
    if (a.length > 100_000 || b.length > 100_000) {
      return { lines: [] as { type: string; text: string }[], added: 0, removed: 0, tooLong: true }
    }
    const al = a.split(/\r?\n/)
    const bl = b.split(/\r?\n/)
    // LCS 经典 DP(行数上限 ~2000 保证 O(n²) 可控)
    if (al.length > 2000 || bl.length > 2000) {
      return { lines: [] as { type: string; text: string }[], added: 0, removed: 0, tooLong: true }
    }
    const n = al.length
    const m = bl.length
    const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0))
    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        dp[i][j] = al[i] === bl[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1])
      }
    }
    const lines: { type: string; text: string }[] = []
    let i = 0
    let j = 0
    let added = 0
    let removed = 0
    while (i < n && j < m) {
      if (al[i] === bl[j]) {
        lines.push({ type: 'same', text: al[i] })
        i++
        j++
      } else if (dp[i + 1][j] >= dp[i][j + 1]) {
        lines.push({ type: 'removed', text: al[i++] })
        removed++
      } else {
        lines.push({ type: 'added', text: bl[j++] })
        added++
      }
    }
    while (i < n) { lines.push({ type: 'removed', text: al[i++] }); removed++ }
    while (j < m) { lines.push({ type: 'added', text: bl[j++] }); added++ }
    return { lines, added, removed, tooLong: false }
  }, [a, b])

  const rowCls = (type: string) =>
    type === 'added'
      ? 'bg-green-50 dark:bg-green-950/30'
      : type === 'removed'
        ? 'bg-red-50 dark:bg-red-950/30'
        : ''
  const sign = (type: string) => (type === 'added' ? '+ ' : type === 'removed' ? '− ' : '  ')

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="ld-a" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('versionA', 'Original text')}</label>
          <textarea id="ld-a" value={a} onChange={(e) => setA(e.target.value)} rows={8}
            className="w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
        </div>
        <div>
          <label htmlFor="ld-b" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('versionB', 'Changed text')}</label>
          <textarea id="ld-b" value={b} onChange={(e) => setB(e.target.value)} rows={8}
            className="w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
        </div>
      </div>

      {result.tooLong ? (
        <p role="alert" className="rounded-lg border-2 p-4 text-sm"
          style={{ borderColor: 'rgb(253 230 138)', backgroundColor: 'rgb(254 249 195 / 0.4)', color: 'rgb(var(--text))' }}>
          {L('tooLong', '⚠️ Text exceeds the supported size (100k characters or 2000 lines per side). Trim the input to compare.')}
        </p>
      ) : (
        <>
          <div className="flex gap-4 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
            <span className="text-green-600 dark:text-green-400">+{result.added} {L('addedN', 'added')}</span>
            <span className="text-red-600 dark:text-red-400">−{result.removed} {L('removedN', 'removed')}</span>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            {result.lines.map((ln, idx) => (
              <div key={idx} className={`flex gap-3 px-4 py-1 font-mono text-xs ${rowCls(ln.type)}`}>
                <span aria-hidden="true" className="shrink-0 select-none whitespace-pre" style={{ color: 'rgb(var(--text-faint))' }}>{sign(ln.type)}</span>
                <span className="whitespace-pre-wrap break-all" style={{ color: 'rgb(var(--text))' }}>{ln.text || ' '}</span>
              </div>
            ))}
            {result.lines.length === 0 && (
              <p className="px-4 py-3 text-sm" style={{ color: 'rgb(var(--text-faint))' }}>—</p>
            )}
          </div>
          <CopyButton
            value={result.lines.map((ln) => `${sign(ln.type)}${ln.text}`).join('\n')}
            disabled={!result.lines.length}
          />
        </>
      )}
      <CalculatorNote>{L('note', '📐 Comparison uses the longest-common-subsequence algorithm — the same approach behind git diff. Empty lines participate in the comparison.')}</CalculatorNote>
    </div>
  )
}

// ── robots.txt 生成器 ──
interface RobotRule { agent: string; allow: string; disallow: string }

export function RobotsTxtGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('robots-txt-generator', locale, key, fb)
  const [preset, setPreset] = useState('standard')
  const [sitemapUrl, setSitemapUrl] = useState('https://example.com/sitemap.xml')
  const [crawlDelay, setCrawlDelay] = useState('')
  const [rules, setRules] = useState<RobotRule[]>([
    { agent: '*', allow: '/', disallow: '/admin/' },
  ])

  const applyPreset = (p: string) => {
    setPreset(p)
    if (p === 'allowAll') setRules([{ agent: '*', allow: '/', disallow: '' }])
    else if (p === 'blockAll') setRules([{ agent: '*', allow: '', disallow: '/' }])
    else if (p === 'blockAi') {
      setRules([
        { agent: '*', allow: '/', disallow: '/admin/' },
        { agent: 'GPTBot', allow: '', disallow: '/' },
        { agent: 'ClaudeBot', allow: '', disallow: '/' },
        { agent: 'CCBot', allow: '', disallow: '/' },
      ])
    } else setRules([{ agent: '*', allow: '/', disallow: '/admin/' }])
  }

  const output = useMemo(() => {
    const blocks = rules
      .map((r) => {
        const lines = [`User-agent: ${r.agent}`]
        if (r.disallow.trim()) lines.push(`Disallow: ${r.disallow}`)
        if (r.allow.trim() && r.allow !== '/') lines.push(`Allow: ${r.allow}`)
        else if (r.allow.trim() === '/' && r.disallow.trim() === '/') lines.push('Allow: /')
        return lines.join('\n')
      })
      .join('\n\n')
    const parts = [blocks]
    if (crawlDelay.trim()) parts.push(`Crawl-delay: ${crawlDelay.trim()}`)
    if (sitemapUrl.trim()) parts.push(`Sitemap: ${sitemapUrl.trim()}`)
    return parts.filter(Boolean).join('\n\n')
  }, [rules, crawlDelay, sitemapUrl])

  const inpCls =
    'w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2'

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        {([
          ['standard', L('presetStandard', 'Standard site')],
          ['allowAll', L('presetAllowAll', 'Allow everything')],
          ['blockAll', L('presetBlockAll', 'Block everything')],
          ['blockAi', L('presetBlockAi', 'Block AI crawlers')],
        ] as const).map(([key, label]) => (
          <button
            key={key} type="button" onClick={() => applyPreset(key)}
            aria-pressed={preset === key}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              preset === key ? 'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500 dark:bg-brand-950/40 dark:text-brand-300' : ''
            }`}
            style={preset === key ? undefined : { borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="rt-sitemap" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('sitemapLabel', 'Sitemap URL (optional)')}</label>
          <input id="rt-sitemap" type="url" value={sitemapUrl} onChange={(e) => setSitemapUrl(e.target.value)}
            placeholder="https://example.com/sitemap.xml" className={inpCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
        </div>
        <div>
          <label htmlFor="rt-delay" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('delayLabel', 'Crawl-delay in seconds (optional)')}</label>
          <input id="rt-delay" type="number" min="0" step="1" autoComplete="off" value={crawlDelay}
            onChange={(e) => setCrawlDelay(e.target.value)} placeholder="10" className={inpCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
        </div>
      </div>

      {/* 规则编辑 */}
      <div className="space-y-3">
        {rules.map((r, i) => (
          <div key={i} className="grid grid-cols-1 gap-3 rounded-lg border p-3 sm:grid-cols-[1fr_1fr_1fr_auto]" style={{ borderColor: 'rgb(var(--border))' }}>
            <input aria-label={L('agentLabel', 'User-agent')} value={r.agent}
              onChange={(e) => setRules(rules.map((x, j) => (j === i ? { ...x, agent: e.target.value } : x)))}
              placeholder="User-agent (*)" className={inpCls}
              style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
            <input aria-label={L('disallowLabel', 'Disallow paths')} value={r.disallow}
              onChange={(e) => setRules(rules.map((x, j) => (j === i ? { ...x, disallow: e.target.value } : x)))}
              placeholder="/private/" className={inpCls}
              style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
            <input aria-label={L('allowLabel', 'Allow paths')} value={r.allow}
              onChange={(e) => setRules(rules.map((x, j) => (j === i ? { ...x, allow: e.target.value } : x)))}
              placeholder="/" className={inpCls}
              style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
            <button type="button" onClick={() => setRules(rules.filter((_, j) => j !== i))}
              className="rounded-lg px-3 text-sm text-slate-400 hover:text-red-500 dark:text-slate-500" disabled={rules.length <= 1}>
              ✕
            </button>
          </div>
        ))}
        <button type="button" onClick={() => setRules([...rules, { agent: '*', allow: '', disallow: '' }])}
          className="text-sm font-medium text-brand-600 hover:underline dark:text-blue-400">
          + {L('addRule', 'Add rule')}
        </button>
      </div>

      {/* 输出预览 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('outputLabel', 'robots.txt')}</label>
          <CopyButton value={output} />
        </div>
        <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-sm whitespace-pre-wrap" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{output}</pre>
      </div>
      <ResultActions summary={output} filename="robots.txt" downloadContent={output} mime="text/plain;charset=utf-8;" />
      <CalculatorNote>{L('note', '🤖 Place this file at your domain root (example.com/robots.txt). Google ignores Crawl-delay; Bing and Yandex honor it. Blocking AI crawlers (GPTBot, ClaudeBot, CCBot) is honored by their operators.')}</CalculatorNote>
    </div>
  )
}

// ── 睡眠周期计算器 ──
function fmtClock(d: Date): string {
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export function SleepCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('sleep-calculator', locale, key, fb)
  // mode: wakeAt=我知道起床时间,求入睡点;sleepNow=我现在睡,求起床点
  const [mode, setMode] = useState<'wakeAt' | 'sleepAt'>('wakeAt')
  const [time, setTime] = useState('07:00')

  // 挂载后才用当前时间渲染 "now" 基准(SSR 首帧固定占位,避免水合不一致)
  const [mounted, setMounted] = useState(false)
  useMemo(() => setMounted(true), [])

  const suggestions = useMemo(() => {
    if (!time) return []
    const [h, m] = time.split(':').map(Number)
    if (!Number.isFinite(h) || !Number.isFinite(m) || h > 23 || m > 59) return []
    // 15 分钟入睡潜伏期 + 6 个周期候选(4-9 个,90 分钟/个)
    const base = new Date()
    base.setHours(h, m, 0, 0)
    if (mode === 'wakeAt') {
      return [9, 8, 7, 6, 5, 4].map((cycles) => {
        const d = new Date(base.getTime())
        d.setMinutes(d.getMinutes() - cycles * 90 - 15)
        const wrapped = d.getDate() !== base.getDate()
        return { cycles, clock: fmtClock(d), tag: wrapped ? L('nextDay', '(next day)') : '' }
      })
    }
    return [4, 5, 6, 7, 8, 9].map((cycles) => {
      const d = new Date(base.getTime())
      d.setMinutes(d.getMinutes() + cycles * 90 + 15)
      const wrapped = d.getDate() !== base.getDate()
      return { cycles, clock: fmtClock(d), tag: wrapped ? L('nextDay', '(next day)') : '' }
    })
  }, [time, mode, locale])

  const nowBase = mounted ? fmtClock(new Date()) : '—'

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {([
          ['wakeAt', L('modeWake', 'I want to wake up at…')],
          ['sleepAt', L('modeSleep', 'I will go to bed now/at…')],
        ] as const).map(([m, label]) => (
          <button key={m} type="button" onClick={() => setMode(m)} aria-pressed={mode === m}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              mode === m ? 'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500 dark:bg-brand-950/40 dark:text-brand-300' : ''
            }`}
            style={mode === m ? undefined : { borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}>
            {label}
          </button>
        ))}
      </div>

      <div className="max-w-xs">
        <CalculatorField id="sleep-time" type="text" label={mode === 'wakeAt' ? L('wakeTime', 'Wake-up time') : L('bedTime', 'Bed time')}
          value={time} onChange={setTime} placeholder="07:00" />
      </div>

      <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {suggestions.map(({ cycles, clock, tag }) => {
          const hoursSlept = ((cycles * 90) / 60).toFixed(1).replace(/\.0$/, '')
          const best = cycles === 6 || cycles === 5
          return (
            <div key={cycles}
              className={`rounded-xl border p-5 text-center shadow-sm ${best ? 'border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10' : 'border-border bg-card'}`}>
              <div className="text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
                {mode === 'wakeAt' ? L('fallAsleepBy', 'Fall asleep by') : L('wakeUpAt', 'Wake up at')}
              </div>
              <div className="mt-1 text-3xl font-bold" style={{ color: 'rgb(var(--text))' }}>
                {clock} {tag && <span className="text-sm font-normal" style={{ color: 'rgb(var(--text-faint))' }}>{tag}</span>}
              </div>
              <div className="mt-1 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                {cycles} {L('cyclesN', 'cycles')} · {hoursSlept} h{best ? ` · ${L('recommended', 'recommended')}` : ''}
              </div>
            </div>
          )
        })}
        {suggestions.length === 0 && (
          <p className="text-sm" style={{ color: 'rgb(var(--text-faint))' }}>{L('invalidTime', 'Enter a valid time like 07:00')}</p>
        )}
      </div>

      <CalculatorNote>
        {L('note', '😴 A sleep cycle runs about 90 minutes. Waking at cycle boundaries feels far easier than mid-deep-sleep. Estimates assume ~15 minutes to fall asleep — adjust if you typically drift off faster or slower.').replace('{now}', nowBase)}
      </CalculatorNote>
    </div>
  )
}

// ── 烹饪计量换算(按食材密度)──
/** 常见食材密度表:g per US cup。来源:USDA 与主流烘焙参考的平均值。 */
const INGREDIENT_DENSITY: Record<string, { label: string; gPerCup: number }> = {
  'flour': { label: 'All-purpose flour', gPerCup: 120 },
  'bread-flour': { label: 'Bread flour', gPerCup: 127 },
  'cake-flour': { label: 'Cake flour', gPerCup: 114 },
  'whole-wheat': { label: 'Whole wheat flour', gPerCup: 113 },
  'sugar': { label: 'Granulated sugar', gPerCup: 200 },
  'brown-sugar': { label: 'Brown sugar (packed)', gPerCup: 213 },
  'powdered-sugar': { label: 'Powdered sugar', gPerCup: 120 },
  'butter': { label: 'Butter', gPerCup: 227 },
  'oil': { label: 'Vegetable oil', gPerCup: 218 },
  'milk': { label: 'Milk', gPerCup: 240 },
  'water': { label: 'Water', gPerCup: 237 },
  'honey': { label: 'Honey', gPerCup: 340 },
  'rice-cooked': { label: 'Cooked rice', gPerCup: 195 },
  'rice-uncooked': { label: 'Uncooked rice', gPerCup: 185 },
  'rolled-oats': { label: 'Rolled oats', gPerCup: 90 },
  'cocoa': { label: 'Cocoa powder', gPerCup: 100 },
  'chocolate-chips': { label: 'Chocolate chips', gPerCup: 170 },
  'almond-flour': { label: 'Almond flour', gPerCup: 96 },
  'yogurt': { label: 'Yogurt', gPerCup: 245 },
  'peanut-butter': { label: 'Peanut butter', gPerCup: 258 },
}

const VOLUME_TO_CUP: Record<string, { label: string; cups: number }> = {
  cup: { label: 'Cups (US)', cups: 1 },
  tbsp: { label: 'Tablespoons', cups: 1 / 16 },
  tsp: { label: 'Teaspoons', cups: 1 / 48 },
  'fluid-oz': { label: 'Fluid ounces', cups: 1 / 8 },
  ml: { label: 'Milliliters', cups: 236.588 / 240 },
  g: { label: 'Grams', cups: -1 }, // 走重量路径
  oz: { label: 'Ounces (weight)', cups: -2 },
}

export function CookingConverterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('cooking-converter', locale, key, fb)
  const [amount, setAmount] = useState('2')
  const [fromUnit, setFromUnit] = useState('cup')
  const [ingredient, setIngredient] = useState('flour')
  const sample = getCalculatorSample('cooking-converter')

  const loadSample = () => {
    if (!sample) return
    setAmount(sample.amount)
    setFromUnit(sample.from)
    setIngredient(sample.ingredient)
  }

  const result = useMemo(() => {
    const amt = toNum(amount)
    const ing = INGREDIENT_DENSITY[ingredient]
    const from = VOLUME_TO_CUP[fromUnit]
    if (!ing || !from || isNaN(amt)) return null
    // 统一先转成克:体积单位 × 杯重;重量单位直读
    let grams: number
    if (from.cups === -1) grams = amt
    else if (from.cups === -2) grams = amt * 28.349523125
    else grams = amt * from.cups * ing.gPerCup
    const cups = grams / ing.gPerCup
    return {
      grams,
      oz: grams / 28.349523125,
      cups,
      tbsp: cups * 16,
      tsp: cups * 48,
    }
  }, [amount, fromUnit, ingredient])

  const selStyle = { borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }

  const summaryText = result
    ? `${fmtNum(result.grams, 1)} g | ${fmtNum(result.oz, 2)} oz | ${fmtNum(result.cups, 2)} cups`
    : ''

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('convert', 'Convert')}</span>
        {sample && <LoadSampleButton onLoad={loadSample} />}
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="cook-amount" type="text" label={L('amount', 'Amount')} value={amount} onChange={setAmount} placeholder="2" />
        <div>
          <label htmlFor="cook-from" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('unit', 'Unit')}</label>
          <select id="cook-from" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={selStyle}>
            {Object.entries(VOLUME_TO_CUP).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="cook-ing" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('ingredient', 'Ingredient')}</label>
          <select id="cook-ing" value={ingredient} onChange={(e) => setIngredient(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={selStyle}>
            {Object.entries(INGREDIENT_DENSITY).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </div>
      </div>

      <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ResultCard label={L('weight', 'Weight')} highlight
          value={result ? `${fmtNum(result.grams, 1)} g · ${fmtNum(result.oz, 2)} oz` : '—'} />
        <ResultCard label={L('volume', 'Volume (US)')}
          value={result ? `${fmtNum(result.cups, 2)} cups · ${fmtNum(result.tbsp, 1)} tbsp · ${fmtNum(result.tsp, 1)} tsp` : '—'} />
      </div>

      <ResultActions summary={summaryText} filename="cooking-conversion.txt" downloadContent={summaryText} copyLabel={L('copySummary', 'Copy Summary')} />

      <CalculatorNote>
        {L('note', '🧁 Volume-to-weight depends on how densely you fill the cup (sifted vs spooned flour differs ~20%). We use standard spoon-and-level averages; a kitchen scale always wins.')}
      </CalculatorNote>
    </div>
  )
}
