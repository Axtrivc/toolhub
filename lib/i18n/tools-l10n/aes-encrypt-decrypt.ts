/**
 * aes-encrypt-decrypt 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(无计算公式)。
 */
import type { ToolL10n } from '../tool-l10n'

export const AesEncryptDecryptL10n: ToolL10n = {

  es: {
    useCases: [
      'Cifrar un borrador de contrato o datos personales antes de enviarlo por chat y dar la contraseña por teléfono',
      'Añadir una capa de contraseña a una copia de seguridad antes de subirla a la nube o al disco externo',
      'Intercambiar payloads AES-v1 autocontenidos con un compañero sin que nada pase por servidores de terceros',
      'Descifrar un mensaje recibido: una contraseña errónea hace fallar la verificación GCM, señal de datos manipulados o corruptos',
    ],
    faqs: [
      {
        q: '¿Qué cifrado se utiliza aquí?',
        a: 'AES-256-GCM mediante el WebCrypto nativo del navegador, el mismo estándar de cifrado autenticado que TLS 1.3 y los sistemas gubernamentales. GCM añade una etiqueta de autenticación: un cifrado manipulado o una contraseña errónea fallan de forma clara en lugar de devolver basura.',
      },
      {
        q: '¿Cómo se convierte mi contraseña en clave?',
        a: 'Con PBKDF2-HMAC-SHA256: una sal aleatoria de 16 bytes y 150 000 iteraciones estiran la contraseña hasta una clave de 256 bits. La sal garantiza que la misma contraseña produce cifrados distintos y frustra las tablas rainbow.',
      },
      {
        q: '¿Puedo recuperar los datos si olvido la contraseña?',
        a: 'No, y es por diseño, no un fallo. AES-256 no tiene vía práctica de fuerza bruta ni puerta trasera, y la herramienta nunca ve tu contraseña. Cifra con tranquilidad, pero trata la contraseña como irrecuperable.',
      },
      {
        q: '¿Mi texto sale de mi equipo?',
        a: 'No. Todo se procesa localmente con la Web Crypto API; puedes verificarlo en la pestaña de red de DevTools: cero peticiones durante el cifrado y el descifrado. Solo necesitas abrir la página por HTTPS o localhost.',
      },
    ],
    ui: {
      'badFormat': 'No es un payload AES-v1 (se espera salt:iv:ciphertext)',
      'cipherOut': 'Cifrado (base64 portable)',
      'insecure': 'WebCrypto requiere HTTPS o localhost',
      'mDecrypt': 'Descifrar',
      'mEncrypt': 'Cifrar',
      'note': '🔐 AES-256-GCM con PBKDF2-SHA256 (150 000 iteraciones) y sal aleatoria de 16 bytes por cifrado — la salida es autocontenida (salt:iv:ciphertext) y puede descifrarse aquí o en cualquier entorno compatible con WebCrypto. Con GCM, una contraseña errónea falla de forma evidente en lugar de devolver basura.',
      'passLabel': 'Contraseña',
      'passPlaceholder': 'contraseña robusta',
      'payloadLabel': 'Payload cifrado (AES-v1:…)',
      'plainLabel': 'Texto a cifrar',
      'plainOut': 'Texto descifrado',
      'plainPlaceholder': 'mensaje secreto',
      'wrongPassword': 'Contraseña errónea o datos corruptos (etiqueta GCM)',
    },
  },
  de: {
    useCases: [
      'Vertragsentwürfe oder Ausweisdaten vor dem Absenden im Chat verschlüsseln, das Passwort telefonisch übermitteln',
      'Backups mit einer Passwortschicht versehen, bevor sie auf USB-Stick oder Cloud-Speicher wandern',
      'In sich geschlossene AES-v1-Payloads mit Kollegen austauschen, ohne dass etwas über Drittanbieter-Server läuft',
      'Erhaltene Nutzdaten entschlüsseln: Ein falsches Passwort scheitert am GCM-Tag — ein klares Zeichen für Manipulation oder Beschädigung',
    ],
    faqs: [
      {
        q: 'Welche Verschlüsselung wird verwendet?',
        a: 'AES-256-GCM über das native WebCrypto des Browsers — derselbe authentifizierte Standard wie bei TLS 1.3 und Regierungssystemen. GCM fügt ein Authentifizierungs-Tag hinzu: Manipulierter Chiffretext oder ein falsches Passwort schlagen mit einem klaren Fehler fehl, statt Datenmüll auszugeben.',
      },
      {
        q: 'Wie wird aus meinem Passwort ein Schlüssel?',
        a: 'Per PBKDF2-HMAC-SHA256: ein zufälliges 16-Byte-Salt und 150 000 Iterationen strecken das Passwort auf einen 256-Bit-Schlüssel. Das Salt sorgt dafür, dass identische Passwörter unterschiedliche Chiffretexte erzeugen, und vereitelt Rainbow-Table-Angriffe.',
      },
      {
        q: 'Kann ich Daten wiederherstellen, wenn ich das Passwort vergesse?',
        a: 'Nein — gewollt, kein Fehler. AES-256 hat keinen praktischen Brute-Force-Weg und keine Hintertür, und das Tool sieht dein Passwort nie. Verschlüsseln ist gefahrlos; behandle das Passwort als unwiederbringlich.',
      },
      {
        q: 'Verlassen Text oder Passwort meinen Rechner?',
        a: 'Nein. Alles läuft lokal über die Web Crypto API — im Netzwerk-Tab der DevTools siehst du während Ver- und Entschlüsselung null Anfragen. Einzige Voraussetzung: Die Seite ist per HTTPS oder localhost geöffnet.',
      },
    ],
    ui: {
      'badFormat': 'Kein AES-v1-Payload (erwartet salt:iv:ciphertext)',
      'cipherOut': 'Verschlüsselt (portables Base64)',
      'insecure': 'WebCrypto erfordert HTTPS oder localhost',
      'mDecrypt': 'Entschlüsseln',
      'mEncrypt': 'Verschlüsseln',
      'note': '🔐 AES-256-GCM mit PBKDF2-SHA256 (150k Iterationen) und zufälligem 16-Byte-Salt — die Ausgabe ist in sich geschlossen (salt:iv:ciphertext) und lässt sich hier oder in jeder WebCrypto-Umgebung entschlüsseln. GCM sorgt dafür, dass falsche Passwörter mit einem klaren Fehler scheitern, statt Datenmüll zu liefern.',
      'passLabel': 'Passwort',
      'passPlaceholder': 'starke Passphrase',
      'payloadLabel': 'Verschlüsselte Nutzdaten (AES-v1:…)',
      'plainLabel': 'Zu verschlüsselnder Text',
      'plainOut': 'Entschlüsselter Text',
      'plainPlaceholder': 'geheime Nachricht',
      'wrongPassword': 'Falsches Passwort oder beschädigte Daten (GCM-Tag)',
    },
  },
}
