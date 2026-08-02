import { getToolFormula } from '@/lib/tool-formulas'
import type { ToolMeta } from '@/lib/tools'

/**
 * 公式区 —— 中部 SEO 长文本里的"原理公式"区块
 *
 * 数据源:lib/tool-formulas.ts 注册表(slug → { formula, explain })。
 * 未注册的工具返回 null(不渲染空区,避免页面出现无内容的小标题)。
 *
 * 渲染:等宽公式块(保留换行)+ 通俗解释。prose 排版样式沿用站点 .prose-content。
 * 与可见 FAQ 一样,这是页面实质内容,利于 SEO 长尾(如 "loan payment formula")。
 */
export function FormulaSection({ slug, tool }: { slug: string; tool: ToolMeta }) {
  const f = getToolFormula(slug)
  if (!f) return null

  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Formula &amp; How It Works</h2>
      <p>
        The <strong>{tool.name}</strong> is based on the following formula:
      </p>
      <pre className="overflow-x-auto">{f.formula}</pre>
      {f.explain && <p>{f.explain}</p>}
    </section>
  )
}
