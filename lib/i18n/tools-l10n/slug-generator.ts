/**
 * slug-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + 交互 UI(自定义客户端经 tui() 读取)
 */
import type { ToolL10n } from '../tool-l10n'

export const slugGeneratorL10n: ToolL10n = {

  es: {
    ui: {
      'asciiOnly': 'Solo ASCII',
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'enterTitle': 'Introduce tu título o texto',
      'inputPlaceholder': 'p. ej. 10 formas probadas de aumentar el tráfico web',
      'lowercase': 'Minúsculas',
      'recent': 'Recientes',
      'result': 'Resultado',
      'save': 'Guardar',
      'sepHyphen': 'Guion ( - )',
      'sepUnderscore': 'Guion bajo ( _ )',
      'separator': 'Separador',
      'slugPlaceholder': 'tu-slug-aparecerá-aquí',
      'stripSymbols': 'Quitar caracteres especiales',
      'try': 'Prueba:',
    },
    useCases: [
      'generar slugs de URL aptos para SEO',
      'crear rutas de URL limpias para artículos de blog',
      'normalizar títulos para el enrutamiento frontend',
      'preparar URLs para un CMS o un generador de sitios estáticos',
    ],
    faqs: [
      { q: '¿Debo cambiar un slug después de publicar?', a: 'Por lo general, no. Cambiar un slug rompe la URL antigua y todos los enlaces entrantes que apuntan a ella. Si debes cambiarlo, configura una redirección 301 de la URL antigua a la nueva para que los visitantes y los motores de búsqueda sean reenviados correctamente y no se pierda la autoridad de posicionamiento.' },
      { q: '¿Guiones o guiones bajos en las URLs?', a: 'Usa guiones. Google ha declarado explícitamente que trata los guiones como separadores de palabras, mientras que los guiones bajos se consideran parte de la palabra. Así, `seo-friendly-slugs` se lee como tres palabras, pero `seo_friendly_slugs` se lee como un único token. Los guiones son la mejor práctica universal.' },
      { q: '¿Cuánto debe medir un slug de URL?', a: 'De tres a cinco palabras es el punto ideal — unos 30–50 caracteres. Los slugs más cortos son más fáciles de leer, de compartir y dan más peso a cada palabra clave. Si tu título es largo, recorta el slug a lo esencial en lugar de pegar todo el titular.' },
      { q: '¿Es gratuita esta herramienta?', a: 'Sí, completamente. No hay registro, sin límite de uso ni versión premium. Tu texto se procesa localmente en tu navegador y nunca se sube a ningún sitio.' },
    ],
  },
  de: {
    ui: {
      'asciiOnly': 'Nur ASCII',
      'clear': 'Leeren',
      'copy': 'Kopieren',
      'enterTitle': 'Titel oder Text eingeben',
      'inputPlaceholder': 'z. B. 10 bewährte Wege, den Website-Traffic zu steigern',
      'lowercase': 'Kleinbuchstaben',
      'recent': 'Letzte Slugs',
      'result': 'Ergebnis',
      'save': 'Speichern',
      'sepHyphen': 'Bindestrich ( - )',
      'sepUnderscore': 'Unterstrich ( _ )',
      'separator': 'Trennzeichen',
      'slugPlaceholder': 'dein-slug-erscheint-hier',
      'stripSymbols': 'Sonderzeichen entfernen',
      'try': 'Probier:',
    },
    useCases: [
      'SEO-freundliche URL-Slugs erzeugen',
      'saubere URL-Pfade für Blogartikel erstellen',
      'Titel für das Frontend-Routing normalisieren',
      'URLs für ein CMS oder einen Static-Site-Generator vorbereiten',
    ],
    faqs: [
      { q: 'Sollte ich einen Slug nach der Veröffentlichung ändern?', a: 'Grundsätzlich nein. Ein geänderter Slug bricht die alte URL und alle eingehenden Links dorthin. Falls du ihn ändern musst, richtest du eine 301-Weiterleitung von der alten auf die neue URL ein, damit Besucher und Suchmaschinen korrekt weitergeleitet werden und kein Ranking-Wert verloren geht.' },
      { q: 'Bindestriche oder Unterstriche in URLs?', a: 'Verwende Bindestriche. Google hat ausdrücklich bestätigt, dass Bindestriche als Worttrenner gelten, während Unterstriche als Teil des Worts betrachtet werden. Also wird `seo-friendly-slugs` als drei Wörter gelesen, `seo_friendly_slugs` dagegen als ein einziger Token. Bindestriche sind die universelle Best Practice.' },
      { q: 'Wie lang sollte ein URL-Slug sein?', a: 'Drei bis fünf Wörter sind ideal — etwa 30–50 Zeichen. Kürzere Slugs lassen sich leichter lesen und teilen und geben jedem Keyword mehr Gewicht. Ist dein Titel lang, kürze den Slug auf das Wesentliche, statt die ganze Überschrift zu übernehmen.' },
      { q: 'Ist dieses Werkzeug kostenlos?', a: 'Ja, komplett. Keine Anmeldung, kein Nutzungslimit, keine Premium-Stufe. Dein Text wird lokal in deinem Browser verarbeitet und nie irgendwo hochgeladen.' },
    ],
  },
}
