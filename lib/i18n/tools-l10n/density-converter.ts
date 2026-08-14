/**
 * density-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const densityConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '🧪 密度 = 质量 ÷ 体积。水 = 1000 kg/m³ = 1 g/cm³。金 = 19,320 kg/m³。',
      'unit.gcm3': 'g/cm³',
      'unit.gl': 'g/L',
      'unit.gml': 'g/mL',
      'unit.kgm3': 'kg/m³',
      'unit.lbft3': 'lb/ft³',
      'unit.lbin3': 'lb/in³',
    },
    useCases: [
      '判断物体在液体中会上浮还是下沉',
      '通过密度辅助识别未知材料',
      '做工程中的强度重量比计算',
    ],
    faqs: [
      { q: '冰为什么会浮在水面上?', a: '水很特别——结冰时体积会膨胀,使冰的密度比液态水更低。大多数物质固态时密度更高。如果没有这个特性,湖泊会从底部开始结冰。' },
    ],
  },
  es: {
    ui: {
      'note': '🧪 Densidad = masa ÷ volumen. Agua = 1000 kg/m³ = 1 g/cm³. Oro = 19.320 kg/m³.',
      'unit.gcm3': 'g/cm³',
      'unit.gl': 'g/L',
      'unit.gml': 'g/mL',
      'unit.kgm3': 'kg/m³',
      'unit.lbft3': 'lb/ft³',
      'unit.lbin3': 'lb/in³',
    },
    useCases: [
      'determinar si un objeto flota o se hunde en un líquido',
      'ayudar a identificar materiales desconocidos por su densidad',
      'hacer cálculos de relación resistencia-peso en ingeniería',
    ],
    faqs: [
      { q: '¿Por qué flota el hielo?', a: 'El agua es inusual — se expande al congelarse, por lo que el hielo es menos denso que el agua líquida. La mayoría de las sustancias son más densas en estado sólido. Sin esta peculiaridad, los lagos se congelarían de abajo arriba.' },
    ],
  },
  de: {
    ui: {
      'note': '🧪 Dichte = Masse ÷ Volumen. Wasser = 1000 kg/m³ = 1 g/cm³. Gold = 19.320 kg/m³.',
      'unit.gcm3': 'g/cm³',
      'unit.gl': 'g/L',
      'unit.gml': 'g/mL',
      'unit.kgm3': 'kg/m³',
      'unit.lbft3': 'lb/ft³',
      'unit.lbin3': 'lb/in³',
    },
    useCases: [
      'beurteilen, ob ein Gegenstand in einer Flüssigkeit schwimmt oder sinkt',
      'unbekannte Materialien anhand ihrer Dichte erkennen',
      'Festigkeits-zu-Gewicht-Berechnungen im Ingenieurwesen durchführen',
    ],
    faqs: [
      { q: 'Warum schwimmt Eis?', a: 'Wasser ist ungewöhnlich — es dehnt sich beim Gefrieren aus, sodass Eis weniger dicht ist als flüssiges Wasser. Die meisten Stoffe sind als Feststoff dichter. Ohne diese Besonderheit würden Seen von unten nach oben gefrieren.' },
    ],
  },
}
