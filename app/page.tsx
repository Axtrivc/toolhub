'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Boxes, ShieldCheck, Terminal, Zap } from 'lucide-react'
import { getPublishedTools } from '@/lib/tools'
import { AdSlot } from '@/components/AdSlot'
import { WorkspaceToolGrid } from '@/components/workspace/WorkspaceToolGrid'
import {
  HeroGlow,
  motion,
  useReducedMotion,
  heroStaggerContainerVariants,
  heroItemVariants,
} from '@/components/motion/MotionPrimitives'
import { useApp } from '@/components/providers/AppProviders'
import { t, tc, getToolName, getToolShortIntro } from '@/lib/i18n'

// ─── 个性化工作台组件(零 SEO 价值、纯本地数据)→ 动态加载,首屏 bundle 最小化 ───
// ssr:false:内容来自 localStorage,静态导出的 HTML 无需占位;
// 挂载前返回 null,布局由后续区块自然承接。
const WorkspaceDashboard = dynamic(
  () => import('@/components/workspace/WorkspaceDashboard').then((m) => m.WorkspaceDashboard),
  { ssr: false },
)

/**
 * 首页 —— 个人极客工作台(Linear / Raycast 风格仪表盘)
 *
 * 分区(自上而下):
 *  ① Workspace Header & Hero:眉头等宽行 + 状态指示 + H1(SEO 文案不变)+ 价值徽章;
 *  ② Quick Access 面板:Pinned Tools + Recent(localStorage,dynamic 加载);
 *  ③ Scratchpad 随手记:自动保存的临时文本/代码暂存(dynamic 加载);
 *  ④ Workspace Tabs 工具矩阵:6 分类 Tab + 网格形变;
 *  ⑤ 中部广告位 + 底部 SEO 文案区(★ 绝对保留,一字未动)。
 */
