'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'

/**
 * App 全局上下文:语言 + 主题
 *
 * 持久化到 localStorage,用户切换后跨会话保留。
 * 默认:英文 + 跟随系统主题。
 */

type Theme = 'light' | 'dark'

interface AppContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
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

  // 初始化:从 localStorage 读取用户偏好
  useEffect(() => {
    // 语言
    const savedLocale = (typeof localStorage !== 'undefined' && localStorage.getItem(LOCALE_KEY)) as Locale | null
    if (savedLocale === 'en' || savedLocale === 'zh') {
      setLocaleState(savedLocale)
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

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    localStorage.setItem(LOCALE_KEY, l)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === 'en' ? 'zh' : 'en'
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
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProviders')
  return ctx
}
