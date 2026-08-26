'use client'

import { useEffect, useMemo, useState } from 'react'
import { CalculatorField, CalculatorNote, CalculatorSliderField, ResultCard } from '../calculator/CalculatorField'
import { StackedCompareChart } from '@/components/charts/StackedCompareChart'
import { ResultActions } from '../ResultActions'
import { CopyButton } from '@/components/CopyButton'
import { fmtNum, fmtUSD } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { MODEL_GROUPS, MODEL_PRICES, type ModelPrice } from '@/lib/model-pricing'
import { getCalculatorSample } from '@/lib/tool-samples'

/**
 * 第十五批:AI 时代工具 + 安全补全(2025-08 第三轮扩张)
 * LLM Cost / Context Window / JSON→Zod / AES-GCM
 * 随机/加密统一 WebCrypto;价格数据吃 lib/model-pricing.ts 单一来源。
 */

const selVars = { borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }

// ── LLM API 成本计算器 ──
export function LlmCostCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('llm-cost-calculator', locale, key, fb)
  const [inputTokens, setInputTokens] = useState('2000')
  const [outputTokens, setOutputTokens] = useState('800')
  const [requestsPerDay, setRequestsPerDay] = useState('100')

  const stats = useMemo(() => {
    const it = Number(inputTokens)
    const ot = Number(outputTokens)
    const rpd = Number(requestsPerDay)
    if (!Number.isFinite(it) || !Number.isFinite(ot) || !Number.isFinite(rpd) || it < 0 || ot < 0 || rpd < 0) return null
    const rows = MODEL_PRICES.map((m) => {
      const perReq = (it / 1e6) * m.inputPer1M + (ot / 1e6) * m.outputPer1M
      return { m, perReq, perDay: perReq * rpd, perMonth: perReq * rpd * 30.44 }
    }).sort((a, b) => a.perMonth - b.perMonth)
    return { rows }
  }, [inputTokens, outputTokens, requestsPerDay])

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorSliderField id="lc-in" label={L('inLabel', 'Input tokens / request')} value={inputTokens} onChange={setInputTokens} placeholder="2000" min={0} max={100000} step={500} />
        <CalculatorSliderField id="lc-out" label={L('outLabel', 'Output tokens / request')} value={outputTokens} onChange={setOutputTokens} placeholder="800" min={0} max={32000} step={100} />
        <CalculatorSliderField id="lc-rpd" label={L('rpdLabel', 'Requests per day')} value={requestsPerDay} onChange={setRequestsPerDay} placeholder="100" min={0} max={10000} step={10} />
      </div>

      {stats && (
        <StackedCompareChart
          title={L('chartTitle', 'Monthly cost by model')}
          rows={stats.rows.map(({ m, perMonth }, i) => ({
            label: m.label,
            segments: [{ label: i === 0 ? L('cheapest', 'cheapest') : L('costLabel', 'per month'), value: perMonth, color: i === 0 ? '#22c55e' : '#3b82f6' }],
          }))}
          formatTotal={(n) => `$${n < 0.01 ? n.toExponential(1) : fmtNum(n, 2)}`}
        />
      )}
      {stats ? (
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}>
                {[L('thModel', 'Model'), L('thIn', 'In $/1M'), L('thOut', 'Out $/1M'), L('thPerReq', 'Per request'), L('thPerDay', 'Per day'), L('thPerMonth', 'Per month')].map((h, i) => (
                  <th key={h} className={`border-b px-3 py-2 font-medium ${i === 0 ? 'text-left' : ''}`} style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stats.rows.map(({ m, perReq, perDay, perMonth }, i) => (
                <tr key={m.id} className={`border-b last:border-b-0 ${i === 0 ? 'bg-green-50/60 dark:bg-green-950/20' : ''}`} style={{ borderColor: 'rgb(var(--border))' }}>
                  <td className="px-3 py-2 text-left font-medium" style={{ color: 'rgb(var(--text))' }}>
                    {m.label}
                    {i === 0 && <span className="ml-2 text-xs text-green-600 dark:text-green-400">{L('cheapest', 'cheapest')}</span>}
                  </td>
                  <td className="px-3 py-2 font-mono text-xs" style={{ color: 'rgb(var(--text-faint))' }}>${fmtNum(m.inputPer1M, 2)}</td>
                  <td className="px-3 py-2 font-mono text-xs" style={{ color: 'rgb(var(--text-faint))' }}>${fmtNum(m.outputPer1M, 2)}</td>
                  <td className="px-3 py-2 font-mono" style={{ color: 'rgb(var(--text))' }}>${perReq < 0.01 ? perReq.toExponential(1) : fmtNum(perReq, 4)}</td>
                  <td className="px-3 py-2 font-mono" style={{ color: 'rgb(var(--text))' }}>${fmtNum(perDay, 2)}</td>
                  <td className="px-3 py-2 font-mono font-semibold" style={{ color: 'rgb(var(--text))' }}>${fmtNum(perMonth, 0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm" style={{ color: 'rgb(var(--text-faint))' }}>{L('invalid', 'Enter non-negative numbers in all fields')}</p>
      )}

      <ResultActions
        summary={stats ? stats.rows.map(({ m, perMonth }) => `${m.label}: $${fmtNum(perMonth, 2)}/mo`).join('\n') : ''}
        filename="llm-costs.csv"
        downloadContent={stats ? 'Model,In $/1M,Out $/1M,Per request,Per day,Per month\n' + stats.rows.map(({ m, perReq, perDay, perMonth }) => `${m.label},${m.inputPer1M},${m.outputPer1M},${perReq.toFixed(6)},${perDay.toFixed(2)},${perMonth.toFixed(2)}`).join('\n') : ''}
        mime="text/csv;charset=utf-8;"
        copyLabel={L('copySummary', 'Copy Summary')}
      />
      <CalculatorNote>{L('note', '💰 Prices are uncached-input rates per 1M tokens (tokencost.app, checked 2026-08). Cached prompts run 50-90% cheaper on input; batch/async APIs roughly halve output costs. Monthly assumes 30.44 days.')}</CalculatorNote>
    </div>
  )
}

// ── 上下文窗口检查器 ──
const CONTEXT_LIMITS: Array<{ id: string; label: string; ctx: number }> = [
  { id: 'gpt-5.6', label: 'GPT-5.6 class', ctx: 400_000 },
  { id: 'claude-fable', label: 'Claude Fable 5', ctx: 500_000 },
  { id: 'claude-sonnet', label: 'Claude Sonnet 5', ctx: 200_000 },
  { id: 'gemini-3-pro', label: 'Gemini 3.1 Pro', ctx: 2_000_000 },
  { id: 'gemini-flash', label: 'Gemini 3.6 Flash', ctx: 1_000_000 },
  { id: 'deepseek-v4', label: 'DeepSeek V4', ctx: 128_000 },
  { id: 'llama-4', label: 'Llama 4 class', ctx: 128_000 },
  { id: 'legacy-8k', label: 'Legacy 8K', ctx: 8_192 },
]

/** 粗估 token 数:英文 ≈ chars/4;含 CJK 时每个 CJK 字符按 ~1 token */
function estimateTokens(text: string): number {
  let ascii = 0
  let cjk = 0
  for (const ch of text) {
    const cp = ch.codePointAt(0)!
    if (cp > 0x2e80) cjk++
    else ascii++
  }
  return Math.ceil(ascii / 4 + cjk * 1.1)
}

export function ContextWindowCheckerClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('context-window-checker', locale, key, fb)
  const [text, setText] = useState('')

  const tokens = useMemo(() => (text ? estimateTokens(text) : 0), [text])

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="cw-text" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Paste your prompt / document')}</label>
        <textarea id="cw-text" value={text} onChange={(e) => setText(e.target.value)} rows={8} spellCheck={false}
          placeholder={L('placeholder', 'Paste the text you plan to send…')}
          className="w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2"
          style={selVars} />
        <p className="mt-1 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
          {L('estimate', '≈ {n} tokens · {c} characters').replace('{n}', tokens.toLocaleString('en-US')).replace('{c}', [...text].length.toLocaleString('en-US'))}
        </p>
      </div>

      <div role="status" aria-live="polite" className="space-y-3">
        {CONTEXT_LIMITS.map(({ id, label, ctx }) => {
          const pct = Math.min((tokens / ctx) * 100, 100)
          const fit = tokens <= ctx
          return (
            <div key={id} className="rounded-lg border p-3" style={{ borderColor: 'rgb(var(--border))' }}>
              <div className="mb-1.5 flex items-baseline justify-between gap-2 text-sm">
                <span style={{ color: 'rgb(var(--text))' }}>{label}</span>
                <span className="font-mono text-xs" style={{ color: fit ? 'rgb(var(--text-faint))' : '#dc2626' }}>
                  {fit ? `${fmtNum(pct, 1)}% ${L('ofWindow', 'of window')}` : L('exceeds', `exceeds by ${'{}'}`).replace('{}', (tokens - ctx).toLocaleString('en-US'))}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }} role="img" aria-label={`${label}: ${fmtNum(pct, 0)}%`}>
                <div
                  className={`h-full rounded-full transition-all ${pct > 90 ? 'bg-red-500' : pct > 60 ? 'bg-amber-500' : 'bg-green-500'}`}
                  style={{ width: `${Math.max(pct, tokens > 0 ? 1.5 : 0)}%` }}
                />
              </div>
              <div className="mt-1 font-mono text-[10px]" style={{ color: 'rgb(var(--text-faint))' }}>
                {tokens.toLocaleString('en-US')} / {ctx.toLocaleString('en-US')} · {L('headroom', 'headroom')} {(Math.max(0, ctx - tokens)).toLocaleString('en-US')}
              </div>
            </div>
          )
        })}
      </div>
      <CalculatorNote>{L('note', '📏 Token counts are close estimates (chars÷4 for Latin text, ~1.1 per CJK char) — treat 5% margins as noise. Output tokens share the same window, so reserve headroom for the response plus system prompt.')}</CalculatorNote>
    </div>
  )
}

