'use client'

import { useState, useMemo } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * PX to REM / EM Converter
 *
 * 双向换算:px ↔ rem/em,基准为根字号(默认 16px)。
 * 附常用尺寸表(8-80px)。100% 本地。
 */

const COMMON_PX = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56, 64, 80]

export function PxToRemClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('px-to-rem', locale, key, fb)

  const [rootSize, setRootSize] = useState(16)
  const [px, setPx] = useState('')
  const [rem, setRem] = useState('')

  // px → rem/em(实时)
  const fromPx = useMemo(() => {
    const n = parseFloat(px)
    if (!px || isNaN(n) || rootSize <= 0) return { rem: '', em: '' }
    return { rem: (n / rootSize).toFixed(4).replace(/\.?0+$/, ''), em: (n / rootSize).toFixed(4).replace(/\.?0+$/, '') }
  }, [px, rootSize])

  // rem → px(实时)
  const fromRem = useMemo(() => {
    const n = parseFloat(rem)
    if (!rem || isNaN(n) || rootSize <= 0) return ''
    return String(Math.round(n * rootSize * 1000) / 1000)
  }, [rem, rootSize])

  const inputCls =
    'w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2 font-mono'
  const cellCls =
    'w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2 font-mono'

  return (
    <div className="space-y-5">
      {/* 根字号 */}
      <div className="flex items-center gap-3">
        <label htmlFor="root-size" className="text-sm font-medium text-slate-700">
          {L('rootFontSize', 'Root font size')}
        </label>
        <input
          id="root-size"
          type="number"
          min={1}
          value={rootSize}
          onChange={(e) => setRootSize(Math.max(1, Number(e.target.value) || 16))}
          className={`${cellCls} w-24`}
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
        />
        <span className="text-sm text-slate-400">px</span>
      </div>

      {/* 双向换算 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* px → rem */}
        <div className="rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
          <div className="mb-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('pxToRemHeading', 'PX → REM / EM')}</div>
          <input
            type="number"
            value={px}
            onChange={(e) => setPx(e.target.value)}
            placeholder="16"
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
          <div className="mt-2 space-y-1 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">rem:</span>
              <code className="rounded bg-blue-50 px-2 py-0.5 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                {fromPx.rem || '—'}
              </code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">em:</span>
              <code className="rounded bg-blue-50 px-2 py-0.5 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                {fromPx.em || '—'}
              </code>
            </div>
          </div>
        </div>

        {/* rem → px */}
        <div className="rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
          <div className="mb-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('remToPxHeading', 'REM → PX')}</div>
          <input
            type="number"
            value={rem}
            onChange={(e) => setRem(e.target.value)}
            placeholder="1"
            step={0.1}
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
          <div className="mt-2 space-y-1 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">px:</span>
              <code className="rounded bg-blue-50 px-2 py-0.5 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                {fromRem || '—'}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* 常用尺寸表 */}
      <div>
        <h3 className="mb-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('commonSizesPrefix', 'Common Sizes (root =')} {rootSize}px)</h3>
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'rgb(var(--border))' }}>
          <table className="w-full text-left text-xs">
            <thead style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
              <tr>
                <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">PX</th>
                <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">REM</th>
                <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">EM</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_PX.map((p) => {
                const r = (p / rootSize).toFixed(4).replace(/\.?0+$/, '')
                return (
                  <tr key={p} className="border-t" style={{ borderColor: 'rgb(var(--border))' }}>
                    <td className="px-3 py-1.5 font-mono">{p}</td>
                    <td className="px-3 py-1.5 font-mono">{r}</td>
                    <td className="px-3 py-1.5 font-mono">{r}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('noteText', '🔒 100% client-side — all conversions compute locally.')} <code>rem = px ÷ root-font-size</code>.
      </p>
    </div>
  )
}
