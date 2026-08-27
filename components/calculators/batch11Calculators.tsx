'use client'

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, fmtUSD, toNum, toNumStrict } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * 第十一批:2025-08 新增第二批(工厂配置驱动)
 * Fuel / Subscription / Overtime / Take-home / Wedding / Amortization
 * Heart-rate / Caffeine / Steps-to-calories / Paint / Dog-age
 */

// ── 油费计算器 ──
export const FuelCostCalculatorClient = makeCalculatorClient({
  slug: 'fuel-cost-calculator',
  urlState: true,
  inputs: [
    { key: 'distance', label: 'Distance', suffix: 'km', default: '450', slider: { min: 1, max: 3000, step: 10 } },
    { key: 'consumption', label: 'Consumption', suffix: 'L/100km', default: '7.5', slider: { min: 3, max: 20, step: 0.1 } },
    { key: 'price', label: 'Fuel price', suffix: '$/L', default: '1.65', slider: { min: 0.5, max: 3, step: 0.01 } },
    { key: 'people', label: 'Split between people', default: '1', slider: { min: 1, max: 10, step: 1 } },
    { key: 'roundTrip', label: 'Trip type', default: 'one', options: [
      { label: 'One way', value: 'one' },
      { label: 'Round trip (×2)', value: 'round' },
    ]},
  ],
  outputs: [
    { key: 'totalCost', label: 'Total fuel cost', highlight: true },
    { key: 'perPerson', label: 'Per person' },
    { key: 'liters', label: 'Fuel needed' },
    { key: 'per100', label: 'Cost per 100 km' },
  ],
  compute: (v, locale) => {
    const distance = toNum(v.distance)
    const consumption = toNum(v.consumption)
    const price = toNum(v.price)
    const people = Math.max(1, Math.round(toNum(v.people)))
    if (distance < 0 || consumption < 0 || price < 0) {
      return { totalCost: `⚠️ ${tui('fuel-cost-calculator', locale, 'errNonNegative', 'Values cannot be negative')}`, perPerson: '—', liters: '—', per100: '—' }
    }
    const dist = v.roundTrip === 'round' ? distance * 2 : distance
    const liters = (dist * consumption) / 100
    const total = liters * price
    return {
      totalCost: fmtUSD(total),
      perPerson: fmtUSD(total / people),
      liters: `${fmtNum(liters, 1)} L`,
      per100: fmtUSD(consumption * price),
    }
  },
  presets: [
    { label: 'Weekend getaway', values: { distance: '180', consumption: '7.5', price: '1.65', people: '2', roundTrip: 'round' } },
    { label: 'Weekly commute', values: { distance: '40', consumption: '9', price: '1.8', people: '1', roundTrip: 'round' } },
    { label: '1000 km road trip', values: { distance: '1000', consumption: '6.5', price: '1.7', people: '3', roundTrip: 'one' } },
  ],
  chart: { kind: 'compare', title: 'One way vs round trip' },
  compare: (v) => {
    const d = toNum(v.distance), c = toNum(v.consumption), p = toNum(v.price)
    if (!(d >= 0) || !(c >= 0) || !(p >= 0)) return null
    const cost = (dist: number) => (dist * c / 100) * p
    return {
      rows: [
        { label: 'One way', segments: [{ label: 'Fuel cost', value: cost(d), color: '#3b82f6' }] },
        { label: 'Round trip', segments: [{ label: 'Fuel cost', value: cost(d * 2), color: '#22c55e' }] },
      ],
      formatTotal: (n) => fmtUSD(n),
    }
  },
  note: '⛽ Highway driving typically beats city consumption by 20-30%; use your real-world average from the trip computer for accuracy. Metric and imperial users: enter km/L/price-per-liter or convert once.',
})

