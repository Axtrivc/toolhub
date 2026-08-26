'use client'

import { makeUnitConverter } from './makeUnitConverter'
import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, toNum } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n'
import { TemperatureConverterClient } from './TemperatureConverterClient'
import { GPACalculatorClient } from './GPACalculatorClient'
import { DateDifferenceClient } from './DateDifferenceClient'

// ════════════════════════════════════════════
// 4 个线性单位转换器(用通用转换工厂,每个仅几行配置)
// ════════════════════════════════════════════

export const WeightConverterClient = makeUnitConverter({
  slug: 'weight-converter',
  defaultValue: '1',
  defaultFrom: 'kg',
  defaultTo: 'lb',
  digits: 4,
  units: {
    // metric 常用质量/重量
    mg: { label: 'Milligrams (mg)', factor: 0.000001 },
    cg: { label: 'Centigrams (cg)', factor: 0.00001 },
    g: { label: 'Grams (g)', factor: 0.001 },
    dag: { label: 'Decagrams (dag)', factor: 0.01 },
    kg: { label: 'Kilograms (kg)', factor: 1 },
    t: { label: 'Metric tons (t)', factor: 1000 },
    // imperial 重量
    oz: { label: 'Ounces (oz)', factor: 0.0283495 },
    lb: { label: 'Pounds (lb)', factor: 0.453592 },
    st: { label: 'Stones (st)', factor: 6.35029 },
    // 精密/专用质量(mass-converter 合并过来)
    carat: { label: 'Carats (ct)', factor: 0.0002 },
    grain: { label: 'Grains (gr)', factor: 0.00006479891 },
  },
  note: '⚖️ Covers both everyday weight (kg, lb, oz, stones) and precise mass units (carats for gemstones, grains for ammunition/medicine). Mass and weight share this one converter.',
})

export const SpeedConverterClient = makeUnitConverter({
  slug: 'speed-converter',
  defaultValue: '100',
  defaultFrom: 'kmh',
  defaultTo: 'mph',
  digits: 2,
  units: {
    ms: { label: 'Meters/sec (m/s)', factor: 2.23694 },
    kmh: { label: 'Kilometers/hour (km/h)', factor: 0.621371 },
    mph: { label: 'Miles/hour (mph)', factor: 1 },
    knot: { label: 'Knots (kn)', factor: 1.15078 },
    fps: { label: 'Feet/sec (ft/s)', factor: 0.681818 },
  },
  note: '🏃 Supports m/s, km/h, mph, knots, and ft/s. Common use: converting speed limits between countries.',
})

export const AreaConverterClient = makeUnitConverter({
  slug: 'area-converter',
  defaultValue: '1',
  defaultFrom: 'sqm',
  defaultTo: 'sqft',
  digits: 4,
  units: {
    sqmm: { label: 'Square mm (mm²)', factor: 0.001 * 0.001 },
    sqcm: { label: 'Square cm (cm²)', factor: 0.01 * 0.01 },
    sqm: { label: 'Square meters (m²)', factor: 1 },
    hectare: { label: 'Hectares (ha)', factor: 10000 },
    sqkm: { label: 'Square km (km²)', factor: 1000 * 1000 },
    sqin: { label: 'Square inches (in²)', factor: 0.00064516 },
    sqft: { label: 'Square feet (ft²)', factor: 0.092903 },
    sqyd: { label: 'Square yards (yd²)', factor: 0.836127 },
    acre: { label: 'Acres (ac)', factor: 4046.86 },
  },
  note: '📐 For real estate, land, and construction. Includes acres and hectares.',
})

export const VolumeConverterClient = makeUnitConverter({
  slug: 'volume-converter',
  defaultValue: '1',
  defaultFrom: 'l',
  defaultTo: 'gal',
  digits: 4,
  units: {
    ml: { label: 'Milliliters (ml)', factor: 0.001 },
    l: { label: 'Liters (L)', factor: 1 },
    cbm: { label: 'Cubic meters (m³)', factor: 1000 },
    tsp: { label: 'Teaspoons (US)', factor: 0.00492892 },
    tbsp: { label: 'Tablespoons (US)', factor: 0.0147868 },
    floz: { label: 'Fluid ounces (US)', factor: 0.0295735 },
    cup: { label: 'Cups (US)', factor: 0.236588 },
    pt: { label: 'Pints (US)', factor: 0.473176 },
    qt: { label: 'Quarts (US)', factor: 0.946353 },
    gal: { label: 'Gallons (US)', factor: 3.78541 },
  },
  note: '🥤 Includes metric (ml, L, m³) and US cooking units (tsp, tbsp, cup, gallon).',
})

// ════════════════════════════════════════════
// 1 个配置驱动计算器:Average
// ════════════════════════════════════════════

