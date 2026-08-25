'use client'

import { useMemo, useState } from 'react'
import { CalculatorNote, ResultCard } from '../calculator/CalculatorField'
import { ResultActions } from '../ResultActions'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { getCalculatorSample } from '@/lib/tool-samples'

/**
 * 第十六批:AI 工作流工具(2025-08 第四轮扩张)
 * JSON Repair / Code Block Extractor / Prompt Template Filler / Tools JSON Builder
 */

const selVars = { borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }

// ══════════════ JSON Repair ══════════════

/** 修复启发式管线:每步记录日志;先纯字符级,再截断补全,最后 parse 验证 */
export function repairJson(input: string): { output: string; log: string[]; ok: boolean } {
  const log: string[] = []
  let s = input

  // 1) 剥离 markdown 围栏(```json ... ``` 或 ``` ... ```)
  const fence = /^\s*```[a-zA-Z]*\s*\n([\s\S]*?)\n?```\s*$/g.exec(s)
  if (fence) {
    s = fence[1]
    log.push('Stripped markdown code fences')
  }

  // 2) 去首尾无关文本:截取第一个 { 或 [ 到最后一个 } 或 ]
  const firstObj = s.search(/[{[]/)
  const lastObj = Math.max(s.lastIndexOf('}'), s.lastIndexOf(']'))
  if (firstObj > 0 || (lastObj >= 0 && lastObj < s.length - 1)) {
    s = s.slice(firstObj, lastObj + 1)
    log.push('Trimmed text outside the outermost { } or [ ]')
  }

  // 3) 智能引号 → 直引号
  if (/[\u201c\u201d\u201e\u00ab\u00bb]/.test(s)) {
    s = s.replace(/[\u201c\u201d\u201e\u00ab\u00bb]/g, '"')
    log.push('Converted smart quotes to straight quotes')
  }

  // 4) 控制字符(保留 \n \r \t)
  if (/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(s)) {
    s = s.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, '')
    log.push('Removed control characters')
  }

  // 5) 未加引号的键:{ foo: 1 } → { "foo": 1 }
  const unquotedKeys = /([{,]\s*)([A-Za-z_$][\w$]*)(\s*:)/g
  if (unquotedKeys.test(s)) {
    s = s.replace(unquotedKeys, '$1"$2"$3')
    log.push('Quoted bare object keys')
  }

  // 6) 单引号字符串 → 双引号
  const singleRe = /'(?:[^'\\n]|\.)*'/
  if (singleRe.test(s)) {
    s = s.replace(new RegExp(singleRe.source, 'g'), (m) => '"' + m.slice(1, -1).replace(/"/g, '\"') + '"')
    log.push("Converted single-quoted strings to double quotes")
  }

  // 7) 尾逗号:, } 或 ,] 前(含空白)
  const trailing = /,\s*([}\]])/g
  if (trailing.test(s)) {
    s = s.replace(trailing, '$1')
    log.push('Removed trailing commas')
  }

  // 8) JS 字面量 → JSON
  if (/\bundefined\b/.test(s)) { s = s.replace(/\bundefined\b/g, 'null'); log.push('undefined → null') }
  if (/:\s*NaN/.test(s)) { s = s.replace(/:\s*NaN/g, ': 0'); log.push('NaN → 0') }
  if (/:\s*-?Infinity/.test(s)) { s = s.replace(/:\s*-?Infinity/g, ': 0'); log.push('Infinity → 0') }

  // 9) 截断补全:栈式扫描字符串外的未闭合括号,同时关掉未终结的字符串
  try {
    JSON.parse(s)
  } catch {
    const closed = closeTruncated(s)
    if (closed !== s) {
      s = closed
      log.push('Closed truncated brackets/strings')
    }
  }

  try {
    const parsed = JSON.parse(s)
    return { output: JSON.stringify(parsed, null, 2), log, ok: true }
  } catch (e) {
    return { output: '', log: [...log, (e as Error).message], ok: false }
  }
}

