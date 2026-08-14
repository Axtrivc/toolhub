/**
 * user-agent-parser 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const userAgentParserL10n: ToolL10n = {
  zh: {
    ui: {
      'botFieldsUnreliable': '爬虫 UA 里的浏览器/操作系统字段常模仿真实浏览器,可能不可靠。',
      'botLooksLike': '这看起来是自动爬虫(',
      'botNotHuman': '),而非人类访客。',
      'botPrefix': '爬虫:',
      'browserLabel': '浏览器',
      'copyJson': '复制 JSON',
      'deviceTypeLabel': '设备类型',
      'emptyHint': '在上方粘贴任意 User-Agent 字符串,或点击',
      'emptyHintSuffix': '解析你当前的浏览器。',
      'engineLabel': '引擎',
      'inputLabel': 'User-Agent 字符串',
      'loadMyUa': '加载我的 UA',
      'notABot': '非已知爬虫',
      'noteMain': '🔒 解析 100% 本地——字符串不离开你的浏览器。UA 嗅探本质上是启发式的:客户端可以伪造任何字段,且 Windows 10 与 11 故意无法区分(两者都报告',
      'noteSuffix': ')。',
      'osLabel': '操作系统',
      'parsedResultLabel': '解析结果 (JSON)',
      'versionUnknown': '版本未知',
    },
    useCases: [
      '我的 User-Agent 字符串是什么',
      '在线 User-Agent 解析器',
      '从 User-Agent 检测浏览器',
      'User-Agent 查询工具',
    ],
    faqs: [
      {
        q: '我用的是 Edge 或 Brave,为什么 UA 里写着 Chrome?',
        a: '基于 Chromium 的浏览器(Edge、Brave、Opera、Vivaldi)为了兼容性都会在 UA 里带上 Chrome 字样,再加上各自的标识。解析器会报告能识别到的最具体的浏览器,所以 Edge 和 Brave 是靠各自专属标识识别的,而不是共用的 Chrome。',
      },
      {
        q: '靠 UA 字符串检测浏览器和操作系统可靠吗?',
        a: '有用,但并非万无一失。浏览器正在逐步精简 UA 字符串(User-Agent Client Hints),隐私工具会冻结或伪造它,新的或小众产品可能还没进检测库。请把结果当作提示,而非保证。',
      },
      {
        q: 'User-Agent 字符串到底用来做什么?',
        a: '服务器和分析系统用它来选择内容(如移动端布局)、统计浏览器占比,或拦截已知爬虫。如今越来越推荐用 JavaScript 做特性检测,因为 UA 字符串不可靠且容易伪造。',
      },
    ],
  },
  es: {
    ui: {
      'botFieldsUnreliable': 'Los campos navegador/SO en UAs de bots suelen imitar navegadores reales y pueden ser poco fiables.',
      'botLooksLike': 'Esto parece un rastreador automático (',
      'botNotHuman': '), no un visitante humano.',
      'botPrefix': 'Bot:',
      'browserLabel': 'Navegador',
      'copyJson': 'Copiar JSON',
      'deviceTypeLabel': 'Tipo de dispositivo',
      'emptyHint': 'Pega arriba cualquier cadena User-Agent, o pulsa',
      'emptyHintSuffix': 'para analizar tu navegador actual.',
      'engineLabel': 'Motor',
      'inputLabel': 'Cadena User-Agent',
      'loadMyUa': 'Cargar mi UA',
      'notABot': 'no es un bot conocido',
      'noteMain': '🔒 El análisis es 100% local — la cadena nunca sale de tu navegador. El UA sniffing es heurístico por naturaleza: los clientes pueden mentir en cualquier campo, y Windows 10 frente a 11 es intencionadamente indistinguible (ambos reportan',
      'noteSuffix': ').',
      'osLabel': 'Sistema operativo',
      'parsedResultLabel': 'Resultado analizado (JSON)',
      'versionUnknown': 'versión desconocida',
    },
    useCases: [
      'cuál es mi cadena User-Agent',
      'analizador de User-Agent online',
      'detectar el navegador desde el User-Agent',
      'herramienta de consulta de User-Agent',
    ],
    faqs: [
      {
        q: 'Uso Edge o Brave, ¿por qué mi UA dice Chrome?',
        a: 'Los navegadores basados en Chromium (Edge, Brave, Opera, Vivaldi) incluyen la palabra Chrome en su UA por compatibilidad, además de su propio token. El analizador informa el navegador reconocido más específico, así que Edge y Brave se detectan por sus tokens dedicados, no por el compartido Chrome.',
      },
      {
        q: '¿Es fiable detectar navegador y SO desde la cadena UA?',
        a: 'Útil, pero no infalible. Los navegadores están reduciendo la UA granular (User-Agent Client Hints), las herramientas de privacidad la congelan o falsifican, y los productos nuevos o minoritarios pueden faltar en la base de detección. Tómalo como una pista, no como una garantía.',
      },
      {
        q: '¿Para qué sirve realmente la cadena User-Agent?',
        a: 'Servidores y analítica la usan para elegir contenido (p. ej. diseño móvil), registrar la cuota de navegadores o bloquear bots conocidos. Hoy se prefiere la detección de características en JavaScript frente al UA sniffing, porque la UA no es fiable y se falsifica fácilmente.',
      },
    ],
  },
  de: {
    ui: {
      'botFieldsUnreliable': 'Browser-/OS-Felder in Bot-UAs ahmen oft echte Browser nach und können unzuverlässig sein.',
      'botLooksLike': 'Das sieht wie ein automatischer Crawler aus (',
      'botNotHuman': '), kein menschlicher Besucher.',
      'botPrefix': 'Bot:',
      'browserLabel': 'Browser',
      'copyJson': 'JSON kopieren',
      'deviceTypeLabel': 'Gerätetyp',
      'emptyHint': 'Füge oben eine beliebige User-Agent-Zeichenkette ein oder klicke',
      'emptyHintSuffix': 'um deinen aktuellen Browser zu parsen.',
      'engineLabel': 'Engine',
      'inputLabel': 'User-Agent-Zeichenkette',
      'loadMyUa': 'Meine UA laden',
      'notABot': 'kein bekannter Bot',
      'noteMain': '🔒 Das Parsing ist 100% lokal — die Zeichenkette verlässt nie deinen Browser. UA-Sniffing ist naturgemäß heuristisch: Clients können bei jedem Feld lügen, und Windows 10 vs. 11 ist absichtlich nicht unterscheidbar (beide melden',
      'noteSuffix': ').',
      'osLabel': 'Betriebssystem',
      'parsedResultLabel': 'Geparstes Ergebnis (JSON)',
      'versionUnknown': 'Version unbekannt',
    },
    useCases: [
      'wie lautet meine User-Agent-Zeichenkette',
      'Online-Parser für User-Agent',
      'Browser aus dem User-Agent erkennen',
      'Nachschlagewerkzeug für User-Agent',
    ],
    faqs: [
      {
        q: 'Ich nutze Edge oder Brave — warum steht in meiner UA Chrome?',
        a: 'Chromium-basierte Browser (Edge, Brave, Opera, Vivaldi) nehmen aus Kompatibilitätsgründen das Wort Chrome in die UA auf, zusätzlich zu ihrem eigenen Token. Der Parser meldet den spezifischsten erkannten Browser, sodass Edge und Brave über ihre eigenen Tokens erkannt werden, nicht über das gemeinsame Chrome.',
      },
      {
        q: 'Ist die Browser- und OS-Erkennung aus der UA zuverlässig?',
        a: 'Nützlich, aber nicht unfehlbar. Browser reduzieren die detaillierte UA (User-Agent Client Hints), Datenschutz-Tools frieren sie ein oder fälschen sie, und neue oder nischige Produkte fehlen evtl. noch in der Datenbank. Betrachte das Ergebnis als Hinweis, nicht als Garantie.',
      },
      {
        q: 'Wofür wird die User-Agent-Zeichenkette überhaupt verwendet?',
        a: 'Server und Analytics nutzen sie, um Inhalte auszuwählen (z. B. Mobile-Layout), Browser-Anteile zu erfassen oder bekannte Bots zu blockieren. Heute wird Feature-Erkennung in JavaScript gegenüber UA-Sniffing bevorzugt, da die UA unzuverlässig und leicht fälschbar ist.',
      },
    ],
  },
}
