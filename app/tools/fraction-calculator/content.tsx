'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This calculator performs exact arithmetic on fractions — add, subtract, multiply, and divide. Results are automatically simplified to lowest terms and shown as both a fraction and a decimal.</p>
    <div>
      <h2>The Four Operations</h2>
      <ul>
        <li><strong>Add/Subtract:</strong> Find a common denominator, then combine numerators</li>
        <li><strong>Multiply:</strong> Multiply numerators, multiply denominators</li>
        <li><strong>Divide:</strong> Flip the second fraction (reciprocal), then multiply</li>
        <li>Results are reduced using the greatest common divisor (GCD)</li>
      </ul>
    </div>
    <div>
      <h2>Example Calculations</h2>
      <ul>
        <li>1/2 + 1/3 = 5/6</li>
        <li>3/4 × 2/5 = 6/20 = 3/10</li>
        <li>2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6</li>
        <li>5/2 = 2 1/2 (mixed number)</li>
      </ul>
    </div>
    <div>
      <h2>Why Fractions Matter</h2>
      <p>Fractions give exact answers where decimals round off. In carpentry, cooking, engineering, and music theory, fractions are the natural language. A measurement of 1/3 inch is more precise than 0.33 inch — and a fraction calculator prevents accumulation of rounding errors.</p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本计算器对分数进行精确运算——加、减、乘、除。结果会自动约简为最简分数,并同时以分数和小数两种形式显示。</p>
    <div>
      <h2>四则运算</h2>
      <ul>
        <li><strong>加/减:</strong>先找到公分母,再合并分子</li>
        <li><strong>乘:</strong>分子相乘,分母相乘</li>
        <li><strong>除:</strong>把第二个分数翻转(取倒数),然后相乘</li>
        <li>结果通过最大公约数(GCD)约分</li>
      </ul>
    </div>
    <div>
      <h2>示例计算</h2>
      <ul>
        <li>1/2 + 1/3 = 5/6</li>
        <li>3/4 × 2/5 = 6/20 = 3/10</li>
        <li>2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6</li>
        <li>5/2 = 2 1/2(带分数)</li>
      </ul>
    </div>
    <div>
      <h2>为什么分数很重要</h2>
      <p>在小数不得不四舍五入的地方,分数能给出精确答案。在木工、烹饪、工程和音乐理论中,分数是自然的语言。1/3 英寸的测量比 0.33 英寸更精确——而且分数计算器能避免舍入误差不断累积。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta calculadora realiza aritmética exacta con fracciones — sumar, restar, multiplicar y dividir. Los resultados se simplifican automáticamente a su mínima expresión y se muestran tanto como fracción como en decimal.</p>
    <div>
      <h2>Las cuatro operaciones</h2>
      <ul>
        <li><strong>Sumar/Restar:</strong> Busca un denominador común y luego combina los numeradores</li>
        <li><strong>Multiplicar:</strong> Multiplica los numeradores, multiplica los denominadores</li>
        <li><strong>Dividir:</strong> Invierte la segunda fracción (su recíproco) y luego multiplica</li>
        <li>Los resultados se reducen usando el máximo común divisor (MCD)</li>
      </ul>
    </div>
    <div>
      <h2>Cálculos de ejemplo</h2>
      <ul>
        <li>1/2 + 1/3 = 5/6</li>
        <li>3/4 × 2/5 = 6/20 = 3/10</li>
        <li>2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6</li>
        <li>5/2 = 2 1/2 (número mixto)</li>
      </ul>
    </div>
    <div>
      <h2>Por qué importan las fracciones</h2>
      <p>Las fracciones dan respuestas exactas donde los decimales se redondean. En carpintería, cocina, ingeniería y teoría musical, las fracciones son el lenguaje natural. Una medida de 1/3 de pulgada es más precisa que 0,33 pulgadas — y una calculadora de fracciones evita la acumulación de errores de redondeo.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieser Rechner führt exakte Arithmetik mit Brüchen aus — Addieren, Subtrahieren, Multiplizieren und Dividieren. Ergebnisse werden automatisch vollständig gekürzt und sowohl als Bruch als auch als Dezimalzahl angezeigt.</p>
    <div>
      <h2>Die vier Grundoperationen</h2>
      <ul>
        <li><strong>Addieren/Subtrahieren:</strong> Finde einen gemeinsamen Nenner und kombiniere dann die Zähler</li>
        <li><strong>Multiplizieren:</strong> Multipliziere die Zähler, multipliziere die Nenner</li>
        <li><strong>Dividieren:</strong> Kehre den zweiten Bruch um (Kehrwert) und multipliziere dann</li>
        <li>Ergebnisse werden mit dem größten gemeinsamen Teiler (ggT) gekürzt</li>
      </ul>
    </div>
    <div>
      <h2>Beispielrechnungen</h2>
      <ul>
        <li>1/2 + 1/3 = 5/6</li>
        <li>3/4 × 2/5 = 6/20 = 3/10</li>
        <li>2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6</li>
        <li>5/2 = 2 1/2 (gemischter Bruch)</li>
      </ul>
    </div>
    <div>
      <h2>Warum Brüche wichtig sind</h2>
      <p>Brüche liefern exakte Antworten, wo Dezimalzahlen runden. In Tischlerei, Kochen, Ingenieurwesen und Musiktheorie sind Brüche die natürliche Sprache. Eine Messung von 1/3 Zoll ist präziser als 0,33 Zoll — und ein Bruchrechner verhindert die Anhäufung von Rundungsfehlern.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function FractionCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
