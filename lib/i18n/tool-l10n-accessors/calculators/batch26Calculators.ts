/**
 * components/calculators/batch26Calculators.tsx 专用的 tui 子表 accessor(按 batch20 模式生成)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { OneRepMaxCalculatorL10n } from '@/lib/i18n/tools-l10n/one-rep-max-calculator'
import { RaceTimePredictorL10n } from '@/lib/i18n/tools-l10n/race-time-predictor'
import { Vo2MaxCalculatorL10n } from '@/lib/i18n/tools-l10n/vo2-max-calculator'
import { BodySurfaceAreaCalculatorL10n } from '@/lib/i18n/tools-l10n/body-surface-area-calculator'
import { WaistToHeightRatioCalculatorL10n } from '@/lib/i18n/tools-l10n/waist-to-height-ratio-calculator'
import { StepsToMilesCalculatorL10n } from '@/lib/i18n/tools-l10n/steps-to-miles-calculator'
import { WeightLossGoalCalculatorL10n } from '@/lib/i18n/tools-l10n/weight-loss-goal-calculator'
import { FiberIntakeCalculatorL10n } from '@/lib/i18n/tools-l10n/fiber-intake-calculator'

export const tui = makeRegistryTui({
  'one-rep-max-calculator': OneRepMaxCalculatorL10n,
  'race-time-predictor': RaceTimePredictorL10n,
  'vo2-max-calculator': Vo2MaxCalculatorL10n,
  'body-surface-area-calculator': BodySurfaceAreaCalculatorL10n,
  'waist-to-height-ratio-calculator': WaistToHeightRatioCalculatorL10n,
  'steps-to-miles-calculator': StepsToMilesCalculatorL10n,
  'weight-loss-goal-calculator': WeightLossGoalCalculatorL10n,
  'fiber-intake-calculator': FiberIntakeCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
