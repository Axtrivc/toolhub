'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Markup Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。es/de 仅客户端 hydration
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
        <li><strong>Restaurants:</strong> gross margin of 60-70% (food cost ~30-40% of the menu price)</li>
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


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta calculadora obtiene tu precio de venta y margen de beneficio a partir de tu coste y
      porcentaje de markup. Es esencial para minoristas, restaurantes y cualquier negocio que fije
      precios de productos.
    </p>
    <div>
      <h2>Markup frente a margen: la diferencia clave</h2>
      <p>
        Estos dos términos se confunden constantemente, pero significan cosas muy distintas:
      </p>
    </div>
    <div>
      <h2>Markups típicos por sector</h2>
      <ul>
        <li><strong>Alimentación:</strong> markup del 10-15 %, margen ~10 %</li>
        <li><strong>Restaurantes:</strong> margen bruto del 60-70 % (coste de comida ~30-40 % del precio del menú)</li>
        <li><strong>Moda:</strong> markup del 100-300 % (keystone = 100 % = 50 % de margen)</li>
        <li><strong>Electrónica:</strong> markup del 20-40 %, márgenes estrechos</li>
        <li><strong>Joyería:</strong> markup del 200-400 %</li>
      </ul>
    </div>
    <div>
      <h2>Por qué importa</h2>
      <p>
        Confundir markup y margen lleva a poner precios demasiado bajos. Si quieres un margen de
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
      Dieser Rechner ermittelt deinen Verkaufspreis und deine Gewinnmarge aus deinen Kosten und dem
      prozentualen Aufschlag. Er ist unerlässlich für Einzelhändler, Restaurants und jedes Unternehmen,
      das Preise für seine Produkte festlegt.
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
        <li><strong>Restaurants:</strong> Bruttomarge von 60-70 % (Wareneinsatz ~30-40 % des Menüpreises)</li>
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function MarkupCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
