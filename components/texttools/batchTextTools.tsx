'use client'

import { useState, useMemo } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { makeTextTool } from '../tools/makeTextTool'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { hasCJK } from '@/lib/text-stats'

/**
 * 批量文本工具 - 除 FindReplaceClient 外全部用 makeTextTool 工厂,每个仅需一个 transform 函数
 */

/** 词首大写辅助:撇号(' 与 ’ U+2019)不算词边界 —— "don't" 不会变成 "Don'T" */
function titleCaseWords(t: string): string {
  return t.replace(
    /(^|[^\p{L}\p{N}_'\u2019])(\p{L})/gu,
    (_m, p1: string, p2: string) => p1 + p2.toUpperCase(),
  )
}

export const UppercaseConverterClient = makeTextTool({
  slug: 'uppercase-converter',
  inputLabel: 'Your text',
  outputLabel: 'UPPERCASE',
  placeholder: 'Type or paste text...',
  defaultInput: 'Hello World',
  transform: (t) => t.toUpperCase(),
  note: '🔤 Converts every letter to uppercase. Useful for titles, headings, and emphasis.',
})

export const LowercaseConverterClient = makeTextTool({
  slug: 'lowercase-converter',
  inputLabel: 'Your text',
  outputLabel: 'lowercase',
  placeholder: 'Type or paste text...',
  defaultInput: 'Hello World',
  transform: (t) => t.toLowerCase(),
  note: '🔡 Converts every letter to lowercase. Useful for emails, URLs, and code.',
})

export const TitleCaseConverterClient = makeTextTool({
  slug: 'title-case-converter',
  inputLabel: 'Your text',
  outputLabel: 'Title Case',
  defaultInput: 'the quick brown fox',
  transform: (t, locale) => {
    // Unicode 感知的词首大写(titleCaseWords):\b\w 会把「ñ 后的 o」当词首(EspañOl),
    // 且撇号不算词边界,"don't" 保持 "Don't" 而非 "Don'T"
    const out = titleCaseWords(t.toLowerCase())
    // 纯中文无大小写概念:明确提示而非静默无效果
    if (out === t && hasCJK(t)) {
      return t + '\n\n' + tui('title-case-converter', locale, 'cjkNoEffectNote', 'ℹ️ Case conversion only affects Latin letters — Chinese characters are unchanged.')
    }
    return out
  },
  note: '📝 Capitalizes the first letter of each word. Ideal for titles and headings.',
})

export const SentenceCaseConverterClient = makeTextTool({
  slug: 'sentence-case-converter',
  inputLabel: 'Your text',
  outputLabel: 'Sentence case',
  defaultInput: 'hello. my name is john. how are you?',
  transform: (t, locale) => {
    let out = t.toLowerCase()
    // 句末标点扩展中文全角(。！?),中文句读后的拉丁词也能触发句首大写;
    // 词首用 \p{L} 匹配,带变音符的首字母(é/ñ/ü)也能正确大写
    out = out.replace(/(^\s*\p{L}|[.!?。！？]\s*\p{L})/gu, (c) => c.toUpperCase())
    if (out === t && hasCJK(t)) {
      return t + '\n\n' + tui('sentence-case-converter', locale, 'cjkNoEffectNote', 'ℹ️ Case conversion only affects Latin letters — Chinese characters are unchanged.')
    }
    return out
  },
  note: '✍️ Capitalizes the first letter of each sentence. Preserves proper nouns best manually.',
})

export const ReverseTextClient = makeTextTool({
  slug: 'reverse-text',
  inputLabel: 'Your text',
  outputLabel: 'Reversed',
  defaultInput: 'Hello World',
  transform: (t) => [...t].reverse().join(''),
  note: '🔁 Reverses all characters. Multi-codepoint emoji (ZWJ sequences, flags) and combining marks may split apart. Fun for puzzles and ciphers.',
})

export const RemoveDuplicatesClient = makeTextTool({
  slug: 'remove-duplicate-lines',
  inputLabel: 'List (one item per line)',
  outputLabel: 'Unique items',
  defaultInput: 'apple\nbanana\napple\ncherry\nbanana\ndate',
  transform: (t) => {
    const lines = t.split(/\r?\n/)
    const seen = new Set<string>()
    const result: string[] = []
    for (const line of lines) {
      const trimmed = line.trim()
      if (trimmed && !seen.has(trimmed)) {
        seen.add(trimmed)
        result.push(trimmed)
      }
    }
    return result.join('\n')
  },
  note: '🗑️ Removes duplicate lines while preserving order. Great for cleaning up lists.',
})

export const SortLinesClient = makeTextTool({
  slug: 'sort-lines',
  inputLabel: 'List (one item per line)',
  outputLabel: 'Sorted',
  defaultInput: 'cherry\napple\ndate\nbanana',
  transform: (t) => {
    // 可选排序指令:列表末尾追加 " ||| numeric"(按数值自然排序)/ " ||| desc"(降序)
    // / " ||| numeric,desc";尾段不是合法指令时整段按列表处理,无指令保持默认(字母升序)
    let body = t
    let numeric = false
    let desc = false
    const i = t.lastIndexOf('|||')
    if (i !== -1) {
      const words = t
        .slice(i + 3)
        .trim()
        .toLowerCase()
        .split(',')
        .map((w) => w.trim())
        .filter(Boolean)
      if (words.length > 0 && words.every((w) => w === 'numeric' || w === 'desc')) {
        body = t.slice(0, i)
        numeric = words.includes('numeric')
        desc = words.includes('desc')
      }
    }
    const cmp = (a: string, b: string) => a.localeCompare(b, undefined, numeric ? { numeric: true } : undefined)
    return body
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      .sort((a, b) => (desc ? cmp(b, a) : cmp(a, b)))
      .join('\n')
  },
  note: '🔤 Sorts lines alphabetically. Empty lines are removed. Optional instructions after " ||| ": numeric (natural number order, e.g. 9 before 10), desc (Z → A), or "numeric,desc".',
})

export const RemoveLineBreaksClient = makeTextTool({
  slug: 'remove-line-breaks',
  inputLabel: 'Your text',
  outputLabel: 'Single line',
  defaultInput: 'This text\nspans multiple\nlines.',
  transform: (t) => t.replace(/\r?\n+/g, ' ').replace(/\s+/g, ' ').trim(),
  note: '📝 Removes all line breaks and joins text into a single line.',
})

/**
 * Find & Replace —— 自定义多控件组件(正文 + Find + Replace + Case sensitive/Regex)
 * 交互与样式参照 TextCleanerClient;导出名保持不变,页面 import 不受影响。
 */
export function FindReplaceClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)
  const L = (key: string, fb: string) => tui('find-and-replace', locale, key, fb)
  const [text, setText] = useState('')
  const [findStr, setFindStr] = useState('')
  const [replaceStr, setReplaceStr] = useState('')
  const [caseSensitive, setCaseSensitive] = useState(false)
  const [useRegex, setUseRegex] = useState(false)

  const { output, regexError, tooLong } = useMemo(() => {
    if (!findStr) return { output: text, regexError: false, tooLong: false }
    // 正则路径防灾难性回溯:嵌套量词 + 大文本会冻死标签页
    // (字面路径已转义元字符,线性安全;与 TextDiff 的输入上限同思路)
    if (useRegex && text.length > 100_000) {
      return { output: '', regexError: false, tooLong: true }
    }
    const flags = caseSensitive ? 'g' : 'gi'
    if (useRegex) {
      try {
        return { output: text.replace(new RegExp(findStr, flags), replaceStr), regexError: false, tooLong: false }
      } catch {
        // 非法正则:友好报错而非抛出
        return { output: '', regexError: true, tooLong: false }
      }
    }
    // 字面查找:查找词转义正则元字符;替换串的 $ 转成 $$ 保持字面语义($&/$1 不被解释)
    const re = new RegExp(findStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags)
    return { output: text.replace(re, replaceStr.replace(/\$/g, '$$$$')), regexError: false, tooLong: false }
  }, [text, findStr, replaceStr, caseSensitive, useRegex])

  const inputStyle = {
    borderColor: 'rgb(var(--border-strong))',
    backgroundColor: 'rgb(var(--bg-card))',
    color: 'rgb(var(--text))',
  }

  return (
    <div className="space-y-5">
      {/* 正文输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="fr-text" className="text-sm font-medium text-slate-700">
            {L('inputLabel', 'Your text')}
          </label>
          {text && (
            <button
              type="button"
              onClick={() => setText('')}
              className="-my-1 rounded-md px-2 py-1 text-xs text-slate-400 hover:text-red-500 sm:text-sm"
            >
              {L('clear', 'Clear')}
            </button>
          )}
        </div>
        <textarea
          id="fr-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={L('placeholder', 'Type or paste text...')}
          rows={6}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={inputStyle}
        />
      </div>

      {/* Find / Replace */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="fr-find" className="mb-1.5 block text-sm font-medium text-slate-700">
            {L('findLabel', 'Find')}
          </label>
          <input
            id="fr-find"
            type="text"
            value={findStr}
            onChange={(e) => setFindStr(e.target.value)}
            spellCheck={false}
            className="w-full rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="fr-replace" className="mb-1.5 block text-sm font-medium text-slate-700">
            {L('replaceLabel', 'Replace with')}
          </label>
          <input
            id="fr-replace"
            type="text"
            value={replaceStr}
            onChange={(e) => setReplaceStr(e.target.value)}
            spellCheck={false}
            className="w-full rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
            style={inputStyle}
          />
        </div>
      </div>

      {/* 选项 */}
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
            className="h-4 w-4 rounded"
          />
          {L('caseSensitive', 'Case sensitive')}
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          <input
            type="checkbox"
            checked={useRegex}
            onChange={(e) => setUseRegex(e.target.checked)}
            className="h-4 w-4 rounded"
          />
          {L('regexLabel', 'Regex')}
        </label>
      </div>

      {/* 输出区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('outputLabel', 'Result')}
          </label>
          <CopyButton value={output} disabled={!output} />
        </div>
        {regexError ? (
          <p
            className="rounded-lg border-2 p-4 font-mono text-sm"
            style={{ borderColor: 'rgb(254 202 202)', backgroundColor: 'rgb(254 226 226 / 0.4)', color: 'rgb(var(--text))' }}
          >
            {L('invalidRegex', '⚠️ Invalid regular expression — check your pattern syntax')}
          </p>
        ) : tooLong ? (
          <p
            className="rounded-lg border-2 p-4 font-mono text-sm"
            style={{ borderColor: 'rgb(253 230 138)', backgroundColor: 'rgb(254 249 195 / 0.4)', color: 'rgb(var(--text))' }}
          >
            {L('textTooLong', '⚠️ Text exceeds 100,000 characters — regex mode is disabled for very large text to keep the page responsive. Use literal (non-regex) mode instead.')}
          </p>
        ) : (
          <textarea
            readOnly
            value={output}
            placeholder={L('resultPlaceholder', 'Result will appear here...')}
            rows={6}
            className="w-full rounded-lg border-2 p-4 font-mono text-sm outline-none"
            style={{
              borderColor: 'rgb(219 234 254)', // brand-100
              backgroundColor: 'rgb(219 234 254 / 0.4)', // brand-50/40
              color: 'rgb(var(--text))',
            }}
          />
        )}
      </div>

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🔍 Replaces every match. Toggle "Regex" for patterns (e.g. \\d+) — $1 backreferences work in the replacement. Matching is case-insensitive unless "Case sensitive" is checked.')}
      </p>
    </div>
  )
}
