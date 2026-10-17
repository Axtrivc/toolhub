'use client'

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, fmtPct, toNum, toNumStrict } from '@/lib/format'
import { tuiFromEntry } from '@/lib/i18n/tool-l10n-core'
import { QuadraticEquationSolverL10n } from '@/lib/i18n/tools-l10n/quadratic-equation-solver'
import { SlopeCalculatorL10n } from '@/lib/i18n/tools-l10n/slope-calculator'
import { ConfidenceIntervalCalculatorL10n } from '@/lib/i18n/tools-l10n/confidence-interval-calculator'
import { SampleSizeCalculatorL10n } from '@/lib/i18n/tools-l10n/sample-size-calculator'
import { ZScoreCalculatorL10n } from '@/lib/i18n/tools-l10n/z-score-calculator'
import { BayesTheoremCalculatorL10n } from '@/lib/i18n/tools-l10n/bayes-theorem-calculator'
import { HeatIndexCalculatorL10n } from '@/lib/i18n/tools-l10n/heat-index-calculator'
import { DewPointCalculatorL10n } from '@/lib/i18n/tools-l10n/dew-point-calculator'

/**
 * 第三十一批(B11 数学与统计):Quadratic / Slope / Confidence interval /
 * Sample size / Z score / Bayes / Heat index / Dew point
 *
 * compute 内需要本地化的提示串经 tuiFromEntry(L10n, ...) 直取 ——
 * 与 per-file accessor(makeRegistryTui)查表行为逐位一致,免额外生成 accessor。
 */

/** 通用数字格式:去掉尾随零(fmtNum(1.5000,4) → "1.5") */
const f = (n: number, d = 4) => fmtNum(n, d)

/** 标准正态 CDF —— Abramowitz & Stegun 26.2.17 有理近似,|误差| < 7.5e-8 */
function normCdf(z: number): number {
  const b1 = 0.319381530, b2 = -0.356563782, b3 = 1.781477937, b4 = -1.821255978, b5 = 1.330274429
  const pdf = (x: number) => Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI)
  const poly = (x: number) => {
    const t = 1 / (1 + 0.2316419 * x)
    return pdf(x) * ((((b5 * t + b4) * t + b3) * t + b2) * t + b1) * t
  }
  return z >= 0 ? 1 - poly(z) : poly(-z)
}

/** NWS Rothfusz 回归(含 1984 修正项与 <80°F 简式回退),T 为 °F,R 为相对湿度 % */
function rothfuszHI(tf: number, rh: number): number {
  const t2 = tf * tf, r2 = rh * rh
  let hi =
    -42.379 + 2.04901523 * tf + 10.14333127 * rh
    - 0.22475541 * tf * rh - 0.00683783 * t2 - 0.05481717 * r2
    + 0.00122874 * t2 * rh + 0.00085282 * tf * r2 - 0.00000199 * t2 * r2
  // 低湿度/高湿度低温度的 NWS 1984 修正(分支内 |tf−95| ≤ 17,根号安全)
  if (rh < 13 && tf >= 80 && tf <= 112) {
    hi -= ((13 - rh) / 4) * Math.sqrt((17 - Math.abs(tf - 95)) / 17)
  }
  if (rh > 85 && tf >= 80 && tf <= 87) {
    hi += ((rh - 85) / 10) * ((87 - tf) / 5)
  }
  // 简式(Steudel)与回归均值 < 80°F 时用简式(NWS 官方算法)
  const simple = 0.5 * (tf + 61.0 + (tf - 68.0) * 1.2 + rh * 0.094)
  if ((hi + simple) / 2 < 80) return simple
  return hi
}

