/**
 * FAQ 结构化数据构建器(客户端安全的拆分模块)。
 *
 * 从 lib/seo.ts 拆出的原因:seo.ts 静态引入工具注册表(lib/tools.ts,
 * 228 个工具的 SEO 文案),而 ToolLayout('use client',所有工具页共载)
 * 需要 FAQ JSON-LD。拆分后客户端只带上 FAQ 文案(lib/tool-faqs.ts)+
 * 多语 l10n(与可见 FAQ 区块 VisibleFaqs 同源同载,零边际成本),
 * 注册表得以退出工具页客户端 chunk。
 *
 * seo.ts 从本模块 re-export,服务端消费方(lib/content-templates 等)无需改动。
 */

import type { Locale } from './i18n'
import { getToolFaqs } from './tool-faqs'
import { getToolFaqsL10n } from './i18n/tool-l10n'

export function buildFaqJsonLd(slug: string, locale: Locale = 'en'): {
  '@context': string
  '@type': 'FAQPage'
  mainEntity: Array<{ '@type': 'Question'; name: string; acceptedAnswer: { '@type': 'Answer'; text: string } }>
} | null {
  const faqs = getToolFaqsL10n(slug, locale, getToolFaqs(slug))
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
