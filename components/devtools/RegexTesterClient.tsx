'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'

/**
 * Regex Tester & Explainer
 *
 * 输入:pattern / flags / 测试文本。实时:
 *  - 高亮所有匹配(把文本拆成 matched/unmatched 段,渲染带底色的 <mark>)
 *  - 列出每次匹配 + 各 capture group 的值
 *  - 附常用语法速查表(cheat sheet)
 * 100% 本地,用浏览器原生 RegExp 引擎。
 */

const SAMPLE = `Order #1024: 2x Widget ($19.99), shipped 2024-03-15.
Order #1025: 1x Gadget ($7.50), shipped 2024-03-16.
Contact: support@example.com or call +1-800-555-0199.`

interface HighlightSegment {
  text: string
  matched: boolean
}

interface MatchDetail {
  index: number
  match: string
  groups: (string | undefined)[]
}

/** 安全编译正则;非法时返回 error 字符串 */
function safeCompile(pattern: string, flags: string): { re?: RegExp; error?: string } {
  if (!pattern) return {}
  try {
    // 去重 flags(用户可能重复输入 g)
    const uniqueFlags = Array.from(new Set(flags.split(''))).join('')
    return { re: new RegExp(pattern, uniqueFlags) }
  } catch (e) {
    return { error: e instanceof Error ? e.message : 'Invalid regex' }
  }
}

/** 把测试文本按匹配切成段,用于高亮渲染 */
function buildSegments(text: string, re: RegExp): HighlightSegment[] {
  const globalRe = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g')
  const segments: HighlightSegment[] = []
  let last = 0
  let m: RegExpExecArray | null
  let safety = 0
  while ((m = globalRe.exec(text)) !== null) {
    // 防止零宽匹配死循环(exec 不前进)
    if (m.index === last && m[0].length === 0) {
      globalRe.lastIndex++
      continue
    }
    if (m.index > last) {
      segments.push({ text: text.slice(last, m.index), matched: false })
    }
    segments.push({ text: m[0], matched: true })
    last = m.index + m[0].length
    if (++safety > 5000) break
  }
  if (last < text.length) {
    segments.push({ text: text.slice(last), matched: false })
  }
  return segments
}

/** 收集所有匹配的详情(含 capture groups) */
function collectMatches(text: string, re: RegExp): MatchDetail[] {
  const globalRe = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g')
  const details: MatchDetail[] = []
  let m: RegExpExecArray | null
  let safety = 0
  while ((m = globalRe.exec(text)) !== null) {
    if (m.index === globalRe.lastIndex && m[0].length === 0) {
      globalRe.lastIndex++
      continue
    }
    details.push({
      index: m.index,
      match: m[0],
      groups: m.slice(1),
    })
    if (++safety > 200) break
  }
  return details
}

const CHEAT_SHEET: { syntax: string; desc: string }[] = [
  { syntax: '.', desc: '任意字符(不含换行,除非用 s flag)' },
  { syntax: '\\d \\D', desc: '数字 / 非数字' },
  { syntax: '\\w \\W', desc: '单词字符 [A-Za-z0-9_] / 非' },
  { syntax: '\\s \\S', desc: '空白 / 非空白' },
  { syntax: '^ $', desc: '行首 / 行尾(m flag 下)' },
  { syntax: '\\b \\B', desc: '单词边界 / 非边界' },
  { syntax: '[abc]', desc: '字符集(任选其一)' },
  { syntax: '[^abc]', desc: '取反字符集' },
  { syntax: 'a|b', desc: '或' },
  { syntax: '(...)', desc: '捕获组' },
  { syntax: '(?:...)', desc: '非捕获组' },
  { syntax: '(?<name>...)', desc: '命名捕获组' },
  { syntax: '* + ?', desc: '0+ / 1+ / 0或1' },
  { syntax: '{n} {n,m}', desc: '恰好 n 次 / n 到 m 次' },
  { syntax: '(?=...) (?!...)', desc: '正向 / 负向先行断言' },
]

const inputCls =
  'w-full rounded-lg border p-4 font-mono text-xs shadow-sm outline-none transition focus:ring-2'

// 防止 ReDoS / 性能问题的输入上限
const MAX_TEXT_LEN = 50000 // 测试文本长度上限(~50KB),超过截断,避免超长输入放大回溯

