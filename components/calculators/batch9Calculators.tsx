'use client'

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, fmtUSD, toNum, toNumStrict } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * 第九批:2025-08 新增工具(工厂配置驱动)
 * Roman / Pace / Protein / Electricity
 */

// ── 罗马数字转换 ──
// 双向转换不适合工厂的"多输入→多输出"形态?其实很适合:
// 输入 number 或 roman 其一,另一个字段留空,compute 检测哪边有值。
const ROMAN_PAIRS: [number, string][] = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
]

export const RomanNumeralConverterClient = makeCalculatorClient({
  slug: 'roman-numeral-converter',
  inputs: [
    { key: 'num', label: 'Number (1-3999)', default: '2024', slider: { min: 1, max: 3999, step: 1 } },
    { key: 'roman', label: 'Or Roman numeral', type: 'text', default: '', placeholder: 'MMXXIV' },
  ],
  outputs: [
    { key: 'result', label: 'Converted value', highlight: true },
    { key: 'breakdown', label: 'Breakdown' },
  ],
  compute: (v) => {
    const numRaw = v.num.trim()
    const romRaw = v.roman.trim().toUpperCase()
    // 两边都填 → 要求用户只填一边,避免歧义
    if (numRaw && romRaw) {
      return { result: '⚠️ Fill in only one field', breakdown: '—' }
    }
    // 数字 → 罗马
    if (numRaw) {
      const n = Number(numRaw)
      if (!Number.isInteger(n) || n < 1 || n > 3999) {
        return { result: '⚠️ Enter a whole number from 1 to 3999', breakdown: '—' }
      }
      let rest = n
      let roman = ''
      const parts: string[] = []
      for (const [val, sym] of ROMAN_PAIRS) {
        while (rest >= val) {
          roman += sym
          rest -= val
          parts.push(sym)
        }
      }
      return { result: roman, breakdown: parts.join(' + ') }
    }
    // 罗马 → 数字
    if (romRaw) {
      if (!/^[MDCLXVI]+$/.test(romRaw)) {
        return { result: '⚠️ Invalid Roman numeral (use I V X L C D M)', breakdown: '—' }
      }
      const values: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
      let total = 0
      for (let i = 0; i < romRaw.length; i++) {
        const cur = values[romRaw[i]]
        const next = i + 1 < romRaw.length ? values[romRaw[i + 1]] : 0
        total += cur < next ? -cur : cur
      }
      // 反向校验:规范形式必须能还原出相同字符串(拦截 IIII / VX 等非法组合)
      let check = total
      let canonical = ''
      for (const [val, sym] of ROMAN_PAIRS) {
        while (check >= val) {
          canonical += sym
          check -= val
        }
      }
      if (canonical !== romRaw || total < 1 || total > 3999) {
        return { result: `⚠️ Not a valid standard-form numeral${total >= 1 && total <= 3999 ? ` (did you mean ${canonical}?)` : ''}`, breakdown: '—' }
      }
      return { result: String(total), breakdown: `${romRaw} → ${total}` }
    }
    return { result: '—', breakdown: '—' }
  },
  note: '🏛️ Standard Roman numerals use subtraction pairs (IV=4, IX=9). The range is 1-3999 — classical notation has no zero and no way to write larger numbers.',
})

// ── 跑步配速计算器 ──
/** 'h:mm:ss' | 'mm:ss' | 'ss' → 总秒数;非法返回 NaN */
function parseDuration(s: string): number {
  const parts = s.trim().split(':').map(Number)
  if (parts.some((n) => !Number.isFinite(n))) return NaN
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2]
  if (parts.length === 2) return parts[0] * 60 + parts[1]
  if (parts.length === 1) return parts[0]
  return NaN
}

