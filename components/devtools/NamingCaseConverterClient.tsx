'use client'

import { useState, useMemo } from 'react'
import { CopyButton } from '@/components/CopyButton'

/**
 * Naming Case Converter —— 代码命名风格互转
 *
 * 分词:先按空格/_/-/./\// 切分,再处理 camelCase/PascalCase 边界
 * (getHTTPResponse → get/HTTP/Response → 全小写单词)。
 * 支持单个短语或多行批量模式(每行一个短语),实时输出 8 种命名风格。
 */

/** 把任意命名串切成小写单词数组 */
function splitWords(phrase: string): string[] {
  const words: string[] = []
  for (const chunk of phrase.trim().split(/[\s_\-./\\]+/)) {
    if (!chunk) continue
    // 小写/数字 → 大写边界;连续大写串 → 大写+小写边界(getHTTPResponse → get HTTP Response)
    const spaced = chunk
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    for (const w of spaced.split(/\s+/)) {
      if (w) words.push(w.toLowerCase())
    }
  }
  return words
}

const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s)

interface CaseDef {
  key: string
  label: string
  convert: (words: string[]) => string
}

const CASES: CaseDef[] = [
  { key: 'camel', label: 'camelCase', convert: (w) => w.map((x, i) => (i === 0 ? x : cap(x))).join('') },
  { key: 'pascal', label: 'PascalCase', convert: (w) => w.map(cap).join('') },
  { key: 'snake', label: 'snake_case', convert: (w) => w.join('_') },
  { key: 'constant', label: 'CONSTANT_CASE', convert: (w) => w.join('_').toUpperCase() },
  { key: 'kebab', label: 'kebab-case', convert: (w) => w.join('-') },
  { key: 'train', label: 'Train-Case', convert: (w) => w.map(cap).join('-') },
  { key: 'dot', label: 'dot.case', convert: (w) => w.join('.') },
  { key: 'path', label: 'path/case', convert: (w) => w.join('/') },
]

export function NamingCaseConverterClient() {
  const [input, setInput] = useState('user profile settings')
  const [bulk, setBulk] = useState(false)

  const results = useMemo(() => {
    if (bulk) {
      const lines = input
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)
      return CASES.map((c) => ({
        ...c,
        value: lines.map((l) => c.convert(splitWords(l))).join('\n'),
      }))
    }
    const words = splitWords(input)
    return CASES.map((c) => ({ ...c, value: words.length ? c.convert(words) : '' }))
  }, [input, bulk])

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="naming-input" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {bulk ? 'One phrase per line' : 'Phrase to convert'}
          </label>
          <label
            className="flex cursor-pointer items-center gap-2 text-sm"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            <input
              type="checkbox"
              checked={bulk}
              onChange={(e) => setBulk(e.target.checked)}
              className="h-4 w-4 accent-brand-600"
            />
            Bulk mode
          </label>
        </div>
        {bulk ? (
          <textarea
            id="naming-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={'user profile settings\ngetHTTPResponse\nAPI_BASE_URL'}
            rows={6}
            spellCheck={false}
            className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
            style={{
              borderColor: 'rgb(var(--border-strong))',
              backgroundColor: 'rgb(var(--bg-card))',
              color: 'rgb(var(--text))',
            }}
          />
        ) : (
          <input
            id="naming-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="user profile settings"
            spellCheck={false}
            className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
            style={{
              borderColor: 'rgb(var(--border-strong))',
              backgroundColor: 'rgb(var(--bg-card))',
              color: 'rgb(var(--text))',
            }}
          />
        )}
        <p className="mt-1.5 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
          Handles spaces, underscores, hyphens, dots, slashes and camelCase/PascalCase boundaries.
        </p>
      </div>

      {/* 输出网格 */}
      <div className="grid gap-3 sm:grid-cols-2">
        {results.map((r) => (
          <div
            key={r.key}
            className="rounded-lg border p-3 shadow-sm"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
          >
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-xs font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {r.label}
              </span>
              <CopyButton value={r.value} label="Copy" disabled={!r.value} />
            </div>
            {bulk ? (
              <pre
                className="whitespace-pre-wrap break-all font-mono text-sm"
                style={{ color: 'rgb(var(--text))' }}
              >
                {r.value || '—'}
              </pre>
            ) : (
              <div className="break-all font-mono text-sm" style={{ color: 'rgb(var(--text))' }}>
                {r.value || '—'}
              </div>
            )}
          </div>
        ))}
      </div>

      <p
        className="rounded-md p-3 text-xs"
        style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}
      >
        🔒 100% client-side — everything is converted in your browser, nothing leaves the page.
      </p>
    </div>
  )
}