// ── JSON → Zod ──
type Json = unknown

function zodType(value: Json, indent: number, keyRaw: string): string {
  const pad = '  '.repeat(indent)
  const k = JSON.stringify(keyRaw)
  if (value === null) return `${pad}${k}: z.null(),`
  if (typeof value === 'boolean') return `${pad}${k}: z.boolean(),`
  if (typeof value === 'number') {
    return Number.isInteger(value)
      ? `${pad}${k}: z.number().int(),`
      : `${pad}${k}: z.number(),`
  }
  if (typeof value === 'string') return `${pad}${k}: z.string(),`
  if (Array.isArray(value)) {
    if (value.length === 0) return `${pad}${k}: z.array(z.unknown()),`
    // 数组元素取首个样本的形状;混合类型给 union
    const uniqueShapes = new Set(value.map((v) => JSON.stringify(typeSig(v))))
    if (uniqueShapes.size > 1) {
      const variants = [...value].slice(0, 3).map((v) => zodInline(v, 0))
      return `${pad}${k}: z.array(z.union([${variants.join(', ')}])),`
    }
    return `${pad}${k}: z.array(${zodInline(value[0], 0)}),`
  }
  // object
  const entries = Object.entries(value as Record<string, Json>)
    .map(([ik, iv]) => zodType(iv, indent + 1, ik))
    .join('\n')
  return `${pad}${k}: z.object({\n${entries}\n${pad}}),`
}

