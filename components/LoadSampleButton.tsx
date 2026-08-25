'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

interface LoadSampleButtonProps {
  /** 点击后回调,由父组件负责把示例数据写回各 input state。
   *  返回 false 表示本次点击只是 arm 覆盖确认(未真正填充),按钮不闪成功反馈 */
  onLoad: () => void | false
  /** 无示例数据时父组件应直接不渲染本按钮(这里 disabled 作兜底) */
  disabled?: boolean
  /** 按钮尺寸变体 */
  variant?: 'default' | 'compact'
  /**
   * 覆盖确认态(由父组件控制):用户已有输入时,第一次点击进入确认,
   * 按钮文案变为「Overwrite?」;再次点击才真正执行 onLoad。
   */
  confirmOverwrite?: boolean
  /** 用户点了别处/再次交互时父组件解除确认态(回到普通文案) */
  onDisarm?: () => void
}

/**
 * 「Load Sample」快捷按钮 —— 一键填充测试数据
 *
 * 价值:
 *  - 用户体验:用户(尤其移动端)无需逐项敲数字即可体验工具;
 *  - SEO:HowTo JSON-LD 的 Step 1 显式提及本按钮,且页面真实可见(避免 schema 失配)。
 *
 * 用法:
 *   {sample && (
 *     <LoadSampleButton onLoad={() => setValues(sample)} />
 *   )}
 *
 * 父组件负责:从 lib/tool-samples.ts 取示例、判断是否有示例、写回 input state。
 * 本组件只负责按钮外观 + 点击反馈 + i18n。
 */
export function LoadSampleButton({
  onLoad,
  disabled,
  variant = 'default',
  confirmOverwrite = false,
  onDisarm,
}: LoadSampleButtonProps) {
  const { locale } = useApp()
  const [loaded, setLoaded] = useState(false)
  // "✓ Sample loaded" 回退计时器:重复点击时重置;卸载时清理,避免对已卸载组件 setState
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClick = useCallback(() => {
    const applied = onLoad()
    // onLoad 返回 false = 这次点击只是 arm 覆盖确认(未真正填充),不闪成功反馈;
    // 返回 true/undefined(旧消费者无返回值,恒为填充语义)才展示"✓ loaded"
    if (applied !== false) {
      setLoaded(true)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setLoaded(false), 1500)
    }
  }, [onLoad])

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    },
    [],
  )

  // 确认覆盖态下失焦自动解除(用户改变主意点别处,不希望按钮一直挂着"覆盖?")
  const handleBlur = useCallback(() => {
    if (confirmOverwrite) onDisarm?.()
  }, [confirmOverwrite, onDisarm])

  return (
    <button
      type="button"
      onClick={handleClick}
      onBlur={handleBlur}
      disabled={disabled}
      aria-live="polite"
      className={`btn ${confirmOverwrite ? 'bg-red-600 text-white hover:bg-red-700' : loaded ? 'btn-primary' : 'btn-secondary'} ${
        variant === 'compact' ? 'px-3 py-1.5 text-xs' : ''
      } disabled:cursor-not-allowed disabled:opacity-50`}
      title={t(locale, 'toolLoadSampleTitle')}
    >
      {confirmOverwrite
        ? t(locale, 'toolSampleOverwrite')
        : loaded
          ? t(locale, 'toolSampleLoaded')
          : t(locale, 'toolLoadSample')}
    </button>
  )
}
