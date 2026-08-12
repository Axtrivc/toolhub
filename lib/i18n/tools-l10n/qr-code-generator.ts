/**
 * qr-code-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = QRCodeGeneratorClient = 自定义 client,无需 slug)
 */
import type { ToolL10n } from '../tool-l10n'

export const qrCodeGeneratorL10n: ToolL10n = {
  zh: {
    useCases: [
      '网址转二维码生成器',
      '免费在线二维码制作',
      '生成 WiFi 二维码',
      '二维码下载 PNG/SVG',
    ],
    faqs: [
      { q: '这些二维码会过期吗?', a: '不会。因为数据直接编码在图案里,静态二维码永远不会过期、也永远能正常扫描。只要内容本身(比如一个网址)仍然有效,这个二维码就能一直用下去。' },
      { q: '能编码的数据量有限制吗?', a: '有。单个二维码最多大约能存 4,000 个字母数字字符或 2,900 字节的二进制数据。对网址和 WiFi 凭据来说绰绰有余。如果尝试编码很长的文本,图案会变得更密、更难扫描。' },
      { q: '二维码安全吗?', a: '二维码本身只是传递文本的一种方式——它本身既不安全也不危险。风险在于恶意二维码可能链接到钓鱼网站。作为用户,要把扫描到的链接当作普通链接一样谨慎对待;作为创建者,只链接到你拥有并信任的目标。' },
    ],
  },
  es: {
    useCases: [
      'generador de código QR para URL',
      'creador de códigos QR online gratis',
      'crear un código QR de WiFi',
      'descargar código QR en PNG o SVG',
    ],
    faqs: [
      { q: '¿Estos códigos QR caducan?', a: 'No. Como los datos van incrustados directamente en el código, los códigos QR estáticos nunca caducan ni dejan de funcionar. Mientras el contenido mismo (como una URL) siga siendo válido, el código se escaneará para siempre.' },
      { q: '¿Hay un límite de datos que puedo codificar?', a: 'Sí. Un único código QR almacena hasta aproximadamente 4.000 caracteres alfanuméricos o 2.900 bytes de datos binarios. Para URLs y credenciales WiFi es más que suficiente. Si intentas codificar un texto muy largo, el código se vuelve más denso y difícil de escanear.' },
      { q: '¿Son seguros los códigos QR?', a: 'Los códigos QR por sí solos son solo una forma de entregar texto: no son ni seguros ni peligrosos en sí mismos. El riesgo es que un código malicioso pueda enlazar a un sitio de phishing. Como usuario, trata los enlaces escaneados con la misma cautela que cualquier otro enlace. Como creador, enlaza solo a destinos que controlas y en los que confías.' },
    ],
  },
  de: {
    useCases: [
      'QR-Code-Generator für URLs',
      'kostenlos online QR-Codes erstellen',
      'einen WLAN-QR-Code erzeugen',
      'QR-Code als PNG oder SVG herunterladen',
    ],
    faqs: [
      { q: 'Verfallen diese QR-Codes?', a: 'Nein. Da die Daten direkt im Code eingebettet sind, verfallen statische QR-Codes nie und funktionieren dauerhaft. Solange der Inhalt selbst (etwa eine URL) gültig bleibt, lässt sich der Code für immer scannen.' },
      { q: 'Gibt es ein Limit, wie viel Daten ich kodieren kann?', a: 'Ja. Ein einzelner QR-Code fasst grob 4.000 alphanumerische Zeichen oder 2.900 Byte Binärdaten. Für URLs und WLAN-Zugangsdaten reicht das mehr als aus. Wenn du einen sehr langen Text kodierst, wird der Code dichter und schwerer zu scannen.' },
      { q: 'Sind QR-Codes sicher?', a: 'QR-Codes sind selbst nur ein Weg, Text zu übermitteln – sie sind weder sicher noch gefährlich. Das Risiko besteht darin, dass ein böswilliger Code auf eine Phishing-Seite verlinken könnte. Als Nutzer behandle gescannte Links mit derselben Vorsicht wie jeden anderen Link. Als Ersteller verlinke nur auf Ziele, die du kontrollierst und vertraust.' },
    ],
  },
}
