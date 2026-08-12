/**
 * nginx-config-generator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = NginxConfigGeneratorClient = 自定义 devtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const nginxConfigGeneratorL10n: ToolL10n = {
  zh: {
    useCases: [
      'nginx 反向代理配置生成器',
      'Node.js 应用的 nginx 配置',
      'nginx WebSocket 代理配置',
      'Let’s Encrypt nginx SSL 配置模板',
    ],
  },
  es: {
    useCases: [
      'generador de configuración de proxy inverso nginx',
      'configuración nginx para app Node.js',
      'configuración de proxy WebSocket nginx',
      'plantilla SSL nginx con Let’s Encrypt',
    ],
  },
  de: {
    useCases: [
      'nginx Reverse-Proxy-Konfigurationsgenerator',
      'nginx-Konfiguration für Node.js-App',
      'nginx WebSocket-Proxy-Konfiguration',
      'Let’s-Encrypt-nginx-SSL-Konfigurationsvorlage',
    ],
  },
}
