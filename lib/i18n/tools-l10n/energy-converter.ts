/**
 * energy-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = makeUnitConverter,不 locale-aware,UI 保持英文)
 */
import type { ToolL10n } from '../tool-l10n'

export const energyConverterL10n: ToolL10n = {
  zh: {
    useCases: [
      '读懂电费账单上的 kWh 用量',
      '在食物卡路里和大卡之间换算',
      '计算家用电器的耗电量(焦耳/kWh)',
    ],
    faqs: [
      { q: '为什么电费账单用的是 kWh?', a: '瓦特是焦耳/秒,乘以小时就得到总能量。1 kWh = 以 1000 瓦功率运行 1 小时所消耗的能量。这是衡量家庭用电量的常用单位。' },
    ],
  },
  es: {
    useCases: [
      'entender el consumo en kWh de la factura eléctrica',
      'convertir entre calorías pequeñas y kilocalorías de alimentos',
      'calcular el consumo de electrodomésticos (julios / kWh)',
    ],
    faqs: [
      { q: '¿Por qué mi factura eléctrica usa kWh?', a: 'Un vatio son julios por segundo, así que multiplicar por horas da la energía total. 1 kWh = usar 1.000 vatios durante 1 hora. Es una unidad práctica para el consumo doméstico.' },
    ],
  },
  de: {
    useCases: [
      'den kWh-Verbrauch auf der Stromrechnung verstehen',
      'zwischen kleinen Kalorien und Lebensmittelskalorien umrechnen',
      'den Verbrauch von Haushaltsgeräten berechnen (Joule / kWh)',
    ],
    faqs: [
      { q: 'Warum verwendet meine Stromrechnung kWh?', a: 'Ein Watt sind Joule pro Sekunde, daher ergibt die Multiplikation mit Stunden die Gesamtenergie. 1 kWh = 1.000 Watt über 1 Stunde lang. Das ist eine praktische Einheit für den Haushaltsstrom.' },
    ],
  },
}