/** 扫描字符串感知的括号栈,补齐截断尾部 */
function closeTruncated(s: string): string {
  const stack: string[] = []
  let inStr = false
  let esc = false
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (inStr) {
      if (esc) esc = false
      else if (c === '\\') esc = true
      else if (c === '"') inStr = false
      continue
    }
    if (c === '"') { inStr = true; continue }
    if (c === '{' || c === '[') stack.push(c)
    else if (c === '}' || c === ']') stack.pop()
  }
  let out = s
  if (inStr) { out += '"' }
  out = out.replace(/[,:\s]+$/, '')
  while (stack.length) {
    out += stack.pop() === '{' ? '}' : ']'
  }
  return out
}

export function JsonRepairClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('json-repair', locale, key, fb)
  const sample = getCalculatorSample('json-repair')
  const [input, setInput] = useState(sample?.input ?? '')

  const result = useMemo(() => (input.trim() ? repairJson(input) : null), [input])

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="jr-in" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Broken JSON')}</label>
          {sample && <button type="button" onClick={() => setInput(sample.input ?? '')} className="btn btn-secondary px-3 py-1.5 text-xs">{L('loadSample', 'Load Sample')}</button>}
        </div>
        <textarea id="jr-in" value={input} onChange={(e) => setInput(e.target.value)} rows={7} spellCheck={false}
          placeholder={String.raw`{ "name": "Ada", tags: ['math',}`}
          className="w-full rounded-lg border p-4 font-mono text-xs outline-none transition focus:ring-2" style={selVars} />
      </div>

      {result && (result.ok ? (
        <div role="status" aria-live="polite" className="space-y-3">
          {result.log.length > 0 && (
            <div className="rounded-lg border p-3" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>{L('repairsApplied', 'Repairs applied')}</div>
              <ul className="list-inside list-disc space-y-0.5 text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
                {result.log.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          )}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('validJson', 'Valid JSON')}</span>
              <CopyButton value={result.output} />
            </div>
            <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{result.output}</pre>
          </div>
          <ResultActions summary={result.output} filename="repaired.json" downloadContent={result.output} mime="application/json;charset=utf-8;" copyLabel={L('copyJson', 'Copy JSON')} />
        </div>
      ) : (
        <div role="alert" className="space-y-2">
          <p className="rounded-lg border-2 border-amber-200 bg-amber-50 p-4 text-sm text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-300">
            &#9888; {L('stillBroken', 'Still unparseable after repairs — the error below tells you where:')}
          </p>
          <p className="rounded-lg border p-3 font-mono text-xs" style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}>
            {result.log[result.log.length - 1]}
          </p>
          {result.log.length > 1 && (
            <p className="text-xs" style={{ color: 'rgb(var(--text-faint))' }}>{L('appliedAnyway', 'Repairs attempted before failing:')} {result.log.slice(0, -1).join(' / ')}</p>
          )}
        </div>
      ))}
      <CalculatorNote>{L('note', 'Handles the classic LLM failure modes: markdown fences, trailing commas, single quotes, bare keys, smart quotes, and truncated output from token limits. Deeply malformed input fails loudly with the parser position instead of guessing.')}</CalculatorNote>
    </div>
  )
}

// ══════════════ Code Block Extractor ══════════════
interface FenceBlock { lang: string; code: string }

function extractFences(md: string): FenceBlock[] {
  const blocks: FenceBlock[] = []
  // ```lang ... ``` (允许内部缩进 fence 用 ~~~ 的场景不展开,常规即可)
  const re = /```([A-Za-z0-9_+-]*)[ \\t]*\\n([\\s\\S]*?)```/g
  let m: RegExpExecArray | null
  while ((m = re.exec(md)) !== null) {
    blocks.push({ lang: (m[1] || 'text').toLowerCase(), code: m[2].replace(/\\n$/, '') })
  }
  return blocks
}

