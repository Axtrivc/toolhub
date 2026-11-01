'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ShoeSizeConverter 长文正文 —— 三语 dispatcher
 *
 * en 分支与站点既有渲染口径一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why there is no conversion formula</h2>
    <p>US and UK sizes both count barleycorns (1/3 inch) but from different zero points — hence the consistent ~0.5 offset that still breaks at brand level. EU sizes use Paris points (2/3 cm) measured on the last, not the foot, and add manufacturer allowance. Women's US sizes simply run 1.5 numbers above men's for the same foot. Three incompatible grids meeting one human foot: a lookup table is the only honest translation layer.</p>
    <h2>Measure the foot, not the shoe</h2>
    <p>Stand on paper in the evening (feet swell up to half a size by day's end), trace both feet, and measure heel to longest toe — for many people the second toe wins. Buy for the larger foot. That centimeter number converts into every system and stays your most reliable anchor across brands; a Brannock device at a shoe store does the same thing with hardware.</p>
    <h2>Brand variance is the ±1 reality</h2>
    <p>Nike maps a US men's 9 to EU 42.5, Adidas to 42 2/3, ASICS to 42.5-43 — same foot, three labels. German-made lasts run narrower, Japanese brands often roomier in the toe box. When between sizes: go up a half for running shoes (feet swell roughly one size over a long run), stay true or size down half for dress shoes that should fit snug. Returns exist because charts guess.</p>
    <h2>Kids: measure monthly-ish, buy quarterly-max</h2>
    <p>Children's feet grow in spurts — up to 1.5 cm a year under age 3, slowing after 6. The thumbs-width rule: with the shoe on, you should fit your thumb's width (about 1-1.5 cm) between the longest toe and the toe box. Buying more than one size ahead of a child's measured foot usually ends in a box that fits nobody.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué no existe una fórmula de conversión</h2>
    <p>Las tallas US y UK cuentan cebadas (1/3 de pulgada) pero desde ceros distintos — de ahí el ~0,5 de diferencia constante que aun así se rompe a nivel de marca. Las EU usan puntos de París (2/3 cm) medidos sobre la horma, no sobre el pie, y suman el holgura del fabricante. Las US de mujer van 1,5 números por encima de las de hombre para el mismo pie. Tres rejillas incompatibles ante un mismo pie humano: la tabla es la única capa honesta de traducción.</p>
    <h2>Mide el pie, no el zapato</h2>
    <p>De pie sobre papel por la tarde (el pie se hincha hasta media talla al final del día), calca ambos pies y mide del talón al dedo más largo — en mucha gente gana el segundo dedo. Compra según el pie mayor. Ese número en centímetros se convierte a cualquier sistema y es tu ancla más fiable entre marcas; el aparato de zapatería hace lo mismo con hardware.</p>
    <h2>La varianza de marca es la realidad del ±1</h2>
    <p>El mismo US hombre 9: Nike lo mapea a EU 42,5; Adidas, a 42 2/3; ASICS, a 42,5-43 — un pie, tres etiquetas. Las hormas alemanas van estrechas y las japonesas suelen dar más puntas. Entre dos tallas: sube media en zapatillas de correr (el pie hincha ~1 talla en un rodaje largo) y mantén o baja media en vestir. Las devoluciones existen precisamente porque las tablas adivinan.</p>
    <h2>Niños: medir casi cada mes, comprar máximo una temporada</h2>
    <p>Los pies infantiles crecen a saltos — hasta 1,5 cm al año antes de los 3, y menos tras los 6. Regla del pulgar: con el zapato puesto, debe caber el ancho de un pulgar (1-1,5 cm) entre el dedo más largo y la puntera. Comprar más de una talla por delante suele acabar en una caja que no calza a nadie.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum es keine Umrechnungsformel gibt</h2>
    <p>US- und UK-Größen zählen beide Gerstenkorn (1/3 Zoll), aber von unterschiedlichen Nullpunkten — daher der konstante ~0,5-Versatz, der auf Markenebene trotzdem bricht. EU-Größen nutzen Pariser Punkte (2/3 cm), gemessen auf dem Leisten, nicht am Fuß, plus Herstellerzugabe. US-Damengrößen liegen schlicht 1,5 Nummern über den Herrengrößen für denselben Fuß. Drei inkompatible Raster vor einem menschlichen Fuß: Die Tabelle ist die einzige ehrliche Übersetzungsschicht.</p>
    <h2>Messe den Fuß, nicht den Schuh</h2>
    <p>Abends auf Papier stellen (Füße schwellen bis Tagesende um bis zu eine halbe Nummer an), beide Füße umranden und von Ferse zur längsten Zehe messen — bei vielen gewinnt die zweite Zehe. Kaufe nach dem größeren Fuß. Diese Zentimeterangabe lässt sich in jedes System umrechnen und bleibt der verlässlichste Anker über Marken hinweg; das Messgerät im Schuhgeschäft macht dasselbe mit Hardware.</p>
    <h2>Markenstreuung ist die ±1-Realität</h2>
    <p>Dieselbe US-Herren 9: Nike kartiert sie auf EU 42,5, Adidas auf 42 2/3, ASICS auf 42,5-43 — ein Fuß, drei Etiketten. Deutsche Leisten laufen schmaler, japanische Marken geben oft mehr Vorderfußraum. Zwischen zwei Größen: bei Laufschuhen eine halbe Nummer größer (der Fuß schwillt auf langen Läufen um ~1 Nummer), bei Businessschuhen pasgenau oder halbe Nummer kleiner. Rückgabe gibt es, weil Tabellen raten.</p>
    <h2>Kinder: etwa monatlich messen, maximal eine Saison vorkaufen</h2>
    <p>Kinderfüße wachsen in Schüben — bis 1,5 cm pro Jahr unter 3, danach langsamer. Daumenregel: Mit angezogenem Schuh muss eine Daumenbreite (1-1,5 cm) zwischen längster Zehe und Vorderkappe passen. Mehr als eine Nummer vorrätig zu kaufen endet meist in einem Karton, der niemandem passt.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ShoeSizeConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
