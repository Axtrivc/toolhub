'use client'

import { useState, useMemo, useCallback } from 'react'
import DOMPurify from 'dompurify'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'

/**
 * Markdown to HTML Converter —— 手写 CommonMark 子集 + GFM 表格
 *
 * 支持:标题 H1-H6、粗体/斜体/删除线、行内代码、代码块(```lang)、
 * 引用、有序/无序列表、链接、图片、水平线、GFM 表格。
 * 不支持:原始 HTML 直通(转义)、脚注、任务列表(简化支持)。
 * 输出经 DOMPurify 白名单消毒后才进 dangerouslySetInnerHTML。
 * 100% 本地。
 */

const SAMPLE_MD = `# Hello Markdown

This is **bold**, this is *italic*, and this is \`inline code\`.

## Lists

- Item one
- Item two
  - Nested item
- [x] Task done

1. First
2. Second

> A blockquote.

## Code Block

\`\`\`js
const x = 42;
console.log(x);
\`\`\`

## Table

| Name | Age |
| ---- | --- |
| Jane | 30  |

[Visit ToolHub](https://example.com)
`

/** HTML 转义(含引号,防属性注入) */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * URL 协议白名单:只允许 http/https/mailto/相对路径/锚点。
 * 拒绝 javascript:/data: 等危险协议(防 XSS)。
 */
function isSafeUrl(url: string): boolean {
  const trimmed = url.trim()
  if (trimmed === '') return false
  // 锚点 / 相对路径 / 协议相对
  if (trimmed.startsWith('#') || trimmed.startsWith('/') || trimmed.startsWith('?')) return true
  // 协议绝对 URL:取协议部分校验白名单
  const match = trimmed.match(/^([a-zA-Z][a-zA-Z0-9+.-]*):/)
  if (match) {
    const proto = match[1].toLowerCase()
    return proto === 'http' || proto === 'https' || proto === 'mailto'
  }
  // 无协议、非锚点/相对 → 视为相对路径(如 example.com/foo)
  return true
}

/** 行内格式:粗体/斜体/删除线/代码/链接/图片 */
function renderInline(text: string): string {
  let s = escapeHtml(text)
  // 行内代码 `code`(先处理,避免内部被其它规则匹配)
  s = s.replace(/`([^`]+)`/g, (_m, code) => `<code>${code}</code>`)
  // 图片 ![alt](url) — 先于链接。不安全 URL 退化为纯 alt 文本。
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_m, alt, url) => {
    if (!isSafeUrl(url)) return alt
    return `<img src="${escapeHtml(url)}" alt="${alt}" />`
  })
  // 链接 [text](url)。不安全 URL(javascript: 等)退化为纯文本,不渲染 href。
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, txt, url) => {
    if (!isSafeUrl(url)) return txt
    return `<a href="${escapeHtml(url)}">${txt}</a>`
  })
  // 删除线 ~~text~~
  s = s.replace(/~~([^~]+)~~/g, '<del>$1</del>')
  // 粗体 **text**
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  // 斜体 *text*
  s = s.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')
  return s
}

interface MdResult {
  html: string
}

/** 把 markdown 文本转成 HTML(逐行状态机) */
function markdownToHtml(md: string): string {
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  const out: string[] = []
  let i = 0
  const n = lines.length

  // 列表状态
  let listType: 'ul' | 'ol' | null = null
  const closeList = () => {
    if (listType) {
      out.push(`</${listType}>`)
      listType = null
    }
  }

  while (i < n) {
    let line = lines[i]

    // 代码块
    if (/^```/.test(line.trim())) {
      closeList()
      const lang = line.trim().slice(3)
      const codeLines: string[] = []
      i++
      while (i < n && !/^```/.test(lines[i].trim())) {
        codeLines.push(lines[i])
        i++
      }
      i++ // 跳过闭合 ```
      // 语言串直接拼进 class 属性,必须先 escape 防 attribute 注入
      const cls = lang ? ` class="language-${escapeHtml(lang)}"` : ''
      out.push(`<pre><code${cls}>${escapeHtml(codeLines.join('\n'))}</code></pre>`)
      continue
    }

    // 空行
    if (line.trim() === '') {
      closeList()
      i++
      continue
    }

    // 标题 # .. ######
    const hMatch = line.match(/^(#{1,6})\s+(.*)$/)
    if (hMatch) {
      closeList()
      const level = hMatch[1].length
      out.push(`<h${level}>${renderInline(hMatch[2])}</h${level}>`)
      i++
      continue
    }

    // 水平线
    if (/^(\*\*\*|---|___)\s*$/.test(line.trim())) {
      closeList()
      out.push('<hr />')
      i++
      continue
    }

    // 引用
    if (/^>\s?/.test(line)) {
      closeList()
      const quoteLines: string[] = []
      while (i < n && /^>\s?/.test(lines[i])) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''))
        i++
      }
      out.push(`<blockquote>${renderInline(quoteLines.join(' '))}</blockquote>`)
      continue
    }

    // GFM 表格(检测 | 与下一行分隔符)
    if (line.includes('|') && i + 1 < n && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1]) && lines[i + 1].includes('-')) {
      closeList()
      const splitRow = (r: string) =>
        r.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map((c) => c.trim())
      const header = splitRow(line)
      i += 2 // 跳过分隔行
      const rows: string[][] = []
      while (i < n && lines[i].includes('|') && lines[i].trim() !== '') {
        rows.push(splitRow(lines[i]))
        i++
      }
      const thead = `<thead><tr>${header.map((c) => `<th>${renderInline(c)}</th>`).join('')}</tr></thead>`
      const tbody = `<tbody>${rows
        .map((r) => `<tr>${r.map((c) => `<td>${renderInline(c)}</td>`).join('')}</tr>`)
        .join('')}</tbody>`
      out.push(`<table>${thead}${tbody}</table>`)
      continue
    }

    // 无序列表 - / * / +
    const ulMatch = line.match(/^(\s*)[-*+]\s+(.*)$/)
    if (ulMatch) {
      if (listType !== 'ul') {
        closeList()
        out.push('<ul>')
        listType = 'ul'
      }
      // 任务列表项
      const item = ulMatch[2]
      const taskMatch = item.match(/^\[(x| )\]\s+(.*)$/i)
      if (taskMatch) {
        const checked = taskMatch[1].toLowerCase() === 'x'
        out.push(`<li><input type="checkbox" disabled${checked ? ' checked' : ''} /> ${renderInline(taskMatch[2])}</li>`)
      } else {
        out.push(`<li>${renderInline(item)}</li>`)
      }
      i++
      continue
    }

    // 有序列表 1.
    const olMatch = line.match(/^(\s*)\d+\.\s+(.*)$/)
    if (olMatch) {
      if (listType !== 'ol') {
        closeList()
        out.push('<ol>')
        listType = 'ol'
      }
      out.push(`<li>${renderInline(olMatch[2])}</li>`)
      i++
      continue
    }

    // 普通段落(连续非空行合并)
    closeList()
    const paraLines: string[] = [line]
    i++
    while (
      i < n &&
      lines[i].trim() !== '' &&
      !/^(#{1,6}\s|>\s?|[-*+]\s|\d+\.\s|```|\*\*\*|---|___)/.test(lines[i]) &&
      !(lines[i].includes('|') && i + 1 < n && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1]) && lines[i + 1].includes('-'))
    ) {
      paraLines.push(lines[i])
      i++
    }
    out.push(`<p>${renderInline(paraLines.join(' '))}</p>`)
  }
  closeList()
  const res: MdResult = { html: out.join('\n') }
  return res.html
}

