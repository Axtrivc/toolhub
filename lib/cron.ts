/**
 * 纯 TS cron 引擎(零依赖)
 *
 * 字段顺序(标准 Vixie cron):
 *   minute(0-59) hour(0-23) day-of-month(1-31) month(1-12) day-of-week(0-6,0=Sun)
 *
 * 额外支持:
 *  - @ 别名:@yearly/@annually/@monthly/@weekly/@daily/@midnight/@hourly 展开为
 *    等价 5 字段表达式;@reboot 无周期(调度器启动时执行一次),用 isRebootAlias 判断。
 *  - 6 字段(Quartz 风格):首字段为秒(0-59);
 *  - 7 字段:秒 分 时 日 月 周 年 —— 年字段被忽略(每年都可能触发)。
 *  - dom/dow 位置的 ?(Quartz「不指定」)按 * 处理。
 *
 * 支持语法:`*` / 字面量 / `,` 列表 / `-` 范围 / `/` 步长。
 * DOM 与 DOW 的 OR 语义:当两者都不是 `*` 时,任一满足即触发(标准行为)。
 *
 * 用法:见 components/calculators/CronParserClient.tsx
 */

import { tui } from './i18n/tool-l10n'
import type { Locale } from './i18n'

export interface CronSchedule {
  /** 秒(0-59),仅 6/7 字段表达式存在 */
  second?: Set<number>
  minute: Set<number>
  hour: Set<number>
  dom: Set<number>
  month: Set<number>
  dow: Set<number>
  /** dom 是否为 * 通配(决定 OR 语义) */
  domStar: boolean
  /** dow 是否为 * 通配(决定 OR 语义) */
  dowStar: boolean
}

/** @ 别名 → 等价 5 字段表达式(@reboot 无周期,单独用 isRebootAlias 判断) */
const ALIASES: Record<string, string> = {
  '@yearly': '0 0 1 1 *',
  '@annually': '0 0 1 1 *',
  '@monthly': '0 0 1 * *',
  '@weekly': '0 0 * * 0',
  '@daily': '0 0 * * *',
  '@midnight': '0 0 * * *',
  '@hourly': '0 * * * *',
}

/** 是否为 @reboot(启动时执行一次,无重复周期,不存在"下次触发时间") */
export function isRebootAlias(expr: string): boolean {
  return expr.trim() === '@reboot'
}

/** @ 别名展开为等价 5 字段表达式;非别名原样返回;未知的 @xxx 抛错 */
export function expandAlias(expr: string): string {
  const t = expr.trim()
  if (!t.startsWith('@')) return expr
  if (t === '@reboot') return t
  const expanded = ALIASES[t]
  if (!expanded) throw new Error(`Unknown alias "${t}"`)
  return expanded
}

/** 解析单个字段(支持 *, 列表, 范围, 步长)。返回允许值的集合;非法抛错。 */
function parseField(field: string, min: number, max: number, names?: Record<string, number>): Set<number> {
  const result = new Set<number>()
  if (!field) throw new Error(`Empty field`)

  for (const part of field.split(',')) {
    const [rangePart, stepPart] = part.split('/')
    const step = stepPart ? parseInt(stepPart, 10) : 1
    if (!Number.isFinite(step) || step <= 0) throw new Error(`Invalid step "${stepPart}"`)

    let lo: number
    let hi: number

    if (rangePart === '*') {
      lo = min
      hi = max
    } else if (rangePart.includes('-')) {
      const [a, b] = rangePart.split('-')
      lo = resolveToken(a.trim(), names)
      hi = resolveToken(b.trim(), names)
    } else {
      const v = resolveToken(rangePart.trim(), names)
      lo = v
      // 单值 + 步长 → 从该值到字段上界
      hi = stepPart ? max : v
    }

    if (lo < min || hi > max || lo > hi) {
      throw new Error(`Value out of range "${part}" (allowed ${min}-${max})`)
    }
    for (let v = lo; v <= hi; v += step) result.add(v)
  }

  if (result.size === 0) throw new Error(`No values parsed from "${field}"`)
  return result
}

