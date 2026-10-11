/**
 * density-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + ui(note 与单位标签;交互客户端 = makeUnitConverter)
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
      'unit.lbgal': 'lb/US gal',
      'unit.lbin3': 'lb/in³',
    },
    useCases: [
      '判断物体在液体中会上浮还是下沉',
      '通过密度辅助识别未知材料',
      '做工程中的强度重量比计算',
    ],
    faqs: [
      { q: '冰为什么会浮在水面上?', a: '水很特别——结冰时体积会膨胀,使冰的密度比液态水更低。大多数物质固态时密度更高。如果没有这个特性,湖泊会从底部开始结冰。' },
      { q: 'kg/m³ 和 g/cm³ 怎么互转?', a: '差 1000 倍:1 g/cm³ = 1000 kg/m³ = 1 g/mL = 1 kg/L。水的密度是 1000 kg/m³,记住"水 = 1 g/cm³"就能心算大部分换算。' },
      { q: '测量密度最简单的方法是什么?', a: '用电子秤称质量,用量筒读排开的水的体积,两者相除即得。82 g 的金属块排开 10 mL 水,密度约 8.2 g/cm³——接近铜(8.96),材质范围一下子就缩小了。' },
      { q: '水温会影响密度吗?', a: '会。水在 4 °C 时密度最大(约 999.97 kg/m³),20 °C 时降到约 998 kg/m³,接近沸点时约 958 kg/m³。做精确配液或校准仪器时应按实际水温取值。' },
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
      'unit.lbgal': 'lb/US gal',
      'unit.lbin3': 'lb/in³',
    },
    useCases: [
      'determinar si un objeto flota o se hunde en un líquido',
      'ayudar a identificar materiales desconocidos por su densidad',
      'hacer cálculos de relación resistencia-peso en ingeniería',
    ],
    faqs: [
      { q: '¿Por qué flota el hielo?', a: 'El agua es inusual — se expande al congelarse, por lo que el hielo es menos denso que el agua líquida. La mayoría de las sustancias son más densas en estado sólido. Sin esta peculiaridad, los lagos se congelarían de abajo arriba.' },
      { q: '¿Cómo se convierten kg/m³ y g/cm³?', a: 'Difieren en un factor de 1000: 1 g/cm³ = 1000 kg/m³ = 1 g/mL = 1 kg/L. Como el agua vale 1000 kg/m³, con la regla «agua = 1 g/cm³» se pueden hacer casi todas las conversiones de memoria.' },
      { q: '¿Cómo mido la densidad de forma sencilla?', a: 'Pesa la muestra en una báscula, mide el volumen desplazado con una probeta y divide ambos valores. Un bloque de 82 g que desplaza 10 mL tiene una densidad de 8,2 g/cm³ — cerca del cobre (8,96), lo que ya acota el material.' },
      { q: '¿La temperatura afecta a la densidad?', a: 'Sí. El agua es más densa a 4 °C (unos 999,97 kg/m³), baja a unos 998 kg/m³ a 20 °C y a unos 958 kg/m³ cerca del punto de ebullición. Para disoluciones precisas o calibración, usa el valor a la temperatura real.' },
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
      'unit.lbgal': 'lb/US gal',
      'unit.lbin3': 'lb/in³',
    },
    useCases: [
      'beurteilen, ob ein Gegenstand in einer Flüssigkeit schwimmt oder sinkt',
      'unbekannte Materialien anhand ihrer Dichte erkennen',
      'Festigkeits-zu-Gewicht-Berechnungen im Ingenieurwesen durchführen',
    ],
    faqs: [
      { q: 'Warum schwimmt Eis?', a: 'Wasser ist ungewöhnlich — es dehnt sich beim Gefrieren aus, sodass Eis weniger dicht ist als flüssiges Wasser. Die meisten Stoffe sind als Feststoff dichter. Ohne diese Besonderheit würden Seen von unten nach oben gefrieren.' },
      { q: 'Wie rechne ich kg/m³ und g/cm³ um?', a: 'Faktor 1000: 1 g/cm³ = 1000 kg/m³ = 1 g/mL = 1 kg/L. Weil Wasser 1000 kg/m³ hat, reicht die Eselsbrücke „Wasser = 1 g/cm³“, um fast jede Umrechnung im Kopf zu machen.' },
      { q: 'Wie messe ich die Dichte einfach selbst?', a: 'Probe auf der Waage wiegen, verdrängtes Volumen im Messzylinder ablesen, dividieren. Ein 82-g-Block, der 10 mL verdrängt, hat 8,2 g/cm³ — nahe an Kupfer (8,96), das grenzt das Material schon ein.' },
      { q: 'Macht die Temperatur einen Unterschied?', a: 'Ja. Wasser ist bei 4 °C am dichtesten (rund 999,97 kg/m³), bei 20 °C etwa 998 kg/m³ und nahe am Siedepunkt etwa 958 kg/m³. Für exakte Lösungen oder Kalibrierungen den Wert bei der tatsächlichen Temperatur zugrunde legen.' },
    ],
  },
}
