/**
 * character-frequency 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const characterFrequencyL10n: ToolL10n = {
  zh: {
    ui: {
      inputLabel: '要分析的文本',
      outputLabel: '字符频率',
      note: '📊 统计每个字符的出现次数,按频率排序。适合密码分析和写作分析。',
    },
    useCases: [
      '密码分析与破译',
      '对写作样本做语言学分析',
      '为压缩优化 Huffman 编码',
      '检测异常的字符分布',
    ],
    faqs: [
      { q: '为什么不计入空格?', a: '默认排除空白字符,以便聚焦于真正的字符。如果想统计空格,可在输入中显式加上——它们会以「 」的形式出现在结果中。' },
    ],
  },
  es: {
    ui: {
      inputLabel: 'Texto a analizar',
      outputLabel: 'Frecuencia de caracteres',
      note: '📊 Cuenta las apariciones de cada carácter, ordenadas por frecuencia. Útil para criptoanálisis y análisis de escritura.',
    },
    useCases: [
      'criptoanálisis y descifrado de códigos',
      'análisis lingüístico de muestras de escritura',
      'optimizar la codificación Huffman para compresión',
      'detectar distribuciones inusuales de caracteres',
    ],
    faqs: [
      { q: '¿Por qué no cuenta los espacios?', a: 'Los espacios en blanco se excluyen por defecto para centrarse en los caracteres reales. Para incluirlos, añádelos en tu entrada — aparecerán como « » en el resultado.' },
    ],
  },
  de: {
    ui: {
      inputLabel: 'Zu analysierender Text',
      outputLabel: 'Zeichenhäufigkeit',
      note: '📊 Zählt das Vorkommen jedes Zeichens, sortiert nach Häufigkeit. Nützlich für Kryptoanalyse und Schreibanalyse.',
    },
    useCases: [
      'Kryptoanalyse und Code-Knacken',
      'linguistische Analyse von Schreibproben',
      'Huffman-Codierung für Kompression optimieren',
      'ungewöhnliche Zeichenverteilungen erkennen',
    ],
    faqs: [
      { q: 'Warum werden Leerzeichen nicht gezählt?', a: 'Leerzeichen werden standardmäßig ausgeschlossen, um sich auf die eigentlichen Zeichen zu konzentrieren. Um Leerzeichen einzubeziehen, fügst du sie in der Eingabe hinzu — sie erscheinen als „ " in der Ausgabe.' },
    ],
  },
}
