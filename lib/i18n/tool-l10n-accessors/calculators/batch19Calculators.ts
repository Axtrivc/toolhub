/**
 * components/calculators/batch19Calculators.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { rothIraCalculatorL10n } from '@/lib/i18n/tools-l10n/roth-ira-calculator'
import { fireCalculatorL10n } from '@/lib/i18n/tools-l10n/fire-calculator'
import { cacLtvCalculatorL10n } from '@/lib/i18n/tools-l10n/cac-ltv-calculator'
import { flooringCalculatorL10n } from '@/lib/i18n/tools-l10n/flooring-calculator'
import { dogFoodCalculatorL10n } from '@/lib/i18n/tools-l10n/dog-food-calculator'

export const tui = makeRegistryTui({
  'roth-ira-calculator': rothIraCalculatorL10n,
  'fire-calculator': fireCalculatorL10n,
  'cac-ltv-calculator': cacLtvCalculatorL10n,
  'flooring-calculator': flooringCalculatorL10n,
  'dog-food-calculator': dogFoodCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
