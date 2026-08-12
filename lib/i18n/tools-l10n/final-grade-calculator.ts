/**
 * final-grade-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = FinalGradeCalculatorClient = makeCalculatorClient,slug 待注入)
 */
import type { ToolL10n } from '../tool-l10n'

export const finalGradeCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '期末考试成绩计算器',
      '计算期末考试需要多少分',
      '目标成绩计算器',
      '期末成绩计算(rogerhub 风格)',
    ],
    faqs: [
      { q: '我的期末考是综合性的——这个公式还适用吗?', a: '适用——该公式对任何期末考试都成立。「权重」只是期末考试占总成绩的比例,与考试内容无关。' },
    ],
  },
  es: {
    useCases: [
      'calculadora de nota del examen final',
      'calcular la puntuación necesaria en el examen final',
      'calculadora de nota objetivo',
      'calculadora de nota final (estilo rogerhub)',
    ],
    faqs: [
      { q: 'Mi examen final es acumulativo, ¿esta fórmula sigue siendo válida?', a: 'Sí: la fórmula sirve para cualquier examen final. El «peso» es simplemente cuánto cuenta el examen final hacia la nota total, sin importar qué contenido abarque.' },
    ],
  },
  de: {
    useCases: [
      'Rechner für die Abschlussprüfungsnote',
      'die benötigte Punktzahl in der Abschlussprüfung berechnen',
      'Rechner für die Zielnote',
      'Abschlussnoten-Rechner (im Stil von rogerhub)',
    ],
    faqs: [
      { q: 'Meine Abschlussprüfung ist umfassend – funktioniert die Formel dann noch?', a: 'Ja – die Formel gilt für jede Abschlussprüfung. Das «Gewicht» ist lediglich der Anteil der Abschlussprüfung an der Gesamtnote, unabhängig davon, was sie abdeckt.' },
    ],
  },
}
