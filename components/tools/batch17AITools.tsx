'use client'

import { useMemo, useState } from 'react'
import { CalculatorField, CalculatorNote, ResultCard } from '../calculator/CalculatorField'
import { ResultActions } from '../ResultActions'
import { CopyButton } from '@/components/CopyButton'
import { fmtNum } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { getCalculatorSample } from '@/lib/tool-samples'

/**
 * 第十七批:AI 数据工具(2025-08 第五轮扩张)
 * CSV→Fine-tune JSONL / Token Visualizer / Embedding Price
 */

const selVars = { borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }

// ── CSV → 微调 JSONL ──
function parseCsvSimple(text: string, delim: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cur = ''
  let inQ = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQ) {
      if (c === '"') {
        if (text[i + 1] === '"') { cur += '"'; i++ } else inQ = false
      } else cur += c
    } else if (c === '"') inQ = true
    else if (c === delim) { row.push(cur); cur = '' }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(cur); rows.push(row); row = []; cur = ''
    } else cur += c
  }
  if (cur !== '' || row.length > 0) { row.push(cur); rows.push(row) }
  return rows
}

export function CsvToFinetuneClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('csv-to-finetune-jsonl', locale, key, fb)
  const sample = getCalculatorSample('csv-to-finetune-jsonl')
  const [csv, setCsv] = useState(sample?.csv ?? '')
  const [sysCol, setSysCol] = useState('')
  const [userCol, setUserCol] = useState('prompt')
  const [assistantCol, setAssistantCol] = useState('completion')

  const result = useMemo(() => {
    if (!csv.trim()) return { jsonl: '', headers: [] as string[], errors: [] as string[], count: 0 }
    const rows = parseCsvSimple(csv, ',')
    if (rows.length < 2) return { jsonl: '', headers: [], errors: ['Need a header row plus at least one data row'], count: 0 }
    const headers = rows[0].map((h) => h.trim())
    const uIdx = headers.indexOf(userCol.trim())
    const aIdx = headers.indexOf(assistantCol.trim())
    const sIdx = sysCol.trim() ? headers.indexOf(sysCol.trim()) : -1
    const errors: string[] = []
    if (uIdx < 0) errors.push(L('errUserCol', 'User column not found in header'))
    if (aIdx < 0) errors.push(L('errAssistantCol', 'Assistant column not found in header'))
    if (sysCol.trim() && sIdx < 0) errors.push(L('errSysCol', 'System column not found in header'))
    if (errors.length || uIdx < 0 || aIdx < 0) return { jsonl: '', headers, errors, count: 0 }
    const lines: string[] = []
    rows.slice(1).forEach((r, i) => {
      if (!r[uIdx]?.trim() && !r[aIdx]?.trim()) return // 跳过全空行
      const messages: Array<{ role: string; content: string }> = []
      if (sIdx >= 0 && r[sIdx]?.trim()) messages.push({ role: 'system', content: r[sIdx] })
      messages.push({ role: 'user', content: r[uIdx] ?? '' })
      messages.push({ role: 'assistant', content: r[aIdx] ?? '' })
      lines.push(JSON.stringify({ messages }))
      if (!r[aIdx]?.trim()) errors.push(L('rowNoAssistant', 'Row {n}: empty assistant content').replace('{n}', String(i + 2)))
    })
    return { jsonl: lines.join('\n'), headers, errors, count: lines.length }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [csv, sysCol, userCol, assistantCol])

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="cf-csv" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('csvLabel', 'CSV (with header row)')}</label>
          {sample && <button type="button" onClick={() => setCsv(sample.csv ?? '')} className="btn btn-secondary px-3 py-1.5 text-xs">{L('loadSample', 'Load Sample')}</button>}
        </div>
        <textarea id="cf-csv" value={csv} onChange={(e) => setCsv(e.target.value)} rows={7} spellCheck={false}
          placeholder={'prompt,completion\n"Explain closures","They capture..."'}
          className="w-full rounded-lg border p-4 font-mono text-xs outline-none transition focus:ring-2" style={selVars} />
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="cf-sys" type="text" label={L('sysColLabel', 'System column (optional)')} value={sysCol} onChange={setSysCol} placeholder="system" />
        <CalculatorField id="cf-user" type="text" label={L('userColLabel', 'User column')} value={userCol} onChange={setUserCol} placeholder="prompt" />
        <CalculatorField id="cf-assist" type="text" label={L('assistantColLabel', 'Assistant column')} value={assistantCol} onChange={setAssistantCol} placeholder="completion" />
      </div>

      {result.errors.length > 0 && (
        <p role="alert" className="rounded-lg border-2 border-amber-200 bg-amber-50 p-3 text-sm text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-300">
          ⚠️ {result.errors.slice(0, 3).join(' · ')}{result.errors.length > 3 ? ` (+${result.errors.length - 3})` : ''}
        </p>
      )}

      {result.jsonl && (
        <div role="status" aria-live="polite">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              JSONL · {result.count} {L('examples', 'examples')}
            </span>
            <CopyButton value={result.jsonl} />
          </div>
          <pre className="max-h-72 overflow-auto rounded-lg border p-4 font-mono text-xs whitespace-pre" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{result.jsonl}</pre>
        </div>
      )}
      {result.jsonl && (
        <ResultActions summary={`${result.count} examples`} filename="finetune.jsonl" downloadContent={result.jsonl} mime="application/jsonl;charset=utf-8;" copyLabel={L('copyJsonl', 'Copy JSONL')} />
      )}
      <CalculatorNote>{L('note', '📚 Output is the chat-messages JSONL the OpenAI fine-tuning API expects. Rows with empty assistant cells are flagged (not dropped) so you can fix the source. Quotes and commas inside cells are handled per RFC 4180.')}</CalculatorNote>
    </div>
  )
}

