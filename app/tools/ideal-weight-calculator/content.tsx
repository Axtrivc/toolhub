'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This calculator shows your <strong>ideal body weight</strong> using three classic medical formulas (Devine, Robinson, Hamwi), plus the BMI-based healthy range. Each formula was developed for different populations and gives slightly different results.</p>
    <div>
      <h2>The Three Formulas</h2>
      <ul>
        <li><strong>Devine (1974):</strong> Originally developed for drug dosing; still the most widely cited</li>
        <li><strong>Robinson (1983):</strong> Updated Devine with newer data</li>
        <li><strong>Hamwi (1964):</strong> Older formula, still used in some clinical settings</li>
      </ul>
    </div>
    <div>
      <h2>Why Results Differ</h2>
      <p>The formulas were built on different data and assumptions about body composition. They&apos;re all estimates — your true healthy weight depends on muscle mass, frame size, body fat distribution, and overall health, none of which a simple formula can capture.</p>
    </div>
    <div>
      <h2>A More Useful Number: BMI Range</h2>
      <p>The BMI-based healthy range (18.5-24.9 × your height²) is more flexible than a single ideal weight. Anywhere in that range is statistically associated with the lowest health risks for most adults.</p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>本计算器使用三种经典医学公式（Devine、Robinson、Hamwi）计算你的「理想体重」，并给出基于 BMI 的健康体重范围。每种公式都针对不同人群开发，结果会略有差异。</p>
    <div>
      <h2>三大公式</h2>
      <ul>
        <li><strong>Devine（1974）：</strong>最初用于药物剂量计算，至今仍是最常被引用的公式</li>
        <li><strong>Robinson（1983）：</strong>基于更新的数据对 Devine 公式进行了修订</li>
        <li><strong>Hamwi（1964）：</strong>较老的公式，部分临床场景仍在使用</li>
      </ul>
    </div>
    <div>
      <h2>为什么结果不同</h2>
      <p>这些公式基于不同的数据和关于身体成分的假设建立。它们都只是估算值——你真正的健康体重取决于肌肉量、骨架大小、体脂分布和整体健康状况，这些是简单公式无法涵盖的。</p>
    </div>
    <div>
      <h2>更有用的数字：BMI 范围</h2>
      <p>基于 BMI 的健康体重范围（18.5-24.9 × 身高²）比单一的理想体重更灵活。对大多数成年人来说，该范围内的任何体重在统计学上都与最低健康风险相关。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta calculadora muestra tu <strong>peso ideal</strong> utilizando tres fórmulas médicas clásicas (Devine, Robinson, Hamwi), además del rango saludable basado en el IMC. Cada fórmula se desarrolló para diferentes poblaciones y da resultados ligeramente distintos.</p>
    <div>
      <h2>Las tres fórmulas</h2>
      <ul>
        <li><strong>Devine (1974):</strong> Desarrollada originalmente para la dosificación de medicamentos; sigue siendo la más citada</li>
        <li><strong>Robinson (1983):</strong> Actualización de Devine con datos más recientes</li>
        <li><strong>Hamwi (1964):</strong> Fórmula más antigua, aún utilizada en algunos entornos clínicos</li>
      </ul>
    </div>
    <div>
      <h2>Por qué los resultados varían</h2>
      <p>Las fórmulas se basaron en diferentes datos y suposiciones sobre la composición corporal. Todas son estimaciones — tu peso saludable real depende de la masa muscular, la complexión, la distribución de la grasa corporal y la salud general, ninguno de los cuales puede capturar una simple fórmula.</p>
    </div>
    <div>
      <h2>Un número más útil: el rango de IMC</h2>
      <p>El rango saludable basado en el IMC (18,5-24,9 × tu altura²) es más flexible que un único peso ideal. Cualquier valor dentro de ese rango se asocia estadísticamente con los menores riesgos para la salud en la mayoría de los adultos.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Tool?</h2>
    <p>Dieser Rechner zeigt dein <strong>Idealgewicht</strong> mit drei klassischen medizinischen Formeln (Devine, Robinson, Hamwi) sowie dem BMI-basierten gesunden Bereich. Jede Formel wurde für unterschiedliche Bevölkerungsgruppen entwickelt und liefert leicht abweichende Ergebnisse.</p>
    <div>
      <h2>Die drei Formeln</h2>
      <ul>
        <li><strong>Devine (1974):</strong> Ursprünglich für die Medikamentendosierung entwickelt; immer noch am häufigsten zitiert</li>
        <li><strong>Robinson (1983):</strong> Aktualisierte Devine mit neueren Daten</li>
        <li><strong>Hamwi (1964):</strong> Ältere Formel, in einigen klinischen Bereichen noch verwendet</li>
      </ul>
    </div>
    <div>
      <h2>Warum die Ergebnisse abweichen</h2>
      <p>Die Formeln basieren auf unterschiedlichen Daten und Annahmen zur Körperzusammensetzung. Sie sind alle nur Schätzungen — dein wirkliches gesundes Gewicht hängt von Muskelmasse, Statur, Fettverteilung und allgemeiner Gesundheit ab, was eine einfache Formel nicht erfassen kann.</p>
    </div>
    <div>
      <h2>Eine nützlichere Zahl: der BMI-Bereich</h2>
      <p>Der BMI-basierte gesunde Bereich (18,5-24,9 × deine Körpergröße²) ist flexibler als ein einzelnes Idealgewicht. Jeder Wert in diesem Bereich ist statistisch mit dem niedrigsten Gesundheitsrisiko für die meisten Erwachsenen verbunden.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function IdealWeightCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
