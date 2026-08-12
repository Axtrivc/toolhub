'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Bill Split Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>Split a bill evenly among any number of people, with tip included. For group dinners, shared expenses, and joint purchases.</p>

    <div>
      <h2>Even vs Itemized Splitting</h2>
      <p>This tool splits evenly &mdash; everyone pays the same. For itemized splitting (where each person pays for what they ordered), use a dedicated app or calculate per-person totals separately.</p>
    </div>

    <div>
      <h2>Tip Etiquette for Groups</h2>
      <ul>
        <li>Large groups (6+): Many restaurants auto-add 18% gratuity</li>
        <li>Always check the bill before adding extra tip</li>
        <li>Split apps/mains are shared by all; drinks usually tracked per person</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>在任意人数之间均摊账单(含小费)。适用于聚餐、共享开支和合购。</p>

    <div>
      <h2>均分 vs 按项分摊</h2>
      <p>本工具按均分计算——每个人支付相同金额。如需按项分摊(每个人为自己点的菜买单),请使用专门的 App,或单独计算每人的总额。</p>
    </div>

    <div>
      <h2>团体小费礼仪</h2>
      <ul>
        <li>大型团体(6 人及以上):许多餐厅会自动加收 18% 服务费</li>
        <li>加额外小费前先核对账单</li>
        <li>前菜/主菜由所有人共享;酒水通常按人单独计算</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Divide una cuenta a partes iguales entre cualquier número de personas, propina incluida. Para cenas en grupo, gastos compartidos y compras conjuntas.</p>

    <div>
      <h2>Reparto equitativo frente a reparto por artículos</h2>
      <p>Esta herramienta divide a partes iguales — todo el mundo paga lo mismo. Para un reparto por artículos (donde cada persona paga lo que pidió), usa una aplicación dedicada o calcula los totales por persona por separado.</p>
    </div>

    <div>
      <h2>Etiqueta de la propina en grupos</h2>
      <ul>
        <li>Grupos grandes (6+): muchos restaurantes añaden automáticamente un 18 % de propina</li>
        <li>Revisa siempre la cuenta antes de añadir una propina extra</li>
        <li>Las entradas y platos principales se reparten entre todos; las bebidas suelen contabilizarse por persona</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Teile eine Rechnung gleichmäßig unter beliebig vielen Personen auf, Trinkgeld inbegriffen. Für Gruppenessen, geteilte Ausgaben und gemeinsame Käufe.</p>

    <div>
      <h2>Gleichmäßige Aufteilung vs. postenbezogene Aufteilung</h2>
      <p>Dieses Werkzeug teilt gleichmäßig auf — jeder zahlt dasselbe. Für eine postenbezogene Aufteilung (bei der jeder zahlt, was er bestellt hat) nutze eine spezielle App oder berechne die Pro-Person-Summen separat.</p>
    </div>

    <div>
      <h2>Trinkgeld-Etikette für Gruppen</h2>
      <ul>
        <li>Große Gruppen (6+): Viele Restaurants addieren automatisch 18 % Trinkgeld</li>
        <li>Prüfe immer die Rechnung, bevor du ein zusätzliches Trinkgeld gibst</li>
        <li>Vorspeisen und Hauptgerichte werden von allen geteilt; Getränke werden meist pro Person erfasst</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function BillSplitCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
