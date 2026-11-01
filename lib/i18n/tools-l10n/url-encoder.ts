/**
 * url-encoder 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为共享 EncoderDecoderTool,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const urlEncoderL10n: ToolL10n = {

  es: {
    ui: {
      'inputTooLarge': '⚠️ Entrada demasiado grande: el tamaño admitido es de hasta 100 000 caracteres. Recorta la entrada para convertir.',
      'invalidInput': '⚠️ Entrada no válida para esta dirección',
      'defaultInputDecode': 'hola%20mundo',
      'defaultInputEncode': 'hola mundo',
      'characters': 'caracteres',
      'clear': 'Limpiar',
      'swapToDecode': '⇄ Cambiar a decodificar',
      'swapToEncode': '⇄ Cambiar a codificar',
      'componentMode': 'Componente (encodeURIComponent)',
      'decode': 'Decodificar',
      'decodeInputLabel': 'Texto URL codificado',
      'decodeNote': '🔗 Decodifica %20 a espacios, %26 a &, etc.',
      'decodeOutputLabel': 'Decodificado',
      'encode': 'Codificar',
      'encodeInputLabel': 'Texto a codificar',
      'encodeNote': '🔗 Codifica caracteres especiales para uso seguro en URLs. Los espacios pasan a %20, & a %26.',
      'encodeOutputLabel': 'URL codificado',
      'fullUriMode': 'URI completa (encodeURI)',
      'invalidEscape': '⚠️ Secuencia porcentual no válida: debe tener la forma %XX (dos dígitos hexadecimales)',
      'mode': 'Modo',
      'modeAria': 'Modo codificar/decodificar',
      'plusToSpace': 'Tratar + como espacio al decodificar',
      'placeholder': 'Escribe o pega aquí…',
      'resultPlaceholder': 'El resultado aparecerá aquí…',
      'strayPercent': '⚠️ "%" suelto en la posición {n}: los escapes porcentuales necesitan dos dígitos hexadecimales, como %20 o %26',
      'uriTarget': 'Objetivo',
      'words': 'palabras',
    },
    useCases: [
      'codificar valores de parámetros de consulta para usarlos en una URL',
      'gestionar caracteres especiales como espacios, & y =',
      'construir cadenas de consulta para peticiones API',
      'escapar texto no ASCII para URLs',
    ],
    faqs: [
      { q: '¿Debo codificar la URL completa o solo los parámetros?', a: 'Codifica solo los valores individuales de los parámetros, no la URL completa. Codificar toda la URL rompería los /, ? y & que definen su estructura.' },
    ],
  },
  de: {
    ui: {
      'inputTooLarge': '⚠️ Eingabe zu groß – die unterstützte Größe beträgt maximal 100.000 Zeichen. Kürze die Eingabe.',
      'invalidInput': '⚠️ Ungültige Eingabe für diese Richtung',
      'defaultInputDecode': 'hallo%20welt',
      'defaultInputEncode': 'hallo welt',
      'characters': 'Zeichen',
      'clear': 'Leeren',
      'swapToDecode': '⇄ Zum Dekodieren wechseln',
      'swapToEncode': '⇄ Zum Kodieren wechseln',
      'componentMode': 'Komponente (encodeURIComponent)',
      'decode': 'Dekodieren',
      'decodeInputLabel': 'URL-kodierter Text',
      'decodeNote': '🔗 Dekodiert %20 zu Leerzeichen, %26 zu & usw.',
      'decodeOutputLabel': 'Dekodiert',
      'encode': 'Kodieren',
      'encodeInputLabel': 'Zu kodierender Text',
      'encodeNote': '🔗 Kodiert Sonderzeichen zur sicheren Nutzung in URLs. Leerzeichen werden %20, & wird %26.',
      'encodeOutputLabel': 'URL-kodiert',
      'fullUriMode': 'Vollständige URI (encodeURI)',
      'invalidEscape': '⚠️ Ungültige Prozent-Escape-Folge — sie muss wie %XX aussehen (zwei Hex-Ziffern)',
      'mode': 'Modus',
      'modeAria': 'Modus Kodieren/Dekodieren',
      'plusToSpace': '+ beim Dekodieren als Leerzeichen behandeln',
      'placeholder': 'Hier eingeben oder einfügen…',
      'resultPlaceholder': 'Das Ergebnis erscheint hier…',
      'strayPercent': '⚠️ Verwaistes „%“ an Position {n} — Prozent-Escapes brauchen zwei Hex-Ziffern, wie %20 oder %26',
      'uriTarget': 'Ziel',
      'words': 'Wörter',
    },
    useCases: [
      'Query-Parameterwerte für die sichere Nutzung in URLs kodieren',
      'Sonderzeichen wie Leerzeichen, & und = behandeln',
      'Query-Strings für API-Anfragen erstellen',
      'Nicht-ASCII-Text für URLs escapen',
    ],
    faqs: [
      { q: 'Soll ich die gesamte URL oder nur die Parameter kodieren?', a: 'Kodiere einzelne Parameterwerte, nicht die gesamte URL. Die Kodierung der ganzen URL würde die /, ? und & zerstören, die ihre Struktur definieren.' },
    ],
  },
}
