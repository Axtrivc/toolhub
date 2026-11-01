'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * WeddingBudgetCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The standard allocation</h2>
    <p>Catering and bar absorb about 30% of a typical budget, venue and rentals 25%, photography and video 15%. Those three dominate; everything else negotiates around them.</p>
    <h2>Guest count is the master lever</h2>
    <p>Cost-per-guest drives catering, rentals, invitations, favors, and even venue size requirements. Cutting 10 guests frees more budget than downgrading flowers.</p>
    <h2>Off-peak saves real money</h2>
    <p>Saturday evenings in June-September carry peak pricing. Friday evenings, Sundays, and November-April dates routinely save 20-30% on venue and vendors alike.</p>
    <h2>Build in the buffer</h2>
    <p>Set aside part of the miscellaneous slice as contingency. Average weddings overshoot their initial budget by roughly 10-15%, usually in catering counts and last-minute rentals.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El reparto estándar</h2>
    <p>El catering y la barra absorben cerca del 30 % de un presupuesto típico, recinto y alquileres el 25 %, fotografía y vídeo el 15 %. Esas tres partidas dominan; todo lo demás se negocia a su alrededor.</p>
    <h2>El número de invitados es la palanca maestra</h2>
    <p>El coste por invitado arrastra catering, alquileres, invitaciones, detalles y hasta el tamaño del recinto. Quitar 10 invitados libera más presupuesto que bajar el nivel de las flores.</p>
    <h2>La temporada baja ahorra de verdad</h2>
    <p>Los sábados por la noche de junio a septiembre se pagan a precios pico. Los viernes por la noche, los domingos y las fechas de noviembre-abril suelen ahorrar un 20-30 % en recinto y proveedores por igual.</p>
    <h2>Construye el colchón</h2>
    <p>Reserva parte de la partida miscelánea para imprevistos. Las bodas medias se pasan del presupuesto inicial en torno a un 10-15 %, casi siempre por el número de comensales y los alquileres de última hora.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Standardaufteilung</h2>
    <p>Catering und Bar schlucken etwa 30 % eines typischen Budgets, Location und Ausstattung 25 %, Foto und Video 15 %. Diese drei dominieren; alles andere wird um sie herum verhandelt.</p>
    <h2>Die Gästezahl ist der Haupt-Hebel</h2>
    <p>Die Kosten pro Gast treiben Catering, Ausstattung, Einladungen, Gastgeschenke und sogar die nötige Größe der Location. Zehn Gäste weniger setzen mehr Budget frei als jedes Blumen-Downgrade.</p>
    <h2>Nebensaison spart echtes Geld</h2>
    <p>Samstagsabende von Juni bis September kosten Höchstpreise. Freitagsabende, Sonntage und Termine von November bis April sparen bei Location und Dienstleistern regelmäßig 20-30 %.</p>
    <h2>Baue den Puffer ein</h2>
    <p>Lege einen Teil des Sonstige-Postens als Reserve zurück. Hochzeiten überschreiten ihr Anfangsbudget im Schnitt um rund 10-15 % — meist bei den Catering-Zahlen und Last-Minute-Mieten.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function WeddingBudgetCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
