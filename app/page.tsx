'use client'

import { getPublishedTools } from '@/lib/tools'
import { AdSlot } from '@/components/AdSlot'
import { HomePageClient } from '@/components/HomePageClient'
import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'

export default function HomePage() {
  const tools = getPublishedTools()
  const { locale } = useApp()

  return (
    <div className="container-page py-12">
      {/* Hero */}
      <section className="mx-auto mb-10 max-w-3xl text-center">
        <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: 'rgb(var(--text))' }}>
          {t(locale, 'heroBadge', { count: String(tools.length) })}{' '}
          {t(locale, 'heroTitle1')}
          <span className="block text-brand-600">{t(locale, 'heroTitle2')}</span>
        </h1>
        <p className="mt-5 text-lg" style={{ color: 'rgb(var(--text-muted))' }}>
          {t(locale, 'heroSubtitle')}
        </p>
      </section>

      {/* 搜索 + 分类 + 工具列表(客户端组件) */}
      <HomePageClient tools={tools} />

      {/* 首页中部广告位 */}
      <AdSlot slot="homepage-mid" format="horizontal" fullWidth />

      {/* SEO 文案区(增加首页内容厚度,利于排名和 AdSense 审核) */}
      <section className="prose-content mt-16 max-w-3xl">
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
      </section>
    </div>
  )
}
