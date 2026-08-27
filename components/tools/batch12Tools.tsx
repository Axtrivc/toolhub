'use client'

import { useEffect, useMemo, useState } from 'react'
import { CalculatorNote, ResultCard } from '../calculator/CalculatorField'
import { ResultActions } from '../ResultActions'
import { CopyButton } from '@/components/CopyButton'
import { fmtNum } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

import { getCalculatorSample } from '@/lib/tool-samples'

/** 读取示例(无则 undefined);统一 selVars 内联主题样式 */
function getCalculatorSampleSafe(slug: string): Record<string, string> | undefined {
  return getCalculatorSample(slug)
}
const selVars = { borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }

/**
 * 第十二批:2025-08 新增第三批(自定义 client)
 * Keycode / MIME lookup / XML formatter / Markdown TOC / Log filter
 * ASCII table / Screen time / Reading level / HMAC
 */

// ── 键盘事件测试器 ──
export function KeycodeInfoClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('keycode-info', locale, key, fb)
  const [last, setLast] = useState<KeyboardEvent | null>(null)
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // 只拦截会滚动页面/触发浏览器行为的导航键;修饰键单按也记录
      if (['Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Space'].includes(e.key)) {
        e.preventDefault()
      }
      setLast(e)
      setHistory((h) => [`${e.key} · ${e.code} · ${e.keyCode}`, ...h].slice(0, 8))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const rows: Array<[string, string]> = last
    ? [
        ['event.key', String(last.key)],
        ['event.code', String(last.code)],
        ['keyCode (legacy)', String(last.keyCode)],
        ['modifiers', [
          last.ctrlKey && 'Ctrl', last.metaKey && 'Meta/Cmd',
          last.shiftKey && 'Shift', last.altKey && 'Alt',
        ].filter(Boolean).join(' + ') || L('noneMod', 'none')],
        ['repeat', last.repeat ? 'true' : 'false'],
      ]
    : []

  return (
    <div className="space-y-5">
      <div
        tabIndex={0}
        role="region"
        aria-label={L('pressArea', 'Press any key here')}
        className="flex min-h-36 cursor-text items-center justify-center rounded-xl border-2 border-dashed p-6 text-center outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-500/30"
        style={{ borderColor: 'rgb(var(--border-strong))' }}
      >
        <div>
          <div className="text-4xl font-bold" style={{ color: 'rgb(var(--text))' }}>
            {last ? String(last.key) : L('pressPrompt', 'Click here, then press any key')}
          </div>
          {last && <div className="mt-1 font-mono text-xs" style={{ color: 'rgb(var(--text-faint))' }}>{String(last.code)}</div>}
        </div>
      </div>

      {rows.length > 0 && (
        <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {rows.map(([k, val]) => (
            <ResultCard key={k} label={k} value={val} highlight={k === 'event.key'} />
          ))}
        </div>
      )}

      {history.length > 0 && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('recentKeys', 'Recent keys')}</span>
            {/* A3:-my-1 抵消 padding 增量,触控高度补到 ~32px(与 makeTextTool 的 Clear 同款) */}
            <button type="button" onClick={() => setHistory([])} className="-my-1 rounded-md px-2 py-1.5 text-xs text-slate-400 hover:text-red-500 dark:text-slate-500">
              {L('clearHistory', 'Clear')}
            </button>
          </div>
          <ul className="overflow-hidden rounded-lg border border-border bg-card font-mono text-xs">
            {history.map((line, i) => (
              <li key={`${line}-${i}`} className="border-b px-4 py-2 last:border-b-0" style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text))' }}>
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}
      <CalculatorNote>{L('note', '⌨️ event.key is what you should match in modern code ("a", "Enter"); event.code is the physical key regardless of layout (KeyA); keyCode exists only for legacy support.')}</CalculatorNote>
    </div>
  )
}

