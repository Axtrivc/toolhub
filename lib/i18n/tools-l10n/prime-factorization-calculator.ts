/**
 * prime-factorization-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = PrimeFactorizationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const primeFactorizationCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'n = p₁^e₁ × p₂^e₂ × … × pₖ^eₖ',
      explain: 'Cada entero > 1 se descompone de forma única en primos. Los exponentes cuentan cuántas veces cada primo divide a n. La herramienta divide entre 2, luego 3, 5, … hasta √n.',
    },
    ui: {
      errMinTwo: 'Introduce un número ≥ 2',
      errIntegers: 'Introduce números enteros',
      errTooBig: 'Introduce un número ≤ 1 000 000 000 000 (10¹²)',
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
      explain: 'Jede ganze Zahl > 1 zerfällt eindeutig in Primzahlen. Die Exponenten zählen, wie oft jede Primzahl n teilt. Das Werkzeug teilt nacheinander durch 2, dann 3, 5, … bis √n.',
    },
    ui: {
      errMinTwo: 'Gib eine Zahl ≥ 2 ein',
      errIntegers: 'Gib ganze Zahlen ein',
      errTooBig: 'Gib eine Zahl ≤ 1.000.000.000.000 (10¹²) ein',
      'in.n': 'Zu faktorisierende Zahl',
      'out.factors': 'Primfaktorzerlegung',
      note: '🧮 Jede ganze Zahl > 1 hat eine eindeutige Primfaktorzerlegung (Fundamentalsatz der Arithmetik).',
    },
    useCases: [
      'Brüche kürzen: der ggT stammt aus gemeinsamen Primfaktoren',
      'Kryptografie: RSA-Schlüssel beruhen auf der Schwierigkeit der Faktorisierung',
      'Mathehausaufgaben: kgV, ggT, Wurzeln vereinfachen',
      'Musiktheorie: Die reine Stimmung nutzt Primzahlverhältnisse',
    ],
    faqs: [
      { q: 'Warum ist Faktorisierung großer Zahlen schwer?', a: 'Für kleine Zahlen ist es einfach, aber für Produkte zweier großer Primzahlen ist kein schneller Algorithmus bekannt. Diese Asymmetrie — leicht zu multiplizieren, schwer zu faktorisieren — macht die RSA-Verschlüsselung sicher.' },
    ],
  },
}
