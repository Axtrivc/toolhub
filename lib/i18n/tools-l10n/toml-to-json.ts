/**
 * toml-to-json 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const TomlToJsonL10n: ToolL10n = {
  zh: {
    useCases: ['把 TOML 配置转成 JSON', '给需要 JSON 输入的 API 备料', '检查 TOML 的语法错误', '迁移配置文件格式'],
    faqs: [
      { q: '支持哪些 TOML 特性?', a: 'TOML 1.0 核心:具名表、数组表、内联表、点分键、全部数字格式(0x/0o/0b、inf、nan)、布尔值与日期时间——日期时间会转为字符串,因为 JSON 没有日期类型。多行字符串会带行号拒绝,而不是误解析。' },
      { q: '日期为什么变成字符串?', a: 'JSON 没有原生日期类型——RFC 8259 只定义了字符串、数字、布尔、数组、对象和 null。转换器按原样保留日期时间文本,这也与多数 JSON API 处理 ISO 8601 字符串的方式一致。' },
      { q: '错误怎么报告?', a: '解析失败会给出出错行号和简短原因,少个引号或键写坏了都能快速定位。整个文档解析通过前不会输出任何结果——绝不给半截转换。' },
      { q: 'Cargo.toml、pyproject.toml 能直接转吗?', a: '可以:它们用的正是 TOML 1.0 的具名表、数组表([[dependencies]])和点分键;内联表值({ version = "1.0" })原样转成 JSON 对象。多行字符串暂不支持,会带行号拒绝。' },
      { q: '转出的 JSON 还想格式化或压缩怎么办?', a: '复制结果丢进本站的 JSON 格式化/压缩工具即可;键序与 TOML 文档一致,数值和布尔保持类型,只有日期时间以字符串呈现。' },
    ],
    ui: {
      'inputLabel': '你的 TOML',
      'loadSample': '加载示例',
      'inputTooLarge': '输入超过 {n} 字符——为保证输入流畅已跳过转换。请精简或拆分 TOML 后再试。',
      'note': '📦 TOML 1.0 子集解析器——支持表格、数组表、内联表、点分键与全部数字格式。日期时间保留为字符串(JSON 无日期类型)。多行字符串会带行号拒绝而不是误解析。',
    },
  },
  es: {
    useCases: ['convertir configuración TOML a JSON', 'preparar datos para APIs que piden JSON', 'detectar errores de sintaxis TOML', 'migrar el formato de archivos de configuración'],
    faqs: [
      { q: '¿Qué características TOML se admiten?', a: 'El núcleo de TOML 1.0: tablas con nombre, arrays de tablas, tablas inline, claves con puntos, todos los formatos numéricos (0x/0o/0b, inf, nan), booleanos y fechas — que pasan a strings porque JSON no tiene tipo fecha. Las cadenas multilínea se rechazan con su número de línea, no se analizan mal.' },
      { q: '¿Por qué las fechas se vuelven strings?', a: 'JSON no tiene tipo de fecha nativo — RFC 8259 solo define strings, números, booleanos, arrays, objetos y null. El conversor mantiene el texto del datetime tal cual, igual que hace la mayoría de las APIs JSON con las cadenas ISO 8601.' },
      { q: '¿Cómo se reportan los errores?', a: 'Los fallos de análisis muestran la línea culpable y un motivo breve, así que una comilla faltante se localiza rápido. No se emite nada hasta que todo el documento parsea — nunca resultados a medias.' },
      { q: '¿Sirve para un Cargo.toml o pyproject.toml?', a: 'Sí: ambos usan el núcleo TOML 1.0 con tablas con nombre, arrays de tablas ([[dependencies]]) y claves con puntos; los valores inline ({ version = "1.0" }) pasan uno a uno a objetos JSON. Las cadenas multilínea se rechazan con su número de línea.' },
      { q: '¿Y si quiero formatear o minificar el JSON resultante?', a: 'Copia la salida al formateador/minificador JSON de esta misma web: el orden de las claves coincide con el documento TOML, números y booleanos conservan su tipo, y solo las fechas quedan como strings.' },
    ],
    ui: {
      'inputLabel': 'Tu TOML',
      'loadSample': 'Cargar ejemplo',
      'inputTooLarge': 'La entrada supera los {n} caracteres — la conversión se omite para mantener la escritura fluida. Recorta o divide el TOML.',
      'note': '📦 Analizador de un subconjunto de TOML 1.0 — tablas, arrays de tablas, tablas inline, claves con puntos y todos los formatos numéricos. Las fechas quedan como strings (JSON no tiene tipo de fecha). Las cadenas multilínea se rechazan con su número de línea, no se analizan mal.',
    },
  },
  de: {
    useCases: ['TOML-Konfiguration nach JSON wandeln', 'Daten für JSON-basierte APIs aufbereiten', 'TOML-Syntaxfehler finden', 'Konfigformate migrieren'],
    faqs: [
      { q: 'Welche TOML-Features werden unterstützt?', a: 'Der TOML-1.0-Kern: benannte Tables, Array-of-Tables, Inline-Tables, gepunktete Keys, alle Zahlenformate (0x/0o/0b, inf, nan), Booleans und Datetimes — die zu Strings werden, denn JSON kennt keinen Datumstyp. Mehrzeilige Strings werden mit Zeilennummer abgelehnt statt falsch geparst.' },
      { q: 'Warum werden Datetimes zu Strings?', a: 'JSON hat keinen nativen Datumstyp — RFC 8259 definiert nur Strings, Zahlen, Booleans, Arrays, Objekte und null. Der Konverter hält den Datetime-Text exakt wie geschrieben, was auch den meisten JSON-APIs mit ISO-8601-Strings entspricht.' },
      { q: 'Wie werden Fehler gemeldet?', a: 'Parse-Fehler zeigen die betroffene Zeile und einen kurzen Grund — fehlende Anführungszeichen oder kaputte Keys sind so schnell gefunden. Bis das gesamte Dokument geparst ist, wird nichts ausgegeben — keine halben Konvertierungen.' },
      { q: 'Geht auch eine Cargo.toml oder pyproject.toml?', a: 'Ja: beide nutzen den TOML-1.0-Kern mit benannten Tables, [[dependencies]]-Array-Tables und gepunkteten Keys; Inline-Werte ({ version = "1.0" }) werden eins zu eins zu JSON-Objekten. Mehrzeilige Strings werden mit Zeilennummer abgelehnt.' },
      { q: 'Und wenn ich das JSON formatieren oder minifizieren will?', a: 'Die Ausgabe in den JSON-Formatierer/-Minifier dieser Website kopieren: Die Key-Reihenfolge entspricht dem TOML-Dokument, Zahlen und Booleans bleiben typisiert, nur Datetimes erscheinen als Strings.' },
    ],
    ui: {
      'inputLabel': 'Dein TOML',
      'loadSample': 'Beispiel laden',
      'inputTooLarge': 'Die Eingabe überschreitet {n} Zeichen — die Konvertierung wird übersprungen, damit das Tippen flüssig bleibt. Eingabe kürzen oder aufteilen.',
      'note': '📦 TOML-1.0-Teilmenge — Tables, Array-Tables, Inline-Tables, gepunktete Keys, alle Zahlenformate. Datetimes bleiben Strings (JSON kennt keinen Datumstyp). Mehrzeilige Strings werden mit Zeilennummer abgelehnt.',
    },
  },
}
