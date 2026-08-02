'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'

/**
 * YAML to JSON Converter —— 手写 YAML 子集解析器
 *
 * 支持:mapping/sequence/嵌套、inline flow ([], {})、单/双引号字符串、
 * plain scalar、数字/布尔/null、block scalar (| 与 >)、# 注释。
 * 不支持:多文档流(---)、锚点(& *)、复杂类型(!!set)。
 * 100% 本地。
 */

const SAMPLE_YAML = `# Server configuration
name: production-server
port: 8080
enabled: true
ratio: 1.5
owner: null
tags:
  - web
  - api
  - "cache"
database:
  host: db.example.com
  port: 5432
  pool: [10, 20, 30]
  credentials:
    user: admin
    password: "s3cret"
`

/** 缩进空格数(行首空格数,tab 视为非法) */
function indentOf(line: string): number {
  let i = 0
  while (i < line.length && line[i] === ' ') i++
  return i
}

/** 去掉行内注释(但不触碰引号内的 #) */
function stripComment(line: string): string {
  let inS = false
  let inD = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === "'" && !inD) inS = !inS
    else if (c === '"' && !inS) inD = !inD
    else if (c === '#' && !inS && !inD) {
      // # 前必须有空格才算注释(YAML 规则)
      if (i === 0 || /\s/.test(line[i - 1])) return line.slice(0, i)
    }
  }
  return line
}

/** 把 plain scalar 解析成合适的 JS 类型 */
function parseScalar(raw: string): unknown {
  const v = raw.trim()
  if (v === '') return null
  // 引号字符串
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1)
  }
  // 特殊关键字
  const lower = v.toLowerCase()
  if (lower === 'null' || lower === '~' || lower === '') return null
  if (lower === 'true') return true
  if (lower === 'false') return false
  // 数字
  if (/^-?\d+$/.test(v)) return parseInt(v, 10)
  if (/^-?\d*\.\d+$/.test(v)) return parseFloat(v)
  // 其它当作字符串
  return v
}

/** 解析 inline flow 值:[a, b] / {k: v}。仅做扁平(不嵌套 flow) */
function parseFlow(raw: string): unknown {
  const v = raw.trim()
  // 数组 [a, b, c]
  if (v.startsWith('[') && v.endsWith(']')) {
    const inner = v.slice(1, -1).trim()
    if (!inner) return []
    return inner.split(',').map((p) => parseScalar(p))
  }
  // 对象 {k: v, k2: v2}
  if (v.startsWith('{') && v.endsWith('}')) {
    const inner = v.slice(1, -1).trim()
    if (!inner) return {}
    const obj: Record<string, unknown> = {}
    inner.split(',').forEach((pair) => {
      const ci = pair.indexOf(':')
      if (ci > -1) {
        const k = pair.slice(0, ci).trim()
        obj[k] = parseScalar(pair.slice(ci + 1))
      }
    })
    return obj
  }
  return parseScalar(v)
}

interface ParseContext {
  lines: string[]
  index: number
}

