/**
 * 通用内容组件 - 为批量生成的工具提供统一的内容外壳
 *
 * 设计:大多数工具的"什么是 X / 如何使用 / 常见问题"结构高度相似,
 * 用这个模板传入标题和段落即可,避免 31 个 content.tsx 全部手写重复结构。
 * 每个工具的内容由 lib/tool-content/*.ts 提供数据,保证每篇都是独立原创。
 */
import type { ReactNode } from 'react'

export interface ContentSection {
  heading: string
  body: ReactNode
}

export function ToolContent({ intro, sections, faqs }: {
  intro: ReactNode
  sections: ContentSection[]
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

      {faqs && faqs.length > 0 && (
        <>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div key={i}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </>
      )}
    </section>
  )
}
