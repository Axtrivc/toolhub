/**
 * base64-encoder 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const base64EncoderL10n: ToolL10n = {
  zh: {
    useCases: ['把文本编码成 Base64 用于邮件或 API', '生成嵌入 HTML/CSS 的 data URI', '为 JWT 令牌编码 header/payload', '在不支持二进制的文本系统中传输数据'],
    faqs: [
      { q: '为什么我的非英文文本显示乱码?', a: '本工具使用正确的 UTF-8 处理,所以重音字母和 emoji 都能正确编码。如果你看到乱码,很可能是你用的解码器假定了不同的字符编码。' },
    ],
  },
  es: {
    useCases: ['codificar texto a Base64 para correo o API', 'generar data URIs para incrustar en HTML/CSS', 'codificar el header/payload de tokens JWT', 'transportar datos por sistemas basados en texto que no admiten binario'],
    faqs: [
      { q: '¿Por qué mi texto no inglés se ve mal?', a: 'Esta herramienta usa un manejo UTF-8 correcto, así que letras acentuadas y emojis se codifican bien. Si ves mojibake, el decodificador que usas probablemente asume una codificación de caracteres distinta.' },
    ],
  },
  de: {
    useCases: ['Text für E-Mail oder API als Base64 codieren', 'Data-URIs zum Einbetten in HTML/CSS erzeugen', 'den Header/Payload von JWT-Tokens codieren', 'Daten über textbasierte Systeme transportieren, die kein Binär unterstützen'],
    faqs: [
      { q: 'Warum sieht mein nicht-englischer Text falsch aus?', a: 'Dieses Tool nutzt korrekte UTF-8-Behandlung, sodass akzentuierte Buchstaben und Emojis richtig codiert werden. Wenn du Zeichensalat siehst, nimmt der Decoder, den du verwendest, wahrscheinlich eine andere Zeichenkodierung an.' },
    ],
  },
}
