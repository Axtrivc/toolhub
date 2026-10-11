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
      { q: 'PMI 什么时候能取消?', a: '常规贷款的 PMI 在贷款价值比降到 78% 时自动取消,你也可以在 80% 时主动申请取消。FHA 贷款(2013 年后)除非再融资,否则终身需要 PMI。' },
      { q: '首付必须凑到 20% 吗?', a: '不是硬性要求。常规贷款最低可 3%–5% 首付、FHA 3.5%,但低于 20% 通常要付 PMI(约为贷款额的 0.5%–2%/年)。要不要凑足 20%,取决于省下的 PMI 与保持应急现金哪个更值。' },
      { q: '首付之外还要准备哪些钱?', a: '还有过户结算费,通常占房价 2%–5%,外加预付税费、保险和评估费。以 $400,000 的房子为例,20% 首付是 $80,000,结算费另需 $8,000–$20,000。' },
      { q: '国内买房适用这套 PMI 规则吗?', a: '不适用。PMI 是美国房贷概念;国内对应的是商业贷款首付比例(首套普遍 15%–30%,各城市不同)和公积金贷款规则。本工具的 20% 阈值按美国市场设计。' },
    ],
    ui: {
      'chartTitle': '房价构成',
      'cmp.0': '房价',
      'cmpseg.0': '首付',
      'cmpseg.1': '贷款额',
      'preset.0': 'FHA 3.5%',
      'preset.1': '常规 10%',
      'preset.2': '20%(免 PMI)',
      pmiNo: '否(首付 ≥ 20%)', pmiYes: '是(首付不足 20%)',
      errDownOver100: '首付款不能超过 100%',
      errNonNegative: '房价和首付比例不能为负',
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
      { q: '¿Es obligatorio llegar al 20 % de entrada?', a: 'No. Los préstamos convencionales de EE. UU. admiten desde el 3 %–5 % y el FHA desde el 3,5 %, pero por debajo del 20 % se cobra PMI (0,5 %–2 % anual del préstamo). En España lo habitual es financiar el 80 %: aparta ~20 % de entrada más 10 %–12 % para gastos e impuestos.' },
      { q: '¿Qué dinero hay que preparar además de la entrada?', a: 'En EE. UU., los closing costs suman un 2 %–5 % del precio. En España: notaría, registro, gestoría, el impuesto de transmisiones (6 %–10 % según comunidad) o IVA en obra nueva, más la comisión de apertura de la hipoteca.' },
      { q: '¿Conviene llegar al 20 % para evitar el PMI?', a: 'Casi siempre: el PMI cuesta 0,5 %–2 % anual del préstamo y dura hasta el 78 % de loan-to-value. Pero si vacías los ahorros pierdes el colchón de emergencia; compara ese coste con tener 3–6 meses de gastos reservados.' },
    ],
    ui: {
      'chartTitle': 'Reparto del precio',
      'cmp.0': 'Precio de la vivienda',
      'cmpseg.0': 'Entrada',
      'cmpseg.1': 'Importe del préstamo',
      'preset.0': 'FHA 3.5%',
      'preset.1': 'Convencional 10%',
      'preset.2': '20% (sin PMI)',
      pmiNo: 'No (20 % o más de entrada)', pmiYes: 'Sí (menos del 20 % de entrada)',
      errDownOver100: 'El pago inicial no puede superar el 100 %',
      errNonNegative: 'El precio y el porcentaje de entrada no pueden ser negativos',
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
      { q: 'Wann fällt der PMI weg?', a: 'Bei konventionellen Krediten wird der PMI automatisch bei 78 % Beleihungsauslastung beendet, oder du kannst die Streichung bei 80 % beantragen. FHA-Kredite (ab 2013) verlangen PMI für die gesamte Laufzeit, es sei denn, es wird refinanziert.' },
      { q: 'Muss die Anzahlung wirklich 20 % betragen?', a: 'Nicht zwingend: In den USA starten konventionelle Kredite bei 3 %–5 %, FHA bei 3,5 % — unter 20 % fällt aber PMI an (0,5 %–2 % des Darlehens pro Jahr). In Deutschland finanzieren Banken meist bis 80 %: 20 % Eigenkapital plus 5 %–10 % für Nebenkosten sind Standard.' },
      { q: 'Was kostet neben der Anzahlung noch Geld?', a: 'In den USA 2 %–5 % Closing Costs. In Deutschland kommen Grunderwerbsteuer (3,5 %–6,5 % je nach Bundesland), Notar und Grundbuch (~1,5 %) und ggf. Maklerprovision hinzu — bei 400.000 € schnell über 40.000 € neben der Anzahlung.' },
      { q: 'Lohnt es sich, PMI zu vermeiden?', a: 'PMI kostet 0,5 %–2 % des Darlehens pro Jahr und läuft bis 78 % Restbeleihung. In Deutschland gibt es keinen PMI — dort steigt stattdessen der Zinsaufschlag, sobald die Beleihung über 80 % liegt.' },
    ],
    ui: {
      'chartTitle': 'Aufteilung des Kaufpreises',
      'cmp.0': 'Kaufpreis',
      'cmpseg.0': 'Anzahlung',
      'cmpseg.1': 'Darlehensbetrag',
      'preset.0': 'FHA 3,5 %',
      'preset.1': 'Konventionell 10 %',
      'preset.2': '20 % (ohne PMI)',
      pmiNo: 'Nein (20 %+ Anzahlung)', pmiYes: 'Ja (unter 20 % Anzahlung)',
      errDownOver100: 'Die Anzahlung darf 100 % nicht überschreiten',
      errNonNegative: 'Preis und Anzahlungsprozent dürfen nicht negativ sein',
      'in.price': 'Hauspreis', 'in.down': 'Anzahlung',
      'out.amount': 'Anzahlungsbetrag', 'out.loan': 'Kreditbetrag', 'out.pmi': 'PMI erforderlich?',
      note: '🏠 Unter 20 % Anzahlung ist meist PMI nötig (50–300 $/Monat). Ab 20 % entfallen diese Kosten.',
    },
  },
}
