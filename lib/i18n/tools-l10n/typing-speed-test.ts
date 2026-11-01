/**
 * typing-speed-test 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(测速逻辑,非计算公式)。
 */
import type { ToolL10n } from '../tool-l10n'

export const TypingSpeedTestL10n: ToolL10n = {

  es: {
    useCases: [
      'Autoevaluación antes de postular: los puestos de administración y datos suelen pedir 40+ PPM',
      'Medir el progreso tras dos semanas de mecanografía táctil: misma frase, comparar PPM neto y precisión',
      'Estudiantes de idiomas midiendo su velocidad en inglés — quien escribe 60 PPM en su lengua suele bajar a la mitad; así localizas el cuello de botella',
      'Benchmark diario para mecanógrafos de competición que buscan superar las 100 PPM',
    ],
    faqs: [
      { q: '¿Cómo se calcula el PPM?', a: 'El estándar del sector: cada 5 caracteres (espacios incluidos) equivalen a una «palabra», dividido por los minutos. El PPM bruto mide solo velocidad; el neto descuenta los errores y refleja la producción real — rapidez con mala precisión no sirve.' },
      { q: '¿Cuándo empieza el cronómetro?', a: 'Con la primera pulsación; el resultado aparece al completar la frase. Sin cuenta atrás: mide tu velocidad estable y natural, no un sprint.' },
      { q: '¿Cuánto es «rápido»?', a: 'Adultos medios: 38-42 PPM; oficinistas habituales: 50-60; profesionales: más de 80; competidores: más de 150. Más importante que la cifra es el PPM neto: solo cuenta como velocidad efectiva con una precisión superior al 95 %.' },
      { q: '¿Se guarda lo que escribo?', a: 'No. La prueba corre 100 % en tu navegador y ninguna tecla sale del dispositivo — puedes practicar con correos o documentos reales de trabajo.' },
    ],
    ui: {
      'accuracy': 'Precisión',
      'finishBtn': 'Terminar ⏎',
      'fixHint': 'Retrocede para corregir o termina así',
      'grossWpm': 'PPM bruto',
      'modeCode': 'Fragmentos de código',
      'modeMulti': 'Multilingüe',
      'modeQuotes': 'Citas en inglés',
      'netExplain': 'errores descontados',
      'netWpm': 'PPM neto',
      'note': '⌨️ El PPM neto sigue la fórmula estándar: caracteres ÷ 5 por minuto menos errores. Tres modos: citas clásicas en inglés, fragmentos de código para programadores y proverbios multilingües según tu idioma. ¿Fallo al final? Corrige con Retroceso antes de terminar. Adultos medios: 38-42; profesionales superan 80.',
      'progress': '{n}/{m} caracteres',
      'reset': 'Restablecer',
      'startTyping': 'Escribe aquí: el reloj arranca con la primera tecla',
      'timeSec': 'Tiempo',
      'tryAgain': 'Probar otra frase',
      'typeHere': 'Escribe aquí',
      'wpmUnit': 'PPM',
    },
  },
  de: {
    useCases: [
      'Selbsttest vor der Bewerbung: Büro- und Datenerfassungsjobs verlangen oft 40+ WPM',
      'Fortschritt nach zwei Wochen Zehnfingertippen beziffern: gleicher Satz, Netto-WPM und Genauigkeit vergleichen',
      'Sprachlernende messen ihre Englisch-Tippgeschwindigkeit — wer in der Muttersprache 60 WPM schafft, tippt in der Fremdsprache oft nur halb so schnell; so findet man den Engpass',
      'Täglicher Benchmark für Speed-Tipper, die die 100-WPM-Marke knacken wollen',
    ],
    faqs: [
      { q: 'Wie wird WPM berechnet?', a: 'Industriestandard: Je 5 Zeichen (inkl. Leerzeichen) zählen als ein „Wort“, geteilt durch die Minuten. Brutto-WPM misst nur Tempo; Netto-WPM zieht Fehler ab und bildet die reale Leistung ab — schnell mit vielen Fehlern ist wertlos.' },
      { q: 'Wann startet die Zeitmessung?', a: 'Mit dem ersten Tastendruck; das Ergebnis erscheint, sobald du den Satz vollständig getippt hast. Kein Countdown — gemessen wird dein natürliches Dauertempo, kein Sprint.' },
      { q: 'Was gilt als schnell?', a: 'Durchschnitt: 38-42 WPM; Vielschreiber: 50-60; Profis: über 80; Wettkämpfer: über 150. Wichtiger als der Rohwert ist der Netto-Wert: Erst ab 95 % Genauigkeit zählt Tempo als echte Geschwindigkeit.' },
      { q: 'Wird meine Eingabe gespeichert?', a: 'Nein. Der Test läuft komplett lokal im Browser, kein Anschlag verlässt das Gerät — du kannst bedenkenlos echte Arbeitsdokumente verwenden.' },
    ],
    ui: {
      'accuracy': 'Genauigkeit',
      'finishBtn': 'Abschließen ⏎',
      'fixHint': 'Mit Rücktaste korrigieren oder so abgeben',
      'grossWpm': 'Brutto-WPM',
      'modeCode': 'Code-Snippets',
      'modeMulti': 'Mehrsprachig',
      'modeQuotes': 'Englische Zitate',
      'netExplain': 'Fehler abgezogen',
      'netWpm': 'Netto-WPM',
      'note': '⌨️ Netto-WPM nach Standardformel: Zeichen ÷ 5 pro Minute minus Fehler. Drei Modi: klassische englische Zitate, Code-Snippets für Programmierer und mehrsprachige Sprichwörter passend zur Spracheinstellung. Tippfehler am Ende? Mit Rücktaste korrigieren, dann abgeben. Durchschnitt: 38-42; Profis über 80.',
      'progress': '{n}/{m} Zeichen',
      'reset': 'Zurücksetzen',
      'startTyping': 'Hier tippen — die Uhr startet beim ersten Tastendruck',
      'timeSec': 'Zeit',
      'tryAgain': 'Anderen Satz testen',
      'typeHere': 'Hier tippen',
      'wpmUnit': 'WPM',
    },
  },
}