/** 解析单个 token:支持数字或名称(JAN..DEC / SUN..SAT) */
function resolveToken(token: string, names?: Record<string, number>): number {
  if (names && token.toUpperCase() in names) return names[token.toUpperCase()]
  const n = parseInt(token, 10)
  if (!Number.isFinite(n)) throw new Error(`Invalid value "${token}"`)
  return n
}

const MONTH_NAMES: Record<string, number> = {
  JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6,
  JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12,
}
const DOW_NAMES: Record<string, number> = {
  SUN: 0, MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6,
}

/** dow 字段解析:7 是 0(周日)的别名,按 0-7 展开后把 7 映射回 0(覆盖 1,7 / 0-7 / 5-7) */
function parseDowField(field: string): Set<number> {
  const result = parseField(field, 0, 7, DOW_NAMES)
  if (result.delete(7)) result.add(0)
  return result
}

/**
 * 解析 cron 字符串为 CronSchedule(正确标记 domStar/dowStar 用于 OR 语义判断)。
 * 5 字段:minute hour dom month dow;
 * 6 字段:second minute hour dom month dow(首字段秒);
 * 7 字段:second minute hour dom month dow year(年字段忽略);
 * @ 别名先展开(@reboot 不在此处理,用 isRebootAlias)。
 */
export function parseCronSchedule(expr: string): CronSchedule {
  const parts = expandAlias(expr).trim().split(/\s+/)
  let secondField: string | undefined
  let fields: string[]
  if (parts.length === 6 || parts.length === 7) {
    secondField = parts[0]
    // 7 字段时丢弃末尾的年字段(parts.slice(1, 6) 恰取 分 时 日 月 周)
    fields = parts.slice(1, 6)
  } else {
    fields = parts
  }
  if (fields.length !== 5) {
    throw new Error(`Expected 5-7 fields, got ${parts.length}. Use: [second] minute hour day month weekday [year]`)
  }
  const [minute, hour, domRaw, month, dowRaw] = fields
  // Quartz 的 ?(dom/dow 位置「不指定」)按 * 处理
  const dom = domRaw === '?' ? '*' : domRaw
  const dow = dowRaw === '?' ? '*' : dowRaw
  return {
    ...(secondField !== undefined ? { second: parseField(secondField, 0, 59) } : {}),
    minute: parseField(minute, 0, 59),
    hour: parseField(hour, 0, 23),
    dom: parseField(dom, 1, 31),
    month: parseField(month, 1, 12, MONTH_NAMES),
    dow: parseDowField(dow),
    domStar: dom === '*',
    dowStar: dow === '*',
  }
}

/** 判断给定 Date 是否匹配 schedule(各字段都满足,且 DOM/DOW 用 OR) */
function matches(date: Date, s: CronSchedule): boolean {
  const m = date.getMinutes()
  const h = date.getHours()
  const dom = date.getDate()
  const month = date.getMonth() + 1
  // JS getDay(): 0=Sunday..6=Saturday(与 cron 一致)
  const dow = date.getDay()

  if (!s.minute.has(m) || !s.hour.has(h) || !s.month.has(month)) return false

  // Vixie cron:当 dom 与 dow 都被限制(非 *)时,二者其一满足即触发。
  const domMatch = s.dom.has(dom)
  const dowMatch = s.dow.has(dow)
  if (!s.domStar && !s.dowStar) {
    return domMatch || dowMatch
  }
  // 其中一个是 * → 只看被限制的那个(若都是 *,domMatch/dowMatch 都看,结果等价)
  return domMatch && dowMatch
}

/**
 * 求从 from(含)之后下一次触发时间(按分钟粒度扫描;有秒字段时分钟内选最小允许秒)。
 * 找不到(4 年内无解)返回 null,避免死循环。
 */
