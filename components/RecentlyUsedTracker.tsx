'use client'

import { useEffect } from 'react'
import { useRecentlyUsed } from '@/lib/useRecentlyUsed'

interface RecentlyUsedTrackerProps {
  /** 当前工具 slug,进入页面时记录 */
  slug: string
}

/**
 * 最近使用记录器 —— 静默组件(渲染 null)
 *
 * 挂载在 ToolLayout 顶层,工具详情页打开时自动把当前 slug 写入
 * `recently_used_tools`(经 useRecentlyUsed Context)。
 *
 * 仅在客户端挂载后记录(hydration 安全),且 ready 后才写,
 * 避免 SSR 阶段读到空 localStorage 误判。
 */
export function RecentlyUsedTracker({ slug }: RecentlyUsedTrackerProps) {
  const { addRecentlyUsed, recentlyReady } = useRecentlyUsed()

  useEffect(() => {
    if (!recentlyReady) return
    addRecentlyUsed(slug)
  }, [slug, recentlyReady, addRecentlyUsed])

  return null
}
