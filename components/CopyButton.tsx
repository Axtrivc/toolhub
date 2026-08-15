'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'
import { motion, AnimatePresence, useReducedMotion } from './motion/MotionPrimitives'

interface CopyButtonProps {
  value: string
  label?: string
  disabled?: boolean
}

/**
 * 通用复制按钮 - i18n 反馈 + 主题适配 + 极客微交互动画
 *
 * 动画(GPU 加速,transform/opacity-only):
 *  - whileTap: scale 0.95 —— 按下触感反馈(弹簧)。
 *  - 复制成功:✓ 图标弹簧放大入场(AnimatePresence + scale 弹性曲线),
 *    文案从 "Copy" 切换为 "✓ Copied"。
 *  - 无障碍:useReducedMotion 时降级为瞬时切换。
 */
export function CopyButton({ value, label, disabled }: CopyButtonProps) {
  const { locale } = useApp()
  const [copied, setCopied] = useState(false)
  const reduceMotion = useReducedMotion()
  // "✓ Copied" 回退计时器:重复复制时重置;卸载时清理,避免对已卸载组件 setState
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const armCopiedReset = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 1500)
  }, [])

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    },
    [],
  )

  const handleCopy = useCallback(async () => {
    if (!value) return
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      armCopiedReset()
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = value
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        armCopiedReset()
      } catch {
        // ignore
      }
      document.body.removeChild(textarea)
    }
  }, [value, armCopiedReset])

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      disabled={disabled || !value}
      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
      transition={reduceMotion ? undefined : { type: 'spring', stiffness: 500, damping: 30 }}
      className={`btn ${copied ? 'btn-primary' : 'btn-secondary'} disabled:cursor-not-allowed disabled:opacity-50`}
      aria-live="polite"
    >
      {/* 成功反馈:✓ 图标弹簧放大入场;非成功态不渲染(AnimatePresence 处理卸载退场)。 */}
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.svg
            key="check"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            aria-hidden="true"
            // 弹簧放大入场:scale 0 → 1.3 → 1(overshoot 弹性手感)
            initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={reduceMotion ? undefined : { scale: 0, opacity: 0 }}
            transition={
              reduceMotion
                ? undefined
                : { type: 'spring', stiffness: 600, damping: 15, mass: 0.6 }
            }
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </motion.svg>
        ) : null}
      </AnimatePresence>
      {copied ? t(locale, 'toolCopied') : label || t(locale, 'toolCopy')}
    </motion.button>
  )
}
