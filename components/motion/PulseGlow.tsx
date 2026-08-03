'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from './MotionPrimitives'

/* ════════════════════════════════════════
 * PulseGlow —— 输出区一次性高亮微光闪烁
 * ════════════════════════════════════════
 *
 * 作用:工具详情页的输出框(计算结果/转换结果)周围,
 * 当结果「更新」时,触发一次性的高亮微光闪烁(Pulse Border),
 * 提示用户「结果已更新」。
 *
 * 用法:
 *   <PulseGlow trigger={resultValue}>
 *     <output />
 *   </PulseGlow>
 *
 * trigger 可以是任何字符串/数字;值变化时触发一次闪烁。
 *
 * 实现:
 *  - 外层 relative + 内层 absolute 高亮边框环(boxShadow 动画)。
 *  - 仅 opacity + boxShadow 动画,不改变布局(CLS=0,GPU 加速)。
 *  - useReducedMotion 时降级为无动画(直接展示结果)。
 *  - key 重置技巧:用 React key 强制 motion.div 重新挂载并重播动画。
 */

interface PulseGlowProps {
  /** 触发值:变化时重播高亮闪烁。通常是结果文本/数值。 */
  trigger: string | number | null | undefined
  children: ReactNode
  className?: string
}

export function PulseGlow({ trigger, children, className }: PulseGlowProps) {
  const reduceMotion = useReducedMotion()
  // trigger 值字符串化作为 key —— 变化时让 motion.div 重新挂载,从而重播入场动画。
  const triggerKey = String(trigger ?? '')
  const hasOutput = trigger !== undefined && trigger !== null && trigger !== ''

  return (
    <div className={`relative ${className ?? ''}`}>
      {children}

      {/* 高亮微光环:绝对定位贴合四周边框,trigger 变化时重播。
          pointer-events-none 不拦截交互。 */}
      {!reduceMotion && hasOutput && (
        <motion.div
          key={triggerKey}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-lg"
          // 初始:亮蓝色描边 + 外发光
          initial={{ opacity: 0.9, boxShadow: '0 0 0 2px rgba(59,130,246,0.55), 0 0 18px 2px rgba(59,130,246,0.25)' }}
          // 终态:透明(光晕消散)
          animate={{ opacity: 0, boxShadow: '0 0 0 1px rgba(59,130,246,0)' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      )}
    </div>
  )
}

/**
 * 异步/显式触发的 PulseGlow —— 用于「点击按钮后才更新结果」的工具
 * (如 Base64 转换、Slug 生成等),只在真正有新结果时闪烁一次。
 *
 * 用法:
 *   const [pulseKey, setPulseKey] = useState(0)
 *   // 在结果更新时 setPulseKey(k => k + 1)
 *   <PulseGlowKeyed triggerKey={pulseKey}><output /></PulseGlowKeyed>
 */
export function PulseGlowKeyed({
  triggerKey,
  children,
  className,
}: {
  triggerKey: number
  children: ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <div className={`relative ${className ?? ''}`}>
      {children}
      {!reduceMotion && triggerKey > 0 && (
        <motion.div
          key={triggerKey}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-lg"
          initial={{ opacity: 0.9, boxShadow: '0 0 0 2px rgba(59,130,246,0.55), 0 0 18px 2px rgba(59,130,246,0.25)' }}
          animate={{ opacity: 0, boxShadow: '0 0 0 1px rgba(59,130,246,0)' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      )}
    </div>
  )
}
