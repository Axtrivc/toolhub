'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * YAML to JSON Converter —— 手写 YAML 子集解析器
 *
 * 支持:mapping/sequence/嵌套、inline flow ([], {})、单/双引号字符串、
 * plain scalar、数字/布尔/null(含 YAML 1.1 遗留布尔 yes/no/on/off)、
 * block scalar (| 与 >)、# 注释。
 * 锚点/别名(& *)与复杂类型(!!set)不支持且会显式报错;
 * 多文档流(---)只转换第一个文档并提示。
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
  // 锚点(&)/别名(*):按 YAML 规则纯标量不能以指示符开头;手写解析器不解析
  // 它们,与其静默输出 "&a xxx"/"*ref" 字符串(产出错误数据),不如明确报错
  if (/^[&*]/.test(v)) {
    throw new Error(
      'YAML anchors (&) and aliases (*) are not supported. Wrap the value in quotes if it is meant to be a literal string.',
    )
  }
  // 特殊关键字(yes/no/on/off 是 YAML 1.1 遗留布尔,与工具 FAQ 文档口径一致)
  const lower = v.toLowerCase()
  if (lower === 'null' || lower === '~' || lower === '') return null
  if (lower === 'true' || lower === 'yes' || lower === 'on') return true
  if (lower === 'false' || lower === 'no' || lower === 'off') return false
  // 数字
  if (/^-?\d+$/.test(v)) {
    // 超出安全整数范围的大整数(16 位订单 ID、毫秒时间戳)保留原始字符串,
    // 避免 parseInt 静默丢精度(JSON 输出带引号但值不变)
    const n = Number(v)
    return Number.isSafeInteger(n) ? n : v
  }
  if (/^-?\d*\.\d+$/.test(v)) {
    // 极长小数会被 parseFloat 溢出为 Infinity(JSON.stringify 输出 null)→ 回退字符串
    const f = parseFloat(v)
    return Number.isFinite(f) ? f : v
  }
  // 其它当作字符串
  return v
}

/** 引号感知的 inline flow 逗号切分:引号内的逗号不拆 */
function splitFlowItems(s: string): string[] {
  const parts: string[] = []
  let cur = ''
  let inS = false
  let inD = false
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === "'" && !inD) inS = !inS
    else if (c === '"' && !inS) inD = !inD
    if (c === ',' && !inS && !inD) {
      parts.push(cur)
      cur = ''
    } else {
      cur += c
    }
  }
  parts.push(cur)
  return parts
}

/** 找第一个引号外冒号的位置;没有返回 -1 */
function indexFlowColon(s: string): number {
  let inS = false
  let inD = false
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === "'" && !inD) inS = !inS
    else if (c === '"' && !inS) inD = !inD
    else if (c === ':' && !inS && !inD) return i
  }
  return -1
}

/** 检查以 [ 或 { 开头的值括号配平且不含嵌套集合。
 *  R4 之前:[[1,2],[3,4]] 这类嵌套会被逐层误切分后静默串化为垃圾数据;
 *  与其产出错误 JSON,不如显式报错并给出改写指引。 */
function assertFlatFlow(v: string): void {
  const opener = v[0]
  const closer = opener === '[' ? ']' : '}'
  let depth = 0
  let inS = false
  let inD = false
  for (let i = 0; i < v.length; i++) {
    const c = v[i]
    if (c === "'" && !inD) inS = !inS
    else if (c === '"' && !inS) inD = !inD
    else if (!inS && !inD) {
      if (c === opener) {
        depth++
        if (depth > 1) {
          throw new Error(
            `Nested inline flow (${opener}${closer} inside ${opener}${closer}) is not supported. Put nested collections on their own indented lines (block style) instead.`,
          )
        }
      } else if (c === closer) {
        depth--
        if (depth < 0) throw new Error(`Unexpected "${closer}" outside an inline flow in "${v}".`)
      } else if (c === '[' || c === ']' || c === '{' || c === '}') {
        throw new Error(
          `Mixed/nested inline flow in "${v}" is not supported. Put nested collections on their own indented lines (block style) instead.`,
        )
      }
    }
  }
  if (depth !== 0) throw new Error(`Unclosed inline flow "${v}" — missing a closing "${closer}".`)
}

