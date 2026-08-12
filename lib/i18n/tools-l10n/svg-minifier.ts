/**
 * svg-minifier 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = SvgMinifierClient = 自定义 webtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const svgMinifierL10n: ToolL10n = {
  zh: {
    useCases: [
      '免费在线压缩 SVG',
      '移除 SVG 的 Inkscape 元数据',
      '免上传的 SVG 优化器',
      '为 Web 清理 SVG 代码',
    ],
  },
  es: {
    useCases: [
      'minificar SVG online gratis',
      'eliminar metadatos de Inkscape del SVG',
      'optimizador de SVG sin subir',
      'limpiar código SVG para la web',
    ],
  },
  de: {
    useCases: [
      'SVG kostenlos online minimieren',
      'Inkscape-Metadaten aus SVG entfernen',
      'SVG-Optimierer ohne Upload',
      'SVG-Code fürs Web bereinigen',
    ],
  },
}
