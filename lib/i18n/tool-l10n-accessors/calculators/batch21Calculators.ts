/**
 * components/calculators/batch21Calculators.tsx 专用的 tui 子表 accessor(脚本生成格式,勿混入其他文件词典)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { HouseAffordabilityCalculatorL10n } from '@/lib/i18n/tools-l10n/mortgage-affordability-calculator'
import { RefinanceBreakEvenCalculatorL10n } from '@/lib/i18n/tools-l10n/refinance-break-even-calculator'
import { BiweeklyMortgagePaymentCalculatorL10n } from '@/lib/i18n/tools-l10n/biweekly-mortgage-payment-calculator'
import { ClosingCostCalculatorL10n } from '@/lib/i18n/tools-l10n/closing-cost-calculator'
import { PropertyTaxCalculatorL10n } from '@/lib/i18n/tools-l10n/property-tax-calculator'
import { ProratedRentCalculatorL10n } from '@/lib/i18n/tools-l10n/prorated-rent-calculator'
import { RentalPropertyCalculatorL10n } from '@/lib/i18n/tools-l10n/rental-property-calculator'
import { HouseFlipCalculatorL10n } from '@/lib/i18n/tools-l10n/house-flip-calculator'

export const tui = makeRegistryTui({
  'mortgage-affordability-calculator': HouseAffordabilityCalculatorL10n,
  'refinance-break-even-calculator': RefinanceBreakEvenCalculatorL10n,
  'biweekly-mortgage-payment-calculator': BiweeklyMortgagePaymentCalculatorL10n,
  'closing-cost-calculator': ClosingCostCalculatorL10n,
  'property-tax-calculator': PropertyTaxCalculatorL10n,
  'prorated-rent-calculator': ProratedRentCalculatorL10n,
  'rental-property-calculator': RentalPropertyCalculatorL10n,
  'house-flip-calculator': HouseFlipCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
