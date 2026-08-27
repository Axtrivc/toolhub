'use client'

import { useState } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { CopyButton } from '../CopyButton'
import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { PresetChips } from '../calculator/PresetChips'
import { fmtNum, toNum } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * 生成器类工具(UUID、Lorem Ipsum)+ 几何 + 统计计算器
 */

// ── UUID 生成器 ──
export function UUIDGeneratorClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('uuid-generator', locale, key, fb)

  const [uuids, setUuids] = useState<string[]>([])
  const [count, setCount] = useState('5')

  // 常用量批量档(10/50/100):生成随机串零成本、旧结果可整体丢弃,
  // 所以点 chip 即按该数量直接重生成——省去"选中数字→重输→点生成"三步。
  const COUNT_PRESETS = ['10', '50', '100']

  // override 用于预设 chip 单击直出(此时 state 尚未更新,不能读 count);
  // onClick 处必须 () => generate(),避免把 MouseEvent 当 override 传入
  const generate = (override?: string) => {
    const n = Math.min(Math.max(1, Number(override ?? count) || 1), 100)
    const out: string[] = []
    for (let i = 0; i < n; i++) out.push(generateUUID())
    setUuids(out)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label htmlFor="count" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('howMany', 'How many')}</label>
          <input id="count" type="number" min="1" max="100" value={count} onChange={(e) => setCount(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') generate() }} autoComplete="off" className="w-28 rounded-lg border border-[rgb(var(--border-strong))] bg-[rgb(var(--bg-card))] p-3 tabular-nums text-[rgb(var(--text))] shadow-sm outline-none transition focus:ring-2" />
        </div>
        <button onClick={() => generate()} className="btn btn-primary">{L('generate', '🎲 Generate UUIDs')}</button>
        {/* 纯数字标签无需本地化 */}
        <PresetChips
          presets={COUNT_PRESETS.map((v) => ({ label: v, values: { count: v } }))}
          labelOf={(fb) => fb}
          onApply={(values) => {
            setCount(values.count ?? count)
            generate(values.count)
          }}
        />
        {uuids.length > 0 && <CopyButton value={uuids.join('\n')} label={L('copyAll', 'Copy all')} />}
      </div>
      {uuids.length > 0 && (
        <div role="status" aria-live="polite" className="space-y-2">
          {uuids.map((u, i) => (
            <div key={i} className="flex items-center justify-between gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-card))] p-3 shadow-sm">
              <code className="break-all font-mono text-sm text-[rgb(var(--text))]">{u}</code>
              <CopyButton value={u} label="" />
            </div>
          ))}
        </div>
      )}
      <CalculatorNote>
        {L(
          'note',
          '🆔 Generates RFC 4122 v4 UUIDs using the Web Crypto API. Used for unique IDs in databases, sessions, and distributed systems.',
        )}
      </CalculatorNote>
    </div>
  )
}

function generateUUID(): string {
  // 优先原生 randomUUID;不可用时用 getRandomValues 实现 RFC 4122 v4
  // (16 字节,第 7 字节高 4 位置 0100、第 9 字节高 2 位置 10)——逻辑同
  // SecretKeyGeneratorClient 的 uuidV4,不跨文件 import 私有函数
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  const b = new Uint8Array(16)
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(b)
  } else {
    // 极端兜底:非安全上下文等无 crypto 的环境(仅影响随机性来源)
    for (let i = 0; i < 16; i++) b[i] = Math.floor(Math.random() * 256)
  }
  b[6] = (b[6] & 0x0f) | 0x40
  b[8] = (b[8] & 0x3f) | 0x80
  const hex = [...b].map((x) => x.toString(16).padStart(2, '0')).join('')
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

// ── Lorem Ipsum 生成器 ──
const LOREM_WORDS = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum'.split(' ')

type LoremUnit = 'paragraphs' | 'sentences' | 'words'
// 各生成单位的数量上限
const LOREM_UNIT_MAX: Record<LoremUnit, number> = { paragraphs: 20, sentences: 100, words: 200 }
// 经典开头(start with lorem 勾选时用于第一段/第一句/开头几个词)
const LOREM_CLASSIC_WORDS = 'lorem ipsum dolor sit amet'.split(' ')
const LOREM_CLASSIC_SENTENCE = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

export function LoremIpsumGeneratorClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('lorem-ipsum-generator', locale, key, fb)

  const [unit, setUnit] = useState<LoremUnit>('paragraphs')
  const [count, setCount] = useState('3')
  const [startWithLorem, setStartWithLorem] = useState(true)
  const [output, setOutput] = useState('')

  // override 供「换一批」单击直出(此时不能依赖最新 state);onClick 处
  // 必须 () => generate(),避免把 MouseEvent 当 override 传入
  const generate = (override?: string) => {
    const n = Math.min(Math.max(1, Number(override ?? count) || 1), LOREM_UNIT_MAX[unit])
    const randWord = () => LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]
    const randSentence = () => {
      const words = 8 + Math.floor(Math.random() * 12)
      const ws = Array.from({ length: words }, randWord)
      ws[0] = ws[0][0].toUpperCase() + ws[0].slice(1)
      return ws.join(' ') + '.'
    }
    let out: string
    if (unit === 'words') {
      const ws = Array.from({ length: n }, randWord)
      if (startWithLorem) {
        for (let i = 0; i < Math.min(n, LOREM_CLASSIC_WORDS.length); i++) ws[i] = LOREM_CLASSIC_WORDS[i]
      }
      ws[0] = ws[0][0].toUpperCase() + ws[0].slice(1)
      out = ws.join(' ')
    } else if (unit === 'sentences') {
      const parts = Array.from({ length: n }, randSentence)
      if (startWithLorem) parts[0] = LOREM_CLASSIC_SENTENCE
      out = parts.join(' ')
    } else {
      const paras = Array.from({ length: n }, () => {
        const sentences = 4 + Math.floor(Math.random() * 4)
        return Array.from({ length: sentences }, randSentence).join(' ')
      })
      if (startWithLorem) paras[0] = `${LOREM_CLASSIC_SENTENCE} ${paras[0]}`
      out = paras.join('\n\n')
    }
    setOutput(out)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label htmlFor="lorem-unit" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('unit', 'Unit')}</label>
          <select
            id="lorem-unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value as LoremUnit)}
            className="w-36 rounded-lg border border-[rgb(var(--border-strong))] bg-[rgb(var(--bg-card))] p-3 text-[rgb(var(--text))] shadow-sm outline-none transition focus:ring-2"
          >
            <option value="paragraphs">{L('unitParagraphs', 'Paragraphs')}</option>
            <option value="sentences">{L('unitSentences', 'Sentences')}</option>
            <option value="words">{L('unitWords', 'Words')}</option>
          </select>
        </div>
        <div>
          <label htmlFor="lorem-count" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('count', 'Count')}</label>
          <input id="lorem-count" type="number" min="1" max={LOREM_UNIT_MAX[unit]} value={count} onChange={(e) => setCount(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') generate() }} autoComplete="off" className="w-28 rounded-lg border border-[rgb(var(--border-strong))] bg-[rgb(var(--bg-card))] p-3 tabular-nums text-[rgb(var(--text))] shadow-sm outline-none transition focus:ring-2" />
        </div>
        <label className="flex cursor-pointer items-center gap-2 pb-3 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          <input
            type="checkbox"
            checked={startWithLorem}
            onChange={(e) => setStartWithLorem(e.target.checked)}
            className="h-4 w-4 rounded border-[rgb(var(--border-strong))] text-brand-600 focus:ring-brand-500"
          />
          {L('startWithLorem', 'Start with "Lorem ipsum"')}
        </label>
        <button onClick={() => generate()} className="btn btn-primary">{L('generate', '📝 Generate')}</button>
        {output && <CopyButton value={output} />}
      </div>
      {output && (
        // 20 段上限约两千词,不约束高度时换一批按钮会被推出视口;内部滚动解决
        <div role="status" aria-live="polite" className="max-h-[480px] overflow-y-auto whitespace-pre-line rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-card))] p-4 text-sm leading-relaxed text-[rgb(var(--text-muted))] shadow-sm">
          {output}
        </div>
      )}
      {/* 结果就地换一批:长输出时不必滚回顶部找 Generate(样式同工厂 Reset 按钮) */}
      {output && (
        <div>
          <button
            type="button"
            onClick={() => generate()}
            className="rounded-lg border px-3 py-1.5 text-sm transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
            style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}
          >
            ♻️ {L('regenerate', 'Regenerate')}
          </button>
        </div>
      )}
      <CalculatorNote>
        {L(
          'note',
          '📄 Generates placeholder text for mockups, designs, and layouts. Based on a 1st-century BC text by Cicero.',
        )}
      </CalculatorNote>
    </div>
  )
}

