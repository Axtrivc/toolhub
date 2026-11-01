/**
 * lcm-gcd-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = LCMGcdCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const lcmGcdCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'GCD via Euclid\nLCM(a, b) = (a × b) / GCD(a, b)',
      explain: 'El MCD se halla por divisiones sucesivas con resto (algoritmo de Euclides). El MCM se deduce de la identidad que los une — multiplica ambos números y divide entre el MCD.',
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
      'hallar la baldosa cuadrada más grande que cubra un suelo rectangular',
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
      'die größte quadratische Fliese finden, die lückenlos in einen rechteckigen Boden passt',
      'die Zahlentheorie hinter dem RSA-Verfahren verstehen',
    ],
    faqs: [
      { q: 'Was passiert, wenn ich nur eine Zahl eingebe?', a: 'Der ggT einer einzelnen Zahl ist die Zahl selbst, und ihr kgV ist ebenfalls sie selbst. Der Rechner behandelt diesen Fall korrekt.' },
    ],
  },
}
