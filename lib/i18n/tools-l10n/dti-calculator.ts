/**
 * dti-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases（无 formula 条目）
 */
import type { ToolL10n } from '../tool-l10n'

export const dtiCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'DTI = ( total monthly debt / gross monthly income ) × 100%',
      explain: 'Ratio deuda/ingresos. Suma vivienda, coche, estudios, pago mínimo de tarjetas y el nuevo préstamo, dividido entre los ingresos brutos mensuales. Los prestamistas suelen querer esta cifra por debajo del 36–43 %.',
    },
    useCases: ['calcular el DTI para hipoteca', 'calcular la ratio deuda-ingresos', 'verificar la regla del 43 % de DTI', 'calcular el DTI inicial y final'],
    faqs: [
      { q: '¿Cómo puedo bajar mi DTI?', a: 'Reduce las deudas existentes (sobre todo las de alto interés), aumenta tus ingresos o evita nuevas deudas antes de solicitar. Saldar una tarjeta de crédito puede bajar tu DTI en un solo ciclo de facturación.' },
    ],
    ui: {
      'chartTitle': 'Salud de la relación deuda/ingresos',
      'zone.0': 'Saludable',
      'zone.1': 'Justo',
      'zone.2': 'Alto',
      'zone.3': 'Probablemente rechazado',
      errIncome: 'Introduce tus ingresos mensuales',
      errNonNegative: 'Los valores no pueden ser negativos',
      verdictHealthy: '✓ Saludable — la mayoría de prestamistas lo aprueba',
      verdictTight: '⚠️ Justo — el máximo que permiten la mayoría de prestamistas',
      verdictHigh: '✗ Alto — probablemente será denegado',
      'in.income': 'Ingresos brutos mensuales', 'in.debts': 'Pagos mensuales de deudas',
      'out.dti': 'Ratio deuda-ingresos', 'out.max': 'Pago máximo (regla del 28 %)', 'out.verdict': 'Evaluación del prestamista',
      note: '🏦 El DTI es lo que los prestamistas usan para evaluar la solvencia. Por debajo del 36 % es saludable; el 43 % suele ser el máximo para hipotecas.',
    },
  },
  de: {
    formula: {
      formula: 'DTI = ( total monthly debt / gross monthly income ) × 100%',
      explain: 'Schulden-Einkommens-Verhältnis. Summe aus Wohnen, Auto, Studium, minimalen Kartenraten und dem neuen Kredit, geteilt durch das brutto Monatseinkommen. Kreditgeber wollen meist Werte unter 36–43 %.',
    },
    useCases: ['die DTI für Hypothekengenehmigung berechnen', 'die Schulden-Einkommens-Quote berechnen', 'die 43 %-DTI-Regel prüfen', 'Front-End-/Back-End-DTI berechnen'],
    faqs: [
      { q: 'Wie kann ich meine DTI senken?', a: 'Bestehende Schulden abbauen (besonders hochverzinsliche), Einkommen erhöhen oder vor der Antragstellung neue Schulden vermeiden. Eine Kreditkarte zu tilgen kann deine DTI innerhalb eines Abrechnungszyklus senken.' },
    ],
    ui: {
      'chartTitle': 'Bewertung der Schulden-Einkommens-Quote',
      'zone.0': 'Gesund',
      'zone.1': 'Knapp',
      'zone.2': 'Hoch',
      'zone.3': 'Wahrscheinlich abgelehnt',
      errIncome: 'Gib dein Monatseinkommen ein',
      errNonNegative: 'Werte dürfen nicht negativ sein',
      verdictHealthy: '✓ Gesund — die meisten Kreditgeber genehmigen den Kredit',
      verdictTight: '⚠️ Knapp — das Maximum der meisten Kreditgeber',
      verdictHigh: '✗ Hoch — Ablehnung wahrscheinlich',
      'in.income': 'Monatliches Bruttoeinkommen', 'in.debts': 'Monatliche Schuldentilgung',
      'out.dti': 'Schulden-Einkommens-Quote', 'out.max': 'Max. Rate (28 %-Regel)', 'out.verdict': 'Kreditgeber-Einschätzung',
      note: '🏦 Die DTI ist das Hauptkriterium der Kreditgeber. Unter 36 % gilt sie als gesund, 43 % sind meist das Maximum für Hypotheken.',
    },
  },
}
