/**
 * aes-encrypt-decrypt 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const AesEncryptDecryptL10n: ToolL10n = {
  zh: {
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
