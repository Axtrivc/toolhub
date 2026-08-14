/**
 * grade-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = GradeCalculatorClient = makeCalculatorClient,slug 待注入)
 */
import type { ToolL10n } from '../tool-l10n'

export const gradeCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'grade = Σ ( scoreᵢ × weightᵢ ) / Σ weightᵢ',
      explain: '加权平均。每项分数乘以其权重(如考试 40%、作业 60%),再除以总权重。权重高的项目对成绩影响更大。',
    },
    ui: {
      'in.earned': '得分点数',
      'in.possible': '满分点数',
      'out.pct': '百分比',
      'out.grade': '字母等级',
      note: '📚 美国标准字母等级制。部分学校使用 +/-(B+、B、B-);本工具使用基础 A-F 等级。',
    },
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
    formula: {
      formula: 'grade = Σ ( scoreᵢ × weightᵢ ) / Σ weightᵢ',
      explain: 'Promedio ponderado. Cada nota se multiplica por su peso (p. ej. examen 40%, deberes 60%) y se divide entre el peso total. Los ítems con más peso mueven más la nota.',
    },
    ui: {
      'in.earned': 'Puntos obtenidos',
      'in.possible': 'Puntos posibles',
      'out.pct': 'Porcentaje',
      'out.grade': 'Nota con letra',
      note: '📚 Escala de notas con letras estándar de EE. UU. Algunas escuelas usan +/- (B+, B, B-); esta usa la escala básica A-F.',
    },
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
    formula: {
      formula: 'grade = Σ ( scoreᵢ × weightᵢ ) / Σ weightᵢ',
      explain: 'Gewichteter Durchschnitt. Jede Note wird mit ihrer Gewichtung multipliziert (z. B. Klausur 40%, Hausaufgaben 60%) und durch das Gesamtgewicht geteilt. Höher gewichtete Posten bewegen die Note mehr.',
    },
    ui: {
      'in.earned': 'Erreichte Punkte',
      'in.possible': 'Mögliche Punkte',
      'out.pct': 'Prozentsatz',
      'out.grade': 'Buchstabennote',
      note: '📚 Standard-US-Notenskala mit Buchstaben. Manche Schulen nutzen +/– (B+, B, B-); dieses Tool verwendet die einfache A-F-Skala.',
    },
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
