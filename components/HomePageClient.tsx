'use client'

import { useState, useMemo, useEffect } from 'react'
import type { ToolMeta } from '@/lib/tools'
import { getToolIcon } from '@/lib/tools'
import { useApp } from './providers/AppProviders'
import { t, tc, getToolName, getToolShortIntro } from '@/lib/i18n'
import { FeaturedTools } from './FeaturedTools'
import {
  AnimatedToolCard,
  StaggerGroup,
  LayoutHighlight,
  motion,
} from './motion/MotionPrimitives'

/**
 * 分类 Chip 的共享 layoutId —— 切换分类时高亮背景在按钮间平滑滑轨过渡。
 */
const ACTIVE_CATEGORY_LAYOUT_ID = 'activeCategory'

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

  // 置顶热门工具:取 tools 中标记 featured 的(顺序与 tools.ts 声明一致)。
  // 仅在无搜索词 + All 分类时展示,避免与搜索/筛选结果抢焦点。
  const featuredTools = useMemo(() => tools.filter((tl) => tl.featured), [tools])
  const showFeatured = !query.trim() && activeCategory === null

  // 判断"全部"按钮是否激活
  const allActive = activeCategory === null

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

      {/* 分类筛选 chips(第一项是本地化的"全部",用 allActive 控制激活态)。
          限宽 max-w-5xl + 居中 + items-center 垂直对齐 + gap-2.5 间距,
          让换行更紧凑整齐,减少单字落单悬空;whitespace-nowrap 防止 Chip 内文案自身折行。

          ★ 极客滑轨动画:激活态的高亮背景块用 framer-motion layoutId="activeCategory"
          共享标识,切换分类时背景块在按钮间平滑滑动过渡(spring 弹性曲线)。 */}
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2.5">
        {/* 渲染一个 Chip 的内联函数:激活态渲染 <LayoutHighlight>(滑轨高亮块),
            非激活态渲染纯描边样式。 */}
        {(() => {
          const renderChip = (
            key: string,
            label: string,
            isActive: boolean,
            onClick: () => void,
          ) => (
            <motion.button
              key={key}
              type="button"
              onClick={onClick}
              // 基础描边态:非激活时显示边框 + 卡片底色
              className={`relative whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-blue-500 text-white dark:border-blue-500 dark:text-white'
                  : 'hover:bg-brand-50 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 hover:dark:text-white hover:dark:border-slate-700'
              }`}
              style={
                isActive
                  ? undefined
                  : {
                      borderColor: 'rgb(var(--border))',
                      backgroundColor: 'rgb(var(--bg-card))',
                      color: 'rgb(var(--text-muted))',
                    }
              }
              whileTap={{ scale: 0.96 }}
            >
              {/* 激活态:渲染共享 layoutId 的高亮背景块(滑轨动画核心)。
                  absolute inset-0 不占文本空间,文字 z-index 高于背景。 */}
              {isActive && <LayoutHighlight layoutId={ACTIVE_CATEGORY_LAYOUT_ID} />}
              <span className="relative z-10">{label}</span>
            </motion.button>
          )

          return (
            <>
              {renderChip('all', t(locale, 'categoryAll'), allActive, () =>
                setActiveCategory(null),
              )}
              {categories.map((cat) =>
                renderChip(cat, tc(locale, cat), activeCategory === cat, () =>
                  setActiveCategory(cat),
                ),
              )}
            </>
          )
        })()}
      </div>

      {/* 置顶热门工具模块:仅无搜索词 + All 分类时展示。
          搜索/切换分类时自动隐藏,优先展示筛选结果。 */}
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
            {tc(locale, category)}
          </h2>
          {/* 工具卡片网格:xl:grid-cols-4(1280px 断点)对齐 max-w-7xl 版心,
              原 2xl:grid-cols-4(1536px)永远无法触发(版心只有 1280px),属断点 bug。

              ★ 列交错入场:每张卡片独立 whileInView 触发(滚入视口才浮现),
                延迟按列(index % 4 × 0.07s)左→右波纹弹入,spring 带过冲
                (见 MotionPrimitives toolCardEnterVariants;transform-only,CLS 安全)。
                key 含 activeCategory+query,筛选/搜索切换时网格重挂载、重播交错渐显。 */}
          <StaggerGroup
            key={`${category}-${activeCategory ?? 'all'}-${query}`}
            className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {categoryTools.map((tool, index) => {
              const localizedName = getToolName(locale, tool.slug, tool.name)
              const localizedIntro = getToolShortIntro(locale, tool.slug, tool.shortIntro)
              return (
              <AnimatedToolCard
                key={tool.slug}
                index={index}
                href={`/tools/${tool.slug}/`}
                title={`${localizedName} — ${localizedIntro}`}
                ariaLabel={`${localizedName} — ${localizedIntro}`}
              >
                <div className="flex items-start justify-between">
                  {/* 工具图标:按 category 默认映射 + 明星工具单独定制(见 lib/tools.ts getToolIcon)。
                      Clean Outlined:微蓝底气泡 + 蓝色细边框,替代灰底盒。
                      Hover 弹簧缩放 1.08:cubic-bezier(0.34,1.56,0.64,1) 带 overshoot 回弹。 */}
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 p-2 text-2xl transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.08] dark:border dark:border-blue-800/40 dark:bg-blue-950/30"
                    aria-hidden="true"
                  >
                    {getToolIcon(tool)}
                  </span>
                  {/* 右上角分类胶囊 —— 小巧精致内嵌 Badge,不抢工具主标题视线。
                      原 text-xs 灰字过大重复,重构为 10px 胶囊 + slate-100/slate-800 底。 */}
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    {tc(locale, tool.category)}
                  </span>
                </div>
                {/* 标题区:line-clamp-2 防过长撑爆;min-h-[2.5rem] 强制 1 行/2 行标题占同等高度,
                    确保下方描述起点对齐。flex items-center 让单行标题垂直居中占满预留区。 */}
                <h3 className="mt-4 flex min-h-[2.5rem] items-center text-base font-medium text-slate-900 line-clamp-2 group-hover:text-brand-600 dark:text-white">
                  {localizedName}
                </h3>
                {/* 描述:line-clamp-2 优雅省略;flex-1 在 flex-col 卡片内填充剩余空间,
                    让卡片底部(无论 1 行还是 2 行描述)对齐到同一基线。 */}
                <p className="mt-2 line-clamp-2 flex-1 text-xs text-slate-500 dark:text-slate-400">
                  {localizedIntro}
                </p>
              </AnimatedToolCard>
              )
            })}
          </StaggerGroup>
        </section>
      ))}
    </div>
  )
}
