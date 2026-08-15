'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Capital Gains Tax Estimator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。zh/es/de 仅客户端 hydration
 * 后按 locale 切换。公式 (<code> 标签内) 保持英文/数学符号不变,仅翻译周边文字。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>When you sell an investment for more than you paid, the profit is a <strong>capital gain</strong> and is taxed. How long you held the asset dramatically changes the rate. This estimator applies US federal rules.</p>
    <div>
      <h2>Short vs. Long Term</h2>
      <ul>
        <li><strong>Short-term (&lt;1 year):</strong> Taxed as ordinary income (your marginal rate, 10-37%)</li>
        <li><strong>Long-term (1+ years):</strong> Preferential rates of 0%, 15%, or 20% depending on income</li>
      </ul>
    </div>
    <div>
      <h2>Why Holding Period Matters</h2>
      <p>The difference is huge. A $10,000 gain in the 24% bracket: short-term costs $2,400 in tax; long-term costs $1,500 (a 37% tax saving). For high earners near the top bracket, holding 1+ years can save thousands.</p>
    </div>
    <div>
      <h2>Worked Example</h2>
      <p>You bought 100 shares at $50 ($5,000 total) and sell them at $80 ($8,000) after <strong>14 months</strong>. Your gain is <strong>$3,000</strong>, and because you held over a year it qualifies as long-term. If your taxable income puts you in the 15% long-term bracket, you owe <strong>$450</strong> in federal tax. Had you sold just a few weeks earlier, before the one-year mark (short-term), while in the 24% ordinary bracket, the same gain would cost <strong>$720</strong> &mdash; holding past the one-year mark saved $270.</p>
    </div>
    <div>
      <h2>What&apos;s Not Included</h2>
      <ul>
        <li><strong>NIIT:</strong> 3.8% surtax on investment income for high earners</li>
        <li><strong>State tax:</strong> Varies 0-13% depending on state</li>
        <li><strong>Capital losses:</strong> Can offset gains dollar-for-dollar</li>
        <li><strong>Tax-loss harvesting:</strong> Strategic loss-taking to reduce taxes</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>当你以高于买入价的价格卖出投资时,这笔利润就是<strong>资本利得</strong>,需要纳税。你持有资产的时间长短会极大影响税率。本估算器适用美国联邦税规则。</p>
    <div>
      <h2>短期 vs. 长期</h2>
      <ul>
        <li><strong>短期(&lt;1 年):</strong>按普通收入征税(你的边际税率,10-37%)</li>
        <li><strong>长期(1 年以上):</strong>享有 0%、15% 或 20% 的优惠税率,取决于收入水平</li>
      </ul>
    </div>
    <div>
      <h2>持有期为何重要</h2>
      <p>差别巨大。在 24% 税级中,一笔 $10,000 的利得:短期需缴税 $2,400;长期只需 $1,500(节省 37% 的税)。对于接近最高税级的高收入者,持有 1 年以上可以省下数千美元。</p>
    </div>
    <div>
      <h2>计算示例</h2>
      <p>你以每股 $50 买入 100 股(合计 $5,000),在 <strong>14 个月</strong>后以 $80 卖出($8,000)。你的利得是 <strong>$3,000</strong>,由于持有超过一年,符合长期资本利得条件。如果你的应税收入处于 15% 的长期税级,需缴纳联邦税 <strong>$450</strong>。如果你早几周、在满一年之前(短期)卖出,同时处于 24% 的普通税级,同样的利得需缴税 <strong>$720</strong>——持有满一年就省下了 $270。</p>
    </div>
    <div>
      <h2>未包含的内容</h2>
      <ul>
        <li><strong>NIIT(净投资收入税):</strong>对高收入者的投资收入征收 3.8% 的附加税</li>
        <li><strong>州税:</strong>因州而异,范围 0-13%</li>
        <li><strong>资本损失:</strong>可以一比一抵扣利得</li>
        <li><strong>税损收割:</strong>策略性地确认亏损以减少税负</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Cuando vendes una inversión por más de lo que pagaste, el beneficio es una <strong>plusvalía</strong> y se grava. El tiempo que hayas mantenido el activo cambia drásticamente la tasa. Este estimador aplica las normas federales de EE. UU.</p>
    <div>
      <h2>Corto versus largo plazo</h2>
      <ul>
        <li><strong>Corto plazo (&lt;1 año):</strong> Se grava como ingreso ordinario (tu tasa marginal, 10-37 %)</li>
        <li><strong>Largo plazo (1+ años):</strong> Tasas preferenciales del 0 %, 15 % o 20 % según los ingresos</li>
      </ul>
    </div>
    <div>
      <h2>Por qué importa el periodo de tenencia</h2>
      <p>La diferencia es enorme. Una ganancia de $10,000 en el tramo del 24 %: a corto plazo cuesta $2,400 en impuestos; a largo plazo cuesta $1,500 (un ahorro fiscal del 37 %). Para altos ingresos cerca del tramo máximo, mantener 1+ años puede ahorrar miles.</p>
    </div>
    <div>
      <h2>Ejemplo resuelto</h2>
      <p>Compraste 100 acciones a $50 ($5,000 en total) y las vendes a $80 ($8,000) tras <strong>14 meses</strong>. Tu ganancia es <strong>$3,000</strong> y, como mantuviste las acciones más de un año, califica como largo plazo. Si tu ingreso gravable te sitúa en el tramo del 15 % de largo plazo, debes <strong>$450</strong> en impuestos federales. Si las hubieras vendido unas pocas semanas antes, antes de cumplir el año (corto plazo), estando en el tramo ordinario del 24 %, la misma ganancia costaría <strong>$720</strong> — mantener la inversión más allá del año ahorró $270.</p>
    </div>
    <div>
      <h2>Lo que no está incluido</h2>
      <ul>
        <li><strong>NIIT:</strong> recargo del 3,8 % sobre los ingresos de inversión para altos rentistas</li>
        <li><strong>Impuesto estatal:</strong> varía del 0 al 13 % según el estado</li>
        <li><strong>Pérdidas de capital:</strong> pueden compensar ganancias dólar por dólar</li>
        <li><strong>Harvesting de pérdidas:</strong> asumir pérdidas estratégicamente para reducir impuestos</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Wenn du eine Anlage für mehr verkaufst, als du bezahlt hast, ist der Gewinn ein <strong>Kapitalgewinn</strong> und wird besteuert. Wie lange du die Anlage gehalten hast, verändert den Steuersatz erheblich. Dieser Rechner wendet die US-Bundesregeln an.</p>
    <div>
      <h2>Kurzfristig versus langfristig</h2>
      <ul>
        <li><strong>Kurzfristig (&lt;1 Jahr):</strong> Wird als ordentliches Einkommen besteuert (dein Grenzsteuersatz, 10-37 %)</li>
        <li><strong>Langfristig (1+ Jahre):</strong> Vorzugssätze von 0 %, 15 % oder 20 % je nach Einkommen</li>
      </ul>
    </div>
    <div>
      <h2>Warum die Haltedauer zählt</h2>
      <p>Der Unterschied ist enorm. Ein $10,000-Gewinn im 24 %-Steuersatz: kurzfristig kostet er $2,400 an Steuern; langfristig kostet er $1,500 (eine Steuerersparnis von 37 %). Für Spitzenverdiener nahe dem Höchststeuersatz kann das Halten von 1+ Jahren Tausende sparen.</p>
    </div>
    <div>
      <h2>Durchgerechnetes Beispiel</h2>
      <p>Du hast 100 Aktien zu $50 gekauft (insgesamt $5,000) und verkaufst sie nach <strong>14 Monaten</strong> zu $80 ($8,000). Dein Gewinn ist <strong>$3,000</strong>, und da du sie länger als ein Jahr gehalten hast, gilt er als langfristig. Wenn dein zu versteuerndes Einkommen dich in den 15 %-Langfriststeuersatz bringt, schuldest du <strong>$450</strong> Bundessteuer. Hättest du nur wenige Wochen früher verkauft — vor dem Ablauf des einen Jahres (kurzfristig) —, während du im 24 %-Ordentlichkeitssteuersatz warst, würde derselbe Gewinn <strong>$720</strong> kosten — das Halten über die Ein-Jahres-Grenze hinaus hat $270 gespart.</p>
    </div>
    <div>
      <h2>Was nicht enthalten ist</h2>
      <ul>
        <li><strong>NIIT:</strong> 3,8 % Zuschlagsteuer auf Investmenterträge für Spitzenverdiener</li>
        <li><strong>Steuer des Bundesstaats:</strong> variiert von 0 bis 13 % je nach Bundesstaat</li>
        <li><strong>Kapitalverluste:</strong> können Gewinne Dollar für Dollar ausgleichen</li>
        <li><strong>Tax-Loss Harvesting:</strong> strategisches Realisieren von Verlusten zur Steuerreduktion</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CapitalGainsTaxEstimatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
