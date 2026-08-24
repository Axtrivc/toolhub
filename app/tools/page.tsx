import type { Metadata } from 'next'
import Link from 'next/link'
import { getToolsByCategory, getPublishedTools, getToolIcon } from '@/lib/tools'
import { SmartIcon } from '@/components/SmartIcon'
import { SITE_NAME, jsonLdStringify } from '@/lib/seo'
import { buildItemListJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'All Tools',
  description: `Browse all ${getPublishedTools().length}+ free online tools on ${SITE_NAME}. Calculators, converters, text and developer utilities — organized by category.`,
  alternates: { canonical: '/tools/' },
  openGraph: {
    title: `All Tools | ${SITE_NAME}`,
    description: `Browse all ${getPublishedTools().length}+ free online tools, organized by category.`,
    url: '/tools/',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — All Tools`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `All Tools | ${SITE_NAME}`,
    description: `Browse all ${getPublishedTools().length}+ free online tools, organized by category.`,
    images: ['/og.png'],
  },
}

export default function ToolsHubPage() {
  // 按分类分组,并按分类内工具数量降序(大类在前)
  const grouped = getToolsByCategory()
  const categories = Object.entries(grouped).sort((a, b) => b[1].length - a[1].length)
  const all = getPublishedTools()
  const itemListLd = buildItemListJsonLd()

  return (
    <div className="container-page py-12">
      {/* ItemList 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(itemListLd) }}
      />

      {/* Hero */}
      <section className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: 'rgb(var(--text))' }}>
          All Tools
        </h1>
        <p className="mt-5 text-lg" style={{ color: 'rgb(var(--text-muted))' }}>
          {all.length}+ free online tools across finance, math, health, unit conversion, text, and
          developer utilities. Pick a category below or <Link href="/" className="text-brand-600 underline">search from the home page</Link>.
        </p>
      </section>

      {/* 分类目录快速跳转 —— 统一回首页并选中分类(与首页交互一致),
          不再使用页内 # 锚点,避免用户留在这个只读列表页。 */}
      <nav className="mx-auto mb-10 flex max-w-4xl flex-wrap justify-center gap-2" aria-label="Tool categories">
        {categories.map(([category, categoryTools]) => (
          <Link
            key={category}
            href={`/?category=${encodeURIComponent(category)}#all-tools`}
            className="rounded-full border px-4 py-1.5 text-sm font-medium transition hover:bg-brand-50"
            style={{
              borderColor: 'rgb(var(--border))',
              backgroundColor: 'rgb(var(--bg-card))',
              color: 'rgb(var(--text-muted))',
            }}
          >
            {category} ({categoryTools.length})
          </Link>
        ))}
      </nav>

      {/* 分类分组展示全量工具 */}
      {categories.map(([category, categoryTools]) => (
        <section key={category} id={category} className="mb-12 scroll-mt-20">
          <h2 className="mb-5 text-2xl font-bold" style={{ color: 'rgb(var(--text))' }}>
            {category}
            <span className="ml-2 text-base font-normal" style={{ color: 'rgb(var(--text-faint))' }}>
              {categoryTools.length}
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}/`}
                className="group rounded-xl border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
                style={{
                  borderColor: 'rgb(var(--border))',
                  backgroundColor: 'rgb(var(--bg-card))',
                }}
              >
                <div className="flex items-start justify-between">
                  {/* 工具图标:全站统一的 getToolIcon(slug 优先 / category 兜底),
                      不再使用默认播放按钮 ▶ 图标。 */}
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
                    aria-hidden="true"
                  >
                    <SmartIcon icon={getToolIcon(tool)} className="h-5 w-5" />
                  </span>
                  {/* 右上角显示分类(替代原 PRO/FREE 徽章 —— 工具全免费,
                      PRO 字样会误导用户)。 */}
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

      {/* SEO 文案区 */}
      <section className="prose-content mt-16 max-w-3xl">
        <h2>One Toolbox for Everyday Tasks</h2>
        <p>
          Instead of hunting down a different website for every small job, ToolHub puts the utilities
          you reach for most in one place. Need to convert kilograms to pounds, calculate a mortgage
          payment, format a JSON payload, or generate a strong password? It is all here, and it all
          runs locally in your browser.
        </p>
        <p>
          Every tool on this page is free with no signup and no upload. That means nothing you type
          ever leaves your device, which matters for sensitive inputs like salary figures, health
          numbers, or code snippets. Bookmark this page — we add new tools regularly based on what
          readers actually search for.
        </p>
      </section>
    </div>
  )
}
