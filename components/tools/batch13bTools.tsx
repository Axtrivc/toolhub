'use client'

import { useMemo, useState } from 'react'
import { CalculatorNote } from '../calculator/CalculatorField'
import { ResultActions } from '../ResultActions'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { getCalculatorSample } from '@/lib/tool-samples'

/**
 * TOML → JSON 转换器
 * 手写零依赖 TOML 1.0 子集解析器:表/数组表/内联表/点分 key/字符串(基本+多行+
 * 字面量)/整数(含 hex/oct/bin/下划线)/浮点/布尔/数组。不支持:日期时间对象
 * (按字符串保留)、多行字面量、\x 转义 —— 遇到会给出明确错误而非静默出错。
 */

type Json = string | number | boolean | null | Json[] | { [k: string]: Json }

type ParseResult = { ok: true; value: Record<string, Json> } | { ok: false; error: string }

// R7 大输入门控:与 json 文本工具族(batch3 maxInputChars 形态)一致的 200k 上限。
// 解析是逐行同步 re-parse,超大输入会冻结输入框;超限跳过 parse,走琥珀横幅提示。
const TJ_MAX_INPUT_CHARS = 200_000

function parseToml(src: string): ParseResult {
  const root: Record<string, Json> = {}
  let cur: Record<string, Json> = root

  const lines = src.split(/\r?\n/)
  for (let ln = 0; ln < lines.length; ln++) {
    const raw = lines[ln]
    const line = stripComment(raw)
    if (!line.trim()) continue
    try {
      if (line.trim().startsWith('[[')) {
        // [[array table]]
        const m = /^\s*\[\[\s*([A-Za-z0-9_.-]+)\s*\]\]\s*$/.exec(line)
        if (!m) throw new Error('Malformed array-table header')
        const path = m[1].split('.')
        const parent = descend(root, path.slice(0, -1))
        const key = path[path.length - 1]
        const existing = parent[key]
        // 已存在但不是数组表(如前面定义过 [table] 或标量)→ 明确报错,禁止静默覆盖丢数据
        if (!Array.isArray(existing) && existing !== undefined) {
          throw new Error(`"${key}" is not an array table`)
        }
        let arr: Json[]
        if (Array.isArray(existing)) {
          arr = existing
        } else {
          arr = []
          parent[key] = arr
        }
        cur = {}
        arr.push(cur)
      } else if (line.trim().startsWith('[')) {
        // [table]
        const m = /^\s*\[\s*([A-Za-z0-9_.-]+)\s*\]\s*$/.exec(line)
        if (!m) throw new Error('Malformed table header')
        cur = descend(root, m[1].split('.'))
      } else {
        // key = value
        const eq = findTopLevelEquals(line)
        if (eq < 0) throw new Error('Expected `key = value`')
        const keyPath = parseKey(line.slice(0, eq).trim())
        let rest = line.slice(eq + 1).trim()
        // 多行数组收集
        while (openBrackets(rest) > 0 && ln + 1 < lines.length) {
          ln++
          rest += ' ' + stripComment(lines[ln]).trim()
        }
        const value = parseValue(rest)
        const target = keyPath.length > 1 ? descend(cur, keyPath.slice(0, -1)) : cur
        target[keyPath[keyPath.length - 1]] = value
      }
    } catch (e) {
      return { ok: false, error: `Line ${ln + 1}: ${(e as Error).message}` }
    }
  }
  return { ok: true, value: root }
}

/** 去掉 # 注释(尊重引号内的 #) */
function stripComment(line: string): string {
  let inBasic = false
  let inLiteral = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"' && !inLiteral && line[i - 1] !== '\\') inBasic = !inBasic
    else if (c === "'" && !inBasic) inLiteral = !inLiteral
    else if (c === '#' && !inBasic && !inLiteral) return line.slice(0, i)
  }
  return line
}

/** 找到引号外的第一个 = */
function findTopLevelEquals(line: string): number {
  let inBasic = false
  let inLiteral = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"' && !inLiteral && line[i - 1] !== '\\') inBasic = !inBasic
    else if (c === "'" && !inBasic) inLiteral = !inLiteral
    else if (c === '=' && !inBasic && !inLiteral) return i
  }
  return -1
}

