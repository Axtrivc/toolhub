/**
 * csv-to-markdown-table 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = CsvToMarkdownTableClient = 自定义 texttool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const csvToMarkdownTableL10n: ToolL10n = {
  zh: {
    useCases: [
      '在线 CSV 转 Markdown 表格',
      '把 Excel 粘贴内容转为 Markdown 表格',
      '从 CSV 生成 Markdown 表格',
      'GitHub README 表格生成器',
    ],
  },
  es: {
    useCases: [
      'CSV a tabla Markdown online',
      'convertir pegado de Excel en tabla Markdown',
      'generador de tabla Markdown desde CSV',
      'generador de tablas para README de GitHub',
    ],
  },
  de: {
    useCases: [
      'CSV online in Markdown-Tabelle umwandeln',
      'Excel-Eingabe in Markdown-Tabelle umwandeln',
      'Markdown-Tabelle aus CSV erzeugen',
      'Tabellen-Generator für GitHub-README',
    ],
  },
}
