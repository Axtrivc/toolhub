'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ConcreteCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与既有工具页渲染一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Volume first, bags second</h2>
    <p>Concrete is ordered in cubic yards (27 ft³ each), but sold retail in bags: an 80 lb bag yields 0.60 ft³, a 60 lb bag 0.45 ft³, a 40 lb bag 0.30 ft³. A 10×10 slab at 4 inches is 33.3 ft³ — 1.23 yards, or 62 eighty-lb bags once the 10% margin is in.</p>
    <h2>The 81-square-foot rule</h2>
    <p>At 4 inches thick, one yard covers exactly 81 ft². That single conversion prices any patio: 20×20 is 400 ÷ 81 ≈ 5 yards. Past one yard the math favors a ready-mix truck — 45 bags of Quikrete is a full day of mixing.</p>
    <h2>Columns and steps</h2>
    <p>Round footings are π × (diameter ÷ 2)² × height — a 12-inch-by-3-foot Sonotube is 2.36 ft³, about 5 bags including waste. Steps pour as triangular prisms: tread run × rise ÷ 2, times width, per step.</p>
    <h2>Order a little over, never under</h2>
    <p>Short loads and second trips cost more than surplus. The 10% margin covers spills and uneven subgrade; if your forms are hand-dug and wavy, 15% is the honest number.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Primero el volumen, luego los sacos</h2>
    <p>El hormigón se pide por yardas cúbicas (27 ft³ cada una), pero se vende al detal en sacos: uno de 80 lb rinde 0,60 ft³, uno de 60 lb 0,45 ft³ y uno de 40 lb 0,30 ft³. Una losa de 10×10 a 4 pulgadas son 33,3 ft³ — 1,23 yardas, o 62 sacos de 80 lb con el margen del 10%.</p>
    <h2>La regla de los 81 pies cuadrados</h2>
    <p>A 4 pulgadas, una yarda cubre justo 81 ft². Esa única conversión presupuesta cualquier terraza: 20×20 es 400 ÷ 81 ≈ 5 yardas. Pasada una yarda, el camión de preparado gana — 45 sacos son una jornada entera de mezclar.</p>
    <h2>Columnas y escalones</h2>
    <p>Las zapatas redondas son π × (diámetro ÷ 2)² × altura — un tubo de 12 pulgadas por 3 pies da 2,36 ft³, unos 5 sacos con merma. Los escalones se vierten como prismas triangulares: huella × contrahuella ÷ 2, por ancho, por peldaño.</p>
    <h2>Pide un poco de más, nunca de menos</h2>
    <p>Una carga corta o un segundo viaje cuesta más que el sobrante. El 10% cubre derrames y base irregular; si tus encofrados están cavados a mano, el 15% es la cifra honesta.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Erst das Volumen, dann die Säcke</h2>
    <p>Beton wird in Kubikyards bestellt (je 27 ft³), im Handel aber in Säcken verkauft: Ein 80-lb-Sack ergibt 0,60 ft³, ein 60-lb-Sack 0,45 ft³, ein 40-lb-Sack 0,30 ft³. Eine 10×10-Platte bei 4 Zoll ist 33,3 ft³ — 1,23 Yards oder 62 Säcke à 80 lb mit dem 10%-Zuschlag.</p>
    <h2>Die 81-Quadratfuß-Regel</h2>
    <p>Bei 4 Zoll deckt ein Yard genau 81 ft². Diese eine Umrechnung beziffert jede Terrasse: 20×20 sind 400 ÷ 81 ≈ 5 Yards. Über einen Yard gewinnt der Fertigbeton-LKW — 45 Säcke sind ein ganzer Tag Mischen.</p>
    <h2>Stützen und Stufen</h2>
    <p>Runde Fundamente sind π × (Durchmesser ÷ 2)² × Höhe — ein 12-Zoll-×-3-Fuß-Schlauchformrohr ergibt 2,36 ft³, mit Verschnitt etwa 5 Säcke. Stufen werden als Dreiecksprismen gegossen: Auftritt × Höhe ÷ 2, mal Breite, pro Stufe.</p>
    <h2>Lieber etwas mehr bestellen</h2>
    <p>Eine Restladung oder zweite Anfahrt kostet mehr als der Überschuss. Die 10% decken Verschüttetes und unebenen Untergrund; bei handgegrabenen Schalungen sind 15% die ehrliche Zahl.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ConcreteCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
