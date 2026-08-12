/**
 * png-to-webp-converter 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = PngToWebpConverterClient = 自定义 webtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const pngToWebpConverterL10n: ToolL10n = {
  zh: {
    useCases: [
      '带质量滑块的 PNG 转 WebP',
      '在线将 PNG 压缩为 WebP',
      '免上传把图片转为 WebP',
      '用 WebP 减小图片体积',
    ],
  },
  es: {
    useCases: [
      'convertidor de PNG a WebP con control de calidad',
      'comprimir PNG a WebP online',
      'convertir imágenes a WebP sin subir',
      'reducir tamaño de imagen con WebP',
    ],
  },
  de: {
    useCases: [
      'PNG-zu-WebP-Umwandler mit Qualitätsregler',
      'PNG online zu WebP komprimieren',
      'Bilder ohne Upload zu WebP umwandeln',
      'Bildgröße mit WebP reduzieren',
    ],
  },
}
