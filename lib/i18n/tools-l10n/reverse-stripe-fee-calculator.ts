/**
 * reverse-stripe-fee-calculator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(无 FAQ / formula 条目 → 仅 useCases)
 */
import type { ToolL10n } from '../tool-l10n'

export const reverseStripeFeeCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '收多少钱才能覆盖 Stripe 手续费',
      'PayPal 反向手续费计算器',
      'Stripe 手续费补足计算器',
      '把支付手续费转嫁给客户的计算器',
    ],
  },
  es: {
    useCases: [
      'cuánto cobrar para cubrir las tarifas de Stripe',
      'calculadora inversa de tarifas de PayPal',
      'calculadora de recargo de tarifas de Stripe',
      'calculadora para repercutir comisiones al cliente',
    ],
  },
  de: {
    useCases: [
      'wie viel berechnen um Stripe-Gebühren zu decken',
      'umgekehrter PayPal-Gebührenrechner',
      'Stripe-Gebühren-Aufschlagsrechner',
      'Zahlungsgebühren auf Kunden umlegen Rechner',
    ],
  },
}
