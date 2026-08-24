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

/** RFC 4180 CSV 解析(字符级状态机):支持 "..." 引号字段(内含分隔符/换行)与 "" 转义引号。
    引号内字段原样保留(不 trim),仅未加引号的字段 trim */
function parseCsv(text: string, delim: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cur = ''
  let inQ = false
  let quoted = false
  const endField = () => {
    row.push(quoted ? cur : cur.trim())
    cur = ''
    quoted = false
  }
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
      quoted = true
    } else if (c === delim) {
      endField()
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      endField()
      rows.push(row)
      row = []
    } else {
      cur += c
    }
  }
  // 末尾无换行符时收尾;以换行结尾则不再追加空行
  if (cur !== '' || row.length > 0 || quoted) {
    endField()
    rows.push(row)
  }
  return rows
}

/** 首行自动探测分隔符:统计 tab / 逗号 / 分号出现次数(移植自 CsvToMarkdownTableClient) */
function detectDelimiter(text: string): string {
  const firstLine = text.split(/\r?\n/, 1)[0] ?? ''
  const counts: [string, number][] = [
    ['\t', (firstLine.match(/\t/g) ?? []).length],
    [',', (firstLine.match(/,/g) ?? []).length],
    [';', (firstLine.match(/;/g) ?? []).length],
  ]
  counts.sort((a, b) => b[1] - a[1])
  return counts[0][1] > 0 ? counts[0][0] : ','
}

// ── CSV 转 JSON ──
export const CSVtoJSONClient = makeTextTool({
  slug: 'csv-to-json',
  inputLabel: 'CSV (with header row)',
  outputLabel: 'JSON array',
  defaultInput: 'name,age,city\nJohn,30,NYC\nJane,25,LA',
  transform: (t) => {
    // 可选分隔符覆盖:CSV 末尾追加 " ||| ,"/" ||| ;"/" ||| \t"(或字面 "tab"/真实制表符);
    // 尾段不是合法分隔符指令时整段按 CSV 处理,正文含 ||| 不受影响
    let csv = t
    let delim = detectDelimiter(t)
    const sep = t.lastIndexOf('|||')
    if (sep !== -1) {
      const spec = t.slice(sep + 3).trim().toLowerCase()
      const override =
        spec === ',' ? ',' : spec === ';' ? ';' : spec === '\\t' || spec === 'tab' || spec === '\t' ? '\t' : null
      if (override) {
        csv = t.slice(0, sep)
        delim = override
      }
    }
    const rows = parseCsv(csv, delim).filter((r) => r.some((c) => c !== ''))
    if (rows.length < 2) return '[]'
    const headers = rows[0]
    const data = rows.slice(1).map((cells) => {
      const obj: Record<string, string> = {}
      headers.forEach((h, i) => { obj[h] = cells[i] ?? '' })
      return obj
    })
    return JSON.stringify(data, null, 2)
  },
  note: '🔄 Converts CSV to JSON objects using the header row as keys. The delimiter (comma, semicolon, tab) is auto-detected — append " ||| ;" or " ||| \\t" to override. Quoted fields keep their spacing.',
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
      // 嵌套 object/array 值先 JSON.stringify 再走转义,避免输出 "[object Object]"
      const escape = (s: unknown) => {
        const str = s !== null && typeof s === 'object' ? JSON.stringify(s) : String(s)
        return /[",\n\r]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str
      }
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
  note: '🔄 Converts a JSON array of objects to CSV. Handles commas and quotes with proper escaping. Nested objects and arrays are emitted as JSON strings. Fields missing from later objects are included in the header union.',
})

// ── 添加行号 ──
export const AddLineNumbersClient = makeTextTool({
  slug: 'add-line-numbers',
  inputLabel: 'Your text',
  outputLabel: 'With line numbers',
  defaultInput: 'First line\nSecond line\nThird line',
  transform: (t) => {
    // 末尾换行是「行结束符」而非新行的开始:先剥掉一个,避免给空尾巴多编一个号
    const body = t.replace(/\r?\n$/, '')
    if (body === '') return ''
    return body.split(/\r?\n/).map((line, i) => `${String(i + 1).padStart(4, ' ')}.  ${line}`).join('\n')
  },
  note: '🔢 Adds line numbers to each line. Useful for code review, transcripts, and references.',
})

// ── 文本转列表(每行加项目符号)──
export const TextToListClient = makeTextTool({
  slug: 'text-to-list',
  inputLabel: 'Lines of text',
  outputLabel: 'Bulleted list',
  defaultInput: 'Apple\nBanana\nCherry',
  transform: (t) => {
    // 可选项目符号指令:文本末尾追加 " ||| -"/" ||| *"/" ||| 1."(数字编号);
    // 尾段不是合法指令时整段按正文处理,默认 •
    let body = t
    let bullet = '•'
    const sep = t.lastIndexOf('|||')
    if (sep !== -1) {
      const spec = t.slice(sep + 3).trim().toLowerCase()
      if (spec === '-' || spec === '*') {
        body = t.slice(0, sep)
        bullet = spec
      } else if (spec === '1.' || spec === '1' || spec === 'numbered' || spec === 'number') {
        body = t.slice(0, sep)
        bullet = '1.'
      }
    }
    return body
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l, n) => (bullet === '1.' ? `${n + 1}. ${l}` : `${bullet} ${l}`))
      .join('\n')
  },
  note: '📝 Adds a bullet (•) to each line. Append " ||| -", " ||| *", or " ||| 1." after the text to use hyphens, asterisks, or numbered items instead.',
})