// ── 一元二次方程求解器 ──
export const QuadraticEquationSolverClient = makeCalculatorClient({
  slug: 'quadratic-equation-solver',
  l10n: QuadraticEquationSolverL10n,
  sample: { a: '1', b: '-3', c: '2' },
  urlState: true,
  inputs: [
    { key: 'a', label: 'Coefficient a', default: '1', placeholder: 'x²', slider: { min: -5, max: 5, step: 0.5 } },
    { key: 'b', label: 'Coefficient b', default: '-3', placeholder: 'x', slider: { min: -10, max: 10, step: 0.5 } },
    { key: 'c', label: 'Coefficient c', default: '2', placeholder: 'constant', slider: { min: -10, max: 10, step: 0.5 } },
  ],
  outputs: [
    { key: 'x1', label: 'Root x₁', highlight: true },
    { key: 'x2', label: 'Root x₂' },
    { key: 'discriminant', label: 'Discriminant b² − 4ac' },
    { key: 'vertex', label: 'Vertex (h, k)' },
    { key: 'axis', label: 'Axis of symmetry' },
    { key: 'form', label: 'Factored / vertex form' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(QuadraticEquationSolverL10n, locale, k, fb)
    const a = toNumStrict(v.a), b = toNumStrict(v.b), c = toNumStrict(v.c)
    const blank = { x2: '—', discriminant: '—', vertex: '—', axis: '—', form: '—' }
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      return { x1: `⚠️ ${L('errNumeric', 'Enter numbers for a, b and c')}`, ...blank }
    }
    // a = 0:退化为一次方程
    if (a === 0) {
      if (b === 0) {
        return { x1: `⚠️ ${L('errDegenerate', 'a and b are both 0 — not an equation in x')}`, ...blank }
      }
      const x = -c / b
      return {
        x1: `${f(x)} (${L('linear', 'linear: single root')})`,
        x2: '—', discriminant: '—', vertex: '—', axis: '—',
        form: `${f(b)}x ${c >= 0 ? '+' : '−'} ${f(Math.abs(c))} = 0`,
      }
    }
    const disc = b * b - 4 * a * c
    const h = -b / (2 * a)
    const k = c - (b * b) / (4 * a)
    const signed = (root: number) => `x ${root >= 0 ? '−' : '+'} ${f(Math.abs(root))}`
    const lead = (coef: number) => (coef === 1 ? '' : coef === -1 ? '−' : `${f(coef)}`)
    const kSign = k >= 0 ? `+ ${f(k)}` : `− ${f(Math.abs(k))}`
    if (disc > 0) {
      const r1 = (-b + Math.sqrt(disc)) / (2 * a)
      const r2 = (-b - Math.sqrt(disc)) / (2 * a)
      return {
        x1: f(r1),
        x2: f(r2),
        discriminant: `${f(disc)} (${L('twoRoots', 'two real roots')})`,
        vertex: `(${f(h)}, ${f(k)})`,
        axis: `x = ${f(h)}`,
        form: `${lead(a)}(${signed(Math.max(r1, r2))})(${signed(Math.min(r1, r2))})`,
      }
    }
    if (disc === 0) {
      return {
        x1: f(h),
        x2: `${f(h)} (${L('doubleRoot', 'double root')})`,
        discriminant: `0 (${L('doubleRoot', 'double root')})`,
        vertex: `(${f(h)}, ${f(k)})`,
        axis: `x = ${f(h)}`,
        form: `${lead(a)}(${signed(h)})²`,
      }
    }
    const im = Math.sqrt(-disc) / (2 * a)
    const re = h
    return {
      x1: `${f(re)} + ${f(Math.abs(im))}i`,
      x2: `${f(re)} − ${f(Math.abs(im))}i`,
      discriminant: `${f(disc)} (${L('complexRoots', 'complex conjugate roots')})`,
      vertex: `(${f(h)}, ${f(k)})`,
      axis: `x = ${f(h)}`,
      form: `${lead(a)}(${signed(h)})² ${kSign}`,
    }
  },
  chart: { kind: 'series', title: 'The parabola y = ax² + bx + c' },
  series: (v) => {
    const a = toNum(v.a), b = toNum(v.b), c = toNum(v.c)
    if (a === 0 && b === 0) return null
    const h = a !== 0 ? -b / (2 * a) : 0
    const offs = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
    return {
      xLabels: offs.map((o) => f(h + o, 1)),
      lines: [
        { key: 'curve', label: 'y = ax² + bx + c', color: '#3b82f6', points: offs.map((o) => a * (h + o) ** 2 + b * (h + o) + c), area: true },
        { key: 'zero', label: 'y = 0', color: '#94a3b8', points: offs.map(() => 0), dashed: true },
      ],
    }
  },
  presets: [
    { label: 'Two real roots: x² − 3x + 2', values: { a: '1', b: '-3', c: '2' } },
    { label: 'Double root: x² − 4x + 4', values: { a: '1', b: '-4', c: '4' } },
    { label: 'Complex: x² + x + 1', values: { a: '1', b: '1', c: '1' } },
  ],
  note: '📐 The discriminant b² − 4ac decides everything: positive → two real roots, zero → one double root, negative → a complex conjugate pair. The vertex always sits at x = −b/2a, halfway between the roots when they exist (Vieta: x₁ + x₂ = −b/a, x₁·x₂ = c/a).',
})