function typeSig(v: Json): Json {
  if (v === null) return 'null'
  if (Array.isArray(v)) return v.length ? ['arr', typeSig(v[0])] : ['arr', 'empty']
  if (typeof v === 'object') return ['obj']
  return typeof v
}

function zodInline(v: Json, indent: number): string {
  if (v === null) return 'z.null()'
  if (typeof v === 'boolean') return 'z.boolean()'
  if (typeof v === 'number') return Number.isInteger(v) ? 'z.number().int()' : 'z.number()'
  if (typeof v === 'string') return 'z.string()'
  if (Array.isArray(v)) {
    if (!v.length) return 'z.array(z.unknown())'
    return `z.array(${zodInline(v[0], indent)})`
  }
  const entries = Object.entries(v as Record<string, Json>).map(([ik, iv]) => zodType(iv, 1, ik)).join('\n')
  return `z.object({\n${entries}\n  })`
}

export function JsonToZodClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('json-to-zod', locale, key, fb)
  const sample = getCalculatorSample('json-to-zod')
  const [json, setJson] = useState(sample?.json ?? '')

  const { code, error } = useMemo(() => {
    if (!json.trim()) return { code: '', error: '' }
    try {
      const parsed = JSON.parse(json) as Record<string, Json>
      if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
        return { code: '', error: L('rootObj', 'Root must be a JSON object ({ … })') }
      }
      const entries = Object.entries(parsed).map(([k, v]) => zodType(v, 1, k)).join('\n')
      return { code: `import { z } from 'zod'\n\nexport const Schema = z.object({\n${entries}\n})\n\nexport type Schema = z.infer<typeof Schema>`, error: '' }
    } catch (e) {
      return { code: '', error: (e as Error).message }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [json, locale])

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="jz-in" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Your JSON')}</label>
            {sample && <button type="button" onClick={() => setJson(sample.json ?? '')} className="btn btn-secondary px-3 py-1.5 text-xs">{L('loadSample', 'Load Sample')}</button>}
          </div>
          <textarea id="jz-in" value={json} onChange={(e) => setJson(e.target.value)} rows={12} spellCheck={false}
            placeholder={'{\n  "name": "Ada",\n  "age": 36,\n  "tags": ["math", "pioneer"],\n  "profile": { "verified": true }\n}'}
            className="w-full rounded-lg border p-4 font-mono text-xs outline-none transition focus:ring-2" style={selVars} />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>Zod schema</span>
            {code && <CopyButton value={code} />}
          </div>
          <pre className="h-[19rem] overflow-auto rounded-lg border p-4 font-mono text-xs whitespace-pre" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{code || '—'}</pre>
        </div>
      </div>

      {error && (
        <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 p-3 font-mono text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">⚠️ {error}</p>
      )}
      {code && <ResultActions summary={code} filename="schema.ts" downloadContent={code} mime="text/plain;charset=utf-8;" copyLabel={L('copySchema', 'Copy Schema')} />}
      <CalculatorNote>{L('note', '🧬 Integers become z.number().int(); mixed arrays emit z.union with up to 3 sample shapes; empty arrays fall back to z.unknown. Keys observed as null stay required-but-nullable — tighten .optional() by hand where APIs omit fields.')}</CalculatorNote>
    </div>
  )
}



