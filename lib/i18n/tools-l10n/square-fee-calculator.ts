/**
 * square-fee-calculator 本地化 bundle —— zh / es / de(B5 平台费批次)
 * 覆盖:ui / useCases / faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const SquareFeeCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular cuánto te queda de un cobro con tarjeta', 'comparar la tasa de tap, digitación manual y online', 'ver cuánto inflan los 15 ¢ fijos en tickets pequeños', 'averiguar cuánto cobrar para recibir neto una cantidad exacta'],
    faqs: [
      { q: '¿Cuáles son las tarifas de Square?', a: '2,6% + 0,15 $ por pagos con contacto, chip o QR en persona (la parte fija subió de 0,10 $ a principios de 2026); 3,3% + 0,30 $ para Square Online y facturas con tarjeta del plan gratuito, o 2,9% + 0,30 $ en los planes de pago Plus/Premium; 3,5% + 0,15 $ si tecleas la tarjeta a mano. El plan gratuito no tiene cuota mensual.' },
      { q: '¿Por qué mi tasa efectiva supera el 2,6%?', a: 'Los 0,15 $ fijos pesan mucho en tickets pequeños: en un café de 5 $ suman un 3% y elevan la tasa efectiva al 5,6%. La cifra que importa es el promedio del día completo de tickets mezclados, no una sola venta.' },
      { q: '¿Cómo trasladar la comisión al cliente?', a: 'Muchos estados de EE. UU. restringen los recargos por tarjeta y Square tiene sus propias reglas — una alternativa habitual es el descuento por pago en efectivo. Para recibir un neto exacto, usa el modo inverso: cobrar = (neto + fijo) ÷ (1 − tasa). Revisa antes la ley de tu estado.' },
      { q: '¿Square cobra cuota mensual?', a: 'El plan estándar solo cobra por transacción: sin cuota mensual, de alta ni de cumplimiento PCI. Hay suscripciones de pago con funciones como programas de fidelización o gestión de equipo, pero aceptar tarjetas sigue siendo pago por uso.' },
    ],
    ui: {
      'in.mode': 'Modo',
      'in.amount': 'Importe',
      'in.pct': 'Tasa porcentual',
      'in.fixed': 'Comisión fija',
      'inSuffix.amount': '$',
      'inSuffix.pct': '%',
      'inSuffix.fixed': '$',
      'out.toCharge': 'Cobrar al cliente',
      'out.feeTotal': 'Comisión de Square',
      'out.net': 'Tú recibes',
      'out.effective': 'Tasa efectiva',
      'opt.mode.forward': 'Cobra → neto',
      'opt.mode.reverse': 'Neto → precio',
      'preset.0': 'En persona tap/chip (2,6% + 0,15 $)',
      'preset.1': 'Online (3,3% + 0,30 $)',
      'preset.2': 'Tarjeta tecleada (3,5% + 0,15 $)',
      'preset.3': 'Online — plan Plus (2,9% + 0,30 $)',
      'chartTitle': 'Tasa efectiva según el importe del ticket',
      'line.eff': 'Tasa efectiva',
      'errAmount': 'Introduce un importe válido',
      'errRate': 'La tasa debe estar entre 0% y 100%, sin comisión fija negativa',
      'note': '📲 Tarifas de Square en EE. UU. desde 2026: 2,6% + 0,15 $ con contacto/chip/QR (subió de 0,10 $), 3,3% + 0,30 $ online y facturas en el plan gratuito (2,9% + 0,30 $ en Plus/Premium), 3,5% + 0,15 $ tecleada. Los centavos fijos dominan los tickets pequeños: un cobro de 5 $ con contacto tiene una tasa efectiva del 5,6%. Sin cuota mensual en el plan gratuito.',
    },
  },
  de: {
    useCases: ['ausrechnen, wie viel von einer Kartenzahlung ankommt', 'die Sätze für Tap, manuelle Eingabe und Online vergleichen', 'sehen, wie sehr die fixen 15 ¢ kleine Tickets verteuern', 'den Betrag bestimmen, der netto eine runde Summe ergibt'],
    faqs: [
      { q: 'Wie hoch sind die Square-Gebühren?', a: '2,6 % + 0,15 $ für Kontakt-, Chip- und QR-Zahlungen vor Ort (der Fixanteil stieg Anfang 2026 von 0,10 $); 3,3 % + 0,30 $ für Square Online und Kartenrechnungen im Gratis-Plan bzw. 2,9 % + 0,30 $ in den Plus/Premium-Stufen; 3,5 % + 0,15 $ bei manuell eingegebener Karte. Der Gratis-Plan hat keine Monatsgebühr.' },
      { q: 'Warum liegt mein effektiver Satz über 2,6 %?', a: 'Die fixen 0,15 $ wiegen bei kleinen Tickets schwer: Bei einem 5-$-Kaffee sind das allein 3 %, der effektive Satz steigt auf 5,6 %. Zähl den Tagesdurchschnitt über alle Tickets — die einzelne Transaktion sagt es nicht.' },
      { q: 'Wie überwälze ich die Gebühr auf den Kunden?', a: 'Viele US-Bundesstaaten beschränken Kartenzuschläge und Square hat eigene Regeln — üblich ist stattdessen ein Barzahlungs-Rabatt. Für ein Ziel-Netto nutze den Reverse-Modus: Berechne (Netto + Fixgebühr) ÷ (1 − Satz). Prüf vorher die Zuschlagsregel deines Bundesstaats.' },
      { q: 'Berechnet Square eine Monatsgebühr?', a: 'Der Standardplan kostet nur pro Transaktion — keine Monats-, Einrichtungs- oder PCI-Gebühren. Bezahlte Abos ergänzen Treueprogramme oder Teamverwaltung, aber die Kartenakzeptanz selbst bleibt nutzungsbasiert.' },
    ],
    ui: {
      'in.mode': 'Modus',
      'in.amount': 'Betrag',
      'in.pct': 'Prozentualer Satz',
      'in.fixed': 'Fixgebühr',
      'inSuffix.amount': '$',
      'inSuffix.pct': '%',
      'inSuffix.fixed': '$',
      'out.toCharge': 'Vom Kunden verlangen',
      'out.feeTotal': 'Square-Gebühr',
      'out.net': 'Du erhältst',
      'out.effective': 'Effektiver Satz',
      'opt.mode.forward': 'Zahlung → Netto',
      'opt.mode.reverse': 'Netto-Ziel → Preis',
      'preset.0': 'Vor Ort Tap/Chip (2,6 % + 0,15 $)',
      'preset.1': 'Online (3,3 % + 0,30 $)',
      'preset.2': 'Karte eingegeben (3,5 % + 0,15 $)',
      'preset.3': 'Online — Plus-Plan (2,9 % + 0,30 $)',
      'chartTitle': 'Effektiver Satz nach Ticketgröße',
      'line.eff': 'Effektiver Satz',
      'errAmount': 'Gib einen gültigen Betrag ein',
      'errRate': 'Der Satz muss 0-100% sein, die Fixgebühr nicht negativ',
      'note': '📲 Square-Sätze in den USA seit 2026: 2,6 % + 0,15 $ Tap/Chip/QR (gestiegen von 0,10 $), 3,3 % + 0,30 $ online und Rechnungen im Gratis-Plan (2,9 % + 0,30 $ in Plus/Premium), 3,5 % + 0,15 $ manuell. Die fixen Cents dominieren kleine Tickets — ein 5-$-Tap kostet effektiv 5,6 %. Gratis-Plan ohne Monatsgebühr.',
    },
  },
}
