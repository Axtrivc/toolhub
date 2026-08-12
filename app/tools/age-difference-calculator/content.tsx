'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Age Difference Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool calculates the age gap between two people from their birth years. Useful for relationships, family history, and trivia.</p>

    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Relationship age gaps</li>
        <li>Sibling age differences</li>
        <li>Historical figure comparisons</li>
        <li>Family tree research</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本工具根据两人的出生年份计算年龄差。适用于恋爱关系、家族历史以及趣味问答等场景。</p>

    <div>
      <h2>常见用途</h2>
      <ul>
        <li>恋爱关系中的年龄差</li>
        <li>兄弟姐妹之间的年龄差</li>
        <li>历史人物的年龄对比</li>
        <li>家谱研究</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta calcula la diferencia de edad entre dos personas a partir de sus años de nacimiento. Útil para relaciones, historia familiar y curiosidades.</p>

    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Diferencias de edad en relaciones</li>
        <li>Diferencias de edad entre hermanos</li>
        <li>Comparaciones entre figuras históricas</li>
        <li>Investigación de árbol genealógico</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug berechnet den Altersunterschied zwischen zwei Personen anhand ihrer Geburtsjahre. Nützlich für Beziehungen, Familiengeschichte und Quizwissen.</p>

    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li>Altersunterschiede in Beziehungen</li>
        <li>Altersunterschiede zwischen Geschwistern</li>
        <li>Vergleiche historischer Persönlichkeiten</li>
        <li>Stammbaumforschung</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function AgeDifferenceCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
