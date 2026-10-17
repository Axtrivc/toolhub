'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * GravelCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与既有工具页渲染一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Sold by the ton, measured in yards</h2>
    <p>Quarries and landscape yards quote gravel by weight, but you measure a project in volume. The bridge is density: crushed stone ≈ 2,700 lb/yd³ (1.35 tons), pea gravel ≈ 2,600, dry sand ≈ 2,500. A 20×10 area at 3 inches is 50 ft³ — 1.85 yards, 2.5 tons of crushed stone.</p>
    <h2>Driveway thickness tiers</h2>
    <p>Passenger cars need 4-6 inches of compacted crushed stone over decent subgrade; trucks and RVs want 6-12 with larger stone at the bottom. Skimping on depth doesn't save money — it buys ruts and a redo in two years.</p>
    <h2>Material changes the job</h2>
    <p>Crushed stone locks together under compaction — right for driveways and bases. Pea gravel rolls and stays loose — right for paths and playground look, wrong anywhere wheels turn. Sand is for bedding pavers and amending soil, not for load.</p>
    <h2>Delivery tiers punish small orders</h2>
    <p>Small dump trucks carry 1-5 yards, full tri-axles 10+ (13-14 tons of crushed stone). Delivery is often flat-rate, so one full truck beats two half trucks. Round your order up to the truck tier, not down to the calculation.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>按吨卖,按码量</h2>
    <p>采石场与园艺场按重量报价,而你量的是体积。桥梁是密度:碎石约 2,700 lb/yd³(1.35 吨),豌豆砾石约 2,600,干砂约 2,500。20×10 的区域铺 3 英寸是 50 ft³——1.85 码、碎石 2.5 吨。</p>
    <h2>车道厚度分档</h2>
    <p>私家车在合格垫层上铺 4-6 英寸压实碎石即可;卡车与房车要 6-12 英寸且底层用更大粒径。省厚度不省钱——买来的是车辙和两年后的返工。</p>
    <h2>材料改变用途</h2>
    <p>碎石压实后咬合锁定——适合车道与垫层。豌豆砾石滚动松散——适合园路与游乐观感,车轮转向处就是灾难。砂用来垫铺路石、改土,不承重。</p>
    <h2>配送档位惩罚小单</h2>
    <p>小型自卸车装 1-5 码,大型三桥车 10 码以上(碎石 13-14 吨)。运费常是包价,一整车胜过两半车。订单向上凑到车的档位,而不是向下凑计算值。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Se vende por tonelada, se mide por yardas</h2>
    <p>Canteras y viveros presupuestan la grava por peso, pero el proyecto lo mides en volumen. El puente es la densidad: piedra machacada ≈ 2.700 lb/yd³ (1,35 t), grava de guisante ≈ 2.600, arena seca ≈ 2.500. Un área de 20×10 a 3 pulgadas son 50 ft³ — 1,85 yardas, 2,5 toneladas de machacada.</p>
    <h2>Los espesores de entrada por niveles</h2>
    <p>Coches de calle piden 4-6 pulgadas de machacada compactada sobre una base decente; camiones y autocaravanas quieren 6-12 con piedra mayor al fondo. Recortar espesor no ahorra: compra rodadas y una repetición en dos años.</p>
    <h2>El material cambia el trabajo</h2>
    <p>La machacada se traba al compactar — apta para entradas y bases. La de guisante rueda y queda suelta — bien para caminos y estética de parque, mal donde giran ruedas. La arena es para asentar adoquines y enmendar suelo, no para carga.</p>
    <h2>Los tramos de reparto castigan el pedido pequeño</h2>
    <p>Los volquetes pequeños llevan 1-5 yardas, los tríaxle completos más de 10 (13-14 toneladas de machacada). El reparto suele ser tarifa plana: un camión lleno vence a dos medios. Redondea el pedido al tramo del camión, no a la baja del cálculo.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Nach Tonne verkauft, in Yards gemessen</h2>
    <p>Steinbrüche und Gartenmärkte kalkulieren Kies nach Gewicht, dein Projekt misst du aber nach Volumen. Die Brücke ist die Dichte: Schotter ≈ 2.700 lb/yd³ (1,35 Tonnen), Rundkies ≈ 2.600, trockener Sand ≈ 2.500. Eine 20×10-Fläche bei 3 Zoll ist 50 ft³ — 1,85 Yards, 2,5 Tonnen Schotter.</p>
    <h2>Einfahrtsdicke nach Stufen</h2>
    <p>Pkw brauchen 4-6 Zoll verdichteten Schotter auf tragfähigem Untergrund; Lkw und Wohnmobile wollen 6-12 mit gröberem Stein unten. Bei der Dicke sparen spart nicht — es kauft Spurrillen und in zwei Jahren den Neuanfang.</p>
    <h2>Das Material ändert die Aufgabe</h2>
    <p>Schotter verzahnt sich unter Verdichtung — richtig für Einfahrten und Aufbau. Rundkies rollt und bleibt locker — richtig für Wege und Optik, falsch überall dort, wo Räder drehen. Sand bettet Pflaster und verbessert Boden, er trägt nicht.</p>
    <h2>Lieferstufen bestrafen kleine Bestellungen</h2>
    <p>Kleine Kipper fahren 1-5 Yards, volle Triaxle über 10 (13-14 Tonnen Schotter). Die Lieferung ist oft Pauschale — ein voller LKW schlägt zwei halbe. Runde die Bestellung zur LKW-Stufe auf, nicht zur Rechnung ab.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function GravelCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
