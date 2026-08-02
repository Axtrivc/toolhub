'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'
import { SITE_NAME } from '@/lib/seo'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'

export function Header() {
  const { locale } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)
  const panelId = useId()

  // 打开/关闭时同步 body 滚动锁,并支持 ESC 关闭
  useEffect(() => {
    if (!menuOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  // 路由切换/点击链接后关闭菜单
  const close = () => setMenuOpen(false)

  return (
    <header
      data-embed-hide
      className="sticky top-0 z-40 border-b backdrop-blur"
      style={{
        borderColor: 'rgb(var(--border))',
        backgroundColor: 'rgb(var(--bg-card) / 0.9)',
      }}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold" style={{ color: 'rgb(var(--text))' }}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            T
          </span>
          <span className="text-lg">{SITE_NAME}</span>
        </Link>

        {/* 桌面端:水平导航 + 切换按钮(<md 隐藏) */}
        <div className="hidden items-center gap-1 text-sm font-medium md:flex">
          <nav className="flex items-center gap-1" style={{ color: 'rgb(var(--text-muted))' }}>
            <Link
              href="/"
              className="rounded-md px-3 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              style={{ color: 'rgb(var(--text-muted))' }}
            >
              {t(locale, 'navAllTools')}
            </Link>
            <Link
              href="/about/"
              className="rounded-md px-3 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              style={{ color: 'rgb(var(--text-muted))' }}
            >
              {t(locale, 'navAbout')}
            </Link>
            <Link
              href="/contact/"
              className="rounded-md px-3 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              style={{ color: 'rgb(var(--text-muted))' }}
            >
              {t(locale, 'navContact')}
            </Link>
          </nav>

          {/* 语言 + 主题切换 */}
          <div className="ml-2 flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* 移动端:汉堡按钮(md 及以上隐藏)。触控目标 40×40 */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls={panelId}
          className="flex h-10 w-10 items-center justify-center rounded-lg border transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700 md:hidden"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            color: 'rgb(var(--text-muted))',
          }}
        >
          {/* 汉堡 / 关闭 图标随状态切换 */}
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 移动端下拉抽屉(仅 menuOpen 时渲染)。
          点遮罩 / 链接 / ESC 关闭,见上方 effect 与 onClick。 */}
      {menuOpen && (
        <div className="md:hidden">
          {/* 遮罩层 */}
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={close}
            className="fixed inset-0 top-16 z-30 bg-black/40"
          />
          {/* 抽屉面板:从顶部滑入,贴在 header 下方 */}
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute inset-x-0 top-16 z-40 border-b shadow-lg"
            style={{
              borderColor: 'rgb(var(--border))',
              backgroundColor: 'rgb(var(--bg-card))',
            }}
          >
            <nav className="container-page flex flex-col py-2" style={{ color: 'rgb(var(--text))' }}>
              <Link
                href="/"
                onClick={close}
                className="rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {t(locale, 'navAllTools')}
              </Link>
              <Link
                href="/about/"
                onClick={close}
                className="rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {t(locale, 'navAbout')}
              </Link>
              <Link
                href="/contact/"
                onClick={close}
                className="rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {t(locale, 'navContact')}
              </Link>

              {/* 切换按钮放在抽屉底部,触控友好 */}
              <div className="mt-2 flex items-center gap-2 border-t px-3 pb-2 pt-3" style={{ borderColor: 'rgb(var(--border))' }}>
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
