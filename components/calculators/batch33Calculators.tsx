'use client'

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, toNumStrict } from '@/lib/format'
import { tuiFromEntry } from '@/lib/i18n/tool-l10n-core'
import { OhmsLawCalculatorL10n } from '@/lib/i18n/tools-l10n/ohms-law-calculator'
import { LedResistorCalculatorL10n } from '@/lib/i18n/tools-l10n/led-resistor-calculator'
import { VoltageDividerCalculatorL10n } from '@/lib/i18n/tools-l10n/voltage-divider-calculator'
import { DelayTimeCalculatorL10n } from '@/lib/i18n/tools-l10n/delay-time-calculator'

/**
 * 第三十三批(B13 电子与音频):
 * Ohm's law / LED resistor / Voltage divider / Delay time
 * (resistor color code、tone generator、BPM tap 在 components/tools/batch33Tools.tsx;
 *  faq-schema 与 number-to-words 是 makeTextTool 文本工具,同在 batch33Tools)
 *
 * 本批 compute 内提示串直接 import 各 tools-l10n 词典 + tuiFromEntry
 * (与 per-file accessor 查表行为一致,免额外生成 accessor)。
 */

/**
 * 工程单位格式化:0.863 A → "863 µA"、4700 Ω → "4.70 kΩ"、0.165 W → "165 mW"
 * refAbs:可选参考量级 —— 用它(而非 n 自己)决定 SI 前缀,让一组值同前缀输出。
 * 环形图(BreakdownChart)从显示串 parseNumeric 取数:两个功耗若各自选前缀,
 * "2.28 W vs 120.00 mW" 会被当成 2.28 : 120 把比例画反;同前缀则比例恒真。
 * 注意极小尾数仍会落入 fmtNum 的科学计数法分支,环图功耗对改用 fmtEngPair
 * (共前缀 + 自适应小数位)双保险。
 */
function fmtEng(n: number, unit: string, digits = 2, refAbs?: number): string {
  if (!isFinite(n)) return '—'
  const ref = Math.abs(refAbs ?? n)
  if (ref === 0) return `0 ${unit}`
  if (ref < 1e-6) return `${fmtNum(n * 1e9, digits)} n${unit}`
  if (ref < 1e-3) return `${fmtNum(n * 1e6, digits)} µ${unit}`
  if (ref < 1) return `${fmtNum(n * 1e3, digits)} m${unit}`
  if (ref < 1e3) return `${fmtNum(n, digits)} ${unit}`
  if (ref < 1e6) return `${fmtNum(n / 1e3, digits)} k${unit}`
  if (ref < 1e9) return `${fmtNum(n / 1e6, digits)} M${unit}`
  return `${fmtNum(n / 1e9, digits)} G${unit}`
}

/** 空串 → NaN(供"任填两个"类输入:留空 = 未填) */
function parseOrEmpty(s: string): number {
  const t = s.trim()
  if (t === '') return NaN
  return toNumStrict(t)
}

/**
 * 环图(BreakdownChart)功耗对的共前缀格式化:与 fmtEng 同款前缀选择,
 * 但小值侧按量级自适应加大小数位 —— fmtNum 对 |n| < 10^-digits 的非零值
 * 走科学计数法分支(lib/format.ts),而环图从显示串 parseNumeric 只取得
 * 尾数("1.0000e-4 W" 被读成 1.0),极小 Vf 下比例会完全失真。
 * 自适应位数保证两侧都以十进制小数显示(如 "2.13 W" / "0.000089 W"),
 * parseNumeric 读到的比例即真实功耗比。
 */
