/**
 * find-and-replace 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const findAndReplaceL10n: ToolL10n = {

  es: {
    ui: {
      inputLabel: 'Tu texto',
      outputLabel: 'Resultado',
      placeholder: 'Escribe o pega texto...',
      resultPlaceholder: 'El resultado aparecerá aquí...',
      findLabel: 'Buscar',
      replaceLabel: 'Reemplazar con',
      caseSensitive: 'Distinguir mayúsculas',
      matchCount: 'Coincidencias: {n}',
      regexLabel: 'Expresión regular',
      invalidRegex: '⚠️ Expresión regular no válida — revisa la sintaxis del patrón',
      textTooLong: '⚠️ El texto supera 100 000 caracteres — el modo regex está desactivado para textos muy grandes. Usa el modo literal (sin regex)',
      clear: 'Limpiar',
      note: '🔍 Reemplaza todas las coincidencias. Activa «Expresión regular» para usar patrones (p. ej. \\d+); $1 funciona en el reemplazo. Por defecto no distingue mayúsculas; marca «Distinguir mayúsculas» para distinguirlas.',
    },
    useCases: [
      'reemplazar un término a lo largo de un documento largo',
      'sustituir marcadores como [NAME] por el valor real',
      'unificar grafías inconsistentes (color → colour)',
      'censurar datos sensibles antes de compartir el texto',
    ],
    faqs: [
      { q: '¿La búsqueda distingue mayúsculas y minúsculas?', a: 'Por defecto no — «Cat» coincide con «cat». Activa «Distinguir mayúsculas» para que solo se acepten coincidencias exactas.' },
      { q: '¿Puedo usar expresiones regulares?', a: 'Sí. Con «Expresión regular» activado, el campo de búsqueda coincide por patrón (p. ej. \\d+, [a-z]+) y el reemplazo admite referencias como $1 o $&; un patrón no válido muestra un aviso amable en lugar de un error.' },
    ],
  },
  de: {
    ui: {
      inputLabel: 'Dein Text',
      outputLabel: 'Ergebnis',
      placeholder: 'Text eingeben oder einfügen...',
      resultPlaceholder: 'Ergebnis erscheint hier...',
      findLabel: 'Suchen',
      replaceLabel: 'Ersetzen mit',
      caseSensitive: 'Groß-/Kleinschreibung beachten',
      matchCount: 'Treffer: {n}',
      regexLabel: 'Regulärer Ausdruck',
      invalidRegex: '⚠️ Ungültiger regulärer Ausdruck — prüfe die Mustersyntax',
      textTooLong: '⚠️ Der Text überschreitet 100.000 Zeichen — der Regex-Modus ist für sehr große Texte deaktiviert. Verwende den Literalmodus (ohne Regex)',
      clear: 'Leeren',
      note: '🔍 Ersetzt jedes Vorkommen. Aktiviere „Regulärer Ausdruck“ für Muster (z. B. \\d+); $1-Rückverweise funktionieren in der Ersetzung. Standardmäßig wird die Groß-/Kleinschreibung ignoriert; aktiviere die Option, um sie zu beachten.',
    },
    useCases: [
      'einen Begriff in einem langen Dokument durchgängig ersetzen',
      'Platzhalter wie [NAME] durch echte Werte tauschen',
      'inkonsistente Schreibweisen vereinheitlichen (color → colour)',
      'sensible Daten vor dem Teilen schwärzen',
    ],
    faqs: [
      { q: 'Wird bei der Suche Groß-/Kleinschreibung unterschieden?', a: 'Standardmäßig nein — „Cat“ matcht „cat“. Aktiviere „Groß-/Kleinschreibung beachten“, damit nur exakte Schreibweisen treffen.' },
      { q: 'Kann ich reguläre Ausdrücke verwenden?', a: 'Ja. Mit aktiviertem „Regulärer Ausdruck“ matcht das Suchfeld nach Muster (z. B. \\d+, [a-z]+), und die Ersetzung unterstützt Rückverweise wie $1 oder $&; ein ungültiges Muster zeigt einen freundlichen Hinweis statt eines Fehlers.' },
    ],
  },
}
