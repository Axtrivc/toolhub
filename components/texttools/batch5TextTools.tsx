'use client'

import { useState, useMemo } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { CopyButton } from '../CopyButton'
import { makeTextTool } from '../tools/makeTextTool'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/** 第八批:编码 + 文本工具 4 个 */

// ── MD5/SHA 哈希生成器 ──
export function HashGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('hash-generator', locale, key, fb)
  const [input, setInput] = useState('Hello World')
  const [hashes, setHashes] = useState<{ sha256: string; sha1: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const generate = async () => {
    if (!input) return
    setLoading(true)
    try {
      const data = new TextEncoder().encode(input)
      const [sha256Buf, sha1Buf] = await Promise.all([
        crypto.subtle.digest('SHA-256', data),
        crypto.subtle.digest('SHA-1', data),
      ])
      const toHex = (buf: ArrayBuffer) =>
        [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
      setHashes({ sha256: toHex(sha256Buf), sha1: toHex(sha1Buf) })
    } catch {
      setHashes(null)
    }
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="hash-input" className="mb-2 block text-sm font-medium text-slate-700">{L('textToHash', 'Text to hash')}</label>
        <textarea
          id="hash-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          className="w-full rounded-lg border border-slate-300 p-3 font-mono text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
      </div>
      <button onClick={generate} disabled={loading || !input} className="btn btn-primary disabled:opacity-50">
        {loading ? L('hashing', 'Hashing…') : L('generateHashes', '# Generate Hashes')}
      </button>
      {hashes && (
        <div className="space-y-4">
          <HashResult label="SHA-256" value={hashes.sha256} />
          <HashResult
            label="SHA-1"
            value={hashes.sha1}
            warning={L('sha1Warning', '⚠️ Collision-broken since 2017 — not safe for signatures/certificates; use for legacy checksums only')}
          />
        </div>
      )}
      <CalculatorNote>
        {L('note', '🔐 Uses SubtleCrypto API (true cryptographic hashing). Both MD5 and SHA-1 are cryptographically broken — SHA-256 is recommended.')}
      </CalculatorNote>
    </div>
  )
}

function HashResult({ label, value, warning }: { label: string; value: string; warning?: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-medium uppercase text-slate-500">{label}</span>
        <CopyButton value={value} label="" />
      </div>
      {warning && <p className="mb-1 text-xs text-amber-600">{warning}</p>}
      <code className="block break-all font-mono text-xs text-slate-900">{value}</code>
    </div>
  )
}

// ── Slug → Title(反转 slug generator)──
export const SlugToTitleClient = makeTextTool({
  slug: 'slug-to-title',
  inputLabel: 'URL slug',
  outputLabel: 'Title',
  defaultInput: 'how-to-make-pancakes',
  transform: (s) =>
    s
      .replace(/[-_]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase()),
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
