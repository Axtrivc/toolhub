/**
 * credit-card-payoff-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const creditCardPayoffCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'months = − ln( 1 − r·B / PMT ) / ln(1 + r)',
      explain: 'Meses para saldar el saldo B con un pago fijo PMT al interés mensual r. Pagos mayores acortan mucho el plazo porque se acumulan menos intereses cada mes.',
    },
    useCases: ['ver cuánto tardas en pagar la tarjeta', 'calcular cuánto interés pagarás al saldarla', 'comparar el plazo con distintos pagos mensuales', 'decidir entre método avalancha o bola de nieve'],
    faqs: [
      { q: '¿Y si mi pago es menor que el interés mensual?', a: 'La calculadora te avisará. Si tu pago solo cubre el interés (o menos), el saldo nunca baja — podrías pagar para siempre sin avanzar. Debes pagar más que el interés mensual. Por ejemplo, en $5,000 al 22 % APR, el interés mensual es de unos $92; cualquier pago por encima de $92 empieza a reducir el principal.' },
      { q: '¿Ayudan los pagos quincenales?', a: 'Sí. Dividir el pago mensual en dos y pagar cada dos semanas suma 26 medios pagos al año — el equivalente a un pago mensual extra. En una tarjeta, también reduce un poco tu saldo diario medio, bajando el interés. La combinación puede recortar meses al plazo.' },
      { q: '¿Cómo se calcula el pago mínimo?', a: 'Varía por emisor, pero suele ser el mayor de: un importe fijo (p. ej. $25-35), o el 1-3 % de tu saldo más intereses y comisiones. Algunos incluyen también montos sobre el límite o atrasos. Revisa tu acuerdo de tarjeta para la fórmula exacta — determina lo lento que se te permite pagar.' },
      { q: '¿Pagar la tarjeta perjudica mi puntuación de crédito?', a: 'No — saldar la deuda de la tarjeta suele ayudar. Un factor clave es la utilización del crédito (saldo entre límite). Mantenerla por debajo del 30 %, idealmente del 10 %, mejora la puntuación. Reducir saldos baja la utilización. Conserva la tarjeta abierta tras saldarla para preservar el crédito disponible y la antigüedad de la cuenta.' },
    ],
    ui: {
      errPaymentTooLow: 'El pago es demasiado bajo (debe cubrir los intereses)',
      errNonNegative: 'El saldo, la tasa anual y el pago mensual no pueden ser negativos',
      errNotPaidOff: 'No se paga en 100 años con este pago',
      monthsOne: '1 mes',
      monthsN: '{m} meses',
      yrOne: '1 año',
      yrsN: '{y} años',
      monthsYrs: '{m} meses ({y})',
      'in.balance': 'Saldo actual', 'in.apr': 'Tasa anual (APR)', 'in.payment': 'Pago mensual',
      'out.months': 'Tiempo hasta saldar', 'out.total': 'Total pagado', 'out.interest': 'Interés total',
      note: '💳 Los pagos mínimos pueden tardar décadas. Pagar más del mínimo ahorra muchísimo interés.',
      chartTitle: 'Total pagado: principal vs interés', chartCenter: 'Total', 'slice.principal': 'Principal (lo que pediste prestado)', 'slice.interest': 'Interés (coste de la deuda)',
      chartTitleBalance: 'Saldo mientras lo amortizas',
      'line.balance': 'Saldo pendiente',
    },
  },
  de: {
    formula: {
      formula: 'months = − ln( 1 − r·B / PMT ) / ln(1 + r)',
      explain: 'Monate, um den Saldo B mit fester Rate PMT bei monatlichem Zins r zu tilgen. Höhere Raten verkürzen die Zeit deutlich, da jeden Monat weniger Zinsen anfallen.',
    },
    useCases: ['sehen, wie lange die Kartenschuld noch läuft', 'berechnen, wie viel Zins bis zur Tilgung anfallen', 'die Laufzeit bei verschiedenen monatlichen Raten vergleichen', 'zwischen Lawinen- und Schneeballmethode wählen'],
    faqs: [
      { q: 'Was, wenn meine Rate unter den Monatszinsen liegt?', a: 'Der Rechner warnt dich. Wenn deine Zahlung nur die Zinsen (oder weniger) deckt, sinkt der Saldo nie — du könntest ewig zahlen, ohne Fortschritt. Du musst mehr als die monatlichen Zinsen zahlen. Bei $5,000 und 22 % APR sind die Monatszinsen etwa $92; jede Zahlung über $92 beginnt, die Kreditsumme zu tilgen.' },
      { q: 'Helfen vierzehntägige Zahlungen?', a: 'Ja. Die Monatsrate halbieren und alle zwei Wochen zahlen ergibt 26 Halbraten pro Jahr — das Äquivalent einer zusätzlichen Monatsrate. Bei einer Karte senkt das auch leicht deinen durchschnittlichen Tagessaldo und damit die Zinsen. Beides zusammen kann die Tilgung um Monate verkürzen.' },
      { q: 'Wie wird die Mindestrate berechnet?', a: 'Das variiert je nach Aussteller, ist aber üblicherweise der höhere Wert von: einem Festbetrag (z. B. $25-35) oder 1-3 % deines Saldos plus Zinsen und Gebühren. Manche zählen auch Beträge über dem Limit oder Rückstände dazu. Schau in deine Kartenvereinbarung für die genaue Formel — sie bestimmt, wie langsam du zurückzahlen darfst.' },
      { q: 'Schadet das Tilgen meiner Karte meinem Kredit-Score?', a: 'Nein — Kreditkartenschulden zu tilgen hilft deinem Score meist. Ein Hauptfaktor ist die Kreditnutzung (Saldo geteilt durch Limit). Unter 30 %, idealerweise unter 10 %, verbessert das den Score. Salden abbauen senkt die Nutzung. Behalte die Karte nach dem Tilgen offen, um verfügbaren Kredit und Kontoalter zu erhalten.' },
    ],
    ui: {
      errPaymentTooLow: 'Die Rate ist zu niedrig (sie muss die Zinsen decken)',
      errNonNegative: 'Saldo, Jahressatz und monatliche Rate dürfen nicht negativ sein',
      errNotPaidOff: 'Mit dieser Rate wird er in 100 Jahren nicht getilgt',
      monthsOne: '1 Monat',
      monthsN: '{m} Monate',
      yrOne: '1 Jahr',
      yrsN: '{y} Jahre',
      monthsYrs: '{m} Monate ({y})',
      'in.balance': 'Aktueller Saldo', 'in.apr': 'Jahressatz (APR)', 'in.payment': 'Monatliche Rate',
      'out.months': 'Zeit bis zur Tilgung', 'out.total': 'Insgesamt gezahlt', 'out.interest': 'Zinsen gesamt',
      note: '💳 Mindestraten können Jahrzehnte dauern. Mehr als das Minimum zu zahlen, spart dramatisch Zinsen.',
      chartTitle: 'Gesamt gezahlt: Tilgung vs. Zinsen', chartCenter: 'Gesamt', 'slice.principal': 'Tilgung (was du geliehen hast)', 'slice.interest': 'Zinsen (Kosten des Kredits)',
      chartTitleBalance: 'Restschuld beim Tilgen',
      'line.balance': 'Verbleibende Schuld',
    },
  },
}
