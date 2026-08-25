/**
 * base-converter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const BaseConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'binary': '二进制 (2)',
      'common': '常用',
      'inBase': '输入进制',
      'invalidDigit': '不是该进制下的有效数字',
      'note': '🔢 9 以上的数位用字母 a-z(因此 36 进制是 0-9 加 a-z)。小数转换约 10 位后截断;十进制 0.1 这类二进制小数天然无限循环。',
      'valueLabel': '数值',
    },
  },
  es: {
    ui: {
      'binary': 'Binario (2)',
      'common': 'común',
      'inBase': 'Base de entrada',
      'invalidDigit': 'no es un número válido en base',
      'note': '🔢 Los dígitos sobre 9 son letras a-z (base 36 usa 0-9 y a-z). Las fracciones se redondean a ~10 dígitos; 0,1 en binario se repite por naturaleza.',
      'valueLabel': 'Valor',
    },
  },
  de: {
    ui: {
      'binary': 'Binär (2)',
      'common': 'üblich',
      'inBase': 'Eingabe-Basis',
      'invalidDigit': 'ist keine gültige Zahl in Basis',
      'note': '🔢 Ziffern über 9 sind Buchstaben a-z (Basis 36: 0-9 dann a-z). Brüche runden bei ~10 Stellen; 0,1 dezimal wiederholt sich im Binären endlos.',
      'valueLabel': 'Wert',
    },
  },
}
