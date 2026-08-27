'use client'

import { useState } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { CopyButton } from '../CopyButton'
import { makeTextTool } from '../tools/makeTextTool'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/** 第八批:编码 + 文本工具 4 个 */

// ── MD5/SHA 哈希生成器 ──
/** SubtleCrypto 支持的全部算法(MD5 不在其列);默认 SHA-256 */
const HASH_ALGOS = ['SHA-256', 'SHA-384', 'SHA-512', 'SHA-1'] as const
type HashAlgo = (typeof HASH_ALGOS)[number]

export function HashGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('hash-generator', locale, key, fb)
  const [input, setInput] = useState('Hello World')
  const [algo, setAlgo] = useState<HashAlgo>('SHA-256')
  const [hash, setHash] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const generate = async () => {
    if (!input) return
    setLoading(true)
    setError('')
    try {
      const data = new TextEncoder().encode(input)
      const buf = await crypto.subtle.digest(algo, data)
      const toHex = (buf: ArrayBuffer) =>
        [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
      setHash(toHex(buf))
    } catch {
      // crypto.subtle 仅在安全上下文(https / localhost)可用:失败要可见,不能静默空白
      setHash(null)
      setError(L('cryptoUnavailable', '⚠️ Secure hashing (SubtleCrypto) is not available in this context — open this page over HTTPS or localhost'))
    }
    setLoading(false)
  }

  return (
    // form 包裹:D3 单按钮工具 Enter 直接触发生成(移动端免点击)
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault()
        generate()
      }}
    >
      <div>
        <label htmlFor="hash-input" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">{L('textToHash', 'Text to hash')}</label>
        <textarea
          id="hash-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            // D3:textarea 里裸 Enter 是换行,Ctrl/Enter ⌘Enter 才提交(文本工具惯例)
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
              e.preventDefault()
              if (!loading && input) generate()
            }
          }}
          rows={4}
          className="w-full rounded-lg border border-slate-300 p-3 font-mono text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-100"
        />
      </div>
      <div>
        <label htmlFor="hash-algo" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">{L('algorithm', 'Algorithm')}</label>
        <select
          id="hash-algo"
          value={algo}
          onChange={(e) => {
            setAlgo(e.target.value as HashAlgo)
            // 切换算法后旧哈希不再对应所选算法,清空避免误导
            setHash(null)
          }}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
        >
          {HASH_ALGOS.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>
      <button type="submit" disabled={loading || !input} className="btn btn-primary disabled:opacity-50">
        {loading ? L('hashing', 'Hashing…') : L('generateHashes', '# Generate Hashes')}
      </button>
      {error && <p role="alert" className="text-sm text-red-600 dark:text-red-300">{error}</p>}
      {hash && (
        <div role="status" aria-live="polite">
          <HashResult
            label={algo}
            value={hash}
            warning={algo === 'SHA-1' ? L('sha1Warning', '⚠️ Collision-broken since 2017 — not safe for signatures/certificates; use for legacy checksums only') : undefined}
          />
        </div>
      )}
      <CalculatorNote>
        {L('note', '🔐 Uses SubtleCrypto API (true cryptographic hashing). Pick SHA-256 (default), SHA-384, or SHA-512 — SHA-1 is cryptographically broken and offered for legacy checksums only.')}
      </CalculatorNote>
    </form>
  )
}

function HashResult({ label, value, warning }: { label: string; value: string; warning?: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-medium uppercase text-slate-500 dark:text-slate-400">{label}</span>
        <CopyButton value={value} label="" />
      </div>
      {warning && <p className="mb-1 text-xs text-amber-600 dark:text-amber-400">{warning}</p>}
      <code className="block break-all font-mono text-xs text-slate-900 dark:text-slate-100">{value}</code>
    </div>
  )
}

/** 词首大写辅助:撇号(' 与 ’ U+2019)不算词边界 —— "don't" 不会变成 "Don'T" */
function titleCaseWords(t: string): string {
  return t.replace(
    /(^|[^\p{L}\p{N}_'\u2019])(\p{L})/gu,
    (_m, p1: string, p2: string) => p1 + p2.toUpperCase(),
  )
}

// ── Slug → Title(反转 slug generator)──
export const SlugToTitleClient = makeTextTool({
  slug: 'slug-to-title',
  inputLabel: 'URL slug',
  outputLabel: 'Title',
  defaultInput: 'how-to-make-pancakes',
  transform: (s) =>
    titleCaseWords(
      s
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim(),
    ),
  note: '🔤 Reverses URL slugs back to readable titles. Replaces hyphens with spaces and capitalizes words.',
})

// ── 二进制 ↔ 文本(UTF-8 字节,支持中文/emoji,两工具互逆)──
export const BinaryToTextClient = makeTextTool({
  slug: 'binary-to-text',
  inputLabel: 'Binary (space-separated bytes)',
  outputLabel: 'Decoded text',
  defaultInput: '01001000 01101001',
  transform: (s) => {
    const bytes = s.trim().split(/\s+/).filter(Boolean)
    try {
      // 每组必须是纯 0/1 且 ≤8 位:parseInt('102', 2) 会宽松解析成 2,必须显式拦截
      if (bytes.some((b) => !/^[01]{1,8}$/.test(b))) return '⚠️ Invalid binary (use groups of 0s and 1s, up to 8 bits each)'
      const codes = bytes.map((b) => parseInt(b, 2))
      // 用 TextDecoder 按 UTF-8 解码,与 TextToBinary 的 UTF-8 编码互逆
      return new TextDecoder('utf-8').decode(new Uint8Array(codes))
    } catch {
      return '⚠️ Could not decode'
    }
  },
  note: '💾 Each group of 8 bits is one UTF-8 byte. Supports Unicode (Chinese, emoji).',
})

export const TextToBinaryClient = makeTextTool({
  slug: 'text-to-binary',
  inputLabel: 'Text',
  outputLabel: 'Binary',
  defaultInput: 'Hi',
  transform: (s) => {
    // 按 UTF-8 字节编码(而非 UTF-16 码元),与 BinaryToText 互逆,支持中文/emoji
    const bytes = new TextEncoder().encode(s)
    return [...bytes].map((b) => b.toString(2).padStart(8, '0')).join(' ')
  },
  note: '💾 Converts text to UTF-8 binary — each character becomes one or more 8-bit bytes.',
})
