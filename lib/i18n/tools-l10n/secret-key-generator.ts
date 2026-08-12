/**
 * secret-key-generator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(无 FAQ / formula 条目 → 仅 useCases)
 */
import type { ToolL10n } from '../tool-l10n'

export const secretKeyGeneratorL10n: ToolL10n = {
  zh: {
    useCases: [
      '在线随机 API 密钥生成器',
      '为 JWT 生成密钥',
      '加密安全的令牌生成器',
      '十六进制密钥生成器',
    ],
  },
  es: {
    useCases: [
      'generador de claves API aleatorias online',
      'generar clave secreta para JWT',
      'generador de tokens criptográficamente seguro',
      'generador de claves hexadecimales',
    ],
  },
  de: {
    useCases: [
      'Zufalls-API-Key-Generator online',
      'Geheimschlüssel für JWT erzeugen',
      'kryptografisch sicherer Token-Generator',
      'Hex-Secret-Key-Generator',
    ],
  },
}
