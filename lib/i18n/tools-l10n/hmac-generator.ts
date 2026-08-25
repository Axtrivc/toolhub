/**
 * hmac-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HmacGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'algoLabel': '算法',
      'insecureContext': 'WebCrypto 需要 HTTPS 或 localhost',
      'messageLabel': '消息',
      'note': '🔐 HMAC ≠ 哈希:签名同时依赖消息与密钥,攻击者没有密钥就无法伪造。用原生 WebCrypto 计算——密钥绝不离开本页。',
      'secretLabel': '密钥',
    },
  },
  es: {
    ui: {
      'algoLabel': 'Algoritmo',
      'insecureContext': 'WebCrypto requiere HTTPS o localhost',
      'messageLabel': 'Mensaje',
      'note': '🔐 HMAC ≠ hash: la firma depende del mensaje y del secreto; sin la clave no se puede falsificar. Con WebCrypto nativo — el secreto no sale de aquí.',
      'secretLabel': 'Clave secreta',
    },
  },
  de: {
    ui: {
      'algoLabel': 'Algorithmus',
      'insecureContext': 'WebCrypto erfordert HTTPS oder localhost',
      'messageLabel': 'Nachricht',
      'note': '🔐 HMAC ≠ Hash: die Signatur hängt an Nachricht und Schlüssel; ohne Schlüssel nicht fälschbar. Native WebCrypto — der Schlüssel verlässt die Seite nie.',
      'secretLabel': 'Geheimschlüssel',
    },
  },
}
