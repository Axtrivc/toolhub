/**
 * markup-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const markupCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'Selling price = cost × (1 + markup%)',
      explain: 'El markup se añade al coste para fijar el precio de venta. Ojo: el markup % es relativo al coste, mientras que el margen es relativo al precio de venta — no son el mismo número.',
    },
    useCases: ['calcular precio de venta y margen desde el coste y el markup', 'entender la diferencia entre markup y margen', 'fijar precios en retail o restauración', 'obtener el precio para un margen objetivo'],
    faqs: [
      { q: '¿Cómo calculo el precio para un margen objetivo?', a: 'Precio = Coste ÷ (1 − Margen). Para un 40 % de margen sobre un coste de $60: 60 ÷ 0,60 = $100.' },
    ],
    ui: {
      errNonNegative: 'El coste y el markup no pueden ser negativos',
      'in.cost': 'Coste', 'in.markup': 'Markup',
      'out.profit': 'Beneficio por unidad', 'out.price': 'Precio de venta', 'out.margin': 'Margen de beneficio',
      note: '💰 El markup va sobre el COSTE (coste × markup %). El margen va sobre el PRECIO (beneficio/precio). NO son lo mismo.',
      chartTitle: 'Precio de venta: coste vs beneficio', chartCenter: 'Precio', 'slice.cost': 'Coste', 'slice.profit': 'Beneficio',
    },
  },
  de: {
    formula: {
      formula: 'Selling price = cost × (1 + markup%)',
      explain: 'Der Aufschlag wird auf die Kosten aufgeschlagen, um den Verkaufspreis festzulegen. Der Markup-Prozentsatz bezieht sich auf die Kosten, die Marge auf den Verkaufspreis — das sind nicht dieselben Zahlen.',
    },
    useCases: ['Verkaufspreis und Marge aus Kosten und Aufschlag berechnen', 'den Unterschied zwischen Aufschlag (Markup) und Marge verstehen', 'Preise für Einzelhandel oder Gastronomie festlegen', 'den Preis für eine Zielmarge zurückrechnen'],
    faqs: [
      { q: 'Wie berechne ich den Preis für eine Zielmarge?', a: 'Preis = Kosten ÷ (1 − Marge). Für 40 % Marge bei Kosten von $60: 60 ÷ 0,60 = $100.' },
    ],
    ui: {
      errNonNegative: 'Kosten und Aufschlag dürfen nicht negativ sein',
      'in.cost': 'Kosten', 'in.markup': 'Aufschlag (Markup)',
      'out.profit': 'Gewinn pro Einheit', 'out.price': 'Verkaufspreis', 'out.margin': 'Gewinnmarge',
      note: '💰 Aufschlag bezieht sich auf KOSTEN (Kosten × Aufschlag %). Marge bezieht sich auf PREIS (Gewinn/Preis). Sie sind NICHT dasselbe.',
      chartTitle: 'Verkaufspreis: Kosten vs. Gewinn', chartCenter: 'Preis', 'slice.cost': 'Kosten', 'slice.profit': 'Gewinn',
    },
  },
}
