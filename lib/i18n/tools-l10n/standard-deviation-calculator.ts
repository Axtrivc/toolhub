/**
 * standard-deviation-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = StandardDeviationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const standardDeviationCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'σ = √[ Σ(xᵢ − x̄)² / n ]',
      explain: 'Desviación típica poblacional. x̄ es la media, n es el número de datos. La desviación típica muestral usa n−1 en el denominador.',
    },
    ui: {
      'chartTitle': 'Tus números vs la media',
      'line.value': 'Valor',
      'line.mean': 'Media',
      'in.numbers': 'Números (separados por comas)',
      'out.mean': 'Media',
      'out.stddev': 'Desviación típica (poblacional)',
      'out.sampleStddev': 'Desviación típica (muestral, n−1)',
      'out.variance': 'Varianza (poblacional)',
      'out.count': 'Cantidad',
      'datasetTruncated': 'solo se cuentan los primeros 10.000 números',
      note: '📊 La desviación poblacional divide entre N; la muestral (corrección de Bessel) divide entre N−1. Ambas se muestran arriba.',
    },
    useCases: [
      'analizar la dispersión de las notas de un examen',
      'evaluar la variabilidad y estabilidad de un conjunto de datos',
      'control de calidad: medir la consistencia de un producto',
      'informes de investigación: reportar la media ± desviación típica',
    ],
    faqs: [
      { q: '¿Cuándo uso la desviación poblacional o la muestral?', a: 'Usa la poblacional cuando tus datos son todo el grupo de interés (todos los alumnos de una clase). Usa la muestral cuando tus datos representan a una población mayor (100 votantes encuestados para estimar un país).' },
    ],
  },
  de: {
    formula: {
      formula: 'σ = √[ Σ(xᵢ − x̄)² / n ]',
      explain: 'Standardabweichung der Grundgesamtheit. x̄ ist der Mittelwert, n ist die Anzahl der Datenpunkte. Die Standardabweichung der Stichprobe verwendet n−1 im Nenner.',
    },
    ui: {
      'chartTitle': 'Deine Zahlen vs. Mittelwert',
      'line.value': 'Wert',
      'line.mean': 'Mittelwert',
      'in.numbers': 'Zahlen (kommagetrennt)',
      'out.mean': 'Mittelwert',
      'out.stddev': 'Standardabweichung (Grundgesamtheit)',
      'out.sampleStddev': 'Standardabweichung (Stichprobe, n−1)',
      'out.variance': 'Varianz (Grundgesamtheit)',
      'out.count': 'Anzahl',
      'datasetTruncated': 'nur die ersten 10.000 Zahlen werden gezählt',
      note: '📊 Die Standardabweichung der Grundgesamtheit teilt durch N; die der Stichprobe (Bessel-Korrektur) durch N−1. Beide werden oben angezeigt.',
    },
    useCases: [
      'Streuung von Prüfungsergebnissen analysieren',
      'Schwankung und Stabilität eines Datensatzes bewerten',
      'Qualitätskontrolle: die Gleichmäßigkeit eines Produkts messen',
      'Forschungsberichte: Mittelwert ± Standardabweichung angeben',
    ],
    faqs: [
      { q: 'Wann nehme ich Grundgesamtheit oder Stichprobe?', a: 'Nutze die Grundgesamtheit, wenn deine Daten die gesamte betrachtete Gruppe sind (alle Schüler einer Klasse). Nutze die Stichprobe, wenn deine Daten eine größere Grundgesamtheit vertreten (100 befragte Wähler, um ein Land zu schätzen).' },
    ],
  },
}