// ── 几何计算器(圆)──
export const CircleCalculatorClient = makeCalculatorClient({
  slug: 'circle-calculator',
  inputs: [{ key: 'r', label: 'Radius', suffix: 'r', default: '5', slider: { min: 1, max: 50, step: 0.5 } }],
  outputs: [
    { key: 'area', label: 'Area', highlight: true },
    { key: 'circumference', label: 'Circumference' },
    { key: 'diameter', label: 'Diameter' },
  ],
  compute: (v) => {
    const r = toNum(v.r)
    // 负半径无几何意义:r² 会把输入错误伪装成看似正常的正面积
    if (r < 0) {
      return { area: '⚠️ Radius cannot be negative', circumference: '—', diameter: '—' }
    }
    return {
      area: `${fmtNum(Math.PI * r * r, 4)} (π r²)`,
      circumference: `${fmtNum(2 * Math.PI * r, 4)} (2π r)`,
      diameter: `${fmtNum(2 * r, 4)}`,
    }
  },
  chart: { kind: 'shape', shape: 'circle', dimKeys: ['r'], title: 'Shape preview' },
  note: '⭕ Area = π r². Circumference = 2 π r. Diameter = 2 r.',
})

// ── 几何计算器(三角形 - 勾股定理)──
export const TriangleCalculatorClient = makeCalculatorClient({
  slug: 'triangle-calculator',
  inputs: [
    { key: 'a', label: 'Side a', default: '3', slider: { min: 1, max: 50, step: 0.5 } },
    { key: 'b', label: 'Side b', default: '4', slider: { min: 1, max: 50, step: 0.5 } },
  ],
  outputs: [
    { key: 'c', label: 'Hypotenuse (c)', highlight: true },
    { key: 'area', label: 'Area' },
    { key: 'perimeter', label: 'Perimeter' },
  ],
  compute: (v) => {
    const a = toNum(v.a)
    const b = toNum(v.b)
    // 负边长与圆的负半径同理:a²/b² 会把负号伪装掉,c 看似正常而面积变负
    if (a < 0 || b < 0) {
      return { c: '⚠️ Side lengths cannot be negative', area: '—', perimeter: '—' }
    }
    const c = Math.sqrt(a * a + b * b)
    return {
      c: `${fmtNum(c, 4)} (√(a² + b²))`,
      area: `${fmtNum((a * b) / 2, 4)}`,
      perimeter: `${fmtNum(a + b + c, 4)}`,
    }
  },
  chart: { kind: 'shape', shape: 'triangle', dimKeys: ['a', 'b'], title: 'Shape preview' },
  note: '📐 Pythagorean theorem: a² + b² = c². For right triangles only.',
})

// ── 矩形计算器 ──
export const RectangleCalculatorClient = makeCalculatorClient({
  slug: 'rectangle-calculator',
  inputs: [
    { key: 'w', label: 'Width', default: '8', slider: { min: 1, max: 50, step: 0.5 } },
    { key: 'h', label: 'Height', default: '5', slider: { min: 1, max: 50, step: 0.5 } },
  ],
  outputs: [
    { key: 'area', label: 'Area', highlight: true },
    { key: 'perimeter', label: 'Perimeter' },
    { key: 'diagonal', label: 'Diagonal' },
  ],
  compute: (v) => {
    const w = toNum(v.w)
    const h = toNum(v.h)
    // 负宽高:面积/周长直接变负,对角线却看着正常,需在源头拦截
    if (w < 0 || h < 0) {
      return { area: '⚠️ Width and height cannot be negative', perimeter: '—', diagonal: '—' }
    }
    return {
      area: `${fmtNum(w * h, 4)} (w × h)`,
      perimeter: `${fmtNum(2 * (w + h), 4)} (2(w + h))`,
      diagonal: `${fmtNum(Math.sqrt(w * w + h * h), 4)} (√(w² + h²))`,
    }
  },
  chart: { kind: 'shape', shape: 'rectangle', dimKeys: ['w', 'h'], title: 'Shape preview' },
  note: '▭ Area = width × height. Diagonal uses the Pythagorean theorem.',
})

