'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Unit Price Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。zh/es/de 仅客户端 hydration
 * 后按 locale 切换。金额、单位缩写 (g/oz/ml/¢/loads) 与百分比保持不变。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Unit price tells you the cost per gram, ounce, liter, or item &mdash; letting you compare
      products fairly regardless of package size. This calculator handles the math so the bigger
      box doesn&apos;t trick you into paying more.
    </p>
    <div>
      <h2>Why Unit Price Beats Total Price</h2>
      <p>
        A 500g jar of peanut butter for $8 looks more expensive than a 350g jar for $6. But
        per gram: the big jar costs 1.6¢/g, the small jar 1.7¢/g. The bigger jar is actually
        cheaper. Supermarkets know shoppers default to total price &mdash; unit price reveals the
        truth.
      </p>
    </div>
    <div>
      <h2>Common Traps</h2>
      <ul>
        <li><strong>&quot;Bulk&quot; isn&apos;t always cheaper</strong> &mdash; sometimes the smaller size is on sale</li>
        <li><strong>Different units confuse comparison</strong> &mdash; one product in oz, another in g</li>
        <li><strong>Brand vs. store brand</strong> &mdash; store brands often win on unit price by 30%+</li>
        <li><strong>Smaller packages of the same brand</strong> &mdash; surprisingly sometimes cheaper per unit</li>
      </ul>
    </div>
    <div>
      <h2>Real Example</h2>
      <p>
        Laundry detergent: Brand A is $19.99 for 75 loads (26.7¢/load). Brand B is $14.99 for
        50 loads (30.0¢/load). Brand A is bigger <em>and</em> cheaper per use. Without unit
        pricing, you might grab Brand B thinking it&apos;s the budget option.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      单价告诉你每克、每盎司、每升或每件的价格——让你能不分包装大小地公平比较商品。这个计算器帮你算清楚,大包装就不会再骗你多花钱。
    </p>
    <div>
      <h2>为什么单价胜过总价</h2>
      <p>
        一瓶 500g 的花生酱 $8 看起来比一瓶 350g 的 $6 更贵。但按克算: 大瓶 1.6¢/g, 小瓶
        1.7¢/g。大瓶其实更便宜。超市知道顾客习惯看总价——单价才能揭示真相。
      </p>
    </div>
    <div>
      <h2>常见陷阱</h2>
      <ul>
        <li><strong>“大包装”不一定更便宜</strong> —— 有时小尺寸在打折</li>
        <li><strong>单位不同让人难以比较</strong> —— 一个用 oz, 另一个用 g</li>
        <li><strong>品牌与自有品牌</strong> —— 自有品牌的单价通常便宜 30% 以上</li>
        <li><strong>同一品牌的小包装</strong> —— 令人意外的是, 有时单价反而更低</li>
      </ul>
    </div>
    <div>
      <h2>真实案例</h2>
      <p>
        洗衣液: 品牌 A 是 $19.99 洗 75 loads (26.7¢/load)。品牌 B 是 $14.99 洗 50 loads
        (30.0¢/load)。品牌 A 容量更大, <em>而且</em>每次使用更便宜。没有单价对比, 你可能会拿起品牌 B, 以为它是更划算的选择。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El precio unitario te indica el coste por gramo, onza, litro o unidad — permitiéndote comparar
      productos de forma justa independientemente del tamaño del envase. Esta calculadora hace las
      cuentas para que la caja más grande no te engañe y pagues de más.
    </p>
    <div>
      <h2>Por qué el precio unitario vence al precio total</h2>
      <p>
        Un tarro de 500g de crema de cacahuete por $8 parece más caro que uno de 350g por $6. Pero
        por gramo: el tarro grande cuesta 1,6¢/g, el pequeño 1,7¢/g. El tarro grande es en realidad
        más barato. Los supermercados saben que los compradores se fijan por defecto en el precio
        total — el precio unitario revela la verdad.
      </p>
    </div>
    <div>
      <h2>Trampas comunes</h2>
      <ul>
        <li><strong>«El gran formato» no siempre es más barato</strong> — a veces la talla pequeña está en oferta</li>
        <li><strong>Unidades distintas confunden</strong> — un producto en oz, otro en g</li>
        <li><strong>Marca frente a marca del supermercado</strong> — las marcas propias suelen ganar en precio unitario por más de un 30 %</li>
        <li><strong>Envases más pequeños de la misma marca</strong> — sorprendentemente, a veces más baratos por unidad</li>
      </ul>
    </div>
    <div>
      <h2>Ejemplo real</h2>
      <p>
        Detergente de ropa: la marca A cuesta $19.99 por 75 loads (26,7¢/load). La marca B cuesta
        $14.99 por 50 loads (30,0¢/load). La marca A es más grande <em>y</em> más barata por uso. Sin
        precio unitario, podrías coger la marca B pensando que es la opción económica.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Der Stückpreis verrät dir die Kosten pro Gramm, Unze, Liter oder Stück — damit du Produkte fair
      vergleichst, unabhängig von der Verpackungsgröße. Dieser Rechner übernimmt die Rechnung, damit
      dich die größere Box nicht dazu verleitet, mehr zu bezahlen.
    </p>
    <div>
      <h2>Warum der Stückpreis den Gesamtpreis schlägt</h2>
      <p>
        Ein 500g-Glas Erdnussbutter für $8 wirkt teurer als ein 350g-Glas für $6. Aber pro Gramm: das
        große Glas kostet 1,6¢/g, das kleine 1,7¢/g. Das große Glas ist tatsächlich billiger.
        Supermärkte wissen, dass Käufer standardmäßig auf den Gesamtpreis schauen — der Stückpreis
        offenbart die Wahrheit.
      </p>
    </div>
    <div>
      <h2>Häufige Fallen</h2>
      <ul>
        <li><strong>„Großpackung" ist nicht immer billiger</strong> — manchmal ist die kleinere Größe im Angebot</li>
        <li><strong>Unterschiedliche Einheiten verwirren</strong> — ein Produkt in oz, ein anderes in g</li>
        <li><strong>Marke vs. Eigenmarke</strong> — Eigenmarken gewinnen oft beim Stückpreis um 30 % und mehr</li>
        <li><strong>Kleinere Packungen derselben Marke</strong> — überraschenderweise manchmal billiger pro Einheit</li>
      </ul>
    </div>
    <div>
      <h2>Konkretes Beispiel</h2>
      <p>
        Waschmittel: Marke A kostet $19.99 für 75 loads (26,7¢/load). Marke B kostet $14.99 für
        50 loads (30,0¢/load). Marke A ist größer <em>und</em> billiger pro Anwendung. Ohne
        Stückpreis könntest du zu Marke B greifen und denken, es sei die Budget-Option.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function UnitPriceCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
