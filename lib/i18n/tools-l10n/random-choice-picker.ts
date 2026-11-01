/**
 * random-choice-picker 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const randomChoicePickerL10n: ToolL10n = {

  es: {
    ui: {
      'clear': 'Limpiar',
      'copyWinners': 'Copiar ganadores',
      'history': 'Historial',
      'noRepeatWinners': 'Sin repetir ganadores',
      'noteIntro': '🎲 Los ganadores se extraen con ',
      'noteMid': ' y muestreo de rechazo (sin sesgo de módulo), de modo que cada opción tiene exactamente las mismas probabilidades. Con ',
      'noteNoRepeat': 'sin repetir ganadores',
      'noteOutro': ' activado, las extracciones son sin reemplazo; desactívalo para permitir que la misma opción gane varias veces en una tirada.',
      'numberOfWinners': 'Número de ganadores',
      'optionPlural': 'opciones',
      'optionSingular': 'opción',
      'optionsLabel': 'Opciones — una por línea',
      'pick': 'Elegir',
      'picking': 'Eligiendo…',
      'pressPickToChoose': 'Pulsa «Elegir» para lanzar el sorteo',
      'removeWinnerAfterPicking': 'Quitar ganador tras elegir',
      'stateOff': '(desactivado)',
      'stateOn': '(activado)',
      'tooFewError': '⚠️ Añade al menos 2 opciones (una por línea) para elegir.',
      'winnerPlural': 'ganadores',
      'winnerSingular': 'ganador',
    },
    useCases: [
      'elegir al azar una opción de una lista',
      'tomar decisiones al azar con una ruleta',
      'extraer un ganador al azar de una lista',
      'hacer una elección aleatoria con animación',
    ],
    faqs: [
      {
        q: '¿La selección es realmente aleatoria?',
        a: 'Usa el generador de números aleatorios integrado del navegador, suficiente para selecciones justas, sorteos y decisiones. Para seguridad criptográfica necesitarías un CSPRNG dedicado, pero para elegir entre opciones es bastante imparcial e impredecible.',
      },
      {
        q: '¿Puede elegir varios ganadores únicos?',
        a: 'Sí. Puedes extraer varios ganadores sin repetición — cada opción se elige como mucho una vez por extracción — ideal para sorteos y para asignar premios o tareas de forma justa en una lista.',
      },
      {
        q: '¿Conserva un historial de selecciones anteriores?',
        a: 'Sí, los resultados recientes se guardan en un historial para que puedas revisar lo elegido a lo largo de varias extracciones. Útil cuando haces varias rondas y quieres confirmar que nadie se quedó fuera ni fue elegido dos veces.',
      },
      {
        q: '¿En qué se diferencian «sin repetir ganadores» y «quitar ganador tras elegir»?',
        a: 'La primera limita una sola extracción: dentro de la misma ronda cada opción gana como mucho una vez (muestreo sin reemplazo). La segunda elimina la opción de la lista y afecta a todas las rondas siguientes. Para repartir varios premios de una vez usa la primera; para tachar nombres ronda a ronda, la segunda.',
      },
    ],
  },
  de: {
    ui: {
      'clear': 'Leeren',
      'copyWinners': 'Gewinner kopieren',
      'history': 'Verlauf',
      'noRepeatWinners': 'Keine wiederholten Gewinner',
      'noteIntro': '🎲 Gewinner werden per ',
      'noteMid': ' und Rejection-Sampling (kein Modulo-Bias) gezogen, sodass jede Option exakt gleiche Chancen hat. Mit ',
      'noteNoRepeat': 'keine wiederholten Gewinner',
      'noteOutro': ' an ist die Ziehung ohne Zurücklegen; schalte es aus, um mehrfaches Gewinnen derselben Option in einer Ziehung zuzulassen.',
      'numberOfWinners': 'Anzahl Gewinner',
      'optionPlural': 'Optionen',
      'optionSingular': 'Option',
      'optionsLabel': 'Optionen — eine pro Zeile',
      'pick': 'Auswählen',
      'picking': 'Auswählen…',
      'pressPickToChoose': 'Klicke auf „Auswählen“, um zu ziehen',
      'removeWinnerAfterPicking': 'Gewinner nach dem Ziehen entfernen',
      'stateOff': '(aus)',
      'stateOn': '(an)',
      'tooFewError': '⚠️ Füge mindestens 2 Optionen hinzu (eine pro Zeile), um daraus zu ziehen.',
      'winnerPlural': 'Gewinner',
      'winnerSingular': 'Gewinner',
    },
    useCases: [
      'eine Option per Zufallsprinzip aus einer Liste auswählen',
      'eine Entscheidung per Glücksrad treffen',
      'einen zufälligen Gewinner aus einer Liste ziehen',
      'eine Zufallsauswahl mit Animation vornehmen',
    ],
    faqs: [
      {
        q: 'Ist die Auswahl wirklich zufällig?',
        a: 'Sie nutzt den eingebauten Zufallszahlengenerator des Browsers, was für faire Auswahlen, Verlosungen und Entscheidungen ausreicht. Für kryptografische Sicherheit bräuchte es einen dedizierten CSPRNG, für die Auswahl zwischen Optionen ist er unverfälscht und unvorhersehbar genug.',
      },
      {
        q: 'Kann man mehrere verschiedene Gewinner ziehen?',
        a: 'Ja. Du kannst mehrere Gewinner ohne Wiederholung ziehen — jede Option wird pro Ziehung höchstens einmal gewählt — ideal für Verlosungen und die faire Verteilung von Preisen oder Aufgaben auf eine Liste.',
      },
      {
        q: 'Werden frühere Ziehungen im Verlauf gespeichert?',
        a: 'Ja, letzte Ergebnisse bleiben in einer Verlaufsliste, sodass du überprüfen kannst, was über mehrere Ziehungen hinweg gewählt wurde. Hilfreich, wenn du mehrere Runden durchführst und sicherstellen willst, dass niemand übersprungen oder doppelt gezogen wurde.',
      },
      {
        q: 'Worin unterscheiden sich „keine wiederholten Gewinner“ und „Gewinner nach dem Ziehen entfernen“?',
        a: 'Ersteres begrenzt eine einzige Ziehung: innerhalb derselben Runde gewinnt jede Option höchstens einmal (Ziehen ohne Zurücklegen). Letzteres streicht die Option dauerhaft aus der Liste und wirkt auf alle künftigen Runden. Wenn du mehrere Preise auf einmal verteilst, nimm Ersteres; um Namen Runde für Runde abzuhaken, Letzteres.',
      },
    ],
  },
}
