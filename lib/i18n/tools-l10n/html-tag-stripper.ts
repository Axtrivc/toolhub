/**
 * html-tag-stripper 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const htmlTagStripperL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: '<h1>标题</h1><p>这是<strong>加粗</strong>文本。</p>',
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
      { q: '会保留换行吗?', a: '会。<p>、<div> 等块级标签在移除时会在其后补一个换行,所以段落分隔得以保留;行内标签(<b>、<span>)直接消失,不影响间距。' },
    ],
  },
  es: {
    ui: {
      defaultInput: '<h1>Título</h1><p>Este es texto <strong>en negrita</strong>.</p>',
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
      { q: '¿Conserva los saltos de línea?', a: 'Sí. Al quitar etiquetas de bloque como <p> y <div> se añade un salto de línea después de ellas, así que los párrafos quedan separados aunque desaparezcan las etiquetas. Las etiquetas en línea (<b>, <span>) simplemente desaparecen sin alterar el espaciado.' },
    ],
  },
  de: {
    ui: {
      defaultInput: '<h1>Überschrift</h1><p>Dies ist <strong>fetter</strong> Text.</p>',
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
      { q: 'Bleiben die Zeilenumbrüche erhalten?', a: 'Ja. Beim Entfernen von Block-Elementen wie <p> und <div> wird danach ein Zeilenumbruch eingefügt, sodass Absätze getrennt bleiben, obwohl die Tags selbst verschwinden. Inline-Tags (<b>, <span>) verschwinden einfach, ohne den Abstand zu verändern.' },
    ],
  },
}
