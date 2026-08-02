'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import type { ToolMeta } from '@/lib/tools'
import { getToolIcon } from '@/lib/tools'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

interface HomePageClientProps {
  tools: ToolMeta[]
}

/**
 * 首页客户端组件 - 带搜索 + 分类筛选 + i18n + 主题
 *
 * 关键设计:activeCategory 用 null 代表"全部",而不是本地化字符串。
 * 这样切换语言时筛选状态不丢失 —— 工具的 category 字段本身是英文,
 * 不受 locale 影响。
 */
export function HomePageClient({ tools }: HomePageClientProps) {
  const { locale } = useApp()
  const [query, setQuery] = useState('')
  // null = 全部;其它值 = 某个具体分类(工具的 category 字段,英文)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // 支持通过 URL ?category=Finance%20Calculators 预选分类。
  // 用途:工具详情页面包屑中的"分类"链接回首页时自动选中对应分类,
  // 同时配合 URL 中的 #<Category> 锚点滚动到该分类区块。
  // 仅在首次挂载读取一次,不覆盖用户后续的手动筛选。
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const cat = params.get('category')
    if (cat && categories.includes(cat)) {
      setActiveCategory(cat)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 提取分类列表(工具的 category 字段本身是英文,不随语言变化)
  const categories = useMemo(() => {
    const set = new Set<string>()
    tools.forEach((tl) => set.add(tl.category))
    return Array.from(set).sort()
  }, [tools])

  // 筛选 + 搜索
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return tools.filter((tl) => {
      // null 表示"全部",匹配所有;否则匹配具体分类
      const matchCat = activeCategory === null || tl.category === activeCategory
      if (!matchCat) return false
      if (!q) return true
      return (
        tl.name.toLowerCase().includes(q) ||
        tl.shortIntro.toLowerCase().includes(q) ||
        tl.keywords.some((k) => k.toLowerCase().includes(q)) ||
        tl.h1.toLowerCase().includes(q)
      )
    })
  }, [tools, query, activeCategory])

  // 按分类分组(筛选后)
  const grouped = useMemo(() => {
    const map: Record<string, ToolMeta[]> = {}
    filtered.forEach((tl) => {
      if (!map[tl.category]) map[tl.category] = []
      map[tl.category].push(tl)
    })
    return map
  }, [filtered])

  // 判断"全部"按钮是否激活
  const allActive = activeCategory === null

  return (
    <div className="space-y-8">
      {/* 搜索框 */}
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(locale, 'searchPlaceholder', { count: tools.length })}
            className="w-full rounded-xl border py-4 pl-12 pr-4 text-lg shadow-sm outline-none transition focus:ring-2"
            style={{
              borderColor: 'rgb(var(--border-strong))',
              backgroundColor: 'rgb(var(--bg-card))',
              color: 'rgb(var(--text))',
            }}
            aria-label="Search tools"
          />
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            style={{ color: 'rgb(var(--text-faint))' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* 分类筛选 chips(第一项是本地化的"全部",用 allActive 控制激活态)*/}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            allActive ? 'text-white' : 'border hover:bg-brand-50'
          }`}
          style={
            allActive
              ? { backgroundColor: 'rgb(37 99 235)' }
              : {
                  borderColor: 'rgb(var(--border))',
                  backgroundColor: 'rgb(var(--bg-card))',
                  color: 'rgb(var(--text-muted))',
                }
          }
        >
          {t(locale, 'categoryAll')}
        </button>
        {categories.map((cat) => {
          const active = activeCategory === cat
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                active ? 'text-white' : 'border hover:bg-brand-50'
              }`}
              style={
                active
                  ? { backgroundColor: 'rgb(37 99 235)' }
                  : {
                      borderColor: 'rgb(var(--border))',
                      backgroundColor: 'rgb(var(--bg-card))',
                      color: 'rgb(var(--text-muted))',
                    }
              }
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* 结果数 */}
      <p className="text-center text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
        {filtered.length === tools.length
          ? t(locale, 'showingAll', { count: tools.length })
          : t(locale, 'showingFiltered', { filtered: filtered.length, total: tools.length })}
      </p>

      {/* 无结果提示 */}
      {filtered.length === 0 && (
        <div className="rounded-lg border-2 border-dashed p-10 text-center" style={{ borderColor: 'rgb(var(--border))' }}>
          <p style={{ color: 'rgb(var(--text-muted))' }}>{t(locale, 'noResults', { query })}</p>
          <button
            type="button"
            onClick={() => { setQuery(''); setActiveCategory(null) }}
            className="mt-3 text-sm font-medium text-brand-600 hover:underline"
          >
            {t(locale, 'clearSearch')}
          </button>
        </div>
      )}

      {/* 分组展示 */}
      {Object.entries(grouped).map(([category, categoryTools]) => (
        <section key={category} id={category} className="scroll-mt-20">
          <h2 className="mb-5 text-2xl font-bold" style={{ color: 'rgb(var(--text))' }}>
            {category}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}/`}
                className="group rounded-xl border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: 'rgb(var(--border))',
                  backgroundColor: 'rgb(var(--bg-card))',
                }}
              >
                <div className="flex items-start justify-between">
                  {/* 工具图标:按 category 默认映射 + 明星工具单独定制(见 lib/tools.ts getToolIcon) */}
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
                    aria-hidden="true"
                  >
                    {getToolIcon(tool)}
                  </span>
                  {/* 右上角显示分类(替代原 PRO/FREE 徽章 —— 工具全免费,PRO 字样会误导用户) */}
                  <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>
                    {tool.category}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:text-brand-600" style={{ color: 'rgb(var(--text))' }}>
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
                  {tool.shortIntro}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