export function nextFire(expr: string, from: Date = new Date()): Date | null {
  const s = parseCronSchedule(expr)
  const allowedSecs = s.second ? Array.from(s.second).sort((a, b) => a - b) : [0]
  const firstSec = allowedSecs[0]
  // 无秒字段:从下一分钟整点开始(丢弃当前分钟的秒,与旧行为一致);
  // 有秒字段:从 from+1s 开始,当前分钟内可能还有更晚的允许秒
  const start = new Date(from.getTime() + (s.second ? 1000 : 60000))
  start.setSeconds(s.second ? start.getSeconds() : 0, 0)

  const cursor = new Date(start)
  // 上限:扫描 4 年(1461 天,闰年周期含 1 个闰日),超过认为无解
  const limit = new Date(start.getTime() + 1461 * 24 * 3600 * 1000)
  while (cursor <= limit) {
    // 月份不匹配时逐月快进:连续不匹配连续跳,避免逐分钟空扫
    while (!s.month.has(cursor.getMonth() + 1)) {
      cursor.setMonth(cursor.getMonth() + 1, 1)
      cursor.setHours(0, 0, 0, 0)
      if (cursor > limit) return null
    }
    if (matches(cursor, s)) {
      // matches 只对到分钟:在该分钟内取 ≥ 当前秒的最小允许秒
      const sec = allowedSecs.find((x) => x >= cursor.getSeconds())
      if (sec !== undefined) {
        const fire = new Date(cursor.getTime())
        fire.setSeconds(sec, 0)
        return fire
      }
    }
    cursor.setMinutes(cursor.getMinutes() + 1)
    // 推进到下一分钟的第一个允许秒,后续候选分钟都能命中 firstSec
    cursor.setSeconds(firstSec, 0)
  }
  return null
}

/** 求接下来 n 次触发时间(顺序、去重)。 */
export function nextFires(expr: string, n: number, from: Date = new Date()): Date[] {
  const result: Date[] = []
  let cursor = new Date(from.getTime())
  for (let i = 0; i < n; i++) {
    const next = nextFire(expr, cursor)
    if (!next) break
    result.push(next)
    // 游标推进 +1 秒(而非 +60000):nextFire 内部会先 +60000 再截断到整分,
    // 若游标正好落在整分边界(next+60000),下一次 +60000 会越过该整分导致跳秒。
    // +1000 让 nextFire 的 +60000→截断 正好落在下一个整分。
    cursor = new Date(next.getTime() + 1000)
  }
  return result
}

