/**
 * sphere-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = SphereCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const sphereCalculatorL10n: ToolL10n = {
  zh: {
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
