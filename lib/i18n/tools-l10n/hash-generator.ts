/**
 * hash-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const hashGeneratorL10n: ToolL10n = {

  es: {
    ui: {
      'algorithm': 'Algoritmo',
      'cryptoUnavailable': '⚠️ El hash seguro (SubtleCrypto) no está disponible en este contexto: abre esta página por HTTPS o en localhost',
      'generateHashes': '# Generar hashes',
      'hashing': 'Calculando hash…',
      'note': '🔐 Usa la API SubtleCrypto (hash criptográfico real). Elige SHA-256 (por defecto), SHA-384 o SHA-512; SHA-1 está criptográficamente roto y se ofrece solo para checksums heredados.',
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
      { q: '¿Puedo guardar contraseñas con SHA-256 a secas?', a: 'No. SHA-256 es demasiado rápido: un atacante prueba miles de millones de contraseñas por segundo. Para contraseñas usa algoritmos lentos y con sal como bcrypt, scrypt o Argon2; el SHA-256 de esta herramienta es ideal para checksums y huellas, no para credenciales.' },
    ],
  },
  de: {
    ui: {
      'algorithm': 'Algorithmus',
      'cryptoUnavailable': '⚠️ Sicheres Hashing (SubtleCrypto) ist in diesem Kontext nicht verfügbar — öffne diese Seite über HTTPS oder localhost',
      'generateHashes': '# Hashes erzeugen',
      'hashing': 'Hash wird berechnet…',
      'note': '🔐 Nutzt die SubtleCrypto-API (echtes kryptografisches Hashing). Wähle SHA-256 (Standard), SHA-384 oder SHA-512; SHA-1 ist kryptografisch gebrochen und nur für Legacy-Prüfsummen gedacht.',
      'sha1Warning': '⚠️ Seit 2017 lassen sich praktische Kollisionen erzeugen — nicht sicher für Signaturen/Zertifikate; nur für Legacy-Prüfsummen',
      'textToHash': 'Zu hashender Text',
    },
    useCases: [
      'Dateiintegrität prüfen (Hash nach dem Download abgleichen)',
      'Passwortspeicherung (Seiten speichern Hashes, nicht Klartext)',
      'digitale Signaturen (den Hash signieren, nicht das ganze Dokument)',
      'Blockchain & Content Addressing (Bitcoin, IPFS)',
    ],
    faqs: [
      { q: 'Kann ein Hash entschlüsselt werden?', a: 'Nein — absichtlich so. Hashes sind Einwegfunktionen. Der einzige Weg, einen Hash zu „knacken“, ist, Eingaben so lange auszuprobieren, bis eine passt (Brute Force). Bei SHA-256 ist das für jede Eingabe sinnvoller Länge rechnerisch undurchführbar.' },
      { q: 'Worin unterscheidet sich SHA-256 von MD5 und SHA-1?', a: 'MD5 (128 Bit) und SHA-1 (160 Bit) sind durch praktische Kollisionsangriffe gebrochen und für Signaturen/Zertifikate unbrauchbar. SHA-256 liefert 256 Bit; eine praktikable Kollision ist nicht bekannt. Für Download-Prüfsummen reicht MD5, für Sicherheit immer SHA-256 oder besser.' },
      { q: 'Können zwei Eingaben denselben Hash ergeben?', a: 'Theoretisch ja: Ein Hash bildet unendlich viele Eingaben auf feste Länge ab — das nennt sich Kollision. Bei SHA-256 liegt die Größenordnung bei rund 2^128 Operationen, selbst mit weltweiter Rechenleistung nicht erreichbar — praktisch unmöglich.' },
      { q: 'Kann ich Passwörter direkt mit SHA-256 speichern?', a: 'Nein. SHA-256 ist zu schnell: Angreifer testen Milliarden Passwörter pro Sekunde. Für Passwörter nutze absichtlich langsame, gesalzene Verfahren wie bcrypt, scrypt oder Argon2. SHA-256 eignet sich für Prüfsummen und Fingerabdrücke, nicht für die Passwortspeicherung.' },
    ],
  },
}
