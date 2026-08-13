'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'

/**
 * List Diff & Intersection Checker
 *
 * 比较两个列表(每行一项),输出 4 个集合:
 *   只在 A / 只在 B / 交集(both)/ 并集(union)。
 * 选项:trim、case-sensitive、去重。100% 本地。
 */

const SAMPLE_A = `apple
banana
cherry
date
Apple
Elderberry`

const SAMPLE_B = `banana
cherry
fig
apple
grape`

interface DiffResult {
  onlyA: string[]
  onlyB: string[]
  both: string[]
  union: string[]
}

function computeDiff(a: string, b: string, opts: { trim: boolean; caseSensitive: boolean; dedupe: boolean }): DiffResult {
  const split = (s: string) => {
    let arr = s.replace(/\r\n/g, '\n').split('\n')
    if (opts.trim) arr = arr.map((x) => x.trim())
    // 过滤空行（不做 lowercase；大小写归一化只在 toMap 的 key 上做，value 保留原值）
    arr = arr.filter((x) => x !== '')
    return arr
  }

  const listA = split(a)
  const listB = split(b)

  // 用 Map 保留原始大小写展示(case-insensitive 时 key 归一化,value 保留首次出现的原值)
  const toMap = (arr: string[]): Map<string, string> => {
    const m = new Map<string, string>()
    for (const item of arr) {
      const key = opts.caseSensitive ? item : item.toLowerCase()
      if (!m.has(key)) m.set(key, item)
      else if (!opts.dedupe) {
        // 非去重时不覆盖,但 Map 只保留首个 —— 这里仍只存首个用于展示
      }
    }
    return m
  }

  const mapA = toMap(listA)
  const mapB = toMap(listB)

  const onlyA: string[] = []
  const onlyB: string[] = []
  const both: string[] = []
  const union: string[] = []

  for (const [key, val] of mapA) {
    if (mapB.has(key)) both.push(val)
    else onlyA.push(val)
    union.push(val)
  }
  for (const [key, val] of mapB) {
    if (!mapA.has(key)) {
      onlyB.push(val)
      union.push(val)
    }
  }

  return { onlyA, onlyB, both, union }
}

export function ListDiffClient() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [trim, setTrim] = useState(true)
  const [caseSensitive, setCaseSensitive] = useState(false)

  const opts = { trim, caseSensitive, dedupe: true }

  const result = useMemo<DiffResult>(() => {
    if (!a.trim() && !b.trim()) return { onlyA: [], onlyB: [], both: [], union: [] }
    return computeDiff(a, b, opts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [a, b, trim, caseSensitive])

  const handleLoadSample = useCallback(() => {
    setA(SAMPLE_A)
    setB(SAMPLE_B)
  }, [])

  const taCls =
    'w-full rounded-lg border p-4 font-mono text-xs shadow-sm outline-none transition focus:ring-2'

  const sections: { label: string; items: string[]; color: string }[] = [
    { label: 'Only in A', items: result.onlyA, color: 'text-blue-600' },
    { label: 'Only in B', items: result.onlyB, color: 'text-orange-600' },
    { label: 'In Both (Intersection)', items: result.both, color: 'text-green-600' },
    { label: 'Union (All Unique)', items: result.union, color: 'text-slate-600' },
  ]

  return (
    <div className="space-y-5">
      {/* 两个输入框 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="list-a" className="text-sm font-medium text-slate-700">
              List A
            </label>
          </div>
          <textarea
            id="list-a"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="One item per line…"
            rows={8}
            spellCheck={false}
            className={taCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="list-b" className="text-sm font-medium text-slate-700">
              List B
            </label>
          </div>
          <textarea
            id="list-b"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="One item per line…"
            rows={8}
            spellCheck={false}
            className={taCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
      </div>

      {/* 选项 + 加载示例 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
            <input type="checkbox" checked={trim} onChange={(e) => setTrim(e.target.checked)} className="accent-blue-600" />
            Trim whitespace
          </label>
          <label className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
              className="accent-blue-600"
            />
            Case sensitive
          </label>
        </div>
        <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
      </div>

      {/* 结果 */}
      {(a.trim() || b.trim()) && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sections.map((sec) => (
            <div key={sec.label} className="rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
              <div className="mb-2 flex items-center justify-between">
                <span className={`text-sm font-semibold ${sec.color}`}>{sec.label}</span>
                <span className="rounded-md px-1.5 py-0.5 text-[11px]" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
                  {sec.items.length}
                </span>
              </div>
              {sec.items.length > 0 ? (
                <>
                  <pre className="mb-2 max-h-40 overflow-auto whitespace-pre-wrap break-words font-mono text-xs" style={{ color: 'rgb(var(--text))' }}>
                    {sec.items.join('\n')}
                  </pre>
                  <CopyButton value={sec.items.join('\n')} label="Copy" />
                </>
              ) : (
                <p className="text-xs text-slate-400">No items.</p>
              )}
            </div>
          ))}
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        🔒 100% client-side — lists are compared locally. Duplicates within each list are collapsed by default.
      </p>
    </div>
  )
}
