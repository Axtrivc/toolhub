/**
 * json-minifier 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const jsonMinifierL10n: ToolL10n = {

  es: {
    ui: {
      inputTooLarge: '⚠️ Entrada demasiado grande: el tamaño admitido es de hasta 200 000 caracteres. Recorta la entrada para calcular.',
      defaultInput: '{\n  "nombre": "Juan",\n  "edad": 30\n}',
      inputLabel: 'JSON (con formato)',
      outputLabel: 'JSON minificado',
      note: '📦 Elimina todos los espacios para minimizar el tamaño del JSON. Para payloads de API y almacenamiento.',
    },
    useCases: [
      'respuestas de API (a menudo además comprimidas con gzip)',
      'JSON incrustado en HTML o JavaScript',
      'configuraciones almacenadas en bases de datos',
      'aplicaciones móviles sensibles al ancho de banda',
    ],
    faqs: [
      { q: '¿La minificación rompe algo?', a: 'No. Los espacios en blanco no son significativos en la sintaxis JSON. El JSON minificado se analiza igual que el JSON con formato. Volver a minificar JSON ya minificado no produce cambios.' },
    ],
  },
  de: {
    ui: {
      inputTooLarge: '⚠️ Eingabe zu groß – die unterstützte Größe beträgt maximal 200.000 Zeichen. Kürze die Eingabe.',
      defaultInput: '{\n  "name": "Max",\n  "alter": 30\n}',
      inputLabel: 'JSON (formatiert)',
      outputLabel: 'Minimiertes JSON',
      note: '📦 Entfernt sämtliche Leerzeichen, um die JSON-Größe zu minimieren. Für API-Payloads und Speicherung.',
    },
    useCases: [
      'API-Antworten (oft zusätzlich gzip-komprimiert)',
      'Eingebettetes JSON in HTML oder JavaScript',
      'In Datenbanken gespeicherte Konfigurationen',
      'Bandbreitenkritische mobile Apps',
    ],
    faqs: [
      { q: 'Macht Minimierung etwas kaputt?', a: 'Nein. Leerzeichen sind in der JSON-Syntax nicht bedeutend. Minimiertes JSON wird genauso geparst wie formatiertes JSON. Bereits minimiertes JSON erneut zu minimieren ist ein No-Op.' },
    ],
  },
}
