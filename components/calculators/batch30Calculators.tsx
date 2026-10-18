'use client'

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum } from '@/lib/format'
import { tuiFromEntry } from '@/lib/i18n/tool-l10n-core'
import { TimeCardCalculatorL10n } from '@/lib/i18n/tools-l10n/time-card-calculator'
import { BusinessDaysCalculatorL10n } from '@/lib/i18n/tools-l10n/business-days-calculator'
import { WeekNumberCalculatorL10n } from '@/lib/i18n/tools-l10n/week-number-calculator'
import { PtoAccrualCalculatorL10n } from '@/lib/i18n/tools-l10n/pto-accrual-calculator'
import { DownloadTimeCalculatorL10n } from '@/lib/i18n/tools-l10n/download-time-calculator'
import { TireSizeCalculatorL10n } from '@/lib/i18n/tools-l10n/tire-size-calculator'
import { WindChillCalculatorL10n } from '@/lib/i18n/tools-l10n/wind-chill-calculator'

/**
 * 第三十批(B10 时间与日期推算):Time card / Business days / Week number /
 * PTO accrual / Download time / Tire size / Wind chill
 * (GPS coordinate converter 是文本变换类,在 components/tools/batch30Tools.tsx)
 *
 * 本批 compute 内需要本地化的提示串经 tuiFromEntry(L10n, ...) 直取 ——
 * 与 per-file accessor(makeRegistryTui)查表行为逐位一致,免额外生成 accessor。
 */

const DAY = 86400000

/** 解析 "HH:MM" / "H:MM"(24 小时制,冒号或 h 分隔);裸数字(如 "7.75"/"32.5")按十进制小时;非法返回 NaN */
function parseHours(s: string): number {
  const t = s.trim()
  const m = t.match(/^(\d{1,3})[:h](\d{1,2})$/)
  if (m) {
    const h = parseInt(m[1], 10)
    const min = parseInt(m[2], 10)
    if (min > 59) return NaN
    return h + min / 60
  }
  const n = Number(t)
  return isFinite(n) ? n : NaN
}

/** 秒 → "X h Y min Z s" 紧凑时长(小时/分钟为零时省略对应段;≥24h 进位到天) */
function fmtDuration(sec: number): string {
  if (!isFinite(sec) || sec < 0) return '—'
  const h = Math.floor(sec / 3600)
  const m = Math.floor((sec % 3600) / 60)
  const s = Math.round(sec % 60)
  // 进位:59.7s → 60s
  const parts: string[] = []
  let mm = m
  let ss = s
  if (ss === 60) { ss = 0; mm += 1 }
  let hh = h
  if (mm === 60) { mm = 0; hh += 1 }
  if (hh >= 24) {
    // 大文件 × 慢链路动辄几十小时:"98 h" 不如 "4 d 2 h" 直观;
    // 天级下秒是噪声(totalSeconds 行保留精确秒值)
    const dayParts = [`${Math.floor(hh / 24)} d`, `${hh % 24} h`]
    if (mm > 0) dayParts.push(`${mm} min`)
    return dayParts.join(' ')
  }
  if (hh > 0) parts.push(`${hh} h`)
  if (mm > 0 || (hh > 0 && ss > 0)) parts.push(`${mm} min`)
  parts.push(`${ss} s`)
  return parts.join(' ')
}

/** UTC 日历日格式化 → "Mon, Nov 2, 2026"(SSR/客户端一致,不涉及时区) */
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
function fmtUtcDate(ms: number): string {
  const d = new Date(ms)
  return `${WEEKDAYS[d.getUTCDay()]}, ${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`
}

