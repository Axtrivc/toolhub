/**
 * number-to-words-converter 本地化 bundle —— zh / es / de(B13 电子与音频批)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const NumberToWordsConverterL10n: ToolL10n = {

  es: {
    useCases: ['escribir importes con palabras en cheques y documentos legales en inglés', 'generar ordinales para invitaciones y certificados (forty-second)', 'convertir columnas de números a su lectura en inglés', 'revisar la ortografía de cifras en textos en inglés'],
    faqs: [
      { q: '¿Hasta qué número puede escribir?', a: 'Hasta 999 billones en la escala corta del inglés americano —thousand, million, billion, trillion—. Más allá haría falta quadrillion y la herramienta lo marca como fuera de rango.' },
      { q: '¿Cómo se leen decimales y negativos?', a: 'La parte entera se escribe normal, el punto decimal se lee "point" y los dígitos siguientes van uno a uno: 3,14 es "three point one four". Los negativos llevan "negative" delante.' },
      { q: '¿Cuándo uso la forma ordinal?', a: 'Para posiciones y fechas: 21 → "twenty-first", 42 → "forty-second". La escritura legal y financiera suele usar el cardinal ("forty-two") con la cifra entre paréntesis.' },
      { q: '¿Qué pasa con el "and" del inglés británico?', a: 'La variante americana lo omite: 123 es "one hundred twenty-three"; la británica escribe "one hundred and twenty-three". Ambas son correctas; esta herramienta sigue la convención americana.' },
    ],
    ui: {
      'inputLabel': 'Números (uno por línea)',
      'outputLabel': 'En palabras inglesas (cardinal + ordinal)',
      'placeholder': '42\n1,234\n-7\n3.14159',
      'defaultInput': '42\n1,234\n1000000\n-7\n3.14159\n21',
      'note': '🔢 Admite billones cortos, decimales, negativos, comas de millar (también $ y %). Los compuestos 21-99 llevan guion (twenty-one); la variante americana omite el "and". Cada línea muestra cardinal y ordinal.',
      'errNotNumber': 'no es un número válido',
      'errRange': 'fuera de rango (máx. 999 billones)',
    },
  },
  de: {
    useCases: ['Beträge auf Schecks und in Verträgen englisch ausschreiben', 'Ordinalzahlen für Einladungen und Urkunden erzeugen (forty-second)', 'Zahlenspalten in die englische Lesart überführen', 'die Schreibweise von Zahlen in englischen Texten prüfen'],
    faqs: [
      { q: 'Wie große Zahlen werden ausgeschrieben?', a: 'Bis 999 Billionen (trillion) in der amerikanischen Kurzskala — thousand, million, billion, trillion. Darüber bräuchte es quadrillion; das Werkzeug meldet das als außerhalb des Bereichs.' },
      { q: 'Wie werden Dezimalen und Negative gelesen?', a: 'Der Ganzzahlteil normal, das Komma heißt "point", die folgenden Ziffern einzeln: 3,14 ist "three point one four". Negative Zahlen bekommen ein "negative" davor.' },
      { q: 'Wann brauche ich die Ordinalform?', a: 'Für Positionen und Daten: 21 → "twenty-first", 42 → "forty-second". In Rechts- und Finanztexten steht meist der Kardinal ("forty-two") plus Ziffer in Klammern.' },
      { q: 'Was ist mit dem "and" des britischen Englisch?', a: 'Die amerikanische Schreibweise lässt es weg: 123 heißt "one hundred twenty-three"; die britische fügt "and" ein ("one hundred and twenty-three"). Beides ist korrekt — dieses Werkzeug folgt der amerikanischen Konvention.' },
    ],
    ui: {
      'inputLabel': 'Zahlen (eine pro Zeile)',
      'outputLabel': 'In englischen Wörtern (Kardinal- + Ordinalform)',
      'placeholder': '42\n1,234\n-7\n3.14159',
      'defaultInput': '42\n1,234\n1000000\n-7\n3.14159\n21',
      'note': '🔢 Unterstützt Trillionen, Dezimalen, Negative und Tausenderpunkte/-kommas ($ und % werden ebenfalls entfernt). Zusammengesetzte Zahlen 21-99 mit Bindestrich (twenty-one); amerikanische Schreibweise ohne "and". Jede Zeile zeigt Kardinal- und Ordinalform.',
      'errNotNumber': 'keine gültige Zahl',
      'errRange': 'außerhalb des Bereichs (max. 999 Billionen)',
    },
  },
}
