/**
 * paypal-fee-calculator 本地化 bundle —— zh / es / de(B5 平台费批次)
 * 覆盖:ui / useCases / faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const PayPalFeeCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular cuánto llega realmente a tu cuenta tras las comisiones', 'averiguar cuánto cobrar para recibir neto 100 $', 'comparar la comisión de ventas internacionales (+1,5%) con las locales', 'incluir la comisión en tus tarifas de freelance'],
    faqs: [
      { q: '¿Cuánto cobra PayPal por transacción?', a: 'La tarifa comercial estándar en EE. UU. es del 3,49% + 0,49 $ por pago. Los compradores internacionales añaden un 1,5% transfronterizo y el cambio de divisa añade un margen del 3-4%: suele ser el mayor coste oculto.' },
      { q: '¿Cómo calculo cuánto cobrar para recibir un importe exacto?', a: 'Cobra = (neto deseado + comisión fija) ÷ (1 − porcentaje). Para recibir neto 100 $ al 3,49% + 0,49 $: 100,49 ÷ 0,9651 ≈ 104,12 $. Cambia la calculadora al modo inverso y lo hace sola.' },
      { q: '¿PayPal cobra por los pagos a amigos y familiares?', a: 'En EE. UU. son gratuitos si se pagan con saldo o banco, pero con tarjeta cuestan al remitente el 2,9% + 0,30 $. Los vendedores nunca deben usarlos: no incluyen protección del vendedor.' },
      { q: '¿Por qué mi tasa real no es el 3,49%?', a: 'La comisión fija de 0,49 $ domina los pagos pequeños: en una venta de 10 $ ya supone un 4,9% y eleva la tasa real a casi el 8,4%. En 1.000 $ apenas pesa y la tasa real se acerca al 3,49% nominal.' },
    ],
    ui: {
      'in.mode': 'Modo',
      'in.amount': 'Importe',
      'in.feePct': 'Comisión porcentual',
      'in.fixedFee': 'Comisión fija',
      'inSuffix.amount': '$',
      'inSuffix.feePct': '%',
      'inSuffix.fixedFee': '$',
      'out.toCharge': 'Cobrar al cliente',
      'out.feeTotal': 'Comisión de PayPal',
      'out.net': 'Tú recibes',
      'out.effective': 'Tasa efectiva',
      'opt.mode.forward': 'Cobra → neto',
      'opt.mode.reverse': 'Neto → precio',
      'preset.0': 'Estándar online (3,49% + 0,49 $)',
      'preset.1': 'Venta internacional (+1,5%)',
      'preset.2': 'Tarifa solidaria (1,99% + 0,49 $)',
      'chartTitle': 'Comisión y neto según crece la venta',
      'line.fee': 'Comisión de PayPal',
      'line.net': 'Tú recibes',
      'errAmount': 'Introduce un importe válido',
      'errRate': 'La tasa debe estar entre 0% y 100%, sin comisión fija negativa',
      'note': '💳 Tarifa comercial estándar en EE. UU.: 3,49% + 0,49 $. Los compradores internacionales añaden +1,50% y el cambio de divisa un margen del ~3-4%, a menudo el mayor coste oculto. Amigos y familiares no tiene comisión, pero tampoco protección del vendedor.',
    },
  },
  de: {
    useCases: ['ausrechnen, wie viel nach den Gebühren wirklich ankommt', 'den Betrag bestimmen, den du berechnen musst, um netto 100 $ zu erhalten', 'Gebühren für internationale Verkäufe (+1,5%) mit lokalen vergleichen', 'PayPal-Gebühren in Freelance-Preise einrechnen'],
    faqs: [
      { q: 'Wie viel berechnet PayPal pro Transaktion?', a: 'Der Standard-Commerce-Satz in den USA ist 3,49 % + 0,49 $ pro Zahlung. Internationale Käufer addieren 1,50 % Grenzgebühr, und die Währungsumrechnung schlägt mit ~3-4 % Spread drauf — oft der größte versteckte Kostenpunkt.' },
      { q: 'Wie berechne ich den Preis, um einen Zielbetrag netto zu erhalten?', a: 'Berechne (Zielbetrag + Fixgebühr) ÷ (1 − Prozentsatz). Für netto 100 $ bei 3,49 % + 0,49 $: 100,49 ÷ 0,9651 ≈ 104,12 $. Stell den Rechner auf den Reverse-Modus, dann übernimmt er das.' },
      { q: 'Berechnet PayPal Gebühren für Friends & Family?', a: 'In den USA sind persönliche Zahlungen per Guthaben oder Bankkonto kostenlos, mit Karte zahlt der Sender 2,9 % + 0,30 $. Verkäufer dürfen diesen Weg nie nutzen — es gibt keinen Verkäuferschutz.' },
      { q: 'Warum weicht mein effektiver Satz von 3,49 % ab?', a: 'Die 0,49 $ Fixgebühr dominiert kleine Zahlungen: Bei einem 10-$-Verkauf sind das allein 4,9 %, der effektive Satz steigt auf fast 8,4 %. Bei 1.000 $ wiegt sie kaum noch und der Satz nähert sich den nominalen 3,49 %.' },
    ],
    ui: {
      'in.mode': 'Modus',
      'in.amount': 'Betrag',
      'in.feePct': 'Prozentuale Gebühr',
      'in.fixedFee': 'Fixgebühr',
      'inSuffix.amount': '$',
      'inSuffix.feePct': '%',
      'inSuffix.fixedFee': '$',
      'out.toCharge': 'Vom Kunden verlangen',
      'out.feeTotal': 'PayPal-Gebühr',
      'out.net': 'Du erhältst',
      'out.effective': 'Effektiver Satz',
      'opt.mode.forward': 'Zahlung → Netto',
      'opt.mode.reverse': 'Netto-Ziel → Preis',
      'preset.0': 'Standard online (3,49 % + 0,49 $)',
      'preset.1': 'Internationaler Verkauf (+1,5 %)',
      'preset.2': 'Spenden-Tarif (1,99 % + 0,49 $)',
      'chartTitle': 'Gebühr und Netto mit wachsendem Verkauf',
      'line.fee': 'PayPal-Gebühr',
      'line.net': 'Du erhältst',
      'errAmount': 'Gib einen gültigen Betrag ein',
      'errRate': 'Der Satz muss 0-100% sein, die Fixgebühr nicht negativ',
      'note': '💳 US-Commerce-Standardsatz: 3,49 % + 0,49 $. Internationale Käufer addieren +1,50 %, die Währungsumrechnung weitere ~3-4 % Spread — oft der größte versteckte Kostenpunkt. Friends & Family ist gebührenfrei, bietet aber keinen Verkäuferschutz.',
    },
  },
}