export function FenceExtractorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('markdown-fence-extractor', locale, key, fb)
  const sample = getCalculatorSample('markdown-fence-extractor')
  const [md, setMd] = useState(sample?.md ?? '')
  const [filter, setFilter] = useState('')

  const blocks = useMemo(() => extractFences(md), [md])
  const shown = useMemo(
    () => (filter.trim() ? blocks.filter((b) => b.lang.includes(filter.trim().toLowerCase())) : blocks),
    [blocks, filter],
  )
  const langs = useMemo(() => [...new Set(blocks.map((b) => b.lang))].sort(), [blocks])

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="fx-in" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Markdown / AI answer')}</label>
        <textarea id="fx-in" value={md} onChange={(e) => setMd(e.target.value)} rows={8} spellCheck={false}
          placeholder={'Here is the solution:\\n```python\\nprint("hello")\\n```\\nAnd a test:\\n```bash\\npnpm test\\n```'}
          className="w-full rounded-lg border p-4 font-mono text-xs outline-none transition focus:ring-2" style={selVars} />
      </div>

      {blocks.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs" style={{ color: 'rgb(var(--text-faint))' }}>{L('filterBy', 'Filter language:')}</span>
          <input type="search" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="py" aria-label={L('filterBy', 'Filter language')}
            className="w-24 rounded border px-2 py-1 text-xs" style={selVars} />
          {langs.map((l) => (
            <button key={l} type="button" onClick={() => setFilter(filter === l ? '' : l)} aria-pressed={filter === l}
              className={`rounded-full border px-2.5 py-0.5 font-mono text-xs transition ${filter === l ? 'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500 dark:bg-brand-950/40 dark:text-brand-300' : ''}`}
              style={filter === l ? undefined : { borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}>
              {l}
            </button>
          ))}
        </div>
      )}

      {shown.length > 0 ? (
        <div className="space-y-4">
          {shown.map((b, i) => (
            <div key={i}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{b.lang} · {b.code.split('\\n').length} {L('lines', 'lines')}</span>
                <CopyButton value={b.code} />
              </div>
              <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{b.code}</pre>
            </div>
          ))}
          <ResultActions
            summary={shown.map((b) => `### ${b.lang}\\n${b.code}`).join('\\n\\n')}
            filename="code-blocks.txt"
            downloadContent={shown.map((b) => b.code).join('\\n\\n')}
            copyLabel={L('copyAll', 'Copy all')}
          />
        </div>
      ) : md.trim() ? (
        <p className="text-sm" style={{ color: 'rgb(var(--text-faint))' }}>{L('noBlocks', 'No fenced code blocks found.')}</p>
      ) : null}
      <CalculatorNote>{L('note', '🧾 Works on any Markdown with triple-backtick fences — ChatGPT/Claude answers, README files, docs. The language chip filters (e.g. "py" matches python); indented 4-space code blocks are intentionally ignored.')}</CalculatorNote>
    </div>
  )
}

