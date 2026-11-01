'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SmokingCostCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>A pack a day is a car payment</h2>
    <p>Twenty cigarettes at $12 a pack is $84 a week and $4,380 a year — a decent car payment or most of a maxed-out Roth IRA contribution. Light smokers still hand over four figures a year without ever seeing a single bill for it.</p>
    <h2>The investment counterfactual</h2>
    <p>Money not burned compounds. Redirecting that yearly $4,380 into an index fund at 7% grows to roughly $60,500 over ten years of contributions — and that assumes prices never rise again, which tobacco taxes make unlikely.</p>
    <h2>Prices only move one way</h2>
    <p>A pack costs $6-7 in Missouri and $12-15 in New York, with taxes often more than half the sticker. Every state excise increase silently raises your habit's subscription rate without so much as a renewal notice.</p>
    <h2>What this calculator cannot price</h2>
    <p>Smoking surcharges on health insurance — up to 50% on marketplace plans — higher life premiums, and lost work time dwarf the cash spend. Use the dollar figure as the floor of the true cost, never the ceiling.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Un paquete al día es una cuota de coche</h2>
    <p>Veinte cigarrillos a 12 $ el paquete son 84 $ a la semana y 4.380 $ al año — una letra decente de coche o la mayor parte de un Roth IRA completo. Los fumadores ligeros también entregan cuatro cifras al año sin recibir jamás una factura por ello.</p>
    <h2>La contrafactual de la inversión</h2>
    <p>El dinero que no se quema se capitaliza. Redirigir esos 4.380 $ anuales a un indexado al 7% crece hasta unos 60.500 $ en diez años de aportaciones — y eso suponiendo que el precio no suba nunca más, algo que los impuestos al tabaco hacen improbable.</p>
    <h2>Los precios solo van en una dirección</h2>
    <p>Un paquete cuesta 6-7 $ en Misuri y 12-15 $ en Nueva York, con impuestos que a menudo superan la mitad de la etiqueta. Cada subida del impuesto estatal aumenta en silencio la suscripción de tu hábito, sin siquiera un aviso de renovación.</p>
    <h2>Lo que esta calculadora no puede tasar</h2>
    <p>Los recargos por fumar del seguro médico — hasta un 50% en los planes del marketplace —, las primas de vida más caras y el tiempo de trabajo perdido empequeñecen el gasto en efectivo. Usa la cifra en dólares como el suelo del coste real, nunca como el techo.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Eine Schachtel täglich ist eine Autorate</h2>
    <p>Zwanzig Zigaretten zu 12 $ die Schachtel sind 84 $ pro Woche und 4.380 $ im Jahr — eine ordentliche Autorate oder der Großteil eines vollen Roth-IRA. Auch Gelegenheitsraucher blättern vierstellig pro Jahr hin, ohne je eine Rechnung zu sehen.</p>
    <h2>Das Investitions-Gegenszenario</h2>
    <p>Nicht verbranntes Geld verzinst sich. Die jährlichen 4.380 $ in einen Indexfonds bei 7 % umgeleitet, wachsen über zehn Einzahlungsjahre auf rund 60.500 $ — und das ohne jede Preiserhöhung, die Tabaksteuern unwahrscheinlich macht.</p>
    <h2>Die Preise kennen nur eine Richtung</h2>
    <p>Eine Schachtel kostet in Missouri 6-7 $, in New York 12-15 $; Steuern machen oft mehr als die Hälfte des Preises aus. Jede Erhöhung der Landessteuer treibt das Abo deines Habits stumm nach oben — ohne Kündigungshinweis, ohne Erinnerung.</p>
    <h2>Was dieser Rechner nicht beziffern kann</h2>
    <p>Raucheraufschläge auf die Krankenversicherung — bis 50 % bei Marketplace-Plänen —, teurere Lebensversicherungen und verlorene Arbeitszeit wiegen schwerer als der Baraufwand. Nimm die Dollarzahl als Untergrenze der echten Kosten, nie als Obergrenze.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SmokingCostCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
