'use client'

/**
 * 图表套件共享构件 - 与 BreakdownChart 同族的容器/几何/刻度工具。
 *
 * 全套件约束(与站点动画规范一致):
 *  - 零 npm 依赖,手写 SVG,主题色全部走 CSS 变量;
 *  - SSR/静态导出首帧渲染"完整终态"数据(确定性,无水合差异),
 *    描线/指针动画仅在挂载后播放,reduced-motion 直接显示终态;
 *  - 动画只碰 stroke-dashoffset / transform / opacity(任务书钦定的例外:
 *    描线动画允许 stroke-dashoffset,它是纯 paint 属性,不触发布局)。
 */

import type { ReactNode } from 'react'

/** 图表卡片容器:与 BreakdownChart 完全一致的边框/背景/标题样式 */
export function ChartCard({ title, children }: { title?: string; children: ReactNode }) {
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
      {children}
    </div>
  )
}

/** 图例色块 + 文本行 */
export function LegendDot({ color, label }: { color: string; label: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="inline-block h-2.5 w-2.5 rounded-sm"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <span className="text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
        {label}
      </span>
    </span>
  )
}

/**
 * nice ticks:为 [0, max] 选一个"好看的"上界与刻度步长,
 * 使刻度数 ≤ 5。max ≤ 0 时回退 0..1。
 */
export function niceScale(max: number): { top: number; step: number } {
  if (!Number.isFinite(max) || max <= 0) return { top: 1, step: 0.5 }
  const rough = max / 4
  const mag = 10 ** Math.floor(Math.log10(rough))
  const norm = rough / mag
  // 经验步长序列:1/2/2.5/5 × 10^k
  const stepNorm = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 2.5 ? 2.5 : norm <= 5 ? 5 : 10
  const step = stepNorm * mag
  const top = Math.ceil(max / step) * step
  // 浮点尾差清理(0.30000000000000004 之类)
  const eps = step / 1e6
  return { top: Math.abs(top - Math.round(top)) < eps ? Math.round(top) : top, step }
}

/** 紧凑数字:千/百万/十亿缩写(坐标轴与 tooltip 用,避免长数字挤爆轴) */
export function fmtCompact(n: number): string {
  if (!Number.isFinite(n)) return '—'
  const abs = Math.abs(n)
  if (abs >= 1e9) return `${trimZero(n / 1e9)}B`
  if (abs >= 1e6) return `${trimZero(n / 1e6)}M`
  if (abs >= 1e4) return `${trimZero(n / 1e3)}k`
  if (abs >= 100) return Math.round(n).toLocaleString('en-US')
  return trimZero(n)
}

function trimZero(n: number): string {
  return Number(n.toFixed(1)).toString()
}