// ── Token 可视化 ──
const TOKEN_COLORS = [
  'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-200',
  'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200',
  'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-200',
  'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-950/60 dark:text-fuchsia-200',
  'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-200',
  'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-200',
]

/** 近似分词:优先整词切分,长词按 4 字符/块,空格并入后续块(贴近 BPE 直觉) */
function chunkText(text: string): string[] {
  const chunks: string[] = []
  const words = text.split(/(\s+)/)
  for (const w of words) {
    if (!w) continue
    if (w.trim() === '') {
      // 空白并入下一块:先挂起
      chunks.push(w)
      continue
    }
    // CJK 逐字符 ~1 token
    if (/[\u2e80-\u9fff\uf900-\ufaff\uff00-\uffef]/.test(w)) {
      let buf = ''
      for (const ch of w) {
        if (/[\u2e80-\u9fff\uf900-\ufaff\uff00-\uffef]/.test(ch)) {
          if (buf) { chunks.push(buf); buf = '' }
          chunks.push(ch)
        } else buf += ch
      }
      if (buf) chunks.push(buf)
      continue
    }
    // 拉丁词:短词整块,长词 4 字符切
    if (w.length <= 5) chunks.push(w)
    else {
      for (let i = 0; i < w.length; i += 4) chunks.push(w.slice(i, i + 4))
    }
  }
  // 把孤立空白块合并进前块
  const merged: string[] = []
  for (const c of chunks) {
    if (c.trim() === '' && merged.length) merged[merged.length - 1] += c
    else merged.push(c)
  }
  return merged
}

export function TokenVisualizerClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('token-visualizer', locale, key, fb)
  const sample = getCalculatorSample('token-visualizer')
  const [text, setText] = useState(sample?.text ?? '')

  const chunks = useMemo(() => (text ? chunkText(text) : []), [text])

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="tv-text" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Your text')}</label>
        <textarea id="tv-text" value={text} onChange={(e) => setText(e.target.value)} rows={4}
          placeholder="The quick brown fox doesn't jump… 猫も杓子も"
          className="w-full rounded-lg border p-4 text-sm outline-none transition focus:ring-2" style={selVars} />
      </div>

      {chunks.length > 0 && (
        <div role="status" aria-live="polite" className="space-y-3">
          <ResultCard label={L('approxTokens', 'Approximate tokens')} highlight value={String(chunks.length)} />
          <div className="flex flex-wrap gap-1 rounded-lg border p-4 font-mono text-sm" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}>
            {chunks.map((c, i) => (
              <span
                key={i}
                className={`rounded px-1.5 py-0.5 ${TOKEN_COLORS[i % TOKEN_COLORS.length]}`}
                title={L('chunkTitle', 'chunk {n}').replace('{n}', String(i + 1))}
              >
                {c.replace(/ /g, '␣')}
              </span>
            ))}
          </div>
          <p className="text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
            {L('hint', 'Each colored block ≈ one token. Whitespace shown as ␣ merges into the following token — roughly how BPE tokenizers behave.')}
          </p>
        </div>
      )}
      <CalculatorNote>{L('note', '🎨 This is a close visual approximation (words ≤5 chars = one token, longer words split at 4 characters, CJK ≈ 1 token/char), not the exact tokenizer of any specific model — use the GPT Token Counter for cost math. Great for building intuition about why some phrases cost more.')}</CalculatorNote>
    </div>
  )
}

// ── Embedding 价格计算 ──
interface EmbedModel { id: string; label: string; dims: number; ctx: number; pricePer1M: number }

const EMBED_MODELS: EmbedModel[] = [
  { id: 'openai-3-small', label: 'OpenAI text-embedding-3-small', dims: 1536, ctx: 8191, pricePer1M: 0.02 },
  { id: 'openai-3-large', label: 'OpenAI text-embedding-3-large', dims: 3072, ctx: 8191, pricePer1M: 0.13 },
  { id: 'openai-ada-002', label: 'OpenAI text-embedding-ada-002', dims: 1536, ctx: 8191, pricePer1M: 0.10 },
  { id: 'cohere-embed-v4', label: 'Cohere embed-v4', dims: 1536, ctx: 128000, pricePer1M: 0.11 },
  { id: 'cohere-embed-light', label: 'Cohere embed-v4 (int8)', dims: 1024, ctx: 128000, pricePer1M: 0.035 },
  { id: 'voyage-3', label: 'Voyage voyage-3', dims: 1024, ctx: 32000, pricePer1M: 0.06 },
  { id: 'gemini-emb', label: 'Gemini text-embedding-004', dims: 768, ctx: 2048, pricePer1M: 0.0 },
]

