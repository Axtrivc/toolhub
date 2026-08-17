/**
 * json-formatter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const jsonFormatterL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: '{"姓名":"张三","年龄":30,"城市":"北京","技能":["js","css"]}',
      inputLabel: 'JSON(原始或压缩)',
      outputLabel: '格式化后的 JSON',
      note: '🔧 用 2 空格缩进格式化并美化 JSON。会校验语法——出错时显示提示。',
    },
    useCases: ['调试 API 返回的 JSON 数据', '阅读和整理配置文件', '在开发阶段审查大型数据载荷', '部署前排查 JSON 语法错误'],
    faqs: [
      { q: 'JSON、JSON5 和 JSONC 有什么区别?', a: '标准 JSON 非常严格。JSON5 允许注释、尾逗号和不加引号的键。JSONC 是带注释的 JSON(VS Code 在用)。本工具期望标准 JSON。' },
    ],
  },
  es: {
    ui: {
      defaultInput: '{"nombre":"Juan","edad":30,"ciudad":"Madrid","habilidades":["js","css"]}',
      inputLabel: 'JSON (crudo o minificado)',
      outputLabel: 'JSON con formato',
      note: '🔧 Formatea y embellece JSON con sangría de 2 espacios. Valida la sintaxis — los errores muestran un mensaje.',
    },
    useCases: ['depurar respuestas JSON de una API', 'leer y organizar archivos de configuración', 'revisar payloads grandes durante el desarrollo', 'cazar errores de sintaxis JSON antes del despliegue'],
    faqs: [
      { q: '¿Diferencia entre JSON, JSON5 y JSONC?', a: 'El JSON estándar es estricto. JSON5 permite comentarios, comas finales y claves sin comillas. JSONC es JSON con comentarios (usado por VS Code). Este formateador espera JSON estándar.' },
    ],
  },
  de: {
    ui: {
      defaultInput: '{"name":"Max","alter":30,"stadt":"Berlin","skills":["js","css"]}',
      inputLabel: 'JSON (roh oder minimiert)',
      outputLabel: 'Formatiertes JSON',
      note: '🔧 Formatiert JSON mit 2-Leerzeichen-Einrückung. Prüft die Syntax — bei Fehlern erscheint eine Meldung.',
    },
    useCases: ['JSON-Antworten einer API debuggen', 'Konfigurationsdateien lesen und ordnen', 'große Payloads während der Entwicklung prüfen', 'JSON-Syntaxfehler vor dem Deployment finden'],
    faqs: [
      { q: 'Was ist der Unterschied zwischen JSON, JSON5 und JSONC?', a: 'Standard-JSON ist streng. JSON5 erlaubt Kommentare, nachgestellte Kommas und Schlüssel ohne Anführungszeichen. JSONC ist JSON mit Kommentaren (von VS Code verwendet). Dieser Formatter erwartet Standard-JSON.' },
    ],
  },
}
