/**
 * markup-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const markupCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['按成本和加价率算售价和利润率', '搞清加价率(markup)和利润率(margin)的区别', '为零售或餐饮定价', '按目标利润率反推售价'],
    faqs: [
      { q: '怎么按目标利润率算售价?', a: '售价 = 成本 ÷ (1 − 利润率)。成本 $60、目标利润率 40%:60 ÷ 0.60 = $100。' },
    ],
    ui: {
      'in.cost': '成本', 'in.markup': '加价率',
      'out.profit': '单位利润', 'out.price': '售价', 'out.margin': '利润率',
      note: '💰 加价率(markup)基于成本(成本 × 加价率%)。利润率(margin)基于售价(利润/售价)。两者不一样。',
      chartTitle: '售价:成本 vs 利润', chartCenter: '售价', 'slice.cost': '成本', 'slice.profit': '利润',
    },
  },
  es: {
    useCases: ['calcular precio de venta y margen desde el coste y el markup', 'entender la diferencia entre markup y margen', 'fijar precios en retail o restauración', 'obtener el precio para un margen objetivo'],
    faqs: [
      { q: '¿Cómo calculo el precio para un margen objetivo?', a: 'Precio = Coste ÷ (1 − Margen). Para un 40 % de margen sobre un coste de $60: 60 ÷ 0,60 = $100.' },
    ],
    ui: {
      'in.cost': 'Coste', 'in.markup': 'Markup',
      'out.profit': 'Beneficio por unidad', 'out.price': 'Precio de venta', 'out.margin': 'Margen de beneficio',
      note: '💰 El markup va sobre el COSTE (coste × markup %). El margen va sobre el PRECIO (beneficio/precio). NO son lo mismo.',
      chartTitle: 'Precio de venta: coste vs beneficio', chartCenter: 'Precio', 'slice.cost': 'Coste', 'slice.profit': 'Beneficio',
    },
  },
  de: {
    useCases: ['Verkaufspreis und Marge aus Kosten und Aufschlag berechnen', 'den Unterschied zwischen Aufschlag (Markup) und Marge verstehen', 'Preise für Einzelhandel oder Gastronomie festlegen', 'den Preis für eine Zielmarge zurückrechnen'],
    faqs: [
      { q: 'Wie berechne ich den Preis für eine Zielmarge?', a: 'Preis = Kosten ÷ (1 − Marge). Für 40 % Marge auf $60 Kosten: 60 ÷ 0,60 = $100.' },
    ],
    ui: {
      'in.cost': 'Kosten', 'in.markup': 'Aufschlag (Markup)',
      'out.profit': 'Gewinn pro Einheit', 'out.price': 'Verkaufspreis', 'out.margin': 'Gewinnmarge',
      note: '💰 Aufschlag bezieht sich auf KOSTEN (Kosten × Aufschlag %). Marge bezieht sich auf PREIS (Gewinn/Preis). Sie sind NICHT dasselbe.',
      chartTitle: 'Verkaufspreis: Kosten vs. Gewinn', chartCenter: 'Preis', 'slice.cost': 'Kosten', 'slice.profit': 'Gewinn',
    },
  },
}
