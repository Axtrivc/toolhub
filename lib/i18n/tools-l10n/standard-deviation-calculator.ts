/**
 * standard-deviation-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = StandardDeviationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const standardDeviationCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'in.numbers': '数字(逗号分隔)',
      'out.mean': '平均值',
      'out.stddev': '标准差(总体)',
      'out.sampleStddev': '标准差(样本,n−1)',
      'out.variance': '方差(总体)',
      'out.count': '个数',
      note: '📊 总体标准差除以 N;样本标准差(贝塞尔校正)除以 N−1。两种口径已在上方并列显示。',
    },
    useCases: [
      '分析考试成绩的离散程度',
      '评估数据集的波动性与稳定性',
      '质量控制:衡量产品一致性',
      '研究报告:报告均值 ± 标准差',
    ],
    faqs: [
      { q: '什么时候用总体标准差,什么时候用样本标准差?', a: '当你的数据就是整个研究对象时用总体标准差(例如一个班的全部学生)。当你的数据代表一个更大的总体时用样本标准差(例如调查 100 名选民来估计全国)。' },
    ],
  },
  es: {
    ui: {
      'in.numbers': 'Números (separados por comas)',
      'out.mean': 'Media',
      'out.stddev': 'Desviación típica (poblacional)',
      'out.sampleStddev': 'Desviación típica (muestral, n−1)',
      'out.variance': 'Varianza (poblacional)',
      'out.count': 'Cantidad',
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
    ui: {
      'in.numbers': 'Zahlen (kommagetrennt)',
      'out.mean': 'Mittelwert',
      'out.stddev': 'Standardabweichung (Grundgesamtheit)',
      'out.sampleStddev': 'Standardabweichung (Stichprobe, n−1)',
      'out.variance': 'Varianz (Grundgesamtheit)',
      'out.count': 'Anzahl',
      note: '📊 Die Standardabweichung der Grundgesamtheit teilt durch N; die der Stichprobe (Bessel-Korrektur) durch N−1. Beide werden oben angezeigt.',
    },
    useCases: [
      'Streuung von Prüfungsergebnissen analysieren',
      'Schwankung und Stabilität eines Datensatzes bewerten',
      'Qualitätskontrolle: die Gleichmäßigkeit eines Produkts messen',
      'Forschungsberichte: Mittelwert ± Standardabweichung angeben',
    ],
    faqs: [
      { q: 'Wann nehme ich Grundgesamtheit oder Stichprobe?', a: 'Nutze die Grundgesamtheit, wenn deine Daten die gesamte Interessengruppe sind (alle Schüler einer Klasse). Nutze die Stichprobe, wenn deine Daten eine größere Grundgesamtheit vertreten (100 befragte Wähler, um ein Land zu schätzen).' },
    ],
  },
}
