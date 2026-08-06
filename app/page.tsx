'use client'

import Link from 'next/link'
import { getPublishedTools } from '@/lib/tools'
import { AdSlot } from '@/components/AdSlot'
import { HomePageClient } from '@/components/HomePageClient'
import { HomeRecents } from '@/components/HomeRecents'
import {
  HeroGlow,
  motion,
  useReducedMotion,
  heroStaggerContainerVariants,
  heroItemVariants,
} from '@/components/motion/MotionPrimitives'
import { useApp } from '@/components/providers/AppProviders'
import { t, tc, getToolName, getToolShortIntro } from '@/lib/i18n'

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

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero —— 入场交响:Badge → 主标题 → 副标题 → 快捷操作栏依次 spring 弹跳浮现
          (damping 20 / stiffness 300,起步快、落点带过冲回弹,见 heroItemVariants)。
          ★ 用 animate(非 whileInView):Hero 在首屏,页面加载即播放。
          ★ reduce-motion 时 initial={false},所有内容瞬时可见、无位移(无障碍)。
          ★ HeroGlow 用 left-1/2 top-8 居中,必须锚定在标题外层 relative 容器,
          否则光斑会跑到 section 中心(标题+副标题+badge 的几何中心)而非标题正后方。
          光斑严格约束在 w-[680px] h-[320px],绝不溢出到下方卡片区。 */}
      <motion.section
        variants={reduceMotion ? undefined : heroStaggerContainerVariants}
        initial={reduceMotion ? false : 'hidden'}
        animate="show"
        className="relative mx-auto mb-12 max-w-5xl text-center"
      >
        {/* 卖点徽章组(置顶,入场第一拍)- PWA/隐私(emerald) + 多语支持(indigo),
            两枚胶囊横排居中 + flex-wrap 防窄屏溢出;保持小巧不喧宾夺主。 */}
        <motion.div
          variants={heroItemVariants}
          className="mb-6 flex flex-wrap items-center justify-center gap-2.5"
        >
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 shadow-sm dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300"
            title={t(locale, 'heroOfflineBadge')}
          >
            {t(locale, 'heroOfflineBadge')}
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-medium text-indigo-700 shadow-sm dark:border-indigo-800/60 dark:bg-indigo-950/40 dark:text-indigo-300"
            title={t(locale, 'heroMultilingualBadge')}
          >
            {t(locale, 'heroMultilingualBadge')}
          </span>
        </motion.div>

        <motion.div variants={heroItemVariants} className="relative">
          <HeroGlow />
          {/* 主标题"130+ Free Online Tools"用蓝紫极客渐变点睛(bg-clip-text + text-transparent)。
              count 取 roundedCount(向下取整到十位,138→130),不精确到个位。
              副行"That Just Work"保持实色 rgb(var(--text)) 作为视觉锚点,避免两行渐变过重。
              ★ 渐变行为 .hero-animated-gradient"色彩河流"(见 globals.css):
                五色首尾相接渐变带 + background-position 0%→200% 匀速平移,14s 无缝单向循环,
                文字内部颜色如河水般持续流动;reduced-motion 下静止。
                渐变 background-image 由该 CSS 类提供(globals.css 无 layer,优先于
                Tailwind utilities),此处不再写 from-/via-/to-(写了也会被覆盖,误导)。
              ★ 去掉 <h1> 的 inline color,否则会覆盖 text-transparent 让渐变失效。 */}
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

        {/* 快捷操作栏(入场收尾):主 CTA 锚到下方工具目录 #all-tools,
            平滑滚动由 html { scroll-behavior: smooth } 提供;
            按钮 hover 位移/阴影均为 transform/opacity 级别,不触发重排。 */}
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
      </motion.section>

      {/* 最近使用 & 我的收藏 - 动态区块,无记录时自动隐藏,有记录时置顶展示 */}
      <div className="mb-10">
        <HomeRecents />
      </div>

      {/* 搜索 + 分类 + 工具列表(客户端组件)。
          id="all-tools" 是 Hero CTA 的锚点目标;scroll-mt-24 给 sticky header 留出偏移。 */}
      <div id="all-tools" className="scroll-mt-24">
        <HomePageClient tools={tools} />
      </div>

      {/* 首页中部广告位 */}
      <AdSlot slot="homepage-mid" format="horizontal" fullWidth />

      {/* SEO 文案区(增加首页内容厚度,利于排名和 AdSense 审核) */}
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

        {/* 按分类浏览 —— 内链区:首页指向 /tools/ 枢纽页各分类锚点,
            既利于 SEO 内链网络,也帮用户快速跳到具体类别。
            分类链接文本走 tc() 本地化,但 URL 锚点 #cat 保持英文键
            (与 HomePageClient 的 section id 对齐,切语言不破坏锚点定位)。 */}
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
              {/* 分类内链回首页并选中筛选(锚点定位到对应区块),
                  不再指向已废弃的 /tools/ 旧枢纽页。 */}
              <Link href={`/?category=${encodeURIComponent(cat)}#${encodeURIComponent(cat)}`}>
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
  )
}
