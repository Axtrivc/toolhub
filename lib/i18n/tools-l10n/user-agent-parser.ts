/**
 * user-agent-parser 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = UserAgentParserClient = 自定义 devtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const userAgentParserL10n: ToolL10n = {
  zh: {
    useCases: [
      '我的 User-Agent 字符串是什么',
      '在线 User-Agent 解析器',
      '从 User-Agent 检测浏览器',
      'User-Agent 查询工具',
    ],
  },
  es: {
    useCases: [
      'cuál es mi cadena User-Agent',
      'analizador de User-Agent online',
      'detectar el navegador desde el User-Agent',
      'herramienta de consulta de User-Agent',
    ],
  },
  de: {
    useCases: [
      'wie lautet meine User-Agent-Zeichenkette',
      'Online-Parser für User-Agent',
      'Browser aus dem User-Agent erkennen',
      'Nachschlagewerkzeug für User-Agent',
    ],
  },
}
