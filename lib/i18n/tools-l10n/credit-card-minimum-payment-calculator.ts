/**
 * credit-card-minimum-payment-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值)。覆盖:faqs + ui + useCases。
 * 该工具在 lib/tool-formulas.ts 无 formula 条目。
 */

import type { ToolL10n } from '../tool-l10n'

export const creditCardMinimumPaymentCalculatorL10n: ToolL10n = {
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    useCases: [
      '了解最低还款额怎么算',
      '查看最低还款公式',
      '对比最低还款 vs 利息',
      '看看只还最低要还多久',
    ],
    faqs: [
      {
        q: '只还最低会影响信用分吗?',
        a: '按时还最低能保持账户正常、避免逾期记录,所以不会直接拉低分数。但它会让你的信用利用率(余额 ÷ 额度)居高不下,而利用率是重要的评分因素。即使还款记录完美,高利用率仍可能拉低分数。尽快还清余额是提升信用分最快的方法。',
      },
      {
        q: '信用卡公司怎么算最低还款额?',
        a: '大多数用账单余额的 1%–3% 加上当月利息和各项费用,并设一个约 $25–$35 的下限。有些用"利息 + 费用 + 本金 1%"的公式,还款稍快一些。具体公式以持卡人协议为准。2009 年的 CARD 法案要求发卡机构把超出最低还款的部分优先冲抵最高 APR 的余额。',
      },
      {
        q: '还不到最低还款额会怎样?',
        a: '会被收滞纳金(多次逾期最高约 $41),30 天后上报征信为逾期,很多发卡机构还会触发 29.99% 的惩罚性 APR 且可能无限期适用。逾期 60 天后该利率甚至可能追溯适用于现有余额。设置自动还款至少还最低,可以避免这些后果。',
      },
      {
        q: '最低还款额每月都会变吗?',
        a: '会。因为它基于你的余额和当月利息,余额增加或利率上升时它会涨,还掉一部分后会降。新消费、取现和费用也会推高最低还款。余额下降时最低还款最终也会降——但千万别把低最低还款当作继续负债的理由。',
      },
    ],
    ui: {
      'in.balance': '当前余额',
      'in.apr': 'APR',
      'in.minPct': '最低还款比例',
      'out.minPayment': '最低还款额',
      'out.interest': '本月利息',
      'out.principal': '冲抵本金',
      note: '💳 最低还款几乎只够付利息——只还最低意味着要还几十年。能多还就多还。',
      chartTitle: '你的最低还款去了哪里',
      chartCenter: '还款额',
      'slice.interest': '利息',
      'slice.principal': '本金',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
    useCases: [
      'entender cómo se calcula el pago mínimo',
      'ver la fórmula del pago mínimo',
      'comparar el pago mínimo con los intereses',
      'ver cuánto tarda pagando solo el mínimo',
    ],
    faqs: [
      {
        q: '¿Pagar solo el mínimo perjudica mi puntaje de crédito?',
        a: 'Pagar el mínimo a tiempo mantiene la cuenta en buen estado y evita marcas de retraso, así que no perjudica directamente tu puntaje. Pero mantiene alta tu utilización de crédito (saldo ÷ límite), un factor importante de puntuación. Una utilización alta puede bajar tu puntaje incluso con un historial de pagos perfecto. Reducir los saldos es la forma más rápida de mejorar tu puntaje.',
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
      'in.balance': 'Saldo actual',
      'in.apr': 'APR',
      'in.minPct': '% de pago mínimo',
      'out.minPayment': 'Pago mínimo',
      'out.interest': 'Interés de este mes',
      'out.principal': 'A capital',
      note: '💳 Los pagos mínimos apenas cubren los intereses — pagar solo el mínimo significa décadas para saldar. Paga más siempre que puedas.',
      chartTitle: 'A dónde va tu pago mínimo',
      chartCenter: 'Pago',
      'slice.interest': 'Interés',
      'slice.principal': 'Capital',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
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
        a: 'Die meisten nehmen 1 %–3 % deines Rechnungssaldos plus die Zinsen und Gebühren dieses Monats, mit einem Boden von etwa 25–35 $. Manche nutzen „Zinsen + Gebühren + 1 % Tilgung". Die genaue Formel steht in deiner Kartenvereinbarung. Der CARD Act von 2009 verlangt, dass Aussteller alles über dem Minimum zuerst auf den Saldo mit dem höchsten APR anwenden.',
      },
      {
        q: 'Was passiert, wenn ich weniger als das Minimum zahle?',
        a: 'Es fällt eine Säumnisgebühr an (bis ~41 $ bei wiederholtem Verzug), nach 30 Tagen wirst du den Auskunfteien als säumig gemeldet, und viele Aussteller lösen einen Straf-APR von 29,99 % aus, der unbegrenzt gelten kann. Nach 60 Tagen Verzug kann dieser Zins auch auf bestehende Salden angewendet werden. Richte für mindestens den Mindestbetrag ein Dauerauftrag ein, um das zu vermeiden.',
      },
      {
        q: 'Ändert sich die Mindestzahlung jeden Monat?',
        a: 'Ja. Da sie auf deinem Saldo und den Monatszinsen basiert, steigt sie, wenn du mehr schuldest oder die Zinsen steigen, und sinkt, wenn du abbast. Neue Käufe, Barvorschüsse und Gebühren treiben sie ebenfalls nach oben. Sinkt dein Saldo, sinkt irgendwann auch das Minimum — verlass dich aber nie auf ein niedriges Minimum als Grund, die Schulden weiter zu tragen.',
      },
    ],
    ui: {
      'in.balance': 'Aktueller Saldo',
      'in.apr': 'APR',
      'in.minPct': 'Mindestzahlung %',
      'out.minPayment': 'Mindestzahlung',
      'out.interest': 'Zins diesen Monat',
      'out.principal': 'Tilgung',
      note: '💳 Mindestzahlungen decken kaum die Zinsen — nur das Minimum zu zahlen bedeutet Jahrzehnte bis zur Tilgung. Zahl mehr, wann immer möglich.',
      chartTitle: 'Wohin deine Mindestzahlung geht',
      chartCenter: 'Zahlung',
      'slice.interest': 'Zins',
      'slice.principal': 'Tilgung',
    },
  },
}