export const AverageCalculatorClient = makeCalculatorClient({
  slug: 'average-calculator',
  inputs: [
    {
      key: 'numbers',
      label: 'Numbers (separate with commas, spaces, or new lines)',
      default: '12, 15, 18, 22, 9, 14',
      placeholder: '12, 15, 18, 22',
      type: 'text',
    },
  ],
  outputs: [
    { key: 'count', label: 'Count' },
    { key: 'sum', label: 'Sum' },
    { key: 'mean', label: 'Average (mean)', highlight: true },
    { key: 'median', label: 'Median' },
    { key: 'mode', label: 'Mode' },
    { key: 'min', label: 'Minimum' },
    { key: 'max', label: 'Maximum' },
    { key: 'range', label: 'Range' },
    { key: 'stdSample', label: 'Std deviation (sample)', sublabel: 'n − 1 denominator' },
    { key: 'stdPop', label: 'Std deviation (population)', sublabel: 'n denominator' },
    { key: 'ignored', label: 'Non-numeric entries' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('average-calculator', locale, key, fb)
    const tokens = (v.numbers || '')
      .split(/[\s,]+/)
      .map((s) => s.trim())
      .filter(Boolean)
    const nums = tokens.map(Number).filter((n) => isFinite(n))
    // 非数字 token 不再静默丢弃:显式提示忽略了几个,避免 "12, abc, 15" 被当作只有 2 个数
    const ignoredCount = tokens.length - nums.length
    const ignored =
      ignoredCount > 0
        ? `⚠️ ${T('ignoredN', 'Ignored {n} non-numeric values').replace('{n}', String(ignoredCount))}`
        : '0'

    if (nums.length === 0) {
      return {
        count: '0', sum: '—', mean: '—', median: '—', mode: '—',
        min: '—', max: '—', range: '—', stdSample: '—', stdPop: '—',
        ignored,
      }
    }

    const count = nums.length
    const sum = nums.reduce((a, b) => a + b, 0)
    const mean = sum / count
    const sorted = [...nums].sort((a, b) => a - b)
    const median =
      count % 2 === 0
        ? (sorted[count / 2 - 1] + sorted[count / 2]) / 2
        : sorted[Math.floor(count / 2)]
    const min = sorted[0]
    const max = sorted[count - 1]
    const range = max - min

    // 众数:出现最频繁的值;并列时列出最小的前 3 个(更多则加省略号);全都不重复则无众数
    const freq = new Map<number, number>()
    for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1)
    let maxFreq = 0
    for (const c of freq.values()) maxFreq = Math.max(maxFreq, c)
    let mode: string
    if (maxFreq <= 1) {
      mode = T('noMode', 'None (all values unique)')
    } else {
      const modes = Array.from(freq.entries())
        .filter(([, c]) => c === maxFreq)
        .map(([x]) => x)
        .sort((a, b) => a - b)
      mode =
        modes.slice(0, 3).map((x) => fmtNum(x)).join(', ') +
        (modes.length > 3 ? ', …' : '')
    }

    // 标准差两种口径:样本(n−1,无偏)与总体(n);单值时样本口径无定义
    const sqDiff = nums.reduce((a, x) => a + (x - mean) ** 2, 0)
    const stdSample = count > 1 ? Math.sqrt(sqDiff / (count - 1)) : NaN
    const stdPop = Math.sqrt(sqDiff / count)

    return {
      count: String(count),
      sum: fmtNum(sum),
      mean: fmtNum(mean),
      median: fmtNum(median),
      mode,
      min: fmtNum(min),
      max: fmtNum(max),
      range: fmtNum(range),
      stdSample: isFinite(stdSample) ? fmtNum(stdSample, 4) : '—',
      stdPop: fmtNum(stdPop, 4),
      ignored,
    }
  },
  chart: { kind: 'series', title: 'Your numbers' },
  series: (v) => {
    const nums = (v.numbers || '').split(/[\s,]+/).map((t) => t.trim()).filter(Boolean)
      .map(Number).filter((n) => isFinite(n))
    if (nums.length < 2) return null
    const mean = nums.reduce((a, b) => a + b, 0) / nums.length
    const step = Math.max(1, Math.ceil(nums.length / 12))
    const xLabels = nums.map((_, i) => (i % step === 0 || i === nums.length - 1 ? `#${i + 1}` : ''))
    return {
      xLabels,
      lines: [
        { key: 'value', label: 'Value', color: '#3b82f6', points: nums },
        { key: 'mean', label: 'Mean', color: '#f59e0b', points: nums.map(() => mean), dashed: true },
      ],
    }
  },
  note: '📊 Enter any list of numbers. Supports commas, spaces, or line breaks as separators.',
})

// ════════════════════════════════════════════
// 3 个独立组件(不适合通用引擎)
// ════════════════════════════════════════════
export { TemperatureConverterClient, GPACalculatorClient, DateDifferenceClient }
