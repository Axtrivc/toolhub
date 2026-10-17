'use client'

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, fmtUSD, toNum, toNumStrict } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n-accessors/calculators/batch27Calculators'
import { OvulationCalculatorL10n } from '@/lib/i18n/tools-l10n/ovulation-calculator'
import { PregnancyWeightGainCalculatorL10n } from '@/lib/i18n/tools-l10n/pregnancy-weight-gain-calculator'
import { DiaperCostCalculatorL10n } from '@/lib/i18n/tools-l10n/diaper-cost-calculator'
import { CatAgeCalculatorL10n } from '@/lib/i18n/tools-l10n/cat-age-calculator'
import { CatFoodCalculatorL10n } from '@/lib/i18n/tools-l10n/cat-food-calculator'
import { ZodiacSignCalculatorL10n } from '@/lib/i18n/tools-l10n/zodiac-sign-calculator'
import { ChineseZodiacCalculatorL10n } from '@/lib/i18n/tools-l10n/chinese-zodiac-calculator'

/**
 * 第二十七批(B7 家庭健康与宠物,2026-10)
 * Ovulation / Pregnancy weight gain / Diaper cost
 * Cat age / Cat food
 * Zodiac sign / Chinese zodiac(shoe-size 在 components/tools/batch27Tools.tsx)
 */

// ─────────────────────────────────────────────
// 共享工具:UTC 纯日历日期运算(与 pregnancy-due-date 同款,DST 安全)
// ─────────────────────────────────────────────
const MS_DAY = 86400000
const isoDate = (ms: number) => new Date(ms).toISOString().slice(0, 10)

// ─────────────────────────────────────────────
// Ovulation Calculator(排卵日与易孕窗口)
// ─────────────────────────────────────────────
export const OvulationCalculatorClient = makeCalculatorClient({
  slug: 'ovulation-calculator',
  l10n: OvulationCalculatorL10n,
  // 末次月经日期属健康敏感信息,不写入 URL(浏览器历史会留痕)
  sample: { lmp: '2026-10-01', cycle: '28', luteal: '14' },
  inputs: [
    { key: 'lmp', label: 'First day of last period (YYYY-MM-DD)', default: '2026-10-01', type: 'text', placeholder: 'YYYY-MM-DD' },
    { key: 'cycle', label: 'Cycle length', suffix: 'days', default: '28', slider: { min: 21, max: 45, step: 1 } },
    { key: 'luteal', label: 'Luteal phase length', suffix: 'days', default: '14', slider: { min: 10, max: 16, step: 1 } },
  ],
  outputs: [
    { key: 'ovulation', label: 'Estimated ovulation day', highlight: true },
    { key: 'fertileStart', label: 'Fertile window starts' },
    { key: 'fertileEnd', label: 'Fertile window ends' },
    { key: 'nextPeriod', label: 'Next period expected' },
    { key: 'status', label: 'Right now', sublabel: 'Based on today' },
  ],
  compute: (v, locale) => {
    const t = Date.parse(v.lmp + 'T00:00:00Z')
    const cycle = toNum(v.cycle)
    const luteal = toNum(v.luteal)
    if (isNaN(t) || !Number.isInteger(cycle) || cycle < 21 || cycle > 45 || luteal < 9 || luteal > 16 || luteal >= cycle) {
      return {
        ovulation: `⚠️ ${tui('ovulation-calculator', locale, 'errInvalid', 'Enter a valid date (YYYY-MM-DD), cycle 21-45 days, luteal 9-16')}`,
        fertileStart: '—', fertileEnd: '—', nextPeriod: '—', status: '—',
        fertileDays: '0 days', otherDays: '0 days',
      }
    }
    // 排卵日 = 下次月经 − 黄体期;易孕窗口 = 排卵前 5 天到后 1 天
    const ov = t + (cycle - luteal) * MS_DAY
    return {
      ovulation: isoDate(ov),
      fertileStart: isoDate(ov - 5 * MS_DAY),
      fertileEnd: isoDate(ov + MS_DAY),
      nextPeriod: isoDate(t + cycle * MS_DAY),
      // 挂载后由 deriveNow 基于今天补齐
      status: '—',
      // 图表隐藏输出:窗口 6 天 vs 周期其余(值仅供 donut parseNumeric 取数,标签走 slice.* 键本地化)
      fertileDays: '6 days',
      otherDays: `${cycle - 6} days`,
    }
  },
  deriveNow: (v, locale) => {
    const T = (key: string, fb: string) => tui('ovulation-calculator', locale, key, fb)
    const t = Date.parse(v.lmp + 'T00:00:00Z')
    const cycle = toNum(v.cycle)
    const luteal = toNum(v.luteal)
    if (isNaN(t) || !Number.isInteger(cycle) || cycle < 21 || cycle > 45 || luteal < 9 || luteal > 16) {
      return { status: '—' }
    }
    const now = new Date()
    const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
    const cycleMs = cycle * MS_DAY
    let ov = t + (cycle - luteal) * MS_DAY
    // 窗口已完全过去则整周期后移(上限 60 个周期防死循环)
    let k = 0
    while (ov + MS_DAY < today && k < 60) {
      ov += cycleMs
      k++
    }
    if (today >= ov - 5 * MS_DAY && today <= ov + MS_DAY) {
      return { status: T('statusFertile', 'Fertile window is open now') }
    }
    const days = Math.round((ov - today) / MS_DAY)
    return {
      status: days === 0
        ? T('statusToday', 'Ovulation is today')
        : T('statusIn', 'Next ovulation in {n} days').replace('{n}', String(days)),
    }
  },
  chart: {
    title: 'Fertile days in your cycle',
    centerLabel: 'Cycle',
    slices: [
      { valueKey: 'fertileDays', label: 'Fertile window (6 days)', color: '#ec4899' },
      { valueKey: 'otherDays', label: 'Rest of the cycle', color: '#cbd5e1' },
    ],
  },
  note: '📅 Ovulation = next period − 14 days (the luteal phase), not a fixed time after the last one. Sperm survive up to 5 days and the egg ~24 hours, so the fertile window spans ovulation −5 to +1. Cycles of 21-45 days supported.',
})