// ── 统计数据集解析(标准差 / 百分位共用)──
// P-1 大输入防线:数字串粘贴无上限时,逐键 O(n)/O(n log n) 解析加图表全量
// 重绘在十万级输入下会明显掉帧;超上限只统计前 1 万个,并在结果卡上以警告
// 后缀提示(与 lcm-gcd 的「ignored: …」结果内联警告同一惯例)
const DATASET_NUMS_MAX = 10000

function parseDataset(
  raw: string,
  T?: (key: string, fb: string) => string,
): { nums: number[]; notice: string } {
  // 先做字符级粗切再 tokenize:1 万个数字平均长度远小于 24 字符,
  // 巨型粘贴(MB 级)不再整体 split 出百万级 token 数组
  const scanCharsMax = DATASET_NUMS_MAX * 24
  const src = raw.length > scanCharsMax ? raw.slice(0, scanCharsMax) : raw
  const tokens = src.split(/[\s,]+/).filter(Boolean)
  const nums = tokens.slice(0, DATASET_NUMS_MAX).map(Number).filter((n) => isFinite(n))
  const notice =
    tokens.length > DATASET_NUMS_MAX && T
      ? ` ⚠️ ${T('datasetTruncated', 'only the first 10,000 numbers are counted')}`
      : ''
  return { nums, notice }
}

// ── 标准差计算器 ──
export const StandardDeviationCalculatorClient = makeCalculatorClient({
  slug: 'standard-deviation-calculator',
  // type:'text' 必须显式声明:缺省渲染 <input type="number">,逗号串会被浏览器
  // 消毒成空——输入框看着空白、结果却照算,"没算 vs 算了"无从分辨(B2/F3)
  inputs: [{ key: 'numbers', label: 'Numbers (comma-separated)', default: '4, 8, 15, 16, 23, 42', type: 'text' }],
  outputs: [
    { key: 'mean', label: 'Mean' },
    { key: 'stddev', label: 'Standard deviation (population)', highlight: true },
    { key: 'sampleStddev', label: 'Standard deviation (sample, n−1)' },
    { key: 'variance', label: 'Variance (population)' },
    { key: 'count', label: 'Count' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('standard-deviation-calculator', locale, key, fb)
    const { nums, notice } = parseDataset(v.numbers, T)
    if (nums.length === 0) return { mean: '—', stddev: '—', sampleStddev: '—', variance: '—', count: '0' }
    const n = nums.length
    const mean = nums.reduce((a, b) => a + b, 0) / n
    const ss = nums.reduce((a, b) => a + (b - mean) ** 2, 0) // 离差平方和
    const variance = ss / n // 总体方差(÷N)
    const stddev = Math.sqrt(variance)
    // 样本口径(÷(n−1),贝塞尔校正):n≥2 才有意义,单值无样本方差
    const sampleVar = n >= 2 ? ss / (n - 1) : null
    return {
      mean: fmtNum(mean, 4),
      stddev: fmtNum(stddev, 4),
      sampleStddev: sampleVar === null ? '—' : fmtNum(Math.sqrt(sampleVar), 4),
      variance: fmtNum(variance, 4),
      // 截断提示挂在 Count 卡:主数字卡保持干净,又解释了为什么 count 有上限
      count: String(n) + notice,
    }
  },
  chart: { kind: 'series', title: 'Your numbers vs mean' },
  series: (v) => {
    const { nums } = parseDataset(v.numbers)
    if (nums.length < 2) return null
    const mean = nums.reduce((a, b) => a + b, 0) / nums.length
    const step = Math.max(1, Math.ceil(nums.length / 12))
    return {
      xLabels: nums.map((_, i) => (i % step === 0 || i === nums.length - 1 ? `#${i + 1}` : '')),
      lines: [
        { key: 'value', label: 'Value', color: '#3b82f6', points: nums },
        { key: 'mean', label: 'Mean', color: '#f59e0b', points: nums.map(() => mean), dashed: true },
      ],
    }
  },
  note: "📊 Population stddev divides by N; sample stddev (Bessel's correction) divides by N−1. Both are shown above.",
})

// ── 百分位数计算器 ──
export const PercentileCalculatorClient = makeCalculatorClient({
  slug: 'percentile-calculator',
  inputs: [
    // 同标准差:type:'text' 防 type="number" 把逗号列表消毒成空显示
    { key: 'numbers', label: 'Numbers (comma-separated)', default: '15, 20, 35, 40, 50', type: 'text' },
    { key: 'p', label: 'Percentile', suffix: '%', default: '90', slider: { min: 0, max: 100, step: 1 } },
  ],
  outputs: [{ key: 'result', label: 'Percentile value', highlight: true }],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('percentile-calculator', locale, key, fb)
    const { nums: unsorted, notice } = parseDataset(v.numbers, T)
    if (unsorted.length === 0) return { result: '—' }
    // 线性插值按位次取数,必须升序(与原实现一致)
    const nums = unsorted.slice().sort((a, b) => a - b)
    const p = Math.min(100, Math.max(0, toNum(v.p)))
    // 线性插值法
    const rank = (p / 100) * (nums.length - 1)
    const lo = Math.floor(rank)
    const hi = Math.ceil(rank)
    const result = lo === hi ? nums[lo] : nums[lo] + (rank - lo) * (nums[hi] - nums[lo])
    // 唯一输出即主卡,截断提示随结果内联(lcm-gcd 同款警告后缀惯例)
    return { result: fmtNum(result, 4) + notice }
  },
  chart: { kind: 'series', title: 'Distribution' },
  series: (v) => {
    const { nums: unsorted } = parseDataset(v.numbers)
    if (unsorted.length < 2) return null
    const nums = unsorted.slice().sort((a, b) => a - b)
    const p = Math.min(100, Math.max(0, toNum(v.p)))
    const rank = (p / 100) * (nums.length - 1)
    const lo = Math.floor(rank), hi = Math.ceil(rank)
    const result = lo === hi ? nums[lo] : nums[lo] + (rank - lo) * (nums[hi] - nums[lo])
    return {
      xLabels: nums.map((_, i) => `#${i + 1}`),
      lines: [
        { key: 'sorted', label: 'Sorted values', color: '#3b82f6', points: nums },
        { key: 'pct', label: `P${Math.round(p)}`, color: '#22c55e', points: nums.map(() => result), dashed: true },
      ],
    }
  },
  note: "📈 90th percentile means 90% of values are below this number. Uses linear interpolation (inclusive method, like Excel's PERCENTILE.INC). Common in test scores and performance metrics.",
})

