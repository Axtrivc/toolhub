'use client'

/**
 * 第二十六批(B6 健身与身体指标,2026-10)
 *  - one-rep-max-calculator:重量×次数 → Epley/Brzycki/Lander 多公式 1RM + 训练重量表
 *  - race-time-predictor:近期比赛 → Riegel(1.06)预测 5K~全马与等效配速
 *  - vo2-max-calculator:Cooper 12 分钟跑 + 静息心率法两条口径
 *  - body-surface-area-calculator:Mosteller 与 DuBois BSA
 *  - waist-to-height-ratio-calculator:WHtR 与健康风险分级
 *  - steps-to-miles-calculator:步数 → 英里/公里与步行时长(纯距离换算)
 *  - weight-loss-goal-calculator:目标体重 → 缺口/周数/达成日期曲线
 *  - fiber-intake-calculator:年龄+性别 → 每日纤维目标与食物等价
 * 均基于 makeCalculatorClient 配置驱动。
 */

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, toNum, toNumStrict } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n-accessors/calculators/batch26Calculators'
import { OneRepMaxCalculatorL10n } from '@/lib/i18n/tools-l10n/one-rep-max-calculator'
import { RaceTimePredictorL10n } from '@/lib/i18n/tools-l10n/race-time-predictor'
import { Vo2MaxCalculatorL10n } from '@/lib/i18n/tools-l10n/vo2-max-calculator'
import { BodySurfaceAreaCalculatorL10n } from '@/lib/i18n/tools-l10n/body-surface-area-calculator'
import { WaistToHeightRatioCalculatorL10n } from '@/lib/i18n/tools-l10n/waist-to-height-ratio-calculator'
import { StepsToMilesCalculatorL10n } from '@/lib/i18n/tools-l10n/steps-to-miles-calculator'
import { WeightLossGoalCalculatorL10n } from '@/lib/i18n/tools-l10n/weight-loss-goal-calculator'
import { FiberIntakeCalculatorL10n } from '@/lib/i18n/tools-l10n/fiber-intake-calculator'

