'use client'

import { useState, useMemo } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'

function toInputDate(d: Date): string {
  return d.toISOString().slice(0, 10)
}

/**
 * 日期差计算器 - 独立组件
 * 计算两个日期之间的年/月/日/总天数/工作日等。
 */
export function DateDifferenceClient() {
  const today = new Date()
  const [start, setStart] = useState(toInputDate(new Date(today.getFullYear(), 0, 1)))
  const [end, setEnd] = useState(toInputDate(today))

  const result = useMemo(() => {
    const s = new Date(start)
    const e = new Date(end)
    if (isNaN(s.getTime()) || isNaN(e.getTime())) return null
    if (s > e) return null

    // 精确年月日
    let years = e.getFullYear() - s.getFullYear()
    let months = e.getMonth() - s.getMonth()
    let days = e.getDate() - s.getDate()
    if (days < 0) {
      months--
      const prevMonth = new Date(e.getFullYear(), e.getMonth(), 0).getDate()
      days += prevMonth
    }
    if (months < 0) {
      years--
      months += 12
    }

    const totalMs = e.getTime() - s.getTime()
    const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24))
    const totalWeeks = Math.floor(totalDays / 7)
    const totalMonths = years * 12 + months
    const totalHours = Math.floor(totalMs / (1000 * 60 * 60))

    // 计算工作日(排除周六日)
    let businessDays = 0
    const cur = new Date(s)
    while (cur <= e) {
      const dow = cur.getDay()
      if (dow !== 0 && dow !== 6) businessDays++
      cur.setDate(cur.getDate() + 1)
    }

    return { years, months, days, totalDays, totalWeeks, totalMonths, totalHours, businessDays }
  }, [start, end])

  const fmt = (n: number) => n.toLocaleString()

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-2">
        <div>
          <label htmlFor="start" className="mb-1.5 block text-sm font-medium text-slate-700">Start date</label>
          <input
            id="start"
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 text-slate-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <div>
          <label htmlFor="end" className="mb-1.5 block text-sm font-medium text-slate-700">End date</label>
          <input
            id="end"
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 text-slate-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </div>
      </div>

      {result ? (
        <>
          <ResultCard
            label="Duration"
            value={
              <span>
                {result.years > 0 && `${result.years} yr `}
                {result.months > 0 && `${result.months} mo `}
                {result.days} days
              </span>
            }
            highlight
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <ResultCard label="Total days" value={fmt(result.totalDays)} />
            <ResultCard label="Total weeks" value={fmt(result.totalWeeks)} />
            <ResultCard label="Total months" value={fmt(result.totalMonths)} />
            <ResultCard label="Total hours" value={fmt(result.totalHours)} />
            <ResultCard label="Business days" value={fmt(result.businessDays)} sublabel="Mon–Fri" />
          </div>
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
          End date must be after start date
        </div>
      )}

      <CalculatorNote>
        📅 Useful for project planning, contract durations, age calculations, and deadline tracking.
        Business days exclude weekends (Saturday and Sunday).
      </CalculatorNote>
    </div>
  )
}
