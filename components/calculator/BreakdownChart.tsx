'use client'

/**
 * 纯 SVG 环形图(Donut Chart)- 零依赖,静态导出友好。
 *
 * 用途:把计算器结果里的"比例分解"(如利息 vs 本金)可视化,
 * 提升专业度与停留时间。只在显式声明 chart 的计算器里渲染。
 *
 * 设计:接收若干 {label, value, color} 分量,自动归一化为百分比,
 * 用 SVG stroke-dasharray 画环。主题感知(用 CSS 变量取文字/背景色)。
 */

export interface ChartSlice {
  /** 分量名称,显示在图例 */
  label: string
  /** 数值(原始即可,会按总和归一化成百分比) */
  value: number
  /** 该分量的颜色(十六进制或 rgb),建议从 CHART_COLORS 取 */
  color: string
}

/** 预设配色 - 与品牌色协调,色盲友好(红/绿差异化) */
export const CHART_COLORS = {
  /** 警示色:利息、成本、负债等"不利"部分 */
  interest: '#ef4444', // red-500
  /** 正向色:本金、收益、储蓄等"有利"部分 */
  principal: '#22c55e', // green-500
  /** 中性色:第二正向或对比 */
  neutral: '#3b82f6', // brand-500
} as const

interface BreakdownChartProps {
  slices: ChartSlice[]
  /** 图表中央的总标签(如 "Payment"、"$100") */
  centerLabel?: string
  centerValue?: string
  /** 标题,显示在图表上方 */
  title?: string
  /** 无有效数据时的占位文案(调用方传入已本地化文本) */
  emptyLabel?: string
}

/**
 * 把 0~1 的弧度转成 SVG 圆周上的 dasharray 段。
 * 用 stroke-dasharray + stroke-dashoffset 实现多段拼接。
 */
export function BreakdownChart({ slices, centerLabel, centerValue, title, emptyLabel = 'Enter your values to see the breakdown.' }: BreakdownChartProps) {
  // 过滤掉负值/NaN,避免几何错乱
  const valid = slices.filter((s) => Number.isFinite(s.value) && s.value > 0)
  const total = valid.reduce((sum, s) => sum + s.value, 0)

  // 半径与周长(几何常量,viewBox 100x100,环居中)
  const RADIUS = 40
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS

  // 逐段累加 offset,首段从顶部(-90deg 旋转后)开始顺时针
  let cumulativeOffset = 0
  const segments = valid.map((s) => {
    const fraction = total > 0 ? s.value / total : 0
    const length = fraction * CIRCUMFERENCE
    const segment = {
      color: s.color,
      length,
      // dasharray = [本段长, 周长-本段长]; offset = 已绘制的负累计
      dasharray: `${length} ${CIRCUMFERENCE - length}`,
      dashoffset: -cumulativeOffset,
      fraction,
    }
    cumulativeOffset += length
    return segment
  })

  // 无有效数据时,画一个灰色空环占位
  const empty = total === 0

  return (
    <div
      className="mt-4 rounded-lg border p-5"
      style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
    >
      {title && (
        <div className="mb-3 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
          {title}
        </div>
      )}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
        {/* SVG 环形图 */}
        <div className="relative h-40 w-40 shrink-0">
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full -rotate-90"
            role="img"
            aria-label={valid.map((s) => `${s.label} ${Math.round((s.value / total) * 100)}%`).join(', ')}
          >
            {/* 底环(轨道) */}
            <circle
              cx="50"
              cy="50"
              r={RADIUS}
              fill="none"
              stroke="rgb(var(--bg-subtle))"
              strokeWidth="12"
            />
            {empty ? (
              <circle
                cx="50"
                cy="50"
                r={RADIUS}
                fill="none"
                stroke="rgb(var(--text-faint))"
                strokeWidth="12"
                strokeDasharray={`${CIRCUMFERENCE * 0.25} ${CIRCUMFERENCE * 0.75}`}
              />
            ) : (
              segments.map((seg, i) => (
                <circle
                  key={i}
                  cx="50"
                  cy="50"
                  r={RADIUS}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="12"
                  strokeDasharray={seg.dasharray}
                  strokeDashoffset={seg.dashoffset}
                  strokeLinecap="butt"
                />
              ))
            )}
          </svg>
          {/* 中央文字(旋转回正) */}
          {(centerLabel || centerValue) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {centerValue && (
                <span className="text-lg font-bold" style={{ color: 'rgb(var(--text))' }}>
                  {centerValue}
                </span>
              )}
              {centerLabel && (
                <span className="text-[10px] uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>
                  {centerLabel}
                </span>
              )}
            </div>
          )}
        </div>

        {/* 图例 */}
        <div className="flex-1 space-y-2">
          {valid.length === 0 ? (
            <p className="text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
              {emptyLabel}
            </p>
          ) : (
            valid.map((s, i) => {
              const pct = total > 0 ? (s.value / total) * 100 : 0
              return (
                <div key={i} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-3 w-3 rounded-sm"
                      style={{ backgroundColor: s.color }}
                      aria-hidden="true"
                    />
                    <span className="text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
                      {s.label}
                    </span>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
                    {pct.toFixed(1)}%
                  </span>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
