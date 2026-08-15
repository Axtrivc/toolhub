/**
 * bill-split-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases（无 formula 条目）
 */
import type { ToolL10n } from '../tool-l10n'

export const billSplitCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['算带小费的 AA 账单', '拆分含税含小费的账单', '按人数分摊餐厅账单', '算分摊后每人付多少'],
    faqs: [
      { q: '有人没喝酒怎么办?', a: '把酒水部分单算。从总额中减去酒水费用，由喝酒的人分摊，食物则所有人均摊。' },
    ],
    ui: {
      errMinOnePerson: '请至少输入 1 人',
      'in.total': '账单总额', 'in.tip': '小费', 'in.people': '人数',
      'out.perPerson': '每人应付', 'out.tipAmount': '小费总额', 'out.grandTotal': '总计',
      note: '🍽️ 含小费均摊账单。如果需要按各自点的菜分摊，请单独计算每人的金额。',
    },
  },
  es: {
    useCases: ['dividir la cuenta con propina', 'repartir la cuenta con impuestos y propina', 'dividir la cuenta entre personas', 'calcular cuánto paga cada persona'],
    faqs: [
      { q: '¿Qué hacemos si alguien no bebió?', a: 'Detalla esa parte por separado. Resta el coste del alcohol del total, repártelo entre los que bebieron y divide la comida a partes iguales.' },
    ],
    ui: {
      errMinOnePerson: 'Introduce al menos 1 persona',
      'in.total': 'Total de la cuenta', 'in.tip': 'Propina', 'in.people': 'Número de personas',
      'out.perPerson': 'Cada persona paga', 'out.tipAmount': 'Propina total', 'out.grandTotal': 'Total general',
      note: '🍽️ Divide la cuenta a partes iguales incluyendo propina. Para dividir por platos, calcula los importes individuales por separado.',
    },
  },
  de: {
    useCases: ['die Rechnung mit Trinkgeld teilen', 'die Rechnung mit Steuer und Trinkgeld splitten', 'die Restaurantrechnung auf Personen aufteilen', 'ausrechnen, was jeder zahlt'],
    faqs: [
      { q: 'Was tun, wenn jemand nichts getrunken hat?', a: 'Diesen Teil separat abrechnen. Ziehe die Getränkekosten vom Gesamtbetrag ab, teile sie unter den Trinkenden auf und teile das Essen zu gleichen Teilen.' },
    ],
    ui: {
      errMinOnePerson: 'Gib mindestens 1 Person an',
      'in.total': 'Rechnungsbetrag', 'in.tip': 'Trinkgeld', 'in.people': 'Anzahl Personen',
      'out.perPerson': 'Jeder zahlt', 'out.tipAmount': 'Trinkgeld gesamt', 'out.grandTotal': 'Gesamtbetrag',
      note: '🍽️ Teilt eine Rechnung inklusive Trinkgeld gleichmäßig. Für einzelne Posten rechne die Beträge pro Person separat.',
    },
  },
}
