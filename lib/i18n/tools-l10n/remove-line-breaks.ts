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
    ],
  },
}
