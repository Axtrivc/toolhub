'use client'

import { useState, useMemo, useCallback } from 'react'
import { CalculatorField, CalculatorSliderField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { ResultActions } from '@/components/ResultActions'
import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtUSD, fmtNum, toNum } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui, tuiCalc } from '@/lib/i18n/tool-l10n'

/**
 * 第六批:金融 5 个 + 健康 3 个 = 8 个计算器
 * 金融类 + macro/pregnancy 用 makeCalculatorClient 配置引擎;
 * body-fat 为自定义 client:支持 metric/imperial 单位切换与
 * Navy / BMI(Deurenberg)双方法。
 */

// ── 健康类(body-fat 自定义 client 用)──

// 换算常数(精确定义):1 in = 2.54 cm,1 lb = 0.45359237 kg
const CM_PER_IN = 2.54
const LB_PER_KG = 0.45359237

type Unit = 'metric' | 'imperial'

/** 输入框字符串换算:空/非法/非正值保留空串,避免切换单位把 '' 变成 '0' */
function convertInput(s: string, factor: number): string {
  if (s.trim() === '') return ''
  const n = Number(s)
  if (!isFinite(n) || n <= 0) return ''
  return String(Number((n * factor).toFixed(1)))
}

/** 总英寸 → (ft, in) 双输入框字符串;英寸保留 1 位小数,四舍五入满 12 时进位到英尺 */
function splitInches(totalIn: number): [string, string] {
  let ft = Math.floor(totalIn / 12)
  let inch = Number((totalIn - ft * 12).toFixed(1))
  if (inch >= 12) {
    ft += 1
    inch = 0
  }
  return [String(ft), String(inch)]
}

/** 切到目标单位制时换算身高 (cm ↔ ft+in) 并保留数值,不清空 */
function convertHeightFields(
  u: Unit,
  height: string,
  heightFt: string,
  heightIn: string,
): { height: string; heightFt: string; heightIn: string } {
  if (u === 'imperial') {
    const cm = Number(height)
    const [ft, inch] = isFinite(cm) && cm > 0 ? splitInches(cm / CM_PER_IN) : ['', '']
    return { height, heightFt: ft, heightIn: inch }
  }
  const totalIn = Number(heightFt) * 12 + Number(heightIn)
  const cm = isFinite(totalIn) && totalIn > 0 ? String(Number((totalIn * CM_PER_IN).toFixed(1))) : ''
  return { height: cm, heightFt, heightIn }
}

