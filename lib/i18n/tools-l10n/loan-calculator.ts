/**
 * loan-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts、
 * LoanCalculatorClient 里的英文 fallback、content.tsx 的 en 分支)。
 *
 * 覆盖:faqs(可见)+ ui(交互界面)+ useCases(Common uses)+ formula(公式区)。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]'

export const loanCalculatorL10n: ToolL10n = {


  // ──────────────────────────── Español ────────────────────────────
  es: {
    useCases: [
      'ver un simulador de préstamo con tabla de amortización',
      'calcular el pago mensual de un préstamo personal',
      'simular la amortización de un préstamo de coche',
      'comparar planes de pago según el tipo de préstamo',
    ],
    faqs: [
      {
        q: '¿Esta calculadora incluye impuestos y seguro?',
        a: 'No. Calcula solo capital e intereses. En una hipoteca real también pagarás impuestos sobre la propiedad, seguro del hogar y posiblemente PMI o cuotas de la comunidad; pueden sumar cientos de dólares al pago mensual.',
      },
      {
        q: '¿Qué es la amortización?',
        a: 'La amortización es el proceso de devolver un préstamo en cuotas iguales. Cada pago se reparte entre intereses (el coste de pedir prestado) y capital (reducir lo que debes). La tabla anterior muestra cómo evoluciona ese reparto a lo largo del tiempo.',
      },
      {
        q: '¿Qué tasa de interés es buena?',
        a: 'Depende del tipo de préstamo y de tu crédito. En los últimos años las hipotecas han oscilado del 3 % al 7 %+, los préstamos de coche del 4 % al 10 % y los personales del 6 % al 36 %. Cuanto mejor sea tu crédito, más baja será la tasa que consigas.',
      },
    ],
    formula: {
      formula: FORMULA,
      variables:
        'M = Pago mensual fijo ($)\nP = Capital del préstamo ($)\nr = Tasa de interés mensual (tasa anual ÷ 12, en decimal)\nn = Número total de pagos mensuales',
      explain:
        'Pago mensual de amortización constante. P = capital, r = tasa mensual (anual ÷ 12), n = número total de meses. El resultado M es el pago mensual fijo.',
      example:
        'Paso 1: P = 20 000 $, tasa anual del 7 % → r = 0,07 / 12 = 0,0058333, n = 5 × 12 = 60 meses.\nPaso 2: (1 + r)^n = 1,0058333^60 ≈ 1,4176.\nPaso 3: numerador = 0,0058333 × 1,4176 ≈ 0,0082695; denominador = 1,4176 − 1 = 0,4176.\nPaso 4: M = 20 000 × 0,0082695 / 0,4176 ≈ 396 $.\nResultado: el pago mensual fijo ronda los 396 $ — unos 23 760 $ en total por los 60 pagos, de los que unos 3 760 $ son intereses.',
    },
    ui: {
      inputs: 'Entradas',
      loanAmount: 'Importe del préstamo',
      annualRate: 'Tasa de interés anual',
      loanTerm: 'Plazo del préstamo',
      yearsSuffix: 'años',
      months: 'meses',
      monthlyPayment: 'Pago mensual',
      totalInterestPaid: 'Intereses totales',
      overMonths: 'Durante {n} meses',
      totalPaid: 'Total pagado',
      principalPlusInterest: 'Capital + intereses',
      amortTitle: 'Tabla de amortización ',
      chartTitleBalance: 'Saldo del préstamo en el tiempo',
      'preset.0': 'Préstamo personal ($10k al 9%)',
      'preset.1': 'Consolidar deuda ($25k al 7%)',
      'preset.2': 'Coche ($25k al 7.5%)',
      'preset.3': 'Hipoteca ($320k al 6.8%)',
      lineBalance: 'Saldo pendiente',
      optAll: 'todos ',
      first12Months: 'primeros 12 meses',
      showAll: 'Mostrar los ',
      showFirst12: 'Mostrar primeros 12',
      errNegativeRate: 'La tasa de interés no puede ser negativa — introduce un 0% o más.',
      errTermTooLong: 'El plazo del préstamo es demasiado largo — 50 años (600 meses) como máximo.',
      summaryErrorPrefix: 'Calculadora de préstamos: ',
      thMonth: 'Mes',
      thPayment: 'Pago',
      thPrincipal: 'Capital',
      thInterest: 'Interés',
      thBalance: 'Saldo',
      emptyState: 'Introduce el importe, la tasa y el plazo del préstamo para ver tu pago mensual',
      noteText:
        '💰 Esta calculadora usa la fórmula estándar de amortización (cuotas mensuales iguales). Las tasas mostradas son estimaciones; tu tasa real depende de tu crédito, el prestamista y el tipo de préstamo.',
      summaryEmpty: 'Introduce el importe, la tasa y el plazo del préstamo para ver tu pago mensual.',
      summaryTitle: 'Resumen del cálculo del préstamo',
      sLoanAmount: 'Importe del préstamo:',
      sAnnualRate: 'Tasa anual:',
      sTerm: 'Plazo:',
      sResults: 'Resultados:',
      sMonthlyPayment: 'Pago mensual:',
      sTotalInterest: 'Intereses totales:',
      sTotalPaid: 'Total pagado:',
      csvField: 'Campo',
      csvValue: 'Valor',
      csvLoanAmount: 'Importe del préstamo',
      csvAnnualRate: 'Tasa anual',
      csvTermYears: 'Plazo (años)',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    useCases: [
      'einen Kreditrechner mit Tilgungsplan anzeigen',
      'die monatliche Rate für einen Privatkredit berechnen',
      'die Tilgung eines Autokredits durchrechnen',
      'Rückzahlpläne nach Kreditart vergleichen',
    ],
    faqs: [
      {
        q: 'Enthält dieser Rechner Steuern und Versicherungen?',
        a: 'Nein. Er berechnet nur Zins und Tilgung. Bei einer echten Hypothek zahlst du zusätzlich Grundsteuer, Wohngebäudeversicherung und eventuell PMI oder Hausgeld — das kann die monatliche Rate um Hunderte Dollar erhöhen.',
      },
      {
        q: 'Was ist Tilgung?',
        a: 'Tilgung ist der Prozess, einen Kredit in gleichen Raten zurückzuzahlen. Jede Rate teilt sich in Zinsen (die Kosten des Kredits) und Tilgung (Reduktion der Schuld). Der Plan oben zeigt, wie sich diese Aufteilung über die Zeit entwickelt.',
      },
      {
        q: 'Was ist ein guter Zinssatz?',
        a: 'Das hängt von der Kreditart und deiner Bonität ab. In den letzten Jahren lagen Hypothekenzinsen zwischen 3 % und 7 %+, Autokredite zwischen 4 % und 10 %, Privatkredite zwischen 6 % und 36 %. Je besser deine Bonität, desto niedriger der Zins, den du bekommst.',
      },
    ],
    formula: {
      formula: FORMULA,
      variables:
        'M = feste monatliche Rate ($)\nP = Kreditbetrag ($)\nr = monatlicher Zinssatz (Jahreszins ÷ 12, als Dezimalzahl)\nn = Gesamtzahl der Monatsraten',
      explain:
        'Annuitätentilgung (gleiche Monatsrate). P = Kreditbetrag, r = monatlicher Zins (Jahreszins ÷ 12), n = Gesamtmonate. Das Ergebnis M ist die feste monatliche Rate.',
      example:
        'Schritt 1: P = 20.000 $, Jahreszins 7 % → r = 0,07 / 12 = 0,0058333, n = 5 × 12 = 60 Monate.\nSchritt 2: (1 + r)^n = 1,0058333^60 ≈ 1,4176.\nSchritt 3: Zähler = 0,0058333 × 1,4176 ≈ 0,0082695; Nenner = 1,4176 − 1 = 0,4176.\nSchritt 4: M = 20.000 × 0,0082695 / 0,4176 ≈ 396 $.\nErgebnis: die feste monatliche Rate liegt bei etwa 396 $ — rund 23.760 $ über die 60 Raten, davon etwa 3.760 $ Zinsen.',
    },
    ui: {
      inputs: 'Eingaben',
      loanAmount: 'Kreditbetrag',
      annualRate: 'Jährlicher Zinssatz',
      loanTerm: 'Laufzeit',
      yearsSuffix: 'Jahre',
      months: 'Monate',
      monthlyPayment: 'Monatliche Rate',
      totalInterestPaid: 'Zinsen gesamt',
      overMonths: 'Über {n} Monate',
      totalPaid: 'Gesamtbetrag',
      principalPlusInterest: 'Kredit + Zinsen',
      amortTitle: 'Tilgungsplan ',
      chartTitleBalance: 'Kreditsaldo über die Zeit',
      'preset.0': 'Privatkredit (10 T$ / 9 %)',
      'preset.1': 'Umschuldung (25 T$ / 7 %)',
      'preset.2': 'Autokredit (25 T$ / 7.5 %)',
      'preset.3': 'Hypothek (320 T$ / 6.8 %)',
      lineBalance: 'Restschuld',
      optAll: 'alle ',
      first12Months: 'erste 12 Monate',
      showAll: 'Zeige alle ',
      showFirst12: 'Erste 12 anzeigen',
      errNegativeRate: 'Der Zinssatz darf nicht negativ sein — gib 0% oder mehr ein.',
      errTermTooLong: 'Die Laufzeit ist zu lang — maximal 50 Jahre (600 Monate).',
      summaryErrorPrefix: 'Kreditrechner: ',
      thMonth: 'Monat',
      thPayment: 'Rate',
      thPrincipal: 'Tilgung',
      thInterest: 'Zins',
      thBalance: 'Restschuld',
      emptyState: 'Kreditbetrag, Zinssatz und Laufzeit eingeben, um die monatliche Rate zu sehen',
      noteText:
        '💰 Dieser Rechner nutzt die Standard-Tilgungsformel (gleiche monatliche Raten). Gezeigte Zinsen sind Schätzwerte — dein tatsächlicher Zins hängt von Bonität, Kreditgeber und Kreditart ab.',
      summaryEmpty: 'Kreditbetrag, Zinssatz und Laufzeit eingeben, um deine monatliche Rate zu sehen.',
      summaryTitle: 'Zusammenfassung der Kreditberechnung',
      sLoanAmount: 'Kreditbetrag:',
      sAnnualRate: 'Jahreszins:',
      sTerm: 'Laufzeit:',
      sResults: 'Ergebnis:',
      sMonthlyPayment: 'Monatliche Rate:',
      sTotalInterest: 'Zinsen gesamt:',
      sTotalPaid: 'Gesamtbetrag:',
      csvField: 'Feld',
      csvValue: 'Wert',
      csvLoanAmount: 'Kreditbetrag',
      csvAnnualRate: 'Jahreszins',
      csvTermYears: 'Laufzeit (Jahre)',
    },
  },
}
