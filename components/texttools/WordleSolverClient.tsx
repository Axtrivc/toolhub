'use client'

import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { FIVE_LETTER_WORDS } from '@/lib/wordle-words'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Wordle Solver / Word Finder
 *
 * 两个模式:
 *  - Solver:5 个绿格定位字母 + 必含字母(黄)+ 排除字母(灰)实时过滤词典;
 *    黄色按重数下限强制(黄了两次就必须含两次);灰色字母若同时出现在绿/黄中,
 *    则仅限制其总出现次数不得超过已确认次数(重复字母场景的下限+上限并存)。
 *    结果按常见度分档排序:高频词置顶,档内保持字母序。
 *  - Anagram:输入 3-10 个字母,找词典中可由其拼出(多重集子集)的词,按长度降序。
 * 支持粘贴补充词表并入本会话词典。100% 本地,无网络请求。
 */

const MAX_SHOWN = 200

// ──────── 常见词频次档(仅供展示排序,不影响过滤结果)────────
// ~200 个公认高频的 Wordle 开局/答案词(adieu 类经典开局 + 常见答案),
// 硬编码即够,不引外部数据。整理池做过等距抽稀以控制档体积——抽稀只影响
// 常见度标注的覆盖广度,不影响任何过滤正确性。纯字母序会让最优猜测沉底,
// common 档置顶、同档内保持字母序。
const COMMON_WORD_SOURCE = `
about acute agent album along angle apply armor asset audio aware badge
beach begin bench blame blend blink bloom blush boost brake break bride
broke brush cabin candy cease cheap chess child clear cliff cloth coast
count crack crate crazy crisp crown crust death diary draft dress drink
early eight elite entry error exact extra favor ferry fight flame flick
flour forty fresh funny glass glory grade graph grave grief group guess
habit heavy hobby hotel humor index irate jewel judge knock labor learn
legal limit logic loyal magic marry mayor mercy metal money motel movie
naval niece noise ocean olive other owner panic patch peach phone piece
pixel plain plate poker press prime probe prove pupil queen quick quota
raise range reach regal relic reset rhyme rifle rinse roast rogue round
salsa sauce scary score sense shade share sheet shine shoot shove silly
skirt sleek small smell snake solar sorry space spear spike split spray
stack stake stand steak steel stick stock storm strap stump suite swear
sweet syrup talon tempo tenth these thigh three tight today tonic total
towel trade trait tribe troll trust twice under until usher valid venue
vigil virus vivid weary weigh wheel white witch women worst write yeast
youth
`
const COMMON_WORD_SET: Set<string> = new Set(
  COMMON_WORD_SOURCE.split(/\s+/).filter(Boolean),
)

/**
 * Solver 过滤核心(纯函数,不碰组件状态,便于独立验证)。
 * 三类约束并存:
 * - greens 定位:w[i] 必须等于该位绿字母;
 * - yellows 重数下限:每字母按黄格出现次数计数 mustCount,候选词内出现次数必须 ≥ 该数
 *   (参考 Anagram 模式的 need-map 多重集写法;"含一次"是最 n=1 的退化情形);
 * - greys 计数上限:灰字母若同时是已确认(绿/黄)字母,总出现次数不得超过已确认次数
 *   (真实反馈语义:多余的重复字母才会被标灰),纯灰字母则一次都不许有(cap=0 自然覆盖)。
 * 下限与上限对同一字母同时生效时给出"恰好 k 次"的精确窗口。
 * 排序:common 档置顶,档内字母序。
 */
function solverFilter(
  dictionary: string[],
  greens: string[],
  yellows: string,
  greys: string,
): string[] {
  const g = greens.map((x) => x.trim().toLowerCase())
  const mustCount = new Map<string, number>()
  for (const ch of yellows.toLowerCase().replace(/[^a-z]/g, '')) {
    mustCount.set(ch, (mustCount.get(ch) ?? 0) + 1)
  }
  const greySet = new Set(greys.toLowerCase().replace(/[^a-z]/g, '').split(''))
  return dictionary
    .filter((w) => {
      if (w.length !== 5) return false
      for (let i = 0; i < 5; i++) if (g[i] && w[i] !== g[i]) return false
      // 与 Anagram 的 need-map 同款多重集计数
      const counts = new Map<string, number>()
      for (const x of w) counts.set(x, (counts.get(x) ?? 0) + 1)
      // 重数下限:黄几次就必须含几次
      for (const [ch, n] of mustCount) {
        if ((counts.get(ch) ?? 0) < n) return false
      }
      // 计数上限:已标灰的字母不得超出已确认的份数
      for (const ch of greySet) {
        const known = g.filter((x) => x === ch).length + (mustCount.get(ch) ?? 0)
        if ((counts.get(ch) ?? 0) > known) return false
      }
      return true
    })
    .sort((a, b) => {
      const ra = COMMON_WORD_SET.has(a) ? 0 : 1
      const rb = COMMON_WORD_SET.has(b) ? 0 : 1
      return ra - rb || (a < b ? -1 : a > b ? 1 : 0)
    })
}

