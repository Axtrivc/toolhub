'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Net Worth Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。zh/es/de 仅客户端 hydration
 * 后按 locale 切换。公式 (<code> 标签内) 保持英文/数学符号不变,仅翻译周边文字。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>Your <strong>net worth</strong> is the single best snapshot of your financial health &mdash; what you own (assets) minus what you owe (liabilities). Tracking it over time reveals whether you&apos;re building wealth or treading water.</p>
    <div>
      <h2>What Counts as Assets</h2>
      <ul>
        <li>Cash, savings, and checking accounts</li>
        <li>Investment accounts (stocks, bonds, retirement)</li>
        <li>Home value (minus mortgage = equity)</li>
        <li>Vehicles (current market value)</li>
        <li>Valuable possessions (jewelry, collectibles)</li>
      </ul>
    </div>
    <div>
      <h2>What Counts as Liabilities</h2>
      <ul>
        <li>Mortgage balance</li>
        <li>Student, auto, and personal loans</li>
        <li>Credit card debt</li>
        <li>Tax owed</li>
        <li>Any other money you owe</li>
      </ul>
    </div>
    <div>
      <h2>Where You Stand</h2>
      <p>Net worth varies enormously by age. The US median is around $192,000 across all ages, but the median for ages 30-34 is only about $40,000. Reaching $1M+ net worth puts a household in roughly the top 10-15%.</p>
    </div>
    <div>
      <h2>The Formula and a Worked Example</h2>
      <p>Net worth is simply <code>Assets &minus; Liabilities</code>. Suppose you have $8,000 in savings, $42,000 in a retirement account, a car worth $15,000, and a home worth $320,000 &mdash; that&apos;s $385,000 in assets. Against that you owe a $220,000 mortgage, a $12,000 auto loan, and $3,000 on a credit card &mdash; $235,000 in liabilities. Your net worth is <strong>$150,000</strong>. Notice that home equity alone ($100,000) is a big slice, which is why including the residence (minus the mortgage) matters.</p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>你的<strong>净资产</strong>是衡量财务健康状况的最佳单一快照——你所拥有的(资产)减去你所欠的(负债)。长期跟踪它能揭示你究竟是在积累财富,还是原地踏步。</p>
    <div>
      <h2>哪些算作资产</h2>
      <ul>
        <li>现金、储蓄和活期账户</li>
        <li>投资账户(股票、债券、退休金)</li>
        <li>房屋价值(减去房贷 = 净值)</li>
        <li>车辆(当前市场价值)</li>
        <li>贵重物品(珠宝、收藏品)</li>
      </ul>
    </div>
    <div>
      <h2>哪些算作负债</h2>
      <ul>
        <li>房贷余额</li>
        <li>学生贷款、车贷和个人贷款</li>
        <li>信用卡债务</li>
        <li>欠税</li>
        <li>任何其他欠款</li>
      </ul>
    </div>
    <div>
      <h2>你处于什么位置</h2>
      <p>净资产因年龄而异,差异巨大。美国所有年龄段的净资产中位数约为 $192,000,但 30-34 岁年龄段的中位数仅约 $40,000。净资产达到 $1M 以上,大致可让一个家庭跻身前 10-15%。</p>
    </div>
    <div>
      <h2>公式与计算示例</h2>
      <p>净资产就是 <code>Assets &minus; Liabilities</code>。假设你有 $8,000 储蓄、$42,000 退休账户、一辆价值 $15,000 的车,以及一套价值 $320,000 的房——合计 $385,000 资产。对应的负债包括 $220,000 房贷、$12,000 车贷和 $3,000 信用卡欠款——合计 $235,000 负债。你的净资产是 <strong>$150,000</strong>。注意,仅房屋净值一项($100,000)就占了很大一块,这正是要把自住房(减去房贷)算进去的原因。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Tu <strong>patrimonio neto</strong> es la mejor instantánea única de tu salud financiera — lo que tienes (activos) menos lo que debes (pasivos). Llevarlo registrado a lo largo del tiempo revela si estás construyendo riqueza o solo manteniéndote a flote.</p>
    <div>
      <h2>Qué cuenta como activos</h2>
      <ul>
        <li>Efectivo, ahorros y cuentas corrientes</li>
        <li>Cuentas de inversión (acciones, bonos, jubilación)</li>
        <li>Valor de la vivienda (menos hipoteca = patrimonio)</li>
        <li>Vehículos (valor de mercado actual)</li>
        <li>Objetos de valor (joyas, colecciones)</li>
      </ul>
    </div>
    <div>
      <h2>Qué cuenta como pasivos</h2>
      <ul>
        <li>Saldo de la hipoteca</li>
        <li>Préstamos estudiantiles, de coche y personales</li>
        <li>Deuda de tarjetas de crédito</li>
        <li>Impuestos adeudados</li>
        <li>Cualquier otro dinero que debas</li>
      </ul>
    </div>
    <div>
      <h2>Dónde estás</h2>
      <p>El patrimonio neto varía enormemente según la edad. La mediana en EE. UU. ronda los $192,000 en todas las edades, pero la mediana para los 30-34 años es solo de unos $40,000. Alcanzar un patrimonio neto de $1M+ sitúa a un hogar aproximadamente en el 10-15 % superior.</p>
    </div>
    <div>
      <h2>La fórmula y un ejemplo resuelto</h2>
      <p>El patrimonio neto es simplemente <code>Assets &minus; Liabilities</code>. Supón que tienes $8,000 en ahorros, $42,000 en una cuenta de jubilación, un coche valorado en $15,000 y una vivienda de $320,000 — eso son $385,000 en activos. Frente a eso debes una hipoteca de $220,000, un préstamo de coche de $12,000 y $3,000 en una tarjeta de crédito — $235,000 en pasivos. Tu patrimonio neto es <strong>$150,000</strong>. Observa que el patrimonio de la vivienda por sí solo ($100,000) es una gran parte, por lo que incluir la residencia (menos la hipoteca) importa.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dein <strong>Nettovermögen</strong> ist die beste Einzel-Einschätzung deiner finanziellen Gesundheit — was du besitzt (Aktiva) minus was du schuldest (Passiva). Es im Laufe der Zeit zu verfolgen, zeigt, ob du Vermögen aufbaust oder nur auf der Stelle trittst.</p>
    <div>
      <h2>Was als Aktiva zählt</h2>
      <ul>
        <li>Bargeld, Sparkonten und Girokonten</li>
        <li>Anlagekonten (Aktien, Anleihen, Altersvorsorge)</li>
        <li>Hauswert (minus Hypothek = Eigenkapital)</li>
        <li>Fahrzeuge (aktueller Marktwert)</li>
        <li>Wertvolle Gegenstände (Schmuck, Sammlerstücke)</li>
      </ul>
    </div>
    <div>
      <h2>Was als Passiva zählt</h2>
      <ul>
        <li>Hypothekensaldo</li>
        <li>Studien-, Auto- und Privatkredite</li>
        <li>Kreditkartenschulden</li>
        <li>Geschuldete Steuern</li>
        <li>Jedes andere Geld, das du schuldest</li>
      </ul>
    </div>
    <div>
      <h2>Wo du stehst</h2>
      <p>Das Nettovermögen variiert je nach Alter enorm. Der US-Median liegt über alle Altersgruppen bei rund $192,000, aber der Median für die 30-34-Jährigen liegt nur bei etwa $40,000. Ein Nettovermögen von $1M+ bringt einen Haushalt ungefähr in die obersten 10-15 %.</p>
    </div>
    <div>
      <h2>Die Formel und ein durchgerechnetes Beispiel</h2>
      <p>Nettovermögen ist einfach <code>Assets &minus; Liabilities</code>. Angenommen, du hast $8,000 auf dem Sparkonto, $42,000 auf einem Altersvorsorgekonto, ein Auto im Wert von $15,000 und ein Haus im Wert von $320,000 — das sind $385,000 an Aktiva. Dem gegenüber stehen eine $220,000-Hypothek, ein $12,000-Autokredit und $3,000 auf einer Kreditkarte — $235,000 an Passiva. Dein Nettovermögen ist <strong>$150,000</strong>. Beachte, dass das Hauseigenkapital allein ($100,000) ein großer Anteil ist, weshalb es wichtig ist, die selbst genutzte Immobilie (minus Hypothek) einzubeziehen.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function NetWorthCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
