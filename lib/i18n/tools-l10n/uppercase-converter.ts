/**
 * uppercase-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const uppercaseConverterL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'hola mundo',
      inputLabel: 'Tu texto',
      outputLabel: 'MAYÚSCULAS',
      placeholder: 'Escribe o pega texto…',
      note: '🔤 Convierte cada letra a mayúsculas. Útil para títulos, encabezados y énfasis.',
    },
    useCases: [
      'usar mayúsculas para títulos o diseño',
      'escribir acrónimos (NASA, HTML)',
      'crear etiquetas de aviso de alta visibilidad',
      'formatear códigos de producto o números de serie',
    ],
    faqs: [
      { q: '¿Funciona con texto que no es inglés?', a: 'Sí. La herramienta usa una conversión con conocimiento de Unicode, de modo que letras acentuadas como café → CAFÉ y letras griegas o cirílicas también se convierten correctamente.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'hallo welt',
      inputLabel: 'Dein Text',
      outputLabel: 'GROSSBUCHSTABEN',
      placeholder: 'Text eingeben oder einfügen…',
      note: '🔤 Wandelt jeden Buchstaben in Großbuchstaben um. Nützlich für Titel, Überschriften und Hervorhebungen.',
    },
    useCases: [
      'Großbuchstaben für Titel oder Design einsetzen',
      'Akronyme schreiben (NASA, HTML)',
      'gut sichtbare Warnhinweise erstellen',
      'Produktcodes oder Seriennummern formatieren',
    ],
    faqs: [
      { q: 'Funktioniert das mit nicht-englischem Text?', a: 'Ja. Das Werkzeug nutzt Unicode-bewusste Umwandlung, sodass akzentuierte Buchstaben wie café → CAFÉ sowie griechische und kyrillische Buchstaben korrekt umgewandelt werden.' },
    ],
  },
}
