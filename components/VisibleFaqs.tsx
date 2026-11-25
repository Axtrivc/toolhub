'use client'

/**
 * 工具页可见 FAQ 区块 —— 手风琴样式
 *
 * 数据源不变:lib/tool-faqs.ts → getToolFaqs(slug),与 FAQPage JSON-LD
 * (ToolLayout 的 buildFaqJsonLd)共用同一份本地化数据(均经 l10n prop,
 * 由工具页 RSC 传入),保证各 locale 下页面所见与结构化数据声明完全一致
 * (避免 Google 失配降权)。
 *
 * 交互:每个 Q 为可展开/收起的 <details>(原生,无 JS 依赖,SSR 友好,
 * 键盘可达,默认第一个展开便于首屏可读)。首个 FAQ 用 open 属性默认展开。
 *
 * 无注册 FAQ 的工具返回 null(不渲染空区块,也不产生 schema)。
 */

import { getToolFaqs } from '@/lib/tool-faqs'
import { l10nEntryFor, type ToolL10n } from '@/lib/i18n/tool-l10n-core'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

export function VisibleFaqs({ slug, l10n }: { slug: string; l10n?: ToolL10n }) {
  const { locale } = useApp()
  // 本地化 Q&A 优先;无本地化 → 回退英文 getToolFaqs(SSR 恒英文)。
  // l10nEntryFor(record, locale) 与原 getToolFaqsL10n 内部取值同表达式(en → null)。
  const faqs = l10nEntryFor(l10n, locale)?.faqs ?? getToolFaqs(slug)
  if (faqs.length === 0) return null

  return (
    <section className="prose-content mt-12 sm:mt-20">
      <h2>{t(locale, 'faqsTitle')}</h2>
      <div className="not-prose divide-y divide-hairline border-y border-hairline">
        {faqs.map((f, i) => (
          <details
            key={i}
            open={i === 0}
            className="group"
          >
            <summary
              className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-medium transition-colors hover:text-brand-700 dark:hover:text-brand-300"
            >
              <span>{f.q}</span>
              {/* 旋转箭头指示展开状态 */}
              <span aria-hidden="true" className="tool-faq-marker text-xl leading-none text-body" />
            </summary>
            <div
              className="max-w-prose pb-5 pr-6 text-sm leading-relaxed"
              style={{ color: 'rgb(var(--text-muted))' }}
            >
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
