/**
 * json-schema-generator 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const jsonSchemaGeneratorL10n: ToolL10n = {

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
      'generar campos obligatorios para JSON Schema',
    ],
    faqs: [
      {
        q: '¿Qué draft de JSON Schema genera?',
        a: 'Draft-07. Usa las palabras clave estándar type, properties, required e items que admiten todos los validadores importantes, así que el esquema encaja en la mayoría de pipelines de validación sin cambios.',
      },
      {
        q: '¿Cómo decide qué campos son obligatorios?',
        a: 'Un campo se marca como obligatorio cuando aparece en todos los objetos de los datos de muestra. Los campos ausentes en al menos un registro quedan como opcionales, lo que refleja cómo suelen ser los datos reales y evita restringir en exceso tu esquema.',
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
        a: 'Ein Feld wird als erforderlich markiert, wenn es in jedem Objekt der Beispieldaten vorkommt. Fehlt es in mindestens einem Datensatz, bleibt es optional — das spiegelt echte Daten wider und schränkt dein Schema nicht unnötig ein.',
      },
      {
        q: 'Werden verschachtelte Objekte und Arrays behandelt?',
        a: 'Ja. Verschachtelte Objekte werden zu verschachtelten properties, und Arrays werden über items anhand des Elementtyps beschrieben. Wenn ein Array unterschiedliche Strukturen mischt, leitet das Tool aus den sichtbaren Elementen ab — reichhaltigere Beispiele ergeben genauere Schemata.',
      },
    ],
  },
}
