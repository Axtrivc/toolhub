'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>A <strong>permutation</strong> counts how many ways to arrange r items from n, where order matters. Arranging 3 books on a shelf from 5 is different based on which order — that&apos;s a permutation.</p>
    <div>
      <h2>The Formula</h2>
      <p>P(n,r) = n! / (n−r)!. For arranging 3 from 5: <code>5! / 2! = 60</code>.</p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li><strong>Passwords:</strong> 4-digit PIN = 10⁴ permutations</li>
        <li><strong>Race results:</strong> Top 3 from 8 runners (ordered)</li>
        <li><strong>Seating arrangements:</strong> Who sits where at a table</li>
        <li><strong>Code generation:</strong> Counting possible IDs</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p><strong>排列</strong>计算从 n 个物品中取出 r 个进行有序排列的方式数，此时先后顺序至关重要。从 5 本书里挑 3 本摆上书架，摆放顺序不同结果就不同——这就是排列。</p>
    <div>
      <h2>公式</h2>
      <p>P(n,r) = n! / (n−r)!。从 5 个中排 3 个:<code>5! / 2! = 60</code>。</p>
    </div>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li><strong>密码:</strong>4 位 PIN 码 = 10⁴ 种排列</li>
        <li><strong>比赛名次:</strong>8 名选手取前 3 名(有先后顺序)</li>
        <li><strong>座位安排:</strong>谁坐在桌子的哪个位置</li>
        <li><strong>编码生成:</strong>统计可能的 ID 数量</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Una <strong>permutación</strong> cuenta de cuántas formas se pueden ordenar r elementos tomados de n, donde el orden importa. Colocar 3 libros de 5 en una estantería da resultados distintos según el orden — eso es una permutación.</p>
    <div>
      <h2>La fórmula</h2>
      <p>P(n,r) = n! / (n−r)!. Para ordenar 3 de 5: <code>5! / 2! = 60</code>.</p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li><strong>Contraseñas:</strong> PIN de 4 dígitos = 10⁴ permutaciones</li>
        <li><strong>Resultados de carrera:</strong> Los 3 primeros de 8 corredores (ordenados)</li>
        <li><strong>Disposición de asientos:</strong> Quién se sienta dónde en una mesa</li>
        <li><strong>Generación de códigos:</strong> Contar los ID posibles</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Eine <strong>Permutation</strong> zählt, auf wie viele Arten man r Elemente aus n anordnen kann, wobei die Reihenfolge wichtig ist. Drei Bücher aus fünf in ein Regal zu stellen, ergibt je nach Reihenfolge unterschiedliche Ergebnisse — das ist eine Permutation.</p>
    <div>
      <h2>Die Formel</h2>
      <p>P(n,r) = n! / (n−r)!. Für 3 aus 5: <code>5! / 2! = 60</code>.</p>
    </div>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li><strong>Passwörter:</strong> 4-stellige PIN = 10⁴ Permutationen</li>
        <li><strong>Rennergebnisse:</strong> Die besten 3 von 8 Läufern (geordnet)</li>
        <li><strong>Sitzordnungen:</strong> Wer wo am Tisch sitzt</li>
        <li><strong>Codegenerierung:</strong> Mögliche IDs zählen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PermutationCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
