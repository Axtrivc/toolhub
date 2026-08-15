/**
 * prime-factorization-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = PrimeFactorizationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const primeFactorizationCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'n = p₁^e₁ × p₂^e₂ × … × pₖ^eₖ',
      explain: '每个大于 1 的整数都能唯一分解为素数。指数表示每个素数整除 n 的次数。工具依次除尽 2、3、5……直到 √n。',
    },
    ui: {
      errMinTwo: '请输入 ≥ 2 的数',
      'in.n': '要分解的数',
      'out.factors': '质因数分解',
      note: '🧮 每个大于 1 的整数都有唯一的质因数分解(算术基本定理)。',
    },
    useCases: [
      '化简分数:GCD 来自公共质因数',
      '密码学:RSA 密钥依赖分解难度',
      '数学作业:求 LCM、GCD、化简根式',
      '音乐理论:纯律使用质数比',
    ],
    faqs: [
      { q: '为什么大数分解很难?', a: '对小数字很容易,但对于两个大质数的乘积,目前没有已知的高效算法。这种「容易相乘、难以分解」的不对称性,正是 RSA 加密安全性的基础。' },
    ],
  },
  es: {
    formula: {
      formula: 'n = p₁^e₁ × p₂^e₂ × … × pₖ^eₖ',
      explain: 'Cada entero > 1 se descompone de forma única en primos. Los exponentes cuentan cuántas veces cada primo divide a n. La herramienta divide entre 2, luego 3, 5, … hasta √n.',
    },
    ui: {
      errMinTwo: 'Introduce un número ≥ 2',
      'in.n': 'Número a factorizar',
      'out.factors': 'Factorización en primos',
      note: '🧮 Cada entero > 1 tiene una factorización en primos única (teorema fundamental de la aritmética).',
    },
    useCases: [
      'simplificar fracciones: el MCD proviene de los factores primos comunes',
      'criptografía: las claves RSA dependen de la dificultad de factorización',
      'deberes de matemáticas: MCM, MCD, simplificar radicales',
      'teoría musical: la afinación justa usa razones primas',
    ],
    faqs: [
      { q: '¿Por qué es difícil factorizar números grandes?', a: 'Para números pequeños es fácil, pero para productos de dos primos grandes no se conoce ningún algoritmo rápido. Esta asimetría — fácil de multiplicar, difícil de factorizar — es lo que hace seguro el cifrado RSA.' },
    ],
  },
  de: {
    formula: {
      formula: 'n = p₁^e₁ × p₂^e₂ × … × pₖ^eₖ',
      explain: 'Jede ganze Zahl > 1 zerfällt eindeutig in Primzahlen. Die Exponenten zählen, wie oft jede Primzahl n teilt. Das Werkzeug dividiert 2, dann 3, 5, … bis √n heraus.',
    },
    ui: {
      errMinTwo: 'Gib eine Zahl ≥ 2 ein',
      'in.n': 'Zu faktorisierende Zahl',
      'out.factors': 'Primfaktorzerlegung',
      note: '🧮 Jede ganze Zahl > 1 hat eine eindeutige Primfaktorzerlegung (Fundamentalsatz der Arithmetik).',
    },
    useCases: [
      'Brüche kürzen: der ggT stammt aus gemeinsamen Primfaktoren',
      'Kryptografie: RSA-Schlüssel beruhen auf Faktorisierungsschwierigkeit',
      'Mathehausaufgaben: kgV, ggT, Wurzeln vereinfachen',
      'Musiktheorie: Die reine Stimmung nutzt Primzahlverhältnisse',
    ],
    faqs: [
      { q: 'Warum ist Faktorisierung großer Zahlen schwer?', a: 'Für kleine Zahlen ist es einfach, aber für Produkte zweier großer Primzahlen ist kein schneller Algorithmus bekannt. Diese Asymmetrie — leicht zu multiplizieren, schwer zu faktorisieren — macht die RSA-Verschlüsselung sicher.' },
    ],
  },
}
