'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { useApp } from './providers/AppProviders'
import {
  howIBuiltToolHubArticle,
  type ArticleContent,
  type ArticleSection,
  type ArticleBlock,
} from '@/lib/i18n/blog-articles'
import { mortgageLoanCalculatorsArticle } from '@/lib/i18n/blog-article-finance'
import type { Locale } from '@/lib/i18n'

/**
 * 博客长文正文渲染器(客户端组件)。
 *
 * 为什么需要它:
 * - 博客文章页是 server component(为了导出 metadata + JSON-LD,SEO 字段英文稳定)。
 * - 正文要随 locale 切换,必须用客户端组件。
 * - 本组件接收 articleKey,从 lib/i18n/blog-articles.ts 取当前 locale 的完整内容,
 *   渲染 lead + sections[]。
 *
 * 内联 markdown 渲染:正文段落支持 **bold** / *italic* / `code` 三种标记,
 * 用正则切分字符串为 React 节点(不引入 markdown-it / remark 等依赖,
 * 因为正文受控、标记种类有限)。代码块走 { code: string } block,原样照录进 <pre><code>。
 *
 * 渲染目标:.prose-content 容器(与原 server component 一致,主题感知排版)。
 */

const ARTICLES: Record<string, Record<Locale, ArticleContent>> = {
  'how-i-built-toolhub': howIBuiltToolHubArticle,
  'mortgage-loan-calculators': mortgageLoanCalculatorsArticle,
}

/**
 * 把内联 markdown 文本(**bold** / *italic* / `code`)渲染为 React 节点。
 *
 * 实现思路:用一个总正则按出现顺序匹配三种标记,split 出每段文本 + 标记类型,
 * 递归包成 <strong>/<em>/<code>。支持单段内多种标记混排(如 "**bold** and `code`")。
 */
function renderInlineMarkdown(text: string, keyPrefix: string): ReactNode[] {
  // 三种标记: **...**  *...*  `...`
  // 用捕获组区分类型;非贪婪匹配内部内容。
  const pattern = /(\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`)/g
  const out: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let i = 0

  while ((match = pattern.exec(text)) !== null) {
    // 标记前的纯文本
    if (match.index > lastIndex) {
      out.push(text.slice(lastIndex, match.index))
    }
    const [full, , bold, italic, code] = match
    if (bold !== undefined) {
      out.push(<strong key={`${keyPrefix}-b-${i}`}>{bold}</strong>)
    } else if (italic !== undefined) {
      out.push(<em key={`${keyPrefix}-i-${i}`}>{italic}</em>)
    } else if (code !== undefined) {
      out.push(<code key={`${keyPrefix}-c-${i}`}>{code}</code>)
    } else {
      // 兜底:原样输出(理论上不会到这)
      out.push(full)
    }
    lastIndex = match.index + full.length
    i++
  }
  // 尾部纯文本
  if (lastIndex < text.length) {
    out.push(text.slice(lastIndex))
  }
  return out
}

/** 渲染单个 block */
function renderBlock(block: ArticleBlock, key: string): ReactNode {
  if (typeof block === 'string') {
    return <p key={key}>{renderInlineMarkdown(block, key)}</p>
  }
  if ('code' in block) {
    return (
      <pre key={key}>
        <code>{block.code}</code>
      </pre>
    )
  }
  if ('heading' in block) {
    return <h3 key={key}>{block.heading}</h3>
  }
  if ('card' in block) {
    const { title, href, desc } = block.card
    return (
      <Link
        key={key}
        href={href}
        className="group my-5 flex items-center gap-4 rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
      >
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-bold" style={{ color: 'rgb(var(--text))' }}>
            {title}
          </span>
          <span className="mt-0.5 block text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
            {desc}
          </span>
        </span>
        <span className="shrink-0 font-mono text-sm font-semibold text-brand-600 transition-transform group-hover:translate-x-0.5 dark:text-brand-400">
          →
        </span>
      </Link>
    )
  }
  // list
  return (
    <ul key={key}>
      {block.list.map((item, i) => (
        <li key={i}>{renderInlineMarkdown(item, `${key}-li-${i}`)}</li>
      ))}
    </ul>
  )
}

/** 渲染一个 section(H2 小标题 + 若干 block) */
function renderSection(section: ArticleSection, idx: number): ReactNode {
  return (
    <section key={idx}>
      <h2>{section.heading}</h2>
      {section.blocks.map((block, i) => renderBlock(block, `s${idx}-b${i}`))}
    </section>
  )
}

interface BlogArticleBodyProps {
  /** 文章 key,对应 ARTICLES 表的键 */
  articleKey: keyof typeof ARTICLES
}

export function BlogArticleBody({ articleKey }: BlogArticleBodyProps) {
  const { locale } = useApp()
  const articleData = ARTICLES[articleKey]
  // 缺失整篇 → 回退 en
  const content: ArticleContent | undefined = articleData?.[locale] ?? articleData?.en

  if (!content) return null

  return (
    <>
      {/* 副标题 lead —— 与原 server component 的 <p className="mt-4 max-w-2xl text-lg"> 视觉一致 */}
      <p className="mt-4 max-w-2xl text-lg" style={{ color: 'rgb(var(--text-muted))' }}>
        {content.lead}
      </p>

      {/* 正文 sections —— 复用全站 .prose-content 排版(主题感知) */}
      <article className="prose-content mt-10 max-w-3xl">
        {content.sections.map((section, idx) => renderSection(section, idx))}
      </article>
    </>
  )
}
