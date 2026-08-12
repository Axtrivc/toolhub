/**
 * reading-speaking-time 本地化 bundle —— zh / es / de
 * 覆盖:useCases(无 FAQ / formula 条目 → 仅 useCases)
 */
import type { ToolL10n } from '../tool-l10n'

export const readingSpeakingTimeL10n: ToolL10n = {
  zh: {
    useCases: [
      '读 1000 字需要多长时间',
      '演讲时长计算器',
      '博客文章阅读时间估算器',
      '语速每分钟字数计算器',
    ],
  },
  es: {
    useCases: [
      'cuánto tarda leer 1000 palabras',
      'calculadora de duración de discurso para presentación',
      'estimador de tiempo de lectura para blogs',
      'calculadora de palabras por minuto al hablar',
    ],
  },
  de: {
    useCases: [
      'wie lange dauert es 1000 Wörter zu lesen',
      'Redezeit-Rechner für Präsentationen',
      'Lesezeit-Schätzer für Blogbeiträge',
      'Wörter-pro-Minute-Sprechrechner',
    ],
  },
}
