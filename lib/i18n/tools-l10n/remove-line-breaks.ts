/**
 * remove-line-breaks 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const removeLineBreaksL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: '这段文字\n跨越了多个\n行。',
      inputLabel: '你的文本',
      outputLabel: '单行结果',
      note: '📝 移除所有换行,把文本合并为一行。',
    },
    useCases: [
      '清理从 PDF 复制时夹带的换行',
      '修复邮件转发中断裂的引用行',
      '准备单行表单输入',
      '把被折行的 URL 或代码重新接上',
    ],
    faqs: [
      { q: '会删掉词与词之间的空格吗?', a: '不会——换行符会被替换成单个空格,多个连续空格也会合并成一个。词与词之间仍保持正确间隔。' },
      { q: '段落之间的空行会怎样?', a: '空行也是换行,同样被替换成空格——整段文本会彻底变成一行。想保留段落结构,就分块处理再拼回,或先用一个不常见的分隔符把段落边界标出来。' },
      { q: '一次能处理多大的文本?', a: '纯文本合并在浏览器里轻松处理几十万字符(1–2 MB);再大就受设备内存限制。超长文本建议先拆开分批处理。' },
      { q: '能直接用在 CSV 或代码里吗?', a: '要小心:这两种格式里换行是合法语法——CSV 的换行代表新记录,代码靠换行分句。合并前先把真正的换行改成逗号、分号之类的分隔符或转义形式。' },
    ],
  },
  es: {
    ui: {
      defaultInput: 'Este texto\nabarca varias\nlíneas.',
      inputLabel: 'Tu texto',
      outputLabel: 'Una sola línea',
      note: '📝 Elimina todos los saltos de línea y une el texto en una sola línea.',
    },
    useCases: [
      'limpiar los saltos de línea al copiar desde un PDF',
      'arreglar las líneas de cita rotas al reenviar correos',
      'preparar entradas de formulario de una sola línea',
      'volver a unir URLs o código envuelto en varias líneas',
    ],
    faqs: [
      { q: '¿Elimina los espacios entre palabras?', a: 'No — los saltos de línea se sustituyen por un solo espacio y varios espacios consecutivos se colapsan en uno. Las palabras siguen bien separadas.' },
      { q: '¿Qué pasa con las líneas en blanco entre párrafos?', a: 'Una línea en blanco también es un salto y se convierte en espacio, así que el texto queda en una única línea continua. Para conservar párrafos, procesa por bloques o marca antes los cortes con un separador poco frecuente.' },
      { q: '¿Cuánto texto admite de una vez?', a: 'Al ser una operación de texto plano, el navegador maneja sin problema cientos de miles de caracteres (1–2 MB); por encima, el límite lo pone la memoria del dispositivo. Divide los textos enormes en lotes.' },
      { q: '¿Sirve para CSV o código?', a: 'Con cuidado: en esos formatos el salto de línea es sintaxis legítima (nueva fila en CSV, nueva sentencia en código). Antes de unir, sustituye los saltos reales por comas, punto y coma u otra forma de escape.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'Dieser Text\numfasst mehrere\nZeilen.',
      inputLabel: 'Dein Text',
      outputLabel: 'Eine Zeile',
      note: '📝 Entfernt alle Zeilenumbrüche und verbindet den Text zu einer Zeile.',
    },
    useCases: [
      'Zeilenumbrüche beim Kopieren aus PDFs entfernen',
      'abgebrochene Zeilen beim Weiterleiten von E-Mails reparieren',
      'einzeilige Formulareingaben vorbereiten',
      'auf mehrere Zeilen umgebrochene URLs oder Code wieder zusammenfügen',
    ],
    faqs: [
      { q: 'Werden die Leerzeichen zwischen den Wörtern entfernt?', a: 'Nein — Zeilenumbrüche werden durch ein einzelnes Leerzeichen ersetzt und mehrere aufeinanderfolgende Leerzeichen zu einem zusammengefasst. Die Wörter bleiben sauber getrennt.' },
      { q: 'Was passiert mit Leerzeilen zwischen Absätzen?', a: 'Eine Leerzeile ist auch ein Umbruch und wird zum Leerzeichen — der Text wird komplett eine Zeile. Willst du Absätze behalten, bearbeite sie blockweise oder markiere die Brüche vorher mit einem ungewöhnlichen Trennzeichen.' },
      { q: 'Wie viel Text fasst das Tool auf einmal?', a: 'Als reine Textoperation verarbeitet der Browser problemlos mehrere Hunderttausend Zeichen (1–2 MB); darüber entscheidet der Arbeitsspeicher des Geräts. Sehr lange Texte in Etappen verarbeiten.' },
      { q: 'Geeignet für CSV oder Code?', a: 'Nur mit Vorsicht: Dort ist der Zeilenumbruch legitime Syntax — in CSV eine neue Zeile, im Code eine neue Anweisung. Vor dem Zusammenfügen die echten Umbrüche durch Kommas, Semikolons oder Escapes ersetzen.' },
    ],
  },
}
