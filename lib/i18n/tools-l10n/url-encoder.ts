/**
 * url-encoder 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为共享 EncoderDecoderTool,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const urlEncoderL10n: ToolL10n = {
  zh: {
    ui: {
      'characters': '字符',
      'clear': '清空',
      'decode': '解码',
      'decodeInputLabel': 'URL 编码的文本',
      'decodeNote': '🔗 把 %20 还原为空格、%26 还原为 & 等。',
      'decodeOutputLabel': '解码结果',
      'encode': '编码',
      'encodeInputLabel': '要编码的文本',
      'encodeNote': '🔗 为在 URL 中安全使用而编码特殊字符。空格变成 %20,& 变成 %26。',
      'encodeOutputLabel': 'URL 编码结果',
      'mode': '模式',
      'modeAria': '编码/解码模式',
      'placeholder': '在此输入或粘贴…',
      'resultPlaceholder': '结果将显示在这里…',
      'words': '词',
    },
    useCases: [
      '编码查询参数值以便安全放入 URL',
      '处理空格、&、= 等特殊字符',
      '为 API 请求构造查询字符串',
      '转义非 ASCII 文本用于网址',
    ],
    faqs: [
      { q: '应该编码整个 URL 还是只编码参数?', a: '只编码单个参数值,不要编码整个 URL。把整个 URL 编码会破坏其中定义结构的 /、? 和 &。' },
    ],
  },
  es: {
    ui: {
      'characters': 'caracteres',
      'clear': 'Limpiar',
      'decode': 'Decodificar',
      'decodeInputLabel': 'Texto URL codificado',
      'decodeNote': '🔗 Decodifica %20 a espacios, %26 a &, etc.',
      'decodeOutputLabel': 'Decodificado',
      'encode': 'Codificar',
      'encodeInputLabel': 'Texto a codificar',
      'encodeNote': '🔗 Codifica caracteres especiales para uso seguro en URLs. Los espacios pasan a %20, & a %26.',
      'encodeOutputLabel': 'URL codificado',
      'mode': 'Modo',
      'modeAria': 'Modo codificar/decodificar',
      'placeholder': 'Escribe o pega aquí…',
      'resultPlaceholder': 'El resultado aparecerá aquí…',
      'words': 'palabras',
    },
    useCases: [
      'codificar valores de parámetros de consulta para usarlos en una URL',
      'gestionar caracteres especiales como espacios, & y =',
      'construir cadenas de consulta para peticiones API',
      'escapar texto no ASCII para URLs',
    ],
    faqs: [
      { q: '¿Debo codificar la URL completa o solo los parámetros?', a: 'Codifica solo los valores individuales de los parámetros, no la URL completa. Codificar toda la URL rompería los /, ? y & que definen su estructura.' },
    ],
  },
  de: {
    ui: {
      'characters': 'Zeichen',
      'clear': 'Leeren',
      'decode': 'Dekodieren',
      'decodeInputLabel': 'URL-kodierter Text',
      'decodeNote': '🔗 Dekodiert %20 zu Leerzeichen, %26 zu & usw.',
      'decodeOutputLabel': 'Dekodiert',
      'encode': 'Kodieren',
      'encodeInputLabel': 'Zu kodierender Text',
      'encodeNote': '🔗 Kodiert Sonderzeichen zur sicheren Nutzung in URLs. Leerzeichen werden %20, & wird %26.',
      'encodeOutputLabel': 'URL-kodiert',
      'mode': 'Modus',
      'modeAria': 'Modus Kodieren/Dekodieren',
      'placeholder': 'Hier eingeben oder einfügen…',
      'resultPlaceholder': 'Das Ergebnis erscheint hier…',
      'words': 'Wörter',
    },
    useCases: [
      'Query-Parameterwerte für die sichere Nutzung in URLs kodieren',
      'Sonderzeichen wie Leerzeichen, & und = behandeln',
      'Query-Strings für API-Anfragen erstellen',
      'Nicht-ASCII-Text für URLs escapen',
    ],
    faqs: [
      { q: 'Soll ich die gesamte URL oder nur die Parameter kodieren?', a: 'Kodiere einzelne Parameterwerte, nicht die gesamte URL. Die Kodierung der ganzen URL würde die /, ? und & zerstören, die ihre Struktur definieren.' },
    ],
  },
}
