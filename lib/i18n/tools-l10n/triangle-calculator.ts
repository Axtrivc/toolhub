/**
 * triangle-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = TriangleCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const triangleCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'A = ½ × b × h',
      explain: 'Área de un triángulo. b = longitud de la base, h = altura correspondiente a esa base.',
    },
    ui: {
      'chartTitle': 'Vista previa',
      'in.a': 'Lado a',
      'in.b': 'Lado b',
      'out.c': 'Hipotenusa (c)',
      'out.area': 'Área',
      'out.perimeter': 'Perímetro',
      note: '📐 Teorema de Pitágoras: a² + b² = c². Solo para triángulos rectángulos.',
      errNonNegative: 'Los lados no pueden ser negativos',
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
    formula: {
      formula: 'A = ½ × b × h',
      explain: 'Dreiecksfläche. b = Länge der Basis, h = zugehörige Höhe.',
    },
    ui: {
      'chartTitle': 'Formvorschau',
      'in.a': 'Seite a',
      'in.b': 'Seite b',
      'out.c': 'Hypotenuse (c)',
      'out.area': 'Fläche',
      'out.perimeter': 'Umfang',
      note: '📐 Satz des Pythagoras: a² + b² = c². Nur für rechtwinklige Dreiecke.',
      errNonNegative: 'Die Seitenlängen dürfen nicht negativ sein',
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
