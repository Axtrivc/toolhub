/**
 * compound-interest-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts、
 * CompoundInterestCalculatorClient 配置里的英文 fallback、content.tsx 的 en 分支)。
 *
 * 覆盖:faqs(可见)+ ui(交互界面)+ useCases(Common uses)+ formula(公式区)。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'A = P × (1 + r/n)^(n·t)'

export const compoundInterestCalculatorL10n: ToolL10n = {
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    useCases: [
      '查看带每月定投的复利计算器',
      '计算带定期存款的复利',
      '对比不同复利频率',
      '计算带定期投入的未来值',
    ],
    faqs: [
      {
        q: '复利和简单利息有什么区别?',
        a: '简单利息只在你最初的本金上产生。复利在本金和已累积的利息上共同产生——所以你的余额呈指数增长。长期来看,同样利率下复利远超简单利息。',
      },
      {
        q: '按日复利好还是按月复利好?',
        a: '复利频率越高收益略多,但差距很小。5% 利率下一年期:按年复利得 5.000%,按月得 5.116%,按日得 5.127%。按日比按月的边际增益微乎其微——真正重要的是利率和时间。',
      },
      {
        q: '复利利息怎么交税?',
        a: '普通储蓄或券商账户中赚到的利息在当年按普通收入征税,这会拖慢复利。税收优惠账户(IRA、401k、HSA)让利息免税或递延复利,这是它们长期跑赢的主要原因之一。',
      },
      {
        q: '这个计算器包含定期投入吗?',
        a: '包含。你可以输入每月定投金额,它在初始存款之上用年金终值公式计算。这反映了大多数人真正的储蓄方式——长期坚持小额投入。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        '复利(终值)。P = 本金,r = 年利率,n = 每年复利次数,t = 年数。A 是期末总余额。',
    },
    ui: {
      inputs: '输入',
      'in.principal': '初始投资',
      'in.monthly': '每月定投',
      'in.rate': '年利率',
      'in.years': '年数',
      'out.futureValue': '未来价值',
      'out.totalContributed': '你的投入',
      'out.interestEarned': '赚取的利息',
      'outSub.interestEarned': '复利增长',
      note: '📈 复利就是「利滚利」——时间越长,增长越惊人。早开始比多投入更重要。',
      chartTitle: '你的投入 vs. 复利增长',
      chartCenter: '未来价值',
      'slice.totalContributed': '你投入的钱',
      'slice.interestEarned': '利息(白赚的钱)',
      summaryTitle: '计算摘要',
      inputsLabel: '输入:',
      resultsLabel: '结果:',
      copySummary: '复制摘要',
      csvField: '字段',
      csvType: '类型',
      csvValue: '数值',
      csvInput: '输入',
      csvResult: '结果',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
    useCases: [
      'ver un simulador de interés compuesto con aportaciones mensuales',
      'calcular el interés compuesto con depósitos periódicos',
      'comparar frecuencias de capitalización',
      'calcular el valor futuro con aportaciones regulares',
    ],
    faqs: [
      {
        q: '¿Cuál es la diferencia entre interés compuesto y simple?',
        a: 'El interés simple se genera solo sobre tu capital original. El interés compuesto se genera sobre el capital Y sobre el interés acumulado — por lo que tu saldo crece de forma exponencial. A largo plazo, la capitalización produce mucho más que el interés simple a la misma tasa.',
      },
      {
        q: '¿Es mejor la capitalización diaria o mensual?',
        a: 'Una capitalización más frecuente genera ligeramente más, pero la diferencia es pequeña. Al 5 % en un año: la anual da 5,000 %, la mensual 5,116 % y la diaria 5,127 %. La ganancia marginal de la diaria frente a la mensual es mínima — lo que importa mucho más es la tasa y el horizonte temporal.',
      },
      {
        q: '¿Cómo se grava el interés compuesto?',
        a: 'El interés generado en una cuenta de ahorro o bróker estándar se grava como ingreso ordinario el año en que se genera, lo que ralentiza la capitalización. Las cuentas con ventajas fiscales (IRA, 401k, HSA) permiten que el interés capitalice sin impuestos o de forma diferida, razón principal por la que superan a largo plazo.',
      },
      {
        q: '¿Esta calculadora incluye aportaciones periódicas?',
        a: 'Sí. Puedes introducir una aportación mensual, que se calcula con la fórmula del valor futuro de una anualidad sobre el depósito inicial. Esto refleja cómo ahorra la mayoría: pequeñas cantidades añadidas con constancia a lo largo de muchos años.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Interés compuesto (valor futuro). P = capital, r = tasa anual, n = periodos de capitalización por año, t = años. A es el saldo total al final.',
    },
    ui: {
      inputs: 'Entradas',
      'in.principal': 'Inversión inicial',
      'in.monthly': 'Aportación mensual',
      'in.rate': 'Tasa de interés anual',
      'in.years': 'Años',
      'out.futureValue': 'Valor futuro',
      'out.totalContributed': 'Tu aportación',
      'out.interestEarned': 'Interés generado',
      'outSub.interestEarned': 'Crecimiento compuesto',
      note: '📈 El interés compuesto es «interés sobre interés»: cuanto mayor sea tu horizonte, más espectacular será el crecimiento. Empezar pronto importa más que empezar con mucho.',
      chartTitle: 'Tus aportaciones frente al crecimiento compuesto',
      chartCenter: 'Valor futuro',
      'slice.totalContributed': 'Dinero que invertiste',
      'slice.interestEarned': 'Interés generado (dinero gratis)',
      summaryTitle: 'Resumen del cálculo',
      inputsLabel: 'Entradas:',
      resultsLabel: 'Resultados:',
      copySummary: 'Copiar resumen',
      csvField: 'Campo',
      csvType: 'Tipo',
      csvValue: 'Valor',
      csvInput: 'Entrada',
      csvResult: 'Resultado',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    useCases: [
      'einen Zinseszinsrechner mit monatlichen Einzahlungen anzeigen',
      'Zinseszins mit regelmäßigen Einzahlungen berechnen',
      'Zinsverrechnungsperioden vergleichen',
      'den zukünftigen Wert mit regelmäßigen Einzahlungen berechnen',
    ],
    faqs: [
      {
        q: 'Was ist der Unterschied zwischen Zinseszins und einfachem Zins?',
        a: 'Einfacher Zins wird nur auf deine Ersteinlage berechnet. Zinseszins wird auf die Einlage UND auf die angesammelten Zinsen berechnet — deshalb wächst dein Guthaben exponentiell. Über lange Zeiträume erzeugt der Zinseszins deutlich mehr als der einfache Zins bei gleichem Satz.',
      },
      {
        q: 'Ist tägliche oder monatliche Verzinsung besser?',
        a: 'Häufigere Verzinsung bringt etwas mehr, aber der Unterschied ist gering. Bei 5 % über ein Jahr: jährliche Verzinsung ergibt 5,000 %, monatliche 5,116 %, tägliche 5,127 %. Der marginale Gewinn von täglich gegenüber monatlich ist winzig — viel wichtiger sind Zinssatz und Anlagedauer.',
      },
      {
        q: 'Wie wird Zinseszins besteuert?',
        a: 'Zinsen aus einem normalen Spar- oder Depotkonto werden im Entstehungsjahr als ordentliches Einkommen versteuert, was den Zinseszins verlangsamt. Steuervorteilhafte Konten (IRA, 401k, HSA) lassen Zinsen steuerfrei oder steuerlich aufgeschoben Zinseszins sammeln — ein Hauptgrund, warum sie über Jahrzehnte besser abschneiden.',
      },
      {
        q: 'Enthält dieser Rechner regelmäßige Einzahlungen?',
        a: 'Ja. Du kannst eine monatliche Einzahlung eingeben, die zusätzlich zur Ersteinlage mit der Formel für den zukünftigen Rentenwert berechnet wird. Das spiegelt wider, wie die meisten Menschen tatsächlich sparen: kleine Beträge, die über viele Jahre beständig hinzukommen.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Zinseszins (zukünftiger Wert). P = Einlage, r = Jahressatz, n = Zinsperioden pro Jahr, t = Jahre. A ist der Gesamtsaldo am Ende.',
    },
    ui: {
      inputs: 'Eingaben',
      'in.principal': 'Ersteinlage',
      'in.monthly': 'Monatliche Einzahlung',
      'in.rate': 'Jahreszinssatz',
      'in.years': 'Jahre',
      'out.futureValue': 'Zukünftiger Wert',
      'out.totalContributed': 'Deine Einzahlung',
      'out.interestEarned': 'Erzielter Zins',
      'outSub.interestEarned': 'Zinseszinzwachstum',
      note: '📈 Zinseszins ist „Zins auf Zins" — je länger dein Anlagehorizont, desto dramatischer das Wachstum. Früh zu beginnen ist wichtiger als mit viel zu beginnen.',
      chartTitle: 'Deine Einzahlungen vs. Zinseszinzwachstum',
      chartCenter: 'Zukünftiger Wert',
      'slice.totalContributed': 'Von dir eingezahlt',
      'slice.interestEarned': 'Zins (gratis Geld)',
      summaryTitle: 'Zusammenfassung der Berechnung',
      inputsLabel: 'Eingaben:',
      resultsLabel: 'Ergebnis:',
      copySummary: 'Zusammenfassung kopieren',
      csvField: 'Feld',
      csvType: 'Typ',
      csvValue: 'Wert',
      csvInput: 'Eingabe',
      csvResult: 'Ergebnis',
    },
  },
}
