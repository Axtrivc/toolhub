'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

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

/** 收集所有匹配的详情(含 capture groups);上限与高亮一致,触及上限时 truncated=true */
function collectMatches(text: string, re: RegExp): { details: MatchDetail[]; truncated: boolean } {
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
    if (++safety >= 5000) return { details, truncated: true }
  }
  return { details, truncated: false }
}

/**
 * 从 pattern 源码提取命名捕获组(?<name>...)→ { 组号: 组名 }。
 * 逐字符扫描:跳过 \( 转义与 [...] 字符类(其中括号是字面量);
 * (?= (?! (?: (?<= (?<! 均不占组号,普通 ( 与 (?<name> 按开括号顺序编号(与 JS 引擎一致)。
 */
function extractGroupNames(pattern: string): Record<number, string> {
  const names: Record<number, string> = {}
  let group = 0
  let i = 0
  while (i < pattern.length) {
    const c = pattern[i]
    if (c === '\\') {
      i += 2
      continue
    }
    if (c === '[') {
      i++
      if (pattern[i] === '^') i++
      if (pattern[i] === ']') i++
      while (i < pattern.length && pattern[i] !== ']') i++
      i++
      continue
    }
    if (c === '(') {
      const rest = pattern.slice(i)
      if (rest.startsWith('(?<') && !rest.startsWith('(?<=') && !rest.startsWith('(?<!')) {
        const m = rest.match(/^\(\?<([A-Za-z_$][\w$]*)>/)
        if (m) {
          group++
          names[group] = m[1]
          i += m[0].length
          continue
        }
      }
      if (/^\(\??[=!:]/.test(rest) || rest.startsWith('(?<')) {
        // 非捕获/断言/后行断言组,不占组号
        i++
        continue
      }
      group++
    }
    i++
  }
  return names
}

const CHEAT_SHEET: { syntax: string; desc: string }[] = [
  { syntax: '.', desc: 'Any char (no newline, unless s flag)' },
  { syntax: '\\d \\D', desc: 'Digit / Non-digit' },
  { syntax: '\\w \\W', desc: 'Word char [A-Za-z0-9_] / Non-word' },
  { syntax: '\\s \\S', desc: 'Whitespace / Non-whitespace' },
  { syntax: '^ $', desc: 'Start / End of line (with m flag)' },
  { syntax: '\\b \\B', desc: 'Word boundary / Non-boundary' },
  { syntax: '[abc]', desc: 'Character set (any of)' },
  { syntax: '[^abc]', desc: 'Negated character set' },
  { syntax: 'a|b', desc: 'OR' },
  { syntax: '(...)', desc: 'Capture group' },
  { syntax: '(?:...)', desc: 'Non-capturing group' },
  { syntax: '(?<name>...)', desc: 'Named capture group' },
  { syntax: '* + ?', desc: '0+ / 1+ / 0 or 1' },
  { syntax: '{n} {n,m}', desc: 'Exactly n / n to m times' },
  { syntax: '(?=...) (?!...)', desc: 'Positive / Negative lookahead' },
]

const inputCls =
  'w-full rounded-lg border p-4 font-mono text-xs shadow-sm outline-none transition focus:ring-2'

// flags 可视切换 chips(与手输框双向同步),title 复用各 flag 的既有本地化文案
const FLAG_CHIPS: { flag: string; key: string; fb: string }[] = [
  { flag: 'g', key: 'flagGlobal', fb: 'global' },
  { flag: 'i', key: 'flagIgnoreCase', fb: 'ignore case' },
  { flag: 'm', key: 'flagMultiline', fb: 'multiline' },
  { flag: 's', key: 'flagDotAll', fb: 'dotAll' },
  { flag: 'u', key: 'flagUnicode', fb: 'unicode' },
  { flag: 'y', key: 'flagSticky', fb: 'sticky' },
]

// 防止 ReDoS / 性能问题的输入上限
const MAX_TEXT_LEN = 50000 // 测试文本长度上限(~50KB),超过截断,避免超长输入放大回溯

export function RegexTesterClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('regex-tester', locale, key, fb)

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

  // 点击 flag chip 增删字符;重排为规范顺序(gimsuy)保持输入框稳定
  const toggleFlag = useCallback((f: string) => {
    setFlags((prev) => {
      const set = new Set(prev.split(''))
      if (set.has(f)) set.delete(f)
      else set.add(f)
      return ['g', 'i', 'm', 's', 'u', 'y'].filter((c) => set.has(c)).join('')
    })
  }, [])

  // 命名分组(?<name>...)→ 组号 → 组名,供匹配详情 chip 附组名
  const groupNames = useMemo(() => extractGroupNames(debouncedPattern), [debouncedPattern])

  // 实际参与编译/匹配的文本:截断到上限,防超长输入放大 ReDoS 回溯
  const safeText = debouncedText.length > MAX_TEXT_LEN ? debouncedText.slice(0, MAX_TEXT_LEN) : debouncedText
  const textTruncated = debouncedText.length > MAX_TEXT_LEN

  const compiled = useMemo(() => safeCompile(debouncedPattern, flags), [debouncedPattern, flags])

  const segments = useMemo<HighlightSegment[]>(() => {
    if (!compiled.re || !safeText) return []
    return buildSegments(safeText, compiled.re)
  }, [compiled, safeText])

  const matchResult = useMemo<{ details: MatchDetail[]; truncated: boolean }>(() => {
    if (!compiled.re || !safeText) return { details: [], truncated: false }
    return collectMatches(safeText, compiled.re)
  }, [compiled, safeText])
  const matches = matchResult.details

  return (
    <div className="space-y-5">
      {/* 正则输入 + flags */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="regex-pattern" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {L('patternLabel', 'Regular Expression')}
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
            title={L('flagsTitle', 'Flags: g (global), i (case-insensitive), m (multiline), s (dotAll), u (unicode), y (sticky)')}
          />
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {FLAG_CHIPS.map(({ flag, key, fb }) => {
            const active = flags.includes(flag)
            return (
              <button
                key={flag}
                type="button"
                aria-pressed={active}
                title={L(key, fb)}
                onClick={() => toggleFlag(flag)}
                className={`rounded-md border px-2 py-0.5 font-mono text-[11px] transition ${
                  active
                    ? 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300'
                    : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300'
                }`}
                style={{ borderColor: active ? undefined : 'rgb(var(--border))' }}
              >
                {flag}
              </button>
            )
          })}
        </div>
        <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-500">
          {L('flagsLabel', 'Flags:')} <code>g</code> {L('flagGlobal', 'global')} · <code>i</code> {L('flagIgnoreCase', 'ignore case')} · <code>m</code> {L('flagMultiline', 'multiline')} · <code>s</code> {L('flagDotAll', 'dotAll')} · <code>u</code> {L('flagUnicode', 'unicode')} · <code>y</code> {L('flagSticky', 'sticky')}
        </p>
      </div>

      {/* 错误提示 */}
      {compiled.error && (
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">
          ⚠️ {compiled.error}
        </div>
      )}

      {/* 文本超长截断提示(防 ReDoS / 性能退化) */}
      {textTruncated && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
          ⚠️ {L('textExceeds', 'Text exceeds')} {MAX_TEXT_LEN.toLocaleString('en-US')} {L('truncatedForSafety', 'characters — truncated for matching to protect against slow/ReDoS patterns.')}
        </div>
      )}

      {/* 测试文本 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="regex-text" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {L('testTextLabel', 'Test Text')}
          </label>
          {matches.length > 0 && (
            <span className="rounded-md bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-950/50 dark:text-green-300">
              {matches.length}
              {matchResult.truncated ? '+' : ''} {L('matchWord', 'match')}{matches.length === 1 && !matchResult.truncated ? '' : L('matchPluralSuffix', 'es')}
            </span>
          )}
        </div>
        <textarea
          id="regex-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={L('placeholder', 'Paste the text you want to test against...')}
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
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('highlightedMatches', 'Highlighted Matches')}</span>
            <CopyButton value={matches.map((m) => m.match).join('\n')} label={L('copyMatches', 'Copy Matches')} disabled={matches.length === 0} />
          </div>
          <pre
            className="whitespace-pre-wrap break-words rounded-lg border bg-slate-50 p-4 text-xs leading-relaxed dark:bg-slate-800/60"
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
          <h3 className="mb-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('matchDetails', 'Match Details & Capture Groups')}</h3>
          <div className="space-y-2">
            {matches.slice(0, 50).map((m, i) => (
              <div key={i} className="rounded-md border p-2 text-xs" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-500 dark:text-slate-400">#{i + 1}</span>
                  <span className="font-mono text-slate-700 dark:text-slate-200">“{m.match}”</span>
                  <span className="text-slate-400 dark:text-slate-500">{L('atIndex', '@ index')} {m.index}</span>
                </div>
                {m.groups.length > 0 && (
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {m.groups.map((g, gi) => {
                      const gname = groupNames[gi + 1]
                      return (
                        <span key={gi} className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[11px] text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                          {gname ? `${gname} ($${gi + 1})` : `$${gi + 1}`}:{' '}
                          {g === undefined
                            ? L('notParticipated', '(did not participate)')
                            : g === ''
                              ? L('emptyGroup', '(empty)')
                              : g}
                        </span>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
            {matches.length > 50 && (
              <p className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                +{matches.length - 50} {L('moreNotShown', 'more not shown')}
                {matchResult.truncated ? L('capReached', ' — match limit reached, list truncated') : ''}
              </p>
            )}
          </div>
        </div>
      )}

      {/* 速查表 */}
      <div>
        <h3 className="mb-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('cheatSheetTitle', 'Regex Cheat Sheet')}</h3>
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
        {L('note', "🔒 100% client-side — uses your browser's native RegExp engine (JavaScript / ECMAScript flavor).")}
      </p>
    </div>
  )
}
