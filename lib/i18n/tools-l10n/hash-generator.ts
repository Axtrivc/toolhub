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
    ],
  },
}