// ── MIME 类型查询 ──
const MIME_DB: [string, string][] = [
  ['.aac', 'audio/aac'], ['.avi', 'video/x-msvideo'], ['.bin', 'application/octet-stream'],
  ['.bmp', 'image/bmp'], ['.bz2', 'application/x-bzip2'], ['.css', 'text/css'],
  ['.csv', 'text/csv'], ['.doc', 'application/msword'],
  ['.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  ['.eot', 'application/vnd.ms-fontobject'], ['.epub', 'application/epub+zip'],
  ['.gif', 'image/gif'], ['.gz', 'application/gzip'], ['.htm/.html', 'text/html'],
  ['.ico', 'image/vnd.microsoft.icon'],
  ['.ics', 'text/calendar'], ['.jar', 'application/java-archive'],
  ['.jpeg/.jpg', 'image/jpeg'], ['.js', 'text/javascript'], ['.json', 'application/json'],
  ['.jsonld', 'application/ld+json'], ['.mjs', 'text/javascript'],
  ['.mp3', 'audio/mpeg'], ['.mp4', 'video/mp4'], ['.mpeg', 'video/mpeg'],
  ['.odp', 'application/vnd.oasis.opendocument.presentation'],
  ['.ods', 'application/vnd.oasis.opendocument.spreadsheet'],
  ['.odt', 'application/vnd.oasis.opendocument.text'],
  ['.oga', 'audio/ogg'], ['.ogv', 'video/ogg'], ['.otf', 'font/otf'],
  ['.png', 'image/png'], ['.pdf', 'application/pdf'], ['.rar', 'application/vnd.rar'],
  ['.rtf', 'application/rtf'], ['.svg', 'image/svg+xml'], ['.tar', 'application/x-tar'],
  ['.tif/.tiff', 'image/tiff'], ['.ts', 'video/mp2t'],
  ['.ttf', 'font/ttf'],
  ['.txt', 'text/plain'], ['.wasm', 'application/wasm'], ['.wav', 'audio/wav'],
  ['.weba', 'audio/webm'], ['.webm', 'video/webm'], ['.webmanifest', 'application/manifest+json'],
  ['.webp', 'image/webp'], ['.woff', 'font/woff'], ['.woff2', 'font/woff2'],
  ['.xhtml', 'application/xhtml+xml'], ['.xls', 'application/vnd.ms-excel'],
  ['.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  ['.xml', 'application/xml'], ['.zip', 'application/zip'], ['.7z', 'application/x-7z-compressed'],
]

export function MimeTypeLookupClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('mime-type-lookup', locale, key, fb)
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()

  const results = useMemo(() => {
    const db = MIME_DB as Array<[string, string]>
    if (!query) return db
    return db.filter(([ext, mime]) => ext.includes(query) || mime.toLowerCase().includes(query))
  }, [query])

  return (
    <div className="space-y-5">
      <input
        type="search" value={q} onChange={(e) => setQ(e.target.value)}
        placeholder={L('searchPlaceholder', 'Search extension (.svg) or type (image/)…')}
        aria-label={L('searchPlaceholder', 'Search extension or MIME type')}
        className="w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2"
        style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
      />
      <div className="overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}>
              <th className="px-4 py-2 font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('thExt', 'Extension')}</th>
              <th className="px-4 py-2 font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('thMime', 'MIME type')}</th>
              <th aria-hidden="true" className="w-16 px-4 py-2" />
            </tr>
          </thead>
          <tbody>
            {results.map(([ext, mime]) => (
              <tr key={ext} className="border-b last:border-b-0" style={{ borderColor: 'rgb(var(--border))' }}>
                <td className="px-4 py-2 font-mono text-xs" style={{ color: 'rgb(var(--text))' }}>{ext}</td>
                <td className="px-4 py-2 font-mono text-xs" style={{ color: 'rgb(var(--text))' }}>{mime}</td>
                <td className="px-2 py-2 text-right"><CopyButton value={mime} /></td>
              </tr>
            ))}
            {results.length === 0 && (
              <tr><td colSpan={3} className="px-4 py-4 text-center text-sm" style={{ color: 'rgb(var(--text-faint))' }}>{L('noMatch', 'No matching types')}</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <CalculatorNote>{L('note', '🌐 Common gotchas: .js is now officially text/javascript (not application/javascript), fonts are font/* since 2017, and .webp is image/webp — some old server defaults still get these wrong.')}</CalculatorNote>
    </div>
  )
}

// ── XML 格式化/校验 ──
/** B2 冷启动样例:tool-samples 未收录 xml-formatter(开局纯空白 + 无 Load Sample)。
 *  组件内内置短示例,覆盖属性/嵌套/文本节点三类节点,点 Beautify 即有意义结果。 */
const DEFAULT_XML = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="bk101">
    <author>Gambardella, Matthew</author>
    <title>XML Developer's Guide</title>
    <price currency="USD">44.95</price>
  </book>
</catalog>`

function formatXmlNode(node: Node, depth: number, indent: number): string {
  const pad = ' '.repeat(depth * indent)
  if (node.nodeType === Node.TEXT_NODE) {
    const t = (node.textContent ?? '').trim()
    return t ? `\n${pad}${t}` : ''
  }
  // CDATA 原样保留(不做空白裁剪):此前美化会把 CDATA 内容整个丢弃,
  // 而 minify(XMLSerializer)却保留 —— 同一文档两种模式输出不一致且丢数据
  if (node.nodeType === Node.CDATA_SECTION_NODE) {
    const t = node.textContent ?? ''
    return t ? `\n${pad}<![CDATA[${t}]]>` : ''
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return ''
  const el = node as Element
  const attrs = Array.from(el.attributes).map((a) => ` ${a.name}="${a.value.replace(/"/g, '&quot;')}"`).join('')
  const children = Array.from(el.childNodes)
  const hasElementChild = children.some((c) => c.nodeType === Node.ELEMENT_NODE)
  if (children.length === 0 || (children.length === 1 && children[0].nodeType === Node.TEXT_NODE && !(children[0].textContent ?? '').trim())) {
    return `\n${pad}<${el.tagName}${attrs} />`
  }
  const inner = children.map((c) => formatXmlNode(c, hasElementChild ? depth + 1 : 0, indent)).join('')
  if (!hasElementChild) {
    // 纯文本子节点保持一行
    return `\n${pad}<${el.tagName}${attrs}>${inner}\n${pad}</${el.tagName}>`
  }
  return `\n${pad}<${el.tagName}${attrs}>${inner}\n${pad}</${el.tagName}>`
}

