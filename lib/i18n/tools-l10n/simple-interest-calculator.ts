/**
 * simple-interest-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases + formula
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'I = P × r × t'

export const simpleInterestCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['按 I = P × r × t 算单利', '算短期贷款或债券的利息', '对比单利与复利的差距', '算一笔本金在给定利率下的利息'],
    faqs: [
      { q: '什么时候会用单利?', a: '在短期和基础贷款中,单利算起来更简单。大多数房贷、信用卡和投资用的是复利——那些情况请用复利计算器。' },
    ],
    formula: { formula: FORMULA, explain: '单利。P = 本金,r = 年利率(小数形式),t = 年数。I 是这段时间内累计的利息。' },
    ui: {
      inputs: '输入', 'in.principal': '本金', 'in.rate': '年利率', 'in.years': '年数',
      'out.interest': '利息', 'out.total': '总金额',
      note: '💵 单利:I = P × r × t。与复利不同,你不会对已累计的利息再赚利息。',
      summaryTitle: '计算摘要', inputsLabel: '输入:', resultsLabel: '结果:', copySummary: '复制摘要', csvField: '字段', csvType: '类型', csvValue: '数值', csvInput: '输入', csvResult: '结果',
    },
  },
  es: {
    useCases: ['calcular interés simple con I = P × r × t', 'calcular el interés de préstamos o bonos a corto plazo', 'comparar la diferencia entre interés simple y compuesto', 'calcular el interés de un capital a una tasa dada'],
    faqs: [
      { q: '¿Cuándo conviene el interés simple?', a: 'Para plazos cortos y préstamos básicos, es más fácil de calcular. La mayoría de hipotecas, tarjetas de crédito e inversiones usan interés compuesto — usa esa calculadora para esos casos.' },
    ],
    formula: { formula: FORMULA, explain: 'Interés simple. P = principal, r = tasa anual (en decimal), t = años. I es el interés acumulado durante el periodo.' },
    ui: {
      inputs: 'Entradas', 'in.principal': 'Principal', 'in.rate': 'Tasa anual', 'in.years': 'Años',
      'out.interest': 'Interés generado', 'out.total': 'Cantidad total',
      note: '💵 Interés simple: I = P × r × t. A diferencia del interés compuesto, no ganas interés sobre el interés acumulado.',
      summaryTitle: 'Resumen del cálculo', inputsLabel: 'Entradas:', resultsLabel: 'Resultados:', copySummary: 'Copiar resumen', csvField: 'Campo', csvType: 'Tipo', csvValue: 'Valor', csvInput: 'Entrada', csvResult: 'Resultado',
    },
  },
  de: {
    useCases: ['Einfachen Zins mit I = P × r × t berechnen', 'Zinsen für Kurzfristkredite oder Anleihen berechnen', 'den Unterschied zwischen einfachem Zins und Zinseszins vergleichen', 'die Zinsen auf ein Kapital zu einem gegebenen Satz berechnen'],
    faqs: [
      { q: 'Wann verwendet man einfachen Zins?', a: 'Bei kurzen Zeiträumen und einfachen Krediten ist er leichter zu berechnen. Die meisten Hypotheken, Kreditkarten und Investitionen verwenden Zinseszins — nimm für diese Fälle den Zinseszinsrechner.' },
    ],
    formula: { formula: FORMULA, explain: 'Einfacher Zins. P = Kapital, r = Jahressatz (als Dezimalzahl), t = Jahre. I ist der über den Zeitraum angefallene Zins.' },
    ui: {
      inputs: 'Eingaben', 'in.principal': 'Kapital', 'in.rate': 'Jahressatz', 'in.years': 'Jahre',
      'out.interest': 'Zinsen', 'out.total': 'Gesamtbetrag',
      note: '💵 Einfacher Zins: I = P × r × t. Anders als beim Zinseszins erhältst du keine Zinsen auf bereits angefallene Zinsen.',
      summaryTitle: 'Zusammenfassung der Berechnung', inputsLabel: 'Eingaben:', resultsLabel: 'Ergebnis:', copySummary: 'Zusammenfassung kopieren', csvField: 'Feld', csvType: 'Typ', csvValue: 'Wert', csvInput: 'Eingabe', csvResult: 'Ergebnis',
    },
  },
}
