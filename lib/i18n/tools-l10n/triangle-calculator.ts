/**
 * triangle-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = TriangleCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const triangleCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'chartTitle': '图形预览',
      'in.a': '边 a',
      'in.b': '边 b',
      'out.c': '斜边 (c)',
      'out.area': '面积',
      'out.perimeter': '周长',
      note: '📐 勾股定理:a² + b² = c²。仅适用于直角三角形。',
    },
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
    ui: {
      'chartTitle': 'Vista previa',
      'in.a': 'Lado a',
      'in.b': 'Lado b',
      'out.c': 'Hipotenusa (c)',
      'out.area': 'Área',
      'out.perimeter': 'Perímetro',
      note: '📐 Teorema de Pitágoras: a² + b² = c². Solo para triángulos rectángulos.',
    },
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
    ui: {
      'chartTitle': 'Formvorschau',
      'in.a': 'Seite a',
      'in.b': 'Seite b',
      'out.c': 'Hypotenuse (c)',
      'out.area': 'Fläche',
      'out.perimeter': 'Umfang',
      note: '📐 Satz des Pythagoras: a² + b² = c². Nur für rechtwinklige Dreiecke.',
    },
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
