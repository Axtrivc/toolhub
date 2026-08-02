'use client'

/**
 * 收藏夹(localStorage 同步)- 工具页 ❤️ 按钮的数据层
 *
 * 设计:
 *  - 单一 localStorage key `toolhub-favorites`,存一个 slug 数组(JSON)。
 *  - 通过 React Context 暴露 { favorites, isFavorite, toggleFavorite },
 *    保证 ToolLayout 里的收藏按钮与(未来的)收藏页/导航徽标读取同一份状态。
 *  - 首屏服务端渲染时不读 localStorage(hydration 安全):mounted 后才注入真实值,
 *    挂载前以空数组渲染,避免 SSR/CSR 不一致。
 *  - 跨标签页同步(storage 事件):在另一个标签页收藏/取消,本标签页按钮即时更新。
 *
 * 用法:
 *   在 AppProviders 内套一层 <FavoritesProvider>,然后任意客户端组件里:
 *     const { isFavorite, toggleFavorite } = useFavorites()
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'

const STORAGE_KEY = 'toolhub-favorites'

interface FavoritesContextValue {
  /** 已收藏的 slug 列表(挂载前为空) */
  favorites: string[]
  /** 是否已收藏某 slug */
  isFavorite: (slug: string) => boolean
  /** 切换收藏状态;返回切换后的布尔值 */
  toggleFavorite: (slug: string) => boolean
  /** 客户端是否已挂载(用于避免 SSR 闪烁) */
  favoritesReady: boolean
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null)

/** 安全读取 localStorage 里的 slug 数组 */
function readStored(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    // 过滤掉非字符串与重复项,保持顺序
    return Array.from(new Set(parsed.filter((s): s is string => typeof s === 'string')))
  } catch {
    // 隐私模式 / JSON 损坏 → 视为空
    return []
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([])
  const [ready, setReady] = useState(false)

  // 挂载时读取已存收藏
  useEffect(() => {
    setFavorites(readStored())
    setReady(true)

    // 跨标签页同步:监听 storage 事件
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setFavorites(readStored())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const persist = useCallback((next: string[]) => {
    setFavorites(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // 隐私模式写入失败,静默忽略(内存态仍生效)
    }
  }, [])

  const isFavorite = useCallback(
    (slug: string) => favorites.includes(slug),
    [favorites],
  )

  const toggleFavorite = useCallback(
    (slug: string): boolean => {
      const willAdd = !favorites.includes(slug)
      const next = willAdd
        ? [...favorites, slug]
        : favorites.filter((s) => s !== slug)
      persist(next)
      return willAdd
    },
    [favorites, persist],
  )

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite, favoritesReady: ready }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within <FavoritesProvider>')
  return ctx
}
