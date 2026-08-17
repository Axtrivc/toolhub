/**
 * sentence-case-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const sentenceCaseConverterL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: 'hello. 我叫小明. nice to meet you.',
      inputLabel: '你的文本',
      outputLabel: '句首大写',
      note: '✍️ 把每个句子的首字母大写。专有名词最好手动保留。',
      'cjkNoEffectNote': 'ℹ️ 大小写转换只作用于英文字母——中文字符保持不变。',
    },
    useCases: [
      '整理文章、邮件和文档的正文段落',
      '为新闻报道撰写标题(句首大写为主)',
      '把全大写文本还原为正常大小写',
      '需要高可读性的通俗写作',
    ],
    faqs: [
      { q: '像「USA」这样的缩写怎么办?', a: '本工具会把它转成「usa」。转换后你需要手动修正缩写和专有名词,目前还没有自动化工具能完美区分它们。' },
    ],
  },
  es: {
    ui: {
      defaultInput: 'hola. me llamo juan. mucho gusto.',
      inputLabel: 'Tu texto',
      outputLabel: 'Tipo oración',
      note: '✍️ Capitaliza la primera letra de cada oración. Los nombres propios conviene revisarlos a mano.',
      'cjkNoEffectNote': 'ℹ️ La conversión de mayúsculas solo afecta a letras latinas: los caracteres chinos no cambian.',
    },
    useCases: [
      'ordenar el cuerpo de artículos, correos y documentación',
      'redactar titulares de prensa (capitalización de frase)',
      'reconvertir texto escrito todo en mayúsculas',
      'escritura en lenguaje llano donde importa la legibilidad',
    ],
    faqs: [
      { q: '¿Qué pasa con abreviaturas como «USA»?', a: 'Esta herramienta las pasa a «usa». Tendrás que corregir manualmente las abreviaturas y los nombres propios después de la conversión. Ninguna herramienta automática puede distinguirlos a la perfección.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'hallo. ich heiße max. wie geht es dir?',
      inputLabel: 'Dein Text',
      outputLabel: 'Satz-Schreibweise',
      note: '✍️ Schreibt den ersten Buchstaben jedes Satzes groß. Eigennamen am besten manuell prüfen.',
      'cjkNoEffectNote': 'ℹ️ Die Groß-/Kleinschreibung betrifft nur lateinische Buchstaben — chinesische Zeichen bleiben unverändert.',
    },
    useCases: [
      'Fließtext in Artikeln, E-Mails und Dokumentation ordnen',
      'Nachrichtentitel verfassen (Satzanfang-Großschreibung)',
      'GROSS geschriebenen Text in normale Schreibweise zurückwandeln',
      'leicht verständliche Texte mit hoher Lesbarkeit',
    ],
    faqs: [
      { q: 'Was ist mit Abkürzungen wie „USA"?', a: 'Dieses Werkzeug wandelt sie in „usa" um. Nach der Umwandlung musst du Abkürzungen und Eigennamen manuell korrigieren. Kein automatisches Werkzeug kann sie fehlerfrei unterscheiden.' },
    ],
  },
}
