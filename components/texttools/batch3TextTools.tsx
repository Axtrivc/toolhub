'use client'

import { makeTextTool } from '../tools/makeTextTool'

/**
 * 第六批:数据格式转换工具
 * 全部用 makeTextTool,处理 CSV/JSON/TSV 等结构化文本
 */

// ── JSON 格式化(美化/压缩)──
export const JSONFormatterClient = makeTextTool({
  slug: 'json-formatter',
  inputLabel: 'JSON (raw or minified)',
  outputLabel: 'Formatted JSON',
  defaultInput: '{"name":"John","age":30,"city":"NYC","skills":["js","css"]}',
  transform: (t) => {
    try {
      return JSON.stringify(JSON.parse(t), null, 2)
    } catch (e) {
      return `⚠️ Invalid JSON: ${(e as Error).message}`
    }
  },
  note: '🔧 Formats and pretty-prints JSON with 2-space indentation. Validates syntax — errors show with a message.',
})

// ── JSON 压缩(minify)──
export const JSONMinifierClient = makeTextTool({
  slug: 'json-minifier',
  inputLabel: 'JSON (formatted)',
  outputLabel: 'Minified JSON',
  defaultInput: '{\n  "name": "John",\n  "age": 30\n}',
  transform: (t) => {
    try {
      return JSON.stringify(JSON.parse(t))
    } catch (e) {
      return `⚠️ Invalid JSON: ${(e as Error).message}`
    }
  },
  note: '📦 Removes all whitespace to minimize JSON size. For API payloads and storage.',
})

/** RFC 4180 CSV 解析(字符级状态机):支持 "..." 引号字段(内含逗号/换行)与 "" 转义引号 */
function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cur = ''
  let inQ = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQ) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          cur += '"'
          i++
        } else {
          inQ = false
        }
      } else {
        cur += c
      }
    } else if (c === '"') {
      inQ = true
    } else if (c === ',') {
      row.push(cur.trim())
      cur = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(cur.trim())
      cur = ''
      rows.push(row)
      row = []
    } else {
      cur += c
    }
  }
  // 末尾无换行符时收尾;以换行结尾则不再追加空行
  if (cur !== '' || row.length > 0) {
    row.push(cur.trim())
    rows.push(row)
  }
  return rows
}

// ── CSV 转 JSON ──
export const CSVtoJSONClient = makeTextTool({
  slug: 'csv-to-json',
  inputLabel: 'CSV (with header row)',
  outputLabel: 'JSON array',
  defaultInput: 'name,age,city\nJohn,30,NYC\nJane,25,LA',
  transform: (t) => {
    const rows = parseCsv(t).filter((r) => r.some((c) => c !== ''))
    if (rows.length < 2) return '[]'
    const headers = rows[0]
    const data = rows.slice(1).map((cells) => {
      const obj: Record<string, string> = {}
      headers.forEach((h, i) => { obj[h] = cells[i] ?? '' })
      return obj
    })
    return JSON.stringify(data, null, 2)
  },
  note: '🔄 Converts CSV to JSON objects. Each row becomes an object using the header row as keys. Quoted fields with commas are supported.',
})

// ── JSON 转 CSV ──
export const JSONtoCSVClient = makeTextTool({
  slug: 'json-to-csv',
  inputLabel: 'JSON array of objects',
  outputLabel: 'CSV',
  defaultInput: '[{"name":"John","age":30},{"name":"Jane","age":25}]',
  transform: (t) => {
    try {
      const data = JSON.parse(t)
      if (!Array.isArray(data) || data.length === 0) return '⚠️ Need a non-empty JSON array'
      // 表头取所有对象 key 的并集(保序):只取 data[0] 会丢弃后续对象多出的字段
      const headers: string[] = []
      for (const row of data) {
        if (row && typeof row === 'object' && !Array.isArray(row)) {
          for (const k of Object.keys(row)) {
            if (!headers.includes(k)) headers.push(k)
          }
        }
      }
      const escape = (s: unknown) => /[",\n\r]/.test(String(s)) ? `"${String(s).replace(/"/g, '""')}"` : String(s)
      const lines = [headers.join(',')]
      for (const row of data) {
        const obj = (row && typeof row === 'object' && !Array.isArray(row) ? row : {}) as Record<string, unknown>
        lines.push(headers.map((h) => escape(obj[h] ?? '')).join(','))
      }
      return lines.join('\n')
    } catch (e) {
      return `⚠️ Invalid JSON: ${(e as Error).message}`
    }
  },
  note: '🔄 Converts a JSON array of objects to CSV. Handles commas and quotes with proper escaping. Fields missing from later objects are included in the header union.',
})

// ── 添加行号 ──
export const AddLineNumbersClient = makeTextTool({
  slug: 'add-line-numbers',
  inputLabel: 'Your text',
  outputLabel: 'With line numbers',
  defaultInput: 'First line\nSecond line\nThird line',
  transform: (t) =>
    t.split(/\r?\n/).map((line, i) => `${String(i + 1).padStart(4, ' ')}.  ${line}`).join('\n'),
  note: '🔢 Adds line numbers to each line. Useful for code review, transcripts, and references.',
})

// ── 文本转列表(每行加项目符号)──
export const TextToListClient = makeTextTool({
  slug: 'text-to-list',
  inputLabel: 'Lines of text',
  outputLabel: 'Bulleted list',
  defaultInput: 'Apple\nBanana\nCherry',
  transform: (t) =>
    t
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l) => `• ${l}`)
      .join('\n'),
  note: '📝 Adds bullet points to each line. For notes, outlines, and document formatting.',
})
