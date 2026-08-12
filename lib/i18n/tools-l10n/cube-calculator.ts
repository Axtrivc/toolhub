/**
 * cube-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = CubeCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const cubeCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'in.side': '边长',
      'out.volume': '体积',
      'out.surface': '表面积',
      note: '🧊 正方体体积 = 边³。表面积 = 6 × 边²。',
    },
    useCases: [
      '由边长计算正方体的体积和表面积',
      '估算立方包装箱的容积',
      '计算骰子或方糖等立方物体的尺寸',
    ],
    faqs: [
      { q: '正方体和正方形有什么区别?', a: '正方形是二维的(平面);正方体是三维的。正方形有面积;正方体有体积和表面积。一个正方体由 6 个完全相同的正方形组成。' },
    ],
  },
  es: {
    ui: {
      'in.side': 'Longitud de la arista',
      'out.volume': 'Volumen',
      'out.surface': 'Área de superficie',
      note: '🧊 Volumen del cubo = arista³. Área de superficie = 6 × arista².',
    },
    useCases: [
      'calcular volumen y superficie de un cubo a partir de la arista',
      'estimar la capacidad de cajas de embalaje cúbicas',
      'determinar las dimensiones de objetos cúbicos como dados o terrones de azúcar',
    ],
    faqs: [
      { q: '¿En qué se diferencia un cubo de un cuadrado?', a: 'Un cuadrado es 2D (plano); un cubo es 3D. Los cuadrados tienen área; los cubos tienen volumen y superficie. Un cubo está formado por 6 cuadrados idénticos.' },
    ],
  },
  de: {
    ui: {
      'in.side': 'Kantenlänge',
      'out.volume': 'Volumen',
      'out.surface': 'Oberfläche',
      note: '🧊 Würfelvolumen = Kante³. Oberfläche = 6 × Kante².',
    },
    useCases: [
      'Volumen und Oberfläche eines Würfels aus der Kantenlänge berechnen',
      'Fassungsvermögen von würfelförmigen Verpackungen abschätzen',
      'Abmessungen von Würfelobjekten wie Spielwürfeln oder Zuckerstückchen berechnen',
    ],
    faqs: [
      { q: 'Worin unterscheidet sich ein Würfel von einem Quadrat?', a: 'Ein Quadrat ist 2D (flach); ein Würfel ist 3D. Quadrate haben eine Fläche; Würfel haben Volumen und Oberfläche. Ein Würfel besteht aus 6 identischen Quadraten.' },
    ],
  },
}
