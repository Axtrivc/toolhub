'use client'

import { useEffect, useMemo, useState } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { ResultActions } from '@/components/ResultActions'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { calendarDaysBetween } from '@/lib/date-utils'

/**
 * Days Countdown Calculator 客户端组件
 *
 * 两个标签页:
 *  (a) Countdown —— 目标日期(+可选时间),每秒 tick,显示剩余/已过 天时分秒,
 *      以及总天数、周+天、工作日(跳过周末)。
 *  (b) Days between —— 两个日期的总天数、周、约月、工作日、周末天数。
 * "now" 只在 useEffect / setInterval 里读取,SSR 渲染输出占位符。
 */

type Tab = 'countdown' | 'between'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function toDateStr(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

/** 解析 YYYY-MM-DD(本地时区);非法返回 null */
function parseDate(s: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s)
  if (!m) return null
  const y = +m[1]
  const mo = +m[2]
  const d = +m[3]
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return null
  const dt = new Date(y, mo - 1, d)
  // 2月30日之类会被 Date 归一化,检查回读
  if (dt.getFullYear() !== y || dt.getMonth() !== mo - 1 || dt.getDate() !== d) return null
  return dt
}

/** 计算 (a, b] 区间内周一~周五的天数;b<a 时返回负值 */
function businessDaysBetween(a: Date, b: Date): number {
  const start = new Date(a.getFullYear(), a.getMonth(), a.getDate())
  const end = new Date(b.getFullYear(), b.getMonth(), b.getDate())
  if (start.getTime() === end.getTime()) return 0
  if (start > end) return -businessDaysBetween(b, a)
  // 算术法(旧实现按天循环、37000 次封顶,超长区间会静默截断):
  // 每整周恰含 5 个工作日 → 整周 ×5,剩余 ≤6 天逐个核对星期。
  const totalDays = calendarDaysBetween(start, end)
  const dowStart = start.getDay()
  const fullWeeks = Math.floor(totalDays / 7)
  let count = fullWeeks * 5
  for (let k = fullWeeks * 7 + 1; k <= totalDays; k++) {
    const dow = (dowStart + k) % 7
    if (dow !== 0 && dow !== 6) count++
  }
  return count
}

function fmtClock(totalSec: number) {
  const days = Math.floor(totalSec / 86400)
  const hours = Math.floor((totalSec % 86400) / 3600)
  const mins = Math.floor((totalSec % 3600) / 60)
  const secs = totalSec % 60
  return { days, hours, mins, secs }
}

const inputStyle = {
  borderColor: 'rgb(var(--border-strong))',
  backgroundColor: 'rgb(var(--bg-card))',
  color: 'rgb(var(--text))',
}

