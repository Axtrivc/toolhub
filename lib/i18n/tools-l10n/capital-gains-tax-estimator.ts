/**
 * capital-gains-tax-estimator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const capitalGainsTaxEstimatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'Gain = sale − basis\nTax = gain × rate\nNet = gain − tax',
      explain: 'Basis suele ser el precio de compra más costes. La ganancia tributa al tipo corto plazo (renta) o largo plazo (preferente) según el tiempo de tenencia.',
    },
    useCases: ['estimar el impuesto sobre plusvalías de acciones o cripto', 'comparar tipos de corto vs largo plazo', 'calcular lo que debes según el periodo de tenencia', 'decidir si vender ahora o seguir manteniendo'],
    faqs: [
      { q: '¿Cómo calculo mi impuesto sobre plusvalías?', a: 'Lleva el precio de compra y venta de cada lote. Ganancia = venta − compra − comisiones. Las plusvalías a largo plazo tributan al 0/15/20 % según tu renta total imponible (incluida la propia ganancia); las de corto plazo usan tu tramo de renta ordinaria.' },
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
      'outSub.rate': 'Tipo efectivo mezclado por tramos',
      'in.purchase': 'Precio de compra', 'in.sale': 'Precio de venta', 'in.years': 'Años mantenido', 'in.taxableIncome': 'Ingresos imponibles', 'in.filing': 'Estado civil',
      'opt.filing.single': 'Soltero', 'opt.filing.married': 'Casado, declaración conjunta',
      'out.gain': 'Plusvalía', 'out.rate': 'Tipo impositivo', 'out.tax': 'Impuesto estimado',
      note: '📈 Plusvalías en EE. UU.: mantenido más de 1 año = largo plazo (0/15/20 % según ingresos imponibles 2026). Mantenido <1 año = corto plazo (tipo de renta ordinaria). Las ganancias se apilan sobre la renta ordinaria al fijar el tramo (los tramos de largo plazo y el tipo marginal de corto plazo se calculan sobre ingresos + ganancia). Estimación simplificada — excluye NIIT e impuesto estatal.',
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
      { q: 'Was ist Tax-Loss Harvesting?', a: 'Verlustbringende Investitionen verkaufen, um realisierte Gewinne zu verrechnen und die Steuerlast zu senken. Verluste verrechnen Gewinne eins zu eins; übersteigen die Verluste die Gewinne, können bis zu $3,000 pro Jahr gegen ordentliches Einkommen verrechnet werden, der Rest wird vorgetragen. Achte auf die Wash-Sale-Regel: du darfst denselben Wert innerhalb von 30 Tagen nicht zurückkaufen.' },
      { q: 'Zahle ich Steuer, wenn ich den Erlös reinvestiere?', a: 'Ja. Der Verkauf löst ein steuerpflichtiges Ereignis aus, unabhängig davon, ob du reinvestierst — das Finanzamt besteuert den realisierten Gewinn. Nur das Halten innerhalb steuervergünstigter Konten (IRA, 401k) schiebt das auf, und nur bestimmte Strukturen vermeiden es ganz.' },
    ],
    ui: {
      'chartTitle': 'Wohin der Verkaufserlös geht',
      'cmp.0': 'Verkaufserlös',
      'cmpseg.0': 'Einkaufspreis zurück',
      'cmpseg.1': 'Nettogewinn nach Steuer',
      'cmpseg.2': 'Geschuldete Steuer',
      longTerm: 'Langfristig', shortTerm: 'Kurzfristig',
      'outSub.rate': 'Mischsatz über die Tranchenanteile',
      'in.purchase': 'Kaufpreis', 'in.sale': 'Verkaufspreis', 'in.years': 'Haltedauer (Jahre)', 'in.taxableIncome': 'Zu versteuerndes Einkommen', 'in.filing': 'Steuerstatus',
      'opt.filing.single': 'Ledig', 'opt.filing.married': 'Verheiratet, gemeinsam veranlagt',
      'out.gain': 'Kapitalgewinn', 'out.rate': 'Steuersatz', 'out.tax': 'Geschätzte Steuerschuld',
      note: '📈 US-Kapitalgewinne: mehr als 1 Jahr gehalten = langfristig (0/15/20 % nach zu versteuerndem Einkommen 2026). <1 Jahr gehalten = kurzfristig (Grenzsteuersatz). Zur Trimmermittlung wird der Gewinn auf das ordentliche Einkommen gestapelt (langfristige Tranchen und der kurzfristige Grenzsteuersatz beruhen auf Einkommen + Gewinn). Vereinfachte Schätzung — ohne NIIT und Steuer des Bundesstaates.',
    },
  },
}
