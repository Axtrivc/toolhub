/**
 * email-extractor 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const emailExtractorL10n: ToolL10n = {
  zh: {
    useCases: [
      '从文档中提取联系方式',
      '整理散落的联系人列表',
      '从已有资料构建邮件列表(请合规使用)',
      '核查旧文件里都有哪些邮箱',
    ],
    faqs: [
      { q: '这个工具会验证邮箱是否有效吗?', a: '它只检测格式是否匹配。真正的验证需要发送一封邮件——没有任何工具能在不发邮件的情况下确认地址存在。联系提取到的地址时,请务必遵守反垃圾邮件相关法律。' },
    ],
  },
  es: {
    useCases: [
      'extraer información de contacto de documentos',
      'limpiar listas de contacto dispersas',
      'construir listas de correo a partir de materiales existentes (úsalas con responsabilidad)',
      'comprobar qué correos hay en archivos antiguos',
    ],
    faqs: [
      { q: '¿Esto valida los correos?', a: 'Detecta el patrón de formato. La validación real requiere enviar un correo — ninguna herramienta puede verificar que una dirección existe sin hacerlo. Respeta siempre las leyes antispam al contactar las direcciones extraídas.' },
    ],
  },
  de: {
    useCases: [
      'Kontaktinformationen aus Dokumenten extrahieren',
      'verstreute Kontaktlisten aufräumen',
      'aus vorhandenem Material Mailinglisten erstellen (verantwortungsvoll nutzen)',
      'prüfen, welche E-Mail-Adressen in alten Dateien stecken',
    ],
    faqs: [
      { q: 'Validiert dieses Werkzeug E-Mail-Adressen?', a: 'Es erkennt das Formatmuster. Eine echte Validierung erfordert das Senden einer E-Mail — kein Werkzeug kann ohne diesen Schritt bestätigen, dass eine Adresse existiert. Halte dich beim Kontaktieren extrahierter Adressen immer an die Anti-Spam-Gesetze.' },
    ],
  },
}
