/**
 * csv-to-json 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const csvToJsonL10n: ToolL10n = {
  zh: {
    useCases: [
      '把电子表格数据导入应用程序',
      '将 CSV 表头转为 JSON 对象键',
      '为 API 准备配置数据',
      '转换从 Excel 导出的数据',
    ],
    faqs: [
      { q: '支持 Excel 文件(.xlsx)吗?', a: '本工具只处理 CSV(纯文本)。对于 Excel 文件,请先在 Excel 中导出为 CSV,再在此转换。代码中可用 SheetJS 等库直接处理 .xlsx。' },
    ],
  },
  es: {
    useCases: [
      'importar datos de hojas de cálculo a aplicaciones',
      'convertir encabezados CSV en claves de objetos JSON',
      'preparar datos de configuración para una API',
      'transformar datos exportados desde Excel',
    ],
    faqs: [
      { q: '¿Y los archivos de Excel (.xlsx)?', a: 'Esta herramienta solo maneja CSV (texto plano). Para archivos de Excel, expórtalos a CSV desde Excel primero y conviértelos aquí. Librerías como SheetJS manejan .xlsx directamente en código.' },
    ],
  },
  de: {
    useCases: [
      'Tabellendaten in Anwendungen importieren',
      'CSV-Header zu JSON-Objektschlüsseln machen',
      'Konfigurationsdaten für eine API aufbereiten',
      'aus Excel exportierte Daten umwandeln',
    ],
    faqs: [
      { q: 'Was ist mit Excel-Dateien (.xlsx)?', a: 'Dieses Werkzeug verarbeitet nur CSV (Klartext). Für Excel-Dateien exportiere sie erst aus Excel als CSV und wandle sie hier um. Bibliotheken wie SheetJS verarbeiten .xlsx im Code direkt.' },
    ],
  },
}