function fmtEngPair(a: number, b: number, unit: string): { a: string; b: string } {
  const ref = Math.max(Math.abs(a), Math.abs(b))
  if (!isFinite(ref) || ref === 0) return { a: `0 ${unit}`, b: `0 ${unit}` }
  let mult = 1
  let prefix = ''
  if (ref < 1e-6) { mult = 1e9; prefix = 'n' }
  else if (ref < 1e-3) { mult = 1e6; prefix = 'µ' }
  else if (ref < 1) { mult = 1e3; prefix = 'm' }
  else if (ref < 1e3) { mult = 1; prefix = '' }
  else if (ref < 1e6) { mult = 1e-3; prefix = 'k' }
  else if (ref < 1e9) { mult = 1e-6; prefix = 'M' }
  else { mult = 1e-9; prefix = 'G' }
  const sa = a * mult
  const sb = b * mult
  // 每侧独立定小数位:大值侧保持 2 位;小值侧加到 ≥3 位有效数字,
  // 保证以十进制小数显示(如 "2.13 W" / "0.000089 W")
  const digitsFor = (v: number): number => {
    const abs = Math.abs(v)
    return abs > 0 && abs < 0.01
      ? Math.min(12, Math.max(2, Math.ceil(-Math.log10(abs)) + 2))
      : 2
  }
  return { a: `${fmtNum(sa, digitsFor(sa))} ${prefix}${unit}`, b: `${fmtNum(sb, digitsFor(sb))} ${prefix}${unit}` }
}

// ── 欧姆定律:V/I/R/P 任填两个解其余 ──

/** 由恰好两个已知量解出全部四个;失败(超定/欠定/除零/开方负)返回 null */
function solveOhms(values: Record<string, string>): { V: number; I: number; R: number; P: number } | null {
  const V0 = parseOrEmpty(values.voltage)
  const I0 = parseOrEmpty(values.current)
  const R0 = parseOrEmpty(values.resistance)
  const P0 = parseOrEmpty(values.power)
  if ([V0, I0, R0, P0].filter((n) => isFinite(n)).length !== 2) return null
  let V = NaN, I = NaN, R = NaN, P = NaN
  if (isFinite(V0) && isFinite(I0)) { V = V0; I = I0; R = V / I; P = V * I }
  else if (isFinite(V0) && isFinite(R0)) { V = V0; R = R0; I = V / R; P = (V * V) / R }
  else if (isFinite(V0) && isFinite(P0)) { V = V0; P = P0; I = P / V; R = (V * V) / P }
  else if (isFinite(I0) && isFinite(R0)) { I = I0; R = R0; V = I * R; P = I * I * R }
  else if (isFinite(I0) && isFinite(P0)) { I = I0; P = P0; V = P / I; R = P / (I * I) }
  else if (isFinite(R0) && isFinite(P0)) { R = R0; P = P0; V = Math.sqrt(P * R); I = Math.sqrt(P / R) }
  else return null
  if (![V, I, R, P].every((n) => isFinite(n))) return null
  return { V, I, R, P }
}

