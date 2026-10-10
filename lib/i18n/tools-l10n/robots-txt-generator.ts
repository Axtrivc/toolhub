/**
 * robots-txt-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const RobotsTxtGeneratorL10n: ToolL10n = {
  zh: {
    useCases: ['生成标准 robots.txt 规则', '屏蔽 GPTBot 等 AI 训练爬虫', '整站封禁或放行搜索引擎抓取', '为爬虫声明 sitemap 地址'],
    faqs: [
      { q: 'robots.txt 放在哪里?', a: '放在域名根目录,以纯文本形式从 example.com/robots.txt 提供——爬虫只认这个位置。文件缺失等同于全部允许;语法错误会让善意规则悄悄失效,所以每个 user-agent 块只保留一组规则。' },
      { q: '屏蔽 AI 的预设真的有效吗?', a: '它会为 2026 年主流训练爬虫——GPTBot、ClaudeBot、PerplexityBot、Bytespider、Google-Extended、Applebot-Extended、Cohere-ai、Amazonbot——生成显式 disallow 规则。这些运营方目前都遵守 robots.txt,因此只要他们继续遵守就有效;请把它当作受尊重的请求,而非技术上的墙。' },
      { q: '「允许搜索、屏蔽 AI」是怎么做到的?', a: '关键在 Google-Extended:这个 user-agent 只控制 Gemini 等 AI 训练对站点的访问,不影响 Google 搜索的收录。所以「允许所有正常抓取 + 封禁 Google-Extended 及其余 AI 爬虫」的组合,可以让页面继续出现在搜索结果里,却不进入 AI 训练语料。' },
      { q: '为什么 crawl-delay 没生效?', a: 'Google 从不支持 Crawl-delay,会直接跳过这一行;Bing 和 Yandex 则遵守。生成器保留该字段是为了这些引擎——如果是 Googlebot 抓取压力问题,请改用 Search Console 的抓取频率设置。' },
      { q: 'Allow 和 Disallow 同时命中时谁优先?', a: '在 Google 的实现里,匹配路径更具体(更长)的规则获胜。本工具的预设输出的都是常规、无歧义的组合——比如"全部封禁"就是一条裸的 Disallow: / 而不带竞争性 Allow——你无需自行推演优先级。' },
    ],
    ui: {
      'addRule': '添加规则',
      'agentLabel': 'User-agent',
      'allowLabel': '允许路径',
      'delayLabel': '抓取延迟秒数(可选)',
      'disallowLabel': '禁止路径',
      'note': '🤖 将文件放在域名根目录(example.com/robots.txt)。Google 忽略 Crawl-delay;Bing 和 Yandex 遵守。AI 预设封禁 2026 年主流训练爬虫(GPTBot、ClaudeBot、PerplexityBot、Bytespider、Google-Extended、Applebot-Extended、Cohere-ai、Amazonbot)——各运营方目前遵守 robots.txt。Google-Extended 只挡 Gemini 训练,不影响 Google 搜索。',
      'outputLabel': 'robots.txt',
      'presetAllowAll': '允许全部',
      'presetBlockAi': '屏蔽 AI 爬虫',
      'presetBlockAll': '禁止全部',
      'presetSearchNotAi': '允许搜索,屏蔽 AI 训练',
      'presetStandard': '标准站点',
      'removeRule': '删除规则',
      'sitemapLabel': 'Sitemap 地址(可选)',
    },
  },
  es: {
    useCases: ['generar reglas robots.txt estándar', 'bloquear rastreadores de IA como GPTBot', 'permitir o vetar el rastreo de todo el sitio', 'declarar la URL del sitemap para los rastreadores'],
    faqs: [
      { q: '¿Dónde coloco robots.txt?', a: 'En la raíz de tu dominio, servido como texto plano en example.com/robots.txt: los rastreadores solo buscan ahí. Un archivo ausente significa que todo está permitido; los errores de sintaxis pueden hacer fracasar reglas bienintencionadas, así que mantén un juego de reglas por bloque user-agent.' },
      { q: '¿El preset anti-IA funciona de verdad?', a: 'Genera reglas disallow explícitas para los rastreadores de entrenamiento de 2026: GPTBot, ClaudeBot, PerplexityBot, Bytespider, Google-Extended, Applebot-Extended, Cohere-ai y Amazonbot. Esos operadores hoy respetan robots.txt, así que funciona mientras sigan haciéndolo; trátalo como una petición respetada, no como un muro técnico.' },
      { q: '¿Cómo funciona «permitir búsqueda, bloquear IA»?', a: 'La clave es Google-Extended: ese user-agent solo gobierna el acceso de Gemini y demás entrenamiento de IA, sin afectar a la indexación en Google Search. Por eso «permitir todo el rastreo normal + bloquear Google-Extended y el resto de bots de IA» mantiene tus páginas en los resultados sin entrar en los corpus de entrenamiento.' },
      { q: '¿Por qué se ignora mi crawl-delay?', a: 'Google nunca ha admitido Crawl-delay y se salta la línea; Bing y Yandex sí la respetan. El generador incluye el campo para esos motores; si el problema es la carga de Googlebot, usa el ajuste de frecuencia de rastreo de Search Console.' },
      { q: 'Si Allow y Disallow coinciden, ¿cuál gana?', a: 'En la implementación de Google, gana la ruta coincidente más específica (la más larga). Los presets de esta herramienta emiten combinaciones convencionales y sin ambigüedad —bloquear todo es un Disallow: / sin Allow que compita—, así que no tienes que razonar la precedencia.' },
    ],
    ui: {
      'addRule': 'Añadir regla',
      'agentLabel': 'User-agent',
      'allowLabel': 'Rutas permitidas',
      'delayLabel': 'Retardo de rastreo en segundos (opcional)',
      'disallowLabel': 'Rutas bloqueadas',
      'note': '🤖 Coloca el archivo en la raíz del dominio. Google ignora Crawl-delay; Bing y Yandex lo respetan. Los presets de IA bloquean los rastreadores de entrenamiento de 2026 (GPTBot, ClaudeBot, PerplexityBot, Bytespider, Google-Extended, Applebot-Extended, Cohere-ai, Amazonbot) — sus operadores hoy cumplen robots.txt. Google-Extended veta el entrenamiento de Gemini sin afectar a Google Search.',
      'outputLabel': 'robots.txt',
      'presetAllowAll': 'Permitir todo',
      'presetBlockAi': 'Bloquear rastreadores IA',
      'presetBlockAll': 'Bloquear todo',
      'presetSearchNotAi': 'Permitir búsqueda, bloquear IA',
      'presetStandard': 'Sitio estándar',
      'removeRule': 'Eliminar regla',
      'sitemapLabel': 'URL del sitemap (opcional)',
    },
  },
  de: {
    useCases: ['reguläre robots.txt-Regeln erzeugen', 'KI-Crawler wie GPTBot blockieren', 'das Crawling der ganzen Seite erlauben oder sperren', 'die Sitemap-URL für Crawler deklarieren'],
    faqs: [
      { q: 'Wo gehört die robots.txt hin?', a: 'In die Root deiner Domain, als Klartext unter example.com/robots.txt — Crawler schauen nur dort. Eine fehlende Datei bedeutet „alles erlaubt”; Syntaxfehler lassen gut gemeinte Regeln still scheitern, deshalb: ein Regelsatz pro User-agent-Block.' },
      { q: 'Funktioniert das KI-Block-Preset wirklich?', a: 'Es erzeugt explizite Disallow-Regeln für die Trainings-Crawler von 2026: GPTBot, ClaudeBot, PerplexityBot, Bytespider, Google-Extended, Applebot-Extended, Cohere-ai und Amazonbot. Diese Betreiber respektieren robots.txt derzeit, solange sie es tun, wirkt es; verstehe es als geachtete Bitte, nicht als technische Mauer.' },
      { q: 'Wie funktioniert „Suche erlauben, KI blockieren”?', a: 'Der Schlüssel ist Google-Extended: Dieser User-agent steuert nur den Zugriff von Gemini und anderem KI-Training, nicht die Indexierung für die Google-Suche. Kombiniert mit „normales Crawling erlauben + Google-Extended und übrige KI-Bots sperren” bleiben deine Seiten in den Suchergebnissen, landen aber nicht in Trainingskorpora.' },
      { q: 'Warum wird mein Crawl-delay ignoriert?', a: 'Google hat Crawl-delay nie unterstützt und überspringt die Zeile; Bing und Yandex beachten sie. Der Generator hält das Feld für diese Engines bereit — bei Googlebot-Last nutze stattdessen die Crawl-Rate-Einstellungen der Search Console.' },
      { q: 'Wenn Allow und Disallow beide passen, wer gewinnt?', a: 'Bei Google gewinnt die spezifischere (längere) passende Route. Die Presets hier erzeugen konventionelle, eindeutige Kombinationen — „alles blockieren” ist ein nacktes Disallow: / ohne konkurrierendes Allow —, sodass du keine Vorrangregeln herleiten musst.' },
    ],
    ui: {
      'addRule': 'Regel hinzufügen',
      'agentLabel': 'User-agent',
      'allowLabel': 'Erlaubte Pfade',
      'delayLabel': 'Crawl-Verzögerung in Sekunden (optional)',
      'disallowLabel': 'Gesperrte Pfade',
      'note': '🤖 Lege die Datei in die Domain-Wurzel. Google ignoriert Crawl-delay; Bing und Yandex beachten es. Die KI-Presets blockieren die Trainings-Crawler von 2026 (GPTBot, ClaudeBot, PerplexityBot, Bytespider, Google-Extended, Applebot-Extended, Cohere-ai, Amazonbot) — die Betreiber folgen derzeit robots.txt. Google-Extended sperrt Gemini-Training, ohne die Google-Suche zu berühren.',
      'outputLabel': 'robots.txt',
      'presetAllowAll': 'Alles erlauben',
      'presetBlockAi': 'KI-Crawler blockieren',
      'presetBlockAll': 'Alles blockieren',
      'presetSearchNotAi': 'Suche erlauben, KI blockieren',
      'presetStandard': 'Standard-Website',
      'removeRule': 'Regel entfernen',
      'sitemapLabel': 'Sitemap-URL (optional)',
    },
  },
}