// ─────────────────────────────────────────────
// Pregnancy Weight Gain Calculator(IOM 2009)
// ─────────────────────────────────────────────
// IOM 单/双胎区间:total = 全程增重区间(kg),rate = 孕中晚期每周速率(kg/周)
const IOM_SINGLE: Record<string, { total: [number, number]; rate: number }> = {
  under: { total: [12.5, 18], rate: 0.51 },
  normal: { total: [11.5, 16], rate: 0.42 },
  over: { total: [7, 11.5], rate: 0.28 },
  obese: { total: [5, 9], rate: 0.22 },
}
// 偏瘦双胎无 IOM 建议(rate/total 为 null,由 UI 明示而非编数)
const IOM_TWINS: Record<string, { total: [number, number] | null; rate: number | null }> = {
  under: { total: null, rate: null },
  normal: { total: [17, 25], rate: 0.63 },
  over: { total: [14, 23], rate: 0.58 },
  obese: { total: [11, 19], rate: 0.49 },
}
const KG_TO_LB = 2.20462
const fmtKg = (kg: number) => `${fmtNum(kg, 1)} kg`

/** 从输入推导 BMI 档/本周推荐区间/当前增重;非法或双胎偏瘦返回 null(bmiKey 字段单独放行) */
function pregnancyModel(v: Record<string, string>): {
  bmi: number; bmiKey: string; gain: number;
  expLo: number; expHi: number; rate: number; total: [number, number] | null;
} | { twinsUnder: true } | null {
  const h = toNumStrict(v.height)
  const pre = toNumStrict(v.preWeight)
  const cur = toNumStrict(v.curWeight)
  const week = toNumStrict(v.week)
  if ([h, pre, cur, week].some((n) => Number.isNaN(n))) return null
  if (h < 120 || h > 220 || pre <= 0 || pre > 400 || cur <= 0 || cur > 500) return null
  if (!Number.isInteger(week) || week < 1 || week > 42) return null
  const bmi = pre / Math.pow(h / 100, 2)
  const bmiKey = bmi < 18.5 ? 'under' : bmi < 25 ? 'normal' : bmi < 30 ? 'over' : 'obese'
  const twins = v.babies === 'twins'
  const table = twins ? IOM_TWINS[bmiKey] : IOM_SINGLE[bmiKey]
  if (table.total === null || table.rate === null) return { twinsUnder: true }
  // 孕早期线性铺满 0.5-2 kg;13 周后按每周速率累加
  const expLo = week <= 13 ? 0.5 * (week / 13) : 0.5 + (week - 13) * table.rate
  const expHi = week <= 13 ? 2 * (week / 13) : 2 + (week - 13) * table.rate
  return { bmi, bmiKey, gain: cur - pre, expLo, expHi, rate: table.rate, total: table.total }
}

