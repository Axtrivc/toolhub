/**
 * sql-formatter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const sqlFormatterL10n: ToolL10n = {
  zh: {
    ui: {
      'copy': '复制',
      'couldNotFormat': '无法格式化 SQL',
      'formattedSql': '格式化后的 SQL',
      'inputLabel': '粘贴你的 SQL',
      'minifiedSql': '压缩后的 SQL',
      'modeFormat': '格式化',
      'modeMinify': '压缩',
      'note': '🔒 100% 在客户端——通用 ANSI SQL 格式化器。关键字大写;缩进遵循子句层级。',
    },
    useCases: [
      '格式化从日志复制的压缩 SQL',
      '为代码审查准备可读查询',
      '把 SQL 压缩成单行放进 JSON 载荷',
      '美化第三方或供应商的 SQL',
    ],
    faqs: [
      { q: '支持哪种 SQL 方言?', a: '它应用通用 ANSI SQL 格式,适用于 MySQL、PostgreSQL、SQLite、SQL Server 和 Oracle。主要关键字(SELECT、FROM、WHERE、JOIN、GROUP BY、ORDER BY、INSERT、UPDATE、DELETE)都能识别并大写。方言专有语法(PL/pgSQL 块、T-SQL 变量)的缩进可能不够完美。' },
      { q: '它会校验或执行我的查询吗?', a: '不会。它只是纯粹的格式化工具——重新缩进并把关键字大写,但不会检查查询是否为合法 SQL,也不会拿去数据库执行。也就是说,即使查询有语法错误它也会照常格式化,只是让文本更好读而已。' },
      { q: '除了美化还能压缩 SQL 吗?', a: '可以。用「压缩」选项把查询折叠成一行并规范化空白,便于紧凑地存储或发送查询。切回「格式化」即可再次展开以便编辑。' },
    ],
  },
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
      'formatear SQL minimizado copiado de registros',
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
      'note': '🔒 100% clientseitig — ein generischer ANSI-SQL-Formatter. Schlüsselwörter werden großgeschrieben; die Einrückung folgt der Klausel­hierarchie.',
    },
    useCases: [
      'minimiertes SQL aus Logs formatieren',
      'lesbare Queries für Code-Reviews vorbereiten',
      'SQL zu einer Zeile für JSON-Payloads komprimieren',
      'SQL von Drittanbietern verschönern',
    ],
    faqs: [
      { q: 'Welchen SQL-Dialekt formatiert das Werkzeug?', a: 'Es wendet generische ANSI-SQL-Formatierung an, die für MySQL, PostgreSQL, SQLite, SQL Server und Oracle funktioniert. Die wichtigsten Schlüsselwörter (SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY, INSERT, UPDATE, DELETE) werden erkannt und großgeschrieben. Dialektspezifische Syntax (PL/pgSQL-Blöcke, T-SQL-Variablen) wird eventuell nicht perfekt eingerückt.' },
      { q: 'Validiert oder führt es meine Abfrage aus?', a: 'Nein. Es ist ein reiner Formatter — er rückt neu ein und schreibt Schlüsselwörter groß, prüft aber nicht, ob die Abfrage gültiges SQL ist, und führt sie nicht gegen eine Datenbank aus. Das heißt, er formatiert fröhlich eine Abfrage mit Syntaxfehler; er macht den Text nur besser lesbar.' },
      { q: 'Kann es SQL auch minimieren statt nur verschönern?', a: 'Ja. Nutze die Option „Minify", um die Abfrage mit normalisierten Leerzeichen in eine Zeile zu falten — praktisch, um Queries kompakt zu speichern oder zu versenden. Schalte zurück auf „Format", um sie wieder zu erweitern und zu bearbeiten.' },
    ],
  },
}
