/**
 * z-score-calculator 本地化 bundle —— zh / es / de(B11 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ZScoreCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['convertir puntuaciones brutas en z para comparar escalas distintas', 'consultar el percentil de una puntuación', 'calcular p unilaterales y bilaterales para significancia', 'invertir: del cuantil a la puntuación original (p. ej. corte del 5% superior)'],
    faqs: [
      { q: '¿Cómo se calcula la puntuación z?', a: 'z = (x − μ)/σ — resta la media y divide por la desviación típica. Cuenta a cuántas σ está un valor de la media, haciendo comparables escalas distintas (CI, exámenes, mediciones de proceso).' },
      { q: '¿Qué son el percentil y la p bilateral?', a: 'Φ(z) es la proporción de la población por debajo de tu valor (percentil); la p bilateral es 2·(1 − Φ(|z|)), la probabilidad de caer al menos tan lejos de la media en cualquier dirección — la vara habitual de significancia (más allá de ±1,96 → p < 0,05).' },
      { q: '¿Cómo de precisas son las probabilidades?', a: 'La CDF normal usa la aproximación racional de Abramowitz-Stegun 26.2.17, con |error| < 7,5×10⁻⁸ — más dígitos de los que cualquier conjunto de datos real justifica.' },
      { q: '¿Cómo invierto de z a x?', a: 'Cambia la dirección a z → x y aplica x = μ + z·σ. Por ejemplo, el corte del 5% superior en una distribución con μ=100 y σ=15 es 100 + 1,645×15 = 124,7.' },
    ],
    ui: {
      'in.mode': 'Dirección',
      'in.x': 'Puntuación bruta x',
      'in.z': 'Puntuación z',
      'in.mu': 'Media μ',
      'in.sigma': 'Desviación típica σ',
      'opt.mode.x2z': 'x → z',
      'opt.mode.z2x': 'z → x',
      'out.zScore': 'Puntuación z',
      'out.xVal': 'Puntuación bruta x',
      'out.percentile': 'Percentil Φ(z)',
      'out.above': 'P(Z > z)',
      'out.twoTailed': 'p bilateral',
      'chartTitle': 'La curva normal estándar (μ = 0, σ = 1)',
      'line.pdf': 'φ(z) = e^(−z²/2)/√(2π)',
      'preset.0': 'CI 130 (μ=100, σ=15)',
      'preset.1': 'Corte del 5% superior: z = 1,645',
      'preset.2': 'Bajo la media: CI 85',
      'note': '🔔 z = (x − μ)/σ cuenta a cuántas desviaciones típicas está un valor de la media. Las probabilidades usan la aproximación racional de la CDF normal de Abramowitz-Stegun 26.2.17 (|error| < 7,5×10⁻⁸). Regla rápida: el 68% de los valores cae dentro de ±1σ, el 95% dentro de ±1,96σ y el 99,7% dentro de ±3σ.',
      'errInput': 'Introduce una media válida y una desviación > 0',
      'errZ': 'Introduce una puntuación z numérica',
      'errX': 'Introduce una puntuación bruta numérica',
    },
  },
  de: {
    useCases: ['Rohwerte in z-Werte umrechnen, um verschiedene Skalen zu vergleichen', 'das Percentil eines Wertes nachschlagen', 'einseitige und zweiseitige p-Werte bestimmen', 'umgekehrt vom Quantil zum Rohwert (z. B. Top-5%-Schnitt)'],
    faqs: [
      { q: 'Wie wird der z-Wert berechnet?', a: 'z = (x − μ)/σ — den Mittelwert abziehen, durch die Standardabweichung teilen. Er zählt, wie viele σ ein Wert vom Mittel entfernt ist, und macht unterschiedliche Skalen vergleichbar (IQ, Klausuren, Prozessmesswerte).' },
      { q: 'Was sind Percentil und zweiseitiger p-Wert?', a: 'Φ(z) ist der Anteil der Population unterhalb deines Wertes (Percentil); der zweiseitige p-Wert ist 2·(1 − Φ(|z|)) — die Wahrscheinlichkeit, mindestens so weit vom Mittel abzuweichen. Übliches Signifikanzmaß (jenseits von ±1,96 → p < 0,05).' },
      { q: 'Wie genau sind die Wahrscheinlichkeiten?', a: 'Die Normalverteilungs-CDF nutzt die rationalen Näherung Abramowitz-Stegun 26.2.17 mit |Fehler| < 7,5×10⁻⁸ — mehr Stellen, als irgendein realer Datensatz rechtfertigt.' },
      { q: 'Wie rechne ich von z zurück zu x?', a: 'Stelle die Richtung auf z → x und nutze x = μ + z·σ. Der Top-5%-Schnitt einer Verteilung mit μ=100 und σ=15 ist etwa 100 + 1,645×15 = 124,7.' },
    ],
    ui: {
      'in.mode': 'Richtung',
      'in.x': 'Rohwert x',
      'in.z': 'z-Wert',
      'in.mu': 'Mittelwert μ',
      'in.sigma': 'Standardabweichung σ',
      'opt.mode.x2z': 'x → z',
      'opt.mode.z2x': 'z → x',
      'out.zScore': 'z-Wert',
      'out.xVal': 'Rohwert x',
      'out.percentile': 'Percentil Φ(z)',
      'out.above': 'P(Z > z)',
      'out.twoTailed': 'Zweiseitiger p-Wert',
      'chartTitle': 'Die Standardnormalkurve (μ = 0, σ = 1)',
      'line.pdf': 'φ(z) = e^(−z²/2)/√(2π)',
      'preset.0': 'IQ 130 (μ=100, σ=15)',
      'preset.1': 'Top-5%-Schnitt: z = 1,645',
      'preset.2': 'Unter dem Durchschnitt: IQ 85',
      'note': '🔔 z = (x − μ)/σ misst, wie viele Standardabweichungen ein Wert vom Mittel liegt. Die Wahrscheinlichkeiten nutzen die Abramowitz-Stegun-26.2.17-Näherung der Normal-CDF (|Fehler| < 7,5×10⁻⁸). Faustregel: 68% der Werte liegen innerhalb ±1σ, 95% innerhalb ±1,96σ, 99,7% innerhalb ±3σ.',
      'errInput': 'Gültigen Mittelwert und Standardabweichung > 0 eingeben',
      'errZ': 'Numerischen z-Wert eingeben',
      'errX': 'Numerischen Rohwert eingeben',
    },
  },
}
