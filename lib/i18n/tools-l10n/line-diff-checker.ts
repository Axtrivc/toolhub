/**
 * line-diff-checker 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const LineDiffCheckerL10n: ToolL10n = {
  zh: {
    useCases: ['比较文档或代码的两个版本', '快速核对合同/文案的改动', '生成可粘贴的 +/− 差异输出', '统计新增与删除的行数'],
    faqs: [
      { q: '用的是什么算法?', a: '最长公共子序列(LCS)——与 git diff 背后是同一族算法。它会算出把原文变成改文所需的最小增删行集合,再用 + 和 − 标记逐行展示。' },
      { q: '输入最大能有多大?', a: '每侧最多 10 万字符或 2000 行。超过这个规模,O(n²) 的 LCS 表会让浏览器标签页吃不消,所以工具会提示裁剪而不是卡死。这个上限足以覆盖邮件、合同和绝大多数配置文件。' },
      { q: '空行算差异吗?', a: '算。空行与版本控制的处理方式一致,同样参与比较,删掉一个空行也会显示为删除。如果只关心内容,先把两侧的空行去掉再比。' },
      { q: '结果能复制吗?', a: '复制按钮会导出完整的标注输出——每行带 "+ "、"− " 或两个空格的前缀,上方还显示新增/删除计数。可直接粘贴到邮件、文档或缺陷报告里的现成 diff。' },
    ],
    ui: {
      'addedN': '行新增',
      'note': '📐 比较采用最长公共子序列算法——与 git diff 同源。空行也参与比较。',
      'removedN': '行删除',
      'tooLong': '⚠️ 文本超出支持规模(每侧 10 万字符或 2000 行)。请裁剪后再比较。',
      'versionA': '原文本',
      'versionB': '修改后文本',
    },
  },
  es: {
    useCases: ['comparar dos versiones de un documento o código', 'revisar rápido los cambios en un contrato o texto', 'generar un diff con +/− listo para pegar', 'contar líneas añadidas y eliminadas'],
    faqs: [
      { q: '¿Qué algoritmo utiliza?', a: 'Subsecuencia común más larga (LCS), la misma familia de algoritmos detrás de git diff. Calcula el conjunto mínimo de líneas añadidas y eliminadas que convierte el texto original en el modificado, y las muestra con marcadores + y −.' },
      { q: '¿Cómo de grandes pueden ser las entradas?', a: 'Hasta 100 000 caracteres o 2000 líneas por lado. Más allá, la tabla LCS de O(n²) castigaría la pestaña del navegador, así que la herramienta pide recortar en lugar de congelarse. Ese límite cubre correos, contratos y la mayoría de configuraciones.' },
      { q: '¿Las líneas vacías cuentan como diferencias?', a: 'Sí. Las líneas vacías participan en la comparación igual que en el control de versiones: borrar una se muestra como eliminación. Si solo te importa el contenido, elimina las líneas vacías de ambos lados antes.' },
      { q: '¿Puedo copiar el resultado?', a: 'El botón de copiar exporta la salida anotada completa —cada línea con prefijo "+ ", "− " o dos espacios— con los totales de añadidas/eliminadas arriba. Un diff listo para correos, documentación o informes de errores.' },
    ],
    ui: {
      'addedN': 'añadidas',
      'note': '📐 La comparación usa el algoritmo de subsecuencia común más larga — el mismo tras git diff. Las líneas vacías cuentan.',
      'removedN': 'eliminadas',
      'tooLong': '⚠️ El texto supera el tamaño admitido (100 000 caracteres o 2000 líneas por lado). Recórtalo para comparar.',
      'versionA': 'Texto original',
      'versionB': 'Texto modificado',
    },
  },
  de: {
    useCases: ['zwei Versionen eines Dokuments oder Codes vergleichen', 'Änderungen in Verträgen oder Texten schnell prüfen', 'ein einfügefertiges +/−-Diff erzeugen', 'hinzugefügte und gelöschte Zeilen zählen'],
    faqs: [
      { q: 'Welcher Algorithmus steckt dahinter?', a: 'Längste gemeinsame Teilfolge (LCS) — dieselbe Algorithmenfamilie wie hinter git diff. Es berechnet die kleinste Menge hinzugefügter und gelöschter Zeilen, die den Originaltext in den geänderten überführt, und zeigt sie mit + und − an.' },
      { q: 'Wie groß dürfen die Eingaben sein?', a: 'Bis zu 100 000 Zeichen oder 2000 Zeilen pro Seite. Darüber würde die O(n²)-LCS-Tabelle den Browser-Tab belasten, deshalb bittet das Werkzeug um Kürzen statt einzufrieren. Diese Grenze deckt E-Mails, Verträge und die meisten Config-Dateien ab.' },
      { q: 'Zählen Leerzeilen als Unterschied?', a: 'Ja. Leerzeilen nehmen an der Vergleich teil — genau wie bei Versionsverwaltung; eine gelöschte Leerzeile erscheint als Entfernung. Wenn dich nur Inhalt interessiert, entferne vorher beidseitig die Leerzeilen.' },
      { q: 'Kann ich das Ergebnis kopieren?', a: 'Der Kopieren-Button exportiert die vollständige annotierte Ausgabe — jede Zeile mit „+ “, „− “ oder zwei Leerzeichen als Präfix — samt Zählern oben. Ein fertiges Diff für E-Mail, Doku oder Bugreport.' },
    ],
    ui: {
      'addedN': 'hinzugefügt',
      'note': '📐 Der Vergleich nutzt LCS — derselbe Ansatz wie bei git diff. Leerzeilen zählen mit.',
      'removedN': 'entfernt',
      'tooLong': '⚠️ Der Text überschreitet die unterstützte Größe (100.000 Zeichen oder 2000 Zeilen pro Seite). Kürze die Eingabe.',
      'versionA': 'Originaltext',
      'versionB': 'Geänderter Text',
    },
  },
}
