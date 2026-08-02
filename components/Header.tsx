'use client'

import Link from 'next/link'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'
import { SITE_NAME } from '@/lib/seo'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'

export function Header() {
  const { locale } = useApp()

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

        <div className="flex items-center gap-1 text-sm font-medium">
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
      </div>
    </header>
  )
}
