/**
 * grade-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = GradeCalculatorClient = makeCalculatorClient,slug 待注入)
 */
import type { ToolL10n } from '../tool-l10n'

export const gradeCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '按得分点数计算成绩',
      '把考试分数换算成百分比成绩',
      '由得分点数得出字母等级',
      '计算加权成绩',
    ],
    faqs: [
      { q: '那「+/-」等级怎么办?', a: '很多学校使用更细的划分(A-、B+ 等)。本工具使用基础的五档制。请查询你所在学校对于「+/-」等级的具体分数线。' },
    ],
  },
  es: {
    useCases: [
      'calcular la nota por puntos obtenidos',
      'convertir la puntuación de un examen en nota porcentual',
      'obtener la letra de calificación a partir de los puntos',
      'calcular una nota ponderada',
    ],
    faqs: [
      { q: '¿Qué pasa con las notas con +/-?', a: 'Muchas escuelas usan divisiones más finas (A-, B+, etc.). Esta herramienta usa la escala básica de 5 niveles. Consulta los umbrales específicos de tu escuela para las notas con signo.' },
    ],
  },
  de: {
    useCases: [
      'die Note aus erreichten Punkten berechnen',
      'die Punktzahl einer Prüfung in eine Prozentnote umrechnen',
      'aus Punkten die Buchstabennote ermitteln',
      'eine gewichtete Note berechnen',
    ],
    faqs: [
      { q: 'Was ist mit +/– Noten?', a: 'Viele Schulen nutzen feinere Unterteilungen (A-, B+ usw.). Dieses Werkzeug verwendet die einfache 5-Stufen-Skala. Frag an deiner Schule nach den genauen Grenzwerten für Plus-/Minusnoten.' },
    ],
  },
}
