/**
 * components/tools/batch10Tools.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { EpochConverterL10n } from '@/lib/i18n/tools-l10n/epoch-converter'
import { JsonDiffL10n } from '@/lib/i18n/tools-l10n/json-diff'
import { LineDiffCheckerL10n } from '@/lib/i18n/tools-l10n/line-diff-checker'
import { RobotsTxtGeneratorL10n } from '@/lib/i18n/tools-l10n/robots-txt-generator'
import { SleepCalculatorL10n } from '@/lib/i18n/tools-l10n/sleep-calculator'
import { CookingConverterL10n } from '@/lib/i18n/tools-l10n/cooking-converter'

export const tui = makeRegistryTui({
  'epoch-converter': EpochConverterL10n,
  'json-diff': JsonDiffL10n,
  'line-diff-checker': LineDiffCheckerL10n,
  'robots-txt-generator': RobotsTxtGeneratorL10n,
  'sleep-calculator': SleepCalculatorL10n,
  'cooking-converter': CookingConverterL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
