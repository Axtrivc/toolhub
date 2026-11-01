/**
 * lowercase-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const lowercaseConverterL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'HOLA MUNDO',
      inputLabel: 'Tu texto',
      outputLabel: 'minúsculas',
      placeholder: 'Escribe o pega texto…',
      note: '🔡 Convierte cada letra a minúsculas. Útil para correos, URLs y código.',
    },
    useCases: [
      'normalizar direcciones de correo, URL y slugs en minúsculas',
      'escribir variables de programa (camelCase, snake_case)',
      'ordenar hashtags para una lectura más limpia',
      'escribir mensajes informales en minúsculas',
    ],
    faqs: [
      { q: '¿Pasar a minúsculas afecta a mis datos?', a: 'No — los números, los símbolos y los signos de puntuación no se ven afectados. Solo cambian las letras. La conversión es sin pérdidas para las letras que tienen mayúscula y minúscula.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'HALLO WELT',
      inputLabel: 'Dein Text',
      outputLabel: 'kleinbuchstaben',
      placeholder: 'Text eingeben oder einfügen…',
      note: '🔡 Wandelt jeden Buchstaben in Kleinbuchstaben um. Nützlich für E-Mails, URLs und Code.',
    },
    useCases: [
      'E-Mail-Adressen, URLs und Slugs kleinschreiben',
      'Programmvariablen schreiben (camelCase, snake_case)',
      'Hashtags aufräumen für sauberere Lesbarkeit',
      'informelle Nachrichten in Kleinbuchstaben verfassen',
    ],
    faqs: [
      { q: 'Beeinträchtigt die Kleinschreibung meine Daten?', a: 'Nein — Zahlen, Symbole und Satzzeichen bleiben unberührt. Nur Buchstaben ändern sich. Die Umwandlung ist verlustfrei für alle Buchstaben, die Groß-/Kleinschreibung kennen.' },
    ],
  },
}
