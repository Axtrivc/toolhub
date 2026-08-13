'use client'

import { useState, useEffect, useMemo } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'

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

/**
 * 日期差计算器 - 独立组件
 * 计算两个日期之间的年/月/日/总天数/工作日等。
 */
export function DateDifferenceClient() {
  // 初始 state 用固定值,挂载后(mounted)再填入"今天/年初",
  // 避免 SSR/CSR 首帧因 new Date() 不同导致 hydration mismatch。
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  useEffect(() => {
    const now = new Date()
    setStart((prev) => prev || toInputDate(new Date(now.getFullYear(), 0, 1)))
    setEnd((prev) => prev || toInputDate(now))
  }, [])

  const result = useMemo(() => {
    const s = parseLocalDate(start)
    const e = parseLocalDate(end)
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
    const MAX_SCAN_DAYS = 100000 // 防极端日期范围卡顿
    let scanned = 0
    while (cur <= e && scanned < MAX_SCAN_DAYS) {
      const dow = cur.getDay()
      if (dow !== 0 && dow !== 6) businessDays++
      cur.setDate(cur.getDate() + 1)
      scanned++
    }

    return { years, months, days, totalDays, totalWeeks, totalMonths, totalHours, businessDays }
  }, [start, end])

  const fmt = (n: number) => n.toLocaleString()

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="start" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>Start date</label>
          <input
            id="start"
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div>
          <label htmlFor="end" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>End date</label>
          <input
            id="end"
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text))' }}
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
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
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
