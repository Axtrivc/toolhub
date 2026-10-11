/**
 * components/tools/batch14FunTools.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { DiceRollerL10n } from '@/lib/i18n/tools-l10n/dice-roller'
import { CoinFlipL10n } from '@/lib/i18n/tools-l10n/coin-flip'
import { WheelSpinnerL10n } from '@/lib/i18n/tools-l10n/wheel-spinner'
import { MorseCodeTranslatorL10n } from '@/lib/i18n/tools-l10n/morse-code-translator'
import { TypingSpeedTestL10n } from '@/lib/i18n/tools-l10n/typing-speed-test'
import { RandomTeamGeneratorL10n } from '@/lib/i18n/tools-l10n/random-team-generator'
import { PasswordEntropyCheckerL10n } from '@/lib/i18n/tools-l10n/password-entropy-checker'

export const tui = makeRegistryTui({
  'dice-roller': DiceRollerL10n,
  'coin-flip': CoinFlipL10n,
  'wheel-spinner': WheelSpinnerL10n,
  'morse-code-translator': MorseCodeTranslatorL10n,
  'typing-speed-test': TypingSpeedTestL10n,
  'random-team-generator': RandomTeamGeneratorL10n,
  'password-entropy-checker': PasswordEntropyCheckerL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