export function EmbeddingPriceClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('embedding-price-calculator', locale, key, fb)
  const [docs, setDocs] = useState('1000')
  const [avgTokens, setAvgTokens] = useState('500')
  const [runsPerMonth, setRunsPerMonth] = useState('1')

  const stats = useMemo(() => {
    const d = Number(docs)
    const t = Number(avgTokens)
    const r = Number(runsPerMonth)
    if (!Number.isFinite(d) || !Number.isFinite(t) || !Number.isFinite(r) || d < 0 || t < 0 || r < 0) return null
    const totalTokens = d * t
    return EMBED_MODELS.map((m) => {
      const perRun = (totalTokens / 1e6) * m.pricePer1M
      return { m, perRun, monthly: perRun * r }
    }).sort((a, b) => a.monthly - b.monthly)
  }, [docs, avgTokens, runsPerMonth])

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="ep-docs" type="text" label={L('docsLabel', 'Documents to embed')} value={docs} onChange={setDocs} placeholder="1000" />
        <CalculatorField id="ep-tokens" type="text" label={L('tokensLabel', 'Avg tokens per document')} value={avgTokens} onChange={setAvgTokens} placeholder="500" />
        <CalculatorField id="ep-runs" type="text" label={L('runsLabel', 'Re-embed runs per month')} value={runsPerMonth} onChange={setRunsPerMonth} placeholder="1" />
      </div>

      {stats ? (
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <table className="w-full text-right text-sm">
            <thead>
              <tr style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
                {[L('thModel', 'Model'), L('thDims', 'Dims'), L('thCtx', 'Context'), L('thPer1M', '$/1M tokens'), L('thPerRun', 'Per run'), L('thMonthly', 'Per month')].map((h, i) => (
                  <th key={h} className={`border-b px-3 py-2 font-medium ${i === 0 ? 'text-left' : ''}`} style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stats.map(({ m, perRun, monthly }, i) => (
                <tr key={m.id} className={`border-b last:border-b-0 ${i === 0 ? 'bg-green-50/60 dark:bg-green-950/20' : ''}`} style={{ borderColor: 'rgb(var(--border))' }}>
                  <td className="px-3 py-2 text-left font-medium" style={{ color: 'rgb(var(--text))' }}>
                    {m.label}
                    {i === 0 && <span className="ml-2 text-xs text-green-600 dark:text-green-400">{L('cheapest', 'cheapest')}</span>}
                  </td>
                  <td className="px-3 py-2 font-mono text-xs" style={{ color: 'rgb(var(--text-faint))' }}>{m.dims.toLocaleString()}</td>
                  <td className="px-3 py-2 font-mono text-xs" style={{ color: 'rgb(var(--text-faint))' }}>{m.ctx.toLocaleString()}</td>
                  <td className="px-3 py-2 font-mono text-xs" style={{ color: 'rgb(var(--text-faint))' }}>${m.pricePer1M === 0 ? '0' : fmtNum(m.pricePer1M, 3)}</td>
                  <td className="px-3 py-2 font-mono" style={{ color: 'rgb(var(--text))' }}>${perRun < 0.01 ? perRun.toExponential(1) : fmtNum(perRun, 4)}</td>
                  <td className="px-3 py-2 font-mono font-semibold" style={{ color: 'rgb(var(--text))' }}>${fmtNum(monthly, 2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm" style={{ color: 'rgb(var(--text-faint))' }}>{L('invalid', 'Enter non-negative numbers')}</p>
      )}
      <ResultActions
        summary={stats ? stats.map(({ m, monthly }) => `${m.label}: $${fmtNum(monthly, 2)}/mo`).join('\n') : ''}
        filename="embedding-costs.csv"
        downloadContent={stats ? 'Model,Dims,Context,$/1M,Per run,Per month\n' + stats.map(({ m, perRun, monthly }) => `${m.label},${m.dims},${m.ctx},${m.pricePer1M},${perRun.toFixed(6)},${monthly.toFixed(2)}`).join('\n') : ''}
        mime="text/csv;charset=utf-8;"
        copyLabel={L('copySummary', 'Copy Summary')}
      />
      <CalculatorNote>{L('note', '🧮 Prices checked 2026-08; embedding input is cheap enough that most workloads cost cents — storage and retrieval usually dominate real RAG bills. Dimensions affect vector-DB storage more than API cost. Gemini text-embedding-004 is free-tier within quotas.')}</CalculatorNote>
    </div>
  )
}
