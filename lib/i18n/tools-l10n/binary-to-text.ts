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
      invalidBinary: '⚠️ 无效的二进制——每组须为 0/1 且不超过 8 位',
      couldNotDecode: '⚠️ 无法解码',
    },
    useCases: [
      '把二进制(0 和 1)解码回可读文本',
      '学习计算机如何存储字符',
      '解读二进制主题的谜题与信息',
      '调试底层数据格式',
    ],
    faqs: [
      { q: '支持 UTF-8 / Unicode 吗?', a: '支持。空格分隔的所有字节会作为一个完整 UTF-8 序列解码:ASCII 字符每组 1 字节,中文、emoji 等多字节字符由相邻几组字节共同表示。试试默认示例——它会解码出中文"你好"。' },
      { q: '为什么解码出来是乱码?', a: '多半是分组错位:UTF-8 多字节字符的字节必须连续成组,漏掉或多算一个字节,后面全部错位。先确认每组恰好 8 位、组间只有一个空格,再检查源文本是不是 GBK 之类非 UTF-8 编码。' },
      { q: '二进制怎么转十六进制或八进制?', a: '从右往左每 4 位二进制对应 1 位十六进制、每 3 位对应 1 位八进制。例如 01001000 = 0x48 = 十进制 72 = 字母 H。这是读内存 dump 最快的路径。' },
      { q: '一个字节最大表示多少?', a: '8 位无符号整数范围 0–255;有符号(补码)是 −128 到 127。这也解释了 ASCII 为何只占 0–127,而中文、emoji 需要多个字节组合成 UTF-8 序列。' },
    ],
  },
  es: {
    ui: {
      defaultInput: '01001000 01101111',
      inputLabel: 'Binario (bytes separados por espacios)',
      outputLabel: 'Texto decodificado',
      note: '💾 Cada grupo de 8 bits es un byte UTF-8. Admite Unicode (chino, emoji).',
      inputTooLarge: '⚠️ Entrada demasiado grande: el tamaño admitido es de hasta 200 000 caracteres. Recorta la entrada para calcular.',
      invalidBinary: '⚠️ Binario no válido: usa grupos de 0s y 1s, hasta 8 bits cada uno',
      couldNotDecode: '⚠️ No se pudo decodificar',
    },
    useCases: [
      'decodificar binario (0 y 1) a texto legible',
      'aprender cómo las computadoras almacenan caracteres',
      'leer mensajes y acertijos en binario',
      'depurar formatos de datos de bajo nivel',
    ],
    faqs: [
      { q: '¿Maneja UTF-8 / Unicode?', a: 'Sí. Todos los bytes separados por espacios se decodifican como una única secuencia UTF-8: los caracteres ASCII usan un grupo por carácter y los multibyte (chino, emoji) usan varios grupos consecutivos — p. ej., el chino «你好» son seis grupos.' },
      { q: '¿Por qué la decodificación sale con símbolos extraños?', a: 'Casi siempre es un desfase de agrupación: los bytes de un carácter multibyte UTF-8 deben ir en grupos consecutivos; si falta o sobra uno, todo lo posterior se corrompe. Verifica grupos de 8 bits con un solo espacio entre ellos y que el origen sea UTF-8, no Latin-1 o GBK.' },
      { q: '¿Cómo paso de binario a hexadecimal u octal?', a: 'Agrupa de derecha a izquierda: cada 4 bits dan 1 dígito hexadecimal y cada 3 bits, 1 octal. Ejemplo: 01001000 = 0x48 = 72 en decimal = la letra H. Es la vía más rápida para leer volcados de memoria.' },
      { q: '¿Cuánto representa un byte como máximo?', a: 'Un entero de 8 bits sin signo va de 0 a 255; con signo (complemento a dos), de −128 a 127. Por eso el ASCII clásico cubre 0–127 y los acentos o emojis necesitan varios bytes formando una secuencia UTF-8.' },
    ],
  },
  de: {
    ui: {
      defaultInput: '01001000 01100001 01101100 01101100 01101111',
      inputLabel: 'Binär (leerzeichengetrennte Bytes)',
      outputLabel: 'Dekodierter Text',
      note: '💾 Jede 8-Bit-Gruppe ist ein UTF-8-Byte. Unterstützt Unicode (Chinesisch, Emoji).',
      inputTooLarge: '⚠️ Eingabe zu groß – die unterstützte Größe beträgt maximal 200.000 Zeichen. Kürze die Eingabe.',
      invalidBinary: '⚠️ Ungültige Binärdaten — verwende Gruppen aus 0en und 1en, jeweils bis 8 Bits',
      couldNotDecode: '⚠️ Dekodieren nicht möglich',
    },
    useCases: [
      'Binär (0 und 1) in lesbaren Text dekodieren',
      'verstehen, wie Computer Zeichen speichern',
      'Binär-Botschaften und -Rätsel entziffern',
      'Datenformate auf niedriger Ebene debuggen',
    ],
    faqs: [
      { q: 'Werden UTF-8 / Unicode unterstützt?', a: 'Ja. Alle leerzeichengetrennten Bytes werden als eine einzige UTF-8-Sequenz dekodiert: ASCII-Zeichen brauchen eine Gruppe pro Zeichen, Multibyte-Zeichen (Chinesisch, Emoji) mehrere aufeinanderfolgende Gruppen — das chinesische „你好“ sind z. B. sechs Gruppen.' },
      { q: 'Warum kommt nur Zeichensalat heraus?', a: 'Meist verschiebt sich die Gruppierung: Die Bytes eines Multibyte-UTF-8-Zeichens müssen aufeinanderfolgend bleiben; fehlt oder verrutscht eines, ist alles danach kaputt. Prüfe 8-Bit-Gruppen mit je einem Leerzeichen und ob die Quelle wirklich UTF-8 ist, nicht Latin-1 oder GBK.' },
      { q: 'Wie rechne ich Binär in Hex oder Oktal um?', a: 'Gruppiere von rechts: je 4 Bits ergeben 1 Hex-Ziffer, je 3 Bits 1 Oktalziffer. Beispiel: 01001000 = 0x48 = dezimal 72 = der Buchstabe H. Der schnellste Weg, Memory-Dumps zu lesen.' },
      { q: 'Wie groß kann ein Byte maximal sein?', a: 'Ein 8-Bit-Integer ohne Vorzeichen reicht von 0 bis 255, mit Vorzeichen (Zweierkomplement) von −128 bis 127. Deshalb deckt klassisches ASCII nur 0–127 ab; Umlaute und Emoji brauchen mehrere UTF-8-Bytes.' },
    ],
  },
}
