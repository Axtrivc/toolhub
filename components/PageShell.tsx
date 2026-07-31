'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

interface PageShellProps {
  title: string
  description?: string
  crumb?: string
  children: ReactNode
}

/**
 * 静态页面通用外壳(关于/隐私/联系/条款)- 主题感知 + i18n
 */
export function PageShell({ title, description, crumb, children }: PageShellProps) {
  const { locale } = useApp()

  return (
    <div className="container-page py-10">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-brand-600">
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

      <header className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl" style={{ color: 'rgb(var(--text))' }}>
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-lg" style={{ color: 'rgb(var(--text-muted))' }}>
            {description}
          </p>
        )}
      </header>

      <div className="prose-content max-w-3xl">{children}</div>
    </div>
  )
}
