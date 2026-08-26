'use client'

/**
 * 纯 SVG 折线/面积图(单序列或多序列) - 零依赖,静态导出友好。
 *
 * 特性:
 *  - hover 竖直 crosshair + tooltip(显示该 x 点各序列值;touch 同样支持);
 *  - 入场描线动画(stroke-dashoffset,经 framer-motion pathLength);
 *    reduced-motion / SSR 直出终态;
 *  - Y 轴自动 nice ticks(≤5 条),X 轴标签过多时自动抽稀;
 *  - highlightBetween:两条曲线之间的区域半透明高亮(如"提前还款省下的钱")。
 *
 * SSR 安全:首帧以默认值渲染完整终态(hover 状态恒为 null),
 * 动画仅在挂载后由 framer-motion 驱动。
 */

import { useId, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from '../motion/MotionPrimitives'
import { ChartCard, LegendDot, fmtCompact, niceScale } from './chartKit'

export interface SeriesLine {
  /** 序列 key(唯一即可) */
  key: string
  /** 图例名称 */
  label: string
  /** 线色(十六进制) */
  color: string
  /** 与 xLabels 等长的数值序列 */
  points: number[]
  /** 该线下方填充渐变面积(默认不填) */
  area?: boolean
  /** 虚线(对比线,如"不额外还款"基线) */
  dashed?: boolean
}

export interface LineAreaChartProps {
  title?: string
  /** 每个采样点的 x 轴标签(如 ['Y0','Y5','Y10']) */
  xLabels: string[]
  lines: SeriesLine[]
  /** 两条线(key)之间的区域高亮,如提前还款 vs 常规还款的"省息区" */
  highlightBetween?: { a: string; b: string; label?: string }
  /** y 轴数值格式化(默认紧凑缩写);tooltip 也用它 */
  formatY?: (n: number) => string
  /** 数据不足时的占位文案(调用方传入已本地化文本) */
  emptyLabel?: string
}

const W = 640
const H = 240
const PAD = { top: 14, right: 14, bottom: 26, left: 52 }
const IW = W - PAD.left - PAD.right
const IH = H - PAD.top - PAD.bottom

export function LineAreaChart({ title, xLabels, lines, highlightBetween, formatY = fmtCompact, emptyLabel = 'Enter your values to see the chart.' }: LineAreaChartProps) {
  const reduceMotion = useReducedMotion()
  const gid = useId().replace(/[:]/g, '')
  const [hover, setHover] = useState<number | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const valid = lines.filter((l) => Array.isArray(l.points) && l.points.length > 0)
  const n = xLabels.length
  const invalid = valid.length === 0 || n < 2 || valid.some((l) => l.points.length !== n)

  const allVals = valid.flatMap((l) => l.points).filter((v) => Number.isFinite(v))
  const dataMax = allVals.length ? Math.max(...allVals) : 0
  const dataMin = allVals.length ? Math.min(0, ...allVals) : 0
  // 允许小幅负值(健康场景少见,金融余额递减不会为负):上下各取 nice 上界
  const { top } = niceScale(dataMax)
  const bottom = dataMin < 0 ? -niceScale(-dataMin).top : 0
  const span = top - bottom || 1

  const x = (i: number) => PAD.left + (n === 1 ? IW / 2 : (i / (n - 1)) * IW)
  const y = (v: number) => PAD.top + IH - ((v - bottom) / span) * IH

  // 几何 memo:hover 时(hover 状态变化)不重建几百个点的路径字符串,
  // 只重渲染 crosshair/tooltip 两个轻量子树。
  // 注意:useMemo 必须先于 invalid 早退执行(Hooks 不能条件调用),
  // invalid 数据走无害的空几何。
  const geom = useMemo(() => {
    const linePath = (pts: number[]) =>
      pts.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(Number.isFinite(v) ? v : bottom).toFixed(1)}`).join(' ')

    const areaPath = (pts: number[]) =>
      `${linePath(pts)} L${x(n - 1).toFixed(1)},${y(bottom).toFixed(1)} L${x(0).toFixed(1)},${y(bottom).toFixed(1)} Z`

    const hlA = valid.find((l) => l.key === highlightBetween?.a)
    const hlB = valid.find((l) => l.key === highlightBetween?.b)
    const bandPath =
      hlA && hlB
        ? `${linePath(hlA.points)} ${hlB.points
            .slice()
            .reverse()
            .map((v, ri) => {
              const i = n - 1 - ri
              return `L${x(i).toFixed(1)},${y(Number.isFinite(v) ? v : bottom).toFixed(1)}`
            })
            .join(' ')} Z`
        : null

    const ticks: number[] = []
    for (let i = 0; i <= 4; i++) ticks.push(bottom + (span * i) / 4)

    const labelEvery = Math.max(1, Math.ceil(n / 7))
    const xTickIdx: number[] = []
    for (let i = 0; i < n; i += labelEvery) xTickIdx.push(i)
    if (xTickIdx[xTickIdx.length - 1] !== n - 1) xTickIdx.push(n - 1)

    return { linePath, areaPath, bandPath, ticks, xTickIdx }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines, xLabels, highlightBetween, bottom, span])

  if (invalid) {
    return title ? (
      <ChartCard title={title}>
        <p className="text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
          {emptyLabel}
        </p>
      </ChartCard>
    ) : null
  }

  const onMove = (clientX: number) => {
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const relX = clientX - rect.left
    const frac = (relX / rect.width) * W // viewBox 坐标
    if (frac < PAD.left - 4 || frac > W - PAD.right + 4) {
      setHover(null)
      return
    }
    const idx = Math.round(((frac - PAD.left) / IW) * (n - 1))
    setHover(Math.max(0, Math.min(n - 1, idx)))
  }

  return (
    <ChartCard title={title}>
      <div className="relative">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full touch-pan-y"
          role="img"
          aria-label={title ?? 'chart'}
          onMouseMove={(e) => onMove(e.clientX)}
          onMouseLeave={() => setHover(null)}
          onTouchStart={(e) => e.touches[0] && onMove(e.touches[0].clientX)}
          onTouchMove={(e) => e.touches[0] && onMove(e.touches[0].clientX)}
          onTouchEnd={() => setHover(null)}
        >
          <defs>
            {valid.map((l) => (
              <linearGradient key={l.key} id={`${gid}-grad-${l.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={l.color} stopOpacity={0.22} />
                <stop offset="100%" stopColor={l.color} stopOpacity={0.02} />
              </linearGradient>
            ))}
          </defs>

          {/* 网格线 + y 刻度 */}
          {geom.ticks.map((t, i) => (
            <g key={i}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={y(t)}
                y2={y(t)}
                stroke="rgb(var(--border))"
                strokeWidth={1}
                strokeDasharray={i === 0 ? undefined : '3 4'}
              />
              <text
                x={PAD.left - 6}
                y={y(t) + 3.5}
                textAnchor="end"
                fontSize={10}
                fill="rgb(var(--text-faint))"
              >
                {formatY(t)}
              </text>
            </g>
          ))}

          {/* x 轴标签(抽稀) */}
          {geom.xTickIdx.map((i) => (
            <text
              key={i}
              x={x(i)}
              y={H - 8}
              textAnchor={i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle'}
              fontSize={10}
              fill="rgb(var(--text-faint))"
            >
              {xLabels[i]}
            </text>
          ))}

          {/* 曲线间高亮带(省息区) */}
          {geom.bandPath && (
            <motion.path
              d={geom.bandPath}
              fill="#22c55e"
              fillOpacity={0.14}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            />
          )}

          {/* 面积 + 折线 */}
          {valid.map((l) =>
            l.area ? (
              <motion.path
                key={`${l.key}-area`}
                d={geom.areaPath(l.points)}
                fill={`url(#${gid}-grad-${l.key})`}
                stroke="none"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              />
            ) : null,
          )}
          {valid.map((l) => (
            <motion.path
              key={`${l.key}-line`}
              d={geom.linePath(l.points)}
              fill="none"
              stroke={l.color}
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              // 虚线不走 pathLength 描线动画:framer-motion 的 pathLength
              // 会用 dasharray 实现描线,覆写我们自己的虚线样式
              strokeDasharray={l.dashed ? '6 5' : undefined}
              initial={reduceMotion || l.dashed ? false : { pathLength: 0 }}
              animate={l.dashed ? undefined : { pathLength: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            />
          ))}

          {/* hover:crosshair + 各序列点 */}
          {hover != null && (
            <g pointerEvents="none">
              <line
                x1={x(hover)}
                x2={x(hover)}
                y1={PAD.top}
                y2={PAD.top + IH}
                stroke="rgb(var(--text-faint))"
                strokeWidth={1}
                strokeDasharray="2 3"
              />
              {valid.map((l) => {
                const v = l.points[hover]
                if (!Number.isFinite(v)) return null
                return <circle key={l.key} cx={x(hover)} cy={y(v)} r={4} fill={l.color} stroke="rgb(var(--bg-card))" strokeWidth={1.5} />
              })}
            </g>
          )}
        </svg>

        {/* tooltip(HTML 层,不受 SVG viewBox 缩放影响) */}
        {hover != null && (
          <div
            className="pointer-events-none absolute top-2 z-10 min-w-[7rem] rounded-md border p-2 text-xs shadow-md"
            style={{
              borderColor: 'rgb(var(--border-strong))',
              backgroundColor: 'rgb(var(--bg-card))',
              left: `${(x(hover) / W) * 100}%`,
              transform: x(hover) > W / 2 ? 'translateX(calc(-100% - 8px))' : 'translateX(8px)',
            }}
          >
            <div className="mb-1 font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
              {xLabels[hover]}
            </div>
            {valid.map((l) => (
              <div key={l.key} className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-sm" style={{ backgroundColor: l.color }} aria-hidden="true" />
                  <span style={{ color: 'rgb(var(--text-subtle))' }}>{l.label}</span>
                </span>
                <span className="font-semibold" style={{ color: 'rgb(var(--text))' }}>
                  {formatY(l.points[hover])}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 图例 + 高亮带说明 */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
        {valid.map((l) => (
          <LegendDot key={l.key} color={l.color} label={l.label} />
        ))}
        {highlightBetween?.label && (
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: '#22c55e', opacity: 0.35 }} aria-hidden="true" />
            <span className="text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
              {highlightBetween.label}
            </span>
          </span>
        )}
      </div>
    </ChartCard>
  )
}
