import { getToolFaqs } from '@/lib/tool-faqs'

/**
 * 工具页可见 FAQ 区块 —— 与 FAQPage JSON-LD schema 共用同一数据源
 * (lib/tool-faqs.ts → getToolFaqs),保证页面所见与结构化数据声明完全一致。
 *
 * 用法:在工具页内容区直接 <VisibleFaqs slug="mortgage-calculator" />。
 * 无注册 FAQ 的工具返回 null(不渲染空区块,也不产生 schema)。
 */
export function VisibleFaqs({ slug }: { slug: string }) {
  const faqs = getToolFaqs(slug)
  if (faqs.length === 0) return null

  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((f, i) => (
        <div key={i}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
    </section>
  )
}
