/**
 * triangle-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = TriangleCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const triangleCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '建筑:直角校验(3-4-5 法)',
      '导航:两个 GPS 点之间的直线距离',
      '电视尺寸:65 寸按对角线测量',
      '梯子:靠墙斜放时的高度计算',
    ],
    faqs: [
      { q: '非直角三角形怎么办?', a: '勾股定理只适用于直角三角形。其它三角形要用余弦定理(c² = a² + b² − 2ab·cos C)或正弦定理。' },
    ],
  },
  es: {
    useCases: [
      'construcción: escuadrar esquinas (método 3-4-5)',
      'navegación: distancia en línea recta entre dos puntos GPS',
      'tamaños de TV: 65 pulgadas medidas en diagonal',
      'escaleras: altura que alcanzan al apoyarse',
    ],
    faqs: [
      { q: '¿Qué pasa con los triángulos no rectángulos?', a: 'El teorema de Pitágoras solo funciona para triángulos rectángulos. Para otros triángulos, usa la ley de los cosenos (c² = a² + b² − 2ab·cos C) o la ley de los senos.' },
    ],
  },
  de: {
    useCases: [
      'Bauwesen: Ecken rechtwinklig machen (3-4-5-Methode)',
      'Navigation: Luftlinie zwischen zwei GPS-Punkten',
      'Fernsehergrößen: 65 Zoll werden diagonal gemessen',
      'Leitern: Höhe bei schräg angelehnter Leiter',
    ],
    faqs: [
      { q: 'Was ist mit nicht-rechtwinkligen Dreiecken?', a: 'Der Satz des Pythagoras funktioniert nur für rechtwinklige Dreiecke. Für andere Dreiecke nutze den Kosinussatz (c² = a² + b² − 2ab·cos C) oder den Sinussatz.' },
    ],
  },
}
