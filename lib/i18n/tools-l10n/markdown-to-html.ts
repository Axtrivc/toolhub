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
      'tooLong': '⚠️ 输入超过支持的上限(100,000 字符),请缩减后再转换。',
    },
    useCases: ['把 Markdown 转成干净的 HTML 并实时预览', '为博客或文档准备可发布的 HTML', '确认读者最终看到的渲染效果', '查看 GitHub 风格 Markdown(表格、任务列表)的 HTML 输出'],
    faqs: [
      { q: '支持哪些 Markdown 功能?', a: '标题(H1-H6)、粗体、斜体、行内代码、代码块、引用、有序和无序列表、链接、图片、水平线,以及 GFM 表格。遵循 CommonMark 基线,加上最常用的 GitHub Flavored Markdown 扩展(表格和任务列表)。' },
      { q: '输出的 HTML 可以直接嵌入吗?', a: '生成的 HTML 会转义原始 HTML,不安全协议的链接会退化为纯文本,预览和复制的输出还会再经 DOMPurify 消毒。如果 Markdown 源含用户提交内容,插入自己的线上页面前,仍建议在你的渲染管线中用 DOMPurify 之类的清理器再处理一遍,以防 XSS。' },
      { q: '为什么我的换行没显示?', a: '标准 Markdown 把单个换行当作空格,需要行尾两个空格或空行才能换行。如果你希望每个换行都渲染成 <br>,那是「硬换行」扩展——常见于聊天式 Markdown。本工具遵循标准的软换行行为。' },
      { q: '转换是在本地进行还是上传到服务器?', a: '完全在浏览器本地完成,不上传任何内容,离线也能用,因此适合粘贴不能外发的内部文档。输入上限 10 万字符,超出会提示缩减后再转换。' },
      { q: '表格里的竖线 | 怎么写?', a: '单元格内要显示竖线用 \\| 转义。列数由第二行的 --- 分隔符决定,源码里不需要空格对齐——对齐只是为了人读起来舒服。' },
    ],
  },
  es: {
    ui: {
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'couldNotConvert': 'No se pudo convertir el Markdown',
      'inputLabel': 'Markdown',
      'note': '🔒 100% en el cliente — admite encabezados, listas, código, tablas, enlaces, negrita, cursiva.',
      'placeholder': '# Título\n\nAlgo de texto en **negrita**.',
      'preview': 'Vista previa',
      'tooLong': '⚠️ La entrada supera el tamaño admitido (100.000 caracteres). Redúcela para poder convertirla.',
    },
    useCases: ['convertir Markdown a HTML limpio con vista previa en vivo', 'preparar HTML publicable para un blog o documentación', 'confirmar el renderizado final que verán los lectores', 'ver la salida HTML del Markdown estilo GitHub (tablas, listas de tareas)'],
    faqs: [
      { q: '¿Qué funciones de Markdown se admiten?', a: 'Encabezados (H1-H6), negrita, cursiva, código en línea, bloques de código, citas, listas ordenadas y no ordenadas, enlaces, imágenes, reglas horizontales y tablas GFM. Sigue la base CommonMark más las extensiones más habituales de GitHub Flavored Markdown para tablas y listas de tareas.' },
      { q: '¿Es seguro incrustar el HTML directamente?', a: 'El HTML crudo se escapa y los enlaces con protocolos inseguros se degradan a texto plano; la salida de la vista previa y de la copia se sanitiza además con DOMPurify. Si tu Markdown procede de contenido enviado por usuarios, pasa la salida por un sanitizador como DOMPurify en tu propia cadena de renderizado antes de insertarla en una página en vivo, para evitar XSS.' },
      { q: '¿Por qué no aparecen mis saltos de línea?', a: 'El Markdown estándar trata un único salto de línea como un espacio y requiere dos espacios al final de la línea, o una línea en blanco, para un salto. Si necesitas que cada salto se renderice como <br>, eso es la extensión de «saltos duros» — común en el Markdown estilo chat. Esta herramienta sigue el comportamiento estándar de salto suave.' },
      { q: '¿La conversión se realiza en mi equipo o en un servidor?', a: '100 % en el navegador y sin subir nada, así que sirve también offline y para documentación interna que no debe salir de la red corporativa. El límite son 100.000 caracteres por conversión; si lo superas, la herramienta te pedirá reducirla antes de convertir.' },
      { q: '¿Cómo escribo una barra | dentro de una celda de tabla?', a: 'Escápala con \\|. Las columnas las define la fila de ---; la alineación con espacios del código fuente es puramente estética; el HTML resultante es el mismo.' },
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
      'tooLong': '⚠️ Die Eingabe überschreitet die unterstützte Größe (100.000 Zeichen). Kürze die Eingabe, um sie zu konvertieren.',
    },
    useCases: ['Markdown mit Live-Vorschau in sauberes HTML umwandeln', 'veröffentlichungsfertiges HTML für Blog oder Doku vorbereiten', 'überprüfen, was die Leser am Ende gerendert sehen', 'die HTML-Ausgabe von GitHub-Flavored-Markdown ansehen (Tabellen, Aufgabenlisten)'],
    faqs: [
      { q: 'Welche Markdown-Features werden unterstützt?', a: 'Überschriften (H1-H6), Fett, Kursiv, Inline-Code, Codeblöcke, Zitate, geordnete und ungeordnete Listen, Links, Bilder, Trennlinien und GFM-Tabellen. Die Grundlage ist CommonMark, ergänzt um die häufigsten GitHub-Flavored-Markdown-Erweiterungen für Tabellen und Aufgabenlisten.' },
      { q: 'Kann man das HTML direkt einbetten?', a: 'Rohes HTML wird maskiert, Links mit unsicheren Protokollen werden zu reinem Text umgewandelt, und die Ausgabe von Vorschau und Kopieren wird zusätzlich mit DOMPurify bereinigt. Wenn dein Markdown von Benutzern eingereichten Inhalt enthält, leite die Ausgabe in deiner eigenen Rendering-Pipeline durch einen Sanitizer wie DOMPurify, bevor du sie in eine Live-Seite einfügst, um XSS zu verhindern.' },
      { q: 'Warum werden meine Zeilenumbrüche nicht angezeigt?', a: 'Standard-Markdown behandelt einen einzelnen Zeilenumbruch als Leerzeichen und verlangt zwei Leerzeichen am Zeilenende oder eine Leerzeile für einen Umbruch. Wenn jeder Umbruch als <br> gerendert werden soll, ist das die „Hard-Line-Breaks“-Erweiterung — üblich bei Chat-Stil-Markdown. Dieses Tool folgt dem Standard-Softbreak-Verhalten.' },
      { q: 'Läuft die Konvertierung auf meinem Rechner oder auf einem Server?', a: 'Vollständig im Browser ohne Upload — auch offline nutzbar und damit geeignet für interne Doku, die das Firmennetz nicht verlassen darf. Obergrenze sind 100.000 Zeichen pro Konvertierung; wird sie überschritten, wirst du zum Kürzen aufgefordert.' },
      { q: 'Wie schreibe ich ein | innerhalb einer Tabellenzelle?', a: 'Mit \\| maskieren. Die Spalten definiert die Zeile mit den ---; die Ausrichtung im Quelltext ist reine Kosmetik; das erzeugte HTML ist identisch.' },
    ],
  },
}
