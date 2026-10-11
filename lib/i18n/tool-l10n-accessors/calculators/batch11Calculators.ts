/**
 * components/calculators/batch11Calculators.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { FuelCostCalculatorL10n } from '@/lib/i18n/tools-l10n/fuel-cost-calculator'
import { SubscriptionCostCalculatorL10n } from '@/lib/i18n/tools-l10n/subscription-cost-calculator'
import { OvertimeCalculatorL10n } from '@/lib/i18n/tools-l10n/overtime-calculator'
import { TakeHomePayCalculatorL10n } from '@/lib/i18n/tools-l10n/take-home-pay-calculator'
import { WeddingBudgetCalculatorL10n } from '@/lib/i18n/tools-l10n/wedding-budget-calculator'
import { HeartRateZoneCalculatorL10n } from '@/lib/i18n/tools-l10n/heart-rate-zone-calculator'
import { CaffeineCalculatorL10n } from '@/lib/i18n/tools-l10n/caffeine-calculator'
import { StepsToCaloriesCalculatorL10n } from '@/lib/i18n/tools-l10n/steps-to-calories-calculator'
import { PaintCalculatorL10n } from '@/lib/i18n/tools-l10n/paint-calculator'
import { DogAgeCalculatorL10n } from '@/lib/i18n/tools-l10n/dog-age-calculator'

export const tui = makeRegistryTui({
  'fuel-cost-calculator': FuelCostCalculatorL10n,
  'subscription-cost-calculator': SubscriptionCostCalculatorL10n,
  'overtime-calculator': OvertimeCalculatorL10n,
  'take-home-pay-calculator': TakeHomePayCalculatorL10n,
  'wedding-budget-calculator': WeddingBudgetCalculatorL10n,
  'heart-rate-zone-calculator': HeartRateZoneCalculatorL10n,
  'caffeine-calculator': CaffeineCalculatorL10n,
  'steps-to-calories-calculator': StepsToCaloriesCalculatorL10n,
  'paint-calculator': PaintCalculatorL10n,
  'dog-age-calculator': DogAgeCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
