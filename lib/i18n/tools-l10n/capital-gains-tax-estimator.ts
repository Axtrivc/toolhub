/**
 * capital-gains-tax-estimator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const capitalGainsTaxEstimatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'Gain = sale − basis\nTax = gain × rate\nNet = gain − tax',
      explain: 'basis 通常是买入价加费用。收益按持有期长短适用短期(按收入)或长期(优惠)税率。',
    },
    useCases: ['估算股票/加密资产的资本利得税', '比较短期 vs 长期持有税率', '按持有期算税前应缴税款', '决定现在卖还是再持有一段时间'],
    faqs: [
      { q: '怎么计算资本利得税?', a: '按每个批次跟踪买入价和卖出价。利得 = 卖价 − 买价 − 手续费。长期利得按 0/15/20% 征税,依据你的应税总收入(含利得本身);短期利得按普通收入档位征税。' },
      { q: '什么是税损收割?', a: '卖出亏损的投资来抵消已实现利得,从而降低税单。亏损按一比一抵消利得;若亏损超过利得,每年最多 $3,000 可抵减普通收入,其余结转以后年度。注意洗售规则:30 天内不得重新买入同一证券。' },
      { q: '如果我把收益再投资,还要交税吗?', a: '要。卖出即触发应税事件,无论你是否再投资——IRS 对已实现利得征税。只有在税收优惠账户(IRA、401k)内持有才能递延,且只有特定结构能完全避免。' },
    ],
    ui: {
      'chartTitle': '卖出所得去向',
      'cmp.0': '卖出所得',
      'cmpseg.0': '收回成本',
      'cmpseg.1': '税后净收益',
      'cmpseg.2': '应缴税款',
      longTerm: '长期', shortTerm: '短期',
      'in.purchase': '买入价', 'in.sale': '卖出价', 'in.years': '持有年限', 'in.taxableIncome': '应税收入', 'in.filing': '申报身份',
      'opt.filing.single': '单身', 'opt.filing.married': '已婚,联合申报',
      'out.gain': '资本利得', 'out.rate': '税率', 'out.tax': '预估应缴税款',
      note: '📈 美国资本利得:持有 1 年以上 = 长期(按 2026 应税收入分 0/15/20%)。持有不足 1 年 = 短期(按普通收入税率)。判档时收益堆叠在普通收入之上(长期档位与短期边际税率均按收入 + 收益计算)。简化估算——未含 NIIT 和州税。',
    },
  },
  es: {
    formula: {
      formula: 'Gain = sale − basis\nTax = gain × rate\nNet = gain − tax',
      explain: 'Basis suele ser el precio de compra más costes. La ganancia tributa al tipo corto plazo (renta) o largo plazo (preferente) según el tiempo de tenencia.',
    },
    useCases: ['estimar el impuesto sobre plusvalías de acciones o cripto', 'comparar tipos de corto vs largo plazo', 'calcular lo que debes según el periodo de tenencia', 'decidir si vender ahora o seguir manteniendo'],
    faqs: [
      { q: '¿Cómo calculo mi impuesto sobre plusvalías?', a: 'Lleva el precio de compra y venta de cada lote. Ganancia = venta − compra − comisiones. Las plusvalías a largo plazo tributan al 0/15/20 % según tu renta total taxable (incluida la propia ganancia); las de corto plazo usan tu tramo de renta ordinaria.' },
      { q: '¿Qué es la cosecha de pérdidas fiscales?', a: 'Vender inversiones con pérdida para compensar ganancias realizadas y bajar la factura fiscal. Las pérdidas compensan ganancias uno a uno; si las pérdidas superan las ganancias, hasta $3,000 por año pueden compensar renta ordinaria y el resto se difiere. Cuidado con la regla de venta lavada: no puedes recomprar el mismo valor en 30 días.' },
      { q: '¿Pago impuestos si reinvierto lo obtenido?', a: 'Sí. Vender dispara un evento imponible aunque reinviertas — Hacienda grava la ganancia realizada. Solo mantener dentro de cuentas con ventajas fiscales (IRA, 401k) lo difiere, y solo estructuras específicas lo evitan por completo.' },
    ],
    ui: {
      'chartTitle': 'A dónde va la venta',
      'cmp.0': 'Ingreso de la venta',
      'cmpseg.0': 'Coste recuperado',
      'cmpseg.1': 'Ganancia neta tras impuestos',
      'cmpseg.2': 'Impuesto a pagar',
      longTerm: 'Largo plazo', shortTerm: 'Corto plazo',
      'in.purchase': 'Precio de compra', 'in.sale': 'Precio de venta', 'in.years': 'Años mantenido', 'in.taxableIncome': 'Ingresos imponibles', 'in.filing': 'Estado civil',
      'opt.filing.single': 'Soltero', 'opt.filing.married': 'Casado, declaración conjunta',
      'out.gain': 'Plusvalía', 'out.rate': 'Tipo impositivo', 'out.tax': 'Impuesto estimado',
      note: '📈 Plusvalías en EE. UU.: mantenido 1+ año = largo plazo (0/15/20 % según ingresos imponibles 2026). Mantenido <1 año = corto plazo (tipo de renta ordinaria). Las ganancias se apilan sobre la renta ordinaria al fijar el tramo (los tramos de largo plazo y el tipo marginal de corto plazo se calculan sobre ingresos + ganancia). Estimación simplificada — excluye NIIT e impuesto estatal.',
    },
  },
  de: {
    formula: {
      formula: 'Gain = sale − basis\nTax = gain × rate\nNet = gain − tax',
      explain: 'Basis ist meist Kaufpreis plus Kosten. Der Gewinn wird je nach Haltedauer mit dem kurzfristigen (Einkommen) oder langfristigen (ermäßigten) Satz besteuert.',
    },
    useCases: ['die Kapitalertragsteuer für Aktien oder Krypto schätzen', 'kurz- vs. langfristige Steuersätze vergleichen', 'die Schuld nach Haltedauer berechnen', 'entscheiden, jetzt verkaufen oder länger halten'],
    faqs: [
      { q: 'Wie berechne ich meine Kapitalertragsteuer?', a: 'Verfolge Kauf- und Verkaufspreis je Tranche. Gewinn = Verkauf − Kauf − Gebühren. Langfristige Gewinne werden mit 0/15/20 % besteuert, je nach gesamtem zu versteuerndem Einkommen (inklusive des Gewinns selbst); kurzfristige Gewinne verwenden deinen Grenzsteuersatz.' },
      { q: 'Was ist Tax-Loss Harvesting?', a: 'Verlustreiche Investitionen verkaufen, um realisierte Gewinne zu verrechnen und die Steuerlast zu senken. Verluste verrechnen Gewinne eins zu eins; übersteigen die Verluste die Gewinne, können bis zu $3,000 pro Jahr gegen ordentliches Einkommen verrechnet werden, der Rest wird vorgetragen. Achte auf die Wash-Sale-Regel: du darfst denselben Wert innerhalb von 30 Tagen nicht zurückkaufen.' },
      { q: 'Zahle ich Steuer, wenn ich den Erlös reinvestiere?', a: 'Ja. Der Verkauf löst ein steuerpflichtiges Ereignis aus, unabhängig davon, ob du reinvestierst — die Steuer behandelt den realisierten Gewinn. Nur das Halten innerhalb steuervergünstigter Konten (IRA, 401k) schiebt das auf, und nur bestimmte Strukturen vermeiden es ganz.' },
    ],
    ui: {
      'chartTitle': 'Wohin der Verkaufserlös geht',
      'cmp.0': 'Verkaufserlös',
      'cmpseg.0': 'Einkaufspreis zurück',
      'cmpseg.1': 'Nettogewinn nach Steuer',
      'cmpseg.2': 'Geschuldete Steuer',
      longTerm: 'Langfristig', shortTerm: 'Kurzfristig',
      'in.purchase': 'Kaufpreis', 'in.sale': 'Verkaufspreis', 'in.years': 'Haltedauer (Jahre)', 'in.taxableIncome': 'Zu versteuerndes Einkommen', 'in.filing': 'Steuerklasse',
      'opt.filing.single': 'Allein', 'opt.filing.married': 'Verheiratet, gemeinsam',
      'out.gain': 'Kapitalgewinn', 'out.rate': 'Steuersatz', 'out.tax': 'Geschätzte Steuerschuld',
      note: '📈 US-Kapitalgewinne: 1+ Jahr gehalten = langfristig (0/15/20 % nach zu versteuerndem Einkommen 2026). <1 Jahr gehalten = kurzfristig (Grenzsteuersatz). Zur Trimmermittlung wird der Gewinn auf das ordentliche Einkommen gestapelt (langfristige Tranchen und der kurzfristige Grenzsteuersatz beruhen auf Einkommen + Gewinn). Vereinfachte Schätzung — ohne NIIT und Steuer des Bundesstaates.',
    },
  },
}
