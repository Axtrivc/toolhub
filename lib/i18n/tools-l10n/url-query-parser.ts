/**
 * url-query-parser 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const urlQueryParserL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: 'https://example.com/search?q=你好&page=2&sort=desc',
      inputLabel: '带查询串的 URL',
      outputLabel: '解析后的查询参数',
      note: '🔗 把 URL 中的查询参数提取成干净的 JSON 对象。',
    },
    useCases: [
      '调试 API 请求',
      '逆向分析跟踪链接',
      '检查 UTM 营销参数',
      '在代码中构造查询字符串',
    ],
    faqs: [
      { q: '值里的 URL 编码怎么办?', a: '本工具使用浏览器原生的 URLSearchParams 解析器,因此像 %20 这样的编码值会在输出中自动解码。' },
    ],
  },
  es: {
    ui: {
      defaultInput: 'https://example.com/search?q=hola&page=2&sort=desc',
      inputLabel: 'URL con cadena de consulta',
      outputLabel: 'Parámetros analizados',
      note: '🔗 Extrae los parámetros de consulta de una URL en un objeto JSON limpio.',
    },
    useCases: [
      'depurar solicitudes de API',
      'analizar URLs de seguimiento',
      'inspeccionar parámetros UTM de campañas',
      'construir cadenas de consulta en código',
    ],
    faqs: [
      { q: '¿Qué pasa con la codificación URL en los valores?', a: 'Esta herramienta usa el analizador nativo URLSearchParams, por lo que los valores codificados como %20 se decodifican automáticamente en la salida.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'https://example.com/search?q=hallo&page=2&sort=desc',
      inputLabel: 'URL mit Query-String',
      outputLabel: 'Analysierte Parameter',
      note: '🔗 Extrahiert Query-Parameter aus einer URL in ein sauberes JSON-Objekt.',
    },
    useCases: [
      'API-Anfragen debuggen',
      'Tracking-URLs analysieren',
      'UTM-Kampagnenparameter prüfen',
      'Query-Strings im Code aufbauen',
    ],
    faqs: [
      { q: 'Was ist mit URL-Kodierung in den Werten?', a: 'Dieses Werkzeug nutzt den nativen URLSearchParams-Parser, daher werden kodierte Werte wie %20 in der Ausgabe automatisch dekodiert.' },
    ],
  },
}
