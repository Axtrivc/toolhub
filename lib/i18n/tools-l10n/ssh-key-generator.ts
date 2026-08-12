/**
 * ssh-key-generator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = SshKeyGeneratorClient = 自定义 securitytool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const sshKeyGeneratorL10n: ToolL10n = {
  zh: {
    useCases: [
      '在线生成 Ed25519 密钥对',
      'ssh-keygen 的在线替代',
      '无需终端创建 SSH 密钥',
      'authorized_keys 公钥生成器',
    ],
  },
  es: {
    useCases: [
      'generar par de claves Ed25519 online',
      'alternativa online a ssh-keygen',
      'crear claves SSH sin terminal',
      'generador de clave pública para authorized_keys',
    ],
  },
  de: {
    useCases: [
      'Ed25519-Schlüsselpaar online erzeugen',
      'Online-Alternative zu ssh-keygen',
      'SSH-Schlüssel ohne Terminal erstellen',
      'Public-Key-Generator für authorized_keys',
    ],
  },
}
