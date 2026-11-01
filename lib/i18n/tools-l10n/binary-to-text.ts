/**
 * binary-to-text 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const binaryToTextL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: '01001000 01101111 01101100 01100001',
      inputLabel: 'Binario (bytes separados por espacios)',
      outputLabel: 'Texto decodificado',
      note: '💾 Cada grupo de 8 bits es un byte UTF-8. Admite Unicode (chino, emoji).',
      inputTooLarge: '⚠️ Entrada demasiado grande: el tamaño admitido es de hasta 200 000 caracteres. Recorta la entrada para decodificar.',
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
      { q: '¿Maneja UTF-8 / Unicode?', a: 'Sí. Todos los bytes separados por espacios se decodifican como una única secuencia UTF-8: los caracteres ASCII usan un grupo por carácter y los multibyte (caracteres acentuados, emoji) usan varios grupos consecutivos — p. ej., «é» son dos grupos.' },
      { q: '¿Por qué la decodificación sale con símbolos extraños?', a: 'Casi siempre es un desfase de agrupación: los bytes de un carácter multibyte UTF-8 deben ir en grupos consecutivos; si falta o sobra uno, todo lo posterior se corrompe. Verifica que los grupos tengan 8 bits con un solo espacio entre ellos y que el origen sea UTF-8, no Latin-1 o GBK.' },
      { q: '¿Cómo paso de binario a hexadecimal u octal?', a: 'Agrupa de derecha a izquierda: cada 4 bits dan 1 dígito hexadecimal y cada 3 bits, 1 octal. Ejemplo: 01001000 = 0x48 = 72 en decimal = la letra H. Es la vía más rápida para leer volcados de memoria.' },
      { q: '¿Cuánto puede representar un byte como máximo?', a: 'Un entero de 8 bits sin signo va de 0 a 255; con signo (complemento a dos), de −128 a 127. Por eso el ASCII clásico cubre 0–127 y los acentos o emojis necesitan varios bytes formando una secuencia UTF-8.' },
    ],
  },
  de: {
    ui: {
      defaultInput: '01001000 01100001 01101100 01101100 01101111',
      inputLabel: 'Binär (leerzeichengetrennte Bytes)',
      outputLabel: 'Dekodierter Text',
      note: '💾 Jede 8-Bit-Gruppe ist ein UTF-8-Byte. Unterstützt Unicode (Chinesisch, Emoji).',
      inputTooLarge: '⚠️ Eingabe zu groß – die unterstützte Größe beträgt maximal 200.000 Zeichen. Kürze die Eingabe.',
      invalidBinary: '⚠️ Ungültige Binärdaten — verwende Gruppen aus Nullen und Einsen, mit je höchstens 8 Bits',
      couldNotDecode: '⚠️ Dekodieren nicht möglich',
    },
    useCases: [
      'Binär (0 und 1) in lesbaren Text dekodieren',
      'verstehen, wie Computer Zeichen speichern',
      'Binär-Botschaften und -Rätsel entziffern',
      'Datenformate auf niedriger Ebene debuggen',
    ],
    faqs: [
      { q: 'Werden UTF-8 / Unicode unterstützt?', a: 'Ja. Alle leerzeichengetrennten Bytes werden als eine einzige UTF-8-Sequenz dekodiert: ASCII-Zeichen brauchen eine Gruppe pro Zeichen, Multibyte-Zeichen (akkentuierte Zeichen, Emoji) mehrere aufeinanderfolgende Gruppen — „é“ sind z. B. zwei Gruppen.' },
      { q: 'Warum kommt nur Zeichensalat heraus?', a: 'Meist verschiebt sich die Gruppierung: Die Bytes eines Multibyte-UTF-8-Zeichens müssen aufeinanderfolgend bleiben; fehlt oder verrutscht eines, ist alles danach kaputt. Prüfe 8-Bit-Gruppen mit je einem Leerzeichen und ob die Quelle wirklich UTF-8 ist, nicht Latin-1 oder GBK.' },
      { q: 'Wie rechne ich Binär in Hex oder Oktal um?', a: 'Gruppiere von rechts: je 4 Bits ergeben 1 Hex-Ziffer, je 3 Bits 1 Oktalziffer. Beispiel: 01001000 = 0x48 = dezimal 72 = der Buchstabe H. Der schnellste Weg, Memory-Dumps zu lesen.' },
      { q: 'Wie groß kann ein Byte maximal sein?', a: 'Ein 8-Bit-Integer ohne Vorzeichen reicht von 0 bis 255, mit Vorzeichen (Zweierkomplement) von −128 bis 127. Deshalb deckt klassisches ASCII nur 0–127 ab; Umlaute und Emoji brauchen mehrere UTF-8-Bytes.' },
    ],
  },
}
