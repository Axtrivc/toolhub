'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Markup Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。zh/es/de 仅客户端 hydration
 * 后按 locale 切换。公式 (<code> 标签内) 保持英文/数学符号不变,仅翻译周边文字。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This calculator finds your selling price and profit margin from your cost and markup
      percentage. It&apos;s essential for retailers, restaurants, and any business that prices
      products.
    </p>
    <div>
      <h2>Markup vs. Margin: The Critical Difference</h2>
      <p>
        These two terms are constantly confused but mean very different things:
      </p>
    </div>
    <div>
      <h2>Typical Markups by Industry</h2>
      <ul>
        <li><strong>Grocery:</strong> 10-15% markup, ~10% margin</li>
        <li><strong>Restaurants:</strong> 60-70% markup on food (food cost ~30-40%)</li>
        <li><strong>Apparel:</strong> 100-300% markup (keystone = 100% = 50% margin)</li>
        <li><strong>Electronics:</strong> 20-40% markup, thin margins</li>
        <li><strong>Jewelry:</strong> 200-400% markup</li>
      </ul>
    </div>
    <div>
      <h2>Why It Matters</h2>
      <p>
        Confusing markup and margin leads to underpricing. If you want a 30% profit margin and
        your cost is $100, you can&apos;t just add 30% &mdash; that gives a $130 price with only a
        23% margin ($30 &divide; $130). You need to divide: <code>$100 &divide; (1 &minus; 0.30) = $142.86</code>.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      这个计算器根据你的成本和加价百分比,算出售价和利润率。对零售商、餐厅以及任何需要给产品定价的生意都必不可少。
    </p>
    <div>
      <h2>加价率与利润率: 关键区别</h2>
      <p>
        这两个词经常被混淆, 但含义截然不同:
      </p>
    </div>
    <div>
      <h2>各行业的典型加价率</h2>
      <ul>
        <li><strong>食品杂货:</strong>加价率 10-15%, 利润率约 10%</li>
        <li><strong>餐厅:</strong>食物加价率 60-70% (食材成本约 30-40%)</li>
        <li><strong>服装:</strong>加价率 100-300% (keystone = 100% = 50% 利润率)</li>
        <li><strong>电子产品:</strong>加价率 20-40%, 利润率薄</li>
        <li><strong>珠宝:</strong>加价率 200-400%</li>
      </ul>
    </div>
    <div>
      <h2>为什么重要</h2>
      <p>
        混淆加价率和利润率会导致定价过低。如果你想要 30% 的利润率, 成本是 $100, 不能直接加 30%——那样得到 $130 的售价, 利润率只有
        23% ($30 ÷ $130)。你需要用除法: <code>$100 &divide; (1 &minus; 0.30) = $142.86</code>。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta calculadora obtiene tu precio de venta y margen de beneficio a partir de tu coste y
      porcentaje de marcado. Es esencial para minoristas, restaurantes y cualquier negocio que fije
      precios de productos.
    </p>
    <div>
      <h2>Marcado frente a margen: la diferencia clave</h2>
      <p>
        Estos dos términos se confunden constantemente, pero significan cosas muy distintas:
      </p>
    </div>
    <div>
      <h2>Marcados típicos por sector</h2>
      <ul>
        <li><strong>Alimentación:</strong> marcado del 10-15 %, margen ~10 %</li>
        <li><strong>Restaurantes:</strong> marcado del 60-70 % en comida (coste de comida ~30-40 %)</li>
        <li><strong>Moda:</strong> marcado del 100-300 % (keystone = 100 % = 50 % de margen)</li>
        <li><strong>Electrónica:</strong> marcado del 20-40 %, márgenes estrechos</li>
        <li><strong>Joyería:</strong> marcado del 200-400 %</li>
      </ul>
    </div>
    <div>
      <h2>Por qué importa</h2>
      <p>
        Confundir marcado y margen lleva a poner precios demasiado bajos. Si quieres un margen de
        beneficio del 30 % y tu coste es $100, no puedes simplemente sumar el 30 % — eso da un precio
        de $130 con solo un margen del 23 % ($30 ÷ $130). Tienes que dividir: <code>$100 &divide; (1 &minus; 0.30) = $142.86</code>.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieser Rechner ermittelt deinen Verkaufspreis und deine Gewinnmarge aus deinen Kosten und der
      Aufschlagsquote. Er ist unerlässlich für Einzelhändler, Restaurants und jedes Unternehmen, das
      Produkte bepreist.
    </p>
    <div>
      <h2>Aufschlag vs. Marge: der entscheidende Unterschied</h2>
      <p>
        Diese beiden Begriffe werden ständig verwechselt, bedeuten aber sehr verschiedene Dinge:
      </p>
    </div>
    <div>
      <h2>Typische Aufschläge nach Branche</h2>
      <ul>
        <li><strong>Lebensmittel:</strong> 10-15 % Aufschlag, ~10 % Marge</li>
        <li><strong>Restaurants:</strong> 60-70 % Aufschlag auf Essen (Wareneinsatz ~30-40 %)</li>
        <li><strong>Bekleidung:</strong> 100-300 % Aufschlag (Keystone = 100 % = 50 % Marge)</li>
        <li><strong>Elektronik:</strong> 20-40 % Aufschlag, geringe Margen</li>
        <li><strong>Schmuck:</strong> 200-400 % Aufschlag</li>
      </ul>
    </div>
    <div>
      <h2>Warum es wichtig ist</h2>
      <p>
        Wer Aufschlag und Marge verwechselt, setzt Preise zu niedrig an. Wenn du eine Gewinnmarge von
        30 % willst und deine Kosten $100 betragen, kannst du nicht einfach 30 % aufschlagen — das
        ergibt einen Preis von $130 bei nur 23 % Marge ($30 ÷ $130). Du musst teilen: <code>$100 &divide; (1 &minus; 0.30) = $142.86</code>.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function MarkupCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
