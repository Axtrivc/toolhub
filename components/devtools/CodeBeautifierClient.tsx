'use client'

import { useState, useMemo } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { ResultActions } from '@/components/ResultActions'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Code Beautifier —— HTML / CSS / JavaScript / JSON 格式化
 *
 * 手写 tokenizer,字符串/注释感知:
 *  - JSON:JSON.parse + stringify(解析错误直接提示)
 *  - CSS:{ 后换行缩进,} 前后换行,; 后换行(括号/字符串内除外)
 *  - JS:同 CSS 的花括号/分号规则,跳过模板串、// 与 注释、正则(启发式),括号内不断行
 *  - HTML:正则走标签,块级缩进,行内元素保持一行,void 元素与注释正确处理
 * 目标「够用就好」的健壮性,不追求完美。
 */

type Lang = 'html' | 'css' | 'js' | 'json'

const LANGS: { key: Lang; label: string }[] = [
  { key: 'html', label: 'HTML' },
  { key: 'css', label: 'CSS' },
  { key: 'js', label: 'JavaScript' },
  { key: 'json', label: 'JSON' },
]

const EXT: Record<Lang, string> = { html: 'html', css: 'css', js: 'js', json: 'json' }

const PLACEHOLDER: Record<Lang, string> = {
  html: '<div class="card"><h1>Hello</h1><p>Some <strong>bold</strong> text</p></div>',
  css: '.card{color:#333;background:#fff}.card h1{font-size:2rem;margin:0}',
  js: "const greet=(name)=>{if(!name){return 'hi'}else{return `hello ${name}`}}",
  json: '{ "name": "Jane", "age": 30, "tags": ["a", "b"] }',
}

/* ---------------- CSS ---------------- */

