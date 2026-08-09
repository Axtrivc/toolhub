'use client'

/**
 * 最近使用工具(localStorage 同步)- 用户留存数据层
 *
 * 设计(与 useFavorites 同模式,保持一致性):
 *  - 单一 localStorage key `recently_used_tools`,存 RecentEntry 数组(JSON)。
 *  - 通过 React Context 暴露 { recentlyUsed, addRecentlyUsed, recentlyReady }。
 *  - 最多保留 5 个(工作台规格:Recent 展示最近 5 条),最新在前,自动去重。
 *  - 每条带 at 时间戳(ms),供 Quick Access 面板显示 mono 时间标记。
 *  - 首屏 SSR 不读 localStorage(hydration 安全):mounted 后才注入真实值,
 *    挂载前以空数组渲染。
 *  - 跨标签页同步(storage 事件):A 标签页用了某工具,B 标签页首页即时更新。
 *
 * 数据迁移:v1 格式为纯 slug 字符串数组(string[]),读取时自动升级为
 * { slug, at } 条目(at 取升级时刻),无感迁移不丢记录。
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
const MAX_ITEMS = 5

/** 最近使用条目:slug + 访问时间戳(ms) */
export interface RecentEntry {
  slug: string
  at: number
}

interface RecentlyUsedContextValue {
  /** 最近使用条目列表(最新在前,挂载前为空) */
  recentlyUsed: RecentEntry[]
  /** 记录一个工具为"最近使用";自动去重 + 移到最前 + 截断到 MAX_ITEMS */
  addRecentlyUsed: (slug: string) => void
  /** 清空最近使用记录 */
  clearRecentlyUsed: () => void
  /** 客户端是否已挂载(避免 SSR 闪烁) */
  recentlyReady: boolean
}

const RecentlyUsedContext = createContext<RecentlyUsedContextValue | null>(null)

/** 安全读取 localStorage;兼容 v1 纯字符串数组,自动升级为 { slug, at } */
function readStored(): RecentEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    const entries: RecentEntry[] = []
    const seen = new Set<string>()
    for (const item of parsed) {
      // v1:纯 slug 字符串;v2:{ slug, at }
      const slug = typeof item === 'string' ? item : (item as RecentEntry)?.slug
      const at = typeof item === 'string' ? Date.now() : (item as RecentEntry)?.at
      if (typeof slug !== 'string' || !slug || seen.has(slug)) continue
      seen.add(slug)
      entries.push({ slug, at: typeof at === 'number' ? at : Date.now() })
      if (entries.length >= MAX_ITEMS) break
    }
    return entries
  } catch {
    // 隐私模式 / JSON 损坏 → 视为空
    return []
  }
}

export function RecentlyUsedProvider({ children }: { children: ReactNode }) {
  const [recentlyUsed, setRecentlyUsed] = useState<RecentEntry[]>([])
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

  const persist = useCallback((next: RecentEntry[]) => {
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
        // 去重(移除已存在)→ 放到最前(刷新时间戳)→ 截断 MAX_ITEMS
        const next = [
          { slug, at: Date.now() },
          ...prev.filter((e) => e.slug !== slug),
        ].slice(0, MAX_ITEMS)
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
