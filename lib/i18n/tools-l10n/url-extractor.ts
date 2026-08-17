/**
 * url-extractor 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const urlExtractorL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: '访问 https://example.com 或 http://test.org/page?q=1 了解更多！',
      'noUrlsFound': '未找到 URL',
      inputLabel: '含网址的文本',
      outputLabel: '提取出的网址',
      note: '🔗 从任意文本中提取所有网址。自动去重。',
    },
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
    ui: {
      defaultInput: 'Visita https://example.com o http://test.org/page?q=1 hoy!',
      'noUrlsFound': 'No se encontraron URLs',
      inputLabel: 'Texto con URLs',
      outputLabel: 'URLs extraídas',
      note: '🔗 Extrae todas las URLs de cualquier texto. Elimina duplicados.',
    },
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
    ui: {
      defaultInput: 'Besuche https://example.com oder http://test.org/page?q=1 heute!',
      'noUrlsFound': 'Keine URLs gefunden',
      inputLabel: 'Text mit URLs',
      outputLabel: 'Extrahierte URLs',
      note: '🔗 Extrahiert alle URLs aus beliebigem Text. Entfernt Duplikate.',
    },
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
