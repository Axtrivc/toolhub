/**
 * ebay-fee-calculator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(无 FAQ / formula 条目 → 仅 useCases)
 */
import type { ToolL10n } from '../tool-l10n'

export const ebayFeeCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      'eBay 成交费计算器 2025',
      'Etsy 卖家手续费计算器',
      'eBay 每笔交易抽成多少',
      'eBay 净利润计算器',
    ],
  },
  es: {
    useCases: [
      'calculadora de comisión final de eBay 2025',
      'calculadora de tarifas de vendedor de Etsy',
      'cuánto cobra eBay por venta',
      'calculadora de beneficio neto de eBay',
    ],
  },
  de: {
    useCases: [
      'eBay-Endwertgebühren-Rechner 2025',
      'Etsy-Verkäufergebühren-Rechner',
      'wie viel behält eBay pro Verkauf ein',
      'eBay-Nettogewinn-Rechner',
    ],
  },
}
