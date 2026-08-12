/**
 * naming-case-converter 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = NamingCaseConverterClient = 自定义 devtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const namingCaseConverterL10n: ToolL10n = {
  zh: {
    useCases: [
      'camelCase 转 snake_case 转换器',
      'PascalCase 转 kebab-case',
      '转换变量命名规范',
      '在线 CONSTANT_CASE 生成器',
    ],
  },
  es: {
    useCases: [
      'convertir camelCase a snake_case',
      'PascalCase a kebab-case',
      'convertir convenciones de nombres de variables',
      'generador de CONSTANT_CASE online',
    ],
  },
  de: {
    useCases: [
      'camelCase in snake_case umwandeln',
      'PascalCase in kebab-case',
      'Variablen-Benennungskonventionen umwandeln',
      'Online-Generator für CONSTANT_CASE',
    ],
  },
}
