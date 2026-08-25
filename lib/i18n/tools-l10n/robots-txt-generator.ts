/**
 * robots-txt-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const RobotsTxtGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'addRule': '添加规则',
      'agentLabel': 'User-agent',
      'allowLabel': '允许路径',
      'delayLabel': '抓取延迟秒数(可选)',
      'disallowLabel': '禁止路径',
      'note': '🤖 将文件放在域名根目录(example.com/robots.txt)。Google 忽略 Crawl-delay;Bing 和 Yandex 遵守。屏蔽 AI 爬虫(GPTBot、ClaudeBot、CCBot)由各自运营方遵守。',
      'outputLabel': 'robots.txt',
      'presetAllowAll': '允许全部',
      'presetBlockAi': '屏蔽 AI 爬虫',
      'presetBlockAll': '禁止全部',
      'presetStandard': '标准站点',
      'sitemapLabel': 'Sitemap 地址(可选)',
    },
  },
  es: {
    ui: {
      'addRule': 'Añadir regla',
      'agentLabel': 'User-agent',
      'allowLabel': 'Rutas permitidas',
      'delayLabel': 'Retardo de rastreo en segundos (opcional)',
      'disallowLabel': 'Rutas bloqueadas',
      'note': '🤖 Coloca el archivo en la raíz del dominio. Google ignora Crawl-delay; Bing y Yandex lo respetan. Bloquear rastreadores IA (GPTBot, ClaudeBot, CCBot) lo cumplen sus operadores.',
      'outputLabel': 'robots.txt',
      'presetAllowAll': 'Permitir todo',
      'presetBlockAi': 'Bloquear rastreadores IA',
      'presetBlockAll': 'Bloquear todo',
      'presetStandard': 'Sitio estándar',
      'sitemapLabel': 'URL del sitemap (opcional)',
    },
  },
  de: {
    ui: {
      'addRule': 'Regel hinzufügen',
      'agentLabel': 'User-agent',
      'allowLabel': 'Erlaubte Pfade',
      'delayLabel': 'Crawl-Verzögerung in Sekunden (optional)',
      'disallowLabel': 'Gesperrte Pfade',
      'note': '🤖 Lege die Datei in die Domain-Wurzel. Google ignoriert Crawl-delay; Bing und Yandex beachten es. KI-Crawler-Blockaden (GPTBot, ClaudeBot, CCBot) werden befolgt.',
      'outputLabel': 'robots.txt',
      'presetAllowAll': 'Alles erlauben',
      'presetBlockAi': 'KI-Crawler blockieren',
      'presetBlockAll': 'Alles blockieren',
      'presetStandard': 'Standard-Website',
      'sitemapLabel': 'Sitemap-URL (optional)',
    },
  },
}
