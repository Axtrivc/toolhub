/**
 * whitespace-remover 本地化 bundle —— zh / es / de
 * 覆盖:ui(TextCleanerClient 经 tui() 读取)+ useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const whitespaceRemoverL10n: ToolL10n = {

  es: {
    ui: {
      'characters': 'caracteres',
      'cleanedText': 'Texto limpio',
      'clear': 'Limpiar',
      'collapseSpaces': 'Contraer espacios múltiples',
      'dedupe': 'Quitar líneas duplicadas',
      'dropEmptyLines': 'Quitar líneas vacías',
      'join': 'Unir:',
      'joinNewline': 'Saltos de línea (multilínea)',
      'joinSingle': 'Línea única',
      'joinSpace': 'Espacios (párrafo)',
      'note': '🧹 Combina la contracción de espacios, la eliminación de líneas vacías, la deduplicación y la ordenación en una sola herramienta. Activa cualquier opción; todo corre localmente en tu navegador.',
      'placeholder': 'Pega texto con espacios extra, líneas vacías o duplicados…',
      'resultPlaceholder': 'El resultado aparecerá aquí…',
      'sortAZ': 'Ordenar A → Z',
      'trimEachLine': 'Recortar cada línea',
      'words': 'palabras',
      'yourText': 'Tu texto',
    },
    useCases: [
      'limpiar texto copiado de sitios web o PDF',
      'dar formato a datos antes de pegarlos en una hoja de cálculo',
      'preparar texto para código (los espacios extra rompen la sangría)',
      'normalizar la entrada de usuario en formularios',
      'ordenar notas y borradores',
    ],
    faqs: [
      { q: '¿Esto elimina todos los saltos de línea?', a: 'No — los saltos de línea se conservan, pero las líneas vacías se eliminan. Usa la herramienta Quitar saltos de línea si también quieres unir todo en una sola línea.' },
    ],
  },
  de: {
    ui: {
      'characters': 'Zeichen',
      'cleanedText': 'Bereinigter Text',
      'clear': 'Leeren',
      'collapseSpaces': 'Mehrfache Leerzeichen zusammenfassen',
      'dedupe': 'Doppelte Zeilen entfernen',
      'dropEmptyLines': 'Leerzeilen entfernen',
      'join': 'Verbinden:',
      'joinNewline': 'Zeilenumbrüche (mehrzeilig)',
      'joinSingle': 'Einzelne Zeile',
      'joinSpace': 'Leerzeichen (Absatz)',
      'note': '🧹 Vereint das Zusammenfassen von Leerzeichen, das Entfernen von Leerzeilen, Deduplizieren und Sortieren in einem Werkzeug. Aktiviere oben die gewünschten Optionen; alles läuft lokal in deinem Browser.',
      'placeholder': 'Text mit überflüssigen Leerzeichen, Leerzeilen oder Duplikaten einfügen…',
      'resultPlaceholder': 'Das Ergebnis erscheint hier…',
      'sortAZ': 'A → Z sortieren',
      'trimEachLine': 'Jede Zeile trimmen',
      'words': 'Wörter',
      'yourText': 'Dein Text',
    },
    useCases: [
      'aus Websites oder PDFs kopierten Text bereinigen',
      'Daten vor dem Einfügen in eine Tabelle formatieren',
      'Text für Code vorbereiten (zusätzliche Leerzeichen zerstören die Einrückung)',
      'Benutzereingaben in Formularen vereinheitlichen',
      'Notizen und Entwürfe aufräumen',
    ],
    faqs: [
      { q: 'Entfernt dies alle Zeilenumbrüche?', a: 'Nein — Zeilenumbrüche bleiben erhalten, aber leere Zeilen werden entfernt. Nutze das Werkzeug Zeilenumbrüche entfernen, wenn du alles in einer Zeile zusammenfassen möchtest.' },
    ],
  },
}