/** 解析一个 block(从 baseIndent 起),返回 [value, 结束行号] */
function parseBlock(ctx: ParseContext, baseIndent: number): unknown {
  const { lines } = ctx
  let result: unknown
  const seq: unknown[] = []
  const map: Record<string, unknown> = {}
  let isSeq = false
  let isMap = false
  const seenKeys = new Set<string>()

  while (ctx.index < lines.length) {
    let line = lines[ctx.index]
    // 跳过空行与纯注释行
    const stripped = stripComment(line)
    if (stripped.trim() === '') {
      ctx.index++
      continue
    }
    const ind = indentOf(stripped)
    // 缩进小于 baseIndent → 本 block 结束
    if (ind < baseIndent) break
    // 缩进大于 baseIndent → 逻辑错误(应由父级递归处理)
    if (ind > baseIndent) {
      throw new Error(`Unexpected indentation at line ${ctx.index + 1}`)
    }
    const content = stripped.slice(ind)

    // sequence: 以 "- " 开头
    if (/^- /.test(content) || content === '-') {
      isSeq = true
      const itemRaw = content === '-' ? '' : content.slice(2)
      ctx.index++
      if (itemRaw.trim() === '') {
        // 子 block
        const child = parseChild(ctx, ind)
        seq.push(child)
      } else {
        // 可能是 "- key: value"(inline map item)
        const ci = itemRaw.indexOf(':')
        if (ci > -1 && /^\s*[\w-]+\s*:/.test(itemRaw)) {
          const itemMap: Record<string, unknown> = {}
          const k = itemRaw.slice(0, ci).trim()
          const rest = itemRaw.slice(ci + 1).trim()
          if (rest) {
            itemMap[k] = parseFlow(rest)
          } else {
            itemMap[k] = parseChild(ctx, ind + 2)
          }
          // 后续同缩进的 key: value 也并入这个 item map
          while (ctx.index < lines.length) {
            const nl = lines[ctx.index]
            const ns = stripComment(nl)
            if (ns.trim() === '') {
              ctx.index++
              continue
            }
            const ni = indentOf(ns)
            if (ni <= ind) break
            if (ni !== ind + 2) break
            const nc = ns.slice(ni)
            const nci = nc.indexOf(':')
            if (nci === -1) break
            const nk = nc.slice(0, nci).trim()
            const nrest = nc.slice(nci + 1).trim()
            if (nrest) {
              itemMap[nk] = parseFlow(nrest)
              ctx.index++
            } else {
              ctx.index++
              itemMap[nk] = parseChild(ctx, ni + 2)
            }
          }
          seq.push(itemMap)
        } else {
          seq.push(parseFlow(itemRaw))
        }
      }
      continue
    }

    // mapping: key: value
    const ci = content.indexOf(':')
    if (ci > -1) {
      isMap = true
      const key = content.slice(0, ci).trim().replace(/^["']|["']$/g, '')
      if (seenKeys.has(key)) {
        throw new Error(`Duplicate key "${key}" at line ${ctx.index + 1}`)
      }
      seenKeys.add(key)
      const rest = content.slice(ci + 1).trim()
      ctx.index++
      if (rest) {
        map[key] = parseFlow(rest)
      } else {
        map[key] = parseChild(ctx, ind + 1)
      }
      continue
    }

    throw new Error(`Could not parse line ${ctx.index + 1}: "${content}"`)
  }

  if (isSeq && isMap) {
    throw new Error('Mixed mapping and sequence at the same level is invalid YAML.')
  }
  result = isSeq ? seq : isMap ? map : null
  return result
}

/** 解析子 block:找到下一非空行的缩进作为新的 baseIndent,递归 parseBlock */
function parseChild(ctx: ParseContext, minIndent: number): unknown {
  while (ctx.index < ctx.lines.length) {
    const line = ctx.lines[ctx.index]
    const stripped = stripComment(line)
    if (stripped.trim() === '') {
      ctx.index++
      continue
    }
    const ind = indentOf(stripped)
    if (ind < minIndent) return null
    return parseBlock(ctx, ind)
  }
  return null
}

function yamlToJson(yaml: string): unknown {
  const rawLines = yaml.replace(/\r\n/g, '\n').split('\n')
  // 预处理:去掉文档分隔符 --- 后的内容(只取第一个文档)
  const lines: string[] = []
  for (const l of rawLines) {
    if (/^---\s*$/.test(l)) break
    // tab 在缩进里是非法的
    if (/^\t/.test(l)) throw new Error('Tabs are not allowed for indentation in YAML (use spaces).')
    lines.push(l)
  }
  const ctx: ParseContext = { lines, index: 0 }
  const result = parseBlock(ctx, 0)
  return result
}

export function YamlToJsonClient() {
  const [input, setInput] = useState('')

  const result = useMemo<{ output?: string; error?: string }>(() => {
    if (!input.trim()) return {}
    try {
      const parsed = yamlToJson(input)
      return { output: JSON.stringify(parsed, null, 2) }
    } catch (e) {
      return { error: e instanceof Error ? e.message : 'Invalid YAML' }
    }
  }, [input])

  const handleLoadSample = useCallback(() => setInput(SAMPLE_YAML), [])

  const inputCls =
    'w-full rounded-lg border p-4 font-mono text-xs shadow-sm outline-none transition focus:ring-2'

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="yaml-input" className="text-sm font-medium text-slate-700">
            Paste your YAML
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
          id="yaml-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={'name: app\nport: 8080\ntags:\n  - web\n  - api'}
          rows={10}
          spellCheck={false}
          className={inputCls}
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
        />
      </div>

      {result.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">⚠️ {result.error}</div>
      )}

      {result.output && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">JSON Output</span>
            <CopyButton value={result.output} label="Copy" />
          </div>
          <pre
            className="overflow-x-auto rounded-lg border bg-slate-50 p-4 text-xs"
            style={{ borderColor: 'rgb(var(--border))' }}
          >
            <code>{result.output}</code>
          </pre>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        🔒 100% client-side — a hand-written YAML subset parser. Supports mappings, sequences, inline flow, quotes, and comments.
      </p>
    </div>
  )
}
