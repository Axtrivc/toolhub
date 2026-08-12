/**
 * title-case-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const titleCaseConverterL10n: ToolL10n = {
  zh: {
    useCases: [
      '为博客文章和新闻标题做首字母大写',
      '整理 YouTube 视频标题',
      '规范化书名、电影名、歌曲名',
      '设计 App 按钮和菜单标签',
    ],
    faqs: [
      { q: '为什么不同排版指南规则不一样?', a: '主流排版指南(APA、Chicago、AP)对哪些词该大写各有规定,通常会把冠词、连词和短介词保持小写。本工具为简便起见把每个单词都首字母大写。' },
    ],
  },
  es: {
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
