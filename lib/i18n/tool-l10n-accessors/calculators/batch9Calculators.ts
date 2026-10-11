/**
 * components/calculators/batch9Calculators.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { RomanNumeralConverterL10n } from '@/lib/i18n/tools-l10n/roman-numeral-converter'
import { PaceCalculatorL10n } from '@/lib/i18n/tools-l10n/pace-calculator'
import { ProteinIntakeCalculatorL10n } from '@/lib/i18n/tools-l10n/protein-intake-calculator'
import { ElectricityCostCalculatorL10n } from '@/lib/i18n/tools-l10n/electricity-cost-calculator'
import { CarCostCalculatorL10n } from '@/lib/i18n/tools-l10n/car-cost-calculator'

export const tui = makeRegistryTui({
  'roman-numeral-converter': RomanNumeralConverterL10n,
  'pace-calculator': PaceCalculatorL10n,
  'protein-intake-calculator': ProteinIntakeCalculatorL10n,
  'electricity-cost-calculator': ElectricityCostCalculatorL10n,
  'car-cost-calculator': CarCostCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
