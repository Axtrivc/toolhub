'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { AdSlot } from './AdSlot'
import { AdPlaceholder } from './AdPlaceholder'
// 相关工具推荐:保留 dynamic 做代码分割,但不再 ssr:false —— 组件现在消费
// lib/related-tools.ts 轻量索引(非全量注册表),参与静态预渲染后 225 个
// 工具页的导出 HTML 直接自带 4 条静态 <a> 内链(无 JS 爬虫/二轮索引可抓,
// 全站形成 900+ 条网状内链池);JS 侧仍是懒 chunk,首屏 bundle 零注册表。
const RelatedTools = dynamic(() => import('./RelatedTools').then((m) => m.RelatedTools))
import { ToolInfoSection } from './ToolInfoSection'
import { VisibleFaqs } from './VisibleFaqs'
import { FormulaSection } from './FormulaSection'
import { EmbedTool } from './EmbedTool'
import { Disclaimer } from './Disclaimer'
import { FavoriteButton } from './FavoriteButton'
import { RecentlyUsedTracker } from './RecentlyUsedTracker'
import { useApp } from './providers/AppProviders'
import { t, getToolName, getToolShortIntro, tc } from '@/lib/i18n'
import { buildFaqJsonLd } from '@/lib/faq-jsonld'
import { getToolRating, ratingCountBadge } from '@/lib/rating'
import { SITE_URL, SITE_NAME } from '@/lib/constants'
import { type ToolMeta } from '@/lib/tools'
import { getToolIcon } from '@/lib/tool-icons'
import { SmartIcon } from '@/components/SmartIcon'

interface ToolLayoutProps {
  tool: ToolMeta
  children?: ReactNode
}

// ──────────── 轻量 JSON-LD 构建(内联,工具数据全部来自 tool prop) ────────────
// 为什么不再 import '@/lib/seo':seo.ts 静态引入 228 工具注册表,而本组件
// 'use client' 且被所有工具页共载,会把注册表拖进全站工具页 chunk。
// breadcrumb/howto 只用 tool 自身字段,faq 走 lib/faq-jsonld 拆分模块
// (与可见 FAQ 区块同源数据,零边际加载)。输出与原 lib/seo 构建器逐字段一致。

/** JSON-LD 防注入序列化(与 lib/seo.ts 同实现):"<" 转义为 "\u003c" */
function jsonLdStringify(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

function buildBreadcrumbJsonLdFrom(tool: ToolMeta) {
  const item = (name: string, url: string, position: number) => ({
    '@type': 'ListItem',
    position,
    name,
    item: url,
  })
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      item('Home', `${SITE_URL}/`, 1),
      item(tool.category, `${SITE_URL}/?category=${encodeURIComponent(tool.category)}#all-tools`, 2),
      item(tool.name, `${SITE_URL}/tools/${tool.slug}/`, 3),
    ],
  }
}

