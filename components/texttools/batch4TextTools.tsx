'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { makeTextTool } from '../tools/makeTextTool'
import { CopyButton } from '@/components/CopyButton'
import { ResultActions } from '../ResultActions'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { countWords } from '@/lib/text-stats'

/** 第七批:开发者 + 文本工具 7 个 */

// ── URL 查询字符串解析 ──
export const URLQueryParserClient = makeTextTool({
  slug: 'url-query-parser',
  inputLabel: 'URL with query string',
  outputLabel: 'Parsed query parameters',
  defaultInput: 'https://example.com/search?q=hello&page=2&sort=desc',
  transform: (t) => {
    try {
      const qIndex = t.indexOf('?')
      // 裸绝对 URL(scheme://host,无 ?)查询串为空:R3 记录的"整条 URL 当 key"
      // 是误导性输出,直接返回空对象(原始 query 文本如 "?a=1" 或 "a=1&b=2" 不受影响)
      if (qIndex === -1 && /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(t.trim())) return JSON.stringify({}, null, 2)
      let query = qIndex >= 0 ? t.slice(qIndex + 1) : t
      // #fragment 不是查询串的一部分:剥掉 ? 之后出现的首个 # 及其后内容
      // (无 ? 的纯锚点 URL 同样只去掉锚点,不会把 fragment 混进参数)
      const hashIndex = query.indexOf('#')
      if (hashIndex >= 0) query = query.slice(0, hashIndex)
      const params = new URLSearchParams(query)
      // 重复 key 聚合成数组,而不是静默保留最后一个
      const obj: Record<string, string | string[]> = {}
      params.forEach((val, key) => {
        const prev = obj[key]
        if (prev === undefined) obj[key] = val
        else obj[key] = Array.isArray(prev) ? [...prev, val] : [prev, val]
      })
      return JSON.stringify(obj, null, 2)
    } catch {
      return '⚠️ Could not parse'
    }
  },
  note: '🔗 Extracts query parameters from a URL into a clean JSON object. Duplicate keys are collected into arrays.',
})

// ── HTML 标签删除 ──
export const HTMLTagStripperClient = makeTextTool({
  slug: 'html-tag-stripper',
  inputLabel: 'HTML source',
  outputLabel: 'Plain text (tags removed)',
  defaultInput: '<h1>Title</h1><p>This is <strong>bold</strong> text.</p>',
  transform: (t, locale) => {
    // DOMParser 全文档解析的耗时随输入线性增长,粘贴多 MB HTML 后每次击键
    // 都会全量重解析(工厂无防抖):超长输入直接友好拦截(text-diff 同款横幅式提示)
    if (t.length > 100_000) {
      return tui(
        'html-tag-stripper',
        locale,
        'tooLongNote',
        '⚠️ Input is too large to process here — keep it under about 100,000 characters.',
      )
    }
    // 用 DOMParser 解析(浏览器内运行,纯客户端):
    // 1) 先移除 script/style/noscript —— textContent 会原样带上其内部代码;
    // 2) 块级元素结尾补换行 —— 否则 <p>a</p><p>b</p> 粘连成一行。
    const doc = new DOMParser().parseFromString(t, 'text/html')
    doc.querySelectorAll('script, style, noscript, template').forEach((el) => el.remove())
    doc.querySelectorAll('br').forEach((br) => br.replaceWith(doc.createTextNode('\n')))
    doc
      .querySelectorAll('p, div, li, tr, h1, h2, h3, h4, h5, h6, blockquote, pre, section, article, header, footer, ul, ol, table')
      .forEach((el) => el.append('\n'))
    return (doc.body.textContent || '').replace(/\n{3,}/g, '\n\n').trim()
  },
  note: '🌐 Strips all HTML tags, leaving readable text. Uses the browser DOM parser — runs client-side only.',
})

