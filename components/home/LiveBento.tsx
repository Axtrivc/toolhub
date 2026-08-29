'use client'

/**
 * 首页 Bento 活工具矩阵 - "落地 3 秒内已经完成一次计算"。
 *
 * 五格(全部真实可用的迷你工具,不是截图):
 *  1. 快速百分比(两输入即时出结果)
 *  2. cm ↔ in 迷你换算(带交换按钮)
 *  3. 房贷月供自动演示(打字→出结果循环;reduced-motion 静帧)
 *  4. 实时访客(复用 SiteStats 的 D1 链路缓存,失败静默隐藏)
 *  5. 今日格(日期/周数/年末倒计时,挂载后填充)
 *
 * SSR 约束:1/2/3 首帧即渲染默认值终值(确定性,无水合差异);
 * 4/5 依赖运行时数据,首帧不渲染或 '—' 占位,挂载后填充。
 * 每格底部 → 链到对应完整工具页(内链,SEO 不减反增)。
 */

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/providers/AppProviders'
import { useReducedMotion } from '@/components/motion/MotionPrimitives'
import { t } from '@/lib/i18n'
import { fmtUSD } from '@/lib/format'
import { statsCache } from '@/components/SiteStats'

/* ──────────────────────────── 小工具:单元格容器 ──────────────────────────── */

function BentoCell({
  title,
  href,
  className = '',
  children,
}: {
  title: string
  href: string
  className?: string
  children: ReactNode
}) {
  const { locale } = useApp()
  return (
    <div
      className={`group flex flex-col rounded-xl border p-4 transition hover:border-brand-300 dark:hover:border-brand-700 ${className}`}
      style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
    >
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>
        {title}
      </div>
      <div className="flex-1">{children}</div>
      <Link
        href={href}
        className="mt-3 text-xs font-medium text-brand-600 opacity-70 transition group-hover:opacity-100 max-sm:inline-block max-sm:py-2 dark:text-brand-400"
      >
        {t(locale, 'bentoOpenTool')}
      </Link>
    </div>
  )
}

/** 迷你输入框(Bento 专用小号) */
function MiniInput({
  value,
  onChange,
  suffix,
  ariaLabel,
}: {
  value: string
  onChange: (v: string) => void
  suffix?: string
  ariaLabel: string
}) {
  return (
    <div className="relative">
      <input
        type="number"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel}
        autoComplete="off"
        className="w-full rounded-lg border p-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-brand-200"
        style={{
          borderColor: 'rgb(var(--border-strong))',
          backgroundColor: 'rgb(var(--bg-card))',
          color: 'rgb(var(--text))',
        }}
      />
      {suffix && (
        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
          {suffix}
        </span>
      )}
    </div>
  )
}

/* ──────────────────────────── 1. 快速百分比 ──────────────────────────── */

function PercentCell() {
  const { locale } = useApp()
  const [pct, setPct] = useState('25')
  const [val, setVal] = useState('80')
  const p = parseFloat(pct)
  const v = parseFloat(val)
  const result = Number.isFinite(p) && Number.isFinite(v) ? (p / 100) * v : null

  return (
    <BentoCell title={t(locale, 'bentoPercentTitle')} href="/tools/percentage-calculator" className="col-span-2">
      <div className="flex items-end gap-2">
        <div className="w-24">
          <MiniInput value={pct} onChange={setPct} suffix="%" ariaLabel="percent" />
        </div>
        <span className="pb-2.5 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          {t(locale, 'bentoPercentIs')}
        </span>
        <div className="w-full flex-1">
          <MiniInput value={val} onChange={setVal} ariaLabel="value" />
        </div>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
          {t(locale, 'bentoPercentResultLabel')}
        </span>
        <span className="text-2xl font-bold text-primary tabular-nums">
          {result === null ? '—' : Number(result.toFixed(2)).toLocaleString('en-US')}
        </span>
      </div>
    </BentoCell>
  )
}

/* ──────────────────────────── 2. cm ↔ in 换算 ──────────────────────────── */

const CM_PER_IN = 2.54