export default function HomePage() {
  const tools = getPublishedTools()
  const { locale } = useApp()
  const reduceMotion = useReducedMotion()

  // 营销展示用的取整数(向下取整到十位):138 → 130,显示为 "130+"。
  // 规则:不精确到个位;140+ / 150+ 等按实际数量进位。当前 138 落在 130–139,故 130+。
  // 仅用于 Hero badge / SEO 文案等营销位置;搜索框、列表计数仍用精确的 tools.length。
  const roundedCount = Math.floor(tools.length / 10) * 10

  // 按分类聚合,用于首页"按分类浏览"内链区(SEO 内链 + 用户导航)
  const byCategory = tools.reduce<Record<string, number>>((acc, tool) => {
    acc[tool.category] = (acc[tool.category] ?? 0) + 1
    return acc
  }, {})
  const categories = Object.entries(byCategory).sort((a, b) => b[1] - a[1])

  // 热门工具直达区:精选 6 个高搜索量工具,展示名 + 描述走 i18n,URL 不变。
  // slug 取自原英文 SEO 区,顺序保留(置顶金融/数学/健康/开发者/文本/单位 各 1 个,覆盖面广)。
  const popularToolSlugs = [
    'mortgage-calculator',
    'percentage-calculator',
    'bmi-calculator',
    'json-formatter',
    'word-counter',
    'length-converter',
  ]
  const toolsBySlug = new Map(tools.map((tool) => [tool.slug, tool]))

  // 价值徽章组(Linear 式 mono 微标签):引擎数 / 即时本地计算 / 零服务器存储
  const valueBadges = [
    { icon: Boxes, text: t(locale, 'workspaceBadgeEngines', { count: String(roundedCount) }) },
    { icon: Zap, text: t(locale, 'workspaceBadgeInstant') },
    { icon: ShieldCheck, text: t(locale, 'workspaceBadgeZeroLogs') },
  ]

  return (
    <div className="relative">
      {/* ── Ambient Backdrop(规格:柔和分层工作台渐变)──
          顶部 indigo 环境光洗墙 → slate-50 基底渐隐;暗色同构低饱和。
          pointer-events-none + absolute,完全脱离布局流(CLS=0)。 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-indigo-100/30 via-slate-50 to-transparent dark:from-indigo-950/20 dark:via-slate-950 dark:to-transparent"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ════════ ① Workspace Header & Hero ════════ */}
        <motion.section
          variants={reduceMotion ? undefined : heroStaggerContainerVariants}
          initial={reduceMotion ? false : 'hidden'}
          animate="show"
          className="relative mx-auto mb-12 max-w-5xl"
        >
          {/* 工作台顶栏:眉头等宽行 + 本地计算状态指示(脉冲绿点)。
              玻璃胶囊容器,mono 微字号 —— Linear/Raycast 式的"控制台铭牌"。 */}
          <motion.div
            variants={heroItemVariants}
            className="mb-10 flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-slate-500 shadow-[0_2px_8px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-400 dark:shadow-none sm:flex-row"
          >
            <span className="inline-flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" aria-hidden="true" />
              {t(locale, 'workspaceEyebrow')}
            </span>
            <span className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {t(locale, 'workspaceStatus')}
            </span>
          </motion.div>

          <div className="text-center">
            <motion.div variants={heroItemVariants} className="relative">
              <HeroGlow />
              {/* 主标题(SEO 关键 H1,文案与键值保持原样):
                  "130+ Free Online Tools" 渐变河流(globals.css hero-animated-gradient)
                  + 副行 "That Just Work" 实色锚点。 */}
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="hero-animated-gradient bg-clip-text text-transparent">
                  {t(locale, 'heroBadge', { count: String(roundedCount) })}{' '}
                  {t(locale, 'heroTitle1')}
                </span>
                <span className="block" style={{ color: 'rgb(var(--text))' }}>
                  {t(locale, 'heroTitle2')}
                </span>
              </h1>
            </motion.div>
            <motion.p
              variants={heroItemVariants}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
              style={{ color: 'rgb(var(--text-muted))' }}
            >
              {t(locale, 'heroSubtitle')}
            </motion.p>

            {/* 价值徽章组:mono + tabular-nums 的精密工程感微标签 */}
            <motion.div
              variants={heroItemVariants}
              className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
            >
              {valueBadges.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500 shadow-[0_2px_8px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-400 dark:shadow-none"
                >
                  <Icon className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" aria-hidden="true" />
                  <span className="tabular-nums">{text}</span>
                </span>
              ))}
            </motion.div>

            {/* 快捷操作栏:主 CTA 锚到下方工具矩阵 #all-tools */}
            <motion.div variants={heroItemVariants} className="mt-8">
              <Link
                href="#all-tools"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 dark:shadow-blue-500/20"
              >
                {t(locale, 'heroCtaExplore', { count: String(roundedCount) })}
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* ════════ ②③ 双栏仪表盘:Quick Access(左 5)+ Scratchpad(右 7)════════
            无记录时左栏隐藏、随手记独占整行;dynamic + ssr:false 不进静态 HTML。 */}
        <div className="mb-10">
          <WorkspaceDashboard />
        </div>

        {/* ════════ ④ Workspace Tabs 工具矩阵 ════════
            id="all-tools" 是 Hero CTA 与既有内链的锚点目标;scroll-mt-24 给 sticky header 留偏移。 */}
        <div id="all-tools" className="scroll-mt-24">
          <WorkspaceToolGrid tools={tools} />
        </div>

        {/* 首页中部广告位 */}
        <AdSlot slot="homepage-mid" format="horizontal" fullWidth />

        {/* ════════ ⑤ SEO 文案区(★ 绝对保留,与原首页一致)════════ */}
        <section className="prose-content mx-auto mt-16 max-w-4xl">
          <h2>{t(locale, 'seoWhyTitle')}</h2>
          <p>{t(locale, 'seoWhyBody1')}</p>
          <ul>
            <li>
              <strong>{t(locale, 'seoWhyPrivacy')}</strong>
              {t(locale, 'seoWhyPrivacyBody')}
            </li>
            <li>
              <strong>{t(locale, 'seoWhyInstant')}</strong>
              {t(locale, 'seoWhyInstantBody')}
            </li>
            <li>
              <strong>{t(locale, 'seoWhyNoFriction')}</strong>
              {t(locale, 'seoWhyNoFrictionBody')}
            </li>
          </ul>
          <p>{t(locale, 'seoWhyBody2', { count: String(roundedCount) })}</p>

          {/* 按分类浏览 —— 内链区:分类链接文本走 tc() 本地化,
              URL 锚点保持英文键(与 WorkspaceGrid 的 ?category= 映射对齐)。 */}
          <h2>{t(locale, 'seoBrowseTitle')}</h2>
          <p>
            {(() => {
              // seoBrowseBody 含 {fullDir} 占位,需把占位替换为可点击的内链。
              // 用本地化的 fullDir 标签作为分隔符 split,得到 [before, after] 两段。
              const fullDirLabel = t(locale, 'seoBrowseFullDir')
              const body = t(locale, 'seoBrowseBody', {
                fullDir: fullDirLabel,
                count: String(tools.length),
              })
              const [before, after = ''] = body.split(fullDirLabel)
              return (
                <>
                  {before}
                  <Link href="/tools/">
                    <strong>{fullDirLabel}</strong>
                  </Link>
                  {after}
                </>
              )
            })()}
          </p>
          <ul>
            {categories.map(([cat, count]) => (
              <li key={cat}>
                {/* 分类内链回首页并由 WorkspaceGrid 映射到对应 Tab */}
                <Link href={`/?category=${encodeURIComponent(cat)}#all-tools`}>
                  {tc(locale, cat)}
                </Link>{' '}
                {t(locale, 'seoBrowseCountSuffix', { count: String(count) })}
              </li>
            ))}
          </ul>

          {/* 热门工具直达 —— 高搜索量工具的站内深度内链,强化权重传递。
              工具名与描述走 getToolName/getToolShortIntro 跟随语言;
              URL 不变(英文 slug),SEO 权重稳定。 */}
          <h2>{t(locale, 'seoPopularTitle')}</h2>
          <p>{t(locale, 'seoPopularBody')}</p>
          <ul>
            {popularToolSlugs.map((slug) => {
              const tool = toolsBySlug.get(slug)
              if (!tool) return null
              return (
                <li key={slug}>
                  <Link href={`/tools/${slug}/`}>
                    {getToolName(locale, slug, tool.name)}
                  </Link>{' '}
                  — {getToolShortIntro(locale, slug, tool.shortIntro)}
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </div>
  )
}
