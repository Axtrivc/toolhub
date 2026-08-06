'use client'

import { makeTextTool } from '../tools/makeTextTool'

/** 第七批:开发者 + 文本工具 7 个 */

// ── URL 查询字符串解析 ──
export const URLQueryParserClient = makeTextTool({
  inputLabel: 'URL with query string',
  outputLabel: 'Parsed query parameters',
  defaultInput: 'https://example.com/search?q=hello&page=2&sort=desc',
  transform: (t) => {
    try {
      const qIndex = t.indexOf('?')
      const query = qIndex >= 0 ? t.slice(qIndex + 1) : t
      const params = new URLSearchParams(query)
      const obj: Record<string, string> = {}
      params.forEach((val, key) => { obj[key] = val })
      return JSON.stringify(obj, null, 2)
    } catch {
      return '⚠️ Could not parse'
    }
  },
  note: '🔗 Extracts query parameters from a URL into a clean JSON object.',
})

// ── HTML 标签删除 ──
export const HTMLTagStripperClient = makeTextTool({
  inputLabel: 'HTML source',
  outputLabel: 'Plain text (tags removed)',
  defaultInput: '<h1>Title</h1><p>This is <strong>bold</strong> text.</p>',
  transform: (t) => {
    // 用 DOMParser 解析(浏览器内运行,纯客户端)并取 body.textContent,
    // 自动剥离所有标签与脚本内容。<script> 内的代码不会作为文本返回。
    const doc = new DOMParser().parseFromString(t, 'text/html')
    return doc.body.textContent || ''
  },
  note: '🌐 Strips all HTML tags, leaving readable text. Uses the browser DOM parser — runs client-side only.',
})

// ── 字符频率统计 ──
export const CharacterFrequencyClient = makeTextTool({
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
  inputLabel: 'Text containing emails',
  outputLabel: 'Extracted emails',
  defaultInput: 'Contact us at hello@example.com or support@test.org for help.',
  transform: (t) => {
    const matches = t.match(/[\w.+-]+@[\w-]+\.[\w.-]+/g) || []
    const unique = [...new Set(matches)]
    return unique.length > 0 ? unique.join('\n') : 'No emails found'
  },
  note: '📧 Extracts all email addresses from any text. Removes duplicates automatically.',
})

// ── URL 提取器 ──
export const URLExtractorClient = makeTextTool({
  inputLabel: 'Text containing URLs',
  outputLabel: 'Extracted URLs',
  defaultInput: 'Visit https://example.com or http://test.org/page?q=1 today!',
  transform: (t) => {
    const matches = t.match(/https?:\/\/[^\s<>"']+/g) || []
    const unique = [...new Set(matches)]
    return unique.length > 0 ? unique.join('\n') : 'No URLs found'
  },
  note: '🔗 Extracts all URLs from any text. Removes duplicates.',
})

// ── 文本差异比较 ──
export const TextDiffClient = makeTextTool({
  inputLabel: 'Format: text1 ||| text2',
  outputLabel: 'Comparison',
  defaultInput: 'the quick brown fox ||| the slow brown fox',
  transform: (t) => {
    const [a = '', b = ''] = t.split(/\s*\|\|\|\s*/)
    const aWords = a.split(/\s+/).filter(Boolean)
    const bWords = b.split(/\s+/).filter(Boolean)
    const maxLen = Math.max(aWords.length, bWords.length)
    const lines: string[] = []
    for (let i = 0; i < maxLen; i++) {
      const aw = aWords[i] ?? '(none)'
      const bw = bWords[i] ?? '(none)'
      if (aw === bw) lines.push(`  =  ${aw}`)
      else lines.push(`- ${aw}  →  + ${bw}`)
    }
    return lines.join('\n')
  },
  note: '🔍 Compare two texts word by word. Separate with " ||| ". Lines starting with - show original, + show changed.',
})

// ── 文本大小估算 ──
export const TextSizeEstimatorClient = makeTextTool({
  inputLabel: 'Your text',
  outputLabel: 'Size estimates',
  defaultInput: 'Hello, this is some sample text to measure.',
  transform: (t) => {
    const bytes = new Blob([t]).size
    return [
      `Bytes (UTF-8):     ${bytes}`,
      `Kilobytes (KB):    ${(bytes / 1024).toFixed(3)}`,
      `Characters:        ${t.length}`,
      `Words:             ${t.trim() ? t.trim().split(/\s+/).length : 0}`,
      `Lines:             ${t.split(/\r?\n/).length}`,
      `Base64 size:       ${Math.ceil((bytes * 4) / 3)}`,
    ].join('\n')
  },
  note: '📏 Estimates storage size in different units. Useful before storing text in databases or APIs.',
})
