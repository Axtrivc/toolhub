'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { PageShell } from './PageShell'
import { useApp } from './providers/AppProviders'
import type { Locale } from '@/lib/i18n'
import {
  aboutPage,
  contactPage,
  privacyPage,
  termsPage,
  type PageContent,
  type PageSection,
  type ContentBlock,
} from '@/lib/i18n/pages'

/**
 * 本地化的静态页外壳 + 正文渲染器。
 *
 * 为什么需要它:
 * - about/privacy/contact/terms 页是 server component(为了导出 metadata)。
 * - 正文要随 locale 切换,必须用客户端组件。
 * - 本组件接收 pageKey,从 lib/i18n/pages.ts 取当前 locale 的完整内容,
 *   把本地化的 title/description 传给 PageShell,并渲染 sections[]。
 *
 * 内联链接渲染:block 文本里的 {placeholder} + section.links[placeholder] → <Link>。
 * 用 split 模式(同 CookieConsent/首页 SEO 区),不靠 dangerouslySetInnerHTML。
 */

const PAGES: Record<string, Record<Locale, PageContent>> = {
  about: aboutPage,
  contact: contactPage,
  privacy: privacyPage,
  terms: termsPage,
}

interface LocalizedPageShellProps {
  pageKey: keyof typeof PAGES
  /** 面包屑标签(server 端给的英文,PageShell crumb 用);不传则不显示 crumb */
  crumb?: string
  /** 可选:在 sections 之前/之后插入额外节点(如 contact 页的 mailto 已在数据里,一般不需要) */
  children?: ReactNode
}

/** 把含 {placeholder} 的字符串渲染为带 <Link> 的 ReactNode */
function renderWithLinks(
  text: string,
  links: Record<string, string> | undefined,
): ReactNode {
  if (!links) return text
  // 找出文本里出现的所有占位符(按 links 的 key 匹配),逐个替换
  // 用正则一次性切:{key} 形式,key 为 links 的 key 转义
  const keys = Object.keys(links)
  if (keys.length === 0) return text
  // 构造分割正则:{key1}|{key2}|...
  const pattern = new RegExp(
    keys.map((k) => `{${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}}`).join('|'),
    'g',
  )
  const parts = text.split(pattern)
  const matches = text.match(pattern) ?? []
  const out: ReactNode[] = []
  parts.forEach((part, i) => {
    out.push(part)
    if (i < matches.length) {
      const matched = matches[i].slice(1, -1) // 去掉 { }
      const href = links[matched]
      out.push(
        <Link key={`${matched}-${i}`} href={href} className="underline hover:opacity-80">
          {matched}
        </Link>,
      )
    }
  })
  return <>{out}</>
}

/** 渲染单个 block */
function renderBlock(block: ContentBlock, links: Record<string, string> | undefined, key: string): ReactNode {
  if (typeof block === 'string') {
    return <p key={key}>{renderWithLinks(block, links)}</p>
  }
  if ('heading' in block) {
    return <h3 key={key} className="mt-6">{block.heading}</h3>
  }
  // list
  return (
    <ul key={key}>
      {block.list.map((item, i) => (
        <li key={i}>{renderWithLinks(item, links)}</li>
      ))}
    </ul>
  )
}

/** 渲染一个 section */
function renderSection(section: PageSection, idx: number): ReactNode {
  return (
    <section key={idx}>
      {section.heading && <h2 className="mt-8">{section.heading}</h2>}
      {section.blocks.map((block, i) => renderBlock(block, section.links, `b-${i}`))}
    </section>
  )
}

export function LocalizedPageShell({ pageKey, crumb, children }: LocalizedPageShellProps) {
  const { locale } = useApp()
  const pageData = PAGES[pageKey]
  // 缺失整页 → 回退 en
  const content: PageContent = pageData?.[locale] ?? pageData?.en

  if (!content) {
    return null
  }

  return (
    <PageShell title={content.title} description={content.description} crumb={crumb}>
      {content.sections.map((section, idx) => renderSection(section, idx))}
      {children}
    </PageShell>
  )
}
