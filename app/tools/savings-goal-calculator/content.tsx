'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Savings Goal Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 * 公式 (<code> 标签内) 保持英文/数学符号不变,仅翻译周边文字。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>Find the monthly contribution needed to hit any savings goal &mdash; a house deposit, a car, an emergency fund, or a vacation &mdash; accounting for investment growth on what you already have saved.</p>

    <div>
      <h2>How It Works</h2>
      <p>The calculator projects the future value of your current savings, then solves for the monthly contribution that fills the gap to your goal. A higher return rate means smaller monthly contributions &mdash; but with more risk.</p>
    </div>

    <div>
      <h2>The Formula Behind It</h2>
      <p>This tool uses the future value of a series (an ordinary annuity) combined with compound growth on your starting balance. The required monthly contribution <code>M</code> solves: <code>Goal = P(1+r)^n + M × [((1+r)^n − 1) / r]</code>, where <code>P</code> is your current savings, <code>r</code> is the monthly return (annual ÷ 12), and <code>n</code> is the number of months. The calculator handles the algebra &mdash; you just enter your goal, timeline, and expected return.</p>
    </div>

    <div>
      <h2>Worked Example</h2>
      <p>Say you want <strong>$30,000</strong> for a house deposit in <strong>5 years</strong>, you already have <strong>$5,000</strong> saved, and you expect a <strong>5% annual return</strong>. Your $5,000 grows to about $6,381 on its own, leaving a ~$23,619 gap. Split across 60 months at a 5% growth rate, that works out to roughly <strong>$345/month</strong>. Bump the return to 7% and the required contribution drops to about $320/month &mdash; growth is doing more of the work for you.</p>
    </div>

    <div>
      <h2>Setting Realistic Goals</h2>
      <ul>
        <li><strong>Emergency fund:</strong> 3-6 months of expenses</li>
        <li><strong>House deposit:</strong> 10-20% of home price</li>
        <li><strong>Vehicle:</strong> Pay cash if possible to avoid loan interest</li>
        <li><strong>Wedding:</strong> Varies widely &mdash; set your number first</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>计算达成任意储蓄目标所需的每月供款——买房首付、买车、应急基金或度假——并考虑你已有积蓄的投资增长。</p>

    <div>
      <h2>工作原理</h2>
      <p>计算器先估算你当前储蓄的未来价值,再求出填补目标缺口所需的每月供款。回报率越高,每月所需供款就越小——但风险也更大。</p>
    </div>

    <div>
      <h2>背后的公式</h2>
      <p>本工具使用“系列终值”(普通年金)结合起始余额的复利增长。所需每月供款 <code>M</code> 满足: <code>Goal = P(1+r)^n + M × [((1+r)^n − 1) / r]</code>, 其中 <code>P</code> 是你当前的储蓄, <code>r</code> 是月回报率(年利率 ÷ 12), <code>n</code> 是月数。计算器替你完成代数运算——你只需输入目标、期限和预期回报率。</p>
    </div>

    <div>
      <h2>计算示例</h2>
      <p>假设你想在 <strong>5 年</strong>内存够 <strong>$30,000</strong> 作为买房首付,你已经有 <strong>$5,000</strong> 存款,预期 <strong>年回报率 5%</strong>。你的 $5,000 自身会增长到约 $6,381,留下约 $23,619 的缺口。按 5% 的增长率分摊到 60 个月,大约需要每月存 <strong>$345</strong>。若把回报率提高到 7%,所需每月供款会降到约 $320——增长在帮你分担更多。</p>
    </div>

    <div>
      <h2>设定合理目标</h2>
      <ul>
        <li><strong>应急基金:</strong>3-6 个月的生活开支</li>
        <li><strong>买房首付:</strong>房价的 10-20%</li>
        <li><strong>购车:</strong>尽量全款支付以避免贷款利息</li>
        <li><strong>婚礼:</strong>差异很大——先确定你的金额</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Calcula la aportación mensual necesaria para alcanzar cualquier meta de ahorro — una entrada para una casa, un coche, un fondo de emergencia o unas vacaciones — teniendo en cuenta el crecimiento de la inversión sobre lo que ya tienes ahorrado.</p>

    <div>
      <h2>Cómo funciona</h2>
      <p>La calculadora proyecta el valor futuro de tus ahorros actuales y luego despeja la aportación mensual que cubre el hueco hasta tu meta. Una tasa de retorno más alta implica aportaciones mensuales menores — pero con más riesgo.</p>
    </div>

    <div>
      <h2>La fórmula detrás</h2>
      <p>Esta herramienta usa el valor futuro de una serie (una anualidad ordinaria) combinado con el crecimiento compuesto de tu saldo inicial. La aportación mensual requerida <code>M</code> resuelve: <code>Goal = P(1+r)^n + M × [((1+r)^n − 1) / r]</code>, donde <code>P</code> son tus ahorros actuales, <code>r</code> es el retorno mensual (anual ÷ 12) y <code>n</code> es el número de meses. La calculadora se encarga del álgebra — tú solo introduces tu meta, el plazo y el retorno esperado.</p>
    </div>

    <div>
      <h2>Ejemplo resuelto</h2>
      <p>Supón que quieres <strong>$30,000</strong> para una entrada de casa en <strong>5 años</strong>, ya tienes <strong>$5,000</strong> ahorrados y esperas un <strong>5 % de retorno anual</strong>. Tus $5,000 crecen por sí solos hasta unos $6,381, dejando un hueco de ~$23,619. Repartido en 60 meses a una tasa del 5 %, sale a unos <strong>$345/mes</strong>. Si subes el retorno al 7 %, la aportación necesaria baja a unos $320/mes — el crecimiento hace más del trabajo por ti.</p>
    </div>

    <div>
      <h2>Metas realistas</h2>
      <ul>
        <li><strong>Fondo de emergencia:</strong> 3-6 meses de gastos</li>
        <li><strong>Entrada de casa:</strong> 10-20 % del precio de la vivienda</li>
        <li><strong>Vehículo:</strong> Paga al contado si es posible para evitar intereses del préstamo</li>
        <li><strong>Boda:</strong> Varía mucho — define primero tu cifra</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Finde die monatliche Rate, die du brauchst, um ein beliebiges Sparziel zu erreichen — Eigenkapital für ein Haus, ein Auto, einen Notgroschen oder einen Urlaub — unter Berücksichtigung des Wachstums deiner bereits vorhandenen Ersparnisse.</p>

    <div>
      <h2>Funktionsweise</h2>
      <p>Der Rechner hochrechnet den Zukunftswert deiner aktuellen Ersparnisse und ermittelt dann die monatliche Rate, die die Lücke zu deinem Ziel schließt. Eine höhere Rendite bedeutet kleinere monatliche Raten — aber mit mehr Risiko.</p>
    </div>

    <div>
      <h2>Die Formel dahinter</h2>
      <p>Dieses Werkzeug verwendet den Zukunftswert einer Reihe (einer nachschüssigen Rente) kombiniert mit dem Zinseszinswachstum auf dein Startguthaben. Die erforderliche monatliche Rate <code>M</code> löst: <code>Goal = P(1+r)^n + M × [((1+r)^n − 1) / r]</code>, wobei <code>P</code> deine aktuellen Ersparnisse sind, <code>r</code> die monatliche Rendite (Jahresrendite ÷ 12) und <code>n</code> die Anzahl der Monate. Der Rechner übernimmt die Algebra — du gibst nur dein Ziel, den Zeitraum und die erwartete Rendite ein.</p>
    </div>

    <div>
      <h2>Durchgerechnetes Beispiel</h2>
      <p>Angenommen, du willst in <strong>5 Jahren</strong> <strong>$30,000</strong> für eine Haus-Anzahlung, hast bereits <strong>$5,000</strong> gespart und erwartest eine <strong>5 % Jahresrendite</strong>. Deine $5,000 wachsen allein auf etwa $6,381, es bleibt eine Lücke von ~$23,619. Auf 60 Monate bei 5 % Wachstum verteilt, sind das rund <strong>$345/Monat</strong>. Erhöhst du die Rendite auf 7 %, sinkt die nötige Rate auf etwa $320/Monat — das Wachstum macht mehr von der Arbeit für dich.</p>
    </div>

    <div>
      <h2>Realistische Ziele setzen</h2>
      <ul>
        <li><strong>Notgroschen:</strong> 3-6 Monate Ausgaben</li>
        <li><strong>Haus-Anzahlung:</strong> 10-20 % des Kaufpreises</li>
        <li><strong>Fahrzeug:</strong> Wenn möglich bar bezahlen, um Kreditzinsen zu vermeiden</li>
        <li><strong>Hochzeit:</strong> Sehr unterschiedlich — leg zuerst deinen Betrag fest</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SavingsGoalCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
