'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { ResultActions } from '@/components/ResultActions'

/**
 * Deep Text Cleaner(组件名 TextScrubber,与既有 TextCleanerClient 区分)
 *
 * 可切换的清洗管道:emoji/象形符号、变音符、特殊字符(可配置保留集)、
 * 多余空格、行首尾空白、空行、URL、HTML 标签、小写化。100% 本地。
 */

const SAMPLE_TEXT = `<p>Hello   WORLD!! 🎉🚀 Check this: https://example.com/page?id=42</p>

Café  naïve   résumé — the QUICK brown fox 🦊 jumps over the lazy dog...


<b>Warning:</b>   Too    many     spaces here 😅 & weird © symbols ™ everywhere!!

Visit www.example.com or email <i>someone@example.com</i> for details ✉️`

// Emoji:扩展象形文字 + 杂项符号(U+2600-27BF)+ 符号箭头(U+2B00-2BFF)
// + 地区指示符/肤色(U+1F1E6-1F1FF, U+1F3FB-1F3FF)+ 变体选择符(U+FE00-FE0F)+ ZWJ
const EMOJI_RE =
  /[☀-➿⬀-⯿️‍\p{Extended_Pictographic}🇦-🇿🏻-🏿]/gu
const URL_RE = /(?:https?:\/\/|www\.)[^\s<>"']+/gi
const HTML_TAG_RE = /<\/?[a-zA-Z][^>]*>/g
const DIACRITICS_RE = /[̀-ͯ]/g

interface CleanOptions {
  stripEmojis: boolean
  removeAccents: boolean
  removeSpecial: boolean
  keepChars: string
  collapseSpaces: boolean
  trimLines: boolean
  removeEmptyLines: boolean
  stripUrls: boolean
  stripHtml: boolean
  lowercase: boolean
}

function escapeForCharClass(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\-]/g, '\\$&')
}

function cleanText(input: string, opts: CleanOptions): string {
  let out = input
  if (opts.stripHtml) out = out.replace(HTML_TAG_RE, '')
  if (opts.stripUrls) out = out.replace(URL_RE, '')
  if (opts.stripEmojis) out = out.replace(EMOJI_RE, '')
  if (opts.removeAccents) out = out.normalize('NFD').replace(DIACRITICS_RE, '')
  if (opts.removeSpecial) {
    const keep = escapeForCharClass(opts.keepChars)
    try {
      out = out.replace(new RegExp(`[^a-zA-Z0-9\\s${keep}]`, 'g'), '')
    } catch {
      // 保底:理论上 escape 后不会失败
    }
  }
  if (opts.lowercase) out = out.toLowerCase()
  if (opts.collapseSpaces) out = out.replace(/[^\S\n]+/g, ' ')
  if (opts.trimLines) out = out.split('\n').map((l) => l.trim()).join('\n')
  if (opts.removeEmptyLines) out = out.split('\n').filter((l) => l.trim() !== '').join('\n')
  return out
}

interface ToggleDef {
  key: keyof Omit<CleanOptions, 'keepChars'>
  label: string
  hint: string
}

const TOGGLES: ToggleDef[] = [
  { key: 'stripEmojis', label: 'Strip emojis & pictographs', hint: 'Removes 😀 symbols, dingbats, flags' },
  { key: 'removeAccents', label: 'Remove accents & diacritics', hint: 'café → cafe, naïve → naive' },
  { key: 'removeSpecial', label: 'Remove special characters', hint: 'Keep letters, digits, spaces + your list' },
  { key: 'stripUrls', label: 'Strip URLs', hint: 'Removes http(s):// and www. links' },
  { key: 'stripHtml', label: 'Strip HTML tags', hint: '<b>bold</b> → bold' },
  { key: 'lowercase', label: 'Convert to lowercase', hint: 'ABC → abc' },
  { key: 'collapseSpaces', label: 'Collapse multiple spaces', hint: 'a    b → a b' },
  { key: 'trimLines', label: 'Trim each line', hint: 'Removes leading/trailing whitespace per line' },
  { key: 'removeEmptyLines', label: 'Remove empty lines', hint: 'Deletes blank lines' },
]

const inputStyle = {
  borderColor: 'rgb(var(--border-strong))',
  backgroundColor: 'rgb(var(--bg-card))',
  color: 'rgb(var(--text))',
}

export function TextScrubberClient() {
  const [input, setInput] = useState('')
  const [opts, setOpts] = useState<CleanOptions>({
    stripEmojis: false,
    removeAccents: false,
    removeSpecial: false,
    keepChars: `.,!?-'"`,
    collapseSpaces: true,
    trimLines: true,
    removeEmptyLines: true,
    stripUrls: false,
    stripHtml: false,
    lowercase: false,
  })

  const output = useMemo(() => cleanText(input, opts), [input, opts])

  const toggle = useCallback((key: ToggleDef['key']) => {
    setOpts((prev) => ({ ...prev, [key]: !prev[key] }))
  }, [])

  const setKeepChars = useCallback((v: string) => {
    setOpts((prev) => ({ ...prev, keepChars: v }))
  }, [])

  const handleLoadSample = useCallback(() => {
    setInput(SAMPLE_TEXT)
    setOpts((prev) => ({
      ...prev,
      stripEmojis: true,
      removeAccents: true,
      stripUrls: true,
      stripHtml: true,
    }))
  }, [])

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="scrub-input" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            Paste messy text
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
                Clear
              </button>
            )}
          </div>
        </div>
        <textarea
          id="scrub-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste or type the text you want to clean…"
          rows={8}
          spellCheck={false}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={inputStyle}
        />
      </div>

      {/* 清洗选项 */}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {TOGGLES.map((t) => (
          <label
            key={t.key}
            className="flex cursor-pointer items-start gap-2 rounded-lg border p-3 text-sm transition"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}
          >
            <input
              type="checkbox"
              checked={opts[t.key]}
              onChange={() => toggle(t.key)}
              className="mt-0.5 h-4 w-4 accent-blue-600"
            />
            <span>
              <span className="block font-medium" style={{ color: 'rgb(var(--text))' }}>{t.label}</span>
              <span className="block text-xs" style={{ color: 'rgb(var(--text-faint))' }}>{t.hint}</span>
            </span>
          </label>
        ))}
      </div>

      {/* 特殊字符保留集 */}
      {opts.removeSpecial && (
        <div>
          <label htmlFor="scrub-keep" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            Characters to keep (besides letters, digits, spaces)
          </label>
          <input
            id="scrub-keep"
            type="text"
            value={opts.keepChars}
            onChange={(e) => setKeepChars(e.target.value)}
            spellCheck={false}
            className="w-full max-w-md rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
            style={inputStyle}
          />
        </div>
      )}

      {/* 输出区 */}
      {input && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
              Cleaned text — {input.length.toLocaleString('en-US')} chars → {output.length.toLocaleString('en-US')} chars
              <span style={{ color: 'rgb(var(--text-faint))' }}>
                {' '}({(input.length - output.length).toLocaleString('en-US')} removed)
              </span>
            </span>
            <CopyButton value={output} label="Copy" />
          </div>
          <textarea
            readOnly
            value={output}
            rows={8}
            spellCheck={false}
            className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}
          />
          <ResultActions
            summary={output}
            filename="cleaned.txt"
            downloadContent={output}
            disabled={!output}
            copyLabel="Copy cleaned text"
          />
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        🔒 100% client-side — your text never leaves your browser.
      </p>
    </div>
  )
}
