/**
 * components/generators/batchGenerators.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { uuidGeneratorL10n } from '@/lib/i18n/tools-l10n/uuid-generator'
import { loremIpsumGeneratorL10n } from '@/lib/i18n/tools-l10n/lorem-ipsum-generator'
import { standardDeviationCalculatorL10n } from '@/lib/i18n/tools-l10n/standard-deviation-calculator'
import { percentileCalculatorL10n } from '@/lib/i18n/tools-l10n/percentile-calculator'
import { inflationCalculatorL10n } from '@/lib/i18n/tools-l10n/inflation-calculator'
import { retirementCalculatorL10n } from '@/lib/i18n/tools-l10n/retirement-calculator'
import { simpleInterestCalculatorL10n } from '@/lib/i18n/tools-l10n/simple-interest-calculator'
import { unitPriceCalculatorL10n } from '@/lib/i18n/tools-l10n/unit-price-calculator'

export const tui = makeRegistryTui({
  'uuid-generator': uuidGeneratorL10n,
  'lorem-ipsum-generator': loremIpsumGeneratorL10n,
  'standard-deviation-calculator': standardDeviationCalculatorL10n,
  'percentile-calculator': percentileCalculatorL10n,
  'inflation-calculator': inflationCalculatorL10n,
  'retirement-calculator': retirementCalculatorL10n,
  'simple-interest-calculator': simpleInterestCalculatorL10n,
  'unit-price-calculator': unitPriceCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
