/**
 * webp-to-png-converter 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = WebpToPngConverterClient = 自定义 webtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const webpToPngConverterL10n: ToolL10n = {
  zh: {
    useCases: [
      '免上传将 WebP 转 PNG',
      '免费在线 WebP 转 JPG',
      '把 WebP 图片另存为 PNG',
      '无损 WebP 转换器',
    ],
  },
  es: {
    useCases: [
      'convertir WebP a PNG sin subir',
      'convertidor de WebP a JPG online gratis',
      'guardar imagen WebP como PNG',
      'convertidor WebP sin pérdida de calidad',
    ],
  },
  de: {
    useCases: [
      'WebP ohne Upload in PNG umwandeln',
      'kostenloser Online-Umwandler von WebP zu JPG',
      'WebP-Bild als PNG speichern',
      'WebP-Umwandler ohne Qualitätsverlust',
    ],
  },
}
