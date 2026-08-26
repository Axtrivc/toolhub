'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * JSON to TypeScript —— 纯前端推导嵌套 Interface
 *
 * 递归推断每个值的类型;对象生成 interface,数组取元素类型并去重,
 * null → null(可选),混合数组 → 联合类型。interface 名按出现顺序 Root / Sub / Sub2...
 * 100% 本地运行,不上传。
 */

const SAMPLE_JSON = `{
  "id": 42,
  "name": "Jane Doe",
  "isActive": true,
  "balance": null,
  "tags": ["dev", "writer"],
  "address": {
    "city": "Berlin",
    "zip": "10115"
  },
  "orders": [
    { "orderId": "A1", "total": 59.9 }
  ]
}`

/** PascalCase:把字符串转成合法 TS 标识符(数字开头加下划线;保留 Unicode 字母,中文 key 不再被剥空) */
function toPascalCase(input: string): string {
  const parts = input.replace(/[^\p{L}\p{N}]+/gu, ' ').trim().split(/\s+/)
  const pascal = parts
    .map((p) => (p.length === 0 ? '' : p[0].toUpperCase() + p.slice(1)))
    .join('')
  const safe = pascal.replace(/^[0-9]/, '_$&')
  // 兜底名不用 'Root':根 interface 固定叫 Root,嵌套层再叫 Root 会重名
  return safe || 'Sub'
}

/** interface 名计数器,保证 Sub / Sub2 / Sub3 不冲突 */
class NameRegistry {
  private counters: Record<string, number> = {}
  next(base: string): string {
    const key = base.toLowerCase()
    const n = (this.counters[key] ?? 0) + 1
    this.counters[key] = n
    return n === 1 ? base : `${base}${n}`
  }
}

/** 推断单个值的类型字符串(不含 interface 定义) */
function inferType(value: unknown, nameBase: string, interfaces: string[], reg: NameRegistry): string {
  if (value === null) return 'null'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'unknown[]'
    // 收集所有元素的类型并去重
    const elemTypes = value.map((el) => inferType(el, nameBase, interfaces, reg))
    const unique = Array.from(new Set(elemTypes))
    const elemStr = unique.length === 1 ? unique[0] : `(${unique.join(' | ')})`
    return `${elemStr}[]`
  }
  const t = typeof value
  if (t === 'string') return 'string'
  if (t === 'number') return 'number'
  if (t === 'boolean') return 'boolean'
  if (t === 'object' && value !== null) {
    const name = reg.next(toPascalCase(nameBase) || 'Sub')
    const body = buildInterface(value as Record<string, unknown>, name, interfaces, reg)
    interfaces.push(body)
    return name
  }
  return 'unknown'
}

/** 为一个对象生成 interface 定义体 */
function buildInterface(
  obj: Record<string, unknown>,
  name: string,
  interfaces: string[],
  reg: NameRegistry,
): string {
  const lines = Object.entries(obj).map(([key, val]) => {
    const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`
    const optional = val === null ? '?' : ''
    const type = inferType(val, key, interfaces, reg)
    return `  ${safeKey}${optional}: ${type};`
  })
  return `interface ${name} {\n${lines.join('\n')}\n}`
}

/** 入口:解析 JSON 并生成全部 interface(根 + 嵌套) */
function generateInterfaces(jsonStr: string): string {
  const parsed: unknown = JSON.parse(jsonStr)
  const reg = new NameRegistry()
  const interfaces: string[] = []
  // 根名也走注册表:后续若有 key 恰好叫 root,会得到 Root2 而非与根重名
  const rootName = reg.next('Root')

  if (parsed === null || typeof parsed !== 'object') {
    // 标量根:直接给一个 type 别名
    return `type ${rootName} = ${inferType(parsed, rootName, interfaces, reg)};`
  }

  if (Array.isArray(parsed)) {
    // 数组根:Root 是某类型的数组。对所有元素统一推导并合并去重,
    // 不再对首元素单独推导(否则会重复生成同名 interface → TS Duplicate identifier)。
    if (parsed.length === 0) {
      return `type ${rootName} = unknown[];`
    }
    const all = parsed.map((el) => inferType(el, rootName + 'Item', interfaces, reg))
    const unique = Array.from(new Set(all))
    const elem = unique.length === 1 ? unique[0] : `(${unique.join(' | ')})`
    interfaces.unshift(`type ${rootName} = ${elem}[];`)
    return interfaces.join('\n\n')
  }

  // 对象根
  const body = buildInterface(parsed as Record<string, unknown>, rootName, interfaces, reg)
  // body 是第一个 interface(根),其它嵌套 interface 已被 push 进 interfaces
  // 顺序:根在前,其余按发现顺序
  interfaces.unshift(body)
  return interfaces.join('\n\n')
}

export function JsonToTypeScriptClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('json-to-typescript', locale, key, fb)

  const [input, setInput] = useState('')

  const result = useMemo<{ output?: string; error?: string }>(() => {
    if (!input.trim()) return {}
    try {
      return { output: generateInterfaces(input) }
    } catch (e) {
      return { error: e instanceof Error ? e.message : L('invalidJson', 'Invalid JSON') }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, locale])

  const handleLoadSample = useCallback(() => setInput(SAMPLE_JSON), [])

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="json-ts-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {L('pasteJson', 'Paste your JSON')}
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
          id="json-ts-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{ "name": "Jane", "age": 30, "tags": ["a"] }'
          rows={8}
          spellCheck={false}
          className="w-full rounded-lg border p-4 font-mono text-xs shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 错误提示 */}
      {result.error && (
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">
          ⚠️ {result.error}
        </div>
      )}

      {/* 输出区 */}
      {result.output && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('tsInterfaces', 'TypeScript Interfaces')}</span>
            <CopyButton value={result.output} label={L('copy', 'Copy')} />
          </div>
          <pre
            className="overflow-x-auto rounded-lg border bg-slate-50 p-4 text-xs dark:bg-slate-800/60"
            style={{ borderColor: 'rgb(var(--border))' }}
          >
            <code>{result.output}</code>
          </pre>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🔒 100% client-side — your JSON is parsed in your browser only and never sent to any server.')}
      </p>
    </div>
  )
}
