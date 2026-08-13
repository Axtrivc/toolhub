'use client'

import { useState, useEffect } from 'react'
import { ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'

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

/** 计算两个日期之间的差,精确到年/月/日 */
function calcAge(from: Date, to: Date) {
  if (from > to) return null

  let years = to.getFullYear() - from.getFullYear()
  let months = to.getMonth() - from.getMonth()
  let days = to.getDate() - from.getDate()

  if (days < 0) {
    months--
    // 上个月的天数
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0).getDate()
    days += prevMonth
  }
  if (months < 0) {
    years--
    months += 12
  }

  const totalMs = to.getTime() - from.getTime()
  const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24))
  const totalWeeks = Math.floor(totalDays / 7)
  const totalMonths = years * 12 + months
  const totalHours = Math.floor(totalMs / (1000 * 60 * 60))

  // 下一个生日
  let nextBirthday = new Date(to.getFullYear(), from.getMonth(), from.getDate())
  if (nextBirthday < to) {
    nextBirthday = new Date(to.getFullYear() + 1, from.getMonth(), from.getDate())
  }
  const daysToBirthday = Math.ceil(
    (nextBirthday.getTime() - to.getTime()) / (1000 * 60 * 60 * 24),
  )

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks,
    totalMonths,
    totalHours,
    daysToBirthday,
  }
}

export function AgeCalculatorClient() {
  // 初始 state 用固定值,挂载后(mounted)再填入"今天",避免 SSR/CSR 首帧
  // 因 new Date() 不同导致 hydration mismatch(构建次日访问即不一致)。
  const [birth, setBirth] = useState('2000-01-01')
  const [target, setTarget] = useState('')
  const [todayStr, setTodayStr] = useState('')
  const [, setTick] = useState(0)

  useEffect(() => {
    setTodayStr(toInputDate(new Date()))
    setTarget((prev) => prev || toInputDate(new Date()))
    const timer = setInterval(() => setTick((t) => t + 1), 60000)
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
            Date of birth
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
            Age at date
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
            label="Your age"
            value={
              <span>
                {result.years}
                <span className="text-base font-normal text-slate-500"> yrs </span>
                {result.months}
                <span className="text-base font-normal text-slate-500"> mo </span>
                {result.days}
                <span className="text-base font-normal text-slate-500"> days</span>
              </span>
            }
            highlight
            sublabel="As of the selected date"
          />

          {/* 其他单位 */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <ResultCard label="Total months" value={fmt(result.totalMonths)} />
            <ResultCard label="Total weeks" value={fmt(result.totalWeeks)} />
            <ResultCard label="Total days" value={fmt(result.totalDays)} />
            <ResultCard label="Total hours" value={fmt(result.totalHours)} />
          </div>

          {/* 下一个生日 */}
          <div className="rounded-lg border border-brand-200 bg-brand-50 p-5 text-center">
            <div className="text-sm font-medium text-brand-600">
              🎂 Next birthday in {result.daysToBirthday} {result.daysToBirthday === 1 ? 'day' : 'days'}
            </div>
          </div>
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          The &quot;age at date&quot; must be after the date of birth
        </div>
      )}

      <CalculatorNote>
        📅 You can change the &quot;age at date&quot; to calculate age at any past or future date —
        useful for deadlines, age verification, or historical calculations.
      </CalculatorNote>
    </div>
  )
}
