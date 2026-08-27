'use client'

import { useState, useMemo, useEffect } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { CalculatorSliderField } from '@/components/calculator/CalculatorField'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * PX to REM / EM Converter
 *
 * 双向换算:px ↔ rem/em,基准为根字号(默认 16px)。
 * 附常用尺寸表(8-80px)。100% 本地。
 */

const COMMON_PX = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56, 64, 80]

// 根字号自定义值记忆:前端开发者反复回访时不必每次把 16px 拨回自己项目的基准(如 10px)。
// localStorage 只存一个数字;读取失败/隐私模式回退 16,与 slug-generator 历史同款容错。
const ROOT_SIZE_KEY = 'pxtorem-root-size'

function readStoredRootSize(): number {
  try {
    const raw = localStorage.getItem(ROOT_SIZE_KEY)
    if (!raw) return 16
    const n = Number(JSON.parse(raw))
    return Number.isFinite(n) && n >= 10 && n <= 28 ? Math.round(n) : 16
  } catch {
    return 16
  }
}

export function PxToRemClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('px-to-rem', locale, key, fb)

  // 首帧恒 16(SSR/水合一致),挂载后从 localStorage 恢复上次自定义值
  const [rootSize, setRootSize] = useState(16)
  const [px, setPx] = useState('')
  const [rem, setRem] = useState('')

  useEffect(() => {
    setRootSize(readStoredRootSize())
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(ROOT_SIZE_KEY, JSON.stringify(rootSize))
    } catch {
      // 隐私模式 / 配额失败 → 忽略,记忆只是增强而非功能依赖
    }
  }, [rootSize])

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

  const pxNum = parseFloat(px)
  const pxPreview = Number.isFinite(pxNum) && pxNum > 0 ? Math.min(pxNum, 120) : null

  return (
    <div className="space-y-5">
      {/* 根字号(滑杆) */}
      <CalculatorSliderField
        id="root-size"
        label={L('rootFontSize', 'Root font size')}
        value={String(rootSize)}
        onChange={(v) => setRootSize(Math.max(1, Number(v) || 16))}
        suffix="px"
        min={10}
        max={28}
        step={1}
      />

      {/* 实时字号预览:输入的 px 直接渲染成大字 + 比例条,「这个尺寸有多大」一眼可见 */}
      <div
        className="rounded-xl border p-4"
        style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
      >
        <div className="mb-2 text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>
          {L('livePreview', 'Live size preview')}
        </div>
        <div className="flex min-h-16 items-end gap-4">
          <span
            className="leading-none transition-all duration-200"
            style={{ fontSize: pxPreview ? `${pxPreview}px` : '16px', color: 'rgb(var(--text))' }}
          >
            Aa
          </span>
          <div className="h-2 flex-1 overflow-hidden rounded-full self-center" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
            <div
              className="h-full rounded-full transition-all duration-200"
              style={{
                width: `${pxPreview ? Math.min(100, (pxPreview / 80) * 100) : 20}%`,
                backgroundColor: 'rgb(var(--primary))',
              }}
            />
          </div>
          <span className="self-center font-mono text-xs tabular-nums" style={{ color: 'rgb(var(--text-muted))' }}>
            {px || '—'}
          </span>
        </div>
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
            aria-label={L('pxValueAriaLabel', 'PX value')}
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
          <div role="status" aria-live="polite" className="mt-2 space-y-1 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">rem:</span>
              <code className="rounded bg-blue-50 px-2 py-0.5 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                {fromPx.rem || '—'}
              </code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">{L('emParentRoot', 'em (parent = root)')}:</span>
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
            aria-label={L('remValueAriaLabel', 'REM value')}
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
          <div role="status" aria-live="polite" className="mt-2 space-y-1 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">px:</span>
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
                <th className="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">PX</th>
                <th className="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">REM</th>
                <th className="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{L('emParentRootHeader', 'EM (parent = root)')}</th>
                <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">{L('sizeBarHeader', 'Size')}</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_PX.map((p) => {
                const r = (p / rootSize).toFixed(4).replace(/\.?0+$/, '')
                return (
                  <tr key={p} className="border-t" style={{ borderColor: 'rgb(var(--border))' }}>
                    <td className="px-3 py-1.5 text-right font-mono tabular-nums">{p}</td>
                    <td className="px-3 py-1.5 text-right font-mono tabular-nums">{r}</td>
                    <td className="px-3 py-1.5 text-right font-mono tabular-nums">{r}</td>
                    <td className="w-1/3 px-3 py-1.5">
                      <div className="h-1.5 overflow-hidden rounded-full" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
                        <div
                          className="h-full rounded-full transition-all duration-200"
                          style={{ width: `${(p / 80) * 100}%`, backgroundColor: p === rootSize ? '#22c55e' : 'rgb(var(--primary))' }}
                        />
                      </div>
                    </td>
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
