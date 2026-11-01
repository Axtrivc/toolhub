/**
 * rent-budget-calculator 本地化 bundle —— zh / es / de(B4 家庭与人生大事批)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const RentBudgetCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular el tope de alquiler con la regla del 30%', 'ver cuánto del bloque de «necesidades» del 50/30/20 se come el alquiler', 'comparar la capacidad bruta vs neta', 'ver el alquiler anual y el hueco de ahorro'],
    faqs: [
      { q: '¿Cómo se usa la regla del 30%?', a: 'El alquiler no debería superar el 30% del ingreso mensual bruto — la línea de referencia de la política de vivienda estadounidense durante décadas; pasarla cuenta como «sobrecarga de alquiler». Con 6 000 $/mes, el tope es 1 800 $. Es un filtro, no dogma: en ciudades caras se rompe a menudo.' },
      { q: '¿Por qué el límite 50/30/20 es 50% y no 30%?', a: 'El 50/30/20 divide el ingreso neto en necesidades 50%, caprichos 30% y ahorro 20%; el alquiler vive en «necesidades». El bloque entero es 50%, pero el alquiler es solo una de ellas — comida, transporte y seguros salen de ahí. En la práctica, apunta al 25-30% neto para dejar sitio al resto.' },
      { q: '¿Cuánta diferencia hay entre bruto y neto?', a: 'La regla del 30% se aplica tradicionalmente al bruto; el 50/30/20, al neto. Si eliges «bruto», la herramienta estima el neto con un ~22% de tipo efectivo (federal + FICA + estatal, media aproximada) y muestra ambas cifras: esa franja es tu margen de decisión.' },
      { q: '¿Superar el 30% es automáticamente mala idea?', a: 'No, pero hay que compensar a conciencia: si el alquiler se lleva el 40% del neto, el ahorro cae por debajo del 20% — acepta una etapa de bajo ahorro, recorta transporte y comida, o aléjate del centro. La regla sirve para volver explícito el trade-off, no para decidir por ti.' },
    ],
    ui: {
      'chartTitle': 'Reparto 50/30/20',
      'chartCenter': 'Ingreso neto',
      'slice.rentCap50': 'Necesidades 50%',
      'slice.wants30': 'Caprichos 30%',
      'slice.savings20': 'Ahorro 20%',
      'in.income': 'Ingreso mensual',
      'in.basis': 'Base del ingreso',
      'opt.basis.gross': 'Bruto (gross)',
      'opt.basis.net': 'Neto (net)',
      'out.rent30': 'Tope de alquiler (regla 30%)',
      'out.rentCap50': 'Bloque necesidades 50/30/20',
      'out.wants30': 'Caprichos 30%',
      'out.savings20': 'Ahorro 20%',
      'out.annualRent': 'Alquiler anual total',
      'outSub.rent30': 'sobre la base elegida',
      'outSub.rentCap50': 'compartido con el resto de necesidades',
      'note': '🏠 La regla del 30% se aplica por tradición al bruto; el 50/30/20 al neto (con «bruto», se estima un tipo efectivo ~22%). Fuera del alquiler, utilidades, seguro de inquilino y transporte también viven en «necesidades» — llena el bloque entero antes de firmar.',
      'errInvalid': 'Introduce un ingreso mensual positivo',
    },
  },
  de: {
    useCases: ['die Mietobergrenze nach der 30%-Regel berechnen', 'prüfen, wie viel Miete aus dem 50%-Bedarfsblock des 50/30/20 frisst', 'Brutto- vs. Netto-Betrachtung vergleichen', 'Jahresmiete und Sparspielraum sehen'],
    faqs: [
      { q: 'Wie funktioniert die 30%-Regel?', a: 'Die Miete sollte 30% des Bruttomonatseinkommens nicht übersteigen — die jahrzehntelange Referenzlinie der US-Wohnungspolitik; darüber gilt man als „mietbelastet“. Bei 6.000 $/Monat ist die Grenze 1.800 $. Sie ist ein Filter, kein Dogma: In teuren Städten wird sie oft überschritten.' },
      { q: 'Warum heißt die 50/30/20-Grenze 50% und nicht 30%?', a: 'Das 50/30/20 teilt das Nettoeinkommen in Bedarf 50%, Wünsche 30% und Sparen 20%; die Miete gehört zum Bedarf. Der Block ist 50% — aber die Miete ist nur ein Posten davon: Essen, Pendeln und Versicherung kommen aus demselben Topf. Praktisch: 25-30% netto anpeilen.' },
      { q: 'Wie groß ist der Brutto-Netto-Unterschied?', a: 'Die 30%-Regel gilt traditionell vom Brutto, das 50/30/20 vom Netto. Bei „Brutto“ schätzt der Rechner das Netto mit ~22% effektivem Steuersatz (Bund + FICA + Staat, grober Schnitt) und zeigt beide Werte — dieser Bereich ist dein Entscheidungsspielraum.' },
      { q: 'Ist über 30% automatisch schlecht?', a: 'Nein, aber bewusst ausgleichen: Frisst die Miete 40% des Netto, fällt die Sparquote unter 20% — dann entweder eine Phase mit wenig Sparen akzeptieren, Verkehr und Essen kürzen oder weiter weg wohnen. Die Regel macht den Trade-off sichtbar, sie entscheidet nicht für dich.' },
    ],
    ui: {
      'chartTitle': '50/30/20-Aufteilung',
      'chartCenter': 'Nettoeinkommen',
      'slice.rentCap50': 'Bedarf 50%',
      'slice.wants30': 'Wünsche 30%',
      'slice.savings20': 'Sparen 20%',
      'in.income': 'Monatseinkommen',
      'in.basis': 'Einkommensbasis',
      'opt.basis.gross': 'Brutto (gross)',
      'opt.basis.net': 'Netto (net)',
      'out.rent30': 'Mietobergrenze (30%-Regel)',
      'out.rentCap50': 'Bedarfsblock 50/30/20',
      'out.wants30': 'Wünsche 30%',
      'out.savings20': 'Sparen 20%',
      'out.annualRent': 'Jahresmiete gesamt',
      'outSub.rent30': 'auf der gewählten Basis',
      'outSub.rentCap50':'geteilt mit dem übrigen Bedarf',
      'note': '🏠 Die 30%-Regel gilt traditionell vom Brutto, das 50/30/20 vom Netto (bei „Brutto“ schätzt der Rechner ~22% effektive Steuer). Nebenkosten, Haftpflicht für Mieter und Pendeln wohnen ebenfalls im Bedarfsblock — fülle den ganzen Block, bevor du unterschreibst.',
      'errInvalid': 'Gib ein positives Monatseinkommen ein',
    },
  },
}
