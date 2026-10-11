/**
 * components/calculators/batch7Calculators.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { scientificNotationConverterL10n } from '@/lib/i18n/tools-l10n/scientific-notation-converter'
import { primeNumberCheckerL10n } from '@/lib/i18n/tools-l10n/prime-number-checker'
import { primeFactorizationCalculatorL10n } from '@/lib/i18n/tools-l10n/prime-factorization-calculator'
import { combinationCalculatorL10n } from '@/lib/i18n/tools-l10n/combination-calculator'
import { permutationCalculatorL10n } from '@/lib/i18n/tools-l10n/permutation-calculator'

export const tui = makeRegistryTui({
  'scientific-notation-converter': scientificNotationConverterL10n,
  'prime-number-checker': primeNumberCheckerL10n,
  'prime-factorization-calculator': primeFactorizationCalculatorL10n,
  'combination-calculator': combinationCalculatorL10n,
  'permutation-calculator': permutationCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
