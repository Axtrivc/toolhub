/**
 * unit-price-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases + formula.explain(公式串回退英文)
 */
import type { ToolL10n } from '../tool-l10n'

export const unitPriceCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'Unit price = total price / quantity',
      explain: 'Precio por unidad (por onza, por pieza, por metro). Comparar el precio unitario — no el del paquete — revela la mejor compra real cuando los tamaños difieren.',
    },
    useCases: ['comparar el valor real por gramo/ml/unidad', 'ver si el formato grande sale realmente más barato', 'comparar precios con unidades distintas', 'encontrar la opción más barata por unidad'],
    faqs: [
      { q: '¿Sirve para productos que no son alimentos?', a: 'Sí. Usa «unidades» para papel higiénico, pañales, pilas o cualquier producto vendido por cantidad. Usa ml para líquidos y g para sólidos. La matemática es la misma.' },
    ],
    ui: {
      'chartTitle': 'Duelo de precio unitario',
      'cmp.0': 'Opción 1',
      'cmp.1': 'Opción 2',
      'cmpseg.0': 'por unidad base',
      'in.price1': 'Precio 1', 'in.size1': 'Tamaño 1', 'in.unit1': 'Unidad 1', 'in.price2': 'Precio 2', 'in.size2': 'Tamaño 2', 'in.unit2': 'Unidad 2',
      'opt.unit1.g': 'gramos (g)', 'opt.unit1.ml': 'mililitros (ml)', 'opt.unit1.ct': 'unidades (ct)', 'opt.unit1.kg': 'kilogramos (kg)',
      'opt.unit1.oz': 'onzas (oz)', 'opt.unit1.lb': 'libras (lb)', 'opt.unit1.l': 'litros (l)', 'opt.unit1.mg': 'miligramos (mg)',
      'opt.unit2.g': 'gramos (g)', 'opt.unit2.ml': 'mililitros (ml)', 'opt.unit2.ct': 'unidades (ct)', 'opt.unit2.kg': 'kilogramos (kg)',
      'opt.unit2.oz': 'onzas (oz)', 'opt.unit2.lb': 'libras (lb)', 'opt.unit2.l': 'litros (l)', 'opt.unit2.mg': 'miligramos (mg)',
      'out.unit1price': 'Precio unitario opción 1', 'out.unit2price': 'Precio unitario opción 2', 'out.winner': 'Mejor oferta',
      note: '🛒 Compara el valor real entre tamaños de envase. El bote grande no siempre es más barato por unidad.',
          'errNonNegative': "Los precios no pueden ser negativos",
      'winnerCrossFamily': "Unidades distintas: no se pueden comparar",
},
  },
  de: {
    formula: {
      formula: 'Unit price = total price / quantity',
      explain: 'Preis pro Einheit (pro Unze, pro Stück, pro Meter). Den Einheitspreis zu vergleichen — nicht den Packungspreis — zeigt bei unterschiedlichen Größen den wirklich besten Kauf.',
    },
    useCases: ['den echten Wert pro Gramm/ml/Stück vergleichen', 'sehen, ob die Großpackung wirklich günstiger ist', 'Preise bei unterschiedlichen Einheiten vergleichen', 'die günstigste Option pro Einheit finden'],
    faqs: [
      { q: 'Funktioniert das für Nicht-Lebensmittel?', a: 'Ja. Verwende „Stück“ als Einheit für Toilettenpapier, Windeln, Batterien oder alles, was pro Stück verkauft wird. Für Flüssigkeiten ml, für Feststoffe g. Die Rechnung ist dieselbe.' },
    ],
    ui: {
      'chartTitle': 'Stückpreis-Duell',
      'cmp.0': 'Option 1',
      'cmp.1': 'Option 2',
      'cmpseg.0': 'pro Basiseinheit',
      'in.price1': 'Preis 1', 'in.size1': 'Größe 1', 'in.unit1': 'Einheit 1', 'in.price2': 'Preis 2', 'in.size2': 'Größe 2', 'in.unit2': 'Einheit 2',
      'opt.unit1.g': 'Gramm (g)', 'opt.unit1.ml': 'Milliliter (ml)', 'opt.unit1.ct': 'Stück (ct)', 'opt.unit1.kg': 'Kilogramm (kg)',
      'opt.unit1.oz': 'Unzen (oz)', 'opt.unit1.lb': 'Pfund (lb)', 'opt.unit1.l': 'Liter (l)', 'opt.unit1.mg': 'Milligramm (mg)',
      'opt.unit2.g': 'Gramm (g)', 'opt.unit2.ml': 'Milliliter (ml)', 'opt.unit2.ct': 'Stück (ct)', 'opt.unit2.kg': 'Kilogramm (kg)',
      'opt.unit2.oz': 'Unzen (oz)', 'opt.unit2.lb': 'Pfund (lb)', 'opt.unit2.l': 'Liter (l)', 'opt.unit2.mg': 'Milligramm (mg)',
      'out.unit1price': 'Stückpreis Option 1', 'out.unit2price': 'Stückpreis Option 2', 'out.winner': 'Besseres Angebot',
      note: '🛒 Vergleiche den wahren Wert über Verpackungsgrößen hinweg. Die große Box ist nicht immer pro Einheit günstiger.',
          'errNonNegative': "Preise dürfen nicht negativ sein",
      'winnerCrossFamily': "Unterschiedliche Einheiten — kein Vergleich möglich",
},
  },
}