/** 分钟数 → m:ss / h:mm:ss(比赛时间与配速通用) */
function fmtClock(totalMinutes: number): string {
  const total = Math.round(totalMinutes * 60)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  const pad = (n: number) => String(n).padStart(2, '0')
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`
}

// ───────────────────────────────────────────
// One Rep Max Calculator(Epley / Brzycki / Lander)
// ───────────────────────────────────────────
export const OneRepMaxCalculatorClient = makeCalculatorClient({
  slug: 'one-rep-max-calculator',
  l10n: OneRepMaxCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'weight', label: 'Weight lifted', default: '100', slider: { min: 1, max: 400, step: 2.5 } },
    { key: 'reps', label: 'Reps completed', default: '5', slider: { min: 1, max: 12, step: 1 } },
    { key: 'unit', label: 'Unit', default: 'kg', options: [
      { label: 'Kilograms (kg)', value: 'kg' },
      { label: 'Pounds (lb)', value: 'lb' },
    ]},
  ],
  outputs: [
    { key: 'epley', label: 'Epley 1RM', highlight: true, sublabel: 'w × (1 + reps/30)' },
    { key: 'brzycki', label: 'Brzycki 1RM' },
    { key: 'lander', label: 'Lander 1RM' },
    { key: 'avg', label: 'Average of three' },
    { key: 'w90', label: '90% of 1RM', sublabel: 'Heavy singles & doubles' },
    { key: 'w80', label: '80% of 1RM', sublabel: 'Strength: 3-5 reps' },
    { key: 'w70', label: '70% of 1RM', sublabel: 'Hypertrophy: 8-12 reps' },
    { key: 'w60', label: '60% of 1RM', sublabel: 'Speed work & warm-ups' },
  ],
  compute: (v, locale) => {
    const w = toNumStrict(v.weight)
    const reps = toNum(v.reps)
    const unit = v.unit === 'lb' ? 'lb' : 'kg'
    if (!(w > 0) || !Number.isInteger(reps) || reps < 1 || reps > 12) {
      return {
        epley: `⚠️ ${tui('one-rep-max-calculator', locale, 'errInvalid', 'Enter a positive weight and 1-12 reps')}`,
        brzycki: '—', lander: '—', avg: '—', w90: '—', w80: '—', w70: '—', w60: '—',
      }
    }
    const epley = w * (1 + reps / 30)
    const brzycki = (w * 36) / (37 - reps)
    const lander = w / (1.0278 - 0.0278 * reps)
    const avg = (epley + brzycki + lander) / 3
    const pct = (p: number) => `${fmtNum(avg * p, 1)} ${unit}`
    return {
      epley: `${fmtNum(epley, 1)} ${unit}`,
      brzycki: `${fmtNum(brzycki, 1)} ${unit}`,
      lander: `${fmtNum(lander, 1)} ${unit}`,
      avg: `${fmtNum(avg, 1)} ${unit}`,
      w90: pct(0.9),
      w80: pct(0.8),
      w70: pct(0.7),
      w60: pct(0.6),
    }
  },
  chart: { kind: 'series', title: 'Training weight ladder' },
  series: (v) => {
    const w = toNumStrict(v.weight)
    const reps = toNum(v.reps)
    if (!(w > 0) || !Number.isInteger(reps) || reps < 1 || reps > 12) return null
    const epley = w * (1 + reps / 30)
    const brzycki = (w * 36) / (37 - reps)
    const lander = w / (1.0278 - 0.0278 * reps)
    const avg = (epley + brzycki + lander) / 3
    const pcts = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50]
    const unit = v.unit === 'lb' ? 'lb' : 'kg'
    return {
      xLabels: pcts.map((p) => `${p}%`),
      lines: [{ key: 'weight', label: 'Working weight', color: '#3b82f6', points: pcts.map((p) => avg * (p / 100)), area: true }],
      // y 轴带单位(与 weight-loss 的 kg、steps 的 mi 同口径),随 kg/lb 切换
      formatY: (n) => `${n.toFixed(1)} ${unit}`,
    }
  },
  presets: [
    { label: 'Bench 5×5 top set', values: { weight: '80', reps: '5', unit: 'kg' } },
    { label: 'Squat heavy triple', values: { weight: '140', reps: '3', unit: 'kg' } },
    { label: 'Deadlift 8 reps', values: { weight: '160', reps: '8', unit: 'kg' } },
  ],
  note: '🏋️ Formulas assume a hard set stopped 1-2 reps shy of failure. Past ~10 reps Epley drifts high — take the lowest estimate for conservative programming, and only test a true 1RM with a spotter.',
})

// ───────────────────────────────────────────
// Race Time Predictor(Riegel 1.06)
// ───────────────────────────────────────────
const RIEGEL_DIST: Record<string, number> = { '5': 5, '10': 10, half: 21.0975, marathon: 42.195 }
export const RaceTimePredictorClient = makeCalculatorClient({
  slug: 'race-time-predictor',
  l10n: RaceTimePredictorL10n,
  urlState: true,
  inputs: [
    { key: 'dist', label: 'Recent race distance', default: '10', options: [
      { label: '5K', value: '5' },
      { label: '10K', value: '10' },
      { label: 'Half', value: 'half' },
      { label: 'Marathon', value: 'marathon' },
    ]},
    // max 6:6 小时开外是走跑结合全马的常见区间(多数赛事关门 6:00-6:30),
    // 滑杆应能表达主流输入;更慢的手输仍有效
    { key: 'hours', label: 'Hours', default: '0', slider: { min: 0, max: 6, step: 1 } },
    { key: 'minutes', label: 'Minutes', default: '50', slider: { min: 0, max: 59, step: 1 } },
    { key: 'seconds', label: 'Seconds', default: '0', slider: { min: 0, max: 59, step: 1 } },
    { key: 'target', label: 'Predict for', default: 'marathon', options: [
      { label: '5K', value: '5' },
      { label: '10K', value: '10' },
      { label: 'Half', value: 'half' },
      { label: 'Marathon', value: 'marathon' },
    ]},
  ],
  outputs: [
    { key: 'predicted', label: 'Predicted time', highlight: true, sublabel: 'Riegel exponent 1.06' },
    { key: 'pace', label: 'Goal pace', sublabel: 'min/km at target' },
    { key: 'pred5k', label: 'Equivalent 5K' },
    { key: 'pred10k', label: 'Equivalent 10K' },
    { key: 'predHalf', label: 'Equivalent half' },
    { key: 'predMara', label: 'Equivalent marathon' },
  ],
  compute: (v, locale) => {
    const h = toNum(v.hours), m = toNum(v.minutes), s = toNum(v.seconds)
    const t1 = h + m / 60 + s / 3600
    const d1 = RIEGEL_DIST[v.dist] ?? 10
    if (!(t1 > 0) || h < 0 || m < 0 || s < 0) {
      return {
        predicted: `⚠️ ${tui('race-time-predictor', locale, 'errInvalid', 'Finish time must be above zero')}`,
        pace: '—', pred5k: '—', pred10k: '—', predHalf: '—', predMara: '—',
      }
    }
    const predict = (d2: number) => t1 * Math.pow(d2 / d1, 1.06)
    const dTarget = RIEGEL_DIST[v.target] ?? 42.195
    return {
      predicted: fmtClock(predict(dTarget)),
      pace: `${fmtClock(predict(dTarget) / dTarget)} /km`,
      pred5k: fmtClock(predict(5)),
      pred10k: fmtClock(predict(10)),
      predHalf: fmtClock(predict(21.0975)),
      predMara: fmtClock(predict(42.195)),
    }
  },
  chart: { kind: 'series', title: 'Equivalent times by distance' },
  series: (v, locale) => {
    const h = toNum(v.hours), m = toNum(v.minutes), s = toNum(v.seconds)
    const t1 = h + m / 60 + s / 3600
    const d1 = RIEGEL_DIST[v.dist] ?? 10
    if (!(t1 > 0) || h < 0 || m < 0 || s < 0) return null
    // x 轴距离标签复用 opt.dist.* 词典:zh 页不再出现英文 'Half'/'Marathon'
    const dl = (key: string, fb: string) => tui('race-time-predictor', locale, key, fb)
    return {
      xLabels: [
        dl('opt.dist.5', '5K'),
        dl('opt.dist.10', '10K'),
        dl('opt.dist.half', 'Half'),
        dl('opt.dist.marathon', 'Marathon'),
      ],
      lines: [{
        key: 'predicted', label: 'Predicted time', color: '#3b82f6',
        points: [5, 10, 21.0975, 42.195].map((d) => t1 * Math.pow(d / d1, 1.06)),
        area: true,
      }],
      formatY: (n) => fmtClock(n),
    }
  },
  presets: [
    { label: '10K → Marathon', values: { dist: '10', hours: '0', minutes: '50', seconds: '0', target: 'marathon' } },
    { label: '5K PR → 10K', values: { dist: '5', hours: '0', minutes: '22', seconds: '30', target: '10' } },
    { label: 'Half → Marathon', values: { dist: 'half', hours: '1', minutes: '45', seconds: '0', target: 'marathon' } },
  ],
  note: '📐 Riegel assumes equal fitness and real training for the new distance — jumping from a 5K to a marathon usually adds a 2-4% reality tax. Fueling and heat hit the longest races hardest.',
})

// ───────────────────────────────────────────
// VO2 Max(Cooper 12 分钟跑 + 静息心率法)
// ───────────────────────────────────────────
function vo2RatingKey(vo2: number): string {
  if (vo2 >= 60) return 'rate.exc'
  if (vo2 >= 52) return 'rate.vgood'
  if (vo2 >= 44) return 'rate.good'
  if (vo2 >= 36) return 'rate.fair'
  if (vo2 >= 28) return 'rate.poor'
  return 'rate.vpoor'
}
export const Vo2MaxCalculatorClient = makeCalculatorClient({
  slug: 'vo2-max-calculator',
  l10n: Vo2MaxCalculatorL10n,
  urlState: true,
  inputs: [
    // 滑杆范围对齐仪表盘 [15,70]:1200 m → VO₂ 15.5、3600 m → 69.2,
    // 拖到任意位置都不会撞上仪表 clamp(旧 max 5000 会算出 VO₂ 100 的
    // 不可能值,卡片与仪表大字互相矛盾);手输仍按 compute 的 400-8000 校验
    { key: 'distance', label: '12-minute run distance', suffix: 'm', default: '2400', slider: { min: 1200, max: 3600, step: 25 } },
    { key: 'hrmax', label: 'Max heart rate', suffix: 'bpm', default: '190', slider: { min: 140, max: 220, step: 1 } },
    { key: 'hrrest', label: 'Resting heart rate', suffix: 'bpm', default: '60', slider: { min: 40, max: 100, step: 1 } },
  ],
  outputs: [
    { key: 'vo2Cooper', label: 'VO₂ max (Cooper test)', highlight: true, sublabel: 'From 12-min distance' },
    { key: 'vo2Rest', label: 'VO₂ max (heart-rate method)', sublabel: '15.3 × HRmax ÷ HRrest' },
    { key: 'rating', label: 'Fitness rating', sublabel: 'Adult bands; vary by age & sex' },
    { key: 'pace12', label: '12-min run pace', sublabel: 'min/km' },
  ],
  compute: (v, locale) => {
    const d = toNumStrict(v.distance)
    const hrmax = toNum(v.hrmax)
    const hrrest = toNum(v.hrrest)
    if (!(d >= 400) || d > 8000 || hrmax < 100 || hrmax > 230 || hrrest < 30 || hrrest > 120) {
      return {
        vo2Cooper: `⚠️ ${tui('vo2-max-calculator', locale, 'errInvalid', 'Enter a run distance of 400-8,000 m, max HR 100-230, resting HR 30-120')}`,
        vo2Rest: '—', rating: '—', pace12: '—',
      }
    }
    const vo2Cooper = (d - 504.9) / 44.73
    const vo2Rest = (15.3 * hrmax) / hrrest
    const ratingKey = vo2RatingKey(vo2Cooper)
    const rating = tui('vo2-max-calculator', locale, ratingKey,
      ratingKey === 'rate.exc' ? 'Excellent' : ratingKey === 'rate.vgood' ? 'Very good' : ratingKey === 'rate.good' ? 'Good'
      : ratingKey === 'rate.fair' ? 'Fair' : ratingKey === 'rate.poor' ? 'Poor' : 'Very poor')
    return {
      vo2Cooper: `${fmtNum(vo2Cooper, 1)} ml/kg/min`,
      vo2Rest: `${fmtNum(vo2Rest, 1)} ml/kg/min`,
      rating,
      pace12: `${fmtClock(12 / (d / 1000))} /km`,
    }
  },
  chart: {
    kind: 'gauge',
    title: 'Your VO₂ max rating',
    valueKey: 'vo2Cooper',
    min: 15,
    max: 70,
    zones: [
      { upTo: 28, color: '#ef4444', label: 'Very poor' },
      { upTo: 36, color: '#f97316', label: 'Poor' },
      { upTo: 44, color: '#eab308', label: 'Fair' },
      { upTo: 52, color: '#22c55e', label: 'Good' },
      { upTo: 60, color: '#3b82f6', label: 'Very good' },
      { upTo: 70, color: '#a855f7', label: 'Excellent' },
    ],
    formatValue: (n) => n.toFixed(1),
  },
  presets: [
    { label: 'Solid runner', values: { distance: '2800', hrmax: '190', hrrest: '55' } },
    { label: 'Recreational', values: { distance: '2200', hrmax: '185', hrrest: '65' } },
    { label: 'Competitive', values: { distance: '3400', hrmax: '195', hrrest: '50' } },
  ],
  note: '🏃 Cooper: VO₂max = (distance − 504.9) ÷ 44.73 (meters). Heart-rate method (Uth-Sørensen): 15.3 × HRmax ÷ HRrest — quick but rough. Lab values and field estimates routinely differ by 3-5 ml/kg/min.',
})

// ───────────────────────────────────────────
// Body Surface Area(Mosteller / DuBois)
// ───────────────────────────────────────────
export const BodySurfaceAreaCalculatorClient = makeCalculatorClient({
  slug: 'body-surface-area-calculator',
  l10n: BodySurfaceAreaCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'height', label: 'Height', suffix: 'cm', default: '175', slider: { min: 120, max: 220, step: 1 } },
    { key: 'weight', label: 'Weight', suffix: 'kg', default: '70', slider: { min: 30, max: 200, step: 1 } },
  ],
  presets: [
    { label: 'Average adult', values: { height: '170', weight: '65' } },
    { label: 'Tall & heavy', values: { height: '190', weight: '100' } },
    { label: 'Smaller frame', values: { height: '155', weight: '48' } },
  ],
  outputs: [
    { key: 'mosteller', label: 'BSA — Mosteller', highlight: true, sublabel: '√(H × W ÷ 3600)' },
    { key: 'dubois', label: 'BSA — DuBois', sublabel: '0.007184 × H^0.725 × W^0.425' },
    { key: 'diff', label: 'Difference' },
    { key: 'cardiac', label: 'Cardiac index at 5 L/min', sublabel: 'CO ÷ BSA' },
  ],
  compute: (v, locale) => {
    const h = toNumStrict(v.height)
    const w = toNumStrict(v.weight)
    if (!(h > 0) || !(w > 0)) {
      return {
        mosteller: `⚠️ ${tui('body-surface-area-calculator', locale, 'errInvalid', 'Height and weight must be positive')}`,
        dubois: '—', diff: '—', cardiac: '—',
      }
    }
    const mosteller = Math.sqrt((h * w) / 3600)
    const dubois = 0.007184 * Math.pow(h, 0.725) * Math.pow(w, 0.425)
    return {
      mosteller: `${fmtNum(mosteller, 2)} m²`,
      dubois: `${fmtNum(dubois, 2)} m²`,
      // 两公式差值常在 0.001-0.05 m²:fmtNum 2 位小数会掉进 toExponential
      // 分支渲染成 "3.4810e-3 m²",故取 3 位小数保可读
      diff: `±${fmtNum(Math.abs(mosteller - dubois), 3)} m²`,
      cardiac: `${fmtNum(5 / ((mosteller + dubois) / 2), 2)} L/min/m²`,
    }
  },
  chart: { kind: 'compare', title: 'Mosteller vs DuBois' },
  compare: (v) => {
    const h = toNumStrict(v.height)
    const w = toNumStrict(v.weight)
    if (!(h > 0) || !(w > 0)) return null
    const mosteller = Math.sqrt((h * w) / 3600)
    const dubois = 0.007184 * Math.pow(h, 0.725) * Math.pow(w, 0.425)
    return {
      rows: [
        { label: 'Mosteller', segments: [{ label: 'BSA', value: mosteller, color: '#3b82f6' }] },
        { label: 'DuBois', segments: [{ label: 'BSA', value: dubois, color: '#22c55e' }] },
      ],
      formatTotal: (n) => `${n.toFixed(2)} m²`,
    }
  },
  note: '⚕️ Mosteller (1987) is the bedside standard — one line within ~2% of DuBois for most adults. BSA normalizes chemotherapy dosing (mg/m²), cardiac index (CO ÷ BSA, normal 2.5-4.0 L/min/m²), and renal function. Average adult ≈ 1.7-1.9 m².',
})

// ───────────────────────────────────────────
// Waist to Height Ratio
// ───────────────────────────────────────────
export const WaistToHeightRatioCalculatorClient = makeCalculatorClient({
  slug: 'waist-to-height-ratio-calculator',
  l10n: WaistToHeightRatioCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'waist', label: 'Waist circumference', suffix: 'cm', default: '85', slider: { min: 50, max: 180, step: 1 } },
    { key: 'height', label: 'Height', suffix: 'cm', default: '175', slider: { min: 120, max: 220, step: 1 } },
  ],
  presets: [
    { label: 'Healthy ≈ 0.45', values: { waist: '77', height: '170' } },
    { label: 'Increased ≈ 0.55', values: { waist: '94', height: '170' } },
    { label: 'High ≈ 0.65', values: { waist: '110', height: '170' } },
  ],
  outputs: [
    { key: 'whtr', label: 'Waist-to-height ratio', highlight: true, sublabel: 'Waist ÷ height' },
    { key: 'category', label: 'Health risk category' },
    { key: 'healthyWaist', label: 'Waist at WHtR 0.5', sublabel: 'Half your height' },
    { key: 'toTrim', label: 'To reach healthy range' },
  ],
  compute: (v, locale) => {
    const waist = toNumStrict(v.waist)
    const height = toNumStrict(v.height)
    if (!(waist > 0) || !(height > 0)) {
      return {
        whtr: `⚠️ ${tui('waist-to-height-ratio-calculator', locale, 'errInvalid', 'Waist and height must be above zero')}`,
        category: '—', healthyWaist: '—', toTrim: '—',
      }
    }
    const whtr = waist / height
    const catKey = whtr < 0.4 ? 'cat.slim' : whtr < 0.5 ? 'cat.healthy' : whtr < 0.6 ? 'cat.increased' : 'cat.high'
    const catFb = catKey === 'cat.slim' ? 'Slim — monitor overall nutrition'
      : catKey === 'cat.healthy' ? 'Healthy — keep it up'
      : catKey === 'cat.increased' ? 'Increased risk — act now'
      : 'High risk — talk to a professional'
    const toTrim = whtr <= 0.5
      ? tui('waist-to-height-ratio-calculator', locale, 'already', 'Already in the healthy range')
      : `${fmtNum(Math.max(0, waist - 0.5 * height), 1)} cm`
    return {
      whtr: whtr.toFixed(2),
      category: tui('waist-to-height-ratio-calculator', locale, catKey, catFb),
      healthyWaist: `${fmtNum(height / 2, 1)} cm`,
      toTrim,
    }
  },
  chart: {
    kind: 'gauge',
    title: 'Your WHtR on the scale',
    valueKey: 'whtr',
    // 刻度取 [0,1]:GaugeChart 端点标注走 Math.round,0.3/0.8 会被印成
    // "0"和"1"且指针位置与印出来的刻度对不上;0-1 刻度下 0.5 恰在正中,
    // 呼应"腰围不超过身高一半"的主张,红色高风险区由尾段延伸补满到 1
    min: 0,
    max: 1,
    zones: [
      { upTo: 0.4, color: '#38bdf8', label: 'Slim' },
      { upTo: 0.5, color: '#22c55e', label: 'Healthy' },
      { upTo: 0.6, color: '#f59e0b', label: 'Increased risk' },
      { upTo: 0.8, color: '#ef4444', label: 'High risk' },
    ],
    formatValue: (n) => n.toFixed(2),
  },
  note: '📏 Measure halfway between the bottom of the ribs and the top of the hip bone, after a normal exhale. "Keep your waist under half your height" — the 0.5 rule — tracks cardiometabolic risk better than BMI alone and needs no age or sex adjustment.',
})

// ───────────────────────────────────────────
// Steps to Miles(纯距离换算)
// ───────────────────────────────────────────
export const StepsToMilesCalculatorClient = makeCalculatorClient({
  slug: 'steps-to-miles-calculator',
  l10n: StepsToMilesCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'steps', label: 'Steps', default: '10000', slider: { min: 0, max: 30000, step: 100 } },
    { key: 'mode', label: 'Stride length', default: 'auto', options: [
      { label: 'From height', value: 'auto' },
      { label: 'Measured', value: 'manual' },
    ]},
    { key: 'height', label: 'Height', suffix: 'cm', default: '175', slider: { min: 120, max: 220, step: 1 } },
    { key: 'stride', label: 'Your stride length', suffix: 'cm', default: '72', slider: { min: 40, max: 120, step: 1 } },
    { key: 'pace', label: 'Walking pace', default: 'moderate', options: [
      { label: 'Slow', value: 'slow' },
      { label: 'Moderate', value: 'moderate' },
      { label: 'Brisk', value: 'brisk' },
    ]},
  ],
  outputs: [
    { key: 'miles', label: 'Distance', highlight: true, sublabel: 'miles' },
    { key: 'km', label: 'Distance (km)' },
    { key: 'perMile', label: 'Steps per mile' },
    { key: 'duration', label: 'Walking time', sublabel: 'At chosen pace' },
  ],
  compute: (v, locale) => {
    const steps = toNum(v.steps)
    const height = toNum(v.height)
    const stride = toNum(v.stride)
    const manual = v.mode === 'manual'
    const strideCm = manual ? stride : height * 0.414
    const invalid = steps < 0 || strideCm <= 0 || strideCm > 300 || (!manual && (height < 100 || height > 250))
    if (invalid) {
      return {
        miles: `⚠️ ${tui('steps-to-miles-calculator', locale, 'errInvalid', 'Enter positive values (height 100-250 cm in auto mode)')}`,
        km: '—', perMile: '—', duration: '—',
      }
    }
    const km = (steps * strideCm) / 100000
    const speedKmh = v.pace === 'slow' ? 3 : v.pace === 'brisk' ? 6.5 : 5
    const minutes = (km / speedKmh) * 60
    return {
      miles: `${fmtNum(km / 1.609344, 2)} mi`,
      km: `${fmtNum(km, 2)} km`,
      perMile: `${fmtNum(1609.344 / (strideCm / 100), 0)}`,
      duration: minutes >= 60
        ? `${Math.floor(minutes / 60)} h ${Math.round(minutes % 60)} min`
        : `${Math.round(minutes)} min`,
    }
  },
  chart: { kind: 'series', title: 'More steps, more distance' },
  series: (v) => {
    const height = toNum(v.height)
    const stride = toNum(v.stride)
    const manual = v.mode === 'manual'
    const strideCm = manual ? stride : height * 0.414
    if (strideCm <= 0 || strideCm > 300 || (!manual && (height < 100 || height > 250))) return null
    const marks = [2000, 4000, 6000, 8000, 10000, 12000]
    return {
      xLabels: marks.map((n) => (n / 1000).toLocaleString('en-US') + 'k'),
      lines: [{
        key: 'miles', label: 'Miles', color: '#3b82f6',
        points: marks.map((n) => (n * strideCm) / 100000 / 1.609344),
        area: true,
      }],
      formatY: (n) => `${n.toFixed(1)} mi`,
    }
  },
  presets: [
    { label: '10k steps day', values: { steps: '10000', mode: 'auto', height: '175', pace: 'moderate' } },
    { label: 'Sedentary day', values: { steps: '3000', mode: 'auto', height: '175', pace: 'slow' } },
    { label: 'Active 15k', values: { steps: '15000', mode: 'auto', height: '175', pace: 'brisk' } },
  ],
  note: '👟 Walking stride ≈ height × 0.414 (shorter than your running stride). For a true number, walk 10 normal-pace steps and divide the distance by 10. Pace bands: slow ≈3 km/h, moderate ≈5, brisk ≈6.5. Wrist trackers credit every arm swing — compare trends on the same device.',
})

// ───────────────────────────────────────────
// Weight Loss Goal(缺口 / 周数 / 达成日期)
// ───────────────────────────────────────────
export const WeightLossGoalCalculatorClient = makeCalculatorClient({
  slug: 'weight-loss-goal-calculator',
  l10n: WeightLossGoalCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'current', label: 'Current weight', suffix: 'kg', default: '85', slider: { min: 40, max: 250, step: 0.5 } },
    { key: 'goal', label: 'Goal weight', suffix: 'kg', default: '75', slider: { min: 40, max: 250, step: 0.5 } },
    { key: 'rate', label: 'Weekly loss rate', suffix: 'kg/week', default: '0.5', slider: { min: 0.1, max: 1.5, step: 0.05 } },
  ],
  outputs: [
    { key: 'toLose', label: 'Total to lose', sublabel: 'kg' },
    { key: 'weeks', label: 'Weeks to goal', highlight: true },
    { key: 'dailyDeficit', label: 'Daily calorie deficit', sublabel: '7,700 kcal per kg' },
    { key: 'goalDate', label: 'Goal date' },
    { key: 'safety', label: 'Pace check' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('weight-loss-goal-calculator', locale, key, fb)
    const current = toNumStrict(v.current)
    const goal = toNumStrict(v.goal)
    const rate = toNumStrict(v.rate)
    if (!(current > 0) || !(goal > 0) || !(rate > 0)) {
      return {
        toLose: '—',
        weeks: `⚠️ ${T('errInvalid', 'Enter positive weights and a rate above zero')}`,
        dailyDeficit: '—', goalDate: '—', safety: '—',
      }
    }
    if (goal >= current) {
      return {
        toLose: '—',
        weeks: `⚠️ ${T('errGoal', 'Goal weight must be below current weight (this tool covers loss only)')}`,
        dailyDeficit: '—', goalDate: '—', safety: '—',
      }
    }
    const toLose = current - goal
    const weeks = toLose / rate
    const deficit = (rate * 7700) / 7
    const wk = T('unit.wk', 'wk')
    let safety: string
    if (rate > 1) safety = `⚠️ ${T('pace.warn', 'Above 1 kg/week: muscle-loss and rebound risk climbs')}`
    else if (deficit > 1000) safety = `⚠️ ${T('pace.deficitWarn', 'Deficit exceeds 1,000 kcal — most people need to eat back exercise calories')}`
    else if (rate <= 0.25) safety = `✅ ${T('pace.gentle', 'Gentle pace — the easiest to sustain')}`
    else safety = `✅ ${T('pace.ok', 'Within the recommended 0.25-1 kg/week range')}`
    return {
      toLose: `${fmtNum(toLose, 1)} kg`,
      weeks: `${fmtNum(weeks, 1)} (${Math.ceil(weeks)} ${wk})`,
      dailyDeficit: `${fmtNum(deficit, 0)} kcal/day`,
      // 目标日期依赖"今天":SSR/首帧恒 '—',挂载后由 deriveNow 补齐
      goalDate: '—',
      safety,
    }
  },
  deriveNow: (v): Record<string, string> => {
    const current = toNumStrict(v.current)
    const goal = toNumStrict(v.goal)
    const rate = toNumStrict(v.rate)
    if (!(current > 0) || !(goal > 0) || !(rate > 0) || goal >= current) return {}
    const days = Math.round(((current - goal) / rate) * 7)
    const d = new Date()
    d.setDate(d.getDate() + days)
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    return { goalDate: iso }
  },
  chart: { kind: 'series', title: 'Week-by-week weight projection' },
  series: (v) => {
    const current = toNumStrict(v.current)
    const goal = toNumStrict(v.goal)
    const rate = toNumStrict(v.rate)
    if (!(current > 0) || !(goal > 0) || !(rate > 0) || goal >= current || rate > 3) return null
    const weeks = (current - goal) / rate
    const steps = Math.min(Math.max(Math.ceil(weeks), 2), 24)
    const stride = weeks / steps
    const xLabels: string[] = []
    const weight: number[] = []
    const goalLine: number[] = []
    for (let i = 0; i <= steps; i++) {
      // 步距 < 1 周时取 1 位小数,避免 Math.round 把相邻刻度撞成重复标签
      // (如 6.4 周计划 → W6/W6;不足 2 周的极短计划 → W0/W0/W0)
      const wk = i * stride
      xLabels.push(stride >= 1 ? `W${Math.round(wk)}` : `W${wk.toFixed(1)}`)
      weight.push(current - (current - goal) * (i / steps))
      goalLine.push(goal)
    }
    return {
      xLabels,
      lines: [
        { key: 'weight', label: 'Weight', color: '#3b82f6', points: weight, area: true },
        { key: 'goal', label: 'Goal weight', color: '#22c55e', points: goalLine, dashed: true },
      ],
      formatY: (n) => `${n.toFixed(1)} kg`,
    }
  },
  presets: [
    { label: 'Classic 10 kg @ 0.5', values: { current: '85', goal: '75', rate: '0.5' } },
    { label: 'Slow & steady', values: { current: '80', goal: '72', rate: '0.25' } },
    { label: 'Pre-summer push', values: { current: '90', goal: '82', rate: '0.75' } },
  ],
  note: '📉 7,700 kcal ≈ 1 kg of body fat is the working convention; real loss includes water and glycogen — the fast first two weeks are partly water. Deficits beyond 1,000 kcal/day get hard to sustain and cost muscle.',
})

// ───────────────────────────────────────────
// Fiber Intake(年龄 + 性别 → AI 目标 + 食物等价)
// ───────────────────────────────────────────
function fiberTargetFor(age: number, male: boolean): { grams: number; basisKey: string } {
  if (age <= 3) return { grams: 19, basisKey: 'basis.child1' }
  if (age <= 8) return { grams: 25, basisKey: 'basis.child2' }
  if (age <= 13) return male ? { grams: 31, basisKey: 'basis.boy9' } : { grams: 26, basisKey: 'basis.girl9' }
  if (age <= 18) return male ? { grams: 38, basisKey: 'basis.boy14' } : { grams: 26, basisKey: 'basis.girl9' }
  if (age <= 50) return male ? { grams: 38, basisKey: 'basis.m19' } : { grams: 25, basisKey: 'basis.f19' }
  return male ? { grams: 30, basisKey: 'basis.m51' } : { grams: 21, basisKey: 'basis.f51' }
}
const FIBER_BASIS_FALLBACK: Record<string, string> = {
  'basis.child1': 'Toddlers 1-3 years',
  'basis.child2': 'Children 4-8 years',
  'basis.boy9': 'Boys 9-13 years',
  'basis.boy14': 'Males 14-18 years',
  'basis.m19': 'Males 19-50 years',
  'basis.m51': 'Males 51+ years',
  'basis.girl9': 'Girls & women 9-18 years',
  'basis.f19': 'Women 19-50 years',
  'basis.f51': 'Women 51+ years',
}
export const FiberIntakeCalculatorClient = makeCalculatorClient({
  slug: 'fiber-intake-calculator',
  l10n: FiberIntakeCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'age', label: 'Age', default: '35', slider: { min: 1, max: 100, step: 1 } },
    { key: 'sex', label: 'Sex', default: 'male', options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ]},
  ],
  outputs: [
    { key: 'target', label: 'Daily fiber target', highlight: true, sublabel: 'Adequate Intake' },
    { key: 'basis', label: 'Based on' },
    { key: 'lentils', label: 'Cooked lentils', sublabel: '15.5 g per cup' },
    { key: 'raspberries', label: 'Raspberries', sublabel: '8 g per cup' },
    { key: 'chia', label: 'Chia seeds', sublabel: '4.1 g per tbsp' },
  ],
  compute: (v, locale) => {
    const age = toNum(v.age)
    if (!Number.isInteger(age) || age < 1 || age > 120) {
      return {
        target: `⚠️ ${tui('fiber-intake-calculator', locale, 'errInvalid', 'Enter an age between 1 and 120')}`,
        basis: '—', lentils: '—', raspberries: '—', chia: '—',
      }
    }
    const { grams, basisKey } = fiberTargetFor(age, v.sex !== 'female')
    return {
      target: `${fmtNum(grams, 0)} g/day`,
      basis: tui('fiber-intake-calculator', locale, basisKey, FIBER_BASIS_FALLBACK[basisKey]),
      lentils: `${fmtNum(grams / 15.5, 1)} cups`,
      raspberries: `${fmtNum(grams / 8, 1)} cups`,
      chia: `${fmtNum(grams / 4.1, 1)} tbsp`,
    }
  },
  chart: { kind: 'compare', title: 'What one serving contributes' },
  compare: (v) => {
    const age = toNum(v.age)
    if (!Number.isInteger(age) || age < 1 || age > 120) return null
    const { grams } = fiberTargetFor(age, v.sex !== 'female')
    return {
      rows: [
        { label: 'Daily target', segments: [{ label: 'Fiber grams', value: grams, color: '#3b82f6' }] },
        { label: 'Lentils 1 cup', segments: [{ label: 'Fiber grams', value: 15.5, color: '#22c55e' }] },
        { label: 'Raspberries 1 cup', segments: [{ label: 'Fiber grams', value: 8, color: '#ec4899' }] },
        { label: 'Chia 1 tbsp', segments: [{ label: 'Fiber grams', value: 4.1, color: '#a855f7' }] },
      ],
      formatTotal: (n) => `${n.toFixed(1)} g`,
    }
  },
  presets: [
    { label: 'Man in his 30s', values: { age: '35', sex: 'male' } },
    { label: 'Woman in her 60s', values: { age: '65', sex: 'female' } },
    { label: 'Teen boy', values: { age: '15', sex: 'male' } },
  ],
  note: '🥣 Targets are the IOM Adequate Intakes: 38 g for men 19-50, 25 g for women 19-50, stepping down after 51. Rule of thumb: 14 g per 1,000 kcal. Ramp up slowly and drink water — jumping 20 g overnight is a recipe for bloating.',
})