// ── 工时卡计算器:每日上下班时刻 + 休息扣除 → 日工时 + 周合计 + 加班标注 ──
export const TimeCardCalculatorClient = makeCalculatorClient({
  slug: 'time-card-calculator',
  l10n: TimeCardCalculatorL10n,
  inputs: [
    { key: 'clockIn', label: 'Clock in (HH:MM)', default: '08:30', type: 'text', placeholder: '08:30' },
    { key: 'clockOut', label: 'Clock out (HH:MM)', default: '17:00', type: 'text', placeholder: '17:00' },
    { key: 'breakMin', label: 'Unpaid break', suffix: 'min', default: '45', slider: { min: 0, max: 180, step: 5 } },
    { key: 'weekSoFar', label: 'Hours logged earlier this week', default: '32.5', type: 'text', placeholder: '32.5 or 32:30' },
    { key: 'otThreshold', label: 'Overtime threshold', suffix: 'h/week', default: '40', slider: { min: 0, max: 60, step: 1 } },
  ],
  outputs: [
    { key: 'todayHM', label: "Today's hours", highlight: true },
    { key: 'todayDec', label: "Today's hours (decimal)" },
    { key: 'weekTotal', label: 'Week total' },
    { key: 'regular', label: 'Regular (in-threshold) hours' },
    { key: 'overtime', label: 'Overtime hours' },
    { key: 'remaining', label: 'Hours left to threshold' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(TimeCardCalculatorL10n, locale, k, fb)
    const tIn = parseHours(v.clockIn)
    const tOut = parseHours(v.clockOut)
    const brk = Number(v.breakMin)
    const soFar = parseHours(v.weekSoFar)
    const thr = Number(v.otThreshold)
    const bad = (msg: string) => ({
      todayHM: `⚠️ ${msg}`, todayDec: '—', weekTotal: '—', regular: '—', overtime: '—', remaining: '—',
    })
    if (isNaN(tIn) || isNaN(tOut) || isNaN(soFar)) return bad(L('errTime', 'Enter times as 24-hour HH:MM (e.g. 08:30)'))
    if (!isFinite(brk) || brk < 0) return bad(L('errBreak', 'Break minutes cannot be negative'))
    // 跨夜班:下班早于上班 → 加 24h(22:00 → 06:00)
    let span = tOut - tIn
    if (span < 0) span += 24
    const worked = span - brk / 60
    if (worked <= 0) return bad(L('errSpan', 'Break is longer than the shift — check clock times'))
    const total = soFar + worked
    const ot = Math.max(0, total - thr)
    const reg = Math.min(total, thr)
    // 进位兜底:手动输入十进制小时(如 8.9999)四舍五入后分钟可到 60
    const hm = (x: number) => {
      let hh = Math.floor(x)
      let mm = Math.round((x % 1) * 60)
      if (mm === 60) { mm = 0; hh += 1 }
      return `${hh}h ${String(mm).padStart(2, '0')}m`
    }
    return {
      todayHM: hm(worked),
      todayDec: `${fmtNum(worked, 2)} h`,
      weekTotal: `${fmtNum(total, 2)} h`,
      regular: `${fmtNum(reg, 2)} h`,
      overtime: ot > 0
        ? `${fmtNum(ot, 2)} h · ${L('otFlag', 'past threshold')}`
        : L('noOt', 'None — still under threshold'),
      remaining: thr - total > 0 ? `${fmtNum(thr - total, 2)} h` : '0 h',
    }
  },
  presets: [
    { label: 'Standard 9-to-5', values: { clockIn: '09:00', clockOut: '17:00', breakMin: '60', weekSoFar: '32', otThreshold: '40' } },
    { label: 'Overnight shift', values: { clockIn: '22:00', clockOut: '06:00', breakMin: '30', weekSoFar: '24', otThreshold: '40' } },
    { label: 'Saturday overtime', values: { clockIn: '08:00', clockOut: '16:30', breakMin: '30', weekSoFar: '41', otThreshold: '40' } },
  ],
  chart: {
    title: 'Regular vs overtime hours this week',
    slices: [
      { valueKey: 'regular', label: 'Regular hours', color: '#3b82f6' },
      { valueKey: 'overtime', label: 'Overtime hours', color: '#f59e0b' },
    ],
    centerLabel: 'Week total',
  },
  note: '⏱️ Payroll multiplies pay by DECIMAL hours (7h 45m = 7.75), so copy the decimal figure into payroll. Overnight shifts (out earlier than in) automatically add 24 h; many systems round to the nearest quarter hour — match yours.',
})

// ── 工作日推算器:某日期 ± N 个工作日(跳过周末与自定义假日)──
export const BusinessDaysCalculatorClient = makeCalculatorClient({
  slug: 'business-days-calculator',
  l10n: BusinessDaysCalculatorL10n,
  inputs: [
    { key: 'startDate', label: 'Start date', default: '2026-10-19', type: 'text', placeholder: 'YYYY-MM-DD' },
    { key: 'direction', label: 'Direction', default: 'add', options: [
      { label: 'Add business days', value: 'add' },
      { label: 'Subtract business days', value: 'sub' },
    ]},
    { key: 'count', label: 'Business days', default: '10', slider: { min: 1, max: 90, step: 1 } },
    { key: 'holidays', label: 'Holidays (optional)', default: '2026-11-26, 2026-12-25', type: 'text', placeholder: 'YYYY-MM-DD, comma separated' },
  ],
  outputs: [
    { key: 'targetDate', label: 'Target date', highlight: true },
    { key: 'targetISO', label: 'Target date (ISO)' },
    { key: 'calendarDays', label: 'Calendar days spanned' },
    { key: 'weekendDays', label: 'Weekend days skipped' },
    { key: 'holidayHits', label: 'Holidays skipped' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(BusinessDaysCalculatorL10n, locale, k, fb)
    const bad = (msg: string) => ({
      targetDate: `⚠️ ${msg}`, targetISO: '—', calendarDays: '—', weekendDays: '—', holidayHits: '—',
    })
    if (!/^\d{4}-\d{2}-\d{2}$/.test(v.startDate.trim())) return bad(L('errDate', 'Enter the start date as YYYY-MM-DD'))
    const start = Date.parse(v.startDate.trim() + 'T00:00:00Z')
    if (isNaN(start)) return bad(L('errDate', 'Enter the start date as YYYY-MM-DD'))
    const n = Math.round(Number(v.count))
    if (!isFinite(n) || n < 1) return bad(L('errCount', 'Business days must be at least 1'))
    // 假日集合:容忍逗号/分号/空白分隔,忽略非法片段
    const holidays = new Set(
      v.holidays.split(/[,;\s]+/).filter((x) => /^\d{4}-\d{2}-\d{2}$/.test(x)).map((x) => Date.parse(x + 'T00:00:00Z')),
    )
    const step = v.direction === 'sub' ? -DAY : DAY
    let cur = start
    let counted = 0
    let weekends = 0
    let holidayHits = 0
    let calendar = 0
    // 逐日步进:工作日(周一至周五)且不在假日表内才计数
    while (counted < n && calendar < 4000) {
      cur += step
      calendar += 1
      const dow = new Date(cur).getUTCDay()
      if (dow === 0 || dow === 6) {
        weekends += 1
        continue
      }
      if (holidays.has(cur)) {
        holidayHits += 1
        continue
      }
      counted += 1
    }
    const iso = new Date(cur).toISOString().slice(0, 10)
    // 走查上限兜底:手输超大量(>约 2,850 个工作日)时 4,000 个日历日走不完,
    // 此时 cur 停在半路 —— 不能把未达标日期当答案静默展示(与 mortgage 的
    // "Not paid off within 600 months" 同款拦截口径)
    if (counted < n) {
      return {
        targetDate: `⚠️ ${L('errRange', 'Too many business days — the day-by-day walk stops after about 2,850 business days (~11 years)')}`,
        targetISO: '—', calendarDays: `${calendar}`, weekendDays: '—', holidayHits: '—',
      }
    }
    return {
      targetDate: fmtUtcDate(cur),
      targetISO: iso,
      calendarDays: `${calendar}`,
      weekendDays: `${weekends}`,
      holidayHits: holidayHits === 0 ? L('none', 'None in range') : `${holidayHits}`,
    }
  },
  presets: [
    { label: 'Thanksgiving week', values: { startDate: '2026-11-23', direction: 'add', count: '5', holidays: '2026-11-26' } },
    { label: '30 business days out', values: { startDate: '2026-10-19', direction: 'add', count: '30', holidays: '2026-11-26, 2026-12-25' } },
    { label: 'Back 10 business days', values: { startDate: '2026-11-02', direction: 'sub', count: '10', holidays: '' } },
  ],
  note: '📅 Counts Monday-Friday as business days and steps over your holiday list (paste any YYYY-MM-DD dates, comma separated). Need the opposite — how many business days fall BETWEEN two dates? Use the Date Difference Calculator.',
})

// ── 周数计算器:任意日期 → ISO 8601 周数 + 周起止 + 年内进度 ──
export const WeekNumberCalculatorClient = makeCalculatorClient({
  slug: 'week-number-calculator',
  l10n: WeekNumberCalculatorL10n,
  inputs: [
    { key: 'date', label: 'Date', default: '2026-12-28', type: 'text', placeholder: 'YYYY-MM-DD' },
  ],
  outputs: [
    { key: 'isoWeek', label: 'ISO week', highlight: true },
    { key: 'weekStart', label: 'Week starts (Monday)' },
    { key: 'weekEnd', label: 'Week ends (Sunday)' },
    { key: 'isoYear', label: 'ISO week-numbering year' },
    { key: 'weeksInYear', label: 'Weeks in that ISO year' },
    { key: 'weeksRemaining', label: 'ISO weeks remaining after this one' },
    { key: 'thisWeek', label: 'This week (today)', sublabel: 'Loads after mount' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(WeekNumberCalculatorL10n, locale, k, fb)
    const bad = { isoWeek: `⚠️ ${L('errDate', 'Enter the date as YYYY-MM-DD')}`, weekStart: '—', weekEnd: '—', isoYear: '—', weeksInYear: '—', weeksRemaining: '—', thisWeek: '—' }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(v.date.trim())) return bad
    const t = Date.parse(v.date.trim() + 'T00:00:00Z')
    if (isNaN(t)) return bad
    // ISO 8601:周一为一周之始;含当年第一个周四的那周 = 第 1 周。
    // 取本日期所在周的周四,其所属年即 ISO 年;再数从 ISO 年 1/1 起的第几周。
    const dayNr = (new Date(t).getUTCDay() + 6) % 7 // Mon=0 … Sun=6
    const thursday = t + (3 - dayNr) * DAY
    const ty = new Date(thursday).getUTCFullYear()
    const jan1 = Date.UTC(ty, 0, 1)
    const week = Math.floor((thursday - jan1) / DAY / 7) + 1
    const weekStart = t - dayNr * DAY
    const weekEnd = weekStart + 6 * DAY
    // 12/28 恒落在 ISO 年最后一周 → 该年的总周数(52 或 53)
    const dec28 = Date.UTC(ty, 11, 28)
    const d28nr = (new Date(dec28).getUTCDay() + 6) % 7
    const d28thu = dec28 + (3 - d28nr) * DAY
    const d28y = new Date(d28thu).getUTCFullYear()
    const weeksIn = Math.floor((d28thu - Date.UTC(d28y, 0, 1)) / DAY / 7) + 1
    return {
      isoWeek: `${ty}-W${String(week).padStart(2, '0')}`,
      weekStart: fmtUtcDate(weekStart),
      weekEnd: fmtUtcDate(weekEnd),
      isoYear: `${ty}`,
      weeksInYear: `${weeksIn}`,
      weeksRemaining: `${weeksIn - week}`,
      thisWeek: '—',
    }
  },
  // 挂载后按客户端当前日期补齐 "本周" 输出(SSR 不计算,保证水合一致)
  deriveNow: (_v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(WeekNumberCalculatorL10n, locale, k, fb)
    const now = new Date()
    const t = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
    const dayNr = (new Date(t).getUTCDay() + 6) % 7
    const thursday = t + (3 - dayNr) * DAY
    const ty = new Date(thursday).getUTCFullYear()
    const week = Math.floor((thursday - Date.UTC(ty, 0, 1)) / DAY / 7) + 1
    return { thisWeek: L('weekFmt', '{y}-W{w}').replace('{y}', String(ty)).replace('{w}', String(week).padStart(2, '0')) }
  },
  presets: [
    { label: 'Jan 1, 2026 → W1', values: { date: '2026-01-01' } },
    { label: 'Dec 28, 2026 → W53', values: { date: '2026-12-28' } },
    { label: 'Jan 1, 2027 → still 2026!', values: { date: '2027-01-01' } },
  ],
  note: '🗓️ ISO 8601 weeks start on Monday, and week 1 is the week containing the year\'s first Thursday — so Jan 1 can belong to week 52/53 of the PREVIOUS year (Jan 1, 2027 is 2026-W53). The US "week 1 = week with Jan 1" convention shifts by a week in some years.',
})

// ── PTO 累积计算器:年假总额 + 累积率 + 已用 + 结转上限 → 余额与年末预测 ──
export const PtoAccrualCalculatorClient = makeCalculatorClient({
  slug: 'pto-accrual-calculator',
  l10n: PtoAccrualCalculatorL10n,
  inputs: [
    { key: 'annualHours', label: 'Annual PTO allowance', suffix: 'h', default: '120', slider: { min: 0, max: 260, step: 4 } },
    { key: 'frequency', label: 'Pay frequency', default: '26', options: [
      { label: 'Weekly (52/year)', value: '52' },
      { label: 'Biweekly (26/year)', value: '26' },
      { label: 'Semimonthly (24/year)', value: '24' },
      { label: 'Monthly (12/year)', value: '12' },
    ]},
    { key: 'periodsElapsed', label: 'Pay periods elapsed this year', default: '18', slider: { min: 0, max: 52, step: 1 } },
    { key: 'usedHours', label: 'PTO hours already used', suffix: 'h', default: '40', slider: { min: 0, max: 260, step: 1 } },
    { key: 'carryCap', label: 'Carryover cap (0 = carry nothing)', suffix: 'h', default: '40', slider: { min: 0, max: 400, step: 5 } },
  ],
  outputs: [
    { key: 'balance', label: 'Current balance (accrued − used)', highlight: true },
    { key: 'accrued', label: 'Accrued so far' },
    { key: 'perPeriod', label: 'Accrual per pay period' },
    { key: 'usedDisp', label: 'Used so far' },
    { key: 'yearEnd', label: 'Year-end balance if unused' },
    { key: 'carried', label: 'Carried into next year' },
    { key: 'forfeited', label: 'Forfeited at rollover' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(PtoAccrualCalculatorL10n, locale, k, fb)
    const annual = Number(v.annualHours)
    const freq = Number(v.frequency)
    const elapsed = Number(v.periodsElapsed)
    const used = Number(v.usedHours)
    const cap = Number(v.carryCap)
    if (![annual, freq, elapsed, used, cap].every((x) => isFinite(x)) || annual < 0 || freq <= 0 || elapsed < 0 || used < 0 || cap < 0) {
      return { balance: `⚠️ ${L('errInput', 'Allowance, periods, used, and cap cannot be negative')}`, accrued: '—', perPeriod: '—', usedDisp: '—', yearEnd: '—', carried: '—', forfeited: '—' }
    }
    const rate = annual / freq
    const accrued = rate * elapsed
    const balance = accrued - used
    const yearEnd = annual - used
    // cap=0 → use-it-or-lose-it:年底余额全部作废;上限足够大则全额结转
    const carried = Math.max(0, Math.min(yearEnd, cap))
    const forfeited = Math.max(0, yearEnd - carried)
    const h = (x: number) => `${fmtNum(x, 2)} h`
    return {
      balance: balance < 0
        ? `${h(balance)} · ${L('negative', 'negative — borrowed against future accrual')}`
        : h(balance),
      accrued: h(accrued),
      perPeriod: `${fmtNum(rate, 2)} h`,
      usedDisp: h(used),
      yearEnd: h(yearEnd),
      carried: h(carried),
      forfeited: forfeited > 0 ? `${h(forfeited)} · ${L('useIt', 'schedule time off before Dec 31')}` : L('noneLost', 'None — everything carries over'),
    }
  },
  presets: [
    { label: 'US standard (2 weeks)', values: { annualHours: '80', frequency: '26', periodsElapsed: '13', usedHours: '24', carryCap: '40' } },
    { label: 'Generous tech (4 weeks)', values: { annualHours: '160', frequency: '24', periodsElapsed: '16', usedHours: '60', carryCap: '80' } },
    { label: 'Use-it-or-lose-it', values: { annualHours: '120', frequency: '26', periodsElapsed: '26', usedHours: '40', carryCap: '0' } },
  ],
  chart: {
    title: 'Annual allowance: used vs remaining',
    slices: [
      { valueKey: 'usedDisp', label: 'Used', color: '#f59e0b' },
      { valueKey: 'yearEnd', label: 'Remaining', color: '#22c55e' },
    ],
    centerLabel: 'Annual allowance',
  },
  note: '🌴 US law does not mandate paid vacation — balances come from your employer\'s accrual policy (accrual = allowance ÷ pay periods). "Current balance" counts only what has accrued so far; the year-end row assumes you take no more time off. For EU readers: statutory minimums (20 days EU / 24+ in some countries) make caps rare.',
})

// ── 下载时间计算器:文件大小 ÷ 网速(含协议开销)→ 时分秒 ──
export const DownloadTimeCalculatorClient = makeCalculatorClient({
  slug: 'download-time-calculator',
  l10n: DownloadTimeCalculatorL10n,
  inputs: [
    { key: 'size', label: 'File size', default: '4.5', slider: { min: 0.1, max: 1000, step: 0.1 } },
    { key: 'sizeUnit', label: 'Size unit', default: 'GB', options: [
      { label: 'MB', value: 'MB' },
      { label: 'GB', value: 'GB' },
      { label: 'TB', value: 'TB' },
    ]},
    { key: 'speed', label: 'Connection speed', default: '100', slider: { min: 1, max: 2000, step: 1 } },
    { key: 'speedUnit', label: 'Speed unit', default: 'Mbps', options: [
      { label: 'Mbps (megabits/s)', value: 'Mbps' },
      { label: 'MB/s (megabytes/s)', value: 'MBps' },
    ]},
    { key: 'overhead', label: 'Protocol overhead', default: '10', options: [
      { label: 'None (theoretical)', value: '0' },
      { label: '10% (typical TCP)', value: '10' },
      { label: '15% (busy Wi-Fi)', value: '15' },
    ]},
  ],
  presets: [
    // 只覆写 size/sizeUnit:网速保留用户当前值(与 tip 预设只动 tipPct 同款口径)
    { label: 'Streaming movie (4.5 GB)', values: { size: '4.5', sizeUnit: 'GB' } },
    { label: 'Game download (80 GB)', values: { size: '80', sizeUnit: 'GB' } },
    { label: 'Photo batch (500 MB)', values: { size: '500', sizeUnit: 'MB' } },
  ],
  outputs: [
    { key: 'time', label: 'Transfer time', highlight: true },
    { key: 'totalSeconds', label: 'Total seconds' },
    { key: 'effective', label: 'Effective throughput' },
    { key: 'payloadMB', label: 'Payload size' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(DownloadTimeCalculatorL10n, locale, k, fb)
    const size = Number(v.size)
    const speed = Number(v.speed)
    const bad = { time: `⚠️ ${L('errInput', 'File size and speed must be positive numbers')}`, totalSeconds: '—', effective: '—', payloadMB: '—' }
    if (!isFinite(size) || !isFinite(speed) || size <= 0 || speed <= 0) return bad
    const unitMB = v.sizeUnit === 'MB' ? 1 : v.sizeUnit === 'GB' ? 1000 : 1e6
    const mb = size * unitMB
    const megabits = mb * 8
    const eff = 1 - Number(v.overhead) / 100
    // MB/s 输入 ×8 换成 Mbit/s;十进制 MB(1 GB = 1000 MB,运营商口径)
    const mbps = v.speedUnit === 'MBps' ? speed * 8 : speed
    const throughput = mbps * eff
    if (throughput <= 0) return bad
    const seconds = megabits / throughput
    return {
      time: fmtDuration(seconds),
      totalSeconds: `${fmtNum(seconds, 0)} s`,
      effective: `${fmtNum(throughput / 8, 2)} MB/s`,
      payloadMB: `${fmtNum(mb, 0)} MB`,
    }
  },
  chart: { kind: 'compare', title: 'Time by connection speed' },
  compare: (v) => {
    const size = Number(v.size)
    if (!isFinite(size) || size <= 0) return null
    const unitMB = v.sizeUnit === 'MB' ? 1 : v.sizeUnit === 'GB' ? 1000 : 1e6
    const mb = size * unitMB
    const megabits = mb * 8
    const eff = 1 - Number(v.overhead) / 100
    const rows = [
      { label: '4G LTE · 25 Mbps', mbps: 25 },
      { label: 'Cable · 100 Mbps', mbps: 100 },
      { label: 'Fiber · 500 Mbps', mbps: 500 },
      { label: 'Fiber · 1 Gbps', mbps: 1000 },
    ]
    return {
      rows: rows.map((r) => ({
        label: r.label,
        segments: [{ label: 'Transfer time', value: megabits / (r.mbps * eff), color: '#3b82f6' }],
      })),
      formatTotal: (n) => fmtDuration(n),
    }
  },
  note: '📡 ISPs sell megabits (Mb), files are megabytes (MB) — 8× difference, before overhead. TCP/IP headers, retransmits, and Wi-Fi contention eat 10-15%; the effective MB/s figure is the honest one. Upload is the same math with your upload speed, usually far slower.',
})

// ── 轮胎规格计算器:225/45R17 → 直径/周长/每英里转数;两规格对比 → 时速表偏差 ──
export const TireSizeCalculatorClient = makeCalculatorClient({
  slug: 'tire-size-calculator',
  l10n: TireSizeCalculatorL10n,
  inputs: [
    { key: 'tire1', label: 'Current tire', default: '225/45R17', type: 'text', placeholder: '225/45R17' },
    { key: 'tire2', label: 'New tire (leave blank to skip compare)', default: '235/45R17', type: 'text', placeholder: '235/45R17' },
    { key: 'speed', label: 'Reference speed', suffix: 'mph', default: '60', slider: { min: 10, max: 90, step: 5 } },
  ],
  outputs: [
    { key: 'd1', label: 'Current diameter' },
    { key: 'd2', label: 'New diameter' },
    { key: 'diffPct', label: 'Diameter change', highlight: true },
    { key: 'speedoAt', label: 'Speedo reading (at your true speed)' },
    { key: 'trueAt', label: 'True speed (when speedo shows reference)' },
    { key: 'revs', label: 'Revolutions per mile' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(TireSizeCalculatorL10n, locale, k, fb)
    // 解析 P215/65R15 / 225/45ZR17 / 225/45-17.5(轮毂允许小数)
    const parseTire = (s: string): { width: number; aspect: number; rim: number } | null => {
      const m = s.trim().match(/([1-9]\d{2})\s*\/\s*(\d{2,3})\s*(?:Z?R|[-–])?\s*(\d{1,2}(?:\.\d)?)/i)
      if (!m) return null
      const width = parseInt(m[1], 10)
      const aspect = parseInt(m[2], 10)
      const rim = parseFloat(m[3])
      if (width < 100 || width > 400 || aspect < 20 || aspect > 95 || rim < 8 || rim > 30) return null
      return { width, aspect, rim }
    }
    const dims = (t: { width: number; aspect: number; rim: number }) => {
      const sidewall = t.width * (t.aspect / 100) // mm
      const diameter = t.rim * 25.4 + 2 * sidewall // mm
      const circumference = Math.PI * diameter // mm
      const revs = 1609344 / circumference // 1 英里 = 1,609,344 mm
      return { sidewall, diameter, circumference, revs }
    }
    const fmtD = (mm: number) => `${fmtNum(mm, 0)} mm · ${fmtNum(mm / 25.4, 2)} in`
    const t1 = parseTire(v.tire1)
    if (!t1) {
      return { d1: `⚠️ ${L('errSpec', 'Enter the tire as WIDTH/ASPECT R RIM, e.g. 225/45R17')}`, d2: '—', diffPct: '—', speedoAt: '—', trueAt: '—', revs: '—' }
    }
    const a = dims(t1)
    const speed = Number(v.speed)
    if (!isFinite(speed) || speed <= 0) {
      return { d1: fmtD(a.diameter), d2: '—', diffPct: `⚠️ ${L('errSpeed', 'Reference speed must be positive')}`, speedoAt: '—', trueAt: '—', revs: '—' }
    }
    const t2raw = v.tire2.trim()
    const base = {
      d1: fmtD(a.diameter),
      revs: `${fmtNum(a.revs, 0)} rev/mi`,
    }
    if (t2raw === '') {
      return { ...base, d2: L('noSecond', '— enter a second size to compare'), diffPct: '—', speedoAt: '—', trueAt: '—' }
    }
    const t2 = parseTire(t2raw)
    if (!t2) {
      return { ...base, d2: `⚠️ ${L('errSpec2', 'Second tire unparseable — use e.g. 235/45R17')}`, diffPct: '—', speedoAt: '—', trueAt: '—' }
    }
    const b = dims(t2)
    const ratio = b.diameter / a.diameter
    const pct = (ratio - 1) * 100
    // 时速表按转速推算:大胎 → 每英里转数变少 → 表显偏低
    return {
      ...base,
      d2: fmtD(b.diameter),
      diffPct: `${pct >= 0 ? '+' : ''}${fmtNum(pct, 2)}%`,
      speedoAt: `${fmtNum(speed / ratio, 1)} mph (true ${fmtNum(speed, 0)})`,
      trueAt: `${fmtNum(speed, 0)} shown → ${fmtNum(speed * ratio, 1)} mph`,
      revs: `${fmtNum(a.revs, 0)} → ${fmtNum(b.revs, 0)} rev/mi`,
    }
  },
  presets: [
    { label: 'Plus-size one step', values: { tire1: '225/45R17', tire2: '235/45R17', speed: '60' } },
    { label: 'Taller sidewall (comfort)', values: { tire1: '225/45R17', tire2: '225/50R17', speed: '60' } },
    { label: 'Truck all-terrain swap', values: { tire1: '265/70R17', tire2: '285/70R17', speed: '65' } },
  ],
  chart: { kind: 'compare', title: 'Diameter: current vs new' },
  compare: (v) => {
    const parseTire = (s: string) => {
      const m = s.trim().match(/([1-9]\d{2})\s*\/\s*(\d{2,3})\s*(?:Z?R|[-–])?\s*(\d{1,2}(?:\.\d)?)/i)
      if (!m) return null
      return { width: parseInt(m[1], 10), aspect: parseInt(m[2], 10), rim: parseFloat(m[3]) }
    }
    const dims = (t: { width: number; aspect: number; rim: number }) =>
      t.rim * 25.4 + 2 * t.width * (t.aspect / 100)
    const t1 = parseTire(v.tire1)
    const t2 = v.tire2.trim() ? parseTire(v.tire2) : null
    if (!t1) return null
    const rows = [{ label: `Current ${v.tire1.trim()}`, value: dims(t1), color: '#3b82f6' }]
    if (t2) rows.push({ label: `New ${v.tire2.trim()}`, value: dims(t2), color: '#22c55e' })
    return {
      rows: rows.map((r) => ({ label: r.label, segments: [{ label: 'Diameter', value: r.value, color: r.color }] })),
      formatTotal: (n) => `${Math.round(n)} mm`,
    }
  },
  note: '📏 225/45R17: 225 mm section width, 45% aspect ratio (sidewall = 225 × 0.45 = 101 mm) on a 17-inch rim; diameter = rim × 25.4 + 2 × sidewall. A +3% diameter rule of thumb is the usual tolerance — beyond that the speedo reads low and gearing changes.',
})

// ── 风寒计算器:气温 + 风速 → 体感温度(Environment Canada / JAG-TI 公式)──
export const WindChillCalculatorClient = makeCalculatorClient({
  slug: 'wind-chill-calculator',
  l10n: WindChillCalculatorL10n,
  inputs: [
    // 上限 50:°F 预设(23°F)要落在滑杆范围内 —— 旧上限 20 会让 °F 用户
    // 一进预设就出现「数字框 23、滑杆顶死在 20」的矛盾显示;°C 侧 >10 由
    // range 行的 ⚠️ 外推标注兜底(公式适用上限 10°C,见 note)
    { key: 'temp', label: 'Air temperature', default: '-5', slider: { min: -50, max: 50, step: 1 } },
    { key: 'tUnit', label: 'Temperature unit', default: 'C', options: [
      { label: '°C', value: 'C' },
      { label: '°F', value: 'F' },
    ]},
    { key: 'wind', label: 'Wind speed', default: '30', slider: { min: 0, max: 120, step: 1 } },
    { key: 'wUnit', label: 'Wind unit', default: 'kmh', options: [
      { label: 'km/h', value: 'kmh' },
      { label: 'mph', value: 'mph' },
      { label: 'm/s', value: 'ms' },
    ]},
  ],
  outputs: [
    { key: 'chill', label: 'Wind chill', highlight: true },
    { key: 'chillAlt', label: 'In the other unit' },
    { key: 'drop', label: 'Colder than calm air' },
    { key: 'range', label: 'Formula range check' },
  ],
  compute: (v, locale) => {
    const L = (k: string, fb: string) => tuiFromEntry(WindChillCalculatorL10n, locale, k, fb)
    const t = Number(v.temp)
    const w = Number(v.wind)
    if (!isFinite(t) || !isFinite(w)) {
      return { chill: `⚠️ ${L('errInput', 'Enter numeric temperature and wind speed')}`, chillAlt: '—', drop: '—', range: '—' }
    }
    const deg = (x: number, digits = 1) => `${x >= 0 ? '' : '−'}${Math.abs(x).toFixed(digits)}°`
    // 归一到 °C 与 km/h 再套 JAG/TI 公式
    const tc = v.tUnit === 'F' ? (t - 32) * (5 / 9) : t
    const vkmh = v.wUnit === 'kmh' ? w : v.wUnit === 'mph' ? w * 1.609344 : w * 3.6
    const inRange = tc <= 10 && vkmh > 4.8
    const v016 = Math.pow(Math.max(vkmh, 0), 0.16)
    // JAG/TI(2001,公制版):W = 13.12 + 0.6215T − 11.37·V^0.16 + 0.3965·T·V^0.16
    const wcC = 13.12 + 0.6215 * tc - 11.37 * v016 + 0.3965 * tc * v016
    const outC = v.tUnit === 'C'
    const main = outC ? wcC : wcC * (9 / 5) + 32
    const alt = outC ? wcC * (9 / 5) + 32 : wcC
    const dropMain = outC ? wcC - tc : (wcC - tc) * (9 / 5)
    return {
      chill: `${deg(main)}${outC ? 'C' : 'F'}`,
      chillAlt: `${deg(alt)}${outC ? 'F' : 'C'}`,
      drop: deg(dropMain),
      range: inRange
        ? L('inRange', 'Valid — within the formula range')
        : `⚠️ ${L('outRange', 'Outside range — valid up to 10°C (50°F) and above 4.8 km/h wind')}`,
    }
  },
  chart: { kind: 'series', title: 'Wind chill vs wind speed' },
  series: (v) => {
    const t = Number(v.temp)
    const w = Number(v.wind)
    if (!isFinite(t) || !isFinite(w)) return null
    const outC = v.tUnit === 'C'
    const tc = v.tUnit === 'F' ? (t - 32) * (5 / 9) : t
    const vkmh = v.wUnit === 'kmh' ? w : v.wUnit === 'mph' ? w * 1.609344 : w * 3.6
    if (!isFinite(tc) || !isFinite(vkmh)) return null
    // 横轴刻度跟随所选风速单位(km/h 基准点换算取整),纵轴跟随所选温度单位 ——
    // 图表单位与结果卡一致,°F/mph 用户不再读到 °C/km/h 轴
    const marksKmh = [5, 10, 15, 20, 30, 40, 50, 60]
    const toUnit = (kmh: number) =>
      v.wUnit === 'mph' ? Math.round(kmh / 1.609344) : v.wUnit === 'ms' ? Math.round((kmh / 3.6) * 2) / 2 : kmh
    const marks = marksKmh.map(toUnit)
    const toC = (m: number) => (v.wUnit === 'mph' ? m * 1.609344 : v.wUnit === 'ms' ? m * 3.6 : m)
    const chillAt = (unitVal: number) => {
      const p = Math.pow(toC(unitVal), 0.16)
      return 13.12 + 0.6215 * tc - 11.37 * p + 0.3965 * tc * p
    }
    const disp = (c: number) => (outC ? c : c * (9 / 5) + 32)
    return {
      xLabels: marks.map((m) => (Number.isInteger(m) ? `${m}` : m.toFixed(1))),
      lines: [
        { key: 'chill', label: 'Wind chill', color: '#3b82f6', points: marks.map((m) => disp(chillAt(m))), area: true },
        { key: 'air', label: 'Actual air temp', color: '#94a3b8', points: marks.map(() => disp(tc)), dashed: true },
      ],
      highlightBetween: { a: 'air', b: 'chill' },
      formatY: (n) => `${n.toFixed(0)}°${outC ? 'C' : 'F'}`,
    }
  },
  presets: [
    { label: 'Frosty morning walk', values: { temp: '-5', tUnit: 'C', wind: '30', wUnit: 'kmh' } },
    { label: 'Nordic blast', values: { temp: '-15', tUnit: 'C', wind: '40', wUnit: 'kmh' } },
    { label: 'US units (23°F, 19 mph)', values: { temp: '23', tUnit: 'F', wind: '19', wUnit: 'mph' } },
  ],
  note: '🥶 Uses the Joint Action Group for Temperature Indices (JAG/TI) formula adopted by Environment Canada and the US NWS in 2001. It models exposed skin and is only defined for temps ≤ 10°C (50°F) and winds > 4.8 km/h (3 mph) — below that threshold the calculator flags the result as an extrapolation.',
})
