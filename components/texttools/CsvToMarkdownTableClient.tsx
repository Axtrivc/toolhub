'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { ResultActions } from '@/components/ResultActions'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * CSV/TSV → GitHub-flavored Markdown 表格
 *
 * 自写状态机 CSV 解析器:支持引号字段、`""` 转义、引号内逗号/制表符/换行、CRLF。
 * 分隔符:首行自动探测(tab/comma/semicolon)+ 手动覆盖。
 * 100% 本地运行。
 */

type Delimiter = 'auto' | ',' | '\t' | ';'
type Alignment = 'default' | 'left' | 'center' | 'right'

const SAMPLE_CSV = `Name,Role,Location,Notes
"Ada Lovelace","Engineer, mathematician",London,"Wrote the first algorithm"
Grace Hopper,Computer scientist,"New York, NY","Coined ""debugging"""
"Alan Turing",Logician,London,
Edsger Dijkstra,Scientist,Netherlands,"Single-line note"`

/** 状态机解析 CSV/TSV,返回 ragged 的二维数组 */
function parseDelimited(text: string, delim: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false
  let fieldStarted = false
  let i = 0

  const endField = () => {
    row.push(field)
    field = ''
    fieldStarted = false
  }
  const endRow = () => {
    endField()
    rows.push(row)
    row = []
  }

  while (i < text.length) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i += 2
          continue
        }
        inQuotes = false
        i++
        continue
      }
      field += c
      i++
      continue
    }
    if (!fieldStarted && c === '"') {
      inQuotes = true
      fieldStarted = true
      i++
      continue
    }
    if (c === delim) {
      endField()
      i++
      continue
    }
    if (c === '\r') {
      // CRLF 或孤立 CR,统一视为行结束
      if (text[i + 1] === '\n') i++
      endRow()
      i++
      continue
    }
    if (c === '\n') {
      endRow()
      i++
      continue
    }
    field += c
    fieldStarted = true
    i++
  }
  // 末尾无换行符时收尾;若文本以换行结尾则最后一行为空,丢弃
  if (field !== '' || fieldStarted || row.length > 0 || inQuotes) endRow()
  // 丢弃完全空白的尾行
  while (rows.length > 0 && rows[rows.length - 1].every((c) => c.trim() === '') && rows[rows.length - 1].length <= 1) {
    rows.pop()
  }
  return rows
}

/** 首行自动探测分隔符:统计 tab / 逗号 / 分号出现次数 */
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

/** 单元格内容转义:竖线转义、内部换行转 <br> */
function mdCell(cell: string): string {
  return cell.replace(/\|/g, '\\|').replace(/\r?\n/g, '<br>')
}

interface BuildResult {
  markdown: string
  rowCount: number
  colCount: number
  raggedRows: number
  usedDelimiter: string
}

