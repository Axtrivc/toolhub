/**
 * components/calculators/batch22Calculators.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { DividendCalculatorL10n } from '@/lib/i18n/tools-l10n/dividend-calculator'
import { DcaCalculatorL10n } from '@/lib/i18n/tools-l10n/dca-calculator'
import { StockAverageCalculatorL10n } from '@/lib/i18n/tools-l10n/stock-average-calculator'
import { OptionsProfitCalculatorL10n } from '@/lib/i18n/tools-l10n/options-profit-calculator'
import { CryptoProfitCalculatorL10n } from '@/lib/i18n/tools-l10n/crypto-profit-calculator'
import { TreasuryBillCalculatorL10n } from '@/lib/i18n/tools-l10n/treasury-bill-calculator'
import { BondYieldCalculatorL10n } from '@/lib/i18n/tools-l10n/bond-yield-calculator'
import { LotteryOddsCalculatorL10n } from '@/lib/i18n/tools-l10n/lottery-odds-calculator'

export const tui = makeRegistryTui({
  'dividend-calculator': DividendCalculatorL10n,
  'dca-calculator': DcaCalculatorL10n,
  'stock-average-calculator': StockAverageCalculatorL10n,
  'options-profit-calculator': OptionsProfitCalculatorL10n,
  'crypto-profit-calculator': CryptoProfitCalculatorL10n,
  'treasury-bill-calculator': TreasuryBillCalculatorL10n,
  'bond-yield-calculator': BondYieldCalculatorL10n,
  'lottery-odds-calculator': LotteryOddsCalculatorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