export const OhmsLawCalculatorClient = makeCalculatorClient({
  slug: 'ohms-law-calculator',
  l10n: OhmsLawCalculatorL10n,
  inputs: [
    { key: 'voltage', label: 'Voltage', suffix: 'V', default: '9', placeholder: 'e.g. 9' },
    { key: 'current', label: 'Current', suffix: 'A', default: '', placeholder: 'e.g. 0.02' },
    { key: 'resistance', label: 'Resistance', suffix: 'Ω', default: '470', placeholder: 'e.g. 470' },
    { key: 'power', label: 'Power', suffix: 'W', default: '', placeholder: 'e.g. 0.5' },
  ],
  outputs: [
    { key: 'voltage', label: 'Voltage (V)' },
    { key: 'current', label: 'Current (I)', highlight: true },
    { key: 'resistance', label: 'Resistance (R)' },
    { key: 'power', label: 'Power (P)' },
  ],
  sample: { voltage: '12', current: '0.5', resistance: '', power: '' },
  presets: [
    { label: '9V battery + 470Ω', values: { voltage: '9', current: '', resistance: '470', power: '' } },
    { label: 'USB 5V + 220Ω', values: { voltage: '5', current: '', resistance: '220', power: '' } },
    { label: '120V, 60W bulb', values: { voltage: '120', current: '', resistance: '', power: '60' } },
    { label: 'Clear all', values: { voltage: '', current: '', resistance: '', power: '' } },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(OhmsLawCalculatorL10n, locale, k, fb)
    const err = (msg: string) => ({ voltage: '—', current: `⚠️ ${msg}`, resistance: '—', power: '—' })
    const sol = solveOhms(v)
    if (!sol) {
      const [V0, I0, R0, P0] = [v.voltage, v.current, v.resistance, v.power].map(parseOrEmpty)
      const filled = [V0, I0, R0, P0].filter((n) => isFinite(n)).length
      return err(
        filled === 2
          ? L('errDivZero', 'Division by zero — check the pair you entered')
          : L('errEnterTwo', 'Enter exactly two values — leave the other two empty'),
      )
    }
    return {
      voltage: `${fmtNum(sol.V, 2)} V`,
      current: fmtEng(sol.I, 'A'),
      resistance: fmtEng(sol.R, 'Ω'),
      power: fmtEng(sol.P, 'W'),
    }
  },
  chart: { kind: 'series', title: 'Current vs resistance' },
  series: (v) => {
    const sol = solveOhms(v)
    if (!sol || sol.V <= 0 || sol.R <= 0) return null
    // 7 个采样点:LineAreaChart 的 x 轴抽稀在移动端每 2 个索引取一档
    // (ceil(7/4)=2,7-1=6 恰被整除),4/7 个标签均匀分布不叠印;
    // 8 点时 6 与 7 相邻索引都被选中,窄屏上 "1.41 kΩ"/"1.88 kΩ" 会重叠
    const rs = [0.25, 0.5, 1, 1.5, 2, 3, 4].map((m) => sol.R * m)
    return {
      xLabels: rs.map((r) => fmtEng(r, 'Ω')),
      lines: [
        {
          key: 'current',
          label: 'Current (mA)',
          color: '#3b82f6',
          points: rs.map((r) => (sol.V / r) * 1000),
          area: true,
        },
      ],
      formatY: (n) => `${fmtNum(n, 1)} mA`,
    }
  },
  note: "⚡ Ohm's law is exact only for resistive loads: LEDs and motor inrush are not linear. Resistors carry ±5% tolerance and batteries sag under load — check tight designs against worst-case values.",
})

// ── LED 限流电阻 ──

/** E12 标准系列基值(×10^n) */
const E12_BASE = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82]

/** 不小于 r 的最小 E12 值(向上取整,保证电流不超标);超出生成域返回 null */
function e12Ceil(r: number): number | null {
  if (!(r > 0) || !isFinite(r)) return null
  const decade = Math.floor(Math.log10(r))
  for (let d = decade - 1; d <= decade + 2; d++) {
    for (const base of E12_BASE) {
      const v = base * Math.pow(10, d - 1)
      if (v >= r) return v
    }
  }
  return null
}

