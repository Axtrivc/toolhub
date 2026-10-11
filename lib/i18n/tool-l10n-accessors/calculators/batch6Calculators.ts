/**
 * components/calculators/batch6Calculators.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { savingsGoalCalculatorL10n } from '@/lib/i18n/tools-l10n/savings-goal-calculator'
import { netWorthCalculatorL10n } from '@/lib/i18n/tools-l10n/net-worth-calculator'
import { annuityCalculatorL10n } from '@/lib/i18n/tools-l10n/annuity-calculator'
import { capitalGainsTaxEstimatorL10n } from '@/lib/i18n/tools-l10n/capital-gains-tax-estimator'
import { rentVsBuyCalculatorL10n } from '@/lib/i18n/tools-l10n/rent-vs-buy-calculator'
import { bodyFatCalculatorL10n } from '@/lib/i18n/tools-l10n/body-fat-calculator'
import { macroCalculatorL10n } from '@/lib/i18n/tools-l10n/macro-calculator'
import { pregnancyDueDateCalculatorL10n } from '@/lib/i18n/tools-l10n/pregnancy-due-date-calculator'

export const tui = makeRegistryTui({
  'savings-goal-calculator': savingsGoalCalculatorL10n,
  'net-worth-calculator': netWorthCalculatorL10n,
  'annuity-calculator': annuityCalculatorL10n,
  'capital-gains-tax-estimator': capitalGainsTaxEstimatorL10n,
  'rent-vs-buy-calculator': rentVsBuyCalculatorL10n,
  'body-fat-calculator': bodyFatCalculatorL10n,
  'macro-calculator': macroCalculatorL10n,
  'pregnancy-due-date-calculator': pregnancyDueDateCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
