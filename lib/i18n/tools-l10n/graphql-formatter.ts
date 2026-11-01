/**
 * graphql-formatter 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const GraphqlFormatterL10n: ToolL10n = {

  es: {
    useCases: ['expandir consultas de una sola línea a una estructura legible', 'unificar la indentación del equipo antes de una revisión de código', 'minificar consultas para reducir el payload', 'cazar errores de sintaxis por llaves sin cerrar'],
    faqs: [
      { q: '¿Valida la consulta?', a: 'Hace análisis léxico real y comprobación de balance: cadenas sin cerrar, llaves de más o caracteres inesperados se notifican con su posición exacta; si el documento está incompleto, avisa sin emitir un resultado a medias. Lo que no hace es validación semántica contra un schema (si un campo existe o no).' },
      { q: '¿Se conservan los comentarios #?', a: 'Al beautify se conservan y se realinean a su sangría; al minificar se descartan por convención — el objetivo es eliminar todo byte no imprescindible.' },
      { q: '¿Admite archivos SDL/schema?', a: 'Sí. type/interface/union/enum/input y las descripciones entre """ hacen round-trip sin problemas: el schema y los documentos de consulta comparten las mismas reglas léxicas.' },
      { q: '¿Cuánto se ahorra al minificar?', a: 'Depende de comentarios y espacios; en consultas típicas, un 30-40 %. Ten en cuenta que gzip ya comprime muy bien el espacio en blanco: la ganancia real está en el coste de parseo y la legibilidad de logs, no tanto en la red.' },
    ],
    ui: {
      'inputLabel': 'Tu GraphQL',
      'outputLabel': 'Resultado',
      'loadSample': 'Cargar ejemplo',
      'beautify': 'Embellecer',
      'minify': 'Minificar',
      'indentLabel': 'Sangría',
      'errPrefix': 'No se puede formatear — la entrada está incompleta o es inválida:',
      'tooLarge': 'Entrada demasiado grande — el máximo admitido es de 100 000 caracteres.',
      'note': '⚡ Un lexer de verdad, no trucos con regex: cadenas, bloques """, comentarios #, directivas, variables y fragments hacen round-trip seguros. Beautify conserva los comentarios y minify los descarta; en GraphQL las comas no tienen valor sintáctico y se renormalizan por convención.',
    },
  },
  de: {
    useCases: ['einzeilige Queries in eine lesbare Struktur expandieren', 'die Einrückung im Team vor dem Code-Review vereinheitlichen', 'Queries minifizieren, um den Payload zu verkleinern', 'Syntaxfehler durch unbalancierte Klammern aufspüren'],
    faqs: [
      { q: 'Validiert das Tool die Query?', a: 'Es macht echtes Lexing und Klammern-Balanceprüfung: nicht geschlossene Strings, überschüssige schließende Klammern und unerwartete Zeichen werden mit exakter Position gemeldet; ist das Dokument unvollständig, gibt es einen Hinweis statt eines halben Ergebnisses. Keine semantische Schema-Validierung (ob ein Feld existiert) — das ist ein anderer Job.' },
      { q: 'Bleiben die #-Kommentare erhalten?', a: 'Beim Beautify bleiben sie und richten sich auf der neuen Einrückung aus; beim Minify werden sie konventionell verworfen — dort zählt nur, jeden verzichtbaren Byte zu streichen.' },
      { q: 'Geht auch SDL/Schema-Dateien?', a: 'Ja. type/interface/union/enum/input und \"\"\"-Beschreibungen überstehen das Round-trip problemlos — Schema und Abfragedokumente teilen dieselben lexikalischen Regeln.' },
      { q: 'Wie viel spart Minify?', a: 'Je nach Kommentar- und Weißraumanteil, typischerweise 30-40 % bei Queries. Beachte: gzip packt Weißraum ohnehin extrem gut — der echte Gewinn liegt bei Parse-Kosten und lesbaren Logs, weniger im Netzwerk.' },
    ],
    ui: {
      'inputLabel': 'Dein GraphQL',
      'outputLabel': 'Ergebnis',
      'loadSample': 'Beispiel laden',
      'beautify': 'Formatieren',
      'minify': 'Minifizieren',
      'indentLabel': 'Einrückung',
      'errPrefix': 'Formatieren nicht möglich — Eingabe unvollständig oder ungültig:',
      'tooLarge': 'Eingabe zu groß — unterstützt sind bis zu 100.000 Zeichen.',
      'note': '⚡ Ein echter Lexer statt Regex-Bastelei: Strings, \"\"\"-Blockstrings, #-Kommentare, Direktiven, Variablen und Fragments überstehen das Round-trip sicher. Beautify behält Kommentare, Minify verwirft sie; Kommas sind in GraphQL syntaktisch bedeutungslos und werden der Konvention folgend neu gesetzt.',
    },
  },
}
