/**
 * css-gradient-generator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = CssGradientGeneratorClient = 自定义 webtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const cssGradientGeneratorL10n: ToolL10n = {
  zh: {
    useCases: [
      'CSS mesh 渐变生成器',
      '带角度的线性渐变制作器',
      'CSS 渐变背景生成器',
      '复制 CSS 渐变代码',
    ],
  },
  es: {
    useCases: [
      'generador de degradado mesh en CSS',
      'creador de degradado lineal con ángulo',
      'generador de fondo con degradado CSS',
      'copiar código de degradado CSS',
    ],
  },
  de: {
    useCases: [
      'CSS-Mesh-Gradient-Generator',
      'Linearen Gradienten mit Winkel erstellen',
      'CSS-Gradient-Hintergrund-Generator',
      'CSS-Gradient-Code kopieren',
    ],
  },
}
