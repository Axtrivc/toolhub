/**
 * hmac-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HmacGeneratorL10n: ToolL10n = {

  es: {
    useCases: ['verificar firmas HMAC de webhooks', 'generar firmas para peticiones de API', 'reproducir la firma HS256 de un JWT', 'obtener el digest de una clave y un mensaje'],
    faqs: [
      { q: '¿En qué se diferencia HMAC de un hash?', a: 'Un SHA-256 sencillo depende solo del mensaje: cualquiera puede calcularlo. HMAC mezcla una clave secreta, así que el digest demuestra posesión de esa clave y no se puede falsificar — por eso las APIs autentican webhooks y peticiones firmadas con HMAC.' },
      { q: '¿Qué algoritmo elijo?', a: 'SHA-256 es el estándar de facto en todas partes: verificadores de webhooks, JWT HS256, firmas estilo AWS. SHA-384 y SHA-512 quedan para los sistemas que los adoptan como estándar. Aquí los tres van por WebCrypto, con las primitivas criptográficas nativas del navegador y no una reimplementación en JS.' },
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
