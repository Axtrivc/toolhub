'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { makeTextTool } from './makeTextTool'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tuiFromEntry } from '@/lib/i18n/tool-l10n-core'
import { fmtNum } from '@/lib/format'
import { FaqSchemaGeneratorL10n } from '@/lib/i18n/tools-l10n/faq-schema-generator'
import { NumberToWordsConverterL10n } from '@/lib/i18n/tools-l10n/number-to-words-converter'
import { ResistorColorCodeCalculatorL10n } from '@/lib/i18n/tools-l10n/resistor-color-code-calculator'
import { ToneGeneratorL10n } from '@/lib/i18n/tools-l10n/tone-generator'
import { BpmTapCounterL10n } from '@/lib/i18n/tools-l10n/bpm-tap-counter'

/**
 * 第三十三批(B13 电子与音频)工具:
 *  - 文本变换(makeTextTool):faq-schema-generator、number-to-words-converter
 *  - 自定义 client:resistor-color-code-calculator、tone-generator、bpm-tap-counter
 * (本批 4 个 makeCalculatorClient 计算器在 components/calculators/batch33Calculators.tsx)
 */

// ══════════════════ FAQ Schema Generator(makeTextTool)══════════════════

export const FaqSchemaGeneratorClient = makeTextTool({
  slug: 'faq-schema-generator',
  l10n: FaqSchemaGeneratorL10n,
  inputLabel: 'Questions and answers (one pair per block)',
  outputLabel: 'FAQPage JSON-LD code',
  placeholder: 'First line: the question. Following lines: the answer.\n\nLeave a blank line between pairs.',
  defaultInput:
    'Do you offer free shipping?\nYes, orders over $50 ship free within the continental US in 3-5 business days.\n\nWhat is your return policy?\nWe accept returns within 30 days of delivery in original condition for a full refund.',
  maxInputChars: 20000,
  transform: (input, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(FaqSchemaGeneratorL10n, locale, k, fb)
    const blocks = input
      .split(/\n\s*\n/)
      .map((b) => b.trim())
      .filter(Boolean)
    const pairs: { q: string; a: string }[] = []
    for (const block of blocks) {
      const lines = block.split('\n').map((l) => l.trim()).filter(Boolean)
      if (lines.length < 2) continue
      const q = lines[0].replace(/^(Q(uestion)?)\s*[:.\-)]?\s*/i, '').trim()
      const a = lines
        .slice(1)
        .join(' ')
        .replace(/^(A(nswer)?)\s*[:.\-)]?\s*/i, '')
        .trim()
      if (q && a) pairs.push({ q, a })
    }
    if (pairs.length === 0) {
      return L(
        'errParse',
        '⚠️ No valid Q&A pair found — each block needs the question on the first line and at least one answer line, with blank lines between blocks.',
      )
    }
    // 与站内 lib/faq-jsonld.ts 同构的 FAQPage 结构
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: pairs.map((p) => ({
        '@type': 'Question',
        name: p.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: p.a,
        },
      })),
    }
    return (
      '<script type="application/ld+json">\n' + JSON.stringify(jsonLd, null, 2) + '\n</script>'
    )
  },
  note: '🧩 Paste the generated <script> into your page head or before </body>. Google requires the same Q&A to be visible on the page — schema-only FAQs risk a manual action. Since August 2023 FAQ rich results show mostly for authoritative government and health sites, but valid markup still helps other engines and AI crawlers understand your page.',
})

// ══════════════════ Number to Words Converter(makeTextTool)══════════════════

const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const SCALES = ['', 'thousand', 'million', 'billion', 'trillion']
const ORD_ONES = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth']
const ORD_TENS = ['', '', 'twentieth', 'thirtieth', 'fortieth', 'fiftieth', 'sixtieth', 'seventieth', 'eightieth', 'ninetieth']

/** 0-999 → 单词(美式,无 "and") */
function threeDigits(n: number): string {
  let s = ''
  if (n >= 100) {
    s += ONES[Math.floor(n / 100)] + ' hundred'
    n %= 100
    if (n > 0) s += ' '
  }
  if (n >= 20) {
    s += TENS[Math.floor(n / 10)]
    if (n % 10 > 0) s += '-' + ONES[n % 10]
  } else if (n > 0) {
    s += ONES[n]
  }
  return s
}

