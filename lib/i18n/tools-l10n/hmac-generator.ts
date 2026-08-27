/**
 * hmac-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HmacGeneratorL10n: ToolL10n = {
  zh: {
    useCases: ['验证 Webhook 的 HMAC 签名', '生成 API 请求签名', '比对 JWT HS256 的签名算法', '查密钥+消息对应的摘要'],
    faqs: [
      { q: 'HMAC 和普通哈希有什么区别?', a: '单纯的 SHA-256 只取决于消息,任何人都能算。HMAC 混入了密钥,摘要因此证明持有该密钥、无法伪造——这正是 API 用 HMAC 认证 Webhook 和签名请求的原因。' },
      { q: '该选哪个算法?', a: 'SHA-256 是各处的事实默认——Webhook 校验、JWT HS256、AWS 风格签名。SHA-384/512 服务于按其标准化的系统。这里三种都走 WebCrypto,用的是浏览器原生密码学原语,而非 JS 重实现。' },
      { q: '密钥会离开页面吗?', a: '不会。签名在浏览器内完成;密钥与消息不会被发送到任何地方,也不会存储。WebCrypto 需要 HTTPS(或 localhost)——若环境不安全,工具会提示。' },
      { q: '为什么同时给 hex 和 base64?', a: '不同系统期待不同编码:Webhook 文档通常展示 hex 摘要,JWT 段用 base64url,有些 API 要 base64。这里的两种输出是同一份摘要字节,校验方要哪种就复制哪种。' },
    ],
    ui: {
      'algoLabel': '算法',
      'copyHex': '复制 hex',
      'copyB64': '复制 base64',
      'insecureContext': 'WebCrypto 需要 HTTPS 或 localhost',
      'messageLabel': '消息',
      'note': '🔐 HMAC ≠ 哈希:签名同时依赖消息与密钥,攻击者没有密钥就无法伪造。用原生 WebCrypto 计算——密钥绝不离开本页。',
      'secretLabel': '密钥',
    },
  },
  es: {
    useCases: ['verificar firmas HMAC de webhooks', 'generar firmas para peticiones de API', 'reproducir la firma HS256 de un JWT', 'obtener el digest de una clave y un mensaje'],
    faqs: [
      { q: '¿En qué se diferencia HMAC de un hash?', a: 'Un SHA-256 sencillo depende solo del mensaje: cualquiera puede calcularlo. HMAC mezcla una clave secreta, así que el digest demuestra posesión de esa clave y no se puede falsificar — por eso las APIs autentican webhooks y peticiones firmadas con HMAC.' },
      { q: '¿Qué algoritmo elijo?', a: 'SHA-256 es el estándar de facto en todas partes: verificadores de webhooks, JWT HS256, firmas estilo AWS. SHA-384 y SHA-512 quedan para sistemas normalizados sobre ellos. Aquí los tres van por WebCrypto, con las primitivas criptográficas nativas del navegador y no una reimplementación en JS.' },
      { q: '¿Mi secreto sale de la página?', a: 'No. La firma ocurre en tu navegador; el secreto y el mensaje no se envían ni se guardan en ningún sitio. WebCrypto exige HTTPS (o localhost) — si el contexto no es seguro, la herramienta te lo dice.' },
      { q: '¿Por qué salidas hex y base64?', a: 'Cada sistema espera una codificación: la documentación de webhooks suele mostrar digests hex, los segmentos JWT usan base64url y algunas APIs piden base64. Ambas salidas son los mismos bytes del digest: copia la que espere tu verificador.' },
    ],
    ui: {
      'algoLabel': 'Algoritmo',
      'copyHex': 'Copiar hex',
      'copyB64': 'Copiar base64',
      'insecureContext': 'WebCrypto requiere HTTPS o localhost',
      'messageLabel': 'Mensaje',
      'note': '🔐 HMAC ≠ hash: la firma depende del mensaje y del secreto; sin la clave no se puede falsificar. Con WebCrypto nativo — el secreto no sale de aquí.',
      'secretLabel': 'Clave secreta',
    },
  },
  de: {
    useCases: ['HMAC-Signaturen von Webhooks verifizieren', 'Signaturen für API-Anfragen erzeugen', 'die HS256-Signatur eines JWT nachvollziehen', 'den Digest aus Schlüssel und Nachricht holen'],
    faqs: [
      { q: 'Worin unterscheidet sich HMAC von Hashing?', a: 'Ein nackter SHA-256-Hash hängt nur von der Nachricht ab — jeder kann ihn berechnen. HMAC mischt einen geheimen Schlüssel ein, der Digest beweist also den Besitz dieses Schlüssels und ist nicht fälschbar; deshalb authentifizieren APIs Webhooks und signierte Requests per HMAC.' },
      { q: 'Welchen Algorithmus soll ich wählen?', a: 'SHA-256 ist überall der De-facto-Standard: Webhook-Verifier, JWT HS256, AWS-artige Signaturen. SHA-384 und SHA-512 dienen Systemen, die darauf normiert sind. Alle drei laufen hier über WebCrypto — mit den nativen Krypto-Primitiven des Browsers, nicht mit einer JS-Reimplementierung.' },
      { q: 'Verlässt mein Secret die Seite?', a: 'Nein. Signiert wird im Browser; Secret und Nachricht werden nirgendwohin gesendet oder gespeichert. WebCrypto verlangt HTTPS (oder localhost) — ist der Kontext unsicher, sagt dir das Werkzeug Bescheid.' },
      { q: 'Warum hex- und base64-Ausgaben?', a: 'Systeme erwarten unterschiedliche Kodierungen: Webhook-Dokus zeigen meist Hex-Digests, JWT-Segmente nutzen base64url, manche APIs wollen base64. Beide Ausgaben sind dieselben Digest-Bytes — kopiere die Form, die dein Verifier erwartet.' },
    ],
    ui: {
      'algoLabel': 'Algorithmus',
      'copyHex': 'Hex kopieren',
      'copyB64': 'Base64 kopieren',
      'insecureContext': 'WebCrypto erfordert HTTPS oder localhost',
      'messageLabel': 'Nachricht',
      'note': '🔐 HMAC ≠ Hash: die Signatur hängt an Nachricht und Schlüssel; ohne Schlüssel nicht fälschbar. Native WebCrypto — der Schlüssel verlässt die Seite nie.',
      'secretLabel': 'Geheimschlüssel',
    },
  },
}
