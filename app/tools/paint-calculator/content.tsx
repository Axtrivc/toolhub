'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PaintCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Coverage assumptions</h2>
    <p>One liter covers about 10 m² per coat on smooth primed walls; a US gallon covers ≈37 m² (400 ft²). Textured plaster, bare drywall, or bold color changes can demand 20-40% more.</p>
    <h2>Subtracting openings</h2>
    <p>Standard doors subtract 1.85 m² and windows 1.4 m² each. Trimming and door frames consume some of that saving, so the deduction is approximate — which is why we keep a margin.</p>
    <h2>Why two coats anyway</h2>
    <p>Most paints specify two coats for true color and washability; one-coat claims need premium paint over a close-matching base. The calculator multiplies by coats automatically.</p>
    <h2>Buying strategy</h2>
    <p>Batch matters: mix cans from different production lots can differ visibly in tint. Buy the full quantity at once, keep the receipt, and unopened cans usually return fine.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>涂布率假设</h2>
    <p>光滑底漆墙面上,每升约可涂 10 m²(一遍);一美制加仑 ≈37 m²(400 ft²)。纹理墙面、裸石膏板或大幅改色可能要多耗 20-40%。</p>
    <h2>扣除门窗</h2>
    <p>每扇标准门扣 1.85 m²,每扇窗扣 1.4 m²。踢脚线和门框会吃掉一部分省下的量,所以这个扣减只是近似——这正是我们留余量的原因。</p>
    <h2>为什么至少两遍</h2>
    <p>大多数涂料都注明两遍才有真实色彩和可擦洗性;"一遍覆盖"的说法需要高级漆配接近的底色。计算器会自动乘以遍数。</p>
    <h2>采购策略</h2>
    <p>批次很重要:不同生产批次的漆混用,色差可能肉眼可见。一次买齐总量,保留收据,未开封的桶通常都能退。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Supuestos de cobertura</h2>
    <p>Un litro cubre unos 10 m² por mano sobre pared lisa imprimada; un galón estadounidense cubre ≈37 m² (400 ft²). El yeso texturado, el pladur sin tratar o los cambios de color atrevidos pueden exigir un 20-40 % más.</p>
    <h2>Descontar huecos</h2>
    <p>Cada puerta estándar resta 1,85 m² y cada ventana 1,4 m². Rodapiés y marcos consumen parte de ese ahorro, así que la deducción es aproximada — por eso mantenemos un margen.</p>
    <h2>Por qué dos manos de todos modos</h2>
    <p>La mayoría de pinturas especifican dos manos para el color real y la lavabilidad; las promesas de una sola mano exigen pintura premium sobre una base de tono parecido. La calculadora multiplica por las manos automáticamente.</p>
    <h2>Estrategia de compra</h2>
    <p>El lote importa: mezclar botes de distintas producciones puede notarse a la vista en el tinte. Compra toda la cantidad de una vez, guarda el recibo; los botes sin abrir casi siempre se devuelven sin problema.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Deckungsannahmen</h2>
    <p>Ein Liter deckt auf glattem, grundiertem Wand etwa 10 m² pro Anstrich; eine US-Gallone ≈37 m² (400 ft²). Strukturputz, rohe Rigipsplatten oder kräftige Farbwechsel können 20-40 % mehr erfordern.</p>
    <h2>Öffnungen abziehen</h2>
    <p>Jede Standardtür zieht 1,85 m² ab, jedes Fenster 1,4 m². Sockelleisten und Zargen fressen einen Teil der Ersparnis, der Abzug ist also näherungsweise — deshalb halten wir einen Zuschlag.</p>
    <h2>Warum überhaupt zwei Anstriche</h2>
    <p>Die meisten Farben schreiben zwei Anstriche für echte Farbtiefe und Abwaschbarkeit vor; Ein-Anstrich-Versprechen brauchen Premiumfarbe auf einem ähnlichen Unterton. Der Rechner multipliziert die Anstriche automatisch.</p>
    <h2>Kaufstrategie</h2>
    <p>Die Charge zählt: Dosen aus verschiedenen Produktionsläufen können sich sichtbar in der Tönung unterscheiden. Kaufe die gesamte Menge auf einmal und bewahre den Kassenzettel auf — ungeöffnete Dosen nimmt man fast immer zurück.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PaintCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
