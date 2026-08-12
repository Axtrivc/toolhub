'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This calculator finds the <strong>GCD</strong> (greatest common divisor) and{' '}
      <strong>LCM</strong> (least common multiple) of any set of positive integers. These are
      fundamental concepts in number theory with practical uses in math and programming.
    </p>

    <div>
      <h2>What GCD and LCM Mean</h2>
      <ul>
        <li>
          <strong>GCD</strong> is the largest number that divides all inputs evenly. For 12 and 18,
          that&apos;s 6 (both divide by 1, 2, 3, and 6 &mdash; and 6 is the largest).
        </li>
        <li>
          <strong>LCM</strong> is the smallest number that all inputs divide into evenly. For 4 and
          6, that&apos;s 12 (the smallest number divisible by both).
        </li>
      </ul>
    </div>

    <div>
      <h2>Real-World Uses</h2>
      <ul>
        <li>
          <strong>Adding fractions:</strong> LCM of denominators gives the common denominator
        </li>
        <li>
          <strong>Scheduling:</strong> If event A runs every 4 days and B every 6 days, they
          coincide every LCM(4,6) = 12 days
        </li>
        <li>
          <strong>Tile patterns:</strong> Find the largest square tile that fits evenly into a
          rectangular floor
        </li>
        <li>
          <strong>Cryptography:</strong> GCD is the basis of the RSA algorithm
        </li>
      </ul>
    </div>

    <div>
      <h2>The Relationship</h2>
      <p>
        For any two numbers: <code>GCD(a,b) &times; LCM(a,b) = a &times; b</code>. So if you know
        one, you can find the other instantly. This calculator uses the efficient Euclidean
        algorithm, which works even for very large numbers.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这个工具是什么?</h2>
    <p>
      这个计算器可以求任意一组正整数的 <strong>GCD</strong>(最大公约数)和 <strong>LCM</strong>(最小公倍数)。它们是数论中的基本概念,在数学和编程中都有实际用途。
    </p>

    <div>
      <h2>GCD 和 LCM 是什么</h2>
      <ul>
        <li>
          <strong>GCD</strong> 是能整除所有输入的最大数。对于 12 和 18,就是 6(两者都能被 1、2、3 和 6 整除——而 6 是其中最大的)。
        </li>
        <li>
          <strong>LCM</strong> 是所有输入都能整除它的最小数。对于 4 和 6,就是 12(能同时被两者整除的最小数)。
        </li>
      </ul>
    </div>

    <div>
      <h2>实际用途</h2>
      <ul>
        <li>
          <strong>分数加法:</strong> 分母的 LCM 给出公分母
        </li>
        <li>
          <strong>排程:</strong> 如果事件 A 每 4 天发生一次,B 每 6 天一次,它们每 LCM(4,6) = 12 天重合一次
        </li>
        <li>
          <strong>铺砖图案:</strong> 找出能正好铺满矩形地面的最大正方形瓷砖
        </li>
        <li>
          <strong>密码学:</strong> GCD 是 RSA 算法的基础
        </li>
      </ul>
    </div>

    <div>
      <h2>两者之间的关系</h2>
      <p>
        对于任意两个数:<code>GCD(a,b) × LCM(a,b) = a × b</code>。所以只要知道其中一个,就能立即算出另一个。本计算器使用高效的欧几里得算法,即使对非常大的数也适用。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta calculadora encuentra el <strong>GCD</strong> (máximo común divisor) y el{' '}
      <strong>LCM</strong> (mínimo común múltiplo) de cualquier conjunto de números enteros
      positivos. Son conceptos fundamentales de la teoría de números con usos prácticos en
      matemáticas y programación.
    </p>

    <div>
      <h2>Qué significan GCD y LCM</h2>
      <ul>
        <li>
          El <strong>GCD</strong> es el mayor número que divide a todas las entradas de forma
          exacta. Para 12 y 18, es 6 (ambos se dividen entre 1, 2, 3 y 6 — y 6 es el mayor).
        </li>
        <li>
          El <strong>LCM</strong> es el menor número que todas las entradas dividen de forma exacta.
          Para 4 y 6, es 12 (el menor número divisible por ambos).
        </li>
      </ul>
    </div>

    <div>
      <h2>Usos prácticos</h2>
      <ul>
        <li>
          <strong>Sumar fracciones:</strong> el LCM de los denominadores da el denominador común
        </li>
        <li>
          <strong>Planificación:</strong> si el evento A ocurre cada 4 días y B cada 6 días,
          coinciden cada LCM(4,6) = 12 días
        </li>
        <li>
          <strong>Patrones de baldosas:</strong> encontrar la baldosa cuadrada más grande que encaje
          exactamente en un suelo rectangular
        </li>
        <li>
          <strong>Criptografía:</strong> el GCD es la base del algoritmo RSA
        </li>
      </ul>
    </div>

    <div>
      <h2>La relación</h2>
      <p>
        Para dos números cualesquiera: <code>GCD(a,b) × LCM(a,b) = a × b</code>. Así que si conoces
        uno, puedes encontrar el otro al instante. Esta calculadora usa el eficiente algoritmo de
        Euclides, que funciona incluso con números muy grandes.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Worum geht es bei diesem Werkzeug?</h2>
    <p>
      Dieser Rechner ermittelt den <strong>GCD</strong> (größten gemeinsamen Teiler) und das{' '}
      <strong>LCM</strong> (kleinste gemeinsame Vielfache) einer beliebigen Menge positiver ganzer
      Zahlen. Das sind grundlegende Konzepte der Zahlentheorie mit praktischen Anwendungen in
      Mathematik und Programmierung.
    </p>

    <div>
      <h2>Was GCD und LCM bedeuten</h2>
      <ul>
        <li>
          Der <strong>GCD</strong> ist die größte Zahl, die alle Eingaben ohne Rest teilt. Für 12
          und 18 ist das 6 (beide sind teilbar durch 1, 2, 3 und 6 — und 6 ist die größte).
        </li>
        <li>
          Das <strong>LCM</strong> ist die kleinste Zahl, in die alle Eingaben ohne Rest aufgehen.
          Für 4 und 6 ist das 12 (die kleinste Zahl, die durch beide teilbar ist).
        </li>
      </ul>
    </div>

    <div>
      <h2>Praktische Anwendungen</h2>
      <ul>
        <li>
          <strong>Brüche addieren:</strong> Das LCM der Nenner liefert den Hauptnenner
        </li>
        <li>
          <strong>Terminplanung:</strong> Wenn Ereignis A alle 4 Tage und B alle 6 Tage stattfindet,
          treffen sie alle LCM(4,6) = 12 Tage aufeinander
        </li>
        <li>
          <strong>Fliesenmuster:</strong> Finde die größte quadratische Fliese, die genau in einen
          rechteckigen Boden passt
        </li>
        <li>
          <strong>Kryptografie:</strong> Der GCD ist die Grundlage des RSA-Algorithmus
        </li>
      </ul>
    </div>

    <div>
      <h2>Der Zusammenhang</h2>
      <p>
        Für zwei beliebige Zahlen gilt: <code>GCD(a,b) × LCM(a,b) = a × b</code>. Wenn du also
        eines kennst, kannst du das andere sofort berechnen. Dieser Rechner verwendet den
        effizienten euklidischen Algorithmus, der auch bei sehr großen Zahlen funktioniert.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function LCMGcdCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
