/**
 * down-payment-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases（无 formula 条目）
 */
import type { ToolL10n } from '../tool-l10n'

export const downPaymentCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'Down payment = price × rate\nLoan = price − down payment',
      explain: '首付是前期支付的现金部分,通常以售价百分比表示。贷款覆盖其余部分;首付越高,本金、月供往往还有利率都更低。',
    },
    useCases: ['按房价算首付金额', '算买房需要多少首付', '查 20% PMI 阈值', '算免 PMI 需要多少首付'],
    faqs: [
      { q: 'PMI 什么时候能取消?', a: '常规贷款的 PMI 在贷款价值比降到 78% 时自动取消，你也可以在 80% 时主动申请取消。FHA 贷款（2013 年后）除非再融资，否则终身需要 PMI。' },
    ],
    ui: {
      pmiNo: '否(首付 ≥ 20%)', pmiYes: '是(首付不足 20%)',
      'in.price': '房价', 'in.down': '首付',
      'out.amount': '首付金额', 'out.loan': '贷款金额', 'out.pmi': '需要 PMI?',
      note: '🏠 首付低于 20% 通常需要 PMI（$50–300/月）。20% 以上可完全避免这笔费用。',
    },
  },
  es: {
    formula: {
      formula: 'Down payment = price × rate\nLoan = price − down payment',
      explain: 'La entrada es la parte en efectivo por adelantado, normalmente como porcentaje del precio. El préstamo cubre el resto; una entrada mayor reduce el capital, la cuota y a menudo el tipo.',
    },
    useCases: ['calcular el pago inicial según el precio', 'saber cuánto pago inicial necesito', 'verificar el umbral del 20 % para PMI', 'calcular el pago inicial para evitar PMI'],
    faqs: [
      { q: '¿Cuándo desaparece el PMI?', a: 'En los préstamos convencionales, el PMI se cancela automáticamente al llegar al 78 % de loan-to-value, o puedes solicitar su eliminación al 80 %. Los préstamos FHA (posteriores a 2013) requieren PMI de por vida salvo que se refinancien.' },
    ],
    ui: {
      pmiNo: 'No (20 % o más de entrada)', pmiYes: 'Sí (menos del 20 % de entrada)',
      'in.price': 'Precio de la vivienda', 'in.down': 'Pago inicial',
      'out.amount': 'Importe del pago inicial', 'out.loan': 'Importe del préstamo', 'out.pmi': '¿Requiere PMI?',
      note: '🏠 Un pago inicial inferior al 20 % suele requerir PMI (50–300 $/mes). Con el 20 % o más se evita este coste.',
    },
  },
  de: {
    formula: {
      formula: 'Down payment = price × rate\nLoan = price − down payment',
      explain: 'Die Anzahlung ist der vorab bar gezahlte Anteil, meist als Prozentsatz des Preises. Der Kredit deckt den Rest; eine höhere Anzahlung senkt Kreditbetrag, Monatsrate und oft den Zins.',
    },
    useCases: ['die Anzahlung nach Preis berechnen', 'herausfinden, wie viel Anzahlung nötig ist', 'die 20 %-PMI-Schwelle prüfen', 'die Anzahlung berechnen, um PMI zu vermeiden'],
    faqs: [
      { q: 'Wann fällt der PMI weg?', a: 'Bei konventionellen Krediten wird der PMI automatisch bei 78 % Beleihungsauslastung storniert, oder du kannst die Streichung bei 80 % beantragen. FHA-Kredite (ab 2013) verlangen PMI für die gesamte Laufzeit, es sei denn, es wird umschuldiert.' },
    ],
    ui: {
      pmiNo: 'Nein (20 %+ Anzahlung)', pmiYes: 'Ja (unter 20 % Anzahlung)',
      'in.price': 'Hauspreis', 'in.down': 'Anzahlung',
      'out.amount': 'Anzahlungsbetrag', 'out.loan': 'Kreditbetrag', 'out.pmi': 'PMI erforderlich?',
      note: '🏠 Unter 20 % Anzahlung ist meist PMI nötig (50–300 $/Monat). Ab 20 % entfällt diese Kosten.',
    },
  },
}
