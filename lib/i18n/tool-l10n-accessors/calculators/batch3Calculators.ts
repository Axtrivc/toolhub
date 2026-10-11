/**
 * components/calculators/batch3Calculators.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { calorieCalculatorL10n } from '@/lib/i18n/tools-l10n/calorie-calculator'
import { bmrCalculatorL10n } from '@/lib/i18n/tools-l10n/bmr-calculator'
import { waterIntakeCalculatorL10n } from '@/lib/i18n/tools-l10n/water-intake-calculator'
import { idealWeightCalculatorL10n } from '@/lib/i18n/tools-l10n/ideal-weight-calculator'
import { fractionCalculatorL10n } from '@/lib/i18n/tools-l10n/fraction-calculator'
import { ratioCalculatorL10n } from '@/lib/i18n/tools-l10n/ratio-calculator'
import { lcmGcdCalculatorL10n } from '@/lib/i18n/tools-l10n/lcm-gcd-calculator'
import { markupCalculatorL10n } from '@/lib/i18n/tools-l10n/markup-calculator'
import { mortgageCalculatorL10n } from '@/lib/i18n/tools-l10n/mortgage-calculator'
import { hourlyToSalaryCalculatorL10n } from '@/lib/i18n/tools-l10n/hourly-to-salary-calculator'
import { roiCalculatorL10n } from '@/lib/i18n/tools-l10n/roi-calculator'
import { creditCardPayoffCalculatorL10n } from '@/lib/i18n/tools-l10n/credit-card-payoff-calculator'
import { incomeTaxEstimatorL10n } from '@/lib/i18n/tools-l10n/income-tax-estimator'

export const tui = makeRegistryTui({
  'calorie-calculator': calorieCalculatorL10n,
  'bmr-calculator': bmrCalculatorL10n,
  'water-intake-calculator': waterIntakeCalculatorL10n,
  'ideal-weight-calculator': idealWeightCalculatorL10n,
  'fraction-calculator': fractionCalculatorL10n,
  'ratio-calculator': ratioCalculatorL10n,
  'lcm-gcd-calculator': lcmGcdCalculatorL10n,
  'markup-calculator': markupCalculatorL10n,
  'mortgage-calculator': mortgageCalculatorL10n,
  'hourly-to-salary-calculator': hourlyToSalaryCalculatorL10n,
  'roi-calculator': roiCalculatorL10n,
  'credit-card-payoff-calculator': creditCardPayoffCalculatorL10n,
  'income-tax-estimator': incomeTaxEstimatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
