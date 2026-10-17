/**
 * business-days-calculator 本地化 bundle —— zh / es / de(B10 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const BusinessDaysCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['推算合同交付日(顺延 N 个工作日)', '法定通知期到期日(如 10 个工作日)', '从截止日倒推开工日(减去 N 个工作日)', '考虑公司假日表后的项目排期'],
    faqs: [
      { q: '工作日怎么定义?', a: '周一至周五为工作日,周六日一律跳过;你粘贴的假日清单(YYYY-MM-DD,逗号分隔)中的日期同样跳过。落在周末的假日不会被重复扣除。' },
      { q: '起始日当天算不算?', a: '不算——从起始日的下一个日历日开始逐日推进,数满 N 个工作日那天即目标日。加 10 个工作日从周一开始,会落在下下周一(中间隔一个周末)。' },
      { q: '能倒着减吗?', a: '可以。选 Subtract,从起始日往回数 N 个工作日,常用于"截止日向前推 5 个工作日必须提交"这类场景。' },
      { q: '与"两日期间工作日数"有什么区别?', a: '本工具是日期推算:已知起点和 N,求终点。若你已知两个日期、想数中间有几个工作日,请用日期差计算器——那是反向问题。' },
    ],
    ui: {
      'in.startDate': '起始日期',
      'in.direction': '方向',
      'in.count': '工作日数',
      'in.holidays': '假日清单(可选)',
      'opt.direction.add': '向后加工作日',
      'opt.direction.sub': '向前减工作日',
      'out.targetDate': '目标日期',
      'out.targetISO': '目标日期(ISO)',
      'out.calendarDays': '跨过的日历天数',
      'out.weekendDays': '跳过的周末天数',
      'out.holidayHits': '跳过的假日数',
      'note': '📅 周一至周五按工作日计,并逐日跨过你粘贴的假日清单(YYYY-MM-DD,逗号分隔)。要反过来——数两个日期之间有几个工作日——请用日期差计算器。',
      'errDate': '起始日期请按 YYYY-MM-DD 填写',
      'errCount': '工作日数至少为 1',
      'none': '区间内无',
    },
  },
  es: {
    useCases: ['calcular la fecha de entrega de un contrato (N días hábiles después)', 'cerrar el plazo de un aviso legal (p. ej. 10 días hábiles)', 'retroceder N días hábiles desde una fecha límite', 'planificar proyectos con el calendario de festivos de la empresa'],
    faqs: [
      { q: '¿Qué cuenta como día hábil?', a: 'De lunes a viernes; sábados y domingos se saltan siempre, igual que las fechas que pegues en la lista de festivos (AAAA-MM-DD, separadas por comas). Un festivo que cae en fin de semana no se descuenta dos veces.' },
      { q: '¿El día de inicio cuenta?', a: 'No — se avanza día a día desde el día siguiente y la fecha objetivo es la que completa N días hábiles. Sumar 10 días hábiles partiendo de un lunes cae en el lunes de la semana siguiente.' },
      { q: '¿Puedo restar días hábiles?', a: 'Sí. Elige Subtract para contar hacia atrás N días hábiles desde la fecha inicial — típico para «entregar 5 días hábiles antes del cierre».' },
      { q: '¿En qué se diferencia de contar días hábiles entre dos fechas?', a: 'Esta herramienta empuja una fecha: conoces el inicio y N, y buscas el destino. Si ya tienes dos fechas y quieres cuántos días hábiles hay entre ellas, usa la calculadora de diferencia de fechas.' },
    ],
    ui: {
      'in.startDate': 'Fecha inicial',
      'in.direction': 'Dirección',
      'in.count': 'Días hábiles',
      'in.holidays': 'Festivos (opcional)',
      'opt.direction.add': 'Sumar días hábiles',
      'opt.direction.sub': 'Restar días hábiles',
      'out.targetDate': 'Fecha objetivo',
      'out.targetISO': 'Fecha objetivo (ISO)',
      'out.calendarDays': 'Días naturales transcurridos',
      'out.weekendDays': 'Fines de semana saltados',
      'out.holidayHits': 'Festivos saltados',
      'note': '📅 Cuenta lunes-viernes como hábiles y salta la lista de festivos que pegues (AAAA-MM-DD, separada por comas). Para lo contrario — cuántos días hábiles hay entre dos fechas — usa la calculadora de diferencia de fechas.',
      'errDate': 'Introduce la fecha inicial como AAAA-MM-DD',
      'errCount': 'Los días hábiles deben ser al menos 1',
      'none': 'Ninguno en el rango',
    },
  },
  de: {
    useCases: ['Vertragstermine berechnen (N Werktage später)', 'Fristen für Kündigungen einhalten (z. B. 10 Werktage)', 'von einem Stichtag N Werktage zurückrechnen', 'Projekte mit dem Feiertagskalender der Firma planen'],
    faqs: [
      { q: 'Was gilt als Werktag?', a: 'Montag bis Freitag; Samstage und Sonntage werden immer übersprungen, ebenso die Daten, die du in die Feiertagsliste einfügst (JJJJ-MM-TT, kommagetrennt). Ein Feiertag am Wochenende wird nicht doppelt abgezogen.' },
      { q: 'Zählt der Starttag mit?', a: 'Nein — es wird ab dem Folgetag Tag für Tag weitergezählt; das Ziel ist der Tag, der den N. Werktag vollendet. 10 Werktage ab Montag ergeben den Montag der übernächsten Woche.' },
      { q: 'Kann ich Werktage abziehen?', a: 'Ja. Wähle Subtrahieren, um vom Startdatum N Werktage rückwärts zu zählen — typisch für „5 Werktage vor Abgabefrage einreichen“.' },
      { q: 'Worin unterscheidet sich das Zählen von Werktagen zwischen zwei Daten?', a: 'Dieser Rechner schiebt ein Datum fort: Start und N sind bekannt, das Ziel wird gesucht. Hast du schon zwei Daten und willst wissen, wie viele Werktage dazwischenliegen, nutze den Datumsdifferenz-Rechner.' },
    ],
    ui: {
      'in.startDate': 'Startdatum',
      'in.direction': 'Richtung',
      'in.count': 'Werktage',
      'in.holidays': 'Feiertage (optional)',
      'opt.direction.add': 'Werktage addieren',
      'opt.direction.sub': 'Werktage abziehen',
      'out.targetDate': 'Zieldatum',
      'out.targetISO': 'Zieldatum (ISO)',
      'out.calendarDays': 'Überstrichene Kalendertage',
      'out.weekendDays': 'Übersprungene Wochenendtage',
      'out.holidayHits': 'Übersprungene Feiertage',
      'note': '📅 Montag–Freitag gelten als Werktage; die eingefügte Feiertagsliste (JJJJ-MM-TT, kommagetrennt) wird übersprungen. Umgekehrt — wie viele Werktage liegen zwischen zwei Daten — nimmt den Datumsdifferenz-Rechner.',
      'errDate': 'Startdatum als JJJJ-MM-TT eingeben',
      'errCount': 'Werktage müssen mindestens 1 sein',
      'none': 'Keine im Zeitraum',
    },
  },
}