// ── 斜率计算器 ──
export const SlopeCalculatorClient = makeCalculatorClient({
  slug: 'slope-calculator',
  l10n: SlopeCalculatorL10n,
  sample: { x1: '1', y1: '2', x2: '4', y2: '8' },
  urlState: true,
  inputs: [
    { key: 'x1', label: 'x₁', default: '1', slider: { min: -10, max: 10, step: 0.5 } },
    { key: 'y1', label: 'y₁', default: '2', slider: { min: -10, max: 10, step: 0.5 } },
    { key: 'x2', label: 'x₂', default: '4', slider: { min: -10, max: 10, step: 0.5 } },
    { key: 'y2', label: 'y₂', default: '8', slider: { min: -10, max: 10, step: 0.5 } },
  ],
  outputs: [
    { key: 'slope', label: 'Slope m', highlight: true },
    { key: 'intercept', label: 'Y-intercept b' },
    { key: 'angle', label: 'Inclination angle' },
    { key: 'equation', label: 'Line equation' },
    { key: 'perp', label: 'Perpendicular slope' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(SlopeCalculatorL10n, locale, k, fb)
    const x1 = toNumStrict(v.x1), y1 = toNumStrict(v.y1), x2 = toNumStrict(v.x2), y2 = toNumStrict(v.y2)
    const blank = { intercept: '—', angle: '—', equation: '—', perp: '—' }
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
      return { slope: `⚠️ ${L('errNumeric', 'Enter numbers for both points')}`, ...blank }
    }
    if (x1 === x2 && y1 === y2) {
      return { slope: `⚠️ ${L('errSamePoint', 'The two points are identical — slope is undefined')}`, ...blank }
    }
    if (x1 === x2) {
      return {
        slope: L('undefined', 'undefined (vertical line)'),
        intercept: '—',
        angle: '90°',
        equation: `x = ${f(x1)}`,
        perp: `0 (${L('horizontal', 'horizontal')})`,
      }
    }
    const m = (y2 - y1) / (x2 - x1)
    const b = y1 - m * x1
    const angle = (Math.atan(m) * 180) / Math.PI
    const mTerm = m === 1 ? 'x' : m === -1 ? '−x' : m === 0 ? '' : `${f(m)}x`
    const bTerm = m === 0 ? `${f(b)}` : b >= 0 ? `+ ${f(b)}` : `− ${f(Math.abs(b))}`
    return {
      slope: f(m),
      intercept: f(b),
      angle: `${f(angle, 2)}°`,
      equation: `y = ${mTerm}${bTerm}`,
      perp: m === 0 ? L('perpVertical', 'undefined (vertical line)') : f(-1 / m),
    }
  },
  chart: { kind: 'series', title: 'The line through your two points' },
  series: (v) => {
    const x1 = toNum(v.x1), y1 = toNum(v.y1), x2 = toNum(v.x2), y2 = toNum(v.y2)
    if (x1 === x2) return null
    const m = (y2 - y1) / (x2 - x1)
    const b = y1 - m * x1
    const lo = Math.min(x1, x2) - 2, hi = Math.max(x1, x2) + 2
    const xs = Array.from({ length: 9 }, (_, i) => lo + ((hi - lo) * i) / 8)
    return {
      xLabels: xs.map((x) => f(x, 1)),
      lines: [
        { key: 'line', label: 'y = mx + b', color: '#3b82f6', points: xs.map((x) => m * x + b), area: true },
        { key: 'zero', label: 'y = 0', color: '#94a3b8', points: xs.map(() => 0), dashed: true },
      ],
    }
  },
  presets: [
    { label: 'Gentle grade: (0, 0) → (100, 8)', values: { x1: '0', y1: '0', x2: '100', y2: '8' } },
    { label: 'Downhill: (2, 7) → (6, 3)', values: { x1: '2', y1: '7', x2: '6', y2: '3' } },
    { label: 'Roof-like 45°: (0, 0) → (5, 5)', values: { x1: '0', y1: '0', x2: '5', y2: '5' } },
  ],
  note: '📏 m = (y₂ − y₁)/(x₂ − x₁) is rise over run; b = y₁ − m·x₁ anchors the line. Parallel lines share m; perpendicular lines multiply to −1 (m⊥ = −1/m). A vertical segment has undefined slope, a horizontal one m = 0.',
})

// ── 置信区间计算器 ──
const Z_BY_LEVEL: Record<string, number> = { '90': 1.6449, '95': 1.96, '99': 2.5758 }

