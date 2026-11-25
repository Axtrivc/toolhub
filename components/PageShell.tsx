'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

interface PageShellProps {
  title: string
  description?: string
  crumb?: string
  prose?: boolean
  children: ReactNode
}

/**
 * 静态页面通用外壳(关于/隐私/联系/条款)- 主题感知 + i18n
 */
export function PageShell({ title, description, crumb, prose = true, children }: PageShellProps) {
  const { locale } = useApp()

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-8 sm:pb-24 sm:pt-14">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="text-brand-700 dark:text-brand-400">
              {t(locale, 'toolHome')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          {crumb && (
            <>
              <li style={{ color: 'rgb(var(--text-muted))' }}>{crumb}</li>
              <li aria-hidden="true">/</li>
            </>
          )}
          <li style={{ color: 'rgb(var(--text-muted))' }}>{title}</li>
        </ol>
      </nav>

      <header className="mb-10 border-b border-hairline pb-8 sm:mb-12 sm:pb-10">
        <h1 className="font-serif text-4xl font-normal leading-[1.1] tracking-[-.5px] sm:text-5xl sm:tracking-[-1px]" style={{ color: 'rgb(var(--text))' }}>
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: 'rgb(var(--text-muted))' }}>
            {description}
          </p>
        )}
      </header>

      <div className={prose ? 'prose-content max-w-3xl' : undefined}>{children}</div>
    </div>
  )
}
