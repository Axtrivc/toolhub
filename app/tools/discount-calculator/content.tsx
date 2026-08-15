'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Discount Calculator 长文正文 —— 四语 dispatcher
 *
 * 原文件即为独立 <section>(非 ToolContent),沿用其自有 h2 结构。en 分支与原文
 * 渲染输出一致。<code> 内容、$ 金额、变量保持不变;es/de 采用十进制逗号、百分号前加空格。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How to Calculate a Discount</h2>
    <p>
      A discount reduces an item&apos;s original price by a percentage. To find the sale price,
      multiply the original by <code>(1 − discount%)</code>. For example, a $80 shirt at 25% off:{' '}
      <code>80 × (1 − 0.25) = 80 × 0.75 = $60</code>. You save $20.
    </p>

    <h2>Common Discount Patterns</h2>
    <ul>
      <li><strong>Percentage off:</strong> 20%, 30%, 50% &mdash; the most common type</li>
      <li><strong>Buy one get one (BOGO):</strong> Effectively 50% off per item</li>
      <li><strong>Fixed amount off:</strong> $10 off any purchase over $50</li>
      <li><strong>Stacked discounts:</strong> Multiple discounts applied in sequence</li>
    </ul>

    <h2>How Stacked Discounts Work</h2>
    <p>
      When stores offer &quot;an extra 20% off already reduced items,&quot; the second discount
      applies to the already-discounted price, not the original. A $100 item first marked down 30%
      becomes $70. An additional 20% off applies to $70, giving $56 &mdash; a total savings of 44%, not
      50%. Use this calculator twice (once per discount) to handle stacked discounts correctly.
    </p>

    <h2>Reverse Discount: Find the Original Price</h2>
    <p>
      If you only know the sale price and the discount percentage, you can find the original price
      by dividing: <code>original = sale price ÷ (1 − discount%)</code>. For example, if an item
      costs $60 after a 25% discount, the original was <code>60 ÷ 0.75 = $80</code>.
    </p>

    <h2>Is the Deal Actually Good?</h2>
    <p>
      Not all discounts are equal. Watch out for:
    </p>
    <ul>
      <li><strong>Inflated original prices:</strong> Some retailers raise the &quot;was&quot; price to make the discount look bigger</li>
      <li><strong>Minimum purchase requirements:</strong> &quot;Save 30% when you spend $100&quot; may push you to overspend</li>
      <li><strong>Compare unit prices:</strong> A discounted large size may still cost more per ounce than a full-price small size</li>
    </ul>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>如何计算折扣</h2>
    <p>
      折扣是按百分比降低商品的原价。要算出促销价,把原价乘以 <code>(1 − discount%)</code>。例如,
      一件 $80 的衬衫打 25% 折:{' '}<code>80 × (1 − 0.25) = 80 × 0.75 = $60</code>。你省了 $20。
    </p>

    <h2>常见的折扣形式</h2>
    <ul>
      <li><strong>百分比折扣:</strong> 20%、30%、50% —— 最常见的类型</li>
      <li><strong>买一送一(BOGO):</strong> 相当于每件 50% 折</li>
      <li><strong>固定金额减免:</strong> 满 $50 立减 $10</li>
      <li><strong>叠加折扣:</strong> 多个折扣依次适用</li>
    </ul>

    <h2>叠加折扣怎么算</h2>
    <p>
      当商家打出"已降价商品再额外减 20%"时,第二次折扣是在已经打折后的价格上计算,而不是原价。
      一件 $100 的商品先降价 30% 变成 $70。再额外减 20% 是在 $70 上算,得到 $56 —— 总共节省 44%,
      而不是 50%。要正确处理叠加折扣,可以用这个计算器算两次(每次算一个折扣)。
    </p>

    <h2>反向折扣:求原价</h2>
    <p>
      如果你只知道促销价和折扣百分比,可以通过除法求出原价:<code>original = sale price ÷ (1 − discount%)</code>。
      例如,一件商品打 25% 折后是 $60,那么原价是 <code>60 ÷ 0.75 = $80</code>。
    </p>

    <h2>这个优惠真的划算吗?</h2>
    <p>并非所有折扣都一样。要留意:</p>
    <ul>
      <li><strong>虚高的原价:</strong> 有些商家抬高"原价"让折扣看起来更大</li>
      <li><strong>最低消费门槛:</strong> "满 $100 立减 30%"可能会诱使你超额消费</li>
      <li><strong>比较单价:</strong> 打折的大包装按每盎司算,可能仍然比原价的小包装更贵</li>
    </ul>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cómo calcular un descuento</h2>
    <p>
      Un descuento reduce el precio original de un artículo en un porcentaje. Para hallar el precio
      de venta, multiplica el original por <code>(1 − discount%)</code>. Por ejemplo, una camisa de
      $80 con un 25 % de descuento:{' '}<code>80 × (1 − 0.25) = 80 × 0.75 = $60</code>. Ahorras $20.
    </p>

    <h2>Patrones de descuento habituales</h2>
    <ul>
      <li><strong>Porcentaje de descuento:</strong> 20 %, 30 %, 50 % — el tipo más común</li>
      <li><strong>2x1 (BOGO):</strong> En la práctica, 50 % de descuento por artículo</li>
      <li><strong>Importe fijo de descuento:</strong> $10 de descuento en cualquier compra superior a $50</li>
      <li><strong>Descuentos acumulados:</strong> Varios descuentos aplicados en secuencia</li>
    </ul>

    <h2>Cómo funcionan los descuentos acumulados</h2>
    <p>
      Cuando las tiendas ofrecen «un 20 % adicional sobre artículos ya rebajados», el segundo
      descuento se aplica al precio ya descontado, no al original. Un artículo de $100 rebajado
      primero un 30 % pasa a $70. Un 20 % adicional se aplica sobre $70, lo que da $56 — un ahorro
      total del 44 %, no del 50 %. Usa esta calculadora dos veces (una por descuento) para manejar
      correctamente los descuentos acumulados.
    </p>

    <h2>Descuento inverso: hallar el precio original</h2>
    <p>
      Si solo conoces el precio de venta y el porcentaje de descuento, puedes hallar el precio
      original dividiendo: <code>original = sale price ÷ (1 − discount%)</code>. Por ejemplo, si un
      artículo cuesta $60 tras un descuento del 25 %, el original era <code>60 ÷ 0.75 = $80</code>.
    </p>

    <h2>¿Es la oferta realmente buena?</h2>
    <p>No todos los descuentos son iguales. Cuidado con:</p>
    <ul>
      <li><strong>Precios originales inflados:</strong> algunos minoristas suben el precio «de antes» para que el descuento parezca mayor</li>
      <li><strong>Requisitos de compra mínima:</strong> «Ahorra un 30 % cuando gastes $100» puede empujarte a gastar de más</li>
      <li><strong>Compara precios unitarios:</strong> un envase grande rebajado puede seguir costando más por onza que un envase pequeño a precio completo</li>
    </ul>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wie man einen Rabatt berechnet</h2>
    <p>
      Ein Rabatt senkt den Originalpreis eines Artikels um einen Prozentsatz. Um den Verkaufspreis
      zu finden, multipliziere den Originalpreis mit <code>(1 − discount%)</code>. Beispiel: ein
      $80-Hemd mit 25 % Rabatt:{' '}<code>80 × (1 − 0.25) = 80 × 0.75 = $60</code>. Du sparst $20.
    </p>

    <h2>Häufige Rabattmuster</h2>
    <ul>
      <li><strong>Prozentualer Rabatt:</strong> 20 %, 30 %, 50 % — die häufigste Art</li>
      <li><strong>Zwei für eins (BOGO):</strong> Effektiv 50 % Rabatt pro Artikel</li>
      <li><strong>Fester Rabattbetrag:</strong> $10 Rabatt ab einem Einkauf von über $50</li>
      <li><strong>Gestaffelte Rabatte:</strong> Mehrere Rabatte nacheinander angewendet</li>
    </ul>

    <h2>Wie gestaffelte Rabatte funktionieren</h2>
    <p>
      Wenn Geschäfte „nochmals 20 % auf bereits reduzierte Artikel" anbieten, wird der zweite Rabatt
      auf den bereits rabattierten Preis angewendet, nicht auf den Originalpreis. Ein $100-Artikel,
      der zuerst um 30 % reduziert wurde, kostet $70. Ein zusätzlicher 20 % Rabatt wird auf $70
      angewendet und ergibt $56 — eine Gesamtersparnis von 44 %, nicht 50 %. Nutze diesen Rechner
      zweimal (einmal pro Rabatt), um gestaffelte Rabatte korrekt zu berechnen.
    </p>

    <h2>Rabatt rückrechnen: den Originalpreis finden</h2>
    <p>
      Wenn du nur den Verkaufspreis und den Rabattprozentsatz kennst, kannst du den Originalpreis
      durch Division finden: <code>original = sale price ÷ (1 − discount%)</code>. Beispiel: Wenn ein
      Artikel nach einem 25 %-Rabatt $60 kostet, war der Originalpreis <code>60 ÷ 0.75 = $80</code>.
    </p>

    <h2>Ist das Angebot wirklich gut?</h2>
    <p>Nicht alle Rabatte sind gleich. Achte auf:</p>
    <ul>
      <li><strong>Überhöhte Originalpreise:</strong> Manche Händler erhöhen den „war"-Preis, damit der Rabatt größer wirkt</li>
      <li><strong>Mindestbestellwerte:</strong> „Spare 30 % ab $100 Einkauf" kann dich zum Mehrkaufen verleiten</li>
      <li><strong>Stückpreise vergleichen:</strong> Eine rabattierte Großpackung kann pro Unze immer noch teurer sein als eine kleinere Packung zum Vollpreis</li>
    </ul>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DiscountCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
