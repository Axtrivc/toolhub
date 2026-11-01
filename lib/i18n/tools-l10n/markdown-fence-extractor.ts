/**
 * markdown-fence-extractor 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(文本提取工具)。
 */
import type { ToolL10n } from '../tool-l10n'

export const MarkdownFenceExtractorL10n: ToolL10n = {

  es: {
    useCases: [
      'Extraer de un clic todos los bloques de código de una respuesta larga de ChatGPT / Claude, sin seleccionar a mano',
      'Procesar un README o documentación: filtra por chips de lenguaje y quédate solo con los comandos shell o los ejemplos Python',
      'Recolectar en lote los fragmentos de comandos de un tutorial y montar un script de instalación ejecutable',
      'Copiar bloque a bloque el código multi-archivo generado por IA al IDE para verificar que funciona',
    ],
    faqs: [
      { q: '¿Qué formatos de bloque admite?', a: 'Las vallas estándar de tres comillas invertidas (```lang ... ```), la sintaxis de GitHub Flavored Markdown. Los bloques antiguos indentados con 4 espacios se ignoran a propósito: se confunden con sangrías de lista y el coste de un falso positivo supera al de una omisión.' },
      { q: '¿Cómo funciona el filtro por lenguaje?', a: 'Por subcadena sobre la etiqueta de la valla: «py» coincide con python y py3; «ts» con typescript. Las vallas sin etiqueta se marcan como «text» y también aparecen como chip filtrable.' },
      { q: '¿Sirve con respuestas de IA?', a: 'Es el caso principal: ChatGPT, Claude y Copilot responden en Markdown con código en vallas de tres comillas invertidas. Pega la respuesta entera y cada bloque aparece en orden con su número de líneas.' },
      { q: '¿Se sube el texto a algún servidor?', a: 'No. La extracción se hace localmente en el navegador con expresiones regulares, sin una sola petición de red — puedes pegar respuestas con código interno o documentos privados.' },
    ],
    ui: {
      'copyAll': 'Copiar todo',
      'filterBy': 'Filtrar idioma',
      'inputLabel': 'Markdown / respuesta de IA',
      'lines': 'líneas',
      'noBlocks': 'No se encontraron bloques de código.',
      'note': '🧾 Funciona con cualquier Markdown con vallas de tres comillas invertidas: respuestas de ChatGPT/Claude, README o documentación. Los chips de lenguaje filtran (p. ej., «py» coincide con python); los bloques indentados con 4 espacios se ignoran a propósito.',
    },
  },
  de: {
    useCases: [
      'Alle Code-Blöcke aus einer langen ChatGPT-/Claude-Antwort mit einem Klick extrahieren, statt jeden einzeln zu markieren',
      'READMEs oder Doks verarbeiten: per Sprach-Chip filtern und nur Shell-Befehle oder Python-Beispiele behalten',
      'Kommando-Snippets aus Tutorials gesammelt zu einem ausführbaren Installations-Skript zusammensetzen',
      'Von der KI generierten Multi-Datei-Code Block für Block in die IDE kopieren und testen',
    ],
    faqs: [
      { q: 'Welche Blockformate werden unterstützt?', a: 'Standard-Zäune aus drei Backticks (```lang ... ```) — die Codeblock-Syntax von GitHub Flavored Markdown. Altmodische Blöcke mit 4-Leerzeichen-Einzug werden bewusst ignoriert: Sie sind zu leicht mit Listen-Einzügen zu verwechseln, und Fehlalarme kosten mehr als Auslassungen.' },
      { q: 'Wie greift der Sprachfilter?', a: 'Als Teilstring-Match auf das Zaun-Label: „py“ trifft python und py3, „ts“ trifft typescript. Zäune ohne Label werden als „text“ geführt und erscheinen genauso als Filter-Chip.' },
      { q: 'Funktioniert es mit KI-Antworten?', a: 'Genau dafür ist es gedacht: ChatGPT, Claude und Copilot antworten in Markdown mit Dreifach-Backtick-Code. Die ganze Antwort einfügen — jeder Block erscheint der Reihe nach inklusive Zeilenanzahl.' },
      { q: 'Wird der Text irgendwo hochgeladen?', a: 'Nein. Die Extraktion läuft lokal im Browser per Regex, ohne eine einzige Netzwerkanfrage — auch Antworten mit internem Code oder vertraulichen Doks sind sicher.' },
    ],
    ui: {
      'copyAll': 'Alle kopieren',
      'filterBy': 'Sprache filtern',
      'inputLabel': 'Markdown / KI-Antwort',
      'lines': 'Zeilen',
      'noBlocks': 'Keine Code-Blöcke gefunden.',
      'note': '🧾 Funktioniert mit jedem Markdown mit Dreifach-Backticks — ChatGPT-/Claude-Antworten, READMEs, Dokus. Die Sprach-Chips filtern (z. B. „py“ trifft python); eingerückte Codeblöcke (4 Leerzeichen) werden bewusst ignoriert.',
    },
  },
}
