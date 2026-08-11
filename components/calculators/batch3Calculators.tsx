'use client'

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtUSD, fmtNum, toNum } from '@/lib/format'

/**
 * 第三批计算器 - 健康类 + 数学类 + 金融类
 * 全部用 makeCalculatorClient 配置引擎
 */

// ── 健康类 ──

export const CalorieCalculatorClient = makeCalculatorClient({
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
  ],
  compute: (v) => {
    const w = toNum(v.weight)
    const h = toNum(v.height)
    const a = toNum(v.age)
    // Mifflin-St Jeor 公式
    const bmr = v.gender === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161
    const tdee = bmr * toNum(v.activity)
    return {
      bmr: `${fmtNum(bmr, 0)} cal/day`,
      tdee: `${fmtNum(tdee, 0)} cal/day`,
      lose: `${fmtNum(tdee - 250, 0)} cal/day`,
      gain: `${fmtNum(tdee + 250, 0)} cal/day`,
    }
  },
  note: '🔥 BMR = calories burned at complete rest. TDEE = total daily burn including activity. Eat less than TDEE to lose weight.',
})

export const BMRCalculatorClient = makeCalculatorClient({
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
  compute: (v) => {
    const w = toNum(v.weight)
    const h = toNum(v.height)
    const a = toNum(v.age)
    const bmr = v.gender === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161
    const bmi = w / Math.pow(h / 100, 2)
    return {
      bmr: `${fmtNum(bmr, 0)} calories/day`,
      bmi: fmtNum(bmi, 1),
    }
  },
  note: '⚛️ BMR = Basal Metabolic Rate. The minimum energy your body needs at complete rest.',
})

export const WaterIntakeCalculatorClient = makeCalculatorClient({
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
  compute: (v) => {
    const w = toNum(v.weight)
    const exercise = toNum(v.activity)
    // 基础 35ml/kg + 运动 12ml/min×30min
    let ml = w * 35 + exercise * 12
    if (v.climate === 'hot') ml *= 1.1
    const liters = ml / 1000
    return {
      liters: `${fmtNum(liters, 2)} liters/day`,
      cups: `${fmtNum(liters * 4, 1)} cups`,
      oz: `${fmtNum(liters * 33.814, 1)} oz`,
    }
  },
  note: '💧 General guideline: ~35 ml per kg body weight, more with exercise or heat. Individual needs vary.',
})

export const IdealWeightCalculatorClient = makeCalculatorClient({
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
    const inchesOver5ft = Math.max(0, (h - 152.4) / 2.54)
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
  compute: (v) => {
    const a = toNum(v.num1)
    const b = toNum(v.den1)
    const c = toNum(v.num2)
    const d = toNum(v.den2)
    if (b === 0 || d === 0) return { result: '⚠️ Denominator cannot be 0', decimal: '—' }
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
  inputs: [
    { key: 'a', label: 'A', default: '3' },
    { key: 'b', label: 'B', default: '4' },
    { key: 'c', label: 'C (or leave blank to solve)', default: '9' },
    { key: 'd', label: 'D (solved)', default: '' },
  ],
  outputs: [
    { key: 'ratio', label: 'A : B = C : D', highlight: true },
    { key: 'd', label: 'D = ' },
  ],
  compute: (v) => {
    const a = toNum(v.a)
    const b = toNum(v.b)
    const c = toNum(v.c)
    if (a === 0 || b === 0) return { ratio: '⚠️ A and B cannot be 0', d: '—' }
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
  inputs: [
    { key: 'numbers', label: 'Numbers (comma-separated)', default: '12, 18, 24' },
  ],
  outputs: [
    { key: 'gcd', label: 'GCD (greatest common divisor)', highlight: true },
    { key: 'lcm', label: 'LCM (least common multiple)' },
  ],
  compute: (v) => {
    const nums = (v.numbers || '')
      .split(/[\s,]+/)
      .map(Number)
      .filter((n) => Number.isInteger(n) && n > 0)
    if (nums.length === 0) return { gcd: '—', lcm: '—' }
    let g = nums[0]
    for (const n of nums.slice(1)) g = gcd(g, n)
    let l = nums[0]
    for (const n of nums.slice(1)) l = (l * n) / gcd(l, n)
    return { gcd: String(g), lcm: String(l) }
  },
  note: '🔢 GCD = largest number dividing all inputs. LCM = smallest number divisible by all inputs.',
})

// ── 金融类 ──

export const MarkupCalculatorClient = makeCalculatorClient({
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
  compute: (v) => {
    const home = toNum(v.home)
    const downPct = toNum(v.down)
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
  compute: (v) => {
    const initial = toNum(v.initial)
    const final = toNum(v.final)
    const years = toNum(v.years)
    const profit = final - initial
    const roi = initial > 0 ? (profit / initial) * 100 : 0
    const annualized = years > 0 && initial > 0
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
  compute: (v) => {
    let balance = toNum(v.balance)
    const monthlyRate = toNum(v.apr) / 100 / 12
    const payment = toNum(v.payment)
    const minInterest = balance * monthlyRate
    if (payment <= minInterest) {
      return {
        months: '⚠️ Payment too low (must cover interest)',
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
    return {
      months: `${months} months (${Math.ceil(months / 12)} yrs)`,
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
  inputs: [
    { key: 'income', label: 'Annual income', suffix: '$', default: '75000' },
    { key: 'filing', label: 'Filing status', default: 'single', options: [
      { label: 'Single', value: 'single' },
      { label: 'Married, filing jointly', value: 'married' },
    ]},
  ],
  outputs: [
    { key: 'tax', label: 'Estimated federal tax', highlight: true },
    { key: 'effective', label: 'Effective rate' },
    { key: 'takehome', label: 'Estimated take-home' },
  ],
  compute: (v) => {
    const income = toNum(v.income)
    // 简化的 2024 美国联邦税档次(单身/已婚)
    // 每档语义:[该档下限, 税率];最后一档无上限(适用于"下限"以上的全部收入)
    const brackets = v.filing === 'married'
      ? [[0, 0.10], [23200, 0.12], [94300, 0.22], [201050, 0.24], [383900, 0.32], [487450, 0.35], [731200, 0.37]]
      : [[0, 0.10], [11600, 0.12], [47150, 0.22], [100525, 0.24], [191950, 0.32], [243725, 0.35], [609350, 0.37]]
    let tax = 0
    for (let i = 0; i < brackets.length; i++) {
      const low = brackets[i][0] as number
      const rate = brackets[i][1] as number
      const high = i + 1 < brackets.length ? (brackets[i + 1][0] as number) : Infinity
      if (income > low) {
        // 本档应税额 = min(income, high) - low(末档 high=Infinity)
        tax += (Math.min(income, high) - low) * rate
      } else {
        break
      }
    }
    const effective = income > 0 ? (tax / income) * 100 : 0
    return {
      tax: fmtUSD(tax, 0),
      effective: `${fmtNum(effective, 1)}%`,
      takehome: fmtUSD(income - tax, 0),
    }
  },
  note: '📊 Simplified US 2024 federal brackets. Excludes state tax, deductions, and credits. Estimate only.',
  chart: {
    title: 'Where Your Income Goes',
    centerLabel: 'Income',
    slices: [
      { valueKey: 'tax', label: 'Federal tax', color: '#ef4444' },
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
