/**
 * commission-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases（无 formula 条目）
 */
import type { ToolL10n } from '../tool-l10n'

export const commissionCalculatorL10n: ToolL10n = {

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
