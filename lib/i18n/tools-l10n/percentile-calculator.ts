/**
 * percentile-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = PercentileCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const percentileCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '考试成绩:SAT、GRE 百分位排名',
      '薪资:收入百分位看自己的位置',
      '健康:儿童身高/体重的生长曲线',
      '性能:API 响应时间的 p95 延迟',
    ],
    faqs: [
      { q: '百分位多少算「好」?', a: '要看场景。标准化考试中,第 90 百分位以上算优秀。健康指标方面,落在第 5–95 百分位之间通常都算正常。收入方面,百分位越高表示相对同侪收入越高。' },
    ],
  },
  es: {
    useCases: [
      'notas de exámenes: percentiles de SAT y GRE',
      'salarios: ver tu posición por percentil de ingresos',
      'salud: curvas de crecimiento de estatura y peso infantil',
      'rendimiento: latencia p95 de los tiempos de respuesta de una API',
    ],
    faqs: [
      { q: '¿Qué percentil se considera "bueno"?', a: 'Depende del contexto. En los exámenes estandarizados, el percentil 90 o superior es excelente. En las métricas de salud, cualquier valor entre los percentiles 5 y 95 suele ser normal. En los ingresos, un percentil más alto significa más ingresos en relación con tus iguales.' },
    ],
  },
  de: {
    useCases: [
      'Prüfungsergebnisse: SAT- und GRE-Perzentile',
      'Gehälter: die eigene Position am Einkommensperzentil sehen',
      'Gesundheit: Wachstumskurven für Größe und Gewicht von Kindern',
      'Leistung: p95-Latenz der API-Antwortzeiten',
    ],
    faqs: [
      { q: 'Was ist ein „guter" Perzentilwert?', a: 'Es hängt vom Kontext ab. Bei standardisierten Tests ist das 90. Perzentil oder höher ausgezeichnet. Bei Gesundheitskennwerten ist alles zwischen dem 5. und 95. Perzentil meist normal. Beim Einkommen bedeuten höhere Perzentile mehr Einkommen im Vergleich zu den Gleichaltrigen.' },
    ],
  },
}
