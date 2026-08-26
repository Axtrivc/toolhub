'use client'

/**
 * iOS/macOS 风格分段控件(Segmented Control)。
 *
 * 工厂对选项 ≤4 个的 select 字段自动改用本控件:
 *  - 灰底圆角容器 + 白色滑块指示器(transform 平移,spring 缓动),
 *    与 macOS System Settings / iOS 表单的分段控件同族;
 *  - 指示器宽度 = (容器宽 - 两侧 padding) / 段数,translateX(段序 × 100%)
 *    做滑动 —— 只动 transform,无布局抖动;
 *  - 按钮语义用 aria-pressed(切换型控件),键盘 Tab + Enter/Space 可达;
 *  - SSR 首帧渲染当前值对应位置(确定性,hydration 安全),无入场动画。
 */
export function SegmentedControl({
  options,
  value,
  onChange,
  ariaLabel,
  id,
}: {
  options: { label: string; value: string }[]
  value: string
  onChange: (v: string) => void
  /** 字段标签(select 的 label 文本),作 radiogroup 的可访问名称 */
  ariaLabel?: string
  /** 字段 id(与 <label htmlFor> 对应;渲染在容器上) */
  id?: string
}) {
  const n = options.length
  const idx = Math.max(
    0,
    options.findIndex((o) => o.value === value),
  )
  return (
    <div
      id={id}
      role="group"
      aria-label={ariaLabel}
      className="relative flex w-full gap-0 rounded-xl p-1 text-sm"
      style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
    >
      {/* 滑块指示器:绝对定位 + translateX 滑动(width 不含容器左右 padding) */}
      <div
        aria-hidden="true"
        className="absolute inset-y-1 rounded-lg shadow-sm transition-transform duration-300"
        style={{
          width: `calc((100% - 0.5rem) / ${n})`,
          left: '0.25rem',
          transform: `translateX(${idx * 100}%)`,
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          backgroundColor: 'rgb(var(--bg-card))',
          border: '1px solid rgb(var(--border))',
        }}
      />
      {options.map((o) => {
        const selected = o.value === value
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            aria-pressed={selected}
            className="relative z-10 min-w-0 flex-1 truncate rounded-lg px-1.5 py-2.5 text-center text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            style={{ color: selected ? 'rgb(var(--text))' : 'rgb(var(--text-subtle))' }}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}
