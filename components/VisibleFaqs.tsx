'use client'

/**
 * 工具页可见 FAQ 区块 —— 手风琴样式
 *
 * 数据源不变:lib/tool-faqs.ts → getToolFaqs(slug),与 FAQPage JSON-LD
 * (lib/seo.ts 的 buildFaqJsonLd)共用同一份数据,保证页面所见与结构化数据
 * 声明完全一致(避免 Google 失配降权)。
 *
 * 交互:每个 Q 为可展开/收起的 <details>(原生,无 JS 依赖,SSR 友好,
 * 键盘可达,默认第一个展开便于首屏可读)。首个 FAQ 用 open 属性默认展开。
 *
 * 无注册 FAQ 的工具返回 null(不渲染空区块,也不产生 schema)。
 */

import { getToolFaqs } from '@/lib/tool-faqs'

export function VisibleFaqs({ slug }: { slug: string }) {
  const faqs = getToolFaqs(slug)
  if (faqs.length === 0) return null

  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Frequently Asked Questions</h2>
      <div className="not-prose space-y-2">
        {faqs.map((f, i) => (
          <details
            key={i}
            open={i === 0}
            className="group rounded-lg border transition-colors"
            style={{
              borderColor: 'rgb(var(--border))',
              backgroundColor: 'rgb(var(--bg-card))',
            }}
          >
            <summary
              className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50"
              style={{ color: 'rgb(var(--text))' }}
            >
              <span>{f.q}</span>
              {/* 旋转箭头指示展开状态 */}
              <svg
                className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
                style={{ color: 'rgb(var(--text-subtle))' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div
              className="px-4 pb-4 text-sm leading-relaxed"
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
