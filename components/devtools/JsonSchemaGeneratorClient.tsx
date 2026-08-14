'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { ResultActions } from '@/components/ResultActions'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * JSON Schema Generator —— 从示例 JSON 推导 Draft-07 Schema
 *
 * 递归遍历:object → properties + required(全部 key) + additionalProperties:true;
 * array → items 为所有元素 schema 的合并(同型合并,mixed → anyOf);
 * string → 检测 format(date-time/date/email/uri/uuid);number 区分 integer/number。
 * 100% 本地运行,不上传。
 */

type Schema = Record<string, unknown>

const SAMPLE_JSON = `{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "website": "https://example.com",
  "createdAt": "2024-05-01T12:30:00Z",
  "birthDate": "1990-04-12",
  "age": 34,
  "height": 1.68,
  "isActive": true,
  "balance": null,
  "tags": ["dev", "writer"],
  "address": {
    "city": "Berlin",
    "zip": "10115"
  },
  "orders": [
    { "orderId": "A1", "total": 59.9, "paid": true },
    { "orderId": "A2", "total": 12.5, "paid": false }
  ],
  "mixed": [1, "two", true]
}`

const RE_DATETIME = /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(\.\d+)?([Zz]|[+-]\d{2}:?\d{2})?$/
const RE_DATE = /^\d{4}-\d{2}-\d{2}$/
const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const RE_UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const RE_SCHEME = /^[a-zA-Z][a-zA-Z0-9+.-]*:/

/** 校验 YYYY-MM-DD 是否为真实日期(排除 2024-13-45 之类) */
function isRealDate(s: string): boolean {
  const [y, m, d] = s.split('-').map(Number)
  if (m < 1 || m > 12 || d < 1 || d > 31) return false
  const dt = new Date(Date.UTC(y, m - 1, d))
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d
}

/** 字符串 format 检测;不匹配任何格式时返回 null(不输出 format 字段) */
function detectStringFormat(s: string): string | null {
  if (RE_UUID.test(s)) return 'uuid'
  if (RE_DATETIME.test(s)) return 'date-time'
  if (RE_DATE.test(s) && isRealDate(s)) return 'date'
  if (RE_EMAIL.test(s)) return 'email'
  if (RE_SCHEME.test(s)) {
    try {
      new URL(s)
      return 'uri'
    } catch {
      // 不是合法 URI
    }
  }
  return null
}

/** 为单个值生成 schema */
function schemaFor(value: unknown): Schema {
  if (value === null) return { type: 'null' }
  if (Array.isArray(value)) {
    if (value.length === 0) return { type: 'array', items: {} }
    return { type: 'array', items: mergeSchemas(value.map(schemaFor)) }
  }
  switch (typeof value) {
    case 'string': {
      const format = detectStringFormat(value)
      return format ? { type: 'string', format } : { type: 'string' }
    }
    case 'number':
      return { type: Number.isInteger(value) ? 'integer' : 'number' }
    case 'boolean':
      return { type: 'boolean' }
    case 'object': {
      const obj = value as Record<string, unknown>
      const properties: Record<string, Schema> = {}
      for (const [k, v] of Object.entries(obj)) properties[k] = schemaFor(v)
      return {
        type: 'object',
        properties,
        required: Object.keys(obj),
        additionalProperties: true,
      }
    }
    default:
      return {}
  }
}

/** 合并 object 类型的多个 schema:properties 递归合并,required 取交集 */
function mergeObjectSchemas(schemas: Schema[]): Schema {
  const allKeys: string[] = []
  const seenKey = new Set<string>()
  for (const s of schemas) {
    const props = (s.properties ?? {}) as Record<string, Schema>
    for (const k of Object.keys(props)) {
      if (!seenKey.has(k)) {
        seenKey.add(k)
        allKeys.push(k)
      }
    }
  }
  const properties: Record<string, Schema> = {}
  for (const k of allKeys) {
    const valueSchemas = schemas
      .map((s) => ((s.properties ?? {}) as Record<string, Schema>)[k])
      .filter((v): v is Schema => v !== undefined)
    properties[k] = mergeSchemas(valueSchemas)
  }
  const required = allKeys.filter((k) =>
    schemas.every((s) => Array.isArray(s.required) && (s.required as string[]).includes(k)),
  )
  return { type: 'object', properties, required, additionalProperties: true }
}

/** 合并一组 schema:完全相同去重;同型递归合并;mixed → anyOf */
function mergeSchemas(schemas: Schema[]): Schema {
  if (schemas.length === 0) return {}
  const seen = new Set<string>()
  const unique: Schema[] = []
  for (const s of schemas) {
    const key = JSON.stringify(s)
    if (!seen.has(key)) {
      seen.add(key)
      unique.push(s)
    }
  }
  if (unique.length === 1) return unique[0]

  const types = new Set(unique.map((s) => s.type as string | undefined))
  if (types.size === 1) {
    const t = unique[0].type
    if (t === 'object') return mergeObjectSchemas(unique)
    if (t === 'array') {
      return { type: 'array', items: mergeSchemas(unique.map((s) => (s.items as Schema) ?? {})) }
    }
    // 标量:仅当所有 format 一致时保留 format
    const formats = new Set(unique.map((s) => s.format as string | undefined))
    const base: Schema = { type: t }
    if (formats.size === 1 && unique[0].format) base.format = unique[0].format
    return base
  }
  return { anyOf: unique }
}

/** 入口:解析 JSON,生成带 $schema 的 Draft-07 schema(pretty 2 空格) */
function generateSchema(jsonStr: string): string {
  const parsed: unknown = JSON.parse(jsonStr)
  const root: Schema = { $schema: 'http://json-schema.org/draft-07/schema#', ...schemaFor(parsed) }
  return JSON.stringify(root, null, 2)
}

export function JsonSchemaGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('json-schema-generator', locale, key, fb)

  const [input, setInput] = useState('')

  const result = useMemo<{ output?: string; error?: string }>(() => {
    if (!input.trim()) return {}
    try {
      return { output: generateSchema(input) }
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
          <label htmlFor="json-schema-input" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('pasteJson', 'Paste your JSON')}
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
            {input && (
              <button
                type="button"
                onClick={() => setInput('')}
                className="-my-1 rounded-md px-2 py-1 text-xs hover:text-red-500 sm:text-sm"
                style={{ color: 'rgb(var(--text-faint))' }}
              >
                {L('clear', 'Clear')}
              </button>
            )}
          </div>
        </div>
        <textarea
          id="json-schema-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{ "name": "Jane", "age": 30, "tags": ["a"] }'
          rows={10}
          spellCheck={false}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 错误提示 */}
      {result.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⚠️ {result.error}
        </div>
      )}

      {/* 输出区 */}
      {result.output && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
              {L('schemaTitle', 'JSON Schema (Draft-07)')}
            </span>
            <CopyButton value={result.output} label={L('copy', 'Copy')} />
          </div>
          <pre
            className="w-full overflow-x-auto rounded-lg border p-4 font-mono text-sm shadow-sm"
            style={{
              borderColor: 'rgb(var(--border-strong))',
              backgroundColor: 'rgb(var(--bg-card))',
              color: 'rgb(var(--text))',
            }}
          >
            <code>{result.output}</code>
          </pre>
          <ResultActions
            summary={result.output}
            filename="schema.json"
            downloadContent={result.output}
            mime="application/json;charset=utf-8;"
          />
        </div>
      )}

      <p
        className="rounded-md p-3 text-xs"
        style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}
      >
        {L('note', '🔒 100% client-side — your JSON is analyzed in your browser only and never sent to any server.')}
      </p>
    </div>
  )
}
