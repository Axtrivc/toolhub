/**
 * url-decoder 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为共享 EncoderDecoderTool,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const urlDecoderL10n: ToolL10n = {
  zh: {
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
