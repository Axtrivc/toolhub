'use client'

/**
 * 纯 SVG 横向堆叠对比条 - 零依赖,静态导出友好。
 *
 * 用途:两三个方案的成本构成对比(如 30 年 vs 15 年贷款的
 * 本金/利息构成,"费用吞噬"对比)。所有行共用同一比例尺,
 * 总长差异一眼可比;每段色块对应一个构成分量。
 * SSR 首帧渲染终态;入场动画仅动 opacity(reduced-motion 直显)。
 */

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from '../motion/MotionPrimitives'
import { ChartCard, fmtCompact } from './chartKit'

export interface StackedRow {
  /** 行名称(如 "30-year fixed") */
  label: string
  segments: { label: string; value: number; color: string }[]
}

export interface StackedCompareChartProps {
  title?: string
  rows: StackedRow[]
  /** 行尾总值格式化(默认紧凑缩写) */
  formatTotal?: (n: number) => string
}

const BAR_H = 26
const ROW_GAP = 30
const LABEL_H = 16
/* viewBox 宽度自适应:桌面 ≥640 与旧版完全一致(W=640);移动端跟随
   容器实宽(≥320),让 11~12px 行标签/总值 ~1:1 渲染 —— 固定 640 时
   会被缩到 ~6px 完全不可读 */
const W_MIN = 240
const W_MAX = 640

export function StackedCompareChart({ title, rows, formatTotal = fmtCompact }: StackedCompareChartProps) {
  const reduceMotion = useReducedMotion()
  const svgRef = useRef<SVGSVGElement>(null)
  // SSR 首帧用 W_MAX(与旧渲染一致);挂载后 ResizeObserver 校准到容器实宽
  const [W, setW] = useState(W_MAX)
  useEffect(() => {
    const el = svgRef.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(() => {
      const cw = el.clientWidth
      if (cw > 0) setW(Math.max(W_MIN, Math.min(W_MAX, Math.round(cw))))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const validRows = rows
    .map((r) => ({ ...r, segments: r.segments.filter((s) => Number.isFinite(s.value) && s.value > 0) }))
    .filter((r) => r.segments.length > 0)

  if (validRows.length === 0) return null

  const totals = validRows.map((r) => r.segments.reduce((sum, s) => sum + s.value, 0))
  const maxTotal = Math.max(...totals)
  const barW = W // 条形满宽 = 全局最大总值
  const H = validRows.length * (LABEL_H + BAR_H + ROW_GAP)

  // 图例:按 label 去重保序
  const legendKeys = new Map<string, string>()
  for (const r of validRows) for (const s of r.segments) if (!legendKeys.has(s.label)) legendKeys.set(s.label, s.color)

  return (
    <ChartCard title={title}>
      <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={title ?? 'comparison'}>
        {validRows.map((r, ri) => {
          const total = totals[ri]
          const y0 = ri * (LABEL_H + BAR_H + ROW_GAP)
          let x = 0
          return (
            <g key={ri}>
              <text x={0} y={y0 + 11} fontSize={11} fill="rgb(var(--text-muted))">
                {r.label}
              </text>
              <motion.g
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: ri * 0.12 }}
              >
                {/* 轨道底 */}
                <rect x={0} y={y0 + LABEL_H} width={barW} height={BAR_H} rx={6} fill="rgb(var(--bg-subtle))" />
                {r.segments.map((s, si) => {
                  const w = (s.value / maxTotal) * barW
                  const rect = (
                    <rect
                      key={si}
                      x={x}
                      y={y0 + LABEL_H}
                      width={Math.max(0, w - (si === r.segments.length - 1 ? 0 : 1.5))}
                      height={BAR_H}
                      rx={si === 0 && si === r.segments.length - 1 ? 6 : si === 0 ? 6 : 0}
                      fill={s.color}
                      opacity={0.92}
                    />
                  )
                  x += w
                  return rect
                })}
              </motion.g>
              {/* 行尾总值:紧跟条形末端;条太满时退回条内右端(反色) */}
              {(() => {
                const barEnd = (total / maxTotal) * barW
                const inside = barEnd > barW - 64
                return (
                  <text
                    x={inside ? barW - 8 : barEnd + 8}
                    y={y0 + LABEL_H + BAR_H / 2 + 4}
                    textAnchor={inside ? 'end' : 'start'}
                    fontSize={12}
                    fontWeight={700}
                    fill={inside ? '#ffffff' : 'rgb(var(--text))'}
                  >
                    {formatTotal(total)}
                  </text>
                )
              })()}
            </g>
          )
        })}
      </svg>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {[...legendKeys.entries()].map(([label, color]) => (
          <span key={label} className="inline-flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: color }} aria-hidden="true" />
            <span className="text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
              {label}
            </span>
          </span>
        ))}
      </div>
    </ChartCard>
  )
}
