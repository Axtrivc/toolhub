'use client'

import { makeTextTool } from '../tools/makeTextTool'
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
      const query = qIndex >= 0 ? t.slice(qIndex + 1) : t
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
  transform: (t) => {
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
export const EmailExtractorClient = makeTextTool({
  slug: 'email-extractor',
  inputLabel: 'Text containing emails',
  outputLabel: 'Extracted emails',
  defaultInput: 'Contact us at hello@example.com or support@test.org for help.',
  transform: (t, locale) => {
    const matches = t.match(/[\w.+-]+@[\w-]+\.[\w.-]+/g) || []
    const unique = [...new Set(matches)]
    return unique.length > 0
      ? unique.join('\n')
      : tui('email-extractor', locale, 'noEmailsFound', 'No emails found')
  },
  note: '📧 Extracts all email addresses from any text. Removes duplicates automatically.',
})

// ── URL 提取器 ──
export const URLExtractorClient = makeTextTool({
  slug: 'url-extractor',
  inputLabel: 'Text containing URLs',
  outputLabel: 'Extracted URLs',
  defaultInput: 'Visit https://example.com or http://test.org/page?q=1 today!',
  transform: (t, locale) => {
    const matches =
      t.match(/https?:\/\/[^\s<>"']+/g)?.map((u) => {
        // 剥掉被句子标点污染的尾部;右括号仅在 URL 里没有左括号时剥(维基百科链接含括号)
        let cleaned = u.replace(/[.,;:!?]+$/, '')
        while (cleaned.endsWith(')') && !cleaned.includes('(')) cleaned = cleaned.slice(0, -1)
        return cleaned
      }) ?? []
    const unique = [...new Set(matches)]
    return unique.length > 0
      ? unique.join('\n')
      : tui('url-extractor', locale, 'noUrlsFound', 'No URLs found')
  },
  note: '🔗 Extracts all URLs from any text. Removes duplicates.',
})

// ── 文本差异比较 ──
export const TextDiffClient = makeTextTool({
  slug: 'text-diff',
  inputLabel: 'Format: text1 ||| text2',
  outputLabel: 'Comparison',
  defaultInput: 'the quick brown fox ||| the slow brown fox',
  transform: (t) => {
    const parts = t.split(/\s*\|\|\|\s*/)
    if (parts.length > 2) return '⚠️ Use exactly one " ||| " separator between the two texts'
    const [a = '', b = ''] = parts
    const aw = a.split(/\s+/).filter(Boolean)
    const bw = b.split(/\s+/).filter(Boolean)
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
      `Characters:        ${t.length}`,
      `Words:             ${countWords(t)}`,
      `Lines:             ${t ? t.split(/\r?\n/).length : 0}`,
      // Base64 把 3 字节编成 4 字符,不足 3 字节用 = 填充到 4 的倍数:
      // 长度恒为 4 * ceil(bytes / 3)(1 字节 → 4,2 字节 → 4,3 字节 → 4)
      `Base64 size:       ${4 * Math.ceil(bytes / 3)}`,
    ].join('\n')
  },
  note: '📏 Estimates storage size in different units. Useful before storing text in databases or APIs.',
})
