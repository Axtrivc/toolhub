/**
 * business-days-calculator 本地化 bundle —— zh / es / de(B10 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const BusinessDaysCalculatorL10n: ToolL10n = {

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
      'opt.direction.add': 'Sumar',
      'opt.direction.sub': 'Restar',
      'out.targetDate': 'Fecha objetivo',
      'out.targetISO': 'Fecha objetivo (ISO)',
      'out.calendarDays': 'Días naturales transcurridos',
      'out.weekendDays': 'Fines de semana saltados',
      'out.holidayHits': 'Festivos saltados',
      'note': '📅 Cuenta lunes-viernes como hábiles y salta la lista de festivos que pegues (AAAA-MM-DD, separada por comas). Para lo contrario — cuántos días hábiles hay entre dos fechas — usa la calculadora de diferencia de fechas.',
      'errDate': 'Introduce la fecha inicial como AAAA-MM-DD',
      'errCount': 'Los días hábiles deben ser al menos 1',
      'errRange': 'Demasiados días hábiles: el recuento día a día se detiene en unos 2.850 días hábiles (~11 años)',
      'none': 'Ninguno en el rango',
      'preset.0': 'Semana de Acción de Gracias',
      'preset.1': '30 días hábiles después',
      'preset.2': '10 días hábiles antes',
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
      'opt.direction.add': 'Addieren',
      'opt.direction.sub': 'Abziehen',
      'out.targetDate': 'Zieldatum',
      'out.targetISO': 'Zieldatum (ISO)',
      'out.calendarDays': 'Überstrichene Kalendertage',
      'out.weekendDays': 'Übersprungene Wochenendtage',
      'out.holidayHits': 'Übersprungene Feiertage',
      'note': '📅 Montag–Freitag gelten als Werktage; die eingefügte Feiertagsliste (JJJJ-MM-TT, kommagetrennt) wird übersprungen. Umgekehrt — wie viele Werktage liegen zwischen zwei Daten — nimmt den Datumsdifferenz-Rechner.',
      'errDate': 'Startdatum als JJJJ-MM-TT eingeben',
      'errCount': 'Werktage müssen mindestens 1 sein',
      'errRange': 'Zu viele Werktage — die Tag-für-Tag-Rechnung endet bei etwa 2.850 Werktagen (~11 Jahre)',
      'none': 'Keine im Zeitraum',
      'preset.0': 'Thanksgiving-Woche',
      'preset.1': '30 Werktage später',
      'preset.2': '10 Werktage zurück',
    },
  },
}
