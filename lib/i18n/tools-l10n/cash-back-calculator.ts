/**
 * cash-back-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases + formula
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'Cash back = Σ ( spendᵢ × rateᵢ ) − annual fee'

export const cashBackCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['算有年费的返现卡值不值', '算信用卡奖励的实际价值', '按消费找最佳返现卡', '对比返现 vs 积分价值'],
    faqs: [
      { q: '积分还是返现?', a: '返现更简单、价值确定。积分如果兑换旅行（尤其商务/头等舱）可能更值，但更费力且价值波动。' },
      { q: '什么时候有年费的卡才划算?', a: '当你每年的奖励超过年费时。用年费除以返现比例就能找到盈亏平衡消费额——$95 年费、3% 餐饮返现的卡，盈亏平衡点大约是每年 $3,167 餐饮消费。低于这个数，免年费卡更划算。' },
      { q: '返现奖励会过期吗?', a: '账户正常使用期间通常不会过期，但关卡或长期不活跃时发卡机构可能没收奖励。积分项目可能随时间贬值，而返现以对账单抵扣的形式保持固定美元价值。' },
    ],
    formula: { formula: FORMULA, explain: '将每个类别的消费乘以其返现比例，跨类别求和，再减去卡年费。额外比例仅在其季度或年度消费上限内适用。' },
    ui: {
      'in.spend': '月消费额', 'in.rate': '返现比例', 'in.fee': '卡年费',
      'out.monthly': '月返现', 'out.annual': '年返现（扣费前）', 'out.net': '净价值（扣费后）',
      note: '💳 诚实比较各奖励卡。$95 年费只有当你额外赚到的奖励超过 $95 时才划算。',
    },
  },
  es: {
    useCases: ['calcular si una tarjeta con anualidad compensa', 'calcular el valor real de las recompensas', 'encontrar la mejor tarjeta por gasto', 'comparar reembolso frente a puntos'],
    faqs: [
      { q: '¿Puntos o reembolso en efectivo?', a: 'El reembolso es más sencillo y de valor garantizado. Los puntos pueden valer más si se canjean por viajes (especialmente negocios/primera clase), pero requieren más esfuerzo y su valor varía.' },
      { q: '¿Cuándo compensa una tarjeta con anualidad?', a: 'Cuando tus recompensas anuales superan la cuota. Divide la anualidad entre la tasa de reembolso para hallar el gasto de equilibrio — una cuota de 95 $ en una tarjeta con 3 % en restaurantes se equilibra con unos 3 167 $ de gasto anual en restaurantes. Por debajo de eso, la tarjeta sin cuota es mejor.' },
      { q: '¿Caducan las recompensas de reembolso?', a: 'Normalmente no mientras la cuenta permanezca abierta y al corriente, pero los emisores pueden incautarlas al cierre o tras una inactividad prolongada. Los programas de puntos pueden devaluarse con el tiempo, mientras que el reembolso acreditado en el estado de cuenta mantiene un valor fijo en dólares.' },
    ],
    formula: { formula: FORMULA, explain: 'Multiplica el gasto de cada categoría por su tasa de recompensa, suma todas las categorías y resta la cuota anual de la tarjeta. Las tasas bonus solo se aplican hasta sus límites trimestrales o anuales.' },
    ui: {
      'in.spend': 'Gasto mensual', 'in.rate': 'Tasa de reembolso', 'in.fee': 'Cuota anual',
      'out.monthly': 'Reembolso mensual', 'out.annual': 'Reembolso anual (antes de cuota)', 'out.net': 'Valor neto (después de cuota)',
      note: '💳 Compara tarjetas de recompensa con honestidad. Una cuota de 95 $ solo compensa si ganas más de 95 $ extra en recompensas.',
    },
  },
  de: {
    useCases: ['berechnen, ob eine Karte mit Jahresgebühr lohnt', 'den wahren Wert von Prämien berechnen', 'die beste Cashback-Karte nach Ausgaben finden', 'Cashback mit Punkten vergleichen'],
    faqs: [
      { q: 'Punkte oder Cashback?', a: 'Cashback ist einfacher und garantiert wertbeständig. Punkte können beim Einlösen für Reisen (besonders Business/First Class) mehr wert sein, erfordern aber mehr Aufwand und schwanken im Wert.' },
      { q: 'Wann lohnt sich eine Karte mit Jahresgebühr?', a: 'Wenn deine jährlichen Prämien die Gebühr übersteigen. Teile die Jahresgebühr durch die Bonusrate, um die Break-even-Ausgaben zu finden — eine 95 $-Gebühr bei 3 % Restaurant-Cashback rechnet sich bei etwa 3 167 $ Restaurantausgaben pro Jahr. Darunter ist die gebührenfreie Karte besser.' },
      { q: 'Verfallen Cashback-Prämien?', a: 'In der Regel nicht, solange das Konto offen und in gutem Stand ist, aber Aussteller können Prämien bei Schließung oder langer Inaktivität einbehalten. Punkteprogramme können mit der Zeit abgewertet werden, während Cashback als Gutschrift einen festen Dollarwert behält.' },
    ],
    formula: { formula: FORMULA, explain: 'Multipliziere die Ausgaben jeder Kategorie mit ihrer Bonusrate, summiere über alle Kategorien und ziehe die Jahresgebühr der Karte ab. Bonusraten gelten nur bis zu ihren quartals- oder jahresweisen Obergrenzen.' },
    ui: {
      'in.spend': 'Monatliche Ausgaben', 'in.rate': 'Cashback-Rate', 'in.fee': 'Jahresgebühr',
      'out.monthly': 'Monatliches Cashback', 'out.annual': 'Jährliches Cashback (vor Gebühr)', 'out.net': 'Nettowert (nach Gebühr)',
      note: '💳 Vergleiche Prämienkarten ehrlich. Eine 95 $-Gebühr lohnt sich nur, wenn du mehr als 95 $ extra an Prämien verdienst.',
    },
  },
}
