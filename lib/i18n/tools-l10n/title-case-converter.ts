/**
 * title-case-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const titleCaseConverterL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'el rápido zorro marrón',
      inputLabel: 'Tu texto',
      outputLabel: 'Tipo Título',
      note: '📝 Capitaliza la primera letra de cada palabra. Ideal para títulos y encabezados.',
      'cjkNoEffectNote': 'ℹ️ La conversión de mayúsculas solo afecta a letras latinas: los caracteres chinos no cambian.',
    },
    useCases: [
      'aplicar capitalización a titulares de blog y noticias',
      'dar formato a títulos de vídeos de YouTube',
      'normalizar títulos de libros, películas y canciones',
      'diseñar etiquetas de botones y menús en apps',
    ],
    faqs: [
      { q: '¿Por qué algunas guías de estilo son distintas?', a: 'Las principales guías (APA, Chicago, AP) tienen sus propias reglas sobre qué palabras capitalizar. Suelen poner en minúscula los artículos, las conjunciones y las preposiciones cortas. Esta herramienta capitaliza cada palabra por simplicidad.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'der schnelle braune fuchs',
      inputLabel: 'Dein Text',
      outputLabel: 'Titelschreibweise',
      note: '📝 Schreibt den ersten Buchstaben jedes Wortes groß. Ideal für Titel und Überschriften.',
      'cjkNoEffectNote': 'ℹ️ Die Groß-/Kleinschreibung betrifft nur lateinische Buchstaben — chinesische Zeichen bleiben unverändert.',
    },
    useCases: [
      'Blog- und Nachrichtentitel mit Anfangsgroßschreibung versehen',
      'YouTube-Videotitel formatieren',
      'Buch-, Film- und Songtitel vereinheitlichen',
      'App-Buttons und Menübeschriftungen gestalten',
    ],
    faqs: [
      { q: 'Warum unterscheiden sich manche Stilrichtlinien?', a: 'Die großen Stilrichtlinien (APA, Chicago, AP) haben eigene Regeln, welche Wörter großgeschrieben werden. Sie setzen Artikel, Konjunktionen und kurze Präpositionen meist klein. Dieses Werkzeug schreibt aus Gründen der Einfachheit jedes Wort groß.' },
    ],
  },
}
