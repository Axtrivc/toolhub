/**
 * components/calculators/batch29Calculators.tsx 专用的 tui 子表 accessor(随 B9 批次新建)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { BtuCalculatorL10n } from '@/lib/i18n/tools-l10n/btu-calculator'
import { BoardFootCalculatorL10n } from '@/lib/i18n/tools-l10n/board-foot-calculator'
import { WallpaperCalculatorL10n } from '@/lib/i18n/tools-l10n/wallpaper-calculator'
import { RaisedBedSoilCalculatorL10n } from '@/lib/i18n/tools-l10n/raised-bed-soil-calculator'
import { PoolVolumeCalculatorL10n } from '@/lib/i18n/tools-l10n/pool-volume-calculator'
import { CoffeeRatioCalculatorL10n } from '@/lib/i18n/tools-l10n/coffee-ratio-calculator'
import { BreadHydrationCalculatorL10n } from '@/lib/i18n/tools-l10n/bread-hydration-calculator'

export const tui = makeRegistryTui({
  'btu-calculator': BtuCalculatorL10n,
  'board-foot-calculator': BoardFootCalculatorL10n,
  'wallpaper-calculator': WallpaperCalculatorL10n,
  'raised-bed-soil-calculator': RaisedBedSoilCalculatorL10n,
  'pool-volume-calculator': PoolVolumeCalculatorL10n,
  'coffee-ratio-calculator': CoffeeRatioCalculatorL10n,
  'bread-hydration-calculator': BreadHydrationCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
