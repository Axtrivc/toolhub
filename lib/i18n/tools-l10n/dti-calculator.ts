/**
 * dti-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases（无 formula 条目）
 */
import type { ToolL10n } from '../tool-l10n'

export const dtiCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'DTI = ( total monthly debt / gross monthly income ) × 100%',
      explain: '负债收入比。把房贷、车贷、学贷、最低卡还款加上新贷款的月供,除以税前月收入。贷款方通常要求低于 36–43%。',
    },
    useCases: ['算房贷审批用的 DTI', '算负债收入比', '查 43% DTI 规则', '算前端/后端 DTI'],
    faqs: [
      { q: '怎么降低 DTI?', a: '还掉现有债务（尤其是高息的），提高收入，或申请新贷款前避免新增负债。还清一张信用卡可能在一个账单周期内就拉低 DTI。' },
    ],
    ui: {
      errIncome: '请输入您的月收入',
      verdictHealthy: '✓ 健康 — 多数贷款机构会批准',
      verdictTight: '⚠️ 偏高 — 已达多数贷款机构上限',
      verdictHigh: '✗ 过高 — 很可能被拒',
      'in.income': '月总收入', 'in.debts': '月债务还款',
      'out.dti': '负债收入比', 'out.max': '最大月供（28% 法则）', 'out.verdict': '贷款机构评估',
      note: '🏦 DTI 是贷款机构审批贷款资格的核心指标。低于 36% 健康，43% 通常是房贷上限。',
    },
  },
  es: {
    formula: {
      formula: 'DTI = ( total monthly debt / gross monthly income ) × 100%',
      explain: 'Ratio deuda/ingresos. Suma vivienda, coche, estudios, pago mínimo de tarjetas y el nuevo préstamo, dividido entre los ingresos brutos mensuales. Los prestamistas suelen pedir < 36–43%.',
    },
    useCases: ['calcular el DTI para hipoteca', 'calcular la ratio deuda-ingresos', 'verificar la regla del 43 % de DTI', 'calcular el DTI inicial y final'],
    faqs: [
      { q: '¿Cómo puedo bajar mi DTI?', a: 'Reduce las deudas existentes (sobre todo las de alto interés), aumenta tus ingresos o evita nuevas deudas antes de solicitar. Saldar una tarjeta de crédito puede bajar tu DTI en un solo ciclo de facturación.' },
    ],
    ui: {
      errIncome: 'Introduce tus ingresos mensuales',
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
      explain: 'Schulden-Einkommens-Verhältnis. Umfasse Wohnen, Auto, Studium, minimale Kartenraten plus den neuen Kredit, geteilt durch das brutto Monats­einkommen. Geldgeber wollen meist < 36–43%.',
    },
    useCases: ['die DTI für Hypothekengenehmigung berechnen', 'die Schulden-Einkommens-Quote berechnen', 'die 43 %-DTI-Regel prüfen', 'Front-End-/Back-End-DTI berechnen'],
    faqs: [
      { q: 'Wie kann ich meine DTI senken?', a: 'Bestehende Schulden abbauen (besonders hochverzinsliche), Einkommen erhöhen oder vor der Antragstellung neue Schulden vermeiden. Eine Kreditkarte zu tilgen kann deine DTI innerhalb eines Abrechnungszyklus senken.' },
    ],
    ui: {
      errIncome: 'Gib dein Monatseinkommen ein',
      verdictHealthy: '✓ Gesund — die meisten Kreditgeber stimmen zu',
      verdictTight: '⚠️ Knapp — das Maximum der meisten Kreditgeber',
      verdictHigh: '✗ Hoch — Ablehnung wahrscheinlich',
      'in.income': 'Monatliches Bruttoeinkommen', 'in.debts': 'Monatliche Schuldentilgung',
      'out.dti': 'Schulden-Einkommens-Quote', 'out.max': 'Max. Rate (28 %-Regel)', 'out.verdict': 'Kreditgeber-Einschätzung',
      note: '🏦 Die DTI ist das Hauptkriterium der Kreditgeber. Unter 36 % ist gesund, 43 % ist meist das Maximum für Hypotheken.',
    },
  },
}
