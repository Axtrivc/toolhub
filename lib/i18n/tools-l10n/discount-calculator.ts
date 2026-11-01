/**
 * discount-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const discountCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'saved = price × discount%\nfinal = price × (1 − discount%)',
      explain: 'Un descuento porcentual reduce el precio original. Con descuentos apilados aplícalos en secuencia — cada uno sobre el precio ya rebajado.',
    },
    useCases: ['calcular el precio final y el ahorro tras un descuento', 'aplicar descuentos apilados (primero el primero, el resultado como nuevo precio)', 'obtener el precio original a partir del precio de oferta y el porcentaje', 'juzgar al comprar si un descuento realmente merece la pena'],
    faqs: [
      { q: '¿Cómo calculo el 50 % de descuento?', a: 'Simplemente divide el precio entre dos. Un 50 % de descuento significa que pagas la mitad — el descuento más fácil de calcular.' },
      { q: '¿Cómo sumo dos descuentos?', a: 'No se suman directamente. Aplica el primer descuento para obtener el nuevo precio, luego aplica el segundo sobre ese nuevo precio. Dos descuentos del 30 % dan un 51 % total, no un 60 %.' },
      { q: '¿Qué significa «porcentaje de descuento»?', a: 'Es el porcentaje en que se reduce el precio original. Un 30 % de descuento significa que pagas el 70 % del precio original.' },
      { q: '¿Cómo comparo un descuento con un 2×1?', a: 'Reduce ambos a precio por unidad: un 2×1 equivale a un 50 % de descuento solo si el total pagado es el mismo. Un «segundo al 70 %» sale un 35 % de descuento sobre el conjunto, no un 70 %.' },
      { q: '¿Mejor un 30 % o 30 € fijos?', a: 'A 100 € son lo mismo; en otros importes no: el porcentaje escala con el precio (gana en compras caras) y el importe fijo favorece a las baratas. Calcula las dos variantes y quédate con el precio final menor.' },
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
      { q: 'Wie berechne ich 50 % Rabatt?', a: 'Teile den Preis einfach durch zwei. 50 % Rabatt bedeutet, du zahlst die Hälfte — der einfachste Rabatt.' },
      { q: 'Wie addiere ich zwei Rabatte?', a: 'Du addierst sie nicht direkt. Wende den ersten Rabatt an, um den neuen Preis zu erhalten, dann den zweiten auf diesen neuen Preis. Zwei 30 %-Rabatte ergeben zusammen 51 %, nicht 60 %.' },
      { q: 'Was bedeutet „Prozent Rabatt“?', a: 'Es ist der Prozentsatz, um den der Originalpreis gesenkt wird. 30 % Rabatt bedeutet, du zahlst 70 % des Originalpreises.' },
      { q: 'Wie vergleiche ich Rabatt und „3 für 2“?', a: 'Rechne alles auf den Stückpreis um: „3 für 2“ entspricht 33 % Rabatt. Ein „20 % auf alles“ schlägt eine Staffel („10 % ab 50 €, 20 % ab 100 €“) erst, wenn der Warenkorb die Schwelle klar überschreitet.' },
      { q: 'Ist 30 % von 100 € dasselbe wie 30 € Nachlass?', a: 'Bei 100 € ja, sonst nicht: Prozent skaliert mit dem Preis (lohnt sich bei teurer Ware), feste Beträge lohnen sich bei günstiger. Im Zweifel beide Varianten durchrechnen und den niedrigeren Endpreis nehmen.' },
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