function beautifyCss(src: string, unit: string): string {
  let out = ''
  let level = 0
  let i = 0
  let inStr: string | null = null
  let inComment = false
  let paren = 0
  // 栈:当前 {} 是声明块(true,冒号后补空格)还是 at-rule 块(false)
  const ctx: boolean[] = []

  const trimSpaces = () => {
    out = out.replace(/[ \t]+$/, '')
  }
  const freshLine = () => /(^|\n)[ \t]*$/.test(out)

  while (i < src.length) {
    const c = src[i]

    if (inComment) {
      if (c === '*' && src[i + 1] === '/') {
        out += '*/'
        inComment = false
        i += 2
        out = out.replace(/\s+$/, '')
        out += '\n' + unit.repeat(level)
        continue
      }
      out += c
      i++
      continue
    }

    if (inStr) {
      out += c
      if (c === '\\' && i + 1 < src.length) {
        out += src[i + 1]
        i += 2
        continue
      }
      if (c === inStr) inStr = null
      i++
      continue
    }

    if (c === '/' && src[i + 1] === '*') {
      out += '/*'
      inComment = true
      i += 2
      continue
    }
    if (c === '"' || c === "'") {
      out += c
      inStr = c
      i++
      continue
    }
    if (c === '(') {
      paren++
      out += c
      i++
      continue
    }
    if (c === ')') {
      paren = Math.max(0, paren - 1)
      trimSpaces()
      out += c
      i++
      continue
    }
    if (c === '{') {
      if (!freshLine()) {
        trimSpaces()
        out += ' '
      }
      out += '{'
      // 行首是 @ → at-rule 块(内部还是选择器语境),否则是声明块
      const line = out.slice(out.lastIndexOf('\n') + 1)
      ctx.push(!line.trimStart().startsWith('@'))
      level++
      out += '\n' + unit.repeat(level)
      i++
      continue
    }
    if (c === '}') {
      level = Math.max(0, level - 1)
      ctx.pop()
      out = out.replace(/\s+$/, '')
      if (out.endsWith('{')) {
        out += '}'
      } else {
        out += '\n' + unit.repeat(level) + '}'
      }
      out += '\n' + unit.repeat(level)
      i++
      continue
    }
    if (c === ';') {
      trimSpaces()
      out += ';'
      if (paren === 0) out += '\n' + unit.repeat(level)
      i++
      continue
    }
    if (c === ':') {
      trimSpaces()
      out += ':'
      // 声明块内(且不在括号里)的冒号后补空格:color: red;选择器 a:hover 不受影响
      if (paren === 0 && ctx[ctx.length - 1]) out += ' '
      i++
      continue
    }
    if (c === ',') {
      trimSpaces()
      out += ', '
      i++
      continue
    }
    if (/\s/.test(c)) {
      if (out !== '' && !/[\s(]$/.test(out)) out += ' '
      i++
      continue
    }
    out += c
    i++
  }
  return out.trim()
}

/* ---------------- JavaScript ---------------- */

// 这些符号/关键词之后的 `/` 视为正则起点(启发式)
const REGEX_CHARS = new Set(['', '(', ',', '=', ':', '[', '!', '&', '|', '?', '{', '}', ';', '+', '-', '*', '%', '^', '~', '<', '>'])
const REGEX_WORDS = new Set(['return', 'typeof', 'case', 'in', 'of', 'delete', 'void', 'instanceof', 'new', 'throw', 'else', 'do', 'yield', 'await'])

function beautifyJs(src: string, unit: string): string {
  let out = ''
  let level = 0
  let paren = 0
  let i = 0
  let str: string | null = null

  const trimSpaces = () => {
    out = out.replace(/[ \t]+$/, '')
  }
  const freshLine = () => /(^|\n)[ \t]*$/.test(out)
  const lastChar = () => {
    const t = out.replace(/\s+$/, '')
    return t.length ? t[t.length - 1] : ''
  }
  const lastWord = () => {
    const m = out.replace(/\s+$/, '').match(/([A-Za-z_$][A-Za-z0-9_$]*)$/)
    return m ? m[1] : ''
  }
  const nl = () => {
    out = out.replace(/\s+$/, '')
    out += '\n' + unit.repeat(level)
  }

  while (i < src.length) {
    const c = src[i]

    if (str) {
      out += c
      if (c === '\\' && i + 1 < src.length) {
        out += src[i + 1]
        i += 2
        continue
      }
      if (c === str) str = null
      i++
      continue
    }

    // 行注释
    if (c === '/' && src[i + 1] === '/') {
      while (i < src.length && src[i] !== '\n') {
        out += src[i]
        i++
      }
      nl()
      continue
    }
    // 块注释
    if (c === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2)
      const comment = end === -1 ? src.slice(i) : src.slice(i, end + 2)
      out += comment
      i = end === -1 ? src.length : end + 2
      if (comment.includes('\n')) nl()
      continue
    }
    // 字符串 / 模板串(模板串整体跳过,内部 ${} 不格式化)
    if (c === '"' || c === "'" || c === '`') {
      str = c
      out += c
      i++
      continue
    }
    // 正则字面量(启发式)
    if (c === '/' && (REGEX_CHARS.has(lastChar()) || REGEX_WORDS.has(lastWord()))) {
      out += '/'
      i++
      let inClass = false
      let closed = false
      while (i < src.length) {
        const r = src[i]
        if (r === '\n') break
        out += r
        if (r === '\\' && i + 1 < src.length) {
          out += src[i + 1]
          i += 2
          continue
        }
        if (r === '[') inClass = true
        else if (r === ']') inClass = false
        else if (r === '/' && !inClass) {
          closed = true
          i++
          break
        }
        i++
      }
      if (closed) {
        while (i < src.length && /[a-z]/i.test(src[i])) {
          out += src[i]
          i++
        }
      }
      continue
    }

    if (c === '(' || c === '[') {
      paren++
      out += c
      i++
      continue
    }
    if (c === ')' || c === ']') {
      paren = Math.max(0, paren - 1)
      trimSpaces()
      out += c
      i++
      continue
    }

    if (c === '{') {
      // { 前确保恰好一个空格((/[/行首 除外):if (x) { / const o = {
      if (!freshLine()) {
        const lc = lastChar()
        if (lc !== '' && lc !== '(' && lc !== '[') {
          trimSpaces()
          out += ' '
        }
      }
      out += '{'
      level++
      nl()
      i++
      continue
    }
    if (c === '}') {
      level = Math.max(0, level - 1)
      out = out.replace(/\s+$/, '')
      if (out.endsWith('{')) {
        out += '}'
      } else {
        out += '\n' + unit.repeat(level) + '}'
      }
      // 看下一个有效字符:; , ) ] . : 紧跟;else/catch/while 等同行空一格;其余换行
      let j = i + 1
      while (j < src.length && /\s/.test(src[j])) j++
      const next = j < src.length ? src[j] : ''
      if (next === ';' || next === ',' || next === ')' || next === ']' || next === '.' || next === ':') {
        // 紧跟,交给后续规则
      } else if (/[A-Za-z_$]/.test(next)) {
        out += ' '
      } else {
        out += '\n' + unit.repeat(level)
      }
      i++
      continue
    }
    if (c === ';') {
      trimSpaces()
      out += ';'
      if (paren === 0) nl()
      else out += ' '
      i++
      continue
    }
    if (c === ':') {
      // 对象字面量/三元冒号后补空格:{a: 1}
      trimSpaces()
      out += ': '
      i++
      continue
    }
    if (c === '=') {
      // 箭头函数与赋值号规范空格;==/===/<=/>=/!=/+= 等复合运算符不动
      let nx = i + 1
      while (nx < src.length && /\s/.test(src[nx])) nx++
      if (nx < src.length && src[nx] === '>') {
        trimSpaces()
        out += ' => '
        i = nx + 1
        continue
      }
      const prev = lastChar()
      const nextCh = nx < src.length ? src[nx] : ''
      if ('=<>!+-*/%&|^?'.includes(prev) || nextCh === '=') {
        out += '='
        i++
        continue
      }
      trimSpaces()
      out += ' = '
      i++
      continue
    }
    if (c === ',') {
      trimSpaces()
      out += ', '
      i++
      continue
    }
    if (/\s/.test(c)) {
      if (out !== '' && !/[\s([{]$/.test(out)) out += ' '
      i++
      continue
    }
    out += c
    i++
  }
  return out.trim()
}

/* ---------------- HTML ---------------- */

const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'])
const INLINE_TAGS = new Set(['a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'button', 'cite', 'code', 'data', 'dfn', 'em', 'i', 'img', 'input', 'kbd', 'label', 'mark', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'select', 'small', 'span', 'strong', 'sub', 'sup', 'textarea', 'time', 'u', 'var', 'wbr'])
/** 子文本需原样保留(不折叠空白、不重排缩进)的标签 */
const PRESERVE_TAGS = new Set(['pre', 'textarea'])

const TOKEN_RE = /<!--[\s\S]*?-->|<!doctype[^>]*>|<script\b[\s\S]*?<\/script\s*>|<style\b[\s\S]*?<\/style\s*>|<\/?[a-zA-Z][^>]*>|[^<]+|</gi

function beautifyHtml(src: string, unit: string): string {
  const tokens = src.match(TOKEN_RE) ?? []
  const lines: string[] = []
  let level = 0
  let inlineBuf = ''
  // pre/textarea 上下文栈:内部内容(含子标签)按源码原样输出
  const preserveStack: string[] = []
  let preserveAtSol = true

  const flushInline = () => {
    const t = inlineBuf.replace(/\s+/g, ' ').trim()
    if (t) lines.push(unit.repeat(level) + t)
    inlineBuf = ''
  }

  // preserve 上下文的输出:换行完全跟随源码自身的换行,不折叠空白、不加缩进
  const preservePush = (s: string) => {
    if (s === '') return
    if (preserveAtSol) lines.push(s)
    else lines[lines.length - 1] = (lines[lines.length - 1] ?? '') + s
  }

  for (const token of tokens) {
    // pre/textarea 内容:原样保留(含子标签与空白)
    if (preserveStack.length > 0) {
      if (/^<\//.test(token)) {
        const name = (token.match(/^<\/\s*([a-zA-Z0-9-]+)/)?.[1] ?? '').toLowerCase()
        if (preserveStack[preserveStack.length - 1] === name) {
          preserveStack.pop()
          level = Math.max(0, level - 1)
          preservePush(token)
          preserveAtSol = true
          continue
        }
        preservePush(token)
        continue
      }
      if (!/^</.test(token)) {
        // 文本:仅去掉紧邻开/闭标签的一个换行(格式化引入的边界),其余原样
        const hadLeadingNl = /^\n/.test(token)
        const hadTrailingNl = /\n$/.test(token)
        if (hadLeadingNl) preserveAtSol = true
        preservePush(token.replace(/^\n/, '').replace(/\n$/, ''))
        preserveAtSol = hadTrailingNl
        continue
      }
      preservePush(token)
      continue
    }
    // 注释
    if (/^<!--/.test(token)) {
      if (inlineBuf.trim()) {
        inlineBuf += token
      } else {
        for (const l of token.trim().split('\n')) lines.push(unit.repeat(level) + l.trimEnd())
      }
      continue
    }
    // DOCTYPE
    if (/^<!doctype/i.test(token)) {
      flushInline()
      lines.push(token.trim())
      continue
    }
    // script / style 原样保留
    if (/^<script\b/i.test(token) || /^<style\b/i.test(token)) {
      flushInline()
      lines.push(unit.repeat(level) + token.trim())
      continue
    }
    // 闭合标签
    if (/^<\//.test(token)) {
      const name = (token.match(/^<\/\s*([a-zA-Z0-9-]+)/)?.[1] ?? '').toLowerCase()
      if (INLINE_TAGS.has(name)) {
        inlineBuf += token
        continue
      }
      const content = inlineBuf.replace(/\s+/g, ' ').trim()
      inlineBuf = ''
      level = Math.max(0, level - 1)
      if (content) {
        // 块内只有行内内容 → 与开标签合并为一行
        const lastIdx = lines.length - 1
        const last = lines[lastIdx]
        const openRe = new RegExp('^' + unit.repeat(level) + '<' + name + '(\\s[^>]*)?>$')
        if (last !== undefined && openRe.test(last)) {
          lines[lastIdx] = last + content + `</${name}>`
          continue
        }
        lines.push(unit.repeat(level + 1) + content)
      }
      lines.push(unit.repeat(level) + `</${name}>`)
      continue
    }
    // 开标签(裸 `<` 落入下方文本分支)
    if (/^<[a-zA-Z]/.test(token)) {
      const name = (token.match(/^<\s*([a-zA-Z0-9-]+)/)?.[1] ?? '').toLowerCase()
      const selfClose = /\/\s*>$/.test(token) || VOID_TAGS.has(name)
      if (!selfClose && PRESERVE_TAGS.has(name)) {
        // pre/textarea:开标签照常缩进,内容进入 preserve 模式
        flushInline()
        lines.push(unit.repeat(level) + token.trim())
        preserveStack.push(name)
        preserveAtSol = false
        level++
        continue
      }
      if (INLINE_TAGS.has(name)) {
        inlineBuf += token
        continue
      }
      flushInline()
      lines.push(unit.repeat(level) + token.trim())
      if (!selfClose) level++
      continue
    }
    // 文本:折叠空白,行内保留单空格
    const t = token.replace(/\s+/g, ' ')
    if (!t.trim()) {
      if (inlineBuf && !inlineBuf.endsWith(' ')) inlineBuf += ' '
      continue
    }
    inlineBuf += t
  }
  flushInline()
  return lines.join('\n')
}

/* ---------------- 组件 ---------------- */

export function CodeBeautifierClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('code-beautifier', locale, key, fb)

  const [lang, setLang] = useState<Lang>('json')
  const [indent, setIndent] = useState<'2' | '4'>('2')
  const [input, setInput] = useState('')

  const result = useMemo<{ output?: string; error?: string }>(() => {
    if (!input.trim()) return {}
    const unit = ' '.repeat(Number(indent))
    try {
      switch (lang) {
        case 'json':
          return { output: JSON.stringify(JSON.parse(input), null, Number(indent)) }
        case 'css':
          return { output: beautifyCss(input, unit) }
        case 'js':
          return { output: beautifyJs(input, unit) }
        case 'html':
          return { output: beautifyHtml(input, unit) }
      }
    } catch (e) {
      return { error: e instanceof Error ? e.message : L('unableToFormat', 'Unable to format input') }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, lang, indent, locale])

  return (
    <div className="space-y-5">
      {/* 语言与缩进选择 */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {LANGS.map((l) => (
            <button
              key={l.key}
              type="button"
              onClick={() => setLang(l.key)}
              className={`btn ${lang === l.key ? 'btn-primary' : 'btn-secondary'}`}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="beautify-indent" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('indent', 'Indent')}
          </label>
          <select
            id="beautify-indent"
            value={indent}
            onChange={(e) => setIndent(e.target.value as '2' | '4')}
            className="rounded-lg border px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2"
            style={{
              borderColor: 'rgb(var(--border-strong))',
              backgroundColor: 'rgb(var(--bg-card))',
              color: 'rgb(var(--text))',
            }}
          >
            <option value="2">{L('twoSpaces', '2 spaces')}</option>
            <option value="4">{L('fourSpaces', '4 spaces')}</option>
          </select>
        </div>
      </div>

      {/* 输入区 */}
      <div>
        <label htmlFor="beautify-input" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('pasteYour', 'Paste your')} {LANGS.find((l) => l.key === lang)?.label} {L('code', 'code')}
        </label>
        <textarea
          id="beautify-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={PLACEHOLDER[lang]}
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

      {/* 错误提示(主要是 JSON 解析错误) */}
      {result.error && (
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700">
          ⚠️ {result.error}
        </div>
      )}

      {/* 输出区 */}
      {result.output && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
              {L('beautifiedOutput', 'Beautified output')}
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
            filename={`beautified.${EXT[lang]}`}
            downloadContent={result.output}
          />
        </div>
      )}

      <p
        className="rounded-md p-3 text-xs"
        style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}
      >
        {L('note', '🔒 100% client-side — your code is formatted in your browser only and never sent to any server.')}
      </p>
    </div>
  )
}
