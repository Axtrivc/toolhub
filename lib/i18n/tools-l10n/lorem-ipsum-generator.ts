/**
 * lorem-ipsum-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const loremIpsumGeneratorL10n: ToolL10n = {

  es: {
    ui: {
      'count': 'Cantidad',
      'generate': '📝 Generar',
      'regenerate': 'Regenerar',
      'note': '📄 Genera texto de relleno para maquetas, diseños y layouts. Basado en un texto de Cicerón del siglo I a. C.',
      'startWithLorem': 'Empezar con "Lorem ipsum"',
      'unit': 'Unidad',
      'unitParagraphs': 'Párrafos',
      'unitSentences': 'Oraciones',
      'unitWords': 'Palabras',
    },
    useCases: [
      'mockups y wireframes',
      'plantillas y demos de sitios web',
      'maquetas de imprenta antes del texto final',
      'probar cómo fluye el texto en un diseño',
    ],
    faqs: [
      { q: '¿Es realmente latín?', a: 'Empezó como latín, pero el texto Lorem Ipsum estándar está revuelto y alterado — ningún hablante real de latín lo entendería. Es intencional: debe parecer texto, pero no leerse como ningún idioma real.' },
    ],
  },
  de: {
    ui: {
      'count': 'Anzahl',
      'generate': '📝 Generieren',
      'regenerate': 'Neu generieren',
      'note': '📄 Erzeugt Platzhaltertext für Mockups, Designs und Layouts. Basiert auf einem Text von Cicero aus dem 1. Jh. v. Chr.',
      'startWithLorem': 'Mit „Lorem ipsum“ beginnen',
      'unit': 'Einheit',
      'unitParagraphs': 'Absätze',
      'unitSentences': 'Sätze',
      'unitWords': 'Wörter',
    },
    useCases: [
      'Mockups und Wireframes',
      'Website-Templates und Demos',
      'Print-Layouts vor dem finalen Text',
      'Testen, wie Text in einem Design fließt',
    ],
    faqs: [
      { q: 'Ist das eigentlich Latein?', a: 'Es begann als Latein, aber der Standard-Lorem-Ipsum-Text ist verdreht und verändert — kein echter Lateinsprecher würde ihn verstehen. Das ist Absicht: Er soll wie Text wirken, ohne als echte Sprache lesbar zu sein.' },
    ],
  },
}
