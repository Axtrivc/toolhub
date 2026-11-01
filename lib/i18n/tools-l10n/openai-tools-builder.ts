/**
 * openai-tools-builder 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(Schema 构建工具)。
 */
import type { ToolL10n } from '../tool-l10n'

export const OpenaiToolsBuilderL10n: ToolL10n = {

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
      'jsonLabel': 'JSON del array tools',
      'note': '🛠️ La salida coincide con el array tools de OpenAI (Anthropic tool-use lo acepta con pequeños cambios de claves). «integer» se mapea al integer de JSON Schema; los enum se convierten en uniones de cadena que el modelo debe respetar. La calidad de la descripción es lo que más pesa en la precisión de las llamadas.',
      'pDesc': 'Descripción del parámetro',
      'pEnum': 'Valores enum (separados por comas, opcional)',
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
      'Die Definition kopieren und mit ein paar umbenannten Schlüsseln zu Anthropic Tool-Use mitnehmen',
    ],
    faqs: [
      { q: 'Welches Format entsteht?', a: 'Das tools-Array der OpenAI-Chat-Completions-/Responses-API: jede Funktion mit name, description und einem parameters-Objekt in JSON Schema. Das Ergebnis lässt sich unverändert ins tools-Feld der Anfrage einfügen.' },
      { q: 'Warum ist die Beschreibung so entscheidend?', a: 'Das Modell entscheidet allein anhand von name und description, wann es ruft und welche Argumente es schickt. „Wetter abrufen“ verliert gegen „aktuelles Wetter einer Stadt abrufen; Stadt auf Englisch, z. B. Beijing“. Vage Beschreibungen sind der häufigste Grund für ausbleibende Function Calls.' },
      { q: 'integer oder number — wo liegt der Unterschied?', a: 'In JSON Schema erlaubt integer nur Ganzzahlen (Seitennummern, Mengen), number auch Fließkomma (Preise, Koordinaten). Die falsche Wahl lässt legitime Argumente an der Validierung scheitern: integer für Seiten, number für Beträge.' },
      { q: 'Was bewirkt das Häkchen bei required?', a: 'Markierte Parameter landen in parameters.required — das Modell muss sie bei jedem Aufruf liefern; die übrigen darf es weglassen. Faustregel: Nur Pflicht machen, was keinen sinnvollen Standardwert hat; der Rest bleibt optional und gibt dem Modell Spielraum.' },
    ],
    ui: {
      'addParam': 'Parameter hinzufügen',
      'copyJson': 'JSON kopieren',
      'fnDesc': 'Beschreibung (vom Modell gelesen)',
      'fnName': 'Funktionsname',
      'jsonLabel': 'tools-Array (JSON)',
      'note': '🛠️ Die Ausgabe entspricht dem OpenAI-tools-Array (auch Anthropic Tool-Use akzeptiert es mit kleinen Umbenennungen). „integer“ wird zum JSON-Schema-integer; Enums werden zu String-Unions, die das Modell einhalten muss. Die Qualität der Beschreibung ist der stärkste Hebel für Treffsicherheit.',
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