/** CSV 字段转义:含逗号/引号/换行则双引号包裹,内部引号翻倍(与工厂同款) */
function csvEscape(s: string): string {
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

/** 单位制切换按钮组(metric | imperial),样式与 BMICalculatorClient 一致 */
function UnitToggle({ unit, onSwitch, L }: {
  unit: Unit
  onSwitch: (u: Unit) => void
  L: (key: string, fb: string) => string
}) {
  return (
    <div className="flex gap-2">
      {(['metric', 'imperial'] as const).map((u) => (
        <button
          key={u}
          type="button"
          onClick={() => onSwitch(u)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            unit === u ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {u === 'metric' ? L('metric', 'Metric (cm / kg)') : L('imperial', 'Imperial (ft/in / lb)')}
        </button>
      ))}
    </div>
  )
}

/** 下拉选择字段(样式与工厂/手写计算器的 select 一致) */
function CalcSelect({ id, label, value, onChange, options }: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  options: { label: string; value: string }[]
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}

// ── 金融类 ──

export const SavingsGoalCalculatorClient = makeCalculatorClient({
  slug: 'savings-goal-calculator',
  inputs: [
    { key: 'goal', label: 'Savings goal', suffix: '$', default: '50000' },
    { key: 'current', label: 'Currently saved', suffix: '$', default: '5000' },
    { key: 'rate', label: 'Annual return', suffix: '%', default: '4', slider: { min: 0, max: 12, step: 0.1 } },
    { key: 'years', label: 'Years to goal', default: '5', slider: { min: 1, max: 40, step: 1 } },
  ],
  outputs: [
    { key: 'monthly', label: 'Monthly contribution needed', highlight: true },
    { key: 'gap', label: 'Amount to save' },
    { key: 'growth', label: 'Investment growth' },
  ],
  compute: (v, locale) => {
    const goal = toNum(v.goal)
    const current = toNum(v.current)
    if (toNum(v.years) <= 0) return { monthly: `⚠️ ${tui('savings-goal-calculator', locale, 'errYears', 'Years must be greater than 0')}`, gap: '—', growth: '—' }
    const rate = toNum(v.rate) / 100 / 12
    const months = toNum(v.years) * 12
    const futureCurrent = rate === 0 ? current : current * Math.pow(1 + rate, months)
    const gap = Math.max(0, goal - futureCurrent)
    let monthly = 0
    if (gap > 0) {
      monthly = rate === 0 ? gap / months : (gap * rate) / (Math.pow(1 + rate, months) - 1)
    }
    const totalContributed = current + monthly * months
    return {
      monthly: fmtUSD(monthly),
      gap: fmtUSD(gap),
      growth: fmtUSD(Math.max(0, goal - totalContributed)),
    }
  },
  note: '🎯 Finds the monthly amount needed to hit any savings goal, accounting for investment growth on what you already have.',
})

export const NetWorthCalculatorClient = makeCalculatorClient({
  slug: 'net-worth-calculator',
  inputs: [
    { key: 'assets', label: 'Total assets (cash, home, investments)', suffix: '$', default: '250000' },
    { key: 'liabilities', label: 'Total liabilities (mortgage, loans, debt)', suffix: '$', default: '150000' },
  ],
  outputs: [
    { key: 'networth', label: 'Your net worth', highlight: true },
    { key: 'ratio', label: 'Assets-to-debt ratio' },
  ],
  compute: (v, locale) => {
    const a = toNum(v.assets)
    const l = toNum(v.liabilities)
    const nw = a - l
    const ratio = l > 0 ? a / l : Infinity
    return {
      networth: fmtUSD(nw),
      ratio: isFinite(ratio) ? `${fmtNum(ratio, 2)} : 1` : tui('net-worth-calculator', locale, 'noDebt', 'No debt'),
      // 供 chart 用:资产 vs 负债的规模对比
      assetsOut: fmtUSD(a, 0),
      liabilitiesOut: fmtUSD(l, 0),
    }
  },
  note: '💎 Net worth = what you own minus what you owe. The median US net worth is ~$192,000; $1M+ puts you in the top 10%.',
  chart: {
    title: 'Assets vs Liabilities',
    centerLabel: 'Total',
    slices: [
      { valueKey: 'assetsOut', label: 'Assets (what you own)', color: '#22c55e' },
      { valueKey: 'liabilitiesOut', label: 'Liabilities (what you owe)', color: '#ef4444' },
    ],
  },
})

export const AnnuityCalculatorClient = makeCalculatorClient({
  slug: 'annuity-calculator',
  inputs: [
    { key: 'principal', label: 'Initial principal', suffix: '$', default: '100000' },
    { key: 'rate', label: 'Annual return', suffix: '%', default: '5', slider: { min: 0, max: 12, step: 0.1 } },
    { key: 'years', label: 'Payout period', suffix: 'years', default: '20', slider: { min: 1, max: 40, step: 1 } },
  ],
  outputs: [
    { key: 'annual', label: 'Annual payout', highlight: true },
    { key: 'monthly', label: 'Monthly payout' },
    { key: 'total', label: 'Total payouts' },
  ],
  compute: (v, locale) => {
    const p = toNum(v.principal)
    const r = toNum(v.rate) / 100
    const n = toNum(v.years)
    if (n <= 0) return { annual: `⚠️ ${tui('annuity-calculator', locale, 'errYears', 'Enter years greater than 0')}`, monthly: '—', total: '—' }
    // 负利率会让分母 1−(1+r)^−n 变负,输出看似正常的荒谬年金;本金/利率必须非负
    if (p < 0 || r < 0) return { annual: `⚠️ ${tui('annuity-calculator', locale, 'errNonNegative', 'Principal and rate cannot be negative')}`, monthly: '—', total: '—' }
    // 年金现值公式反推每年支付
    const annual = r === 0 ? p / n : (p * r) / (1 - Math.pow(1 + r, -n))
    return {
      annual: fmtUSD(annual),
      monthly: fmtUSD(annual / 12),
      total: fmtUSD(annual * n),
    }
  },
  note: '🏦 Annuity: how much you can withdraw yearly so the money lasts exactly N years. Common for retirement planning.',
})

export const CapitalGainsTaxEstimatorClient = makeCalculatorClient({
  slug: 'capital-gains-tax-estimator',
  inputs: [
    { key: 'purchase', label: 'Purchase price', suffix: '$', default: '10000' },
    { key: 'sale', label: 'Sale price', suffix: '$', default: '15000' },
    { key: 'years', label: 'Years held', default: '2' },
    { key: 'taxableIncome', label: 'Taxable income', suffix: '$', default: '80000' },
    { key: 'filing', label: 'Filing status', default: 'single', options: [
      { label: 'Single', value: 'single' },
      { label: 'Married, filing jointly', value: 'married' },
    ]},
  ],
  outputs: [
    { key: 'gain', label: 'Capital gain' },
    { key: 'rate', label: 'Tax rate' },
    { key: 'tax', label: 'Estimated tax owed', highlight: true },
  ],
  compute: (v, locale) => {
    const gain = toNum(v.sale) - toNum(v.purchase)
    const years = toNum(v.years)
    const income = toNum(v.taxableIncome)
    const married = v.filing === 'married'
    const posGain = Math.max(0, gain)
    // 长期持有(>1年)按 0/15/20% 优惠税率,判档基数 = 应税收入 + 收益本身
    // (收益"堆叠"在普通收入之上;2026 年阈值,IRS Rev. Proc. 2025-32)
    const zeroMax = married ? 98900 : 49450
    const fifteenMax = married ? 613700 : 545500
    // 短期(<1年)按普通收入边际档征税,落点同样按 收入+收益 计算(2026)
    const ordinaryBrackets = married
      ? [[0, 0.10], [24800, 0.12], [100800, 0.22], [211400, 0.24], [403550, 0.32], [512450, 0.35], [768700, 0.37]]
      : [[0, 0.10], [12400, 0.12], [50400, 0.22], [105700, 0.24], [201775, 0.32], [256225, 0.35], [640600, 0.37]]
    const isLong = years > 1
    const label = isLong
      ? tui('capital-gains-tax-estimator', locale, 'longTerm', 'Long-term ')
      : tui('capital-gains-tax-estimator', locale, 'shortTerm', 'Short-term ')
    let tax = 0
    let rateDetail: string
    if (isLong) {
      // 0% 档剩余额度 = 阈值 − 收入;超出部分依次进 15% / 20% 档
      const zeroPortion = Math.min(posGain, Math.max(0, zeroMax - income))
      const fifteenPortion = Math.min(posGain - zeroPortion, Math.max(0, fifteenMax - Math.max(income, zeroMax)))
      const twentyPortion = posGain - zeroPortion - fifteenPortion
      const parts: string[] = []
      if (zeroPortion > 0) parts.push(`0% × ${fmtUSD(zeroPortion, 0)}`)
      if (fifteenPortion > 0) parts.push(`15% × ${fmtUSD(fifteenPortion, 0)}`)
      if (twentyPortion > 0) parts.push(`20% × ${fmtUSD(twentyPortion, 0)}`)
      if (parts.length === 0) parts.push('0%')
      tax = fifteenPortion * 0.15 + twentyPortion * 0.2
      rateDetail = parts.join(' + ')
    } else {
      // 短期利得是普通收入,与工资一样逐档累进填充(从收入落点档开始),
      // 不能整笔按最高触及档一刀切——大额收益会被显著高估税额
      const parts: string[] = []
      for (let i = 0; i < ordinaryBrackets.length; i++) {
        const lo = ordinaryBrackets[i][0] as number
        const rate = ordinaryBrackets[i][1] as number
        const hi = i + 1 < ordinaryBrackets.length ? (ordinaryBrackets[i + 1][0] as number) : Infinity
        // 该档内属于「收入+收益」堆叠后落在 [lo, hi) 的部分
        const portion = Math.min(income + posGain, hi) - Math.max(income, lo)
        if (portion > 0 && posGain > 0) {
          tax += portion * rate
          parts.push(`${fmtNum(rate * 100, 0)}% × ${fmtUSD(Math.min(portion, posGain), 0)}`)
        }
      }
      if (parts.length === 0) parts.push('0%')
      rateDetail = parts.join(' + ')
    }
    return {
      gain: fmtUSD(gain),
      rate: `${label.trim()} ${rateDetail}`,
      tax: fmtUSD(tax),
    }
  },
  note: '📈 US capital gains: held 1+ year = long-term (0/15/20% by 2026 taxable income). Held <1 year = short-term (ordinary income rate). Gains stack on top of ordinary income for bracket purposes (long-term brackets and the short-term marginal rate are based on income plus gain). Simplified — excludes NIIT and state tax.',
})

export const RentVsBuyCalculatorClient = makeCalculatorClient({
  slug: 'rent-vs-buy-calculator',
  inputs: [
    { key: 'home', label: 'Home price', suffix: '$', default: '400000' },
    { key: 'rent', label: 'Comparable rent', suffix: '$/mo', default: '2000' },
    { key: 'down', label: 'Down payment', suffix: '%', default: '20', slider: { min: 0, max: 100, step: 1 } },
    { key: 'rate', label: 'Mortgage rate', suffix: '%', default: '6.8', slider: { min: 0, max: 15, step: 0.05 } },
    { key: 'term', label: 'Loan term', suffix: 'years', default: '30', slider: { min: 5, max: 40, step: 5 } },
    { key: 'years', label: 'Years in home', default: '7' },
  ],
  outputs: [
    { key: 'buyTotal', label: 'Net cost to buy', sublabel: 'Down + payments − sale equity' },
    { key: 'rentTotal', label: 'Total cost to rent', sublabel: 'Rent over the holding period' },
    { key: 'winner', label: 'Cheaper option', highlight: true },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('rent-vs-buy-calculator', locale, key, fb)
    const home = toNum(v.home)
    const rent = toNum(v.rent)
    const downPct = toNum(v.down)
    const down = (home * downPct) / 100
    const loan = Math.max(0, home - down)
    const rate = toNum(v.rate) / 100 / 12
    const holdYears = toNum(v.years)
    const termYears = toNum(v.term)
    if (holdYears <= 0 || termYears <= 0) return { buyTotal: `⚠️ ${T('errYears', 'Enter years greater than 0')}`, rentTotal: '—', winner: '—' }
    // 月供按整个贷款期限(如 30 年)摊销,而不是按持有年数
    const loanMonths = Math.round(termYears * 12)
    let monthly: number
    if (rate === 0) monthly = loan / loanMonths
    else {
      const f = Math.pow(1 + rate, loanMonths)
      monthly = (loan * rate * f) / (f - 1)
    }
    // 持有期内逐月模拟;上限保护 60 年(720 个月)
    const months = Math.min(Math.round(holdYears * 12), 720)
    let balance = loan
    let paid = 0
    for (let i = 0; i < months && balance > 0; i++) {
      balance += balance * rate
      const pay = Math.min(monthly, balance)
      balance -= pay
      paid += pay
    }
    // 购房净成本 = 首付 + 持有期内已付月供(含利息) − 期末净值(期末房价 − 剩余本金)
    const endingEquity = Math.max(0, home - balance)
    const buyTotal = down + paid - endingEquity
    const rentTotal = rent * months
    return {
      buyTotal: fmtUSD(buyTotal, 0),
      rentTotal: fmtUSD(rentTotal, 0),
      winner: buyTotal < rentTotal
        ? T('winnerBuying', 'Buying (~{amount} cheaper)').replace('{amount}', fmtUSD(rentTotal - buyTotal, 0))
        : T('winnerRenting', 'Renting (~{amount} cheaper)').replace('{amount}', fmtUSD(buyTotal - rentTotal, 0)),
    }
  },
  note: '🏠 Net cost to buy = down payment + mortgage payments made while living there − equity recovered at sale (home value − remaining loan balance). Simplified — excludes taxes, maintenance, appreciation, and opportunity cost of investing. Use as a rough first-pass comparison.',
})

// ── 健康类 ──

type Method = 'navy' | 'bmi'

/**
 * Body Fat Calculator —— 体脂率估算
 * 方法一 US Navy:身高 + 颈围 + 腰围(女性加臀围),公式按公制 cm;
 * 方法二 BMI(Deurenberg):BF% = 1.20×BMI + 0.23×age − 10.8×sex − 5.4(sex 男=1 女=0),
 * 需补体重输入。英制输入一律换算成 kg/cm 后计算。
 */
export function BodyFatCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('body-fat-calculator', locale, key, fb)
  const C = (key: string, fb: string) => tuiCalc(key, locale, fb)

  const [unit, setUnit] = useState<Unit>('metric')
  const [method, setMethod] = useState<Method>('navy')
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [height, setHeight] = useState('175') // metric: cm
  const [heightFt, setHeightFt] = useState('') // imperial: ft + in 双输入框
  const [heightIn, setHeightIn] = useState('')
  const [neck, setNeck] = useState('38') // 围度:metric cm / imperial in
  const [waist, setWaist] = useState('85')
  const [hip, setHip] = useState('95')
  const [weight, setWeight] = useState('70') // BMI 法用:metric kg / imperial lb
  const [age, setAge] = useState('30') // BMI 法用

  // 切单位制:身高 cm↔ft/in、体重 kg↔lb、围度 cm↔in 全部就地换算保留数值
  const switchUnit = (u: Unit) => {
    if (u === unit) return
    const h = convertHeightFields(u, height, heightFt, heightIn)
    setHeight(h.height)
    setHeightFt(h.heightFt)
    setHeightIn(h.heightIn)
    setWeight(convertInput(weight, u === 'imperial' ? 1 / LB_PER_KG : LB_PER_KG))
    const circ = u === 'imperial' ? 1 / CM_PER_IN : CM_PER_IN
    setNeck(convertInput(neck, circ))
    setWaist(convertInput(waist, circ))
    setHip(convertInput(hip, circ))
    setUnit(u)
  }

  const handleLoadSample = useCallback(() => {
    setUnit('metric')
    setMethod('navy')
    setGender('male'); setHeight('175'); setHeightFt(''); setHeightIn('')
    setNeck('38'); setWaist('85'); setHip('95'); setWeight('70'); setAge('30')
  }, [])

  const result = useMemo(() => {
    const hCm = unit === 'metric' ? Number(height) : (Number(heightFt) * 12 + Number(heightIn)) * CM_PER_IN
    if (!isFinite(hCm) || hCm <= 0) return null
    // 围度输入换算成 cm(Navy 公式按 cm)
    const cm = (s: string) => (unit === 'metric' ? Number(s) : Number(s) * CM_PER_IN)
    let bf: number
    let sublabel: string
    if (method === 'bmi') {
      // Deurenberg 公式(sex:男=1,女=0)
      const kg = unit === 'metric' ? Number(weight) : Number(weight) * LB_PER_KG
      const a = Number(age)
      if (!(kg > 0) || !(a > 0) || !isFinite(kg) || !isFinite(a)) return null
      const bmi = kg / Math.pow(hCm / 100, 2)
      bf = 1.2 * bmi + 0.23 * a - 10.8 * (gender === 'male' ? 1 : 0) - 5.4
      sublabel = L('subDeurenberg', 'Deurenberg formula')
    } else {
      const n = cm(neck)
      const w = cm(waist)
      const hp = cm(hip)
      if (!(n > 0) || !(w > 0) || !isFinite(n) || !isFinite(w)) return null
      if (gender === 'female' && (!(hp > 0) || !isFinite(hp))) return null
      // US Navy 公式
      if (gender === 'male') {
        if (w <= n) return { error: L('errWaist', 'Waist must be > neck') }
        bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(hCm)) - 450
      } else {
        if (w + hp <= n) return { error: L('errInvalid', 'Invalid measurements') }
        bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.221 * Math.log10(hCm)) - 450
      }
      sublabel = L('subNavy', 'US Navy method')
    }
    if (!isFinite(bf)) return null
    bf = Math.max(2, Math.min(60, bf))
    let cat: string
    const isMale = gender === 'male'
    if (bf < (isMale ? 6 : 14)) cat = L('catEssential', 'Essential fat')
    else if (bf < (isMale ? 14 : 21)) cat = L('catAthlete', 'Athlete')
    else if (bf < (isMale ? 18 : 25)) cat = L('catFitness', 'Fitness')
    else if (bf < (isMale ? 25 : 32)) cat = L('catAverage', 'Average')
    else cat = L('catHigh', 'High')
    return { bf, cat, sublabel }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit, method, gender, height, heightFt, heightIn, neck, waist, hip, weight, age, locale])

  const sexLabel = gender === 'male' ? L('optMale', 'Male') : L('optFemale', 'Female')
  const wUnit = unit === 'metric' ? 'kg' : 'lb'
  const cUnit = unit === 'metric' ? 'cm' : 'in'
  const hDisplay = unit === 'metric' ? `${height} cm` : `${heightFt} ft ${heightIn} in`

  // 摘要/CSV 的输入行随方法变化(Navy 用围度,BMI 法用体重+年龄;臀围仅女性)
  const inputRows: [string, string][] = [
    [L('gender', 'Gender'), sexLabel],
    [L('height', 'Height'), hDisplay],
  ]
  if (method === 'navy') {
    inputRows.push(
      [L('neck', 'Neck circumference'), `${neck} ${cUnit}`],
      [L('waist', 'Waist circumference'), `${waist} ${cUnit}`],
    )
    if (gender === 'female') inputRows.push([L('hip', 'Hip (females only)'), `${hip} ${cUnit}`])
  } else {
    inputRows.push(
      [L('weight', 'Weight'), `${weight} ${wUnit}`],
      [L('age', 'Age'), `${age} ${L('yrsSuffix', 'years')}`],
    )
  }

  const summary = useMemo(() => {
    if (!result) return L('emptyState', 'Enter your measurements to estimate your body fat')
    const bfText = 'error' in result ? `⚠️ ${result.error}` : `${fmtNum(result.bf, 1)}%`
    const catText = 'error' in result ? '—' : result.cat
    return [
      C('summaryTitle', 'Calculation Summary'),
      C('inputsLabel', 'Inputs:'),
      ...inputRows.map(([k, v]) => `  ${k}: ${v}`),
      C('resultsLabel', 'Results:'),
      `  ${L('outBodyfat', 'Body fat percentage')}: ${bfText}`,
      `  ${L('outCategory', 'Category')}: ${catText}`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, inputRows, locale])

  const csvContent = useMemo(() => {
    if (!result) return summary
    const bfText = 'error' in result ? `⚠️ ${result.error}` : `${fmtNum(result.bf, 1)}%`
    const catText = 'error' in result ? '—' : result.cat
    const rows: string[][] = [
      [C('csvField', 'Field'), C('csvType', 'Type'), C('csvValue', 'Value')],
      ...inputRows.map(([k, v]) => [k, C('csvInput', 'Input'), v] as string[]),
      [L('outBodyfat', 'Body fat percentage'), C('csvResult', 'Result'), bfText],
      [L('outCategory', 'Category'), C('csvResult', 'Result'), catText],
    ]
    return '\uFEFF' + rows.map((r) => r.map(csvEscape).join(',')).join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summary, result, inputRows, locale])

  return (
    <div className="space-y-6">
      {/* 单位切换 */}
      <UnitToggle unit={unit} onSwitch={switchUnit} L={L} />

      {/* 方法切换:US Navy 围度法 / BMI(Deurenberg) */}
      <div>
        <span className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('method', 'Method')}</span>
        <div className="flex gap-2">
          {(['navy', 'bmi'] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMethod(m)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                method === m ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {m === 'navy' ? L('methodNavy', 'Navy (tape measure)') : L('methodBmi', 'BMI (Deurenberg)')}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{C('inputs', 'Inputs')}</span>
        <LoadSampleButton onLoad={handleLoadSample} />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalcSelect
          id="gender"
          label={L('gender', 'Gender')}
          value={gender}
          onChange={(v) => setGender(v as 'male' | 'female')}
          options={[
            { label: L('optMale', 'Male'), value: 'male' },
            { label: L('optFemale', 'Female'), value: 'female' },
          ]}
        />
        {unit === 'metric' ? (
          <CalculatorField id="height" label={L('height', 'Height')} value={height} onChange={setHeight} suffix="cm" placeholder="175" />
        ) : (
          <>
            <CalculatorField id="heightFt" label={L('heightFt', 'Height (ft)')} value={heightFt} onChange={setHeightFt} placeholder="5" />
            <CalculatorField id="heightIn" label={L('heightIn', 'Height (in)')} value={heightIn} onChange={setHeightIn} placeholder="9" />
          </>
        )}
        {method === 'navy' ? (
          <>
            <CalculatorField id="neck" label={L('neck', 'Neck circumference')} value={neck} onChange={setNeck} suffix={cUnit} placeholder={unit === 'metric' ? '38' : '15'} />
            <CalculatorField id="waist" label={L('waist', 'Waist circumference')} value={waist} onChange={setWaist} suffix={cUnit} placeholder={unit === 'metric' ? '85' : '33'} />
            <CalculatorField id="hip" label={L('hip', 'Hip (females only)')} value={hip} onChange={setHip} suffix={cUnit} placeholder={unit === 'metric' ? '95' : '37'} />
          </>
        ) : (
          <>
            <CalculatorField id="weight" label={L('weight', 'Weight')} value={weight} onChange={setWeight} suffix={wUnit} placeholder={unit === 'metric' ? '70' : '155'} />
            <CalculatorSliderField id="age" label={L('age', 'Age')} value={age} onChange={setAge} suffix={L('yrsSuffix', 'years')} placeholder="30" min={18} max={80} step={1} />
          </>
        )}
      </div>

      {result ? (
        <>
          <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ResultCard
              label={L('outBodyfat', 'Body fat percentage')}
              value={'error' in result ? `⚠️ ${result.error}` : `${fmtNum(result.bf, 1)}%`}
              highlight
              sublabel={'error' in result ? undefined : result.sublabel}
            />
            <ResultCard label={L('outCategory', 'Category')} value={'error' in result ? '—' : result.cat} />
          </div>
          <ResultActions
            summary={summary}
            filename="body-fat-calculator-result.csv"
            downloadContent={csvContent}
            mime="text/csv;charset=utf-8;"
            copyLabel={C('copySummary', 'Copy Summary')}
          />
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          {L('emptyState', 'Enter your measurements to estimate your body fat')}
        </div>
      )}

      <CalculatorNote>
        {L('note', '⚖️ The US Navy method estimates body fat from tape measurements; the BMI method (Deurenberg formula) estimates it from your BMI, age, and sex. Both are less accurate than DEXA scans but practical at-home estimates.')}
      </CalculatorNote>
    </div>
  )
}

export const MacroCalculatorClient = makeCalculatorClient({
  slug: 'macro-calculator',
  inputs: [
    { key: 'calories', label: 'Daily calorie target', default: '2000' },
    { key: 'goal', label: 'Goal', default: 'maintain', options: [
      { label: 'Lose weight (low carb)', value: 'lose' },
      { label: 'Maintain', value: 'maintain' },
      { label: 'Build muscle (high protein)', value: 'gain' },
    ]},
  ],
  outputs: [
    { key: 'protein', label: 'Protein', sublabel: '4 cal/g' },
    { key: 'carbs', label: 'Carbs', sublabel: '4 cal/g' },
    { key: 'fat', label: 'Fat', sublabel: '9 cal/g' },
    { key: 'total', label: 'Total calories', highlight: true },
  ],
  compute: (v) => {
    const cal = toNum(v.calories)
    let pPct: number, cPct: number, fPct: number
    if (v.goal === 'lose') { pPct = 0.40; cPct = 0.30; fPct = 0.30 }
    else if (v.goal === 'gain') { pPct = 0.35; cPct = 0.45; fPct = 0.20 }
    else { pPct = 0.30; cPct = 0.40; fPct = 0.30 }
    const protein = (cal * pPct) / 4
    const carbs = (cal * cPct) / 4
    const fat = (cal * fPct) / 9
    return {
      protein: `${fmtNum(protein, 0)} g (${fmtNum(pPct * 100, 0)}%)`,
      carbs: `${fmtNum(carbs, 0)} g (${fmtNum(cPct * 100, 0)}%)`,
      fat: `${fmtNum(fat, 0)} g (${fmtNum(fPct * 100, 0)}%)`,
      total: fmtNum(cal, 0),
      // 隐藏的卡路里分量(不放 outputs,只供 chart 按卡路里画饼图,物理意义正确)
      proteinCal: fmtNum(cal * pPct, 0),
      carbsCal: fmtNum(cal * cPct, 0),
      fatCal: fmtNum(cal * fPct, 0),
    }
  },
  note: '🍽️ Splits daily calories into protein/carbs/fat. Aim for 1.6-2.2g protein per kg body weight for muscle gain.',
  chart: {
    title: 'Calorie Breakdown by Macro',
    centerLabel: 'Calories',
    slices: [
      { valueKey: 'proteinCal', label: 'Protein', color: '#3b82f6' },
      { valueKey: 'carbsCal', label: 'Carbs', color: '#22c55e' },
      { valueKey: 'fatCal', label: 'Fat', color: '#f59e0b' },
    ],
  },
})

export const PregnancyDueDateCalculatorClient = makeCalculatorClient({
  slug: 'pregnancy-due-date-calculator',
  inputs: [
    { key: 'lmp', label: 'First day of last period (YYYY-MM-DD)', default: '2026-01-01', type: 'text', placeholder: 'YYYY-MM-DD' },
  ],
  outputs: [
    { key: 'due', label: 'Estimated due date', highlight: true },
    { key: 'conceived', label: 'Likely conception date' },
    { key: 'weeks', label: 'Current week', sublabel: 'Assumes today' },
  ],
  compute: (v) => {
    // 纯 UTC 日历运算:避免本地时区 setDate 与 toISOString(UTC) 混用
    // 导致的日期偏移(欧美时区结果早一天)与 hydration 不一致
    const t = Date.parse(v.lmp + 'T00:00:00Z')
    if (isNaN(t)) return { due: '—', conceived: '—', weeks: '—' }
    const day = 86400000
    const iso = (ms: number) => new Date(ms).toISOString().slice(0, 10)
    // Naegele 法则:LMP + 280 天;受孕日 ≈ LMP + 14 天(孕期自受孕起 266 天)
    return {
      due: iso(t + 280 * day),
      conceived: iso(t + 14 * day),
      // 当前周依赖 now,SSR 期不计算(显示 '—'),挂载后由 deriveNow 补齐
      weeks: '—',
    }
  },
  // 挂载后基于当前时间派生 "Current week"(工厂只在客户端 effect 中调用)
  deriveNow: (v, locale) => {
    const t = Date.parse(v.lmp + 'T00:00:00Z')
    if (isNaN(t)) return { weeks: '—' }
    const now = new Date()
    const weeks = Math.floor((now.getTime() - t) / (7 * 24 * 60 * 60 * 1000))
    const valid = weeks >= 0 && weeks <= 42
    return {
      weeks: valid
        ? tui('pregnancy-due-date-calculator', locale, 'weekN', 'Week {n}').replace('{n}', String(weeks))
        : tui('pregnancy-due-date-calculator', locale, 'notPregnant', 'Not pregnant / past due'),
    }
  },
  note: '🤰 Naegele\'s rule: due date = LMP + 280 days. Only an estimate — only 5% of babies arrive on their due date.',
})