function buildHowToJsonLdFrom(tool: ToolMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to use the ${tool.name}`,
    description: tool.description,
    totalTime: 'PT1M',
    supply: [{ '@type': 'HowToSupply', name: 'Your input values or text' }],
    tool: [{ '@type': 'HowToTool', name: `${SITE_NAME} ${tool.name} (free, in-browser)` }],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Open the tool',
        text: `Open the ${tool.name} page in your browser. The tool runs entirely client-side — no signup, no upload, no installation required.`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'View the results',
        text: 'The result updates instantly below the inputs as you type — no reload, no waiting. Adjust any field to compare scenarios.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Copy or export the result',
        text: 'Use the "Copy" or "Download" button next to the result to save the output. Everything runs locally in your browser, so nothing is uploaded.',
      },
    ],
  }
}

/**
 * 工具页通用布局 —— 三段式 + 主题感知 + i18n
 *
 * 三段式结构:
 *  ① 顶层交互区:面包屑 + 标题(+ ❤️ 收藏按钮)+ 工具主组件
 *  ② 中部 SEO 长文本:About/How to Use + Formula 公式区 + FAQ 手风琴 + 嵌入邀请
 *  ③ 底端关联推荐:同分类相关工具卡片
 *
 * 被 iframe 嵌入时(embed 模式)隐藏所有 [data-embed-hide] 元素,
 * 只保留工具本体 + YMYL 免责声明。
 */
export function ToolLayout({ tool, children }: ToolLayoutProps) {
  const { locale } = useApp()
  // 可见标题/简介/面包屑本地化(en 回退 tool.h1/shortIntro/name 原值,SSR 恒英文)。
  // 注意:SEO <title>/meta/JSON-LD 仍走英文(见 buildToolMetadata/build*JsonLd),不受影响。
  const visibleH1 = getToolName(locale, tool.slug, tool.h1)
  const visibleShortIntro = getToolShortIntro(locale, tool.slug, tool.shortIntro)
  const visibleName = getToolName(locale, tool.slug, tool.name)
  const visibleCategory = tc(locale, tool.category)
  const faqJsonLd = buildFaqJsonLd(tool.slug, locale)
  const breadcrumbJsonLd = buildBreadcrumbJsonLdFrom(tool)
  const howToJsonLd = buildHowToJsonLdFrom(tool)
  // 星标徽章用的确定性评分(与 lib/seo.ts buildToolJsonLd 的 aggregateRating 同源)
  const rating = getToolRating(tool.slug)

  return (
    <div className="container-page py-8">
      {/* 最近使用记录 - 静默写入 localStorage(渲染 null,不影响布局) */}
      <RecentlyUsedTracker slug={tool.slug} />

      {/* HowTo 结构化数据 - 让 Google 展示「How to」步骤化富媒体卡片(标准化 3 步) */}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdStringify(howToJsonLd) }}
        />
      )}

      {/* FAQ 结构化数据 - 让 Google 在搜索结果展示富媒体问答 */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdStringify(faqJsonLd) }}
        />
      )}

      {/* 面包屑结构化数据 - 让 Google 展示 Home › 分类 › 工具 路径 */}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdStringify(breadcrumbJsonLd) }}
        />
      )}

      {/* ─────────── ① 顶层交互区 ─────────── */}

      {/* 面包屑(嵌入时隐藏;animate-fade-in 入场淡入,见 globals.css) */}
      <nav data-embed-hide aria-label="Breadcrumb" className="mb-6 animate-fade-in text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-brand-600">
              {t(locale, 'toolHome')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            {/* 分类跳回首页:带 ?category= 选中筛选 + #all-tools 锚点滚动定位
                (首页工具目录区的固定锚点,见 app/page.tsx 的 id="all-tools")。
                /tools/ 列表页仍在线,但分类筛选交互统一走首页。 */}
            <Link
              href={`/?category=${encodeURIComponent(tool.category)}#all-tools`}
              className="hover:text-brand-600"
            >
              {visibleCategory}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li style={{ color: 'rgb(var(--text-muted))' }}>{visibleName}</li>
        </ol>
      </nav>

      {/* 工具标题 + 收藏按钮 */}
      <header data-embed-hide className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          {/* 工具图标 Badge:与首页工具卡同一套 getToolIcon 映射,
              主色淡底 + 细描边的圆角容器,给标题区一个视觉锚点 */}
          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary"
          >
            <SmartIcon icon={getToolIcon(tool)} className="h-6 w-6" />
          </span>
          <div className="min-w-0">
            <h1 className="text-3xl font-bold sm:text-4xl" style={{ color: 'rgb(var(--text))' }}>
              {visibleH1}
            </h1>
            {/* E-E-A-T 星标微标:与页面 WebApplication JSON-LD 的 aggregateRating
                共用 lib/rating.ts 确定性映射,保证 schema 声明与页面所见严格一致。
                数量向下取整到十位展示("260+"),恒 ≤ schema 的真实 ratingCount。 */}
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/70 bg-amber-50 px-2.5 py-0.5 font-medium text-amber-700 dark:border-amber-500/30 dark:bg-amber-950/40 dark:text-amber-300">
                <span aria-hidden="true" className="text-base leading-none">★</span>
                <span aria-hidden="true">{rating.ratingValue}</span>
                <span aria-hidden="true">·</span>
                {t(locale, 'ratingRatings', { count: ratingCountBadge(rating.ratingCount) })}
                <span aria-hidden="true">·</span>
                {t(locale, 'badgeFree')}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed" style={{ color: 'rgb(var(--text-muted))' }}>
              {visibleShortIntro}
            </p>
          </div>
        </div>
        {/* ❤️ 收藏按钮:同步 localStorage.favorites,嵌入时随 header 一起隐藏 */}
        <FavoriteButton slug={tool.slug} name={visibleName} />
      </header>

      {/* 顶部广告位(嵌入时隐藏) */}
      <div data-embed-hide>
        <AdSlot slot={`${tool.slug}-top`} format="horizontal" fullWidth />
      </div>

      {/* 工具主体 —— 嵌入时唯一可见的核心区块。
          .tool-shell 挂钩 globals.css:内部输入框双层 Ring 焦点态、
          数据表格圆角容器/斑马纹/表头/行 hover 统一由全局 CSS 提供;
          卡片自身 hover 升阴影(transition-all 平滑过渡)。 */}
      <div className="tool-shell rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md sm:p-8">
        {children}
      </div>

      {/* 防CLS 广告位 ① - 工具操作面板正下方(锁死 250px,避免广告加载抖动) */}
      <div data-embed-hide>
        <AdPlaceholder slot={`${tool.slug}-in-content`} />
      </div>

      {/* YMYL 免责声明 - 金融/健康类工具渲染,降低 Google YMYL 算法降权风险。
          嵌入时保留(YMYL 合规不能因嵌入而丢失)。 */}
      <Disclaimer tool={tool} />

      {/* ─────────── ② 中部 SEO 长文本区 ─────────── */}
      <div data-embed-hide>
        {/* 通用信息区 - About / How to Use / Why(按工具类型生成,增厚内容) */}
        <ToolInfoSection tool={tool} />

        {/* 公式区 - 闭式公式工具渲染,无注册的工具返回 null 不渲染 */}
        <FormulaSection slug={tool.slug} tool={tool} />

        {/* 防CLS 广告位 ② - 文章内容区(content)与 FAQ 模块之间(锁死空间防抖动) */}
        <AdPlaceholder slot={`${tool.slug}-mid`} />

        {/* 可见 FAQ 手风琴 - 与 FAQPage JSON-LD schema 同源(lib/tool-faqs.ts) */}
        <VisibleFaqs slug={tool.slug} />

        {/* 嵌入工具区块 - 让博主复制 iframe 代码获取站外反向链接 */}
        <EmbedTool tool={tool} />

        {/* 底部广告位 */}
        <AdSlot slot={`${tool.slug}-bottom`} format="horizontal" fullWidth />
      </div>

      {/* ─────────── ③ 底端关联推荐 ─────────── */}
      <div data-embed-hide>
        {/* 相关工具内链 - SEO 内链网络 + 降低跳出率,同分类优先 3~6 个 */}
        <RelatedTools slug={tool.slug} />
      </div>
    </div>
  )
}
