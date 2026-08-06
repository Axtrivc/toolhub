'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { AdSlot } from './AdSlot'
import { AdPlaceholder } from './AdPlaceholder'
import { RelatedTools } from './RelatedTools'
import { ToolInfoSection } from './ToolInfoSection'
import { VisibleFaqs } from './VisibleFaqs'
import { FormulaSection } from './FormulaSection'
import { EmbedTool } from './EmbedTool'
import { Disclaimer } from './Disclaimer'
import { FavoriteButton } from './FavoriteButton'
import { RecentlyUsedTracker } from './RecentlyUsedTracker'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'
import { buildFaqJsonLd, buildBreadcrumbJsonLd, buildHowToJsonLd } from '@/lib/seo'
import { getToolIcon, type ToolMeta } from '@/lib/tools'

interface ToolLayoutProps {
  tool: ToolMeta
  children?: ReactNode
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
  const faqJsonLd = buildFaqJsonLd(tool.slug)
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(tool.slug)
  const howToJsonLd = buildHowToJsonLd(tool.slug)

  return (
    <div className="container-page py-8">
      {/* 最近使用记录 - 静默写入 localStorage(渲染 null,不影响布局) */}
      <RecentlyUsedTracker slug={tool.slug} />

      {/* HowTo 结构化数据 - 让 Google 展示「How to」步骤化富媒体卡片(标准化 3 步) */}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}

      {/* FAQ 结构化数据 - 让 Google 在搜索结果展示富媒体问答 */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* 面包屑结构化数据 - 让 Google 展示 Home › 分类 › 工具 路径 */}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
            {/* 分类跳回首页:带 ?category= 选中筛选 + #锚点滚动定位。
                统一回首页,避免落到已废弃的 /tools/ 旧枢纽页。 */}
            <Link
              href={`/?category=${encodeURIComponent(tool.category)}#${encodeURIComponent(tool.category)}`}
              className="hover:text-brand-600"
            >
              {tool.category}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li style={{ color: 'rgb(var(--text-muted))' }}>{tool.name}</li>
        </ol>
      </nav>

      {/* 工具标题 + 收藏按钮 */}
      <header data-embed-hide className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          {/* 工具图标 Badge:与首页工具卡同一套 getToolIcon 映射,
              主色淡底 + 细描边的圆角容器,给标题区一个视觉锚点 */}
          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-2xl"
          >
            {getToolIcon(tool)}
          </span>
          <div className="min-w-0">
            <h1 className="text-3xl font-bold sm:text-4xl" style={{ color: 'rgb(var(--text))' }}>
              {tool.h1}
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed" style={{ color: 'rgb(var(--text-muted))' }}>
              {tool.shortIntro}
            </p>
          </div>
        </div>
        {/* ❤️ 收藏按钮:同步 localStorage.favorites,嵌入时随 header 一起隐藏 */}
        <FavoriteButton slug={tool.slug} name={tool.name} />
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
