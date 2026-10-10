'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { ResultActions } from '@/components/ResultActions'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Code Beautifier —— HTML / CSS / JavaScript / JSON 格式化
 *
 * 手写 tokenizer,字符串/注释感知:
 *  - JSON:JSON.parse + stringify(解析错误直接提示)
 *  - CSS:{ 后换行缩进,} 前后换行,; 后换行(括号/字符串内除外),括号内逗号不加空格(url() data URI 安全)
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

// 输入长度上限:CSS/JS tokenizer 已是 O(n)(parts+pend 累积),HTML 为正则分词;
// 100k 上限仍保留,防止百万级粘贴拖垮内存与一次性 join。
const MAX_INPUT_LEN = 100_000

const PLACEHOLDER: Record<Lang, string> = {
  html: '<div class="card"><h1>Hello</h1><p>Some <strong>bold</strong> text</p></div>',
  css: '.card{color:#333;background:#fff}.card h1{font-size:2rem;margin:0}',
  js: "const greet=(name)=>{if(!name){return 'hi'}else{return `hello ${name}`}}",
  json: '{ "name": "Jane", "age": 30, "tags": ["a", "b"] }',
}

/* ---------------- CSS ---------------- */

function beautifyCss(src: string, unit: string): string {
  // 输出用「内容片段数组 + 待定尾部空白(pend)」累积:缩进/空格先挂起,下一个内容字符到达才落盘。
  // 这样尾部空白判定只看 pend / parts 尾段,不必在累计输出串上反复正则扫描(旧实现准 O(n²),
  // 100k 输入要跑数十秒);join 一次性收尾,整体 O(n)。
  const parts: string[] = []
  let pend = ''
  let level = 0
  let i = 0
  let inStr: string | null = null
  let inComment = false
  let paren = 0
  // 栈:当前 {} 是声明块(true,冒号后补空格)还是 at-rule 块(false)
  const ctx: boolean[] = []

  const emit = (s: string) => {
    if (s === '') return
    if (pend !== '') {
      parts.push(pend)
      pend = ''
    }
    parts.push(s)
  }
  // 等价旧实现的 out.replace(/\s+$/,''):剥掉 parts 尾段与 pend 的全部尾部空白(含换行)
  const trimAll = () => {
    while (parts.length > 0) {
      const t = parts[parts.length - 1]
      const trimmed = t.replace(/\s+$/, '')
      if (trimmed === t) break
      if (trimmed !== '') {
        parts[parts.length - 1] = trimmed
        break
      }
      parts.pop()
    }
    pend = ''
  }
  const trimSpaces = () => {
    pend = pend.replace(/[ \t]+$/, '')
  }
  // 等价旧 freshLine:/(^|\n)[ \t]*$/.test(out)
  const freshLine = () => (pend !== '' ? /(^|\n)[ \t]*$/.test(pend) : parts.length === 0)
  // 等价旧实现「取最后一行,首非空白字符是否 '@」:从尾段回扫到上一个换行即止(各行互不重叠,总计 O(n))
  const lineStartsWithAt = () => {
    let ls = ''
    for (let p = parts.length - 1; p >= 0; p--) {
      const s = parts[p]
      const nlAt = s.lastIndexOf('\n')
      if (nlAt !== -1) {
        ls = s.slice(nlAt + 1) + ls
        break
      }
      ls = s + ls
    }
    const first = (ls + pend).match(/\S/)
    return first !== null && first[0] === '@'
  }
  // 流内最后一个原始字符(pend 优先;parts 尾段可能以注释尾空格收尾)
  const lastRawChar = () => {
    if (pend !== '') return pend[pend.length - 1]
    for (let p = parts.length - 1; p >= 0; p--) {
      const s = parts[p]
      if (s !== '') return s[s.length - 1]
    }
    return ''
  }

  while (i < src.length) {
    const c = src[i]

    if (inComment) {
      if (c === '*' && src[i + 1] === '/') {
        emit('*/')
        inComment = false
        i += 2
        trimAll()
        pend = '\n' + unit.repeat(level)
        continue
      }
      emit(c)
      i++
      continue
    }

    if (inStr) {
      if (c === '\\' && i + 1 < src.length) {
        emit(c + src[i + 1])
        i += 2
        continue
      }
      emit(c)
      if (c === inStr) inStr = null
      i++
      continue
    }

    if (c === '/' && src[i + 1] === '*') {
      emit('/*')
      inComment = true
      i += 2
      continue
    }
    if (c === '"' || c === "'") {
      emit(c)
      inStr = c
      i++
      continue
    }
    if (c === '(') {
      paren++
      emit(c)
      i++
      continue
    }
    if (c === ')') {
      paren = Math.max(0, paren - 1)
      trimSpaces()
      emit(c)
      i++
      continue
    }
    if (c === '{') {
      if (!freshLine()) {
        trimSpaces()
        pend = ' '
      }
      emit('{')
      // 行首是 @ → at-rule 块(内部还是选择器语境),否则是声明块
      ctx.push(!lineStartsWithAt())
      level++
      pend = '\n' + unit.repeat(level)
      i++
      continue
    }
    if (c === '}') {
      level = Math.max(0, level - 1)
      ctx.pop()
      trimAll()
      if (parts.length > 0 && parts[parts.length - 1].endsWith('{')) {
        emit('}')
      } else {
        parts.push('\n' + unit.repeat(level) + '}')
      }
      pend = '\n' + unit.repeat(level)
      i++
      continue
    }
    if (c === ';') {
      trimSpaces()
      emit(';')
      if (paren === 0) pend = '\n' + unit.repeat(level)
      i++
      continue
    }
    if (c === ':') {
      trimSpaces()
      emit(':')
      // 声明块内(且不在括号里)的冒号后补空格:color: red;选择器 a:hover 不受影响
      if (paren === 0 && ctx[ctx.length - 1]) pend = ' '
      i++
      continue
    }
    if (c === ',') {
      trimSpaces()
      emit(',')
      // 括号内不加空格:未加引号的 url()(如 data URI)内部一出现空白即成 bad-url,浏览器会整条丢弃
      if (paren === 0) pend = ' '
      i++
      continue
    }
    if (/\s/.test(c)) {
      if (parts.length !== 0 || pend !== '') {
        const lc = lastRawChar()
        if (lc !== '' && !/\s/.test(lc) && lc !== '(') pend += ' '
      }
      i++
      continue
    }
    emit(c)
    i++
  }
  return (parts.join('') + pend).trim()
}

