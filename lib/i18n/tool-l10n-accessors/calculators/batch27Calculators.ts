/**
 * components/calculators/batch27Calculators.tsx 专用的 tui 子表 accessor(与 batch11 同构)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { OvulationCalculatorL10n } from '@/lib/i18n/tools-l10n/ovulation-calculator'
import { PregnancyWeightGainCalculatorL10n } from '@/lib/i18n/tools-l10n/pregnancy-weight-gain-calculator'
import { DiaperCostCalculatorL10n } from '@/lib/i18n/tools-l10n/diaper-cost-calculator'
import { CatAgeCalculatorL10n } from '@/lib/i18n/tools-l10n/cat-age-calculator'
import { CatFoodCalculatorL10n } from '@/lib/i18n/tools-l10n/cat-food-calculator'
import { ZodiacSignCalculatorL10n } from '@/lib/i18n/tools-l10n/zodiac-sign-calculator'
import { ChineseZodiacCalculatorL10n } from '@/lib/i18n/tools-l10n/chinese-zodiac-calculator'

export const tui = makeRegistryTui({
  'ovulation-calculator': OvulationCalculatorL10n,
  'pregnancy-weight-gain-calculator': PregnancyWeightGainCalculatorL10n,
  'diaper-cost-calculator': DiaperCostCalculatorL10n,
  'cat-age-calculator': CatAgeCalculatorL10n,
  'cat-food-calculator': CatFoodCalculatorL10n,
  'zodiac-sign-calculator': ZodiacSignCalculatorL10n,
  'chinese-zodiac-calculator': ChineseZodiacCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
