'use client'

import { useMemo } from 'react'
import { getToolIcon } from '@/lib/tools'
import type { ToolMeta } from '@/lib/tools'
import { getPublishedTools } from '@/lib/tools'
import { useFavorites } from '@/lib/useFavorites'
import { useRecentlyUsed } from '@/lib/useRecentlyUsed'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'
import { AnimatedToolCard, StaggerGroup } from './motion/MotionPrimitives'

const MAX_ITEMS = 4

/**
 * 首页「最近使用 / 我的收藏」动态区块
 *
 * 位置:Hero 与 Popular Tools 之间。
 *
 * 合并逻辑(最近优先):
 *  1. 取 recentlyUsed(最新在前)+ favorites;
 *  2. 合并去重(recently 在前),最多 4 个;
 *  3. slug → ToolMeta 解析(找不到的 slug 自动丢弃,防御历史脏数据)。
 *
 * 可见性:
 *  - 挂载前(ready=false)返回 null(占位由父布局自然处理,不闪烁);
 *  - 合并后为空 → 返回 null(优雅隐藏,不占空间)。
 *
 * 卡片视觉与首页 ToolCard / RelatedTools 严格一致:
 *  - Clean Outlined Dark Theme(solid bg + crisp border + hover 蓝色发光)
 *  - 响应式 4 列网格:1 / 2 / 4
 */
export function HomeRecents() {
  const { locale } = useApp()
  const { favorites, favoritesReady } = useFavorites()
  const { recentlyUsed, recentlyReady } = useRecentlyUsed()

  const items = useMemo<ToolMeta[]>(() => {
    // 两个 store 都未挂载时返回空(SSR 安全)
    if (!recentlyReady && !favoritesReady) return []

    const published = getPublishedTools()
    const bySlug = new Map(published.map((t) => [t.slug, t]))

    // recentlyUsed 在前,favorites 在后,去重
    const merged: string[] = []
    for (const slug of recentlyUsed) {
      if (!merged.includes(slug)) merged.push(slug)
    }
    for (const slug of favorites) {
      if (!merged.includes(slug)) merged.push(slug)
    }

    return merged
      .map((slug) => bySlug.get(slug))
      .filter((tool): tool is ToolMeta => Boolean(tool))
      .slice(0, MAX_ITEMS)
  }, [recentlyUsed, favorites, recentlyReady, favoritesReady])

  // 挂载前/无记录 → 隐藏(不渲染任何占位,避免空区块占空间)
  if (items.length === 0) return null

  return (
    <section aria-labelledby="home-recents-heading" className="w-full">
      <header className="mb-5">
        <h2
          id="home-recents-heading"
          className="flex items-center gap-2 text-xl font-bold"
          style={{ color: 'rgb(var(--text))' }}
        >
          <span aria-hidden="true">⏱️</span>
          {t(locale, 'recentTitle')}
        </h2>
        <p className="mt-1 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
          {t(locale, 'recentSubtitle')}
        </p>
      </header>

      <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((tool) => {
          const href = `/tools/${tool.slug}/`
          const titleAttr = `${tool.name} — ${tool.shortIntro}`
          return (
            <AnimatedToolCard key={tool.slug} href={href} title={titleAttr} ariaLabel={titleAttr}>
              <div className="flex items-start justify-between">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 p-2 text-2xl transition-transform group-hover:scale-110 dark:border dark:border-blue-800/40 dark:bg-blue-950/30"
                  aria-hidden="true"
                >
                  {getToolIcon(tool)}
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  {tool.category}
                </span>
              </div>
              <h3 className="mt-4 text-base font-medium text-slate-900 group-hover:text-brand-600 dark:text-white">
                {tool.name}
              </h3>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                {tool.shortIntro}
              </p>
            </AnimatedToolCard>
          )
        })}
      </StaggerGroup>
    </section>
  )
}