// ── 通货膨胀计算器 ──
export const InflationCalculatorClient = makeCalculatorClient({
  slug: 'inflation-calculator',
  inputs: [
    { key: 'amount', label: 'Amount', suffix: '$', default: '1000', slider: { min: 10, max: 100000, step: 10 } },
    { key: 'rate', label: 'Annual inflation', suffix: '%', default: '3', slider: { min: 0, max: 15, step: 0.25 } },
    { key: 'years', label: 'Years', default: '10', slider: { min: 1, max: 40, step: 1 } },
  ],
  outputs: [
    { key: 'future', label: 'Equivalent cost in future', highlight: true },
    { key: 'lost', label: 'Purchasing power lost' },
  ],
  compute: (v, locale) => {
    const amount = toNum(v.amount)
    const rate = toNum(v.rate) / 100
    const years = toNum(v.years)
    if (amount < 0 || rate < 0 || years < 0) {
      return {
        future: `⚠️ ${tui('inflation-calculator', locale, 'errNonNegative', 'Values cannot be negative')}`,
        lost: '—',
      }
    }
    const future = amount * Math.pow(1 + rate, years)
    return {
      future: fmtUSDValue(future),
      // future 为 0/Infinity 时除式变 NaN/±Inf,兜回 '—' 避免 "—%" 怪串
      lost: future > 0 && isFinite(future) ? `${fmtNum(((future - amount) / future) * 100, 1)}%` : '—',
    }
  },
  chart: { kind: 'series', title: 'Cost of the same basket' },
  series: (v) => {
    const amount = toNum(v.amount), rate = toNum(v.rate) / 100, years = Math.round(toNum(v.years))
    if (!(amount > 0) || !(rate >= 0) || !(years > 0) || years > 50) return null
    const xLabels: string[] = []
    const cost: number[] = []
    const today: number[] = []
    for (let y = 0; y <= years; y++) {
      xLabels.push(`Y${y}`)
      cost.push(amount * Math.pow(1 + rate, y))
      today.push(amount)
    }
    return {
      xLabels,
      lines: [
        { key: 'today', label: 'Costs today', color: '#94a3b8', points: today, dashed: true },
        { key: 'future', label: 'Costs then', color: '#ef4444', points: cost, area: true },
      ],
      highlightBetween: { a: 'today', b: 'future', label: 'Inflation' },
      formatY: (n) => fmtUSDValue(n),
    }
  },
  note: '💸 $1000 today at 3% inflation is worth less each year. In 10 years you\'d need $1,344 to buy what $1,000 buys now.',
})

