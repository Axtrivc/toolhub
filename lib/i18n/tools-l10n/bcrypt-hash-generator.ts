/**
 * bcrypt-hash-generator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = BcryptHashGeneratorClient = 自定义 securitytool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const bcryptHashGeneratorL10n: ToolL10n = {
  zh: {
    useCases: [
      '带 salt rounds 的 bcrypt 哈希生成器',
      '在线校验 bcrypt 哈希',
      '面向开发者的密码哈希工具',
      'bcrypt cost factor 详解',
    ],
  },
  es: {
    useCases: [
      'generador de hash bcrypt con salt y rounds',
      'verificar un hash bcrypt online',
      'herramienta de hash de contraseñas para desarrolladores',
      'explicación del cost factor de bcrypt',
    ],
  },
  de: {
    useCases: [
      'bcrypt-Hash-Generator mit Salt und Rounds',
      'einen bcrypt-Hash online verifizieren',
      'Passwort-Hashing-Werkzeug für Entwickler',
      'Erklärung des bcrypt-Cost-Faktors',
    ],
  },
}
