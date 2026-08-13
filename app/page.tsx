'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Boxes, Search, ShieldCheck, Terminal, Zap } from 'lucide-react'
import { getPublishedTools } from '@/lib/tools'
import { AdSlot } from '@/components/AdSlot'
import { ToolHubExplorer } from '@/components/workspace/ToolHubExplorer'
import { HomeSitemap } from '@/components/HomeSitemap'
import {
  HeroGlow,
  motion,
  useReducedMotion,
  heroStaggerContainerVariants,
  heroItemVariants,
} from '@/components/motion/MotionPrimitives'
import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'

// ─── 个性化工作台组件(零 SEO 价值、纯本地数据)→ 动态加载,首屏 bundle 最小化 ───
// ssr:false:内容来自 localStorage,静态导出的 HTML 无需占位;
// 挂载前返回 null,布局由后续区块自然承接。
const WorkspaceDashboard = dynamic(
  () => import('@/components/workspace/WorkspaceDashboard').then((m) => m.WorkspaceDashboard),
  { ssr: false },
)

/**
 * 首页 —— 主题 Hub 工作台(10015.io / Raycast 风格)
 *
 * 分区(自上而下):
 *  ① Workspace Header & Hero:眉头等宽行 + 状态指示 + H1(SEO 文案不变)+ 价值徽章
 *     + 主搜索框(实时过滤下方 Hub 探索器,⌘K 唤起全局命令面板);
 *  ② Workspace 抽屉:Pinned/Recent + Scratchpad(折叠条默认收起,dynamic 加载);
 *  ③ ToolHubExplorer:6 大主题 Hub 卡总览 / 单主题过滤 / 搜索扁平网格(三态);
 *  ④ 中部广告位 + 底部 SEO 文案区(★ 文案绝对保留,仅把裸 <ul> 蓝链
 *     换成 HomeSitemap 玻璃目录,内链数量不减)。
 */
export default function HomePage() {
  const tools = getPublishedTools()
  const { locale } = useApp()
  const reduceMotion = useReducedMotion()

  // Hero 搜索词:下传给 ToolHubExplorer,非空时切到搜索扁平网格(100% 客户端响应)
  const [query, setQuery] = useState('')

  // 平台检测:搜索框 kbd 提示显示 ⌘K(Mac)还是 Ctrl K(Win/Linux)。
  // 客户端首帧后判定,SSR 默认 false,避免 hydration mismatch。
  const [isMac, setIsMac] = useState(false)
  useEffect(() => {
    setIsMac(
      typeof navigator !== 'undefined' &&
        /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent),
    )
  }, [])

  // 点击 kbd 徽章 → 合成 ⌘K 键盘事件,复用 Header 的全局监听打开命令面板
  const openSearchPalette = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, cancelable: true }))
  }

  // 营销展示用的取整数(向下取整到十位):169 → 160,显示为 "160+"。
  // 规则:不精确到个位;140+ / 150+ 等按实际数量进位。当前 169 落在 160–169,故 160+。
  // 仅用于 Hero badge / SEO 文案等营销位置;搜索框、列表计数仍用精确的 tools.length。
  const roundedCount = Math.floor(tools.length / 10) * 10

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
          className="relative mx-auto mb-10 max-w-5xl"
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
                  "160+ Free Online Tools" 渐变河流(globals.css hero-animated-gradient)
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

            {/* 主搜索框:实时过滤下方 Hub 探索器;右侧 kbd 徽章点击唤起 ⌘K 命令面板 */}
            <motion.div variants={heroItemVariants} className="mx-auto mt-9 max-w-2xl">
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t(locale, 'searchPlaceholder', { count: tools.length })}
                  aria-label="Search tools"
                  className="w-full rounded-2xl border border-slate-200/80 bg-white/80 py-4 pl-12 pr-12 text-lg text-slate-900 shadow-[0_8px_30px_rgba(15,23,42,0.06)] outline-none backdrop-blur-xl transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-white dark:shadow-none dark:placeholder:text-slate-500 dark:hover:border-slate-700 dark:focus:border-blue-500/50 dark:focus:ring-blue-500/20 sm:pr-24"
                />
                {/* kbd 徽章:提示 ⌘K 全局搜索;点击合成键盘事件复用 Header 监听。
                    移动端隐藏(无键盘快捷键场景),输入框右边距同步收窄。 */}
                <button
                  type="button"
                  onClick={openSearchPalette}
                  aria-label={t(locale, 'searchOpen')}
                  title={t(locale, 'searchOpen')}
                  className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-[10px] font-medium text-slate-400 transition-colors hover:border-slate-300 hover:text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500 dark:hover:border-slate-600 dark:hover:text-slate-300 sm:inline-flex"
                >
                  {isMac ? '⌘K' : 'Ctrl K'}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ════════ ② Workspace 抽屉(Pinned/Recent + Scratchpad,默认折叠)════════
            无记录时左栏隐藏、随手记独占整行;dynamic + ssr:false 不进静态 HTML。 */}
        <div className="mb-12">
          <WorkspaceDashboard />
        </div>

        {/* ════════ ③ ToolHubExplorer 主题 Hub 探索器 ════════
            id="all-tools" 是既有内链的锚点目标;scroll-mt-24 给 sticky header 留偏移。 */}
        <div id="all-tools" className="scroll-mt-24">
          <ToolHubExplorer tools={tools} query={query} onQueryChange={setQuery} />
        </div>

        {/* 首页中部广告位 */}
        <AdSlot slot="homepage-mid" format="horizontal" fullWidth />

        {/* ════════ ④ SEO 文案区(★ 文案绝对保留;裸 <ul> 蓝链已移除,
            分类/热门内链由下方 HomeSitemap 玻璃目录承接,数量不减)════════ */}
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

          {/* 按分类浏览 —— 保留引导段落(含 fullDir 内链);
              具体分类/热门链接见下方 HomeSitemap(在 .prose-content 之外渲染,
              规避该作用域对 <a> 的强制蓝色下划线)。 */}
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

          {/* 热门工具直达文案(链接已迁入 HomeSitemap 的 Popular 栏) */}
          <h2>{t(locale, 'seoPopularTitle')}</h2>
          <p>{t(locale, 'seoPopularBody')}</p>
        </section>

        {/* 底部玻璃目录:6 主题 + Popular + Directory,4 列玻璃拟态 Sitemap */}
        <div className="mx-auto mt-10 max-w-6xl">
          <HomeSitemap tools={tools} />
        </div>
      </div>
    </div>
  )
}
