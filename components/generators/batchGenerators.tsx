'use client'

import { useState } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { CopyButton } from '../CopyButton'
import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
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

  const generate = () => {
    const n = Math.min(Math.max(1, Number(count) || 1), 100)
    const out: string[] = []
    for (let i = 0; i < n; i++) out.push(generateUUID())
    setUuids(out)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label htmlFor="count" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('howMany', 'How many')}</label>
          <input id="count" type="number" min="1" max="100" value={count} onChange={(e) => setCount(e.target.value)} className="w-28 rounded-lg border border-slate-300 p-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
        </div>
        <button onClick={generate} className="btn btn-primary">{L('generate', '🎲 Generate UUIDs')}</button>
      </div>
      {uuids.length > 0 && (
        <div className="space-y-2">
          {uuids.map((u, i) => (
            <div key={i} className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white p-3">
              <code className="font-mono text-sm text-slate-900 break-all">{u}</code>
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
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  // 降级方案
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

// ── Lorem Ipsum 生成器 ──
const LOREM_WORDS = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum'.split(' ')

export function LoremIpsumGeneratorClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('lorem-ipsum-generator', locale, key, fb)

  const [paragraphs, setParagraphs] = useState('3')
  const [output, setOutput] = useState('')

  const generate = () => {
    const n = Math.min(Math.max(1, Number(paragraphs) || 1), 20)
    const out: string[] = []
    for (let p = 0; p < n; p++) {
      const sentences = 4 + Math.floor(Math.random() * 4)
      const parts: string[] = []
      for (let s = 0; s < sentences; s++) {
        const words = 8 + Math.floor(Math.random() * 12)
        const ws: string[] = []
        for (let w = 0; w < words; w++) ws.push(LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)])
        ws[0] = ws[0][0].toUpperCase() + ws[0].slice(1)
        parts.push(ws.join(' ') + '.')
      }
      out.push(parts.join(' '))
    }
    setOutput(out.join('\n\n'))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label htmlFor="para" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('paragraphs', 'Paragraphs')}</label>
          <input id="para" type="number" min="1" max="20" value={paragraphs} onChange={(e) => setParagraphs(e.target.value)} className="w-28 rounded-lg border border-slate-300 p-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
        </div>
        <button onClick={generate} className="btn btn-primary">{L('generate', '📝 Generate')}</button>
        {output && <CopyButton value={output} />}
      </div>
      {output && (
        <div className="rounded-lg border border-slate-200 bg-white p-4 whitespace-pre-line text-sm text-slate-700 leading-relaxed">
          {output}
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
  inputs: [{ key: 'r', label: 'Radius', suffix: 'r', default: '5' }],
  outputs: [
    { key: 'area', label: 'Area', highlight: true },
    { key: 'circumference', label: 'Circumference' },
    { key: 'diameter', label: 'Diameter' },
  ],
  compute: (v) => {
    const r = toNum(v.r)
    return {
      area: `${fmtNum(Math.PI * r * r, 4)} (π r²)`,
      circumference: `${fmtNum(2 * Math.PI * r, 4)} (2π r)`,
      diameter: `${fmtNum(2 * r, 4)}`,
    }
  },
  note: '⭕ Area = π r². Circumference = 2 π r. Diameter = 2 r.',
})

// ── 几何计算器(三角形 - 勾股定理)──
export const TriangleCalculatorClient = makeCalculatorClient({
  slug: 'triangle-calculator',
  inputs: [
    { key: 'a', label: 'Side a', default: '3' },
    { key: 'b', label: 'Side b', default: '4' },
  ],
  outputs: [
    { key: 'c', label: 'Hypotenuse (c)', highlight: true },
    { key: 'area', label: 'Area' },
    { key: 'perimeter', label: 'Perimeter' },
  ],
  compute: (v) => {
    const a = toNum(v.a)
    const b = toNum(v.b)
    const c = Math.sqrt(a * a + b * b)
    return {
      c: `${fmtNum(c, 4)} (√(a² + b²))`,
      area: `${fmtNum((a * b) / 2, 4)}`,
      perimeter: `${fmtNum(a + b + c, 4)}`,
    }
  },
  note: '📐 Pythagorean theorem: a² + b² = c². For right triangles only.',
})

// ── 矩形计算器 ──
export const RectangleCalculatorClient = makeCalculatorClient({
  slug: 'rectangle-calculator',
  inputs: [
    { key: 'w', label: 'Width', default: '8' },
    { key: 'h', label: 'Height', default: '5' },
  ],
  outputs: [
    { key: 'area', label: 'Area', highlight: true },
    { key: 'perimeter', label: 'Perimeter' },
    { key: 'diagonal', label: 'Diagonal' },
  ],
  compute: (v) => {
    const w = toNum(v.w)
    const h = toNum(v.h)
    return {
      area: `${fmtNum(w * h, 4)} (w × h)`,
      perimeter: `${fmtNum(2 * (w + h), 4)} (2(w + h))`,
      diagonal: `${fmtNum(Math.sqrt(w * w + h * h), 4)} (√(w² + h²))`,
    }
  },
  note: '▭ Area = width × height. Diagonal uses the Pythagorean theorem.',
})

// ── 标准差计算器 ──
export const StandardDeviationCalculatorClient = makeCalculatorClient({
  slug: 'standard-deviation-calculator',
  inputs: [{ key: 'numbers', label: 'Numbers (comma-separated)', default: '4, 8, 15, 16, 23, 42' }],
  outputs: [
    { key: 'mean', label: 'Mean' },
    { key: 'stddev', label: 'Standard deviation', highlight: true },
    { key: 'variance', label: 'Variance' },
    { key: 'count', label: 'Count' },
  ],
  compute: (v) => {
    const nums = (v.numbers || '').split(/[\s,]+/).filter(Boolean).map(Number).filter((n) => isFinite(n))
    if (nums.length === 0) return { mean: '—', stddev: '—', variance: '—', count: '0' }
    const n = nums.length
    const mean = nums.reduce((a, b) => a + b, 0) / n
    const variance = nums.reduce((a, b) => a + (b - mean) ** 2, 0) / n // 总体方差
    const stddev = Math.sqrt(variance)
    return {
      mean: fmtNum(mean, 4),
      stddev: fmtNum(stddev, 4),
      variance: fmtNum(variance, 4),
      count: String(n),
    }
  },
  note: '📊 Uses population standard deviation (÷N). For sample stddev, multiply by √(N/(N−1)).',
})

// ── 百分位数计算器 ──
export const PercentileCalculatorClient = makeCalculatorClient({
  slug: 'percentile-calculator',
  inputs: [
    { key: 'numbers', label: 'Numbers (comma-separated)', default: '15, 20, 35, 40, 50' },
    { key: 'p', label: 'Percentile', suffix: '%', default: '90' },
  ],
  outputs: [{ key: 'result', label: 'Percentile value', highlight: true }],
  compute: (v) => {
    const nums = (v.numbers || '').split(/[\s,]+/).filter(Boolean).map(Number).filter((n) => isFinite(n)).sort((a, b) => a - b)
    if (nums.length === 0) return { result: '—' }
    const p = Math.min(100, Math.max(0, toNum(v.p)))
    // 线性插值法
    const rank = (p / 100) * (nums.length - 1)
    const lo = Math.floor(rank)
    const hi = Math.ceil(rank)
    const result = lo === hi ? nums[lo] : nums[lo] + (rank - lo) * (nums[hi] - nums[lo])
    return { result: fmtNum(result, 4) }
  },
  note: '📈 90th percentile means 90% of values are below this number. Used in test scores and performance metrics.',
})

// ── 通货膨胀计算器 ──
export const InflationCalculatorClient = makeCalculatorClient({
  slug: 'inflation-calculator',
  inputs: [
    { key: 'amount', label: 'Amount', suffix: '$', default: '1000' },
    { key: 'rate', label: 'Annual inflation', suffix: '%', default: '3' },
    { key: 'years', label: 'Years', default: '10' },
  ],
  outputs: [
    { key: 'future', label: 'Equivalent cost in future', highlight: true },
    { key: 'lost', label: 'Purchasing power lost' },
  ],
  compute: (v) => {
    const amount = toNum(v.amount)
    const rate = toNum(v.rate) / 100
    const years = toNum(v.years)
    const future = amount * Math.pow(1 + rate, years)
    return {
      future: fmtUSDValue(future),
      lost: `${fmtNum(((future - amount) / future) * 100, 1)}%`,
    }
  },
  note: '💸 $1000 today at 3% inflation is worth less each year. In 10 years you\'d need $1,344 to buy what $1,000 buys now.',
})

function fmtUSDValue(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
}

// ── 退休计算器 ──
export const RetirementCalculatorClient = makeCalculatorClient({
  slug: 'retirement-calculator',
  inputs: [
    { key: 'current', label: 'Current savings', suffix: '$', default: '25000' },
    { key: 'monthly', label: 'Monthly contribution', suffix: '$', default: '500' },
    { key: 'rate', label: 'Annual return', suffix: '%', default: '7' },
    { key: 'years', label: 'Years to retirement', default: '30' },
  ],
  outputs: [
    { key: 'total', label: 'Retirement savings', highlight: true },
    { key: 'contributed', label: 'You contributed' },
    { key: 'growth', label: 'Investment growth' },
  ],
  compute: (v) => {
    const principal = toNum(v.current)
    const monthly = toNum(v.monthly)
    const rate = toNum(v.rate) / 100 / 12
    const months = toNum(v.years) * 12
    let future = principal
    if (rate === 0) future = principal + monthly * months
    else {
      future = principal * Math.pow(1 + rate, months)
      future += monthly * ((Math.pow(1 + rate, months) - 1) / rate)
    }
    const contributed = principal + monthly * months
    return {
      total: fmtUSDValue(future),
      contributed: fmtUSDValue(contributed),
      growth: fmtUSDValue(future - contributed),
    }
  },
  note: '👵 Combines compound growth on current savings with regular contributions. Start early — time matters more than amount.',
})

// ── 单利计算器 ──
export const SimpleInterestCalculatorClient = makeCalculatorClient({
  slug: 'simple-interest-calculator',
  inputs: [
    { key: 'principal', label: 'Principal', suffix: '$', default: '10000' },
    { key: 'rate', label: 'Annual rate', suffix: '%', default: '5' },
    { key: 'years', label: 'Years', default: '3' },
  ],
  outputs: [
    { key: 'interest', label: 'Interest earned', highlight: true },
    { key: 'total', label: 'Total amount' },
  ],
  compute: (v) => {
    const p = toNum(v.principal)
    const r = toNum(v.rate) / 100
    const t = toNum(v.years)
    const interest = p * r * t
    return {
      interest: fmtUSDValue(interest),
      total: fmtUSDValue(p + interest),
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
    { key: 'price1', label: 'Price 1', suffix: '$', default: '12.99' },
    { key: 'size1', label: 'Size 1', default: '500' },
    { key: 'unit1', label: 'Unit 1', default: 'g', options: [
      { label: 'grams (g)', value: 'g' }, { label: 'ml', value: 'ml' },
      { label: 'count (items)', value: 'ct' }, { label: 'kg', value: 'kg' },
    ]},
    { key: 'price2', label: 'Price 2', suffix: '$', default: '19.99' },
    { key: 'size2', label: 'Size 2', default: '750' },
    { key: 'unit2', label: 'Unit 2', default: 'g', options: [
      { label: 'grams (g)', value: 'g' }, { label: 'ml', value: 'ml' },
      { label: 'count (items)', value: 'ct' }, { label: 'kg', value: 'kg' },
    ]},
  ],
  outputs: [
    { key: 'unit1price', label: 'Option 1 unit price' },
    { key: 'unit2price', label: 'Option 2 unit price' },
    { key: 'winner', label: 'Better deal', highlight: true },
  ],
  compute: (v) => {
    const p1 = toNum(v.price1), s1 = toNum(v.size1)
    const p2 = toNum(v.price2), s2 = toNum(v.size2)
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
    }
    return {
      unit1price: `${fmtUSDValue(u1)} / ${v.unit1}`,
      unit2price: `${fmtUSDValue(u2)} / ${v.unit2}`,
      winner,
    }
  },
  note: '🛒 Compare real value across package sizes. The bigger box isn\'t always cheaper per unit.',
})