/** 把 cron 表达式翻译成一句人类可读描述(locale 缺省英文;非英文经 cron-parser bundle 取模板)。 */
export function describeCron(expr: string, locale: Locale = 'en'): string {
  const L = (key: string, fb: string) => tui('cron-parser', locale, key, fb)
  // @reboot:启动时执行一次,无周期语义,单独描述
  if (isRebootAlias(expr)) {
    return L('atReboot', 'At startup (@reboot) — runs once when the scheduler starts, no repeating schedule')
  }
  const parts = expandAlias(expr).trim().split(/\s+/)
  let secF: string | undefined
  let fields: string[]
  if (parts.length === 6 || parts.length === 7) {
    secF = parts[0]
    fields = parts.slice(1, 6) // 7 字段时忽略末尾年字段
  } else {
    fields = parts
  }
  const [minF, hrF, domRaw, monF, dowRaw] = fields
  // Quartz 的 ?(dom/dow「不指定」)按 * 处理
  const domF = domRaw === '?' ? '*' : domRaw
  const dowF = dowRaw === '?' ? '*' : dowRaw
  const dowNames = [
    L('dow0', 'Sunday'), L('dow1', 'Monday'), L('dow2', 'Tuesday'), L('dow3', 'Wednesday'),
    L('dow4', 'Thursday'), L('dow5', 'Friday'), L('dow6', 'Saturday'),
  ]
  const monNames = [
    '', L('mon1', 'January'), L('mon2', 'February'), L('mon3', 'March'), L('mon4', 'April'),
    L('mon5', 'May'), L('mon6', 'June'), L('mon7', 'July'), L('mon8', 'August'),
    L('mon9', 'September'), L('mon10', 'October'), L('mon11', 'November'), L('mon12', 'December'),
  ]

  // 秒部分:6/7 字段且秒字段被限定(非 *、非 0)时,前置"第 N 秒"说明
  let secPart = ''
  if (secF && secF !== '*' && secF !== '0') {
    secPart = L('atSecond', 'at second {secs}, ').replace('{secs}', describeList(secF))
  }

  // 时间部分
  let time: string
  if (minF === '*' && hrF === '*') {
    time = L('everyMinute', 'every minute')
  } else if (minF === '*' ) {
    time = L('everyMinuteDuring', 'every minute past hour(s) {hours}').replace('{hours}', describeHourList(hrF))
  } else if (hrF === '*') {
    time = L('atMinuteOfEveryHour', 'at minute {mins} of every hour').replace('{mins}', describeList(minF))
  } else {
    // 组合具体时分
    const minutes = expand(minF, 0, 59)
    const hours = expand(hrF, 0, 23)
    const times = minutes.flatMap((m) => hours.map((h) => formatTime(h, m)))
    time = L('atTimes', 'at {times}').replace('{times}', times.join(', '))
  }

  // 日期部分
  let day: string
  if (domF === '*' && dowF === '*') {
    day = L('everyDay', 'every day')
  } else if (domF === '*') {
    const dows = expandDow(dowF)
    day = L('onDays', 'on {days}').replace('{days}', dows.map((d) => dowNames[d]).join(', '))
  } else if (dowF === '*') {
    day = L('onDayOfMonth', 'on day-of-month {doms}').replace('{doms}', describeList(domF))
  } else {
    // OR 语义
    const dows = expandDow(dowF)
    const doms = expand(domF, 1, 31)
    day = L('onDomOrDow', 'on day-of-month {doms} OR on {dows}')
      .replace('{doms}', doms.join(', '))
      .replace('{dows}', dows.map((d) => dowNames[d]).join(', '))
  }

  // 月份部分
  let month: string
  if (monF === '*') {
    month = ''
  } else {
    const months = expand(monF, 1, 12)
    month = L('inMonths', ' in {months}').replace('{months}', months.map((m) => monNames[m]).join(', '))
  }

  // 简化常见情况
  if (minF === '*' && hrF === '*' && domF === '*' && dowF === '*' && monF === '*' && !secPart) {
    return L('everyMinuteEveryDay', 'Every minute, every day')
  }
  return capitalize(L('finalTemplate', '{time}, {day}{month}')
    .replace('{time}', secPart + time)
    .replace('{day}', day)
    .replace('{month}', month))
}

// ── describeCron 的小工具 ──
function expand(field: string, min: number, max: number): number[] {
  try {
    return Array.from(parseField(field, min, max)).sort((a, b) => a - b)
  } catch (err) {
    console.warn('cron expand failed:', field, err)
    return []
  }
}
function expandDow(field: string): number[] {
  try {
    return Array.from(parseDowField(field)).sort((a, b) => a - b)
  } catch (err) {
    console.warn('cron expand failed:', field, err)
    return []
  }
}
function describeList(field: string): string {
  return expand(field, 0, 59).join(', ') || field
}
function describeHourList(field: string): string {
  const hs = expand(field, 0, 23)
  return hs.map((h) => formatTime(h, 0).replace(':00', '') + ':00').join(', ')
}
function formatTime(h: number, m: number): string {
  const hh = String(h).padStart(2, '0')
  const mm = String(m).padStart(2, '0')
  return `${hh}:${mm}`
}
function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
