/**
 * text-diff 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const textDiffL10n: ToolL10n = {
  zh: {
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