// ── 字符频率统计 ──
export const CharacterFrequencyClient = makeTextTool({
  slug: 'character-frequency',
  inputLabel: 'Text to analyze',
  outputLabel: 'Character frequency',
  defaultInput: 'hello world',
  transform: (t) => {
    const counts: Record<string, number> = {}
    for (const ch of t) {
      if (ch.trim()) counts[ch] = (counts[ch] || 0) + 1
    }
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
    return sorted.map(([ch, n]) => `'${ch}'  →  ${n}`).join('\n')
  },
  note: '📊 Counts occurrences of each character, sorted by frequency. Useful for cryptanalysis and writing analysis.',
})

// ── Email 提取器 ──
/** 公共邮箱域名(个人免费邮箱):勾选过滤后只留企业专有域名,便于 B2B 名单清洗 */
const PUBLIC_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.fr', 'yahoo.de', 'yahoo.es', 'yahoo.co.uk', 'yahoo.co.jp',
  'hotmail.com', 'hotmail.fr', 'hotmail.de', 'hotmail.es', 'hotmail.co.uk', 'hotmail.it', 'outlook.com',
  'live.com', 'live.fr', 'live.de', 'msn.com', 'icloud.com', 'me.com', 'mac.com', 'aol.com',
  'proton.me', 'protonmail.com', 'pm.me', 'gmx.de', 'gmx.net', 'web.de', 'mail.com', 'zoho.com',
  'qq.com', 'foxmail.com', 'vip.qq.com', '126.com', '163.com', 'sina.com', 'sohu.com', '139.com', '189.cn', 'aliyun.com',
  'mail.ru', 'yandex.ru', 'yandex.com', 'list.ru', 'bk.ru', 'inbox.ru',
])

/** 提取全部邮箱:句末尾句点剥除 + 去重(保持出现顺序) */
function extractEmails(text: string): string[] {
  const matches = (text.match(/[\w.+-]+@[\w-]+\.[\w.-]+/g) || []).map((m) => m.replace(/\.+$/, ''))
  return [...new Set(matches)]
}

