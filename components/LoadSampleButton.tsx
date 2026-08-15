'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

interface LoadSampleButtonProps {
  /** 点击后回调,由父组件负责把示例数据写回各 input state */
  onLoad: () => void
  /** 无示例数据时父组件应直接不渲染本按钮(这里 disabled 作兜底) */
  disabled?: boolean
  /** 按钮尺寸变体 */
  variant?: 'default' | 'compact'
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
export function LoadSampleButton({ onLoad, disabled, variant = 'default' }: LoadSampleButtonProps) {
  const { locale } = useApp()
  const [loaded, setLoaded] = useState(false)
  // "✓ Sample loaded" 回退计时器:重复点击时重置;卸载时清理,避免对已卸载组件 setState
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClick = useCallback(() => {
    onLoad()
    setLoaded(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setLoaded(false), 1500)
  }, [onLoad])

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    },
    [],
  )

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      aria-live="polite"
      className={`btn ${loaded ? 'btn-primary' : 'btn-secondary'} ${
        variant === 'compact' ? 'px-3 py-1.5 text-xs' : ''
      } disabled:cursor-not-allowed disabled:opacity-50`}
      title={t(locale, 'toolLoadSampleTitle')}
    >
      {loaded ? t(locale, 'toolSampleLoaded') : t(locale, 'toolLoadSample')}
    </button>
  )
}
