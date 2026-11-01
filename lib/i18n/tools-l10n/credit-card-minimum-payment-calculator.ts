/**
 * credit-card-minimum-payment-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值)。覆盖:faqs + ui + useCases。
 * 该工具在 lib/tool-formulas.ts 无 formula 条目。
 */

import type { ToolL10n } from '../tool-l10n'

export const creditCardMinimumPaymentCalculatorL10n: ToolL10n = {


  // ──────────────────────────── Español ────────────────────────────
  es: {
    formula: {
      formula: 'Min payment = max( balance × min%, fixed floor )',
      explain: 'El emisor cobra el mayor entre un pequeño porcentaje del saldo (a menudo 1–3%) y un suelo fijo (p. ej. 25 $). Luego se añaden intereses sobre el saldo restante hasta saldarlo.',
    },
    useCases: [
      'entender cómo se calcula el pago mínimo',
      'ver la fórmula del pago mínimo',
      'comparar el pago mínimo con los intereses',
      'ver cuánto tarda pagando solo el mínimo',
    ],
    faqs: [
      {
        q: '¿Pagar solo el mínimo perjudica mi puntaje de crédito?',
        a: 'Pagar el mínimo a tiempo mantiene la cuenta en buen estado y evita marcas de retraso, así que no perjudica directamente tu puntaje. Pero mantiene alta tu utilización de crédito (saldo ÷ límite), un factor importante en el cálculo del puntaje. Una utilización alta puede bajar tu puntaje incluso con un historial de pagos perfecto. Reducir los saldos es la forma más rápida de mejorar tu puntaje.',
      },
      {
        q: '¿Cómo calculan las tarjetas de crédito el pago mínimo?',
        a: 'La mayoría usa del 1 % al 3 % del saldo del estado de cuenta más los intereses y comisiones del mes, con un suelo de unos 25–35 $. Algunas usan «intereses + comisiones + 1 % del capital». La fórmula exacta está en tu acuerdo del titular. La ley CARD de 2009 exige a los emisores aplicar todo lo que supere el mínimo primero al saldo con la APR más alta.',
      },
      {
        q: '¿Qué pasa si pago menos del mínimo?',
        a: 'Te cobran una comisión por demora (hasta ~41 $ en retrasos repetidos), te reportan como moroso a las agencias tras 30 días y muchos emisores activan una APR penal del 29,99 % que puede aplicarse indefinidamente. Tras 60 días de retraso, esa tasa puede aplicarse también a saldos existentes. Configura el pago automático de al menos el mínimo para evitarlo.',
      },
      {
        q: '¿Cambia el pago mínimo cada mes?',
        a: 'Sí. Como se basa en tu saldo y en los intereses del mes, sube cuando debes más o suben las tasas, y baja a medida que reduces el saldo. Las compras nuevas, los avances en efectivo y las comisiones también lo elevan. Si tu saldo baja, el mínimo acaba bajando también — pero nunca confíes en un mínimo bajo como razón para seguir endeudándote.',
      },
    ],
    ui: {
      errNonNegative: 'El saldo, la APR y el % de pago mínimo no pueden ser negativos',
      monthsN: '{n} meses',
      payoffOverLimit: '> 600 meses',
      'in.balance': 'Saldo actual',
      'in.apr': 'APR',
      'in.minPct': '% de pago mínimo',
      'out.minPayment': 'Pago mínimo',
      'out.interest': 'Interés de este mes',
      'out.principal': 'A capital',
      'out.payoff': 'Tiempo para saldar (solo el mínimo)',
      'out.totalInterest': 'Interés total (solo el mínimo)',
      note: '💳 Los pagos mínimos apenas cubren los intereses — pagar solo el mínimo significa décadas para saldar. Paga más siempre que puedas.',
      chartTitleBalance: 'Saldo pagando solo el mínimo',
      chartTitleCompare: 'Solo el mínimo vs +$50 al mes',
      'cmp.0': 'Solo el mínimo',
      'cmp.1': '$50 más al mes',
      'cmpseg.0': 'Principal',
      'cmpseg.1': 'Interés',
      'line.balance': 'Saldo pendiente',
      chartTitle: 'A dónde va tu pago mínimo',
      chartCenter: 'Pago',
      'slice.interest': 'Interés',
      'slice.principal': 'Capital',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    formula: {
      formula: 'Min payment = max( balance × min%, fixed floor )',
      explain: 'Der Aussteller verlangt den größeren aus einem kleinen Prozentsatz des Saldos (oft 1–3%) und einem festen Mindestbetrag (z. B. 25 $). Auf den Restsaldo werden weiterhin Zinsen berechnet, bis er getilgt ist.',
    },
    useCases: [
      'verstehen, wie die Mindestzahlung berechnet wird',
      'die Formel für die Mindestzahlung sehen',
      'Mindestzahlung mit Zinsen vergleichen',
      'sehen, wie lange die Zahlung des Minimums dauert',
    ],
    faqs: [
      {
        q: 'Schadet nur die Mindestzahlung meinem Bonitätsscore?',
        a: 'Die Mindestzahlung rechtzeitig zu leisten, hält das Konto in gutem Stand und vermeidet Säumniseinträge, sodass dein Score nicht direkt sinkt. Sie hält aber deine Kreditnutzung (Saldo ÷ Limit) hoch, was ein wichtiger Bewertungsfaktor ist. Hohe Nutzung kann deinen Score selbst bei perfekter Zahlungshistorie drücken. Salden abzubauen ist der schnellste Weg, deinen Score zu verbessern.',
      },
      {
        q: 'Wie berechnen Kreditkartenunternehmen die Mindestzahlung?',
        a: 'Die meisten nehmen 1 %–3 % deines Rechnungssaldos plus die Zinsen und Gebühren dieses Monats, mit einem Boden von etwa 25–35 $. Manche nutzen „Zinsen + Gebühren + 1 % Tilgung“. Die genaue Formel steht in deiner Kartenvereinbarung. Der CARD Act von 2009 verlangt, dass Aussteller alles über dem Minimum zuerst auf den Saldo mit dem höchsten APR anwenden.',
      },
      {
        q: 'Was passiert, wenn ich weniger als das Minimum zahle?',
        a: 'Es fällt eine Säumnisgebühr an (bis ~41 $ bei wiederholtem Verzug), nach 30 Tagen wirst du den Auskunfteien als säumig gemeldet, und viele Aussteller lösen einen Straf-APR von 29,99 % aus, der unbegrenzt gelten kann. Nach 60 Tagen Verzug kann dieser Zins auch auf bestehende Salden angewendet werden. Richte für mindestens den Mindestbetrag ein Dauerauftrag ein, um das zu vermeiden.',
      },
      {
        q: 'Ändert sich die Mindestzahlung jeden Monat?',
        a: 'Ja. Da sie auf deinem Saldo und den Monatszinsen basiert, steigt sie, wenn du mehr schuldest oder die Zinsen steigen, und sinkt, wenn du abbaust. Neue Käufe, Barvorschüsse und Gebühren treiben sie ebenfalls nach oben. Sinkt dein Saldo, sinkt irgendwann auch das Minimum — verlass dich aber nie auf ein niedriges Minimum als Grund, die Schulden weiter zu tragen.',
      },
    ],
    ui: {
      errNonNegative: 'Saldo, APR und Mindestzahlung % dürfen nicht negativ sein',
      monthsN: '{n} Monate',
      payoffOverLimit: '> 600 Monate',
      'in.balance': 'Aktueller Saldo',
      'in.apr': 'APR',
      'in.minPct': 'Mindestzahlung %',
      'out.minPayment': 'Mindestzahlung',
      'out.interest': 'Zinsen diesen Monat',
      'out.principal': 'Tilgung',
      'out.payoff': 'Tilgungsdauer (nur Minimum)',
      'out.totalInterest': 'Gesamtzinsen (nur Minimum)',
      note: '💳 Mindestzahlungen decken kaum die Zinsen — nur das Minimum zu zahlen bedeutet Jahrzehnte bis zur Tilgung. Zahl mehr, wann immer möglich.',
      chartTitleBalance: 'Saldo bei nur Mindestzahlung',
      chartTitleCompare: 'Nur Minimum vs +$50 im Monat',
      'cmp.0': 'Nur Minimum',
      'cmp.1': '+$50 im Monat',
      'cmpseg.0': 'Tilgung',
      'cmpseg.1': 'Zinsen',
      'line.balance': 'Restschuld',
      chartTitle: 'Wohin deine Mindestzahlung geht',
      chartCenter: 'Zahlung',
      'slice.interest': 'Zinsen',
      'slice.principal': 'Tilgung',
    },
  },
}
