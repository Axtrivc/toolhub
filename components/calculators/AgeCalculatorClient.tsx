'use client'

import { useState, useEffect, useRef } from 'react'
import { ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { calendarDaysBetween } from '@/lib/date-utils'

function toInputDate(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${dd}`
}

/** 把 'YYYY-MM-DD' 按本地时区解析（避免 new Date('YYYY-MM-DD') 按 UTC 解析导致西半球差一天） */
function parseLocalDate(s: string): Date {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}

/** 从 from 出发加 n 个月,日按「出生日」锚定,超出目标月天数则钳到月末(1-31 + 1 月 = 2-28/29) */
function addMonthsClamped(from: Date, n: number): Date {
  const m = from.getMonth() + n
  const y = from.getFullYear() + Math.floor(m / 12)
  const mo = ((m % 12) + 12) % 12
  const lastDay = new Date(y, mo + 1, 0).getDate()
  return new Date(y, mo, Math.min(from.getDate(), lastDay))
}

/** 计算两个日期之间的差,精确到年/月/日 */
function calcAge(from: Date, to: Date) {
  // 清空日期输入后 parseLocalDate('') 会得到 Invalid Date,直接走空态而非渲染 NaN
  if (isNaN(from.getTime()) || isNaN(to.getTime())) return null
  if (from > to) return null

  // 两步法:先按月数差锚定,再用日历日差算余数天数。
  // 旧实现逐字段相减只借位一次,出生日 29-31 日 + 目标月 1-2 日时会得到负天数
  // (2000-01-31 → 2024-03-01 曾显示 "24y 1m -1d",现在为 24y 1m 1d,天数恒非负)。
  const rawMonths =
    (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth())
  let anchor = addMonthsClamped(from, rawMonths)
  let months = rawMonths
  if (anchor > to) {
    months--
    anchor = addMonthsClamped(from, months)
  }
  const years = Math.floor(months / 12)
  const days = calendarDaysBetween(anchor, to)

  const totalMs = to.getTime() - from.getTime()
  // 日/周差用日历日(DST 安全),小时差保留真实流逝毫秒
  const totalDays = calendarDaysBetween(from, to)
  const totalWeeks = Math.floor(totalDays / 7)
  const totalHours = Math.floor(totalMs / (1000 * 60 * 60))

  // 下一个生日
  let nextBirthday = new Date(to.getFullYear(), from.getMonth(), from.getDate())
  if (nextBirthday < to) {
    nextBirthday = new Date(to.getFullYear() + 1, from.getMonth(), from.getDate())
  }
  const daysToBirthday = calendarDaysBetween(to, nextBirthday)

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks,
    totalMonths: months,
    totalHours,
    daysToBirthday,
  }
}

export function AgeCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('age-calculator', locale, key, fb)

  // 初始 state 用固定值,挂载后(mounted)再填入"今天",避免 SSR/CSR 首帧
  // 因 new Date() 不同导致 hydration mismatch(构建次日访问即不一致)。
  const [birth, setBirth] = useState('2000-01-01')
  const [target, setTarget] = useState('')
  const [todayStr, setTodayStr] = useState('')
  // 供 interval 闭包读取"当前今天"而无需重建定时器
  const todayRef = useRef('')

  useEffect(() => {
    const nowStr = toInputDate(new Date())
    todayRef.current = nowStr
    setTodayStr(nowStr)
    setTarget((prev) => prev || nowStr)
    const timer = setInterval(() => {
      // 跨午夜同步 todayStr(以及仍等于旧"今天"的自动填充 target),
      // 否则 60s tick 只重渲染、日期冻结在挂载日
      const next = toInputDate(new Date())
      const prevDay = todayRef.current
      if (next === prevDay) return
      todayRef.current = next
      setTodayStr(next)
      setTarget((t) => (t === prevDay ? next : t))
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  // 渲染期用 state(todayStr)而非直接 new Date(),保证首帧与 SSR 一致
  const today = todayStr ? parseLocalDate(todayStr) : null
  const birthDate = parseLocalDate(birth)
  const targetDate = target ? parseLocalDate(target) : today
  const result = targetDate ? calcAge(birthDate, targetDate) : null

  const fmt = (n: number) => n.toLocaleString()

  return (
    <div className="space-y-6">
      {/* 输入区 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="birth" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('dateOfBirth', 'Date of birth')}
          </label>
          <input
            id="birth"
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            max={todayStr || undefined}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div>
          <label htmlFor="target" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('ageAtDate', 'Age at date')}
          </label>
          <input
            id="target"
            type="date"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text))' }}
          />
        </div>
      </div>

      {/* 结果区 */}
      {result ? (
        <>
          <ResultCard
            label={L('yourAge', 'Your age')}
            value={
              <span>
                {result.years}
                <span className="text-base font-normal text-slate-500 dark:text-slate-400">{L('yrsAbbr', ' yrs ')}</span>
                {result.months}
                <span className="text-base font-normal text-slate-500 dark:text-slate-400">{L('moAbbr', ' mo ')}</span>
                {result.days}
                <span className="text-base font-normal text-slate-500 dark:text-slate-400">{L('daysAbbr', ' days')}</span>
              </span>
            }
            highlight
            sublabel={L('asOfSelectedDate', 'As of the selected date')}
          />

          {/* 其他单位 */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <ResultCard label={L('totalMonths', 'Total months')} value={fmt(result.totalMonths)} />
            <ResultCard label={L('totalWeeks', 'Total weeks')} value={fmt(result.totalWeeks)} />
            <ResultCard label={L('totalDays', 'Total days')} value={fmt(result.totalDays)} />
            <ResultCard label={L('totalHours', 'Total hours')} value={fmt(result.totalHours)} />
          </div>

          {/* 下一个生日 */}
          <div className="rounded-lg border border-brand-200 bg-brand-50 p-5 text-center dark:border-brand-800/60 dark:bg-brand-950/30">
            <div className="text-sm font-medium text-brand-600">
              {result.daysToBirthday === 0
                ? L('birthdayToday', '🎂 Happy birthday — today is the day!')
                : `${L('nextBirthdayIn', '🎂 Next birthday in ')}${result.daysToBirthday} ${result.daysToBirthday === 1 ? L('day', 'day') : L('days', 'days')}`}
            </div>
          </div>
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          {L('emptyState', 'The "age at date" must be after the date of birth')}
        </div>
      )}

      <CalculatorNote>
        {L('note', '📅 You can change the "age at date" to calculate age at any past or future date — useful for deadlines, age verification, or historical calculations.')}
      </CalculatorNote>
    </div>
  )
}
