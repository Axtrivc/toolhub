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
    },
    useCases: [
      '把二进制(0 和 1)解码回可读文本',
      '学习计算机如何存储字符',
      '解读二进制主题的谜题与信息',
      '调试底层数据格式',
    ],
    faqs: [
      { q: '支持 UTF-8 / Unicode 吗?', a: '本工具将每个 8 位分组解码为单个字符(ASCII 范围 0–127)。多字节 UTF-8 字符(如 emoji)需要把每个字节分开并按序列解码——本工具暂不支持。' },
    ],
  },
  es: {
    ui: {
      defaultInput: '01001000 01101111',
      inputLabel: 'Binario (bytes separados por espacios)',
      outputLabel: 'Texto decodificado',
      note: '💾 Cada grupo de 8 bits es un byte UTF-8. Admite Unicode (chino, emoji).',
    },
    useCases: [
      'decodificar binario (0 y 1) a texto legible',
      'aprender cómo las computadoras almacenan caracteres',
      'leer mensajes y acertijos en binario',
      'depurar formatos de datos de bajo nivel',
    ],
    faqs: [
      { q: '¿Maneja UTF-8 / Unicode?', a: 'Esta herramienta decodifica cada grupo de 8 bits como un único carácter (rango ASCII 0-127). Los caracteres multibyte UTF-8 (como los emoji) requerirían separar cada byte y decodificarlos como secuencia; esta herramienta no lo hace.' },
    ],
  },
  de: {
    ui: {
      defaultInput: '01001000 01100001 01101100 01101100 01101111',
      inputLabel: 'Binär (leerzeichengetrennte Bytes)',
      outputLabel: 'Dekodierter Text',
      note: '💾 Jede 8-Bit-Gruppe ist ein UTF-8-Byte. Unterstützt Unicode (Chinesisch, Emoji).',
    },
    useCases: [
      'Binär (0 und 1) in lesbaren Text dekodieren',
      'verstehen, wie Computer Zeichen speichern',
      'Binär-Botschaften und -Rätsel entziffern',
      'Datenformate auf niedriger Ebene debuggen',
    ],
    faqs: [
      { q: 'Werden UTF-8 / Unicode unterstützt?', a: 'Dieses Werkzeug dekodiert jede 8-Bit-Gruppe als einzelnes Zeichen (ASCII-Bereich 0-127). Multibyte-UTF-8-Zeichen (wie Emoji) müssten byteweise getrennt und als Folge dekodiert werden — dieses Werkzeug unterstützt das nicht.' },
    ],
  },
}
