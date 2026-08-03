'use client'

/**
 * 最近使用工具(localStorage 同步)- 用户留存数据层
 *
 * 设计(与 useFavorites 同模式,保持一致性):
 *  - 单一 localStorage key `recently_used_tools`,存 slug 数组(JSON)。
 *  - 通过 React Context 暴露 { recentlyUsed, addRecentlyUsed, recentlyReady }。
 *  - 最多保留 4 个(规格要求),最新在前,自动去重。
 *  - 首屏 SSR 不读 localStorage(hydration 安全):mounted 后才注入真实值,
 *    挂载前以空数组渲染。
 *  - 跨标签页同步(storage 事件):A 标签页用了某工具,B 标签页首页即时更新。
 *
 * 用法:
 *   在 AppProviders 内套一层 <RecentlyUsedProvider>,
 *   工具页用 <RecentlyUsedTracker/> 自动记录,
 *   首页用 useRecentlyUsed() 读取并展示。
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'

const STORAGE_KEY = 'recently_used_tools'
const MAX_ITEMS = 4

interface RecentlyUsedContextValue {
  /** 最近使用的 slug 列表(最新在前,挂载前为空) */
  recentlyUsed: string[]
  /** 记录一个工具为"最近使用";自动去重 + 移到最前 + 截断到 MAX_ITEMS */
  addRecentlyUsed: (slug: string) => void
  /** 清空最近使用记录 */
  clearRecentlyUsed: () => void
  /** 客户端是否已挂载(避免 SSR 闪烁) */
  recentlyReady: boolean
}

const RecentlyUsedContext = createContext<RecentlyUsedContextValue | null>(null)

/** 安全读取 localStorage 里的 slug 数组 */
function readStored(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return Array.from(
      new Set(parsed.filter((s): s is string => typeof s === 'string')),
    ).slice(0, MAX_ITEMS)
  } catch {
    // 隐私模式 / JSON 损坏 → 视为空
    return []
  }
}

export function RecentlyUsedProvider({ children }: { children: ReactNode }) {
  const [recentlyUsed, setRecentlyUsed] = useState<string[]>([])
  const [ready, setReady] = useState(false)

  // 挂载时读取已存记录
  useEffect(() => {
    setRecentlyUsed(readStored())
    setReady(true)

    // 跨标签页同步:监听 storage 事件
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setRecentlyUsed(readStored())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const persist = useCallback((next: string[]) => {
    setRecentlyUsed(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // 隐私模式写入失败,静默忽略(内存态仍生效)
    }
  }, [])

  const addRecentlyUsed = useCallback(
    (slug: string) => {
      if (!slug) return
      setRecentlyUsed((prev) => {
        // 去重(移除已存在)→ 放到最前 → 截断 MAX_ITEMS
        const next = [slug, ...prev.filter((s) => s !== slug)].slice(0, MAX_ITEMS)
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        } catch {
          /* ignore */
        }
        return next
      })
    },
    [],
  )

  const clearRecentlyUsed = useCallback(() => {
    persist([])
  }, [persist])

  return (
    <RecentlyUsedContext.Provider
      value={{ recentlyUsed, addRecentlyUsed, clearRecentlyUsed, recentlyReady: ready }}
    >
      {children}
    </RecentlyUsedContext.Provider>
  )
}

export function useRecentlyUsed() {
  const ctx = useContext(RecentlyUsedContext)
  if (!ctx) {
    throw new Error('useRecentlyUsed must be used within <RecentlyUsedProvider>')
  }
  return ctx
}
