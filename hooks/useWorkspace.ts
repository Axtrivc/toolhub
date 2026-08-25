'use client'

/**
 * useWorkspace —— 个人极客工作台统一数据层(零后端,全 localStorage)
 *
 * 组合三块客户端状态,对外暴露一个语义化的"工作台"接口:
 *
 *  1. Pinned Tools(固定工具)
 *     直接复用现有 FavoritesProvider(lib/useFavorites,key: toolhub-favorites),
 *     即"固定 = 收藏"同一份数据:工具详情页的 ❤️ 按钮与首页卡片的 📌 图钉
 *     读写同一 store,用户已有收藏零迁移、零分叉。
 *
 *  2. Recent Tools(最近使用,最多 5 条)
 *     复用 RecentlyUsedProvider(lib/useRecentlyUsed,key: recently_used_tools),
 *     由工具页的 <RecentlyUsedTracker/> 自动记录。
 *
 *  3. Scratchpad(随手记)
 *     本 hook 自有状态,key: toolhub-scratchpad,纯字符串。
 *     每次变更即刻写入(write-through,文本量小、开销可忽略),
 *     并监听 storage 事件做跨标签页同步。
 *
 * SSR/hydration 安全:三块状态均在挂载前以空值渲染,挂载后才注入真实值,
 * 与现有 providers 的 ready 语义保持一致。
 */

import { useCallback, useEffect, useState } from 'react'
import { useFavorites } from '@/lib/useFavorites'
import { useRecentlyUsed, type RecentEntry } from '@/lib/useRecentlyUsed'

const SCRATCHPAD_KEY = 'toolhub-scratchpad'

export interface WorkspaceState {
  /* ── Pinned ── */
  /** 已固定的工具 slug 列表(挂载前为空) */
  pinned: string[]
  isPinned: (slug: string) => boolean
  /** 切换固定状态;返回切换后的布尔值 */
  togglePin: (slug: string) => boolean
  pinnedReady: boolean

  /* ── Recent ── */
  /** 最近使用条目(最新在前,最多 5 条;每条带 at 时间戳) */
  recent: RecentEntry[]
  recentReady: boolean
  /** 清空最近使用记录 */
  clearRecent: () => void

  /* ── Scratchpad ── */
  /** 随手记内容(挂载前为空串) */
  scratchpad: string
  /** 更新并立即持久化到 localStorage */
  setScratchpad: (value: string) => void
  clearScratchpad: () => void
  scratchpadReady: boolean
}

/** 安全读取随手记(隐私模式 / 存储禁用 → 空串) */
function readScratchpad(): string {
  try {
    return localStorage.getItem(SCRATCHPAD_KEY) ?? ''
  } catch {
    return ''
  }
}

export function useWorkspace(): WorkspaceState {
  const { favorites, isFavorite, toggleFavorite, favoritesReady } = useFavorites()
  const { recentlyUsed, recentlyReady, clearRecentlyUsed } = useRecentlyUsed()

  const [scratchpad, setScratchpadState] = useState('')
  const [scratchpadReady, setScratchpadReady] = useState(false)

  // 挂载时读取已存随手记;监听跨标签页同步
  useEffect(() => {
    setScratchpadState(readScratchpad())
    setScratchpadReady(true)

    const onStorage = (e: StorageEvent) => {
      if (e.key === SCRATCHPAD_KEY) setScratchpadState(readScratchpad())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const setScratchpad = useCallback((value: string) => {
    setScratchpadState(value)
    try {
      localStorage.setItem(SCRATCHPAD_KEY, value)
    } catch {
      // 隐私模式写入失败,静默忽略(内存态仍生效)
    }
  }, [])

  const clearScratchpad = useCallback(() => {
    setScratchpadState('')
    try {
      localStorage.removeItem(SCRATCHPAD_KEY)
    } catch {
      /* ignore */
    }
  }, [])

  return {
    pinned: favorites,
    isPinned: isFavorite,
    togglePin: toggleFavorite,
    pinnedReady: favoritesReady,
    recent: recentlyUsed,
    recentReady: recentlyReady,
    clearRecent: clearRecentlyUsed,
    scratchpad,
    setScratchpad,
    clearScratchpad,
    scratchpadReady,
  }
}
