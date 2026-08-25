/**
 * electricity-cost-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ElectricityCostCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'in.daily': '每日成本',
      'in.hours': '每日使用小时',
      'in.kwh': '每日耗电',
      'in.monthly': '每月成本',
      'in.rate': '电价',
      'in.watts': '额定功率',
      'in.yearly': '每年成本',
      'note': '⚡ 功率见电器铭牌或规格表。取暖器和烘干机(1500-5000 W)远超笔记本(≈50 W);年度那行数字最能暴露意外。',
      'out.daily': '每日成本',
      'out.hours': '每日使用小时',
      'out.kwh': '每日耗电',
      'out.monthly': '每月成本',
      'out.rate': '电价',
      'out.watts': '额定功率',
      'out.yearly': '每年成本',
    },
  },
  es: {
    ui: {
      'in.daily': 'Coste diario',
      'in.hours': 'Horas de uso al día',
      'in.kwh': 'Energía diaria',
      'in.monthly': 'Coste mensual',
      'in.rate': 'Precio de la luz',
      'in.watts': 'Potencia nominal',
      'in.yearly': 'Coste anual',
      'note': '⚡ Busca el vatiaje en la etiqueta del aparato. Calefactores y secadoras (1500-5000 W) superan de lejos a un portátil (≈50 W); la fila anual es donde están las sorpresas.',
      'out.daily': 'Coste diario',
      'out.hours': 'Horas de uso al día',
      'out.kwh': 'Energía diaria',
      'out.monthly': 'Coste mensual',
      'out.rate': 'Precio de la luz',
      'out.watts': 'Potencia nominal',
      'out.yearly': 'Coste anual',
    },
  },
  de: {
    ui: {
      'in.daily': 'Kosten pro Tag',
      'in.hours': 'Stunden Nutzung pro Tag',
      'in.kwh': 'Energie pro Tag',
      'in.monthly': 'Kosten pro Monat',
      'in.rate': 'Strompreis',
      'in.watts': 'Nennleistung',
      'in.yearly': 'Kosten pro Jahr',
      'note': '⚡ Die Wattzahl steht auf dem Typenschild. Heizlüfter und Trockner (1500-5000 W) übertreffen Laptops (≈50 W) bei Weitem; die Jahreszeile zeigt die Überraschungen.',
      'out.daily': 'Kosten pro Tag',
      'out.hours': 'Stunden Nutzung pro Tag',
      'out.kwh': 'Energie pro Tag',
      'out.monthly': 'Kosten pro Monat',
      'out.rate': 'Strompreis',
      'out.watts': 'Nennleistung',
      'out.yearly': 'Kosten pro Jahr',
    },
  },
}
