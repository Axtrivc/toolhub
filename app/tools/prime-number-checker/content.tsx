'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>A <strong>prime number</strong> is divisible only by 1 and itself — like 2, 3, 5, 7, 11. This tool checks any number for primality and finds the next and previous primes.</p>
    <div>
      <h2>Why Primes Matter</h2>
      <ul>
        <li><strong>Cryptography:</strong> RSA encryption relies on the difficulty of factoring large primes</li>
        <li><strong>Hash tables:</strong> Prime-sized buckets reduce collisions</li>
        <li><strong>Number theory:</strong> The Fundamental Theorem of Arithmetic</li>
        <li><strong>Random number generators:</strong> Often use primes</li>
      </ul>
    </div>
    <div>
      <h2>Interesting Prime Facts</h2>
      <ul>
        <li>2 is the only even prime</li>
        <li>There are infinitely many primes (Euclid proved this ~300 BC)</li>
        <li>The largest known prime, 2^136,279,841 − 1 (found October 2024), has over 41 million digits</li>
        <li>Primes become less common as numbers get larger, but never run out</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p><strong>质数</strong>只能被 1 和它自身整除——例如 2、3、5、7、11。本工具可检查任意数字是否为质数,并找出相邻的下一个和上一个质数。</p>
    <div>
      <h2>质数为何重要</h2>
      <ul>
        <li><strong>密码学:</strong> RSA 加密依赖于大质数分解的困难性</li>
        <li><strong>哈希表:</strong> 质数大小的桶能减少冲突</li>
        <li><strong>数论:</strong> 算术基本定理</li>
        <li><strong>随机数生成器:</strong> 常使用质数</li>
      </ul>
    </div>
    <div>
      <h2>有趣的质数冷知识</h2>
      <ul>
        <li>2 是唯一的偶数质数</li>
        <li>质数有无穷多个(欧几里得在约公元前 300 年证明了这一点)</li>
        <li>已知最大的质数是 2^136,279,841 − 1(2024 年 10 月发现),超过 4100 万位</li>
        <li>数字越大,质数越稀少,但永远不会耗尽</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Un <strong>número primo</strong> solo es divisible entre 1 y entre sí mismo — como 2, 3, 5, 7, 11. Esta herramienta comprueba si cualquier número es primo y encuentra el primo siguiente y el anterior.</p>
    <div>
      <h2>Por qué importan los primos</h2>
      <ul>
        <li><strong>Criptografía:</strong> El cifrado RSA se basa en la dificultad de factorizar primos grandes</li>
        <li><strong>Tablas hash:</strong> Los cubos de tamaño primo reducen las colisiones</li>
        <li><strong>Teoría de números:</strong> El Teorema Fundamental de la Aritmética</li>
        <li><strong>Generadores de números aleatorios:</strong> A menudo usan primos</li>
      </ul>
    </div>
    <div>
      <h2>Datos curiosos sobre los primos</h2>
      <ul>
        <li>2 es el único primo par</li>
        <li>Hay infinitos primos (Euclides lo demostró ~300 a. C.)</li>
        <li>El mayor primo conocido, 2^136,279,841 − 1 (hallado en octubre de 2024), tiene más de 41 millones de dígitos</li>
        <li>Los primos se vuelven menos frecuentes a medida que los números crecen, pero nunca se agotan</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Eine <strong>Primzahl</strong> ist nur durch 1 und sich selbst teilbar — wie 2, 3, 5, 7, 11. Dieses Werkzeug prüft jede Zahl auf die Primzahl-Eigenschaft und findet die nächste und die vorherige Primzahl.</p>
    <div>
      <h2>Warum Primzahlen wichtig sind</h2>
      <ul>
        <li><strong>Kryptografie:</strong> Die RSA-Verschlüsselung beruht auf der Schwierigkeit, große Primzahlen zu faktorisieren</li>
        <li><strong>Hashtabellen:</strong> Buckets in Primzahlgröße verringern Kollisionen</li>
        <li><strong>Zahlentheorie:</strong> Der Fundamentalsatz der Arithmetik</li>
        <li><strong>Zufallszahlengeneratoren:</strong> Nutzen oft Primzahlen</li>
      </ul>
    </div>
    <div>
      <h2>Interessante Primzahl-Fakten</h2>
      <ul>
        <li>2 ist die einzige gerade Primzahl</li>
        <li>Es gibt unendlich viele Primzahlen (Euklid bewies das ~300 v. Chr.)</li>
        <li>Die größte bekannte Primzahl, 2^136,279,841 − 1 (entdeckt im Oktober 2024), hat über 41 Millionen Stellen</li>
        <li>Primzahlen werden seltener, je größer die Zahlen werden, gehen aber nie aus</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PrimeNumberCheckerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
