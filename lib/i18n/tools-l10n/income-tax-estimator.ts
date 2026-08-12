/**
 * income-tax-estimator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const incomeTaxEstimatorL10n: ToolL10n = {
  zh: {
    useCases: ['用 2024 美国联邦税率档估算所得税', '算到手工资(effective + marginal rate)', '比较单身 vs 已婚联合申报的税额', '看自己处于哪个税率档'],
    faqs: [
      { q: '为什么工资条上预扣的税更多?', a: '雇主按你预计的年度税款加上一个安全余量来预扣。预扣是估算;你的实际税款在报税时结算。多预了就会退税。' },
    ],
    ui: {
      inputs: '输入', 'in.income': '年收入', 'in.filing': '申报身份',
      'opt.filing.single': '单身', 'opt.filing.married': '已婚,联合申报',
      'out.tax': '预估联邦税', 'out.effective': '实际税率', 'out.takehome': '预估到手收入',
      note: '📊 简化的美国 2024 联邦税率档。未含州税、各项扣除和抵免。仅供参考。',
      chartTitle: '你的收入去了哪里', chartCenter: '收入', 'slice.tax': '联邦税', 'slice.takehome': '到手收入',
      summaryTitle: '计算摘要', inputsLabel: '输入:', resultsLabel: '结果:', copySummary: '复制摘要', csvField: '字段', csvType: '类型', csvValue: '数值', csvInput: '输入', csvResult: '结果',
    },
  },
  es: {
    useCases: ['estimar el impuesto sobre la renta con los tramos federales de EE. UU. 2024', 'calcular la renta neta (tipo efectivo y marginal)', 'comparar el impuesto entre declaración única y conjunta', 'ver en qué tramo impositivo estás'],
    faqs: [
      { q: '¿Por qué mi nómina muestra más impuesto retenido?', a: 'Los empleadores retienen según tu impuesto anual previsto más un margen de seguridad. Las retenciones son estimaciones; tu impuesto real se ajusta al declarar. Si pagaste de más, recibes un reembolso.' },
    ],
    ui: {
      inputs: 'Entradas', 'in.income': 'Ingresos anuales', 'in.filing': 'Estado civil',
      'opt.filing.single': 'Soltero', 'opt.filing.married': 'Casado, declaración conjunta',
      'out.tax': 'Impuesto federal estimado', 'out.effective': 'Tipo efectivo', 'out.takehome': 'Renta neta estimada',
      note: '📊 Tramos federales EE. UU. 2024 simplificados. Sin impuesto estatal, deducciones ni créditos. Solo estimación.',
      chartTitle: 'A dónde va tu ingreso', chartCenter: 'Ingreso', 'slice.tax': 'Impuesto federal', 'slice.takehome': 'Renta neta',
      summaryTitle: 'Resumen del cálculo', inputsLabel: 'Entradas:', resultsLabel: 'Resultados:', copySummary: 'Copiar resumen', csvField: 'Campo', csvType: 'Tipo', csvValue: 'Valor', csvInput: 'Entrada', csvResult: 'Resultado',
    },
  },
  de: {
    useCases: ['die Einkommensteuer mit den US-Bundestranchen 2024 schätzen', 'das Nettoeinkommen berechnen (effektiver + Grenzsteuersatz)', 'die Steuer zwischen Alleinveranlagung und Zusammenveranlagung vergleichen', 'sehen, in welcher Steuertranche du bist'],
    faqs: [
      { q: 'Warum zeigt meine Lohnabrechnung mehr einbehaltene Steuer?', a: 'Argeber behalten nach deiner voraussichtlichen Jahressteuer plus einer Sicherheitsmarge ein. Die Einbehalte sind Schätzungen; deine tatsächliche Steuer wird bei der Steuererklärung verrechnet. Zu viel gezahlt führt zu einer Rückerstattung.' },
    ],
    ui: {
      inputs: 'Eingaben', 'in.income': 'Jahreseinkommen', 'in.filing': 'Steuerklasse',
      'opt.filing.single': 'Allein', 'opt.filing.married': 'Verheiratet, gemeinsam',
      'out.tax': 'Geschätzte Bundessteuer', 'out.effective': 'Effektivsteuersatz', 'out.takehome': 'Geschätztes Netto',
      note: '📊 Vereinfachte US-Bundestranchen 2024. Ohne Steuer des Bundesstaates, Abzüge und Freibeträge. Nur Schätzung.',
      chartTitle: 'Wohin dein Einkommen geht', chartCenter: 'Einkommen', 'slice.tax': 'Bundessteuer', 'slice.takehome': 'Nettoeinkommen',
      summaryTitle: 'Zusammenfassung der Berechnung', inputsLabel: 'Eingaben:', resultsLabel: 'Ergebnis:', copySummary: 'Zusammenfassung kopieren', csvField: 'Feld', csvType: 'Typ', csvValue: 'Wert', csvInput: 'Eingabe', csvResult: 'Ergebnis',
    },
  },
}
