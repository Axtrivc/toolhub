'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * RaisedBedSoilCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The 4×8 bed is 32 cubic feet, and it never looks like it</h2>
    <p>Eight feet by four feet filled to twelve inches is exactly 32 ft³ — about 906 L or 1.19 yd³. Bulk topsoil sells by the yard and bags by the liter, which is why the calculator prints both. What it never looks like is the mountain of soil you imagined: bags are measured loose, and the bed swallows them quietly.</p>
    <h2>Why soil settles and how much to buy</h2>
    <p>Bagged and blown soil is fluffed when measured, then settles 20-30% over the first season as water and roots work it down. To fill in one pass, buy the geometric volume; to end up level next spring, expect to top up with the settled figure. Bulk deliveries have the same shrinkage — a "5-yard" dump is not five yards of settled bed.</p>
    <h2>Mel's Mix versus a topsoil blend</h2>
    <p>Mel Bartholomew's Square Foot Gardening mix is equal thirds compost, coco coir (or peat), and vermiculite: weed-free, super-draining, and expensive per cubic foot. The budget alternative — roughly 50% topsoil, 30% compost, 20% coir — costs half as much but holds water differently and compacts under rain. Both recipes print per-component quantities so you can price them at your yard.</p>
    <h2>Filling deep beds without paying for depth</h2>
    <p>Root vegetables want 12-18 in of loose soil, but most herbs and greens root in the top 6-8 in. Lay cardboard, then sticks, leaves, or untreated wood scraps as "hügelkultur" fill below the root zone — a 24 in bed can legitimately need only half its depth in purchased mix.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>4×8 英尺的床就是 32 立方英尺,可它从不像你想的那么多</h2>
    <p>8×4 英尺、填满 12 英寸,正好 32 ft³——约 906 升、1.19 立方码。散装土按码卖、袋装土按升卖,所以计算器两个口径都给。但它永远不像你想象中的那座"土山":袋子按蓬松状态计量,床会安安静静把它们吞掉。</p>
    <h2>土为什么会变少,该买多少</h2>
    <p>袋装土计量时是蓬松的,第一季在水分和根系的作用下会沉降 20-30%。想一次填满,就按几何体积买;想第二年春天还保持齐平,就按"沉降后"那栏预备补土。散装配送同样缩水——"5 码"的一车土,压进床里并不是五码。</p>
    <h2>Mel 混合 vs 表土配方</h2>
    <p>Mel Bartholomew 的方形园艺混合是堆肥、椰糠(或泥炭)、蛭石各三分之一:无草籽、排水极好,但每立方英尺不便宜。经济替代——约 50% 表土、30% 堆肥、20% 椰糠——成本减半,但持水性不同,雨后会压实。两种配方的分量都按组份列出,方便你直接去土场比价。</p>
    <h2>深床别为"深度"付全款</h2>
    <p>根菜类需要 12-18 英寸疏松土层,但大多数香草和叶菜只在顶部 6-8 英寸扎根。先铺纸板,再用树枝、落叶或未处理木料做"胡特尔堆填"垫底——24 英寸的床,真正需要买好土的可能只有一半深度。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El bancal de 4×8 son 32 pies cúbicos, y nunca lo parece</h2>
    <p>Ocho por cuatro pies lleno hasta doce pulgadas son exactamente 32 ft³ — unos 906 L o 1,19 yd³. La tierra a granel se vende por yarda y la embolsada por litro, por eso la calculadora imprime ambas. Lo que nunca parece es la montaña que imaginas: las bolsas se miden sueltas y el bancal se las traga sin ruido.</p>
    <h2>Por qué la tierra se asienta y cuánto comprar</h2>
    <p>La tierra de bolsa se muelle al medirse y se asienta un 20-30 % en la primera temporada mientras el agua y las raíces la trabajan. Para llenar de una vez, compra el volumen geométrico; para seguir nivelado en primavera, prevé reponer la cifra «tras asentarse». El granel encoge igual: un volquete «de 5 yardas» no son cinco yardas de bancal asentado.</p>
    <h2>Mel Mix frente a mezcla con tierra</h2>
    <p>La mezcla de Mel Bartholomew (horticultura en cuadros) es un tercio de compost, fibra de coco (o turba) y vermiculita: sin semillas de malas hierbas, drenaje excelente y cara por pie cúbico. La alternativa económica — 50 % tierra, 30 % compost, 20 % coco — cuesta la mitad pero retiene el agua distinto y se compacta con la lluvia. Ambas recetas salen por componente para comparar precios.</p>
    <h2>Llenar bancales profundos sin pagar la profundidad</h2>
    <p>Las hortalizas de raíz quieren 12-18 pulgadas de suelo suelto, pero hierbas y hojas verdes enraízan en los 6-8 superiores. Pon cartón y encima ramas, hojas o restos de madera sin tratar como relleno tipo hügelkultur — un bancal de 24 puladas puede necesitar solo la mitad de su profundidad en mezcla comprada.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Das 4×8-Beet sind 32 Kubikfuß — und sieht nie so aus</h2>
    <p>Acht mal vier Fuß, zwölf Zoll gefüllt, sind exakt 32 ft³ — rund 906 L oder 1,19 yd³. Schüttgut verkauft man pro Yard, Sackware pro Liter, deshalb druckt der Rechner beides. Was nie so aussieht, ist der Erdberg in deiner Vorstellung: Säcke werden locker gemessen, und das Beet schluckt sie geräuschlos.</p>
    <h2>Warum Erde setzt — und wie viel du kaufst</h2>
    <p>Sackerde wird aufgelockert gemessen und setzt in der ersten Saison um 20-30 %, während Wasser und Wurzeln sie verdichten. Zum einmaligen Füllen kaufe das geometrische Volumen; um im Frühjahr noch plan zu sein, plane mit der Zahl „nach Setzung" nach. Schüttgut schrumpft genauso — eine „5-Yards"-Lieferung sind im Beet keine fünf Yards.</p>
    <h2>Mel-Mix gegen Mutterboden-Mischung</h2>
    <p>Der Mix von Mel Bartholomew (Square Foot Gardening) ist je ein Drittel Kompost, Kokosfasern (oder Torf) und Blähton: unkrautfrei, hervorragend drainiert und pro Kubikfuß teuer. Die günstige Alternative — etwa 50 % Mutterboden, 30 % Kompost, 20 % Kokos — kostet halb so viel, hält Wasser anders und verfestigt bei Regen. Beide Rezepte werden komponentenweise ausgewiesen.</p>
    <h2>Tiefe Beete füllen, ohne Tiefe zu bezahlen</h2>
    <p>Wurzelgemüse will 12-18 Zoll lockeres Substrat, doch Kräuter und Blattsalate wurzeln nur in den oberen 6-8. Unten Karton, darauf Äste, Laub oder unbehandeltes Holz als Hügelbeet-Füllung — ein 24-Zoll-Beet braucht real nur die halbe Tiefe an gekaufter Mischung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function RaisedBedSoilCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
