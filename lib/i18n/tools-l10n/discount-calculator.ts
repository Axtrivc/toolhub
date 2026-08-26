/**
 * discount-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const discountCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'saved = price × discount%\nfinal = price × (1 − discount%)',
      explain: '百分比折扣降低原价。多个折扣叠加时要依次应用——每一个都作用在已打折的价格上。',
    },
    useCases: ['算出打折后的实付价格和省下的金额', '处理叠加折扣(先打第一轮,再用结果当原价)', '根据到手价和折扣率反推原价', '购物时判断折扣是否真的划算'],
    faqs: [
      { q: '怎么算 5 折(50% off)?', a: '直接把价格减半。50% off 意味着你付一半——这是最简单的折扣计算。' },
      { q: '两个折扣怎么叠加?', a: '不能直接相加。先用第一个折扣算出新价,再用第二个折扣对新价打折。两个 30% off 叠加是总共 51% off,不是 60%。' },
      { q: '「几折/percent off」是什么意思?', a: '指原价被减去的百分比。30% off 表示你付原价的 70%。' },
    ],
    ui: {
      'chartTitle': '实付 vs 省下',
      'cmp.0': '原价',
      'cmpseg.0': '实付',
      'cmpseg.1': '省下',
      'preset.0': '9 折',
      'preset.1': '75 折',
      'preset.2': '5 折',
      'preset.3': '3 折',
      errDiscountRange: '折扣必须在 0–100% 之间',
      errNonNegativePrice: '原价不能为负',
      ofOriginal: '占原价',
      'in.price': '原价', 'inSuffix.price': '$', 'in.discount': '折扣', 'inSuffix.discount': '%',
      'out.savings': '你省下', 'out.final': '最终价格', 'out.paid': '你支付', 'outSub.paid': '含折扣后',
      note: '🛍️ 叠加两个折扣时,先算第一个折扣,再把结果当作新的原价算第二个。',
    },
  },
  es: {
    formula: {
      formula: 'saved = price × discount%\nfinal = price × (1 − discount%)',
      explain: 'Un descuento porcentual reduce el precio original. Con descuentos apilados aplícalos en secuencia — cada uno sobre el precio ya rebajado.',
    },
    useCases: ['calcular el precio final y el ahorro tras un descuento', 'aplicar descuentos apilados (primero el primero, el resultado como nuevo precio)', 'obtener el precio original a partir del precio de oferta y el porcentaje', 'juzgar al comprar si un descuento realmente merece la pena'],
    faqs: [
      { q: '¿Cómo calculo el 50 % de descuento?', a: 'Simplemente divide el precio entre dos. 50 % off significa que pagas la mitad — el descuento más fácil de calcular.' },
      { q: '¿Cómo sumo dos descuentos?', a: 'No se suman directamente. Aplica el primer descuento para obtener el nuevo precio, luego aplica el segundo sobre ese nuevo precio. Dos descuentos del 30 % dan un 51 % total, no un 60 %.' },
      { q: '¿Qué significa «porcentaje de descuento»?', a: 'Es el porcentaje en que se reduce el precio original. 30 % off significa que pagas el 70 % del precio original.' },
    ],
    ui: {
      'chartTitle': 'Pagas vs ahorras',
      'cmp.0': 'Precio original',
      'cmpseg.0': 'Pagas',
      'cmpseg.1': 'Ahorras',
      'preset.0': '10% dto.',
      'preset.1': '25% dto.',
      'preset.2': '50% dto.',
      'preset.3': '70% dto.',
      errDiscountRange: 'El descuento debe estar entre 0 y 100 %',
      errNonNegativePrice: 'El precio original no puede ser negativo',
      ofOriginal: 'del precio original',
      'in.price': 'Precio original', 'inSuffix.price': '$', 'in.discount': 'Descuento', 'inSuffix.discount': '%',
      'out.savings': 'Ahorrado', 'out.final': 'Precio final', 'out.paid': 'Pagas', 'outSub.paid': 'Tras descuento',
      note: '🛍️ Para apilar dos descuentos, calcula el primero y usa el resultado como nuevo precio original.',
    },
  },
  de: {
    formula: {
      formula: 'saved = price × discount%\nfinal = price × (1 − discount%)',
      explain: 'Ein prozentualer Rabatt senkt den Originalpreis. Bei gestaffelten Rabatten nacheinander anwenden — jeder auf den bereits reduzierten Preis.',
    },
    useCases: ['den Endpreis und die Ersparnis nach einem Rabatt berechnen', 'gestaffelte Rabatte anwenden (erst den ersten, das Ergebnis als neuer Preis)', 'den Originalpreis aus Angebotspreis und Prozentsatz zurückrechnen', 'beim Einkaufen beurteilen, ob ein Rabatt wirklich lohnt'],
    faqs: [
      { q: 'Wie berechne ich 50 % Rabatt?', a: 'Teile den Preis einfach durch zwei. 50 % off bedeutet, du zahlst die Hälfte — der einfachste Rabatt.' },
      { q: 'Wie addiere ich zwei Rabatte?', a: 'Du addierst sie nicht direkt. Wende den ersten Rabatt an, um den neuen Preis zu erhalten, dann den zweiten auf diesen neuen Preis. Zwei 30 %-Rabatte ergeben zusammen 51 %, nicht 60 %.' },
      { q: 'Was bedeutet „Prozent Rabatt»?', a: 'Es ist der Prozentsatz, um den der Originalpreis gesenkt wird. 30 % off bedeutet, du zahlst 70 % des Originalpreises.' },
    ],
    ui: {
      'chartTitle': 'Du zahlst vs. sparst',
      'cmp.0': 'Originalpreis',
      'cmpseg.0': 'Du zahlst',
      'cmpseg.1': 'Du sparst',
      'preset.0': '10 % Rabatt',
      'preset.1': '25 % Rabatt',
      'preset.2': '50 % Rabatt',
      'preset.3': '70 % Rabatt',
      errDiscountRange: 'Der Rabatt muss zwischen 0 und 100 % liegen',
      errNonNegativePrice: 'Der Originalpreis darf nicht negativ sein',
      ofOriginal: 'vom Originalpreis',
      'in.price': 'Originalpreis', 'inSuffix.price': '$', 'in.discount': 'Rabatt', 'inSuffix.discount': '%',
      'out.savings': 'Du sparst', 'out.final': 'Endpreis', 'out.paid': 'Du zahlst', 'outSub.paid': 'Inklusive Rabatt',
      note: '🛍️ Um zwei Rabatte zu stapeln, berechne den ersten und nutze das Ergebnis als neuen Originalpreis.',
    },
  },
}
