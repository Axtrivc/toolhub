/**
 * bill-split-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases（无 formula 条目）
 */
import type { ToolL10n } from '../tool-l10n'

export const billSplitCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['dividir la cuenta con propina', 'repartir la cuenta con impuestos y propina', 'dividir la cuenta entre personas', 'calcular cuánto paga cada persona'],
    faqs: [
      { q: '¿Qué hacemos si alguien no bebió?', a: 'Detalla esa parte por separado. Resta el coste del alcohol del total, repártelo entre los que bebieron y divide la comida a partes iguales.' },
    ],
    ui: {
      'chartTitle': 'Cuenta + propina',
      'cmp.0': 'Total',
      'cmpseg.0': 'Cuenta',
      'cmpseg.1': 'Propina',
      errMinOnePerson: 'Introduce al menos 1 persona',
      errNonNegative: 'Los valores no pueden ser negativos',
      'in.total': 'Total de la cuenta', 'in.tip': 'Propina', 'in.people': 'Número de personas',
      'out.perPerson': 'Cada persona paga', 'out.tipAmount': 'Propina total', 'out.grandTotal': 'Total general',
      note: '🍽️ Divide la cuenta a partes iguales incluyendo propina. Para dividir por platos, calcula los importes individuales por separado.',
    },
  },
  de: {
    useCases: ['die Rechnung mit Trinkgeld teilen', 'die Rechnung mit Steuer und Trinkgeld splitten', 'die Restaurantrechnung auf Personen aufteilen', 'ausrechnen, was jeder zahlt'],
    faqs: [
      { q: 'Was tun, wenn jemand nichts getrunken hat?', a: 'Rechne diesen Teil separat ab. Ziehe die Getränkekosten vom Gesamtbetrag ab, teile sie unter den Trinkenden auf und teile das Essen zu gleichen Teilen.' },
    ],
    ui: {
      'chartTitle': 'Rechnung + Trinkgeld',
      'cmp.0': 'Gesamtsumme',
      'cmpseg.0': 'Rechnung',
      'cmpseg.1': 'Trinkgeld',
      errMinOnePerson: 'Gib mindestens 1 Person an',
      errNonNegative: 'Werte dürfen nicht negativ sein',
      'in.total': 'Rechnungsbetrag', 'in.tip': 'Trinkgeld', 'in.people': 'Anzahl Personen',
      'out.perPerson': 'Jeder zahlt', 'out.tipAmount': 'Trinkgeld gesamt', 'out.grandTotal': 'Gesamtbetrag',
      note: '🍽️ Teilt eine Rechnung inklusive Trinkgeld gleichmäßig. Für einzelne Posten rechne die Beträge pro Person separat.',
    },
  },
}
