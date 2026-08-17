/**
 * lcm-gcd-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = LCMGcdCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const lcmGcdCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'GCD via Euclid\nLCM(a, b) = (a × b) / GCD(a, b)',
      explain: '用反复取余(欧几里得算法)求 GCD。LCM 由连接两者的恒等式得出——两数相乘再除以 GCD。',
    },
    ui: {
      errNoValid: '请输入非 0 的整数(如 12, 18, 24)',
      ignoredEntries: '已忽略:{list}',
      absUsed: '负数按绝对值处理',
      'in.numbers': '数字(逗号分隔)',
      'out.gcd': 'GCD(最大公约数)',
      'out.lcm': 'LCM(最小公倍数)',
      note: '🔢 GCD = 能整除所有输入的最大数。LCM = 能被所有输入整除的最小数。',
    },
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
    formula: {
      formula: 'GCD via Euclid\nLCM(a, b) = (a × b) / GCD(a, b)',
      explain: 'El GCD se halla por restas sucesivas (Euclides). El LCM sigue de la identidad que los une — multiplica y divide entre el GCD.',
    },
    ui: {
      errNoValid: 'Introduce números enteros distintos de 0 (p. ej. 12, 18, 24)',
      ignoredEntries: 'ignorados: {list}',
      absUsed: 'los negativos se tratan como valor absoluto',
      'in.numbers': 'Números (separados por comas)',
      'out.gcd': 'MCD (máximo común divisor)',
      'out.lcm': 'MCM (mínimo común múltiplo)',
      note: '🔢 MCD = el mayor número que divide a todas las entradas. MCM = el menor número divisible por todas las entradas.',
    },
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
    formula: {
      formula: 'GCD via Euclid\nLCM(a, b) = (a × b) / GCD(a, b)',
      explain: 'Der ggT wird durch fortgesetzte Restbildung (Euklid) gefunden. Das kgV folgt aus der Identität — multiplizieren und durch den ggT teilen.',
    },
    ui: {
      errNoValid: 'Gib ganze Zahlen außer 0 ein (z. B. 12, 18, 24)',
      ignoredEntries: 'ignoriert: {list}',
      absUsed: 'negative Zahlen werden als Betrag behandelt',
      'in.numbers': 'Zahlen (kommagetrennt)',
      'out.gcd': 'ggT (größter gemeinsamer Teiler)',
      'out.lcm': 'kgV (kleinstes gemeinsames Vielfaches)',
      note: '🔢 ggT = größte Zahl, die alle Eingaben teilt. kgV = kleinste Zahl, die durch alle Eingaben teilbar ist.',
    },
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
