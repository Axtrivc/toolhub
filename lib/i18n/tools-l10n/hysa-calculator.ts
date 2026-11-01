/**
 * hysa-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts)。
 *
 * 覆盖:faqs(可见)+ useCases(Common uses)+ formula(公式区)。b00 新建,无 ui 块。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'FV = P × (1 + r/n)^(n·t) + PMT × [((1 + r/n)^(n·t) − 1) / (r/n)]'

export const hysaCalculatorL10n: ToolL10n = {



  // ──────────────────────────── Español ────────────────────────────
  es: {
    ui: {
      'in.initial': 'Depósito inicial',
      'in.monthly': 'Aportación mensual',
      'in.apy': 'APY (rendimiento anual)',
      'in.years': 'Plazo',
      'in.compound': 'Capitalización',
      'opt.compound.daily': 'Diaria (habitual en cuentas remuneradas)',
      'opt.compound.monthly': 'Mensual',
      'out.finalBalance': 'Saldo final acumulado',
      'out.totalInterest': 'Intereses ganados',
      'outSub.totalInterest': 'Rendimiento puro de la cuenta',
      'out.totalDeposited': 'Total aportado',
      'outSub.totalDeposited': 'Depósito inicial + aportaciones',
      'out.avgMonthlyInterest': 'Interés medio mensual',
      'preset.0': 'Fondo de emergencia (4,5% APY)',
      'preset.1': 'Ahorrador agresivo (5% APY)',
      'preset.2': 'Liquidez a corto plazo (3,5% APY)',
      'errInvalid': 'Introduce importes no negativos válidos',
      'errYears': 'Los años deben ser mayores que 0',
      'inSuffix.initial': '$',
      'inSuffix.monthly': '$',
      'inSuffix.apy': '%',
      'inSuffix.years': 'años',
      'chartTitle': 'Saldo: aportaciones vs intereses',
      'chartCenter': 'Final',
      'chartTitleGrowth': 'Crecimiento de la cuenta',
      'slice.totalDeposited': 'Aportado (principal)',
      'slice.totalInterest': 'Intereses ganados',
      'line.balance': 'Saldo de la cuenta',
      'line.deposited': 'Total aportado',
      'band.deposited-balance': 'Interés compuesto',
      'note': '🏦 La mayoría de cuentas de ahorro de alto rendimiento capitalizan a diario y abonan los intereses cada mes. Los tipos son variables: esta proyección asume que la TAE se mantiene constante, así que tómala como una estimación para planificar, no como una garantía.',
    },
    useCases: [
      'comparar dos cuentas al 4,25 % y 3,8 % de TAE: 10.000 € más 300 € al mes, unos 130 € extra de intereses en dos años',
      'ver qué rinde el colchón de emergencia: 6 meses de gastos (5.000 €) al 4 % durante tres años generan unos 640 €',
      'meter el impuesto en la ecuación: con el 19 %-28 % del IRPF, una TAE del 4,5 % queda entre el 3,2 % y el 3,6 % neto',
      'recalcular cuando el banco baja el tipo: del 5 % al 4 %, 20.000 € a cinco años dejan de ganar unos 1.250 €',
    ],
    faqs: [
      {
        q: '¿Cómo se calcula el interés de una cuenta remunerada?',
        a: 'La mayoría capitaliza a diario y abona cada mes: el saldo crece (1 + TAE/365)^365 al año. La calculadora convierte eso en un tipo mensual efectivo y proyecta el saldo incluyendo las aportaciones.',
      },
      {
        q: '¿Se tributa por los intereses?',
        a: 'Sí. En España tributan como rendimientos del capital mobiliario en el IRPF, del 19 % al 28 % por tramos, y la entidad retiene a cuenta; una TAE del 4,5 % deja en torno al 3,6 % neto en el tramo del 19 %.',
      },
      {
        q: '¿Y si el banco cambia la rentabilidad?',
        a: 'Las cuentas remuneradas tienen tipo variable y siguen los tipos del BCE. La proyección asume un tipo constante: lee los horizontes largos como estimación y recalcula cada vez que tu banco revise el tipo — con la herramienta son diez segundos.',
      },
      {
        q: '¿La TAE ya incluye la capitalización?',
        a: 'Sí: la TAE (Tasa Anual Equivalente) incorpora la capitalización de los intereses, igual que el APY estadounidense. No la confundas con el tipo nominal (TIN): un 4,40 % nominal con capitalización diaria equivale a una TAE cercana al 4,50 %.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Crecimiento de una cuenta remunerada. P = depósito inicial, PMT = aportación mensual, r = TAE en decimal, n = capitalizaciones por año (365 si es diaria), t = años. El primer término compone el principal; el segundo, la serie de aportaciones.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    ui: {
      'in.initial': 'Ersteinzahlung',
      'in.monthly': 'Monatliche Sparrate',
      'in.apy': 'APY (Jahresrendite)',
      'in.years': 'Anlagehorizont',
      'in.compound': 'Verzinsung',
      'opt.compound.daily': 'Täglich (typisch für Tagesgeld)',
      'opt.compound.monthly': 'Monatlich',
      'out.finalBalance': 'Endsaldo',
      'out.totalInterest': 'Erzielte Zinsen',
      'outSub.totalInterest': 'Reine Zinserträge',
      'out.totalDeposited': 'Eingezahltes Kapital',
      'outSub.totalDeposited': 'Ersteinzahlung + monatliche Raten',
      'out.avgMonthlyInterest': 'Durchschnittlicher Zins / Monat',
      'preset.0': 'Notgroschen (4,5% APY)',
      'preset.1': 'Offensives Sparen (5% APY)',
      'preset.2': 'Parkgeld (3,5% APY)',
      'errInvalid': 'Gültige nicht-negative Beträge eingeben',
      'errYears': 'Jahre müssen größer als 0 sein',
      'inSuffix.initial': '$',
      'inSuffix.monthly': '$',
      'inSuffix.apy': '%',
      'inSuffix.years': 'Jahre',
      'chartTitle': 'Saldo: Einzahlungen vs. Zinsen',
      'chartCenter': 'Ende',
      'chartTitleGrowth': 'Kontoentwicklung',
      'slice.totalDeposited': 'Eingezahlt (Kapital)',
      'slice.totalInterest': 'Erzielte Zinsen',
      'line.balance': 'Kontostand',
      'line.deposited': 'Eingezahlt gesamt',
      'band.deposited-balance': 'Zinseszins',
      'note': '🏦 Die meisten Tagesgeldkonten verzinsen das Guthaben täglich und schreiben die Zinsen monatlich gut. Die Zinssätze sind variabel — die Projektion geht von einem konstanten APY aus; als Planungsschätzung lesen, nicht als Garantie.',
    },
    useCases: [
      'zwei Tagesgeldkonten mit 4,25 % und 3,8 % APY vergleichen: 10.000 € plus 300 € monatlich, rund 130 € Zinsunterschied in zwei Jahren',
      'den Notgroschen verzinst planen: sechs Monatsausgaben (5.000 €) zu 4 % über drei Jahre bringen rund 640 € Zinsen',
      'die Steuer einpreisen: bei 26,375 % Abgeltungsteuer bringt eine APY von 4,5 % real rund 3,3 %',
      'nach Zinssenkung neu rechnen: sinkt der Satz von 5 % auf 4 %, verlieren 20.000 € in fünf Jahren rund 1.250 € Zinsen',
    ],
    faqs: [
      {
        q: 'Wie wird der Tagesgeld-Zins berechnet?',
        a: 'Die meisten Konten verzinsen täglich und schreiben monatlich gut: Das Guthaben wächst jedes Jahr um den Faktor (1 + APY/365)^365. Der Rechner übersetzt das in einen effektiven Monatssatz und projiziert den Saldo inklusive Einzahlungen.',
      },
      {
        q: 'Werden die Zinsen besteuert?',
        a: 'Ja — Zinsen unterliegen der Abgeltungsteuer: 25 % plus Solidaritätszuschlag = 26,375 %, zzgl. Kirchensteuer. Mit Freistellungsauftrag bleibt der Sparerpauschbetrag (1.000 €, Ehepaare 2.000 €) steuerfrei; ohne ihn wird ab dem ersten Euro besteuert.',
      },
      {
        q: 'Was, wenn die Bank den Zinssatz ändert?',
        a: 'Tagesgeldzinsen sind variabel und folgen der EZB. Die Projektion unterstellt einen konstanten Satz — lange Horizonte als Schätzung lesen und nach jeder Zinsänderung neu durchrechnen; mit dem Tool sind das zehn Sekunden.',
      },
      {
        q: 'Tagesgeld oder Festgeld?',
        a: 'Tagesgeld ist das deutsche Pendant zur HYSA — täglich verfügbar, variabel verzinst; Festgeld sperrt die Summe gegen einen festen Satz. Steigende Zinsen sprechen für Tagesgeld; wer den Spitzenzins über Jahre sichern will, staffelt mehrere Festgeld-Laufzeiten.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Wachstumsformel für Tagesgeld. P = Startkapital, PMT = Monatseinzahlung, r = APY als Dezimalzahl, n = Zinsperioden pro Jahr (365 bei täglicher Verzinsung), t = Jahre. Der erste Term verzinst das Startkapital, der zweite die Einzahlungsreihe.',
    },
  },
}