// ── AES-GCM 加解密 ──
const PBKDF2_ITERATIONS = 150_000

async function deriveKey(password: string, salt: Uint8Array<ArrayBuffer>): Promise<CryptoKey> {
  const enc = new TextEncoder()
  const base = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey'])
  return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt'])
}

function b64(bytes: Uint8Array): string {
  let bin = ''
  bytes.forEach((b) => { bin += String.fromCharCode(b) })
  return btoa(bin)
}
function unb64(s: string): Uint8Array<ArrayBuffer> {
  const bin = atob(s)
  const buf = new ArrayBuffer(bin.length)
  const out = new Uint8Array(buf)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}

export function AesEncryptDecryptClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('aes-encrypt-decrypt', locale, key, fb)
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt')
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    void (async () => {
      if (!text || !password) { setOutput(''); setError(''); return }
      if (!crypto?.subtle) { setError(L('insecure', 'WebCrypto requires HTTPS or localhost')); return }
      try {
        const enc = new TextEncoder()
        if (mode === 'encrypt') {
          const salt = crypto.getRandomValues(new Uint8Array(16) as Uint8Array<ArrayBuffer>)
          const iv = crypto.getRandomValues(new Uint8Array(12) as Uint8Array<ArrayBuffer>)
          const key = await deriveKey(password, salt)
          const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(text))
          // 输出格式:salt:iv:ciphertext(均 base64),自包含可移植
          const portable = `AES-v1:${b64(salt)}:${b64(iv)}:${b64(new Uint8Array(ct))}`
          if (!cancelled) { setOutput(portable); setError('') }
        } else {
          const parts = text.trim().split(':')
          if (parts.length !== 4 || parts[0] !== 'AES-v1') throw new Error(L('badFormat', 'Not an AES-v1 payload (expected salt:iv:ciphertext)'))
          const key = await deriveKey(password, unb64(parts[1]))
          const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(parts[2]) }, key, unb64(parts[3]))
          if (!cancelled) { setOutput(new TextDecoder().decode(pt)); setError('') }
        }
      } catch (e) {
        if (!cancelled) {
          setError((e as Error).name === 'OperationError' ? L('wrongPassword', 'Wrong password or corrupted data (GCM tag failed)') : (e as Error).message)
          setOutput('')
        }
      }
    })()
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, password, mode])

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {([['encrypt', L('mEncrypt', 'Encrypt')], ['decrypt', L('mDecrypt', 'Decrypt')]] as const).map(([m, label]) => (
          <button key={m} type="button" onClick={() => { setMode(m); setText(''); setOutput('') }} aria-pressed={mode === m}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              mode === m ? 'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500 dark:bg-brand-950/40 dark:text-brand-300' : ''
            }`}
            style={mode === m ? undefined : { borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}>
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-4 rounded-lg p-4" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="ae-text" type="text" label={mode === 'encrypt' ? L('plainLabel', 'Text to encrypt') : L('payloadLabel', 'Encrypted payload (AES-v1:…)')} value={text} onChange={setText} placeholder={mode === 'encrypt' ? 'secret message' : 'AES-v1:…:…:…'} />
        <CalculatorField id="ae-pass" type="text" label={L('passLabel', 'Password')} value={password} onChange={setPassword} placeholder="strong passphrase" />
      </div>

      {error && (
        <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">⚠️ {error}</p>
      )}
      {output && (
        <div role="status" aria-live="polite">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{mode === 'encrypt' ? L('cipherOut', 'Encrypted (portable base64)') : L('plainOut', 'Decrypted text')}</span>
            <CopyButton value={output} />
          </div>
          <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap break-all" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{output}</pre>
        </div>
      )}
      <CalculatorNote>{L('note', '🔐 AES-256-GCM with PBKDF2-SHA256 (150k iterations) and a random 16-byte salt per encryption — output is self-contained (salt:iv:ciphertext), decryptable here or in any WebCrypto-compatible runtime. GCM authentication means wrong passwords fail loudly instead of yielding garbage.')}</CalculatorNote>
    </div>
  )
}
