/**
 * url-decoder 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为共享 EncoderDecoderTool,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const urlDecoderL10n: ToolL10n = {
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
      '解码服务器日志中的编码 URL',
      '还原分析数据里的查询参数',
      '清理抓取或导出的 URL',
      '调试代码中的 URL 处理逻辑',
    ],
    faqs: [
      { q: '+ 表示空格怎么办?', a: '在查询字符串中,+ 常用来表示空格(表单编码)。本工具使用标准百分号解码,会把 + 原样保留。如需转换,请手动把 + 换成空格。' },
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
      'decodificar URLs codificadas de los registros del servidor',
      'recuperar parámetros de consulta de datos de analítica',
      'limpiar URLs extraídas o exportadas',
      'depurar el manejo de URLs en código',
    ],
    faqs: [
      { q: '¿Qué pasa con + para los espacios?', a: 'En las cadenas de consulta, + suele representar un espacio (codificación de formulario). Esta herramienta usa decodificación porcentual estándar, que deja + como +. Convierte + en espacios manualmente si lo necesitas.' },
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
      'kodierte URLs aus Server-Logs dekodieren',
      'Query-Parameter aus Analytics-Daten zurückgewinnen',
      'erappte oder exportierte URLs bereinigen',
      'URL-Verarbeitung im Code debuggen',
    ],
    faqs: [
      { q: 'Was ist mit + für Leerzeichen?', a: 'In Query-Strings steht + oft für ein Leerzeichen (Form-Kodierung). Dieses Werkzeug nutzt Standard-Prozentdekodierung und lässt + als + stehen. Wandle + bei Bedarf manuell in Leerzeichen um.' },
    ],
  },
}
