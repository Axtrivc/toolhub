/**
 * amortization-table-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const AmortizationTableGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'in.interestShare': '利息占还款比例',
      'in.monthly': '月供',
      'in.principal': '贷款金额',
      'in.rate': '年利率',
      'in.totalInterest': '总利息',
      'in.totalPaid': '总还款',
      'in.years': '期限',
      'inSuffix.years': '年',
      'note': '📋 用上方下载逐期还款 CSV 明细——每行把固定月供拆为利息(余额×月利率)与本金,并附运行余额。前期以利息为主。',
      'out.interestShare': '利息占还款比例',
      'out.monthly': '月供',
      'out.principal': '贷款金额',
      'out.rate': '年利率',
      'out.totalInterest': '总利息',
      'out.totalPaid': '总还款',
      'out.years': '期限',
    },
  },
  es: {
    ui: {
      'in.interestShare': 'Proporción de intereses',
      'in.monthly': 'Pago mensual',
      'in.principal': 'Importe del préstamo',
      'in.rate': 'Tasa anual',
      'in.totalInterest': 'Interés total',
      'in.totalPaid': 'Total pagado',
      'in.years': 'Plazo',
      'inSuffix.years': 'años',
      'note': '📋 Descarga arriba la tabla completa en CSV: cada fila separa el pago fijo en interés (saldo × tasa mensual) y capital, con el saldo corrido. Los primeros años pesan los intereses.',
      'out.interestShare': 'Proporción de intereses',
      'out.monthly': 'Pago mensual',
      'out.principal': 'Importe del préstamo',
      'out.rate': 'Tasa anual',
      'out.totalInterest': 'Interés total',
      'out.totalPaid': 'Total pagado',
      'out.years': 'Plazo',
    },
  },
  de: {
    ui: {
      'in.interestShare': 'Zinsanteil der Zahlungen',
      'in.monthly': 'Monatsrate',
      'in.principal': 'Darlehensbetrag',
      'in.rate': 'Jahreszins',
      'in.totalInterest': 'Zinsen gesamt',
      'in.totalPaid': 'Gesamt gezahlt',
      'in.years': 'Laufzeit',
      'inSuffix.years': 'Jahre',
      'note': '📋 Lade oben den kompletten Tilgungsplan als CSV — jede Zeile zerlegt die Rate in Zins (Saldo × Monatszins) und Tilgung mit Restschuld. Frühe Jahre sind zinslastig.',
      'out.interestShare': 'Zinsanteil der Zahlungen',
      'out.monthly': 'Monatsrate',
      'out.principal': 'Darlehensbetrag',
      'out.rate': 'Jahreszins',
      'out.totalInterest': 'Zinsen gesamt',
      'out.totalPaid': 'Gesamt gezahlt',
      'out.years': 'Laufzeit',
    },
  },
}