// ══════════════ Prompt Template Filler ══════════════
export function PromptTemplateFillerClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('prompt-template-filler', locale, key, fb)
  const sample = getCalculatorSample('prompt-template-filler')
  const [template, setTemplate] = useState(sample?.template ?? '')
  const [varsJson, setVarsJson] = useState(sample?.vars ?? '{}')

  const state = useMemo(() => {
    const vars: Record<string, string> = {}
    let varError = ''
    try {
      const parsed = JSON.parse(varsJson) as Record<string, unknown>
      for (const [k, v] of Object.entries(parsed)) {
        vars[k] = typeof v === 'string' ? v : JSON.stringify(v)
      }
    } catch (e) {
      varError = (e as Error).message
    }
    // 收集模板变量 {{var}} 与 {var}(避开 {{{ }});缺失集合
    const used = new Set<string>()
    for (const m of template.matchAll(/\\{\\{\\s*([\\w.-]+)\\s*\\}\\}/g)) used.add(m[1])
    for (const m of template.matchAll(/(?<!\\{)\\{\\s*([\\w.-]+)\\s*\\}(?!\\})/g)) used.add(m[1])
    const missing = [...used].filter((k) => !(k in vars))
    // 渲染:双花括号优先(必须完全匹配才替换),单花括号其次
    let out = template
      .replace(/\\{\\{\\s*([\\w.-]+)\\s*\\}\\}/g, (full, k: string) => (k in vars ? vars[k] : full))
    out = out.replace(/(?<!\\{)\\{\\s*([\\w.-]+)\\s*\\}(?!\\})/g, (full, k: string) => (k in vars ? vars[k] : full))
    return { out, missing, varError }
  }, [template, varsJson])

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="pt-tpl" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('templateLabel', 'Template with {{variables}}')}</label>
          <textarea id="pt-tpl" value={template} onChange={(e) => setTemplate(e.target.value)} rows={9} spellCheck={false}
            placeholder={'You are a {role}. Explain {{topic}} to {{audience}} in {words} words.'}
            className="w-full rounded-lg border p-4 font-mono text-xs outline-none transition focus:ring-2" style={selVars} />
        </div>
        <div>
          <label htmlFor="pt-vars" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('varsLabel', 'Variables (JSON object)')}</label>
          <textarea id="pt-vars" value={varsJson} onChange={(e) => setVarsJson(e.target.value)} rows={9} spellCheck={false}
            placeholder={'{\\n  "role": "senior dev",\\n  "topic": "closures",\\n  "audience": "beginners",\\n  "words": 100\\n}'}
            className="w-full rounded-lg border p-4 font-mono text-xs outline-none transition focus:ring-2" style={selVars} />
        </div>
      </div>

      {state.varError && (
        <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">⚠️ {L('badJson', 'Variables JSON:')} {state.varError}</p>
      )}
      {!state.varError && state.missing.length > 0 && (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-300">
          ⚠️ {L('missingVars', 'Unfilled variables:')} <code className="font-mono">{state.missing.map((m) => `{{${m}}}`).join(', ')}</code>
        </p>
      )}

      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('filledLabel', 'Filled prompt')}</span>
          <CopyButton value={state.out} />
        </div>
        <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{state.out || '—'}</pre>
      </div>
      <ResultActions summary={state.out} filename="filled-prompt.txt" downloadContent={state.out} mime="text/plain;charset=utf-8;" copyLabel={L('copyPrompt', 'Copy Prompt')} />
      <CalculatorNote>{L('note', '🧩 Supports both {{double}} (mustache-style) and {single} (f-string-style) placeholders — double braces replace first, so mixed templates behave predictably. Non-string JSON values are stringified. Everything stays in your browser.')}</CalculatorNote>
    </div>
  )
}

// ══════════════ OpenAI Tools JSON Builder ══════════════
interface ToolParam { name: string; type: string; description: string; required: boolean; enumValues: string }

const TS_TYPES = ['string', 'number', 'boolean', 'object', 'array', 'integer']