function ConverterCell() {
  const { locale } = useApp()
  const [dir, setDir] = useState<'cm2in' | 'in2cm'>('cm2in')
  const [raw, setRaw] = useState('100')
  const n = parseFloat(raw)
  const fromUnit = dir === 'cm2in' ? 'cm' : 'in'
  const toUnit = dir === 'cm2in' ? 'in' : 'cm'
  const result = Number.isFinite(n) ? (dir === 'cm2in' ? n / CM_PER_IN : n * CM_PER_IN) : null

  return (
    <BentoCell title={t(locale, 'bentoConverterTitle')} href="/tools/length-converter" className="col-span-2">
      <div className="flex items-center gap-2">
        <div className="w-24">
          <MiniInput value={raw} onChange={setRaw} suffix={fromUnit} ariaLabel={fromUnit} />
        </div>
        <button
          type="button"
          onClick={() => setDir((d) => (d === 'cm2in' ? 'in2cm' : 'cm2in'))}
          aria-label={t(locale, 'bentoConverterSwap')}
          title={t(locale, 'bentoConverterSwap')}
          className="shrink-0 rounded-lg border px-2.5 py-2 text-sm font-bold transition hover:bg-slate-100 dark:hover:bg-slate-800"
          style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}
        >
          ⇄
        </button>
        <div className="min-w-0 flex-1 truncate rounded-lg border p-2 text-right text-sm font-bold tabular-nums"
          style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text))', backgroundColor: 'rgb(var(--bg-subtle))' }}
        >
          {result === null ? '—' : `${Number(result.toFixed(2)).toLocaleString('en-US')} ${toUnit}`}
        </div>
      </div>
    </BentoCell>
  )
}

/* ──────────────────────────── 3. 房贷月供自动演示 ──────────────────────────── */

/** 标准摊销月供(与 mortgage-calculator 同式) */
function monthlyPI(principal: number, annualRatePct: number, months: number): number {
  const r = annualRatePct / 100 / 12
  if (r === 0) return principal / months
  const f = Math.pow(1 + r, months)
  return (principal * r * f) / (f - 1)
}

/** 演示脚本:利率从空逐字打到 6.8 → 高亮月供结果 → 停留 → 重来 */
const DEMO_RATE = '6.8'
const DEMO_PRINCIPAL = 320000 // $400k - 20% down
const DEMO_MONTHS = 360

function MortgageDemoCell() {
  const { locale } = useApp()
  const reduceMotion = useReducedMotion()
  const [typed, setTyped] = useState('')

  useEffect(() => {
    // reduced-motion:跳过打字动画,挂载后直接呈现终帧(6.8% → 完整月供)
    if (reduceMotion) {
      setTyped(DEMO_RATE)
      return
    }
    let step = 0
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      step++
      if (step <= DEMO_RATE.length) {
        setTyped(DEMO_RATE.slice(0, step))
        timer = setTimeout(tick, 650)
      } else if (step <= DEMO_RATE.length + 4) {
        // 结果停留 ~2.6s
        setTyped(DEMO_RATE)
        timer = setTimeout(tick, 650)
      } else {
        step = 0
        setTyped('')
        timer = setTimeout(tick, 900)
      }
    }
    timer = setTimeout(tick, 1200)
    return () => clearTimeout(timer)
  }, [reduceMotion])

  const rate = typed === '' ? null : parseFloat(typed)
  const payment = rate != null && Number.isFinite(rate) ? monthlyPI(DEMO_PRINCIPAL, rate, DEMO_MONTHS) : null
  const showTyping = typed !== DEMO_RATE

  return (
    <BentoCell title={t(locale, 'bentoMortgageTitle')} href="/tools/mortgage-calculator" className="col-span-2">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
            $400,000 · 20% down · 30 yrs
          </div>
          <div className="mt-1 text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
            {t(locale, 'bentoMortgageDemo')}: <span className="font-mono font-semibold">{typed || '…'}</span>%
          </div>
        </div>
        <div className="text-right">
          <div
            className={`text-xl font-bold tabular-nums transition-opacity ${showTyping ? 'opacity-30' : 'opacity-100'}`}
            style={{ color: 'rgb(var(--text))' }}
          >
            {payment == null ? '—' : fmtUSD(payment, 0)}
          </div>
          <div className="text-[10px] uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>
            {t(locale, 'bentoMortgageMonthly')}
          </div>
        </div>
      </div>
    </BentoCell>
  )
}

