/**
 * roman-numeral-converter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const RomanNumeralConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'in.breakdown': '分解',
      'in.num': '数字 (1-3999)',
      'in.result': '转换结果',
      'in.roman': '或罗马数字',
      'note': '🏛️ 标准罗马数字使用减法对(IV=4、IX=9)。范围是 1-3999——古典记数法没有零,也无法书写更大的数。',
      'out.breakdown': '分解',
      'out.num': '数字 (1-3999)',
      'out.result': '转换结果',
      'out.roman': '或罗马数字',
    },
  },
  es: {
    ui: {
      'in.breakdown': 'Desglose',
      'in.num': 'Número (1-3999)',
      'in.result': 'Valor convertido',
      'in.roman': 'O número romano',
      'note': '🏛️ Los números romanos usan pares de sustracción (IV=4, IX=9). El rango es 1-3999: la notación clásica no tiene cero ni forma de escribir más.',
      'out.breakdown': 'Desglose',
      'out.num': 'Número (1-3999)',
      'out.result': 'Valor convertido',
      'out.roman': 'O número romano',
    },
  },
  de: {
    ui: {
      'in.breakdown': 'Aufschlüsselung',
      'in.num': 'Zahl (1-3999)',
      'in.result': 'Umgerechneter Wert',
      'in.roman': 'Oder römische Zahl',
      'note': '🏛️ Römische Zahlen nutzen Subtraktionspaare (IV=4, IX=9). Der Bereich ist 1-3999 — die klassische Notation kennt keine Null und keine größeren Zahlen.',
      'out.breakdown': 'Aufschlüsselung',
      'out.num': 'Zahl (1-3999)',
      'out.result': 'Umgerechneter Wert',
      'out.roman': 'Oder römische Zahl',
    },
  },
}
