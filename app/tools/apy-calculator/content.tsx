'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * APY Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p><strong>APY</strong> (Annual Percentage Yield) is the real return on savings accounting for compounding. APR is the simple rate; APY is what you actually earn when interest compounds more than once a year.</p>

    <div>
      <h2>APR vs APY</h2>
      <p>On a 5% APR savings account: compounding monthly gives APY of 5.116%; compounding daily gives 5.127%. The more frequent the compounding, the higher the APY — and the bigger the gap between APR and APY.</p>
    </div>

    <div>
      <h2>The Formula</h2>
      <p>APY = (1 + APR/n)ⁿ − 1, where n is compounding periods per year. This tool computes it for any frequency.</p>
    </div>

    <div>
      <h2>What to Look For</h2>
      <ul>
        <li>High-yield savings accounts quote APY (looks better than APR)</li>
        <li>Credit cards and loans quote APR (looks lower than APY)</li>
        <li>Always compare the same metric when shopping rates</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p><strong>APY</strong>(年化收益率)是考虑复利后储蓄的真实回报。APR 是简单利率;APY 是一年内复利超过一次时你实际赚到的收益。</p>

    <div>
      <h2>APR vs APY</h2>
      <p>以 5% APR 储蓄账户为例:按月复利得 APY 5.116%;按日复利得 5.127%。复利越频繁,APY 越高——APR 和 APY 之间的差距也越大。</p>
    </div>

    <div>
      <h2>公式</h2>
      <p>APY = (1 + APR/n)ⁿ − 1,其中 n 是每年复利次数。本工具可为任意频率计算。</p>
    </div>

    <div>
      <h2>需要注意什么</h2>
      <ul>
        <li>高收益储蓄账户标注 APY(看起来比 APR 更高)</li>
        <li>信用卡和贷款标注 APR(看起来比 APY 更低)</li>
        <li>货比三家时一定要对比同一个指标</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>El <strong>APY</strong> (rendimiento porcentual anual) es el rendimiento real del ahorro teniendo en cuenta la capitalización. La APR es la tasa simple; el APY es lo que realmente ganas cuando el interés se capitaliza más de una vez al año.</p>

    <div>
      <h2>APR frente a APY</h2>
      <p>En una cuenta de ahorro al 5 % de APR: la capitalización mensual da un APY del 5,116 %; la diaria del 5,127 %. Cuanto más frecuente sea la capitalización, mayor será el APY — y mayor la diferencia entre APR y APY.</p>
    </div>

    <div>
      <h2>La fórmula</h2>
      <p>APY = (1 + APR/n)ⁿ − 1, donde n es el número de periodos de capitalización al año. Esta herramienta lo calcula para cualquier frecuencia.</p>
    </div>

    <div>
      <h2>Qué tener en cuenta</h2>
      <ul>
        <li>Las cuentas de ahorro de alto rendimiento indican el APY (parece mayor que el APR)</li>
        <li>Las tarjetas de crédito y los préstamos indican el APR (parece menor que el APY)</li>
        <li>Compara siempre la misma métrica al buscar tasas</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Der <strong>APY</strong> (effektive Jahresrendite) ist die tatsächliche Rendite der Ersparnisse unter Berücksichtigung der Zinseszinsrechnung. Der APR ist der einfache Satz; der APY ist das, was du tatsächlich verdienst, wenn der Zins öfter als einmal pro Jahr verrechnet wird.</p>

    <div>
      <h2>APR vs. APY</h2>
      <p>Bei einem Sparkonto mit 5 % APR: monatliche Verzinsung ergibt einen APY von 5,116 %; tägliche 5,127 %. Je häufiger die Verzinsung, desto höher der APY — und desto größer die Lücke zwischen APR und APY.</p>
    </div>

    <div>
      <h2>Die Formel</h2>
      <p>APY = (1 + APR/n)ⁿ − 1, wobei n die Zinsperioden pro Jahr ist. Dieses Werkzeug berechnet ihn für jede Frequenz.</p>
    </div>

    <div>
      <h2>Worauf du achten solltest</h2>
      <ul>
        <li>Hochverzinsliche Sparkonten geben den APY an (sieht höher aus als der APR)</li>
        <li>Kreditkarten und Kredite geben den APR an (sieht niedriger aus als der APY)</li>
        <li>Vergleiche beim Zinsvergleich immer dieselbe Kennzahl</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function APYCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
