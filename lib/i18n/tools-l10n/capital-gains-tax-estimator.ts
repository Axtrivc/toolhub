/**
 * capital-gains-tax-estimator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const capitalGainsTaxEstimatorL10n: ToolL10n = {
  zh: {
    useCases: ['估算股票/加密资产的资本利得税', '比较短期 vs 长期持有税率', '按持有期算税前应缴税款', '决定现在卖还是再持有一段时间'],
    faqs: [
      { q: '怎么计算资本利得税?', a: '按每个批次跟踪买入价和卖出价。利得 = 卖价 − 买价 − 手续费。长期利得按 0/15/20% 征税,依据你的应税总收入(含利得本身);短期利得按普通收入档位征税。' },
      { q: '什么是税损收割?', a: '卖出亏损的投资来抵消已实现利得,从而降低税单。亏损按一比一抵消利得;若亏损超过利得,每年最多 $3,000 可抵减普通收入,其余结转以后年度。注意洗售规则:30 天内不得重新买入同一证券。' },
      { q: '如果我把收益再投资,还要交税吗?', a: '要。卖出即触发应税事件,无论你是否再投资——IRS 对已实现利得征税。只有在税收优惠账户(IRA、401k)内持有才能递延,且只有特定结构能完全避免。' },
    ],
    ui: {
      'in.purchase': '买入价', 'in.sale': '卖出价', 'in.years': '持有年限', 'in.bracket': '所得税档位',
      'out.gain': '资本利得', 'out.rate': '税率', 'out.tax': '预估应缴税款',
      note: '📈 美国资本利得:持有 1 年以上 = 长期(0/15/20%)。持有不足 1 年 = 短期(按普通收入税率)。简化估算——未含 NIIT 和州税。',
    },
  },
  es: {
    useCases: ['estimar el impuesto sobre plusvalías de acciones o cripto', 'comparar tipos de corto vs largo plazo', 'calcular lo que debes según el periodo de tenencia', 'decidir si vender ahora o seguir manteniendo'],
    faqs: [
      { q: '¿Cómo calculo mi impuesto sobre plusvalías?', a: 'Lleva el precio de compra y venta de cada lote. Ganancia = venta − compra − comisiones. Las plusvalías a largo plazo tributan al 0/15/20 % según tu renta total taxable (incluida la propia ganancia); las de corto plazo usan tu tramo de renta ordinaria.' },
      { q: '¿Qué es la cosecha de pérdidas fiscales?', a: 'Vender inversiones con pérdida para compensar ganancias realizadas y bajar la factura fiscal. Las pérdidas compensan ganancias uno a uno; si las pérdidas superan las ganancias, hasta $3,000 por año pueden compensar renta ordinaria y el resto se difiere. Cuidado con la regla de venta lavada: no puedes recomprar el mismo valor en 30 días.' },
      { q: '¿Pago impuestos si reinvierto lo obtenido?', a: 'Sí. Vender dispara un evento imponible aunque reinviertas — Hacienda grava la ganancia realizada. Solo mantener dentro de cuentas con ventajas fiscales (IRA, 401k) lo difiere, y solo estructuras específicas lo evitan por completo.' },
    ],
    ui: {
      'in.purchase': 'Precio de compra', 'in.sale': 'Precio de venta', 'in.years': 'Años mantenido', 'in.bracket': 'Tramo impositivo',
      'out.gain': 'Plusvalía', 'out.rate': 'Tipo impositivo', 'out.tax': 'Impuesto estimado',
      note: '📈 Plusvalías en EE. UU.: mantenido 1+ año = largo plazo (0/15/20 %). Mantenido <1 año = corto plazo (tipo de renta ordinaria). Estimación simplificada — excluye NIIT e impuesto estatal.',
    },
  },
  de: {
    useCases: ['die Kapitalertragsteuer für Aktien oder Krypto schätzen', 'kurz- vs. langfristige Steuersätze vergleichen', 'die Schuld nach Haltedauer berechnen', 'entscheiden, jetzt verkaufen oder länger halten'],
    faqs: [
      { q: 'Wie berechne ich meine Kapitalertragsteuer?', a: 'Verfolge Kauf- und Verkaufspreis je Tranche. Gewinn = Verkauf − Kauf − Gebühren. Langfristige Gewinne werden mit 0/15/20 % besteuert, je nach gesamtem zu versteuerndem Einkommen (inklusive des Gewinns selbst); kurzfristige Gewinne verwenden deinen Grenzsteuersatz.' },
      { q: 'Was ist Tax-Loss Harvesting?', a: 'Verlustreiche Investitionen verkaufen, um realisierte Gewinne zu verrechnen und die Steuerlast zu senken. Verluste verrechnen Gewinne eins zu eins; übersteigen die Verluste die Gewinne, können bis zu $3,000 pro Jahr gegen ordentliches Einkommen verrechnet werden, der Rest wird vorgetragen. Achte auf die Wash-Sale-Regel: du darfst denselben Wert innerhalb von 30 Tagen nicht zurückkaufen.' },
      { q: 'Zahle ich Steuer, wenn ich den Erlös reinvestiere?', a: 'Ja. Der Verkauf löst ein steuerpflichtiges Ereignis aus, unabhängig davon, ob du reinvestierst — die Steuer behandelt den realisierten Gewinn. Nur das Halten innerhalb steuervergünstigter Konten (IRA, 401k) schiebt das auf, und nur bestimmte Strukturen vermeiden es ganz.' },
    ],
    ui: {
      'in.purchase': 'Kaufpreis', 'in.sale': 'Verkaufspreis', 'in.years': 'Haltedauer (Jahre)', 'in.bracket': 'Einkommensteuersatz',
      'out.gain': 'Kapitalgewinn', 'out.rate': 'Steuersatz', 'out.tax': 'Geschätzte Steuerschuld',
      note: '📈 US-Kapitalgewinne: 1+ Jahr gehalten = langfristig (0/15/20 %). <1 Jahr gehalten = kurzfristig (Grenzsteuersatz). Vereinfachte Schätzung — ohne NIIT und Steuer des Bundesstaates.',
    },
  },
}
