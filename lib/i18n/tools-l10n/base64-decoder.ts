/**
 * base64-decoder 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const base64DecoderL10n: ToolL10n = {
  zh: {
    useCases: ['解码 JWT 令牌查看其 payload', '读取 HTML 或 CSS 中的 data URI', '调试包含 Base64 的 API 响应', '从邮件附件中恢复文本'],
    faqs: [
      { q: '能解码图片或文件吗?', a: '本工具只解码为文本。对于图片等二进制数据,输出可能是乱码,因为它是把二进制字节当作文本来显示。二进制内容请使用专门的 Base64 转文件工具。' },
    ],
  },
  es: {
    useCases: ['decodificar tokens JWT para inspeccionar su payload', 'leer data URIs de HTML o CSS', 'depurar respuestas de API que contienen Base64', 'recuperar texto de adjuntos de correo'],
    faqs: [
      { q: '¿Puedo decodificar imágenes o archivos?', a: 'Esta herramienta solo decodifica a texto. Para datos binarios como imágenes, la salida puede verse alterada porque son bytes binarios interpretados como texto. Usa un conversor dedicado de Base64 a archivo para contenido binario.' },
    ],
  },
  de: {
    useCases: ['JWT-Tokens decodieren, um ihren Payload zu prüfen', 'Data-URIs aus HTML oder CSS lesen', 'API-Antworten debuggen, die Base64 enthalten', 'Text aus E-Mail-Anhängen wiederherstellen'],
    faqs: [
      { q: 'Kann ich Bilder oder Dateien decodieren?', a: 'Dieses Tool decodiert nur zu Text. Für binäre Daten wie Bilder kann die Ausgabe verstümmelt aussehen, da binäre Bytes als Text interpretiert werden. Verwende für binäre Inhalte einen dedizierten Base64-zu-Datei-Konverter.' },
    ],
  },
}