function fmtUSDValue(n: number): string {
  // 超大指数(如 years>24000)会把 pow 推到 Infinity,直出会渲染成 "$∞"
  if (!isFinite(n)) return '—'
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
}

// ── 退休计算器 ──
export const RetirementCalculatorClient = makeCalculatorClient({
  slug: 'retirement-calculator',
  urlState: true,
  presets: [
    { label: 'Conservative 4%', values: { rate: '4' } },
    { label: 'Balanced 6%', values: { rate: '6' } },
    { label: 'Aggressive 8%', values: { rate: '8' } },
  ],
  inputs: [
    { key: 'current', label: 'Current savings', suffix: '$', default: '25000' },
    { key: 'monthly', label: 'Monthly contribution', suffix: '$', default: '500', slider: { min: 0, max: 5000, step: 50 } },
    { key: 'rate', label: 'Annual return', suffix: '%', default: '7', slider: { min: 0, max: 12, step: 0.1 } },
    { key: 'years', label: 'Years to retirement', default: '30', slider: { min: 1, max: 50, step: 1 } },
  ],
  outputs: [
    { key: 'total', label: 'Retirement savings', highlight: true },
    { key: 'monthlyIncome', label: 'Monthly income (4% rule)' },
    { key: 'contributed', label: 'You contributed' },
    { key: 'growth', label: 'Investment growth' },
  ],
  compute: (v, locale) => {
    const principal = toNum(v.current)
    const monthly = toNum(v.monthly)
    const rate = toNum(v.rate) / 100
    const months = toNum(v.years) * 12
    if (principal < 0 || monthly < 0 || rate < 0 || months < 0) {
      return {
        total: `⚠️ ${tui('retirement-calculator', locale, 'errNonNegative', 'Values cannot be negative')}`,
        monthlyIncome: '—',
        contributed: '—',
        growth: '—',
      }
    }
    let future = principal
    if (rate === 0) future = principal + monthly * months
    else {
      // 年利率必须月化(r/12),否则 7%/30 年会以 1.07^360 复利,$10k 变千万亿级;
      // 公式 P(1+i)^n + PMT·[((1+i)^n−1)/i],i=r/12、n=years×12 —— 与下方 series 同口径
      const rM = rate / 12
      const growth = Math.pow(1 + rM, months)
      future = principal * growth
      future += monthly * ((growth - 1) / rM)
    }
    const contributed = principal + monthly * months
    return {
      total: fmtUSDValue(future),
      monthlyIncome: fmtUSDValue((future * 0.04) / 12),
      contributed: fmtUSDValue(contributed),
      growth: fmtUSDValue(future - contributed),
    }
  },
  note: '👵 Combines compound growth on current savings with regular contributions. Start early — time matters more than amount. The 4% rule: withdrawing 4% of your nest egg per year is historically sustainable across ~30-year retirements.',
  chart: { kind: 'series', title: 'Path to Retirement' },
  // 增长路径:逐年采样,累计投入(面积)vs 总储蓄(面积),中间 = 投资增长
  series: (v) => {
    const principal = toNum(v.current)
    const monthly = toNum(v.monthly)
    const annualRate = toNum(v.rate) / 100
    const years = Math.round(toNum(v.years))
    if (principal < 0 || monthly < 0 || annualRate < 0 || years <= 0 || years > 60) return null
    const monthlyRate = annualRate / 12
    const balance: number[] = []
    const contributed: number[] = []
    const xLabels: string[] = []
    let bal = principal
    for (let y = 0; y <= years; y++) {
      if (y > 0) {
        for (let m = 0; m < 12; m++) bal = bal * (1 + monthlyRate) + monthly
      }
      balance.push(Math.max(0, bal))
      contributed.push(principal + monthly * 12 * y)
      xLabels.push(`Y${y}`)
    }
    return {
      xLabels,
      lines: [
        { key: 'contributed', label: 'You put in', color: '#3b82f6', points: contributed, area: true },
        { key: 'balance', label: 'Nest egg', color: '#22c55e', points: balance, area: true },
      ],
      highlightBetween: { a: 'contributed', b: 'balance', label: 'Investment growth' },
      formatY: (n) => fmtUSDValue(n),
    }
  },
})