export function DaysCountdownCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('days-countdown-calculator', locale, key, fb)

  const [tab, setTab] = useState<Tab>('countdown')

  // Countdown 状态
  const [dateStr, setDateStr] = useState('')
  const [timeStr, setTimeStr] = useState('00:00')
  const [now, setNow] = useState<Date | null>(null)

  // Days between 状态
  const [fromStr, setFromStr] = useState('')
  const [toStr, setToStr] = useState('')

  // 挂载:启动 1s tick,默认目标设为下一个新年
  useEffect(() => {
    setNow(new Date())
    const n = new Date()
    setDateStr(`${n.getFullYear() + 1}-01-01`)
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  /** Countdown 目标(本地时间) */
  const target = useMemo(() => {
    const d = parseDate(dateStr)
    if (!d) return null
    let hh = 0
    let mi = 0
    const tm = /^(\d{2}):(\d{2})/.exec(timeStr)
    if (tm) {
      hh = Math.min(23, +tm[1])
      mi = Math.min(59, +tm[2])
    }
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hh, mi, 0)
  }, [dateStr, timeStr])

  const countdown = useMemo(() => {
    if (!now || !target) return null
    const diff = target.getTime() - now.getTime()
    const future = diff >= 0
    const totalSec = Math.floor(Math.abs(diff) / 1000)
    const clock = fmtClock(totalSec)
    const totalDays = Math.abs(diff) / 86400000
    const business = businessDaysBetween(now, target) // 未来为正,过去为负
    return { future, clock, totalDays, business }
  }, [now, target])

  const between = useMemo(() => {
    if (!fromStr && !toStr) return null
    const a = parseDate(fromStr)
    const b = parseDate(toStr)
    if (!a || !b) return { error: L('errBothDates', 'Enter both dates in YYYY-MM-DD format.') }
    const total = Math.round((b.getTime() - a.getTime()) / 86400000)
    const absDays = Math.abs(total)
    const business = Math.abs(businessDaysBetween(a, b))
    return {
      days: total,
      absDays,
      weeks: Math.floor(absDays / 7),
      weekDays: absDays % 7,
      months: (absDays / 30.437).toFixed(1),
      business,
      weekend: absDays - business,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromStr, toStr, locale])

  // 结果摘要(纯文本):供 Copy/Download 使用。全部由既有已本地化 key 组合,
  // 倒计时为快照语义(当前时刻的剩余量),与页面显示一致。
  const summary = useMemo(() => {
    if (tab === 'countdown') {
      if (!countdown) return ''
      const dir = countdown.future ? L('daysLeft', 'Days left') : L('daysAgo', 'Days ago')
      return [
        L('tab_countdown', 'Countdown'),
        `${L('targetDate', 'Target date')}: ${dateStr} ${timeStr}`,
        `${dir}: ${countdown.clock.days}${L('dAbbr', ' d')} ${pad(countdown.clock.hours)}:${pad(countdown.clock.mins)}:${pad(countdown.clock.secs)}`,
        `${L('totalDays', 'Total days')}: ${countdown.totalDays.toFixed(1)}`,
        `${countdown.future ? L('businessDaysLeft', 'Business days left') : L('businessDaysAgo', 'Business days ago')}: ${Math.abs(countdown.business)}`,
      ].join('\n')
    }
    if (!between || 'error' in between) return ''
    return [
      L('tab_between', 'Days between'),
      `${L('startDate', 'Start date')}: ${fromStr}`,
      `${L('endDate', 'End date')}: ${toStr}`,
      `${L('totalDays', 'Total days')}: ${between.days}`,
      `${L('weeks', 'Weeks')}: ${between.weeks}${L('wkAbbr', ' wk ')}${between.weekDays}${L('dAbbr', ' d')}`,
      `${L('approxMonths', '≈ Months')}: ${between.months}`,
      `${L('businessDays', 'Business days')}: ${between.business}`,
      `${L('weekendDays', 'Weekend days')}: ${between.weekend}`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, countdown, between, dateStr, timeStr, fromStr, toStr, locale])

  const applyPreset = (kind: 'newyear' | 'christmas' | 'plus30' | 'plus90') => {
    const n = new Date()
    if (kind === 'newyear') {
      setDateStr(`${n.getFullYear() + 1}-01-01`)
      setTimeStr('00:00')
    } else if (kind === 'christmas') {
      const today = new Date(n.getFullYear(), n.getMonth(), n.getDate())
      const year = today > new Date(n.getFullYear(), 11, 25) ? n.getFullYear() + 1 : n.getFullYear()
      setDateStr(`${year}-12-25`)
      setTimeStr('00:00')
    } else {
      const days = kind === 'plus30' ? 30 : 90
      // 日历加法(DST 安全):毫秒加法在 DST 回拨日(23/25 小时日)会早/晚一天
      const t = new Date(n.getFullYear(), n.getMonth(), n.getDate() + days)
      setDateStr(toDateStr(t))
      setTimeStr(`${pad(n.getHours())}:${pad(n.getMinutes())}`)
    }
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'countdown', label: 'Countdown' },
    { id: 'between', label: 'Days between' },
  ]

  return (
    <div className="space-y-5">
      {/* 标签页切换 */}
      <div
        className="inline-flex rounded-lg border p-1"
        style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            aria-pressed={tab === t.id}
            className="rounded-md px-4 py-1.5 text-sm font-medium transition"
            style={
              tab === t.id
                ? { backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))', boxShadow: '0 1px 2px rgb(0 0 0 / 0.08)' }
                : { color: 'rgb(var(--text-muted))' }
            }
          >
            {L('tab_' + t.id, t.label)}
          </button>
        ))}
      </div>

      {tab === 'countdown' && (
        <>
          <div
            className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2"
            style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
          >
            <CalculatorField id="cd-date" label={L('targetDate', 'Target date')} type="date" value={dateStr} onChange={setDateStr} />
            <div>
              <label htmlFor="cd-time" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('timeOptional', 'Time (optional)')}
              </label>
              <input
                id="cd-time"
                type="time"
                value={timeStr}
                onChange={(e) => setTimeStr(e.target.value)}
                className="w-full rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
                style={inputStyle}
              />
            </div>
          </div>

          {/* 预设 */}
          <div className="flex flex-wrap gap-2">
            {(
              [
                ['New Year', 'newyear'],
                ['Christmas', 'christmas'],
                ['+30 days', 'plus30'],
                ['+90 days', 'plus90'],
              ] as const
            ).map(([label, kind]) => (
              <button
                key={kind}
                type="button"
                onClick={() => applyPreset(kind)}
                className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-brand-50 dark:hover:bg-brand-900/40"
                style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}
              >
                {L('preset_' + kind, label)}
              </button>
            ))}
          </div>

          {dateStr && !target && (
            <div role="status" className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">
              {L('invalidDateWarn', "⚠️ That doesn't look like a valid date — pick one with the date input above.")}
            </div>
          )}

          {countdown && (
            <>
              {/* 主时钟 */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <ResultCard
                  label={countdown.future ? L('daysLeft', 'Days left') : L('daysAgo', 'Days ago')}
                  value={countdown.clock.days}
                  highlight
                  sublabel={countdown.future ? L('untilTarget', 'until target') : L('sinceTarget', 'since target')}
                />
                <ResultCard label={L('hours', 'Hours')} value={pad(countdown.clock.hours)} />
                <ResultCard label={L('minutes', 'Minutes')} value={pad(countdown.clock.mins)} />
                <ResultCard label={L('seconds', 'Seconds')} value={pad(countdown.clock.secs)} />
              </div>

              {!countdown.future && (
                <div
                  className="rounded-lg border px-4 py-2.5 text-sm"
                  style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-muted))' }}
                >
                  {L('targetPassed', '⏳ The target has already passed — counting elapsed time instead.')}
                </div>
              )}

              {/* 分解卡片 */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <ResultCard
                  label={L('totalDays', 'Total days')}
                  value={countdown.totalDays.toFixed(1)}
                  sublabel={L('includingPartialDays', 'including partial days')}
                />
                <ResultCard
                  label={L('weeks', 'Weeks')}
                  value={`${Math.floor(countdown.clock.days / 7)}${L('wkAbbr', ' wk ')}${countdown.clock.days % 7}${L('dAbbr', ' d')}`}
                  sublabel={L('weeksRemainingDays', 'weeks + remaining days')}
                />
                <ResultCard
                  label={countdown.future ? L('businessDaysLeft', 'Business days left') : L('businessDaysAgo', 'Business days ago')}
                  value={Math.abs(countdown.business)}
                  sublabel={L('monFriWeekendsSkipped', 'Mon–Fri, weekends skipped')}
                />
              </div>

              {/* 倒计时进度环:以目标日为终点的「最后 365 天」窗口,
                  进度 = 已过天数 / 总天数(365)。环的起止日完全由输入的目标日期
                  派生(确定性),而已过天数依赖 now —— now 由挂载后的 useEffect 提供
                  (SSR 首帧 countdown 为 null,整块不出图,水合安全)。
                  「今天」指针(蓝点)落在进度弧的前沿上。环形手法同 BreakdownChart。 */}
              {(() => {
                if (!target || !now) return null
                const WINDOW = 365
                const anchor = new Date(
                  target.getFullYear(), target.getMonth(), target.getDate() - WINDOW,
                  target.getHours(), target.getMinutes(), 0,
                )
                const elapsedDays = (now.getTime() - anchor.getTime()) / 86400000
                const progress = Math.min(1, Math.max(0, elapsedDays / WINDOW))
                const C = 2 * Math.PI * 40
                const theta = progress * 2 * Math.PI - Math.PI / 2
                const dotX = 50 + 40 * Math.cos(theta)
                const dotY = 50 + 40 * Math.sin(theta)
                return (
                  <div
                    className="rounded-lg border p-5"
                    style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
                  >
                    <div className="mb-3 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
                      {L('chartTitle', 'Countdown progress')}
                    </div>
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                      {/* SVG 圆环 r=40,viewBox 100×100 */}
                      <div className="relative h-40 w-40 shrink-0">
                        <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label={L('chartTitle', 'Countdown progress')}>
                          <g transform="rotate(-90 50 50)">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="rgb(var(--bg-subtle))" strokeWidth="12" />
                            {progress > 0.001 && (
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="rgb(var(--primary))"
                                strokeWidth="12"
                                strokeLinecap="round"
                                strokeDasharray={`${C * progress} ${C}`}
                              />
                            )}
                          </g>
                          {/* 今天指针(蓝点),在未旋转坐标系里按角度定位 */}
                          <circle cx={dotX} cy={dotY} r="4.5" fill="#3b82f6" stroke="rgb(var(--bg-card))" strokeWidth="2" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-bold tabular-nums text-primary">{countdown.clock.days}</span>
                          <span className="text-[10px] uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>
                            {countdown.future ? L('daysLeft', 'Days left') : L('daysAgo', 'Days ago')}
                          </span>
                        </div>
                      </div>
                      {/* 图例 */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#3b82f6' }} aria-hidden="true" />
                          <span className="text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
                            {L('todayLabel', 'Today')}
                          </span>
                        </div>
                        {elapsedDays >= 0 ? (
                          <div className="flex items-center gap-2">
                            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: 'rgb(var(--primary))' }} aria-hidden="true" />
                            <span className="text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
                              {Math.floor(elapsedDays)} {L('ringDaysElapsed', 'days elapsed')} · {L('ringFinalYear', 'in the final 365 days')}
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: 'rgb(var(--bg-subtle))', boxShadow: 'inset 0 0 0 1px rgb(var(--border-strong))' }} aria-hidden="true" />
                            <span className="text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
                              {L('ringFarTarget', 'target is over a year away — the ring fills in the final year')}
                            </span>
                          </div>
                        )}
                        <div className="text-sm font-semibold tabular-nums" style={{ color: 'rgb(var(--text))' }}>
                          {(progress * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </>
          )}
        </>
      )}

      {tab === 'between' && (
        <>
          <div
            className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2"
            style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
          >
            <CalculatorField id="db-from" label={L('startDate', 'Start date')} type="date" value={fromStr} onChange={setFromStr} />
            <CalculatorField id="db-to" label={L('endDate', 'End date')} type="date" value={toStr} onChange={setToStr} />
          </div>

          {!between ? (
            <div
              className="rounded-lg border p-4 text-sm"
              style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}
            >
              {L('pickTwoDates', 'Pick two dates to see the gap between them.')}
            </div>
          ) : 'error' in between ? (
            <div role="status" className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">{L('errorWarn', '⚠️ ')}{between.error}</div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <ResultCard
                  label={L('totalDays', 'Total days')}
                  value={between.absDays}
                  highlight
                  sublabel={between.days < 0 ? L('endEarlier', 'end date is earlier') : `${between.days} ${L('daysApart', 'days apart')}`}
                />
                <ResultCard label={L('weeks', 'Weeks')} value={`${between.weeks}${L('wkAbbr', ' wk ')}${between.weekDays}${L('dAbbr', ' d')}`} sublabel={L('weeksDays', 'weeks + days')} />
                <ResultCard label={L('approxMonths', '≈ Months')} value={between.months} sublabel={L('basedOn3044', 'based on 30.44-day months')} />
                <ResultCard label={L('businessDays', 'Business days')} value={between.business} sublabel={L('monFriOnly', 'Mon–Fri only')} />
                <ResultCard label={L('weekendDays', 'Weekend days')} value={between.weekend} sublabel={L('satsSuns', 'Saturdays + Sundays')} />
              </div>
              <CalculatorNote>
                {L('note', '📅 The count treats the start date as day zero and counts up to (and including) the end date. Swapping the two dates gives the same magnitudes with a negative sign.')}
              </CalculatorNote>
            </>
          )}
        </>
      )}

      {/* 结果操作行(口径同家族 DateDifferenceClient):Copy 复制摘要 / Download 下载 */}
      {summary && (
        <ResultActions
          summary={summary}
          filename="days-countdown-calculator.txt"
          downloadContent={summary}
        />
      )}
    </div>
  )
}