export const LedResistorCalculatorClient = makeCalculatorClient({
  slug: 'led-resistor-calculator',
  l10n: LedResistorCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'supply', label: 'Supply voltage', suffix: 'V', default: '5', slider: { min: 1, max: 24, step: 0.5 } },
    { key: 'vf', label: 'LED forward voltage', suffix: 'V', default: '2.0', slider: { min: 1.2, max: 4, step: 0.1 } },
    { key: 'current', label: 'LED current', suffix: 'mA', default: '20', slider: { min: 2, max: 100, step: 1 } },
  ],
  outputs: [
    { key: 'resistor', label: 'Ideal resistor', highlight: true },
    { key: 'e12', label: 'Nearest E12 value (rounded up)' },
    { key: 'actualCurrent', label: 'Actual LED current with E12' },
    { key: 'resistorPower', label: 'Resistor power' },
    { key: 'ledPower', label: 'LED power' },
  ],
  sample: { supply: '5', vf: '2.0', current: '20' },
  presets: [
    { label: 'Red LED @ 5V', values: { supply: '5', vf: '2.0', current: '20' } },
    { label: 'White LED @ 5V', values: { supply: '5', vf: '3.2', current: '20' } },
    { label: 'Blue LED @ 3.3V', values: { supply: '3.3', vf: '3.0', current: '10' } },
    { label: '12V indicator', values: { supply: '12', vf: '2.1', current: '10' } },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(LedResistorCalculatorL10n, locale, k, fb)
    const err = (msg: string) => ({
      resistor: `⚠️ ${msg}`, e12: '—', actualCurrent: '—', resistorPower: '—', ledPower: '—',
    })
    const supply = toNumStrict(v.supply)
    const vf = toNumStrict(v.vf)
    const ma = toNumStrict(v.current)
    if (isNaN(supply) || isNaN(vf) || isNaN(ma) || supply <= 0 || vf <= 0 || ma <= 0) {
      return err(L('errPositive', 'All three inputs must be positive'))
    }
    if (supply <= vf) return err(L('errSupply', 'Supply voltage must exceed the LED forward voltage'))
    const amps = ma / 1000
    const ideal = (supply - vf) / amps
    const e12 = e12Ceil(ideal)
    const chosen = e12 ?? ideal
    const actual = (supply - vf) / chosen
    // 两项功耗经 fmtEngPair 共前缀 + 自适应小数位输出,保证环形图按
    // 显示串 parse 出的比例与真实功耗一致(见 fmtEngPair 注释)
    const pResistor = actual * actual * chosen
    const pLed = actual * vf
    const pw = fmtEngPair(pResistor, pLed, 'W')
    return {
      resistor: fmtEng(ideal, 'Ω'),
      e12: e12 != null ? `${fmtEng(e12, 'Ω')} (E12)` : '—',
      actualCurrent: `${fmtNum(actual * 1000, 2)} mA`,
      resistorPower: pw.a,
      ledPower: pw.b,
    }
  },
  chart: {
    title: 'Where the power goes',
    centerLabel: 'Total',
    slices: [
      { valueKey: 'resistorPower', label: 'Resistor', color: '#f59e0b' },
      { valueKey: 'ledPower', label: 'LED', color: '#22c55e' },
    ],
  },
  note: '💡 Typical forward voltages: red/amber 1.8-2.2 V, green 2.0-2.4 V, blue/white 3.0-3.4 V. 20 mA is the classic indicator current; modern high-efficiency LEDs are bright enough at 2-5 mA. In series, add the forward voltages — and keep the total under the supply.',
})

// ── 分压器:正解 Vout / 反解 R2 ──

/** 从输入推导 { vin, r1, r2 }(solve 模式反解出 r2);非法返回 null */
function dividerChain(values: Record<string, string>): { vin: number; r1: number; r2: number } | null {
  const vin = toNumStrict(values.vin)
  const r1 = toNumStrict(values.r1)
  if (isNaN(vin) || isNaN(r1) || vin <= 0 || r1 <= 0) return null
  if (values.mode === 'solve') {
    const target = toNumStrict(values.targetVout)
    if (isNaN(target) || target <= 0 || target >= vin) return null
    return { vin, r1, r2: (r1 * target) / (vin - target) }
  }
  const r2 = toNumStrict(values.r2)
  if (isNaN(r2) || r2 <= 0) return null
  return { vin, r1, r2 }
}

