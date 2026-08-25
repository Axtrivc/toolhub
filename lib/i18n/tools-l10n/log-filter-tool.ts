/**
 * log-filter-tool 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const LogFilterToolL10n: ToolL10n = {
  zh: {
    useCases: ['从海量日志里筛出错误行', '按级别/关键字缩小排查范围', '用正则批量过滤日志', '复制干净的错误片段给同事'],
    faqs: [
      { q: '粘贴生产日志安全吗?', a: '安全——过滤完全在浏览器本地运行,不上传、不存储任何内容。不过分享过滤结果前仍建议抹掉令牌和个人数据,因为命中的行里还有什么就带什么。' },
      { q: '级别过滤是怎么工作的?', a: '级别按词边界匹配:选 WARN 只匹配 WARN 而不匹配 WARNING;选 ERROR 则无论 ERROR 出现在行内何处都保留该行。再配合包含/排除词可以继续收窄,比如"含 timeout 的 ERROR 行"。' },
      { q: '能用正则吗?', a: '能——打开正则开关后,包含与排除都变成不区分大小写的正则表达式,如 timeout|refused 可同时匹配两个词。非法正则会用红色标出,而不是悄悄匹配不到任何东西。' },
    ],
    ui: {
      'allLevels': '全部级别',
      'excludeLabel': '排除',
      'includeLabel': '包含(关键词或正则)',
      'inputLabel': '粘贴日志',
      'invalidRegex': '无效的正则表达式',
      'levelLabel': '日志级别',
      'matchedN': '{t} 行中的 {m} 行',
      'noLines': '没有符合当前过滤条件的行。',
      'note': '🔒 过滤完全在客户端运行——放心粘贴生产日志。级别匹配按词边界精确匹配(WARN 匹配 WARN,不匹配 WARNING)。',
      'regexToggle': '按正则表达式处理',
    },
  },
  es: {
    useCases: ['extraer los errores de un log gigante', 'acotar la búsqueda por nivel o palabra clave', 'filtrar logs con expresiones regulares', 'copiar un fragmento limpio de errores para el equipo'],
    faqs: [
      { q: '¿Es seguro pegar logs de producción?', a: 'Sí: el filtrado corre enteramente en el navegador; no se sube ni se almacena nada. Aun así, antes de compartir la salida conviene borrar tokens y datos personales, porque las líneas que coinciden llevan dentro lo que llevaran.' },
      { q: '¿Cómo funciona el filtro por nivel?', a: 'Los niveles casan por límites de palabra: elegir WARN casa WARN pero no WARNING, y ERROR conserva solo las líneas de error, esté donde esté el token. Combínalo con términos de incluir/excluir para afinar, como líneas ERROR que contengan timeout.' },
      { q: '¿Puedo usar expresiones regulares?', a: 'Sí — activa el interruptor de regex y tanto incluir como excluir pasan a ser regex insensibles a mayúsculas, de modo que timeout|refused casa ambas palabras. Los patrones inválidos se marcan en rojo en lugar de casar silenciosamente con nada.' },
    ],
    ui: {
      'allLevels': 'Todos los niveles',
      'excludeLabel': 'Excluir',
      'includeLabel': 'Incluir (palabra o regex)',
      'inputLabel': 'Pega tus logs',
      'invalidRegex': 'Expresión regular no válida',
      'levelLabel': 'Nivel de log',
      'matchedN': '{m} de {t} líneas',
      'noLines': 'Ninguna línea coincide con los filtros.',
      'note': '🔒 El filtrado es 100 % en el cliente — pega logs de producción sin miedo. El nivel coincide por límite de palabra exacto.',
      'regexToggle': 'Tratar patrones como regex',
    },
  },
  de: {
    useCases: ['Fehlerzeilen aus riesigen Logs herausfiltern', 'die Suche nach Level oder Stichwort eingrenzen', 'Logs per Regex filtern', 'ein sauberes Fehler-Snippet fürs Team kopieren'],
    faqs: [
      { q: 'Ist es sicher, Produktions-Logs einzufügen?', a: 'Ja — das Filtern läuft komplett lokal im Browser; nichts wird hochgeladen oder gespeichert. Vor dem Teilen der Ausgabe dennoch Tokens und personenbezogene Daten entfernen, denn die getroffenen Zeilen enthalten, was drinstand.' },
      { q: 'Wie funktioniert das Level-Filtern?', a: 'Level matchen an Wortgrenzen: WARN trifft WARN, aber nicht WARNING; ERROR behält nur Fehlerzeilen, egal wo das Token steht. Mit Ein-/Ausschluss-Begriffen verfeinerst du weiter, etwa ERROR-Zeilen mit timeout.' },
      { q: 'Kann ich reguläre Ausdrücke nutzen?', a: 'Ja — schalte den Regex-Schalter um, dann sind Einschließen und Ausschließen case-insensitive Regexes, sodass timeout|refused beide Wörter trifft. Ungültige Muster werden rot markiert, statt still nichts zu matchen.' },
    ],
    ui: {
      'allLevels': 'Alle Stufen',
      'excludeLabel': 'Ausschließen',
      'includeLabel': 'Einschließen (Wort oder Regex)',
      'inputLabel': 'Logs einfügen',
      'invalidRegex': 'Ungültiger regulärer Ausdruck',
      'levelLabel': 'Log-Level',
      'matchedN': '{m} von {t} Zeilen',
      'noLines': 'Keine Zeilen entsprechen den Filtern.',
      'note': '🔒 Das Filtern läuft komplett im Browser — Produktivlogs bedenkenlos einfügen. Level-Match ist wortgrenzengenau.',
      'regexToggle': 'Muster als Regex behandeln',
    },
  },
}
