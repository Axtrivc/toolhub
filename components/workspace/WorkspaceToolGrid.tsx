'use client'

/**
 * WorkspaceToolGrid —— 首页工作台工具矩阵(分类 Tabs + 流体网格形变)
 *
 * 结构:
 *  ① 搜索框(跨 Tab 过滤,保留原有 ?category= 预选行为);
 *  ② 固定 6 分类 Tabs:All / Developer / Design & Color / Text & Writing / Converters / Utilities
 *     —— 激活指示块用 framer-motion layoutId="activeWorkspaceTab" 在 Tab 间滑轨过渡;
 *  ③ 扁平化玻璃卡片网格:AnimatePresence(popLayout)+ layout spring,
 *     切换 Tab 时卡片退出/进入/重排位移三连,形成"网格形变"质感;
 *  ④ 每张卡片右上角图钉(PinButton),一键固定到 Quick Access 面板。
 *
 * 数据约定:
 *  - Tab 是"真实 category 的桶"(tools.ts 的 category 字段为英文键,不随语言变);
 *  - activeTab 用 id 而非本地化字符串,切语言不丢筛选状态;
 *  - ?category=<真实分类> 进首页时映射到所属 Tab(兼容工具页面包屑与 SEO 区回链)。
 *
 * 性能:全部动画仅 opacity/transform(GPU 合成);reduce-motion 降级为静态网格。
 */

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { toolCardEnterVariants } from '@/components/motion/MotionPrimitives'
import type { ToolMeta } from '@/lib/tools'
import { getToolIcon } from '@/lib/tools'
import { SmartIcon } from '@/components/SmartIcon'
import { useApp } from '@/components/providers/AppProviders'
import { t, tc, getToolName, getToolShortIntro } from '@/lib/i18n'
import { FeaturedTools } from '@/components/FeaturedTools'
import { PinButton } from './PinButton'

/** 激活 Tab 滑轨高亮块的共享 layoutId(规格指定) */
const ACTIVE_TAB_LAYOUT_ID = 'activeWorkspaceTab'

interface WorkspaceTab {
  id: string
  /** 该 Tab 覆盖的真实 category 键;null = 全部 */
  categories: readonly string[] | null
  /** i18n key(Dict) */
  labelKey: 'categoryAll' | 'workspaceTabDeveloper' | 'workspaceTabDesign' | 'workspaceTabText' | 'workspaceTabConverters' | 'workspaceTabUtilities'
}

/** 固定 6 Tab(规格):桶映射 tools.ts 的 11 个真实 category */
const WORKSPACE_TABS: readonly WorkspaceTab[] = [
  { id: 'all', categories: null, labelKey: 'categoryAll' },
  { id: 'developer', categories: ['Developer Tools', 'Security Tools'], labelKey: 'workspaceTabDeveloper' },
  { id: 'design', categories: ['Web Design Tools'], labelKey: 'workspaceTabDesign' },
  { id: 'text', categories: ['Text Tools'], labelKey: 'workspaceTabText' },
  { id: 'converters', categories: ['Unit Converters'], labelKey: 'workspaceTabConverters' },
  {
    id: 'utilities',
    categories: [
      'Finance Calculators',
      'Math Calculators',
      'Health Calculators',
      'Time Calculators',
      'Education Calculators',
      'Business Tools',
    ],
    labelKey: 'workspaceTabUtilities',
  },
]

interface WorkspaceToolGridProps {
  tools: ToolMeta[]
}