export const VoltageDividerCalculatorClient = makeCalculatorClient({
  slug: 'voltage-divider-calculator',
  l10n: VoltageDividerCalculatorL10n,
  urlState: true,
  inputs: [
    {
      key: 'mode', label: 'Mode', default: 'forward', options: [
        { label: 'Forward — find Vout', value: 'forward' },
        { label: 'Solve R2 for target Vout', value: 'solve' },
      ],
    },
    { key: 'vin', label: 'Input voltage (Vin)', suffix: 'V', default: '12', slider: { min: 1, max: 48, step: 0.5 } },
    { key: 'r1', label: 'Resistor R1', suffix: 'Ω', default: '10000', slider: { min: 100, max: 100000, step: 100 } },
    { key: 'r2', label: 'Resistor R2', suffix: 'Ω', default: '4700', slider: { min: 100, max: 100000, step: 100 } },
    { key: 'targetVout', label: 'Target Vout', suffix: 'V', default: '3.3', slider: { min: 0.5, max: 24, step: 0.1 } },
  ],
  outputs: [
    { key: 'vout', label: 'Output voltage (Vout)', highlight: true },
    { key: 'r2Solved', label: 'R2 needed (solve mode)' },
    { key: 'current', label: 'Divider current' },
    { key: 'p1', label: 'Power in R1' },
    { key: 'p2', label: 'Power in R2' },
  ],
  sample: { mode: 'forward', vin: '12', r1: '10000', r2: '4700', targetVout: '3.3' },
  presets: [
    { label: '12V → 3.3V (solve)', values: { mode: 'solve', vin: '12', r1: '10000', targetVout: '3.3' } },
    { label: '5V → 3.3V logic', values: { mode: 'forward', vin: '5', r1: '1800', r2: '3300' } },
    { label: 'Battery monitor 100k/10k', values: { mode: 'forward', vin: '12', r1: '100000', r2: '10000' } },
    { label: '9V midpoint', values: { mode: 'forward', vin: '9', r1: '10000', r2: '10000' } },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(VoltageDividerCalculatorL10n, locale, k, fb)
    const err = (msg: string) => ({ vout: `⚠️ ${msg}`, r2Solved: '—', current: '—', p1: '—', p2: '—' })
    if (v.mode === 'solve') {
      const vin = toNumStrict(v.vin)
      const r1 = toNumStrict(v.r1)
      const target = toNumStrict(v.targetVout)
      if (isNaN(vin) || isNaN(r1) || isNaN(target) || vin <= 0 || r1 <= 0 || target <= 0) {
        return err(L('errPositive', 'Voltage and resistance must be positive'))
      }
      if (target >= vin) return err(L('errVout', 'Target Vout must be smaller than Vin'))
      const r2 = (r1 * target) / (vin - target)
      const i = vin / (r1 + r2)
      return {
        vout: `${fmtNum(target, 2)} V`,
        r2Solved: fmtEng(r2, 'Ω'),
        current: fmtEng(i, 'A'),
        p1: fmtEng(i * i * r1, 'W'),
        p2: fmtEng(i * i * r2, 'W'),
      }
    }
    const vin = toNumStrict(v.vin)
    const r1 = toNumStrict(v.r1)
    const r2 = toNumStrict(v.r2)
    if (isNaN(vin) || isNaN(r1) || isNaN(r2) || vin <= 0 || r1 <= 0 || r2 <= 0) {
      return err(L('errPositive', 'Voltage and resistance must be positive'))
    }
    const vout = (vin * r2) / (r1 + r2)
    const i = vin / (r1 + r2)
    return {
      vout: `${fmtNum(vout, 2)} V`,
      r2Solved: '—',
      current: fmtEng(i, 'A'),
      p1: fmtEng(i * i * r1, 'W'),
      p2: fmtEng(i * i * r2, 'W'),
    }
  },
  chart: { kind: 'series', title: 'Vout vs R2' },
  series: (v) => {
    const chain = dividerChain(v)
    if (!chain) return null
    const { vin, r1, r2 } = chain
    // 7 个采样点:同 OhmsLaw —— 移动端抽稀 ceil(7/4)=2 且 6 可被整除,
    // 标签 0.25/1/2/4 倍均匀分布;9 点时 6 与 8 两档在窄屏重叠
    const rs = [0.1, 0.5, 1, 1.5, 2, 3, 4].map((m) => r2 * m)
    return {
      xLabels: rs.map((r) => fmtEng(r, 'Ω')),
      lines: [
        {
          key: 'vout',
          label: 'Vout',
          color: '#3b82f6',
          points: rs.map((r) => (vin * r) / (r1 + r)),
          area: true,
        },
      ],
      formatY: (n) => `${fmtNum(n, 2)} V`,
    }
  },
  note: '⚖️ A divider only works into a high-impedance load: anything in parallel with R2 pulls Vout down. Keep divider current ≥ 10× load current; high-value chains (100k+10k) idle around 0.1 mA, ideal on battery.',
})

// ── 延迟时间:BPM → 各音符毫秒与 LFO ──

