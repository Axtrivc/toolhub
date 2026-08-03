'use client'

import Link from 'next/link'
import { getPublishedTools } from '@/lib/tools'
import { AdSlot } from '@/components/AdSlot'
import { HomePageClient } from '@/components/HomePageClient'
import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'

export default function HomePage() {
  const tools = getPublishedTools()
  const { locale } = useApp()

  // 按分类聚合,用于首页"按分类浏览"内链区(SEO 内链 + 用户导航)
  const byCategory = tools.reduce<Record<string, number>>((acc, tool) => {
    acc[tool.category] = (acc[tool.category] ?? 0) + 1
    return acc
  }, {})
  const categories = Object.entries(byCategory).sort((a, b) => b[1] - a[1])

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mx-auto mb-12 max-w-5xl text-center">
        <h1
          className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl dark:text-white"
          style={{ color: 'rgb(var(--text))' }}
        >
          {t(locale, 'heroBadge', { count: String(tools.length) })}{' '}
          {t(locale, 'heroTitle1')}
          <span className="hero-gradient-text block">{t(locale, 'heroTitle2')}</span>
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: 'rgb(var(--text-muted))' }}
        >
          {t(locale, 'heroSubtitle')}
        </p>
      </section>

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
          converting units, to formatting JSON and generating QR codes. With {tools.length}+ tools
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