export function MarkdownToHtmlClient() {
  const [input, setInput] = useState('')

  const result = useMemo<{ output?: string; error?: string }>(() => {
    if (!input.trim()) return {}
    try {
      // 生成器本身已做转义 + URL 协议白名单,这里再过一道 DOMPurify 白名单消毒,
      // 作为 dangerouslySetInnerHTML 前的纵深防御,防未来规则改动引入 XSS。
      // (初始输入为空,SSR 不会走到这里;sanitize 实际在浏览器执行。)
      return { output: DOMPurify.sanitize(markdownToHtml(input)) }
    } catch (e) {
      return { error: e instanceof Error ? e.message : 'Could not convert Markdown' }
    }
  }, [input])

  const handleLoadSample = useCallback(() => setInput(SAMPLE_MD), [])

  const inputCls =
    'w-full rounded-lg border p-4 font-mono text-xs shadow-sm outline-none transition focus:ring-2'

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="md-input" className="text-sm font-medium text-slate-700">
            Markdown
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
            {input && (
              <button
                type="button"
                onClick={() => setInput('')}
                className="-my-1 rounded-md px-2 py-1 text-xs text-slate-400 hover:text-red-500 sm:text-sm"
              >
                Clear
              </button>
            )}
          </div>
        </div>
        <textarea
          id="md-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={'# Heading\n\nSome **bold** text.'}
          rows={10}
          spellCheck={false}
          className={inputCls}
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
        />
      </div>

      {result.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">⚠️ {result.error}</div>
      )}

      {/* 双栏:HTML + 渲染预览 */}
      {result.output && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">HTML</span>
              <CopyButton value={result.output} label="Copy" />
            </div>
            <pre
              className="overflow-x-auto rounded-lg border bg-slate-50 p-4 text-xs"
              style={{ borderColor: 'rgb(var(--border))' }}
            >
              <code>{result.output}</code>
            </pre>
          </div>
          <div>
            <span className="mb-2 block text-sm font-semibold text-slate-700">Preview</span>
            <div
              className="prose-content rounded-lg border p-4 text-sm"
              style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
              dangerouslySetInnerHTML={{ __html: result.output }}
            />
          </div>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        🔒 100% client-side — supports headings, lists, code, tables, links, bold, italic.
      </p>
    </div>
  )
}
