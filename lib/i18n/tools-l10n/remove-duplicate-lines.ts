/**
 * remove-duplicate-lines 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const removeDuplicateLinesL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'manzana\nplátano\nmanzana\ncereza\nplátano\ndátil',
      inputLabel: 'Lista (un elemento por línea)',
      outputLabel: 'Elementos únicos',
      note: '🗑️ Elimina las líneas duplicadas conservando el orden. Las líneas se comparan tras recortar los espacios de los extremos; se distinguen mayúsculas y minúsculas («Apple» ≠ «apple»). Ideal para limpiar listas.',
    },
    useCases: [
      'limpiar listas de suscriptores de correo (quitar duplicados)',
      'depurar palabras clave SEO antes de analizarlas',
      'ordenar listas de inventario y SKU',
      'limpiar líneas de error repetidas en archivos de registro',
    ],
    faqs: [
      { q: '¿Esto ordena mi lista?', a: 'No — se conserva el orden. Usa la herramienta Ordenar líneas si también quieres un orden alfabético.' },
      { q: '¿Hay un límite de tamaño?', a: 'No hay un límite estricto, pero entradas muy grandes (millones de líneas) pueden ralentizar tu navegador. La herramienta se ejecuta localmente.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'apfel\nbanane\napfel\nkirsche\nbanane\ndattel',
      inputLabel: 'Liste (ein Eintrag pro Zeile)',
      outputLabel: 'Eindeutige Einträge',
      note: '🗑️ Entfernt doppelte Zeilen und behält die Reihenfolge. Zeilen werden nach dem Trimmen umgebender Leerzeichen verglichen; Groß-/Kleinschreibung wird beachtet („Apple“ ≠ „apple“). Ideal zum Aufräumen von Listen.',
    },
    useCases: [
      'Newsletter-Abonnentenlisten bereinigen (Duplikate entfernen)',
      'SEO-Schlüsselwörter vor der Analyse entdoppeln',
      'Bestands- und SKU-Listen aufräumen',
      'wiederholte Fehlerzeilen in Logdateien bereinigen',
    ],
    faqs: [
      { q: 'Wird meine Liste sortiert?', a: 'Nein — die Reihenfolge bleibt erhalten. Verwende das Werkzeug Zeilen sortieren, wenn du zusätzlich alphabetische Sortierung möchtest.' },
      { q: 'Gibt es eine Größenbeschränkung?', a: 'Keine harte Grenze, aber sehr große Eingaben (Millionen Zeilen) können deinen Browser verlangsamen. Das Werkzeug läuft lokal.' },
    ],
  },
}
