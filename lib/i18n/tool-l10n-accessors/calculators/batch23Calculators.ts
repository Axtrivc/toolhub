/**
 * components/calculators/batch23Calculators.tsx 专用的 tui 子表 accessor(脚本生成格式)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { SelfEmploymentTaxCalculatorL10n } from '@/lib/i18n/tools-l10n/self-employment-tax-calculator'
import { DepreciationCalculatorL10n } from '@/lib/i18n/tools-l10n/depreciation-calculator'
import { MileageReimbursementCalculatorL10n } from '@/lib/i18n/tools-l10n/mileage-reimbursement-calculator'
import { ContractorVsEmployeeCalculatorL10n } from '@/lib/i18n/tools-l10n/contractor-vs-employee-calculator'
import { GrossUpCalculatorL10n } from '@/lib/i18n/tools-l10n/gross-up-calculator'
import { CommuteCostCalculatorL10n } from '@/lib/i18n/tools-l10n/commute-cost-calculator'
import { SmokingCostCalculatorL10n } from '@/lib/i18n/tools-l10n/smoking-cost-calculator'
import { EmergencyFundCalculatorL10n } from '@/lib/i18n/tools-l10n/emergency-fund-calculator'

export const tui = makeRegistryTui({
  'self-employment-tax-calculator': SelfEmploymentTaxCalculatorL10n,
  'depreciation-calculator': DepreciationCalculatorL10n,
  'mileage-reimbursement-calculator': MileageReimbursementCalculatorL10n,
  'contractor-vs-employee-calculator': ContractorVsEmployeeCalculatorL10n,
  'gross-up-calculator': GrossUpCalculatorL10n,
  'commute-cost-calculator': CommuteCostCalculatorL10n,
  'smoking-cost-calculator': SmokingCostCalculatorL10n,
  'emergency-fund-calculator': EmergencyFundCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