// ── 单利计算器 ──
export const SimpleInterestCalculatorClient = makeCalculatorClient({
  slug: 'simple-interest-calculator',
  inputs: [
    { key: 'principal', label: 'Principal', suffix: '$', default: '10000', slider: { min: 100, max: 1000000, step: 100 } },
    { key: 'rate', label: 'Annual rate', suffix: '%', default: '5', slider: { min: 0, max: 20, step: 0.25 } },
    { key: 'years', label: 'Years', default: '3', slider: { min: 1, max: 30, step: 1 } },
  ],
  outputs: [
    { key: 'interest', label: 'Interest earned', highlight: true },
    { key: 'total', label: 'Total amount' },
  ],
  compute: (v, locale) => {
    const p = toNum(v.principal)
    const r = toNum(v.rate) / 100
    const t = toNum(v.years)
    if (p < 0 || r < 0 || t < 0) {
      return {
        interest: `⚠️ ${tui('simple-interest-calculator', locale, 'errNonNegative', 'Values cannot be negative')}`,
        total: '—',
      }
    }
    const interest = p * r * t
    return {
      interest: fmtUSDValue(interest),
      total: fmtUSDValue(p + interest),
    }
  },
  chart: { kind: 'compare', title: 'Principal + interest' },
  compare: (v) => {
    const p = toNum(v.principal)
    const interest = p * (toNum(v.rate) / 100) * toNum(v.years)
    if (!(p >= 0) || !(interest >= 0)) return null
    return {
      rows: [
        { label: 'Total amount', segments: [
          { label: 'Principal', value: p, color: '#3b82f6' },
          { label: 'Interest', value: interest, color: '#22c55e' },
        ] },
      ],
      formatTotal: (n) => fmtUSDValue(n),
    }
  },
  note: '💵 Simple interest: I = P × r × t. Unlike compound interest, you earn nothing on accumulated interest.',
})

