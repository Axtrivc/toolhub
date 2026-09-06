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
      { q: '篮球的数字具体是多少?', a: '半径约 12 cm:体积约 7 238 cm³(7.2 升),表面积约 1 810 cm²。把半径输进去,两个结果同时读出。' },
      { q: '体积和表面积哪个增长更快?', a: '体积——它按 r³ 走,表面积按 r²:半径翻倍,表面积 ×4,体积 ×8。这就是球形储罐划算的原因:同样材料面积装下更多容积。' },
      { q: '用地球验证一下?', a: '取半径 6 371 km:体积约 1.08×10¹² km³,表面积约 5.1×10⁸ km²,其中 71% 被海洋覆盖。用科学计数法输入即可复现。' },
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
      { q: '¿Qué cifras tiene un balón de baloncesto?', a: 'Con un radio de unos 12 cm: volumen ≈ 7.238 cm³ (7,2 litros) y superficie ≈ 1.810 cm². Introduce el radio y los dos resultados aparecen juntos.' },
      { q: '¿Qué crece más rápido, el volumen o la superficie?', a: 'El volumen, porque va con r³ mientras la superficie va con r²: al duplicar el radio, la superficie ×4 y el volumen ×8. Por eso los tanques esféricos rinden: más litros por metro cuadrado de material.' },
      { q: '¿Y con la Tierra?', a: 'Toma r = 6.371 km: volumen ≈ 1,08 × 10¹² km³ y superficie ≈ 5,1 × 10⁸ km², un 71 % cubierto de océano. Escríbelo en notación científica y lo reproducirás.' },
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
      { q: 'Welche Zahlen hat ein Basketball?', a: 'Bei rund 12 cm Radius: Volumen ≈ 7.238 cm³ (7,2 Liter) und Oberfläche ≈ 1.810 cm². Radius eingeben, beide Werte erscheinen sofort.' },
      { q: 'Was wächst schneller: Volumen oder Oberfläche?', a: 'Das Volumen — es läuft mit r³, die Oberfläche mit r²: doppelter Radius bedeutet ×4 Fläche, aber ×8 Volumen. Deshalb lohnen sich kugelförmige Tanks: mehr Liter pro Quadratmeter Material.' },
      { q: 'Und mit der Erde?', a: 'Nimm r = 6.371 km: Volumen ≈ 1,08 × 10¹² km³, Oberfläche ≈ 5,1 × 10⁸ km², davon 71 % Ozean. In wissenschaftlicher Notation eingeben und nachprüfen.' },
    ],
  },
}
