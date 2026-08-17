'use client'

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtUSD, fmtNum, toNum } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * 第三批计算器 - 健康类 + 数学类 + 金融类
 * 全部用 makeCalculatorClient 配置引擎
 */

// ── 健康类 ──

export const CalorieCalculatorClient = makeCalculatorClient({
  slug: 'calorie-calculator',
  inputs: [
    { key: 'gender', label: 'Gender', default: 'male', options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ]},
    { key: 'age', label: 'Age', suffix: 'years', default: '30' },
    { key: 'weight', label: 'Weight', suffix: 'kg', default: '70' },
    { key: 'height', label: 'Height', suffix: 'cm', default: '175' },
    { key: 'activity', label: 'Activity level', default: '1.55', options: [
      { label: 'Sedentary (little exercise)', value: '1.2' },
      { label: 'Light (1-3 days/week)', value: '1.375' },
      { label: 'Moderate (3-5 days/week)', value: '1.55' },
      { label: 'Active (6-7 days/week)', value: '1.725' },
      { label: 'Very active (physical job)', value: '1.9' },
    ]},
  ],
  outputs: [
    { key: 'bmr', label: 'BMR (at rest)', sublabel: 'Mifflin-St Jeor' },
    { key: 'tdee', label: 'Maintenance', highlight: true, sublabel: 'To stay same weight' },
    { key: 'lose', label: 'Mild weight loss', sublabel: '−0.25 kg/week' },
    { key: 'gain', label: 'Mild weight gain', sublabel: '+0.25 kg/week' },
    { key: 'lose500', label: 'Weight loss', sublabel: '−0.5 kg/week' },
    { key: 'gain500', label: 'Weight gain', sublabel: '+0.5 kg/week' },
  ],
  compute: (v, locale) => {
    const w = toNum(v.weight)
    const h = toNum(v.height)
    const a = toNum(v.age)
    // Mifflin-St Jeor 公式
    const bmr = v.gender === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161
    const tdee = bmr * toNum(v.activity)
    const unit = tui('calorie-calculator', locale, 'calPerDay', 'cal/day')
    return {
      bmr: `${fmtNum(bmr, 0)} ${unit}`,
      tdee: `${fmtNum(tdee, 0)} ${unit}`,
      lose: `${fmtNum(tdee - 250, 0)} ${unit}`,
      gain: `${fmtNum(tdee + 250, 0)} ${unit}`,
      lose500: `${fmtNum(tdee - 500, 0)} ${unit}`,
      gain500: `${fmtNum(tdee + 500, 0)} ${unit}`,
    }
  },
  note: '🔥 BMR = calories burned at complete rest. TDEE = total daily burn including activity. Eat less than TDEE to lose weight.',
})

export const BMRCalculatorClient = makeCalculatorClient({
  slug: 'bmr-calculator',
  inputs: [
    { key: 'gender', label: 'Gender', default: 'male', options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ]},
    { key: 'age', label: 'Age', suffix: 'years', default: '30' },
    { key: 'weight', label: 'Weight', suffix: 'kg', default: '70' },
    { key: 'height', label: 'Height', suffix: 'cm', default: '175' },
  ],
  outputs: [
    { key: 'bmr', label: 'Your BMR', highlight: true, sublabel: 'Mifflin-St Jeor' },
    { key: 'bmi', label: 'Your BMI' },
  ],
  compute: (v, locale) => {
    const w = toNum(v.weight)
    const h = toNum(v.height)
    const a = toNum(v.age)
    const bmr = v.gender === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161
    const bmi = w / Math.pow(h / 100, 2)
    return {
      bmr: `${fmtNum(bmr, 0)} ${tui('bmr-calculator', locale, 'caloriesPerDay', 'calories/day')}`,
      bmi: fmtNum(bmi, 1),
    }
  },
  note: '⚛️ BMR = Basal Metabolic Rate. The minimum energy your body needs at complete rest.',
})

