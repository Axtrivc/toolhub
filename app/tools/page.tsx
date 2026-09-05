import type { Metadata } from 'next'
import { getToolsByCategory, getPublishedTools } from '@/lib/tools'
import { SITE_NAME, jsonLdStringify } from '@/lib/seo'
import { buildItemListJsonLd } from '@/lib/seo'
import {
  ToolCategoryPills,
  ToolDirectoryCard,
  ToolDirectoryHeading,
  ToolDirectoryHeroBody,
  ToolDirectoryTitle,
} from '@/components/ToolDirectoryCards'

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

      {/* Hero(H1 与说明均经客户端组件取当前语言;SSR 恒英文,SEO 标题由 metadata 保证) */}
      <section className="mx-auto mb-12 max-w-3xl text-center">
        <ToolDirectoryTitle />
        <ToolDirectoryHeroBody count={all.length} />
      </section>

      {/* 分类目录快速跳转 —— 统一回首页并选中分类(与首页交互一致),
          不再使用页内 # 锚点,避免用户留在这个只读列表页。
          胶囊文案经客户端组件 ToolCategoryPills 本地化(tc 分类名)。 */}
      <ToolCategoryPills
        categories={categories.map(([category, categoryTools]) => [category, categoryTools.length])}
      />

      {/* 分类分组展示全量工具(卡片/标题由客户端组件本地化) */}
      {categories.map(([category, categoryTools]) => (
        <section key={category} id={category} className="mb-12 scroll-mt-20">
          <ToolDirectoryHeading category={category} count={categoryTools.length} />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTools.map((tool) => (
              <ToolDirectoryCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      ))}

      {/* SEO 文案区(静态导出 SSR 恒英文;SEO 文案不跟随语言切换,保持抓取稳定) */}
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