function buildMarkdown(
  input: string,
  delimChoice: Delimiter,
  hasHeader: boolean,
  align: Alignment,
  pretty: boolean,
): BuildResult | null {
  const trimmed = input.trim()
  if (!trimmed) return null
  const delim = delimChoice === 'auto' ? detectDelimiter(input) : delimChoice
  const rawRows = parseDelimited(input, delim)
  if (rawRows.length === 0) return null

  // 列数用普通循环求最大值:超大 CSV 下 Math.max(...arr) 会超出参数个数上限
  let colCount = 0
  for (const r of rawRows) if (r.length > colCount) colCount = r.length
  // ragged 行用空单元格补齐
  let raggedRows = 0
  const rows = rawRows.map((r) => {
    const cells = r.map((c) => c.trim())
    if (cells.length < colCount) {
      raggedRows++
      while (cells.length < colCount) cells.push('')
    }
    return cells
  })

  let header: string[]
  let body: string[][]
  if (hasHeader) {
    header = rows[0]
    body = rows.slice(1)
  } else {
    header = Array.from({ length: colCount }, (_, i) => `Column ${i + 1}`)
    body = rows
  }

  const sepCell = { default: '---', left: ':---', center: ':---:', right: '---:' }[align]

  const escHeader = header.map(mdCell)
  const escBody = body.map((r) => r.map(mdCell))

  let lines: string[]
  if (pretty) {
    // 等宽对齐:每列取该列最大显示宽度(循环求最大,避免 spread 参数上限)
    const widths = Array.from({ length: colCount }, (_, i) => {
      let w = Math.max(escHeader[i].length, sepCell.length)
      for (const r of escBody) if (r[i].length > w) w = r[i].length
      return w
    })
    const pad = (s: string, w: number) => s + ' '.repeat(Math.max(0, w - s.length))
    const fmtRow = (cells: string[]) => `| ${cells.map((c, i) => pad(c, widths[i])).join(' | ')} |`
    const sep = escHeader.map((_, i) => {
      const w = widths[i]
      if (align === 'center') return ':' + '-'.repeat(Math.max(1, w - 2)) + ':'
      if (align === 'left') return ':' + '-'.repeat(Math.max(1, w - 1))
      if (align === 'right') return '-'.repeat(Math.max(1, w - 1)) + ':'
      return '-'.repeat(w)
    })
    lines = [fmtRow(escHeader), `| ${sep.map((s, i) => (s.length < widths[i] ? pad(s, widths[i]) : s)).join(' | ')} |`, ...escBody.map(fmtRow)]
  } else {
    lines = [
      `| ${escHeader.join(' | ')} |`,
      `| ${escHeader.map(() => sepCell).join(' | ')} |`,
      ...escBody.map((r) => `| ${r.join(' | ')} |`),
    ]
  }

  return {
    markdown: lines.join('\n'),
    rowCount: body.length,
    colCount,
    raggedRows,
    usedDelimiter: delim === '\t' ? 'Tab' : delim === ';' ? 'Semicolon' : 'Comma',
  }
}

const inputStyle = {
  borderColor: 'rgb(var(--border-strong))',
  backgroundColor: 'rgb(var(--bg-card))',
  color: 'rgb(var(--text))',
}

// 大输入防线(解析类工具同款口径):超长 CSV 会放大逐字符状态机与表格重建成本,
// 超限后停止转换并提示缩减输入。
const MAX_INPUT_LEN = 100_000