export const WaterIntakeCalculatorClient = makeCalculatorClient({
  slug: 'water-intake-calculator',
  inputs: [
    { key: 'weight', label: 'Body weight', suffix: 'kg', default: '70' },
    { key: 'activity', label: 'Exercise (min/day)', default: '30' },
    { key: 'climate', label: 'Climate', default: 'normal', options: [
      { label: 'Normal / temperate', value: 'normal' },
      { label: 'Hot / humid', value: 'hot' },
    ]},
  ],
  outputs: [
    { key: 'liters', label: 'Daily water need', highlight: true },
    { key: 'cups', label: 'In cups (250ml)' },
    { key: 'oz', label: 'In ounces (US)' },
  ],
  compute: (v, locale) => {
    const w = toNum(v.weight)
    const exercise = toNum(v.activity)
    // 基础 35ml/kg + 运动 12ml/min×30min
    let ml = w * 35 + exercise * 12
    if (v.climate === 'hot') ml *= 1.1
    const liters = ml / 1000
    const T = (key: string, fb: string) => tui('water-intake-calculator', locale, key, fb)
    return {
      liters: `${fmtNum(liters, 2)} ${T('litersPerDay', 'liters/day')}`,
      cups: `${fmtNum(liters * 4, 1)} ${T('cupsUnit', 'cups')}`,
      oz: `${fmtNum(liters * 33.814, 1)} ${T('ozUnit', 'oz')}`,
    }
  },
  note: '💧 General guideline: ~35 ml per kg body weight, more with exercise or heat. Individual needs vary.',
})

export const IdealWeightCalculatorClient = makeCalculatorClient({
  slug: 'ideal-weight-calculator',
  inputs: [
    { key: 'gender', label: 'Gender', default: 'male', options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ]},
    { key: 'height', label: 'Height', suffix: 'cm', default: '175' },
  ],
  outputs: [
    { key: 'devine', label: 'Devine formula', highlight: true },
    { key: 'robinson', label: 'Robinson formula' },
    { key: 'hamwi', label: 'Hamwi formula' },
    { key: 'bmi', label: 'Healthy BMI range (18.5-24.9)' },
  ],
  compute: (v) => {
    const h = toNum(v.height)
    // 身高换算成英寸、减去 5 英尺(60 英寸)。低于 5 英尺时为负值,直接代入公式
    // (Devine 1974 原式:50 + 2.3 × 每超 1 英寸;不足部分线性递减,不钳制为 0)
    const inchesOver5ft = h / 2.54 - 60
    const isMale = v.gender === 'male'
    // 三个经典公式
    const devine = isMale ? 50 + 2.3 * inchesOver5ft : 45.5 + 2.3 * inchesOver5ft
    const robinson = isMale ? 52 + 1.9 * inchesOver5ft : 49 + 1.7 * inchesOver5ft
    const hamwi = isMale ? 48 + 2.7 * inchesOver5ft : 45.5 + 2.2 * inchesOver5ft
    const m = h / 100
    const low = 18.5 * m * m
    const high = 24.9 * m * m
    return {
      devine: `${fmtNum(devine, 1)} kg`,
      robinson: `${fmtNum(robinson, 1)} kg`,
      hamwi: `${fmtNum(hamwi, 1)} kg`,
      bmi: `${fmtNum(low, 1)} – ${fmtNum(high, 1)} kg`,
    }
  },
  note: '⚖️ Ideal weight is a rough estimate. Muscle mass, body frame, and health matter more than any single number.',
})

// ── 数学类 ──

