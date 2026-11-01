/**
 * simple-interest-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases + formula
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'I = P × r × t'

export const simpleInterestCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular interés simple con I = P × r × t', 'calcular el interés de préstamos o bonos a corto plazo', 'comparar la diferencia entre interés simple y compuesto', 'calcular el interés de un capital a una tasa dada'],
    faqs: [
      { q: '¿Cuándo conviene el interés simple?', a: 'Para plazos cortos y préstamos básicos, es más fácil de calcular. La mayoría de hipotecas, tarjetas de crédito e inversiones usan interés compuesto — usa esa calculadora para esos casos.' },
    ],
    formula: { formula: FORMULA, explain: 'Interés simple. P = capital, r = tasa anual (en decimal), t = años. I es el interés acumulado durante el periodo.' },
    ui: {
      'chartTitle': 'Capital + interés',
      'cmp.0': 'Importe total',
      'cmpseg.0': 'Capital',
      'cmpseg.1': 'Interés',
      'in.principal': 'Capital', 'in.rate': 'Tasa anual', 'in.years': 'Años',
      'out.interest': 'Interés generado', 'out.total': 'Importe total',
      note: '💵 Interés simple: I = P × r × t. A diferencia del interés compuesto, no ganas interés sobre el interés acumulado.',
      errNonNegative: 'El capital, la tasa y los años no pueden ser negativos',
    },
  },
  de: {
    useCases: ['Einfachen Zins mit I = P × r × t berechnen', 'Zinsen für Kurzfristkredite oder Anleihen berechnen', 'den Unterschied zwischen einfachem Zins und Zinseszins vergleichen', 'die Zinsen auf ein Kapital zu einem gegebenen Satz berechnen'],
    faqs: [
      { q: 'Wann verwendet man einfachen Zins?', a: 'Bei kurzen Zeiträumen und einfachen Krediten ist er leichter zu berechnen. Die meisten Hypotheken, Kreditkarten und Investitionen verwenden Zinseszins — nimm für diese Fälle den Zinseszinsrechner.' },
    ],
    formula: { formula: FORMULA, explain: 'Einfacher Zins. P = Kapital, r = Jahreszinssatz (als Dezimalzahl), t = Jahre. I ist der über den Zeitraum angefallene Zins.' },
    ui: {
      'chartTitle': 'Kapital + Zinsen',
      'cmp.0': 'Gesamtbetrag',
      'cmpseg.0': 'Kapital',
      'cmpseg.1': 'Zinsen',
      'in.principal': 'Kapital', 'in.rate': 'Jahreszinssatz', 'in.years': 'Jahre',
      'out.interest': 'Zinsen', 'out.total': 'Gesamtbetrag',
      note: '💵 Einfacher Zins: I = P × r × t. Anders als beim Zinseszins erhältst du keine Zinsen auf bereits angefallene Zinsen.',
      errNonNegative: 'Kapital, Zinssatz und Jahre dürfen nicht negativ sein',
    },
  },
}
