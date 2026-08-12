'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Grade Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>Convert points earned into a percentage and letter grade. Standard US letter grade scale (A-F).</p>

    <div>
      <h2>Standard Letter Grades</h2>
      <ul>
        <li>A: 90-100%</li>
        <li>B: 80-89%</li>
        <li>C: 70-79%</li>
        <li>D: 60-69%</li>
        <li>F: below 60%</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>把得分点数换算成百分比和字母等级。采用标准美国字母等级制(A-F)。</p>

    <div>
      <h2>标准字母等级</h2>
      <ul>
        <li>A:90-100%</li>
        <li>B:80-89%</li>
        <li>C:70-79%</li>
        <li>D:60-69%</li>
        <li>F:60% 以下</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Convierte los puntos obtenidos en un porcentaje y una letra de calificación. Escala estándar de letras estadounidense (A-F).</p>

    <div>
      <h2>Letras de calificación estándar</h2>
      <ul>
        <li>A: 90-100 %</li>
        <li>B: 80-89 %</li>
        <li>C: 70-79 %</li>
        <li>D: 60-69 %</li>
        <li>F: por debajo del 60 %</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Wandelt erreichte Punkte in eine Prozentzahl und eine Buchstabennote um. Standard-Notenskala der USA (A-F).</p>

    <div>
      <h2>Standard-Buchstabennoten</h2>
      <ul>
        <li>A: 90-100 %</li>
        <li>B: 80-89 %</li>
        <li>C: 70-79 %</li>
        <li>D: 60-69 %</li>
        <li>F: unter 60 %</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function GradeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
