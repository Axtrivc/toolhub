'use client'

import { useState, useMemo } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { CopyButton } from '../CopyButton'
// 编码/解码双向工具(Base64 / URL / HTML)已迁移到 ./encoderTools.tsx
// (内置 Mode Toggle,各 encode/decode 路由复用同一组件)。

/**
 * 8 个开发者/Web 工具 - 补齐到 60 个
 * 全部对应真实高频搜索词,非凑数
 */

// ── 1. 随机数生成器(独立交互)──
export function RandomNumberGeneratorClient() {
  const [min, setMin] = useState('1')
  const [max, setMax] = useState('100')
  const [count, setCount] = useState('1')
  const [result, setResult] = useState('42')
  const [unique, setUnique] = useState(false)

  const generate = () => {
    const lo = Math.ceil(Number(min))
    const hi = Math.floor(Number(max))
    const n = Math.min(Number(count) || 1, 1000)
    if (lo > hi) { setResult('⚠️ Min > Max'); return }
    const range = hi - lo + 1
    if (unique && n > range) { setResult(`⚠️ Can't pick ${n} unique from ${range}`); return }
    const picked = new Set<number>()
    const out: number[] = []
    while (out.length < n) {
      const r = Math.floor(Math.random() * range) + lo
      if (unique) { if (!picked.has(r)) { picked.add(r); out.push(r) } }
      else out.push(r)
    }
    setResult(out.join(', '))
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Min</label>
          <input type="number" value={min} onChange={(e) => setMin(e.target.value)} className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Max</label>
          <input type="number" value={max} onChange={(e) => setMax(e.target.value)} className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">How many</label>
          <input type="number" value={count} onChange={(e) => setCount(e.target.value)} min="1" className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" checked={unique} onChange={(e) => setUnique(e.target.checked)} className="h-4 w-4 rounded border-slate-300 text-brand-600" />
        No repeats (unique numbers)
      </label>
      <div className="flex gap-3">
        <button onClick={generate} className="btn btn-primary">🎲 Generate</button>
        <CopyButton value={result} />
      </div>
      <div className="rounded-lg border-2 border-brand-100 bg-brand-50/40 p-4">
        <code className="font-mono text-lg text-brand-700">{result}</code>
      </div>
    </div>
  )
}

// ── 2. 密码强度检测器(独立)──
export function PasswordStrengthCheckerClient() {
  const [pw, setPw] = useState('')
  const analysis = useMemo(() => analyzePassword(pw), [pw])
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Enter a password to test</label>
        <input
          type="text"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Type your password..."
          className="w-full rounded-lg border border-slate-300 p-3 font-mono outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
      </div>
      {pw && (
        <div className="space-y-4">
          <div className="flex h-3 gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flex-1 rounded-full ${analysis.score >= i ? analysis.color : 'bg-slate-200'}`} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <ResultCard label="Strength" value={analysis.label} highlight />
            <ResultCard label="Length" value={String(pw.length)} />
            <ResultCard label="Entropy" value={`${analysis.entropy} bits`} />
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-700">Checklist</h3>
            <ul className="space-y-1 text-sm">
              <li className={analysis.hasUpper ? 'text-green-600' : 'text-slate-400'}>{analysis.hasUpper ? '✓' : '✗'} Uppercase letters</li>
              <li className={analysis.hasLower ? 'text-green-600' : 'text-slate-400'}>{analysis.hasLower ? '✓' : '✗'} Lowercase letters</li>
              <li className={analysis.hasNum ? 'text-green-600' : 'text-slate-400'}>{analysis.hasNum ? '✓' : '✗'} Numbers</li>
              <li className={analysis.hasSym ? 'text-green-600' : 'text-slate-400'}>{analysis.hasSym ? '✓' : '✗'} Symbols</li>
              <li className={pw.length >= 12 ? 'text-green-600' : 'text-slate-400'}>{pw.length >= 12 ? '✓' : '✗'} At least 12 characters</li>
            </ul>
          </div>
        </div>
      )}
      <CalculatorNote>🔒 Tested locally in your browser. Your password is never sent anywhere.</CalculatorNote>
    </div>
  )
}

function analyzePassword(pw: string) {
  const hasUpper = /[A-Z]/.test(pw)
  const hasLower = /[a-z]/.test(pw)
  const hasNum = /[0-9]/.test(pw)
  const hasSym = /[^A-Za-z0-9]/.test(pw)
  let pool = 0
  if (hasUpper) pool += 26
  if (hasLower) pool += 26
  if (hasNum) pool += 10
  if (hasSym) pool += 32
  const entropy = pool > 0 ? Math.round(pw.length * Math.log2(pool)) : 0
  let score: 0 | 1 | 2 | 3 | 4 = 0
  if (entropy >= 40) score = 2
  if (entropy >= 60) score = 3
  if (entropy >= 80) score = 4
  if (pw.length > 0 && entropy < 40) score = 1
  const labels = ['Empty', 'Very Weak', 'Weak', 'Strong', 'Very Strong']
  const colors = ['bg-slate-200', 'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500']
  return { hasUpper, hasLower, hasNum, hasSym, entropy, score, label: labels[score], color: colors[score] }
}
