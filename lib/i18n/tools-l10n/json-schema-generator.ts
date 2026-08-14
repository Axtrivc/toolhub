/**
 * json-schema-generator 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const jsonSchemaGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'clear': '清空',
      'copy': '复制',
      'invalidJson': '无效 JSON',
      'note': '🔒 100% 在客户端——你的 JSON 仅在你的浏览器中分析,绝不发送到任何服务器。',
      'pasteJson': '粘贴你的 JSON',
      'schemaTitle': 'JSON Schema (Draft-07)',
    },
    useCases: [
      '在线从 JSON 生成 JSON Schema',
      'Draft-07 JSON Schema 生成器',
      '从 JSON 负载推断 Schema',
      '生成 JSON Schema 的必填字段',
    ],
    faqs: [
      {
        q: '它输出的是哪个 JSON Schema 草案?',
        a: 'Draft-07。它使用所有主流校验器都支持的标准 type、properties、required、items 等关键字,所以生成的 schema 可以直接接入大多数现成的校验流程,无需改动。',
      },
      {
        q: '它怎么判断哪些字段是「必填」?',
        a: '当某个字段在样本数据的每个对象里都出现时,就标记为必填;只要有任意一条记录缺少该字段,它就保持可选。这贴合真实数据的样貌,避免给 schema 加上过严的约束。',
      },
      {
        q: '它能处理嵌套对象和数组吗?',
        a: '能。嵌套对象会变成嵌套的 properties,数组则按元素类型用 items 描述。当数组里混了不同结构时,工具会根据能看到的元素来推断,所以样本越丰富,生成的 schema 越准确。',
      },
    ],
  },
  es: {
    ui: {
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'invalidJson': 'JSON inválido',
      'note': '🔒 100% en el cliente — tu JSON se analiza solo en tu navegador y nunca se envía a ningún servidor.',
      'pasteJson': 'Pega tu JSON',
      'schemaTitle': 'JSON Schema (Draft-07)',
    },
    useCases: [
      'generar JSON Schema desde JSON online',
      'generador de JSON Schema Draft-07',
      'inferir esquema desde un payload JSON',
      'generar campos obligatorios del JSON Schema',
    ],
    faqs: [
      {
        q: '¿Qué draft de JSON Schema genera?',
        a: 'Draft-07. Usa las palabras clave estándar type, properties, required e items que admiten todos los validadores importantes, así que el esquema encaja en la mayoría de pipelines de validación sin cambios.',
      },
      {
        q: '¿Cómo decide qué campos son obligatorios?',
        a: 'Un campo se marca como obligatorio cuando aparece en todos los objetos de los datos de muestra. Los ausentes en al menos un registro quedan como opcionales, lo que refleja cómo suelen ser los datos reales y evita sobre-restringir tu esquema.',
      },
      {
        q: '¿Maneja objetos anidados y arrays?',
        a: 'Sí. Los objetos anidados se convierten en properties anidadas, y los arrays se describen con items según el tipo de sus elementos. Cuando un array mezcla formas, la herramienta infiere a partir de los elementos visibles, así que muestras más ricas producen esquemas más precisos.',
      },
    ],
  },
  de: {
    ui: {
      'clear': 'Leeren',
      'copy': 'Kopieren',
      'invalidJson': 'Ungültiges JSON',
      'note': '🔒 100% clientseitig — dein JSON wird nur in deinem Browser analysiert und nie an einen Server gesendet.',
      'pasteJson': 'Füge dein JSON ein',
      'schemaTitle': 'JSON Schema (Draft-07)',
    },
    useCases: [
      'JSON Schema aus JSON online erzeugen',
      'Draft-07 JSON-Schema-Generator',
      'Schema aus JSON-Payload ableiten',
      'Pflichtfelder im JSON-Schema erzeugen',
    ],
    faqs: [
      {
        q: 'Welchen JSON-Schema-Draft gibt es aus?',
        a: 'Draft-07. Es nutzt die Standard-Schlüsselwörter type, properties, required und items, die alle gängigen Validatoren unterstützen, sodass das Schema ohne Änderungen in die meisten Validations-Pipelines passt.',
      },
      {
        q: 'Wie wird entschieden, welche Felder erforderlich sind?',
        a: 'Ein Feld wird als erforderlich markiert, wenn es in jedem Objekt der Beispieldaten vorkommt. Fehlt es in mindestens einem Datensatz, bleibt es optional — das spiegelt echte Daten wider und überstrapaziert das Schema nicht.',
      },
      {
        q: 'Werden verschachtelte Objekte und Arrays behandelt?',
        a: 'Ja. Verschachtelte Objekte werden zu verschachtelten properties, Arrays über items anhand des Elementtyps beschrieben. Wenn ein Array unterschiedliche Strukturen mischt, leitet das Tool aus den sichtbaren Elementen ab — reichhaltigere Beispiele ergeben genauere Schemata.',
      },
    ],
  },
}