/** 纯数字串(无符号)→ 基数单词;超过 999 万亿返回 null(按 3 位分组,免浮点误差) */
function intToWords(intStr: string): string | null {
  const cleaned = intStr.replace(/^0+/, '') || '0'
  if (cleaned === '0') return 'zero'
  if (cleaned.length > 15) return null
  const groups: number[] = []
  for (let i = cleaned.length; i > 0; i -= 3) {
    groups.push(parseInt(cleaned.slice(Math.max(0, i - 3), i), 10))
  }
  if (groups.length > SCALES.length) return null
  const parts: string[] = []
  for (let i = groups.length - 1; i >= 0; i--) {
    if (groups[i] === 0) continue
    parts.push(threeDigits(groups[i]) + (i > 0 ? ' ' + SCALES[i] : ''))
  }
  return parts.join(' ')
}

/** 0 ≤ n ≤ 999,999,999,999,999 的整数 → 序数单词 */
function ordinalWords(n: number): string | null {
  if (!Number.isInteger(n) || n < 0 || n > 999_999_999_999_999) return null
  if (n === 0) return 'zeroth'
  const lastTwo = n % 100
  if (lastTwo === 0) return intToWords(String(n)) + 'th' // one hundredth / one thousandth / one millionth
  const head = n - lastTwo
  const ordLast =
    lastTwo < 20
      ? ORD_ONES[lastTwo]
      : lastTwo % 10 === 0
        ? ORD_TENS[Math.floor(lastTwo / 10)]
        : TENS[Math.floor(lastTwo / 10)] + '-' + ORD_ONES[lastTwo % 10]
  return (head > 0 ? intToWords(String(head)) + ' ' : '') + ordLast
}

export const NumberToWordsConverterClient = makeTextTool({
  slug: 'number-to-words-converter',
  l10n: NumberToWordsConverterL10n,
  inputLabel: 'Numbers (one per line)',
  outputLabel: 'In English words (cardinal + ordinal)',
  placeholder: '42\n1,234\n-7\n3.14159',
  defaultInput: '42\n1,234\n1000000\n-7\n3.14159\n21',
  maxInputChars: 5000,
  transform: (input, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(NumberToWordsConverterL10n, locale, k, fb)
    return input
      .split(/\r?\n/)
      .map((line) => {
        const t = line.trim()
        if (t === '') return ''
        const cleaned = t.replace(/[$,\s]/g, '')
        if (!/^[+-]?\d+(\.\d+)?$/.test(cleaned)) {
          return `${t} → ⚠️ ${L('errNotNumber', 'not a number')}`
        }
        const neg = cleaned.startsWith('-')
        const unsigned = cleaned.replace(/^[+-]/, '')
        const [ip, dp] = unsigned.split('.')
        const intW = intToWords(ip || '0')
        if (intW === null) {
          return `${t} → ⚠️ ${L('errRange', 'out of range (max 999 trillion)')}`
        }
        let words = intW
        if (dp) words += ' point ' + dp.split('').map((d) => ONES[+d]).join(' ')
        const withSign = neg ? `negative ${words}` : words
        let ord = '—'
        if (!dp && !neg) {
          const ordW = ordinalWords(parseInt(ip, 10))
          ord = ordW ?? `⚠️ ${L('errRange', 'out of range (max 999 trillion)')}`
        }
        return `${t} → ${withSign}${ord !== '—' ? ` (ordinal: ${ord})` : ''}`
      })
      .join('\n')
  },
  note: '🔢 Handles trillions, decimals, negatives, and pasted commas ($ and % are stripped too). Compound numbers 21-99 take a hyphen (twenty-one); American style omits "and". Every line shows the cardinal and the ordinal form.',
})

// ══════════════════ Resistor Color Code(自定义)══════════════════

/** 工程单位格式化:4700 Ω → "4.70 kΩ"(与 batch33Calculators 同款) */
function fmtEng(n: number, unit: string, digits = 2): string {
  if (!isFinite(n)) return '—'
  const abs = Math.abs(n)
  if (abs === 0) return `0 ${unit}`
  if (abs < 1) return `${fmtNum(n * 1e3, digits)} ${unit}`
  if (abs < 1e3) return `${fmtNum(n, digits)} ${unit}`
  if (abs < 1e6) return `${fmtNum(n / 1e3, digits)} k${unit}`
  if (abs < 1e9) return `${fmtNum(n / 1e6, digits)} M${unit}`
  return `${fmtNum(n / 1e9, digits)} G${unit}`
}

const DIGIT_COLORS = [
  { key: 'black', digit: 0, hex: '#1f2937' },
  { key: 'brown', digit: 1, hex: '#7c4a21' },
  { key: 'red', digit: 2, hex: '#dc2626' },
  { key: 'orange', digit: 3, hex: '#f97316' },
  { key: 'yellow', digit: 4, hex: '#facc15' },
  { key: 'green', digit: 5, hex: '#16a34a' },
  { key: 'blue', digit: 6, hex: '#2563eb' },
  { key: 'violet', digit: 7, hex: '#7c3aed' },
  { key: 'grey', digit: 8, hex: '#9ca3af' },
  { key: 'white', digit: 9, hex: '#f8fafc' },
] as const

