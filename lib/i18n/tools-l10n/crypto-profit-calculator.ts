/**
 * crypto-profit-calculator 本地化 bundle —— zh / es / de(2025-10 B2 投资与交易批次)
 */
import type { ToolL10n } from '../tool-l10n'

export const CryptoProfitCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular el beneficio neto y el ROI reales tras las comisiones de ambas piernas', 'deducir el precio de venta necesario para tu objetivo de beneficio (orden limit)', 'comparar cuánto te comen las tarifas de distintos exchanges', 'hacer post-mortem de una operación ya cerrada'],
    faqs: [
      { q: '¿Cómo se aplican las comisiones?', a: 'Un porcentaje en cada pierna: al comprar sobre el capital invertido y al vender sobre el bruto de la venta. Incluso al 0,1 % por lado, un round trip cuesta ~0,2 %, sin contar el spread.' },
      { q: '¿Qué significa «precio de venta necesario»?', a: 'Es el precio de salida que, tras ambas comisiones, deja exactamente tu beneficio objetivo: S = (objetivo + inversión ×(1+f)) ÷ (cantidad ×(1−f)). Úsalo directamente en una orden limit.' },
      { q: '¿Por qué el ROI es algo menor que la subida del precio?', a: 'El ROI se calcula sobre el capital invertido y neto de comisiones: un movimiento del 30 % deja ~29,8 % con un 0,1 % por lado. En posiciones apalancadas, los funding rates van aparte.' },
      { q: '¿Incluye impuestos?', a: 'No. En EE. UU. y en muchos países vender cripto es un hecho imponible; reserva una parte de la ganancia o revisa las reglas de plusvalías de tu jurisdicción.' },
    ],
    ui: {
      'in.qty': 'Monedas compradas',
      'in.buy': 'Precio de compra',
      'in.sell': 'Precio de venta',
      'in.feePct': 'Comisión por operación',
      'in.targetProfit': 'Beneficio neto deseado',
      'out.netProfit': 'Beneficio neto tras comisiones',
      'out.roiPct': 'ROI',
      'out.totalFees': 'Comisiones totales',
      'out.exitValue': 'Valor bruto de salida',
      'out.priceForTarget': 'Precio de venta para el objetivo',
      'chartTitle': 'Lo que entra vs lo que sale',
      'cmp.0': 'Efectivo invertido (compra + fee)',
      'cmp.1': 'Efectivo recibido (venta − fee)',
      'preset.0': 'Swing de BTC',
      'preset.1': 'Swing de altcoin',
      'preset.2': 'Hold a largo plazo',
      'errInvalid': 'Introduce cantidad y precio de compra positivos, comisión < 10 %',
      'note': '⚖️ La comisión se aplica a las dos piernas (la mayoría de exchanges cobra un % de taker/maker en cada lado). El «precio necesario» resuelve la salida que alcanza tu objetivo tras ambas comisiones — perfecto para colocar una orden limit.',
    },
  },
  de: {
    useCases: ['den echten Nettogewinn und ROI nach Gebühren auf beiden Seiten berechnen', 'den nötigen Verkaufskurs für dein Gewinnziel herleiten (Limit-Order)', 'vergleichen, wie viel verschiedene Börsengebühren kosten', 'ein abgeschlossenes Trade-Postmortem ziehen'],
    faqs: [
      { q: 'Wie werden Gebühren berechnet?', a: 'Prozentual auf beide Beine: beim Kauf aufs eingesetzte Kapital, beim Verkauf auf den Bruttoerlös. Selbst 0,1 % je Seite kosten ~0,2 % pro Roundtrip — ohne Spread.' },
      { q: 'Was bedeutet „nötiger Verkaufspreis“?', a: 'Er löst den Ausstiegskurs, der nach beiden Gebühren genau dein Gewinnziel nettet: S = (Ziel + Investition ×(1+f)) ÷ (Menge ×(1−f)). Direkt als Limit-Order verwenden.' },
      { q: 'Warum ist der ROI etwas kleiner als der Kursanstieg?', a: 'Der ROI bezieht sich aufs eingesetzte Kapital und ist netto: Bei 30 % Kursbewegung bleiben mit 0,1 % je Seite ~29,8 %. Bei Hebelpositionen kommen Funding Rates zusätzlich.' },
      { q: 'Sind Steuern enthalten?', a: 'Nein. In den USA und vielen Ländern ist der Krypto-Verkauf ein steuerpflichtiger Vorgang; lege einen Teil des Gewinns zurück oder prüfe die Kapitalertragregeln deiner Jurisdiktion.' },
    ],
    ui: {
      'in.qty': 'Gekaufte Coins',
      'in.buy': 'Kaufkurs',
      'in.sell': 'Verkaufskurs',
      'in.feePct': 'Exchange-Gebühr je Trade',
      'in.targetProfit': 'Gewünschter Nettogewinn',
      'out.netProfit': 'Nettogewinn nach Gebühren',
      'out.roiPct': 'ROI',
      'out.totalFees': 'Gezahlte Gebühren gesamt',
      'out.exitValue': 'Brutto-Ausstiegswert',
      'out.priceForTarget': 'Nötiger Verkaufskurs',
      'chartTitle': 'Rein vs. raus',
      'cmp.0': 'Bar rein (Kauf + Gebühr)',
      'cmp.1': 'Bar raus (Verkauf − Gebühr)',
      'preset.0': 'BTC-Swing',
      'preset.1': 'Altcoin-Swing',
      'preset.2': 'Langfristiges Halten',
      'errInvalid': 'Positive Menge und Kaufkurs, Gebühr unter 10 %',
      'note': '⚖️ Die Gebühr trifft beide Beine (die meisten Börsen berechnen je Seite Taker/Maker-%). Der „nötige Verkaufskurs“ löst den Ausstieg, der dein Gewinnziel nach beiden Gebühren trifft — ideal für die Limit-Order.',
    },
  },
}
