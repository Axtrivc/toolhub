/**
 * sphere-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = SphereCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const sphereCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'V = 4/3 × π × r³\nSA = 4 × π × r²',
      explain: '球体体积 V 和表面积 SA,r 为半径。',
    },
    ui: {
      'chartTitle': '图形预览',
      'in.r': '半径',
      'out.volume': '体积',
      'out.surface': '表面积',
      errNonNegative: '半径不能为负',
      note: '🔵 球体体积 = ⁴⁄₃ π r³。表面积 = 4 π r²。',
    },
    useCases: [
      '由半径计算球体的体积和表面积',
      '求篮球、足球、网球等球体的尺寸',
      '计算球形水箱或容器的容积',
    ],
    faqs: [
      { q: '为什么行星和恒星是球形的?', a: '引力在各个方向上均匀拉扯,所以物质会稳定在势能最低的形状——球体。大型的卫星和行星是圆的;小行星不是,因为它们的引力太弱,无法克服材料的强度。' },
    ],
  },
  es: {
    formula: {
      formula: 'V = 4/3 × π × r³\nSA = 4 × π × r²',
      explain: 'Volumen V y área superficial SA de una esfera, donde r es el radio.',
    },
    ui: {
      'chartTitle': 'Vista previa',
      'in.r': 'Radio',
      'out.volume': 'Volumen',
      'out.surface': 'Área de superficie',
      errNonNegative: 'El radio no puede ser negativo',
      note: '🔵 Volumen de la esfera = ⁴⁄₃ π r³. Área de superficie = 4 π r².',
    },
    useCases: [
      'calcular volumen y superficie de una esfera a partir del radio',
      'determinar las dimensiones de balones de baloncesto, fútbol o tenis',
      'calcular el volumen de depósitos o recipientes esféricos',
    ],
    faqs: [
      { q: '¿Por qué los planetas y las estrellas son esféricos?', a: 'La gravedad tira por igual en todas las direcciones, así que el material se asienta en la forma con la energía potencial más baja — una esfera. Las lunas y planetas grandes son redondos; los asteroides pequeños no, porque su gravedad es demasiado débil para vencer la resistencia del material.' },
    ],
  },
  de: {
    formula: {
      formula: 'V = 4/3 × π × r³\nSA = 4 × π × r²',
      explain: 'Kugelvolumen V und Oberfläche SA, wobei r der Radius ist.',
    },
    ui: {
      'chartTitle': 'Formvorschau',
      'in.r': 'Radius',
      'out.volume': 'Volumen',
      'out.surface': 'Oberfläche',
      errNonNegative: 'Der Radius darf nicht negativ sein',
      note: '🔵 Kugelvolumen = ⁴⁄₃ π r³. Oberfläche = 4 π r².',
    },
    useCases: [
      'Volumen und Oberfläche einer Kugel aus dem Radius berechnen',
      'Abmessungen von Basketbällen, Fußbällen oder Tennisbällen bestimmen',
      'Volumen von kugelförmigen Tanks oder Behältern berechnen',
    ],
    faqs: [
      { q: 'Warum sind Planeten und Sterne kugelförmig?', a: 'Die Schwerkraft zieht in alle Richtungen gleichmäßig, sodass sich Material in der Form mit der geringsten potentiellen Energie anordnet — einer Kugel. Große Monde und Planeten sind rund; kleine Asteroiden nicht, weil ihre Schwerkraft zu schwach ist, um die Materialfestigkeit zu überwinden.' },
    ],
  },
}
