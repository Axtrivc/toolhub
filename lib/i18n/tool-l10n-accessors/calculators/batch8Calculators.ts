/**
 * components/calculators/batch8Calculators.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { apyCalculatorL10n } from '@/lib/i18n/tools-l10n/apy-calculator'
import { creditCardMinimumPaymentCalculatorL10n } from '@/lib/i18n/tools-l10n/credit-card-minimum-payment-calculator'
import { cashBackCalculatorL10n } from '@/lib/i18n/tools-l10n/cash-back-calculator'
import { downPaymentCalculatorL10n } from '@/lib/i18n/tools-l10n/down-payment-calculator'
import { dtiCalculatorL10n } from '@/lib/i18n/tools-l10n/dti-calculator'
import { commissionCalculatorL10n } from '@/lib/i18n/tools-l10n/commission-calculator'
import { ageDifferenceCalculatorL10n } from '@/lib/i18n/tools-l10n/age-difference-calculator'
import { finalGradeCalculatorL10n } from '@/lib/i18n/tools-l10n/final-grade-calculator'
import { billSplitCalculatorL10n } from '@/lib/i18n/tools-l10n/bill-split-calculator'
import { trapezoidCalculatorL10n } from '@/lib/i18n/tools-l10n/trapezoid-calculator'
import { cubeCalculatorL10n } from '@/lib/i18n/tools-l10n/cube-calculator'
import { sphereCalculatorL10n } from '@/lib/i18n/tools-l10n/sphere-calculator'
import { salaryConverterL10n } from '@/lib/i18n/tools-l10n/salary-converter'

export const tui = makeRegistryTui({
  'apy-calculator': apyCalculatorL10n,
  'credit-card-minimum-payment-calculator': creditCardMinimumPaymentCalculatorL10n,
  'cash-back-calculator': cashBackCalculatorL10n,
  'down-payment-calculator': downPaymentCalculatorL10n,
  'dti-calculator': dtiCalculatorL10n,
  'commission-calculator': commissionCalculatorL10n,
  'age-difference-calculator': ageDifferenceCalculatorL10n,
  'final-grade-calculator': finalGradeCalculatorL10n,
  'bill-split-calculator': billSplitCalculatorL10n,
  'trapezoid-calculator': trapezoidCalculatorL10n,
  'cube-calculator': cubeCalculatorL10n,
  'sphere-calculator': sphereCalculatorL10n,
  'salary-converter': salaryConverterL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
