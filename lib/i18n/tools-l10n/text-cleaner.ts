/**
 * text-cleaner 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const textCleanerL10n: ToolL10n = {

  es: {
    ui: {
      'chars': 'caracteres',
      'cleanedText': 'Texto limpio',
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'copyCleaned': 'Copiar texto limpio',
      'inputLabel': 'Pega texto desordenado',
      'keepLabel': 'Caracteres a conservar (además de letras, dígitos, espacios)',
      'note': '🔒 100% en el cliente — tu texto nunca sale de tu navegador.',
      'placeholder': 'Pega o escribe el texto que quieres limpiar…',
      'removed': 'quitados',
      'toggle.collapseSpaces': 'Colapsar espacios múltiples',
      'toggle.lowercase': 'Convertir a minúsculas',
      'toggle.removeAccents': 'Quitar acentos y diacríticos',
      'toggle.removeEmptyLines': 'Quitar líneas vacías',
      'toggle.removeSpecial': 'Quitar caracteres especiales',
      'toggle.stripEmojis': 'Quitar emojis y pictogramas',
      'toggle.stripHtml': 'Quitar etiquetas HTML',
      'toggle.stripUrls': 'Quitar URLs',
      'toggle.trimLines': 'Recortar cada línea',
      'toggleHint.collapseSpaces': 'a    b → a b',
      'toggleHint.lowercase': 'ABC → abc',
      'toggleHint.removeAccents': 'café → cafe, naïve → naive',
      'toggleHint.removeEmptyLines': 'Elimina líneas en blanco',
      'toggleHint.removeSpecial': 'Conserva letras (también chinas), dígitos, espacios + tu lista',
      'toggleHint.stripEmojis': 'Quita símbolos 😀, dingbats, banderas',
      'toggleHint.stripHtml': '<b>bold</b> → bold',
      'toggleHint.stripUrls': 'Quita enlaces http(s):// y www.',
      'toggleHint.trimLines': 'Quita espacios al inicio/final de cada línea',
    },
    useCases: [
      'eliminar emojis del texto online',
      'quitar acentos y diacríticos',
      'eliminar caracteres especiales de una cadena',
      'limpiar texto para importar a base de datos',
    ],
    faqs: [
      {
        q: '¿Qué hace exactamente «quitar acentos»?',
        a: 'Convierte los caracteres acentuados a su forma base —café pasa a cafe, Münster a Munster— mediante la normalización Unicode (NFD seguida de la eliminación de las marcas combinantes). Elimina las marcas diacríticas, no las letras, así el texto sigue siendo legible.',
      },
      {
        q: '¿Borrará mi puntuación normal?',
        a: 'Solo si activas la opción «eliminar caracteres especiales». Por defecto se conservan la puntuación normal, los dígitos y las letras; cada regla de limpieza es opcional, así que controlas exactamente qué transformaciones se ejecutan.',
      },
      {
        q: '¿Elimina emojis y URLs?',
        a: 'Sí, ambas son reglas opcionales. Los emojis y símbolos se eliminan por sus rangos Unicode, y las URLs se quitan por coincidencia de patrón — útil para limpiar comentarios de usuarios o preparar texto para análisis.',
      },
    ],
  },
  de: {
    ui: {
      'chars': 'Zeichen',
      'cleanedText': 'Gesäuberter Text',
      'clear': 'Leeren',
      'copy': 'Kopieren',
      'copyCleaned': 'Gesäuberten Text kopieren',
      'inputLabel': 'Unordentlichen Text einfügen',
      'keepLabel': 'Zu behaltende Zeichen (neben Buchstaben, Ziffern, Leerzeichen)',
      'note': '🔒 100% clientseitig — dein Text verlässt nie deinen Browser.',
      'placeholder': 'Text zum Säubern einfügen oder eintippen…',
      'removed': 'entfernt',
      'toggle.collapseSpaces': 'Mehrfache Leerzeichen zusammenziehen',
      'toggle.lowercase': 'In Kleinbuchstaben wandeln',
      'toggle.removeAccents': 'Akzente & Diakritika entfernen',
      'toggle.removeEmptyLines': 'Leerzeilen entfernen',
      'toggle.removeSpecial': 'Sonderzeichen entfernen',
      'toggle.stripEmojis': 'Emojis & Piktogramme entfernen',
      'toggle.stripHtml': 'HTML-Tags entfernen',
      'toggle.stripUrls': 'URLs entfernen',
      'toggle.trimLines': 'Jede Zeile trimmen',
      'toggleHint.collapseSpaces': 'a    b → a b',
      'toggleHint.lowercase': 'ABC → abc',
      'toggleHint.removeAccents': 'café → cafe, naïve → naive',
      'toggleHint.removeEmptyLines': 'Löscht leere Zeilen',
      'toggleHint.removeSpecial': 'Behält Buchstaben (auch chinesische), Ziffern, Leerzeichen plus deine Liste',
      'toggleHint.stripEmojis': 'Entfernt 😀, Dingbats, Flaggen',
      'toggleHint.stripHtml': '<b>bold</b> → bold',
      'toggleHint.stripUrls': 'Entfernt http(s):// und www.-Links',
      'toggleHint.trimLines': 'Entfernt Leerzeichen am Zeilenanfang/-ende',
    },
    useCases: [
      'Emojis aus Text online entfernen',
      'Akzente und Diakritika entfernen',
      'Sonderzeichen aus einer Zeichenkette entfernen',
      'Text für Datenbankimport bereinigen',
    ],
    faqs: [
      {
        q: 'Was genau bewirkt „Akzente entfernen“?',
        a: 'Es wandelt akzentuierte Zeichen in die Grundform — aus café wird cafe, aus Münster Munster — mittels Unicode-Normalisierung (NFD, dann Weglassen kombinierender Zeichen). Entfernt werden die Diakritika, nicht die Buchstaben, sodass der Text lesbar bleibt.',
      },
      {
        q: 'Werden meine normalen Satzzeichen gelöscht?',
        a: 'Nur wenn du die Option „Sonderzeichen entfernen“ aktivierst. Standardmäßig bleiben normale Satzzeichen, Ziffern und Buchstaben erhalten; jede Reinigungsregel lässt sich einzeln zuschalten, du steuerst also genau, welche Umwandlungen laufen.',
      },
      {
        q: 'Werden Emojis und URLs entfernt?',
        a: 'Ja, beides sind optionale Regeln. Emojis und Symbole werden über ihre Unicode-Bereiche entfernt, URLs per Mustererkennung — praktisch zum Bereinigen von Nutzerkommentaren oder zum Vorbereiten von Text für Analysen.',
      },
    ],
  },
}
