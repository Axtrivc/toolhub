'use client'

import { useMemo, useState } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { AnimatedNumber, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { countWords, countSentences, hasCJK } from '@/lib/text-stats'

/**
 * Reading & Speaking Time 客户端组件
 *
 * 粘贴文本,实时统计:词数(中英混合,汉字按字计)、字符数、句数(中英标点);
 * 按 WPM 预设/自定义滑块估算朗读时间(mm:ss),演讲时间同理;
 * 附 250 词/页的页数估算。全部本地计算。
 */

const READING_PRESETS = [
  { label: 'Slow', wpm: 100 },
  { label: 'Average', wpm: 150 },
  { label: 'Fast', wpm: 200 },
  { label: 'Skim', wpm: 300 },
]

const SPEAKING_PRESETS = [
  { label: 'Presentation', wpm: 100 },
  { label: 'Conversation', wpm: 130 },
  { label: 'Fast speaker', wpm: 160 },
]

// 中文语速口径是「字/分钟」(阅读 300–500、演讲 150–250),与英文 wpm 预设不同:
// 词数统计对汉字按字计,预设数值必须同步切换,否则中文时长被高估一倍以上。
const READING_PRESETS_ZH = [
  { label: 'Slow', wpm: 200 },
  { label: 'Average', wpm: 300 },
  { label: 'Fast', wpm: 400 },
  { label: 'Skim', wpm: 600 },
]

const SPEAKING_PRESETS_ZH = [
  { label: 'Presentation', wpm: 150 },
  { label: 'Conversation', wpm: 200 },
  { label: 'Fast speaker', wpm: 250 },
]

function pad(n: number) {
  return String(n).padStart(2, '0')
}

/** 秒 → "m:ss" */
function mmss(seconds: number): string {
  const s = Math.round(seconds)
  return `${Math.floor(s / 60)}:${pad(s % 60)}`
}

const inputStyle = {
  borderColor: 'rgb(var(--border-strong))',
  backgroundColor: 'rgb(var(--bg-card))',
  color: 'rgb(var(--text))',
}

// P-1 大输入防线:词数/句数统计在每次输入时同步全量扫描,
// 超大粘贴会冻结 UI。超过 200k 字符只统计前 200k 并给出截断提示(阈值与 makeTextTool 底座一致)。
const MAX_ANALYZE_CHARS = 200_000

export function ReadingSpeakingTimeClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('reading-speaking-time', locale, key, fb)

  // 预设文案本地化(原始英文 → key;key={p.label} 保持原始值)
  const presetLabelKeys: Record<string, string> = {
    Slow: 'presetSlow',
    Average: 'presetAverage',
    Fast: 'presetFast',
    Skim: 'presetSkim',
    Presentation: 'presetPresentation',
    Conversation: 'presetConversation',
    'Fast speaker': 'presetFastSpeaker',
  }

  const [text, setText] = useState('')
  // null = 未自定义,默认语速按文本内容选择(含 CJK → 中文速率 300/200 字/分,
  // 否则英文 150/130 wpm)——英文界面贴中文不再按 150 wpm 高估一倍;空文本回退按 locale。
  const [readWpmRaw, setReadWpm] = useState<number | null>(null)
  const [speakWpmRaw, setSpeakWpm] = useState<number | null>(null)
  // P-1 门控:仅对前 MAX_ANALYZE_CHARS 字符做统计,超出部分跳过(下方横幅提示)
  const safeText = text.length > MAX_ANALYZE_CHARS ? text.slice(0, MAX_ANALYZE_CHARS) : text
  const truncated = text.length > MAX_ANALYZE_CHARS
  const textIsZh = safeText.trim() ? hasCJK(safeText) : locale === 'zh'
  const readWpm = readWpmRaw ?? (textIsZh ? 300 : 150)
  const speakWpm = speakWpmRaw ?? (textIsZh ? 200 : 130)
  const READING = textIsZh ? READING_PRESETS_ZH : READING_PRESETS
  const SPEAKING = textIsZh ? SPEAKING_PRESETS_ZH : SPEAKING_PRESETS
  const speedUnit = L('wpmUnit', 'wpm')

  const stats = useMemo(() => {
    const trimmed = safeText.trim()
    const words = countWords(trimmed)
    const sentences = countSentences(trimmed)
    return { words, chars: safeText.length, sentences }
  }, [safeText])

  const { words, chars, sentences } = stats
  const pages = words / 250

  const summary = useMemo(
    () =>
      [
        L('summaryTitle', 'Reading & Speaking Time'),
        `${L('sWords', 'Words: ')}${words}`,
        `${L('sCharacters', 'Characters: ')}${chars}`,
        `${L('sSentences', 'Sentences: ')}${sentences}`,
        `${L('sPages', 'Pages (250 words/page): ')}${words === 0 ? '0' : pages.toFixed(1)}`,
        `${L('sReadingTime', 'Reading time @ ')}${readWpm} ${speedUnit}: ${mmss((words / readWpm) * 60)}`,
        `${L('sSpeakingTime', 'Speaking time @ ')}${speakWpm} ${speedUnit}: ${mmss((words / speakWpm) * 60)}`,
      ].join('\n'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [words, chars, sentences, pages, readWpm, speakWpm, locale],
  )

  const presetTable = (
    presets: { label: string; wpm: number }[],
    active: number,
  ) => (
    <div className="overflow-hidden rounded-lg border" style={{ borderColor: 'rgb(var(--border))' }}>
      <table className="w-full text-sm">
        <tbody>
          {presets.map((p) => (
            <tr
              key={p.label}
              className="border-t first:border-t-0"
              style={{
                borderColor: 'rgb(var(--border))',
                backgroundColor: p.wpm === active ? 'rgb(var(--bg-subtle))' : undefined,
              }}
            >
              <td className="px-4 py-2" style={{ color: 'rgb(var(--text))' }}>
                {L(presetLabelKeys[p.label], p.label)}
                {p.wpm === active && (
                  <span className="ml-2 text-xs font-medium text-primary">{L('selected', 'selected')}</span>
                )}
              </td>
              <td className="px-4 py-2 text-right font-mono" style={{ color: 'rgb(var(--text-muted))' }}>
                {p.wpm} {speedUnit}
              </td>
              <td className="px-4 py-2 text-right font-mono font-semibold" style={{ color: 'rgb(var(--text))' }}>
                {mmss((words / p.wpm) * 60)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const presetButtons = (
    presets: { label: string; wpm: number }[],
    active: number,
    set: (n: number) => void,
  ) => (
    <div className="flex flex-wrap gap-2">
      {presets.map((p) => (
        <button
          key={p.label}
          type="button"
          onClick={() => set(p.wpm)}
          className="rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-brand-50 dark:hover:bg-brand-950/40"
          style={{
            borderColor: p.wpm === active ? 'rgb(var(--border-strong))' : 'rgb(var(--border))',
            color: p.wpm === active ? 'rgb(var(--text))' : 'rgb(var(--text-muted))',
          }}
        >
          {L(presetLabelKeys[p.label], p.label)} · {p.wpm}
        </button>
      ))}
    </div>
  )

  return (
    <div className="space-y-5">
      {/* 截断提示(P-1) */}
      {truncated && (
        <div role="status" className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-300">
          ⚠️ {L('textExceeds', 'Text exceeds')} {MAX_ANALYZE_CHARS.toLocaleString('en-US')} {L('truncatedForSafety', 'characters — only the first part is counted to keep the page responsive.')}
        </div>
      )}

      {/* 文本输入 */}
      <div>
        <label htmlFor="rst-text" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('pasteYourText', 'Paste your text')}
        </label>
        <textarea
          id="rst-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          placeholder={L('placeholder', 'Paste an article, script, or speech draft here…')}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={inputStyle}
        />
      </div>

      {/* 统计仪表条:iOS 风格四格统计(词数/字符/阅读/演讲,数字滚动),
          手法同 makeTextTool 的 stats strip;句数/页数降为下方一行小字。
          时间格用「分钟(一位小数)」——纯数值串才能被 AnimatedNumber 正确 tween,
          精确 mm:ss 仍保留下方原有输出卡。 */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { label: L('statWords', 'Words'), display: words.toLocaleString('en-US'), sub: '' },
          { label: L('statChars', 'Characters'), display: chars.toLocaleString('en-US'), sub: '' },
          { label: L('statReading', 'Reading time'), display: (words / readWpm).toFixed(1), sub: `${L('statMinUnit', 'min')} @ ${readWpm} ${speedUnit}` },
          { label: L('statSpeaking', 'Speaking time'), display: (words / speakWpm).toFixed(1), sub: `${L('statMinUnit', 'min')} @ ${speakWpm} ${speedUnit}` },
        ].map((cell) => (
          <div
            key={cell.label}
            className="rounded-xl border border-border/60 bg-card/80 p-3 text-center shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-xl font-bold tabular-nums sm:text-2xl" style={{ color: 'rgb(var(--text))' }}>
              <AnimatedNumber value={cell.display} />
            </div>
            <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>
              {cell.label}
            </div>
            {cell.sub && (
              <div className="mt-0.5 text-[10px] tabular-nums" style={{ color: 'rgb(var(--text-faint))' }}>
                {cell.sub}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
        <span className="tabular-nums">{sentences} {L('sentences', 'Sentences')}</span>
        <span className="tabular-nums">{words === 0 ? '0' : pages.toFixed(1)} {L('pages', 'Pages')} · {L('at250WordsPerPage', 'at 250 words per page')}</span>
      </div>

      {/* 朗读时间 */}
      <div className="space-y-3 rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
        <h3 className="text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
          {L('readingTime', 'Reading time')}
        </h3>
        {presetButtons(READING, readWpm, setReadWpm)}
        <div>
          <label htmlFor="rst-read-wpm" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('customSpeed', 'Custom speed: ')}<span className="font-mono">{readWpm} {speedUnit}</span>
          </label>
          <input
            id="rst-read-wpm"
            type="range"
            min={50}
            max={textIsZh ? 800 : 400}
            step={5}
            value={readWpm}
            onChange={(e) => setReadWpm(+e.target.value)}
            className="w-full accent-blue-600"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ResultCard
            label={`${L('readingTimeAt', 'Reading time @ ')}${readWpm} ${speedUnit}`}
            value={<span className="font-mono">{mmss((words / readWpm) * 60)}</span>}
            highlight
            sublabel={words === 0 ? L('pasteSomeTextFirst', 'paste some text first') : `${words} ${L('wordsUnit', 'words')}`}
          />
          {presetTable(READING, readWpm)}
        </div>
      </div>

      {/* 演讲时间 */}
      <div className="space-y-3 rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
        <h3 className="text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
          {L('speakingTime', 'Speaking time')}
        </h3>
        {presetButtons(SPEAKING, speakWpm, setSpeakWpm)}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ResultCard
            label={`${L('speakingTimeAt', 'Speaking time @ ')}${speakWpm} ${speedUnit}`}
            value={<span className="font-mono">{mmss((words / speakWpm) * 60)}</span>}
            highlight
            sublabel={words === 0 ? L('pasteSomeTextFirst', 'paste some text first') : `${words} ${L('wordsUnit', 'words')}`}
          />
          {presetTable(SPEAKING, speakWpm)}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <CopyButton value={summary} label={L('copySummary', 'Copy summary')} disabled={words === 0} />
      </div>

      <CalculatorNote>
        {L('noteText', '⏱️ Estimates assume steady pacing: silent reading averages roughly 150–200 wpm for adults, while clear presentation speech sits near 100–130 wpm. Real delivery runs slower with pauses, slides, and audience interaction — budget a 10–20% buffer for live talks.')}
      </CalculatorNote>
    </div>
  )
}
