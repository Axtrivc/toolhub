/**
 * prime-factorization-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = PrimeFactorizationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const primeFactorizationCalculatorL10n: ToolL10n = {
  zh: {
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
