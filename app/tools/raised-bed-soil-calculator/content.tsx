'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * RaisedBedSoilCalculator 长文正文 —— 三语 dispatcher
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
    <p>Der Mix von Mel Bartholomew (Square Foot Gardening) ist je ein Drittel Kompost, Kokosfasern (oder Torf) und Vermiculit: unkrautfrei, hervorragend drainiert und pro Kubikfuß teuer. Die günstige Alternative — etwa 50 % Mutterboden, 30 % Kompost, 20 % Kokos — kostet halb so viel, hält Wasser anders und verfestigt bei Regen. Beide Rezepte werden komponentenweise ausgewiesen.</p>
    <h2>Tiefe Beete füllen, ohne Tiefe zu bezahlen</h2>
    <p>Wurzelgemüse will 12-18 Zoll lockeres Substrat, doch Kräuter und Blattsalate wurzeln nur in den oberen 6-8. Unten Karton, darauf Äste, Laub oder unbehandeltes Holz als Hügelbeet-Füllung — ein 24-Zoll-Beet braucht real nur die halbe Tiefe an gekaufter Mischung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function RaisedBedSoilCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
