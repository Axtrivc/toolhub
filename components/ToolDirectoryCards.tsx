'use client'

import Link from 'next/link'
import type { ToolMeta } from '@/lib/tool-types'
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
      className="flex flex-col gap-2 rounded-xl border border-hairline bg-canvas p-5 text-ink"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-card text-ink"
          aria-hidden="true"
        >
          <SmartIcon icon={getToolIcon(tool)} className="h-5 w-5" />
        </span>
        <span
          className="rounded-full bg-surface-card px-2.5 py-1 text-right text-xs leading-snug text-body"
        >
          {tc(locale, tool.category)}
        </span>
      </div>
      <h3
        className="mt-2 font-serif text-[1.75rem] font-normal leading-tight tracking-[-.3px] text-ink"
      >
        {getToolName(locale, tool.slug, tool.name)}
      </h3>
      <p className="text-sm leading-6 text-body">
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
    <h2 className="mb-6 border-t border-hairline pt-5 font-serif text-4xl font-normal tracking-[-.5px] text-ink">
      {tc(locale, category)}
      <span className="ml-3 inline-block align-middle rounded-full bg-surface-card px-3 py-1 font-sans text-xs font-medium tracking-normal text-body">
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
      <p className="mt-5 text-lg leading-relaxed text-body">
        {body.slice(0, idx)}
        <Link href="/" className="text-brand-700 underline underline-offset-2 dark:text-primary">
          {cta}
        </Link>
        {body.slice(idx + cta.length)}
      </p>
    )
  }
  return (
    <p className="mt-5 text-lg leading-relaxed text-body">
      {body}{' '}
      <Link href="/" className="text-brand-700 underline underline-offset-2 dark:text-primary">
        {cta}
      </Link>
    </p>
  )
}

/** 目录页 H1(客户端取当前语言,复用 navAllTools;SSR 恒英文,SEO 标题由 metadata 保证) */
export function ToolDirectoryTitle() {
  const { locale } = useApp()
  return (
    <h1 className="font-serif text-[clamp(2.375rem,5vw,4rem)] font-normal leading-[1.05] tracking-[-.024em] text-ink">
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
      className="mb-14 flex flex-wrap gap-1 border-y border-hairline py-4"
      aria-label="Tool categories"
    >
      {categories.map(([category, count]) => (
        <Link
          key={category}
          href={`/?category=${encodeURIComponent(category)}#all-tools`}
          className="rounded-lg px-3 py-2 text-sm font-medium text-body hover:bg-surface-card hover:text-ink"
        >
          {tc(locale, category)} ({count})
        </Link>
      ))}
    </nav>
  )
}
