'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useApp } from './providers/AppProviders'
import { t, tc, getToolName } from '@/lib/i18n'
import { SITE_NAME } from '@/lib/seo'
import { getPublishedTools } from '@/lib/tools'

export function Footer() {
  // hydration 安全:首帧用 null(SSR 与 CSR 首帧一致,渲染时不显示年份),
  // 挂载后再读真实年份,避免 SSR(构建时年份)≠ CSR(运行时年份)的 mismatch。
  const [year, setYear] = useState<number | null>(null)
  useEffect(() => setYear(new Date().getFullYear()), [])
  const { locale } = useApp()
  const tools = getPublishedTools()

  // 按分类分组
  const grouped: Record<string, typeof tools> = {}
  for (const tl of tools) {
    if (!grouped[tl.category]) grouped[tl.category] = []
    grouped[tl.category].push(tl)
  }
  const categories = Object.entries(grouped).sort((a, b) => b[1].length - a[1].length)

  return (
    <footer data-embed-hide className="mt-16 border-t" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
      <div className="container-page py-10">
        {/* 分类导航 - 大网格 */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map(([category, categoryTools]) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
                {tc(locale, category)}
              </h3>
              <ul className="space-y-1.5 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
                {categoryTools.slice(0, 6).map((tool) => (
                  <li key={tool.slug}>
                    <Link href={`/tools/${tool.slug}/`} className="hover:text-brand-600">
                      {getToolName(locale, tool.slug, tool.name)}
                    </Link>
                  </li>
                ))}
                {categoryTools.length > 6 && (
                  <li>
                    <Link
                      href={`/?category=${encodeURIComponent(category)}`}
                      className="text-xs font-medium text-brand-600 hover:underline"
                    >
                      {t(locale, 'footerMore', { count: categoryTools.length - 6 })}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部品牌 + 法律链接 */}
        <div className="mt-10 grid grid-cols-1 gap-6 border-t pt-8 sm:grid-cols-2" style={{ borderColor: 'rgb(var(--border))' }}>
          <div>
            <div className="flex items-center gap-2 font-bold" style={{ color: 'rgb(var(--text))' }}>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                T
              </span>
              <span className="text-lg">{SITE_NAME}</span>
            </div>
            <p className="mt-3 max-w-md text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
              {t(locale, 'footerTagline')}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:justify-end">
            <Link href="/about/" className="hover:text-brand-600" style={{ color: 'rgb(var(--text-muted))' }}>
              {t(locale, 'footerAbout')}
            </Link>
            <Link href="/contact/" className="hover:text-brand-600" style={{ color: 'rgb(var(--text-muted))' }}>
              {t(locale, 'footerContact')}
            </Link>
            <Link href="/privacy/" className="hover:text-brand-600" style={{ color: 'rgb(var(--text-muted))' }}>
              {t(locale, 'footerPrivacy')}
            </Link>
            <Link href="/terms/" className="hover:text-brand-600" style={{ color: 'rgb(var(--text-muted))' }}>
              {t(locale, 'footerTerms')}
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t pt-6 text-sm" style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-faint))' }}>
          © {year ?? ''} {SITE_NAME}. {tools.length} {t(locale, 'footerRights')}
        </div>
      </div>
    </footer>
  )
}
