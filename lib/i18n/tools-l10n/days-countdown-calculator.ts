/**
 * days-countdown-calculator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(无 FAQ / formula 条目 → 仅 useCases)
 */
import type { ToolL10n } from '../tool-l10n'

export const daysCountdownCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '距某日期还有多少天',
      '截止日期实时倒计时',
      '两个日期间的营业日数',
      '距某事件已过多少天',
    ],
  },
  es: {
    useCases: [
      'cuántos días faltan para una fecha',
      'cuenta atrás en vivo hasta la fecha límite',
      'días laborables entre dos fechas',
      'calculadora de días desde un evento',
    ],
  },
  de: {
    useCases: [
      'wie viele Tage bis zu einem Datum',
      'Live-Countdown bis zur Deadline',
      'Werktage zwischen zwei Daten',
      'Tage-seit-Ereignis-Rechner',
    ],
  },
}
