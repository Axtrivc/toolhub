/**
 * compound-interest-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts、
 * CompoundInterestCalculatorClient 配置里的英文 fallback、content.tsx 的 en 分支)。
 *
 * 覆盖:faqs(可见)+ ui(交互界面)+ useCases(Common uses)+ formula(公式区)。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'A = P × (1 + r/n)^(n·t) + PMT × [((1 + r/n)^(n·t) − 1) / (r/n)]'

export const compoundInterestCalculatorL10n: ToolL10n = {


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
        'Interés compuesto (valor futuro). P = capital inicial, PMT = aportación periódica, r = tasa anual, n = periodos de capitalización por año, t = años. A es el saldo total al final: el primer término hace crecer el capital y el segundo es el valor futuro de las aportaciones.',
    },
    ui: {
      errNonNegative: 'Los valores no pueden ser negativos',
      'in.principal': 'Inversión inicial',
      'inSuffix.monthly': '$',
      'inSuffix.principal': '$',
      'inSuffix.rate': '%',
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
      chartTitleGrowth: 'Crecimiento en el tiempo',
      'preset.0': 'Índice S&P 500 (10%)',
      'preset.1': 'Ahorro de alto rendimiento (4.5%)',
      'preset.2': 'Bono conservador (4%)',
      'line.contributed': 'Tu aportación',
      'line.balance': 'Saldo total',
      'band.contributed-balance': 'Interés generado',
      'line.balanceLate': 'Empezar 10 años después',
      chartTitleCompare: 'Empezar ahora vs esperar 10 años',
      'cmp.0': 'Empezar ahora',
      'cmp.1': 'Esperar 10 años',
      'cmpseg.0': 'Tu aportación',
      'cmpseg.1': 'Interés generado',
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
        a: 'Zinsen aus einem normalen Spar- oder Depotkonto werden im Entstehungsjahr als ordentliches Einkommen versteuert, was den Zinseszins verlangsamt. Steuervorteilhafte Konten (IRA, 401k, HSA) lassen Zinsen steuerfrei oder steuerlich aufgeschoben wachsen — ein Hauptgrund, warum sie über Jahrzehnte besser abschneiden.',
      },
      {
        q: 'Enthält dieser Rechner regelmäßige Einzahlungen?',
        a: 'Ja. Du kannst eine monatliche Einzahlung eingeben, die zusätzlich zur Ersteinlage mit der Formel für den zukünftigen Rentenwert berechnet wird. Das spiegelt wider, wie die meisten Menschen tatsächlich sparen: kleine Beträge, die über viele Jahre beständig hinzukommen.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Zinseszins (zukünftiger Wert). P = Anfangseinlage, PMT = regelmäßige Einzahlung pro Zinsperiode, r = Jahreszinssatz, n = Zinsperioden pro Jahr, t = Jahre. A ist der Gesamtsaldo am Ende: Der erste Term lässt die Einlage wachsen, der zweite ist der zukünftige Wert der Einzahlungen.',
    },
    ui: {
      errNonNegative: 'Werte dürfen nicht negativ sein',
      'in.principal': 'Ersteinlage',
      'inSuffix.monthly': '$',
      'inSuffix.principal': '$',
      'inSuffix.rate': '%',
      'in.monthly': 'Monatliche Einzahlung',
      'in.rate': 'Jahreszinssatz',
      'in.years': 'Jahre',
      'out.futureValue': 'Zukünftiger Wert',
      'out.totalContributed': 'Deine Einzahlung',
      'out.interestEarned': 'Erzielter Zins',
      'outSub.interestEarned': 'Zinseszinzwachstum',
      note: '📈 Zinseszins ist „Zins auf Zins“ — je länger dein Anlagehorizont, desto dramatischer das Wachstum. Früh zu beginnen ist wichtiger als mit viel zu beginnen.',
      chartTitle: 'Deine Einzahlungen vs. Zinseszinzwachstum',
      chartCenter: 'Zukünftiger Wert',
      'slice.totalContributed': 'Von dir eingezahlt',
      'slice.interestEarned': 'Zins (gratis Geld)',
      chartTitleGrowth: 'Wachstum über die Zeit',
      'preset.0': 'S&P-500-Index (10 %)',
      'preset.1': 'Tagesgeld (4.5 %)',
      'preset.2': 'Konservative Anleihe (4 %)',
      'line.contributed': 'Eigene Einzahlung',
      'line.balance': 'Gesamtsaldo',
      'band.contributed-balance': 'Erzielte Zinsen',
      'line.balanceLate': '10 Jahre später anfangen',
      chartTitleCompare: 'Jetzt starten vs 10 Jahre warten',
      'cmp.0': 'Jetzt starten',
      'cmp.1': '10 Jahre warten',
      'cmpseg.0': 'Eigene Einzahlung',
      'cmpseg.1': 'Erzielte Zinsen',
    },
  },
}
