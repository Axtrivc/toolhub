/**
 * jwt-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const JwtGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'algErr': '此处仅支持 HS256/384/512',
      'copyToken': '复制令牌',
      'headerLabel': 'Header (JSON)',
      'insecure': 'WebCrypto 需要 HTTPS 或 localhost',
      'note': '🔑 仅用于测试:HS* 密钥在此完全在客户端,绝不要把密钥放进前端代码。RS256/ES256 请用服务端库——非对称签名必须保住私钥。',
      'payloadLabel': 'Payload (JSON)',
      'secretLabel': '签名密钥(留空则生成未签名预览)',
      'tokenLabel': '已签名令牌',
    },
  },
  es: {
    ui: {
      'algErr': 'Aquí solo se admite HS256/384/512',
      'copyToken': 'Copiar token',
      'headerLabel': 'Cabecera (JSON)',
      'insecure': 'WebCrypto requiere HTTPS o localhost',
      'note': '🔑 Solo para pruebas: los secretos HS* viven aquí en el cliente; nunca los envies al front-end. Para RS256/ES256 usa una librería de servidor.',
      'payloadLabel': 'Payload (JSON)',
      'secretLabel': 'Secreto de firma (vacío = vista previa sin firmar)',
      'tokenLabel': 'Token firmado',
    },
  },
  de: {
    ui: {
      'algErr': 'Hier werden nur HS256/384/512 unterstützt',
      'copyToken': 'Token kopieren',
      'headerLabel': 'Header (JSON)',
      'insecure': 'WebCrypto erfordert HTTPS oder localhost',
      'note': '🔑 Nur zum Testen: HS*-Geheimnisse bleiben hier im Browser; niemals in Frontend-Code shippen. RS256/ES256: Server-Bibliothek nutzen.',
      'payloadLabel': 'Payload (JSON)',
      'secretLabel': 'Signaturgeheimnis (leer = unsignierte Vorschau)',
      'tokenLabel': 'Signiertes Token',
    },
  },
}
