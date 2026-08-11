'use client'

import { getToolFormula } from '@/lib/tool-formulas'
import type { ToolMeta } from '@/lib/tools'
import { useApp } from './providers/AppProviders'
import { t, getToolName } from '@/lib/i18n'
import { getToolL10n } from '@/lib/i18n/tool-l10n'

/**
 * 公式区 —— 中部 SEO 长文本里的"原理公式"区块
 *
 * 数据源:lib/tool-formulas.ts 注册表(slug → { formula, explain })。
 * 未注册的工具返回 null(不渲染空区,避免页面出现无内容的小标题)。
 *
 * 本地化:标题/引导走 dict;formula/explain 优先取 lib/i18n/tools-l10n/<slug>.ts
 * 的本地化,缺失回退 lib/tool-formulas.ts 英文(SSR 恒英文)。
 */
export function FormulaSection({ slug, tool }: { slug: string; tool: ToolMeta }) {
  const { locale } = useApp()
  const enFormula = getToolFormula(slug)
  if (!enFormula) return null

  // 本地化覆盖(无则回退英文原值)
  const l10n = getToolL10n(slug, locale)
  const formula = l10n?.formula ?? enFormula
  const name = getToolName(locale, tool.slug, tool.name)

  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>{t(locale, 'formulaTitle')}</h2>
      <p>
        {t(locale, 'formulaIntro', { name }).split('{name}').map((part, i, arr) => (
          <span key={i}>
            {part}
            {i < arr.length - 1 && <strong>{name}</strong>}
          </span>
        ))}
      </p>
      <pre className="overflow-x-auto">{formula.formula}</pre>
      {formula.explain && <p>{formula.explain}</p>}
    </section>
  )
}