// ── 订阅支出计算器 ──
export const SubscriptionCostCalculatorClient = makeCalculatorClient({
  slug: 'subscription-cost-calculator',
  urlState: true,
  inputs: [
    { key: 'monthlySubs', label: 'Monthly subscriptions total', suffix: '$', default: '45', slider: { min: 0, max: 500, step: 5 } },
    { key: 'yearlySubs', label: 'Yearly subscriptions total', suffix: '$', default: '120', slider: { min: 0, max: 2000, step: 10 } },
    { key: 'quarterlySubs', label: 'Quarterly subscriptions total', suffix: '$', default: '0', slider: { min: 0, max: 600, step: 5 } },
  ],
  outputs: [
    { key: 'monthly', label: 'True monthly cost', highlight: true },
    { key: 'yearly', label: 'Yearly total' },
    { key: 'fiveYear', label: 'Over 5 years' },
    { key: 'workHours', label: 'Work-hours per year', sublabel: 'At $25/h after tax' },
  ],
  compute: (v, locale) => {
    const monthly = toNum(v.monthlySubs)
    const yearly = toNum(v.yearlySubs)
    const quarterly = toNum(v.quarterlySubs)
    if (monthly < 0 || yearly < 0 || quarterly < 0) {
      return { monthly: `⚠️ ${tui('subscription-cost-calculator', locale, 'errNonNegative', 'Values cannot be negative')}`, yearly: '—', fiveYear: '—', workHours: '—' }
    }
    const perMonth = monthly + yearly / 12 + quarterly / 3
    const perYear = perMonth * 12
    return {
      monthly: fmtUSD(perMonth),
      yearly: fmtUSD(perYear),
      fiveYear: fmtUSD(perYear * 5),
      workHours: `${fmtNum(perYear / 25, 0)} h`,
    }
  },
  chart: { kind: 'series', title: 'Total paid over time' },
  series: (v) => {
    const perMonth = toNum(v.monthlySubs) + toNum(v.yearlySubs) / 12 + toNum(v.quarterlySubs) / 3
    if (!(perMonth >= 0)) return null
    const marks = [0, 12, 24, 36, 48, 60]
    return {
      xLabels: ['Now', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5'],
      lines: [{ key: 'total', label: 'Total paid', color: '#3b82f6', points: marks.map((m) => perMonth * m), area: true }],
      formatY: (n) => fmtUSD(n),
    }
  },
  note: '💡 List every recurring charge: streaming, cloud storage, apps, gym, domains, news. The 5-year column is the honest price of "it is only $9.99 a month".',
})

// ── 加班费计算器 ──
export const OvertimeCalculatorClient = makeCalculatorClient({
  slug: 'overtime-calculator',
  inputs: [
    { key: 'base', label: 'Hourly rate', suffix: '$', default: '25', slider: { min: 5, max: 150, step: 0.5 } },
    { key: 'regularHours', label: 'Regular hours/week', suffix: 'h', default: '40', slider: { min: 0, max: 60, step: 1 } },
    { key: 'otMultiplier', label: 'OT multiplier', default: '1.5', options: [
      { label: 'Time-and-a-half (×1.5)', value: '1.5' },
      { label: 'Double time (×2)', value: '2' },
      // 不设 "custom" 档:下方并无自定义倍率输入框,选了只会静默落回 ×1.5
    ]},
    { key: 'otHours', label: 'Overtime hours/week', suffix: 'h', default: '8', slider: { min: 0, max: 40, step: 0.5 } },
  ],
  outputs: [
    { key: 'regularPay', label: 'Regular pay' },
    { key: 'otPay', label: 'Overtime pay' },
    { key: 'totalWeekly', label: 'Total weekly pay', highlight: true },
    { key: 'otRate', label: 'Effective OT rate' },
  ],
  compute: (v, locale) => {
    const rate = toNumStrict(v.base)
    const regH = toNum(v.regularHours)
    const otH = toNum(v.otHours)
    const mult = toNum(v.otMultiplier)
    // 错误串落在 highlight 输出(totalWeekly)上,工厂才会渲染红卡错误态
    if (isNaN(rate) || rate < 0) {
      return { regularPay: '—', otPay: '—', totalWeekly: `⚠️ ${tui('overtime-calculator', locale, 'errInvalidRate', 'Enter a valid hourly rate')}`, otRate: '—' }
    }
    if (regH < 0 || otH < 0) {
      return { regularPay: '—', otPay: '—', totalWeekly: `⚠️ ${tui('overtime-calculator', locale, 'errNonNegative', 'Values cannot be negative')}`, otRate: '—' }
    }
    const regPay = rate * regH
    const otRateV = rate * mult
    return {
      regularPay: fmtUSD(regPay),
      otPay: fmtUSD(otRateV * otH),
      totalWeekly: fmtUSD(regPay + otRateV * otH),
      otRate: `${fmtUSD(otRateV)} (×${mult})`,
    }
  },
  chart: {
    title: 'Weekly pay breakdown',
    slices: [
      { valueKey: 'regularPay', label: 'Regular pay', color: '#3b82f6' },
      { valueKey: 'otPay', label: 'Overtime pay', color: '#22c55e' },
    ],
    centerLabel: 'Total weekly',
  },
  note: '💼 US federal law (FLSA) requires ×1.5 past 40 h/week for non-exempt employees; some states mandate daily overtime and ×2 for holidays. Salaried non-exempt workers use regular rate ÷ 40.',
})

// ── 税后到手工资估算 ──
export const TakeHomePayCalculatorClient = makeCalculatorClient({
  slug: 'take-home-pay-calculator',
  urlState: true,
  inputs: [
    { key: 'gross', label: 'Annual gross salary', suffix: '$', default: '75000', slider: { min: 10000, max: 500000, step: 5000 } },
    { key: 'filing', label: 'Filing status', default: 'single', options: [
      { label: 'Single', value: 'single' },
      { label: 'Married filing jointly', value: 'married' },
    ]},
    { key: 'preTaxPct', label: '401(k)/pre-tax %', suffix: '%', default: '6', slider: { min: 0, max: 30, step: 1 } },
    { key: 'premiums', label: 'Health premiums/year', suffix: '$', default: '2000', slider: { min: 0, max: 15000, step: 250 } },
  ],
  outputs: [
    { key: 'annualNet', label: 'Estimated annual net', highlight: true },
    { key: 'perPaycheck', label: 'Per biweekly paycheck' },
    { key: 'fica', label: 'FICA (SS + Medicare)' },
    { key: 'fedTax', label: 'Federal income tax est.' },
  ],
  compute: (v, locale) => {
    const gross = toNumStrict(v.gross)
    if (isNaN(gross) || gross < 0) {
      return { annualNet: `⚠️ ${tui('take-home-pay-calculator', locale, 'errInvalidSalary', 'Enter a valid salary')}`, perPaycheck: '—', fica: '—', fedTax: '—' }
    }
    // 简化模型(2025 口径):standard deduction → brackets;FICA 固定税率
    const stdDeduction = v.filing === 'married' ? 30000 : 15000
    const preTaxPct = Math.min(Math.max(toNum(v.preTaxPct), 0), 100)
    const premiums = Math.max(toNum(v.premiums), 0)
    const preTax401k = gross * (preTaxPct / 100)
    const taxableIncome = Math.max(0, gross - stdDeduction - preTax401k - premiums)
    const bracketsSingle: [number, number][] = [[11850, 0.1], [48475, 0.12], [103350, 0.22], [197300, 0.24], [250525, 0.32], [626350, 0.35], [Infinity, 0.37]]
    const bracketsMarried: [number, number][] = [[23850, 0.1], [96950, 0.12], [206700, 0.22], [394600, 0.24], [501050, 0.32], [751600, 0.35], [Infinity, 0.37]]
    const brackets = v.filing === 'married' ? bracketsMarried : bracketsSingle
    let fed = 0
    let prev = 0
    for (const [cap, rate] of brackets) {
      if (taxableIncome > prev) {
        fed += (Math.min(taxableIncome, cap) - prev) * rate
        prev = cap
      } else break
    }
    // FICA:SS 上限 176,100(2025),Medicare 无上限
    const ssWages = Math.min(gross, 176100)
    const fica = ssWages * 0.062 + gross * 0.0145
    const net = gross - preTax401k - premiums - fed - fica
    return {
      annualNet: fmtUSD(net),
      perPaycheck: fmtUSD(net / 26),
      fica: fmtUSD(fica),
      fedTax: fmtUSD(fed),
    }
  },
  chart: {
    title: 'Where your salary goes',
    slices: [
      { valueKey: 'annualNet', label: 'Take-home pay', color: '#22c55e' },
      { valueKey: 'fedTax', label: 'Federal income tax', color: '#ef4444' },
      { valueKey: 'fica', label: 'FICA (SS + Medicare)', color: '#f59e0b' },
    ],
    centerLabel: 'Gross',
  },
  note: '🇺🇸 Simplified estimate: standard deduction only, no state tax, credits, or supplemental withholding — actual paychecks vary. FICA uses exact statutory rates (6.2% SS up to the wage base, 1.45% Medicare).',
})

// ── 婚礼预算分配 ──
export const WeddingBudgetCalculatorClient = makeCalculatorClient({
  slug: 'wedding-budget-calculator',
  inputs: [
    { key: 'total', label: 'Total budget', suffix: '$', default: '25000', slider: { min: 1000, max: 150000, step: 500 } },
    { key: 'guests', label: 'Guest count', default: '80', slider: { min: 10, max: 400, step: 5 } },
  ],
  outputs: [
    { key: 'venue', label: 'Venue & rentals (25%)' },
    { key: 'catering', label: 'Catering & bar (30%)' },
    { key: 'photo', label: 'Photo & video (15%)' },
    { key: 'attire', label: 'Attire & beauty (10%)' },
    { key: 'music', label: 'Music/DJ & flowers (10%)' },
    { key: 'misc', label: 'Stationery, favors & buffer (10%)' },
    { key: 'perGuest', label: 'Cost per guest', highlight: true },
  ],
  compute: (v, locale) => {
    const total = toNumStrict(v.total)
    const guests = Math.max(1, Math.round(toNum(v.guests)))
    if (isNaN(total) || total <= 0) {
      // 错误串须落在 highlight 输出(perGuest)上,工厂才会渲染红卡错误态
      return { venue: '—', catering: '—', photo: '—', attire: '—', music: '—', misc: '—', perGuest: `⚠️ ${tui('wedding-budget-calculator', locale, 'errInvalidBudget', 'Enter a valid budget')}` }
    }
    const pct = (p: number) => fmtUSD((total * p) / 100)
    return {
      venue: pct(25),
      catering: pct(30),
      photo: pct(15),
      attire: pct(10),
      music: pct(10),
      misc: pct(10),
      perGuest: fmtUSD(total / guests),
    }
  },
  chart: {
    title: 'Budget breakdown',
    slices: [
      { valueKey: 'venue', label: 'Venue & rentals', color: '#3b82f6' },
      { valueKey: 'catering', label: 'Catering & bar', color: '#22c55e' },
      { valueKey: 'photo', label: 'Photo & video', color: '#a855f7' },
      { valueKey: 'attire', label: 'Attire & beauty', color: '#ec4899' },
      { valueKey: 'music', label: 'Music & flowers', color: '#f59e0b' },
      { valueKey: 'misc', label: 'Stationery & buffer', color: '#64748b' },
    ],
    centerLabel: 'Total',
  },
  note: '💍 Percentages reflect common US planning guidance; venue+catering typically absorb over half. Per-guest cost is the lever that moves everything else — trimming 10 guests frees more than skipping favors.',
})

// ── 摊销明细表生成器(工厂输出 + 客户端表格)──


// ── 心率区间(Karvonen)──
export const HeartRateZoneCalculatorClient = makeCalculatorClient({
  slug: 'heart-rate-zone-calculator',
  inputs: [
    { key: 'age', label: 'Age', default: '30', slider: { min: 10, max: 100, step: 1 } },
    { key: 'resting', label: 'Resting heart rate', suffix: 'bpm', default: '60', slider: { min: 40, max: 100, step: 1 } },
  ],
  outputs: [
    { key: 'max', label: 'Est. max heart rate' },
    { key: 'z1', label: 'Zone 1 · Recovery', sublabel: '50-60% HRR' },
    { key: 'z2', label: 'Zone 2 · Aerobic base', highlight: true, sublabel: '60-70% HRR' },
    { key: 'z3', label: 'Zone 3 · Tempo', sublabel: '70-80% HRR' },
    { key: 'z4', label: 'Zone 4 · Threshold', sublabel: '80-90% HRR' },
    { key: 'z5', label: 'Zone 5 · VO2 max', sublabel: '90-100% HRR' },
  ],
  compute: (v, locale) => {
    const age = toNum(v.age)
    const resting = toNum(v.resting)
    if (!Number.isInteger(age) || age < 10 || age > 100 || resting < 30 || resting > 120) {
      // 错误串须落在 highlight 输出(z2)上,工厂才会渲染红卡错误态
      return { max: '—', z1: '—', z2: '⚠️ Enter a valid age (10-100) and resting HR (30-120)', z3: '—', z4: '—', z5: '—' }
    }
    const max = 220 - age
    const zone = (lo: number, hi: number) =>
      `${Math.round(resting + (max - resting) * lo)}–${Math.round(resting + (max - resting) * hi)} bpm`
    return {
      max: `${max} bpm`,
      z1: zone(0.5, 0.6),
      z2: zone(0.6, 0.7),
      z3: zone(0.7, 0.8),
      z4: zone(0.8, 0.9),
      z5: `${Math.round(resting + (max - resting) * 0.9)}–${max} bpm`,
    }
  },
  chart: { kind: 'series', title: 'Training zone ladder' },
  series: (v) => {
    const age = toNum(v.age), resting = toNum(v.resting)
    if (!Number.isInteger(age) || age < 10 || age > 100 || resting < 30 || resting > 120) return null
    const max = 220 - age
    const at = (p: number) => Math.round(resting + (max - resting) * p)
    const edges = [0.5, 0.6, 0.7, 0.8, 0.9, 1]
    return {
      xLabels: ['Z1', 'Z2', 'Z3', 'Z4', 'Z5'],
      lines: [
        { key: 'lower', label: 'Zone lower bound', color: '#3b82f6', points: edges.slice(0, 5).map((e) => at(e)) },
        { key: 'upper', label: 'Zone upper bound', color: '#22c55e', points: edges.slice(1).map((e) => at(e)), area: true },
      ],
      formatY: (n) => `${Math.round(n)} bpm`,
    }
  },
  note: '❤️ Karvonen zones use heart-rate reserve (max − resting), which personalizes intensity far better than raw % of max. Measure resting HR right after waking. Zone 2 builds aerobic base — most training time belongs there.',
})

// ── 咖啡因体内残留 ──
export const CaffeineCalculatorClient = makeCalculatorClient({
  slug: 'caffeine-calculator',
  inputs: [
    { key: 'mg', label: 'Caffeine consumed', suffix: 'mg', default: '200', slider: { min: 25, max: 600, step: 25 } },
    { key: 'hoursAgo', label: 'Hours since drinking it', suffix: 'h', default: '3', slider: { min: 0, max: 12, step: 0.5 } },
    { key: 'bedtimeIn', label: 'Hours until bed', suffix: 'h', default: '8', slider: { min: 0, max: 16, step: 0.5 } },
  ],
  outputs: [
    { key: 'now', label: 'In your system now', highlight: true },
    { key: 'atBed', label: 'At bedtime' },
    { key: 'halfLifeLeft', label: 'Half-lives elapsed' },
    { key: 'advice', label: 'Sleep impact' },
  ],
  compute: (v, locale) => {
    const mg = toNumStrict(v.mg)
    const hoursAgo = toNum(v.hoursAgo)
    const bedIn = toNum(v.bedtimeIn)
    if (isNaN(mg) || mg < 0 || hoursAgo < 0 || bedIn < 0) {
      return { now: `⚠️ ${tui('caffeine-calculator', locale, 'errNonNegative', 'Values cannot be negative')}`, atBed: '—', halfLifeLeft: '—', advice: '—' }
    }
    // 平均半衰期 ~5 小时(个体 3-7h)
    const nowMg = mg * Math.pow(0.5, hoursAgo / 5)
    const bedMg = mg * Math.pow(0.5, bedIn / 5)
    const advice =
      bedMg >= 100 ? 'Likely to disturb sleep — consider cutting this dose next time'
      : bedMg >= 50 ? 'Borderline: sensitive sleepers may feel it'
      : 'Low enough for most people to sleep normally'
    return {
      now: `${fmtNum(nowMg, 0)} mg`,
      atBed: `${fmtNum(bedMg, 0)} mg`,
      halfLifeLeft: `${fmtNum(hoursAgo / 5, 1)} half-lives`,
      advice,
    }
  },
  chart: {
    kind: 'gauge',
    title: 'Caffeine in your system now',
    valueKey: 'now',
    min: 0,
    max: 600,
    zones: [
      { upTo: 100, color: '#22c55e', label: 'Light' },
      { upTo: 200, color: '#eab308', label: 'Moderate' },
      { upTo: 400, color: '#f97316', label: 'High' },
      { upTo: 600, color: '#ef4444', label: 'Very high' },
    ],
    formatValue: (n) => `${Math.round(n)} mg`,
  },
  note: '☕ Half-life averages ~5 hours but ranges 3-7 (smokers clear faster, oral contraceptives slower). Coffee ≈95 mg/cup, tea ≈47, cola ≈34, energy drinks ≈80-300. Sensitivity varies widely by genetics (CYP1A2).',
})

// ── 步数换卡路里 ──
export const StepsToCaloriesCalculatorClient = makeCalculatorClient({
  slug: 'steps-to-calories-calculator',
  urlState: true,
  inputs: [
    { key: 'steps', label: 'Daily steps', default: '10000', slider: { min: 0, max: 30000, step: 500 } },
    { key: 'weight', label: 'Weight', suffix: 'kg', default: '70', slider: { min: 30, max: 200, step: 1 } },
    { key: 'height', label: 'Height', suffix: 'cm', default: '175', slider: { min: 120, max: 220, step: 1 } },
    { key: 'pace', label: 'Walking pace', default: 'moderate', options: [
      { label: 'Slow stroll (≈3 km/h)', value: 'slow' },
      { label: 'Moderate walk (≈5 km/h)', value: 'moderate' },
      { label: 'Brisk walk (≈6.5 km/h)', value: 'brisk' },
    ]},
  ],
  outputs: [
    { key: 'calories', label: 'Calories burned', highlight: true },
    { key: 'distanceKm', label: 'Distance' },
    { key: 'distanceMi', label: 'Distance (miles)' },
    { key: 'minutes', label: 'Active minutes' },
  ],
  compute: (v, locale) => {
    const steps = toNum(v.steps)
    const weight = toNum(v.weight)
    const height = toNum(v.height)
    if (steps < 0 || weight <= 0 || height <= 0) {
      return { calories: `⚠️ ${tui('steps-to-calories-calculator', locale, 'errInvalid', 'Enter positive values')}`, distanceKm: '—', distanceMi: '—', minutes: '—' }
    }
    // 步长 ≈ 身高 × 0.414(步行);速度→MET:slow 2.8 / moderate 3.5 / brisk 5.0
    const strideM = (height / 100) * 0.414
    const km = (steps * strideM) / 1000
    const met = v.pace === 'slow' ? 2.8 : v.pace === 'brisk' ? 5.0 : 3.5
    const speedKmh = v.pace === 'slow' ? 3 : v.pace === 'brisk' ? 6.5 : 5
    const hours = km / speedKmh
    const kcal = met * weight * hours
    return {
      calories: `${fmtNum(kcal, 0)} kcal`,
      distanceKm: `${fmtNum(km, 2)} km`,
      distanceMi: `${fmtNum(km / 1.609344, 2)} mi`,
      minutes: `${Math.round(hours * 60)} min`,
    }
  },
  chart: { kind: 'compare', title: 'Steps vs daily goal' },
  compare: (v) => {
    const steps = toNum(v.steps)
    if (!(steps >= 0)) return null
    const done = Math.min(steps, 10000)
    return {
      rows: [
        { label: 'Your day', segments: [
          { label: 'Steps done', value: done, color: '#22c55e' },
          { label: 'To goal', value: Math.max(0, 10000 - done), color: '#cbd5e1' },
        ] },
        { label: 'Daily goal', segments: [{ label: 'Goal', value: 10000, color: '#3b82f6' }] },
      ],
      formatTotal: (n) => `${Math.round(n).toLocaleString('en-US')}`,
    }
  },
  note: '👟 Estimates via MET method (2011 Compendium). Fitness trackers often read high because they credit all movement including BMR overlap. 10,000 steps ≈ 7-8 km for average adults.',
})

// ── 油漆用量 ──
export const PaintCalculatorClient = makeCalculatorClient({
  slug: 'paint-calculator',
  urlState: true,
  inputs: [
    { key: 'perimeter', label: 'Room perimeter', suffix: 'm', default: '14', slider: { min: 4, max: 60, step: 0.5 } },
    { key: 'wallHeight', label: 'Wall height', suffix: 'm', default: '2.4', slider: { min: 2, max: 4.5, step: 0.1 } },
    { key: 'doors', label: 'Doors', default: '2', slider: { min: 0, max: 8, step: 1 } },
    { key: 'windows', label: 'Windows', default: '2', slider: { min: 0, max: 10, step: 1 } },
    { key: 'coats', label: 'Coats', default: '2', slider: { min: 1, max: 4, step: 1 } },
    { key: 'unit', label: 'Paint sold in', default: 'liter', options: [
      { label: 'Liters', value: 'liter' },
      { label: 'US gallons', value: 'gallon' },
    ]},
  ],
  outputs: [
    { key: 'paintNeeded', label: 'Paint to buy', highlight: true },
    { key: 'wallArea', label: 'Paintable wall area' },
    { key: 'cans', label: 'Standard cans/buckets' },
    { key: 'assumption', label: 'Coverage assumption' },
  ],
  compute: (v, locale) => {
    const perimeter = toNum(v.perimeter)
    const height = toNum(v.wallHeight)
    const doors = Math.max(0, toNum(v.doors))
    const windows = Math.max(0, toNum(v.windows))
    const coats = Math.min(Math.max(1, Math.round(toNum(v.coats))), 4)
    if (perimeter <= 0 || height <= 0) {
      return { paintNeeded: `⚠️ ${tui('paint-calculator', locale, 'errInvalidDims', 'Enter valid room dimensions')}`, wallArea: '—', cans: '—', assumption: '—' }
    }
    // 开口扣除:门 1.85 m²、窗 1.4 m²;涂布率 10 m²/L(≈400 sq ft/gal 一遍)
    const grossArea = perimeter * height
    const netArea = Math.max(0, grossArea - doors * 1.85 - windows * 1.4)
    const paintLiters = (netArea * coats) / 10
    const buyLiters = Math.ceil(paintLiters * 1.1) // 10% 余量
    return {
      paintNeeded: v.unit === 'gallon' ? `${fmtNum(buyLiters / 3.78541, 1)} gal` : `${buyLiters} L`,
      wallArea: `${fmtNum(netArea, 1)} m² × ${coats} coats`,
      cans: v.unit === 'gallon'
        ? `${Math.ceil(buyLiters / 3.78541)} gallon can(s)`
        : `${Math.ceil(buyLiters / 2.5)} × 2.5 L bucket(s)`,
      assumption: '10 m²/L (400 ft²/gal), +10% margin',
    }
  },
  chart: { kind: 'compare', title: 'Exact need vs what to buy' },
  compare: (v) => {
    const per = toNum(v.perimeter), h = toNum(v.wallHeight)
    const doors = Math.max(0, toNum(v.doors)), windows = Math.max(0, toNum(v.windows))
    const coats = Math.min(Math.max(1, Math.round(toNum(v.coats))), 4)
    if (!(per > 0) || !(h > 0)) return null
    const net = Math.max(0, per * h - doors * 1.85 - windows * 1.4)
    const exact = (net * coats) / 10
    const buy = Math.ceil(exact * 1.1)
    return {
      rows: [
        { label: 'Exact need', segments: [{ label: 'Liters', value: exact, color: '#3b82f6' }] },
        { label: 'Buy (with margin)', segments: [{ label: 'Liters', value: buy, color: '#f59e0b' }] },
      ],
      formatTotal: (n) => `${n.toFixed(1)} L`,
    }
  },
  note: '🎨 Coverage assumes smooth primed walls at the typical 10 m²/L. Textured surfaces, bare drywall, or dramatic color changes eat 20-40% more. Buy one can from the same batch — batch tinting varies.',
})

// ── 狗龄换算(AVMA 尺寸分段曲线)──
export const DogAgeCalculatorClient = makeCalculatorClient({
  slug: 'dog-age-calculator',
  inputs: [
    { key: 'dogAge', label: 'Dog\'s age', suffix: 'years', default: '5', slider: { min: 0, max: 20, step: 0.5 } },
    { key: 'size', label: 'Breed size', default: 'medium', options: [
      { label: 'Small (< 9 kg / 20 lb)', value: 'small' },
      { label: 'Medium (9-23 kg)', value: 'medium' },
      { label: 'Large (> 23 kg / 50 lb)', value: 'large' },
    ]},
  ],
  outputs: [
    { key: 'humanAge', label: 'Rough human-equivalent age', highlight: true },
    { key: 'lifeStage', label: 'Life stage' },
    { key: 'mythNote', label: 'About the ×7 rule' },
  ],
  compute: (v, locale) => {
    const dogAge = toNum(v.dogAge)
    if (dogAge < 0 || dogAge > 30) {
      return { humanAge: `⚠️ ${tui('dog-age-calculator', locale, 'errInvalidAge', 'Enter an age between 0 and 30 years')}`, lifeStage: '—', mythNote: '—' }
    }
    // AVMA 共识曲线:第一年 ≈ 15 人岁,第二年 +9,之后小型每年 +4,中型 +5,大型 +6-7
    let human: number
    if (dogAge <= 1) human = dogAge * 15
    else if (dogAge <= 2) human = 15 + (dogAge - 1) * 9
    else {
      const perYear = v.size === 'small' ? 4 : v.size === 'large' ? 6.5 : 5
      human = 24 + (dogAge - 2) * perYear
    }
    const stage =
      dogAge < 1 ? 'Puppy' :
      dogAge < 2 ? 'Junior' :
      human < 40 ? 'Adult (prime)' :
      human < 55 ? 'Mature' : 'Senior'
    return {
      humanAge: `${fmtNum(human, 0)} human years`,
      lifeStage: stage,
      mythNote: 'The ×7 rule ignores maturation pace',
    }
  },
  chart: {
    kind: 'gauge',
    title: 'Life stage',
    valueKey: 'humanAge',
    min: 0,
    max: 80,
    zones: [
      { upTo: 15, color: '#f97316', label: 'Puppy' },
      { upTo: 24, color: '#f59e0b', label: 'Junior' },
      { upTo: 40, color: '#22c55e', label: 'Adult (prime)' },
      { upTo: 56, color: '#3b82f6', label: 'Mature' },
      { upTo: 80, color: '#a855f7', label: 'Senior' },
    ],
    formatValue: (n) => `${Math.round(n)} yr`,
  },
  note: '🐶 First-year dogs hit teenager-level maturity (~15 human years) and are adult by two — impossible under ×7. Large breeds age faster after that and reach senior status years earlier than toys.',
})
