/**
 * week-number-calculator 本地化 bundle —— zh / es / de(B10 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const WeekNumberCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['确认交付/汇报属于第几周(ISO 口径)', '排产与周报统一周编号', '弄清 1 月 1 日属于上一年的 W52/W53 还是本年 W1', '算今年还剩几个整周'],
    faqs: [
      { q: 'ISO 8601 周是怎么编号的?', a: '周从周一开始;包含当年第一个星期四的那一周是第 1 周。由此一年有 52 或 53 个 ISO 周——当一年首尾恰逢周四(或闰年的周三)时是 53 周,2026 年就有 53 周。' },
      { q: '为什么 2027 年 1 月 1 日是 2026-W53?', a: '那一周的周四是 2026 年 12 月 31 日,按"含当年第一个周四"规则整周归属 2026 年,所以 2026-12-28 到 2027-01-03 都记作 2026-W53。年底年初的日期最容易出现这种年号错位。' },
      { q: '美国口径一样吗?', a: '不一样。美国常用"1 月 1 日所在周为第 1 周、周日起始"的编号,与 ISO 能差 1 周;做跨国的排期对表时,务必先约定用哪种口径。本工具按 ISO 8601 输出。' },
      { q: '输入今天的日期能看到什么?', a: '除了所选日期的 ISO 周、周一起止日和剩余周数,挂载后还会单独补一行"本周(今天)"的 ISO 周号,方便和排期表对表。' },
    ],
    ui: {
      'in.date': '日期',
      'out.isoWeek': 'ISO 周',
      'out.weekStart': '本周起始(周一)',
      'out.weekEnd': '本周结束(周日)',
      'out.isoYear': 'ISO 周号年份',
      'out.weeksInYear': '该 ISO 年总周数',
      'out.weeksRemaining': '本周之后剩余 ISO 周',
      'out.thisWeek': '本周(今天)',
      'outSub.thisWeek': '挂载后显示',
      'note': '🗓️ ISO 8601 周从周一开始,包含当年第一个周四的那周为第 1 周——所以 1 月 1 日可能落在上一年的 W52/W53(2027-01-01 属于 2026-W53)。美国"含 1/1 的周为第 1 周"的口径在部分年份会偏移一周。',
      'errDate': '日期请按 YYYY-MM-DD 填写',
      'weekFmt': '{y}-W{w}',
    },
  },
  es: {
    useCases: ['confirmar a qué semana ISO pertenece una entrega o informe', 'unificar la numeración de semanas en producción', 'entender si el 1 de enero cae en la W52/W53 del año anterior', 'saber cuántas semanas enteras quedan del año'],
    faqs: [
      { q: '¿Cómo se numeran las semanas ISO 8601?', a: 'La semana empieza el lunes y la semana 1 es la que contiene el primer jueves del año. Por eso un año tiene 52 o 53 semanas ISO: 2026, por ejemplo, tiene 53.' },
      { q: '¿Por qué el 1 de enero de 2027 es 2026-W53?', a: 'El jueves de esa semana es el 31 de diciembre de 2026, así que toda la semana —del 28 de diciembre al 3 de enero— pertenece a 2026 como W53. El cambio de año es donde más se desalinean año natural y año ISO.' },
      { q: '¿Coincide con el criterio estadounidense?', a: 'No. EE. UU. suele usar «la semana del 1 de enero es la 1» empezando en domingo, lo que puede diferir en una semana de la ISO. En planificación internacional, acordad antes el criterio; esta herramienta usa ISO 8601.' },
      { q: '¿Qué veo si meto la fecha de hoy?', a: 'Además de la semana ISO, el lunes y el domingo y las semanas restantes para la fecha elegida, al cargar la página se añade una línea con la semana ISO de hoy para cotejar con tu calendario.' },
    ],
    ui: {
      'in.date': 'Fecha',
      'out.isoWeek': 'Semana ISO',
      'out.weekStart': 'Empieza (lunes)',
      'out.weekEnd': 'Termina (domingo)',
      'out.isoYear': 'Año de numeración ISO',
      'out.weeksInYear': 'Semanas del año ISO',
      'out.weeksRemaining': 'Semanas ISO restantes',
      'out.thisWeek': 'Esta semana (hoy)',
      'outSub.thisWeek': 'Se muestra al cargar',
      'note': '🗓️ Las semanas ISO 8601 empiezan el lunes y la semana 1 contiene el primer jueves del año — el 1 de enero puede caer en la W52/W53 anterior (el 2027-01-01 es 2026-W53). El criterio estadounidense («semana del 1/1») se desvía una semana en algunos años.',
      'errDate': 'Introduce la fecha como AAAA-MM-DD',
      'weekFmt': '{y}-W{w}',
    },
  },
  de: {
    useCases: ['klären, in welche ISO-Woche eine Lieferung oder ein Report fällt', 'einheitliche Wochennummern in der Produktionsplanung', 'verstehen, ob der 1. Januar in KW 52/53 des Vorjahrs liegt', 'zählen, wie viele volle Wochen im Jahr bleiben'],
    faqs: [
      { q: 'Wie werden ISO-8601-Wochen nummeriert?', a: 'Die Woche beginnt montags, und Woche 1 ist die Woche mit dem ersten Donnerstag des Jahres. Deshalb hat ein Jahr 52 oder 53 ISO-Wochen — 2026 etwa 53.' },
      { q: 'Warum ist der 1. Januar 2027 die KW 53/2026?', a: 'Der Donnerstag dieser Woche ist der 31. Dezember 2026, also gehört die ganze Woche (28.12.–3.1.) als KW 53 zu 2026. Am Jahreswechsel driften Kalenderjahr und ISO-Jahr am stärksten auseinander — in Deutschland die vertraute „KW“-Regel.' },
      { q: 'Gilt dasselbe wie in den USA?', a: 'Nein. In den USA ist Woche 1 meist die Woche des 1. Januar, beginnend am Sonntag — das kann um eine Woche von der ISO abweichen. Bei internationaler Planung vorher das System festlegen; dieser Rechner rechnet ISO 8601.' },
      { q: 'Was sehe ich bei der Eingabe des heutigen Datums?', a: 'Neben ISO-Woche, Montag/Sonntag und Restwochen des gewählten Datums erscheint nach dem Laden eine eigene Zeile mit der ISO-Woche von heute — praktisch zum Abgleich mit dem Kalender.' },
    ],
    ui: {
      'in.date': 'Datum',
      'out.isoWeek': 'ISO-Woche',
      'out.weekStart': 'Beginnt (Montag)',
      'out.weekEnd': 'Endet (Sonntag)',
      'out.isoYear': 'ISO-Wochennummerierungsjahr',
      'out.weeksInYear': 'Wochen des ISO-Jahres',
      'out.weeksRemaining': 'Verbleibende ISO-Wochen',
      'out.thisWeek': 'Diese Woche (heute)',
      'outSub.thisWeek': 'Erscheint nach dem Laden',
      'note': '🗓️ ISO-8601-Wochen beginnen montags; Woche 1 enthält den ersten Donnerstag des Jahres — der 1. Januar kann daher in die Vorjahres-KW 52/53 fallen (01.01.2027 ist KW 53/2026). Das US-System (Woche des 1.1.) weicht in manchen Jahren um eine Woche ab.',
      'errDate': 'Datum als JJJJ-MM-TT eingeben',
      'weekFmt': 'KW {w}/{y}',
    },
  },
}
