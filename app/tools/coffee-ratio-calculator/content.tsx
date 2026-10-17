'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CoffeeRatioCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Ratios by weight, always</h2>
    <p>Every serious brew ratio is water to coffee by mass. Grams make it frictionless: 1 g of water is 1 ml, so a 1:16 ratio scales from a single mug to a party urn with one multiplication. A "scoop" varies by 2-3 g between light-roast and dark-roast beans — enough to move a brew from balanced to bitter.</p>
    <h2>What each method expects</h2>
    <p>Pour-over and drip sit at 1:15-1:17; French press runs richer at about 1:12 because full immersion extracts more slowly and the metal filter passes body; cold brew concentrate goes 1:8 and gets diluted at the glass. Espresso is the outlier at 1:2 — a 18 g dose yields 36 g of beverage in 25-30 seconds, and half a gram of dose change is audible in the cup.</p>
    <h2>Scaling a recipe up or down</h2>
    <p>Know either number and the other follows: coffee = water ÷ ratio, water = coffee × ratio. Enter the water your kettle holds and read the dose; enter the last 15 g of beans in the bag and see how much water they deserve. The cup count uses 237 ml (a US 8 oz cup) so two mugs of pour-over start near 475 g water.</p>
    <h2>Diagnose grind before ratio</h2>
    <p>When a cup tastes wrong, change one variable. Harsh and drying points to too fine a grind (over-extraction); sour and thin points too coarse. Ratio moves strength, not extraction flavor — so fix the grind first, then tune strength up with more coffee, not longer brews.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>永远按重量计比例</h2>
    <p>所有严肃的冲煮比例都是"水:粉"的质量比。克数让这件事毫无摩擦:1 克水 = 1 毫升,一个 1:16 从单人马克杯到派对大壶只需一次乘法。而"一勺"在浅烘与深烘豆之间能差 2-3 克——足以把一杯平衡的咖啡推向苦涩。</p>
    <h2>每种冲法的惯例比例</h2>
    <p>手冲与滴滤在 1:15-1:17;法压更浓,约 1:12,因为全浸泡萃取更慢、金属滤网会放过油脂与口感;冷萃浓缩到 1:8,出品时再兑水。浓缩是异类:1:2——18 克粉在 25-30 秒出 36 克液,粉量差半克在杯中清晰可辨。</p>
    <h2>配方放大与缩小</h2>
    <p>知道任意一边就能求另一边:粉 = 水 ÷ 比例,水 = 粉 × 比例。输入壶里要烧的水量读出粉量;输入袋里最后的 15 克豆,看它配得上多少水。杯数按 237 毫升(美制 8 盎司)计——两杯手冲约从 475 克水起步。</p>
    <h2>先诊断研磨,再动比例</h2>
    <p>一杯味道不对时,一次只改一个变量:又苦又涩指向磨太细(过萃);尖酸单薄指向磨太粗。比例决定浓度,不改变萃取的风味结构——先修研磨,再用"多加粉"提强度,而不是拉长萃取时间。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Proporciones en peso, siempre</h2>
    <p>Toda proporción seria es agua y café en masa. Los gramos lo hacen fácil: 1 g de agua = 1 ml, así que un 1:16 escala de la taza solitaria a la jarra de fiesta con una sola multiplicación. Una «cucharada» varía 2-3 g entre tueste claro y oscuro — suficiente para pasar de equilibrado a amargo.</p>
    <h2>Lo que espera cada método</h2>
    <p>Vertido y goteo viven en 1:15-1:17; la prensa francesa va más rica, ~1:12, porque la inmersión extrae más despacio y el filtro metálico deja pasar cuerpo; el cold brew concentrado baja a 1:8 y se diluye en el vaso. El espresso es el raro: 1:2 — 18 g de dosis dan 36 g de bebida en 25-30 segundos, y medio gramo de más se oye en la taza.</p>
    <h2>Escalar una receta</h2>
    <p>Conoces un número y sale el otro: café = agua ÷ proporción, agua = café × proporción. Mete el agua de tu hervidor y lee la dosis; mete los últimos 15 g de la bolsa y mira cuánta agua merecen. Las tazas usan 237 ml (8 oz estadounidenses): dos de vertido arrancan cerca de 475 g de agua.</p>
    <h2>Diagnostica la molienda antes que la proporción</h2>
    <p>Cuando la taza falla, cambia una sola variable: áspero y secante apunta a molienda fina (sobreextracción); ácido y aguado, a gruesa. La proporción mueve la fuerza, no el sabor de la extracción — arregla la molienda primero y sube la intensidad con más café, no con más tiempo.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Verhältnisse immer nach Gewicht</h2>
    <p>Jedes ernsthafte Brühverhältnis ist Wasser zu Kaffee nach Masse. Gramm machen es reibungslos: 1 g Wasser = 1 ml, also skaliert ein 1:16 von der Solo-Tasse bis zur Partykanne mit einer Multiplikation. Ein „Löffel" variiert um 2-3 g zwischen hellen und dunklen Röstungen — genug, um aus Balance Bitterkeit zu machen.</p>
    <h2>Was jede Methode erwartet</h2>
    <p>Handfilter und Drip liegen bei 1:15-1:17; French Press läuft mit ~1:12 reicher, weil Immersion langsamer extrahiert und das Metallsieb Körper durchlässt; Cold-Brew-Konzentrat geht auf 1:8 und wird im Glas verdünnt. Espresso ist der Ausreißer mit 1:2 — 18 g Dosing ergeben 36 g Getränk in 25-30 Sekunden, ein halbes Gramm mehr schmeckt man deutlich.</p>
    <h2>Ein Rezept skalieren</h2>
    <p>Kennst du eine Zahl, folgt die andere: Kaffee = Wasser ÷ Verhältnis, Wasser = Kaffee × Verhältnis. Gib das Wasser deines Wasserkochers ein und lies die Dosis; gib die letzten 15 g der Packung ein und sieh, wie viel Wasser sie verdienen. Tassen zählen mit 237 ml (US 8 oz): zwei Handfilter starten bei rund 475 g Wasser.</p>
    <h2>Erst Mahlgrad, dann Verhältnis</h2>
    <p>Schmeckt die Tasse falsch, ändere eine Variable: Rau und austrocknend deutet auf zu fein (Überextraktion); sauer und dünn auf zu grob. Das Verhältnis verschiebt die Stärke, nicht das Extraktionsaroma — erst den Mahlgrad reparieren, dann Stärke mit mehr Kaffee heben, nicht mit längerer Brühzeit.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CoffeeRatioCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
