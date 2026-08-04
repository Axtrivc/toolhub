'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'
import { getPublishedTools } from '@/lib/tools'
import { SITE_NAME } from '@/lib/seo'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { SearchPalette } from './SearchPalette'

export function Header() {
  const { locale } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const panelId = useId()

  // 平台检测:决定搜索按钮上 kbd 提示显示 ⌘K(Mac)还是 Ctrl K(Win/Linux)。
  // 只在客户端首帧后判定,SSR 阶段默认 false(显示 Ctrl K),避免 hydration mismatch。
  const [isMac, setIsMac] = useState(false)
  useEffect(() => {
    setIsMac(typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent))
  }, [])

  // 工具清单(全站搜索用)。lib/tools 是纯模块,与首页同一份口径。
  const tools = useRef(getPublishedTools()).current

  // 全局快捷键 Cmd+K(mac)/ Ctrl+K(Windows)切换搜索弹窗。
  // 关键:必须无条件 e.preventDefault(),否则 Chrome 会把 Ctrl+K 抢去聚焦地址栏,
  // 尤其是当前焦点在某个 <input> 里时(旧实现因提前 return 漏掉了 preventDefault)。
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault() // 👈 拦截浏览器聚焦地址栏等默认行为
        setSearchOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openSearch = () => setSearchOpen(true)

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
      className="sticky top-0 z-40 border-b backdrop-blur-md"
      style={{
        borderColor: 'rgb(var(--border))',
        backgroundColor: 'rgb(var(--bg-card) / 0.8)',
      }}
    >
      {/* Header 内层容器:全宽贴边流式布局(无 max-w 限制),
          Logo 贴最左 / 菜单组贴最右,左右用响应式 padding 留呼吸空间。
          ⚠️ 按用户要求保持顶部导航栏不动,不改版心居中。 */}
      <div className="flex w-full items-center justify-between px-6 py-3.5 sm:px-8 lg:px-10">
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
              href="/blog/"
              className="rounded-md px-3 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              style={{ color: 'rgb(var(--text-muted))' }}
            >
              {t(locale, 'navBlog')}
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

          {/* 搜索按钮 + 语言 + 主题切换 */}
          <div className="ml-2 flex items-center gap-1">
            <button
              type="button"
              onClick={openSearch}
              aria-label={t(locale, 'searchOpen')}
              title={t(locale, 'searchOpen')}
              className="flex h-9 items-center gap-1.5 rounded-lg border pl-2.5 pr-2 transition hover:bg-slate-100 dark:hover:bg-slate-700"
              style={{
                borderColor: 'rgb(var(--border-strong))',
                color: 'rgb(var(--text-muted))',
              }}
            >
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              {/* 键盘快捷键微型提示:桌面端可见,极隐蔽高质感。
                  Mac 显示 ⌘K,Windows/Linux 显示 Ctrl K;移动端 hidden。 */}
              <kbd className="hidden items-center gap-0.5 rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-400 opacity-70 transition-opacity hover:opacity-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 sm:inline-flex">
                {isMac ? '⌘K' : 'Ctrl K'}
              </kbd>
            </button>
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
            <nav className="flex w-full flex-col px-6 py-2 sm:px-8 lg:px-10" style={{ color: 'rgb(var(--text))' }}>
              <Link
                href="/"
                onClick={close}
                className="rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {t(locale, 'navAllTools')}
              </Link>
              <Link
                href="/blog/"
                onClick={close}
                className="rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {t(locale, 'navBlog')}
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

              {/* 搜索入口:移动端抽屉里同样可达 */}
              <button
                type="button"
                onClick={() => {
                  close()
                  openSearch()
                }}
                className="mt-1 flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
                style={{ color: 'rgb(var(--text))' }}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                {t(locale, 'searchOpen')}
              </button>

              {/* 切换按钮放在抽屉底部,触控友好 */}
              <div className="mt-2 flex items-center gap-2 border-t px-3 pb-2 pt-3" style={{ borderColor: 'rgb(var(--border))' }}>
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* 全局搜索弹窗(Cmd/Ctrl+K) */}
      <SearchPalette
        tools={tools}
        locale={locale}
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </header>
  )
}
