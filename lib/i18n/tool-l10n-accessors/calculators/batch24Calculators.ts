/**
 * components/calculators/batch24Calculators.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { CollegeSavingsCalculatorL10n } from '@/lib/i18n/tools-l10n/college-savings-calculator'
import { Match401kCalculatorL10n } from '@/lib/i18n/tools-l10n/401k-match-calculator'
import { SocialSecurityBreakEvenCalculatorL10n } from '@/lib/i18n/tools-l10n/social-security-break-even-calculator'
import { StudentLoanCalculatorL10n } from '@/lib/i18n/tools-l10n/student-loan-payment-calculator'
import { CarLeaseCalculatorL10n } from '@/lib/i18n/tools-l10n/car-lease-calculator'
import { EvChargingCostCalculatorL10n } from '@/lib/i18n/tools-l10n/ev-charging-cost-calculator'
import { RentBudgetCalculatorL10n } from '@/lib/i18n/tools-l10n/rent-budget-calculator'
import { ChristmasBudgetCalculatorL10n } from '@/lib/i18n/tools-l10n/christmas-budget-calculator'

export const tui = makeRegistryTui({
  'college-savings-calculator': CollegeSavingsCalculatorL10n,
  '401k-match-calculator': Match401kCalculatorL10n,
  'social-security-break-even-calculator': SocialSecurityBreakEvenCalculatorL10n,
  'student-loan-payment-calculator': StudentLoanCalculatorL10n,
  'car-lease-calculator': CarLeaseCalculatorL10n,
  'ev-charging-cost-calculator': EvChargingCostCalculatorL10n,
  'rent-budget-calculator': RentBudgetCalculatorL10n,
  'christmas-budget-calculator': ChristmasBudgetCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
