'use client'

import Link from 'next/link'
import type { ToolMeta } from '@/lib/tools'
import { getToolIcon } from '@/lib/tool-icons'
import { SmartIcon } from '@/components/SmartIcon'
import { useApp } from '@/components/providers/AppProviders'
import { t, tc, getToolName, getToolShortIntro } from '@/lib/i18n'

/**
 * 工具目录页(/tools/)的单张工具卡 + 分类标题:
 * 服务端 page.tsx 是静态组件拿不到 locale,故卡片文案(name/shortIntro/category)
 * 由本客户端组件经 i18n helpers 取当前语言,缺失回退英文原值。
 */
export function ToolDirectoryCard({ tool }: { tool: ToolMeta }) {
  const { locale } = useApp()
  return (
    <Link
      href={`/tools/${tool.slug}/`}
      className="group rounded-xl border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
      style={{
        borderColor: 'rgb(var(--border))',
        backgroundColor: 'rgb(var(--bg-card))',
      }}
    >
      <div className="flex items-start justify-between">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
          style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
          aria-hidden="true"
        >
          <SmartIcon icon={getToolIcon(tool)} className="h-5 w-5" />
        </span>
        <span
          className="text-xs font-medium uppercase tracking-wide"
          style={{ color: 'rgb(var(--text-faint))' }}
        >
          {tc(locale, tool.category)}
        </span>
      </div>
      <h3
        className="mt-4 text-lg font-semibold group-hover:text-brand-600"
        style={{ color: 'rgb(var(--text))' }}
      >
        {getToolName(locale, tool.slug, tool.name)}
      </h3>
      <p className="mt-2 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
        {getToolShortIntro(locale, tool.slug, tool.shortIntro)}
      </p>
    </Link>
  )
}

/** 分类分组标题(含本地化分类名与数量) */
export function ToolDirectoryHeading({
  category,
  count,
}: {
  category: string
  count: number
}) {
  const { locale } = useApp()
  return (
    <h2 className="mb-5 text-2xl font-bold" style={{ color: 'rgb(var(--text))' }}>
      {tc(locale, category)}
      <span className="ml-2 text-base font-normal" style={{ color: 'rgb(var(--text-faint))' }}>
        {count}
      </span>
    </h2>
  )
}

/** 目录页 hero 说明段(带内嵌"从首页搜索"链接) */
export function ToolDirectoryHeroBody({ count }: { count: number }) {
  const { locale } = useApp()
  const body = t(locale, 'toolsDirHeroBody', { count })
  const cta = t(locale, 'toolsDirCta')
  // hero 文案把 CTA 短语作为尾句嵌入;按语言包里是否包含该短语拆分渲染链接
  const idx = body.indexOf(cta)
  if (idx >= 0) {
    return (
      <p className="mt-5 text-lg" style={{ color: 'rgb(var(--text-muted))' }}>
        {body.slice(0, idx)}
        <Link href="/" className="text-brand-600 underline">
          {cta}
        </Link>
        {body.slice(idx + cta.length)}
      </p>
    )
  }
  return (
    <p className="mt-5 text-lg" style={{ color: 'rgb(var(--text-muted))' }}>
      {body}{' '}
      <Link href="/" className="text-brand-600 underline">
        {cta}
      </Link>
    </p>
  )
}

/** 目录页 H1(客户端取当前语言,复用 navAllTools;SSR 恒英文,SEO 标题由 metadata 保证) */
export function ToolDirectoryTitle() {
  const { locale } = useApp()
  return (
    <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: 'rgb(var(--text))' }}>
      {t(locale, 'navAllTools')}
    </h1>
  )
}

/**
 * 分类胶囊导航:点击回首页并选中该分类(与首页交互一致)。
 * 分类名经 tc() 本地化;数量为该分类工具数。
 */
export function ToolCategoryPills({ categories }: { categories: Array<[string, number]> }) {
  const { locale } = useApp()
  return (
    <nav
      className="mx-auto mb-10 flex max-w-4xl flex-wrap justify-center gap-2"
      aria-label="Tool categories"
    >
      {categories.map(([category, count]) => (
        <Link
          key={category}
          href={`/?category=${encodeURIComponent(category)}#all-tools`}
          className="rounded-full border px-4 py-1.5 text-sm font-medium transition hover:bg-brand-50"
          style={{
            borderColor: 'rgb(var(--border))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text-muted))',
          }}
        >
          {tc(locale, category)} ({count})
        </Link>
      ))}
    </nav>
  )
}
