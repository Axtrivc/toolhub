/**
 * commission-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases（无 formula 条目）
 */
import type { ToolL10n } from '../tool-l10n'

export const commissionCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['算带底薪的佣金收入', '按比例算销售佣金', '算佣金加底薪总收入', '算阶梯佣金'],
    faqs: [
      { q: '房产佣金怎么运作?', a: '总佣金通常为 6%，由买方经纪人（3%）和卖方经纪人（3%）分摊。每个经纪人再和所属中介分成——新经纪人常见五五分，资深经纪人条件更优。' },
    ],
    ui: {
      inputs: '输入', 'in.sales': '销售总额', 'in.rate': '佣金比例', 'in.base': '底薪',
      'out.commission': '佣金收入', 'out.total': '总收入',
      note: '💼 常见于销售代表和房产经纪人。房产经纪人通常每方拿 2.5–3%。',
      summaryTitle: '计算摘要', inputsLabel: '输入:', resultsLabel: '结果:', copySummary: '复制摘要', csvField: '字段', csvType: '类型', csvValue: '数值', csvInput: '输入', csvResult: '结果',
    },
  },
  es: {
    useCases: ['calcular comisiones con salario base', 'calcular comisión por tasa', 'calcular comisión más adelanto', 'calcular comisión escalonada'],
    faqs: [
      { q: '¿Cómo funcionan las comisiones inmobiliarias?', a: 'Una comisión total del 6 % es habitual, dividida entre el agente del comprador (3 %) y el del vendedor (3 %). Cada agente comparte luego con su agencia — a menudo 50/50 para agentes nuevos, más favorable para los experimentados.' },
    ],
    ui: {
      inputs: 'Entradas', 'in.sales': 'Ventas totales', 'in.rate': 'Tasa de comisión', 'in.base': 'Salario base',
      'out.commission': 'Comisión obtenida', 'out.total': 'Ingresos totales',
      note: '💼 Común para comerciales y agentes inmobiliarios. Los agentes suelen ganar un 2,5–3 % por lado.',
      summaryTitle: 'Resumen del cálculo', inputsLabel: 'Entradas:', resultsLabel: 'Resultados:', copySummary: 'Copiar resumen', csvField: 'Campo', csvType: 'Tipo', csvValue: 'Valor', csvInput: 'Entrada', csvResult: 'Resultado',
    },
  },
  de: {
    useCases: ['Provision mit Grundgehalt berechnen', 'Verkaufsprovision nach Satz berechnen', 'Provision plus Vorschuss berechnen', 'gestaffelte Provision berechnen'],
    faqs: [
      { q: 'Wie funktionieren Immobilienprovisionen?', a: 'Eine Gesamtprovision von 6 % ist typisch, geteilt zwischen Käufermakler (3 %) und Verkäufermakler (3 %). Jeder Makler teilt dann mit seinem Maklerbüro — oft 50/50 bei neuen Maklern, günstiger für erfahrene.' },
    ],
    ui: {
      inputs: 'Eingaben', 'in.sales': 'Gesamtumsatz', 'in.rate': 'Provisionssatz', 'in.base': 'Grundgehalt',
      'out.commission': 'Verdiente Provision', 'out.total': 'Gesamteinkommen',
      note: '💼 Typisch für Vertriebler und Immobilienmakler. Makler erhalten meist 2,5–3 % pro Seite.',
      summaryTitle: 'Zusammenfassung der Berechnung', inputsLabel: 'Eingaben:', resultsLabel: 'Ergebnis:', copySummary: 'Zusammenfassung kopieren', csvField: 'Feld', csvType: 'Typ', csvValue: 'Wert', csvInput: 'Eingabe', csvResult: 'Ergebnis',
    },
  },
}
