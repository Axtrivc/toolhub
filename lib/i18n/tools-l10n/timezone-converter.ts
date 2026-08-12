/**
 * timezone-converter 本地化 bundle —— zh / es / de
 * 覆盖:useCases(无 FAQ / formula 条目 → 仅 useCases)
 */
import type { ToolL10n } from '../tool-l10n'

export const timezoneConverterL10n: ToolL10n = {
  zh: {
    useCases: [
      '跨时区会议规划器',
      'EST 转 PST 转 UTC',
      '城市间时差计算器',
      '跨时区最佳会议时间',
    ],
  },
  es: {
    useCases: [
      'planificador de reuniones entre zonas horarias',
      'convertir EST a PST a UTC',
      'calculadora de diferencia horaria entre ciudades',
      'mejor hora para reunión entre zonas horarias',
    ],
  },
  de: {
    useCases: [
      'Meeting-Planer über Zeitzonen hinweg',
      'EST in PST nach UTC umrechnen',
      'Zeitunterschied-Rechner zwischen Städten',
      'beste Uhrzeit für länderübergreifende Meetings',
    ],
  },
}
