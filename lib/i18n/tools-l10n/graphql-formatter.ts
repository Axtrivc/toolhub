/**
 * graphql-formatter 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const GraphqlFormatterL10n: ToolL10n = {
  zh: {
    useCases: ['把压成一行的查询排成可读的多行结构', '代码评审前统一团队缩进风格', '压缩查询以缩小请求负载', '排查括号不匹配导致的语法错误'],
    faqs: [
      { q: '它能校验查询吗?', a: '做真正的词法分析与括号配平:未闭合的字符串、多余的闭括号、意外字符都会报出准确位置;文档不完整时原样提示、不输出半成品。但它不做 schema 层面的语义校验(字段是否存在之类)。' },
      { q: '# 注释会保留吗?', a: '美化时保留并重排在对应缩进上;压缩时按惯例丢弃——压缩的目的就是去掉一切非必需字节。' },
      { q: '支持 SDL/schema 文件吗?', a: '支持。type/interface/union/enum/input 以及 """ 描述字符串都能往返处理,Schema 定义与查询文档用的是同一套词法规则。' },
      { q: '压缩能省多少?', a: '取决于注释与空白占比,常见查询约 30-40%。注意 gzip 本身对空白压缩率极高,收益主要在解析开销与日志可读性,而非网络体积。' },
    ],
    ui: {
      'inputLabel': '你的 GraphQL',
      'outputLabel': '结果',
      'loadSample': '加载示例',
      'beautify': '美化',
      'minify': '压缩',
      'indentLabel': '缩进',
      'errPrefix': '无法格式化——输入不完整或非法:',
      'tooLarge': '输入过大——支持的上限是 100,000 字符。',
      'note': '⚡ 真正的词法器而非正则拼凑:字符串、三引号块字符串、# 注释、指令、变量与 fragment 都能安全往返。美化保留注释,压缩丢弃注释;GraphQL 中逗号无语法意义,输出按惯例重新规范化。',
    },
  },
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
