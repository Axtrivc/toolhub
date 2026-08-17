/**
 * rent-vs-buy-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const rentVsBuyCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['比较买房与租房在持有期内的总成本', '算出买房比租房便宜的盈亏平衡点', '按年限看租买哪个更划算', '决定该租房还是买房'],
    faqs: [
      { q: '这个计算器考虑房价上涨吗?', a: '不考虑——这个简化版本忽略了升值,而那是买房的一大好处。但它也忽略了把首付款投入股市的机会成本。完整的租买模型会同时纳入两者。从历史看,美国房价每年升值约 3-4%,大致跟通胀持平。' },
      { q: '怎么判断自己会住得够久?', a: '工作稳定性、感情状况和学区是常见的信号。一个好的经验法则:有把握至少住 5 年,理想是 7-10 年。你每多住一年,成交成本就被摊得更薄,数学上更有利于买房。' },
      { q: '房贷利息的税前扣除怎么算?', a: '自 2017 年美国税改后,更高的标准扣除额(2024 年单身 $14,600 / 已婚 $29,200)意味着大多数房主不再逐项列报,所以房贷利息扣除帮到的人比以前少。只有当你的逐项扣除总额明显超过标准扣除额时,才指望得上。' },
    ],
    ui: {
      errYears: '请输入大于 0 的年数',
      winnerBuying: '买房更划算(约省 {amount})',
      winnerRenting: '租房更划算(约省 {amount})',
      'in.home': '房价', 'in.rent': '可比月租金', 'in.down': '首付比例', 'in.rate': '房贷利率', 'in.term': '贷款期限', 'inSuffix.term': '年', 'in.years': '居住年限',
      'out.buyTotal': '买房净成本', 'outSub.buyTotal': '首付 + 已付月供 − 期末净值', 'out.rentTotal': '租房总成本', 'outSub.rentTotal': '持有期内的租金', 'out.winner': '更省的选项',
      note: '🏠 买房净成本 = 首付 + 居住期内已付月供 − 卖出时收回的净值(期末房价 − 剩余贷款本金)。简化估算——不含税费、维护费、升值以及投资的机会成本。作为初步粗略对比使用。',
    },
  },
  es: {
    useCases: ['comparar el coste total de comprar frente a alquilar en el periodo', 'hallar el punto de equilibrio donde comprar sale más barato', 'ver por años si conviene comprar o alquilar', 'decidir si alquilar o comprar vivienda'],
    faqs: [
      { q: '¿Considera la subida del valor de la vivienda?', a: 'No — esta versión simplificada ignora la revalorización, que es un gran beneficio de comprar. Pero también ignora el coste de oportunidad de invertir tu entrada en bolsa. Los modelos completos de alquilar vs. comprar incluyen ambos. Históricamente, las viviendas en EE. UU. se revalorizan un 3-4 % anual, más o menos como la inflación.' },
      { q: '¿Cómo sé si me quedaré el tiempo suficiente?', a: 'La estabilidad laboral, la situación sentimental y los distritos escolares son las señales habituales. Una buena regla: ten confianza en quedarte al menos 5 años, idealmente 7-10. Cada año extra diluye más los gastos de cierre y inclina la balanza hacia comprar.' },
      { q: '¿Y la deducción fiscal por intereses de la hipoteca?', a: 'Desde el cambio fiscal de 2017 en EE. UU., el mayor mínimo deducible ($14,600 soltero / $29,200 matrimonio en 2024) hace que la mayoría de propietarios ya no detallen, así que la deducción por intereses beneficia a menos gente que antes. Cuenta con ella solo si tus deducciones detalladas superan claramente el mínimo.' },
    ],
    ui: {
      errYears: 'Introduce un número de años mayor que 0',
      winnerBuying: 'Comprar (~{amount} más barato)',
      winnerRenting: 'Alquilar (~{amount} más barato)',
      'in.home': 'Precio de la vivienda', 'in.rent': 'Alquiler comparable', 'in.down': 'Entrada', 'in.rate': 'Tipo de la hipoteca', 'in.term': 'Plazo del préstamo', 'inSuffix.term': 'años', 'in.years': 'Años en la vivienda',
      'out.buyTotal': 'Coste neto de comprar', 'outSub.buyTotal': 'Entrada + pagos − patrimonio final', 'out.rentTotal': 'Coste total de alquilar', 'outSub.rentTotal': 'Alquiler durante el periodo', 'out.winner': 'Opción más barata',
      note: '🏠 Coste neto de comprar = entrada + pagos de hipoteca durante el periodo − patrimonio recuperado en la venta (valor de la vivienda − capital pendiente). Simplificado — sin impuestos, mantenimiento, revalorización ni coste de oportunidad de invertir. Úsalo como comparación aproximada inicial.',
    },
  },
  de: {
    useCases: ['die Gesamtkosten von Kauf gegen Miete im Zeitraum vergleichen', 'den Break-even-Punkt finden, ab dem Kaufen günstiger ist', 'nach Jahren sehen, ob Miete oder Kauf günstiger ist', 'entscheiden, ob mieten oder kaufen'],
    faqs: [
      { q: 'Berücksichtigt das eine Wertsteigerung der Immobilie?', a: 'Nein — diese vereinfachte Version ignoriert die Wertsteigerung, die ein großer Vorteil des Kaufens ist. Sie ignoriert aber auch die Opportunitätskosten, dein Eigenkapital in Aktien zu investieren. Vollwertige Miet-Kauf-Modelle beides ein. Historisch steigen US-Immobilien um 3-4 % pro Jahr, grob wie die Inflation.' },
      { q: 'Wie weiß ich, ob ich lange genug bleibe?', a: 'Jobsicherheit, Beziehungsstatus und Schulbezirke sind die üblichen Signale. Eine gute Faustregel: sei dir sicher, mindestens 5 Jahre zu bleiben, idealerweise 7-10. Jedes weitere Jahr verteilt die Abschlusskosten dünner und kippt die Rechnung weiter Richtung Kauf.' },
      { q: 'Was ist mit dem Steuerabzug für Hypothekenzinsen?', a: 'Seit der US-Steuerreform 2017 bedeutet der höhere Pauschbetrag ($14,600 Single / $29,200 Verheiratet 2024), dass die meisten Eigentümer nicht mehr itemisieren, also hilft der Hypothekenzinsabzug weniger Leuten als früher. Rechne nur damit, wenn deine itemisierten Abzüge den Pauschbetrag deutlich übersteigen.' },
    ],
    ui: {
      errYears: 'Gib eine Anzahl von Jahren größer als 0 ein',
      winnerBuying: 'Kaufen (~{amount} günstiger)',
      winnerRenting: 'Mieten (~{amount} günstiger)',
      'in.home': 'Hauspreis', 'in.rent': 'Vergleichsmiete', 'in.down': 'Anzahlung', 'in.rate': 'Hypothekenzins', 'in.term': 'Kreditlaufzeit', 'inSuffix.term': 'Jahre', 'in.years': 'Wohnjahre',
      'out.buyTotal': 'Nettokosten Kauf', 'outSub.buyTotal': 'Anzahlung + Zahlungen − Eigenkapital beim Verkauf', 'out.rentTotal': 'Gesamtkosten Miete', 'outSub.rentTotal': 'Miete über den Zeitraum', 'out.winner': 'Günstigere Option',
      note: '🏠 Nettokosten Kauf = Anzahlung + Hypothekenzahlungen während der Wohnzeit − beim Verkauf zurückgewonnenes Eigenkapital (Hauswert − Restschuld). Vereinfacht — ohne Steuern, Instandhaltung, Wertsteigerung und Opportunitätskosten der Investition. Als groben Erstrieg-Vergleich nutzen.',
    },
  },
}
