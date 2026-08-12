/**
 * standard-deviation-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = StandardDeviationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const standardDeviationCalculatorL10n: ToolL10n = {
  zh: {
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
