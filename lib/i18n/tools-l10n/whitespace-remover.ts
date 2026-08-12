/**
 * whitespace-remover 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const whitespaceRemoverL10n: ToolL10n = {
  zh: {
    useCases: [
      '清理从网页或 PDF 复制的文本',
      '在粘贴到电子表格前格式化数据',
      '为代码准备文本(多余空格会破坏缩进)',
      '规范表单中的用户输入',
      '整理笔记和草稿',
    ],
    faqs: [
      { q: '会删除所有换行吗?', a: '不会——换行会保留,但空行会被删除。如果你想把所有内容合并成一行,请使用「移除换行」工具。' },
    ],
  },
  es: {
    useCases: [
      'limpiar texto copiado de sitios web o PDF',
      'dar formato a datos antes de pegarlos en una hoja de cálculo',
      'preparar texto para código (los espacios extra rompen la sangría)',
      'normalizar la entrada de usuario en formularios',
      'ordenar notas y borradores',
    ],
    faqs: [
      { q: '¿Esto elimina todos los saltos de línea?', a: 'No — los saltos de línea se conservan, pero las líneas vacías se eliminan. Usa la herramienta Eliminar saltos de línea si también quieres unir todo en una sola línea.' },
    ],
  },
  de: {
    useCases: [
      'aus Webseiten oder PDFs kopierten Text bereinigen',
      'Daten vor dem Einfügen in eine Tabelle formatieren',
      'Text für Code vorbereiten (zusätzliche Leerzeichen zerstören die Einrückung)',
      'Benutzereingaben in Formularen vereinheitlichen',
      'Notizen und Entwürfe aufräumen',
    ],
    faqs: [
      { q: 'Entfernt dies alle Zeilenumbrüche?', a: 'Nein — Zeilenumbrüche bleiben erhalten, aber leere Zeilen werden entfernt. Nutze das Werkzeug Zeilenumbrüche entfernen, wenn du alles in einer Zeile verbinden möchtest.' },
    ],
  },
}
