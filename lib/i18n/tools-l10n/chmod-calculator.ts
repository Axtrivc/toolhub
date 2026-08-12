/**
 * chmod-calculator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = ChmodCalculatorClient = 自定义 devtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const chmodCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      'chmod 755 的含义',
      '八进制与符号权限互转',
      'Linux 文件权限生成器',
      '在线 chmod 命令构建器',
    ],
  },
  es: {
    useCases: [
      'qué significa chmod 755',
      'convertir permisos octales a simbólicos',
      'generador de permisos de archivos Linux',
      'constructor de comandos chmod online',
    ],
  },
  de: {
    useCases: [
      'Bedeutung von chmod 755',
      'Oktale in symbolische Berechtigungen umwandeln',
      'Generator für Linux-Dateiberechtigungen',
      'Online-Baukasten für chmod-Befehle',
    ],
  },
}
