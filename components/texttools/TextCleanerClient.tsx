'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { countWords } from '@/lib/text-stats'

/**
 * Text Cleaner —— 增强版文本清理工具
 *
 * 整合了 whitespace-remover / remove-line-breaks / remove-duplicate-lines / sort-lines
 * 的能力为可组合的勾选项,作为一个更强的共享组件挂在 whitespace-remover 路由下。
 * 其余三个独立工具保持不动(各自的 pSEO 路由与 SEO metadata 不受影响)。
 *
 * 处理顺序(管道):按行切 → (trimEachLine) → 过滤空行(dropEmptyLines) →
 * 去重(dedupe,保序) → 排序(sortAZ) → 折叠每行内多余空白(collapseSpaces) →
 * 选择拼接方式(joinMode:newline | space | single)。
 */
const SAMPLE = '   Hello    World   \n\n\n  extra   spaces  \n  duplicate  \n  duplicate  \n\n  trailing   \n  '

interface Options {
  collapseSpaces: boolean
  trimEachLine: boolean
  dropEmptyLines: boolean
  joinMode: 'newline' | 'space' | 'single'
  dedupe: boolean
  sortAZ: boolean
}

const DEFAULTS: Options = {
  collapseSpaces: true,
  trimEachLine: true,
  dropEmptyLines: true,
  joinMode: 'newline',
  dedupe: false,
  sortAZ: false,
}

export function TextCleanerClient({ slug = 'whitespace-remover' }: { slug?: string }) {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui(slug, locale, key, fb)
  const [input, setInput] = useState('')
  const [opts, setOpts] = useState<Options>(DEFAULTS)

  const setOpt = <K extends keyof Options>(key: K, value: Options[K]) =>
    setOpts((prev) => ({ ...prev, [key]: value }))

  const handleLoadSample = useCallback(() => setInput(SAMPLE), [])

  const output = useMemo(() => {
    if (!input) return ''
    let lines = input.split(/\r?\n/)

    if (opts.trimEachLine) lines = lines.map((l) => l.trim())
    if (opts.dropEmptyLines) lines = lines.filter((l) => l.trim() !== '')
    if (opts.dedupe) {
      const seen = new Set<string>()
      lines = lines.filter((l) => {
        if (seen.has(l)) return false
        seen.add(l)
        return true
      })
    }
    if (opts.sortAZ) lines = [...lines].sort((a, b) => a.localeCompare(b))
    if (opts.collapseSpaces) lines = lines.map((l) => l.replace(/\s+/g, ' ').trim())

    const sep = opts.joinMode === 'newline' ? '\n' : opts.joinMode === 'space' ? ' ' : ' '
    if (opts.joinMode === 'single') {
      return lines.join(' ').replace(/\s+/g, ' ').trim()
    }
    return lines.join(sep)
  }, [input, opts])

  const charCount = input.length
  // 中英混合口径:无空格的 CJK 文本按字计数,不再恒为 1 词
  const wordCount = countWords(input)

  const checkbox = (key: keyof Options, label: string) => (
    <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
      <input
        type="checkbox"
        checked={opts[key] as boolean}
        onChange={(e) => setOpt(key, e.target.checked as never)}
        className="h-4 w-4 rounded"
      />
      {label}
    </label>
  )

  return (
    <div className="space-y-5">
      {/* 选项区 */}
      <div className="grid grid-cols-2 gap-3 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        {checkbox('trimEachLine', L('trimEachLine', 'Trim each line'))}
        {checkbox('collapseSpaces', L('collapseSpaces', 'Collapse multiple spaces'))}
        {checkbox('dropEmptyLines', L('dropEmptyLines', 'Remove empty lines'))}
        {checkbox('dedupe', L('dedupe', 'Remove duplicate lines'))}
        {checkbox('sortAZ', L('sortAZ', 'Sort A → Z'))}
        <label className="flex items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          <span>{L('join', 'Join:')}</span>
          <select
            value={opts.joinMode}
            onChange={(e) => setOpt('joinMode', e.target.value as Options['joinMode'])}
            className="rounded border bg-white px-2 py-1 text-xs"
            style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text))' }}
          >
            <option value="newline">{L('joinNewline', 'Newlines (multi-line)')}</option>
            <option value="space">{L('joinSpace', 'Spaces (paragraph)')}</option>
            <option value="single">{L('joinSingle', 'Single line')}</option>
          </select>
        </label>
      </div>

      {/* 输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="text-input" className="text-sm font-medium text-slate-700">
            {L('yourText', 'Your text')}
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
            {input && (
              <button
                type="button"
                onClick={() => setInput('')}
                className="-my-1 rounded-md px-2 py-1 text-xs text-slate-400 hover:text-red-500 sm:text-sm"
              >
                {L('clear', 'Clear')}
              </button>
            )}
          </div>
        </div>
        <textarea
          id="text-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={L('placeholder', 'Paste messy text with extra spaces, blank lines, or duplicates...')}
          rows={6}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 输出区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('cleanedText', 'Cleaned text')}
          </label>
          <CopyButton value={output} disabled={!output} />
        </div>
        <textarea
          readOnly
          value={output}
          placeholder={L('resultPlaceholder', 'Result will appear here...')}
          rows={6}
          className="w-full rounded-lg border-2 p-4 font-mono text-sm outline-none"
          style={{
            borderColor: 'rgb(219 234 254)',
            backgroundColor: 'rgb(219 234 254 / 0.4)',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 统计 */}
      <div className="flex gap-4 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
        <span>{charCount.toLocaleString()} {L('characters', 'characters')}</span>
        <span>{wordCount.toLocaleString()} {L('words', 'words')}</span>
      </div>

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🧹 Combines whitespace collapsing, blank-line removal, deduplication, and sorting into one tool. Toggle any option above; everything runs locally in your browser.')}
      </p>
    </div>
  )
}
