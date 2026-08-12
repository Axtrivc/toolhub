/**
 * time-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const timeConverterL10n: ToolL10n = {
  zh: {
    useCases: [
      '换算跑步配速(分钟/公里 ↔ 分钟/英里)',
      '计算工作时长和报酬',
      '规划视频和音频的时长',
      '估算项目时间线',
    ],
    faqs: [
      { q: '一年有多少小时?', a: '平均 8766 小时(365.25 × 24)。闰年有 8784 小时,平年有 8760 小时。' },
    ],
  },
  es: {
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
