'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p><strong>Prime factorization</strong> breaks a number into its prime building blocks. Every integer greater than 1 has exactly one unique prime factorization — this is the Fundamental Theorem of Arithmetic.</p>
    <div>
      <h2>How It Works</h2>
      <p>This tool divides out primes one by one, starting from 2. For example: <code>360 = 2 × 2 × 2 × 3 × 3 × 5 = 2³ × 3² × 5</code>.</p>
    </div>
    <div>
      <h2>Uses</h2>
      <ul>
        <li><strong>Simplifying fractions:</strong> GCD comes from common prime factors</li>
        <li><strong>Cryptography:</strong> RSA keys depend on factorization difficulty</li>
        <li><strong>Math homework:</strong> LCM, GCD, simplifying radicals</li>
        <li><strong>Music theory:</strong> Just intonation uses prime ratios</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>La <strong>factorización en primos</strong> descompone un número en sus componentes básicos: los números primos. Cada entero mayor que 1 tiene una única factorización en primos — este es el Teorema Fundamental de la Aritmética.</p>
    <div>
      <h2>Cómo funciona</h2>
      <p>Esta herramienta va dividiendo entre los primos uno a uno, empezando por el 2. Por ejemplo: <code>360 = 2 × 2 × 2 × 3 × 3 × 5 = 2³ × 3² × 5</code>.</p>
    </div>
    <div>
      <h2>Usos</h2>
      <ul>
        <li><strong>Simplificar fracciones:</strong> El MCD proviene de los factores primos comunes</li>
        <li><strong>Criptografía:</strong> Las claves RSA dependen de la dificultad de factorización</li>
        <li><strong>Tareas de matemáticas:</strong> MCM, MCD, simplificar radicales</li>
        <li><strong>Teoría musical:</strong> La afinación justa usa razones primas</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Die <strong>Primfaktorzerlegung</strong> zerlegt eine Zahl in ihre Primzahl-Bausteine. Jede ganze Zahl größer als 1 hat eine eindeutige Primfaktorzerlegung — das ist der Fundamentalsatz der Arithmetik.</p>
    <div>
      <h2>So funktioniert es</h2>
      <p>Dieses Werkzeug teilt nacheinander durch Primzahlen, beginnend bei 2. Zum Beispiel: <code>360 = 2 × 2 × 2 × 3 × 3 × 5 = 2³ × 3² × 5</code>.</p>
    </div>
    <div>
      <h2>Anwendungsbereiche</h2>
      <ul>
        <li><strong>Brüche kürzen:</strong> Der ggT stammt aus gemeinsamen Primfaktoren</li>
        <li><strong>Kryptografie:</strong> RSA-Schlüssel hängen von der Schwierigkeit der Faktorisierung ab</li>
        <li><strong>Mathe-Hausaufgaben:</strong> kgV, ggT, Wurzeln vereinfachen</li>
        <li><strong>Musiktheorie:</strong> Reine Stimmung nutzt Primzahlverhältnisse</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PrimeFactorizationCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
