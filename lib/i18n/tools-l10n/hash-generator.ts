/**
 * hash-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const hashGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'algorithm': '算法',
      'cryptoUnavailable': '⚠️ 此环境无法使用安全哈希(SubtleCrypto)——请通过 HTTPS 或 localhost 打开本页',
      'generateHashes': '# 生成哈希',
      'hashing': '哈希计算中…',
      'note': '🔐 使用 SubtleCrypto API(真正的加密哈希)。可选 SHA-256(默认)/SHA-384/SHA-512;SHA-1 在安全上已被攻破,仅限遗留校验用途。',
      'sha1Warning': '⚠️ 2017 年起已可构造碰撞——不适用于签名/证书,仅限遗留校验用途',
      'textToHash': '要哈希的文本',
    },
    useCases: [
      '校验文件完整性(下载后比对哈希)',
      '密码存储(网站保存哈希而非明文)',
      '数字签名(对哈希签名,而非整个文档)',
      '区块链与内容寻址(Bitcoin、IPFS)',
    ],
    faqs: [
      { q: '哈希能被解密吗?', a: '不能——这是设计使然。哈希是单向函数。「破解」哈希的唯一办法是逐一尝试输入直到匹配(暴力破解)。对 SHA-256 而言,任何合理长度的输入在计算上都不可行。' },
      { q: 'SHA-256 和 MD5、SHA-1 有什么区别?', a: 'MD5(128 位)和 SHA-1(160 位)都已被实际碰撞攻击攻破,不能再用于签名或证书;SHA-256 输出 256 位,至今没有可行的碰撞方法。校验下载文件时 MD5 尚可,安全场景一律用 SHA-256 或更高。' },
      { q: '两个不同的输入会得到同一个哈希吗?', a: '理论上会——哈希把无限输入映射到固定长度输出,这叫碰撞。但 SHA-256 找到一次碰撞约需 2^128 量级的运算,全球算力运行亿年也碰不到,工程上可视为不可能。' },
      { q: '存密码能直接用 SHA-256 吗?', a: '不能只用它。SHA-256 太快,攻击者每秒能试数十亿次。密码要用 bcrypt、scrypt 或 Argon2 这类故意设计得很慢、带盐的算法;本工具的 SHA-256 适合校验文件和生成指纹,不适合存密码。' },
    ],
  },
  es: {
    ui: {
      'algorithm': 'Algoritmo',
      'cryptoUnavailable': '⚠️ El hash seguro (SubtleCrypto) no está disponible en este contexto: abre esta página por HTTPS o en localhost',
      'generateHashes': '# Generar hashes',
      'hashing': 'Calculando hash…',
      'note': '🔐 Usa la API SubtleCrypto (hash criptográfico real). Elige SHA-256 (por defecto), SHA-384 o SHA-512; SHA-1 está roto para seguridad y se ofrece solo para checksums heredados.',
      'sha1Warning': '⚠️ Colisiones prácticas desde 2017 — no es seguro para firmas/certificados; solo para checksums heredados',
      'textToHash': 'Texto a hashear',
    },
    useCases: [
      'verificar la integridad de los archivos (comparar el hash tras la descarga)',
      'almacenar contraseñas (los sitios guardan hashes, no texto plano)',
      'firmas digitales (se firma el hash, no el documento completo)',
      'blockchain y direccionamiento por contenido (Bitcoin, IPFS)',
    ],
    faqs: [
      { q: '¿Se puede descifrar un hash?', a: 'No, por diseño. Los hashes son funciones unidireccionales. La única forma de «romper» un hash es probar entradas hasta que una coincida (fuerza bruta). Para SHA-256, esto es computacionalmente inviable para cualquier entrada de longitud razonable.' },
      { q: '¿En qué se diferencia SHA-256 de MD5 o SHA-1?', a: 'MD5 (128 bits) y SHA-1 (160 bits) están rotos por ataques prácticos de colisión y no sirven para firmas ni certificados. SHA-256 produce 256 bits y no se conoce colisión viable. Para verificar descargas MD5 aún vale, pero en seguridad usa SHA-256 o superior.' },
      { q: '¿Dos entradas distintas pueden dar el mismo hash?', a: 'En teoría sí: un hash mapea infinitas entradas a una salida de longitud fija, y eso se llama colisión. En SHA-256 la probabilidad es despreciable — del orden de 2^128 operaciones, fuera del alcance de toda la potencia de cómputo mundial durante siglos.' },
      { q: '¿Puedo guardar contraseñas con SHA-256 a secas?', a: 'No. SHA-256 es demasiado rápido: un atacante prueba miles de millones de contraseñas por segundo. Para contraseñas usa algoritmos lentos y con sal como bcrypt, scrypt o Argon2; este SHA-256 es ideal para checksums y huellas, no para credenciales.' },
    ],
  },
  de: {
    ui: {
      'algorithm': 'Algorithmus',
      'cryptoUnavailable': '⚠️ Sicheres Hashing (SubtleCrypto) ist in diesem Kontext nicht verfügbar — öffne diese Seite über HTTPS oder localhost',
      'generateHashes': '# Hashes erzeugen',
      'hashing': 'Hash wird berechnet…',
      'note': '🔐 Nutzt die SubtleCrypto-API (echtes kryptografisches Hashing). Wähle SHA-256 (Standard), SHA-384 oder SHA-512; SHA-1 ist für Sicherheit gebrochen und nur für Legacy-Prüfsummen verfügbar.',
      'sha1Warning': '⚠️ Seit 2017 praktische Kollisionen — nicht sicher für Signaturen/Zertifikate; nur für Legacy-Prüfsummen',
      'textToHash': 'Zu hashender Text',
    },
    useCases: [
      'Dateiintegrität prüfen (Hash nach dem Download abgleichen)',
      'Passwortspeicherung (Seiten speichern Hashes, nicht Klartext)',
      'digitale Signaturen (den Hash signieren, nicht das ganze Dokument)',
      'Blockchain & Content Addressing (Bitcoin, IPFS)',
    ],
    faqs: [
      { q: 'Kann ein Hash entschlüsselt werden?', a: 'Nein — absichtlich so. Hashes sind Einwegfunktionen. Der einzige Weg, einen Hash zu „knacken", ist, Eingaben so lange auszuprobieren, bis eine passt (Brute Force). Bei SHA-256 ist das für jede Eingabe sinnvoller Länge rechnerisch undurchführbar.' },
      { q: 'Worin unterscheidet sich SHA-256 von MD5 und SHA-1?', a: 'MD5 (128 Bit) und SHA-1 (160 Bit) sind durch praktische Kollisionsangriffe gebrochen und für Signaturen/Zertifikate unbrauchbar. SHA-256 liefert 256 Bit; eine praktikable Kollision ist nicht bekannt. Für Download-Prüfsummen reicht MD5, für Sicherheit immer SHA-256 oder besser.' },
      { q: 'Können zwei Eingaben denselben Hash ergeben?', a: 'Theoretisch ja: Ein Hash bildet unendlich viele Eingaben auf feste Länge ab — das nennt sich Kollision. Bei SHA-256 liegt die Größenordnung bei rund 2^128 Operationen, selbst mit weltweiter Rechenleistung nicht erreichbar — praktisch unmöglich.' },
      { q: 'Kann ich Passwörter direkt mit SHA-256 speichern?', a: 'Nein. SHA-256 ist zu schnell: Angreifer testen Milliarden Passwörter pro Sekunde. Für Passwörter nutze absichtlich langsame, gesalzene Verfahren wie bcrypt, scrypt oder Argon2. SHA-256 eignet sich für Prüfsummen und Fingerabdrücke, nicht für die Passwortspeicherung.' },
    ],
  },
}
