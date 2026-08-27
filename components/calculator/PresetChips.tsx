'use client'

/**
 * 场景预设 chips(共享组件)- 一键填充多字段后配合滑杆微调。
 * 工厂(makeCalculatorClient)与手写 client(Loan/AutoLoan 等)共用同一 UI。
 */

export interface PresetDef {
  label: string
  /** 只需包含要改的 key;未列出的字段保持当前值 */
  values: Record<string, string>
}

export function PresetChips({
  presets,
  labelOf,
  onApply,
}: {
  presets: PresetDef[]
  /** label 本地化器:(英文 fallback, 序号) => 本地化文本 */
  labelOf: (fallback: string, index: number) => string
  onApply: (values: Record<string, string>) => void
}) {
  if (presets.length === 0) return null
  return (
    <div className="flex flex-wrap items-center gap-2">
      {presets.map((p, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onApply(p.values)}
          className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
          style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}
        >
          {labelOf(p.label, i)}
        </button>
      ))}
    </div>
  )
}