const TOLERANCES = [
  { key: 'brown', pct: 1 }, { key: 'red', pct: 2 }, { key: 'orange', pct: 0.05 },
  { key: 'yellow', pct: 0.02 }, { key: 'green', pct: 0.5 }, { key: 'blue', pct: 0.25 },
  { key: 'violet', pct: 0.1 }, { key: 'grey', pct: 0.01 }, { key: 'gold', pct: 5 },
  { key: 'silver', pct: 10 },
] as const

const TEMPCO = [
  { key: 'brown', ppm: 100 }, { key: 'red', ppm: 50 }, { key: 'orange', ppm: 15 },
  { key: 'yellow', ppm: 25 }, { key: 'blue', ppm: 10 }, { key: 'violet', ppm: 5 },
] as const

const GOLD_HEX = '#d4af37'
const SILVER_HEX = '#c8cdd4'

function colorHex(key: string): string {
  const d = DIGIT_COLORS.find((c) => c.key === key)
  if (d) return d.hex
  if (key === 'gold') return GOLD_HEX
  if (key === 'silver') return SILVER_HEX
  return '#94a3b8'
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/** 色环条 → 电阻可视化(纯 div,无浏览器 API) */
function ResistorGraphic({ stripes, tolIndex }: { stripes: string[]; tolIndex: number }) {
  return (
    <div className="flex items-center justify-center py-2" aria-hidden="true">
      <div className="h-1 w-10 rounded-full bg-slate-400 dark:bg-slate-600 sm:w-14" />
      <div
        className="flex h-14 w-52 items-center rounded-full sm:w-60"
        style={{ backgroundColor: '#e6c39a', boxShadow: 'inset 0 -5px 8px rgba(0,0,0,0.18)' }}
      >
        <div className="flex h-full w-full items-center pl-4">
          {stripes.map((s, i) => (
            <div
              key={`${s}-${i}`}
              className={`h-full rounded-sm ${i === tolIndex ? 'ml-auto mr-4' : 'mr-2.5'}`}
              style={{ width: 9, backgroundColor: colorHex(s) }}
            />
          ))}
        </div>
      </div>
      <div className="h-1 w-10 rounded-full bg-slate-400 dark:bg-slate-600 sm:w-14" />
    </div>
  )
}

/** "4.7k" / "470" / "1.2M" / "0.22" → 欧姆;无法解析返回 null */
function parseOhms(s: string): number | null {
  const t = s.trim().replace(/[Ωω]/g, '')
  const m = t.match(/^(\d+(?:\.\d+)?)\s*(G|M|k|K|R)?$/)
  if (!m) return null
  const base = parseFloat(m[1])
  const mult = m[2] === 'G' ? 1e9 : m[2] === 'M' ? 1e6 : m[2] === 'k' || m[2] === 'K' ? 1e3 : 1
  const v = base * mult
  return v > 0 && v < 1e10 ? v : null
}

/** 阻值 → 前段色环(数字环 + 倍率环);越界返回 null */
function encodeValueBands(v: number, sig: 2 | 3): { keys: string[]; nominal: number } | null {
  if (!(v > 0) || !isFinite(v)) return null
  const exp = Math.floor(Math.log10(v))
  let s = Math.round(v / Math.pow(10, exp - sig + 1))
  let e = exp
  if (s >= Math.pow(10, sig)) {
    s /= 10
    e += 1
  }
  const multExp = e - sig + 1
  if (multExp > 9 || multExp < -2) return null
  const multKey = multExp === -1 ? 'gold' : multExp === -2 ? 'silver' : DIGIT_COLORS[multExp].key
  const digitKeys = String(s)
    .padStart(sig, '0')
    .split('')
    .map((ch) => DIGIT_COLORS[+ch].key)
  return { keys: [...digitKeys, multKey], nominal: s * Math.pow(10, multExp) }
}

const selectStyle = {
  borderColor: 'rgb(var(--border-strong))',
  backgroundColor: 'rgb(var(--bg-card))',
  color: 'rgb(var(--text))',
} as const

export function ResistorColorCodeClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tuiFromEntry(ResistorColorCodeCalculatorL10n, locale, key, fb)

  const [mode, setMode] = useState<'decode' | 'encode'>('decode')
  const [bandCount, setBandCount] = useState<4 | 5 | 6>(4)
  const [bands, setBands] = useState<string[]>(['yellow', 'violet', 'red', 'gold'])
  // encode(反解)侧
  const [encInput, setEncInput] = useState('4.7k')
  const [encTol, setEncTol] = useState<string>('gold')
  const [encSig, setEncSig] = useState<2 | 3>(2)

  const bandsForCount = (count: 4 | 5 | 6): string[] =>
    count === 4
      ? ['yellow', 'violet', 'red', 'gold']
      : count === 5
        ? ['yellow', 'violet', 'black', 'red', 'gold']
        : ['yellow', 'violet', 'black', 'red', 'gold', 'brown']

  const changeBandCount = (count: 4 | 5 | 6) => {
    setBandCount(count)
    setBands(bandsForCount(count))
  }

  const setBand = (i: number, key: string) => {
    setBands((prev) => prev.map((b, j) => (j === i ? key : b)))
  }

  // decode:色环 → 阻值
  const decoded = useMemo(() => {
    const digitCount = bandCount >= 5 ? 3 : 2
    const digits: (number | undefined)[] = bands.slice(0, digitCount).map((c) => {
      const d = DIGIT_COLORS.find((x) => x.key === c)
      return d ? (d.digit as number) : undefined
    })
    if (digits.some((d) => d === undefined)) return null
    const multKey = bands[digitCount]
    let multExp: number | undefined = DIGIT_COLORS.find((x) => x.key === multKey)?.digit
    if (multExp === undefined) {
      if (multKey === 'gold') multExp = -1
      else if (multKey === 'silver') multExp = -2
      else return null
    }
    let nominal = 0
    for (const d of digits) nominal = nominal * 10 + (d as number)
    nominal *= Math.pow(10, multExp)
    const tol = TOLERANCES.find((t) => t.key === bands[digitCount + 1])?.pct
    if (tol === undefined) return null
    const tempco = bandCount === 6 ? TEMPCO.find((t) => t.key === bands[bandCount - 1])?.ppm : undefined
    if (bandCount === 6 && tempco === undefined) return null
    return { nominal, tol, tempco }
  }, [bands, bandCount])

  // encode:阻值 → 色环
  const encoded = useMemo(() => {
    const v = parseOhms(encInput)
    if (v === null) return null
    return encodeValueBands(v, encSig)
  }, [encInput, encSig])

  const colorName = (key: string) => L(`color.${key}`, cap(key))

  const bandSelect = (index: number, labelKey: string, labelFb: string, options: readonly string[]) => (
    <div key={labelKey}>
      <label htmlFor={`band-${index}`} className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
        {L(labelKey, labelFb)}
      </label>
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 shrink-0 rounded border" style={{ backgroundColor: colorHex(bands[index]), borderColor: 'rgb(var(--border-strong))' }} aria-hidden="true" />
        <select
          id={`band-${index}`}
          value={bands[index]}
          onChange={(e) => setBand(index, e.target.value)}
          className="w-full rounded-lg border p-2.5 text-sm shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          style={selectStyle}
        >
          {options.map((o) => (
            <option key={o} value={o}>{colorName(o)}</option>
          ))}
        </select>
      </div>
    </div>
  )

  const digitKeys = ['brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'] // 首环不为黑(0 打头无意义)
  const allDigitKeys = DIGIT_COLORS.map((d) => d.key)
  const multOptions = [...allDigitKeys, 'gold', 'silver']
  const tolOptions = TOLERANCES.map((t) => t.key)
  const tempOptions = TEMPCO.map((t) => t.key)

  const decodedTolIndex = bandCount >= 5 ? 4 : 3

  return (
    <div className="space-y-5">
      {/* 模式切换 */}
      <div className="flex flex-wrap gap-2">
        {([['decode', 'modeDecode', 'Bands → Value'], ['encode', 'modeEncode', 'Value → Bands']] as const).map(([m, key, fb]) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              mode === m
                ? 'border-brand-600 bg-brand-600 text-white hover:bg-brand-700'
                : 'border-brand-300 bg-brand-50 text-brand-700 hover:bg-brand-100 dark:border-brand-500/50 dark:bg-brand-950/40 dark:text-brand-300'
            }`}
          >
            {L(key, fb)}
          </button>
        ))}
      </div>

      {mode === 'decode' ? (
        <>
          {/* 环数 */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('bandsCount', 'Band count')}</span>
            {([4, 5, 6] as const).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => changeBandCount(n)}
                aria-pressed={bandCount === n}
                className={`h-9 w-11 rounded-lg border text-sm font-semibold transition-colors ${
                  bandCount === n ? 'border-brand-600 bg-brand-600 text-white' : ''
                }`}
                style={bandCount === n ? undefined : selectStyle}
              >
                {n}
              </button>
            ))}
          </div>

          {/* 电阻可视化 */}
          <ResistorGraphic stripes={bands} tolIndex={decodedTolIndex} />

          {/* 色环选择 */}
          <div className="grid grid-cols-1 gap-3 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
            {bandSelect(0, 'band.d1', 'Band 1 (digit)', digitKeys)}
            {bandSelect(1, 'band.d2', 'Band 2 (digit)', allDigitKeys)}
            {bandCount >= 5 && bandSelect(2, 'band.d3', 'Band 3 (digit)', allDigitKeys)}
            {bandSelect(bandCount >= 5 ? 3 : 2, 'band.mult', 'Multiplier band', multOptions)}
            {bandSelect(bandCount >= 5 ? 4 : 3, 'band.tol', 'Tolerance band', tolOptions)}
            {bandCount === 6 && bandSelect(5, 'band.temp', 'Temp coeff. band', tempOptions)}
          </div>

          <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {decoded ? (
              <>
                <ResultCard
                  label={L('valueLabel', 'Resistance')}
                  value={`${fmtEng(decoded.nominal, 'Ω')} ±${decoded.tol}%`}
                  highlight
                />
                <ResultCard
                  label={L('tolLabel', 'Tolerance')}
                  value={`±${decoded.tol}% (−${fmtNum(decoded.nominal * decoded.tol / 100, 2)} / +${fmtNum(decoded.nominal * decoded.tol / 100, 2)} Ω)`}
                />
                <ResultCard
                  label={L('minLabel', 'Minimum')}
                  value={`${fmtEng(decoded.nominal * (1 - decoded.tol / 100), 'Ω')}`}
                />
                <ResultCard
                  label={L('maxLabel', 'Maximum')}
                  value={`${fmtEng(decoded.nominal * (1 + decoded.tol / 100), 'Ω')}`}
                />
                {bandCount === 6 && (
                  <ResultCard
                    label={L('tempLabel', 'Temperature coefficient')}
                    value={decoded.tempco !== undefined ? `${decoded.tempco} ppm/K` : '—'}
                  />
                )}
              </>
            ) : (
              <ResultCard
                label={L('valueLabel', 'Resistance')}
                value={`⚠️ ${L('errBands', 'Could not decode that band combination — check the selected colors')}`}
                error
              />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-3 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
            <div>
              <label htmlFor="enc-value" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('encInput', 'Resistance (e.g. 4.7k, 470, 1.2M)')}
              </label>
              <input
                id="enc-value"
                type="text"
                value={encInput}
                onChange={(e) => setEncInput(e.target.value)}
                placeholder="4.7k"
                className="w-full rounded-lg border p-3 font-mono text-sm shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                style={selectStyle}
              />
            </div>
            <div>
              <label htmlFor="enc-tol" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('encTol', 'Tolerance')}
              </label>
              <select
                id="enc-tol"
                value={encTol}
                onChange={(e) => setEncTol(e.target.value)}
                className="w-full rounded-lg border p-3 text-sm shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                style={selectStyle}
              >
                {TOLERANCES.map((t) => (
                  <option key={t.key} value={t.key}>{colorName(t.key)} ±{t.pct}%</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="enc-bands" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('encBands', 'Band count')}
              </label>
              <select
                id="enc-bands"
                value={encSig === 2 ? '4' : '5'}
                onChange={(e) => setEncSig(e.target.value === '5' ? 3 : 2)}
                className="w-full rounded-lg border p-3 text-sm shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                style={selectStyle}
              >
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          {encoded ? (
            <>
              <ResistorGraphic stripes={[...encoded.keys, encTol]} tolIndex={encoded.keys.length} />
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('colorNames', 'Band colors')}:</span>
                {[...encoded.keys, encTol].map((k, i) => (
                  <span
                    key={`${k}-${i}`}
                    className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                    style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text))' }}
                  >
                    <span className="h-3.5 w-3.5 rounded-sm border" style={{ backgroundColor: colorHex(k), borderColor: 'rgba(0,0,0,0.15)' }} aria-hidden="true" />
                    {colorName(k)}
                  </span>
                ))}
              </div>
              <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <ResultCard
                  label={L('valueLabel', 'Resistance')}
                  value={`${fmtEng(encoded.nominal, 'Ω')} ±${TOLERANCES.find((t) => t.key === encTol)?.pct ?? 5}%`}
                  highlight
                />
              </div>
            </>
          ) : (
            <ResultCard label={L('valueLabel', 'Resistance')} value={`⚠️ ${L('encErr', 'Could not parse that value — try 470, 4.7k, 1M, or 0.22')}`} error />
          )}
        </>
      )}

      <CalculatorNote>
        {L(
          'note',
          '📖 Read from the end with the wider gap: the gold or silver tolerance band sits on the right. Five bands add a third digit (±1% parts); the rare sixth band is temperature drift in ppm/K. A ±5% 470 Ω part may legally read anywhere from 446.5 to 493.5 Ω — measure out of circuit.',
        )}
      </CalculatorNote>
    </div>
  )
}

// ══════════════════ Tone Generator(自定义,Web Audio)══════════════════

const NOTE_NAMES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

/** 频率 → 最近音名 + 偏差音分(A4 = 440,十二平均律) */
function nearestNote(f: number): string {
  if (!(f >= 20 && f <= 20000)) return '—'
  const n = 12 * Math.log2(f / 440)
  const nearest = Math.round(n)
  const cents = Math.round((n - nearest) * 100)
  const name = NOTE_NAMES[((nearest % 12) + 12) % 12]
  const octave = Math.floor((69 + nearest) / 12) - 1
  const sign = cents === 0 ? '±0' : cents > 0 ? `+${cents}` : String(cents)
  return `${name}${octave} · ${sign} cents`
}

const LOG_MIN = Math.log(20)
const LOG_MAX = Math.log(20000)

export function ToneGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tuiFromEntry(ToneGeneratorL10n, locale, key, fb)

  const [freq, setFreq] = useState(440)
  const [wave, setWave] = useState<OscillatorType>('sine')
  const [volume, setVolume] = useState(40)
  const [duration, setDuration] = useState(3) // 秒;0 = 持续
  const [playing, setPlaying] = useState(false)

  const ctxRef = useRef<AudioContext | null>(null)
  const oscRef = useRef<OscillatorNode | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const timerRef = useRef<number | null>(null)

  const freqValid = freq >= 20 && freq <= 20000
  const freqClamped = Math.min(Math.max(freq, 20), 20000)
  const targetGain = Math.max((volume / 100) * 0.5, 0.0001)

  const stop = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
    const ctx = ctxRef.current
    const osc = oscRef.current
    const gain = gainRef.current
    oscRef.current = null
    gainRef.current = null
    setPlaying(false)
    if (!ctx || !osc || !gain) return
    try {
      const now = ctx.currentTime
      gain.gain.cancelScheduledValues(now)
      gain.gain.setTargetAtTime(0.0001, now, 0.02)
      osc.stop(now + 0.12)
    } catch {
      // 已停止
    }
  }, [])

  const play = useCallback(() => {
    stop()
    // AudioContext 只在用户手势回调里创建:SSR/首帧零浏览器 API 调用
    const AC =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) return
    if (!ctxRef.current) ctxRef.current = new AC()
    const ctx = ctxRef.current
    void ctx.resume()
    const osc = ctx.createOscillator()
    osc.type = wave
    osc.frequency.value = freqClamped
    const gain = ctx.createGain()
    const now = ctx.currentTime
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(targetGain, now + 0.02)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    oscRef.current = osc
    gainRef.current = gain
    setPlaying(true)
    if (duration > 0) {
      timerRef.current = window.setTimeout(() => stop(), duration * 1000)
    }
  }, [stop, wave, freqClamped, targetGain, duration])

  // 播放中实时微调:频率 / 音量 / 波形
  useEffect(() => {
    const ctx = ctxRef.current
    const osc = oscRef.current
    if (!ctx || !osc) return
    try {
      osc.frequency.setTargetAtTime(freqClamped, ctx.currentTime, 0.01)
    } catch {
      // 忽略
    }
  }, [freqClamped])

  useEffect(() => {
    const ctx = ctxRef.current
    const gain = gainRef.current
    if (!ctx || !gain) return
    try {
      gain.gain.setTargetAtTime(targetGain, ctx.currentTime, 0.02)
    } catch {
      // 忽略
    }
  }, [targetGain])

  useEffect(() => {
    const osc = oscRef.current
    if (osc) osc.type = wave
  }, [wave])

  // 卸载兜底:停音并关 context
  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current)
      try {
        oscRef.current?.stop()
      } catch {
        // 忽略
      }
      try {
        void ctxRef.current?.close()
      } catch {
        // 忽略
      }
    }
  }, [])

  const sliderPos = Math.round(((Math.log(freqClamped) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * 1000)
  const onSlider = (pos: number) => setFreq(Math.round(Math.exp(LOG_MIN + ((LOG_MAX - LOG_MIN) * pos) / 1000)))

  const labelStyle = { color: 'rgb(var(--text-muted))' } as const

  return (
    <div className="space-y-5">
      {/* 状态 + 频率大字 */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ResultCard
          label={L('frequency', 'Frequency')}
          value={`${fmtNum(freqClamped, 0)} Hz`}
          highlight
          sublabel={L('nearestNote', 'Nearest note') + ': ' + nearestNote(freqClamped)}
        />
        <ResultCard
          label={L('waveform', 'Waveform')}
          value={L(wave, cap(wave))}
          sublabel={playing ? L('playing', 'Playing') : L('idle', 'Idle')}
        />
      </div>

      {/* 频率:对数滑杆 + 数字输入 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="tone-freq" className="text-sm font-medium" style={labelStyle}>
            {L('frequency', 'Frequency')}
          </label>
          {!freqValid && (
            <span className="text-xs font-medium text-red-500">{L('errFreq', 'Frequency must be between 20 Hz and 20 kHz')}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <input
            id="tone-freq"
            type="number"
            min={20}
            max={20000}
            value={freq}
            onChange={(e) => setFreq(Number(e.target.value))}
            className="w-28 rounded-lg border p-2.5 text-right font-mono text-sm shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            style={selectStyle}
          />
          <span className="text-sm" style={labelStyle}>Hz</span>
          <input
            type="range"
            min={0}
            max={1000}
            step={1}
            value={sliderPos}
            onChange={(e) => onSlider(Number(e.target.value))}
            aria-label={L('frequency', 'Frequency')}
            className="w-full accent-brand-600"
          />
        </div>
        <div className="mt-1 flex justify-between text-[11px]" style={{ color: 'rgb(var(--text-faint))' }}>
          <span>20 Hz</span><span>200 Hz</span><span>2 kHz</span><span>20 kHz</span>
        </div>
        {/* 常用测试音一键直达:市电嗡鸣 / A4 标准音 / 中频参考 / 高频检查(标签纯单位,免译) */}
        <div className="mt-2 flex flex-wrap gap-2">
          {([60, 440, 1000, 10000] as const).map((f) => {
            const active = freqClamped === f
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFreq(f)}
                aria-pressed={active}
                className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                  active ? 'border-brand-600 bg-brand-600 text-white' : ''
                }`}
                style={active ? undefined : selectStyle}
              >
                {f >= 1000 ? `${f / 1000} kHz` : `${f} Hz`}
                {f === 440 ? ' · A4' : ''}
              </button>
            )
          })}
        </div>
      </div>

      {/* 波形 */}
      <div className="flex flex-wrap gap-2">
        {(['sine', 'square', 'triangle', 'sawtooth'] as const).map((w) => (
          <button
            key={w}
            type="button"
            onClick={() => setWave(w)}
            aria-pressed={wave === w}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              wave === w
                ? 'border-brand-600 bg-brand-600 text-white hover:bg-brand-700'
                : 'border-brand-300 bg-brand-50 text-brand-700 hover:bg-brand-100 dark:border-brand-500/50 dark:bg-brand-950/40 dark:text-brand-300'
            }`}
          >
            {L(w, cap(w))}
          </button>
        ))}
      </div>

      {/* 音量 + 时长 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="tone-vol" className="text-sm font-medium" style={labelStyle}>{L('volume', 'Volume')}</label>
            <span className="font-mono text-sm font-semibold text-brand-600 dark:text-brand-400">{volume}%</span>
          </div>
          <input
            id="tone-vol"
            type="range"
            min={0}
            max={100}
            step={1}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full accent-brand-600"
          />
        </div>
        <div>
          <span className="mb-2 block text-sm font-medium" style={labelStyle}>{L('duration', 'Duration')}</span>
          <div className="flex flex-wrap gap-2">
            {[1, 3, 5, 10, 0].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDuration(d)}
                aria-pressed={duration === d}
                className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                  duration === d ? 'border-brand-600 bg-brand-600 text-white' : ''
                }`}
                style={duration === d ? undefined : selectStyle}
              >
                {d === 0 ? L('continuous', 'Continuous') : `${d} s`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 播放控制 */}
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={play} className="btn btn-primary" disabled={!freqValid}>
          ▶ {L('play', 'Play')}
        </button>
        <button
          type="button"
          onClick={stop}
          disabled={!playing}
          className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors disabled:opacity-40"
          style={selectStyle}
        >
          ■ {L('stop', 'Stop')}
        </button>
      </div>

      <CalculatorNote>
        {L(
          'note',
          '🔊 Start at low volume: a pure tone at the same SPL pushes harder than music. The slider is logarithmic, like hearing, so 20 Hz-20 kHz is equally adjustable everywhere. The AudioContext is created only when you press play — everything runs offline in your browser.',
        )}
      </CalculatorNote>
    </div>
  )
}

