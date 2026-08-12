/**
 * power-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const powerConverterL10n: ToolL10n = {
  zh: {
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
