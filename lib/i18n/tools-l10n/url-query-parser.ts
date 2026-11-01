/**
 * url-query-parser 本地化 bundle —— zh / es / de
 * 覆盖:ui + faqs + useCases(交互客户端为 batch 文本工具)
 */
import type { ToolL10n } from '../tool-l10n'

export const urlQueryParserL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'https://example.com/search?q=hola&page=2&sort=desc',
      inputLabel: 'URL con cadena de consulta',
      outputLabel: 'Parámetros analizados',
      note: '🔗 Extrae los parámetros de consulta de una URL en un objeto JSON limpio. Las claves repetidas se recogen en un array.',
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
      note: '🔗 Extrahiert Query-Parameter aus einer URL in ein sauberes JSON-Objekt. Doppelte Schlüssel werden als Array gesammelt.',
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
