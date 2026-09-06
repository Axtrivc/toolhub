/**
 * json-to-zod 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(类型推导工具)。
 */
import type { ToolL10n } from '../tool-l10n'

export const JsonToZodL10n: ToolL10n = {
  zh: {
    useCases: [
      '拿到第三方 API 的响应样例,秒级生成 zod schema 作为运行时校验的起点',
      '为 tRPC / React Hook Form 流程生成校验骨架,再手工补 .optional() 与业务约束',
      '混合数组(如 API 返回的多形态列表)自动生成 z.union,省去逐条手写判别',
      '把 JSON 配置文件的形状固化成 schema,配置变更时立即在校验层报错',
    ],
    faqs: [
      { q: '值为 null 的字段会怎么处理?', a: '生成"必填但可空"的 z.nullable(...)——因为样本里这个键存在。但很多 API 遇到空值会干脆省略字段,这种情况请手动把 .nullable() 改成 .optional().nullable(),工具无法从单一样本推断省略行为。' },
      { q: '整数和浮点数有区分吗?', a: '有。样本值为整数的字段生成 z.number().int(),带小数的生成 z.number()。如果你的 API 文档允许整数字段偶尔返回浮点(如价格 19 vs 19.99),请手动去掉 .int()。' },
      { q: '数组里的对象结构不一致怎么办?', a: '工具采样数组元素,最多归纳出 3 种形状并生成 z.union([...]);空数组没有形状信息,保守回退为 z.unknown()。元素超过 3 种形态的极端情况,请以 z.unknown() 兜底再手工细化。' },
      { q: '和 json-to-typescript 有什么区别?', a: 'TypeScript 类型只在编译期有效,运行时拿到脏 JSON 照样崩;zod schema 在运行时逐字段校验并能 .parse() 出强类型结果。典型用法是两者都用:TS 类型写代码,zod 守边界。' },
    ],
    ui: {
      'copySchema': '复制 Schema',
      'inputLabel': '你的 JSON',
      'loadSample': '加载示例',
      'note': '🧬 整数生成 z.number().int();混合数组生成最多 3 种样本形状的 z.union;空数组回退 z.unknown。观察到 null 的键保持"必填但可空"——API 会省略字段处请手动加 .optional()。',
      'rootObj': '根节点必须是 JSON 对象({ … })',
      'tooLong': 'JSON 超过 {n} 字符上限——仅为开头部分生成 schema。',
    },
  },
  es: {
    useCases: [
      'Generar al instante un esquema zod a partir de la respuesta de ejemplo de una API de terceros como base de validación en runtime',
      'Crear el esqueleto de validación para flujos con tRPC / React Hook Form y añadir a mano .optional() y reglas de negocio',
      'Arrays mixtos (listas con varias formas) convertidos automáticamente en z.union sin escribir discriminadores a mano',
      'Fijar la forma de un archivo de configuración JSON en un esquema, para que un cambio rompa en la capa de validación',
    ],
    faqs: [
      { q: '¿Cómo trata los campos null?', a: 'Genera z.nullable(...) — obligatorio pero anulable — porque la clave existe en la muestra. Muchas APIs omiten el campo cuando está vacío; en ese caso cambia a mano a .optional().nullable(), ya que una sola muestra no revela el comportamiento de omisión.' },
      { q: '¿Distingue enteros de decimales?', a: 'Sí: los valores enteros producen z.number().int() y los decimales z.number(). Si tu API puede devolver 19 o 19.99 en el mismo campo (precios, por ejemplo), quita el .int() manualmente.' },
      { q: '¿Y si los objetos del array no coinciden?', a: 'La herramienta muestrea los elementos, infiere hasta 3 formas y genera z.union([...]); un array vacío no aporta forma y cae a z.unknown(). Con más de 3 formas extremas, usa z.unknown() y refina a mano.' },
      { q: '¿En qué se diferencia de json-to-typescript?', a: 'Los tipos TS solo existen en compilación: un JSON sucio rompe en runtime igualmente. Un esquema zod valida campo a campo en ejecución y .parse() devuelve datos fuertemente tipados. Lo habitual es usar ambos: tipos TS para escribir código, zod para vigilar la frontera.' },
    ],
    ui: {
      'copySchema': 'Copiar esquema',
      'inputLabel': 'Tu JSON',
      'loadSample': 'Cargar ejemplo',
      'note': '🧬 Los enteros generan z.number().int(); los arrays mixtos generan z.union con hasta 3 formas; los arrays vacíos usan z.unknown. Ajusta .optional() a mano donde la API omita campos.',
      'rootObj': 'La raíz debe ser un objeto JSON',
      'tooLong': 'El JSON supera el límite de {n} caracteres: el esquema se genera solo a partir del principio.',
    },
  },
  de: {
    useCases: [
      'Aus der Beispielantwort einer Drittanbieter-API sofort ein zod-Schema als Startpunkt für Runtime-Validierung erzeugen',
      'Validierungsgerüst für tRPC- / React-Hook-Form-Flows generieren und .optional() sowie Fachregeln von Hand ergänzen',
      'Gemischte Arrays (Listen mit mehreren Formen) automatisch in z.union überführen, ohne Diskriminatoren zu schreiben',
      'Die Form einer JSON-Konfiguration als Schema festschreiben, damit Änderungen sofort in der Validierung auffallen',
    ],
    faqs: [
      { q: 'Wie werden null-Felder behandelt?', a: 'Es entsteht z.nullable(...) — Pflicht, aber null-fähig — weil der Schlüssel im Beispiel existiert. Viele APIs lassen leere Felder ganz weg; dann von Hand auf .optional().nullable() umstellen, denn das Weglass-Verhalten ist aus einer einzelnen Stichprobe nicht ableitbar.' },
      { q: 'Werden Ganzzahlen von Floats unterschieden?', a: 'Ja: Ganzzahlen erzeugen z.number().int(), Dezimalwerte z.number(). Kann dasselbe Feld mal 19, mal 19.99 liefern (typisch bei Preisen), entferne das .int() manuell.' },
      { q: 'Was, wenn Array-Objekte unterschiedlich geformt sind?', a: 'Das Werkzeug sampelt die Elemente, leitet bis zu 3 Formen ab und erzeugt z.union([...]); ein leeres Array liefert keine Form und fällt auf z.unknown() zurück. Bei mehr als 3 Formen mit z.unknown() absichern und von Hand verfeinern.' },
      { q: 'Worin unterscheidet es sich von json-to-typescript?', a: 'TS-Typen existieren nur zur Compile-Zeit — schmutziges JSON crasht zur Laufzeit trotzdem. Ein zod-Schema validiert Feld für Feld zur Laufzeit und liefert per .parse() stark typisierte Daten. Üblich ist beides: TS zum Schreiben, zod als Grenzschutz.' },
    ],
    ui: {
      'copySchema': 'Schema kopieren',
      'inputLabel': 'Dein JSON',
      'loadSample': 'Beispiel laden',
      'note': '🧬 Ganzzahlen ergeben z.number().int(); gemischte Arrays ergeben z.union mit bis zu 3 Formen; leere Arrays werden z.unknown. Setze .optional() manuell, wo APIs Felder weglassen.',
      'rootObj': 'Die Wurzel muss ein JSON-Objekt sein',
      'tooLong': 'Das JSON überschreitet das Limit von {n} Zeichen — das Schema wird nur aus dem Anfang erzeugt.',
    },
  },
}
