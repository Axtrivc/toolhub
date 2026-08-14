/**
 * whitespace-remover 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const whitespaceRemoverL10n: ToolL10n = {
  zh: {
    ui: {
      'characters': '字符',
      'cleanedText': '清理后的文本',
      'clear': '清空',
      'collapseSpaces': '合并多余空格',
      'dedupe': '移除重复行',
      'dropEmptyLines': '移除空行',
      'join': '拼接:',
      'joinNewline': '换行(多行)',
      'joinSingle': '单行',
      'joinSpace': '空格(段落)',
      'note': '🧹 把空白合并、空行移除、去重和排序整合到一个工具。勾选上方任意选项;一切都在你的浏览器本地运行。',
      'placeholder': '粘贴含多余空格、空行或重复项的文本…',
      'resultPlaceholder': '结果将显示在这里…',
      'sortAZ': '按 A → Z 排序',
      'trimEachLine': '修剪每行',
      'words': '词',
      'yourText': '你的文本',
    },
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
    ui: {
      'characters': 'caracteres',
      'cleanedText': 'Texto limpio',
      'clear': 'Limpiar',
      'collapseSpaces': 'Colapsar espacios múltiples',
      'dedupe': 'Quitar líneas duplicadas',
      'dropEmptyLines': 'Quitar líneas vacías',
      'join': 'Unir:',
      'joinNewline': 'Saltos de línea (multilínea)',
      'joinSingle': 'Línea única',
      'joinSpace': 'Espacios (párrafo)',
      'note': '🧹 Combina colapso de espacios, eliminación de líneas vacías, deduplicación y orden en una herramienta. Activa cualquier opción; todo corre localmente en tu navegador.',
      'placeholder': 'Pega texto con espacios extra, líneas vacías o duplicados…',
      'resultPlaceholder': 'El resultado aparecerá aquí…',
      'sortAZ': 'Ordenar A → Z',
      'trimEachLine': 'Recortar cada línea',
      'words': 'palabras',
      'yourText': 'Tu texto',
    },
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
    ui: {
      'characters': 'Zeichen',
      'cleanedText': 'Gesäuberter Text',
      'clear': 'Leeren',
      'collapseSpaces': 'Mehrfache Leerzeichen verbinden',
      'dedupe': 'Doppelte Zeilen entfernen',
      'dropEmptyLines': 'Leerzeilen entfernen',
      'join': 'Verbinden:',
      'joinNewline': 'Zeilenumbrüche (mehrzeilig)',
      'joinSingle': 'Einzelne Zeile',
      'joinSpace': 'Leerzeichen (Absatz)',
      'note': '🧹 Vereint Leerzeichen-Verbinden, Leerzeilen-Entfernen, Deduplizieren und Sortieren in einem Werkzeug. Beliebige Option aktivieren; alles läuft lokal in deinem Browser.',
      'placeholder': 'Text mit excessiven Leerzeichen, Leerzeilen oder Duplikaten einfügen…',
      'resultPlaceholder': 'Das Ergebnis erscheint hier…',
      'sortAZ': 'A → Z sortieren',
      'trimEachLine': 'Jede Zeile trimmen',
      'words': 'Wörter',
      'yourText': 'Dein Text',
    },
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
