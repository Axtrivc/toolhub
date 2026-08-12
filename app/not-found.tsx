'use client'

import Link from 'next/link'
import { getPublishedTools } from '@/lib/tools'
import { t, getToolName, getToolShortIntro } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * 404 页面 —— 客户端组件:
 * 界面文案(标题 / 说明 / 返回按钮)与工具卡片(name/shortIntro)
 * 均跟随当前语言,经 i18n helpers 取词,缺失回退英文原值。
 */
export default function NotFound() {
  const { locale } = useApp()
  const tools = getPublishedTools()
  const popular = tools.slice(0, 6)

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-7xl font-bold text-brand-600">404</p>
      <h1 className="mt-4 text-3xl font-bold" style={{ color: 'rgb(var(--text))' }}>
        {t(locale, 'notFoundTitle')}
      </h1>
      <p className="mt-3 max-w-md" style={{ color: 'rgb(var(--text-muted))' }}>
        {t(locale, 'notFoundBody')}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {popular.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}/`}
            className="group rounded-lg border p-4 text-left transition hover:border-brand-300"
            style={{
              borderColor: 'rgb(var(--border))',
              backgroundColor: 'rgb(var(--bg-card))',
            }}
          >
            <div className="font-semibold group-hover:text-brand-600" style={{ color: 'rgb(var(--text))' }}>
              {getToolName(locale, tool.slug, tool.name)}
            </div>
            <div className="mt-1 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
              {getToolShortIntro(locale, tool.slug, tool.shortIntro)}
            </div>
          </Link>
        ))}
      </div>

      <Link href="/" className="btn btn-primary mt-8">
        {t(locale, 'notFoundBack')}
      </Link>
    </div>
  )
}
