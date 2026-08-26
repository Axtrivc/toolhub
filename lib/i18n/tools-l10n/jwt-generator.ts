/**
 * jwt-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const JwtGeneratorL10n: ToolL10n = {
  zh: {
    useCases: ['本地生成 HS256 测试令牌', '调试 JWT 的 header/payload 结构', '给后端联调快速产 token', '验证签名算法是否与密钥匹配'],
    faqs: [
      { q: '支持哪些算法?', a: 'HS256、HS384、HS512——HMAC 家族,在浏览器里用 WebCrypto 签名。RS256/ES256 需要私钥,而私钥绝不能出现在前端代码里,所以非对称签名应在服务器或命令行完成。' },
      { q: '不填密钥能生成吗?', a: '能——密钥留空会得到未签名预览:base64url(header).base64url(payload) 加末尾一个点。用它看清校验方实际收到的内容很方便,但任何认证系统都不会接受它。' },
      { q: '在浏览器里签名安全吗?', a: '仅限测试与学习。浏览器页面里的密钥对任何打开开发者工具的人都可见,还会被打进生产包。在这里做 payload 原型和验证调试;生产签名请留在服务端。' },
      { q: '会往我的 header 里加东西吗?', a: '不会——header 就是你提供的 JSON;默认值含 typ 和 alg,但不会注入任何内容。部分校验方对 alg 与密钥的匹配很严格,请保持一致。' },
    ],
    ui: {
      'algErr': '此处仅支持 HS256/384/512',
      'copyToken': '复制令牌',
      'headerLabel': 'Header (JSON)',
      'insecure': 'WebCrypto 需要 HTTPS 或 localhost',
      'note': '🔑 仅用于测试:HS* 密钥在此完全在客户端,绝不要把密钥放进前端代码。RS256/ES256 请用服务端库——非对称签名必须保住私钥。',
      'payloadLabel': 'Payload (JSON)',
      'secretLabel': '签名密钥(留空则生成未签名预览)',
      'tokenLabel': '已签名令牌',
    },
  },
  es: {
    useCases: ['generar tokens HS256 de prueba en local', 'depurar la estructura header/payload de un JWT', 'producir tokens rápidos para integrar con el backend', 'comprobar que el algoritmo casa con la clave'],
    faqs: [
      { q: '¿Qué algoritmos están soportados?', a: 'HS256, HS384 y HS512 — la familia HMAC, firmados en tu navegador con WebCrypto. RS256/ES256 exigen una clave privada que jamás debe vivir en código frontend, así que la firma asimétrica pertenece al servidor o a la línea de comandos.' },
      { q: '¿Puedo generar token sin secreto?', a: 'Sí: deja el secreto vacío y obtienes la vista previa sin firma, base64url(header).base64url(payload) con el punto final. Sirve para ver exactamente qué recibirá un verificador, pero ningún sistema de autenticación lo aceptará.' },
      { q: '¿Es seguro firmar en el navegador?', a: 'Solo para pruebas y aprendizaje. Un secreto en una página del navegador lo ve cualquiera con devtools, y acabaría dentro del bundle de producción. Prototipa payloads y depura verificadores aquí; la firma real, en el servidor.' },
      { q: '¿Añade algo a mi header?', a: 'No: el header es exactamente el JSON que escribas; el valor por defecto incluye typ y alg, pero no se inyecta nada. Algunos verificadores son estrictos con que alg case con la clave — mantenlos coherentes.' },
    ],
    ui: {
      'algErr': 'Aquí solo se admite HS256/384/512',
      'copyToken': 'Copiar token',
      'headerLabel': 'Cabecera (JSON)',
      'insecure': 'WebCrypto requiere HTTPS o localhost',
      'note': '🔑 Solo para pruebas: los secretos HS* viven aquí en el cliente; nunca los envies al front-end. Para RS256/ES256 usa una librería de servidor.',
      'payloadLabel': 'Payload (JSON)',
      'secretLabel': 'Secreto de firma (vacío = vista previa sin firmar)',
      'tokenLabel': 'Token firmado',
    },
  },
  de: {
    useCases: ['HS256-Testtokens lokal erzeugen', 'die Header/Payload-Struktur eines JWT debuggen', 'schnell Tokens fürs Backend-Integration erzeugen', 'prüfen, ob Algorithmus und Schlüssel zusammenpassen'],
    faqs: [
      { q: 'Welche Algorithmen werden unterstützt?', a: 'HS256, HS384 und HS512 — die HMAC-Familie, im Browser per WebCrypto signiert. RS256/ES256 brauchen einen privaten Schlüssel, der nie in Frontend-Code gehören darf; asymmetrisches Signieren gehört auf Server oder CLI.' },
      { q: 'Geht es auch ohne Secret?', a: 'Ja — lass das Secret leer und du bekommst die unsignierte Vorschau: base64url(header).base64url(payload) mit abschließendem Punkt. Praktisch, um zu sehen, was ein Verifier erhält — akzeptiert wird es von keinem Auth-System.' },
      { q: 'Ist Signieren im Browser sicher?', a: 'Nur für Tests und Lernen. Ein Secret im Browser sieht jeder mit Devtools, und es landete im Produktions-Bundle. Prototypisiere Payloads und debugge Verifier hier — Produktivsignierung bleibt serverseitig.' },
      { q: 'Wird meinem Header etwas hinzugefügt?', a: 'Nein — der Header ist exakt dein JSON; der Default enthält typ und alg, injiziert wird nichts. Manche Verifier bestehen auf Konsistenz zwischen alg und Schlüssel — halte beides zusammenpassend.' },
    ],
    ui: {
      'algErr': 'Hier werden nur HS256/384/512 unterstützt',
      'copyToken': 'Token kopieren',
      'headerLabel': 'Header (JSON)',
      'insecure': 'WebCrypto erfordert HTTPS oder localhost',
      'note': '🔑 Nur zum Testen: HS*-Geheimnisse bleiben hier im Browser; niemals in Frontend-Code shippen. RS256/ES256: Server-Bibliothek nutzen.',
      'payloadLabel': 'Payload (JSON)',
      'secretLabel': 'Signaturgeheimnis (leer = unsignierte Vorschau)',
      'tokenLabel': 'Signiertes Token',
    },
  },
}
