/**
 * sql-formatter 本地化 bundle —— zh / es / de
 * 覆盖:ui + faqs + useCases(交互客户端为自定义组件,UI 经 SqlFormatterClient 内 tui() 读取)
 */
import type { ToolL10n } from '../tool-l10n'

export const sqlFormatterL10n: ToolL10n = {

  es: {
    ui: {
      'copy': 'Copiar',
      'couldNotFormat': 'No se pudo formatear el SQL',
      'formattedSql': 'SQL formateado',
      'inputLabel': 'Pega tu SQL',
      'minifiedSql': 'SQL minificado',
      'modeFormat': 'formatear',
      'modeMinify': 'minificar',
      'note': '🔒 100% en el cliente — un formateador SQL ANSI genérico. Las palabras clave se capitalizan; la sangría sigue la jerarquía de cláusulas.',
    },
    useCases: [
      'formatear SQL minimizado copiado de logs',
      'preparar consultas legibles para revisión de código',
      'comprimir SQL en una sola línea para payloads JSON',
      'embellecer SQL de terceros o proveedores',
    ],
    faqs: [
      { q: '¿Qué dialecto SQL formatea?', a: 'Aplica un formateo SQL ANSI genérico que sirve para MySQL, PostgreSQL, SQLite, SQL Server y Oracle. Las palabras clave principales (SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY, INSERT, UPDATE, DELETE) se reconocen y capitalizan. La sintaxis específica de cada dialecto (bloques PL/pgSQL, variables T-SQL) puede no indentarse a la perfección.' },
      { q: '¿Valida o ejecuta mi consulta?', a: 'No. Es un formateador puro — reindenta y capitaliza las palabras clave, pero no comprueba que la consulta sea SQL válido ni la ejecuta contra una base de datos. Eso significa que formateará sin problema una consulta con error de sintaxis; simplemente la hace más legible.' },
      { q: '¿También puede minimizar SQL, no solo embellecerlo?', a: 'Sí. Usa la opción «Minificar» para colapsar la consulta en una sola línea con espacios normalizados, útil para almacenar o enviar consultas de forma compacta. Vuelve a «Formatear» para expandirla de nuevo y editarla.' },
    ],
  },
  de: {
    ui: {
      'copy': 'Kopieren',
      'couldNotFormat': 'SQL konnte nicht formatiert werden',
      'formattedSql': 'Formatiertes SQL',
      'inputLabel': 'Füge dein SQL ein',
      'minifiedSql': 'Minifiziertes SQL',
      'modeFormat': 'formatieren',
      'modeMinify': 'minifizieren',
      'note': '🔒 100% clientseitig — ein generischer ANSI-SQL-Formatter. Schlüsselwörter werden großgeschrieben; die Einrückung folgt der Klauselhierarchie.',
    },
    useCases: [
      'minimiertes SQL aus Logs formatieren',
      'lesbare Queries für Code-Reviews vorbereiten',
      'SQL zu einer Zeile für JSON-Payloads komprimieren',
      'SQL von Drittanbietern verschönern',
    ],
    faqs: [
      { q: 'Welchen SQL-Dialekt formatiert das Werkzeug?', a: 'Es wendet generische ANSI-SQL-Formatierung an, die für MySQL, PostgreSQL, SQLite, SQL Server und Oracle funktioniert. Die wichtigsten Schlüsselwörter (SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY, INSERT, UPDATE, DELETE) werden erkannt und großgeschrieben. Dialektspezifische Syntax (PL/pgSQL-Blöcke, T-SQL-Variablen) wird eventuell nicht perfekt eingerückt.' },
      { q: 'Validiert oder führt es meine Abfrage aus?', a: 'Nein. Es ist ein reiner Formatter — er rückt neu ein und schreibt Schlüsselwörter groß, prüft aber nicht, ob die Abfrage gültiges SQL ist, und führt sie nicht gegen eine Datenbank aus. Das heißt, er formatiert fröhlich eine Abfrage mit Syntaxfehlern; er macht den Text nur besser lesbar.' },
      { q: 'Kann es SQL auch minimieren statt nur verschönern?', a: 'Ja. Nutze die Option „Minifizieren“, um die Abfrage mit normalisierten Leerzeichen auf eine einzige Zeile zu reduzieren — praktisch, um Queries kompakt zu speichern oder zu versenden. Schalte zurück auf „Formatieren“, um sie wieder zu erweitern und zu bearbeiten.' },
    ],
  },
}