// ══════════════════ BPM Tap Counter(自定义)══════════════════

const STABILITY_TIERS = [
  { max: 0.02, key: 'stLocked', fb: 'locked', color: '#16a34a' },
  { max: 0.05, key: 'stSteady', fb: 'steady', color: '#2563eb' },
  { max: 0.12, key: 'stLoose', fb: 'loose', color: '#d97706' },
  { max: Infinity, key: 'stUneven', fb: 'uneven', color: '#dc2626' },
] as const

export function BpmTapCounterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tuiFromEntry(BpmTapCounterL10n, locale, key, fb)

  const [taps, setTaps] = useState<number[]>([])

  const tap = useCallback(() => {
    const t = typeof performance !== 'undefined' ? performance.now() : Date.now()
    setTaps((prev) => {
      const last = prev[prev.length - 1]
      // 间隔超过 3s:视为重新开始(上一次会话已过时)
      if (last !== undefined && t - last > 3000) return [t]
      return [...prev, t]
    })
  }, [])

  // 键盘 T 键点按(挂载后才挂 listener,SSR 安全)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat) return
      const target = e.target as HTMLElement | null
      // 输入框/选择框里打字不触发
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable)) return
      if (e.key === 't' || e.key === 'T') tap()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [tap])

  const stats = useMemo(() => {
    const recent = taps.slice(-9) // 滑窗:最近 9 次点按 → 8 个间隔
    if (recent.length < 2) return null
    const intervals: number[] = []
    for (let i = 1; i < recent.length; i++) intervals.push(recent[i] - recent[i - 1])
    const mean = intervals.reduce((a, b) => a + b, 0) / intervals.length
    const variance = intervals.reduce((a, b) => a + (b - mean) ** 2, 0) / intervals.length
    const cv = Math.sqrt(variance) / mean
    const tier = STABILITY_TIERS.find((t) => cv <= t.max) ?? STABILITY_TIERS[STABILITY_TIERS.length - 1]
    return { bpm: 60000 / mean, mean, cv, tier, count: taps.length }
  }, [taps])

  const summary = stats
    ? `${L('bpm', 'Tempo (BPM)')}: ${fmtNum(stats.bpm, 1)} | ${L('taps', 'Taps')}: ${stats.count} | ${L('avgInterval', 'Avg interval')}: ${fmtNum(stats.mean, 0)} ms | ${L('stability', 'Consistency')}: ${L(stats.tier.key, stats.tier.fb)}`
    : ''

  return (
    <div className="space-y-5">
      {/* 大按钮 */}
      <button
        type="button"
        onClick={tap}
        className="w-full select-none rounded-2xl border-2 border-dashed py-12 text-center transition active:scale-[0.99]"
        style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-subtle))' }}
      >
        <span className="block text-2xl font-bold tracking-wide" style={{ color: 'rgb(var(--text))' }}>
          {L('tapPrompt', 'TAP')}
        </span>
        <span className="mt-1 block text-sm" style={{ color: 'rgb(var(--text-faint))' }}>
          {L('tapHint', 'Tap here, or press the T key')}
        </span>
      </button>

      {/* 读数 */}
      <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ResultCard
          label={L('bpm', 'Tempo (BPM)')}
          value={stats ? fmtNum(stats.bpm, 1) : L('waiting', 'Tap at least twice')}
          highlight
        />
        <ResultCard label={L('taps', 'Taps')} value={String(taps.length)} />
        <ResultCard label={L('avgInterval', 'Avg interval')} value={stats ? `${fmtNum(stats.mean, 0)} ms` : '—'} />
        <ResultCard
          label={L('stability', 'Consistency')}
          value={stats ? L(stats.tier.key, stats.tier.fb) : '—'}
          sublabel={stats ? `±${fmtNum(stats.cv * 100, 1)}%` : undefined}
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <CopyButton value={summary} disabled={!stats} />
        <button
          type="button"
          onClick={() => setTaps([])}
          disabled={taps.length === 0}
          className="rounded-lg border px-3 py-1.5 text-sm transition-colors disabled:opacity-40"
          style={selectStyle}
        >
          {L('reset', 'Reset')}
        </button>
        {stats && (
          <span className="ml-auto text-xs font-semibold" style={{ color: stats.tier.color }}>
            ● {L(stats.tier.key, stats.tier.fb)}
          </span>
        )}
      </div>

      <CalculatorNote>
        {L(
          'note',
          '🥁 Keep tapping through eight beats or so — the counter averages your last 8 intervals, so early wild taps fade out. If the reading is roughly double what you expect, the song is in half-time: tap the half note instead. A gap longer than 3 seconds restarts the count.',
        )}
      </CalculatorNote>
    </div>
  )
}
