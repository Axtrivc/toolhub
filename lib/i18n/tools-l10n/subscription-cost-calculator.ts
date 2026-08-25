/**
 * subscription-cost-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const SubscriptionCostCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'in.fiveYear': '五年累计',
      'in.monthly': '真实月支出',
      'in.monthlySubs': '月付订阅合计',
      'in.quarterlySubs': '季付订阅合计',
      'in.workHours': '每年工作小时',
      'in.yearly': '年度总额',
      'in.yearlySubs': '年付订阅合计',
      'note': '💡 列出每一笔周期性支出:流媒体、云盘、应用、健身、域名、新闻。五年那一栏才是"每月才 $9.99"的诚实价格。',
      'out.fiveYear': '五年累计',
      'out.monthly': '真实月支出',
      'out.monthlySubs': '月付订阅合计',
      'out.quarterlySubs': '季付订阅合计',
      'out.workHours': '每年工作小时',
      'out.yearly': '年度总额',
      'out.yearlySubs': '年付订阅合计',
    },
  },
  es: {
    ui: {
      'in.fiveYear': 'En 5 años',
      'in.monthly': 'Coste mensual real',
      'in.monthlySubs': 'Total de suscripciones mensuales',
      'in.quarterlySubs': 'Total trimestral',
      'in.workHours': 'Horas de trabajo al año',
      'in.yearly': 'Total anual',
      'in.yearlySubs': 'Total de suscripciones anuales',
      'note': '💡 Apunta todo cargo recurrente: streaming, nube, apps, gimnasio, dominios, prensa. La columna de 5 años es el precio honesto de «solo 9,99 $ al mes».',
      'out.fiveYear': 'En 5 años',
      'out.monthly': 'Coste mensual real',
      'out.monthlySubs': 'Total de suscripciones mensuales',
      'out.quarterlySubs': 'Total trimestral',
      'out.workHours': 'Horas de trabajo al año',
      'out.yearly': 'Total anual',
      'out.yearlySubs': 'Total de suscripciones anuales',
    },
  },
  de: {
    ui: {
      'in.fiveYear': 'Über 5 Jahre',
      'in.monthly': 'Wahre Monatskosten',
      'in.monthlySubs': 'Monatliche Abos gesamt',
      'in.quarterlySubs': 'Vierteljährliche Abos gesamt',
      'in.workHours': 'Arbeitsstunden pro Jahr',
      'in.yearly': 'Jahressumme',
      'in.yearlySubs': 'Jährliche Abos gesamt',
      'note': '💡 Liste jede wiederkehrende Gebühr: Streaming, Cloud, Apps, Fitness, Domains, News. Die 5-Jahres-Spalte ist der ehrliche Preis von „nur 9,99 $ im Monat".',
      'out.fiveYear': 'Über 5 Jahre',
      'out.monthly': 'Wahre Monatskosten',
      'out.monthlySubs': 'Monatliche Abos gesamt',
      'out.quarterlySubs': 'Vierteljährliche Abos gesamt',
      'out.workHours': 'Arbeitsstunden pro Jahr',
      'out.yearly': 'Jahressumme',
      'out.yearlySubs': 'Jährliche Abos gesamt',
    },
  },
}
