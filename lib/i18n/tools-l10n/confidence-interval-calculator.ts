/**
 * confidence-interval-calculator 本地化 bundle —— zh / es / de(B11 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ConfidenceIntervalCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular intervalos de confianza al 90/95/99% para una media', 'obtener el intervalo y el margen de error de una proporción', 'ver cómo converge el margen al crecer la muestra', 'interpretar el «±3 puntos» de encuestas y artículos'],
    faqs: [
      { q: '¿Qué fórmula se usa?', a: 'Para la media, CI = x̄ ± z·s/√n; para la proporción, p̂ ± z·√(p̂(1−p̂)/n) (intervalo de Wald). z vale 1,645, 1,96 y 2,576 al 90/95/99%.' },
      { q: '¿Qué significa realmente «95% de confianza»?', a: 'Habla del método, no de este intervalo concreto: el 95% de los intervalos construidos así con muestreos repetidos contendrían el valor verdadero. Un intervalo dado o lo contiene o no.' },
      { q: '¿Por qué duplicar la muestra apenas ayuda?', a: 'El margen de error se contrae con 1/√n: duplicar n solo lo recorta un ~29%, y hay que cuadruplicar para partirlo por la mitad. Por eso la precisión de ±1% cuesta cuatro veces la de ±2%.' },
      { q: '¿Cuándo falla la aproximación?', a: 'La aproximación normal (z) pide n ≥ 30 para medias (usa t con menos) y np̂ ≥ 5 con n(1−p̂) ≥ 5 para proporciones. Con eventos raros o proporciones pegadas a 0/1, mejor el intervalo de Wilson.' },
    ],
    ui: {
      'in.mode': 'Tipo de datos',
      'in.mean': 'Media muestral',
      'in.sd': 'Desviación típica muestral',
      'in.p': 'Proporción muestral',
      'in.n': 'Tamaño de muestra',
      'in.level': 'Nivel de confianza',
      'opt.mode.mean': 'Media (x̄, s, n)',
      'opt.mode.prop': 'Proporción (p, n)',
      'opt.level.90': '90%',
      'opt.level.95': '95%',
      'opt.level.99': '99%',
      'out.ci': 'Intervalo de confianza',
      'out.moe': 'Margen de error',
      'out.se': 'Error típico',
      'out.z': 'Valor crítico z',
      'chartTitle': 'El margen de error se contrae con √n',
      'line.moe': 'Margen de error',
      'preset.0': 'Plazo de entrega: 4,2 ± ?, 95%',
      'preset.1': 'Encuesta: 55%, n = 1000, 95%',
      'preset.2': 'Ensayo clínico: 8,4 días, n = 64, 99%',
      'note': '📊 Modo media: CI = x̄ ± z·s/√n (σ desconocida, se establece con n ≥ 30); modo proporción: intervalo de Wald p̂ ± z·√(p̂(1−p̂)/n). Con muestras pequeñas o proporciones cercanas a 0/1 usa un intervalo t o el de Wilson — Wald cubre de menos ahí.',
      'errN': 'El tamaño de muestra debe ser al menos 2',
      'errProp': 'La proporción debe estar entre 0 y 100%',
      'errNumeric': 'Introduce una media válida y una desviación no negativa',
    },
  },
  de: {
    useCases: ['Konfidenzintervalle für Mittelwerte auf 90/95/99% berechnen', 'Intervall und Fehlerband für Anteile bestimmen', 'sehen, wie das Fehlerband mit n schrumpft', 'das »±3 Prozentpunkte« aus Umfragen einordnen'],
    faqs: [
      { q: 'Welche Formel steckt dahinter?', a: 'Für den Mittelwert CI = x̄ ± z·s/√n; für den Anteil p̂ ± z·√(p̂(1−p̂)/n) (Wald-Intervall). z beträgt 1,645, 1,96 bzw. 2,576 bei 90/95/99%.' },
      { q: 'Was heißt »95% Konfidenz« wirklich?', a: 'Es beschreibt das Verfahren, nicht dieses eine Intervall: 95% der so aus wiederholten Stichproben konstruierten Intervalle würden den wahren Wert überdecken. Ein konkretes Intervall überdeckt ihn oder nicht.' },
      { q: 'Warum bringt die doppelte Stichprobe so wenig?', a: 'Das Fehlerband schrumpft mit 1/√n — verdoppeltes n schneidet nur rund 29% ab, erst vervierfachtes halbiert es. Deshalb kostet ±1% Genauigkeit viermal so viel wie ±2%.' },
      { q: 'Wann versagt die Näherung?', a: 'Die Normalnäherung (z) verlangt n ≥ 30 bei Mittelwerten (darunter t-Intervall) sowie np̂ ≥ 5 und n(1−p̂) ≥ 5 bei Anteilen. Bei seltenen Ereignissen oder Anteilen nahe 0/1 ist das Wilson-Intervall die bessere Wahl.' },
    ],
    ui: {
      'in.mode': 'Datentyp',
      'in.mean': 'Stichprobenmittel',
      'in.sd': 'Stichproben-Standardabweichung',
      'in.p': 'Stichprobenanteil',
      'in.n': 'Stichprobengröße',
      'in.level': 'Konfidenzniveau',
      'opt.mode.mean': 'Mittelwert (x̄, s, n)',
      'opt.mode.prop': 'Anteil (p, n)',
      'opt.level.90': '90%',
      'opt.level.95': '95%',
      'opt.level.99': '99%',
      'out.ci': 'Konfidenzintervall',
      'out.moe': 'Fehlerband (Margin of Error)',
      'out.se': 'Standardfehler',
      'out.z': 'Kritischer Wert z',
      'chartTitle': 'Das Fehlerband schrumpft mit √n',
      'line.moe': 'Fehlerband',
      'preset.0': 'Lieferzeit: 4,2 ± ?, 95%',
      'preset.1': 'Umfrage: 55%, n = 1000, 95%',
      'preset.2': 'Klinische Studie: 8,4 Tage, n = 64, 99%',
      'note': '📊 Mittelwertmodus: CI = x̄ ± z·s/√n (σ unbekannt, ab n ≥ 30 stabil); Anteilsmodus: Wald-Intervall p̂ ± z·√(p̂(1−p̂)/n). Bei kleinen Stichproben oder Anteilen nahe 0/1 lieber t-Intervall oder Wilson-Score-Intervall — Wald deckt dort zu wenig ab.',
      'errN': 'Die Stichprobengröße muss mindestens 2 sein',
      'errProp': 'Der Anteil muss zwischen 0 und 100% liegen',
      'errNumeric': 'Gültigen Mittelwert und nicht-negative Standardabweichung eingeben',
    },
  },
}
