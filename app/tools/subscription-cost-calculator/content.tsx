'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SubscriptionCostCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why yearly numbers shock people</h2>
    <p>$14.99 feels weightless monthly but totals $180 per service per year. Households averaging eight subscriptions routinely discover $1,500-2,500 of annual spend they could not name beforehand.</p>
    <h2>How to audit honestly</h2>
    <p>Search your card statement for recurring charges across the last three months. Annual-billed services hide best: domains, cloud storage, antivirus, software licenses.</p>
    <h2>The billing-cycle trap</h2>
    <p>Services deliberately stagger renewal dates so no single statement shows the full picture. Converting everything to monthly (as this calculator does) restores visibility.</p>
    <h2>Keep or cancel test</h2>
    <p>For each subscription ask: did I deliberately use this in the last 30 days? Deliberate use means opening it on purpose, not because an email reminded you it exists.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué el número anual impacta</h2>
    <p>14,99 $ al mes pesan como nada, pero suman 180 $ por servicio y año. Los hogares con ocho suscripciones de media descubren rutinariamente 1 500-2 500 $ de gasto anual que no sabían nombrar de antemano.</p>
    <h2>Cómo auditar con honestidad</h2>
    <p>Busca en tus extractos los cargos recurrentes de los últimos tres meses. Las suscripciones anuales se esconden mejor: dominios, almacenamiento en la nube, antivirus, licencias de software.</p>
    <h2>La trampa del ciclo de facturación</h2>
    <p>Los servicios escalonan a propósito las fechas de renovación para que ningún extracto muestre el cuadro completo. Convertir todo a mensual (como hace esta calculadora) devuelve la visibilidad.</p>
    <h2>El test de mantener o cancelar</h2>
    <p>Pregúntate por cada suscripción: ¿la usé a propósito en los últimos 30 días? Uso deliberado significa abrirla porque tú quieres, no porque un correo te recordó que existe.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum die Jahreszahl schockiert</h2>
    <p>14,99 $ im Monat fühlen sich gewichtslos an, sind aber 180 $ pro Dienst und Jahr. Haushalte mit im Schnitt acht Abos entdecken regelmäßig 1.500-2.500 $ Jahresausgaben, die sie vorher beim Namen nicht nennen konnten.</p>
    <h2>Wie du ehrlich prüfst</h2>
    <p>Gehe die Kartenabrechnungen der letzten drei Monate nach wiederkehrenden Posten durch. Jahresabos verstecken sich am besten: Domains, Cloud-Speicher, Virenschutz, Softwarelizenzen.</p>
    <h2>Die Abrechnungszyklus-Falle</h2>
    <p>Dienste staffeln Erneuerungsdaten absichtlich, damit keine einzelne Abrechnung das ganze Bild zeigt. Alles auf Monatsbasis umzurechnen (wie dieser Rechner es tut) stellt die Sichtbarkeit wieder her.</p>
    <h2>Der Behalten-oder-Kündigen-Test</h2>
    <p>Frage bei jedem Abo: Habe ich es in den letzten 30 Tagen absichtlich genutzt? Absichtliche Nutzung heißt, es bewusst zu öffnen — nicht, weil eine E-Mail dich an seine Existenz erinnert hat.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SubscriptionCostCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
