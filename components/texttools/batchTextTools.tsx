'use client'

import { makeTextTool } from '../tools/makeTextTool'

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
  transform: (t) =>
    t.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()),
  note: '📝 Capitalizes the first letter of each word. Ideal for titles and headings.',
})

export const SentenceCaseConverterClient = makeTextTool({
  slug: 'sentence-case-converter',
  inputLabel: 'Your text',
  outputLabel: 'Sentence case',
  defaultInput: 'hello. my name is john. how are you?',
  transform: (t) => {
    let out = t.toLowerCase()
    out = out.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
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
  note: '🔁 Reverses all characters. Fun for puzzles and ciphers.',
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
    const parts = t.split(/\s*\|\|\|\s*/)
    if (parts.length < 3) return '⚠️ Use format: text ||| find ||| replace'
    const [text, find, replace] = parts
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
