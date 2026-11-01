/**
 * quadratic-equation-solver 本地化 bundle —— zh / es / de(B11 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const QuadraticEquationSolverL10n: ToolL10n = {

  es: {
    useCases: ['resolver ecuaciones cuadráticas y clasificar raíces reales/dobles/complejas', 'hallar vértice y eje de simetría de la parábola', 'factorizar trinomios como a(x − x₁)(x − x₂)', 'comprobar el discriminante y las fórmulas de Vieta de los deberes'],
    faqs: [
      { q: '¿Cómo se resuelve ax² + bx + c = 0?', a: 'La fórmula x = (−b ± √(b² − 4ac)) / (2a) siempre funciona. El discriminante b² − 4ac te dice el tipo de raíz antes de calcular: positivo son dos raíces reales, cero una raíz doble y negativo un par conjugado complejo.' },
      { q: '¿Qué significan el vértice y el eje de simetría?', a: 'El vértice (−b/2a, k) es el punto de giro de la parábola y el eje x = −b/2a la recta de simetría vertical que lo atraviesa. Con a > 0 es el mínimo; con a < 0, el máximo.' },
      { q: '¿Por qué salen números complejos?', a: 'Un discriminante negativo indica que la parábola no toca el eje x, así que las raíces solo existen en los complejos como p ± qi. Geométricamente el vértice queda entero por encima (o debajo) de cero, y la forma factorizada pasa a ser la de cuadrado perfecto a(x − h)² + k.' },
      { q: '¿Puede ser a = 0?', a: 'Entonces ya no es cuadrática: la calculadora resuelve la ecuación lineal bx + c = 0 con la única raíz x = −c/b. Si a y b valen 0 a la vez, no hay nada que despejar.' },
    ],
    ui: {
      'in.a': 'Coeficiente a',
      'in.b': 'Coeficiente b',
      'in.c': 'Coeficiente c',
      'out.x1': 'Raíz x₁',
      'out.x2': 'Raíz x₂',
      'out.discriminant': 'Discriminante b² − 4ac',
      'out.vertex': 'Vértice (h, k)',
      'out.axis': 'Eje de simetría',
      'out.form': 'Forma factorizada / de vértice',
      'chartTitle': 'La parábola y = ax² + bx + c',
      'line.curve': 'y = ax² + bx + c',
      'line.zero': 'y = 0',
      'preset.0': 'dos raíces reales: x² − 3x + 2',
      'preset.1': 'raíz doble: x² − 4x + 4',
      'preset.2': 'raíces complejas: x² + x + 1',
      'note': '📐 El discriminante b² − 4ac lo decide todo: positivo → dos raíces reales, cero → una raíz doble, negativo → un par conjugado complejo. El vértice siempre está en x = −b/2a, justo en medio de las raíces cuando existen (Vieta: x₁ + x₂ = −b/a, x₁·x₂ = c/a).',
      'errNumeric': 'Introduce números para a, b y c',
      'linear': 'lineal: una sola raíz',
      'errDegenerate': 'a y b son 0 — no es una ecuación en x',
      'twoRoots': 'dos raíces reales',
      'doubleRoot': 'raíz doble',
      'complexRoots': 'raíces complejas conjugadas',
    },
  },
  de: {
    useCases: ['quadratische Gleichungen lösen und die Art der Wurzeln bestimmen', 'Scheitelpunkt und Symmetrieachse der Parabel ablesen', 'Trinome in die Form a(x − x₁)(x − x₂) faktorisieren', 'Diskriminante und Vietasätze aus den Hausaufgaben gegenprüfen'],
    faqs: [
      { q: 'Wie löst man ax² + bx + c = 0?', a: 'Die pq-/Mitternachtsformel x = (−b ± √(b² − 4ac)) / (2a) funktioniert immer. Die Diskriminante b² − 4ac verrät die Wurzelart noch vor dem Rechnen: positiv → zwei reelle, null → eine doppelte, negativ → ein konjugiert komplexes Paar.' },
      { q: 'Was bedeuten Scheitelpunkt und Symmetrieachse?', a: 'Der Scheitelpunkt (−b/2a, k) ist der Wendepunkt der Parabel, die Achse x = −b/2a die vertikale Spiegelachse durch ihn. Bei a > 0 ist er das Minimum, bei a < 0 das Maximum.' },
      { q: 'Warum kommt eine komplexe Zahl heraus?', a: 'Eine negative Diskriminante heißt: Die Parabel schneidet die x-Achse nie, die Wurzeln existieren nur komplex als p ± qi. Geometrisch liegt der Scheitel ganz über (oder unter) null — die Faktorform weicht dann auf die Scheitelform a(x − h)² + k aus.' },
      { q: 'Darf a null sein?', a: 'Dann ist es keine quadratische Gleichung — der Rechner löst das lineare bx + c = 0 mit der einzigen Wurzel x = −c/b. Sind a und b beide null, gibt es nichts zu lösen.' },
    ],
    ui: {
      'in.a': 'Koeffizient a',
      'in.b': 'Koeffizient b',
      'in.c': 'Koeffizient c',
      'out.x1': 'Wurzel x₁',
      'out.x2': 'Wurzel x₂',
      'out.discriminant': 'Diskriminante b² − 4ac',
      'out.vertex': 'Scheitelpunkt (h, k)',
      'out.axis': 'Symmetrieachse',
      'out.form': 'Faktor-/Scheitelform',
      'chartTitle': 'Die Parabel y = ax² + bx + c',
      'line.curve': 'y = ax² + bx + c',
      'line.zero': 'y = 0',
      'preset.0': 'zwei reelle Wurzeln: x² − 3x + 2',
      'preset.1': 'doppelte Wurzel: x² − 4x + 4',
      'preset.2': 'komplexe Wurzeln: x² + x + 1',
      'note': '📐 Die Diskriminante b² − 4ac entscheidet alles: positiv → zwei reelle Wurzeln, null → eine doppelte, negativ → ein konjugiert komplexes Paar. Der Scheitel liegt immer bei x = −b/2a, genau zwischen den Wurzeln, wenn es welche gibt (Vieta: x₁ + x₂ = −b/a, x₁·x₂ = c/a).',
      'errNumeric': 'Für a, b und c Zahlen eingeben',
      'linear': 'linear: eine Wurzel',
      'errDegenerate': 'a und b sind beide 0 — keine Gleichung in x',
      'twoRoots': 'zwei reelle Wurzeln',
      'doubleRoot': 'doppelte Wurzel',
      'complexRoots': 'konjugiert komplexe Wurzeln',
    },
  },
}
