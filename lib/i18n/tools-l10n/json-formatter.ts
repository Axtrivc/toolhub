/**
 * json-formatter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const jsonFormatterL10n: ToolL10n = {

  es: {
    ui: {
      inputTooLarge: '⚠️ Entrada demasiado grande: el tamaño admitido es de hasta 200 000 caracteres. Recorta la entrada para calcular.',
      defaultInput: '{"nombre":"Juan","edad":30,"ciudad":"Madrid","habilidades":["js","css"]}',
      inputLabel: 'JSON (crudo o minificado)',
      outputLabel: 'JSON con formato',
      note: '🔧 Formatea y embellece JSON con sangría de 2 espacios. Valida la sintaxis — los errores se muestran con un mensaje.',
    },
    useCases: ['depurar respuestas JSON de una API', 'leer y organizar archivos de configuración', 'revisar payloads grandes durante el desarrollo', 'detectar errores de sintaxis JSON antes del despliegue'],
    faqs: [
      { q: '¿Diferencia entre JSON, JSON5 y JSONC?', a: 'El JSON estándar es estricto. JSON5 permite comentarios, comas finales y claves sin comillas. JSONC es JSON con comentarios (usado por VS Code). Este formateador espera JSON estándar.' },
    ],
  },
  de: {
    ui: {
      inputTooLarge: '⚠️ Eingabe zu groß – die unterstützte Größe beträgt maximal 200.000 Zeichen. Kürze die Eingabe.',
      defaultInput: '{"name":"Max","alter":30,"stadt":"Berlin","skills":["js","css"]}',
      inputLabel: 'JSON (roh oder minimiert)',
      outputLabel: 'Formatiertes JSON',
      note: '🔧 Formatiert JSON mit 2-Leerzeichen-Einrückung. Prüft die Syntax — bei Fehlern erscheint eine Meldung.',
    },
    useCases: ['JSON-Antworten einer API debuggen', 'Konfigurationsdateien lesen und ordnen', 'Große Payloads während der Entwicklung prüfen', 'JSON-Syntaxfehler vor dem Deployment finden'],
    faqs: [
      { q: 'Was ist der Unterschied zwischen JSON, JSON5 und JSONC?', a: 'Standard-JSON ist streng. JSON5 erlaubt Kommentare, nachgestellte Kommas und Schlüssel ohne Anführungszeichen. JSONC ist JSON mit Kommentaren (von VS Code verwendet). Dieser Formatter erwartet Standard-JSON.' },
    ],
  },
}
