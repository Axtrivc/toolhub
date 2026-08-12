/**
 * json-to-csv 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const jsonToCsvL10n: ToolL10n = {
  zh: {
    useCases: [
      '从应用导出数据用于电子表格分析',
      '为数据库导入准备数据',
      '与非技术人员共享数据',
      '导入 Tableau、Power BI 等 BI 工具',
    ],
    faqs: [
      { q: '如果对象键不一样怎么办?', a: '本工具以第一个对象的键为准。多余键会被丢弃,缺失键则为空值。建议先统一数据结构,效果最好。' },
    ],
  },
  es: {
    useCases: [
      'exportar datos de una app para analizarlos en hojas de cálculo',
      'preparar datos para importarlos a una base de datos',
      'compartir datos con personas no técnicas',
      'alimentar herramientas de BI como Tableau o Power BI',
    ],
    faqs: [
      { q: '¿Qué pasa si mis objetos tienen claves distintas?', a: 'La herramienta usa las claves del primer objeto. Los objetos con claves adicionales las verán omitidas; los que falten claves tendrán valores vacíos. Normaliza tu estructura de datos primero para mejores resultados.' },
    ],
  },
  de: {
    useCases: [
      'Daten aus einer App für die Tabellenanalyse exportieren',
      'Daten für den Datenbank-Import aufbereiten',
      'Daten mit nicht-technischen Stakeholdern teilen',
      'Daten in BI-Tools wie Tableau oder Power BI einspeisen',
    ],
    faqs: [
      { q: 'Was, wenn meine Objekte unterschiedliche Schlüssel haben?', a: 'Das Werkzeug nutzt die Schlüssel des ersten Objekts. Objekte mit zusätzlichen Schlüsseln lassen diese weg; fehlende Schlüssel ergeben leere Werte. Normalisiere deine Datenstruktur vorher für das beste Ergebnis.' },
    ],
  },
}