export function RegexTesterClient() {
  const [pattern, setPattern] = useState('')
  const [flags, setFlags] = useState('g')
  const [text, setText] = useState('')

  // 防抖:用户每按键都重新编译+全文扫描,对病态正则会反复触发回溯,
  // 且大文本全量扫描造成卡顿。加 200ms 防抖,只在输入停顿后执行一次。
  const [debouncedPattern, setDebouncedPattern] = useState('')
  const [debouncedText, setDebouncedText] = useState('')
  useEffect(() => {
    const id = setTimeout(() => setDebouncedPattern(pattern), 200)
    return () => clearTimeout(id)
  }, [pattern])
  useEffect(() => {
    const id = setTimeout(() => setDebouncedText(text), 200)
    return () => clearTimeout(id)
  }, [text])

  const handleLoadSample = useCallback(() => {
    setPattern('Order #(\\d+).*?\\$(\\d+[\\d.]*)')
    setFlags('g')
    setText(SAMPLE)
  }, [])

  // 实际参与编译/匹配的文本:截断到上限,防超长输入放大 ReDoS 回溯
  const safeText = debouncedText.length > MAX_TEXT_LEN ? debouncedText.slice(0, MAX_TEXT_LEN) : debouncedText
  const textTruncated = debouncedText.length > MAX_TEXT_LEN

  const compiled = useMemo(() => safeCompile(debouncedPattern, flags), [debouncedPattern, flags])

  const segments = useMemo<HighlightSegment[]>(() => {
    if (!compiled.re || !safeText) return []
    return buildSegments(safeText, compiled.re)
  }, [compiled, safeText])

  const matches = useMemo<MatchDetail[]>(() => {
    if (!compiled.re || !safeText) return []
    return collectMatches(safeText, compiled.re)
  }, [compiled, safeText])

  return (
    <div className="space-y-5">
      {/* 正则输入 + flags */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="regex-pattern" className="text-sm font-medium text-slate-700">
            Regular Expression
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1 rounded-lg border px-3 font-mono text-xs text-slate-400" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }}>
            /
          </div>
          <input
            id="regex-pattern"
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="\\d+"
            spellCheck={false}
            className={`${inputCls} flex-1`}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
          <div className="flex items-center gap-1 rounded-lg border px-3 font-mono text-xs text-slate-400" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }}>
            /
          </div>
          <input
            type="text"
            value={flags}
            onChange={(e) => setFlags(e.target.value.replace(/[^gimsuy]/g, ''))}
            placeholder="gim"
            spellCheck={false}
            className={`${inputCls} w-20 text-center`}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            title="Flags: g (global), i (case-insensitive), m (multiline), s (dotAll), u (unicode), y (sticky)"
          />
        </div>
        <p className="mt-1 text-[11px] text-slate-400">
          Flags: <code>g</code> global · <code>i</code> ignore case · <code>m</code> multiline · <code>s</code> dotAll · <code>u</code> unicode · <code>y</code> sticky
        </p>
      </div>

      {/* 错误提示 */}
      {compiled.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⚠️ {compiled.error}
        </div>
      )}

      {/* 文本超长截断提示(防 ReDoS / 性能退化) */}
      {textTruncated && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
          ⚠️ Text exceeds {MAX_TEXT_LEN.toLocaleString()} characters — truncated for matching to protect against slow/ReDoS patterns.
        </div>
      )}

      {/* 测试文本 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="regex-text" className="text-sm font-medium text-slate-700">
            Test Text
          </label>
          {matches.length > 0 && (
            <span className="rounded-md bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-950/50 dark:text-green-300">
              {matches.length} match{matches.length === 1 ? '' : 'es'}
            </span>
          )}
        </div>
        <textarea
          id="regex-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste the text you want to test against..."
          rows={6}
          spellCheck={false}
          className={inputCls}
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
        />
      </div>

      {/* 高亮结果 */}
      {segments.length > 0 && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">Highlighted Matches</span>
            <CopyButton value={matches.map((m) => m.match).join('\n')} label="Copy Matches" disabled={matches.length === 0} />
          </div>
          <pre
            className="whitespace-pre-wrap break-words rounded-lg border bg-slate-50 p-4 text-xs leading-relaxed"
            style={{ borderColor: 'rgb(var(--border))' }}
          >
            <code>
              {segments.map((seg, i) =>
                seg.matched ? (
                  <mark key={i} className="rounded bg-yellow-200 px-0.5 text-slate-900 dark:bg-yellow-500/60 dark:text-white">
                    {seg.text}
                  </mark>
                ) : (
                  <span key={i}>{seg.text}</span>
                ),
              )}
            </code>
          </pre>
        </div>
      )}

      {/* 匹配详情(含 capture groups) */}
      {matches.length > 0 && (
        <div>
          <h3 className="mb-2 text-sm font-semibold text-slate-700">Match Details &amp; Capture Groups</h3>
          <div className="space-y-2">
            {matches.slice(0, 50).map((m, i) => (
              <div key={i} className="rounded-md border p-2 text-xs" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-500">#{i + 1}</span>
                  <span className="font-mono text-slate-700 dark:text-slate-200">“{m.match}”</span>
                  <span className="text-slate-400">@ index {m.index}</span>
                </div>
                {m.groups.length > 0 && (
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {m.groups.map((g, gi) => (
                      <span key={gi} className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[11px] text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                        ${gi + 1}: {g ?? '(empty)'}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 速查表 */}
      <div>
        <h3 className="mb-2 text-sm font-semibold text-slate-700">Regex Cheat Sheet</h3>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {CHEAT_SHEET.map((c) => (
            <div key={c.syntax} className="rounded-md border p-2 text-xs" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
              <code className="font-semibold text-blue-600 dark:text-blue-400">{c.syntax}</code>
              <span className="ml-2" style={{ color: 'rgb(var(--text-subtle))' }}>{c.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        🔒 100% client-side — uses your browser&apos;s native RegExp engine (JavaScript / ECMAScript flavor).
      </p>
    </div>
  )
}