export function EmailExtractorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('email-extractor', locale, key, fb)
  // SSR/水合首帧恒英文默认示例;挂载后及 locale 切换时 pristine 输入替换为
  // 本地化示例(makeTextTool 同款机制),用户编辑过即永久失效
  const [text, setText] = useState('Contact us at hello@example.com or support@test.org for help.')
  const [format, setFormat] = useState<'newline' | 'comma'>('newline')
  const [filterPublic, setFilterPublic] = useState(false)
  const pristineRef = useRef(true)
  useEffect(() => {
    if (!pristineRef.current) return
    setText(tui('email-extractor', locale, 'defaultInput', 'Contact us at hello@example.com or support@test.org for help.'))
  }, [locale])

  const analysis = useMemo(() => {
    const all = extractEmails(text)
    const kept = filterPublic
      ? all.filter((e) => {
          const domain = e.split('@')[1]?.toLowerCase() ?? ''
          return !PUBLIC_EMAIL_DOMAINS.has(domain)
        })
      : all
    // 按域名折叠归类统计(按数量降序,同数量按域名 alphabetical 保证确定性)
    const byDomain = new Map<string, string[]>()
    for (const e of kept) {
      const d = (e.split('@')[1] ?? '').toLowerCase()
      byDomain.set(d, [...(byDomain.get(d) ?? []), e])
    }
    const groups = [...byDomain.entries()].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    const output = kept.length > 0 ? kept.join(format === 'comma' ? ', ' : '\n') : ''
    return { all, kept, groups, output, emptyMsg: text.trim() && kept.length === 0 }
  }, [text, filterPublic, format])

  // CSV:按域名折叠(域名, 数量, 明细),直接可进表格软件
  const csv =
    analysis.groups.length > 0
      ? 'Domain,Count,Emails\n' + analysis.groups.map(([d, list]) => `${d},${list.length},"${list.join('; ')}"`).join('\n')
      : ''

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="ee-in" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {L('inputLabel', 'Text containing emails')}
          </label>
          {text && (
            <button type="button" onClick={() => { pristineRef.current = false; setText('') }}
              className="-my-1 rounded-md px-2 py-1.5 text-xs text-slate-500 hover:text-red-500 dark:text-slate-400 sm:text-sm">
              {L('clear', 'Clear')}
            </button>
          )}
        </div>
        <textarea id="ee-in" value={text} spellCheck={false} rows={6}
          onChange={(e) => { pristineRef.current = false; setText(e.target.value) }}
          placeholder={L('placeholder', 'Paste text with email addresses…')}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
      </div>

      {/* 选项行:导出格式(换行 / 逗号抄送)+ 公共邮箱过滤 */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="inline-flex overflow-hidden rounded-lg border" style={{ borderColor: 'rgb(var(--border-strong))' }} role="group" aria-label={L('formatLabel', 'Export format')}>
          {([['newline', L('fmtNewline', 'Newline')], ['comma', L('fmtComma', 'Comma (for CC)')]] as const).map(([key, label]) => (
            <button key={key} type="button" onClick={() => setFormat(key)} aria-pressed={format === key}
              className={`px-3.5 py-1.5 text-sm font-medium transition-colors ${format === key ? 'text-white' : ''}`}
              style={format === key
                ? { backgroundColor: 'rgb(37 99 235)' }
                : { backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text-muted))' }}>
              {label}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={filterPublic} onChange={(e) => setFilterPublic(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-brand-600 dark:border-slate-600" />
          {L('filterPublic', 'Filter out public inboxes (Gmail, QQ, Yahoo…)')}
        </label>
      </div>

      {/* 输出区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('outputLabel', 'Extracted emails')}
            {analysis.kept.length > 0 && (
              <span className="ml-2 font-normal text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
                {L('foundN', '{n} unique').replace('{n}', analysis.kept.toLocaleString('en-US'))}
                {filterPublic && analysis.all.length > analysis.kept.length && (
                  ` · ${L('filteredN', '{n} public removed').replace('{n}', String(analysis.all.length - analysis.kept.length))}`
                )}
              </span>
            )}
          </label>
          <CopyButton value={analysis.output} disabled={!analysis.output} />
        </div>
        <textarea readOnly value={analysis.output || (analysis.emptyMsg ? L('noEmailsFound', 'No emails found') : '')} placeholder={L('resultPlaceholder', 'Result will appear here...')} rows={6}
          className="w-full rounded-lg border-2 p-4 font-mono text-sm outline-none"
          style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }} />
      </div>

      {/* 按域名折叠归类统计 */}
      {analysis.groups.length > 0 && (
        <div>
          <span className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('domainTitle', 'By domain')}
          </span>
          <div className="flex flex-wrap gap-2" role="status" aria-live="polite">
            {analysis.groups.map(([domain, list]) => (
              <span key={domain}
                className="rounded-full border px-3 py-1 font-mono text-xs"
                style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
                {domain} <strong style={{ color: 'rgb(var(--text))' }}>×{list.length}</strong>
              </span>
            ))}
          </div>
        </div>
      )}

      {csv && (
        <ResultActions summary={analysis.output} filename="emails.csv" downloadContent={csv} mime="text/csv;charset=utf-8;" copyLabel={L('exportCsv', 'Export to CSV')} />
      )}
      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '📧 Extracts all email addresses from any text. Deduplicates automatically. Comma output is ready for the CC field; the domain filter removes public inboxes (Gmail, QQ, Yahoo…) so business domains stand out.')}
      </p>
    </div>
  )
}

// ── URL 提取器 ──
/** 静态资源扩展名(图片/CSS/JS/字体等):过滤后只剩页面/接口链接 */
const STATIC_ASSET_RE = /\.(?:png|jpe?g|gif|svg|webp|avif|bmp|ico|css|js|mjs|cjs|map|jsonld|woff2?|ttf|otf|eot|mp4|webm|mov|avi|mp3|wav|ogg|pdf)(?:[?#].*)?$/i

/** 从任意 URL 提取主域名(hostname;截去子域,保留最后两段) */
function registrableDomain(u: string): string {
  try {
    const host = new URL(u).hostname.toLowerCase()
    const parts = host.split('.')
    return parts.length > 2 ? parts.slice(-2).join('.') : host
  } catch {
    return u
  }
}

export function URLExtractorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('url-extractor', locale, key, fb)
  const [text, setText] = useState('Visit https://example.com or http://test.org/page?q=1 today!')
  const [filterAssets, setFilterAssets] = useState(false)
  const [view, setView] = useState<'urls' | 'domains'>('urls')
  const pristineRef = useRef(true)
  useEffect(() => {
    if (!pristineRef.current) return
    setText(tui('url-extractor', locale, 'defaultInput', 'Visit https://example.com or http://test.org/page?q=1 today!'))
  }, [locale])

  const analysis = useMemo(() => {
    const matches =
      text.match(/https?:\/\/[^\s<>"']+/g)?.map((u) => {
        // 剥掉被句子标点污染的尾部;尾部右括号按计数剥到平衡为止——
        // 既保住 Wikipedia 内嵌括号 URL,又能剥掉包住链接的那层句子右括号
        let cleaned = u.replace(/[.,;:!?]+$/, '')
        while (cleaned.endsWith(')')) {
          const opens = (cleaned.match(/\(/g) || []).length
          const closes = (cleaned.match(/\)/g) || []).length
          if (closes > opens) cleaned = cleaned.slice(0, -1)
          else break
        }
        return cleaned
      }) ?? []
    const unique = [...new Set(matches)]
    const urls = filterAssets ? unique.filter((u) => !STATIC_ASSET_RE.test(u)) : unique
    // 唯一主域名聚合(数量降序,同数量按域名排序保证确定性)
    const counts = new Map<string, number>()
    for (const u of urls) counts.set(registrableDomain(u), (counts.get(registrableDomain(u)) ?? 0) + 1)
    const domains = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    const output = urls.length === 0
      ? ''
      : view === 'domains'
        ? domains.map(([d, n]) => `${d} ×${n}`).join('\n')
        : urls.join('\n')
    return { total: unique.length, urls, domains, output, emptyMsg: text.trim() && urls.length === 0 }
  }, [text, filterAssets, view])

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="ue-in" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {L('inputLabel', 'Text containing URLs')}
          </label>
          {text && (
            <button type="button" onClick={() => { pristineRef.current = false; setText('') }}
              className="-my-1 rounded-md px-2 py-1.5 text-xs text-slate-500 hover:text-red-500 dark:text-slate-400 sm:text-sm">
              {L('clear', 'Clear')}
            </button>
          )}
        </div>
        <textarea id="ue-in" value={text} spellCheck={false} rows={6}
          onChange={(e) => { pristineRef.current = false; setText(e.target.value) }}
          placeholder={L('placeholder', 'Paste text with URLs…')}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
      </div>

      {/* 选项行:视图切换(完整 URL / 唯一主域名)+ 静态资源过滤 */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="inline-flex overflow-hidden rounded-lg border" style={{ borderColor: 'rgb(var(--border-strong))' }} role="group" aria-label={L('viewLabel', 'View')}>
          {([['urls', L('viewUrls', 'Full URLs')], ['domains', L('viewDomains', 'Unique domains')]] as const).map(([key, label]) => (
            <button key={key} type="button" onClick={() => setView(key)} aria-pressed={view === key}
              className={`px-3.5 py-1.5 text-sm font-medium transition-colors ${view === key ? 'text-white' : ''}`}
              style={view === key
                ? { backgroundColor: 'rgb(37 99 235)' }
                : { backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text-muted))' }}>
              {label}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={filterAssets} onChange={(e) => setFilterAssets(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-brand-600 dark:border-slate-600" />
          {L('filterAssets', 'Filter static assets (images / CSS / JS / fonts)')}
        </label>
      </div>

      {/* 输出区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('outputLabel', 'Extracted URLs')}
            {analysis.urls.length > 0 && (
              <span className="ml-2 font-normal text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
                {view === 'domains'
                  ? L('domainsN', '{n} unique domains').replace('{n}', String(analysis.domains.length))
                  : L('foundN', '{n} unique').replace('{n}', analysis.urls.length.toLocaleString('en-US'))}
                {filterAssets && analysis.total > analysis.urls.length && (
                  ` · ${L('assetsN', '{n} assets hidden').replace('{n}', String(analysis.total - analysis.urls.length))}`
                )}
              </span>
            )}
          </label>
          <CopyButton value={analysis.output} disabled={!analysis.output} />
        </div>
        <textarea readOnly value={analysis.output || (analysis.emptyMsg ? L('noUrlsFound', 'No URLs found') : '')} placeholder={L('resultPlaceholder', 'Result will appear here...')} rows={6}
          className="w-full rounded-lg border-2 p-4 font-mono text-sm outline-none"
          style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }} />
      </div>

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🔗 Extracts all URLs from any text. Deduplicates automatically, strips trailing sentence punctuation, can hide static assets (images/CSS/JS/fonts) and group results by unique domain.')}
      </p>
    </div>
  )
}

// ── 文本差异比较 ──
export const TextDiffClient = makeTextTool({
  slug: 'text-diff',
  inputLabel: 'Format: text1 ||| text2',
  outputLabel: 'Comparison',
  defaultInput: 'the quick brown fox ||| the slow brown fox',
  transform: (t, locale) => {
    // 只在首个分隔符处切开:第二段文本自身含 ||| 时不再整单报错
    const sepIdx = t.indexOf('|||')
    const a = sepIdx === -1 ? t : t.slice(0, sepIdx).replace(/\s+$/, '')
    const b = sepIdx === -1 ? '' : t.slice(sepIdx + 3).replace(/^\s+/, '')
    const aw = a.split(/\s+/).filter(Boolean)
    const bw = b.split(/\s+/).filter(Boolean)
    // LCS 是 O(n×m) 且每次击键都重算:超长输入直接友好提示,避免页面卡死
    if (aw.length > 3000 || bw.length > 3000 || a.length > 20000 || b.length > 20000) {
      return tui(
        'text-diff',
        locale,
        'tooLongNote',
        '⚠️ These texts are too long to compare here — keep each side under about 3,000 words (or 20,000 characters).',
      )
    }
    // 词级 LCS 对齐:中间插入/删除后,后续相同词不再被逐位误报为差异。
    // dp[i][j] = aw[i:] 与 bw[j:] 的最长公共子序列长度
    const n = aw.length
    const m = bw.length
    const dp: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0))
    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        dp[i][j] = aw[i] === bw[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1])
      }
    }
    const lines: string[] = []
    let i = 0
    let j = 0
    while (i < n && j < m) {
      if (aw[i] === bw[j]) {
        lines.push(`  =  ${aw[i]}`)
        i++
        j++
      } else if (dp[i + 1][j] >= dp[i][j + 1]) {
        lines.push(`- ${aw[i]}`)
        i++
      } else {
        lines.push(`+ ${bw[j]}`)
        j++
      }
    }
    while (i < n) {
      lines.push(`- ${aw[i]}`)
      i++
    }
    while (j < m) {
      lines.push(`+ ${bw[j]}`)
      j++
    }
    return lines.join('\n')
  },
  note: '🔍 Compare two texts word by word. Separate with " ||| ". Lines starting with - show original, + show changed.',
})

// ── 文本大小估算 ──
export const TextSizeEstimatorClient = makeTextTool({
  slug: 'text-size-estimator',
  inputLabel: 'Your text',
  outputLabel: 'Size estimates',
  defaultInput: 'Hello, this is some sample text to measure.',
  transform: (t) => {
    const bytes = new Blob([t]).size
    return [
      `Bytes (UTF-8):     ${bytes}`,
      `Kilobytes (KB):    ${(bytes / 1024).toFixed(3)}`,
      `Characters:        ${[...t].length}`,
      `Words:             ${countWords(t)}`,
      `Lines:             ${t ? t.split(/\r?\n/).length : 0}`,
      // Base64 把 3 字节编成 4 字符,不足 3 字节用 = 填充到 4 的倍数:
      // 长度恒为 4 * ceil(bytes / 3)(1 字节 → 4,2 字节 → 4,3 字节 → 4)
      `Base64 size:       ${4 * Math.ceil(bytes / 3)}`,
    ].join('\n')
  },
  note: '📏 Estimates storage size in different units. Useful before storing text in databases or APIs.',
})
