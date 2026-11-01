/**
 * url-extractor 本地化 bundle —— zh / es / de
 * 覆盖:ui + faqs + useCases(2026-09 业务级增强:静态资源过滤/唯一主域名聚合)
 */
import type { ToolL10n } from '../tool-l10n'

export const urlExtractorL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'Visita https://example.com o http://test.org/page?q=1 hoy!',
      'noUrlsFound': 'No se encontraron URLs',
      'clear': 'Limpiar',
      'placeholder': 'Pega texto con URLs…',
      'resultPlaceholder': 'El resultado aparecerá aquí…',
      'inputLabel': 'Texto con URLs',
      'outputLabel': 'URLs extraídas',
      'viewLabel': 'Modo de vista',
      'viewUrls': 'URLs completas',
      'viewDomains': 'Dominios únicos',
      'filterAssets': 'Filtrar recursos estáticos (imágenes/CSS/JS/fuentes)',
      'foundN': '{n} únicas',
      'domainsN': '{n} dominios únicos',
      'assetsN': '{n} recursos ocultos',
      'note': '🔗 Extrae todas las URLs de cualquier texto. Deduplica, limpia la puntuación final, puede ocultar recursos estáticos (imágenes/CSS/JS/fuentes) y agrupar los resultados por dominio único.',
    },
    useCases: [
      'extraer todos los enlaces de un artículo o correo',
      'crear un inventario de enlaces a partir de contenido',
      'limpiar URLs copiadas y pegadas de forma desordenada',
      'auditar los enlaces salientes de un texto',
    ],
    faqs: [
      { q: '¿Por qué no captura «example.com» sin http?', a: 'Esta herramienta solo captura URLs que empiezan por http:// o https://. Los dominios sin protocolo podrían confundirse con nombres de archivo u otro texto. Si necesitas encontrar dominios sin protocolo, hace falta un patrón más agresivo.' },
      { q: '¿Captura URLs con eñes o acentos?', a: 'Si la URL está codificada en porcentaje (p. ej. %C3%B1), se extrae completa. Las eñes y acentos sin codificar no cumplen la sintaxis de URL, pero también se capturan; la coincidencia solo se corta en espacios y separadores similares. Codifica el enlace antes de compartirlo para máxima compatibilidad.' },
      { q: '¿Cuánto texto procesa de una vez?', a: 'La extracción por patrón va fluida hasta ~100.000 caracteres; los textos de varios MB conviene pegarlos por partes. El resultado sale deduplicado y en orden de aparición.' },
      { q: '¿Comprueba si los enlaces funcionan?', a: 'No: solo extrae, sin acceso a la red. Para validarlos, pega la lista en un comprobador de enlaces que haga peticiones; aquí obtienes la lista limpia y sin duplicados.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'Besuche https://example.com oder http://test.org/page?q=1 heute!',
      'noUrlsFound': 'Keine URLs gefunden',
      'clear': 'Leeren',
      'placeholder': 'Text mit URLs einfügen…',
      'resultPlaceholder': 'Ergebnis erscheint hier…',
      'inputLabel': 'Text mit URLs',
      'outputLabel': 'Extrahierte URLs',
      'viewLabel': 'Ansicht',
      'viewUrls': 'Vollständige URLs',
      'viewDomains': 'Eindeutige Domains',
      'filterAssets': 'Statische Ressourcen ausblenden (Bilder/CSS/JS/Schriften)',
      'foundN': '{n} eindeutige',
      'domainsN': '{n} eindeutige Domains',
      'assetsN': '{n} Ressourcen ausgeblendet',
      'note': '🔗 Extrahiert alle URLs aus beliebigem Text. Dedupliziert, entfernt anhängende Satzzeichen, kann statische Ressourcen (Bilder/CSS/JS/Schriften) ausblenden und Treffer nach eindeutiger Hauptdomain gruppieren.',
    },
    useCases: [
      'alle Links aus einem Artikel oder einer E-Mail ziehen',
      'aus Inhalten ein Link-Inventar erstellen',
      'chaotisch kopierte URLs aufräumen',
      'ausgehende Links in einem Text prüfen',
    ],
    faqs: [
      { q: 'Warum wird „example.com“ ohne http nicht erkannt?', a: 'Dieses Werkzeug erfasst nur URLs, die mit http:// oder https:// beginnen. Domains ohne Protokoll könnten mit Dateinamen oder anderem Text verwechselt werden. Wenn du reine Domains finden möchtest, ist ein aggressiveres Muster nötig.' },
      { q: 'Werden URLs mit Umlauten erfasst?', a: 'Ist die URL prozentkodiert (z. B. %C3%A4), wird sie vollständig erkannt. Unkodierte Umlaute verletzen zwar die URL-Syntax, werden aber trotzdem vollständig erfasst — nur Leerzeichen und ähnliche Trennzeichen beenden den Treffer. Kodiere den Link vor dem Teilen.' },
      { q: 'Wie viel Text schafft das Tool auf einmal?', a: 'Bis etwa 100.000 Zeichen läuft die Mustersuche flüssig; mehrere MB lieber abschnittsweise einfügen. Die Treffer erscheinen dedupliziert in Reihenfolge des Auftretens.' },
      { q: 'Prüft es, ob die Links erreichbar sind?', a: 'Nein — es extrahiert nur und greift nicht aufs Netz. Für die Validierung die Liste in einen Link-Checker stecken, der Anfragen stellt; hier bekommst du die saubere, duplikatfreie Liste.' },
    ],
  },
}
