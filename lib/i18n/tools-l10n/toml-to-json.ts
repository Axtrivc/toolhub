/**
 * toml-to-json 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const TomlToJsonL10n: ToolL10n = {
  zh: {
    useCases: ['把 TOML 配置转成 JSON', '给需要 JSON 输入的 API 备料', '检查 TOML 的语法错误', '迁移配置文件格式'],
    faqs: [
      { q: '支持哪些 TOML 特性?', a: 'TOML 1.0 核心:具名表、数组表、内联表、点分键、全部数字格式(0x/0o/0b、inf、nan)、布尔值与日期时间——日期时间会转为字符串,因为 JSON 没有日期类型。多行字符串会带行号拒绝,而不是误解析。' },
      { q: '日期为什么变成字符串?', a: 'JSON 没有原生日期类型——RFC 8259 只定义了字符串、数字、布尔、数组、对象和 null。转换器按原样保留日期时间文本,这也与多数 JSON API 处理 ISO 8601 字符串的方式一致。' },
      { q: '错误怎么报告?', a: '解析失败会给出出错行号和简短原因,少个引号或键写坏了都能快速定位。整个文档解析通过前不会输出任何结果——绝不给半截转换。' },
    ],
    ui: {
      'inputLabel': '你的 TOML',
      'loadSample': '加载示例',
      'note': '📦 TOML 1.0 子集解析器——支持表格、数组表、内联表、点分键与全部数字格式。日期时间保留为字符串(JSON 无日期类型)。多行字符串会带行号拒绝而不是误解析。',
    },
  },
  es: {
    useCases: ['convertir configuración TOML a JSON', 'preparar datos para APIs que piden JSON', 'detectar errores de sintaxis TOML', 'migrar el formato de archivos de configuración'],
    faqs: [
      { q: '¿Qué características TOML se admiten?', a: 'El núcleo de TOML 1.0: tablas con nombre, arrays de tablas, tablas inline, claves con puntos, todos los formatos numéricos (0x/0o/0b, inf, nan), booleanos y fechas — que pasan a strings porque JSON no tiene tipo fecha. Las cadenas multilínea se rechazan con su número de línea, no se analizan mal.' },
      { q: '¿Por qué las fechas se vuelven strings?', a: 'JSON no tiene tipo de fecha nativo — RFC 8259 solo define strings, números, booleanos, arrays, objetos y null. El conversor mantiene el texto del datetime tal cual, igual que la mayoría de APIs JSON tratan las cadenas ISO 8601.' },
      { q: '¿Cómo se reportan los errores?', a: 'Los fallos de análisis muestran la línea culpable y un motivo breve, así una comilla faltante se localiza rápido. No se emite nada hasta que todo el documento parsea — nunca resultados a medias.' },
    ],
    ui: {
      'inputLabel': 'Tu TOML',
      'loadSample': 'Cargar ejemplo',
      'note': '📦 Analizador de un subconjunto de TOML 1.0 — tablas, tablas de arrays, tablas inline, claves con puntos y todos los formatos numéricos. Las fechas quedan como strings.',
    },
  },
  de: {
    useCases: ['TOML-Konfiguration nach JSON wandeln', 'Daten für JSON-basierte APIs aufbereiten', 'TOML-Syntaxfehler finden', 'Konfigformate migrieren'],
    faqs: [
      { q: 'Welche TOML-Features werden unterstützt?', a: 'Der TOML-1.0-Kern: benannte Tables, Array-of-Tables, Inline-Tables, gepunktete Keys, alle Zahlenformate (0x/0o/0b, inf, nan), Booleans und Datetimes — die zu Strings werden, denn JSON kennt keinen Datumstyp. Mehrzeilige Strings werden mit Zeilennummer abgelehnt statt falsch geparst.' },
      { q: 'Warum werden Datums zu Strings?', a: 'JSON hat keinen nativen Datumstyp — RFC 8259 definiert nur Strings, Zahlen, Booleans, Arrays, Objekte und null. Der Konverter hält den Datetime-Text exakt wie geschrieben, was auch den meisten JSON-APIs mit ISO-8601-Strings entspricht.' },
      { q: 'Wie werden Fehler gemeldet?', a: 'Parse-Fehler zeigen die betroffene Zeile und einen kurzen Grund — fehlende Anführungszeichen oder kaputte Keys sind so schnell gefunden. Vor einem kompletten Parse steht nichts im Output — keine halben Konvertierungen.' },
    ],
    ui: {
      'inputLabel': 'Dein TOML',
      'loadSample': 'Beispiel laden',
      'note': '📦 TOML-1.0-Teilmenge — Tables, Array-Tables, Inline-Tables, gepunktete Keys, alle Zahlenformate. Datetimes bleiben Strings. Mehrzeilige Strings werden mit Zeilennummer abgelehnt.',
    },
  },
}
