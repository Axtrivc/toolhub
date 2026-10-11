/**
 * components/calculators/batch18Calculators.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { hysaCalculatorL10n } from '@/lib/i18n/tools-l10n/hysa-calculator'
import { cdCalculatorL10n } from '@/lib/i18n/tools-l10n/cd-calculator'
import { breakEvenCalculatorL10n } from '@/lib/i18n/tools-l10n/break-even-calculator'
import { profitMarginCalculatorL10n } from '@/lib/i18n/tools-l10n/profit-margin-calculator'
import { intermittentFastingCalculatorL10n } from '@/lib/i18n/tools-l10n/intermittent-fasting-calculator'
import { llmApiCostCalculatorL10n } from '@/lib/i18n/tools-l10n/llm-api-cost-calculator'

export const tui = makeRegistryTui({
  'hysa-calculator': hysaCalculatorL10n,
  'cd-calculator': cdCalculatorL10n,
  'break-even-calculator': breakEvenCalculatorL10n,
  'profit-margin-calculator': profitMarginCalculatorL10n,
  'intermittent-fasting-calculator': intermittentFastingCalculatorL10n,
  'llm-api-cost-calculator': llmApiCostCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
