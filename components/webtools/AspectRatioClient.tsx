'use client'

import { useState, useMemo } from 'react'

/**
 * Aspect Ratio Calculator
 *
 * 给定比例 W:H + 任一已知宽/高 → 算出另一边;或把比例"塞进"一个边界框(fit)。
 * 支持预设(16:9, 4:3, 21:9, 1:1, 9:16, 3:2)。100% 本地。
 */

const PRESETS: { label: string; w: number; h: number }[] = [
  { label: '16:9', w: 16, h: 9 },
  { label: '4:3', w: 4, h: 3 },
  { label: '21:9', w: 21, h: 9 },
  { label: '1:1', w: 1, h: 1 },
  { label: '9:16', w: 9, h: 16 },
  { label: '3:2', w: 3, h: 2 },
  { label: '5:4', w: 5, h: 4 },
]

export function AspectRatioClient() {
  const [ratioW, setRatioW] = useState(16)
  const [ratioH, setRatioH] = useState(9)
  const [width, setWidth] = useState('1920')
  const [height, setHeight] = useState('')

  // 已知宽 → 高 / 已知高 → 宽
  const computed = useMemo(() => {
    if (ratioW <= 0 || ratioH <= 0) return { width: '', height: '' }
    const w = parseFloat(width)
    const h = parseFloat(height)
    if (width && !isNaN(w) && w > 0) {
      return { width: String(w), height: String(Math.round((w * ratioH) / ratioW)) }
    }
    if (height && !isNaN(h) && h > 0) {
      return { width: String(Math.round((h * ratioW) / ratioH)), height: String(h) }
    }
    return { width: '', height: '' }
  }, [ratioW, ratioH, width, height])

  const inputCls =
    'w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2 font-mono'

  const applyPreset = (w: number, h: number) => {
    setRatioW(w)
    setRatioH(h)
  }

  return (
    <div className="space-y-5">
      {/* 比例输入 + 预设 */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Aspect Ratio</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={1}
            value={ratioW}
            onChange={(e) => setRatioW(Math.max(1, Number(e.target.value) || 1))}
            className={`${inputCls} w-24`}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
          <span className="text-lg text-slate-400">:</span>
          <input
            type="number"
            min={1}
            value={ratioH}
            onChange={(e) => setRatioH(Math.max(1, Number(e.target.value) || 1))}
            className={`${inputCls} w-24`}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => applyPreset(p.w, p.h)}
              className="rounded-full border px-2.5 py-1 text-xs font-medium transition hover:bg-brand-50"
              style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* 已知宽 / 高 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
          <div className="mb-2 text-sm font-semibold text-slate-700">Width (px)</div>
          <input
            type="number"
            value={width}
            onChange={(e) => {
              setWidth(e.target.value)
              setHeight('')
            }}
            placeholder="enter width…"
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
          <div className="mb-2 text-sm font-semibold text-slate-700">Height (px)</div>
          <input
            type="number"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value)
              setWidth('')
            }}
            placeholder="or enter height…"
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
      </div>

      {/* 结果 */}
      {(computed.width || computed.height) && (
        <div className="rounded-lg border border-blue-100 bg-gradient-to-b from-blue-50/40 to-transparent p-4 dark:border-blue-900/40">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-xs uppercase text-slate-400">Width</div>
              <div className="mt-1 text-2xl font-bold" style={{ color: 'rgb(var(--text))' }}>
                {computed.width || '—'}
                <span className="ml-1 text-sm font-normal text-slate-400">px</span>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase text-slate-400">Height</div>
              <div className="mt-1 text-2xl font-bold" style={{ color: 'rgb(var(--text))' }}>
                {computed.height || '—'}
                <span className="ml-1 text-sm font-normal text-slate-400">px</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        🔒 100% client-side. Enter a ratio and one dimension; the other is computed as{' '}
        <code>dim = known × (target / source)</code>.
      </p>
    </div>
  )
}
