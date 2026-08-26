'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useReducedMotion } from '../motion/MotionPrimitives'

/**
 * 结果数字 tween:值变化时旧值→新值平滑滚动(约 400ms easeOut)。
 * - 只在「数值型字符串」上启用($/%/千分位自动拆解保留);文本/错误串直出;
 * - SSR/首帧直接渲染终值(不做 0→N 开场动画,水合安全);
 * - reduced-motion 直接切换,无动画。
 */
export function AnimatedNumber({ value }: { value: ReactNode }) {
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState<string | null>(null)
  const prevNumRef = useRef<number | null>(null)

  const text = typeof value === 'string' ? value : null
  // 拆解 "$1,234.56%" → prefix=$ num=1234.56 suffix=% decimals=2
  const parsed =
    text !== null
      ? (() => {
          const m = text.match(/^([^\d+.\-]*)([+-]?[\d,]*\.?\d+)(.*)$/)
          if (!m) return null
          const num = parseFloat(m[2].replace(/,/g, ''))
          if (!Number.isFinite(num)) return null
          const decMatch = m[2].split('.')[1]
          return { prefix: m[1], num, suffix: m[3], decimals: decMatch ? decMatch.length : 0 }
        })()
      : null

  useEffect(() => {
    if (!parsed || reduceMotion) {
      prevNumRef.current = parsed?.num ?? null
      setDisplay(null)
      return
    }
    const from = prevNumRef.current
    prevNumRef.current = parsed.num
    if (from === null || from === parsed.num) {
      setDisplay(null)
      return
    }
    const start = performance.now()
    const dur = 400
    let raf = 0
    const step = (now: number) => {
      const k = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - k, 3)
      const cur = from + (parsed.num - from) * eased
      setDisplay(
        `${parsed.prefix}${cur.toLocaleString('en-US', {
          minimumFractionDigits: parsed.decimals,
          maximumFractionDigits: parsed.decimals,
        })}${parsed.suffix}`,
      )
      if (k < 1) raf = requestAnimationFrame(step)
      else setDisplay(null) // 终帧回到原串(与 compute 输出完全一致)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, reduceMotion])

  if (text === null) return <>{value}</>
  if (display !== null) return <span className="tabular-nums">{display}</span>
  return <span className="tabular-nums">{text}</span>
}

/**
 * 计算器通用 UI 组件库 - 主题感知(用 CSS 变量)
 */

export function CalculatorField({
  label,
  value,
  onChange,
  type = 'number',
  placeholder,
  suffix,
  id,
  step = 'any',
}: {
  label: string
  value: string
  onChange: (v: string) => void
  type?: 'number' | 'text' | 'date'
  placeholder?: string
  suffix?: string
  id: string
  step?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          step={step}
          autoComplete="off"
          className={`w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2 ${suffix ? 'pr-16' : ''}`}
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
        {suffix && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: 'rgb(var(--text-faint))' }}>
            {suffix}
          </span>
        )}
      </div>
    </div>
  )
}

/**
 * 数值字段 + 滑杆双向绑定(工厂 FieldDef.slider 声明后渲染)。
 * - 拖杆 → 数字框同步为步进值(按 step 小数位取整,避免 0.05 步进的浮点尾差);
 * - 数字框输入超出范围 → 滑杆仅 clamp 显示位置,不回写不阻止;
 * - 空/非数字输入 → 滑杆回到 min 位置显示。
 */
export function CalculatorSliderField({
  min,
  max,
  step,
  ...field
}: {
  min: number
  max: number
  step: number
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  suffix?: string
  id: string
}) {
  const parsed = parseFloat(field.value)
  const safe = Number.isFinite(parsed) ? Math.min(max, Math.max(min, parsed)) : min
  const pct = max > min ? ((safe - min) / (max - min)) * 100 : 0
  const decimals = (String(step).split('.')[1] ?? '').length

  return (
    <div>
      <CalculatorField {...field} type="number" />
      <input
        type="range"
        className="calc-slider"
        min={min}
        max={max}
        step={step}
        value={safe}
        aria-label={field.label}
        onChange={(e) => field.onChange(String(Number((Number(e.target.value)).toFixed(decimals))))}
        style={{
          background: `linear-gradient(to right, rgb(var(--primary)) ${pct}%, rgb(var(--bg-subtle)) ${pct}%)`,
        }}
      />
    </div>
  )
}

export function ResultCard({
  label,
  value,
  sublabel,
  highlight = false,
}: {
  label: string
  value: ReactNode
  sublabel?: string
  highlight?: boolean
}) {
  return (
    // 高亮态:主色梯度淡底(from-primary/5 → to-primary/10)+ 主色细描边 +
    // 渐变大字号数字(text-primary,暗色主题自动切换为 blue-400);
    // 令牌化后暗色模式不再出现旧版硬编码浅蓝底的违和感。
    // role=status + aria-live:数值变化时屏幕阅读器播报(仅结果容器,输入不加)。
    <div
      role="status"
      aria-live="polite"
      className={`rounded-xl border p-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        highlight
          ? 'border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-md'
          : 'border-border/60 bg-card/80 backdrop-blur-md'
      }`}
    >
      <div className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
        {label}
      </div>
      <div
        className={`mt-1.5 text-2xl font-bold sm:text-3xl ${highlight ? 'text-primary' : ''}`}
        style={highlight ? undefined : { color: 'rgb(var(--text))' }}
      >
        {highlight ? <AnimatedNumber value={value} /> : value}
      </div>
      {sublabel && <div className="mt-1 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>{sublabel}</div>}
    </div>
  )
}

export function CalculatorShell({
  inputs,
  results,
  children,
}: {
  inputs: ReactNode
  results: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="space-y-6">
      <div
        className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2"
        style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
      >
        {inputs}
      </div>
      {results}
      {children}
    </div>
  )
}

export function CalculatorNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
      {children}
    </p>
  )
}
