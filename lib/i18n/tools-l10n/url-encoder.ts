/**
 * url-encoder 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为共享 EncoderDecoderTool,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const urlEncoderL10n: ToolL10n = {
  zh: {
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
