'use client'

/**
 * 纯 SVG 半环仪表盘 - 零依赖,静态导出友好。
 *
 * 用途:把"落在哪个区间"一眼可见(BMI 4 区间、体脂率区间等)。
 * 特性:多色区带 + 指针(spring 转动)+ 当前值大字 + 区间说明;
 * reduced-motion 时指针直接就位;SSR 首帧渲染终态(值是确定性派生)。
 */

import { motion, useReducedMotion } from '../motion/MotionPrimitives'
import { ChartCard } from './chartKit'

export interface GaugeZone {
  /** 该区带上界(最后一个区带到 max) */
  upTo: number
  color: string
  label: string
}

export interface GaugeChartProps {
  title?: string
  /** 当前值(会 clamp 到 [min,max]) */
  value: number
  min: number
  max: number
  zones: GaugeZone[]
  /** 中央大字格式化(默认原始数字) */
  formatValue?: (n: number) => string
  /** 指针下方说明(如当前区间名;由调用方给出已本地化文本) */
  caption?: string
}

const CX = 100
const CY = 104
const R = 78
const START = Math.PI // 左端(180°)
const END = 0 // 右端(0°)

function pointAt(angle: number, radius: number): { x: number; y: number } {
  return { x: CX + radius * Math.cos(angle), y: CY - radius * Math.sin(angle) }
}

/** 在半环上画 [fracFrom, fracTo] 的弧路径(strokeWidth 承担带厚度) */
function arcPath(fracFrom: number, fracTo: number, radius: number): string {
  const a1 = START - fracFrom * Math.PI
  const a2 = START - fracTo * Math.PI
  const p1 = pointAt(a1, radius)
  const p2 = pointAt(a2, radius)
  const large = fracTo - fracFrom > 0.5 ? 1 : 0
  return `M${p1.x.toFixed(2)},${p1.y.toFixed(2)} A${radius},${radius} 0 ${large} 1 ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`
}

export function GaugeChart({ title, value, min, max, zones, formatValue, caption }: GaugeChartProps) {
  const reduceMotion = useReducedMotion()
  const range = max - min || 1
  const clamped = Math.max(min, Math.min(max, Number.isFinite(value) ? value : min))
  const frac = (clamped - min) / range

  // 区带切分:每段占半环的比例
  const segs: { fracFrom: number; fracTo: number; zone: GaugeZone }[] = []
  let prev = min
  for (const z of zones) {
    const upTo = Math.min(z.upTo, max)
    if (upTo <= prev) continue
    segs.push({ fracFrom: (prev - min) / range, fracTo: (upTo - min) / range, zone: z })
    prev = upTo
  }
  // 最后一段兜底延伸到 max
  if (segs.length > 0 && segs[segs.length - 1].fracTo < 1 && prev < max) {
    segs[segs.length - 1] = { ...segs[segs.length - 1], fracTo: 1 }
  }

  // 当前值落在哪个区带(供指针小球取色)
  const activeZone = zones.find((z) => clamped < z.upTo) ?? zones[zones.length - 1]

  // 指针:从圆心出发的细长三角 + 圆心点;旋转角 = -90°(正上) + frac*180°
  const angleDeg = -90 + frac * 180
  const valueText = formatValue ? formatValue(clamped) : String(Math.round(clamped * 10) / 10)

  return (
    <ChartCard title={title}>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[280px]">
          <svg viewBox="0 0 200 118" className="w-full" role="img" aria-label={title ?? 'gauge'}>
            {/* 底轨 */}
            <path
              d={arcPath(0, 1, R)}
              fill="none"
              stroke="rgb(var(--bg-subtle))"
              strokeWidth={14}
              strokeLinecap="butt"
            />
            {/* 区带 */}
            {segs.map((s, i) => (
              <path
                key={i}
                d={arcPath(s.fracFrom, s.fracTo, R)}
                fill="none"
                stroke={s.zone.color}
                strokeWidth={14}
                strokeLinecap="butt"
                opacity={0.92}
              />
            ))}
            {/* min/max 标注 */}
            <text x={pointAt(START, R).x - 2} y={pointAt(START, R).y + 12} textAnchor="middle" fontSize={9} fill="rgb(var(--text-faint))">
              {Math.round(min)}
            </text>
            <text x={pointAt(END, R).x + 2} y={pointAt(END, R).y + 12} textAnchor="middle" fontSize={9} fill="rgb(var(--text-faint))">
              {Math.round(max)}
            </text>
            {/* 指针(挂载后 spring 转动;reduced-motion 直接就位) */}
            <motion.g
              initial={reduceMotion ? false : { rotate: -90 }}
              animate={{ rotate: angleDeg }}
              transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 120, damping: 16 }}
              style={{ transformOrigin: `${CX}px ${CY}px` }}
            >
              <polygon
                points={`${CX},${CY - R + 20} ${CX - 3.2},${CY - 10} ${CX + 3.2},${CY - 10}`}
                fill="rgb(var(--text))"
              />
            </motion.g>
            <circle cx={CX} cy={CY} r={5} fill="rgb(var(--text))" />
            <circle cx={CX} cy={CY} r={2} fill="rgb(var(--bg-card))" />
          </svg>
          {/* 当前值(HTML 层,清晰可控) */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center">
            <span className="text-2xl font-bold" style={{ color: activeZone?.color ?? 'rgb(var(--text))' }}>
              {valueText}
            </span>
          </div>
        </div>
        {caption && (
          <p className="mt-2 text-center text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
            {caption}
          </p>
        )}
        {/* 区带图例 */}
        <div className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1.5">
          {zones.map((z, i) => (
            <span key={i} className="inline-flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: z.color }} aria-hidden="true" />
              <span className="text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
                {z.label}
              </span>
            </span>
          ))}
        </div>
      </div>
    </ChartCard>
  )
}
