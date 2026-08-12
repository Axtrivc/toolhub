/**
 * text-size-estimator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const textSizeEstimatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '规划数据库 VARCHAR 字段长度',
      '检查 API 载荷大小限制',
      '估算存储成本',
      '校验文本字段约束',
    ],
    faqs: [
      { q: '为什么 Base64 会增加 33%?', a: 'Base64 把每 3 个字节编码为 4 个字符,大小增长为 4/3 ≈ 1.33。这是在文本格式中嵌入二进制数据的标准开销。' },
    ],
  },
  es: {
    useCases: [
      'planificar tamaños VARCHAR de base de datos',
      'comprobar límites de carga útil de la API',
      'estimar costos de almacenamiento',
      'validar restricciones de campos de texto',
    ],
    faqs: [
      { q: '¿Por qué Base64 añade un 33 %?', a: 'Base64 codifica 3 bytes como 4 caracteres. El tamaño crece 4/3 ≈ 1,33. Esta es la sobrecarga estándar para incrustar datos binarios en formatos de texto.' },
    ],
  },
  de: {
    useCases: [
      'VARCHAR-Größen in der Datenbank planen',
      'API-Payload-Limits prüfen',
      'Speicherkosten schätzen',
      'Textfeld-Beschränkungen validieren',
    ],
    faqs: [
      { q: 'Warum vergrößert Base64 um 33 %?', a: 'Base64 kodiert 3 Bytes als 4 Zeichen. Die Größe wächst um 4/3 ≈ 1,33. Das ist der Standardaufwand, um Binärdaten in Textformate einzubetten.' },
    ],
  },
}
