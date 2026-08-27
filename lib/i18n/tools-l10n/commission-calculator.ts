/**
 * commission-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases（无 formula 条目）
 */
import type { ToolL10n } from '../tool-l10n'

export const commissionCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'Commission = sales × rate + bonus',
      explain: '与销售挂钩的报酬。rate 是每笔销售赚取的百分比;达到指标可加奖金。总报酬常把底薪与这笔佣金合并计算。',
    },
    useCases: ['算带底薪的佣金收入', '按比例算销售佣金', '算佣金加底薪总收入', '算阶梯佣金'],
    faqs: [
      { q: '房产佣金怎么运作?', a: '总佣金通常为 6%，由买方经纪人（3%）和卖方经纪人（3%）分摊。每个经纪人再和所属中介分成——新经纪人常见五五分，资深经纪人条件更优。' },
    ],
    ui: {
      'chartTitle': '总收入构成',
      'cmp.0': '总报酬',
      'cmpseg.0': '底薪',
      'cmpseg.1': '佣金',
      'in.sales': '销售总额', 'in.rate': '佣金比例', 'in.base': '底薪',
      'out.commission': '佣金收入', 'out.total': '总收入',
      errNonNegative: '数值不能为负',
      note: '💼 常见于销售代表和房产经纪人。房产经纪人通常每方拿 2.5–3%。',
    },
  },
  es: {
    formula: {
      formula: 'Commission = sales × rate + bonus',
      explain: 'Remuneración ligada a las ventas. Rate es el porcentaje ganado por venta; un bonus opcional se añade al cumplir objetivos. La paga total suele combinar un salario base con esta comisión.',
    },
    useCases: ['calcular comisiones con salario base', 'calcular comisión por tasa', 'calcular comisión más adelanto', 'calcular comisión escalonada'],
    faqs: [
      { q: '¿Cómo funcionan las comisiones inmobiliarias?', a: 'Una comisión total del 6 % es habitual, dividida entre el agente del comprador (3 %) y el del vendedor (3 %). Cada agente comparte luego con su agencia — a menudo 50/50 para agentes nuevos, más favorable para los experimentados.' },
    ],
    ui: {
      'chartTitle': 'Composición de ingresos',
      'cmp.0': 'Pago total',
      'cmpseg.0': 'Salario base',
      'cmpseg.1': 'Comisión',
      'in.sales': 'Ventas totales', 'in.rate': 'Tasa de comisión', 'in.base': 'Salario base',
      'out.commission': 'Comisión obtenida', 'out.total': 'Ingresos totales',
      errNonNegative: 'Los valores no pueden ser negativos',
      note: '💼 Común para comerciales y agentes inmobiliarios. Los agentes suelen ganar un 2,5–3 % por lado.',
    },
  },
  de: {
    formula: {
      formula: 'Commission = sales × rate + bonus',
      explain: 'Verkaufsabhängige Vergütung. Rate ist der pro Verkauf verdiente Prozentsatz; ein Bonus kommt bei Zielerreichung dazu. Die Gesamtvergütung kombiniert oft ein Grundgehalt mit dieser Provision.',
    },
    useCases: ['Provision mit Grundgehalt berechnen', 'Verkaufsprovision nach Satz berechnen', 'Provision plus Vorschuss berechnen', 'gestaffelte Provision berechnen'],
    faqs: [
      { q: 'Wie funktionieren Immobilienprovisionen?', a: 'Eine Gesamtprovision von 6 % ist typisch, geteilt zwischen Käufermakler (3 %) und Verkäufermakler (3 %). Jeder Makler teilt dann mit seinem Maklerbüro — oft 50/50 bei neuen Maklern, günstiger für erfahrene.' },
    ],
    ui: {
      'chartTitle': 'Einkommensmix',
      'cmp.0': 'Gesamtvergütung',
      'cmpseg.0': 'Grundgehalt',
      'cmpseg.1': 'Provision',
      'in.sales': 'Gesamtumsatz', 'in.rate': 'Provisionssatz', 'in.base': 'Grundgehalt',
      'out.commission': 'Verdiente Provision', 'out.total': 'Gesamteinkommen',
      errNonNegative: 'Werte dürfen nicht negativ sein',
      note: '💼 Typisch für Vertriebler und Immobilienmakler. Makler erhalten meist 2,5–3 % pro Seite.',
    },
  },
}
