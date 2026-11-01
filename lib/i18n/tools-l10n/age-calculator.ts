/**
 * age-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = AgeCalculatorClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const ageCalculatorL10n: ToolL10n = {

  es: {
    ui: {
      birthdayToday: '🎂 ¡Feliz cumpleaños — hoy es el día!',
      'ageAtDate': 'Edad en la fecha',
      'asOfSelectedDate': 'A la fecha seleccionada',
      'dateOfBirth': 'Fecha de nacimiento',
      'lifeWeeksTitle': 'Tu vida en semanas',
      'legendLived': 'Semanas vividas',
      'legendRemaining': 'Semanas restantes (hasta los 90)',
      'legendCurrent': 'Semana actual',
      'lifeSummary': '{x} semanas vividas · {y} por vivir · {p}% de la cuadrícula',
      'day': 'día',
      'days': 'días',
      'daysAbbr': ' días',
      'dayAbbr': ' día',
      'emptyState': 'La «edad en la fecha» debe ser posterior a la fecha de nacimiento',
      'moAbbr': ' meses ',
      'monthAbbr': ' mes ',
      'nextBirthdayIn': '🎂 Próximo cumpleaños en ',
      'note': '📅 Puedes cambiar la «edad en la fecha» para calcular la edad en cualquier fecha pasada o futura — útil para plazos, verificación de edad o cálculos históricos.',
      'totalDays': 'Días totales',
      'totalHours': 'Horas totales',
      'totalMonths': 'Meses totales',
      'totalWeeks': 'Semanas totales',
      'yourAge': 'Tu edad',
      'yrsAbbr': ' años ',
      'yrAbbr': ' año ',
    },
    useCases: [
      'comprobar si se alcanza un umbral de edad legal',
      'calcular cuántos días has vivido',
      'seguir el desarrollo de un bebé en meses',
      'saber cuánto tiempo hace que ocurrió un evento histórico',
    ],
    faqs: [
      { q: '¿Cómo sé cuántos días tengo?', a: 'Introduce tu fecha de nacimiento y deja la «edad en la fecha» como hoy. La calculadora muestra tus días totales vividos: la mayoría de los adultos está entre 7.000 y 30.000 días.' },
      { q: '¿Cómo calculo el tiempo entre dos fechas?', a: 'Usa el campo «fecha de nacimiento» como fecha de inicio y el campo «edad en la fecha» como fecha de fin. El resultado muestra la duración precisa entre ambas en años, meses, días, semanas y horas — útil para proyectos, contratos o aniversarios.' },
      { q: '¿Es preciso el cálculo?', a: 'Totalmente. La calculadora usa el manejo de fechas integrado de tu navegador, que tiene en cuenta años bisiestos, longitudes variables de los meses y el horario de verano. No hay ninguna aproximación.' },
    ],
  },
  de: {
    ui: {
      birthdayToday: '🎂 Alles Gute zum Geburtstag — heute ist der Tag!',
      'ageAtDate': 'Alter am Datum',
      'asOfSelectedDate': 'Zum gewählten Datum',
      'dateOfBirth': 'Geburtsdatum',
      'lifeWeeksTitle': 'Dein Leben in Wochen',
      'legendLived': 'Gelebte Wochen',
      'legendRemaining': 'Verbleibende Wochen (bis 90)',
      'legendCurrent': 'Aktuelle Woche',
      'lifeSummary': '{x} Wochen gelebt · {y} übrig · {p}% des Rasters',
      'day': 'Tag',
      'days': 'Tage',
      'daysAbbr': ' Tage',
      'dayAbbr': ' Tag',
      'emptyState': 'Das „Alter am Datum“ muss nach dem Geburtsdatum liegen',
      'moAbbr': ' Mo ',
      'monthAbbr': ' Mo ',
      'nextBirthdayIn': '🎂 Nächster Geburtstag in ',
      'note': '📅 Du kannst das „Alter am Datum“ ändern, um das Alter an jedem vergangenen oder zukünftigen Datum zu berechnen — nützlich für Fristen, Altersprüfung oder historische Berechnungen.',
      'totalDays': 'Tage gesamt',
      'totalHours': 'Stunden gesamt',
      'totalMonths': 'Monate gesamt',
      'totalWeeks': 'Wochen gesamt',
      'yourAge': 'Dein Alter',
      'yrsAbbr': ' Jahre ',
      'yrAbbr': ' Jahr ',
    },
    useCases: [
      'prüfen, ob eine gesetzliche Altersgrenze erreicht ist',
      'berechnen, wie viele Tage du schon gelebt hast',
      'die Entwicklung eines Babys in Monaten verfolgen',
      'herausfinden, wie lange ein historisches Ereignis zurückliegt',
    ],
    faqs: [
      { q: 'Wie rechne ich aus, wie viele Tage ich alt bin?', a: 'Gib dein Geburtsdatum ein und lasse das Feld „Alter am Datum“ auf heute stehen. Der Rechner zeigt deine insgesamt gelebten Tage — die meisten Erwachsenen liegen irgendwo zwischen 7.000 und 30.000 Tagen.' },
      { q: 'Wie berechne ich die Zeit zwischen zwei Daten?', a: 'Verwende das Feld „Geburtsdatum“ als Startdatum und das Feld „Alter am Datum“ als Enddatum. Das Ergebnis zeigt die genaue Dauer dazwischen in Jahren, Monaten, Tagen, Wochen und Stunden — nützlich für Projekte, Verträge oder Jahrestage.' },
      { q: 'Wie genau ist die Berechnung?', a: 'Vollkommen genau. Der Rechner verwendet die integrierte Datumsverarbeitung deines Browsers, die Schaltjahre, unterschiedlich lange Monate und die Sommerzeit berücksichtigt. Es gibt keine Näherung.' },
    ],
  },
}