export function XmlFormatterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('xml-formatter', locale, key, fb)
  const sample = getCalculatorSampleSafe('xml-formatter')
  const [xml, setXml] = useState(sample?.xml ?? DEFAULT_XML)
  const [indent, setIndent] = useState(2)
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const transform = (mode: 'format' | 'minify') => {
    setError('')
    try {
      const doc = new DOMParser().parseFromString(xml, 'application/xml')
      const errEl = doc.querySelector('parsererror')
      if (errEl) throw new Error(errEl.textContent?.split('\n')[0] || 'Invalid XML')
      if (mode === 'minify') {
        setOutput(new XMLSerializer().serializeToString(doc))
      } else {
        setOutput(formatXmlNode(doc.documentElement, 0, indent).trimStart())
      }
    } catch (e) {
      setError((e as Error).message)
      setOutput('')
    }
  }

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="xml-in" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Your XML')}</label>
          {sample && <button type="button" onClick={() => setXml(sample.xml)} className="btn btn-secondary px-3 py-1.5 text-xs">{L('loadSample', 'Load Sample')}</button>}
        </div>
        <textarea id="xml-in" value={xml} onChange={(e) => setXml(e.target.value)} rows={8} spellCheck={false}
          placeholder={'<catalog><book id=\"bk101\"><author>Gambardella</author></book></catalog>'}
          className="w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2"
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => transform('format')} disabled={!xml.trim()} className="btn btn-primary">{L('beautify', 'Beautify')}</button>
        <button type="button" onClick={() => transform('minify')} disabled={!xml.trim()} className="btn btn-secondary">{L('minify', 'Minify')}</button>
        <label className="flex items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('indentLabel', 'Indent')}
          <select value={indent} onChange={(e) => setIndent(Number(e.target.value))} aria-label={L('indentLabel', 'Indent')}
            className="rounded border px-2 py-1" style={selVars}>
            {[2, 4].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
      </div>

      {error && (
        <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 p-4 font-mono text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">⚠️ {error}</p>
      )}
      {output && (
        <div role="status" aria-live="polite">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('outputLabel', 'Result')}</span>
            <CopyButton value={output} />
          </div>
          <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{output}</pre>
        </div>
      )}
      <ResultActions summary={output} filename="formatted.xml" downloadContent={output} mime="application/xml;charset=utf-8;" />
      <CalculatorNote>{L('note', '📄 Parsing uses your browser’s own XML engine — namespace-aware and spec-compliant. Whitespace-only text between elements is discarded when beautifying.')}</CalculatorNote>
    </div>
  )
}