export function WorkspaceToolGrid({ tools }: WorkspaceToolGridProps) {
  const { locale } = useApp()
  const reduceMotion = useReducedMotion()
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState<string>('all')

  // ?category=<真实分类> → 映射到所属 Tab(首次挂载读一次,不覆盖后续手动切换)。
  // 兼容:工具页面包屑"分类"链接、首页 SEO 区分类内链。
  useEffect(() => {
    if (typeof window === 'undefined') return
    const cat = new URLSearchParams(window.location.search).get('category')
    if (!cat) return
    const tab = WORKSPACE_TABS.find((tb) => tb.categories?.includes(cat))
    if (tab) setActiveTab(tab.id)
  }, [])

  // 每个 Tab 的工具数(Tab 上的 mono 计数徽章)
  const tabCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const tab of WORKSPACE_TABS) {
      counts.set(
        tab.id,
        tab.categories === null
          ? tools.length
          : tools.filter((tl) => tab.categories!.includes(tl.category)).length,
      )
    }
    return counts
  }, [tools])

  // 筛选:Tab 桶 + 搜索词(名称/简介/关键词/H1)
  const filtered = useMemo(() => {
    const tab = WORKSPACE_TABS.find((tb) => tb.id === activeTab) ?? WORKSPACE_TABS[0]
    const q = query.trim().toLowerCase()
    return tools.filter((tl) => {
      if (tab.categories !== null && !tab.categories.includes(tl.category)) return false
      if (!q) return true
      return (
        tl.name.toLowerCase().includes(q) ||
        tl.shortIntro.toLowerCase().includes(q) ||
        tl.keywords.some((k) => k.toLowerCase().includes(q)) ||
        tl.h1.toLowerCase().includes(q)
      )
    })
  }, [tools, query, activeTab])

  // 置顶热门:仅 All Tab + 无搜索词时展示(避免与筛选结果抢焦点)
  const featuredTools = useMemo(() => tools.filter((tl) => tl.featured), [tools])
  const showFeatured = !query.trim() && activeTab === 'all'

  return (
    <div className="w-full space-y-8">
      {/* 搜索框 */}
      <div className="mx-auto max-w-3xl">
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(locale, 'searchPlaceholder', { count: tools.length })}
            className="w-full rounded-xl border py-4 pl-12 pr-4 text-lg shadow-sm outline-none transition focus:ring-2 dark:bg-slate-900 dark:border-slate-800 dark:text-white dark:placeholder-slate-500 dark:shadow-none focus:dark:border-blue-500/60 focus:dark:ring-blue-500/60"
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

      {/* 分类 Tabs —— 玻璃胶囊容器 + layoutId 滑轨高亮。
          激活态:深色实底白字(亮)/ 白底深字(暗),mono 计数徽章低饱和。 */}
      <div
        role="tablist"
        aria-label={t(locale, 'seoBrowseTitle')}
        className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-slate-200/80 bg-white/80 p-1.5 shadow-[0_2px_8px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-none sm:w-fit"
      >
        {WORKSPACE_TABS.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`relative whitespace-nowrap rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'text-white dark:text-slate-900'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              {/* 滑轨高亮块:共享 layoutId 在 Tab 间平滑滑动(spring 微过冲) */}
              {isActive && (
                <motion.span
                  layoutId={ACTIVE_TAB_LAYOUT_ID}
                  className="absolute inset-0 rounded-xl bg-slate-900 dark:bg-white"
                  style={{ boxShadow: '0 2px 10px rgba(15,23,42,0.18)' }}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 350, damping: 30, mass: 0.9 }}
                />
              )}
              <span className="relative z-10">{t(locale, tab.labelKey)}</span>
              <span
                className={`relative z-10 ml-1.5 font-mono text-[10px] tabular-nums ${
                  isActive ? 'text-slate-300 dark:text-slate-500' : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {tabCounts.get(tab.id)}
              </span>
            </button>
          )
        })}
      </div>

      {/* 置顶热门工具模块 */}
      {showFeatured && <FeaturedTools tools={featuredTools} />}

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
            onClick={() => { setQuery(''); setActiveTab('all') }}
            className="mt-3 text-sm font-medium text-brand-600 hover:underline"
          >
            {t(locale, 'clearSearch')}
          </button>
        </div>
      )}

      {/* 工具矩阵 —— 切换 Tab / 搜索时网格按 key 整体重挂载,
          卡片以列交错 spring 波纹弹入(左→右,见 toolCardEnterVariants),
          形成"筛选即形变"的流体感。
          ★ 不用 AnimatePresence 退出动画:framer-motion v12 + React 19 下,
            大批量子项退出会卡幽灵节点(实测:Tab 切换后旧卡片 opacity:1 残留);
            key 重挂载零簿记、绝对可靠,与旧首页 HomePageClient 同方案。
          ★ 全部动画 transform/opacity only;reduce-motion 降级纯淡入。 */}
      <div
        key={`${activeTab}-${query}`}
        className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filtered.map((tool, index) => {
          const localizedName = getToolName(locale, tool.slug, tool.name)
          const localizedIntro = getToolShortIntro(locale, tool.slug, tool.shortIntro)
          const titleAttr = `${localizedName} — ${localizedIntro}`
          return (
            <motion.div
              key={tool.slug}
              variants={
                reduceMotion
                  ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
                  : toolCardEnterVariants
              }
              custom={index % 4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-48px' }}
              className="h-full"
            >
                <div className="group relative h-full">
                  {/* 玻璃卡片(规格:高透白玻璃 + hover 弹簧抬升) */}
                  <Link
                    href={`/tools/${tool.slug}/`}
                    title={titleAttr}
                    aria-label={titleAttr}
                    className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_2px_8px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)] dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-none dark:hover:border-slate-700"
                  >
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 p-2 text-slate-600 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.08] dark:border dark:border-blue-800/40 dark:bg-blue-950/30"
                      aria-hidden="true"
                    >
                      <SmartIcon icon={getToolIcon(tool)} className="h-5 w-5" />
                    </span>
                    <span className="mt-4 flex min-h-[2.5rem] items-center text-base font-medium text-slate-900 line-clamp-2 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {localizedName}
                    </span>
                    <span className="mt-2 line-clamp-2 flex-1 text-xs text-slate-500 dark:text-slate-400">
                      {localizedIntro}
                    </span>
                    {/* 底部 mono 分类标签(规格:等宽微字号胶囊) */}
                    <span className="mt-3 inline-flex w-fit items-center rounded border border-slate-200/60 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:border-slate-700/60 dark:bg-slate-800 dark:text-slate-400">
                      {tc(locale, tool.category)}
                    </span>
                  </Link>
                  {/* 图钉:脱离 Link 的兄弟节点(点击不跳转),hover 浮现 / 固定后常驻 */}
                  <PinButton
                    slug={tool.slug}
                    name={localizedName}
                    className="absolute right-3 top-3 z-10"
                  />
                </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
