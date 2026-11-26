'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Boxes, Search, ShieldCheck, Terminal, TrendingUp, Zap } from 'lucide-react'
// 工具清单走轻量投影(lib/related-tools.ts,与注册表同序、展示/搜索字段齐全):
// 首页直接 import lib/tools 会把全量 SEO 注册表拖进首屏 bundle。
import { toolLiteMeta } from '@/lib/related-tools'
import { searchTools } from '@/lib/tool-search'
import { AdSlot } from '@/components/AdSlot'
import { ToolHubExplorer } from '@/components/workspace/ToolHubExplorer'
import { HomeSitemapHubs, HomeSitemapPopular } from '@/components/HomeSitemap'
import { HeroCodeWindow } from '@/components/home/HeroCodeWindow'
import { LiveBento } from '@/components/home/LiveBento'
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
 * 首页客户端交互层。服务端 app/page.tsx 负责 metadata、JSON-LD 与 Sitemap 注入。
 */
export function HomeClient() {
  // 与 getPublishedTools() 同源同序(生成脚本保证),length/卡片/搜索结果完全一致
  const tools = Object.values(toolLiteMeta)
  const { locale } = useApp()

  // Hero 搜索词:下传给 ToolHubExplorer,非空时切到搜索扁平网格(100% 客户端响应)
  const [query, setQuery] = useState('')

  // Hero 搜索实时匹配数(与下方 ToolHubExplorer 同一搜索引擎,无主题桶过滤):
  // 输入即显示,避免"输了关键词却看不到任何反馈";点"查看结果"或按 Enter 滚到结果区。
  const resultCount = useMemo(() => {
    const q = query.trim()
    if (!q) return 0
    return searchTools(tools, q, tools.length, locale)?.length ?? 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, locale])

  const scrollToResults = () => {
    document.getElementById('all-tools')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // 平台检测:搜索框 kbd 提示显示 ⌘K(Mac)还是 Ctrl K(Win/Linux)。
  // 客户端首帧后判定,SSR 默认 false,避免 hydration mismatch。
  const [isMac, setIsMac] = useState(false)
  useEffect(() => {
    setIsMac(
      typeof navigator !== 'undefined' &&
        /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent),
    )
    // WebSite SearchAction 的真实落点:?q= 直接恢复首页工具搜索状态。
    const initialQuery = new URLSearchParams(window.location.search).get('q')
    if (initialQuery) setQuery(initialQuery)
  }, [])

  // 点击 kbd 徽章 → 合成 ⌘K 键盘事件,复用 Header 的全局监听打开命令面板
  const openSearchPalette = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, cancelable: true }))
  }

  // 营销展示用的取整数(向下取整到十位):225 → 220,显示为 "220+"。
  // 规则:不精确到个位;200+ / 210+ 等按实际数量进位。当前 225 落在 220–229,故 220+。
  // 仅用于 Hero badge / SEO 文案等营销位置;搜索框、列表计数仍用精确的 tools.length。
  const roundedCount = Math.floor(tools.length / 10) * 10

  // 价值徽章组(Linear 式 mono 微标签):引擎数 / 即时本地计算 / 零服务器存储
  const valueBadges = [
    { icon: Boxes, text: t(locale, 'workspaceBadgeEngines', { count: String(roundedCount) }) },
    { icon: Zap, text: t(locale, 'workspaceBadgeInstant') },
    { icon: ShieldCheck, text: t(locale, 'workspaceBadgeZeroLogs') },
  ]

  return (
    <div className="bg-canvas text-ink">
      <section className="container-page py-12 md:pb-[72px] md:pt-[88px]">
        <div className="grid items-center gap-9 md:grid-cols-2 md:gap-14">
          <div className="min-w-0">
            <p className="mb-7 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[1.5px] text-muted-ink">
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent-teal" aria-hidden="true" />
              {t(locale, 'workspaceStatus')}
            </p>
            <h1 className={`font-serif text-[clamp(2.375rem,5vw,4rem)] font-normal leading-[1.05] tracking-[-.024em] ${locale === 'en' ? 'lowercase' : ''}`}>
              {t(locale, 'heroBadge', { count: String(roundedCount) })}{' '}{t(locale, 'heroTitle1')}
              {' '}<em className="font-normal">{t(locale, 'heroTitle2')}</em>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">{t(locale, 'heroSubtitle')}</p>
            <div className="relative mt-8 max-w-xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && query.trim()) {
                    e.preventDefault()
                    scrollToResults()
                  }
                }}
                placeholder={t(locale, 'searchPlaceholder', { count: tools.length })}
                aria-label={t(locale, 'heroSearchLabel')}
                enterKeyHint="search"
                className="h-[52px] w-full rounded-xl border border-hairline bg-canvas pl-10 pr-3 text-base text-ink placeholder:text-muted-ink focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/15 sm:pr-20"
              />
              <button
                type="button"
                onClick={openSearchPalette}
                aria-label={t(locale, 'searchOpen')}
                title={t(locale, 'searchOpen')}
                className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center rounded border border-hairline bg-surface-soft px-2 py-0.5 font-mono text-xs text-body sm:inline-flex"
              >
                {isMac ? '⌘K' : 'Ctrl K'}
              </button>
            </div>
            {/* 搜索实时反馈:匹配数 + 查看结果(滚到下方结果区)。
                旧版输入后无任何反馈,结果只在页面下方远处静默过滤。 */}
            {query.trim() !== '' && (
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <span className="text-body" role="status">
                  {t(locale, 'heroSearchResults', { count: resultCount })}
                </span>
                {resultCount > 0 && (
                  <button
                    type="button"
                    onClick={scrollToResults}
                    className="font-medium text-brand-700 underline underline-offset-2 hover:text-primary dark:text-primary"
                  >
                    {t(locale, 'heroSearchViewResults')}
                  </button>
                )}
              </div>
            )}
            <div className="mt-7 flex flex-wrap items-center gap-2">
              {valueBadges.map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-1.5 rounded-full bg-surface-card px-3 py-1.5 text-xs text-body">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {text}
                </span>
              ))}
            </div>
          </div>

          <HeroCodeWindow status={t(locale, 'workspaceEyebrow')} />
        </div>
        <div className="mt-14"><WorkspaceDashboard /></div>
      </section>

      <div className="bg-surface-soft">
        <div className="container-page py-16 md:py-24">
          <LiveBento />
        </div>
      </div>

      <section id="all-tools" className="container-page scroll-mt-16 py-16 md:py-24">
        <h2 className="mb-8 font-serif text-4xl font-normal tracking-[-.02em] md:text-5xl">{t(locale, 'hubBackToThemes')}</h2>
        <ToolHubExplorer tools={tools} query={query} onQueryChange={setQuery} />
      </section>

      <section className="bg-surface-dark text-on-dark">
        <div className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:gap-14 md:py-24">
          <div>
            <h2 className="mb-5 font-serif text-4xl font-normal leading-tight tracking-[-.02em] text-on-dark md:text-5xl">{t(locale, 'seoWhyTitle')}</h2>
            <p className="leading-7 text-on-dark-soft">{t(locale, 'seoWhyBody1')}</p>
            <ul className="mt-7 space-y-4 border-t border-on-dark/10 pt-5">
              {([
                ['seoWhyPrivacy', 'seoWhyPrivacyBody'],
                ['seoWhyInstant', 'seoWhyInstantBody'],
                ['seoWhyNoFriction', 'seoWhyNoFrictionBody'],
              ] as const).map(([title, body]) => (
                <li key={title} className="text-sm leading-6 text-on-dark-soft">
                  <strong className="font-medium text-on-dark">{t(locale, title)}</strong>{t(locale, body)}
                </li>
              ))}
            </ul>
          </div>
          <div aria-hidden="true" className="min-w-0 overflow-hidden rounded-xl border border-on-dark/10 bg-dark-soft font-mono">
            <div className="flex items-center gap-2 border-b border-on-dark/10 px-5 py-4 text-xs text-on-dark-soft">
              <Terminal className="h-4 w-4" />loan-calculator
            </div>
            <pre className="overflow-x-auto p-6 text-[13px] leading-7 text-on-dark-soft" dir="ltr"><code>
              {'$ compute '}<span className="text-accent-teal">--local</span>{'\n\n'}
              <span className="text-accent-amber">monthly_payment</span>{'   400.76\n'}
              <span className="text-accent-amber">total_interest</span>{'  4,045.54\n'}
              <span className="text-accent-amber">total_paid</span>{'     24,045.54\n\n'}
              {'requests           '}<span className="text-accent-teal">0</span>{'\n'}
              {'uploaded           '}<span className="text-accent-teal">0 B</span>
            </code></pre>
          </div>
        </div>
      </section>

      <div className="container-page py-16 md:py-24">
        <a href="https://whatif.axtrivc.com" target="_blank" rel="noopener noreferrer"
          className="flex flex-wrap items-center gap-x-6 gap-y-4 rounded-xl bg-primary p-8 text-[#141413] sm:flex-nowrap md:p-12">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-current/40">
            <TrendingUp className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-[1_1_15rem]">
            <span className="block font-serif text-3xl font-normal tracking-[-.015em] text-on-dark">{t(locale, 'whatifTitle')}</span>
            <span className="mt-1 block leading-relaxed">{t(locale, 'whatifBody')}</span>
          </span>
          <span className="shrink-0 rounded-lg bg-surface-dark px-5 py-2.5 text-sm font-medium text-on-dark">{t(locale, 'whatifCta')}</span>
        </a>
        <AdSlot slot="homepage-mid" format="horizontal" fullWidth />
      </div>

      <section className="bg-surface-soft">
        <div className="container-page py-16 md:py-24">
          <div className="prose-content mx-auto mb-8 max-w-3xl">
            <p>{t(locale, 'seoWhyBody2', { count: String(roundedCount) })}</p>
            <h2>{t(locale, 'seoBrowseTitle')}</h2>
            <p>
              {(() => {
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
          </div>
          {/* 分类导航紧跟 Browse 标题段(旧版整张 sitemap 堆在两个标题段之后,
              两板块看上去只有标题没有内容) */}
          <HomeSitemapHubs tools={tools} />
          <div className="prose-content mx-auto mt-14 max-w-3xl">
            <h2>{t(locale, 'seoPopularTitle')}</h2>
            <p>{t(locale, 'seoPopularBody')}</p>
          </div>
          <HomeSitemapPopular tools={tools} />
        </div>
      </section>
    </div>
  )
}
