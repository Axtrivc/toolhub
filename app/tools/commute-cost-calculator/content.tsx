'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CommuteCostCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Your commute was never deductible</h2>
    <p>Miles between home and your regular workplace have never counted as deductible business mileage for employees, and post-2017 law removed unreimbursed employee expenses entirely. The commute is pure personal spending — which is exactly why it deserves an honest price tag.</p>
    <h2>Per-mile beats gas math</h2>
    <p>The 2025 IRS-style figure of 70 cents per mile approximates the full cost of moving a car: fuel, tires, maintenance, insurance, depreciation. Pricing only MPG × pump price typically understates the true cost by half or more — fuel is barely a third of what a mile really costs.</p>
    <h2>The hours dwarf the dollars</h2>
    <p>Thirty minutes each way, five days a week, is roughly 240 hours a year — six 40-hour work weeks spent in traffic. Pricing those hours at your after-tax rate often reveals that the "cheap" suburban house costs more in time than the city one costs in rent.</p>
    <h2>What to add by hand</h2>
    <p>Parking, tolls, transit passes, and the occasional EV charging bill sit outside this calculator. So does the length of your commitment: a commute you can quit in a month by moving is a different decision from one locked in for a 30-year mortgage.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Tu trayecto al trabajo nunca fue deducible</h2>
    <p>Las millas entre casa y el lugar de trabajo fijo jamás han contado como millas de negocios para empleados, y la ley de 2017 eliminó por completo los gastos no reembolsados. El trayecto es gasto personal puro — exactamente por eso merece una etiqueta de precio honesta.</p>
    <h2>La tarifa por milla vence a la aritmética de gasolina</h2>
    <p>Los 70 centavos por milla de 2025 (criterio IRS) aproximan el coste completo de mover un coche: combustible, neumáticos, mantenimiento, seguros, depreciación. Calcular solo MPG × precio de la bomba suele quedarse a la mitad o menos — la gasolina ni siquiera es un tercio de lo que cuesta una milla real.</p>
    <h2>Las horas eclipsan a los dólares</h2>
    <p>Media hora a la ida, cinco días a la semana, son unas 240 horas al año — seis semanas laborales completas atascado en el tráfico. Ponerle precio a esas horas con tu tarifa neta a menudo revela que la casa suburbana «barata» cuesta más en tiempo de lo que cuesta el alquiler urbano.</p>
    <h2>Lo que hay que sumar a mano</h2>
    <p>Aparcamiento, peajes, abonos de transporte y la factura ocasional del cargador eléctrico quedan fuera de esta calculadora. Igual que la duración del compromiso: un trayecto que puedes dejar en un mes mudándote es una decisión distinta a uno atado a 30 años de hipoteca.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Dein Pendelweg war nie absetzbar</h2>
    <p>Meilen zwischen Wohnung und festem Arbeitsplatz haben für Angestellte nie als Geschäftsmeilen gezählt, und seit der Reform 2017 sind auch nicht erstattete Arbeitnehmeraufwandsposten komplett gestrichen. Pendeln ist reiner Privatverbrauch — gerade deshalb verdient es ein ehrliches Preisschild.</p>
    <h2>Der Meilensatz schlägt die Spritrechnung</h2>
    <p>Die 70 Cent pro Meile (IRS-Referenz 2025) nähern die vollen Kosten eines fahrenden Autos an: Kraftstoff, Reifen, Wartung, Versicherung, Wertverlust. Nur MPG × Zapfsäulenpreis zu rechnen unterschätzt die echten Kosten meist um die Hälfte — Sprit ist nicht einmal ein Drittel dessen, was eine Meile wirklich kostet.</p>
    <h2>Die Stunden schlagen die Dollars</h2>
    <p>Halbe Stunde je Strecke an fünf Tagen sind rund 240 Stunden im Jahr — sechs volle 40-Stunden-Wochen im Stau. Mit dem Nettostundenlohn bewertet zeigt sich oft, dass das „billige“ Haus am Stadtrand zeitlich teurer ist als die Stadtwohnung es an Miete wäre.</p>
    <h2>Was du von Hand addieren musst</h2>
    <p>Parken, Maut, Monatstickets und die gelegentliche Ladekarte bleiben außen vor. Auch die Bindungsdauer gehört dazu: Ein Pendelweg, den man mit einem Umzug in einem Monat beendet, ist etwas anderes als einer, der an 30 Jahre Hypothek genagelt ist.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CommuteCostCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
