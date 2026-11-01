/**
 * slope-calculator 本地化 bundle —— zh / es / de(B11 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const SlopeCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular pendiente e intersección a partir de dos puntos', 'convertir la pendiente en ángulo o porcentaje de pendiente', 'obtener la ecuación y = mx + b directamente', 'hallar la pendiente de rectas paralelas y perpendiculares'],
    faqs: [
      { q: '¿Cómo se calcula la pendiente?', a: 'm = (y₂ − y₁)/(x₂ − x₁), el «sube entre corre» entre los dos puntos. Sustituyendo cualquiera de ellos sale la intersección b = y₁ − m·x₁, y con ella la ecuación y = mx + b.' },
      { q: '¿Qué significa pendiente negativa o indefinida?', a: 'Negativa: la recta baja de izquierda a derecha; indefinida corresponde a una recta vertical (x₁ = x₂), donde el denominador es cero. Una recta horizontal tiene m = 0.' },
      { q: '¿Cómo hallo la pendiente paralela o perpendicular?', a: 'Las paralelas comparten exactamente la misma m; las perpendiculares se multiplican hasta −1, o sea m⊥ = −1/m. La perpendicular de una vertical es horizontal (m = 0) y al revés.' },
      { q: '¿Qué es el ángulo de inclinación?', a: 'θ = arctan(m) medido desde el eje x positivo: m = 1 da 45° y m = 2 da 63,43°. Los porcentajes de las señales viales son rise/run × 100, así que una rampa del 8% corresponde a arctan(0,08) ≈ 4,6°.' },
    ],
    ui: {
      'out.slope': 'Pendiente m',
      'out.intercept': 'Intersección con y (b)',
      'out.angle': 'Ángulo de inclinación',
      'out.equation': 'Ecuación de la recta',
      'out.perp': 'Pendiente perpendicular',
      'chartTitle': 'La recta que pasa por tus dos puntos',
      'line.line': 'y = mx + b',
      'line.zero': 'y = 0',
      'preset.0': 'Pendiente suave: (0, 0) → (100, 8)',
      'preset.1': 'Bajada: (2, 7) → (6, 3)',
      'preset.2': 'Inclinación de 45°: (0, 0) → (5, 5)',
      'note': '📏 m = (y₂ − y₁)/(x₂ − x₁) es el desnivel por unidad horizontal; b = y₁ − m·x₁ ancla la recta. Las paralelas comparten m; las perpendiculares se multiplican hasta −1 (m⊥ = −1/m). Un tramo vertical no tiene pendiente definida, uno horizontal tiene m = 0.',
      'errNumeric': 'Introduce números para ambos puntos',
      'errSamePoint': 'Los dos puntos son idénticos — la pendiente no está definida',
      'undefined': 'indefinida (recta vertical)',
      'horizontal': 'horizontal',
      'perpVertical': 'indefinida (recta vertical)',
    },
  },
  de: {
    useCases: ['Steigung und Achsenabschnitt aus zwei Punkten bestimmen', 'Steigung in Neigungswinkel oder Gefälle-Prozente umrechnen', 'die Geradengleichung y = mx + b direkt erhalten', 'Steigungen paralleler und senkrechter Geraden bestimmen'],
    faqs: [
      { q: 'Wie wird die Steigung berechnet?', a: 'm = (y₂ − y₁)/(x₂ − x₁) — das »Höhengewinn durch Horizontalschritt«-Verhältnis der beiden Punkte. Mit einem der Punkte folgt der Achsenabschnitt b = y₁ − m·x₁ und damit y = mx + b.' },
      { q: 'Was heißt negative oder undefinierte Steigung?', a: 'Negativ: Die Gerade fällt von links nach rechts; undefiniert gehört zu einer senkrechten Geraden (x₁ = x₂), wo der Nenner null ist. Eine waagerechte Gerade hat m = 0.' },
      { q: 'Wie finde ich parallele und senkrechte Steigungen?', a: 'Parallele Geraden teilen exakt dieselbe m; senkrechtemultiplizieren zu −1, also m⊥ = −1/m. Die Senkrechte zu einer Vertikalen ist horizontal (m = 0) und umgekehrt.' },
      { q: 'Was ist der Neigungswinkel?', a: 'θ = arctan(m), von der positiven x-Achse gemessen: m = 1 ergibt 45°, m = 2 ergibt 63,43°. Gefälle-Prozente auf Verkehrszeichen sind rise/run × 100, eine 8%-Rampe entspricht also arctan(0,08) ≈ 4,6°.' },
    ],
    ui: {
      'out.slope': 'Steigung m',
      'out.intercept': 'y-Achsenabschnitt b',
      'out.angle': 'Neigungswinkel',
      'out.equation': 'Geradengleichung',
      'out.perp': 'Senkrechte Steigung',
      'chartTitle': 'Die Gerade durch deine zwei Punkte',
      'line.line': 'y = mx + b',
      'line.zero': 'y = 0',
      'preset.0': 'Sanftes Gefälle: (0, 0) → (100, 8)',
      'preset.1': 'Gefälle: (2, 7) → (6, 3)',
      'preset.2': '45°-Neigung: (0, 0) → (5, 5)',
      'note': '📏 m = (y₂ − y₁)/(x₂ − x₁) ist der Höhenunterschied pro horizontalem Schritt; b = y₁ − m·x₁ verankert die Gerade. Parallele teilen m; Senkrechte multiplizieren zu −1 (m⊥ = −1/m). Ein vertikales Stück hat keine definierte Steigung, ein horizontales m = 0.',
      'errNumeric': 'Für beide Punkte Zahlen eingeben',
      'errSamePoint': 'Die beiden Punkte sind identisch — die Steigung ist undefiniert',
      'undefined': 'undefiniert (senkrechte Gerade)',
      'horizontal': 'waagerecht',
      'perpVertical': 'undefiniert (senkrechte Gerade)',
    },
  },
}
