'use client'

import { useState, useMemo, useCallback } from 'react'
import DOMPurify from 'dompurify'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Markdown to HTML Converter —— 手写 CommonMark 子集 + GFM 表格
 *
 * 支持:标题 H1-H6、粗体/斜体/删除线、行内代码、代码块(```lang)、
 * 引用、有序/无序列表、链接(含 [t](url "title") 与 GFM 裸链接自动链接)、图片、水平线、GFM 表格。
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

[ToolHub with a title](https://example.com "Official site")

Bare URL: https://example.com
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

/** 行内格式:粗体/斜体/删除线/代码/链接(含 title)/图片/GFM 裸链接自动链接 */
function renderInline(text: string): string {
  let s = escapeHtml(text)
  // 行内代码 `code`:先摘出为占位符,内容不再被后续规则改写
  const codes: string[] = []
  s = s.replace(/`([^`]+)`/g, (_m, code) => {
    codes.push(code)
    return `\uE000${codes.length - 1}\uE001`
  })
  // 已生成的 HTML 标签同样摘出为占位符,避免后面的裸链接自动链接把 href 里的 URL 再包一层 <a>
  const tags: string[] = []
  const stash = (html: string) => {
    tags.push(html)
    return `\uE002${tags.length - 1}\uE003`
  }
  // 图片 ![alt](url) — 先于链接。不安全 URL 退化为纯 alt 文本。
  // 注:s 已整体转义,url/alt 均为已转义串,可直接进属性(勿二次 escapeHtml,否则 &amp; 会变 &amp;amp;)。
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_m, alt, url) => {
    if (!isSafeUrl(url)) return alt
    return stash(`<img src="${url}" alt="${alt}" />`)
  })
  // 链接 [text](url) 或 [text](url "title")。不安全 URL(javascript: 等)退化为纯文本,不渲染 href。
  // 源码里的 "title" 此刻已是 &quot;title&quot;(整体转义过),title 同样为已转义串,可直接进属性。
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;(.*?)&quot;)?\)/g, (_m, txt, url, title) => {
    if (!isSafeUrl(url)) return txt
    const t = title ? ` title="${title}"` : ''
    return stash(`<a href="${url}"${t}>${txt}</a>`)
  })
  // GFM 自动链接:裸 http/https 文本 → <a>。剥掉尾部标点(句点/逗号等);
  // URL 内含未闭合 '(' 时保留尾部 ')'(wiki 风格括号)。
  s = s.replace(/\bhttps?:\/\/[^\s<]+/g, (m) => {
    let url = m
    let trailing = ''
    const t = url.match(/[.,;:!?)\]]+$/)
    if (t) {
      trailing = t[0]
      url = url.slice(0, -trailing.length)
      let open = (url.match(/\(/g) || []).length
      while (trailing.startsWith(')') && open > 0) {
        url += ')'
        trailing = trailing.slice(1)
        open--
      }
    }
    return `<a href="${url}">${url}</a>${trailing}`
  })
  // 删除线 ~~text~~
  s = s.replace(/~~([^~]+)~~/g, '<del>$1</del>')
  // 粗体 **text**
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  // 斜体 *text*
  s = s.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')
  // 还原行内代码与暂存标签占位符
  s = s.replace(/\uE000(\d+)\uE001/g, (_m, idx) => `<code>${codes[Number(idx)] ?? ''}</code>`)
  s = s.replace(/\uE002(\d+)\uE003/g, (_m, idx) => tags[Number(idx)] ?? '')
  return s
}

interface MdResult {
  html: string
}

// 大文档防线:转换 + DOMPurify 消毒同步跑在每次输入上,超长文档会明显卡顿,
// 预览端还会把全部 HTML 挂进 DOM。100k 上限与 line-diff 等工具口径一致。
const MAX_INPUT_LEN = 100_000

