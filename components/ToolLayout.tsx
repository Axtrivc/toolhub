'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { AdSlot } from './AdSlot'
// 相关工具推荐:保留 dynamic 做代码分割,但不再 ssr:false —— 组件现在消费
// lib/related-tools.ts 轻量索引(非全量注册表),参与静态预渲染后 225 个
// 工具页的导出 HTML 直接自带 4 条静态 <a> 内链(无 JS 爬虫/二轮索引可抓,
// 全站形成 900+ 条网状内链池);JS 侧仍是懒 chunk,首屏 bundle 零注册表。
const RelatedTools = dynamic(() => import('./RelatedTools').then((m) => m.RelatedTools))
import { VisibleFaqs } from './VisibleFaqs'
import { FormulaSection } from './FormulaSection'
import { EmbedTool } from './EmbedTool'
import { Disclaimer } from './Disclaimer'
import { FavoriteButton } from './FavoriteButton'
import { RecentlyUsedTracker } from './RecentlyUsedTracker'
import { useApp } from './providers/AppProviders'
import { t, getToolName, getToolShortIntro, tc } from '@/lib/i18n'
import { buildFaqJsonLd } from '@/lib/faq-jsonld'
import { SITE_URL } from '@/lib/constants'
import { type ToolMeta } from '@/lib/tool-types'
import { type ToolL10n } from '@/lib/i18n/tool-l10n-core'
import './tool-page.css'

interface ToolLayoutProps {
  tool: ToolMeta
  /**
   * 本工具的多语本地化记录(lib/i18n/tools-l10n/<slug>.ts,由工具页 RSC 经
   * getToolL10nRecord(slug) 传入)。下发给 ToolInfoSection / FormulaSection /
   * VisibleFaqs 与 FAQ JSON-LD —— client 侧按运行时 locale 解析(en 恒英文),
   * 语义与原 getToolL10n 一致,而整表注册表不进客户端 chunk。未传 → 恒英文回退。
   */
  l10n?: ToolL10n
  children: [toolInterface: ReactNode, article: ReactNode]
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
      item('All Tools', `${SITE_URL}/tools/`, 2),
      item(tool.name, `${SITE_URL}/tools/${tool.slug}/`, 3),
    ],
  }
}

/**
 * 工具页通用布局 —— 三段式 + 主题感知 + i18n
 *
 * 三段式结构:
 *  ① 顶层交互区:面包屑 + 标题(+ ❤️ 收藏按钮)+ 工具主组件
 *  ② 专属解释/算例 + Formula 公式区 + FAQ 手风琴 + 嵌入邀请
 *  ③ 底端关联推荐:同分类相关工具卡片
 *
 * 被 iframe 嵌入时(embed 模式)隐藏所有 [data-embed-hide] 元素,
 * 只保留工具本体 + YMYL 免责声明。
 */
export function ToolLayout({ tool, l10n, children }: ToolLayoutProps) {
  const { locale } = useApp()
  const [toolInterface, article] = children
  // 可见标题/简介/面包屑本地化(en 回退 tool.h1/shortIntro/name 原值,SSR 恒英文)。
  // 注意:SEO <title>/meta/JSON-LD 仍走英文(见 buildToolMetadata/build*JsonLd),不受影响。
  const visibleH1 = getToolName(locale, tool.slug, tool.h1)
  const visibleShortIntro = getToolShortIntro(locale, tool.slug, tool.shortIntro)
  const visibleName = getToolName(locale, tool.slug, tool.name)
  const visibleCategory = tc(locale, tool.category)
  const faqJsonLd = buildFaqJsonLd(tool.slug, locale, l10n)
  const breadcrumbJsonLd = buildBreadcrumbJsonLdFrom(tool)

  return (
    <div className="tool-page container-page pb-16 pt-7 sm:pb-24 sm:pt-12">
      {/* 最近使用记录 - 静默写入 localStorage(渲染 null,不影响布局) */}
      <RecentlyUsedTracker slug={tool.slug} />

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
      <nav data-embed-hide aria-label="Breadcrumb" className="mb-8 text-sm sm:mb-10" style={{ color: 'rgb(var(--text-subtle))' }}>
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-brand-600">
              {t(locale, 'toolHome')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            {/* Browse the canonical directory rather than a parameter-only filter URL. */}
            <Link
              href="/tools/"
              className="hover:text-brand-600"
            >
              {t(locale, 'navAllTools')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li style={{ color: 'rgb(var(--text-muted))' }}>{visibleName}</li>
        </ol>
      </nav>

      {/* 工具标题 + 收藏按钮 */}
      <header data-embed-hide className="relative mb-8 sm:mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-2 sm:pr-28">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium uppercase tracking-[1.5px] text-white">
            {t(locale, 'badgeFree')}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-card px-3 py-1 text-xs font-medium text-ink">
            {visibleCategory}
          </span>
        </div>
        <h1 className="max-w-5xl font-serif text-4xl font-normal leading-[1.06] tracking-[-0.5px] text-ink sm:pr-24 sm:text-5xl sm:tracking-[-1px]">
          {visibleH1}
        </h1>
        <p className="mt-4 max-w-[48rem] text-base leading-relaxed text-body sm:text-lg">
          {visibleShortIntro}
        </p>
        <div className="mt-4 sm:absolute sm:right-0 sm:top-0 sm:mt-0">
          <FavoriteButton slug={tool.slug} name={visibleName} />
        </div>
      </header>

      {/* 顶部广告位(嵌入时隐藏) */}
      <div data-embed-hide>
        <AdSlot slot={`${tool.slug}-top`} format="horizontal" fullWidth />
      </div>

      {/* 工具主体 —— 嵌入时唯一可见的核心区块。
          .tool-shell 挂钩 globals.css:内部输入框双层 Ring 焦点态、
          数据表格圆角容器/斑马纹/表头/行 hover 统一由全局 CSS 提供;
          卡片自身 hover 升阴影(transition-all 平滑过渡)。 */}
      <div className="tool-shell min-w-0 rounded-2xl border border-hairline bg-canvas p-4 sm:p-8">
        {toolInterface}
      </div>

      {/* 黄金广告位 ① - 工具操作面板正下方:真实 <ins> + push,容器按
          rectangle 规格锁死 min-h(250/280px),广告异步加载零 CLS */}
      <div data-embed-hide>
        <AdSlot slot={`${tool.slug}-in-content`} format="rectangle" />
      </div>

      <div className="tool-notes">
        <FormulaSection slug={tool.slug} tool={tool} l10n={l10n} />
        <Disclaimer tool={tool} />
      </div>

      <div data-embed-hide>
        {article}
        <AdSlot slot={`${tool.slug}-mid`} format="horizontal" fullWidth />

        {/* 可见 FAQ 手风琴 - 与 FAQPage JSON-LD schema 同源(lib/tool-faqs.ts) */}
        <VisibleFaqs slug={tool.slug} l10n={l10n} />

        {/* 底部广告位 */}
        <AdSlot slot={`${tool.slug}-bottom`} format="horizontal" fullWidth />
      </div>

      {/* ─────────── ③ 底端关联推荐 ─────────── */}
      <div data-embed-hide>
        {/* 相关工具内链 - SEO 内链网络 + 降低跳出率,同分类优先 3~6 个 */}
        <RelatedTools slug={tool.slug} />
        <EmbedTool tool={tool} />
      </div>
    </div>
  )
}
