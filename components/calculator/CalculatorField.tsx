'use client'

import type { ReactNode } from 'react'

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
      className={`rounded-xl border p-5 text-center shadow-sm transition-shadow hover:shadow-md ${
        highlight
          ? 'border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10'
          : 'border-border bg-card'
      }`}
    >
      <div className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
        {label}
      </div>
      <div
        className={`mt-1.5 text-2xl font-bold sm:text-3xl ${highlight ? 'text-primary' : ''}`}
        style={highlight ? undefined : { color: 'rgb(var(--text))' }}
      >
        {value}
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
