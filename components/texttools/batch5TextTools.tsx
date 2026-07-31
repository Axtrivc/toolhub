'use client'

import { useState, useMemo } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { CopyButton } from '../CopyButton'
import { makeTextTool } from '../tools/makeTextTool'

/** 第八批:编码 + 文本工具 4 个 */

// ── MD5/SHA 哈希生成器 ──
export function HashGeneratorClient() {
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
        <label htmlFor="hash-input" className="mb-2 block text-sm font-medium text-slate-700">Text to hash</label>
        <textarea
          id="hash-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          className="w-full rounded-lg border border-slate-300 p-3 font-mono text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
      </div>
      <button onClick={generate} disabled={loading || !input} className="btn btn-primary disabled:opacity-50">
        {loading ? 'Hashing…' : '# Generate Hashes'}
      </button>
      {hashes && (
        <div className="space-y-4">
          <HashResult label="SHA-256" value={hashes.sha256} />
          <HashResult label="SHA-1" value={hashes.sha1} />
        </div>
      )}
      <CalculatorNote>
        🔐 Uses SubtleCrypto API (true cryptographic hashing). MD5 is broken for security — SHA-256 is recommended.
      </CalculatorNote>
    </div>
  )
}

function HashResult({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-medium uppercase text-slate-500">{label}</span>
        <CopyButton value={value} label="" />
      </div>
      <code className="block break-all font-mono text-xs text-slate-900">{value}</code>
    </div>
  )
}

// ── Slug → Title(反转 slug generator)──
export const SlugToTitleClient = makeTextTool({
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

// ── 二进制 ↔ 文本 ──
export const BinaryToTextClient = makeTextTool({
  inputLabel: 'Binary (space-separated bytes)',
  outputLabel: 'Decoded text',
  defaultInput: '01001000 01101001',
  transform: (s) => {
    const bytes = s.trim().split(/\s+/).filter(Boolean)
    try {
      const codes = bytes.map((b) => parseInt(b, 2))
      if (codes.some((c) => isNaN(c) || c < 0 || c > 255)) return '⚠️ Invalid binary'
      return String.fromCharCode(...codes)
    } catch {
      return '⚠️ Could not decode'
    }
  },
  note: '💾 Each group of 8 bits (1s and 0s) represents one ASCII character.',
})

export const TextToBinaryClient = makeTextTool({
  inputLabel: 'Text',
  outputLabel: 'Binary',
  defaultInput: 'Hi',
  transform: (s) =>
    [...s].map((c) => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' '),
  note: '💾 Converts each character to its 8-bit binary representation (ASCII/UTF-8).',
})
