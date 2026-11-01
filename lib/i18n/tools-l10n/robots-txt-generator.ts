/**
 * robots-txt-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const RobotsTxtGeneratorL10n: ToolL10n = {

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
      'note': '🤖 Coloca el archivo en la raíz del dominio (example.com/robots.txt). Google ignora Crawl-delay; Bing y Yandex lo respetan. Los presets de IA bloquean los rastreadores de entrenamiento de 2026 (GPTBot, ClaudeBot, PerplexityBot, Bytespider, Google-Extended, Applebot-Extended, Cohere-ai, Amazonbot) — sus operadores hoy cumplen robots.txt. Google-Extended veta el entrenamiento de Gemini sin afectar a Google Search.',
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
    useCases: ['gängige robots.txt-Regeln erzeugen', 'KI-Crawler wie GPTBot blockieren', 'das Crawling der ganzen Seite erlauben oder sperren', 'die Sitemap-URL für Crawler deklarieren'],
    faqs: [
      { q: 'Wo gehört die robots.txt hin?', a: 'In die Root deiner Domain, als Klartext unter example.com/robots.txt — Crawler schauen nur dort. Eine fehlende Datei bedeutet „alles erlaubt“; Syntaxfehler lassen gut gemeinte Regeln still scheitern, deshalb: ein Regelsatz pro User-agent-Block.' },
      { q: 'Funktioniert das KI-Block-Preset wirklich?', a: 'Es erzeugt explizite Disallow-Regeln für die Trainings-Crawler von 2026: GPTBot, ClaudeBot, PerplexityBot, Bytespider, Google-Extended, Applebot-Extended, Cohere-ai und Amazonbot. Diese Betreiber respektieren robots.txt derzeit — solange sie das tun, wirkt es; verstehe es als geachtete Bitte, nicht als technische Mauer.' },
      { q: 'Wie funktioniert „Suche erlauben, KI blockieren“?', a: 'Der Schlüssel ist Google-Extended: Dieser User-agent steuert nur den Zugriff von Gemini und anderem KI-Training, nicht die Indexierung für die Google-Suche. Kombiniert mit „normales Crawling erlauben + Google-Extended und übrige KI-Bots sperren“ bleiben deine Seiten in den Suchergebnissen, landen aber nicht in Trainingskorpora.' },
      { q: 'Warum wird mein Crawl-delay ignoriert?', a: 'Google hat Crawl-delay nie unterstützt und überspringt die Zeile; Bing und Yandex beachten sie. Der Generator hält das Feld für diese Engines bereit — bei Googlebot-Last nutze stattdessen die Crawl-Rate-Einstellungen der Search Console.' },
      { q: 'Wenn Allow und Disallow beide passen, wer gewinnt?', a: 'Bei Google gewinnt die spezifischere (längere) passende Route. Die Presets hier erzeugen konventionelle, eindeutige Kombinationen — „alles blockieren“ ist ein nacktes Disallow: / ohne konkurrierendes Allow —, sodass du keine Vorrangregeln herleiten musst.' },
    ],
    ui: {
      'addRule': 'Regel hinzufügen',
      'agentLabel': 'User-agent',
      'allowLabel': 'Erlaubte Pfade',
      'delayLabel': 'Crawl-Verzögerung in Sekunden (optional)',
      'disallowLabel': 'Gesperrte Pfade',
      'note': '🤖 Lege die Datei in die Domain-Wurzel (example.com/robots.txt). Google ignoriert Crawl-delay; Bing und Yandex beachten es. Die KI-Presets blockieren die Trainings-Crawler von 2026 (GPTBot, ClaudeBot, PerplexityBot, Bytespider, Google-Extended, Applebot-Extended, Cohere-ai, Amazonbot) — die Betreiber folgen derzeit robots.txt. Google-Extended sperrt Gemini-Training, ohne die Google-Suche zu berühren.',
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
