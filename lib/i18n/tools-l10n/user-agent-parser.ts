/**
 * user-agent-parser 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const userAgentParserL10n: ToolL10n = {

  es: {
    ui: {
      'botFieldsUnreliable': 'Los campos navegador/SO en UAs de bots suelen imitar navegadores reales y pueden ser poco fiables.',
      'botLooksLike': 'Esto parece un rastreador automático (',
      'botNotHuman': '), no un visitante humano.',
      'botPrefix': 'Bot:',
      'browserLabel': 'Navegador',
      'copyJson': 'Copiar JSON',
      'deviceDesktop': 'Escritorio',
      'deviceMobile': 'Móvil',
      'deviceTablet': 'Tablet',
      'deviceTypeLabel': 'Tipo de dispositivo',
      'emptyHint': 'Pega arriba cualquier cadena User-Agent, o pulsa',
      'emptyHintSuffix': ' para analizar tu navegador actual.',
      'engineLabel': 'Motor',
      'inputLabel': 'Cadena User-Agent',
      'loadMyUa': 'Cargar mi UA',
      'notABot': 'no es un bot conocido',
      'noteMain': '🔒 El análisis es 100% local — la cadena nunca sale de tu navegador. El rastreo del UA es heurístico por naturaleza: los clientes pueden mentir en cualquier campo, y Windows 10 y 11 son deliberadamente indistinguibles (ambos reportan',
      'noteSuffix': ').',
      'osLabel': 'Sistema operativo',
      'parsedResultLabel': 'Resultado analizado (JSON)',
      'unknown': 'Desconocido',
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
        a: 'Todos los navegadores basados en Chromium (Edge, Brave, Opera, Vivaldi) incluyen la palabra Chrome en su UA por compatibilidad. Edge y Opera añaden encima un token propio («Edg», «OPR»), y el analizador informa del navegador reconocido más específico, así que se detectan por esos tokens. Brave y Vivaldi usan deliberadamente un UA idéntico al de Chrome, sin token propio, así que aquí aparecen como Chrome.',
      },
      {
        q: '¿Es fiable detectar navegador y SO desde la cadena UA?',
        a: 'Útil, pero no infalible. Los navegadores están reduciendo el detalle de la cadena UA (User-Agent Client Hints), las herramientas de privacidad la congelan o falsifican, y los productos nuevos o minoritarios pueden faltar en la base de detección. Tómalo como una pista, no como una garantía.',
      },
      {
        q: '¿Para qué sirve realmente la cadena User-Agent?',
        a: 'Servidores y analítica la usan para elegir contenido (p. ej. diseño móvil), registrar la cuota de navegadores o bloquear bots conocidos. Hoy se prefiere la detección de características en JavaScript frente al rastreo del UA, porque la UA no es fiable y se falsifica fácilmente.',
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
      'deviceDesktop': 'Desktop',
      'deviceMobile': 'Mobil',
      'deviceTablet': 'Tablet',
      'deviceTypeLabel': 'Gerätetyp',
      'emptyHint': 'Füge oben eine beliebige User-Agent-Zeichenkette ein oder klicke auf',
      'emptyHintSuffix': ', um deinen aktuellen Browser zu parsen.',
      'engineLabel': 'Engine',
      'inputLabel': 'User-Agent-Zeichenkette',
      'loadMyUa': 'Meine UA laden',
      'notABot': 'kein bekannter Bot',
      'noteMain': '🔒 Das Parsing ist 100% lokal — die Zeichenkette verlässt nie deinen Browser. UA-Sniffing ist naturgemäß heuristisch: Clients können bei jedem Feld lügen, und Windows 10 vs. 11 ist absichtlich nicht unterscheidbar (beide melden',
      'noteSuffix': ').',
      'osLabel': 'Betriebssystem',
      'parsedResultLabel': 'Geparstes Ergebnis (JSON)',
      'unknown': 'Unbekannt',
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
        a: 'Chromium-basierte Browser (Edge, Brave, Opera, Vivaldi) nehmen aus Kompatibilitätsgründen alle das Wort Chrome in die UA auf. Edge und Opera fügen oben ein eigenes Token hinzu („Edg“, „OPR“), und der Parser meldet den spezifischsten erkannten Browser, sodass sie über diese Tokens erkannt werden. Brave und Vivaldi verwenden bewusst eine Chrome-identische UA ohne eigenes Token und erscheinen hier daher als Chrome.',
      },
      {
        q: 'Ist die Browser- und OS-Erkennung aus der UA zuverlässig?',
        a: 'Nützlich, aber nicht unfehlbar. Browser reduzieren den Detailgrad der UA (User-Agent Client Hints), Datenschutz-Tools frieren sie ein oder fälschen sie, und neue oder Nischenprodukte fehlen möglicherweise noch in der Datenbank. Betrachte das Ergebnis als Hinweis, nicht als Garantie.',
      },
      {
        q: 'Wofür wird die User-Agent-Zeichenkette überhaupt verwendet?',
        a: 'Server und Analytics nutzen sie, um Inhalte auszuwählen (z. B. Mobile-Layout), Browser-Anteile zu erfassen oder bekannte Bots zu blockieren. Heute wird Feature Detection in JavaScript gegenüber UA-Sniffing bevorzugt, da die UA unzuverlässig und leicht fälschbar ist.',
      },
    ],
  },
}
