/**
 * base64-decoder 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const base64DecoderL10n: ToolL10n = {
  zh: {
    ui: {
      'defaultInputDecode': '5L2g5aW9',
      'defaultInputEncode': '你好',
      'characters': '字符',
      'clear': '清空',
      'decode': '解码',
      'decodeInputLabel': '要解码的 Base64',
      'decodeNote': '🔓 粘贴合法的 Base64 来解码。能正确处理 UTF-8。',
      'decodeOutputLabel': '解码后的文本',
      'encode': '编码',
      'encodeInputLabel': '要编码的文本',
      'encodeNote': '🔐 Base64 把二进制数据编码成文本。常见于邮件、data URI 和 API。注意:它不是加密。',
      'encodeOutputLabel': 'Base64',
      'mode': '模式',
      'modeAria': '编码/解码模式',
      'placeholder': '在此输入或粘贴…',
      'resultPlaceholder': '结果将显示在这里…',
      'words': '词',
    },
    useCases: ['解码 JWT 令牌查看其 payload', '读取 HTML 或 CSS 中的 data URI', '调试包含 Base64 的 API 响应', '从邮件附件中恢复文本'],
    faqs: [
      { q: '能解码图片或文件吗?', a: '本工具只解码为文本。对于图片等二进制数据,输出可能是乱码,因为它是把二进制字节当作文本来显示。二进制内容请使用专门的 Base64 转文件工具。' },
    ],
  },
  es: {
    ui: {
      'defaultInputDecode': 'SG9sYSBNdW5kbw==',
      'defaultInputEncode': 'Hola Mundo',
      'characters': 'caracteres',
      'clear': 'Limpiar',
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
      'words': 'palabras',
    },
    useCases: ['decodificar tokens JWT para inspeccionar su payload', 'leer data URIs de HTML o CSS', 'depurar respuestas de API que contienen Base64', 'recuperar texto de adjuntos de correo'],
    faqs: [
      { q: '¿Puedo decodificar imágenes o archivos?', a: 'Esta herramienta solo decodifica a texto. Para datos binarios como imágenes, la salida puede verse alterada porque son bytes binarios interpretados como texto. Usa un conversor dedicado de Base64 a archivo para contenido binario.' },
    ],
  },
  de: {
    ui: {
      'defaultInputDecode': 'SGFsbG8gV2VsdA==',
      'defaultInputEncode': 'Hallo Welt',
      'characters': 'Zeichen',
      'clear': 'Leeren',
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
      'words': 'Wörter',
    },
    useCases: ['JWT-Tokens decodieren, um ihren Payload zu prüfen', 'Data-URIs aus HTML oder CSS lesen', 'API-Antworten debuggen, die Base64 enthalten', 'Text aus E-Mail-Anhängen wiederherstellen'],
    faqs: [
      { q: 'Kann ich Bilder oder Dateien decodieren?', a: 'Dieses Tool decodiert nur zu Text. Für binäre Daten wie Bilder kann die Ausgabe verstümmelt aussehen, da binäre Bytes als Text interpretiert werden. Verwende für binäre Inhalte einen dedizierten Base64-zu-Datei-Konverter.' },
    ],
  },
}
