'use client'

import { makeTextTool } from '../tools/makeTextTool'
import { tui } from '@/lib/i18n/tool-l10n'
import { hasCJK } from '@/lib/text-stats'

/**
 * 批量文本工具 - 全部用 makeTextTool 工厂,每个仅需一个 transform 函数
 */

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
    // Unicode 感知的词首大写:\b\w 会把「ñ 后的 o」当词首(EspañOl),
    // 改为「行首或非[字母数字_]字符后的字母」才大写,ASCII 行为与 \b\w 完全一致
    const out = t
      .toLowerCase()
      .replace(/(^|[^\p{L}\p{N}_])(\p{L})/gu, (_m, p1: string, p2: string) => p1 + p2.toUpperCase())
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
  outputLabel: 'Sorted (A → Z)',
  defaultInput: 'cherry\napple\ndate\nbanana',
  transform: (t) =>
    t
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b))
      .join('\n'),
  note: '🔤 Sorts lines alphabetically. Empty lines are removed.',
})

export const RemoveLineBreaksClient = makeTextTool({
  slug: 'remove-line-breaks',
  inputLabel: 'Your text',
  outputLabel: 'Single line',
  defaultInput: 'This text\nspans multiple\nlines.',
  transform: (t) => t.replace(/\r?\n+/g, ' ').replace(/\s+/g, ' ').trim(),
  note: '📝 Removes all line breaks and joins text into a single line.',
})

export const FindReplaceClient = makeTextTool({
  slug: 'find-and-replace',
  inputLabel: 'Format: text ||| find ||| replace\n(separate with " ||| ")',
  outputLabel: 'Result',
  defaultInput: 'I love cats and cats are great ||| cats ||| dogs',
  transform: (t) => {
    // 只在前两个分隔符处切开:正文自身含 ||| 时不能丢第 4 段起的内容
    const i1 = t.indexOf('|||')
    if (i1 === -1) return '⚠️ Use format: text ||| find ||| replace'
    const rest = t.slice(i1 + 3)
    const i2 = rest.indexOf('|||')
    if (i2 === -1) return '⚠️ Use format: text ||| find ||| replace'
    const text = t.slice(0, i1).replace(/\s+$/, '')
    const find = rest.slice(0, i2).trim()
    const replace = rest.slice(i2 + 3).replace(/^\s+/, '')
    if (!find) return text
    return text.split(find).join(replace)
  },
  note: '🔍 Separate your text, search term, and replacement with " ||| ". Example: hello world ||| world ||| there',
})

export const WhitespaceRemoverClient = makeTextTool({
  inputLabel: 'Your text',
  outputLabel: 'Trimmed',
  defaultInput: '   Hello    World   \n\n  extra   spaces  ',
  transform: (t) =>
    t
      .split(/\r?\n/)
      .map((l) => l.replace(/\s+/g, ' ').trim())
      .filter(Boolean)
      .join('\n'),
  note: '🧹 Removes leading/trailing spaces and collapses multiple spaces into one.',
})
