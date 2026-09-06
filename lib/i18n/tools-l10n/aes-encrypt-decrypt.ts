/**
 * aes-encrypt-decrypt 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(无计算公式)。
 */
import type { ToolL10n } from '../tool-l10n'

export const AesEncryptDecryptL10n: ToolL10n = {
  zh: {
    useCases: [
      '把含身份证号的表格文本加密后再发微信,口令走电话或另一个渠道告知',
      '备份文件加一层口令加密后再存 U 盘或网盘,即使泄露也读不出明文',
      '与同事约定共享口令,互发自包含的 AES-v1 密文,全程不经过第三方服务器',
      '解密收到的载荷:密码错误会立即报 GCM 校验失败,直接提示数据被篡改或损坏',
    ],
    faqs: [
      {
        q: '这里用的是哪种加密?',
        a: 'AES-256-GCM,走浏览器原生 WebCrypto——与 TLS 1.3 和政府系统相同的认证加密标准。GCM 自带认证标签:密文被篡改或密码不对时会明确报错,而不是输出乱码。',
      },
      {
        q: '我的密码是怎么变成密钥的?',
        a: '通过 PBKDF2-HMAC-SHA256:每次加密用随机的 16 字节盐、迭代 15 万次,把密码拉伸成 256 位密钥。加盐保证相同密码每次产出不同密文,并能抵御彩虹表攻击。',
      },
      {
        q: '忘记密码还能找回数据吗?',
        a: '不能,这是设计使然而非缺陷。AES-256 没有现实的暴力破解路径,没有后门,工具本身也看不到你的密码。放心加密,但请把密码当作不可找回的东西保管。',
      },
      {
        q: '明文和密码会离开我的设备吗?',
        a: '不会。全部运算在本地 Web Crypto API 完成;用 DevTools 的网络面板可以验证:加密解密全程零请求。唯一的环境要求是通过 HTTPS 或 localhost 打开本页。',
      },
    ],
    ui: {
      'badFormat': '不是 AES-v1 载荷(应为 salt:iv:ciphertext)',
      'cipherOut': '密文(可移植 base64)',
      'insecure': 'WebCrypto 需要 HTTPS 或 localhost',
      'mDecrypt': '解密',
      'mEncrypt': '加密',
      'note': '🔐 AES-256-GCM + PBKDF2-SHA256(15 万次迭代),每次加密随机 16 字节盐——输出自包含(salt:iv:ciphertext),可在本页或任何支持 WebCrypto 的环境解密。GCM 认证保证密码错误会明确报错而非输出乱码。',
      'passLabel': '密码',
      'payloadLabel': '加密载荷(AES-v1:…)',
      'plainLabel': '要加密的文本',
      'plainOut': '解密后的文本',
      'wrongPassword': '密码错误或数据已损坏(GCM 校验失败)',
    },
  },
  es: {
    useCases: [
      'Cifrar un borrador de contrato o datos personales antes de enviarlo por chat y dar la contraseña por teléfono',
      'Añadir una capa de contraseña a una copia de seguridad antes de subirla a la nube o al disco externo',
      'Intercambiar payloads AES-v1 autocontenidos con un compañero sin que nada pase por servidores de terceros',
      'Descifrar un mensaje recibido: una contraseña errónea falla con el aviso de etiqueta GCM, señal de datos manipulados o corruptos',
    ],
    faqs: [
      {
        q: '¿Qué cifrado se utiliza aquí?',
        a: 'AES-256-GCM mediante el WebCrypto nativo del navegador, el mismo estándar de cifrado autenticado que TLS 1.3. GCM añade una etiqueta de autenticación: un cifrado manipulado o una contraseña errónea fallan de forma clara en lugar de devolver basura.',
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
      'note': '🔐 AES-256-GCM con PBKDF2-SHA256 (150 000 iteraciones) y sal aleatoria de 16 bytes por cifrado — la salida es autocontenida y verificable. GCM hace que las contraseñas erróneas fallen ruidosamente.',
      'passLabel': 'Contraseña',
      'payloadLabel': 'Payload cifrado (AES-v1:…)',
      'plainLabel': 'Texto a cifrar',
      'plainOut': 'Texto descifrado',
      'wrongPassword': 'Contraseña errónea o datos corruptos (etiqueta GCM)',
    },
  },
  de: {
    useCases: [
      'Vertragsentwürfe oder Ausweisdaten vor dem Absenden im Chat verschlüsseln, das Passwort telefonisch übermitteln',
      'Backups mit einer Passwortschicht versehen, bevor sie auf USB-Stick oder Cloud-Speicher wandern',
      'In sich geschlossene AES-v1-Payloads mit Kollegen austauschen, ohne dass etwas über Drittanbieter-Server läuft',
      'Erhaltene Nutzdaten entschlüsseln: Ein falsches Passwort scheitert laut am GCM-Tag — ein klares Zeichen für Manipulation oder Beschädigung',
    ],
    faqs: [
      {
        q: 'Welche Verschlüsselung wird verwendet?',
        a: 'AES-256-GCM über das native WebCrypto des Browsers — derselbe authentifizierte Standard wie bei TLS 1.3. GCM fügt ein Authentifizierungs-Tag hinzu: Manipulierter Chiffretext oder ein falsches Passwort scheitern laut, statt Datenmüll auszugeben.',
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
      'note': '🔐 AES-256-GCM mit PBKDF2-SHA256 (150k Iterationen) und zufälligem 16-Byte-Salt — die Ausgabe ist in sich geschlossen. GCM sorgt dafür, dass falsche Passwörter laut scheitern.',
      'passLabel': 'Passwort',
      'payloadLabel': 'Verschlüsselte Nutzdaten (AES-v1:…)',
      'plainLabel': 'Zu verschlüsselnder Text',
      'plainOut': 'Entschlüsselter Text',
      'wrongPassword': 'Falsches Passwort oder beschädigte Daten (GCM-Tag)',
    },
  },
}