/** 解析裸 key / "quoted key" / 点分路径 */
function parseKey(s: string): string[] {
  const parts: string[] = []
  let cur = ''
  let inQuote: string | null = null
  for (let i = 0; i <= s.length; i++) {
    const c = s[i] ?? ''
    if (inQuote) {
      if (c === inQuote) { parts.push(cur); cur = ''; inQuote = null }
      else cur += c
    } else if (c === '"' || c === "'") inQuote = c
    else if (c === '.') { if (cur.trim()) { parts.push(cur.trim()); cur = '' } }
    else cur += c
  }
  if (cur.trim()) parts.push(cur.trim())
  if (parts.some((p) => !p)) throw new Error('Empty key segment')
  return parts
}

function openBrackets(s: string): number {
  let depth = 0
  let inStr: string | null = null
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (inStr) { if (c === inStr && s[i - 1] !== '\\') inStr = null; continue }
    if (c === '"') inStr = '"'
    if (c === '[') depth++
    if (c === ']') depth--
  }
  return depth
}

function descend(obj: Record<string, Json>, path: string[]): Record<string, Json> {
  let cur = obj
  for (const seg of path) {
    const next = cur[seg]
    if (next === undefined) {
      const fresh: Record<string, Json> = {}
      cur[seg] = fresh
      cur = fresh
    } else if (typeof next === 'object' && next !== null && !Array.isArray(next)) {
      cur = next as Record<string, Json>
    } else throw new Error(`"${seg}" is not a table`)
  }
  return cur
}

