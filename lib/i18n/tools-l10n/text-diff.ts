/**
 * text-diff 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const textDiffL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: '敏捷的 棕色 狐狸 ||| 缓慢的 棕色 狐狸',
      inputLabel: '格式:文本1 ||| 文本2',
      outputLabel: '对比结果',
      note: '🔍 逐词对比两段文本。用 " ||| " 分隔。以 - 开头的行是原文,以 + 开头的是改动。',
    },
    useCases: [
      '对比文档的两个版本',
      '校对修改内容',
      '核实文本编辑',
      '追踪草稿之间的变化',
    ],
    faqs: [
      { q: '这是按字符还是按词对比?', a: '按词对比——按空白拆分后逐词比较。对一般散文来说这通常是大家想要的。代码类内容用按字符对比更合适。' },
    ],
  },
  es: {
    ui: {
      defaultInput: 'el rápido zorro marrón ||| el lento zorro marrón',
      inputLabel: 'Formato: texto1 ||| texto2',
      outputLabel: 'Comparación',
      note: '🔍 Compara dos textos palabra por palabra. Separa con " ||| ". Las líneas con - son originales, las con + son cambios.',
    },
    useCases: [
      'comparar dos versiones de un documento',
      'revisar los cambios en una corrección',
      'verificar ediciones de texto',
      'rastrear qué cambió entre borradores',
    ],
    faqs: [
      { q: '¿Es un diff por caracteres o por palabras?', a: 'Por palabras — divide por espacios y compara palabra a palabra. Suele ser lo que se quiere para prosa. Los diffs por caracteres son mejores para código.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'der schnelle braune fuchs ||| der langsame braune fuchs',
      inputLabel: 'Format: Text1 ||| Text2',
      outputLabel: 'Vergleich',
      note: '🔍 Vergleicht zwei Texte Wort für Wort. Trenne mit " ||| ". Zeilen mit - sind Original, mit + sind Änderungen.',
    },
    useCases: [
      'zwei Versionen eines Dokuments vergleichen',
      'Änderungen beim Korrekturlesen prüfen',
      'Textbearbeitungen nachvollziehen',
      'feststellen, was sich zwischen Entwürfen geändert hat',
    ],
    faqs: [
      { q: 'Ist das ein Diff auf Zeichen- oder auf Wortebene?', a: 'Auf Wortebene — wird an Leerzeichen getrennt und Wort für Wort verglichen. Für Prosatext ist das meist das Gewünschte. Zeichenbasierte Diffs sind für Code besser.' },
    ],
  },
}
