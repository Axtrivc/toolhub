/**
 * components/calculators/batch25Calculators.tsx 专用的 tui 子表 accessor(脚本生成格式,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { PayPalFeeCalculatorL10n } from '@/lib/i18n/tools-l10n/paypal-fee-calculator'
import { EtsyFeeCalculatorL10n } from '@/lib/i18n/tools-l10n/etsy-fee-calculator'
import { AmazonSellerFeeCalculatorL10n } from '@/lib/i18n/tools-l10n/amazon-seller-fee-calculator'
import { SquareFeeCalculatorL10n } from '@/lib/i18n/tools-l10n/square-fee-calculator'
import { YouTubeMoneyCalculatorL10n } from '@/lib/i18n/tools-l10n/youtube-money-calculator'
import { NpsCalculatorL10n } from '@/lib/i18n/tools-l10n/nps-calculator'
import { ConversionRateCalculatorL10n } from '@/lib/i18n/tools-l10n/conversion-rate-calculator'
import { GymCostPerVisitCalculatorL10n } from '@/lib/i18n/tools-l10n/gym-cost-per-visit-calculator'

export const tui = makeRegistryTui({
  'paypal-fee-calculator': PayPalFeeCalculatorL10n,
  'etsy-fee-calculator': EtsyFeeCalculatorL10n,
  'amazon-seller-fee-calculator': AmazonSellerFeeCalculatorL10n,
  'square-fee-calculator': SquareFeeCalculatorL10n,
  'youtube-money-calculator': YouTubeMoneyCalculatorL10n,
  'nps-calculator': NpsCalculatorL10n,
  'conversion-rate-calculator': ConversionRateCalculatorL10n,
  'gym-cost-per-visit-calculator': GymCostPerVisitCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
