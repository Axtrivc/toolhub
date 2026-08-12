/**
 * average-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases + formula(client = AverageCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'mean = ( Σ xᵢ ) / n'

export const averageCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'in.numbers': '数字(用逗号、空格或换行分隔)',
      'out.count': '个数',
      'out.sum': '总和',
      'out.mean': '平均值(均值)',
      'out.median': '中位数',
      'out.min': '最小值',
      'out.max': '最大值',
      'out.range': '极差',
      note: '📊 输入任意一组数字。支持逗号、空格或换行作为分隔符。',
    },
    useCases: [
      '计算一组数据的均值、中位数和极差',
      '处理含异常值的数据(用中位数)',
      '统计成绩、销量、评分的平均水平',
      '对比均值与中位数判断数据偏态',
    ],
    formula: {
      formula: FORMULA,
      explain: '算术平均数。xᵢ 为各数据点,n 为数据个数。',
    },
    faqs: [
      { q: '均值、中位数、众数有什么区别?', a: '均值是总和除以个数(多数人所说的「平均」)。中位数是排序后的中间值,受异常值影响更小。众数是出现最频繁的值。本计算器侧重均值;数据有极端高值或低值时请用中位数。' },
      { q: '算平均前要剔除异常值吗?', a: '取决于你的目的。若要呈现典型水平(如平均薪资),像 CEO 这样的异常值会拉偏均值,中位数更具代表性。若要核算必须计入每一笔的总和(如总收入),则保留所有数据。无论剔除与否都应说明。' },
      { q: '加权平均有什么不同?', a: '加权平均先将每个值乘以其重要程度(权重)再求和,然后除以总权重。你的 GPA 就是一种加权平均,学分是权重。简单均值把每个值同等看待,当某些值更重要时这样做是错的。' },
    ],
  },
  es: {
    ui: {
      'in.numbers': 'Números (sepáralos con comas, espacios o saltos de línea)',
      'out.count': 'Cantidad',
      'out.sum': 'Suma',
      'out.mean': 'Promedio (media)',
      'out.median': 'Mediana',
      'out.min': 'Mínimo',
      'out.max': 'Máximo',
      'out.range': 'Rango',
      note: '📊 Introduce cualquier lista de números. Admite comas, espacios o saltos de línea como separadores.',
    },
    useCases: [
      'calcular la media, la mediana y el rango de un conjunto de datos',
      'trabajar con datos atípicos (usa la mediana)',
      'promediar notas, ventas o valoraciones',
      'comparar media y mediana para detectar sesgo',
    ],
    formula: {
      formula: FORMULA,
      explain: 'Media aritmética. xᵢ son los datos y n es la cantidad.',
    },
    faqs: [
      { q: '¿Cuál es la diferencia entre media, mediana y moda?', a: 'La media es la suma dividida por la cantidad (lo que la mayoría llama «el promedio»). La mediana es el valor central al ordenar los datos, menos sensible a los valores atípicos. La moda es el valor más frecuente. Esta calculadora se centra en la media; usa la mediana cuando tus datos tengan máximos o mínimos extremos.' },
      { q: '¿Debo excluir los valores atípicos antes de promediar?', a: 'Depende de tu objetivo. Para reflejar un desempeño típico (p. ej. el salario medio), un valor atípico como un CEO sesga la media; la mediana es más representativa. Para totales que deben contar todos los valores (p. ej. ingresos totales), mantén todos los datos. Indica siempre si eliminaste valores atípicos.' },
      { q: '¿En qué se diferencia una media ponderada?', a: 'Una media ponderada multiplica cada valor por su importancia (peso) antes de sumar, y luego divide entre el peso total. Tu promedio de notas es una media ponderada donde los créditos son los pesos. Una media simple trata todos los valores por igual, lo cual es incorrecto cuando algunos importan más.' },
    ],
  },
  de: {
    ui: {
      'in.numbers': 'Zahlen (trenne mit Kommas, Leerzeichen oder Zeilenumbrüchen)',
      'out.count': 'Anzahl',
      'out.sum': 'Summe',
      'out.mean': 'Durchschnitt (Mittelwert)',
      'out.median': 'Median',
      'out.min': 'Minimum',
      'out.max': 'Maximum',
      'out.range': 'Spannweite',
      note: '📊 Gib beliebige Zahlen ein. Kommas, Leerzeichen oder Zeilenumbrüche als Trenner werden unterstützt.',
    },
    useCases: [
      'Mittelwert, Median und Spannweite eines Datensatzes berechnen',
      'mit Ausreißern umgehen (verwende den Median)',
      'Noten, Verkäufe oder Bewertungen mitteln',
      'Mittelwert und Median vergleichen, um Schiefe zu erkennen',
    ],
    formula: {
      formula: FORMULA,
      explain: 'Arithmetisches Mittel. xᵢ sind die Datenpunkte, n ist die Anzahl.',
    },
    faqs: [
      { q: 'Was ist der Unterschied zwischen Mittelwert, Median und Modus?', a: 'Der Mittelwert ist die Summe geteilt durch die Anzahl (was die meisten «den Durchschnitt» nennen). Der Median ist der mittlere Wert bei sortierten Daten und wird von Ausreißern weniger beeinflusst. Der Modus ist der häufigste Wert. Dieser Rechner konzentriert sich auf den Mittelwert; verwende den Median bei extrem hohen oder niedrigen Werten.' },
      { q: 'Sollte ich Ausreißer vor dem Mitteln entfernen?', a: 'Das hängt von deinem Ziel ab. Für typische Leistung (z. B. Durchschnittsgehalt) verzerren Ausreißer wie ein CEO den Mittelwert — der Median ist repräsentativer. Für Summen, die jeden Wert erfassen müssen (z. B. Gesamtumsatz), behalte alle Daten. Gib immer an, falls du Ausreißer entfernt hast.' },
      { q: 'Worin unterscheidet sich ein gewichteter Durchschnitt?', a: 'Ein gewichteter Durchschnitt multipliziert jeden Wert mit seiner Wichtigkeit (Gewicht), bevor aufsummiert wird, und teilt dann durch das Gesamtgewicht. Dein Notendurchschnitt ist ein gewichteter Durchschnitt, bei dem die Credits die Gewichte sind. Ein einfacher Mittelwert behandelt alle Werte gleich, was falsch ist, wenn einige mehr zählen.' },
    ],
  },
}