function parseValue(s: string): Json {
  s = s.trim()
  if (!s) throw new Error('Missing value')
  if (s.startsWith('"')) {
    if (s.startsWith('"""')) throw new Error('Multi-line strings are not supported here')
    return JSON.parse('"' + s.slice(1, -1)
      .replace(/\\"/g, '\\"').replace(/\\n/g, '\\n').replace(/\\t/g, '\\t')
      .replace(/\\r/g, '\\r').replace(/\\\\/g, '\\\\')
      .replace(/\\u([0-9A-Fa-f]{4})/g, '\\u$1') + '"')
  }
  if (s.startsWith("'")) {
    if (s.startsWith("'''")) throw new Error("Multi-line literal strings are not supported here")
    return s.slice(1, -1)
  }
  if (s === 'true') return true
  if (s === 'false') return false
  if (s.startsWith('[')) {
    if (!s.endsWith(']')) throw new Error('Unterminated array (missing closing "]")')
    const inner = s.slice(1, s.lastIndexOf(']')).trim()
    if (!inner) return []
    // 按顶层逗号切分
    const items: Json[] = []
    let depth = 0, curStr = '', inStr: string | null = null
    for (let i = 0; i < inner.length; i++) {
      const c = inner[i]
      if (inStr) { curStr += c; if (c === inStr && inner[i - 1] !== '\\') inStr = null; continue }
      if (c === '"') { inStr = '"'; curStr += c; continue }
      if (c === "'") { inStr = "'"; curStr += c; continue }
      // 深度同时计入 [] 与 {}——数组元素可能是 inline table,
      // 其中的顶层逗号不能被当成数组分隔符(修复 [{x=1,y=2}] 被拆坏)
      if (c === '[' || c === '{') depth++
      if (c === ']' || c === '}') depth--
      if (c === ',' && depth === 0) { items.push(parseValue(curStr)); curStr = '' } else curStr += c
    }
    if (curStr.trim()) items.push(parseValue(curStr))
    return items
  }
  if (s.startsWith('{')) {
    // 内联表 { k = v, k2 = v2 }
    if (!s.endsWith('}')) throw new Error('Unterminated inline table (missing closing "}")')
    const inner = s.slice(1, -1).trim()
    if (!inner) return {}
    const obj: Record<string, Json> = {}
    let depth = 0, curStr = '', inStr: string | null = null
    for (let i = 0; i < inner.length; i++) {
      const c = inner[i]
      if (inStr) { curStr += c; if (c === inStr && inner[i - 1] !== '\\') inStr = null; continue }
      if (c === '"') { inStr = '"'; curStr += c; continue }
      // 深度同时计入 {} 与 []——inline table 的值可以是数组,
      // 其中的顶层逗号不能被当成键值对分隔符(修复 {v=["a","b"]} 被拆坏)
      if (c === '[' || c === '{') depth++
      if (c === ']' || c === '}') depth--
      if (c === ',' && depth === 0) { assignInline(obj, curStr); curStr = '' } else curStr += c
    }
    if (curStr.trim()) assignInline(obj, curStr)
    return obj
  }
  // 数字(去下划线;支持 0x/0o/0b)
  const numTok = s.replace(/_/g, '')
  let num: number
  if (/^[-+]?(0x[0-9A-Fa-f]+|0o[0-7]+|0b[01]+)$/.test(numTok)) {
    // 直接用 parseInt 的 radix 形式(token 形状已被上面的 regex 保证)
    const sign = numTok.startsWith('-') ? -1 : 1
    const body = numTok.replace(/^[-+]/, '')
    if (body.startsWith('0x')) num = sign * parseInt(body.slice(2), 16)
    else if (body.startsWith('0o')) num = sign * parseInt(body.slice(2), 8)
    else num = sign * parseInt(body.slice(2), 2)
  } else if (/^[-+]?(\d+(\.\d+)?([eE][+-]?\d+)?|[+-]?(inf|nan))$/.test(numTok)) {
    num = numTok.endsWith('inf') ? (numTok.startsWith('-') ? -Infinity : Infinity)
      : numTok.endsWith('nan') ? NaN
      : Number(numTok)
  } else if (/^\d{4}-\d{2}-\d{2}/.test(numTok)) {
    return numTok // 日期时间按原样保留为字符串(JSON 无原生日期)
  } else {
    throw new Error(`Cannot parse value "${s}"`)
  }
  return num
}

function assignInline(obj: Record<string, Json>, pair: string): void {
  const eq = findTopLevelEquals(pair)
  if (eq < 0) throw new Error(`Malformed inline table entry "${pair}"`)
  const k = parseKey(pair.slice(0, eq).trim())[0]
  obj[k] = parseValue(pair.slice(eq + 1))
}

export function TomlToJsonClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('toml-to-json', locale, key, fb)
  // 数字分组跟随应用语言(英文固定 en-US,保证 SSR 首屏与英文输出不变)
  const numberLocale = locale === 'en' ? 'en-US' : locale
  const sample = getCalculatorSample('toml-to-json')
  const [toml, setToml] = useState(sample?.toml ?? '')

  // 门控在 useMemo 入口判定:超限返回 null 跳过 parse(toml 原文完整保留在输入框,
  // 用户可随时裁剪回到正常路径),不产生任何部分转换结果
  const tooLarge = toml.length > TJ_MAX_INPUT_CHARS
  const result = useMemo(
    () => (tooLarge ? null : parseToml(toml)),
    [toml, tooLarge],
  )
  const jsonText = result?.ok ? JSON.stringify(result.value, null, 2) : ''

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="tj-in" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Your TOML')}</label>
          {sample && <button type="button" onClick={() => setToml(sample.toml)} className="btn btn-secondary px-3 py-1.5 text-xs">{L('loadSample', 'Load Sample')}</button>}
        </div>
        <textarea id="tj-in" value={toml} onChange={(e) => setToml(e.target.value)} rows={12} spellCheck={false}
          placeholder={'[package]\nname = "my-app"\nversion = "0.1.0"\n\n[dependencies]\nserde = { version = "1", features = ["derive"] }'}
          className="w-full rounded-lg border p-4 font-mono text-xs outline-none transition focus:ring-2"
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
      </div>

      {tooLarge && (
        <p role="alert" className="rounded-lg border-2 border-amber-200 bg-amber-50 p-3 text-sm text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-300">
          ⚠️ {L('inputTooLarge', 'Input exceeds {n} characters — conversion is skipped to keep typing responsive. Trim or split the input.')
            .replace('{n}', TJ_MAX_INPUT_CHARS.toLocaleString(numberLocale))}
        </p>
      )}
      {!tooLarge && result && !result.ok && toml.trim() && (
        <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 p-4 font-mono text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">
          ⚠️ {result.error}
        </p>
      )}
      {jsonText && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>JSON</span>
            <CopyButton value={jsonText} />
          </div>
          <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{jsonText}</pre>
        </div>
      )}
      <ResultActions summary={jsonText} filename="converted.json" downloadContent={jsonText} mime="application/json;charset=utf-8;" />
      <CalculatorNote>{L('note', '📦 TOML 1.0 subset parser — tables, array tables, inline tables, dotted keys, and all numeric formats. Datetimes stay strings (JSON has no date type). Multi-line strings are rejected with the line number instead of mis-parsed.')}</CalculatorNote>
    </div>
  )
}


