'use client'

/**
 * Life in Weeks(人生周格)- 90 年 × 52 周 = 4680 点阵。
 *
 * 灵感来自 Wait But Why 的著名可视化:已过的周实色、剩余的周淡色、
 * 当前周脉冲高亮。数据由生日派生(确定性),SSR 安全;
 * 唯一的动画是当前周单个 rect 的 opacity 脉冲(reduced-motion 静止)。
 */

import { motion, useReducedMotion } from '../motion/MotionPrimitives'
import { ChartCard } from './chartKit'

const YEARS = 90
const WEEKS_PER_YEAR = 52
const TOTAL_WEEKS = YEARS * WEEKS_PER_YEAR
const CELL = 7
const GAP = 1.4
const STEP = CELL + GAP
const PAD_L = 28 // 左侧十年刻度
const PAD_T = 4

export interface LifeInWeeksChartProps {
  birth: Date
  today: Date
  /** 图表标题(调用方传入已本地化文本) */
  title: string
  /** 图例:已过 / 剩余 / 当前周 */
  legendLived: string
  legendRemaining: string
  legendCurrent: string
  /** 汇总行模板,占位 {x} 已过周数 {y} 剩余周数 {p} 百分比 */
  summaryTemplate: string
}

export function LifeInWeeksChart({
  birth,
  today,
  title,
  legendLived,
  legendRemaining,
  legendCurrent,
  summaryTemplate,
}: LifeInWeeksChartProps) {
  const reduceMotion = useReducedMotion()
  const msPerWeek = 7 * 24 * 60 * 60 * 1000
  const rawWeeks = (today.getTime() - birth.getTime()) / msPerWeek
  const weeksLived = Math.max(0, Math.min(TOTAL_WEEKS, Math.floor(rawWeeks)))
  const currentWeekIdx = rawWeeks >= 0 && rawWeeks < TOTAL_WEEKS ? weeksLived : -1
  const weeksLeft = TOTAL_WEEKS - weeksLived
  const pct = Math.round((weeksLived / TOTAL_WEEKS) * 100)

  const W = PAD_L + WEEKS_PER_YEAR * STEP + GAP
  const H = PAD_T + YEARS * STEP + GAP

  return (
    <ChartCard title={title}>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-[210px] shrink-0 sm:w-[240px]"
          role="img"
          aria-label={summaryTemplate.replace('{x}', String(weeksLived)).replace('{y}', String(weeksLeft)).replace('{p}', String(pct))}
        >
          {/* 十年刻度 */}
          {Array.from({ length: Math.floor(YEARS / 10) + 1 }, (_, i) => i * 10).map((age) => (
            <text
              key={age}
              x={PAD_L - 6}
              y={PAD_T + age * STEP + CELL - 1}
              textAnchor="end"
              fontSize={7}
              fill="rgb(var(--text-faint))"
            >
              {age}
            </text>
          ))}
          {/* 4680 周点阵:一年一行,行内 52 列 */}
          {Array.from({ length: YEARS }, (_, row) => {
            const ageRowStart = row * WEEKS_PER_YEAR
            return (
              <g key={row}>
                {Array.from({ length: WEEKS_PER_YEAR }, (_, col) => {
                  const idx = ageRowStart + col
                  const x = PAD_L + col * STEP
                  const y = PAD_T + row * STEP
                  if (idx === currentWeekIdx) {
                    // 当前周:脉冲高亮(唯一动效;reduced-motion 静止)
                    return reduceMotion ? (
                      <rect key={col} x={x} y={y} width={CELL} height={CELL} rx={1.4} fill="#f59e0b" />
                    ) : (
                      <motion.rect
                        key={col}
                        x={x}
                        y={y}
                        width={CELL}
                        height={CELL}
                        rx={1.4}
                        fill="#f59e0b"
                        animate={{ opacity: [1, 0.35, 1] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )
                  }
                  const lived = idx < weeksLived
                  return (
                    <rect
                      key={col}
                      x={x}
                      y={y}
                      width={CELL}
                      height={CELL}
                      rx={1.4}
                      fill={lived ? 'rgb(var(--primary))' : 'rgb(var(--border))'}
                      opacity={lived ? 0.85 : 1}
                    />
                  )
                })}
              </g>
            )
          })}
        </svg>

        {/* 图例 + 汇总 */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: 'rgb(var(--primary))', opacity: 0.85 }} aria-hidden="true" />
            <span className="text-xs" style={{ color: 'rgb(var(--text-muted))' }}>{legendLived}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: 'rgb(var(--border))' }} aria-hidden="true" />
            <span className="text-xs" style={{ color: 'rgb(var(--text-muted))' }}>{legendRemaining}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: '#f59e0b' }} aria-hidden="true" />
            <span className="text-xs" style={{ color: 'rgb(var(--text-muted))' }}>{legendCurrent}</span>
          </div>
          <p className="pt-1 text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
            {summaryTemplate.replace('{x}', weeksLived.toLocaleString('en-US')).replace('{y}', weeksLeft.toLocaleString('en-US')).replace('{p}', String(pct))}
          </p>
        </div>
      </div>
    </ChartCard>
  )
}