/** 秒 → 'h:mm:ss'(≥1h)或 'mm:ss' */
function formatDuration(totalSec: number): string {
  const sec = Math.round(totalSec)
  const h = Math.floor(sec / 3600)
  const m = Math.floor((sec % 3600) / 60)
  const s = sec % 60
  const pad = (x: number) => String(x).padStart(2, '0')
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`
}

const RACE_DISTANCES_KM: [string, number][] = [
  ['5K', 5],
  ['10K', 10],
  ['Half marathon', 21.0975],
  ['Marathon', 42.195],
]

export const PaceCalculatorClient = makeCalculatorClient({
  slug: 'pace-calculator',
  inputs: [
    { key: 'distance', label: 'Distance', suffix: 'km', default: '10', slider: { min: 0.5, max: 50, step: 0.5 } },
    { key: 'time', label: 'Finish time', default: '50:00', placeholder: 'h:mm:ss or mm:ss' },
    { key: 'unit', label: 'Pace unit', default: 'km', options: [
      { label: 'Per kilometer', value: 'km' },
      { label: 'Per mile', value: 'mile' },
    ]},
  ],
  outputs: [
    { key: 'pace', label: 'Pace', highlight: true },
    { key: 'speed', label: 'Speed' },
    { key: 'races', label: 'Equivalent race predictions' },
  ],
  compute: (v) => {
    const distance = toNumStrict(v.distance)
    const timeSec = parseDuration(v.time)
    // 空输入保持 '—' 占位(出厂默认观感);非空但非法(负数/乱格式)时把提示放到
    // highlight 键,走工厂 ⚠️ 红卡——原先引导语挂在 races 普通结果键上,
    // 会被当作结果导出到 Copy Summary/CSV,且红卡永不触发(brief2 #1)
    if (!v.distance.trim() || !v.time.trim()) {
      return { pace: '—', speed: '—', races: '—' }
    }
    if (isNaN(distance) || distance <= 0 || isNaN(timeSec) || timeSec <= 0) {
      return { pace: '⚠️ Enter a positive distance and a time like 45:30', speed: '—', races: '—' }
    }
    const perUnitKm = v.unit === 'mile' ? 1.609344 : 1
    const paceSec = (timeSec / distance) * perUnitKm
    const speedKmh = (distance / timeSec) * 3600
    const speed = v.unit === 'mile'
      ? `${fmtNum(speedKmh / 1.609344, 2)} mph`
      : `${fmtNum(speedKmh, 2)} km/h`
    // 等效成绩预测(同配速外推;不做 Riegel 减速修正,保持可解释性)。
    // 用 ' · ' 分隔:ResultCard 无 whitespace-pre,'\n' 会被折叠成空格挤成一行
    const lines = RACE_DISTANCES_KM.map(([name, km]) => {
      const t = (timeSec / distance) * km
      return `${name}: ${formatDuration(t)}`
    })
    return {
      pace: `${formatDuration(paceSec)} /${v.unit}`,
      speed,
      races: lines.join(' · '),
    }
  },
  chart: { kind: 'series', title: 'Finish times by distance' },
  series: (v) => {
    const distance = Number(v.distance)
    const parts = v.time.trim().split(':').map(Number)
    if (parts.some((n) => !Number.isFinite(n))) return null
    const timeSec = parts.length === 3 ? parts[0] * 3600 + parts[1] * 60 + parts[2] : parts.length === 2 ? parts[0] * 60 + parts[1] : parts[0]
    if (!(distance > 0) || !(timeSec > 0)) return null
    const races: [string, number][] = [['5K', 5], ['10K', 10], ['Half', 21.0975], ['Marathon', 42.195]]
    return {
      xLabels: races.map(([n]) => n),
      lines: [{ key: 'finish', label: 'Predicted finish time', color: '#3b82f6', points: races.map(([, km]) => (timeSec / distance) * km / 60), area: true }],
      formatY: (n) => formatDuration(n * 60),
    }
  },
  note: '🏃 Race predictions assume you hold the same pace — most runners slow slightly over longer distances, so treat longer predictions as optimistic targets.',
})

// ── 蛋白质摄入计算器 ──
export const ProteinIntakeCalculatorClient = makeCalculatorClient({
  slug: 'protein-intake-calculator',
  inputs: [
    { key: 'weight', label: 'Weight', suffix: 'kg', default: '70' },
    { key: 'activity', label: 'Activity level', default: 'moderate', options: [
      { label: 'Sedentary (little exercise)', value: 'sedentary' },
      { label: 'Lightly active', value: 'light' },
      { label: 'Moderately active', value: 'moderate' },
      { label: 'Very active / strength training', value: 'athlete' },
    ]},
    { key: 'goal', label: 'Goal', default: 'maintain', options: [
      { label: 'Maintain weight', value: 'maintain' },
      { label: 'Build muscle', value: 'gain' },
      { label: 'Lose fat', value: 'lose' },
    ]},
  ],
  outputs: [
    { key: 'range', label: 'Daily protein target', highlight: true },
    { key: 'perMeal', label: 'Per meal (4 meals)' },
    { key: 'basis', label: 'Basis' },
  ],
  compute: (v) => {
    const weight = toNumStrict(v.weight)
    if (isNaN(weight) || weight <= 0 || weight > 500) {
      return { range: '⚠️ Enter a valid weight in kg', perMeal: '—', basis: '—' }
    }
    // g/kg 区间:sports-nutrition 共识(ACSM/ISSN):久坐 0.8,轻 1.0-1.2,
    // 中等 1.2-1.6,力量/耐力训练 1.6-2.2;增肌取上限侧,减脂保氮取 1.8-2.7(高蛋白饮食)
    const base: Record<string, [number, number]> = {
      sedentary: [0.8, 1.2],
      light: [1.0, 1.4],
      moderate: [1.2, 1.6],
      athlete: [1.6, 2.2],
    }
    let [lo, hi] = base[v.activity] ?? base['moderate']
    if (v.goal === 'gain') hi = Math.max(hi, 2.0)
    if (v.goal === 'lose') {
      lo = Math.max(lo, 1.6)
      hi = Math.min(Math.max(hi, 2.2), 2.7)
    }
    const loG = Math.round(weight * lo)
    const hiG = Math.round(weight * hi)
    return {
      range: `${loG}–${hiG} g per day`,
      perMeal: `${Math.round(loG / 4)}–${Math.round(hiG / 4)} g`,
      basis: `${fmtNum(lo, 1)}–${fmtNum(hi, 1)} g × ${Math.round(weight)} kg (${v.activity}/${v.goal})`,
    }
  },
  note: '🥩 Ranges follow ISSN & ACSM position stands: 0.8 g/kg is the RDA floor for sedentary adults; training and caloric deficits raise needs. Spread intake across 3-5 meals.',
  chart: {
    kind: 'gauge',
    title: 'Your Range on the g/kg Scale',
    valueKey: 'range',
    min: 0,
    // 量程 = 3 g/kg × 体重(覆盖减脂上限 2.7 g/kg 仍有余量)
    max: (v) => Math.max(60, Math.round(toNum(v.weight) * 3)),
    // 区间阈值随输入(与 compute 同口径的 g/kg 区间表);个人区间带绿色
    zones: (v) => {
      const weight = toNum(v.weight)
      if (!(weight > 0) || weight > 500) return []
      const base: Record<string, [number, number]> = {
        sedentary: [0.8, 1.2],
        light: [1.0, 1.4],
        moderate: [1.2, 1.6],
        athlete: [1.6, 2.2],
      }
      let [lo, hi] = base[v.activity] ?? base['moderate']
      if (v.goal === 'gain') hi = Math.max(hi, 2.0)
      if (v.goal === 'lose') {
        lo = Math.max(lo, 1.6)
        hi = Math.min(Math.max(hi, 2.2), 2.7)
      }
      const cap = Math.max(60, Math.round(weight * 3))
      return [
        { upTo: Math.round(weight * lo), color: '#3b82f6', label: 'Below your range' },
        { upTo: Math.round(weight * hi), color: '#22c55e', label: 'Your target range' },
        { upTo: cap, color: '#eab308', label: 'Above range' },
      ]
    },
    formatValue: (n) => `${Math.round(n)} g`,
  },
})

// ── 电费计算器 ──
export const ElectricityCostCalculatorClient = makeCalculatorClient({
  slug: 'electricity-cost-calculator',
  urlState: true,
  inputs: [
    { key: 'watts', label: 'Power rating', suffix: 'W', default: '1500', slider: { min: 10, max: 5000, step: 10 } },
    { key: 'hours', label: 'Hours used per day', suffix: 'h', default: '4', slider: { min: 0, max: 24, step: 0.5 } },
    { key: 'rate', label: 'Electricity rate', suffix: '$/kWh', default: '0.15', slider: { min: 0, max: 1, step: 0.01 } },
  ],
  outputs: [
    { key: 'daily', label: 'Cost per day', highlight: true },
    { key: 'monthly', label: 'Cost per month' },
    { key: 'yearly', label: 'Cost per year' },
    { key: 'kwh', label: 'Energy per day' },
  ],
  compute: (v) => {
    const watts = toNum(v.watts)
    const hours = toNum(v.hours)
    const rate = toNum(v.rate)
    if (watts < 0 || hours < 0 || rate < 0 || hours > 24) {
      return { daily: `⚠️ ${tui('electricity-cost-calculator', 'en', 'errInvalid', 'Values must be non-negative and hours ≤ 24')}`, monthly: '—', yearly: '—', kwh: '—' }
    }
    const kwhDay = (watts * hours) / 1000
    const daily = kwhDay * rate
    return {
      daily: `$${fmtNum(daily, 2)}`,
      monthly: `$${fmtNum(daily * 30.44, 2)}`,
      yearly: `$${fmtNum(daily * 365, 2)}`,
      kwh: `${fmtNum(kwhDay, 2)} kWh`,
    }
  },
  chart: { kind: 'compare', title: 'Cost ladder' },
  compare: (v) => {
    const daily = (toNum(v.watts) * toNum(v.hours)) / 1000 * toNum(v.rate)
    if (!(daily >= 0)) return null
    return {
      rows: [
        { label: 'Per day', segments: [{ label: 'Cost', value: daily, color: '#3b82f6' }] },
        { label: 'Per month', segments: [{ label: 'Cost', value: daily * 30.44, color: '#3b82f6' }] },
        { label: 'Per year', segments: [{ label: 'Cost', value: daily * 365, color: '#22c55e' }] },
      ],
      formatTotal: (n) => `$${fmtNum(n, 2)}`,
    }
  },
  note: '⚡ Find the wattage on the appliance label or its spec sheet. Heaters and dryers (1500-5000 W) dwarf laptops (≈50 W); the yearly line is where surprises live.',
})

// ── 养车总成本计算器 ──
export const CarCostCalculatorClient = makeCalculatorClient({
  slug: 'car-cost-calculator',
  urlState: true,
  inputs: [
    { key: 'carPrice', label: 'Car purchase price', suffix: '$', default: '25000', slider: { min: 1000, max: 150000, step: 1000 } },
    { key: 'ownYears', label: 'Years of ownership', suffix: 'yrs', default: '5', slider: { min: 1, max: 20, step: 1 } },
    { key: 'kmPerYear', label: 'Distance driven per year', suffix: 'km', default: '15000', slider: { min: 1000, max: 50000, step: 1000 } },
    { key: 'fuelPrice', label: 'Fuel price', suffix: '$/L', default: '1.6', slider: { min: 0.5, max: 3, step: 0.05 } },
    { key: 'consumption', label: 'Consumption', suffix: 'L/100km', default: '7.5', slider: { min: 3, max: 25, step: 0.5 } },
    { key: 'insurance', label: 'Insurance per year', suffix: '$', default: '1200', slider: { min: 0, max: 10000, step: 100 } },
    { key: 'maintenance', label: 'Maintenance + tires per year', suffix: '$', default: '800', slider: { min: 0, max: 10000, step: 100 } },
    { key: 'resale', label: 'Estimated resale value after', suffix: '$', default: '12000', slider: { min: 0, max: 100000, step: 500 } },
  ],
  outputs: [
    { key: 'monthly', label: 'True monthly cost', highlight: true, sublabel: 'All costs ÷ months' },
    { key: 'yearly', label: 'Cost per year' },
    { key: 'perKm', label: 'Cost per km' },
    { key: 'depreciation', label: 'Depreciation total' },
    { key: 'fuel', label: 'Fuel total' },
    { key: 'other', label: 'Insurance + maintenance' },
  ],
  compute: (v) => {
    const price = toNumStrict(v.carPrice)
    const years = toNum(v.ownYears)
    const kmY = toNum(v.kmPerYear)
    const fuelP = toNum(v.fuelPrice)
    const cons = toNum(v.consumption)
    const ins = toNum(v.insurance)
    const maint = toNum(v.maintenance)
    const resale = toNum(v.resale)
    if (isNaN(price) || price <= 0 || years <= 0 || kmY < 0 || fuelP < 0 || cons < 0 || ins < 0 || maint < 0 || resale < 0 || resale > price) {
      return {
        monthly: `⚠️ ${tui('car-cost-calculator', 'en', 'errInvalid', 'Enter valid values (resale must not exceed the purchase price)')}`,
        yearly: '—', perKm: '—', depreciation: '—', fuel: '—', other: '—',
      }
    }
    const dep = price - resale
    const fuelTotal = (kmY * cons) / 100 * fuelP * years
    const otherTotal = (ins + maint) * years
    const total = dep + fuelTotal + otherTotal
    const months = years * 12
    const km = kmY * years
    return {
      monthly: fmtUSD(total / months),
      yearly: fmtUSD(total / years),
      perKm: km > 0 ? `$${fmtNum(total / km, 3)}` : '—',
      depreciation: fmtUSD(dep),
      fuel: fmtUSD(fuelTotal),
      other: fmtUSD(otherTotal),
    }
  },
  chart: {
    title: 'Where the money goes',
    slices: [
      { valueKey: 'depreciation', label: 'Depreciation', color: '#3b82f6' },
      { valueKey: 'fuel', label: 'Fuel', color: '#f59e0b' },
      { valueKey: 'other', label: 'Insurance + maintenance', color: '#a855f7' },
    ],
    centerLabel: 'Total',
  },
  note: '🚗 Depreciation (purchase − resale) is usually the single biggest cost — new cars lose 20-30% in year one. Financing interest, parking, tolls and registration are not included; add them to insurance if significant.',
})
