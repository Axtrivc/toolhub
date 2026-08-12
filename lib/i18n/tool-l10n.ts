/**
 * 工具级本地化数据层
 *
 * 每个"需要本地化"的工具在 lib/i18n/tools-l10n/<slug>.ts 导出一份 ToolL10n,
 * 覆盖 zh/es/de 三语。en 永远不在此注册 → 始终回退英文原值:
 *   - lib/tool-faqs.ts            (可见 FAQ)
 *   - lib/tool-formulas.ts        (公式区)
 *   - Client 组件内英文 fallback   (工具交互界面)
 *   - content.tsx 的 en 分支       (长文正文)
 *
 * 覆盖字段(全部可选,按需填;缺字段 → 该字段回退英文原值,绝不破图):
 *  - faqs:      可见 FAQ 的 Q&A
 *  - ui:        工具交互界面字符串(供 Client 组件经 tui() 读取)
 *  - useCases:  ToolInfoSection "Common uses" 列表(替代英文 formatUseCases)
 *  - formula:   FormulaSection 的 { formula, explain? }
 *
 * SEO 安全:en 永不在此注册,SSR/预渲染恒为英文,Google 索引不变。
 * name/shortIntro 不在此,继续用 lib/i18n/tools.{zh,es,de}.ts(已译完)。
 */

import type { Locale } from '../i18n'

/** 单个语种的工具本地化条目(所有字段可选,按需覆盖英文原值) */
export interface ToolL10nEntry {
  /** 可见 FAQ Q&A(覆盖 lib/tool-faqs.ts 的英文) */
  faqs?: Array<{ q: string; a: string }>
  /** 工具交互界面字符串(供 Client 组件 tui() 读取) */
  ui?: Record<string, string>
  /** ToolInfoSection "Common uses" 列表(替代英文 formatUseCases) */
  useCases?: string[]
  /** FormulaSection 公式与解释(覆盖 lib/tool-formulas.ts) */
  formula?: { formula: string; explain?: string }
}

/** 非英文语种 → 条目。en 不出现,保证英文走原值。 */
export type ToolL10n = Partial<Record<Exclude<Locale, 'en'>, ToolL10nEntry>>

// ──────────── 注册表:slug → ToolL10n ────────────
import { loanCalculatorL10n } from './tools-l10n/loan-calculator'
import { mortgageCalculatorL10n } from './tools-l10n/mortgage-calculator'
import { compoundInterestCalculatorL10n } from './tools-l10n/compound-interest-calculator'
import { apyCalculatorL10n } from './tools-l10n/apy-calculator'
import { roiCalculatorL10n } from './tools-l10n/roi-calculator'
import { creditCardMinimumPaymentCalculatorL10n } from './tools-l10n/credit-card-minimum-payment-calculator'

const registry: Record<string, ToolL10n> = {
  'loan-calculator': loanCalculatorL10n,
  'mortgage-calculator': mortgageCalculatorL10n,
  'compound-interest-calculator': compoundInterestCalculatorL10n,
  'apy-calculator': apyCalculatorL10n,
  'roi-calculator': roiCalculatorL10n,
  'credit-card-minimum-payment-calculator': creditCardMinimumPaymentCalculatorL10n,
}

/**
 * 取工具某语种的本地化条目。
 * - locale === 'en' → 返回 null(调用方走英文原值)
 * - slug 未注册 → 返回 null(回退英文)
 */
export function getToolL10n(slug: string, locale: Locale): ToolL10nEntry | null {
  if (locale === 'en') return null
  return registry[slug]?.[locale] ?? null
}

/**
 * 取工具某语种的 FAQ(可见)。
 * 有本地化 → 用之;否则回退 lib/tool-faqs.ts 英文原值。
 */
export function getToolFaqsL10n(
  slug: string,
  locale: Locale,
  enFaqs: Array<{ q: string; a: string }>,
): Array<{ q: string; a: string }> {
  const entry = getToolL10n(slug, locale)
  return entry?.faqs ?? enFaqs
}

/**
 * 取工具交互界面字符串。
 * 缺失 → 回退 fallback(英文原值),保证 SSR 与缺译时不破图。
 */
export function tui(slug: string, locale: Locale, key: string, fallback: string): string {
  const entry = getToolL10n(slug, locale)
  return entry?.ui?.[key] ?? fallback
}