/** 解析 inline flow 值:[a, b] / {k: v}。仅做扁平(不嵌套 flow),嵌套显式报错 */
function parseFlow(raw: string): unknown {
  const v = raw.trim()
  // 以指示符开头的值必须走 flow 分支且配平,否则报错而不是被静默当作普通字符串
  if (/^[{[]/.test(v)) {
    assertFlatFlow(v)
    const closed =
      (v.startsWith('[') && v.endsWith(']')) || (v.startsWith('{') && v.endsWith('}'))
    if (!closed) throw new Error(`Malformed inline flow value "${v}" — check brackets and quoting.`)
  }
  // 数组 [a, b, c]
  if (v.startsWith('[') && v.endsWith(']')) {
    const inner = v.slice(1, -1).trim()
    if (!inner) return []
    return splitFlowItems(inner).map((p) => parseScalar(p))
  }
  // 对象 {k: v, k2: v2}
  if (v.startsWith('{') && v.endsWith('}')) {
    const inner = v.slice(1, -1).trim()
    if (!inner) return {}
    const obj: Record<string, unknown> = {}
    splitFlowItems(inner).forEach((pair) => {
      const ci = indexFlowColon(pair)
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

/**
 * 块标量(| 字面 与 > 折叠):收集比 key 缩进更深的连续行。
 * chomp 修饰:省略 = clip(末尾恰一个换行)、- = strip(无换行)、+ = keep(保留全部空行)。
 */
function parseBlockScalar(ctx: ParseContext, keyIndent: number, folded: boolean, chomp: string): string {
  const raw: string[] = []
  let blockIndent = -1
  while (ctx.index < ctx.lines.length) {
    const line = ctx.lines[ctx.index]
    // 空行:可能是块内空行,先缓存,由结尾 chomp 逻辑统一处理
    if (line.trim() === '') {
      raw.push('')
      ctx.index++
      continue
    }
    const ind = indentOf(line)
    // 缩进回到 key 层级或更浅 → 块结束
    if (ind <= keyIndent) break
    if (blockIndent === -1) blockIndent = ind
    if (ind < blockIndent) break
    raw.push(line.slice(blockIndent))
    ctx.index++
  }

  let end = raw.length
  while (end > 0 && raw[end - 1] === '') end--
  const body = raw.slice(0, end)
  const trailing = raw.length - end

  let text: string
  if (folded) {
    // 折叠:相邻非空行以空格连接,空行变成换行
    text = ''
    for (let i = 0; i < body.length; i++) {
      if (i > 0 && body[i] !== '' && body[i - 1] !== '') text += ' '
      text += body[i] === '' ? '\n' : body[i]
    }
  } else {
    text = body.join('\n')
  }

  if (chomp === '-') return text
  if (chomp === '+') return text + '\n'.repeat(trailing + 1)
  return text === '' ? '' : text + '\n'
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
            // "- key: |" 形式的块标量(与下方 mapping 分支同规则;
            // GitHub Actions 的 run:| 等高频写法依赖这里)
            const bsItem = /^([|>])([+-]?)$/.exec(rest)
            itemMap[k] = bsItem
              ? parseBlockScalar(ctx, ind + 2, bsItem[1] === '>', bsItem[2] ?? '')
              : parseFlow(rest)
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
            const nc = ns.slice(ni)
            const nci = nc.indexOf(':')
            if (nci === -1) break
            const nk = nc.slice(0, nci).trim()
            const nrest = nc.slice(nci + 1).trim()
            if (nrest) {
              ctx.index++
              // 与首个 key 同规则:nrest 为 |/> 时是块标量(key 缩进口径同主 mapping 分支)
              const bsNext = /^([|>])([+-]?)$/.exec(nrest)
              itemMap[nk] = bsNext
                ? parseBlockScalar(ctx, ni, bsNext[1] === '>', bsNext[2] ?? '')
                : parseFlow(nrest)
            } else {
              ctx.index++
              itemMap[nk] = parseChild(ctx, ni + 2)
            }
          }
          seq.push(itemMap)
        } else {
          // "- |" 单独成项:序列元素本身是块标量(多行文本作列表项)
          const bsMatch = /^([|>])([+-]?)$/.exec(itemRaw)
          seq.push(
            bsMatch ? parseBlockScalar(ctx, ind, bsMatch[1] === '>', bsMatch[2] ?? '') : parseFlow(itemRaw),
          )
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
        // 块标量指示符:| / |- / |+ / > / >- / >+
        const blockScalar = /^([|>])([+-]?)$/.exec(rest)
        if (blockScalar) {
          map[key] = parseBlockScalar(ctx, ind, blockScalar[1] === '>', blockScalar[2] ?? '')
        } else {
          map[key] = parseFlow(rest)
        }
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

function yamlToJson(yaml: string): { value: unknown; multiDoc: boolean } {
  const rawLines = yaml.replace(/\r\n/g, '\n').split('\n')
  // 预处理(与解析器口径一致):
  //  1) 行首 tab 视为非法缩进;
  //  2) 出现在任何实际内容之前的 --- 只是文档起始分隔符,跳过继续解析;
  //     之后在块标量正文【之外】遇到的 --- 才视为多文档流 → 只取第一个文档并提示。
  // 块标量(|/> 收集区)正文里的行可以合法含 tab 或 "---"(如内嵌 Markdown 的
  // 分隔线、带缩进的代码片段):跳过这两类检查,否则单文档会被误判截断。
  const lines: string[] = []
  let seenContent = false
  let multiDoc = false
  let blockKeyIndent = -1 // 当前块标量所属 key 的缩进;-1 表示不在块标量正文内
  for (const l of rawLines) {
    const sl = stripComment(l)
    if (blockKeyIndent >= 0) {
      // 块标量体内:空行或更深的行属于正文;回到 key 层级及以下则块结束
      if (sl.trim() === '' || indentOf(sl) > blockKeyIndent) {
        lines.push(l)
        continue
      }
      blockKeyIndent = -1
    }
    if (/^---\s*$/.test(l)) {
      if (!seenContent) continue
      multiDoc = true
      break
    }
    // tab 在缩进里是非法的
    if (/^\t/.test(l)) throw new Error('Tabs are not allowed for indentation in YAML (use spaces).')
    if (!(l.trim() === '' || l.trim().startsWith('#'))) seenContent = true
    // 块标量起始:"key: |[->]" 或列表项 "- |"(判定条件与下方解析分支保持一致)
    if (
      /^[ \t]*(?:-[ \t]+)*[^:[ \t][^:]*:[ \t]*[|>][+-]?[ \t]*$/.test(sl) ||
      /^[ \t]*-[ \t]+[|>][+-]?[ \t]*$/.test(sl)
    ) {
      blockKeyIndent = indentOf(sl)
    }
    lines.push(l)
  }
  // 文件末尾换行符 split 出的最后一个空元素是 EOF 残留而非正文行:弹出一个,
  // 否则 |+(keep chomping)会把结尾换行数多算一行(与 PyYAML 行为对齐验证)
  if (yaml.endsWith('\n') && lines[lines.length - 1] === '') lines.pop()
  const ctx: ParseContext = { lines, index: 0 }
  const result = parseBlock(ctx, 0)
  return { value: result, multiDoc }
}

export function YamlToJsonClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('yaml-to-json', locale, key, fb)

  const [input, setInput] = useState('')

  const result = useMemo<{ output?: string; error?: string; multiDoc?: boolean }>(() => {
    if (!input.trim()) return {}
    try {
      const parsed = yamlToJson(input)
      return { output: JSON.stringify(parsed.value, null, 2), multiDoc: parsed.multiDoc }
    } catch (e) {
      return { error: e instanceof Error ? e.message : L('invalidYaml', 'Invalid YAML') }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, locale])

  const handleLoadSample = useCallback(() => setInput(SAMPLE_YAML), [])

  const inputCls =
    'w-full rounded-lg border p-4 font-mono text-xs shadow-sm outline-none transition focus:ring-2'

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="yaml-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {L('inputLabel', 'Paste your YAML')}
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
            {input && (
              <button
                type="button"
                onClick={() => setInput('')}
                className="-my-1 rounded-md px-2 py-1 text-xs text-slate-400 hover:text-red-500 sm:text-sm"
              >
                {L('clear', 'Clear')}
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
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">⚠️ {result.error}</div>
      )}

      {result.multiDoc && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-300">
          ⚠️ {L('multiDocWarning', 'Multiple YAML documents detected (---). Only the first document was converted.')}
        </div>
      )}

      {result.output && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('outputLabel', 'JSON Output')}</span>
            <CopyButton value={result.output} label={L('copy', 'Copy')} />
          </div>
          <pre
            className="max-h-96 overflow-auto rounded-lg border p-4 text-xs"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}
          >
            <code>{result.output}</code>
          </pre>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🔒 100% client-side — a hand-written YAML subset parser. Supports mappings, sequences, inline flow, quotes, comments, and block scalars (| and >).')}
      </p>
    </div>
  )
}
