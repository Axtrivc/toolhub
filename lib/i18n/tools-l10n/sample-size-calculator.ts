/**
 * sample-size-calculator 本地化 bundle —— zh / es / de(B11 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const SampleSizeCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['decidir cuántos encuestados necesitas antes de lanzar', 'reducir entrevistas en poblaciones pequeñas con la corrección por finitud', 'presupuestar precisión: el coste de ±3% frente a ±1%', 'punto de partida para trabajos de curso y diseño experimental'],
    faqs: [
      { q: '¿Qué fórmula se usa?', a: 'n₀ = z²·p(1−p)/e², y cuando la población N es pequeña se aplica la corrección por población finita n = n₀/(1 + n₀/N). El resultado siempre se redondea hacia arriba — nunca hacia abajo.' },
      { q: '¿Por qué p = 50% da la muestra más grande?', a: 'p(1−p) alcanza su máximo de 0,25 cuando p = 0,5, así que es la opción conservadora cuando no hay estimación previa. Con p = 90% basta el 36% de la muestra.' },
      { q: '¿Cuándo importa la corrección por población finita?', a: 'Solo por debajo de unas N = 20 000. Con N = 100 000 los célebres 385 bajan apenas a 383; con N = 500 caen a 218 — encuestar a más de una quinta parte de una población pequeña compra precisión real.' },
      { q: '¿Por qué ±1% cuesta tanto?', a: 'El tamaño escala con 1/e²: al 95%, ±3% pide ~1 068 personas pero ±1% exige ~9 604 — nueve veces la muestra por tres veces la precisión. Por eso los sondeos nacionales se conforman con ±3%.' },
    ],
    ui: {
      'in.N': 'Tamaño de población',
      'in.level': 'Nivel de confianza',
      'in.moe': 'Margen de error',
      'in.p': 'Proporción esperada',
      'opt.level.90': '90%',
      'opt.level.95': '95%',
      'opt.level.99': '99%',
      'out.required': 'Tamaño muestral necesario',
      'out.infinite': 'Sin corrección de población',
      'out.saved': 'Ahorro gracias a la corrección',
      'out.z': 'Valor crítico z',
      'chartTitle': 'Tamaño muestral según el margen',
      'line.n': 'n necesario (población infinita)',
      'preset.0': 'Sondeo nacional: 95%, ±3%',
      'preset.1': 'Encuesta a clientes: 95%, ±5%',
      'preset.2': 'Asociación de 200: 95%, ±5%',
      'note': '🎯 p = 50% es el valor seguro — maximiza p(1−p), así que la muestra calculada cubre cualquier resultado. La corrección por población finita n = n₀/(1 + n₀/N) solo importa por debajo de unas 20 000; partir el margen por la mitad cuadruplica la muestra, de ahí las ~9 600 personas de una encuesta a ±1%.',
      'errInput': 'Margen 0-100%, proporción esperada estrictamente entre 0 y 100% (con 0 o 100 no hace falta encuesta), población ≥ 0',
      'none': '— (población infinita)',
    },
  },
  de: {
    useCases: ['vor dem Start einer Umfrage die nötige Teilnehmerzahl festlegen', 'bei kleinen Populationen Interviews per Endlichkeitskorrektur sparen', 'Genauigkeit kalkulieren: Kosten von ±3% gegen ±1%', 'Startpunkt für Hausarbeiten und Versuchsplanung'],
    faqs: [
      { q: 'Welche Formel wird verwendet?', a: 'n₀ = z²·p(1−p)/e², und bei kleiner Population N zusätzlich die Endlichkeitskorrektur n = n₀/(1 + n₀/N). Das Ergebnis wird immer aufgerundet — nie abgerundet.' },
      { q: 'Warum liefert p = 50% die größte Stichprobe?', a: 'p(1−p) erreicht bei p = 0,5 sein Maximum von 0,25 — ohne Vorwissen ist das also die konservative Wahl. Mit p = 90% genügen rund 36% der Stichprobe.' },
      { q: 'Wann lohnt die Endlichkeitskorrektur?', a: 'Erst unterhalb von etwa N = 20.000. Bei N = 100.000 sinken die berühmten 385 nur auf 383; bei N = 500 fallen sie auf 218 — wer mehr als ein Fünftel einer kleinen Population befragt, kauft echte Präzision.' },
      { q: 'Warum ist ±1% so teuer?', a: 'Der Stichprobenumfang skaliert mit 1/e²: Bei 95% verlangt ±3% rund 1.068 Personen, ±1% aber ~9.604 — neunmal so viel für dreimal die Präzidenz. Deshalb begnügen sich nationale Umfragen meist mit ±3%.' },
    ],
    ui: {
      'in.N': 'Populationsgröße',
      'in.level': 'Konfidenzniveau',
      'in.moe': 'Fehlerband',
      'in.p': 'Erwarteter Anteil',
      'opt.level.90': '90%',
      'opt.level.95': '95%',
      'opt.level.99': '99%',
      'out.required': 'Erforderliche Stichprobengröße',
      'out.infinite': 'Ohne Populationskorrektur',
      'out.saved': 'Durch die Korrektur gespart',
      'out.z': 'Kritischer Wert z',
      'chartTitle': 'Stichprobengröße je Fehlerband',
      'line.n': 'Erforderliches n (unendliche Population)',
      'preset.0': 'Nationale Umfrage: 95%, ±3%',
      'preset.1': 'Kundenumfrage: 95%, ±5%',
      'preset.2': 'Verband mit 200: 95%, ±5%',
      'note': '🎯 p = 50% ist die sichere Wahl — es maximiert p(1−p), die berechnete Stichprobe reicht also für jedes Ergebnis. Die Endlichkeitskorrektur n = n₀/(1 + n₀/N) wirkt erst unterhalb von rund 20.000; das Fehlerband zu halbieren vervierfacht die Stichprobe — daher die ~9.600 Personen einer ±1%-Umfrage.',
      'errInput': 'Fehlerband 0-100%, erwarteter Anteil streng zwischen 0 und 100% (bei 0 oder 100 ist keine Umfrage nötig), Population ≥ 0',
      'none': '— (unendliche Population)',
    },
  },
}
