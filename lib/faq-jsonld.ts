/**
 * FAQ 结构化数据构建器(客户端安全的拆分模块)。
 *
 * 从 lib/seo.ts 拆出的原因:seo.ts 静态引入工具注册表(lib/tools.ts,
 * 228 个工具的 SEO 文案),而 ToolLayout('use client',所有工具页共载)
 * 需要 FAQ JSON-LD。拆分后客户端只带上 FAQ 文案(lib/tool-faqs.ts);
 * 多语 l10n 由调用方经 l10n 参数传入(ToolLayout 从工具页 RSC prop 透传,
 * 与可见 FAQ 区块 VisibleFaqs 同源),整表注册表不进客户端 chunk。
 *
 * seo.ts 从本模块 re-export,服务端消费方(lib/content-templates 等)无需改动。
 */

import type { Locale } from './i18n'
import { getToolFaqs } from './tool-faqs'
import { l10nEntryFor, type ToolL10n } from './i18n/tool-l10n-core'

export function buildFaqJsonLd(slug: string, locale: Locale = 'en', l10n?: ToolL10n): {
  '@context': string
  '@type': 'FAQPage'
  mainEntity: Array<{ '@type': 'Question'; name: string; acceptedAnswer: { '@type': 'Answer'; text: string } }>
} | null {
  // l10nEntryFor(record, locale) 与原 getToolFaqsL10n 的内部取值同表达式:
  // en → null;未注册/缺 faqs → 英文 getToolFaqs(slug)。l10n 未传(旧签名调用)恒英文。
  const faqs = l10nEntryFor(l10n, locale)?.faqs ?? getToolFaqs(slug)
  if (faqs.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}