export function ToolsBuilderClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('openai-tools-builder', locale, key, fb)
  const [fnName, setFnName] = useState('get_weather')
  const [fnDesc, setFnDesc] = useState('Get current weather for a city')
  const [params, setParams] = useState<ToolParam[]>([
    { name: 'city', type: 'string', description: 'City name, e.g. "San Francisco"', required: true, enumValues: '' },
    { name: 'unit', type: 'string', description: 'Temperature unit', required: false, enumValues: 'celsius, fahrenheit' },
  ])

  const toolsJson = useMemo(() => {
    const properties: Record<string, unknown> = {}
    const required: string[] = []
    for (const p of params) {
      if (!p.name.trim()) continue
      const prop: Record<string, unknown> = { type: p.type }
      if (p.description.trim()) prop.description = p.description
      if (p.enumValues.trim()) {
        prop.enum = p.enumValues.split(',').map((v) => v.trim()).filter(Boolean)
      }
      properties[p.name] = prop
      if (p.required) required.push(p.name)
    }
    const tool = {
      type: 'function',
      function: {
        name: fnName.trim() || 'my_function',
        description: fnDesc.trim(),
        parameters: { type: 'object', properties, ...(required.length ? { required } : {}) },
      },
    }
    return JSON.stringify([tool], null, 2)
  }, [fnName, fnDesc, params])

  const inpCls = 'w-full rounded-lg border p-2.5 text-xs shadow-sm outline-none transition focus:ring-2'

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="tb-name" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('fnName', 'Function name')}</label>
          <input id="tb-name" value={fnName} onChange={(e) => setFnName(e.target.value)} placeholder="get_weather" spellCheck={false} className={inpCls} style={selVars} />
        </div>
        <div>
          <label htmlFor="tb-desc" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('fnDesc', 'Description (what the model sees)')}</label>
          <input id="tb-desc" value={fnDesc} onChange={(e) => setFnDesc(e.target.value)} placeholder="Get current weather…" className={inpCls} style={selVars} />
        </div>
      </div>

      <div className="space-y-3">
        <span className="block text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('paramsLabel', 'Parameters')}</span>
        {params.map((p, i) => (
          <div key={i} className="grid grid-cols-1 gap-2 rounded-lg border p-3 md:grid-cols-[1fr_6rem_1fr_1fr_auto_auto]" style={{ borderColor: 'rgb(var(--border))' }}>
            <input aria-label={L('pName', 'Param name')} value={p.name} placeholder="city" spellCheck={false}
              onChange={(e) => setParams(params.map((x, j) => (j === i ? { ...x, name: e.target.value } : x)))} className={inpCls} style={selVars} />
            <select aria-label={L('pType', 'Type')} value={p.type}
              onChange={(e) => setParams(params.map((x, j) => (j === i ? { ...x, type: e.target.value } : x)))} className={inpCls} style={selVars}>
              {TS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <input aria-label={L('pDesc', 'Param description')} value={p.description} placeholder="City name"
              onChange={(e) => setParams(params.map((x, j) => (j === i ? { ...x, description: e.target.value } : x)))} className={inpCls} style={selVars} />
            <input aria-label={L('pEnum', 'Enum values (comma-separated, optional)')} value={p.enumValues} placeholder="celsius, fahrenheit" spellCheck={false}
              onChange={(e) => setParams(params.map((x, j) => (j === i ? { ...x, enumValues: e.target.value } : x)))} className={inpCls} style={selVars} />
            <label className="flex items-center gap-1.5 text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
              <input type="checkbox" checked={p.required}
                onChange={(e) => setParams(params.map((x, j) => (j === i ? { ...x, required: e.target.checked } : x)))}
                className="h-4 w-4 rounded border-slate-300 text-brand-600 dark:border-slate-600" />
              {L('required', 'req')}
            </label>
            <button type="button" onClick={() => setParams(params.filter((_, j) => j !== i))} disabled={params.length <= 1}
              className="px-2 text-sm text-slate-400 hover:text-red-500 dark:text-slate-500">✕</button>
          </div>
        ))}
        <button type="button" onClick={() => setParams([...params, { name: '', type: 'string', description: '', required: false, enumValues: '' }])}
          className="text-sm font-medium text-brand-600 hover:underline dark:text-blue-400">+ {L('addParam', 'Add parameter')}</button>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>tools JSON</span>
          <CopyButton value={toolsJson} />
        </div>
        <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{toolsJson}</pre>
      </div>
      <ResultActions summary={toolsJson} filename="tools.json" downloadContent={toolsJson} mime="application/json;charset=utf-8;" copyLabel={L('copyJson', 'Copy JSON')} />
      <CalculatorNote>{L('note', '🛠️ Output matches the OpenAI tools array (also accepted by Anthropic tool-use with minor key renames). "integer" maps to JSON Schema integer; enums become string unions the model must respect. Description quality drives calling accuracy more than anything else here.')}</CalculatorNote>
    </div>
  )
}
