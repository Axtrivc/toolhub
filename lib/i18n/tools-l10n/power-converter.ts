/**
 * power-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const powerConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '⚡ 发动机功率用马力,电力用千瓦,大型电厂用兆瓦。1 马力 ≈ 746 瓦。',
      'unit.bs': 'BTU/秒',
      'unit.cal-s': '卡路里/秒',
      'unit.hp': '马力 (hp)',
      'unit.hp-metric': '公制马力 (PS)',
      'unit.kw': '千瓦 (kW)',
      'unit.mw': '兆瓦 (MW)',
      'unit.w': '瓦特 (W)',
    },
    useCases: [
      '比较汽车发动机的马力与千瓦',
      '把电器瓦数换算成千瓦',
      '评估供暖制冷设备的 BTU 功率',
    ],
    faqs: [
      { q: '为什么有两种马力?', a: '机械马力(hp,约 746 W)由詹姆斯·瓦特提出。公制马力(PS,约 735 W)是欧洲的对应单位。欧洲销售的汽车用 PS 标注,美国汽车用 hp。两者相差约 1.4%。' },
    ],
  },
  es: {
    ui: {
      'note': '⚡ Potencia de motor en hp, eléctrica en kW, grandes plantas en MW. 1 hp ≈ 746 W.',
      'unit.bs': 'BTU/seg',
      'unit.cal-s': 'Calorías/seg',
      'unit.hp': 'Caballos de fuerza (hp)',
      'unit.hp-metric': 'CV métricos (PS)',
      'unit.kw': 'Kilovatios (kW)',
      'unit.mw': 'Megavatios (MW)',
      'unit.w': 'Vatios (W)',
    },
    useCases: [
      'comparar caballos de fuerza y kilovatios de un motor de auto',
      'pasar el vatiaje de un electrodoméstico a kilovatios',
      'evaluar la potencia en BTU de equipos de calefacción y refrigeración',
    ],
    faqs: [
      { q: '¿Por qué hay dos caballos de fuerza?', a: 'El caballo de fuerza mecánico (hp, ~746 W) se originó con James Watt. El caballo métrico (PS, ~735 W) es el equivalente europeo. Los autos vendidos en Europa se miden en PS; los de EE. UU., en hp. La diferencia es de ~1,4 %.' },
    ],
  },
  de: {
    ui: {
      'note': '⚡ Motorleistung in hp, elektrisch in kW, Großkraftwerke in MW. 1 hp ≈ 746 W.',
      'unit.bs': 'BTU/Sek',
      'unit.cal-s': 'Kalorien/Sek',
      'unit.hp': 'Pferdestärke (hp)',
      'unit.hp-metric': 'Metrische PS (PS)',
      'unit.kw': 'Kilowatt (kW)',
      'unit.mw': 'Megawatt (MW)',
      'unit.w': 'Watt (W)',
    },
    useCases: [
      'Pferdestärken und Kilowatt eines Automotors vergleichen',
      'die Wattzahl eines Geräts in Kilowatt umrechnen',
      'die BTU-Leistung von Heiz- und Kühlgeräten einschätzen',
    ],
    faqs: [
      { q: 'Warum gibt es zwei Pferdestärken?', a: 'Die mechanische Pferdestärke (hp, ~746 W) geht auf James Watt zurück. Die metrische Pferdestärke (PS, ~735 W) ist das europäische Äquivalent. In Europa verkaufte Autos werden in PS angegeben, US-Autos in hp. Der Unterschied liegt bei ~1,4 %.' },
    ],
  },
}
