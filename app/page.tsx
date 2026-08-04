'use client'

import Link from 'next/link'
import { getPublishedTools } from '@/lib/tools'
import { AdSlot } from '@/components/AdSlot'
import { HomePageClient } from '@/components/HomePageClient'
import { HomeRecents } from '@/components/HomeRecents'
import { HeroGlow } from '@/components/motion/MotionPrimitives'
import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'

export default function HomePage() {
  const tools = getPublishedTools()
  const { locale } = useApp()

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

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero —— 极简居中微光斑(HeroGlow)。
          ★ HeroGlow 用 left-1/2 top-1/2 居中,必须锚定在标题外层 relative 容器,
          否则光斑会跑到 section 中心(标题+副标题+badge 的几何中心)而非标题正后方。
          光斑严格约束在 w-[500px] h-[220px],绝不溢出到下方卡片区。 */}
      <section className="relative mx-auto mb-12 max-w-5xl text-center">
        <div className="relative">
          <HeroGlow />
          {/* 主标题"130+ Free Online Tools"用蓝紫极客渐变点睛(bg-clip-text + text-transparent)。
              count 取 roundedCount(向下取整到十位,138→130),不精确到个位。
              副行"That Just Work"保持实色 rgb(var(--text)) 作为视觉锚点,避免两行渐变过重。
              ★ 去掉 <h1> 的 inline color,否则会覆盖 text-transparent 让渐变失效。 */}
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
              {t(locale, 'heroBadge', { count: String(roundedCount) })}{' '}
              {t(locale, 'heroTitle1')}
            </span>
            <span className="block" style={{ color: 'rgb(var(--text))' }}>
              {t(locale, 'heroTitle2')}
            </span>
          </h1>
        </div>
        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: 'rgb(var(--text-muted))' }}
        >
          {t(locale, 'heroSubtitle')}
        </p>

        {/* PWA / 隐私卖点徽章 - 突出"纯前端 + 离线可用"差异化优势 */}
        <div className="mt-6 flex justify-center">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 shadow-sm dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300"
            title={t(locale, 'heroOfflineBadge')}
          >
            {t(locale, 'heroOfflineBadge')}
          </span>
        </div>
      </section>

      {/* 最近使用 & 我的收藏 - 动态区块,无记录时自动隐藏,有记录时置顶展示 */}
      <div className="mb-10">
        <HomeRecents />
      </div>

      {/* 搜索 + 分类 + 工具列表(客户端组件) */}
      <HomePageClient tools={tools} />

      {/* 首页中部广告位 */}
      <AdSlot slot="homepage-mid" format="horizontal" fullWidth />

      {/* SEO 文案区(增加首页内容厚度,利于排名和 AdSense 审核) */}
      <section className="prose-content mx-auto mt-16 max-w-4xl">
        <h2>Why Use Our Online Tools?</h2>
        <p>
          Most online tools ask you to sign up, accept cookies, or upload your files to a server you
          can&apos;t audit. We do things differently: every tool here runs entirely in your browser.
          That means three things for you:
        </p>
        <ul>
          <li>
            <strong>Privacy by design.</strong> Your text and files never leave your device. There is
            no server processing your input, so there is nothing to leak.
          </li>
          <li>
            <strong>Instant results.</strong> No round-trip to a server means no waiting. Tools
            respond as fast as you can type.
          </li>
          <li>
            <strong>No friction.</strong> No account, no paywall, no &quot;upgrade to continue.&quot;
            Open the page and start using it.
          </li>
        </ul>
        <p>
          We focus on utilities that solve a single problem well — from calculating loan payments and
          converting units, to formatting JSON and generating QR codes. With {roundedCount}+ tools
          across finance, math, health, unit conversion, and developer utilities, there&apos;s a good
          chance we have what you need. New tools are added regularly, so bookmark this page.
        </p>

        {/* 按分类浏览 —— 内链区:首页指向 /tools/ 枢纽页各分类锚点,
            既利于 SEO 内链网络,也帮用户快速跳到具体类别。 */}
        <h2>Browse Tools by Category</h2>
        <p>
          Looking for something specific? Jump straight to a category, or open the{' '}
          <Link href="/tools/">
            <strong>full tools directory</strong>
          </Link>{' '}
          to search all {tools.length} tools.
        </p>
        <ul>
          {categories.map(([cat, count]) => (
            <li key={cat}>
              {/* 分类内链回首页并选中筛选(锚点定位到对应区块),
                  不再指向已废弃的 /tools/ 旧枢纽页。 */}
              <Link href={`/?category=${encodeURIComponent(cat)}#${encodeURIComponent(cat)}`}>
                {cat}
              </Link>{' '}
              ({count} tools)
            </li>
          ))}
        </ul>

        {/* 热门工具直达 —— 高搜索量工具的站内深度内链,强化权重传递 */}
        <h2>Popular Tools</h2>
        <p>
          Some of our most-used utilities, good places to start:
        </p>
        <ul>
          <li>
            <Link href="/tools/mortgage-calculator/">Mortgage Calculator with PMI and Taxes</Link> —
            estimate monthly home-loan payments including insurance.
          </li>
          <li>
            <Link href="/tools/percentage-calculator/">Percentage Calculator</Link> — percent of a
            number, increase, decrease, and discounts.
          </li>
          <li>
            <Link href="/tools/bmi-calculator/">BMI Calculator</Link> — body mass index with healthy
            weight range, metric or imperial.
          </li>
          <li>
            <Link href="/tools/json-formatter/">JSON Formatter and Validator</Link> — beautify,
            minify, and validate JSON instantly.
          </li>
          <li>
            <Link href="/tools/word-counter/">Word Counter</Link> — words, characters, sentences, and
            estimated reading time.
          </li>
          <li>
            <Link href="/tools/length-converter/">Length Converter</Link> — meters, feet, inches,
            miles, and more.
          </li>
        </ul>
      </section>
    </div>
  )
}
