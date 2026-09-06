/**
 * openai-tools-builder 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(Schema 构建工具)。
 */
import type { ToolL10n } from '../tool-l10n'

export const OpenaiToolsBuilderL10n: ToolL10n = {
  zh: {
    useCases: [
      '为 function calling 起草 tools 数组:可视化填函数名、描述、参数,复制即用',
      '把已有 REST API 的参数文档快速转写成 JSON Schema parameters 块',
      '用枚举参数把模型输出锁死在固定取值(如 sentiment 只能是 positive/negative/neutral)',
      '写好的定义复制后略改键名,直接迁移到 Anthropic 的 tool-use 格式',
    ],
    faqs: [
      { q: '输出的是什么格式?', a: 'OpenAI Chat Completions / Responses API 的 tools 数组:每个函数含 name、description 和符合 JSON Schema 的 parameters 对象。复制结果可直接粘贴进 API 请求的 tools 字段,零改动可用。' },
      { q: '为什么描述(description)这么重要?', a: '模型完全靠 name 和 description 判断"何时调用、传什么参数"。描述写"获取天气"不如写"获取指定城市的实时天气,城市用英文拼写,如 Beijing"。模糊描述是 function calling 不触发的头号原因。' },
      { q: 'integer 和 number 有什么区别?', a: 'JSON Schema 里 integer 只允许整数(如分页页码、数量),number 允许浮点(如价格、经纬度)。选错类型会让合法参数被校验拒绝——页码用 integer,金额用 number。' },
      { q: 'required 勾选意味着什么?', a: '勾选的参数名会进入 parameters.required 数组,模型每次调用都必须给出这些值;未勾选的参数模型可以省略。经验法则:没有合理默认值的参数才设为必填,其余保持可选让模型灵活处理。' },
    ],
    ui: {
      'addParam': '添加参数',
      'copyJson': '复制 JSON',
      'fnDesc': '描述（模型可见）',
      'fnName': '函数名',
      'note': '🛠️ 输出符合 OpenAI tools 数组（Anthropic tool-use 略改键名即可用）。“integer” 映射为 JSON Schema 的 integer；枚举会变成模型必须遵守的字符串联合类型。描述写得越清楚，模型调用越准。',
      'pDesc': '参数描述',
      'pEnum': '枚举值（逗号分隔，可选）',
      'pName': '参数名',
      'pType': '类型',
      'paramsLabel': '参数',
      'removeParam': '删除参数',
      'required': '必填',
    },
  },
  es: {
    useCases: [
      'Redactar el array tools para function calling: nombre, descripción y parámetros en visual, copiar y usar',
      'Transcribir rápido la documentación de parámetros de una REST API a un bloque parameters de JSON Schema',
      'Bloquear la salida del modelo con enums (p. ej., sentiment solo positive/negative/neutral)',
      'Migrar la definición a Anthropic tool-use copiando y renombrando un par de claves',
    ],
    faqs: [
      { q: '¿Qué formato produce?', a: 'El array tools de la API de Chat Completions / Responses de OpenAI: cada función con name, description y un objeto parameters en JSON Schema. El resultado se pega tal cual en el campo tools de la petición, sin retoques.' },
      { q: '¿Por qué importa tanto la descripción?', a: 'El modelo decide cuándo llamar y con qué argumentos basándose solo en name y description. «Obtener el tiempo» es peor que «Obtener el tiempo actual de una ciudad; escribe la ciudad en inglés, p. ej. Beijing». Una descripción vaga es la causa n.º 1 de que el function calling no se dispare.' },
      { q: '¿Diferencia entre integer y number?', a: 'En JSON Schema, integer solo admite enteros (páginas, cantidades) y number admite decimales (precios, coordenadas). Elegir mal hace que la validación rechace argumentos legítimos: integer para páginas, number para importes.' },
      { q: '¿Qué implica marcar required?', a: 'Los parámetros marcados entran en parameters.required y el modelo debe proporcionarlos en cada llamada; los demás puede omitirlos. Regla práctica: solo es obligatorio lo que no tiene un valor por defecto razonable — el resto, opcional para dar flexibilidad.' },
    ],
    ui: {
      'addParam': 'Añadir parámetro',
      'copyJson': 'Copiar JSON',
      'fnDesc': 'Descripción (lo que ve el modelo)',
      'fnName': 'Nombre de función',
      'note': '🛠️ La salida coincide con el array tools de OpenAI (Anthropic tool-use lo acepta con pequeños cambios de claves). «integer» se mapea al integer de JSON Schema; los enum se convierten en uniones de cadena que el modelo debe respetar. La calidad de la descripción manda a la hora de llamar bien.',
      'pDesc': 'Descripción del parámetro',
      'pEnum': 'Valores enum (separados por comas)',
      'pName': 'Nombre del parámetro',
      'pType': 'Tipo',
      'paramsLabel': 'Parámetros',
      'removeParam': 'Eliminar parámetro',
      'required': 'oblig.',
    },
  },
  de: {
    useCases: [
      'Das tools-Array für Function Calling entwerfen: Name, Beschreibung und Parameter visuell ausfüllen, kopieren, fertig',
      'Die Parameter-Doku einer bestehenden REST-API flott in einen JSON-Schema-parameters-Block übertragen',
      'Modellausgaben per Enum auf feste Werte pinnen (z. B. sentiment nur positive/negative/neutral)',
      'Die Definition kopieren und mit zwei umbenannten Schlüsseln zu Anthropic Tool-Use mitnehmen',
    ],
    faqs: [
      { q: 'Welches Format entsteht?', a: 'Das tools-Array der OpenAI-Chat-Completions-/Responses-API: jede Funktion mit name, description und einem parameters-Objekt in JSON Schema. Das Ergebnis lässt sich unverändert ins tools-Feld der Anfrage einfügen.' },
      { q: 'Warum ist die Beschreibung so entscheidend?', a: 'Das Modell entscheidet allein anhand von name und description, wann es ruft und welche Argumente es schickt. „Wetter abrufen" verliert gegen „aktuelles Wetter einer Stadt abrufen; Stadt auf Englisch, z. B. Beijing". Vage Beschreibungen sind der häufigste Grund für ausbleibende Function Calls.' },
      { q: 'integer oder number — wo liegt der Unterschied?', a: 'In JSON Schema erlaubt integer nur Ganzzahlen (Seitennummern, Mengen), number auch Fließkomma (Preise, Koordinaten). Die falsche Wahl lässt legitime Argumente an der Validierung scheitern: integer für Seiten, number für Beträge.' },
      { q: 'Was bewirkt das Häkchen bei required?', a: 'Markierte Parameter landen in parameters.required — das Modell muss sie bei jedem Aufruf liefern; die übrigen darf es weglassen. Faustregel: Nur Pflicht machen, was keinen sinnvollen Standardwert hat; der Rest bleibt optional und gibt dem Modell Spielraum.' },
    ],
    ui: {
      'addParam': 'Parameter hinzufügen',
      'copyJson': 'JSON kopieren',
      'fnDesc': 'Beschreibung (vom Modell gelesen)',
      'fnName': 'Funktionsname',
      'note': '🛠️ Die Ausgabe entspricht dem OpenAI-tools-Array (auch Anthropic Tool-Use akzeptiert es mit kleinen Umbenennungen). „integer" wird zum JSON-Schema-integer; Enums werden zu String-Unions, die das Modell einhalten muss. Die Qualität der Beschreibung ist der stärkste Hebel für Treffsicherheit.',
      'pDesc': 'Parameterbeschreibung',
      'pEnum': 'Enum-Werte (kommagetrennt, optional)',
      'pName': 'Parametername',
      'pType': 'Typ',
      'paramsLabel': 'Parameter',
      'removeParam': 'Parameter entfernen',
      'required': 'Pflicht',
    },
  },
}
