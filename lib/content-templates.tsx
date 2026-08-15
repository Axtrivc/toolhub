/**
 * 通用内容组件 - 为批量生成的工具提供统一的内容外壳
 *
 * 设计:大多数工具的"什么是 X / 如何使用"结构高度相似,
 * 用这个模板传入标题和段落即可,避免 content.tsx 全部手写重复结构。
 * 每个工具的内容由 app/tools/<slug>/content.tsx 提供数据,保证每篇都是独立原创。
 *
 * FAQ 渲染已上移到 `components/ToolLayout.tsx` 的 `VisibleFaqs`(与 JSON-LD schema
 * 同源 lib/tool-faqs.ts)。本组件的 `faqs` 入参已停用(保留入参仅为向后兼容,
 * 不再渲染),避免页面出现重复或与 schema 不一致的 FAQ 区块。
 */
import type { ReactNode } from 'react'

export interface ContentSection {
  heading: string
  body: ReactNode
}

export function ToolContent({ intro, sections }: {
  intro: ReactNode
  sections: ContentSection[]
  /** @deprecated FAQ 现由 ToolLayout 的 VisibleFaqs 统一渲染(与 schema 同源),本入参不再渲染。 */
  faqs?: { q: string; a: ReactNode }[]
}): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What Is This Tool?</h2>
      {intro}

      {sections.map((s, i) => (
        <div key={i}>
          <h2>{s.heading}</h2>
          {s.body}
        </div>
      ))}
    </section>
  )
}