export const FractionCalculatorClient = makeCalculatorClient({
  slug: 'fraction-calculator',
  inputs: [
    { key: 'num1', label: 'Numerator 1', default: '1' },
    { key: 'den1', label: 'Denominator 1', default: '2' },
    { key: 'op', label: 'Operation', default: 'add', options: [
      { label: '+ (Add)', value: 'add' },
      { label: '− (Subtract)', value: 'sub' },
      { label: '× (Multiply)', value: 'mul' },
      { label: '÷ (Divide)', value: 'div' },
    ]},
    { key: 'num2', label: 'Numerator 2', default: '1' },
    { key: 'den2', label: 'Denominator 2', default: '3' },
  ],
  outputs: [
    { key: 'result', label: 'Result (fraction)', highlight: true },
    { key: 'decimal', label: 'As decimal' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('fraction-calculator', locale, key, fb)
    const a = toNum(v.num1)
    const b = toNum(v.den1)
    const c = toNum(v.num2)
    const d = toNum(v.den2)
    if (b === 0 || d === 0) return { result: `⚠️ ${T('errDenominator', 'Denominator cannot be 0')}`, decimal: '—' }
    if (v.op === 'div' && b * c === 0) {
      // 除法 a/b ÷ c/d = a·d / (b·c):c=0 是「除以 0」;a=0 时结果恒 0,直接短路
      if (c === 0) return { result: `⚠️ ${T('errDivideByZero', 'Cannot divide by 0')}`, decimal: '—' }
      return { result: '0', decimal: '0.0000' }
    }
    let num: number, den: number
    switch (v.op) {
      case 'add': num = a * d + c * b; den = b * d; break
      case 'sub': num = a * d - c * b; den = b * d; break
      case 'mul': num = a * c; den = b * d; break
      case 'div': num = a * d; den = b * c; break
      default: num = 0; den = 1
    }
    const g = gcd(Math.abs(num), Math.abs(den))
    const sign = (num < 0) !== (den < 0) ? '-' : ''
    num = Math.abs(num)
    den = Math.abs(den)
    const whole = Math.floor(num / den)
    const rem = num % den
    let result: string
    if (rem === 0) result = `${sign}${whole}`
    else if (whole === 0) result = `${sign}${rem / g}/${den / g}`
    else result = `${sign}${whole} ${rem / g}/${den / g}`
    const decimal = ((num / den) * (sign ? -1 : 1)).toFixed(4)
    return { result, decimal }
  },
  note: '➗ Simplifies results to lowest terms. Uses exact fraction arithmetic, not decimals.',
})

export const RatioCalculatorClient = makeCalculatorClient({
  slug: 'ratio-calculator',
  inputs: [
    { key: 'a', label: 'A', default: '3' },
    { key: 'b', label: 'B', default: '4' },
    { key: 'c', label: 'C (or leave blank to solve)', default: '9' },
  ],
  outputs: [
    { key: 'ratio', label: 'A : B = C : D', highlight: true },
    { key: 'd', label: 'D = ' },
  ],
  compute: (v, locale) => {
    const a = toNum(v.a)
    const b = toNum(v.b)
    const c = toNum(v.c)
    if (a === 0 || b === 0) return { ratio: `⚠️ ${tui('ratio-calculator', locale, 'errAB', 'A and B cannot be 0')}`, d: '—' }
    // 解比例:A/B = C/D → D = B*C/A
    const d = (b * c) / a
    const g = gcd(a, b)
    return {
      ratio: `${fmtNum(a / g, 0)} : ${fmtNum(b / g, 0)} = ${fmtNum(c, 0)} : ${fmtNum(d, 2)}`,
      d: fmtNum(d, 2),
    }
  },
  note: '⚖️ Solves proportions. Example: 3/4 = 9/D → D = 12. Useful for recipes, scaling, and maps.',
})

export const LCMGcdCalculatorClient = makeCalculatorClient({
  slug: 'lcm-gcd-calculator',
  inputs: [
    { key: 'numbers', label: 'Numbers (comma-separated)', default: '12, 18, 24', type: 'text' },
  ],
  outputs: [
    { key: 'gcd', label: 'GCD (greatest common divisor)', highlight: true },
    { key: 'lcm', label: 'LCM (least common multiple)' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('lcm-gcd-calculator', locale, key, fb)
    const tokens = (v.numbers || '').split(/[\s,]+/).filter((s) => s !== '')
    const nums: number[] = []
    const ignored: string[] = []
    let usedAbs = false
    for (const tok of tokens) {
      const n = Number(tok)
      if (Number.isInteger(n) && n !== 0) {
        // 负整数按绝对值参与(GCD/LCM 定义在正整数上)
        if (n < 0) { nums.push(Math.abs(n)); usedAbs = true }
        else nums.push(n)
      } else {
        // 0 与非整数无法参与,收集起来在结果后提示
        ignored.push(tok)
      }
    }
    if (nums.length === 0) {
      return { gcd: `⚠️ ${T('errNoValid', 'Enter whole numbers other than 0 (e.g. 12, 18, 24)')}`, lcm: '—' }
    }
    let g = nums[0]
    for (const n of nums.slice(1)) g = gcd(g, n)
    let l = nums[0]
    for (const n of nums.slice(1)) l = (l * n) / gcd(l, n)
    const warns: string[] = []
    if (ignored.length > 0) warns.push(T('ignoredEntries', 'ignored: {list}').replace('{list}', ignored.join(', ')))
    if (usedAbs) warns.push(T('absUsed', 'negative numbers treated as absolute values'))
    const suffix = warns.length > 0 ? ` ⚠️ ${warns.join('; ')}` : ''
    return { gcd: String(g) + suffix, lcm: String(l) }
  },
  note: '🔢 GCD = largest number dividing all inputs. LCM = smallest number divisible by all inputs.',
})

// ── 金融类 ──

export const MarkupCalculatorClient = makeCalculatorClient({
  slug: 'markup-calculator',
  inputs: [
    { key: 'cost', label: 'Cost', suffix: '$', default: '50' },
    { key: 'markup', label: 'Markup', suffix: '%', default: '40' },
  ],
  outputs: [
    { key: 'profit', label: 'Profit per unit' },
    { key: 'price', label: 'Selling price', highlight: true },
    { key: 'margin', label: 'Profit margin' },
  ],
  compute: (v) => {
    const cost = toNum(v.cost)
    const markup = toNum(v.markup)
    const profit = cost * (markup / 100)
    const price = cost + profit
    const margin = price > 0 ? (profit / price) * 100 : 0
    return {
      profit: fmtUSD(profit),
      price: fmtUSD(price),
      margin: `${fmtNum(margin, 1)}%`,
      cost: fmtUSD(cost),
    }
  },
  note: '💰 Markup is on COST (cost × markup%). Margin is on PRICE (profit/price). They are NOT the same.',
  chart: {
    title: 'Selling Price: Cost vs Profit',
    centerLabel: 'Price',
    slices: [
      { valueKey: 'cost', label: 'Cost', color: '#64748b' },
      { valueKey: 'profit', label: 'Profit', color: '#22c55e' },
    ],
  },
})

export const MortgageCalculatorClient = makeCalculatorClient({
  slug: 'mortgage-calculator',
  inputs: [
    { key: 'home', label: 'Home price', suffix: '$', default: '400000' },
    { key: 'down', label: 'Down payment', suffix: '%', default: '20' },
    { key: 'rate', label: 'Interest rate', suffix: '%', default: '6.8' },
    { key: 'years', label: 'Loan term', suffix: 'years', default: '30' },
  ],
  outputs: [
    { key: 'monthly', label: 'Monthly payment (P&I)', highlight: true },
    { key: 'loan', label: 'Loan amount' },
    { key: 'total', label: 'Total interest paid' },
  ],
  compute: (v, locale) => {
    const home = toNum(v.home)
    const downPct = toNum(v.down)
    if (toNum(v.years) <= 0) return { monthly: `⚠️ ${tui('mortgage-calculator', locale, 'errYears', 'Years must be greater than 0')}`, loan: '—', total: '—', principal: '—' }
    const loan = home * (1 - downPct / 100)
    const rate = toNum(v.rate) / 100 / 12
    const months = toNum(v.years) * 12
    let monthly: number
    if (rate === 0) monthly = loan / months
    else {
      const f = Math.pow(1 + rate, months)
      monthly = (loan * rate * f) / (f - 1)
    }
    const total = monthly * months - loan
    return {
      monthly: fmtUSD(monthly),
      loan: fmtUSD(loan),
      total: fmtUSD(total, 0),
      principal: fmtUSD(loan, 0),
    }
  },
  note: '🏠 Principal & Interest only. Add property tax, insurance, and HOA for your full payment.',
  chart: {
    title: 'Total Paid: Principal vs Interest',
    centerLabel: 'Total',
    slices: [
      { valueKey: 'principal', label: 'Principal (loan amount)', color: '#22c55e' },
      { valueKey: 'total', label: 'Interest (cost of borrowing)', color: '#ef4444' },
    ],
  },
})

export const HourlyToSalaryCalculatorClient = makeCalculatorClient({
  slug: 'hourly-to-salary-calculator',
  inputs: [
    { key: 'hourly', label: 'Hourly wage', suffix: '$/hr', default: '25' },
    { key: 'hours', label: 'Hours per week', default: '40' },
  ],
  outputs: [
    { key: 'annual', label: 'Annual salary', highlight: true },
    { key: 'monthly', label: 'Monthly' },
    { key: 'weekly', label: 'Weekly' },
    { key: 'daily', label: 'Daily (8hr)' },
  ],
  compute: (v) => {
    const hourly = toNum(v.hourly)
    const hours = toNum(v.hours)
    const weekly = hourly * hours
    const annual = weekly * 52
    return {
      annual: fmtUSD(annual, 0),
      monthly: fmtUSD(annual / 12, 0),
      weekly: fmtUSD(weekly),
      daily: fmtUSD(hourly * 8),
    }
  },
  note: '💵 Assumes 52 paid weeks/year. Adjust hours for part-time or overtime.',
})

export const ROIcalculatorClient = makeCalculatorClient({
  slug: 'roi-calculator',
  inputs: [
    { key: 'initial', label: 'Initial investment', suffix: '$', default: '10000' },
    { key: 'final', label: 'Final value', suffix: '$', default: '13500' },
    { key: 'years', label: 'Years held', default: '3' },
  ],
  outputs: [
    { key: 'roi', label: 'Total ROI', highlight: true },
    { key: 'annualized', label: 'Annualized return' },
    { key: 'profit', label: 'Profit' },
  ],
  compute: (v, locale) => {
    const initial = toNum(v.initial)
    const final = toNum(v.final)
    const years = toNum(v.years)
    // 初始投资 ≤ 0 时 ROI/年化在数学上未定义,给友好错误而不是误导性的 0.00%
    if (initial <= 0) {
      return {
        roi: `⚠️ ${tui('roi-calculator', locale, 'errInitial', 'Initial investment must be greater than 0')}`,
        annualized: '—',
        profit: '—',
      }
    }
    const profit = final - initial
    const roi = (profit / initial) * 100
    const annualized = years > 0
      ? (Math.pow(final / initial, 1 / years) - 1) * 100
      : 0
    return {
      roi: `${fmtNum(roi, 2)}%`,
      annualized: `${fmtNum(annualized, 2)}%`,
      profit: fmtUSD(profit, 0),
    }
  },
  note: '📈 ROI = total return. Annualized = yearly average (CAGR). For stocks & real estate.',
})

export const CreditCardPayoffCalculatorClient = makeCalculatorClient({
  slug: 'credit-card-payoff-calculator',
  inputs: [
    { key: 'balance', label: 'Current balance', suffix: '$', default: '5000' },
    { key: 'apr', label: 'Annual rate (APR)', suffix: '%', default: '19.99' },
    { key: 'payment', label: 'Monthly payment', suffix: '$', default: '200' },
  ],
  outputs: [
    { key: 'months', label: 'Time to pay off', highlight: true },
    { key: 'total', label: 'Total paid' },
    { key: 'interest', label: 'Total interest' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('credit-card-payoff-calculator', locale, key, fb)
    let balance = toNum(v.balance)
    const monthlyRate = toNum(v.apr) / 100 / 12
    const payment = toNum(v.payment)
    const minInterest = balance * monthlyRate
    if (payment <= minInterest) {
      return {
        months: `⚠️ ${T('errPaymentTooLow', 'Payment too low (must cover interest)')}`,
        total: '—',
        interest: '—',
        principal: '—',
      }
    }
    let months = 0
    let totalPaid = 0
    while (balance > 0 && months < 1200) {
      const interest = balance * monthlyRate
      balance += interest
      const pay = Math.min(payment, balance)
      balance -= pay
      totalPaid += pay
      months++
    }
    if (balance > 0) {
      return {
        months: `⚠️ ${T('errNotPaidOff', 'Not paid off within 100 years at this payment')}`,
        total: fmtUSD(totalPaid, 0),
        interest: fmtUSD(totalPaid - toNum(v.balance), 0),
        principal: fmtUSD(toNum(v.balance), 0),
      }
    }
    // <12 个月只显示月数;≥12 个月补年数(取整)且单复数正确(1 yr / 2 yrs)
    let monthsLabel: string
    if (months < 12) {
      monthsLabel = months === 1
        ? T('monthsOne', '1 month')
        : T('monthsN', '{m} months').replace('{m}', String(months))
    } else {
      const yrs = Math.max(1, Math.round(months / 12))
      const yrsLabel = yrs === 1
        ? T('yrOne', '1 yr')
        : T('yrsN', '{y} yrs').replace('{y}', String(yrs))
      monthsLabel = T('monthsYrs', '{m} months ({y})')
        .replace('{m}', String(months))
        .replace('{y}', yrsLabel)
    }
    return {
      months: monthsLabel,
      total: fmtUSD(totalPaid, 0),
      interest: fmtUSD(totalPaid - toNum(v.balance), 0),
      principal: fmtUSD(toNum(v.balance), 0),
    }
  },
  note: '💳 Minimum payments can take decades. Paying more than the minimum saves dramatically on interest.',
  chart: {
    title: 'Total Paid: Principal vs Interest',
    centerLabel: 'Total',
    slices: [
      { valueKey: 'principal', label: 'Principal (what you borrowed)', color: '#22c55e' },
      { valueKey: 'interest', label: 'Interest (cost of borrowing)', color: '#ef4444' },
    ],
  },
})

export const IncomeTaxEstimatorClient = makeCalculatorClient({
  slug: 'income-tax-estimator',
  inputs: [
    { key: 'income', label: 'Annual income', suffix: '$', default: '75000' },
    { key: 'filing', label: 'Filing status', default: 'single', options: [
      { label: 'Single', value: 'single' },
      { label: 'Head of household', value: 'hoh' },
      { label: 'Married, filing jointly', value: 'married' },
    ]},
  ],
  outputs: [
    { key: 'tax', label: 'Estimated federal tax', highlight: true },
    { key: 'effective', label: 'Effective rate' },
    { key: 'fica', label: 'Estimated FICA', sublabel: 'Social Security + Medicare' },
    { key: 'takehome', label: 'Estimated take-home', sublabel: 'After federal tax + FICA' },
  ],
  compute: (v) => {
    const income = toNum(v.income)
    // 2026 美国联邦税档次(单身/户主/已婚,IRS Rev. Proc. 2025-32)
    // 每档语义:[该档下限, 税率];最后一档无上限(适用于"下限"以上的全部收入)
    const brackets = v.filing === 'married'
      ? [[0, 0.10], [24800, 0.12], [100800, 0.22], [211400, 0.24], [403550, 0.32], [512450, 0.35], [768700, 0.37]]
      : v.filing === 'hoh'
        ? [[0, 0.10], [16350, 0.12], [66300, 0.22], [107150, 0.24], [205700, 0.32], [260600, 0.35], [414400, 0.37]]
        : [[0, 0.10], [12400, 0.12], [50400, 0.22], [105700, 0.24], [201775, 0.32], [256225, 0.35], [640600, 0.37]]
    // 先扣标准扣除额(2026:单身 $16,100 / 户主 $24,150 / 已婚联合 $32,200)再套边际档
    const stdDeduction = v.filing === 'married' ? 32200 : v.filing === 'hoh' ? 24150 : 16100
    const taxable = Math.max(0, income - stdDeduction)
    let tax = 0
    for (let i = 0; i < brackets.length; i++) {
      const low = brackets[i][0] as number
      const rate = brackets[i][1] as number
      const high = i + 1 < brackets.length ? (brackets[i + 1][0] as number) : Infinity
      if (taxable > low) {
        // 本档应税额 = min(taxable, high) - low(末档 high=Infinity)
        tax += (Math.min(taxable, high) - low) * rate
      } else {
        break
      }
    }
    // FICA 估算(雇员侧):OASDI 6.2% + Medicare 1.45% = 7.65%,
    // OASDI 只对 ≤ 2026 SSA 工资基数($184,500)的部分征收,超出仅 1.45% Medicare;
    // 超 $200k 的 0.9% 附加税简化忽略
    const WAGE_BASE = 184500
    const fica = Math.min(income, WAGE_BASE) * 0.0765 + Math.max(0, income - WAGE_BASE) * 0.0145
    const effective = income > 0 ? (tax / income) * 100 : 0
    return {
      tax: fmtUSD(tax, 0),
      effective: `${fmtNum(effective, 1)}%`,
      fica: fmtUSD(fica, 0),
      takehome: fmtUSD(income - tax - fica, 0),
    }
  },
  note: '📊 US 2026 federal brackets with standard deduction applied ($16,100 single / $24,150 head of household / $32,200 joint). FICA estimated at 7.65% up to the $184,500 Social Security wage base (1.45% Medicare above; additional Medicare surtax ignored). Excludes state tax and credits. Estimate only.',
  chart: {
    title: 'Where Your Income Goes',
    centerLabel: 'Income',
    slices: [
      { valueKey: 'tax', label: 'Federal tax', color: '#ef4444' },
      { valueKey: 'fica', label: 'FICA (Social Security + Medicare)', color: '#f59e0b' },
      { valueKey: 'takehome', label: 'Take-home pay', color: '#22c55e' },
    ],
  },
})

// 工具函数:最大公约数(欧几里得算法)
function gcd(a: number, b: number): number {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b) { [a, b] = [b, a % b] }
  return a || 1
}
