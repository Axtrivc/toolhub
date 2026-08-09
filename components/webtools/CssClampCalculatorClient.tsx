'use client'

import { useState, useMemo } from 'react'
import { CalculatorField, ResultCard, CalculatorShell, CalculatorNote } from '@/components/calculator/CalculatorField'
import { CopyButton } from '@/components/CopyButton'

/**
 * CSS clamp() Fluid Typography Calculator —— 纯前端计算
 *
 * 由 min/max 字号 + min/max 视口求斜率(slope, vw)与截距(intercept, px),
 * 生成 clamp(min, intercept + slope*vw, max),并给出常见视口下的实际字号表。
 */

const TABLE_VIEWPORTS = [320, 375, 576, 768, 1024, 1280, 1440, 1920]

/** 保留 4 位小数并去掉多余的 0 */
function fmt(n: number): string {
  return String(Math.round(n * 10000) / 10000)
}

/** preferred 部分:`±X<unit> + Yvw`,负截距时写法更规范 */
function preferredPart(intercept: number, slopeVw: number, unit: 'px' | 'rem'): string {
  const sign = intercept < 0 ? '-' : ''
  return `${sign}${fmt(Math.abs(intercept))}${unit} + ${fmt(slopeVw)}vw`
}

export function CssClampCalculatorClient() {
  const [minFs, setMinFs] = useState('16')
  const [maxFs, setMaxFs] = useState('24')
  const [minVp, setMinVp] = useState('375')
  const [maxVp, setMaxVp] = useState('1440')
  const [root, setRoot] = useState('16')
  const [testVp, setTestVp] = useState('768')

  // 核心计算 + 输入校验
  const calc = useMemo(() => {
    const minF = Number(minFs)
    const maxF = Number(maxFs)
    const minV = Number(minVp)
    const maxV = Number(maxVp)
    const rootF = Number(root)
    if (![minF, maxF, minV, maxV, rootF].every(Number.isFinite)) {
      return { error: 'All fields must be valid numbers.' as const }
    }
    if (rootF <= 0) return { error: 'Root font size must be greater than 0.' as const }
    if (minF <= 0 || maxF <= 0) return { error: 'Font sizes must be greater than 0.' as const }
    if (minF >= maxF) return { error: 'Min font size must be smaller than max font size.' as const }
    if (minV <= 0 || minV >= maxV) {
      return { error: 'Min viewport must be smaller than max viewport.' as const }
    }
    const slopeVw = ((maxF - minF) / (maxV - minV)) * 100
    const interceptPx = minF - (slopeVw * minV) / 100
    return { minF, maxF, minV, maxV, rootF, slopeVw, interceptPx }
  }, [minFs, maxFs, minVp, maxVp, root])

  const error = 'error' in calc ? calc.error : null

  // 某视口下的实际字号(clamp 语义:preferred 超出 [min,max] 时被夹住)
  const fluidPx = useMemo(() => {
    if (error) return null
    const c = calc as Exclude<typeof calc, { error: string }>
    return (v: number) =>
      Math.min(c.maxF, Math.max(c.minF, c.interceptPx + (c.slopeVw * v) / 100))
  }, [calc, error])

  const output = useMemo(() => {
    if (error || !fluidPx) return null
    const c = calc as Exclude<typeof calc, { error: string }>
    const clampRem = `clamp(${fmt(c.minF / c.rootF)}rem, ${preferredPart(c.interceptPx / c.rootF, c.slopeVw, 'rem')}, ${fmt(c.maxF / c.rootF)}rem)`
    const clampPx = `clamp(${fmt(c.minF)}px, ${preferredPart(c.interceptPx, c.slopeVw, 'px')}, ${fmt(c.maxF)}px)`
    const css = `font-size: ${clampRem};\n/* px units: font-size: ${clampPx}; */`
    const tv = Number(testVp)
    const tvValid = Number.isFinite(tv) && tv > 0
    return { clampRem, clampPx, css, tv, tvValid }
  }, [calc, error, fluidPx, testVp])

  const c = error ? null : (calc as Exclude<typeof calc, { error: string }>)
  const tvFluid = output && output.tvValid && fluidPx ? fluidPx(output.tv) : null
  const tvClamped = c && output && output.tvValid && (output.tv < c.minV || output.tv > c.maxV)

  return (
    <CalculatorShell
      inputs={
        <>
          <CalculatorField id="clamp-min-fs" label="Min font size" suffix="px" value={minFs} onChange={setMinFs} />
          <CalculatorField id="clamp-max-fs" label="Max font size" suffix="px" value={maxFs} onChange={setMaxFs} />
          <CalculatorField id="clamp-min-vp" label="Min viewport" suffix="px" value={minVp} onChange={setMinVp} />
          <CalculatorField id="clamp-max-vp" label="Max viewport" suffix="px" value={maxVp} onChange={setMaxVp} />
          <CalculatorField id="clamp-root" label="Root font size (for rem)" suffix="px" value={root} onChange={setRoot} />
          <CalculatorField id="clamp-test-vp" label="Test at viewport" suffix="px" value={testVp} onChange={setTestVp} />
        </>
      }
      results={
        error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            ⚠️ {error}
          </div>
        ) : (
          c && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <ResultCard label="Slope" value={`${fmt(c.slopeVw)}vw`} sublabel="growth per 100px of viewport" />
              <ResultCard
                label="Intercept"
                value={`${fmt(c.interceptPx)}px`}
                sublabel="preferred size at 0 viewport width"
              />
              <ResultCard
                label={output && output.tvValid ? `Size at ${fmt(output.tv)}px` : 'Test viewport'}
                value={tvFluid !== null ? `${fmt(tvFluid)}px` : '—'}
                sublabel={tvFluid !== null && c ? `${fmt(tvFluid / c.rootF)}rem` : 'enter a width above'}
                highlight
              />
            </div>
          )
        )
      }
    >
      {/* 测试视口超出范围提示 */}
      {tvClamped && c && output && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⚠️ {fmt(output.tv)}px is outside your {fmt(c.minV)}–{fmt(c.maxV)}px viewport range, so the
          font size is clamped at {output.tv < c.minV ? 'the minimum' : 'the maximum'} (
          {fmt(tvFluid ?? 0)}px) rather than scaling further.
        </div>
      )}

      {/* clamp 输出 */}
      {output && (
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              CSS clamp()
            </span>
            <CopyButton value={output.css} label="Copy CSS" />
          </div>
          <pre
            className="w-full overflow-x-auto rounded-lg border p-4 font-mono text-sm shadow-sm"
            style={{
              borderColor: 'rgb(var(--border-strong))',
              backgroundColor: 'rgb(var(--bg-card))',
              color: 'rgb(var(--text))',
            }}
          >
            {output.css}
          </pre>
        </div>
      )}

      {/* 常见视口字号表 */}
      {output && c && fluidPx && (
        <div>
          <div className="mb-1.5 text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            Computed size at common viewports
          </div>
          <div
            className="overflow-x-auto rounded-lg border"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
                  <th className="px-4 py-2.5 text-left font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                    Viewport
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                    Fluid size
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                    rem
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                    State
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_VIEWPORTS.map((vp) => {
                  const px = fluidPx(vp)
                  const clampedLow = vp < c.minV
                  const clampedHigh = vp > c.maxV
                  return (
                    <tr key={vp} className="border-t" style={{ borderColor: 'rgb(var(--border))' }}>
                      <td className="px-4 py-2.5 font-mono" style={{ color: 'rgb(var(--text))' }}>
                        {vp}px
                      </td>
                      <td className="px-4 py-2.5 font-mono font-semibold" style={{ color: 'rgb(var(--text))' }}>
                        {fmt(px)}px
                      </td>
                      <td className="px-4 py-2.5 font-mono" style={{ color: 'rgb(var(--text-subtle))' }}>
                        {fmt(px / c.rootF)}rem
                      </td>
                      <td className="px-4 py-2.5 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
                        {clampedLow ? 'clamped (min)' : clampedHigh ? 'clamped (max)' : 'scaling'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <CalculatorNote>
        📐 The math: fluid type scales linearly between your two viewport points.{' '}
        <code>slope = (maxFs − minFs) / (maxVp − minVp) × 100</code> gives the growth in <code>vw</code>
        , and <code>intercept = minFs − slope × minVp / 100</code> is the px offset. The preferred
        value <code>intercept + slope × vw</code> scales with the viewport, while{' '}
        <code>clamp(min, preferred, max)</code> pins it inside your font-size range. rem output uses
        your root font size, so the result respects user zoom preferences.
      </CalculatorNote>
    </CalculatorShell>
  )
}
