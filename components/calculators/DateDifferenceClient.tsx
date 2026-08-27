'use client'

import { useState, useEffect, useMemo } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { ResultActions } from '../ResultActions'
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

/**
 * 日期差计算器 - 独立组件
 * 计算两个日期之间的年/月/日/总天数/工作日等。
 */
export function DateDifferenceClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('date-difference-calculator', locale, key, fb)

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
    // 空日期(清空输入框/首帧)直接走空态:parseLocalDate('') 会得到 Invalid/1899 值,
    // 不拦会在首帧闪 "0 天"
    if (!start || !end) return null
    const s = parseLocalDate(start)
    const e = parseLocalDate(end)
    if (isNaN(s.getTime()) || isNaN(e.getTime())) return { error: L('errInvalidDate', 'Enter both dates in YYYY-MM-DD format.') }
    if (s > e) return { error: L('errEndBeforeStart', 'End date is earlier than start date.') }

    // 精确年月日:「整月推进(日期钳制到月末)+ 剩余日历日」口径(与 date-fns
    // differenceIn* 家族一致)。旧实现只在末月借位一次,起日晚于末月长度时
    // 会产生负的 days(如 2025-01-31 → 2025-03-01 显示 "1 mo -2 days")。
    // 月界比较必须按「本地日历日」而非毫秒:历史时区切换(如 1940 年上海 +0900)
    // 会给组件构造的日期引入 ±1h 偏移,毫秒比较会把整月误判成非整月。
    const cmpDay = (x: Date, y: Date): number =>
      Date.UTC(x.getFullYear(), x.getMonth(), x.getDate()) -
      Date.UTC(y.getFullYear(), y.getMonth(), y.getDate())
    const addMonthsClamped = (n: number): Date => {
      // 起点加 n 个月;目标月没有同一「日」时钳到月末(JS 默认会滚进下个月)
      const t = new Date(s.getFullYear(), s.getMonth() + n, 1)
      const dim = new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate()
      t.setDate(Math.min(s.getDate(), dim))
      return t
    }
    let wholeMonths = Math.max(0, e.getFullYear() * 12 + e.getMonth() - (s.getFullYear() * 12 + s.getMonth()))
    if (wholeMonths > 0 && cmpDay(addMonthsClamped(wholeMonths), e) > 0) wholeMonths--
    const years = Math.floor(wholeMonths / 12)
    const months = wholeMonths - years * 12
    const days = calendarDaysBetween(addMonthsClamped(wholeMonths), e)

    const totalMs = e.getTime() - s.getTime()
    // 日/周差用日历日(DST 安全),小时差保留真实流逝毫秒
    const totalDays = calendarDaysBetween(s, e)
    const totalWeeks = Math.floor(totalDays / 7)
    const totalMonths = years * 12 + months
    const totalHours = Math.floor(totalMs / (1000 * 60 * 60))

    // 计算工作日(排除周六日,(start, end] 半开区间)——与 DaysCountdownCalculatorClient
    // 的 businessDaysBetween 同口径,同一组日期两个工具给出相同答案
    // (旧实现含首尾两天,周一→下周一会显示 6 而倒计时工具显示 5)
    const dowStart = s.getDay()
    let businessDays = totalWeeks * 5
    for (let k = totalWeeks * 7 + 1; k <= totalDays; k++) {
      const dow = (dowStart + k) % 7
      if (dow !== 0 && dow !== 6) businessDays++
    }

    return { years, months, days, totalDays, totalWeeks, totalMonths, totalHours, businessDays }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end, locale])

  const fmt = (n: number) => n.toLocaleString('en-US')

  // 结果摘要(纯文本):仅在有有效结果时提供 Copy/Download 通道(口径同家族其余工具)
  const summary =
    result && !('error' in result)
      ? [
          `${L('startDate', 'Start date')}: ${start}`,
          `${L('endDate', 'End date')}: ${end}`,
          `${L('totalDays', 'Total days')}: ${fmt(result.totalDays)}`,
          `${L('businessDays', 'Business days')} (${L('monFri', 'Mon–Fri')}): ${fmt(result.businessDays)}`,
        ].join('\n')
      : null

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="start" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('startDate', 'Start date')}</label>
          <input
            id="start"
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div>
          <label htmlFor="end" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('endDate', 'End date')}</label>
          <input
            id="end"
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
      </div>

      {!result ? (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          {L('emptyState', 'Pick two dates to see the duration between them.')}
        </div>
      ) : 'error' in result ? (
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">
          ⚠️ {result.error}
        </div>
      ) : (
        <>
          {/* 结果区(aria-live:改日期时屏幕阅读器播报,口径同 makeCalculatorClient) */}
          <div role="status" aria-live="polite">
            <ResultCard
              label={L('duration', 'Duration')}
              value={
                <span className="tabular-nums">
                  {result.years > 0 && `${result.years}${L('yrAbbr', ' yr ')}`}
                  {result.months > 0 && `${result.months}${L('moAbbr', ' mo ')}`}
                  {result.days}{L('daysWord', ' days')}
                </span>
              }
              highlight
            />
          </div>
          <div role="status" aria-live="polite" className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <ResultCard label={L('totalDays', 'Total days')} value={fmt(result.totalDays)} />
            <ResultCard label={L('totalWeeks', 'Total weeks')} value={fmt(result.totalWeeks)} />
            <ResultCard label={L('totalMonths', 'Total months')} value={fmt(result.totalMonths)} />
            <ResultCard label={L('totalHours', 'Total hours')} value={fmt(result.totalHours)} />
            <ResultCard label={L('businessDays', 'Business days')} value={fmt(result.businessDays)} sublabel={L('monFri', 'Mon–Fri')} />
          </div>

          {/* 时长构成条:年/月/周/日 四段水平堆叠(纯 CSS,flex 宽度按时长占比,
              蓝/绿/琥珀/紫渐次),下方图例 + 就近里程碑 chips。
              分段宽度按各段折算的真实时长(年 365.25 / 月 30.4375 / 周 7 天),
              与上方「2 yr 3 mo 12 days」的日历拆解一致;全零(同日)不出图。 */}
          {(() => {
            const remWeeks = Math.floor(result.days / 7)
            const remDays = result.days % 7
            const segs = [
              { key: 'y', days: result.years * 365.25, count: result.years, color: '#3b82f6', label: L('segYears', 'Years') },
              { key: 'm', days: result.months * 30.4375, count: result.months, color: '#22c55e', label: L('segMonths', 'Months') },
              { key: 'w', days: remWeeks * 7, count: remWeeks, color: '#f59e0b', label: L('segWeeks', 'Weeks') },
              { key: 'd', days: remDays, count: remDays, color: '#a855f7', label: L('segDays', 'Days') },
            ]
            const total = segs.reduce((s, x) => s + x.days, 0)
            if (total <= 0) return null
            const milestones = [
              { days: 100, label: `100 ${L('daysWord', ' days').trim()}` },
              { days: 365, label: `1 ${L('msYear', 'year')}` },
              { days: 500, label: `500 ${L('daysWord', ' days').trim()}` },
              { days: 1000, label: `1000 ${L('daysWord', ' days').trim()}` },
              { days: 1826, label: `5 ${L('msYears', 'years')}` },
              { days: 3652, label: `10 ${L('msYears', 'years')}` },
              { days: 5000, label: `5000 ${L('daysWord', ' days').trim()}` },
              { days: 10000, label: `10000 ${L('daysWord', ' days').trim()}` },
            ]
            const prev = milestones.filter((m) => m.days <= result.totalDays).pop()
            const next = milestones.find((m) => m.days > result.totalDays)
            return (
              <div
                className="rounded-lg border p-5"
                style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
              >
                <div className="mb-3 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
                  {L('barTitle', 'Duration breakdown')}
                </div>
                {/* 堆叠条 */}
                <div
                  className="flex h-3 w-full overflow-hidden rounded-full"
                  role="img"
                  aria-label={L('barTitle', 'Duration breakdown')}
                >
                  {segs
                    .filter((s) => s.days > 0)
                    .map((s) => (
                      <div
                        key={s.key}
                        style={{
                          width: `${(s.days / total) * 100}%`,
                          backgroundColor: s.color,
                          transition: 'width 300ms cubic-bezier(0.22,1,0.36,1)',
                        }}
                      />
                    ))}
                </div>
                {/* 图例 */}
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                  {segs.map((s) => (
                    <span key={s.key} className="inline-flex items-center gap-1.5">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-sm"
                        style={{ backgroundColor: s.color }}
                        aria-hidden="true"
                      />
                      <span className="text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
                        {s.label}:{' '}
                        <span className="font-semibold tabular-nums" style={{ color: 'rgb(var(--text))' }}>
                          {s.count}
                        </span>{' '}
                        <span className="tabular-nums" style={{ color: 'rgb(var(--text-faint))' }}>
                          ({((s.days / total) * 100).toFixed(0)}%)
                        </span>
                      </span>
                    </span>
                  ))}
                </div>
                {/* 就近里程碑 */}
                {(prev || next) && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium" style={{ color: 'rgb(var(--text-faint))' }}>
                      {L('chipsTitle', 'Milestones')}
                    </span>
                    {prev && (
                      <span
                        className="rounded-full border px-3 py-1 text-xs"
                        style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}
                      >
                        ✓ {prev.label} · {fmt(result.totalDays - prev.days)} {L('msDaysAgo', 'days ago')}
                      </span>
                    )}
                    {next && (
                      <span
                        className="rounded-full border px-3 py-1 text-xs"
                        style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}
                      >
                        → {next.label} · {fmt(next.days - result.totalDays)} {L('msDaysAway', 'days away')}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )
          })()}
        </>
      )}

      {/* 结果操作行(Copy 复制摘要 / Download 下载),口径同家族其余工具 */}
      {summary && (
        <ResultActions
          summary={summary}
          filename="date-difference-calculator-result.txt"
          downloadContent={summary}
        />
      )}

      <CalculatorNote>
        {L('note', '📅 Useful for project planning, contract durations, age calculations, and deadline tracking. Business days exclude weekends (Saturday and Sunday).')}
      </CalculatorNote>
    </div>
  )
}
