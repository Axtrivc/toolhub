'use client'

/**
 * PinButton —— 工具卡片上的图钉开关(Linear / Raycast 风格的微妙交互)
 *
 * 行为:
 *  - 点击切换固定状态,写入 useWorkspace(底层即 favorites store);
 *  - 未固定:默认低存在感(卡片 hover 时才完全浮现),固定后常驻实心蓝钉;
 *  - 挂载前(pinnedReady=false)按"未固定"渲染,hydration 安全;
 *  - 必须阻止事件冒泡:它常被放在 <Link> 卡片内部/上层,
 *    preventDefault + stopPropagation 双保险,点击图钉不触发跳转。
 */

import { Pin } from 'lucide-react'
import type { MouseEvent } from 'react'
import { useWorkspace } from '@/hooks/useWorkspace'
import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'

interface PinButtonProps {
  slug: string
  /** 工具名(用于 aria-label 可读性) */
  name?: string
  className?: string
}

export function PinButton({ slug, name, className = '' }: PinButtonProps) {
  const { isPinned, togglePin, pinnedReady } = useWorkspace()
  const { locale } = useApp()

  // 挂载前统一按 false 渲染,保证 SSG 与首屏一致;挂载后才用真实状态
  const pinned = pinnedReady ? isPinned(slug) : false

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    togglePin(slug)
  }

  const label = pinned
    ? `${t(locale, 'workspaceUnpin')}${name ? `: ${name}` : ''}`
    : `${t(locale, 'workspacePin')}${name ? `: ${name}` : ''}`

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={pinned}
      aria-label={label}
      title={label}
      className={`inline-flex h-7 w-7 items-center justify-center rounded-lg border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 ${
        pinned
          ? 'border-blue-200 bg-blue-50 text-blue-600 opacity-100 dark:border-blue-800/60 dark:bg-blue-950/50 dark:text-blue-400'
          : 'border-slate-200/80 bg-white/80 text-slate-400 opacity-0 backdrop-blur-sm hover:border-slate-300 hover:text-slate-600 group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-500 dark:hover:border-slate-600 dark:hover:text-slate-300'
      } ${className}`}
    >
      <Pin
        className={`h-3.5 w-3.5 transition-transform duration-200 ${pinned ? 'fill-current' : ''}`}
        aria-hidden="true"
      />
    </button>
  )
}
