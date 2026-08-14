/**
 * html-tag-stripper 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const htmlTagStripperL10n: ToolL10n = {
  zh: {
    ui: {
      inputLabel: 'HTML 源码',
      outputLabel: '纯文本(已移除标签)',
      note: '🌐 剥离所有 HTML 标签,留下可读文本。使用浏览器 DOM 解析器——仅在客户端运行。',
    },
    useCases: [
      '清理从网页抓取下来的文本',
      '把 HTML 邮件转成纯文本',
      '从 CMS 导出中提取文章正文',
      '粘贴进纯文本编辑器前先去掉格式',
    ],
    faqs: [
      { q: '会保留换行吗?', a: '取决于源 HTML。像 <p> 和 <div> 这样的块级标签会被移除,但它们包含的文本会被拼接在一起。如果想保留段落分隔,可先把 <p> 替换成 \\n<p>。' },
    ],
  },
  es: {
    ui: {
      inputLabel: 'Código HTML',
      outputLabel: 'Texto plano (etiquetas quitadas)',
      note: '🌐 Elimina todas las etiquetas HTML y deja texto legible. Usa el analizador DOM del navegador — solo en el cliente.',
    },
    useCases: [
      'limpiar texto extraído de páginas web',
      'convertir correos HTML a texto sin formato',
      'extraer el cuerpo de artículos desde exportaciones de CMS',
      'quitar el formato antes de pegar en un editor de texto plano',
    ],
    faqs: [
      { q: '¿Conserva los saltos de línea?', a: 'Depende del HTML de origen. Las etiquetas de bloque como <p> y <div> se eliminan, pero el texto que contenían se concatena. Para conservar los saltos de párrafo, sustituye <p> por \\n<p> primero.' },
    ],
  },
  de: {
    ui: {
      inputLabel: 'HTML-Quellcode',
      outputLabel: 'Klartext (Tags entfernt)',
      note: '🌐 Entfernt alle HTML-Tags und lässt lesbaren Text. Nutzt den DOM-Parser des Browsers — nur clientseitig.',
    },
    useCases: [
      'von Webseiten extrahierten Text bereinigen',
      'HTML-E-Mails in reinen Text umwandeln',
      'Artikeltext aus CMS-Exporten herausziehen',
      'Formatierung vor dem Einfügen in einen Klartext-Editor entfernen',
    ],
    faqs: [
      { q: 'Bleiben die Zeilenumbrüche erhalten?', a: 'Das hängt vom Quell-HTML ab. Block-Elemente wie <p> und <div> werden entfernt, aber der darin enthaltene Text wird aneinandergereiht. Um Absatzumbrüche zu erhalten, ersetze <p> zuerst durch \\n<p>.' },
    ],
  },
}
