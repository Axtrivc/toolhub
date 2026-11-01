/**
 * ssh-key-generator 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs(client = SshKeyGeneratorClient = 自定义 securitytool client)
 */
import type { ToolL10n } from '../tool-l10n'

export const sshKeyGeneratorL10n: ToolL10n = {

  es: {
    ui: {
      'comment': 'Comentario (opcional)',
      'copyPrivateKey': 'Copiar clave privada',
      'copyPublicKey': 'Copiar clave pública',
      'ed25519Recommended': 'Ed25519 (recomendado)',
      'errorKeyGenFailed': 'Falló la generación de claves.',
      'errorNoEd25519': 'Este navegador no admite Ed25519 en la Web Crypto API. Prueba con una versión actual de Chrome, Edge, Firefox o Safari, o cambia a RSA más abajo.',
      'errorNoWebCrypto': 'La Web Crypto API no está disponible aquí. Requiere un contexto seguro (HTTPS) y un navegador moderno.',
      'errorRsaExport': 'No se pudieron exportar los parámetros de la clave pública RSA.',
      'fingerprint': 'Huella (SHA-256)',
      'generateKeyPair': 'Generar par de claves',
      'generating': 'Generando…',
      'hide': 'Ocultar',
      'hidePrivateKeyAria': 'Ocultar la clave privada',
      'keyType': 'Tipo de clave',
      'noteIntro': '🔒 Guarda la clave privada en un lugar seguro y protégela con ',
      'noteMid1': '. Se exporta en PKCS#8 PEM — muchas herramientas (incluido OpenSSH ≥ 7.8) la leen directamente, y puedes convertirla al formato nativo de OpenSSH en cualquier momento con ',
      'noteOutro': '. Las claves se generan y guardan totalmente en tu navegador — nada se sube.',
      'privateKeyMasked': 'Clave privada (enmascarada)',
      'privateKeyPem': 'Clave privada (PKCS#8 PEM)',
      'publicKeyPrefix': 'Clave pública — pega en ',
      'reveal': 'Mostrar',
      'revealPrivateKeyAria': 'Mostrar la clave privada',
      'rsa': 'RSA',
      'rsa4096Wait': 'RSA-4096 puede tardar unos segundos…',
      'rsaModulus': 'Módulo RSA (bits)',
      'unencryptedBadge': 'Sin cifrar — sin frase de paso',
    },
    useCases: [
      'generar par de claves Ed25519 online',
      'alternativa online a ssh-keygen',
      'crear claves SSH sin terminal',
      'generador de clave pública para authorized_keys',
    ],
    faqs: [
      {
        q: '¿Ed25519 o RSA, cuál elegir?',
        a: 'Prefiere Ed25519: las claves son mucho más cortas, rápidas y ofrecen seguridad equivalente o mejor que RSA-4096. Usa RSA solo cuando debas conectar a servidores o hardware antiguos que aún no admiten Ed25519.',
      },
      {
        q: '¿Mi clave privada se sube a algún sitio?',
        a: 'No. El par de claves se genera localmente en tu navegador con la Web Crypto API y la clave privada nunca sale de tu dispositivo. Solo tú puedes copiarla o descargarla; no hay almacenamiento en el servidor.',
      },
      {
        q: '¿Qué tamaño de clave RSA debo usar?',
        a: '4096 bits si quieres un margen a largo plazo; 2048 sigue siendo aceptable por compatibilidad. Las claves más grandes son más lentas de generar y usar, así que para la mayoría de casos nuevos Ed25519 es mejor opción.',
      },
    ],
  },
  de: {
    ui: {
      'comment': 'Kommentar (optional)',
      'copyPrivateKey': 'Private Key kopieren',
      'copyPublicKey': 'Public Key kopieren',
      'ed25519Recommended': 'Ed25519 (empfohlen)',
      'errorKeyGenFailed': 'Schlüsselgenerierung fehlgeschlagen.',
      'errorNoEd25519': 'Dieser Browser unterstützt Ed25519 in der Web Crypto API nicht. Verwende einen aktuellen Chrome, Edge, Firefox oder Safari — oder wechsle unten zu RSA.',
      'errorNoWebCrypto': 'Die Web Crypto API ist hier nicht verfügbar. Sie erfordert einen sicheren (HTTPS-)Kontext und einen modernen Browser.',
      'errorRsaExport': 'Die RSA-Public-Key-Parameter konnten nicht exportiert werden.',
      'fingerprint': 'Fingerabdruck (SHA-256)',
      'generateKeyPair': 'Schlüsselpaar erzeugen',
      'generating': 'Generieren…',
      'hide': 'Verbergen',
      'hidePrivateKeyAria': 'Private Key verbergen',
      'keyType': 'Schlüsseltyp',
      'noteIntro': '🔒 Bewahre den Private Key sicher auf und schütze ihn mit ',
      'noteMid1': '. Er wird als PKCS#8 PEM exportiert — viele Tools (inkl. OpenSSH ≥ 7.8) lesen ihn direkt, und du kannst ihn jederzeit mit ',
      'noteOutro': ' ins native OpenSSH-Format umwandeln. Schlüssel werden vollständig in deinem Browser erzeugt und dort aufbewahrt — nichts wird hochgeladen.',
      'privateKeyMasked': 'Private Key (maskiert)',
      'privateKeyPem': 'Private Key (PKCS#8 PEM)',
      'publicKeyPrefix': 'Public Key — einfügen in ',
      'reveal': 'Anzeigen',
      'revealPrivateKeyAria': 'Private Key anzeigen',
      'rsa': 'RSA',
      'rsa4096Wait': 'RSA-4096 kann einige Sekunden dauern…',
      'rsaModulus': 'RSA-Modulus (Bits)',
      'unencryptedBadge': 'Unverschlüsselt — ohne Passphrase',
    },
    useCases: [
      'Ed25519-Schlüsselpaar online erzeugen',
      'Online-Alternative zu ssh-keygen',
      'SSH-Schlüssel ohne Terminal erstellen',
      'Public-Key-Generator für authorized_keys',
    ],
    faqs: [
      {
        q: 'Ed25519 oder RSA — was soll ich wählen?',
        a: 'Bevorzuge Ed25519: Die Schlüssel sind deutlich kürzer, schneller und bieten eine zu RSA-4096 äquivalente oder bessere Sicherheit. Verwende RSA nur, wenn du ältere Server oder Hardware anbinden musst, die Ed25519 noch nicht unterstützen.',
      },
      {
        q: 'Wird mein privater Schlüssel irgendwo hochgeladen?',
        a: 'Nein. Das Schlüsselpaar wird lokal in deinem Browser mit der Web Crypto API erzeugt, und der private Schlüssel verlässt nie dein Gerät. Nur du kannst ihn kopieren oder herunterladen — es gibt keine serverseitige Speicherung.',
      },
      {
        q: 'Welche RSA-Schlüsselgröße soll ich verwenden?',
        a: '4096 Bit für eine langfristige Sicherheitsreserve; 2048 ist aus Kompatibilitätsgründen noch akzeptabel. Größere Schlüssel sind beim Erzeugen und Nutzen langsamer, daher ist Ed25519 für die meisten neuen Setups die bessere Wahl.',
      },
    ],
  },
}
