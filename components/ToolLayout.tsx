'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { AdSlot } from './AdSlot'
import { RelatedTools } from './RelatedTools'
import { ToolInfoSection } from './ToolInfoSection'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'
import { buildFaqJsonLd } from '@/lib/seo'
import type { ToolMeta } from '@/lib/tools'

interface ToolLayoutProps {
  tool: ToolMeta
  children?: ReactNode
}

/**
 * 工具页通用布局 - 主题感知 + i18n
 */
export function ToolLayout({ tool, children }: ToolLayoutProps) {
  const { locale } = useApp()
  const faqJsonLd = buildFaqJsonLd(tool.slug)

  return (
    <div className="container-page py-8">
      {/* FAQ 结构化数据 - 让 Google 在搜索结果展示富媒体问答 */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* 面包屑 */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-brand-600">
              {t(locale, 'toolHome')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/?category=${encodeURIComponent(tool.category)}`} className="hover:text-brand-600">
              {tool.category}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li style={{ color: 'rgb(var(--text-muted))' }}>{tool.name}</li>
        </ol>
      </nav>

      {/* 工具标题 */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl" style={{ color: 'rgb(var(--text))' }}>
          {tool.h1}
        </h1>
        <p className="mt-3 max-w-2xl text-lg" style={{ color: 'rgb(var(--text-muted))' }}>
          {tool.shortIntro}
        </p>
      </header>

      {/* 顶部广告位 */}
      <AdSlot slot={`${tool.slug}-top`} format="horizontal" fullWidth />

      {/* 工具主体 */}
      <div
        className="rounded-xl border p-6 shadow-sm sm:p-8"
        style={{
          borderColor: 'rgb(var(--border))',
          backgroundColor: 'rgb(var(--bg-card))',
        }}
      >
        {children}
      </div>

      {/* 通用信息区 - 关于工具/如何使用(按工具类型生成,增厚内容) */}
      <ToolInfoSection tool={tool} />

      {/* 底部广告位 */}
      <AdSlot slot={`${tool.slug}-bottom`} format="horizontal" fullWidth />

      {/* 相关工具内链 - SEO 内链网络 + 降低跳出率 */}
      <RelatedTools slug={tool.slug} />
    </div>
  )
}
