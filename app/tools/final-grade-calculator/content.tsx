'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Final Grade Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This calculator answers the classic student question: &quot;What do I need on the final to get an A?&quot; Enter your current grade, target grade, and final exam weight to see the required score.</p>

    <div>
      <h2>How It Works</h2>
      <p>Solves for the final exam score using the weighted average formula: <code>target = current × (1 − w) + final × w</code>. Rearranging: <code>final = (target − current(1−w)) / w</code>.</p>
    </div>

    <div>
      <h2>When It&apos;s Impossible</h2>
      <p>If the required final score is over 100%, your target is unreachable — even a perfect final won&apos;t get you there. The tool will warn you in this case.</p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本计算器回答学生最经典的问题:「要想拿到 A,期末考试我需要考多少分?」输入你当前的成绩、目标成绩和期末考试的权重,即可看到所需的分数。</p>

    <div>
      <h2>计算原理</h2>
      <p>使用加权平均公式求解期末考试分数:<code>target = current × (1 − w) + final × w</code>。整理后:<code>final = (target − current(1−w)) / w</code>。</p>
    </div>

    <div>
      <h2>什么时候「不可能」</h2>
      <p>如果所需的期末分数超过 100%,说明你的目标无法达成——即使期末满分也达不到。这种情况下工具会给出警告。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta calculadora responde a la clásica pregunta estudiantil: «¿Qué necesito en el final para sacar una A?» Introduce tu nota actual, la nota objetivo y el peso del examen final para ver la puntuación requerida.</p>

    <div>
      <h2>Cómo funciona</h2>
      <p>Resuelve la puntuación del examen final con la fórmula del promedio ponderado: <code>target = current × (1 − w) + final × w</code>. Despejando: <code>final = (target − current(1−w)) / w</code>.</p>
    </div>

    <div>
      <h2>Cuando es imposible</h2>
      <p>Si la puntuación final requerida supera el 100 %, tu objetivo es inalcanzable — ni siquiera un final perfecto te llevará ahí. La herramienta te avisará en ese caso.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieser Rechner beantwortet die klassische Frage der Studierenden: „Was brauche ich in der Abschlussprüfung für eine A?" Trage deine aktuelle Note, die Zielnote und das Gewicht der Abschlussprüfung ein, um die nötige Punktzahl zu sehen.</p>

    <div>
      <h2>Wie es funktioniert</h2>
      <p>Berechnet die Punktzahl der Abschlussprüfung mit der Formel für den gewichteten Durchschnitt: <code>target = current × (1 − w) + final × w</code>. Umgestellt: <code>final = (target − current(1−w)) / w</code>.</p>
    </div>

    <div>
      <h2>Wenn es unmöglich ist</h2>
      <p>Wenn die nötige Punktzahl über 100 % liegt, ist dein Ziel unerreichbar — selbst eine perfekte Abschlussprüfung reicht nicht aus. Das Werkzeug warnt dich in diesem Fall.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function FinalGradeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