export function CsvToMarkdownTableClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('csv-to-markdown-table', locale, key, fb)

  const [input, setInput] = useState('')
  const [delimiter, setDelimiter] = useState<Delimiter>('auto')
  const [hasHeader, setHasHeader] = useState(true)
  const [align, setAlign] = useState<Alignment>('default')
  const [pretty, setPretty] = useState(false)

  const tooLong = input.length > MAX_INPUT_LEN

  const result = useMemo(
    () => (tooLong ? null : buildMarkdown(input, delimiter, hasHeader, align, pretty)),
    [input, delimiter, hasHeader, align, pretty, tooLong],
  )

  const handleLoadSample = useCallback(() => setInput(SAMPLE_CSV), [])

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="csv-md-input" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('inputLabel', 'Paste your CSV / TSV')}
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
            {input && (
              <button
                type="button"
                onClick={() => setInput('')}
                className="-my-1 rounded-md px-2 py-1.5 text-xs hover:text-red-500 sm:text-sm"
                style={{ color: 'rgb(var(--text-faint))' }}
              >
                {L('clear', 'Clear')}
              </button>
            )}
          </div>
        </div>
        <textarea
          id="csv-md-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={'Name,Age,City\n"Jane Doe",34,"Berlin, DE"'}
          rows={8}
          spellCheck={false}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={inputStyle}
        />
      </div>

      {/* 选项区 */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div>
          <label htmlFor="csv-md-delim" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('delimiter', 'Delimiter')}
          </label>
          <select
            id="csv-md-delim"
            value={delimiter}
            onChange={(e) => setDelimiter(e.target.value as Delimiter)}
            className="rounded-lg border px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2"
            style={inputStyle}
          >
            <option value="auto">{L('delimiterAuto', 'Auto-detect')}</option>
            <option value=",">{L('delimiterComma', 'Comma (,)')}</option>
            <option value={'\t'}>{L('delimiterTab', 'Tab (\\t)')}</option>
            <option value=";">{L('delimiterSemicolon', 'Semicolon (;)')}</option>
          </select>
        </div>
        <div>
          <label htmlFor="csv-md-align" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('alignment', 'Column alignment')}
          </label>
          <select
            id="csv-md-align"
            value={align}
            onChange={(e) => setAlign(e.target.value as Alignment)}
            className="rounded-lg border px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2"
            style={inputStyle}
          >
            <option value="default">{L('alignDefault', 'Default (---)')}</option>
            <option value="left">{L('alignLeft', 'Left (:---)')}</option>
            <option value="center">{L('alignCenter', 'Center (:---:)')}</option>
            <option value="right">{L('alignRight', 'Right (---:)')}</option>
          </select>
        </div>
        <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: 'rgb(var(--text))' }}>
          <input type="checkbox" checked={hasHeader} onChange={(e) => setHasHeader(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          {L('firstRowHeader', 'First row is header')}
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: 'rgb(var(--text))' }}>
          <input type="checkbox" checked={pretty} onChange={(e) => setPretty(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          {L('prettyPad', 'Pretty pad columns')}
        </label>
      </div>

      {/* 超长输入防线 */}
      {tooLong && (
        <p role="alert" className="rounded-lg border-2 p-4 text-sm" style={{ borderColor: 'rgb(253 230 138)', backgroundColor: 'rgb(254 249 195 / 0.4)', color: 'rgb(var(--text))' }}>
          {L('tooLong', '⚠️ Input exceeds the supported size (100,000 characters). Trim the input to convert it.')}
        </p>
      )}

      {/* 输出区 */}
      {result && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('resultTitle', 'Markdown table')} — {result.rowCount}{' '}
              {result.rowCount === 1 ? L('rowSingular', 'row') : L('rowPlural', 'rows')} × {result.colCount}{' '}
              {result.colCount === 1 ? L('columnSingular', 'column') : L('columnPlural', 'columns')} ·{' '}
              {L('delimiterWord', 'delimiter')}:{' '}
              {result.usedDelimiter === 'Tab'
                ? L('delimiterTab', 'Tab')
                : result.usedDelimiter === 'Semicolon'
                  ? L('delimiterSemicolon', 'Semicolon')
                  : L('delimiterComma', 'Comma')}
            </span>
            <CopyButton value={result.markdown} label={L('copy', 'Copy')} />
          </div>
          {result.raggedRows > 0 && (
            <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
              ⚠️ {result.raggedRows} {result.raggedRows === 1 ? L('rowSingular', 'row') : L('rowPlural', 'rows')}{' '}
              {L('raggedHadFewerThan', 'had fewer than')} {result.colCount} {L('raggedCellsAnd', 'cells and')}{' '}
              {result.raggedRows === 1 ? L('raggedWas', 'was') : L('raggedWere', 'were')}{' '}
              {L('raggedPaddedWithEmptyCells', 'padded with empty cells.')}
            </p>
          )}
          <pre
            className="max-h-96 overflow-auto rounded-lg border p-4 font-mono text-sm"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}
          >
            <code>{result.markdown}</code>
          </pre>
          <ResultActions
            summary={result.markdown}
            filename="table.md"
            downloadContent={result.markdown}
            mime="text/markdown;charset=utf-8;"
            copyLabel={L('copyMarkdown', 'Copy Markdown')}
          />
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('privacyNote', '🔒 100% client-side — your data never leaves your browser.')}
      </p>
    </div>
  )
}
