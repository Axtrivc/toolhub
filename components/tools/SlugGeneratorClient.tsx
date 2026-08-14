'use client'

import { useState, useMemo, useEffect } from 'react'
import { generateSlug, type SlugOptions } from '@/lib/slug'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

interface HistoryItem {
  input: string
  slug: string
  ts: number
}

const STORAGE_KEY = 'slug-history'
const MAX_HISTORY = 8

const PRESET_EXAMPLES = [
  '10 SEO Tips for Better Rankings',
  'How to Build a SaaS in 2026',
  'Café & Résumé: A Guide',
  'Node.js vs Deno — Comparison',
]

export function SlugGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('slug-generator', locale, key, fb)

  const [input, setInput] = useState('')
  const [separator, setSeparator] = useState<'-' | '_'>('-')
  const [lowercase, setLowercase] = useState(true)
  const [removeSpecialChars, setRemoveSpecialChars] = useState(true)
  const [history, setHistory] = useState<HistoryItem[]>([])

  // 从 localStorage 恢复历史记录
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setHistory(JSON.parse(raw))
    } catch {
      // ignore
    }
  }, [])

  const options: SlugOptions = {
    separator,
    lowercase,
    removeSpecialChars,
  }

  const slug = useMemo(() => generateSlug(input, options), [input, separator, lowercase, removeSpecialChars])

  const handleSave = () => {
    if (!input.trim() || !slug) return
    const newItem: HistoryItem = { input: input.trim(), slug, ts: Date.now() }
    const next = [newItem, ...history.filter((h) => h.slug !== slug)].slice(0, MAX_HISTORY)
    setHistory(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // ignore
    }
  }

  const clearHistory = () => {
    setHistory([])
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }

  return (
    <div className="space-y-6">
      {/* 输入区 */}
      <div>
        <label htmlFor="slug-input" className="mb-2 block text-sm font-medium text-slate-700">
          {L('enterTitle', 'Enter your title or text')}
        </label>
        <textarea
          id="slug-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={L('inputPlaceholder', 'e.g. 10 Proven Ways to Increase Website Traffic')}
          rows={3}
          className="w-full rounded-lg border border-slate-300 p-3 text-slate-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          autoFocus
        />
        {/* 快速示例 */}
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="text-xs text-slate-400">{L('try', 'Try:')}</span>
          {PRESET_EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => setInput(ex)}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 sm:text-sm"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      {/* 选项区 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="separator" className="mb-1.5 block text-xs font-medium text-slate-600">
            {L('separator', 'Separator')}
          </label>
          <select
            id="separator"
            value={separator}
            onChange={(e) => setSeparator(e.target.value as '-' | '_')}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-500 sm:px-2 sm:py-1.5"
          >
            <option value="-">{L('sepHyphen', 'Hyphen ( - )')}</option>
            <option value="_">{L('sepUnderscore', 'Underscore ( _ )')}</option>
          </select>
        </div>

        <label className="flex items-end gap-2 pb-1.5 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          {L('lowercase', 'Lowercase')}
        </label>

        <label className="flex items-end gap-2 pb-1.5 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={removeSpecialChars}
            onChange={(e) => setRemoveSpecialChars(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          {L('stripSymbols', 'Strip symbols')}
        </label>
      </div>

      {/* 输出区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="slug-output" className="text-sm font-medium text-slate-700">
            {L('result', 'Result')}
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSave}
              disabled={!slug}
              className="btn btn-secondary px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            >
              {L('save', 'Save')}
            </button>
            <CopyButton value={slug} disabled={!slug} />
          </div>
        </div>
        <div className="flex items-center rounded-lg border-2 border-dashed border-brand-200 bg-brand-50/40 p-4">
          <code
            id="slug-output"
            className="min-h-[1.75rem] flex-1 break-all font-mono text-lg text-brand-700"
          >
            {slug || <span className="text-slate-300">{L('slugPlaceholder', 'your-slug-will-appear-here')}</span>}
          </code>
        </div>
      </div>

      {/* 历史记录 */}
      {history.length > 0 && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-700">{L('recent', 'Recent')}</h3>
            <button
              type="button"
              onClick={clearHistory}
              className="-my-1 rounded-md px-2 py-1 text-xs text-slate-400 hover:text-red-500 sm:text-sm"
            >
              {L('clear', 'Clear')}
            </button>
          </div>
          <ul className="divide-y divide-slate-100 rounded-lg border border-slate-200">
            {history.map((item) => (
              <li key={item.ts} className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm">
                <div className="min-w-0 flex-1">
                  <div className="truncate text-slate-500" title={item.input}>
                    {item.input}
                  </div>
                  <code className="font-mono text-brand-600">{item.slug}</code>
                </div>
                <CopyButton value={item.slug} label={L('copy', 'Copy')} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
