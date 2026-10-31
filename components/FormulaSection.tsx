'use client'

import { getToolFormula } from '@/lib/tool-formulas'
import type { ToolMeta } from '@/lib/tool-types'
import { useApp } from './providers/AppProviders'
import { t, getToolName } from '@/lib/i18n'
import { l10nEntryFor, type ToolL10n } from '@/lib/i18n/tool-l10n-core'

/**
 * 公式区 —— 中部 SEO 长文本里的"原理公式"区块
 *
 * 数据源:lib/tool-formulas.ts 注册表(slug → { formula, explain })。
 * 未注册的工具返回 null(不渲染空区,避免页面出现无内容的小标题)。
 *
 * 本地化:标题/引导走 dict;formula/explain 优先取 lib/i18n/tools-l10n/<slug>.ts
 * 的本地化,缺失回退 lib/tool-formulas.ts 英文(SSR 恒英文)。
 */
export function FormulaSection({ slug, tool, l10n }: { slug: string; tool: ToolMeta; l10n?: ToolL10n }) {
  const { locale } = useApp()
  const enFormula = getToolFormula(slug)
  if (!enFormula) return null

  // 本地化覆盖(逐字段合并:缺译字段回退英文原值,variables/example 不因局部覆盖而丢失)
  // l10nEntryFor(record, locale) 与原 getToolL10n(slug, locale) 同表达式(en → null 回退英文)
  const entry = l10nEntryFor(l10n, locale)
  const formula =
    enFormula && entry?.formula ? { ...enFormula, ...entry.formula } : enFormula
  const name = getToolName(locale, tool.slug, tool.name)

  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>{t(locale, 'formulaTitle')}</h2>
      <p>
        {t(locale, 'formulaIntro')
          .split('{name}')
          .map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && <strong>{name}</strong>}
            </span>
          ))}
      </p>
      {/* 桌面端长行不再横向滚动截断(审计:zodiac/chinese-zodiac/heat-index/pregnancy
          四页右缘硬裁)——与 globals.css <640px 的移动端策略保持一致:安全换行
          (pre-wrap + break-words),保留 overflow-x-auto 兜底超长不可断 token。 */}
      <pre className="overflow-x-auto whitespace-pre-wrap break-words">{formula.formula}</pre>
      {formula.variables && (
        <p>
          <strong>{t(locale, 'formulaVariables')}:</strong> {formula.variables}
        </p>
      )}
      {formula.explain && <p>{formula.explain}</p>}
      {formula.example && (
        <p className="rounded-lg p-4 text-sm" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
          <strong>{t(locale, 'formulaExample')}:</strong> {formula.example}
        </p>
      )}
    </section>
  )
}
