/**
 * json-schema-generator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = JsonSchemaGeneratorClient = 自定义 devtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const jsonSchemaGeneratorL10n: ToolL10n = {
  zh: {
    useCases: [
      '在线从 JSON 生成 JSON Schema',
      'Draft-07 JSON Schema 生成器',
      '从 JSON 负载推断 Schema',
      '生成 JSON Schema 的必填字段',
    ],
  },
  es: {
    useCases: [
      'generar JSON Schema desde JSON online',
      'generador de JSON Schema Draft-07',
      'inferir esquema desde un payload JSON',
      'generar campos obligatorios del JSON Schema',
    ],
  },
  de: {
    useCases: [
      'JSON Schema aus JSON online erzeugen',
      'Draft-07 JSON-Schema-Generator',
      'Schema aus JSON-Payload ableiten',
      'Pflichtfelder im JSON-Schema erzeugen',
    ],
  },
}
