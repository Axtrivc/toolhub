/**
 * slug-to-title 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const slugToTitleL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'como-hacer-panqueques',
      inputLabel: 'Slug de URL',
      outputLabel: 'Título',
      note: '🔤 Convierte slugs de URL de vuelta a títulos legibles. Reemplaza guiones y guiones bajos por espacios y capitaliza las palabras.',
    },
    useCases: [
      'recuperar títulos desde la URL al importar artículos antiguos',
      'limpiar datos exportados de un CMS',
      'convertir cadenas con formato máquina en nombres legibles',
    ],
    faqs: [
      { q: '¿Esto recupera la capitalización original?', a: 'No — los slugs suelen pasarse a minúsculas, así que las mayúsculas originales se pierden. Esta herramienta aplica Title Case, que funciona bien en la mayoría de los casos, pero no recupera nombres como «iPhone» o «McDonald».' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'wie-man-pfannkuchen-macht',
      inputLabel: 'URL-Slug',
      outputLabel: 'Titel',
      note: '🔤 Wandelt URL-Slugs zurück in lesbare Titel. Ersetzt Bindestriche und Unterstriche durch Leerzeichen und schreibt Wörter groß.',
    },
    useCases: [
      'beim Import alter Beiträge Titel aus der URL zurückgewinnen',
      'aus einem CMS exportierte Daten bereinigen',
      'maschinenformatierte Zeichenketten in lesbare Namen umwandeln',
    ],
    faqs: [
      { q: 'Stellt das die ursprüngliche Groß-/Kleinschreibung wieder her?', a: 'Nein — Slugs werden meist kleingeschrieben, sodass die ursprünglichen Großbuchstaben verloren sind. Dieses Werkzeug wendet Title Case an, was in den meisten Fällen gut funktioniert, aber Namen wie „iPhone“ oder „McDonald“ nicht wiederherstellen kann.' },
    ],
  },
}
