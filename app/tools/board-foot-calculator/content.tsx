'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * BoardFootCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The board foot, honestly defined</h2>
    <p>A board foot is 144 cubic inches of lumber — a 12 in × 12 in × 1 in slab. The formula thickness(in) × width(in) × length(ft) ÷ 12 gives board feet per piece: a 1.5 × 5.5 in board eight feet long is exactly 5.5 BF. Order 10 of them and you are buying 55 board feet.</p>
    <h2>Nominal lumber is a lie you pay for</h2>
    <p>A "2×6" leaves the mill at 2 in × 6 in rough, then gets planed and dried down to 1.5 in × 5.5 in. Compute with nominal dimensions and you overstate volume by about 23% — on a 200-board-foot order that is 46 board feet of wood you paid for and never received as calculated.</p>
    <h2>How yards actually quote</h2>
    <p>Sawmills and wholesalers price hardwood per board foot or per MBF (1,000 board feet, sometimes written FBM). Enter their per-BF number in the price field and the tool multiplies through to the order total and the per-piece cost — the two numbers you cross-check against an invoice.</p>
    <h2>Where the formula bends</h2>
    <p>Rough-sawn lumber genuinely measures its nominal size, so use those numbers for green wood. For dimensional softwoods at the big-box store, read the actual thickness and width off the tag. And when lumber is quoted per lineal foot instead, divide price by length in feet first to get a comparable per-BF figure.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>板英尺的诚实定义</h2>
    <p>一板英尺 = 144 立方英寸的木料——一块 12×12×1 英寸的板。公式"厚(英寸)× 宽(英寸)× 长(英尺)÷ 12"就是单件板英尺数:一根 1.5×5.5 英寸、8 英尺长的木料正好 5.5 板英尺,买 10 根就是 55 板英尺。</p>
    <h2>名义尺寸是你掏钱买的"谎言"</h2>
    <p>"2×6"出厂时确实是 2×6 英寸的毛坯,经过刨光和干燥后只剩 1.5×5.5 英寸。按名义尺寸计算会把体积高估约 23%——一笔 200 板英尺的订单,就多算了 46 板英尺"你付了钱却没拿到"的木头。</p>
    <h2>木料行怎么报价</h2>
    <p>锯木厂和批发商按板英尺或 MBF(千板英尺,有时写作 FBM)给硬木定价。把他们的单价填进价格栏,工具会直接乘出订单总价和单件成本——正是你对账时要核对的两个数。</p>
    <h2>公式在哪儿会失真</h2>
    <p>粗锯材确实量得出名义尺寸,湿材就用名义值算;建材超市的规格材请读标签上的实际厚度与宽度。若木料按"每延英尺"报价,先用长度(英尺)除出单价,才能换算成可比的每板英尺价。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El pie tablar, definido sin trampas</h2>
    <p>Un pie tablar son 144 pulgadas cúbicas de madera: una tabla de 12 × 12 × 1 pulgadas. La fórmula espesor(pulgadas) × ancho(pulgadas) × largo(pies) ÷ 12 da los pies tablares por pieza — una de 1,5 × 5,5 pulgadas y ocho pies es exactamente 5,5; diez de ellas suman 55.</p>
    <h2>La medida nominal es una mentira que pagas</h2>
    <p>Un «2×6» sale del aserradero en 2 × 6 pulgadas en bruto y tras cepillar y secar queda en 1,5 × 5,5. Calcular con la medida nominal infla el volumen un 23 %: en un pedido de 200 pies tablares son 46 que pagaste y no recibiste.</p>
    <h2>Cómo presupuestan los aserraderos</h2>
    <p>Maderas duras se precio por pie tablar o por MBF (mil pies tablares, a veces FBM). Mete su precio por pie tablar y la herramienta multiplica hasta el total del pedido y el coste por pieza — las dos cifras que cotejas con la factura.</p>
    <h2>Dónde se tuerce la fórmula</h2>
    <p>La madera en bruto sí mide su tamaño nominal, así que úsalo para madera verde. En la gran superficie, lee el espesor y ancho reales de la etiqueta. Y si te cotizan por pie lineal, divide primero entre el largo en pies para pasar a un precio por pie tablar comparable.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Das Board Foot, ehrlich definiert</h2>
    <p>Ein Board Foot sind 144 Kubikzoll Holz — eine Platte von 12 × 12 × 1 Zoll. Die Formel Dicke(Zoll) × Breite(Zoll) × Länge(Fuß) ÷ 12 ergibt Board Feet pro Brett: Ein 1,5 × 5,5-Zoll-Brett mit acht Fuß Länge ist exakt 5,5 bf; zehn davon sind 55 Board Feet.</p>
    <h2>Das Nennmaß ist eine Lüge, die du bezahlst</h2>
    <p>Ein „2×6" verlässt das Sägewerk roh mit 2 × 6 Zoll und kommt nach Hobeln und Trocknung auf 1,5 × 5,5 Zoll. Mit Nennmaß gerechnet überschätzt du das Volumen um rund 23 % — bei einer 200-Board-Foot-Bestellung sind das 46 bf Holz, die du bezahlt, aber so nie bekommen hast.</p>
    <h2>Wie Hölzer tatsächlich kalkuliert werden</h2>
    <p>Sägewerke und Großhändler preisen Laubholz pro Board Foot oder pro MBF (tausend Board Feet, manchmal FBM). Trage deren BF-Preis ein, und der Rechner multipliziert bis zur Bestellsumme und zum Stückpreis — genau die zwei Zahlen, die du auf einer Rechnung prüfst.</p>
    <h2>Wo die Formel kippt</h2>
    <p>Sägerauhes Holz misst tatsächlich das Nennmaß — für Frischholz nimm diese Werte. Im Baumarkt liestst du Istmaß vom Etikett. Wird Holz pro Laufmeter angeboten, teile zuerst durch die Länge in Fuß, um auf einen vergleichbaren BF-Preis zu kommen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function BoardFootCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
