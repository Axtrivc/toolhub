/**
 * saas-ltv-churn-calculator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(无 FAQ / formula 条目 → 仅 useCases)
 */
import type { ToolL10n } from '../tool-l10n'

export const saasLtvChurnCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      'SaaS 客户终身价值计算器',
      'LTV:CAC 比率计算器',
      '流失率对收入的影响',
      'CAC 回本周期计算器',
    ],
  },
  es: {
    useCases: [
      'calculadora de valor de vida del cliente SaaS',
      'calculadora de ratio LTV:CAC',
      'impacto de la tasa de cancelación en ingresos',
      'calculadora de periodo de recuperación de CAC',
    ],
  },
  de: {
    useCases: [
      'SaaS-Customer-Lifetime-Value-Rechner',
      'LTV-zu-CAC-Verhältnis-Rechner',
      'Auswirkung der Churn-Rate auf den Umsatz',
      'CAC-Payback-Rechner',
    ],
  },
}