function bpmOrNaN(s: string): number {
  const bpm = toNumStrict(s)
  return isFinite(bpm) && bpm >= 20 && bpm <= 300 ? bpm : NaN
}

export const DelayTimeCalculatorClient = makeCalculatorClient({
  slug: 'delay-time-calculator',
  l10n: DelayTimeCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'bpm', label: 'Tempo', suffix: 'BPM', default: '120', slider: { min: 40, max: 220, step: 1 } },
  ],
  outputs: [
    { key: 'quarter', label: 'Quarter (1/4)', highlight: true },
    { key: 'half', label: 'Half (1/2)' },
    { key: 'whole', label: 'Whole (1/1)' },
    { key: 'eighth', label: 'Eighth (1/8)' },
    { key: 'eighthD', label: 'Dotted eighth (1/8.)' },
    { key: 'eighthT', label: 'Triplet eighth (1/8T)' },
    { key: 'sixteenth', label: 'Sixteenth (1/16)' },
    { key: 'sixteenthD', label: 'Dotted sixteenth (1/16.)' },
    { key: 'sixteenthT', label: 'Triplet sixteenth (1/16T)' },
    { key: 'thirtysecond', label: 'Thirty-second (1/32)' },
    { key: 'lfoQuarter', label: 'LFO rate · 1/4' },
    { key: 'lfoEighth', label: 'LFO rate · 1/8' },
    { key: 'lfoSixteenth', label: 'LFO rate · 1/16' },
  ],
  sample: { bpm: '120' },
  presets: [
    { label: '120 — studio default', values: { bpm: '120' } },
    { label: '90 — hip-hop', values: { bpm: '90' } },
    { label: '140 — EDM', values: { bpm: '140' } },
    { label: '60 — ambient / half-time', values: { bpm: '60' } },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(DelayTimeCalculatorL10n, locale, k, fb)
    const err = (msg: string) => ({
      quarter: `⚠️ ${msg}`, half: '—', whole: '—', eighth: '—', eighthD: '—', eighthT: '—',
      sixteenth: '—', sixteenthD: '—', sixteenthT: '—', thirtysecond: '—',
      lfoQuarter: '—', lfoEighth: '—', lfoSixteenth: '—',
    })
    const bpm = bpmOrNaN(v.bpm)
    if (isNaN(bpm)) return err(L('errBpm', 'Enter a tempo between 20 and 300 BPM'))
    const q = 60000 / bpm
    const ms = (x: number) => `${fmtNum(x, 1)} ms`
    const hz = (perBeat: number) => `${fmtNum((bpm / 60) * perBeat, 2)} Hz`
    return {
      whole: ms(q * 4),
      half: ms(q * 2),
      quarter: ms(q),
      eighth: ms(q / 2),
      eighthD: ms(q * 0.75),
      eighthT: ms((q * 2) / 3),
      sixteenth: ms(q / 4),
      sixteenthD: ms(q * 0.375),
      sixteenthT: ms(q / 3),
      thirtysecond: ms(q / 8),
      lfoQuarter: hz(1),
      lfoEighth: hz(2),
      lfoSixteenth: hz(4),
    }
  },
  chart: { kind: 'compare', title: 'Note lengths at this tempo' },
  compare: (v) => {
    const bpm = bpmOrNaN(v.bpm)
    if (isNaN(bpm)) return null
    const q = 60000 / bpm
    const colors = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6']
    const rows = [q * 4, q * 2, q, q / 2, q / 4].map((msv, i) => ({
      label: ['1/1', '1/2', '1/4', '1/8', '1/16'][i],
      segments: [{ label: 'Delay time', value: msv, color: colors[i] }],
    }))
    return { rows, formatTotal: (n) => `${fmtNum(n, 1)} ms` }
  },
  note: '🎸 Dotted = ×1.5, triplet = ×2/3. Analog delay pedals have no note switch — dial milliseconds directly: 375 ms is the dotted eighth at 120 BPM. On digital units 2-3 feedback repeats sound most tape-like, and 10-30 ms of pre-delay keeps the dry signal out of the reverb wash.',
})