/* ──────────────────────────── 4. 实时访客(计数动画) ──────────────────────────── */

function CountUp({ to }: { to: number }) {
  const reduceMotion = useReducedMotion()
  const [shown, setShown] = useState(reduceMotion ? to : 0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (reduceMotion) {
      setShown(to)
      return
    }
    const start = performance.now()
    const dur = 900
    const step = (now: number) => {
      const k = Math.min(1, (now - start) / dur)
      // easeOutCubic
      setShown(Math.round(to * (1 - Math.pow(1 - k, 3))))
      if (k < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [to, reduceMotion])

  return <span className="tabular-nums">{shown.toLocaleString('en-US')}</span>
}

function VisitorsCell() {
  const { locale } = useApp()
  const [stats, setStats] = useState(statsCache.value)

  useEffect(() => {
    if (statsCache.value) {
      setStats(statsCache.value)
      return
    }
    const handler = () => setStats(statsCache.value)
    window.addEventListener('toolhub-stats', handler)
    return () => window.removeEventListener('toolhub-stats', handler)
  }, [])

  // 无数据(本地 dev/未绑 D1):整格静默消失;TodayCell 用响应式 col-span 兜底占满行
  if (!stats) return null

  return (
    <BentoCell title={t(locale, 'bentoVisitorsTitle')} href="/tools" className="col-span-2 md:col-span-1">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-2xl font-bold text-primary">
            <CountUp to={stats.visitors} />
          </div>
          <div className="text-[10px] uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>
            {t(locale, 'bentoVisitorsToday')}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold tabular-nums" style={{ color: 'rgb(var(--text-muted))' }}>
            <CountUp to={stats.total} />
          </div>
          <div className="text-[10px] uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>
            {t(locale, 'bentoVisitorsTotal')}
          </div>
        </div>
      </div>
    </BentoCell>
  )
}

/* ──────────────────────────── 5. 今日格 ──────────────────────────── */

function isoWeek(d: Date): number {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const dayNum = date.getUTCDay() || 7
  date.setUTCDate(date.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1))
  return Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
}

function TodayCell() {
  const { locale } = useApp()
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const timer = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  // SSR/首帧 '—' 占位,挂载后填充(deriveNow 模式)
  const weekN = now ? isoWeek(now) : null
  const daysLeft = now
    ? Math.max(0, Math.ceil((new Date(now.getFullYear(), 11, 31).getTime() - now.getTime()) / 86400000))
    : null

  return (
    <BentoCell title={t(locale, 'bentoTodayTitle')} href="/tools/age-calculator" className="col-span-2 md:col-span-1">
      <div className="text-2xl font-bold" style={{ color: 'rgb(var(--text))' }}>
        {now ? now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '—'}
      </div>
      <div className="mt-1 space-y-0.5 text-[11px]" style={{ color: 'rgb(var(--text-muted))' }}>
        <div>{weekN == null ? '—' : t(locale, 'bentoTodayWeekN').replace('{n}', String(weekN))}</div>
        <div>{daysLeft == null ? '—' : t(locale, 'bentoTodayDaysLeft').replace('{n}', String(daysLeft)).replace('{y}', String(now?.getFullYear() ?? ''))}</div>
      </div>
    </BentoCell>
  )
}

/* ──────────────────────────── 组合 ──────────────────────────── */

export function LiveBento() {
  const { locale } = useApp()
  return (
    <section className="mb-12" aria-label={t(locale, 'bentoTitle')}>
      <div className="mb-4">
        <h2 className="text-xl font-bold sm:text-2xl" style={{ color: 'rgb(var(--text))' }}>
          {t(locale, 'bentoTitle')}
        </h2>
        <p className="mt-1 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          {t(locale, 'bentoSubtitle')}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <PercentCell />
        <ConverterCell />
        <MortgageDemoCell />
        <VisitorsCell />
        <TodayCell />
      </div>
    </section>
  )
}