// ── 单价比较器 ──
// 量纲家族:重量/体积/件数互不可比;只有同家族才折算到基准单位(g / ml / ct)比单价
const UNIT_FAMILY: Record<string, string> = {
  mg: 'weight', g: 'weight', kg: 'weight', oz: 'weight', lb: 'weight',
  ml: 'volume', l: 'volume',
  ct: 'count',
}
const UNIT_TO_BASE: Record<string, number> = {
  mg: 0.001, g: 1, kg: 1000, oz: 28.349523125, lb: 453.59237,
  ml: 1, l: 1000,
  ct: 1,
}
export const UnitPriceCalculatorClient = makeCalculatorClient({
  slug: 'unit-price-calculator',
  inputs: [
    { key: 'price1', label: 'Price 1', suffix: '$', default: '12.99', slider: { min: 0.5, max: 200, step: 0.5 } },
    { key: 'size1', label: 'Size 1', default: '500', slider: { min: 1, max: 5000, step: 5 } },
    { key: 'unit1', label: 'Unit 1', default: 'g', options: [
      // E2 语义排序:重量按量级 → 体积按量级 → 件数收尾,不再大小混排
      { label: 'grams (g)', value: 'g' }, { label: 'milligrams (mg)', value: 'mg' },
      { label: 'kilograms (kg)', value: 'kg' }, { label: 'ounces (oz)', value: 'oz' },
      { label: 'pounds (lb)', value: 'lb' }, { label: 'ml', value: 'ml' },
      { label: 'liters (l)', value: 'l' }, { label: 'count (items)', value: 'ct' },
    ]},
    { key: 'price2', label: 'Price 2', suffix: '$', default: '19.99', slider: { min: 0.5, max: 200, step: 0.5 } },
    { key: 'size2', label: 'Size 2', default: '750', slider: { min: 1, max: 5000, step: 5 } },
    { key: 'unit2', label: 'Unit 2', default: 'g', options: [
      // E2 语义排序:重量按量级 → 体积按量级 → 件数收尾,不再大小混排
      { label: 'grams (g)', value: 'g' }, { label: 'milligrams (mg)', value: 'mg' },
      { label: 'kilograms (kg)', value: 'kg' }, { label: 'ounces (oz)', value: 'oz' },
      { label: 'pounds (lb)', value: 'lb' }, { label: 'ml', value: 'ml' },
      { label: 'liters (l)', value: 'l' }, { label: 'count (items)', value: 'ct' },
    ]},
  ],
  outputs: [
    { key: 'unit1price', label: 'Option 1 unit price' },
    { key: 'unit2price', label: 'Option 2 unit price' },
    { key: 'winner', label: 'Better deal', highlight: true },
  ],
  compute: (v, locale) => {
    const p1 = toNum(v.price1), s1 = toNum(v.size1)
    const p2 = toNum(v.price2), s2 = toNum(v.size2)
    if (p1 < 0 || p2 < 0) {
      return { unit1price: `⚠️ ${tui('unit-price-calculator', locale, 'errNonNegative', 'Prices cannot be negative')}`, unit2price: '—', winner: '—' }
    }
    if (s1 <= 0 || s2 <= 0) return { unit1price: '—', unit2price: '—', winner: '—' }
    const u1 = p1 / s1, u2 = p2 / s2
    // 同家族归一后比较(如 g vs kg 折到每克);跨家族(g vs ml/ct)只展示单价,不判定优劣
    const fam1 = UNIT_FAMILY[v.unit1] ?? v.unit1
    const fam2 = UNIT_FAMILY[v.unit2] ?? v.unit2
    let winner = '—'
    if (fam1 === fam2) {
      const n1 = u1 / (UNIT_TO_BASE[v.unit1] ?? 1)
      const n2 = u2 / (UNIT_TO_BASE[v.unit2] ?? 1)
      winner = n1 <= n2 ? 'Option 1' : 'Option 2'
    } else {
      // 跨家族不再留裸 '—'(D2):说明为何无判定(克和毫升没有公平比较)
      winner = tui('unit-price-calculator', locale, 'winnerCrossFamily', 'Different units — cannot compare')
    }
    // 单价不足 $0.05 时保留 4 位小数:两位都显示 "$0.03 / g" 时比较结论不可读
    const fmtUnitPrice = (u: number) => (u > 0 && u < 0.05 ? `$${fmtNum(u, 4)}` : fmtUSDValue(u))
    return {
      unit1price: `${fmtUnitPrice(u1)} / ${v.unit1}`,
      unit2price: `${fmtUnitPrice(u2)} / ${v.unit2}`,
      winner,
    }
  },
  chart: { kind: 'compare', title: 'Unit price showdown' },
  compare: (v) => {
    const p1 = toNum(v.price1), s1 = toNum(v.size1), p2 = toNum(v.price2), s2 = toNum(v.size2)
    if (!(p1 >= 0) || !(s1 > 0) || !(p2 >= 0) || !(s2 > 0)) return null
    // 同量纲家族才可比(与 compute 判定一致);折算到基准单位后比单价
    const fam1 = UNIT_FAMILY[v.unit1] ?? v.unit1
    const fam2 = UNIT_FAMILY[v.unit2] ?? v.unit2
    if (fam1 !== fam2) return null
    const u1 = (p1 / s1) / (UNIT_TO_BASE[v.unit1] ?? 1)
    const u2 = (p2 / s2) / (UNIT_TO_BASE[v.unit2] ?? 1)
    const baseUnit = fam1 === 'weight' ? 'g' : fam1 === 'volume' ? 'ml' : 'ct'
    return {
      rows: [
        { label: 'Option 1', segments: [{ label: 'Per ' + baseUnit, value: u1, color: u1 <= u2 ? '#22c55e' : '#3b82f6' }] },
        { label: 'Option 2', segments: [{ label: 'Per ' + baseUnit, value: u2, color: u2 < u1 ? '#22c55e' : '#3b82f6' }] },
      ],
      formatTotal: (n) => `$${n.toFixed(4)}`,
    }
  },
  note: '🛒 Compare real value across package sizes. The bigger box isn\'t always cheaper per unit.',
})
