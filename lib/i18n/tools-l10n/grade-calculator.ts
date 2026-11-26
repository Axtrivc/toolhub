/**
 * grade-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = GradeCalculatorClient = makeCalculatorClient,slug 待注入)
 */
import type { ToolL10n } from '../tool-l10n'

export const gradeCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'porcentaje = (puntos obtenidos ÷ puntos posibles) × 100',
      explain: 'Divide los puntos obtenidos entre los puntos posibles y multiplica por 100 para obtener el porcentaje. La letra de la calificación sigue la escala estadounidense estándar A-F (A ≥ 90, B ≥ 80, C ≥ 70, D ≥ 60, F por debajo de 60).',
    },
    ui: {
      'in.earned': 'Puntos obtenidos',
      'in.possible': 'Puntos posibles',
      'out.pct': 'Porcentaje',
      'out.grade': 'Nota con letra',
      note: '📚 Escala de notas con letras estándar de EE. UU. Algunas escuelas usan +/- (B+, B, B-); esta usa la escala básica A-F.',
      chartTitle: 'Dónde estás',
    },
    useCases: [
      'calcular la nota por puntos obtenidos',
      'convertir la puntuación de un examen en nota porcentual',
      'obtener la letra de calificación a partir de los puntos',
    ],
    faqs: [
      { q: '¿Qué pasa con las notas con +/-?', a: 'Muchas escuelas usan divisiones más finas (A-, B+, etc.). Esta herramienta usa la escala básica de 5 niveles. Consulta los umbrales específicos de tu escuela para las notas con signo.' },
    ],
  },
  de: {
    formula: {
      formula: 'Prozentsatz = (erreichte Punkte ÷ mögliche Punkte) × 100',
      explain: 'Teile die erreichten Punkte durch die möglichen Punkte und multipliziere mit 100, um den Prozentsatz zu erhalten. Die Note folgt der üblichen US-amerikanischen A-F-Skala (A ≥ 90, B ≥ 80, C ≥ 70, D ≥ 60, F unter 60).',
    },
    ui: {
      'in.earned': 'Erreichte Punkte',
      'in.possible': 'Mögliche Punkte',
      'out.pct': 'Prozentsatz',
      'out.grade': 'Buchstabennote',
      note: '📚 Standard-US-Notenskala mit Buchstaben. Manche Schulen nutzen +/- (B+, B, B-); dieses Tool verwendet die einfache A-F-Skala.',
      chartTitle: 'Wo du liegst',
    },
    useCases: [
      'die Note aus erreichten Punkten berechnen',
      'die Punktzahl einer Prüfung in eine Prozentnote umrechnen',
      'aus Punkten die Buchstabennote ermitteln',
    ],
    faqs: [
      { q: 'Was ist mit +/- Noten?', a: 'Viele Schulen nutzen feinere Unterteilungen (A-, B+ usw.). Dieses Werkzeug verwendet die einfache 5-Stufen-Skala. Frag an deiner Schule nach den genauen Grenzwerten für Plus-/Minusnoten.' },
    ],
  },
}
