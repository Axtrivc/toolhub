/**
 * lcm-gcd-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = LCMGcdCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const lcmGcdCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '为分数加法求公分母',
      '安排周期性事件的会合时间',
      '寻找能整铺矩形地面的最大方砖',
      '理解 RSA 加密算法的数论基础',
    ],
    faqs: [
      { q: '如果只输入一个数字会怎样?', a: '单个数字的 GCD 就是它本身,其 LCM 也是它本身。本计算器能正确处理这种情况。' },
    ],
  },
  es: {
    useCases: [
      'encontrar el denominador común para sumar fracciones',
      'programar cuándo coinciden eventos periódicos',
      'hallar el azulejo cuadrado más grande que enlosa un rectángulo',
      'entender la base del algoritmo RSA',
    ],
    faqs: [
      { q: '¿Qué pasa si introduzco un solo número?', a: 'El MCD de un único número es el número mismo, y su MCM también es él mismo. La calculadora gestiona este caso correctamente.' },
    ],
  },
  de: {
    useCases: [
      'einen gemeinsamen Nenner für die Bruchaddition finden',
      'zeitplanen, wann periodische Ereignisse zusammenfallen',
      'die größte quadratische Fliese finden, die einen Boden lückenlos auslegt',
      'die Zahlentheorie hinter dem RSA-Verfahren verstehen',
    ],
    faqs: [
      { q: 'Was passiert, wenn ich nur eine Zahl eingebe?', a: 'Der ggT einer einzelnen Zahl ist die Zahl selbst, und ihr kgV ist ebenfalls sie selbst. Der Rechner behandelt diesen Fall korrekt.' },
    ],
  },
}
