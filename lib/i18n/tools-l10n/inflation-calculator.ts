/**
 * inflation-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const inflationCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'Future value = present × (1 + i)^n',
      explain: '购买力侵蚀。i = 年通胀率,n = 年数。价格复利上涨时,同样的钱能买到的东西按比例减少。',
    },
    useCases: ['看通胀如何蚕食购买力', '把今天的钱换算成未来的等值金额', '按通胀率算钱缩水多少', '为长期目标估算合理回报率'],
    faqs: [
      { q: '正常的通胀率是多少?', a: '各国央行把约 2% 视为「健康」通胀。美国过去一个世纪平均约 3%。高通胀(10% 以上)或通缩(负值)都会引发经济问题。' },
      { q: '怎么用这个数字做储蓄规划?', a: '名义利率减去通胀率才是实际收益。银行存款 1.5%、通胀 3% 时,购买力每年实际缩水约 1.5%——这正是长期闲钱通常要配置股票、指数基金等更高预期收益资产的原因。' },
      { q: '按 3% 通胀算,10 年后钱缩水多少?', a: '10 年后你需要 13,439 元才能买到今天 10,000 元的东西,购买力蒸发约 26%;20 年后只剩约 5,540 元的购买力。通胀按复利作用,时间越长越猛。' },
      { q: '通缩(物价下跌)不是好事吗?', a: '短期看消费者高兴,但物价持续下跌时大家推迟购买、企业裁员降薪、债务实际负担变重,容易陷入螺旋。日本 1990 年代后的长期通缩是教科书案例——所以央行把 2% 通胀设为目标而不是 0%。' },
    ],
    ui: {
      'chartTitle': '同一篮子的价格',
      'line.today': '今日价格',
      'line.future': '未来价格',
      'in.amount': '金额', 'in.rate': '年通胀率', 'in.years': '年数',
      'out.future': '未来等值成本', 'out.lost': '损失的购买力',
      note: '💸 今天 $1,000 在 3% 通胀下逐年贬值。10 年后你需要 $1,344 才能买到现在 $1,000 能买到的东西。',
      errNonNegative: '金额、通胀率与年数不能为负',
    },
  },
  es: {
    formula: {
      formula: 'Future value = present × (1 + i)^n',
      explain: 'Erosión del poder adquisitivo. i = tasa de inflación anual, n = años. El mismo dinero compra proporcionalmente menos a medida que los precios suben de forma compuesta.',
    },
    useCases: ['ver cómo la inflación erosiona el poder adquisitivo', 'convertir dinero de hoy al equivalente futuro', 'calcular cuánto se devalúa el dinero por la inflación', 'estimar la rentabilidad necesaria para objetivos a largo plazo'],
    faqs: [
      { q: '¿Cuál es una tasa de inflación normal?', a: 'Los bancos centrales fijan un objetivo del 2 % aprox. como inflación «saludable». EE. UU. promedió un 3 % en el último siglo. Tanto la alta inflación (10 %+) como la deflación (negativa) causan problemas económicos.' },
      { q: '¿Qué tasa uso para España o Latinoamérica?', a: 'Para la zona euro toma el IPC armonizado (objetivo del BCE: 2 %); España ha rondado el 2-4 % en años recientes (con el pico de 2022 por encima del 8 %), y varios países latinoamericanos han visto picos del 7-10 %. Usa la media a largo plazo de tu país, no el último dato mensual.' },
      { q: '¿Cuánto pierde mi dinero en 10 años con un 3 %?', a: 'Dentro de 10 años necesitarás 13.439 € para comprar lo que hoy cuesta 10.000 €: la inflación se aplica en compuesto y el poder adquisitivo cae cerca de un 26 %; a 20 años quedan unos 5.540 €. Cuanto más largo el plazo, más agresiva la erosión.' },
      { q: '¿La deflación no es buena noticia?', a: 'A corto plazo parece un alivio, pero si los precios bajan de forma sostenida la gente pospone compras, las empresas recortan plantillas y las deudas pesan más en términos reales. La deflación japonesa tras 1990 es el caso de manual — por eso el BCE apunta al 2 % y no al 0 %.' },
    ],
    ui: {
      'chartTitle': 'Coste de la misma cesta',
      'line.today': 'Cuesta hoy',
      'line.future': 'Costará entonces',
      'in.amount': 'Importe', 'in.rate': 'Inflación anual', 'in.years': 'Años',
      'out.future': 'Coste equivalente en el futuro', 'out.lost': 'Poder adquisitivo perdido',
      note: '💸 $1,000 hoy con una inflación del 3 % valen menos cada año. En 10 años necesitarías $1,344 para comprar lo que $1,000 compran ahora.',
      errNonNegative: 'El importe, la inflación y los años no pueden ser negativos',
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
      { q: 'Welchen Wert soll ich für Deutschland einsetzen?', a: 'Nimm den HVPI der EZB — Ziel sind 2 %. Deutschland lag 2022 über 6 %, historisch eher bei 1,5-2 %; für Langfristprojektionen sind 2-3 % ein realistischer Ansatz. Für Lohnverhandlungen zählt der aktuelle VPI des Statistischen Bundesamts.' },
      { q: 'Was bedeutet 3 % Inflation über 10 Jahre?', a: 'In zehn Jahren brauchst du 13.439 € für einen Warenkorb, der heute 10.000 € kostet: Inflation wirkt zinseszinsartig, die Kaufkraft sinkt um rund 26 %; nach 20 Jahren bleiben etwa 5.540 €. Je länger der Horizont, desto härter die Aushöhlung.' },
      { q: 'Ist Deflation (fallende Preise) nicht gut?', a: 'Kurzfristig schon, aber bei anhaltend sinkenden Preisen schieben Verbraucher Käufe auf, Firmen bauen Personal ab und Schulden werden real schwerer — eine Abwärtsspirale. Japans Deflation nach 1990 ist das Lehrbuchbeispiel; deshalb steuern Notenbanken auf 2 % statt 0 %.' },
    ],
    ui: {
      'chartTitle': 'Preis desselben Warenkorbs',
      'line.today': 'Heutiger Preis',
      'line.future': 'Zukünftiger Preis',
      'in.amount': 'Betrag', 'in.rate': 'Jährliche Inflation', 'in.years': 'Jahre',
      'out.future': 'Entsprechende Zukunftskosten', 'out.lost': 'Verlorene Kaufkraft',
      note: '💸 $1,000 heute verlieren bei 3 % Inflation jährlich an Wert. In 10 Jahren brauchst du $1,344 für das, was $1,000 jetzt kaufen.',
      errNonNegative: 'Betrag, Inflation und Jahre dürfen nicht negativ sein',
    },
  },
}