// ── Markdown TOC 生成器 ──
/** B2 冷启动样例:tool-samples 未收录本工具,内置一份含 H2/H3 的短文档,开局即出 TOC */
const DEFAULT_TOC_MD = '## Install\n\n## Usage\n\n### Command-line flags\n\n## FAQ'

function githubSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[`*_~[\]()#]/g, '') // 去行内格式与括号
    .replace(/[\s]+/g, '-')
    .replace(/[^\p{L}\p{N}\-_\u00c0-\uffff]/gu, '')
}

export function MarkdownTocGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('markdown-toc-generator', locale, key, fb)
  const sample = getCalculatorSampleSafe('markdown-toc-generator')
  const [md, setMd] = useState(sample?.md ?? DEFAULT_TOC_MD)
  const [maxDepth, setMaxDepth] = useState(3)

  const { toc, count } = useMemo(() => {
    const lines = md.split(/\r?\n/)
    const items: string[] = []
    let inCode = false
    const seen = new Map<string, number>()
    for (const line of lines) {
      if (/^```/.test(line.trim())) { inCode = !inCode; continue }
      if (inCode) continue
      const m = /^(#{1,6})\s+(.+?)\s*#*$/.exec(line)
      if (!m) continue
      const depth = m[1].length
      if (depth > maxDepth || depth < 2) continue
      // GitHub slug:去格式、小写、空格→-,重复标题加 -1 后缀
      const plain = m[2].replace(/[*_`~]/g, '').replace(/\[(.+?)\]\(.*?\)/g, '$1').trim()
      const base = githubSlug(plain)
      const n = (seen.get(base) ?? 0) + 1
      seen.set(base, n)
      const slug = n > 1 ? `${base}-${n - 1}` : base
      items.push(`${'  '.repeat(depth - 2)}- [${plain}](#${slug})`)
    }
    return { toc: items.join('\n'), count: items.length }
  }, [md, maxDepth])

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="toc-md" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Your Markdown')}</label>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('depthLabel', 'Max heading level')}
              <select value={maxDepth} onChange={(e) => setMaxDepth(Number(e.target.value))} aria-label={L('depthLabel', 'Max heading level')}
                className="rounded border px-2 py-1" style={selVars}>
                {[2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{`H${n}`}</option>)}
              </select>
            </label>
            {sample && <button type="button" onClick={() => setMd(sample.md)} className="btn btn-secondary px-3 py-1.5 text-xs">{L('loadSample', 'Load Sample')}</button>}
          </div>
        </div>
        <textarea id="toc-md" value={md} onChange={(e) => setMd(e.target.value)} rows={10} spellCheck={false}
          placeholder={'## Install\n\n## Usage\n\n### Options'}
          className="w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2"
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
      </div>

      {count > 0 && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('outputLabel', 'Table of contents')} · {count}
            </span>
            <CopyButton value={toc} />
          </div>
          <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{toc}</pre>
        </div>
      )}
      {md && count === 0 && (
        <p className="text-sm" style={{ color: 'rgb(var(--text-faint))' }}>{L('noHeadings', 'No H2-H6 headings found above the chosen depth.')}</p>
      )}
      <CalculatorNote>{L('note', '📑 Slugs follow GitHub’s algorithm: lowercase, spaces to dashes, punctuation stripped, and duplicate headings get -1/-2 suffixes — so anchor links actually land on the right heading.')}</CalculatorNote>
    </div>
  )
}
