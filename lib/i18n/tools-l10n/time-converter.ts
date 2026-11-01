/**
 * time-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const timeConverterL10n: ToolL10n = {

  es: {
    ui: {
      'note': '⏱️ Meses y años usan promedios (30,44 días/mes, 365,25 días/año).',
      'unit.day': 'Días (d)',
      'unit.h': 'Horas (h)',
      'unit.min': 'Minutos (min)',
      'unit.month': 'Meses (mo)',
      'unit.ms': 'Milisegundos (ms)',
      'unit.ns': 'Nanosegundos (ns)',
      'unit.s': 'Segundos (s)',
      'unit.us': 'Microsegundos (µs)',
      'unit.week': 'Semanas (wk)',
      'unit.year': 'Años (yr)',
    },
    useCases: [
      'convertir ritmos de carrera (min/km a min/milla)',
      'calcular horas de trabajo y pago',
      'planificar la duración de vídeos y audios',
      'estimar cronogramas de proyectos',
    ],
    faqs: [
      { q: '¿Cuántas horas tiene un año?', a: '8766 horas de promedio (365,25 × 24). Un año bisiesto tiene 8784 horas; un año común, 8760.' },
    ],
  },
  de: {
    ui: {
      'note': '⏱️ Monate und Jahre nutzen Durchschnitte (30,44 Tage/Monat, 365,25 Tage/Jahr).',
      'unit.day': 'Tage (d)',
      'unit.h': 'Stunden (h)',
      'unit.min': 'Minuten (min)',
      'unit.month': 'Monate (mo)',
      'unit.ms': 'Millisekunden (ms)',
      'unit.ns': 'Nanosekunden (ns)',
      'unit.s': 'Sekunden (s)',
      'unit.us': 'Mikrosekunden (µs)',
      'unit.week': 'Wochen (wk)',
      'unit.year': 'Jahre (yr)',
    },
    useCases: [
      'Laufschritte umrechnen (min/km in min/Meile)',
      'Arbeitsstunden und Bezahlung berechnen',
      'Längen von Videos und Audio planen',
      'Projektzeitpläne abschätzen',
    ],
    faqs: [
      { q: 'Wie viele Stunden hat ein Jahr?', a: 'Durchschnittlich 8766 Stunden (365,25 × 24). Ein Schaltjahr hat 8784 Stunden, ein Gemeinjahr 8760.' },
    ],
  },
}
