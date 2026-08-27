/**
 * json-diff 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const JsonDiffL10n: ToolL10n = {
  zh: {
    useCases: ['比对两次 API 响应的差异', '检查配置文件改了哪些字段', '定位两份 JSON 的结构分歧点', '生成可粘贴到工单的差异摘要'],
    faqs: [
      { q: '键的顺序有影响吗?', a: '没有。比较是结构化的:只要键和值都一致,两个对象就算相同,与键出现的先后无关。但数组顺序有影响——[1,2] 和 [2,1] 会被报告为已更改,与 JSON 对列表的语义一致。' },
      { q: '嵌套的改动怎么展示?', a: '每处差异都会给出点号路径(如 user.address.city)、变更类型(新增/删除/更改)以及前后值并排显示。无需肉眼翻原始文件,就能精确定位两份 API 响应从哪里开始不同。' },
      { q: 'JSON 不合法会怎样?', a: '会用红色显示浏览器 JSON 引擎报出的解析错误——不猜测、不给残缺结果。修好出错一侧的语法,输入过程中对比结果会即时刷新。' },
      { q: '能把差异导出吗?', a: '可以。「复制摘要」会按每行一条输出差异,前缀 + / − / ~,并附总数——可直接粘贴到 PR、工单或聊天里。同份数据也支持纯文本下载。' },
    ],
    ui: {
      'exportFull': '「复制摘要」/下载始终包含全部差异。',
      'moreDifferences': '+{n} 条差异未显示——请裁剪输入或缩小改动范围以查看其余部分。',
      'tooLong': '⚠️ 输入超出支持规模(每侧 10 万字符)。请裁剪两侧文档后再比较。',
      'compared': '对比 JSON',
      'copySummary': '复制摘要',
      'identical': '✓ 两份文档结构完全一致',
      'note': '🔍 比较是结构化的:对象键顺序无关,数组顺序有关。值在 JSON 解析后做深度相等比较。',
      'original': '原 JSON',
      'thChange': '差异',
      'thPath': '路径',
    },
  },
  es: {
    useCases: ['comparar dos respuestas de API', 'ver qué campos cambiaron en una configuración', 'localizar dónde divergen dos estructuras JSON', 'generar un resumen de diferencias para un ticket'],
    faqs: [
      { q: '¿Importa el orden de las claves?', a: 'No. La comparación es estructural: dos objetos coinciden cuando sus claves y valores coinciden, sin importar el orden. El orden de los arrays sí importa: [1,2] frente a [2,1] se marca como cambio, igual que en la semántica de JSON.' },
      { q: '¿Cómo se muestran los cambios anidados?', a: 'Cada diferencia incluye su ruta en notación de puntos (como user.address.city), el tipo de cambio (añadido, eliminado o modificado) y los valores antiguo y nuevo lado a lado. Puedes localizar dónde divergen dos respuestas sin revisar los archivos a ojo.' },
      { q: '¿Qué pasa si el JSON es inválido?', a: 'Se muestra en rojo el error del motor JSON de tu navegador: sin conjeturas ni resultados parciales. Corrige el error de sintaxis en el lado indicado y el diff se recalcula al instante mientras escribes.' },
      { q: '¿Puedo exportar las diferencias?', a: 'Sí. «Copiar resumen» produce una línea por diferencia con prefijo + / − / ~ más el total, lista para pegar en un pull request o ticket. También hay descarga en texto plano de los mismos datos.' },
    ],
    ui: {
      'exportFull': '«Copiar resumen» / descargar incluye siempre todas las diferencias.',
      'moreDifferences': '+{n} diferencias más no mostradas: recorta la entrada o reduce el conjunto de cambios para ver el resto.',
      'tooLong': '⚠️ La entrada supera el tamaño admitido (100 000 caracteres por lado). Recorta ambos documentos para comparar.',
      'compared': 'JSON comparado',
      'copySummary': 'Copiar resumen',
      'identical': '✓ Los dos documentos son idénticos',
      'note': '🔍 La comparación es estructural: el orden de claves no importa, el de arrays sí. Los valores se comparan en profundidad tras parsear.',
      'original': 'JSON original',
      'thChange': 'Cambio',
      'thPath': 'Ruta',
    },
  },
  de: {
    useCases: ['zwei API-Antworten vergleichen', 'prüfen, welche Felder in einer Config geändert wurden', 'finden, wo zwei JSON-Strukturen abweichen', 'eine Diff-Zusammenfassung für Tickets erzeugen'],
    faqs: [
      { q: 'Spielt die Reihenfolge der Schlüssel eine Rolle?', a: 'Nein. Der Vergleich ist strukturell: Zwei Objekte stimmen überein, wenn Schlüssel und Werte gleich sind — unabhängig von der Reihenfolge. Bei Arrays zählt die Reihenfolge sehr wohl: [1,2] gegenüber [2,1] wird als Änderung gemeldet.' },
      { q: 'Wie werden verschachtelte Änderungen angezeigt?', a: 'Jede Abweichung erhält einen Punkt-Pfad wie user.address.city, die Art der Änderung (hinzugefügt, entfernt, geändert) sowie alten und neuen Wert Seite an Seite. So siehst du genau, wo zwei API-Antworten auseinanderlaufen, ohne die Rohdaten durchzulesen.' },
      { q: 'Was passiert bei ungültigem JSON?', a: 'Der Parser-Fehler der JSON-Engine deines Browsers wird rot angezeigt — kein Raten, keine Teilergebnisse. Behebe den Syntaxfehler auf der markierten Seite, und der Diff aktualisiert sich sofort beim Tippen.' },
      { q: 'Kann ich das Diff exportieren?', a: 'Ja. „Zusammenfassung kopieren“ liefert eine Zeile pro Unterschied mit den Präfixen + / − / ~ plus Gesamtzahl — fertig zum Einfügen in Pull Request oder Ticket. Dieselben Daten gibt es auch als Text-Download.' },
    ],
    ui: {
      'exportFull': '„Zusammenfassung kopieren“ / Herunterladen enthält immer alle Unterschiede.',
      'moreDifferences': '+{n} weitere Unterschiede werden nicht angezeigt – kürze die Eingabe oder verkleinere die Änderungsmenge, um den Rest zu sehen.',
      'tooLong': '⚠️ Die Eingabe überschreitet die unterstützte Größe (100.000 Zeichen pro Seite). Kürze beide Dokumente zum Vergleichen.',
      'compared': 'Vergleichs-JSON',
      'copySummary': 'Zusammenfassung kopieren',
      'identical': '✓ Beide Dokumente sind identisch',
      'note': '🔍 Der Vergleich ist strukturell: Schlüsselreihenfolge egal, Array-Reihenfolge zählt. Werte werden tief verglichen.',
      'original': 'Original-JSON',
      'thChange': 'Änderung',
      'thPath': 'Pfad',
    },
  },
}
