/**
 * json-minifier 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const jsonMinifierL10n: ToolL10n = {
  zh: {
    useCases: [
      'API 响应(通常还会再 gzip)',
      '嵌入 HTML 或 JavaScript 的 JSON',
      '存入数据库的配置',
      '带宽敏感的移动应用',
    ],
    faqs: [
      { q: '压缩会破坏什么吗?', a: '不会。空白字符在 JSON 语法中无意义,压缩后的 JSON 与格式化后的 JSON 解析结果完全相同。对已压缩的 JSON 再次压缩不会有任何变化。' },
    ],
  },
  es: {
    useCases: [
      'respuestas de API (a menudo además comprimidas con gzip)',
      'JSON incrustado en HTML o JavaScript',
      'configuraciones almacenadas en bases de datos',
      'aplicaciones móviles sensibles al ancho de banda',
    ],
    faqs: [
      { q: '¿La minimización rompe algo?', a: 'No. Los espacios en blanco no son significativos en la sintaxis JSON. El JSON minimizado se analiza igual que el JSON formateado. Volver a minimizar JSON ya minimizado no produce cambios.' },
    ],
  },
  de: {
    useCases: [
      'API-Antworten (oft zusätzlich gzip-komprimiert)',
      'eingebettetes JSON in HTML oder JavaScript',
      'in Datenbanken gespeicherte Konfigurationen',
      'bandbreitenkritische mobile Apps',
    ],
    faqs: [
      { q: 'Macht Minifizierung etwas kaputt?', a: 'Nein. Leerzeichen sind in der JSON-Syntax nicht bedeutend. Minifiziertes JSON wird genauso geparst wie formatiertes JSON. Bereits minifiziertes JSON erneut zu minifizieren ist ein No-Op.' },
    ],
  },
}