/** 把 markdown 文本转成 HTML(逐行状态机) */
function markdownToHtml(md: string): string {
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  const out: string[] = []
  let i = 0
  const n = lines.length

  // 列表状态:栈式管理,按缩进支持嵌套;每层 li 延迟闭合以容纳嵌套列表
  const listStack: { type: 'ul' | 'ol'; indent: number; liOpen: boolean }[] = []
  const closeLi = () => {
    const top = listStack[listStack.length - 1]
    if (top?.liOpen) {
      out.push('</li>')
      top.liOpen = false
    }
  }
  const closeListTo = (indent: number) => {
    while (listStack.length && listStack[listStack.length - 1].indent > indent) {
      closeLi()
      out.push(`</${listStack.pop()!.type}>`)
    }
  }
  const closeList = () => {
    while (listStack.length) {
      closeLi()
      out.push(`</${listStack.pop()!.type}>`)
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

    // 无序列表 - / * / +(有序列表 1. 同一状态机处理,支持缩进嵌套)
    const ulMatch = line.match(/^(\s*)[-*+]\s+(.*)$/)
    const olMatch = ulMatch ? null : line.match(/^(\s*)\d+\.\s+(.*)$/)
    if (ulMatch || olMatch) {
      const m = (ulMatch ?? olMatch)!
      const type: 'ul' | 'ol' = ulMatch ? 'ul' : 'ol'
      const indent = m[1].length
      const item = m[2]
      closeListTo(indent)
      const top = listStack[listStack.length - 1]
      let openedNested = false
      if (!top || indent > top.indent) {
        // 嵌套列表在父 li 内展开,父 li 不闭合
        out.push(`<${type}>`)
        listStack.push({ type, indent, liOpen: false })
        openedNested = true
      } else if (top.type !== type) {
        closeLi()
        out.push(`</${top.type}>`)
        listStack.pop()
        out.push(`<${type}>`)
        listStack.push({ type, indent, liOpen: false })
      }
      if (!openedNested) closeLi()
      // 任务列表项(仅无序列表)
      const taskMatch = type === 'ul' ? item.match(/^\[(x| )\]\s+(.*)$/i) : null
      if (taskMatch) {
        const checked = taskMatch[1].toLowerCase() === 'x'
        out.push(`<li><input type="checkbox" disabled${checked ? ' checked' : ''} /> ${renderInline(taskMatch[2])}`)
      } else {
        out.push(`<li>${renderInline(item)}`)
      }
      listStack[listStack.length - 1].liOpen = true
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
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('markdown-to-html', locale, key, fb)

  const [input, setInput] = useState('')

  const result = useMemo<{ output?: string; error?: string; truncated?: boolean }>(() => {
    if (input.length > MAX_INPUT_LEN) return { truncated: true }
    if (!input.trim()) return {}
    try {
      // 生成器本身已做转义 + URL 协议白名单,这里再过一道 DOMPurify 白名单消毒,
      // 作为 dangerouslySetInnerHTML 前的纵深防御,防未来规则改动引入 XSS。
      // (初始输入为空,SSR 不会走到这里;sanitize 实际在浏览器执行。)
      return { output: DOMPurify.sanitize(markdownToHtml(input)) }
    } catch (e) {
      return { error: e instanceof Error ? e.message : L('couldNotConvert', 'Could not convert Markdown') }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, locale])

  const handleLoadSample = useCallback(() => setInput(SAMPLE_MD), [])

  const inputCls =
    'w-full rounded-lg border p-4 font-mono text-xs shadow-sm outline-none transition focus:ring-2'

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="md-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {L('inputLabel', 'Markdown')}
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
            {input && (
              <button
                type="button"
                onClick={() => setInput('')}
                className="-my-1 rounded-md px-2 py-1.5 text-xs text-slate-400 hover:text-red-500 sm:text-sm"
              >
                {L('clear', 'Clear')}
              </button>
            )}
          </div>
        </div>
        <textarea
          id="md-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={L('placeholder', '# Heading\n\nSome **bold** text.')}
          rows={10}
          spellCheck={false}
          className={inputCls}
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
        />
      </div>

      {result.truncated && (
        <p role="alert" className="rounded-lg border-2 p-4 text-sm" style={{ borderColor: 'rgb(253 230 138)', backgroundColor: 'rgb(254 249 195 / 0.4)', color: 'rgb(var(--text))' }}>
          {L('tooLong', '⚠️ Input exceeds the supported size (100,000 characters). Trim the input to convert it.')}
        </p>
      )}

      {result.error && (
        <div role="status" className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">⚠️ {result.error}</div>
      )}

      {/* 双栏:HTML + 渲染预览 */}
      {result.output && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>HTML</span>
              <CopyButton value={result.output} label={L('copy', 'Copy')} />
            </div>
            <pre
              className="max-h-96 overflow-auto rounded-lg border bg-slate-50 p-4 text-xs dark:bg-slate-800/60"
              style={{ borderColor: 'rgb(var(--border))' }}
            >
              <code>{result.output}</code>
            </pre>
          </div>
          <div>
            <span className="mb-2 block text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('preview', 'Preview')}</span>
            <div
              className="prose-content max-h-96 overflow-y-auto rounded-lg border p-4 text-sm"
              style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
              dangerouslySetInnerHTML={{ __html: result.output }}
            />
          </div>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🔒 100% client-side — supports headings, lists, code, tables, links, bold, italic.')}
      </p>
    </div>
  )
}
