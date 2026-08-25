/**
 * log-filter-tool 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const LogFilterToolL10n: ToolL10n = {
  zh: {
    ui: {
      'allLevels': '全部级别',
      'excludeLabel': '排除',
      'includeLabel': '包含(关键词或正则)',
      'inputLabel': '粘贴日志',
      'invalidRegex': '无效的正则表达式',
      'levelLabel': '日志级别',
      'matchedN': '{t} 行中的 {m} 行',
      'noLines': '没有符合当前过滤条件的行。',
      'note': '🔒 过滤完全在客户端运行——放心粘贴生产日志。级别匹配按词边界精确匹配(WARN 匹配 WARN,不匹配 WARNING)。',
      'regexToggle': '按正则表达式处理',
    },
  },
  es: {
    ui: {
      'allLevels': 'Todos los niveles',
      'excludeLabel': 'Excluir',
      'includeLabel': 'Incluir (palabra o regex)',
      'inputLabel': 'Pega tus logs',
      'invalidRegex': 'Expresión regular no válida',
      'levelLabel': 'Nivel de log',
      'matchedN': '{m} de {t} líneas',
      'noLines': 'Ninguna línea coincide con los filtros.',
      'note': '🔒 El filtrado es 100 % en el cliente — pega logs de producción sin miedo. El nivel coincide por límite de palabra exacto.',
      'regexToggle': 'Tratar patrones como regex',
    },
  },
  de: {
    ui: {
      'allLevels': 'Alle Stufen',
      'excludeLabel': 'Ausschließen',
      'includeLabel': 'Einschließen (Wort oder Regex)',
      'inputLabel': 'Logs einfügen',
      'invalidRegex': 'Ungültiger regulärer Ausdruck',
      'levelLabel': 'Log-Level',
      'matchedN': '{m} von {t} Zeilen',
      'noLines': 'Keine Zeilen entsprechen den Filtern.',
      'note': '🔒 Das Filtern läuft komplett im Browser — Produktivlogs bedenkenlos einfügen. Level-Match ist wortgrenzengenau.',
      'regexToggle': 'Muster als Regex behandeln',
    },
  },
}