export const ConfidenceIntervalCalculatorClient = makeCalculatorClient({
  slug: 'confidence-interval-calculator',
  l10n: ConfidenceIntervalCalculatorL10n,
  sample: { mode: 'mean', mean: '4.2', sd: '1.1', n: '150', level: '95' },
  urlState: true,
  inputs: [
    { key: 'mode', label: 'Data type', default: 'mean', options: [
      { label: 'Mean (x̄, s, n)', value: 'mean' },
      { label: 'Proportion (p, n)', value: 'prop' },
    ]},
    { key: 'mean', label: 'Sample mean', default: '4.2', slider: { min: 0, max: 100, step: 1 } },
    { key: 'sd', label: 'Sample std. deviation', suffix: 's', default: '1.1', slider: { min: 0, max: 50, step: 0.1 } },
    { key: 'p', label: 'Sample proportion', suffix: '%', default: '55', slider: { min: 1, max: 99, step: 1 } },
    { key: 'n', label: 'Sample size', default: '150', slider: { min: 5, max: 2000, step: 5 } },
    { key: 'level', label: 'Confidence level', default: '95', options: [
      { label: '90% (z = 1.645)', value: '90' },
      { label: '95% (z = 1.96)', value: '95' },
      { label: '99% (z = 2.576)', value: '99' },
    ]},
  ],
  outputs: [
    { key: 'ci', label: 'Confidence interval', highlight: true },
    { key: 'moe', label: 'Margin of error' },
    { key: 'se', label: 'Standard error' },
    { key: 'z', label: 'Critical value z' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(ConfidenceIntervalCalculatorL10n, locale, k, fb)
    const n = toNumStrict(v.n)
    const z = Z_BY_LEVEL[v.level] ?? 1.96
    const blank = { moe: '—', se: '—', z: f(z, 3) }
    if (isNaN(n) || n < 2) {
      return { ci: `⚠️ ${L('errN', 'Sample size must be at least 2')}`, ...blank }
    }
    if (v.mode === 'prop') {
      const p = toNum(v.p)
      if (p < 0 || p > 100) {
        return { ci: `⚠️ ${L('errProp', 'Proportion must be between 0 and 100%')}`, ...blank }
      }
      const q = p / 100
      const se = Math.sqrt((q * (1 - q)) / n)
      const moe = z * se
      return {
        ci: `${fmtPct((q - moe) * 100, 1)} – ${fmtPct((q + moe) * 100, 1)}`,
        moe: `±${fmtPct(moe * 100, 1)}`,
        se: fmtPct(se * 100, 2),
        z: f(z, 3),
      }
    }
    const mean = toNumStrict(v.mean)
    const sd = toNum(v.sd)
    if (isNaN(mean) || sd < 0) {
      return { ci: `⚠️ ${L('errNumeric', 'Enter a valid mean and non-negative std. deviation')}`, ...blank }
    }
    const se = sd / Math.sqrt(n)
    const moe = z * se
    return {
      ci: `${f(mean - moe, 3)} – ${f(mean + moe, 3)}`,
      moe: `±${f(moe, 3)}`,
      se: f(se, 4),
      z: f(z, 3),
    }
  },
  chart: { kind: 'series', title: 'Margin of error shrinks with √n' },
  series: (v) => {
    const z = Z_BY_LEVEL[v.level] ?? 1.96
    const marks = [10, 25, 50, 100, 250, 500, 1000]
    let se: (n: number) => number
    if (v.mode === 'prop') {
      const q = toNum(v.p) / 100
      if (!(q > 0 && q < 1)) return null
      se = (m) => Math.sqrt((q * (1 - q)) / m)
    } else {
      const sd = toNum(v.sd)
      if (!(sd >= 0)) return null
      se = (m) => sd / Math.sqrt(m)
    }
    return {
      xLabels: marks.map((m) => `${m}`),
      lines: [
        { key: 'moe', label: 'Margin of error', color: '#3b82f6', points: marks.map((m) => z * se(m)), area: true },
      ],
      formatY: (x) => `±${x.toFixed(3)}`,
    }
  },
  presets: [
    { label: 'Delivery time: 4.2 ± ?, 95%', values: { mode: 'mean', mean: '4.2', sd: '1.1', n: '150', level: '95' } },
    { label: 'Poll: 55%, n = 1000, 95%', values: { mode: 'prop', p: '55', n: '1000', level: '95' } },
    { label: 'Medical study: 99%', values: { mode: 'mean', mean: '4.2', sd: '1.1', n: '150', level: '99' } },
  ],
  note: '📊 Mean mode uses CI = x̄ ± z·s/√n (σ unknown, n ≥ 30 for the normal approximation to hold); proportion mode is the Wald interval p̂ ± z·√(p̂(1−p̂)/n). For small samples or proportions near 0/1 use a t-interval or the Wilson score interval instead — Wald undercovers there.',
})

// ── 样本量计算器 ──
export const SampleSizeCalculatorClient = makeCalculatorClient({
  slug: 'sample-size-calculator',
  l10n: SampleSizeCalculatorL10n,
  sample: { N: '100000', level: '95', moe: '5', p: '50' },
  urlState: true,
  inputs: [
    // "0 = 无限总体"提示放标签括号里(老工具惯例,如 "Property tax (per year)"):
    // suffix 渲染在输入框内右侧(pr-16 ≈ 64px),"0 = infinite" 约 90px 会压到数字;
    // 且 CSV/摘要把 suffix 拼在值后,读出来是 "Population size: 20000 = infinite" 歧义
    { key: 'N', label: 'Population size (0 = infinite)', default: '0', slider: { min: 0, max: 1000000, step: 1000 } },
    { key: 'level', label: 'Confidence level', default: '95', options: [
      { label: '90% (z = 1.645)', value: '90' },
      { label: '95% (z = 1.96)', value: '95' },
      { label: '99% (z = 2.576)', value: '99' },
    ]},
    { key: 'moe', label: 'Margin of error', suffix: '%', default: '5', slider: { min: 0.5, max: 20, step: 0.5 } },
    { key: 'p', label: 'Expected proportion', suffix: '%', default: '50', slider: { min: 1, max: 99, step: 1 } },
  ],
  outputs: [
    { key: 'required', label: 'Required sample size', highlight: true },
    { key: 'infinite', label: 'Without population correction' },
    { key: 'saved', label: 'Saved by the correction' },
    { key: 'z', label: 'Critical value z' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(SampleSizeCalculatorL10n, locale, k, fb)
    const N = toNum(v.N)
    const moe = toNum(v.moe)
    const p = toNum(v.p)
    const z = Z_BY_LEVEL[v.level] ?? 1.96
    const blank = { infinite: '—', saved: '—', z: f(z, 3) }
    if (!(moe > 0) || moe >= 100 || p < 0 || p > 100 || N < 0) {
      return { required: `⚠️ ${L('errInput', 'Margin must be 0-100%, proportion 0-100%, population ≥ 0')}`, ...blank }
    }
    const q = p / 100
    const e = moe / 100
    const n0 = (z * z * q * (1 - q)) / (e * e)
    const nInf = Math.ceil(n0)
    if (N > 0) {
      const nAdj = Math.ceil(n0 / (1 + n0 / N))
      return {
        required: `${nAdj.toLocaleString('en-US')}`,
        infinite: `${nInf.toLocaleString('en-US')}`,
        saved: `${(nInf - nAdj).toLocaleString('en-US')}`,
        z: f(z, 3),
      }
    }
    return {
      required: `${nInf.toLocaleString('en-US')}`,
      infinite: `${nInf.toLocaleString('en-US')}`,
      saved: L('none', '— (infinite population)'),
      z: f(z, 3),
    }
  },
  chart: { kind: 'series', title: 'Sample size vs margin of error (95%, p = 50%)' },
  series: (v) => {
    const z = Z_BY_LEVEL[v.level] ?? 1.96
    const q = toNum(v.p) / 100
    if (!(q > 0 && q < 1)) return null
    const moes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return {
      xLabels: moes.map((m) => `±${m}%`),
      lines: [
        { key: 'n', label: 'Required n (infinite population)', color: '#3b82f6', points: moes.map((m) => Math.ceil((z * z * q * (1 - q)) / (m / 100) ** 2)), area: true },
      ],
      formatY: (x) => Math.round(x).toLocaleString('en-US'),
    }
  },
  presets: [
    { label: 'National poll: 95%, ±3%', values: { N: '0', level: '95', moe: '3', p: '50' } },
    { label: 'Customer survey: 95%, ±5%', values: { N: '0', level: '95', moe: '5', p: '50' } },
    { label: 'Association of 200: 95%, ±5%', values: { N: '200', level: '95', moe: '5', p: '50' } },
  ],
  note: '🎯 p = 50% is the safe default — it maximizes p(1−p), so the sample covers any outcome. The finite-population correction n = n₀/(1 + n₀/N) only matters below roughly N = 20,000; halving the margin quadruples the sample, which is why ±1% polls need ~9,600 respondents.',
})

// ── Z 分数计算器 ──
export const ZScoreCalculatorClient = makeCalculatorClient({
  slug: 'z-score-calculator',
  l10n: ZScoreCalculatorL10n,
  sample: { mode: 'x2z', x: '130', z: '1.96', mu: '100', sigma: '15' },
  urlState: true,
  inputs: [
    { key: 'mode', label: 'Direction', default: 'x2z', options: [
      { label: 'x → z (standardize)', value: 'x2z' },
      { label: 'z → x (reverse)', value: 'z2x' },
    ]},
    { key: 'x', label: 'Raw score x', default: '110', slider: { min: 40, max: 160, step: 1 } },
    { key: 'z', label: 'Z score', default: '1.96', slider: { min: -4, max: 4, step: 0.05 } },
    { key: 'mu', label: 'Mean μ', default: '100', slider: { min: 0, max: 200, step: 1 } },
    { key: 'sigma', label: 'Std. deviation σ', default: '15', slider: { min: 0.5, max: 100, step: 0.5 } },
  ],
  outputs: [
    { key: 'zScore', label: 'Z score', highlight: true, sublabel: 'z = (x − μ) / σ' },
    { key: 'xVal', label: 'Raw score x', sublabel: 'x = μ + z·σ' },
    { key: 'percentile', label: 'Percentile Φ(z)' },
    { key: 'above', label: 'P(Z > z)' },
    { key: 'twoTailed', label: 'Two-tailed p' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(ZScoreCalculatorL10n, locale, k, fb)
    const mu = toNumStrict(v.mu)
    const sigma = toNumStrict(v.sigma)
    const blank = { xVal: '—', percentile: '—', above: '—', twoTailed: '—' }
    if (isNaN(mu) || isNaN(sigma) || sigma <= 0) {
      return { zScore: `⚠️ ${L('errInput', 'Enter a valid mean and a std. deviation > 0')}`, ...blank }
    }
    let zVal: number, xOut: string
    if (v.mode === 'z2x') {
      const zIn = toNumStrict(v.z)
      if (isNaN(zIn)) {
        return { zScore: `⚠️ ${L('errZ', 'Enter a numeric z score')}`, ...blank }
      }
      zVal = zIn
      xOut = f(mu + zIn * sigma, 2)
    } else {
      const x = toNumStrict(v.x)
      if (isNaN(x)) {
        return { zScore: `⚠️ ${L('errX', 'Enter a numeric raw score')}`, ...blank }
      }
      zVal = (x - mu) / sigma
      xOut = f(x, 2)
    }
    const cdf = normCdf(zVal)
    return {
      zScore: f(zVal),
      xVal: xOut,
      percentile: fmtPct(cdf * 100, 2),
      above: fmtPct((1 - cdf) * 100, 2),
      twoTailed: fmtPct(2 * (1 - normCdf(Math.abs(zVal))) * 100, 2),
    }
  },
  chart: { kind: 'series', title: 'The standard normal curve (μ = 0, σ = 1)' },
  series: () => {
    const xs = Array.from({ length: 17 }, (_, i) => -4 + i * 0.5)
    return {
      xLabels: xs.map((x) => `${x}`),
      lines: [
        { key: 'pdf', label: 'φ(z) = e^(−z²/2)/√(2π)', color: '#3b82f6', points: xs.map((x) => Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI)), area: true },
      ],
      formatY: (x) => x.toFixed(3),
    }
  },
  presets: [
    { label: 'IQ 130 (μ=100, σ=15)', values: { mode: 'x2z', x: '130', mu: '100', sigma: '15' } },
    { label: 'Top 5% cutoff: z = 1.645', values: { mode: 'z2x', z: '1.645', mu: '100', sigma: '15' } },
    { label: 'Below average: 85 IQ', values: { mode: 'x2z', x: '85', mu: '100', sigma: '15' } },
  ],
  note: '🔔 z = (x − μ)/σ counts how many standard deviations a value sits from the mean. Probabilities use the Abramowitz-Stegun 26.2.17 rational approximation of the normal CDF (|error| < 7.5×10⁻⁸). Rule of thumb: 68% of values lie within ±1σ, 95% within ±1.96σ, 99.7% within ±3σ.',
})

// ── 贝叶斯定理计算器 ──
export const BayesTheoremCalculatorClient = makeCalculatorClient({
  slug: 'bayes-theorem-calculator',
  l10n: BayesTheoremCalculatorL10n,
  sample: { prior: '1', sens: '95', spec: '90' },
  urlState: true,
  inputs: [
    { key: 'prior', label: 'Prior (base rate)', suffix: '%', default: '1', slider: { min: 0.1, max: 50, step: 0.1 } },
    { key: 'sens', label: 'Sensitivity', suffix: '%', default: '95', slider: { min: 50, max: 100, step: 0.5 } },
    { key: 'spec', label: 'Specificity', suffix: '%', default: '90', slider: { min: 50, max: 100, step: 0.5 } },
  ],
  outputs: [
    { key: 'posterior', label: 'P(disease | positive)', highlight: true },
    { key: 'rate', label: 'What a positive means' },
    { key: 'tp', label: 'True positives', sublabel: 'per 10,000 tested' },
    { key: 'fp', label: 'False positives', sublabel: 'per 10,000 tested' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(BayesTheoremCalculatorL10n, locale, k, fb)
    const prior = toNumStrict(v.prior)
    const sens = toNumStrict(v.sens)
    const spec = toNumStrict(v.spec)
    const blank = { rate: '—', tp: '—', fp: '—' }
    if (isNaN(prior) || isNaN(sens) || isNaN(spec) || prior <= 0 || prior > 100 || sens < 0 || sens > 100 || spec < 0 || spec > 100) {
      return { posterior: `⚠️ ${L('errInput', 'Prior 0-100% (above 0), sensitivity and specificity 0-100%')}`, ...blank }
    }
    const p = prior / 100, s = sens / 100, t = spec / 100
    const pPos = s * p + (1 - t) * (1 - p)
    if (pPos === 0) {
      return { posterior: `⚠️ ${L('errZero', 'This test never returns a positive result')}`, ...blank }
    }
    const post = (s * p) / pPos
    const oneIn = 1 / post
    return {
      posterior: fmtPct(post * 100, 2),
      rate: `${L('ratePrefix', '1 in')} ${f(oneIn, 1)} ${L('rateSuffix', 'positives is a true positive')}`,
      tp: `${Math.round(s * p * 10000)}`,
      fp: `${Math.round((1 - t) * (1 - p) * 10000)}`,
    }
  },
  chart: {
    title: 'What a positive result is made of (per 10,000)',
    slices: [
      { valueKey: 'tp', label: 'True positives', color: '#22c55e' },
      { valueKey: 'fp', label: 'False positives', color: '#ef4444' },
    ],
    centerLabel: 'Positive tests',
  },
  presets: [
    { label: 'Rare disease screen: 1%, 95%, 90%', values: { prior: '1', sens: '95', spec: '90' } },
    { label: 'Common condition: 10%, 95%, 90%', values: { prior: '10', sens: '95', spec: '90' } },
    { label: 'Near-perfect test: 1%, 99%, 99%', values: { prior: '1', sens: '99', spec: '99' } },
  ],
  note: '🩺 Posterior = sensitivity × prior ÷ P(positive). With a 1% base rate, 95% sensitivity and 90% specificity, a positive still means only ~8.8% chance of disease — the false positives from the 9,900 healthy people swamp the 95 true catches. That gap is the base-rate fallacy; rarer conditions make it worse, better specificity (not sensitivity) fixes it.',
})

// ── 湿热指数(体感温度)计算器 ──
export const HeatIndexCalculatorClient = makeCalculatorClient({
  slug: 'heat-index-calculator',
  l10n: HeatIndexCalculatorL10n,
  sample: { temp: '92', tUnit: 'F', rh: '70' },
  urlState: true,
  inputs: [
    { key: 'temp', label: 'Air temperature', default: '92', slider: { min: 20, max: 120, step: 1 } },
    { key: 'tUnit', label: 'Temperature unit', default: 'F', options: [
      { label: '°F', value: 'F' },
      { label: '°C', value: 'C' },
    ]},
    { key: 'rh', label: 'Relative humidity', suffix: '%', default: '70', slider: { min: 0, max: 100, step: 1 } },
  ],
  outputs: [
    { key: 'hi', label: 'Heat index', highlight: true },
    { key: 'hiAlt', label: 'In the other unit' },
    { key: 'diff', label: 'Hotter than the thermometer' },
    { key: 'risk', label: 'Risk level' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(HeatIndexCalculatorL10n, locale, k, fb)
    const t = Number(v.temp)
    const rh = Number(v.rh)
    if (!isFinite(t) || !isFinite(rh) || rh < 0 || rh > 100) {
      return { hi: `⚠️ ${L('errInput', 'Enter a numeric temperature and humidity 0-100%')}`, hiAlt: '—', diff: '—', risk: '—' }
    }
    const outF = v.tUnit === 'F'
    const tf = outF ? t : (t * 9) / 5 + 32
    const hiF = rothfuszHI(tf, rh)
    const main = outF ? hiF : ((hiF - 32) * 5) / 9
    const alt = outF ? ((hiF - 32) * 5) / 9 : hiF
    const diff = outF ? hiF - tf : ((hiF - tf) * 5) / 9
    const risk =
      hiF >= 125 ? L('risk.extreme', 'Extreme danger — heat stroke imminent') :
      hiF >= 103 ? L('risk.danger', 'Danger — heat cramps/exhaustion likely') :
      hiF >= 90 ? L('risk.extremeCaution', 'Extreme caution — sunstroke possible') :
      hiF >= 80 ? L('risk.caution', 'Caution — fatigue possible with prolonged exposure') :
      L('risk.below', 'Below the 80°F caution threshold')
    return {
      hi: `${fmtNum(main, 1)}°${outF ? 'F' : 'C'}`,
      hiAlt: `${fmtNum(alt, 1)}°${outF ? 'C' : 'F'}`,
      // 干热时 HI 低于气温(Rothfusz 在 105°F/15% 给 ~101.6°F):fmtNum 自带
      // 负号,前缀 "+" 只在非负时补,避免出现 "+-3.4°"
      diff: `${diff >= 0 ? '+' : ''}${fmtNum(diff, 1)}°`,
      risk,
    }
  },
  chart: { kind: 'series', title: 'Heat index vs humidity at your temperature' },
  series: (v) => {
    const t = Number(v.temp)
    if (!isFinite(t)) return null
    const outF = v.tUnit === 'F'
    const tf = outF ? t : (t * 9) / 5 + 32
    const conv = (f: number) => (outF ? f : ((f - 32) * 5) / 9)
    const rhs = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    return {
      xLabels: rhs.map((r) => `${r}%`),
      lines: [
        { key: 'hi', label: 'Heat index', color: '#ef4444', points: rhs.map((r) => conv(rothfuszHI(tf, r))), area: true },
        { key: 'air', label: 'Actual air temp', color: '#94a3b8', points: rhs.map(() => conv(tf)), dashed: true },
      ],
      formatY: (x) => `${x.toFixed(0)}°${outF ? 'F' : 'C'}`,
    }
  },
  presets: [
    { label: 'Midwest heat wave: 92°F, 70%', values: { temp: '92', tUnit: 'F', rh: '70' } },
    { label: 'Dry desert: 105°F, 15%', values: { temp: '105', tUnit: 'F', rh: '15' } },
    { label: 'Tropical: 88°F, 90%', values: { temp: '88', tUnit: 'F', rh: '90' } },
    { label: 'Europe: 34°C, 55%', values: { temp: '34', tUnit: 'C', rh: '55' } },
  ],
  note: '🔥 NWS Rothfusz regression with the 1984 low-humidity/high-humidity adjustments and the simple-formula fallback below 80°F. Full sun adds up to 15°F. The index is defined for T ≥ 80°F and RH ≥ 40%; below that the thermometer reads close to how it feels.',
})

// ── 露点计算器 ──
export const DewPointCalculatorClient = makeCalculatorClient({
  slug: 'dew-point-calculator',
  l10n: DewPointCalculatorL10n,
  sample: { temp: '25', tUnit: 'C', rh: '60' },
  urlState: true,
  inputs: [
    { key: 'temp', label: 'Air temperature', default: '25', slider: { min: -30, max: 50, step: 1 } },
    { key: 'tUnit', label: 'Temperature unit', default: 'C', options: [
      { label: '°C', value: 'C' },
      { label: '°F', value: 'F' },
    ]},
    { key: 'rh', label: 'Relative humidity', suffix: '%', default: '60', slider: { min: 1, max: 100, step: 1 } },
  ],
  outputs: [
    { key: 'dewPoint', label: 'Dew point', highlight: true },
    { key: 'dewAlt', label: 'In the other unit' },
    { key: 'absHumidity', label: 'Absolute humidity' },
    { key: 'comfort', label: 'Comfort level' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(DewPointCalculatorL10n, locale, k, fb)
    const t = Number(v.temp)
    const rh = Number(v.rh)
    if (!isFinite(t) || !isFinite(rh) || rh <= 0 || rh > 100) {
      return { dewPoint: `⚠️ ${L('errInput', 'Enter a numeric temperature and humidity 1-100%')}`, dewAlt: '—', absHumidity: '—', comfort: '—' }
    }
    const outC = v.tUnit === 'C'
    const tc = outC ? t : ((t - 32) * 5) / 9
    // Magnus-Tetens:a=17.27, b=237.7°C
    const a = 17.27, b = 237.7
    const gamma = Math.log(rh / 100) + (a * tc) / (b + tc)
    const tdC = (b * gamma) / (a - gamma)
    // 绝对湿度(Magnus 饱和汽压 6.112 hPa 版)
    const es = 6.112 * Math.exp((17.62 * tc) / (243.12 + tc))
    const ah = (216.7 * (rh / 100) * es) / (273.15 + tc)
    const comfort =
      tdC < 10 ? L('comfort.dry', 'Dry — skin and sinuses notice it') :
      tdC < 16 ? L('comfort.ok', 'Comfortable — the target indoor range') :
      tdC < 18 ? L('comfort.humid', 'Noticeably humid') :
      tdC < 21 ? L('comfort.sticky', 'Sticky and uncomfortable for most people') :
      L('comfort.oppressive', 'Oppressive — tropical air, exertion becomes risky')
    return {
      dewPoint: `${fmtNum(tdC, 1)}°${outC ? 'C' : 'F'}`,
      dewAlt: `${fmtNum(outC ? (tdC * 9) / 5 + 32 : ((tdC - 32) * 5) / 9, 1)}°${outC ? 'F' : 'C'}`,
      absHumidity: `${fmtNum(ah, 1)} g/m³`,
      comfort,
    }
  },
  chart: { kind: 'series', title: 'Dew point vs humidity at your temperature' },
  series: (v) => {
    const t = Number(v.temp)
    if (!isFinite(t)) return null
    const outC = v.tUnit === 'C'
    const tc = outC ? t : ((t - 32) * 5) / 9
    const conv = (c: number) => (outC ? c : (c * 9) / 5 + 32)
    const rhs = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    const dewAt = (r: number) => {
      const gamma = Math.log(r / 100) + (17.27 * tc) / (237.7 + tc)
      return (237.7 * gamma) / (17.27 - gamma)
    }
    return {
      xLabels: rhs.map((r) => `${r}%`),
      lines: [
        { key: 'dew', label: 'Dew point', color: '#3b82f6', points: rhs.map((r) => conv(dewAt(r))), area: true },
        { key: 'air', label: 'Air temperature', color: '#94a3b8', points: rhs.map(() => conv(tc)), dashed: true },
      ],
      formatY: (x) => `${x.toFixed(0)}°${outC ? 'C' : 'F'}`,
    }
  },
  presets: [
    { label: 'Comfortable room: 23°C, 50%', values: { temp: '23', tUnit: 'C', rh: '50' } },
    { label: 'Humid summer morning: 28°C, 85%', values: { temp: '28', tUnit: 'C', rh: '85' } },
    { label: 'Desert air: 35°C, 15%', values: { temp: '35', tUnit: 'C', rh: '15' } },
    { label: 'Winter heating: 21°C, 25%', values: { temp: '21', tUnit: 'C', rh: '25' } },
  ],
  note: '💧 Magnus-Tetens with a = 17.27, b = 237.7 °C — accurate to about ±0.35 °C for RH > 50%. Dew point tracks the actual moisture in the air, so it beats relative humidity for comfort: below a 10 °C dew point air feels dry, past 18 °C it feels sticky regardless of the thermometer. At 100% RH the dew point equals the air temperature.',
})