/* ---------------- JavaScript ---------------- */

// 这些符号/关键词之后的 `/` 视为正则起点(启发式)
const REGEX_CHARS = new Set(['', '(', ',', '=', ':', '[', '!', '&', '|', '?', '{', '}', ';', '+', '-', '*', '%', '^', '~', '<', '>'])
const REGEX_WORDS = new Set(['return', 'typeof', 'case', 'in', 'of', 'delete', 'void', 'instanceof', 'new', 'throw', 'else', 'do', 'yield', 'await'])

function beautifyJs(src: string, unit: string): string {
  // 同 beautifyCss:parts + pend 累积,尾部字符/单词查询只扫尾段,O(n) 总复杂度
  const parts: string[] = []
  let pend = ''
  let level = 0
  let paren = 0
  let i = 0
  let str: string | null = null

  const emit = (s: string) => {
    if (s === '') return
    if (pend !== '') {
      parts.push(pend)
      pend = ''
    }
    parts.push(s)
  }
  const trimSpaces = () => {
    pend = pend.replace(/[ \t]+$/, '')
  }
  // 剥掉 parts 尾段的全部尾部空白(行注释可能以空格收尾),等价 out.replace(/\s+$/,'')
  const stripTailWs = () => {
    while (parts.length > 0) {
      const t = parts[parts.length - 1]
      const trimmed = t.replace(/\s+$/, '')
      if (trimmed === t) break
      if (trimmed !== '') {
        parts[parts.length - 1] = trimmed
        break
      }
      parts.pop()
    }
  }
  const nl = () => {
    stripTailWs()
    pend = '\n' + unit.repeat(level)
  }
  const lastChar = () => {
    for (let p = parts.length - 1; p >= 0; p--) {
      const s = parts[p]
      for (let k = s.length - 1; k >= 0; k--) {
        if (!/\s/.test(s[k])) return s[k]
      }
    }
    return ''
  }
  const lastWord = () => {
    let w = ''
    for (let p = parts.length - 1; p >= 0; p--) {
      const s = parts[p]
      for (let k = s.length - 1; k >= 0; k--) {
        const ch = s[k]
        if (/[A-Za-z0-9_$]/.test(ch)) w = ch + w
        else if (/\s/.test(ch)) {
          if (w !== '') return w
        } else return w
      }
    }
    return w
  }
  const freshLine = () => (pend !== '' ? /(^|\n)[ \t]*$/.test(pend) : parts.length === 0)
  const lastRawChar = () => {
    if (pend !== '') return pend[pend.length - 1]
    for (let p = parts.length - 1; p >= 0; p--) {
      const s = parts[p]
      if (s !== '') return s[s.length - 1]
    }
    return ''
  }

  while (i < src.length) {
    const c = src[i]

    if (str) {
      if (c === '\\' && i + 1 < src.length) {
        emit(c + src[i + 1])
        i += 2
        continue
      }
      emit(c)
      if (c === str) str = null
      i++
      continue
    }

    // 行注释
    if (c === '/' && src[i + 1] === '/') {
      const start = i
      while (i < src.length && src[i] !== '\n') i++
      emit(src.slice(start, i))
      nl()
      continue
    }
    // 块注释
    if (c === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2)
      const comment = end === -1 ? src.slice(i) : src.slice(i, end + 2)
      emit(comment)
      i = end === -1 ? src.length : end + 2
      if (comment.includes('\n')) nl()
      continue
    }
    // 字符串 / 模板串(模板串整体跳过,内部 ${} 不格式化)
    if (c === '"' || c === "'" || c === '`') {
      str = c
      emit(c)
      i++
      continue
    }
    // 正则字面量(启发式)
    if (c === '/' && (REGEX_CHARS.has(lastChar()) || REGEX_WORDS.has(lastWord()))) {
      emit('/')
      i++
      let inClass = false
      let closed = false
      while (i < src.length) {
        const r = src[i]
        if (r === '\n') break
        if (r === '\\' && i + 1 < src.length) {
          emit(r + src[i + 1])
          i += 2
          continue
        }
        emit(r)
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
        const start = i
        while (i < src.length && /[a-z]/i.test(src[i])) i++
        emit(src.slice(start, i))
      }
      continue
    }

    if (c === '(' || c === '[') {
      paren++
      emit(c)
      i++
      continue
    }
    if (c === ')' || c === ']') {
      paren = Math.max(0, paren - 1)
      trimSpaces()
      emit(c)
      i++
      continue
    }

    if (c === '{') {
      // { 前确保恰好一个空格((/[/行首 除外):if (x) { / const o = {
      if (!freshLine()) {
        const lc = lastChar()
        if (lc !== '' && lc !== '(' && lc !== '[') {
          trimSpaces()
          pend = ' '
        }
      }
      emit('{')
      level++
      nl()
      i++
      continue
    }
    if (c === '}') {
      level = Math.max(0, level - 1)
      stripTailWs()
      pend = ''
      if (parts.length > 0 && parts[parts.length - 1].endsWith('{')) {
        emit('}')
      } else {
        parts.push('\n' + unit.repeat(level) + '}')
      }
      // 看下一个有效字符:; , ) ] . : 紧跟;else/catch/while 等同行空一格;其余换行
      let j = i + 1
      while (j < src.length && /\s/.test(src[j])) j++
      const next = j < src.length ? src[j] : ''
      if (next === ';' || next === ',' || next === ')' || next === ']' || next === '.' || next === ':') {
        // 紧跟,交给后续规则
      } else if (/[A-Za-z_$]/.test(next)) {
        pend = ' '
      } else {
        nl()
      }
      i++
      continue
    }
    if (c === ';') {
      trimSpaces()
      emit(';')
      if (paren === 0) nl()
      else pend = ' '
      i++
      continue
    }
    if (c === ':') {
      // 对象字面量/三元冒号后补空格:{a: 1}
      trimSpaces()
      emit(':')
      pend = ' '
      i++
      continue
    }
    if (c === '=') {
      // 箭头函数与赋值号规范空格;==/===/<=/>=/!=/+= 等复合运算符不动
      let nx = i + 1
      while (nx < src.length && /\s/.test(src[nx])) nx++
      if (nx < src.length && src[nx] === '>') {
        trimSpaces()
        pend += ' '
        emit('=>')
        pend = ' '
        i = nx + 1
        continue
      }
      const prev = lastChar()
      const nextCh = nx < src.length ? src[nx] : ''
      if ('=<>!+-*/%&|^?'.includes(prev) || nextCh === '=') {
        emit('=')
        i++
        continue
      }
      trimSpaces()
      pend += ' '
      emit('=')
      pend = ' '
      i++
      continue
    }
    if (c === ',') {
      trimSpaces()
      emit(',')
      pend = ' '
      i++
      continue
    }
    if (/\s/.test(c)) {
      if (parts.length !== 0 || pend !== '') {
        const lc = lastRawChar()
        if (lc !== '' && !/\s/.test(lc) && lc !== '(' && lc !== '[' && lc !== '{') pend += ' '
      }
      i++
      continue
    }
    emit(c)
    i++
  }
  return (parts.join('') + pend).trim()
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

  const result = useMemo<{ output?: string; error?: string; truncated?: boolean }>(() => {
    if (input.length > MAX_INPUT_LEN) return { truncated: true }
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

  // 各语言的示例:直接复用 placeholder 单行片段(足够代表性,载入即出格式化结果)
  const handleLoadSample = useCallback(() => setInput(PLACEHOLDER[lang]), [lang])

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
              aria-pressed={lang === l.key}
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

      {/* 输入区(与 curl/json-to-ts 同款:右上角 Load Sample,冷启动一键出结果) */}
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor="beautify-input" className="block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {/* 整句模板(各语种语序不同,如西语 "Pega tu código JavaScript");key 缺失时回退三段拼接 */}
            {L('pasteYourCode', '').replace('{lang}', LANGS.find((l) => l.key === lang)?.label ?? '') ||
              `${L('pasteYour', 'Paste your')} ${LANGS.find((l) => l.key === lang)?.label ?? ''} ${L('code', 'code')}`}
          </label>
          <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
        </div>
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

      {/* 超长输入防线:不再格式化,给出明确提示 */}
      {result.truncated && (
        <p role="alert" className="rounded-lg border-2 p-4 text-sm" style={{ borderColor: 'rgb(253 230 138)', backgroundColor: 'rgb(254 249 195 / 0.4)', color: 'rgb(var(--text))' }}>
          {L('tooLong', '⚠️ Input exceeds the supported size (100,000 characters). Trim the input to format it.')}
        </p>
      )}

      {/* 错误提示(主要是 JSON 解析错误;随每次按键重算,礼貌播报) */}
      {result.error && (
        <div role="status" className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">
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
            className="max-h-96 w-full overflow-auto rounded-lg border p-4 font-mono text-sm shadow-sm"
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