const inputStyle = {
  borderColor: 'rgb(var(--border-strong))',
  backgroundColor: 'rgb(var(--bg-card))',
  color: 'rgb(var(--text))',
}

/** 从补充词表文本提取合法单词(小写字母,长度 ≤ 10) */
function parseExtraWords(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((w) => w.length >= 2 && w.length <= 10)
}

type Mode = 'solver' | 'anagram'

export function WordleSolverClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('wordle-solver', locale, key, fb)

  const [mode, setMode] = useState<Mode>('solver')
  const [greens, setGreens] = useState<string[]>(['', '', '', '', ''])
  const [yellows, setYellows] = useState('')
  const [greys, setGreys] = useState('')
  const [anagramLetters, setAnagramLetters] = useState('')
  const [extraText, setExtraText] = useState('')
  const [copiedWord, setCopiedWord] = useState<string | null>(null)

  // 内置词典 + 用户补充词,去重
  const dictionary = useMemo(() => {
    const set = new Set(FIVE_LETTER_WORDS)
    for (const w of parseExtraWords(extraText)) set.add(w)
    return Array.from(set)
  }, [extraText])

  const hasSolverInput = greens.some((g) => g !== '') || yellows.trim() !== '' || greys.trim() !== ''

  const solverResults = useMemo(
    () => (hasSolverInput ? solverFilter(dictionary, greens, yellows, greys) : []),
    [dictionary, greens, yellows, greys, hasSolverInput],
  )

  const anagramResults = useMemo(() => {
    const letters = anagramLetters.toLowerCase().replace(/[^a-z]/g, '')
    if (letters.length < 3) return []
    const counts = new Map<string, number>()
    for (const ch of letters) counts.set(ch, (counts.get(ch) ?? 0) + 1)
    return dictionary
      .filter((w) => {
        // 任何长度 ≤ 输入字母数的词都可参与(2-10 字母都支持),
        // 能否拼出由下方多重集判定,不再按 5 截断
        if (w.length < 2 || w.length > letters.length) return false
        const need = new Map<string, number>()
        for (const ch of w) need.set(ch, (need.get(ch) ?? 0) + 1)
        for (const [ch, n] of need) if ((counts.get(ch) ?? 0) < n) return false
        return true
      })
      .sort((a, b) => b.length - a.length || a.localeCompare(b))
  }, [dictionary, anagramLetters])

  const results = mode === 'solver' ? solverResults : anagramResults
  const shown = results.slice(0, MAX_SHOWN)
  const remaining = results.length - shown.length

  // 约束摘要:把当前三项约束即时"翻译"成一行人话,批量敲字母时误敲的
  // 重复字母(惩罚严重)一眼可见。段模板用 | 分隔在同一个 key 里,
  // 取用时按段拆出、缺失的约束整段跳过。
  const constraintSummary = useMemo(() => {
    const seg = L('summaryConstraints', 'must contain {m}|exclude {x}|green {g}').split('|')
    const mustSeen = new Map<string, number>()
    for (const ch of yellows.toLowerCase().replace(/[^a-z]/g, '')) {
      mustSeen.set(ch, (mustSeen.get(ch) ?? 0) + 1)
    }
    const mParts = Array.from(mustSeen, ([ch, n]) => (n > 1 ? `${ch}×${n}` : ch))
    const xParts = Array.from(new Set(greys.toLowerCase().replace(/[^a-z]/g, '').split('')))
    const gParts = greens
      .map((v, i) => ({ v: v.trim().toLowerCase(), i }))
      .filter(({ v }) => v !== '')
      .map(({ v, i }) => `${i + 1}=${v}`)
    const parts: string[] = []
    if (mParts.length > 0) parts.push((seg[0] ?? '').replace('{m}', mParts.join(',')))
    if (xParts.length > 0) parts.push((seg[1] ?? '').replace('{x}', xParts.join(',')))
    if (gParts.length > 0) parts.push((seg[2] ?? '').replace('{g}', gParts.join(',')))
    return parts.join(' · ')
  }, [locale, greens, yellows, greys])

  const setGreen = useCallback((i: number, v: string) => {
    const letter = v.replace(/[^a-zA-Z]/g, '').slice(-1).toLowerCase()
    setGreens((prev) => {
      const next = [...prev]
      next[i] = letter
      return next
    })
  }, [])

  // 连点不同候选词时,旧的 setTimeout 会提前清掉新词的高亮:ref 复用唯一
  // timeout 并在卸载时清理(与 brief 定时器三件套要求一致)
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current)
    }
  }, [])

  const copyWord = useCallback(async (word: string) => {
    try {
      await navigator.clipboard.writeText(word)
      setCopiedWord(word)
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current)
      copyTimerRef.current = setTimeout(() => setCopiedWord(null), 1200)
    } catch {
      // 剪贴板不可用时静默
    }
  }, [])

  // 一键清空两个模式的约束输入(保留本会话粘贴的补充词表)
  const clearAll = useCallback(() => {
    setGreens(['', '', '', '', ''])
    setYellows('')
    setGreys('')
    setAnagramLetters('')
  }, [])

  // Solver 结果里若含高频档词(排序后必然是列表前缀),给出分区标题提示置顶
  const showCommonHeader = mode === 'solver' && shown.some((w) => COMMON_WORD_SET.has(w))

  const resultList = (
    <>
      {showCommonHeader && (
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--text-faint))' }}>
          {L('commonFirst', 'Most common first')}
        </p>
      )}
      {results.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {shown.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => copyWord(w)}
              title={L('clickToCopy', 'Click to copy')}
              className={`rounded-lg border px-3 py-1.5 font-mono text-sm uppercase tracking-wider transition hover:border-blue-400 ${
                copiedWord === w ? 'border-green-400' : ''
              }`}
              style={{
                borderColor: copiedWord === w ? undefined : 'rgb(var(--border))',
                backgroundColor: 'rgb(var(--bg-subtle))',
                color: 'rgb(var(--text))',
              }}
            >
              {copiedWord === w ? `${w} ✓` : w}
            </button>
          ))}
          {remaining > 0 && (
            <span className="px-2 py-1.5 text-sm" style={{ color: 'rgb(var(--text-faint))' }}>
              +{remaining} {L('more', 'more')}
            </span>
          )}
        </div>
      )}
    </>
  )

  return (
    <div className="space-y-6">
      {/* 模式切换 + 清空 */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setMode('solver')}
            className={`btn ${mode === 'solver' ? 'btn-primary' : 'btn-secondary'}`}
          >
            {L('solverMode', 'Wordle solver')}
          </button>
          <button
            type="button"
            onClick={() => setMode('anagram')}
            className={`btn ${mode === 'anagram' ? 'btn-primary' : 'btn-secondary'}`}
          >
            {L('anagramMode', 'Anagram mode')}
          </button>
        </div>
        <button
          type="button"
          onClick={clearAll}
          className="-my-1 rounded-md px-2 py-1.5 text-xs text-slate-400 hover:text-red-500 sm:text-sm"
        >
          {L('clear', 'Clear')}
        </button>
      </div>

      {mode === 'solver' ? (
        <>
          {/* 绿格:已知位置 */}
          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
              {L('knownPositions', 'Known positions (green)')}
            </label>
            <div className="flex gap-2">
              {greens.map((v, i) => (
                <input
                  key={i}
                  type="text"
                  inputMode="text"
                  maxLength={1}
                  value={v}
                  onChange={(e) => setGreen(i, e.target.value)}
                  aria-label={L('letterPosition', 'Letter in position {n}').replace('{n}', String(i + 1))}
                  className={`h-12 w-12 rounded-lg border text-center font-mono text-lg uppercase shadow-sm outline-none transition focus:ring-2 ${
                    v
                      ? 'border-emerald-500 bg-emerald-100 text-emerald-900 dark:border-emerald-500/70 dark:bg-emerald-950/60 dark:text-emerald-200'
                      : ''
                  }`}
                  style={v ? undefined : inputStyle}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wordle-must" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                <span aria-hidden="true" className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
                {L('mustContain', 'Must contain (yellow)')}
              </label>
              <input
                id="wordle-must"
                type="text"
                value={yellows}
                onChange={(e) => setYellows(e.target.value)}
                placeholder={L('mustPlaceholder', 'e.g. ar')}
                spellCheck={false}
                className={`w-full rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2 ${
                  yellows.trim() ? 'border-amber-500 dark:border-amber-500/70' : ''
                }`}
                style={yellows.trim() ? { ...inputStyle, borderColor: undefined } : inputStyle}
              />
            </div>
            <div>
              <label htmlFor="wordle-not" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                <span aria-hidden="true" className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-slate-400" />
                {L('mustNotContain', 'Must NOT contain (grey)')}
              </label>
              <input
                id="wordle-not"
                type="text"
                value={greys}
                onChange={(e) => setGreys(e.target.value)}
                placeholder={L('notPlaceholder', 'e.g. xyz')}
                spellCheck={false}
                className={`w-full rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2 ${
                  greys.trim() ? 'border-slate-400 dark:border-slate-500' : ''
                }`}
                style={greys.trim() ? { ...inputStyle, borderColor: undefined } : inputStyle}
              />
            </div>
          </div>

          {/* 约束摘要回显:输入变化即时更新,误敲的重复字母一眼可见 */}
          {hasSolverInput && constraintSummary !== '' && (
            <p
              className="text-xs leading-relaxed"
              aria-live="polite"
              style={{ color: 'rgb(var(--text-faint))' }}
            >
              {constraintSummary}
            </p>
          )}

          {/* 结果区 */}
          {!hasSolverInput ? (
            <p className="rounded-md p-3 text-sm" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
              {L(
                'solverEmpty',
                'Enter at least one constraint above — a green position, letters the word must contain, or letters to exclude — and matching words will appear here.',
              )}
            </p>
          ) : results.length === 0 ? (
            <p className="rounded-md p-3 text-sm" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
              {L(
                'solverNoMatch',
                "No words match those constraints. Double-check that grey letters aren't also marked green or yellow.",
              )}
            </p>
          ) : (
            <div className="space-y-3">
              <span className="text-sm font-semibold tabular-nums" style={{ color: 'rgb(var(--text-muted))' }}>
                {results.length}{' '}
                {results.length === 1 ? L('matchingWordSingular', 'matching word') : L('matchingWordPlural', 'matching words')}{' '}
                — {L('clickAnyWordToCopy', 'click any word to copy it')}{' '}
                <span className="font-normal" style={{ color: 'rgb(var(--text-faint))' }}>
                  · {L('inDictionary', '{n} words in dictionary').replace('{n}', dictionary.length.toLocaleString('en-US'))}
                </span>
              </span>
              {resultList}
            </div>
          )}
        </>
      ) : (
        <>
          {/* 字母重排模式 */}
          <div>
            <label htmlFor="wordle-anagram" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('anagramLabel', 'Available letters (3–10)')}
            </label>
            <input
              id="wordle-anagram"
              type="text"
              value={anagramLetters}
              onChange={(e) => setAnagramLetters(e.target.value)}
              placeholder={L('anagramPlaceholder', 'e.g. rates')}
              maxLength={10}
              spellCheck={false}
              className="w-full max-w-md rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
              style={inputStyle}
            />
            <p className="mt-1.5 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
              {L('anagramHint', 'Finds dictionary words (up to the number of letters you enter) that can be spelled using only these letters.')}
            </p>
          </div>

          {anagramLetters.replace(/[^a-zA-Z]/g, '').length < 3 ? (
            <p className="rounded-md p-3 text-sm" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
              {L('anagramEmpty', 'Type at least 3 letters to find words you can build from them.')}
            </p>
          ) : results.length === 0 ? (
            <p className="rounded-md p-3 text-sm" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
              {L('anagramNoMatch', 'No words can be built from those letters. Try adding more letters or paste extra words below.')}
            </p>
          ) : (
            <div className="space-y-3">
              <span className="text-sm font-semibold tabular-nums" style={{ color: 'rgb(var(--text-muted))' }}>
                {results.length} {results.length === 1 ? L('wordSingular', 'word') : L('wordPlural', 'words')}{' '}
                {L('foundClickToCopy', 'found — click any word to copy it')}
              </span>
              {resultList}
            </div>
          )}
        </>
      )}

      {/* 补充词表 */}
      <div>
        <label htmlFor="wordle-extra" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {L(
            'extraWordsLabel',
            "Extra words (optional — one per line or space-separated, merged into this session's dictionary)",
          )}
        </label>
        <textarea
          id="wordle-extra"
          value={extraText}
          onChange={(e) => setExtraText(e.target.value)}
          placeholder={'scone\nbrake\nquirt'}
          rows={3}
          spellCheck={false}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={inputStyle}
        />
      </div>

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('privacyIntro', '🔒 100% client-side — a ')}
        {FIVE_LETTER_WORDS.length.toLocaleString('en-US')}
        {L('privacyOutro', '-word dictionary is bundled with the page; nothing is looked up online.')}
      </p>
    </div>
  )
}
