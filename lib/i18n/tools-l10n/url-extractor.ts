/**
 * url-extractor 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const urlExtractorL10n: ToolL10n = {
  zh: {
    useCases: [
      '从文章或邮件中抓取全部链接',
      '基于内容建立链接清单',
      '清理凌乱的复制粘贴 URL',
      '审计文本中的外链',
    ],
    faqs: [
      { q: '为什么抓不到没有 http 的「example.com」?', a: '本工具只抓取以 http:// 或 https:// 开头的 URL。没有协议的裸域名可能被误判成文件名或其他文本。如果想找裸域名,需要更激进的匹配规则。' },
    ],
  },
  es: {
    useCases: [
      'extraer todos los enlaces de un artículo o correo',
      'crear un inventario de enlaces a partir de contenido',
      'limpiar URLs copiadas y pegadas de forma desordenada',
      'auditar los enlaces salientes de un texto',
    ],
    faqs: [
      { q: '¿Por qué no captura «example.com» sin http?', a: 'Esta herramienta solo captura URLs que empiezan por http:// o https://. Los dominios sin protocolo podrían confundirse con nombres de archivo u otro texto. Si necesitas encontrar dominios sin protocolo, hace falta un patrón más agresivo.' },
    ],
  },
  de: {
    useCases: [
      'alle Links aus einem Artikel oder einer E-Mail ziehen',
      'aus Inhalten ein Link-Inventar erstellen',
      'chaotisch kopierte URLs aufräumen',
      'ausgehende Links in einem Text prüfen',
    ],
    faqs: [
      { q: 'Warum wird „example.com" ohne http nicht erkannt?', a: 'Dieses Werkzeug erfasst nur URLs, die mit http:// oder https:// beginnen. Domains ohne Protokoll könnten mit Dateinamen oder anderem Text verwechselt werden. Wenn du reine Domains finden möchtest, ist ein aggressiveres Muster nötig.' },
    ],
  },
}
