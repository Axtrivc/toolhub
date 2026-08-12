/**
 * dti-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases（无 formula 条目）
 */
import type { ToolL10n } from '../tool-l10n'

export const dtiCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['算房贷审批用的 DTI', '算负债收入比', '查 43% DTI 规则', '算前端/后端 DTI'],
    faqs: [
      { q: '怎么降低 DTI?', a: '还掉现有债务（尤其是高息的），提高收入，或申请新贷款前避免新增负债。还清一张信用卡可能在一个账单周期内就拉低 DTI。' },
    ],
    ui: {
      inputs: '输入', 'in.income': '月总收入', 'in.debts': '月债务还款',
      'out.dti': '负债收入比', 'out.max': '最大月供（28% 法则）', 'out.verdict': '贷款机构评估',
      note: '🏦 DTI 是贷款机构审批贷款资格的核心指标。低于 36% 健康，43% 通常是房贷上限。',
      summaryTitle: '计算摘要', inputsLabel: '输入:', resultsLabel: '结果:', copySummary: '复制摘要', csvField: '字段', csvType: '类型', csvValue: '数值', csvInput: '输入', csvResult: '结果',
    },
  },
  es: {
    useCases: ['calcular el DTI para hipoteca', 'calcular la ratio deuda-ingresos', 'verificar la regla del 43 % de DTI', 'calcular el DTI inicial y final'],
    faqs: [
      { q: '¿Cómo puedo bajar mi DTI?', a: 'Reduce las deudas existentes (sobre todo las de alto interés), aumenta tus ingresos o evita nuevas deudas antes de solicitar. Saldar una tarjeta de crédito puede bajar tu DTI en un solo ciclo de facturación.' },
    ],
    ui: {
      inputs: 'Entradas', 'in.income': 'Ingresos brutos mensuales', 'in.debts': 'Pagos mensuales de deudas',
      'out.dti': 'Ratio deuda-ingresos', 'out.max': 'Pago máximo (regla del 28 %)', 'out.verdict': 'Evaluación del prestamista',
      note: '🏦 El DTI es lo que los prestamistas usan para evaluar la solvencia. Por debajo del 36 % es saludable; el 43 % suele ser el máximo para hipotecas.',
      summaryTitle: 'Resumen del cálculo', inputsLabel: 'Entradas:', resultsLabel: 'Resultados:', copySummary: 'Copiar resumen', csvField: 'Campo', csvType: 'Tipo', csvValue: 'Valor', csvInput: 'Entrada', csvResult: 'Resultado',
    },
  },
  de: {
    useCases: ['die DTI für Hypothekengenehmigung berechnen', 'die Schulden-Einkommens-Quote berechnen', 'die 43 %-DTI-Regel prüfen', 'Front-End-/Back-End-DTI berechnen'],
    faqs: [
      { q: 'Wie kann ich meine DTI senken?', a: 'Bestehende Schulden abbauen (besonders hochverzinsliche), Einkommen erhöhen oder vor der Antragstellung neue Schulden vermeiden. Eine Kreditkarte zu tilgen kann deine DTI innerhalb eines Abrechnungszyklus senken.' },
    ],
    ui: {
      inputs: 'Eingaben', 'in.income': 'Monatliches Bruttoeinkommen', 'in.debts': 'Monatliche Schuldentilgung',
      'out.dti': 'Schulden-Einkommens-Quote', 'out.max': 'Max. Rate (28 %-Regel)', 'out.verdict': 'Kreditgeber-Einschätzung',
      note: '🏦 Die DTI ist das Hauptkriterium der Kreditgeber. Unter 36 % ist gesund, 43 % ist meist das Maximum für Hypotheken.',
      summaryTitle: 'Zusammenfassung der Berechnung', inputsLabel: 'Eingaben:', resultsLabel: 'Ergebnis:', copySummary: 'Zusammenfassung kopieren', csvField: 'Feld', csvType: 'Typ', csvValue: 'Wert', csvInput: 'Eingabe', csvResult: 'Ergebnis',
    },
  },
}
