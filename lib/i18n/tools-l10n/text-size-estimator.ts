/**
 * text-size-estimator 本地化 bundle —— zh / es / de
 * 覆盖:ui + faqs + useCases(交互客户端为 batch 文本工具)
 */
import type { ToolL10n } from '../tool-l10n'

export const textSizeEstimatorL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'Hola, este es un texto de ejemplo para medir.',
      inputLabel: 'Tu texto',
      outputLabel: 'Estimaciones de tamaño',
      note: '📏 Estima el tamaño de almacenamiento en distintas unidades. Útil antes de guardar texto en bases de datos o APIs.',
    },
    useCases: [
      'planificar tamaños VARCHAR de base de datos',
      'comprobar límites de carga útil de la API',
      'estimar costos de almacenamiento',
      'validar restricciones de campos de texto',
    ],
    faqs: [
      { q: '¿Por qué Base64 añade un 33 %?', a: 'Base64 codifica 3 bytes como 4 caracteres. El tamaño crece 4/3 ≈ 1,33. Esta es la sobrecarga estándar para incrustar datos binarios en formatos de texto.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'Hallo, dies ist ein Beispieltext zum Messen.',
      inputLabel: 'Dein Text',
      outputLabel: 'Größenschätzungen',
      note: '📏 Schätzt die Speichergröße in verschiedenen Einheiten. Nützlich vor dem Speichern von Text in Datenbanken oder APIs.',
    },
    useCases: [
      'VARCHAR-Größen in der Datenbank planen',
      'API-Payload-Limits prüfen',
      'Speicherkosten schätzen',
      'Textfeld-Beschränkungen validieren',
    ],
    faqs: [
      { q: 'Warum vergrößert Base64 um 33 %?', a: 'Base64 kodiert 3 Bytes als 4 Zeichen. Die Größe wächst um 4/3 ≈ 1,33. Das ist der Standardaufwand, um Binärdaten in Textformate einzubetten.' },
    ],
  },
}
