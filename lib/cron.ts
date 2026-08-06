/**
 * 纯 TS 5-field cron 引擎(零依赖)
 *
 * 字段顺序(标准 Vixie cron):
 *   minute(0-59) hour(0-23) day-of-month(1-31) month(1-12) day-of-week(0-6,0=Sun)
 *
 * 支持语法:`*` / 字面量 / `,` 列表 / `-` 范围 / `/` 步长。
 * DOM 与 DOW 的 OR 语义:当两者都不是 `*` 时,任一满足即触发(标准行为)。
 *
 * 用法:见 components/calculators/CronParserClient.tsx
 */

export interface CronSchedule {
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

/** 解析 5-field cron 字符串为 CronSchedule(正确标记 domStar/dowStar 用于 OR 语义判断)。 */
export function parseCronSchedule(expr: string): CronSchedule {
  const parts = expr.trim().split(/\s+/)
  if (parts.length !== 5) {
    throw new Error(`Expected 5 fields, got ${parts.length}. Use: minute hour day month weekday`)
  }
  const [minute, hour, dom, month, dowRaw] = parts
  const dowField = dowRaw === '7' ? '0' : dowRaw
  return {
    minute: parseField(minute, 0, 59),
    hour: parseField(hour, 0, 23),
    dom: parseField(dom, 1, 31),
    month: parseField(month, 1, 12, MONTH_NAMES),
    dow: parseField(dowField, 0, 6, DOW_NAMES),
    domStar: dom === '*',
    dowStar: dowField === '*',
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
 * 求从 from(含)之后下一次触发时间(秒/毫秒归零,按分钟粒度)。
 * 找不到(4 年内无解)返回 null,避免死循环。
 */
export function nextFire(expr: string, from: Date = new Date()): Date | null {
  const s = parseCronSchedule(expr)
  // 从下一分钟整点开始(丢弃当前分钟的秒)
  const start = new Date(from.getTime() + 60000)
  start.setSeconds(0, 0)

  const cursor = new Date(start)
  // 上限:扫描 4 年(闰年周期),超过认为无解
  const limit = new Date(start.getTime() + 4 * 365 * 24 * 3600 * 1000)
  while (cursor <= limit) {
    if (matches(cursor, s)) return cursor
    cursor.setMinutes(cursor.getMinutes() + 1)
    // 月份不匹配时快进:若 month 集合不含当前月,跳到下个可能月份的 1 号 0 点
    if (!s.month.has(cursor.getMonth() + 1)) {
      cursor.setMonth(cursor.getMonth() + 1, 1)
      cursor.setHours(0, 0, 0, 0)
    }
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

/** 把 5-field cron 翻译成一句人类可读英文。 */
export function describeCron(expr: string): string {
  const [minF, hrF, domF, monF, dowF] = expr.trim().split(/\s+/)
  const dowNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monNames = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  // 时间部分
  let time: string
  if (minF === '*' && hrF === '*') {
    time = 'every minute'
  } else if (minF === '*' ) {
    time = `every minute during the ${describeHourList(hrF)}`
  } else if (hrF === '*') {
    time = `at minute ${describeList(minF)} of every hour`
  } else {
    // 组合具体时分
    const minutes = expand(minF, 0, 59)
    const hours = expand(hrF, 0, 23)
    const times = minutes.flatMap((m) => hours.map((h) => formatTime(h, m)))
    time = `at ${times.join(', ')}`
  }

  // 日期部分
  let day: string
  if (domF === '*' && dowF === '*') {
    day = 'every day'
  } else if (domF === '*') {
    const dows = expand(dowF === '7' ? '0' : dowF, 0, 6)
    day = `on ${dows.map((d) => dowNames[d]).join(', ')}`
  } else if (dowF === '*') {
    day = `on day-of-month ${describeList(domF)}`
  } else {
    // OR 语义
    const dows = expand(dowF === '7' ? '0' : dowF, 0, 6)
    const doms = expand(domF, 1, 31)
    day = `on day-of-month ${doms.join(', ')} OR on ${dows.map((d) => dowNames[d]).join(', ')}`
  }

  // 月份部分
  let month: string
  if (monF === '*') {
    month = ''
  } else {
    const months = expand(monF, 1, 12)
    month = ` in ${months.map((m) => monNames[m]).join(', ')}`
  }

  // 简化常见情况
  if (time === 'every minute' && day === 'every day' && !month) return 'Every minute, every day'
  return capitalize(`${time}, ${day}${month}`)
}

// ── describeCron 的小工具 ──
function expand(field: string, min: number, max: number): number[] {
  try {
    return Array.from(parseField(field, min, max)).sort((a, b) => a - b)
  } catch {
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
