'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PaverCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与既有工具页渲染一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Size sets the piece count</h2>
    <p>Concrete pavers come in fixed sizes, so coverage is a published constant: 4.5 pieces of 4×8 per square foot, 4 of 6×6, 2.25 of 8×8, 1 of 12×12. A 16×12 patio with 4×8s needs 864 pieces exactly — 951 with a 10% cutting allowance.</p>
    <h2>The base is the patio</h2>
    <p>Pavers fail from below, not above. Patios and walkways want 4 inches of compacted crushed stone; driveways want 6-12 with geotextile under it. For 192 ft² at 4 inches that's 64 ft³ — 2.37 yards of crushed stone delivered.</p>
    <h2>One inch of sand, ever</h2>
    <p>Bedding sand is a screeding layer, not a leveling crutch: exactly 1 inch of coarse concrete sand. Thicker beds pump water, creep under load, and rut within a season. Joints get polymeric sand swept in after compaction.</p>
    <h2>Waste follows the pattern</h2>
    <p>Straight-laid running bond trims 10%; herringbone and 45° diagonals cut more edges, so allow 15%. Buy all pavers from one pallet run — like tile and drywall, dye lots differ visibly across batches.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El tamaño fija el número de piezas</h2>
    <p>Los adoquines de hormigón vienen en medidas fijas, así que el rendimiento es una constante publicada: 4,5 piezas de 4×8 por pie cuadrado, 4 de 6×6, 2,25 de 8×8, 1 de 12×12. Un patio de 16×12 con 4×8 necesita 864 piezas exactas — 951 con el 10% de corte.</p>
    <h2>La base es el patio</h2>
    <p>Los adoquines fallan desde abajo, no desde arriba. Patios y caminos quieren 4 pulgadas de triturada compactada; las entradas, 6-12 con geotextil debajo. Para 192 ft² a 4 pulgadas son 64 ft³ — 2,37 yardas de triturada a repartir.</p>
    <h2>Una pulgada de arena, siempre</h2>
    <p>La arena de asiento es capa de enrasado, no muleta para nivelar: exactamente 1 pulgada de arena gruesa de hormigón. Las capas más gruesas bombean agua, se desplazan con la carga y forman rodadas en una temporada. Las juntas reciben arena polimérica barrida tras compactar.</p>
    <h2>La merma sigue al patrón</h2>
    <p>Un aparejo recto a soga se arregla con 10%; la espiga y los diagonales a 45° cortan más bordes, deja 15%. Compra todos los adoquines del mismo palé — como con azulejo y placa, los lotes de tinte se distinguen a simple vista.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Größe setzt die Stückzahl</h2>
    <p>Betonpflaster kommt in festen Maßen, darum ist die Abdeckung eine publizierte Konstante: 4,5 Stück 4×8 je Quadratfuß, 4 bei 6×6, 2,25 bei 8×8, 1 bei 12×12. Eine 16×12-Terrasse mit 4×8 braucht exakt 864 Steine — 951 mit 10% Schnittzugabe.</p>
    <h2>Der Unterbau ist die Terrasse</h2>
    <p>Pflaster versagt von unten, nicht von oben. Terrassen und Wege wollen 4 Zoll verdichteten Schotter; Einfahrten 6-12 mit Geotextil darunter. Für 192 ft² bei 4 Zoll sind das 64 ft³ — 2,37 Yards gelieferter Schotter.</p>
    <h2>Ein Zoll Sand, immer</h2>
    <p>Bettsand ist eine Abziehschicht, keine Nivellier-Krücke: exakt 1 Zoll grober Betonsand. Dickere Schichten pumpen Wasser, kriechen unter Last und rutschen in einer Saison durch. Fugen bekommen nach der Verdichtung eingekehrten Polymerfugensand.</p>
    <h2>Verschnitt folgt dem Muster</h2>
    <p>Gerades Läuferverband kommt mit 10% aus; Fischgrät und 45°-Diagonalen schneiden mehr Kanten — nimm 15%. Kaufe alle Steine aus einer Palettencharge — wie bei Fliesen und Gipsplatten unterscheiden sich Farbtöne sichtbar zwischen Chargen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PaverCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
