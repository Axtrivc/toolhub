/**
 * ovulation-calculator 本地化 bundle —— zh / es / de(2026-10 B7 家庭健康批次)
 * 覆盖: ui + faqs + useCases(client = OvulationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const OvulationCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular el día de ovulación desde tu última regla', 'marcar la ventana fértil de 6 días con mayores probabilidades', 'predecir la fecha de la próxima regla', 'planificar las relaciones si buscas embarazo'],
    faqs: [
      { q: '¿Cómo encuentra la calculadora mi día de ovulación?', a: 'La ovulación ocurre un número fijo de días (tu fase lútea, 14 por defecto) antes de la PRÓXIMA regla, no un tiempo fijo después de la última. La herramienta suma tu ciclo al primer día de la última regla y luego cuenta hacia atrás tu fase lútea — por eso la duración del ciclo lo es todo.' },
      { q: '¿Las probabilidades son iguales todos los días de la ventana fértil?', a: 'No: la ventana son los 5 días previos a la ovulación más el propio día. Los espermatozoides sobreviven hasta 5 días, pero el óvulo solo vive unas 24 horas; de hecho, las mayores probabilidades están 1-2 días antes de ovular.' },
      { q: 'Mi ciclo es irregular, ¿sirve igual?', a: 'Solo como aproximación. Con ciclos que oscilan entre 26 y 40 días la ovulación puede moverse dos semanas; la herramienta acepta ciclos de 21-45 días, pero trata el resultado como una ventana, no como una fecha. Las pruebas de LH o la temperatura basal confirman el día real.' },
      { q: '¿Puedo usarlo para evitar el embarazo?', a: 'No. La predicción de calendario por sí sola no es anticoncepción fiable: la supervivencia espermática y las variaciones del ciclo ensanchan la ventana real. Es una ayuda para planificar el embarazo; para evitarlo usa métodos probados.' },
    ],
    ui: {
      'in.lmp': 'Primer día de la última regla (AAAA-MM-DD)',
      'in.cycle': 'Duración del ciclo',
      'inSuffix.cycle': 'días',
      'in.luteal': 'Duración de la fase lútea',
      'inSuffix.luteal': 'días',
      'out.ovulation': 'Día de ovulación estimado',
      'out.fertileStart': 'Empieza la ventana fértil',
      'out.fertileEnd': 'Termina la ventana fértil',
      'out.nextPeriod': 'Próxima regla prevista',
      'out.nextPeriodIn': 'Próxima regla en',
      'out.status': 'Ahora mismo',
      'outSub.status': 'Según hoy',
      'outSub.nextPeriodIn': 'Según hoy',
      'chartTitle': 'Días fértiles en tu ciclo',
      'slice.fertileDays': 'Ventana fértil (6 días)',
      'slice.otherDays': 'Resto del ciclo',
      'errInvalid': 'Introduce una fecha válida (AAAA-MM-DD), ciclo de 21-45 días y fase lútea de 9-16',
      'errTooOld': 'La última regla está a más de 60 ciclos atrás: revisa la fecha (¿error en el año?)',
      'statusFertile': 'La ventana fértil está abierta',
      'statusToday': 'Hoy es el día de la ovulación',
      'statusIn': 'Próxima ovulación en {n} días',
      'periodToday': 'Prevista para hoy',
      'periodIn': 'En {n} días',
      'note': '📅 Ovulación = próxima regla − 14 días (fase lútea). Los espermatozoides sobreviven hasta 5 días y el óvulo unas 24 horas, así que la ventana fértil son los 5 días previos a la ovulación más el propio día: 6 días. Ciclos de 21-45 días.',
    },
  },
  de: {
    useCases: ['den Eisprungtag aus der letzten Periode berechnen', 'das 6-tägige fruchtbare Fenster mit besten Chancen markieren', 'den nächsten Periodentermin vorhersagen', 'Verkehrstermine bei Kinderwunsch planen'],
    faqs: [
      { q: 'Wie findet der Rechner meinen Eisprungtag?', a: 'Der Eisprung liegt eine feste Zahl von Tagen (deine Lutealphase, standardmäßig 14) vor der NÄCHSTEN Periode — nicht feste Tage nach der letzten. Das Werkzeug addiert deine Zykluslänge zum ersten Tag der letzten Periode und zählt dann die Lutealphase zurück; deshalb zählt die Zykluslänge mehr als alles andere.' },
      { q: 'Sind die Chancen an jedem Tag des fruchtbaren Fensters gleich?', a: 'Nein: Das Fenster sind die 5 Tage vor dem Eisprung plus der Tag selbst. Spermien überleben bis zu 5 Tage, die Eizelle nur etwa 24 Stunden — die höchsten Befruchtungschancen haben Geschlechtsverkehr 1-2 Tage vor dem Eisprung.' },
      { q: 'Mein Zyklus ist unregelmäßig — stimmt das Ergebnis?', a: 'Nur grob. Schwankt der Zyklus etwa zwischen 26 und 40 Tagen, kann sich der Eisprung um zwei Wochen verschieben; der Rechner akzeptiert 21-45 Tage, aber betrachte das Ergebnis als Fenster, nicht als Datum. LH-Tests oder Basaltemperatur bestätigen den echten Tag.' },
      { q: 'Kann ich damit verhüten?', a: 'Nein. Die Kalenderrechnung allein ist keine zuverlässige Verhütung — Spermienüberleben und Zyklusschwankungen machen das echte Fenster breiter. Sie ist eine Hilfe bei Kinderwunsch; zur Verhütung nutze erprobte Methoden.' },
    ],
    ui: {
      'in.lmp': 'Erster Tag der letzten Periode (JJJJ-MM-TT)',
      'in.cycle': 'Zykluslänge',
      'inSuffix.cycle': 'Tage',
      'in.luteal': 'Länge der Lutealphase',
      'inSuffix.luteal': 'Tage',
      'out.ovulation': 'Voraussichtlicher Eisprungtag',
      'out.fertileStart': 'Fruchtbares Fenster beginnt',
      'out.fertileEnd': 'Fruchtbares Fenster endet',
      'out.nextPeriod': 'Nächste Periode erwartet',
      'out.nextPeriodIn': 'Nächste Periode in',
      'out.status': 'Aktuell',
      'outSub.status': 'Bezogen auf heute',
      'outSub.nextPeriodIn': 'Bezogen auf heute',
      'chartTitle': 'Fruchtbare Tage im Zyklus',
      'slice.fertileDays': 'Fruchtbares Fenster (6 Tage)',
      'slice.otherDays': 'Rest des Zyklus',
      'errInvalid': 'Gültiges Datum eingeben (JJJJ-MM-TT), Zyklus 21-45 Tage, Lutealphase 9-16',
      'errTooOld': 'Die letzte Periode liegt mehr als 60 Zyklen zurück — bitte Datum prüfen (Tippfehler im Jahr?)',
      'statusFertile': 'Das fruchtbare Fenster ist gerade offen',
      'statusToday': 'Heute ist der Eisprungtag',
      'statusIn': 'Nächster Eisprung in {n} Tagen',
      'periodToday': 'Für heute erwartet',
      'periodIn': 'In {n} Tagen',
      'note': '📅 Eisprung = nächste Periode − 14 Tage (Lutealphase). Spermien überleben bis zu 5 Tage, die Eizelle etwa 24 Stunden — das fruchtbare Fenster sind die 5 Tage vor dem Eisprung plus der Tag selbst: 6 Tage. Zyklen von 21-45 Tagen.',
    },
  },
}