export const PregnancyWeightGainCalculatorClient = makeCalculatorClient({
  slug: 'pregnancy-weight-gain-calculator',
  l10n: PregnancyWeightGainCalculatorL10n,
  sample: { height: '165', preWeight: '61.9', curWeight: '67.5', week: '24', babies: 'single' },
  presets: [
    { label: 'Normal BMI, week 24', values: { height: '165', preWeight: '61.9', curWeight: '67.5', week: '24', babies: 'single' } },
    { label: 'Overweight, week 30', values: { height: '165', preWeight: '78', curWeight: '84', week: '30', babies: 'single' } },
    { label: 'Twins, normal BMI', values: { height: '165', preWeight: '61.9', curWeight: '72', week: '26', babies: 'twins' } },
  ],
  inputs: [
    { key: 'height', label: 'Height', suffix: 'cm', default: '165', slider: { min: 140, max: 200, step: 1 } },
    { key: 'preWeight', label: 'Pre-pregnancy weight', suffix: 'kg', default: '61.9', slider: { min: 40, max: 150, step: 0.5 } },
    { key: 'curWeight', label: 'Current weight', suffix: 'kg', default: '67.5', slider: { min: 35, max: 180, step: 0.5 } },
    { key: 'week', label: 'Current week', default: '24', slider: { min: 1, max: 42, step: 1 } },
    { key: 'babies', label: 'Babies', default: 'single', options: [
      { label: 'Single', value: 'single' },
      { label: 'Twins', value: 'twins' },
    ]},
  ],
  outputs: [
    { key: 'status', label: 'Gain status', highlight: true },
    { key: 'bmiOut', label: 'Pre-pregnancy BMI' },
    { key: 'totalRange', label: 'Recommended total gain' },
    { key: 'expectedNow', label: 'Expected gain by now' },
    { key: 'yourGain', label: 'Your gain so far' },
    { key: 'rateOut', label: 'Weekly rate', sublabel: '2nd-3rd trimester' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('pregnancy-weight-gain-calculator', locale, key, fb)
    const m = pregnancyModel(v)
    const err = `⚠️ ${T('errInvalid', 'Enter valid values: height 120-220 cm, weight > 0, week 1-42')}`
    if (m === null) {
      return { status: err, bmiOut: '—', totalRange: '—', expectedNow: '—', yourGain: '—', rateOut: '—' }
    }
    if ('twinsUnder' in m) {
      return { status: `⚠️ ${T('noTwinsUnder', 'No IOM twin guideline for underweight BMI - ask your OB')}`, bmiOut: '—', totalRange: '—', expectedNow: '—', yourGain: '—', rateOut: '—' }
    }
    const bmiLabel = T(`bmi${m.bmiKey.charAt(0).toUpperCase()}${m.bmiKey.slice(1)}`,
      { under: 'Underweight', normal: 'Normal', over: 'Overweight', obese: 'Obese' }[m.bmiKey] as string)
    const status = m.gain < m.expLo ? T('statusBelow', 'Below recommended range')
      : m.gain > m.expHi ? T('statusAbove', 'Above recommended range')
      : T('statusWithin', 'Within recommended range')
    const lb = (kg: number) => fmtNum(kg * KG_TO_LB, 1)
    return {
      status,
      bmiOut: `${fmtNum(m.bmi, 1)} (${bmiLabel})`,
      totalRange: `${fmtKg(m.total![0])}–${fmtKg(m.total![1])} (${lb(m.total![0])}–${lb(m.total![1])} lb)`,
      expectedNow: `${fmtKg(m.expLo)}–${fmtKg(m.expHi)}`,
      yourGain: `${fmtKg(m.gain)} (${lb(m.gain)} lb)`,
      rateOut: `${fmtNum(m.rate, 2)} kg/week`,
    }
  },
  chart: {
    kind: 'gauge',
    title: 'Where your gain falls',
    valueKey: 'yourGain',
    min: 0,
    max: (v) => {
      const m = pregnancyModel(v)
      if (m === null || 'twinsUnder' in m) return 20
      return Math.max(m.expHi * 1.5 + 2, m.gain + 1.5)
    },
    zones: (v) => {
      const m = pregnancyModel(v)
      if (m === null || 'twinsUnder' in m) {
        return [{ upTo: 20, color: '#cbd5e1', label: '—' }]
      }
      return [
        { upTo: m.expLo, color: '#3b82f6', label: 'Below range' },
        { upTo: m.expHi, color: '#22c55e', label: 'On track' },
        { upTo: Math.max(m.expHi * 1.5 + 2, m.gain + 1.5), color: '#f59e0b', label: 'Above' },
      ]
    },
    formatValue: (n) => `${fmtNum(n, 1)} kg`,
  },
  note: '🤰 IOM/NAM 2009 guidelines: roughly 0.5-2 kg total in trimester one, then a steady weekly rate (0.42 kg/wk at normal BMI). Twins carry wider ranges. Numbers are a conversation with your provider, not a grade.',
})

// ─────────────────────────────────────────────
// Diaper Cost Calculator(尿布开销,含布尿布对比)
// ─────────────────────────────────────────────
const DAYS_PER_MONTH = 30.44
export const DiaperCostCalculatorClient = makeCalculatorClient({
  slug: 'diaper-cost-calculator',
  l10n: DiaperCostCalculatorL10n,
  urlState: true,
  sample: { perDay: '7', cost: '0.28', months: '30', clothCost: '600' },
  presets: [
    { label: 'Newborn (0-3 mo)', values: { perDay: '10', cost: '0.30', months: '33', clothCost: '600' } },
    { label: '6-12 months', values: { perDay: '7', cost: '0.26', months: '24', clothCost: '600' } },
    { label: 'Toddler (12-24 mo)', values: { perDay: '5', cost: '0.24', months: '12', clothCost: '600' } },
    { label: 'Potty training stretch', values: { perDay: '4', cost: '0.22', months: '8', clothCost: '600' } },
  ],
  inputs: [
    { key: 'perDay', label: 'Diapers per day', default: '7', slider: { min: 1, max: 15, step: 1 } },
    { key: 'cost', label: 'Cost per diaper', suffix: '$', default: '0.28', slider: { min: 0.05, max: 1, step: 0.01 } },
    { key: 'months', label: 'Total months in diapers', default: '30', slider: { min: 6, max: 48, step: 1 } },
    { key: 'clothCost', label: 'Cloth system cost (one-off)', suffix: '$', default: '600', slider: { min: 0, max: 1500, step: 50 } },
  ],
  outputs: [
    { key: 'monthly', label: 'Monthly cost', highlight: true },
    { key: 'yearly', label: 'Yearly cost' },
    { key: 'total', label: 'Total until potty training' },
    { key: 'clothSave', label: 'Saved with cloth' },
  ],
  compute: (v, locale) => {
    const perDay = toNumStrict(v.perDay)
    const cost = toNumStrict(v.cost)
    const months = toNumStrict(v.months)
    const cloth = toNumStrict(v.clothCost)
    if ([perDay, cost, months, cloth].some((n) => Number.isNaN(n)) || perDay <= 0 || cost < 0 || months <= 0 || cloth < 0) {
      return {
        monthly: `⚠️ ${tui('diaper-cost-calculator', locale, 'errInvalid', 'Values cannot be negative and diapers/day must be > 0')}`,
        yearly: '—', total: '—', clothSave: '—',
      }
    }
    // 30.44 天/月、365 天/年的口径:monthly 与 yearly 互相一致(monthly × 12 ≈ yearly×30.44/30.44)
    const perMonth = perDay * cost * DAYS_PER_MONTH
    const perYear = perDay * cost * 365
    const totalCost = perDay * cost * DAYS_PER_MONTH * months
    return {
      monthly: fmtUSD(perMonth),
      yearly: fmtUSD(perYear),
      total: fmtUSD(totalCost),
      clothSave: fmtUSD(totalCost - cloth),
    }
  },
  chart: { kind: 'compare', title: 'Disposable vs cloth (whole diapering period)' },
  compare: (v) => {
    const perDay = toNumStrict(v.perDay)
    const cost = toNumStrict(v.cost)
    const months = toNumStrict(v.months)
    const cloth = toNumStrict(v.clothCost)
    if ([perDay, cost, months, cloth].some((n) => Number.isNaN(n)) || perDay <= 0 || cost < 0 || months <= 0 || cloth < 0) return null
    const totalCost = perDay * cost * DAYS_PER_MONTH * months
    return {
      rows: [
        { label: 'Disposable', segments: [{ label: 'Total cost', value: totalCost, color: '#3b82f6' }] },
        { label: 'Cloth', segments: [{ label: 'Total cost', value: cloth, color: '#22c55e' }] },
      ],
      formatTotal: (n) => fmtUSD(n, 0),
    }
  },
  note: '🧷 First year alone runs 2,500-3,000 diapers. Buying by the box drops the per-diaper price from ~$0.35 to $0.20-0.25. The cloth total ignores extra laundry (~$0.50-1.00 per load) — add it for a fair fight.',
})

// ─────────────────────────────────────────────
// Cat Age Calculator(猫龄 → 人类等效,15/24/+4 曲线)
// ─────────────────────────────────────────────
// 生命阶段 l10n 表:[tui key, 英文回退](与 cat-age bundle 的 stage.* 对应)
const CAT_STAGE_L10N: [string, string][] = [
  ['stage.kitten', 'Kitten'],
  ['stage.youngAdult', 'Young adult'],
  ['stage.matureAdult', 'Mature adult'],
  ['stage.senior', 'Senior'],
  ['stage.superSenior', 'Super senior'],
]
export const CatAgeCalculatorClient = makeCalculatorClient({
  slug: 'cat-age-calculator',
  l10n: CatAgeCalculatorL10n,
  urlState: true,
  sample: { catAge: '5' },
  inputs: [
    { key: 'catAge', label: 'Cat\'s age', suffix: 'years', default: '5', slider: { min: 0, max: 25, step: 0.5 } },
  ],
  outputs: [
    { key: 'humanAge', label: 'Human-equivalent age', highlight: true },
    { key: 'lifeStage', label: 'Life stage' },
    { key: 'mythNote', label: 'About the ×7 rule' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('cat-age-calculator', locale, key, fb)
    const age = toNumStrict(v.catAge)
    if (Number.isNaN(age) || age < 0 || age > 25) {
      return {
        humanAge: `⚠️ ${T('errInvalidAge', 'Enter an age between 0 and 25 years')}`,
        lifeStage: '—', mythNote: '—',
      }
    }
    // 兽医共识曲线:第 1 年 ≈ 15 人岁,第 2 年 +9,之后每年 +4(与体型无关)
    const human = age <= 1 ? age * 15 : age <= 2 ? 15 + (age - 1) * 9 : 24 + (age - 2) * 4
    const stageIdx = age < 1 ? 0 : age < 7 ? 1 : age < 11 ? 2 : age < 15 ? 3 : 4
    return {
      humanAge: `${fmtNum(human, 0)} ${T('unit.humanYears', 'human years')}`,
      lifeStage: T(CAT_STAGE_L10N[stageIdx][0], CAT_STAGE_L10N[stageIdx][1]),
      mythNote: T('myth', 'The ×7 rule ignores maturation pace'),
    }
  },
  chart: {
    kind: 'gauge',
    title: 'Life stage',
    valueKey: 'humanAge',
    min: 0,
    max: (v) => {
      const age = toNum(v.catAge)
      const human = age <= 1 ? age * 15 : age <= 2 ? 15 + (age - 1) * 9 : 24 + (age - 2) * 4
      return Math.max(96, human + 8)
    },
    zones: [
      // 与 compute 的 stageIdx 阈值对齐(人年边界 = 15/24/+4 曲线在猫 1/7/11/15 岁处的取值):
      // 幼猫 <1 岁(human 15),青年 <7 岁(human 44),壮年 <11 岁(human 60),老年 <15 岁(human 76)
      { upTo: 15, color: '#f97316', label: 'Kitten' },
      { upTo: 44, color: '#22c55e', label: 'Young adult' },
      { upTo: 60, color: '#3b82f6', label: 'Mature adult' },
      { upTo: 76, color: '#a855f7', label: 'Senior' },
      { upTo: 96, color: '#64748b', label: 'Super senior' },
    ],
    formatValue: (n) => `${Math.round(n)} yr`,
  },
  note: '🐱 A 1-year-old cat is ~15 in human years, 2 maps to 24, and each year after adds 4 — unlike dogs, the curve barely depends on breed. Indoor cats routinely reach 15-20 (about 76-96 human years).',
})

// ─────────────────────────────────────────────
// Cat Food Calculator(RER × 猫用系数 → 罐数/克数)
// ─────────────────────────────────────────────
export const CatFoodCalculatorClient = makeCalculatorClient({
  slug: 'cat-food-calculator',
  l10n: CatFoodCalculatorL10n,
  urlState: true,
  sample: { weight: '4', factor: '1.2', basis: 'can', density: '95', canWeight: '85' },
  presets: [
    { label: 'Neutered indoor (4 kg)', values: { weight: '4', factor: '1.2', basis: 'can', density: '95', canWeight: '85' } },
    { label: 'Weight-loss plan (6 kg)', values: { weight: '6', factor: '0.8', basis: '100g', density: '380', canWeight: '85' } },
    { label: 'Kitten (2 kg)', values: { weight: '2', factor: '2.5', basis: 'can', density: '90', canWeight: '85' } },
  ],
  inputs: [
    { key: 'weight', label: 'Cat weight', suffix: 'kg', default: '4', slider: { min: 1, max: 10, step: 0.25 } },
    { key: 'factor', label: 'Life stage & activity (MER factor)', default: '1.2', options: [
      { label: 'Weight loss (×0.8)', value: '0.8' },
      { label: 'Neutered adult (×1.2)', value: '1.2' },
      { label: 'Intact adult (×1.4)', value: '1.4' },
      { label: 'Active / outdoor (×1.6)', value: '1.6' },
      { label: 'Kitten 4-12 months (×2.5)', value: '2.5' },
    ]},
    { key: 'basis', label: 'Food label basis', default: 'can', options: [
      { label: 'kcal per can', value: 'can' },
      { label: 'kcal per 100 g', value: '100g' },
    ]},
    { key: 'density', label: 'Calorie density on the label', suffix: 'kcal', default: '95', slider: { min: 60, max: 500, step: 5 } },
    { key: 'canWeight', label: 'Grams per can (for cans)', suffix: 'g', default: '85', slider: { min: 40, max: 250, step: 5 } },
  ],
  outputs: [
    { key: 'mer', label: 'Daily energy need (MER)', highlight: true },
    { key: 'rer', label: 'Resting energy (RER)' },
    { key: 'activityExtra', label: 'Activity portion (MER − RER)' },
    { key: 'cans', label: 'Cans per day', sublabel: 'Wet food (can basis)' },
    { key: 'grams', label: 'Daily food by weight' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('cat-food-calculator', locale, key, fb)
    const weight = toNumStrict(v.weight)
    const factor = toNumStrict(v.factor)
    const density = toNumStrict(v.density)
    const canWeight = toNumStrict(v.canWeight)
    if ([weight, factor, density, canWeight].some((n) => Number.isNaN(n)) || !(weight >= 0.5) || weight > 15 || !(factor > 0) || !(density > 0) || !(canWeight > 0)) {
      return {
        mer: `⚠️ ${T('errInvalid', 'Enter a weight of 0.5-15 kg and positive label values')}`,
        rer: '—', activityExtra: '—', cans: '—', grams: '—',
      }
    }
    // RER = 70 × kg^0.75(与犬同一公式);MER = RER × 猫用生命阶段系数(AAHA)
    const rer = 70 * Math.pow(weight, 0.75)
    const mer = rer * factor
    let cans: number | null = null
    let gramsPerDay: number
    if (v.basis === '100g') {
      gramsPerDay = mer / (density / 100)
    } else {
      cans = mer / density
      gramsPerDay = cans * canWeight
    }
    return {
      mer: `${fmtNum(mer, 0)} kcal/day`,
      rer: `${fmtNum(rer, 0)} kcal/day`,
      activityExtra: `${fmtNum(mer - rer, 0)} kcal/day`,
      cans: cans === null ? '—' : `${fmtNum(cans, 2)} ${T('cupsWord', 'cans/day')}`,
      grams: `${fmtNum(gramsPerDay, 0)} g/day`,
    }
  },
  chart: {
    title: 'Where the daily calories come from',
    centerLabel: 'MER',
    slices: [
      { valueKey: 'rer', label: 'Resting need (RER)', color: '#3b82f6' },
      { valueKey: 'activityExtra', label: 'Activity multiplier', color: '#22c55e' },
    ],
  },
  note: '🐟 RER = 70 × weight(kg)^0.75 kcal/day, then a life-stage factor — an indoor neutered cat needs just ×1.2. Split the daily amount into at least 2 meals; most wet foods run ≈1 kcal per gram. Cats must lose weight slowly (crash dieting causes hepatic lipidosis) — design diets with your vet.',
})

// ─────────────────────────────────────────────
// Zodiac Sign Calculator(西方星座 + 属性)
// ─────────────────────────────────────────────
const MONTH_LENGTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const CUM_DAYS = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
/** 星座起始日(积日,平年口径;闰年只影响 2/29 之后 ±1 天,星座判定不受影响) */
const ZODIAC_THRESHOLDS: { doy: number; key: string }[] = [
  { doy: 20, key: 'aquarius' }, { doy: 50, key: 'pisces' }, { doy: 80, key: 'aries' },
  { doy: 110, key: 'taurus' }, { doy: 141, key: 'gemini' }, { doy: 172, key: 'cancer' },
  { doy: 204, key: 'leo' }, { doy: 235, key: 'virgo' }, { doy: 266, key: 'libra' },
  { doy: 296, key: 'scorpio' }, { doy: 326, key: 'sagittarius' }, { doy: 356, key: 'capricorn' },
]
const ZODIAC_META: Record<string, { display: string; dates: string; element: string; modality: string; positive: boolean }> = {
  aries: { display: 'Aries', dates: 'Mar 21 – Apr 19', element: 'fire', modality: 'cardinal', positive: true },
  taurus: { display: 'Taurus', dates: 'Apr 20 – May 20', element: 'earth', modality: 'fixed', positive: false },
  gemini: { display: 'Gemini', dates: 'May 21 – Jun 20', element: 'air', modality: 'mutable', positive: true },
  cancer: { display: 'Cancer', dates: 'Jun 21 – Jul 22', element: 'water', modality: 'cardinal', positive: false },
  leo: { display: 'Leo', dates: 'Jul 23 – Aug 22', element: 'fire', modality: 'fixed', positive: true },
  virgo: { display: 'Virgo', dates: 'Aug 23 – Sep 22', element: 'earth', modality: 'mutable', positive: false },
  libra: { display: 'Libra', dates: 'Sep 23 – Oct 22', element: 'air', modality: 'cardinal', positive: true },
  scorpio: { display: 'Scorpio', dates: 'Oct 23 – Nov 21', element: 'water', modality: 'fixed', positive: false },
  sagittarius: { display: 'Sagittarius', dates: 'Nov 22 – Dec 21', element: 'fire', modality: 'mutable', positive: true },
  capricorn: { display: 'Capricorn', dates: 'Dec 22 – Jan 19', element: 'earth', modality: 'cardinal', positive: false },
  aquarius: { display: 'Aquarius', dates: 'Jan 20 – Feb 18', element: 'air', modality: 'fixed', positive: true },
  pisces: { display: 'Pisces', dates: 'Feb 19 – Mar 20', element: 'water', modality: 'mutable', positive: false },
}
/** 属性 l10n 表(与 zodiac-sign bundle 的 sign./element./modality./polarity. 键对应) */
const ELEMENT_L10N: Record<string, [string, string]> = {
  fire: ['element.fire', 'Fire'], earth: ['element.earth', 'Earth'], air: ['element.air', 'Air'], water: ['element.water', 'Water'],
}
const MODALITY_L10N: Record<string, [string, string]> = {
  cardinal: ['modality.cardinal', 'Cardinal'], fixed: ['modality.fixed', 'Fixed'], mutable: ['modality.mutable', 'Mutable'],
}
export const ZodiacSignCalculatorClient = makeCalculatorClient({
  slug: 'zodiac-sign-calculator',
  l10n: ZodiacSignCalculatorL10n,
  urlState: true,
  sample: { month: '3', day: '21' },
  presets: [
    { label: 'Mar 21 (Aries start)', values: { month: '3', day: '21' } },
    { label: 'Aug 1 (Leo)', values: { month: '8', day: '1' } },
    { label: 'Dec 25 (Capricorn)', values: { month: '12', day: '25' } },
  ],
  inputs: [
    { key: 'month', label: 'Birth month', default: '3', options: [
      { label: 'January', value: '1' }, { label: 'February', value: '2' }, { label: 'March', value: '3' },
      { label: 'April', value: '4' }, { label: 'May', value: '5' }, { label: 'June', value: '6' },
      { label: 'July', value: '7' }, { label: 'August', value: '8' }, { label: 'September', value: '9' },
      { label: 'October', value: '10' }, { label: 'November', value: '11' }, { label: 'December', value: '12' },
    ]},
    { key: 'day', label: 'Birth day', default: '21', slider: { min: 1, max: 31, step: 1 } },
  ],
  outputs: [
    { key: 'sign', label: 'Your sign', highlight: true },
    { key: 'dates', label: 'Date range' },
    { key: 'element', label: 'Element' },
    { key: 'modality', label: 'Modality' },
    { key: 'polarity', label: 'Polarity' },
    { key: 'cusp', label: 'Cusp' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('zodiac-sign-calculator', locale, key, fb)
    const month = Math.round(toNum(v.month))
    const day = Math.round(toNum(v.day))
    const err = `⚠️ ${T('errInvalidDay', 'That day does not exist in that month (February has at most 29)')}`
    if (!Number.isInteger(month) || month < 1 || month > 12 || !Number.isInteger(day) || day < 1) {
      return { sign: err, dates: '—', element: '—', modality: '—', polarity: '—', cusp: '—' }
    }
    // 2 月允许 29 日(闰年生日);小月 31 日不存在
    const maxDay = month === 2 ? 29 : MONTH_LENGTHS[month - 1]
    if (day > maxDay) {
      return { sign: err, dates: '—', element: '—', modality: '—', polarity: '—', cusp: '—' }
    }
    const doy = CUM_DAYS[month - 1] + day
    // 积日落在最后一个 ≤ doy 的阈值星座;doy < 20(Jan 1-19)属摩羯
    let key = 'capricorn'
    for (const th of ZODIAC_THRESHOLDS) {
      if (doy >= th.doy) key = th.key
    }
    const meta = ZODIAC_META[key]
    // 交界判定:与任一分界日相差 ≤1 天 → 提示两星座交界(流行说法)
    let cuspText = T('notOnCusp', 'Not on a cusp')
    for (let i = 0; i < ZODIAC_THRESHOLDS.length; i++) {
      const th = ZODIAC_THRESHOLDS[i]
      if (Math.abs(doy - th.doy) <= 1) {
        const before = ZODIAC_THRESHOLDS[(i + 11) % 12]
        cuspText = T('cuspOf', 'Born on the {a}–{b} cusp')
          .replace('{a}', T(`sign.${before.key}`, ZODIAC_META[before.key].display))
          .replace('{b}', T(`sign.${th.key}`, ZODIAC_META[th.key].display))
        break
      }
    }
    return {
      sign: T(`sign.${key}`, meta.display),
      dates: meta.dates,
      element: T(ELEMENT_L10N[meta.element][0], ELEMENT_L10N[meta.element][1]),
      modality: T(MODALITY_L10N[meta.modality][0], MODALITY_L10N[meta.modality][1]),
      polarity: meta.positive
        ? T('polarity.positive', 'Positive (extroverted)')
        : T('polarity.negative', 'Negative (introverted)'),
      cusp: cuspText,
    }
  },
  note: '♈ Sun sign by birth month and day. Landing on a changeover date (±1 day) only means the Sun was crossing between signs — you still belong to exactly one; "cusps" are popular astrology, not astronomy.',
})

// ─────────────────────────────────────────────
// Chinese Zodiac Calculator(生肖 + 五行 + 阴阳,立春口径)
// ─────────────────────────────────────────────
const ZODIAC_ANIMALS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig']
const ANIMAL_DISPLAY: Record<string, string> = {
  rat: 'Rat', ox: 'Ox', tiger: 'Tiger', rabbit: 'Rabbit', dragon: 'Dragon', snake: 'Snake',
  horse: 'Horse', goat: 'Goat', monkey: 'Monkey', rooster: 'Rooster', dog: 'Dog', pig: 'Pig',
}
const ELEMENT_KEYS = ['wood', 'fire', 'earth', 'metal', 'water']
const ELEMENT_DISPLAY: Record<string, string> = { wood: 'Wood', fire: 'Fire', earth: 'Earth', metal: 'Metal', water: 'Water' }
export const ChineseZodiacCalculatorClient = makeCalculatorClient({
  slug: 'chinese-zodiac-calculator',
  l10n: ChineseZodiacCalculatorL10n,
  urlState: true,
  sample: { year: '1990', edge: 'after' },
  presets: [
    { label: '1990 (Horse)', values: { year: '1990', edge: 'after' } },
    { label: '2000 (Dragon)', values: { year: '2000', edge: 'after' } },
    { label: 'Born Jan 2000?', values: { year: '2000', edge: 'before' } },
  ],
  inputs: [
    { key: 'year', label: 'Birth year', default: '1990', slider: { min: 1924, max: 2031, step: 1 } },
    { key: 'edge', label: 'Birthday vs Lichun (≈Feb 4)', default: 'after', options: [
      // ≤3 段的分段控件在 375px 下每段仅 ~79px 文本宽(实测 scrollWidth),
      // 长句必被省略号截断;完整语境由字段标签(Lichun ≈Feb 4)与 edgeNote
      // 结果行承接,这里只留实测放得下的短词(各语种均经 DOM 测量验证)
      { label: 'After', value: 'after' },
      { label: 'Before', value: 'before' },
      { label: 'Not sure', value: 'unknown' },
    ]},
  ],
  outputs: [
    { key: 'animal', label: 'Your zodiac animal', highlight: true },
    { key: 'element', label: 'Element & yin-yang' },
    { key: 'yinYang', label: 'Yin / Yang' },
    { key: 'cycleYears', label: 'Your zodiac years' },
    { key: 'edgeNote', label: 'Year applied' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('chinese-zodiac-calculator', locale, key, fb)
    const year = Math.round(toNumStrict(v.year))
    if (!Number.isInteger(year) || year < 1924 || year > 2031) {
      return {
        animal: `⚠️ ${T('errInvalidYear', 'Enter a year between 1924 and 2031')}`,
        element: '—', yinYang: '—', cycleYears: '—', edgeNote: '—',
      }
    }
    // 生肖年自立春(2/3-2/5)起算:立春前出生属上一年(八字口径)
    const effYear = v.edge === 'before' ? year - 1 : year
    const idx = ((effYear - 4) % 12 + 12) % 12
    const elIdx = ((effYear - 4) % 10 + 10) % 10
    const animalKey = ZODIAC_ANIMALS[idx]
    const elementKey = ELEMENT_KEYS[Math.floor(elIdx / 2)]
    const yang = elIdx % 2 === 0
    // 本命年:同生肖年份(取 1924-2039 内全部,年份模 12 同余)
    const years: number[] = []
    for (let y = 1924; y <= 2039; y++) {
      if (((y - 4) % 12 + 12) % 12 === idx) years.push(y)
    }
    const edgeNote = v.edge === 'before'
      ? T('edgePrev', 'Born before Lichun: the year {year} (previous year) applies').replace('{year}', String(effYear))
      : v.edge === 'unknown'
        ? T('edgeAssumed', 'Computed with calendar year {year}; a January-early-February birth may belong to the previous animal').replace('{year}', String(year))
        : T('edgeNext', 'Born on/after Lichun: the year {year} applies').replace('{year}', String(effYear))
    return {
      animal: T(`animal.${animalKey}`, ANIMAL_DISPLAY[animalKey]),
      element: `${T(yang ? 'yang' : 'yin', yang ? 'Yang' : 'Yin')} ${T(`element.${elementKey}`, ELEMENT_DISPLAY[elementKey])}`,
      yinYang: T(yang ? 'yang' : 'yin', yang ? 'Yang' : 'Yin'),
      cycleYears: years.join(' · '),
      edgeNote,
    }
  },
  note: '🏮 The zodiac year turns at Lichun (Start of Spring, Feb 3-5) in the solar-term tradition — not January 1, and not always Lunar New Year. Born in January or early February? Your animal may be the previous year\'s. The full cycle is 60 years: 12 animals × the yin-yang pairs of 5 elements.',
})
