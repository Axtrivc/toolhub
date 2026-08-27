/**
 * binary-to-text 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const binaryToTextL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: '11100100 10111101 10100000 11100101 10100101 10111101',
      inputLabel: '二进制(字节间用空格分隔)',
      outputLabel: '解码后的文本',
      note: '💾 每 8 位为一组,代表一个 UTF-8 字节。支持 Unicode(中文、emoji)。',
      inputTooLarge: '⚠️ 输入过大——支持规模最多 20 万字符。请裁剪输入后再计算。',
    },
    useCases: [
      '把二进制(0 和 1)解码回可读文本',
      '学习计算机如何存储字符',
      '解读二进制主题的谜题与信息',
      '调试底层数据格式',
    ],
    faqs: [
      { q: '支持 UTF-8 / Unicode 吗?', a: '支持。空格分隔的所有字节会作为一个完整 UTF-8 序列解码:ASCII 字符每组 1 字节,中文、emoji 等多字节字符由相邻几组字节共同表示。试试默认示例——它会解码出中文"你好"。' },
    ],
  },
  es: {
    ui: {
      defaultInput: '01001000 01101111',
      inputLabel: 'Binario (bytes separados por espacios)',
      outputLabel: 'Texto decodificado',
      note: '💾 Cada grupo de 8 bits es un byte UTF-8. Admite Unicode (chino, emoji).',
      inputTooLarge: '⚠️ Entrada demasiado grande: el tamaño admitido es de hasta 200 000 caracteres. Recorta la entrada para calcular.',
    },
    useCases: [
      'decodificar binario (0 y 1) a texto legible',
      'aprender cómo las computadoras almacenan caracteres',
      'leer mensajes y acertijos en binario',
      'depurar formatos de datos de bajo nivel',
    ],
    faqs: [
      { q: '¿Maneja UTF-8 / Unicode?', a: 'Sí. Todos los bytes separados por espacios se decodifican como una única secuencia UTF-8: los caracteres ASCII usan un grupo por carácter y los multibyte (chino, emoji) usan varios grupos consecutivos — p. ej., el chino «你好» son seis grupos.' },
    ],
  },
  de: {
    ui: {
      defaultInput: '01001000 01100001 01101100 01101100 01101111',
      inputLabel: 'Binär (leerzeichengetrennte Bytes)',
      outputLabel: 'Dekodierter Text',
      note: '💾 Jede 8-Bit-Gruppe ist ein UTF-8-Byte. Unterstützt Unicode (Chinesisch, Emoji).',
      inputTooLarge: '⚠️ Eingabe zu groß – die unterstützte Größe beträgt maximal 200.000 Zeichen. Kürze die Eingabe.',
    },
    useCases: [
      'Binär (0 und 1) in lesbaren Text dekodieren',
      'verstehen, wie Computer Zeichen speichern',
      'Binär-Botschaften und -Rätsel entziffern',
      'Datenformate auf niedriger Ebene debuggen',
    ],
    faqs: [
      { q: 'Werden UTF-8 / Unicode unterstützt?', a: 'Ja. Alle leerzeichengetrennten Bytes werden als eine einzige UTF-8-Sequenz dekodiert: ASCII-Zeichen brauchen eine Gruppe pro Zeichen, Multibyte-Zeichen (Chinesisch, Emoji) mehrere aufeinanderfolgende Gruppen — das chinesische „你好“ sind z. B. sechs Gruppen.' },
    ],
  },
}
