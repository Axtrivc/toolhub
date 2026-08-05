'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
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
        localStorage.setItem(LOCALE_KEY, detected)
      }
    }

    // 主题:localStorage > 系统偏好 > light
    const savedTheme = typeof localStorage !== 'undefined' && localStorage.getItem(THEME_KEY)
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setThemeState(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeState('dark')
    }

    setMounted(true)
  }, [])

  // 主题变化时:写 localStorage + 切 html 的 class
  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem(THEME_KEY, theme)
  }, [theme, mounted])

  // 语言变化时:同步 <html lang>(SEO/可访问性)
  useEffect(() => {
    if (!mounted) return
    document.documentElement.lang = locale
  }, [locale, mounted])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    localStorage.setItem(LOCALE_KEY, l)
  }, [])

  // 兼容旧调用点(多语下拉直接用 setLocale;此处保留一个有意义的轮换行为)
  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const order: Locale[] = ['en', 'zh', 'es', 'de']
      const idx = order.indexOf(prev)
      const next = order[(idx + 1) % order.length]
      localStorage.setItem(LOCALE_KEY, next)
      return next
    })
  }, [])

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
  }, [])

  const toggleTheme = useCallback(() => {
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
