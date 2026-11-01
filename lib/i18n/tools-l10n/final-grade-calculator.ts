/**
 * final-grade-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = FinalGradeCalculatorClient = makeCalculatorClient,slug 待注入)
 */
import type { ToolL10n } from '../tool-l10n'

export const finalGradeCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'needed = ( target − current × (1 − w) ) / w',
      explain: 'Nota necesaria en el final para alcanzar una nota global objetivo. current es tu nota hasta ahora, w el peso del final (en decimal). Indica lo que debes sacar en lo que queda.',
    },
    ui: {
      errWeight: 'El peso del examen final debe ser mayor que 0 %',
      alreadyAchieved: '🎉 Objetivo ya alcanzado — cualquier nota mantiene tu meta',
      impossible: 'imposible',
      'in.current': 'Nota actual',
      'in.goal': 'Nota objetivo',
      'in.finalWeight': 'Peso del examen final',
      'out.needed': 'Nota necesaria en el final',
      note: '🎓 Calcula la nota necesaria en el examen final para alcanzar tu nota objetivo. Si supera el 100 %, el objetivo es inalcanzable.',
      chartTitle: '¿Cómo de alcanzable es tu meta?',
      'zone.0': 'Con margen',
      'zone.1': 'Justo pero posible',
      'zone.2': 'Necesita más del 100 %',
    },
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
    formula: {
      formula: 'needed = ( target − current × (1 − w) ) / w',
      explain: 'In der Abschlussprüfung nötige Punktzahl, um eine Zielgesamtnote zu erreichen. current ist dein bisheriger Stand, w das Gewicht der Abschlussprüfung (als Dezimalzahl). So erfährst du, was du im verbleibenden Teil schaffen musst.',
    },
    ui: {
      errWeight: 'Das Gewicht der Abschlussprüfung muss größer als 0 % sein',
      alreadyAchieved: '🎉 Ziel bereits erreicht — jede Punktzahl reicht aus',
      impossible: 'unmöglich',
      'in.current': 'Aktuelle Note',
      'in.goal': 'Zielnote',
      'in.finalWeight': 'Gewicht der Abschlussprüfung',
      'out.needed': 'Benötigte Punktzahl in der Abschlussprüfung',
      note: '🎓 Berechnet die in der Abschlussprüfung benötigte Punktzahl, um die Zielnote zu erreichen. Liegt sie über 100 %, ist das Ziel unerreichbar.',
      chartTitle: 'Wie erreichbar?',
      'zone.0': 'Bequem',
      'zone.1': 'Knapp, aber machbar',
      'zone.2': 'Braucht über 100 %',
    },
    useCases: [
      'Rechner für die Abschlussprüfungsnote',
      'die benötigte Punktzahl in der Abschlussprüfung berechnen',
      'Rechner für die Zielnote',
      'Abschlussnoten-Rechner (im Stil von rogerhub)',
    ],
    faqs: [
      { q: 'Meine Abschlussprüfung ist umfassend – funktioniert die Formel dann noch?', a: 'Ja – die Formel gilt für jede Abschlussprüfung. Das „Gewicht“ ist lediglich der Anteil der Abschlussprüfung an der Gesamtnote, unabhängig davon, was sie abdeckt.' },
    ],
  },
}
