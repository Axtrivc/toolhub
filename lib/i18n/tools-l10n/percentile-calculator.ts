/**
 * percentile-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = PercentileCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const percentileCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'rank = ( P / 100 ) × (n − 1)',
      variables:
        'rank = 排序后列表中的位置(从 0 开始)\nP = 要求的百分位数(0-100)\nn = 数据点个数',
      explain: 'P 百分位在已排序的 n 个值中的位置。当 rank 不是整数时,在相邻排名之间插值。',
      example:
        '第 1 步:已排序的成绩 3、5、8、10、14(n = 5),求第 50 百分位数。\n第 2 步:rank = (50 / 100) × (5 − 1) = 0.5 × 4 = 2。\n第 3 步:rank 2 即第三个值:8。rank 为整数,无需插值。\n结果:第 50 百分位数(中位数)为 8。',
    },
    ui: {
      'chartTitle': '分布',
      'line.sorted': '排序后数值',
      'in.numbers': '数字(逗号分隔)',
      'in.p': '百分位数',
      'inSuffix.p': '%',
      'out.result': '百分位值',
      'datasetTruncated': '仅统计前 10,000 个数字',
      note: '📈 第 90 百分位表示 90% 的数值低于此数。采用线性插值(inclusive 口径,同 Excel 的 PERCENTILE.INC)。常用于考试成绩和性能指标。',
    },
    useCases: [
      '考试成绩:SAT、GRE 百分位排名',
      '薪资:收入百分位看自己的位置',
      '健康:儿童身高/体重的生长曲线',
      '性能:API 响应时间的 p95 延迟',
    ],
    faqs: [
      { q: '百分位多少算「好」?', a: '要看场景。标准化考试中,第 90 百分位以上算优秀。健康指标方面,落在第 5–95 百分位之间通常都算正常。收入方面,百分位越高表示相对同侪收入越高。' },
      { q: '监控里的 p95 延迟是什么?', a: '把请求响应时间排序后取第 95 百分位:95% 的请求比它快。平均值会掩盖长尾——均值 80 ms 时可能仍有一半请求超过 200 ms,p95/p99 才暴露这类尖刺。' },
      { q: '和 Excel 的 PERCENTILE.INC 一致吗?', a: '一致。工具用 inclusive 线性插值,与 Excel 的 PERCENTILE.INC 和 numpy 默认的 linear 方法相同;PERCENTILE.EXC 与 SPSS 用排他口径,数值会略有出入。' },
      { q: '孩子的身高在第几百分位算正常?', a: '生长曲线第 3–97 百分位之间都属正常;关键是轨迹稳定——沿自己的百分位线走就没问题,短期内跨越两条线以上才需要就医评估。' },
    ],
  },
  es: {
    formula: {
      formula: 'rank = ( P / 100 ) × (n − 1)',
      variables:
        'rank = posición basada en 0 en la lista ordenada\nP = percentil que se quiere hallar (0-100)\nn = número de puntos de datos',
      explain: 'Posición del percentil P-ésimo en una lista ordenada de n valores. Cuando el rango no es entero, se interpola entre los vecinos.',
      example:
        'Paso 1: puntuaciones ordenadas 3, 5, 8, 10, 14 (n = 5); halla el percentil 50.\nPaso 2: rank = (50 / 100) × (5 − 1) = 0.5 × 4 = 2.\nPaso 3: el rank 2 corresponde al tercer valor: 8. El rango es un número entero, así que no hay que interpolar.\nResultado: el percentil 50 (la mediana) es 8.',
    },
    ui: {
      'chartTitle': 'Distribución',
      'line.sorted': 'Valores ordenados',
      'in.numbers': 'Números (separados por comas)',
      'in.p': 'Percentil',
      'inSuffix.p': '%',
      'out.result': 'Valor del percentil',
      'datasetTruncated': 'solo se cuentan los primeros 10.000 números',
      note: '📈 El percentil 90 significa que el 90 % de los valores están por debajo de este número. Usa interpolación lineal (método inclusivo, igual que PERCENTILE.INC de Excel). Común en notas de exámenes y métricas de rendimiento.',
    },
    useCases: [
      'notas de exámenes: percentiles de SAT y GRE',
      'salarios: ver tu posición por percentil de ingresos',
      'salud: curvas de crecimiento de estatura y peso infantil',
      'rendimiento: latencia p95 de los tiempos de respuesta de una API',
    ],
    faqs: [
      { q: '¿Qué percentil se considera "bueno"?', a: 'Depende del contexto. En los exámenes estandarizados, el percentil 90 o superior es excelente. En las métricas de salud, cualquier valor entre los percentiles 5 y 95 suele ser normal. En los ingresos, un percentil más alto significa más ingresos respecto a tus pares.' },
      { q: '¿Qué es la latencia p95 de la monitorización?', a: 'Ordena los tiempos de respuesta y toma el percentil 95: el 95 % de las peticiones son más rápidas. La media engaña — con una media de 80 ms puede haber la mitad de las peticiones por encima de 200 ms; p95 y p99 revelan esos picos.' },
      { q: '¿Coincide con el PERCENTILE.INC de Excel?', a: 'Sí: interpolación lineal inclusiva, igual que PERCENTILE.INC de Excel y el método linear por defecto de numpy. Otras convenciones (PERCENTILE.EXC, SPSS) excluyen extremos y dan valores ligeramente distintos.' },
      { q: '¿Qué percentil de talla es normal en niños?', a: 'Entre los percentiles 3 y 97 (curvas de la OMS) se considera normal; lo importante es la trayectoria: si el niño sigue su propia curva, va bien. Cruzar dos líneas percentiles de repente es lo que motiva una consulta.' },
    ],
  },
  de: {
    formula: {
      formula: 'rank = ( P / 100 ) × (n − 1)',
      variables:
        'rank = nullbasierte Position in der sortierten Liste\nP = gesuchtes Perzentil (0-100)\nn = Anzahl der Datenpunkte',
      explain: 'Position des P-ten Perzentils in einer sortierten Liste von n Werten. Ist der Rang nicht ganzzahlig, wird zwischen Nachbarrängen interpoliert.',
      example:
        'Schritt 1: Sortierte Punkte 3, 5, 8, 10, 14 (n = 5); finde das 50. Perzentil.\nSchritt 2: rank = (50 / 100) × (5 − 1) = 0.5 × 4 = 2.\nSchritt 3: Rank 2 ist der dritte Wert: 8. Der Rang ist eine ganze Zahl, also ist keine Interpolation nötig.\nErgebnis: das 50. Perzentil (der Median) ist 8.',
    },
    ui: {
      'chartTitle': 'Verteilung',
      'line.sorted': 'Sortierte Werte',
      'in.numbers': 'Zahlen (kommagetrennt)',
      'in.p': 'Perzentil',
      'inSuffix.p': '%',
      'out.result': 'Perzentilwert',
      'datasetTruncated': 'nur die ersten 10.000 Zahlen werden gezählt',
      note: '📈 Das 90. Perzentil bedeutet, dass 90 % der Werte unter dieser Zahl liegen. Verwendet lineare Interpolation (inklusive Methode, wie Excel PERCENTILE.INC). Häufig bei Prüfungsergebnissen und Leistungskennzahlen.',
    },
    useCases: [
      'Prüfungsergebnisse: SAT- und GRE-Perzentile',
      'Gehälter: die eigene Position am Einkommensperzentil sehen',
      'Gesundheit: Wachstumskurven für Größe und Gewicht von Kindern',
      'Leistung: p95-Latenz der API-Antwortzeiten',
    ],
    faqs: [
      { q: 'Was ist ein „guter“ Perzentilwert?', a: 'Es hängt vom Kontext ab. Bei standardisierten Tests ist das 90. Perzentil oder höher ausgezeichnet. Bei Gesundheitskennwerten ist alles zwischen dem 5. und 95. Perzentil meist normal. Beim Einkommen bedeuten höhere Perzentile mehr Einkommen im Vergleich zu den Gleichaltrigen.' },
      { q: 'Was ist die p95-Latenz im Monitoring?', a: 'Sortiere die Antwortzeiten und nimm den 95. Wert: 95 % der Anfragen sind schneller. Der Mittelwert verschleiert den langen Schwanz — bei 80 ms Schnitt können trotzdem die Hälfte der Anfragen über 200 ms liegen; p95 und p99 zeigen diese Spitzen.' },
      { q: 'Entspricht das Excel PERCENTILE.INC?', a: 'Ja: lineare Interpolation, inklusive Methode — wie Excel PERCENTILE.INC und der numpy-Standard linear. Andere Konventionen (PERCENTILE.EXC, SPSS) schließen die Ränder aus und liefern leicht andere Werte.' },
      { q: 'Welches Perzentil ist bei Kindern normal?', a: 'Zwischen dem 3. und 97. Perzentil (WHO-Kurven) gilt die Größe als normal; entscheidend ist der Verlauf: Bleibt das Kind auf seiner Kurve, ist alles in Ordnung. Ein plötzlicher Sprung um zwei Perzentillinien ist der Anlass für den Kinderarzt.' },
    ],
  },
}
