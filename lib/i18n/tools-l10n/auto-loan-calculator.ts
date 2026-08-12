/**
 * auto-loan-calculator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(无 FAQ / formula 条目 → 仅 useCases)
 */
import type { ToolL10n } from '../tool-l10n'

export const autoLoanCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '含税费的购车月供计算器',
      '含以旧换新的车贷计算器',
      '车贷摊还计划表',
      '我的车贷月供是多少',
    ],
  },
  es: {
    useCases: [
      'calculadora de cuota de coche con impuestos y tasas',
      'calculadora de préstamo de coche con entrega',
      'cuadro de amortización de préstamo de coche',
      'cuánto es mi cuota del coche',
    ],
  },
  de: {
    useCases: [
      'Autokreditrechner mit Steuern und Gebühren',
      'Autokreditrechner mit Inzahlungnahme',
      'Tilgungsplan für Autokredit',
      'wie hoch ist meine Autoreate',
    ],
  },
}
