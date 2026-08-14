/**
 * markdown-to-html 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const markdownToHtmlL10n: ToolL10n = {
  zh: {
    ui: {
      'clear': '清空',
      'copy': '复制',
      'couldNotConvert': '无法转换 Markdown',
      'inputLabel': 'Markdown',
      'note': '🔒 100% 在客户端——支持标题、列表、代码、表格、链接、加粗、斜体。',
      'placeholder': '# 标题\n\n一些 **加粗** 文本。',
      'preview': '预览',
    },
    useCases: ['把 Markdown 转成干净的 HTML 并实时预览', '为博客或文档准备可发布的 HTML', '确认读者最终看到的渲染效果', '查看 GitHub 风格 Markdown(表格、任务列表)的 HTML 输出'],
    faqs: [
      { q: '支持哪些 Markdown 功能?', a: '标题(H1-H6)、粗体、斜体、行内代码、代码块、引用、有序和无序列表、链接、图片、水平线,以及 GFM 表格。遵循 CommonMark 基线,加上最常用的 GitHub Flavored Markdown 扩展(表格和任务列表)。' },
      { q: '输出的 HTML 可以直接嵌入吗?', a: '生成的 HTML 对行内代码和代码块做了转义,但本工具不运行完整的清理器。如果你的 Markdown 源含原始 HTML 或用户提交内容,插入到线上页面前请先通过 DOMPurify 等清理器处理,以防 XSS。' },
      { q: '为什么我的换行没显示?', a: '标准 Markdown 把单个换行当作空格,需要行尾两个空格或空行才能换行。如果你希望每个换行都渲染成 <br>,那是「硬换行」扩展——常见于聊天式 Markdown。本工具遵循标准的软换行行为。' },
    ],
  },
  es: {
    ui: {
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'couldNotConvert': 'No se pudo convertir el Markdown',
      'inputLabel': 'Markdown',
      'note': '🔒 100% en el cliente — admite títulos, listas, código, tablas, enlaces, negrita, cursiva.',
      'placeholder': '# Título\n\nAlgo de texto **negrita**.',
      'preview': 'Vista previa',
    },
    useCases: ['convertir Markdown a HTML limpio con vista previa en vivo', 'preparar HTML publicable para un blog o documentación', 'confirmar el renderizado final que verán los lectores', 'ver la salida HTML del Markdown estilo GitHub (tablas, listas de tareas)'],
    faqs: [
      { q: '¿Qué funciones de Markdown se admiten?', a: 'Titulares (H1-H6), negrita, cursiva, código en línea, bloques de código, citas, listas ordenadas y no ordenadas, enlaces, imágenes, reglas horizontales y tablas GFM. Sigue la base CommonMark más las extensiones más comunes de GitHub Flavored Markdown para tablas y listas de tareas.' },
      { q: '¿Es seguro incrustar el HTML directamente?', a: 'El HTML generado escapa el código en línea y los bloques de código, pero esta herramienta no ejecuta un sanitizador completo. Si tu Markdown contiene HTML crudo o contenido enviado por usuarios, pasa la salida por un sanitizador como DOMPurify antes de insertarla en una página en vivo, para evitar XSS.' },
      { q: '¿Por qué no aparecen mis saltos de línea?', a: 'El Markdown estándar trata un único salto de línea como un espacio y requiere dos espacios al final de la línea, o una línea en blanco, para un salto. Si necesitas que cada salto se renderice como <br>, eso es la extensión de «saltos duros» — común en el Markdown estilo chat. Esta herramienta sigue el comportamiento estándar de salto suave.' },
    ],
  },
  de: {
    ui: {
      'clear': 'Leeren',
      'copy': 'Kopieren',
      'couldNotConvert': 'Markdown konnte nicht konvertiert werden',
      'inputLabel': 'Markdown',
      'note': '🔒 100% clientseitig — unterstützt Überschriften, Listen, Code, Tabellen, Links, Fett, Kursiv.',
      'placeholder': '# Überschrift\n\nEtwas **fetter** Text.',
      'preview': 'Vorschau',
    },
    useCases: ['Markdown in sauberes HTML umwandeln mit Live-Vorschau', 'veröffentlichungs­fertiges HTML für Blog oder Doku vorbereiten', 'sicherstellen, was die Leser am Ende gerendert sehen', 'die HTML-Ausgabe von GitHub-Flavored-Markdown ansehen (Tabellen, Task-Listen)'],
    faqs: [
      { q: 'Welche Markdown-Features werden unterstützt?', a: 'Überschriften (H1-H6), Fett, Kursiv, Inline-Code, Codeblöcke, Zitate, geordnete und ungeordnete Listen, Links, Bilder, Trennlinien und GFM-Tabellen. Es folgt der CommonMark-Basis plus den häufigsten GitHub-Flavored-Markdown-Erweiterungen für Tabellen und Task-Listen.' },
      { q: 'Kann man das HTML direkt einbetten?', a: 'Das erzeugte HTML escapet Inline-Code und Codeblöcke, aber dieses Tool führt keinen vollständigen Sanitizer aus. Wenn dein Markdown Raw-HTML oder von Benutzern eingereichten Inhalt enthält, leite die Ausgabe vor dem Einfügen in eine Live-Seite durch einen Sanitizer wie DOMPurify, um XSS zu verhindern.' },
      { q: 'Warum werden meine Zeilenumbrüche nicht angezeigt?', a: 'Standard-Markdown behandelt einen einzelnen Zeilenumbruch als Leerzeichen und verlangt zwei Leerzeichen am Zeilenende oder eine Leerzeile für einen Umbruch. Wenn jeder Umbruch als <br> gerendert werden soll, ist das die „Hard-Line-Breaks»-Erweiterung — üblich bei Chat-Stil-Markdown. Dieses Tool folgt dem Standard-Softbreak-Verhalten.' },
    ],
  },
}
