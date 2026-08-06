'use client'

import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { isLocale, detectBrowserLocale } from '@/lib/i18n'
import { FavoritesProvider } from '@/lib/useFavorites'
import { RecentlyUsedProvider } from '@/lib/useRecentlyUsed'

/**
 * App 全局上下文:语言 + 主题
 *
 * 持久化到 localStorage,用户切换后跨会话保留。
 * 默认:英文 + 跟随系统主题。
 *
 * 语言:4 语(en 默认 / zh / es / de)。
 * 首访无缓存时按浏览器语言(navigator.language)自动匹配支持语种,
 * 匹配不到则保持英文。
 */

type Theme = 'light' | 'dark'

interface AppContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  /** 二态切换的兼容别名(保留以防回归);多语下拉请直接用 setLocale */
  toggleLocale: () => void
  theme: Theme
  setTheme: (t: Theme) => void
  toggleTheme: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

const LOCALE_KEY = 'app-locale'
const THEME_KEY = 'app-theme'

export function AppProviders({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)
  // 区分"初始推断值"(从 localStorage/系统偏好得出,不写回)与"用户显式操作"。
  // 仅用户点击切换后才把 theme 写回 localStorage,避免首访即覆盖系统偏好推断。
  const userTouchedThemeRef = useRef(false)

  // 初始化:从 localStorage 读取用户偏好;语言缺失时按浏览器语言自动匹配
  useEffect(() => {
    // 语言:localStorage > 浏览器语言检测 > 'en'
    const savedLocale = typeof localStorage !== 'undefined' && localStorage.getItem(LOCALE_KEY)
    if (isLocale(savedLocale)) {
      setLocaleState(savedLocale)
    } else {
      const detected = detectBrowserLocale()
      if (detected !== 'en') {
        setLocaleState(detected)
        try { localStorage.setItem(LOCALE_KEY, detected) } catch { /* 无痕模式/禁用存储 */ }
      }
    }

    // 主题:localStorage > 系统偏好 > light(仅推断,不写回 localStorage)
    const savedTheme = typeof localStorage !== 'undefined' && localStorage.getItem(THEME_KEY)
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setThemeState(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeState('dark')
    }

    setMounted(true)
  }, [])

  // 主题变化时:切 html 的 class;localStorage 仅在用户显式操作后写入
  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    if (userTouchedThemeRef.current) {
      try { localStorage.setItem(THEME_KEY, theme) } catch { /* 无痕模式/禁用存储 */ }
    }
  }, [theme, mounted])

  // 语言变化时:同步 <html lang>(SEO/可访问性)
  useEffect(() => {
    if (!mounted) return
    document.documentElement.lang = locale
  }, [locale, mounted])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    try { localStorage.setItem(LOCALE_KEY, l) } catch { /* 无痕模式/禁用存储 */ }
  }, [])

  // 兼容旧调用点(多语下拉直接用 setLocale;此处保留一个有意义的轮换行为)
  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const order: Locale[] = ['en', 'zh', 'es', 'de']
      const idx = order.indexOf(prev)
      const next = order[(idx + 1) % order.length]
      try { localStorage.setItem(LOCALE_KEY, next) } catch { /* 无痕模式/禁用存储 */ }
      return next
    })
  }, [])

  const setTheme = useCallback((t: Theme) => {
    userTouchedThemeRef.current = true
    setThemeState(t)
  }, [])

  const toggleTheme = useCallback(() => {
    userTouchedThemeRef.current = true
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  return (
    <AppContext.Provider
      value={{ locale, setLocale, toggleLocale, theme, setTheme, toggleTheme }}
    >
      <RecentlyUsedProvider>
        <FavoritesProvider>{children}</FavoritesProvider>
      </RecentlyUsedProvider>
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProviders')
  return ctx
}
