/**
 * inflation-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const inflationCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'Future value = present × (1 + i)^n',
      explain: '购买力侵蚀。i = 年通胀率,n = 年数。同样的钱在价格复利上涨后能买到的东西按比例变少。',
    },
    useCases: ['看通胀如何蚕食购买力', '把今天的钱换算成未来的等值金额', '按通胀率算钱缩水多少', '为长期目标估算合理回报率'],
    faqs: [
      { q: '正常的通胀率是多少?', a: '各国央行把约 2% 视为「健康」通胀。美国过去一个世纪平均约 3%。高通胀(10% 以上)或通缩(负值)都会引发经济问题。' },
    ],
    ui: {
      'in.amount': '金额', 'in.rate': '年通胀率', 'in.years': '年数',
      'out.future': '未来等值成本', 'out.lost': '损失的购买力',
      note: '💸 今天 $1,000 在 3% 通胀下逐年贬值。10 年后你需要 $1,344 才能买到现在 $1,000 能买到的东西。',
    },
  },
  es: {
    formula: {
      formula: 'Future value = present × (1 + i)^n',
      explain: 'Erosión del poder adquisitivo. i = tasa de inflación anual, n = años. El mismo dinero compra proporcionalmente menos a medida que los precios suben compuestamente.',
    },
    useCases: ['ver cómo la inflación erosiona el poder adquisitivo', 'convertir dinero de hoy al equivalente futuro', 'calcular cuánto se devalúa el dinero por la inflación', 'estimar la rentabilidad necesaria para objetivos a largo plazo'],
    faqs: [
      { q: '¿Cuál es una tasa de inflación normal?', a: 'Los bancos centrales fijan un objetivo del 2 % aprox. como inflación «saludable». EE. UU. promedió un 3 % en el último siglo. Tanto la alta inflación (10 %+) como la deflación (negativa) causan problemas económicos.' },
    ],
    ui: {
      'in.amount': 'Importe', 'in.rate': 'Inflación anual', 'in.years': 'Años',
      'out.future': 'Coste equivalente en el futuro', 'out.lost': 'Poder adquisitivo perdido',
      note: '💸 $1,000 hoy con una inflación del 3 % valen menos cada año. En 10 años necesitarías $1,344 para comprar lo que $1,000 compran ahora.',
    },
  },
  de: {
    formula: {
      formula: 'Future value = present × (1 + i)^n',
      explain: 'Kaufkraftverlust. i = jährliche Inflationsrate, n = Jahre. Dasselbe Geld kauft anteilig weniger, während die Preise über die Zeit steigen.',
    },
    useCases: ['sehen, wie Inflation die Kaufkraft aushöhlt', 'heutiges Geld in den zukünftigen Gegenwert umrechnen', 'berechnen, wie viel Wert das Geld durch Inflation verliert', 'die nötige Rendite für langfristige Ziele schätzen'],
    faqs: [
      { q: 'Was ist eine normale Inflationsrate?', a: 'Notenbanken steuern auf etwa 2 % als „gesunde" Inflation. Die USA lagen im letzten Jahrhundert bei durchschnittlich 3 %. Hohe Inflation (10 %+) und Deflation (negativ) verursachen beide Wirtschaftsprobleme.' },
    ],
    ui: {
      'in.amount': 'Betrag', 'in.rate': 'Jährliche Inflation', 'in.years': 'Jahre',
      'out.future': 'Entsprechende Zukunftskosten', 'out.lost': 'Verlorene Kaufkraft',
      note: '💸 $1,000 heute verlieren bei 3 % Inflation jährlich an Wert. In 10 Jahren brauchst du $1,344 für das, was $1,000 jetzt kaufen.',
    },
  },
}
