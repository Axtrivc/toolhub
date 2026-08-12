/**
 * css-clamp-calculator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = CssClampCalculatorClient = 自定义 webtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const cssClampCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      'CSS clamp 字号生成器',
      'clamp 流式排版计算器',
      '无需媒体查询的响应式字号',
      'clamp 最小/首选/最大 计算器',
    ],
  },
  es: {
    useCases: [
      'generador de tamaño de fuente con clamp de CSS',
      'calculadora de tipografía fluida con clamp',
      'tamaño de fuente responsivo sin media queries',
      'calculadora de clamp mínimo/preferido/máximo',
    ],
  },
  de: {
    useCases: [
      'CSS-Clamp-Schriftgrößen-Generator',
      'Clamp-Rechner für fluide Typografie',
      'responsive Schriftgröße ohne Media Queries',
      'Clamp-Minimum/Preferred/Maximum-Rechner',
    ],
  },
}
