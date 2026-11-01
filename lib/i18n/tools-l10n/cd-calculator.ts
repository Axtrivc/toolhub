/**
 * cd-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts)。
 *
 * 覆盖:faqs(可见)+ useCases(Common uses)+ formula(公式区)。b00 新建,无 ui 块。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'Maturity = P × (1 + r/n)^(n·t) · Penalty = P × (r/12) × penalty months'

export const cdCalculatorL10n: ToolL10n = {



  // ──────────────────────────── Español ────────────────────────────
  es: {
    ui: {
      'in.deposit': 'Importe del depósito',
      'in.apy': 'APY (rendimiento anual)',
      'in.term': 'Plazo del depósito',
      'opt.term.3': '3 meses',
      'opt.term.6': '6 meses',
      'opt.term.12': '12 meses (1 año)',
      'opt.term.24': '24 meses (2 años)',
      'opt.term.36': '36 meses (3 años)',
      'opt.term.60': '60 meses (5 años)',
      'in.compound': 'Frecuencia de capitalización',
      'opt.compound.daily': 'Diaria',
      'opt.compound.monthly': 'Mensual',
      'opt.compound.quarterly': 'Trimestral',
      'in.exitAt': 'Retirada anticipada en el',
      'in.penalty': 'Penalización por cancelación anticipada',
      'opt.penalty.1': '1 mes de intereses',
      'opt.penalty.3': '3 meses de intereses',
      'opt.penalty.6': '6 meses de intereses',
      'out.maturityValue': 'Valor al vencimiento',
      'out.totalInterest': 'Interés total al vencimiento',
      'out.earlyExitValue': 'Valor en caso de retirada anticipada',
      'outSub.earlyExitValue': 'Si cancelas antes de tiempo',
      'out.penaltyCost': 'Coste de la penalización',
      'outSub.penaltyCost': 'Intereses retenidos',
      'preset.0': 'Depósito 1 año (4,0% APY)',
      'preset.1': 'Depósito 6 meses (4,5% APY)',
      'preset.2': 'Depósito 3 años (4,2% APY)',
      'errInvalid': 'El depósito y el plazo deben ser mayores que 0',
      'inSuffix.deposit': '$',
      'inSuffix.apy': '%',
      'inSuffix.exitAt': '% del plazo',
      'cmp.0': 'Mantener hasta el vencimiento',
      'cmp.1': 'Retirada anticipada',
      'cmpseg.0': 'Capital',
      'cmpseg.1': 'Intereses conservados',
      'cmpseg.2': 'Penalización perdida',
      'chartTitle': 'Mantener hasta vencimiento vs Retirada anticipada',
      'note': '💰 En la mayoría de bancos de EE. UU., las penalizaciones por retirada anticipada se cobran sobre los intereses generados (nunca sobre el capital) — normalmente 3 meses de interés en CDs cortos y hasta 12 en plazos de 5 años. El deslizador «Retirada anticipada en el» permite simular romper el CD a mitad de plazo.',
    },
    useCases: [
      'comparar un CD de 12 meses al 4,6 % con uno de 18 meses al 4,3 %: 25.000 € rinden unos 1.175 € frente a 1.660 €',
      'ensayar la salida anticipada: a los 14 meses de un CD a dos años, con 3 meses de penalización, cuánto recibes realmente frente a dos CDs de un año',
      'montar una escalera: 30.000 € en tramos de 1, 2 y 3 años, un tramo que madura cada año; verifica el vencimiento de cada tramo',
      'medir la capitalización: al mismo 4,5 %, el interés mensual compuesto supera al simple en unos 0,1 puntos el primer año — la brecha crece con el plazo',
    ],
    faqs: [
      {
        q: '¿Cómo se capitaliza el interés de un CD?',
        a: 'La mayoría capitaliza diaria o mensualmente y paga todo al vencimiento. El valor final sigue A = P × (1 + r/n)^(n·t), con n la frecuencia de capitalización y t el plazo en años — la calculadora expone los tres parámetros.',
      },
      {
        q: '¿Cuál es la penalización típica por retirar antes?',
        a: 'En los bancos americanos: 1 mes de interés para CDs de menos de un año, 3 meses para plazos de 1-4 años y 6-12 meses para CDs a 5 años. La penalización sale de los intereses devengados, nunca del capital — pero salir casi de inmediato puede borrar todo lo ganado.',
      },
      {
        q: '¿Qué pasa si retiro justo a mitad del plazo?',
        a: 'Usa el deslizador «Retirada anticipada en el»: acumulas la mitad de los intereses del plazo y luego pierdes los meses de penalización. Si la penalización supera lo devengado, simplemente recuperas el capital — la herramienta nunca muestra menos de lo depositado.',
      },
      {
        q: '¿En qué se parece a un plazo fijo?',
        a: 'El CD equivale a un plazo fijo: tipo fijo y vencimiento. La diferencia está en el retiro anticipado: los bancos americanos cobran meses de interés de penalización, mientras el plazo fijo español suele liquidar al tipo de cancelación anticipada pactado en contrato.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Valor al vencimiento con r = tipo anual, n = frecuencia de capitalización, t = plazo en años. Un retiro anticipado conserva los intereses devengados menos la penalización, que los bancos expresan en meses de interés sobre el capital — el capital nunca se toca.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    ui: {
      'in.deposit': 'Einzahlungsbetrag',
      'in.apy': 'APY (Jahresrendite)',
      'in.term': 'Laufzeit',
      'opt.term.3': '3 Monate',
      'opt.term.6': '6 Monate',
      'opt.term.12': '12 Monate (1 Jahr)',
      'opt.term.24': '24 Monate (2 Jahre)',
      'opt.term.36': '36 Monate (3 Jahre)',
      'opt.term.60': '60 Monate (5 Jahre)',
      'in.compound': 'Verzinsung',
      'opt.compound.daily': 'Täglich',
      'opt.compound.monthly': 'Monatlich',
      'opt.compound.quarterly': 'Vierteljährlich',
      'in.exitAt': 'Vorzeitige Auszahlung bei',
      'in.penalty': 'Strafzinsen bei vorzeitiger Kündigung',
      'opt.penalty.1': '1 Monat Zinsen',
      'opt.penalty.3': '3 Monate Zinsen',
      'opt.penalty.6': '6 Monate Zinsen',
      'out.maturityValue': 'Endwert bei Fälligkeit',
      'out.totalInterest': 'Gesamtzinsen bei Fälligkeit',
      'out.earlyExitValue': 'Wert bei vorzeitiger Auszahlung',
      'outSub.earlyExitValue': 'Bei vorzeitiger Kündigung',
      'out.penaltyCost': 'Strafzinsen',
      'outSub.penaltyCost': 'Einbehaltene Zinsen',
      'preset.0': '1-Jahr-Festgeld (4,0% APY)',
      'preset.1': '6-Monate-Festgeld (4,5% APY)',
      'preset.2': '3-Jahre-Großanlage (4,2% APY)',
      'errInvalid': 'Einzahlungsbetrag und Laufzeit müssen größer als 0 sein',
      'inSuffix.deposit': '$',
      'inSuffix.apy': '%',
      'inSuffix.exitAt': '% der Laufzeit',
      'cmp.0': 'Halten bis Fälligkeit',
      'cmp.1': 'Vorzeitige Auszahlung',
      'cmpseg.0': 'Kapital',
      'cmpseg.1': 'Behaltene Zinsen',
      'cmpseg.2': 'Verlorene Strafzinsen',
      'chartTitle': 'Halten bis Fälligkeit vs. Vorzeitige Auszahlung',
      'note': '💰 Bei den meisten US-Banken gehen Strafzinsen von den aufgelaufenen Zinsen ab (nie vom Kapital) — typisch 3 Monatszinsen bei kurzen Laufzeiten und bis zu 12 bei fünf Jahren. Mit dem Schieberegler »Vorzeitige Auszahlung bei« lässt sich durchspielen, was eine Kündigung mitten in der Laufzeit kostet.',
    },
    useCases: [
      'zwölfmonatige CD mit 4,6 % gegen 18 Monate mit 4,3 % rechnen: 25.000 € bringen rund 1.175 € gegen 1.660 € Zinsen',
      'vorzeitigen Exit durchspielen: nach 14 von 24 Monaten drei Strafmonate — wie viel landet auf dem Konto gegenüber zwei Einjahres-CDs',
      'eine Treppe bauen: 30.000 € auf 1, 2 und 3 Jahre splitten, jährlich fällt eine Tranche an — Fälligkeit und Zinsen je Tranche prüfen',
      'Zinseszins quantifizieren: bei 4,5 % liegt die monatliche Verzinsung im ersten Jahr rund 0,1 Punkte über dem einfachen Zins — mit längerer Laufzeit wächst die Lücke',
    ],
    faqs: [
      {
        q: 'Wie wird der Zins bei einer CD verzinst?',
        a: 'Die meisten CDs verzinsen täglich oder monatlich und zahlen am Ende alles aus. Der Fälligkeitswert folgt A = P × (1 + r/n)^(n·t) mit n als Zinsfrequenz und t als Laufzeit in Jahren — alle drei Parameter sind im Tool einstellbar.',
      },
      {
        q: 'Was kostet eine vorzeitige Kündigung?',
        a: 'US-Üblich: 1 Monatszins bei CDs unter einem Jahr, 3 Monate bei 1-4 Jahren Laufzeit, 6-12 Monate bei Fünfjahres-CDs. Die Strafe geht von den angelaufenen Zinsen ab, niemals vom Kapital — wer fast sofort aussteigt, verliert aber die kompletten Erträge.',
      },
      {
        q: 'Was passiert beim Exit genau bei 50 % der Laufzeit?',
        a: 'Nimm den Regler »Vorzeitige Auszahlung bei«: Es läuft die Hälfte der Laufzeitzinsen an, dann werden die Strafmonate abgezogen. Übersteigt die Strafe die Zinsen, bekommst du eben das Kapital zurück — das Tool zeigt nie weniger als die Einzahlung.',
      },
      {
        q: 'Wie passt das zu deutschem Festgeld?',
        a: 'Das US-CD entspricht dem Festgeld: fester Zins, feste Laufzeit. Der Unterschied liegt beim vorzeitigen Ausstieg — US-Banken verlangen mehrere Monatszinsen als Strafe, deutsche Festgeldkonten sind während der Laufzeit meist gar nicht kündbar. Vor der Eröffnung prüfen, was der Vertrag im Notfall erlaubt.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Fälligkeitswert mit r = Jahreszins, n = Zinsfrequenz, t = Laufzeit in Jahren. Beim vorzeitigen Exit bleiben die angefallenen Zinsen minus Strafe — Banken rechnen sie als Monatszinsen aufs Kapital; das Kapital selbst bleibt unangetastet.',
    },
  },
}
