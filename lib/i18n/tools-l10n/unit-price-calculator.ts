/**
 * unit-price-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const unitPriceCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'Unit price = total price / quantity',
      explain: '单件价格(每盎司、每件、每米)。比较单价——而非整包价格——才能在规格不同时找到真正最划算的。',
    },
    useCases: ['按每克/每毫升/每件比较真实性价比', '看大包装是不是真的更划算', '对比不同单位的产品价格', '找到每单位最便宜的选项'],
    faqs: [
      { q: '这个工具能用在非食品上吗?', a: '能。卫生纸、纸尿裤、电池等按件数出售的,单位选「件」。液体用 ml,固体用 g。计算方法一样。' },
    ],
    ui: {
      'in.price1': '价格 1', 'in.size1': '规格 1', 'in.unit1': '单位 1', 'in.price2': '价格 2', 'in.size2': '规格 2', 'in.unit2': '单位 2',
      'opt.unit1.g': '克 (g)', 'opt.unit1.ml': '毫升 (ml)', 'opt.unit1.ct': '件 (ct)', 'opt.unit1.kg': '千克 (kg)',
      'opt.unit1.oz': '盎司 (oz)', 'opt.unit1.lb': '磅 (lb)', 'opt.unit1.l': '升 (l)', 'opt.unit1.mg': '毫克 (mg)',
      'opt.unit2.g': '克 (g)', 'opt.unit2.ml': '毫升 (ml)', 'opt.unit2.ct': '件 (ct)', 'opt.unit2.kg': '千克 (kg)',
      'opt.unit2.oz': '盎司 (oz)', 'opt.unit2.lb': '磅 (lb)', 'opt.unit2.l': '升 (l)', 'opt.unit2.mg': '毫克 (mg)',
      'out.unit1price': '选项 1 单价', 'out.unit2price': '选项 2 单价', 'out.winner': '更划算',
      note: '🛒 比较不同包装的真实性价比。大包装未必每单位更便宜。',
    },
  },
  es: {
    formula: {
      formula: 'Unit price = total price / quantity',
      explain: 'Precio por unidad (por onza, por pieza, por metro). Comparar el precio unitario — no el del paquete — revela la mejor compra real cuando los tamaños difieren.',
    },
    useCases: ['comparar el valor real por gramo/ml/unidad', 'ver si el formato grande sale realmente más barato', 'comparar precios con unidades distintas', 'encontrar la opción más barata por unidad'],
    faqs: [
      { q: '¿Sirve para productos que no son alimentos?', a: 'Sí. Usa «unidad» para papel higiénico, pañales, pilas o cualquier producto vendido por cantidad. Usa ml para líquidos y g para sólidos. La matemática es la misma.' },
    ],
    ui: {
      'in.price1': 'Precio 1', 'in.size1': 'Tamaño 1', 'in.unit1': 'Unidad 1', 'in.price2': 'Precio 2', 'in.size2': 'Tamaño 2', 'in.unit2': 'Unidad 2',
      'opt.unit1.g': 'gramos (g)', 'opt.unit1.ml': 'mililitros (ml)', 'opt.unit1.ct': 'unidades (ct)', 'opt.unit1.kg': 'kilogramos (kg)',
      'opt.unit1.oz': 'onzas (oz)', 'opt.unit1.lb': 'libras (lb)', 'opt.unit1.l': 'litros (l)', 'opt.unit1.mg': 'miligramos (mg)',
      'opt.unit2.g': 'gramos (g)', 'opt.unit2.ml': 'mililitros (ml)', 'opt.unit2.ct': 'unidades (ct)', 'opt.unit2.kg': 'kilogramos (kg)',
      'opt.unit2.oz': 'onzas (oz)', 'opt.unit2.lb': 'libras (lb)', 'opt.unit2.l': 'litros (l)', 'opt.unit2.mg': 'miligramos (mg)',
      'out.unit1price': 'Precio unitario opción 1', 'out.unit2price': 'Precio unitario opción 2', 'out.winner': 'Mejor oferta',
      note: '🛒 Compara el valor real entre tamaños de envase. El bote grande no siempre es más barato por unidad.',
    },
  },
  de: {
    formula: {
      formula: 'Unit price = total price / quantity',
      explain: 'Preis pro Einheit (pro Unze, pro Stück, pro Meter). Den Einheitspreis zu vergleichen — nicht den Packungspreis — zeigt bei unterschiedlichen Größen den wahren Bestkauf.',
    },
    useCases: ['den echten Wert pro Gramm/ml/Stück vergleichen', 'sehen, ob die Großpackung wirklich günstiger ist', 'Preise bei unterschiedlichen Einheiten vergleichen', 'die günstigste Option pro Einheit finden'],
    faqs: [
      { q: 'Funktioniert das für Nicht-Lebensmittel?', a: 'Ja. Verwende „Stück" als Einheit für Toilettenpapier, Windeln, Batterien oder alles, was pro Stück verkauft wird. Für Flüssigkeiten ml, für Feststoffe g. Die Rechnung ist dieselbe.' },
    ],
    ui: {
      'in.price1': 'Preis 1', 'in.size1': 'Größe 1', 'in.unit1': 'Einheit 1', 'in.price2': 'Preis 2', 'in.size2': 'Größe 2', 'in.unit2': 'Einheit 2',
      'opt.unit1.g': 'Gramm (g)', 'opt.unit1.ml': 'Milliliter (ml)', 'opt.unit1.ct': 'Stück (ct)', 'opt.unit1.kg': 'Kilogramm (kg)',
      'opt.unit1.oz': 'Unzen (oz)', 'opt.unit1.lb': 'Pfund (lb)', 'opt.unit1.l': 'Liter (l)', 'opt.unit1.mg': 'Milligramm (mg)',
      'opt.unit2.g': 'Gramm (g)', 'opt.unit2.ml': 'Milliliter (ml)', 'opt.unit2.ct': 'Stück (ct)', 'opt.unit2.kg': 'Kilogramm (kg)',
      'opt.unit2.oz': 'Unzen (oz)', 'opt.unit2.lb': 'Pfund (lb)', 'opt.unit2.l': 'Liter (l)', 'opt.unit2.mg': 'Milligramm (mg)',
      'out.unit1price': 'Stückpreis Option 1', 'out.unit2price': 'Stückpreis Option 2', 'out.winner': 'Besseres Angebot',
      note: '🛒 Vergleiche den wahren Wert über Verpackungsgrößen hinweg. Die große Box ist nicht immer pro Einheit günstiger.',
    },
  },
}
