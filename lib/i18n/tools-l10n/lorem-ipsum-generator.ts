/**
 * lorem-ipsum-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const loremIpsumGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'generate': '📝 生成',
      'note': '📄 为模型、设计和布局生成占位文本。基于公元前 1 世纪西塞罗的一段文本。',
      'paragraphs': '段落数',
    },
    useCases: [
      '原型图与线框图',
      '网站模板与演示',
      '正式文案前的排版布局',
      '测试文字在设计中的排版效果',
    ],
    faqs: [
      { q: '它真的是拉丁语吗?', a: '起源是拉丁语,但标准的 Lorem Ipsum 文本已被打乱和改动——真正的拉丁语使用者也读不通。这是有意为之:它要看起来像文字,却不像任何真实语言。' },
    ],
  },
  es: {
    ui: {
      'generate': '📝 Generar',
      'note': '📄 Genera texto de marcador para maquetas, diseños y layouts. Basado en un texto de Cicerón del siglo I a. C.',
      'paragraphs': 'Párrafos',
    },
    useCases: [
      'mockups y wireframes',
      'plantillas y demos de sitios web',
      'maquetas de imprenta antes del texto final',
      'probar cómo fluye el texto en un diseño',
    ],
    faqs: [
      { q: '¿Es realmente latín?', a: 'Empezó como latín, pero el texto Lorem Ipsum estándar está revuelto y alterado — ningún hablante real de latín lo entendería. Es intencional: debe parecer texto sin leerse como ningún idioma real.' },
    ],
  },
  de: {
    ui: {
      'generate': '📝 Generieren',
      'note': '📄 Erzeugt Platzhaltertext für Mockups, Designs und Layouts. Basiert auf einem Text von Cicero aus dem 1. Jh. v. Chr.',
      'paragraphs': 'Absätze',
    },
    useCases: [
      'Mockups und Wireframes',
      'Website-Templates und Demos',
      'Print-Layouts vor dem finalen Text',
      'testen, wie Text in einem Design fließt',
    ],
    faqs: [
      { q: 'Ist das eigentlich Latein?', a: 'Es begann als Latein, aber der Standard-Lorem-Ipsum-Text ist verdreht und verändert — kein echter Lateinsprecher würde ihn verstehen. Das ist Absicht: Er soll wie Text wirken, ohne als echte Sprache lesbar zu sein.' },
    ],
  },
}
