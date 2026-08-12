'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DTI Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p><strong>DTI</strong> (Debt-to-Income ratio) compares your monthly debt payments to your gross income. Lenders use it as a key factor in approving mortgages, car loans, and credit cards.</p>

    <div>
      <h2>Lender DTI Thresholds</h2>
      <ul>
        <li><strong>Below 36%:</strong> Healthy &mdash; most loan types approve easily</li>
        <li><strong>36-43%:</strong> Tight &mdash; many lenders cap at 43% for mortgages</li>
        <li><strong>Above 43%:</strong> High &mdash; most lenders deny; consider paying down debt first</li>
      </ul>
    </div>

    <div>
      <h2>The 28/36 Rule</h2>
      <p>A classic guideline: housing payment should be ≤28% of gross income; total debts (including housing) ≤36%. Many conventional mortgages allow up to 43-50% on the back end with strong credit.</p>
    </div>

    <div>
      <h2>What Counts as Debt</h2>
      <ul>
        <li>Mortgage or rent (proposed housing for new loans)</li>
        <li>Minimum credit card payments</li>
        <li>Auto, student, and personal loans</li>
        <li>Child support, alimony</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p><strong>DTI</strong>(债务收入比)将你的月度偿债支出与税前收入进行对比。贷款机构在审批房贷、车贷和信用卡时,会把它作为关键指标。</p>

    <div>
      <h2>贷款机构的 DTI 阈值</h2>
      <ul>
        <li><strong>低于 36%:</strong> 健康——大多数贷款类型都很容易获批</li>
        <li><strong>36-43%:</strong> 偏紧——许多贷款机构对房贷上限设为 43%</li>
        <li><strong>高于 43%:</strong> 偏高——大多数贷款机构会拒批,建议先偿还部分债务</li>
      </ul>
    </div>

    <div>
      <h2>28/36 法则</h2>
      <p>经典经验法则:房贷支出应不超过税前收入的 28%;总债务(含房贷)不超过 36%。许多常规房贷在信用良好的情况下,后端比例可放宽至 43-50%。</p>
    </div>

    <div>
      <h2>哪些算作债务</h2>
      <ul>
        <li>房贷或房租(新贷款按拟议住房支出计算)</li>
        <li>信用卡最低还款额</li>
        <li>车贷、学贷和个人贷款</li>
        <li>子女抚养费、赡养费</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>El <strong>DTI</strong> (relación deuda-ingresos) compara tus pagos mensuales de deuda con tus ingresos brutos. Los prestamistas lo utilizan como un factor clave para aprobar hipotecas, préstamos de auto y tarjetas de crédito.</p>

    <div>
      <h2>Umbrales de DTI de los prestamistas</h2>
      <ul>
        <li><strong>Menos del 36 %:</strong> Saludable — la mayoría de los préstamos se aprueban fácilmente</li>
        <li><strong>36-43 %:</strong> Apretado — muchos prestamistas limitan al 43 % para hipotecas</li>
        <li><strong>Más del 43 %:</strong> Alto — la mayoría de los prestamistas rechazan; considera reducir tu deuda primero</li>
      </ul>
    </div>

    <div>
      <h2>La regla 28/36</h2>
      <p>Una pauta clásica: el pago de la vivienda no debe superar el 28 % de los ingresos brutos; el total de deudas (incluida la vivienda), el 36 %. Muchas hipotecas convencionales permiten hasta un 43-50 % en el backend con un buen historial crediticio.</p>
    </div>

    <div>
      <h2>Qué se considera deuda</h2>
      <ul>
        <li>Hipoteca o alquiler (vivienda proyectada para nuevos préstamos)</li>
        <li>Pagos mínimos de tarjetas de crédito</li>
        <li>Préstamos de auto, estudiantiles y personales</li>
        <li>Pensión alimenticia, manutención del cónyuge</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Der <strong>DTI</strong> (Schuldendienstquote) vergleicht deine monatlichen Schuldzahlungen mit deinem Bruttoeinkommen. Kreditgeber nutzen ihn als entscheidenden Faktor bei der Genehmigung von Hypotheken, Autokrediten und Kreditkarten.</p>

    <div>
      <h2>DTI-Schwellenwerte der Kreditgeber</h2>
      <ul>
        <li><strong>Unter 36 %:</strong> Gesund — die meisten Kreditarten werden problemlos genehmigt</li>
        <li><strong>36-43 %:</strong> Eng — viele Kreditgeber deckeln Hypotheken bei 43 %</li>
        <li><strong>Über 43 %:</strong> Hoch — die meisten Kreditgeber lehnen ab; zahle zuerst Schulden ab</li>
      </ul>
    </div>

    <div>
      <h2>Die 28/36-Regel</h2>
      <p>Eine klassische Richtlinie: Die Wohnungsbelastung sollte ≤28 % des Bruttoeinkommens betragen; die Gesamtschulden (einschließlich Wohnen) ≤36 %. Viele konventionelle Hypotheken erlauben auf der Rückseite bis zu 43-50 % bei starker Bonität.</p>
    </div>

    <div>
      <h2>Was als Schulden zählt</h2>
      <ul>
        <li>Hypothek oder Miete (geplante Wohnkosten bei neuen Krediten)</li>
        <li>Mindestzahlungen auf Kreditkarten</li>
        <li>Auto-, Studien- und Privatkredite</li>
        <li>Kindesunterhalt, Ehegattenunterhalt</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DTICalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
