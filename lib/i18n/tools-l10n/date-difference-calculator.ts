/**
 * date-difference-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = DateDifferenceClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const dateDifferenceCalculatorL10n: ToolL10n = {

  es: {
    ui: {
      'barTitle': 'Desglose de la duración',
      'segYears': 'Años',
      'segMonths': 'Meses',
      'segWeeks': 'Semanas',
      'segDays': 'Días',
      'chipsTitle': 'Hitos',
      'msYear': 'año',
      'msYears': 'años',
      'msDaysAgo': 'días atrás',
      'msDaysAway': 'días restantes',
      'businessDays': 'Días laborables',
      'daysWord': ' días',
      'duration': 'Duración',
      'emptyState': 'Elige dos fechas para ver la duración entre ellas.',
      'endDate': 'Fecha de fin',
      'errEndBeforeStart': 'La fecha de fin es anterior a la fecha de inicio.',
      'errInvalidDate': 'Introduce ambas fechas en formato AAAA-MM-DD.',
      'moAbbr': ' mes ',
      'monFri': 'Lun–Vie',
      'note': '📅 Útil para planificación de proyectos, duraciones de contrato, cálculos de edad y seguimiento de plazos. Los días laborables excluyen fines de semana (sábado y domingo).',
      'startDate': 'Fecha de inicio',
      'totalDays': 'Días totales',
      'totalHours': 'Horas totales',
      'totalMonths': 'Meses totales',
      'totalWeeks': 'Semanas totales',
      'yrAbbr': ' año ',
    },
    formula: {
      formula: 'days = date₂ − date₁',
      explain: 'Diferencia en días completos entre dos fechas calendario, contando cada medianoche cruzada. La hora del día y la zona horaria pueden sumar o restar un día en los bordes.',
    },
    useCases: [
      'contar cuántos días laborables faltan para una fecha límite',
      'calcular la duración de un contrato o alquiler',
      'seguir el avance del embarazo por semanas',
      'saber cuánto tiempo ha pasado desde un aniversario',
    ],
    faqs: [
      { q: '¿Cuenta el día de inicio o el de fin?', a: 'Esta calculadora cuenta los días completos entre las dos fechas (fecha final menos fecha inicial), lo que excluye el propio día de inicio. Si necesitas un recuento «inclusivo» (contando ambos extremos), suma 1 día al resultado.' },
      { q: '¿Cómo gestiona los años bisiestos y las zonas horarias?', a: 'Usa la aritmética de fechas integrada del navegador, que tiene en cuenta correctamente los años bisiestos, las longitudes variables de los meses y el horario de verano. Para planificación entre zonas horarias, introduce fechas en lugar de horas exactas para evitar resultados desfasados por un día.' },
      { q: '¿Cuántos días tiene un año?', a: 'Un año común tiene 365 días; uno bisiesto, 366. Promediado en el ciclo gregoriano de 400 años, un año equivale a 365,2425 días. Para estimaciones rápidas usa 365; para cálculos de varias décadas, la herramienta gestiona los años bisiestos automáticamente.' },
    ],
  },
  de: {
    ui: {
      'barTitle': 'Aufschlüsselung der Dauer',
      'segYears': 'Jahre',
      'segMonths': 'Monate',
      'segWeeks': 'Wochen',
      'segDays': 'Tage',
      'chipsTitle': 'Meilensteine',
      'msYear': 'Jahr',
      'msYears': 'Jahre',
      'msDaysAgo': 'Tage her',
      'msDaysAway': 'Tage entfernt',
      'businessDays': 'Werktage',
      'daysWord': ' Tage',
      'duration': 'Dauer',
      'emptyState': 'Wähle zwei Daten, um die Zeitspanne dazwischen zu sehen.',
      'endDate': 'Enddatum',
      'errEndBeforeStart': 'Das Enddatum liegt vor dem Startdatum.',
      'errInvalidDate': 'Gib beide Daten im Format JJJJ-MM-TT ein.',
      'moAbbr': ' Mon. ',
      'monFri': 'Mo–Fr',
      'note': '📅 Nützlich für Projektplanung, Vertragslaufzeiten, Altersberechnungen und Fristverfolgung. Werktage schließen Wochenenden (Samstag und Sonntag) aus.',
      'startDate': 'Startdatum',
      'totalDays': 'Tage gesamt',
      'totalHours': 'Stunden gesamt',
      'totalMonths': 'Monate gesamt',
      'totalWeeks': 'Wochen gesamt',
      'yrAbbr': ' Jahr ',
    },
    formula: {
      formula: 'days = date₂ − date₁',
      explain: 'Ganztägige Differenz zwischen zwei Kalenderdaten, jede überschrittene Mitternacht zählt. Uhrzeit und Zeitzone können am Rand einen Tag addieren oder abziehen.',
    },
    useCases: [
      'zählen, wie viele Werktage bis zu einer Frist bleiben',
      'die Laufzeit eines Vertrags oder Mietverhältnisses berechnen',
      'den Schwangerschaftsverlauf in Wochen verfolgen',
      'herausfinden, wie lange ein Jahrestag zurückliegt',
    ],
    faqs: [
      { q: 'Werden der Start- oder der Endtag mitgezählt?', a: 'Dieser Rechner zählt die vollen Tage zwischen den beiden Daten (Enddatum minus Startdatum), wobei der Starttag selbst nicht enthalten ist. Wenn du „inklusive“ zählen möchtest (beide Endpunkte), addiere 1 Tag zum Ergebnis.' },
      { q: 'Wie werden Schaltjahre und Zeitzonen behandelt?', a: 'Er verwendet die integrierte Datumsmathematik des Browsers, die Schaltjahre, unterschiedlich lange Monate und die Sommerzeit korrekt berücksichtigt. Gib bei zeitzonenübergreifender Planung lieber nur Daten als genaue Zeiten ein, um Off-by-one-Ergebnisse zu vermeiden.' },
      { q: 'Wie viele Tage hat ein Jahr?', a: 'Ein Gemeinjahr hat 365 Tage, ein Schaltjahr 366. Über den 400-jährigen gregorianischen Zyklus gemittelt entspricht ein Jahr 365,2425 Tagen. Für schnelle Schätzwerte nimm 365; bei Datumsberechnungen über Jahrzehnte verwaltet das Werkzeug die Schaltjahre automatisch.' },
    ],
  },
}
