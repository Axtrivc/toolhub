'use client'

import { useReducedMotion } from 'framer-motion'
import { ChartCard } from './chartKit'
import { fmtNum } from '@/lib/format'

/**
 * 量级标尺(单位换算器专用可视化)。
 *
 * 把「输入值(原单位)」与「换算结果(目标单位)」放到同一条对数刻度轴上:
 * 两个圆点随输入实时滑动(CSS left 过渡),刻度自动取
 * 覆盖两值的整十倍数档(10⁻²…10³ …)。用户拖滑杆/敲数字时,能直观看到
 * 「同一个量在两种单位下差几个数量级」—— 5 km 与 5000 m 在尺上相距
 * 3 个刻度档,一眼建立尺度感。
 *
 * 约束(与图表套件一致):
 *  - 纯 CSS 定位(无 SVG/Snap),零依赖,主题变量取色;
 *  - SSR 首帧渲染当前值对应位置(确定性数据,hydration 安全);
 *  - reduced-motion 下标记不做滑动过渡,直接跳到目标位置;
 *  - 任一值 ≤0 或非有限(温度零下、非法输入)→ 整卡不渲染,不留空壳。
 */
export function MagnitudeRuler({
  title,
  from,
  to,
  digits = 6,
}: {
  title?: string
  /** 输入侧:显示串(已含单位)与原始数值 */
  from: { display: string; value: number }
  /** 结果侧 */
  to: { display: string; value: number }
  /** 刻度标签小数位 */
  digits?: number
}) {
  const reduceMotion = useReducedMotion()
  if (!Number.isFinite(from.value) || !Number.isFinite(to.value) || from.value <= 0 || to.value <= 0) {
    return null
  }
  const slide = reduceMotion ? 'none' : 'left 300ms cubic-bezier(0.22,1,0.36,1)'
  const lgFrom = Math.log10(from.value)
  const lgTo = Math.log10(to.value)
  let lo = Math.floor(Math.min(lgFrom, lgTo) - 0.25)
  let hi = Math.ceil(Math.max(lgFrom, lgTo) + 0.25)
  if (hi - lo < 1) {
    // 两值几乎重合(km vs mile):把窗口撑到至少 1 个数量级,markers 不挤死
    const mid = (lo + hi) / 2
    lo = Math.floor(mid - 0.5)
    hi = lo + 1
  }
  const pos = (v: number) => ((v - lo) / (hi - lo)) * 100
  const ticks: { left: number; label: string }[] = []
  for (let d = lo; d <= hi; d++) {
    ticks.push({ left: pos(d), label: fmtNum(Math.pow(10, d), digits) })
  }

  return (
    <ChartCard title={title}>
      <div className="relative h-24 select-none" aria-hidden="true">
        {/* 轴线 */}
        <div
          className="absolute inset-x-0 top-1/2 h-px"
          style={{ backgroundColor: 'rgb(var(--border-strong))' }}
        />
        {/* 整十倍刻度 */}
        {ticks.map((t, i) => (
          <div key={i}>
            <div
              className="absolute top-1/2 h-2 w-px -translate-x-1/2"
              style={{ left: `${t.left}%`, backgroundColor: 'rgb(var(--border-strong))' }}
            />
            <div
              className="absolute top-[calc(50%+10px)] -translate-x-1/2 whitespace-nowrap text-[10px] tabular-nums"
              style={{ left: `${t.left}%`, color: 'rgb(var(--text-faint))' }}
            >
              {t.label}
            </div>
          </div>
        ))}
        {/* 输入标记(上半区,点落在轴上):主色 */}
        <div
          className="absolute top-0 flex h-[calc(50%-5px)] -translate-x-1/2 flex-col items-center"
          style={{ left: `${pos(lgFrom)}%`, transition: slide }}
        >
          <span className="max-w-32 truncate text-xs font-semibold tabular-nums text-primary">
            {from.display}
          </span>
          <div className="w-px flex-1" style={{ backgroundColor: 'rgb(var(--primary) / 0.4)' }} />
        </div>
        <div
          className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: `${pos(lgFrom)}%`,
            transition: slide,
            backgroundColor: 'rgb(var(--primary))',
            boxShadow: '0 1px 3px rgb(0 0 0 / 0.3), 0 0 0 2px rgb(var(--bg-card))',
          }}
        />
        {/* 结果标记(下半区):绿色(与图表套件高亮色同族) */}
        <div
          className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: `${pos(lgTo)}%`,
            transition: slide,
            backgroundColor: '#22c55e',
            boxShadow: '0 1px 3px rgb(0 0 0 / 0.3), 0 0 0 2px rgb(var(--bg-card))',
          }}
        />
        <div
          className="absolute bottom-0 flex h-[calc(50%-5px)] -translate-x-1/2 flex-col items-center"
          style={{ left: `${pos(lgTo)}%`, transition: slide }}
        >
          <div className="w-px flex-1" style={{ backgroundColor: 'rgb(34 197 94 / 0.4)' }} />
          <span className="max-w-32 truncate text-xs font-semibold tabular-nums" style={{ color: '#22c55e' }}>
            {to.display}
          </span>
        </div>
      </div>
    </ChartCard>
  )
}
