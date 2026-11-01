/**
 * base64-decoder 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const base64DecoderL10n: ToolL10n = {

  es: {
    ui: {
      'inputTooLarge': '⚠️ Entrada demasiado grande: el tamaño admitido es de hasta 100 000 caracteres. Recorta la entrada para convertir.',
      'invalidInput': '⚠️ Entrada no válida para esta dirección',
      'defaultInputDecode': 'SG9sYSBNdW5kbw==',
      'defaultInputEncode': 'Hola Mundo',
      'characters': 'caracteres',
      'clear': 'Limpiar',
      'swapToDecode': '⇄ Cambiar a decodificar',
      'swapToEncode': '⇄ Cambiar a codificar',
      'decode': 'Decodificar',
      'decodeInputLabel': 'Base64 a decodificar',
      'decodeNote': '🔓 Pega un Base64 válido para decodificar. Gestiona UTF-8 correctamente.',
      'decodeOutputLabel': 'Texto decodificado',
      'encode': 'Codificar',
      'encodeInputLabel': 'Texto a codificar',
      'encodeNote': '🔐 Base64 codifica datos binarios como texto. Común en correos, data URIs y APIs. Nota: NO es cifrado.',
      'encodeOutputLabel': 'Base64',
      'mode': 'Modo',
      'modeAria': 'Modo codificar/decodificar',
      'placeholder': 'Escribe o pega aquí…',
      'resultPlaceholder': 'El resultado aparecerá aquí…',
      'b64GenericErr': '⚠️ Base64 no válido: comprueba que nada se haya truncado o dañado al copiar y pegar',
      'b64UnexpectedChar': '⚠️ Base64 no válido: carácter inesperado «{c}» en la posición {n}; los caracteres válidos son A–Z a–z 0–9 + / - _ (el relleno = es opcional)',
      'encodeFailed': '⚠️ No se pudo codificar esta entrada',
      'words': 'palabras',
    },
    useCases: ['decodificar tokens JWT para inspeccionar su payload', 'leer data URIs de HTML o CSS', 'depurar respuestas de API que contienen Base64', 'recuperar texto de adjuntos de correo'],
    faqs: [
      { q: '¿Puedo decodificar imágenes o archivos?', a: 'Esta herramienta solo decodifica a texto. Para datos binarios como imágenes, la salida puede verse alterada porque son bytes binarios interpretados como texto. Usa un conversor dedicado de Base64 a archivo para contenido binario.' },
    ],
  },
  de: {
    ui: {
      'inputTooLarge': '⚠️ Eingabe zu groß – die unterstützte Größe beträgt maximal 100.000 Zeichen. Kürze die Eingabe.',
      'invalidInput': '⚠️ Ungültige Eingabe für diese Richtung',
      'defaultInputDecode': 'SGFsbG8gV2VsdA==',
      'defaultInputEncode': 'Hallo Welt',
      'characters': 'Zeichen',
      'clear': 'Leeren',
      'swapToDecode': '⇄ Zum Dekodieren wechseln',
      'swapToEncode': '⇄ Zum Kodieren wechseln',
      'decode': 'Dekodieren',
      'decodeInputLabel': 'Zu dekodierendes Base64',
      'decodeNote': '🔓 Gültiges Base64 zum Dekodieren einfügen. Behandelt UTF-8 korrekt.',
      'decodeOutputLabel': 'Dekodierter Text',
      'encode': 'Kodieren',
      'encodeInputLabel': 'Zu kodierender Text',
      'encodeNote': '🔐 Base64 kodiert Binärdaten als Text. Häufig in E-Mails, Data-URIs und APIs. Hinweis: Es ist KEINE Verschlüsselung.',
      'encodeOutputLabel': 'Base64',
      'mode': 'Modus',
      'modeAria': 'Modus Kodieren/Dekodieren',
      'placeholder': 'Hier eingeben oder einfügen…',
      'resultPlaceholder': 'Das Ergebnis erscheint hier…',
      'b64GenericErr': '⚠️ Ungültiges Base64 — prüfe, ob beim Kopieren etwas abgeschnitten oder verfälscht wurde',
      'b64UnexpectedChar': '⚠️ Ungültiges Base64 — unerwartetes Zeichen „{c}“ an Position {n}; erlaubt sind A–Z a–z 0–9 + / - _ (= als Auffüllung optional)',
      'encodeFailed': '⚠️ Diese Eingabe ließ sich nicht kodieren',
      'words': 'Wörter',
    },
    useCases: ['JWT-Tokens decodieren, um ihren Payload zu prüfen', 'Data-URIs aus HTML oder CSS lesen', 'API-Antworten debuggen, die Base64 enthalten', 'Text aus E-Mail-Anhängen wiederherstellen'],
    faqs: [
      { q: 'Kann ich Bilder oder Dateien decodieren?', a: 'Dieses Tool decodiert nur zu Text. Für binäre Daten wie Bilder kann die Ausgabe verstümmelt aussehen, da binäre Bytes als Text interpretiert werden. Verwende für binäre Inhalte einen dedizierten Base64-zu-Datei-Konverter.' },
    ],
  },
}
