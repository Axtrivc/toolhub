'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * OvertimeCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Who gets overtime in the US</h2>
    <p>Non-exempt employees covered by FLSA earn at least 1.5× their regular rate past 40 hours weekly. Exempt status depends on both salary level and job duties — job titles alone do not decide it.</p>
    <h2>Overtime on salary</h2>
    <p>Salaried non-exempt workers still get OT: divide the weekly salary by 40 for the regular rate. Some states also require daily overtime after 8 hours regardless of weekly totals.</p>
    <h2>What counts into the rate</h2>
    <p>Bonuses, commissions, and shift differentials generally must be included when computing the "regular rate" — plain hourly rate understates what you are owed.</p>
    <h2>Double time</h2>
    <p>Federal law never requires ×2 pay, but California mandates it past 12 hours/day, and many union contracts and employer policies offer holiday double time voluntarily.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Quién cobra horas extra en EE. UU.</h2>
    <p>Los empleados no exentos cubiertos por la FLSA cobran al menos 1,5× su tarifa regular pasadas las 40 horas semanales. El estatus de exención depende a la vez del nivel salarial y de las funciones del puesto — el cargo por sí solo no lo decide.</p>
    <h2>Horas extra con salario fijo</h2>
    <p>Los asalariados no exentos también cobran horas extra: divide el salario semanal entre 40 para obtener la tarifa regular. Algunos estados exigen además horas extra diarias tras 8 horas, sin importar el total semanal.</p>
    <h2>Qué cuenta en la tarifa</h2>
    <p>Al calcular la «tarifa regular» deben incluirse en general bonos, comisiones y complementos de turno — la tarifa horaria simple subestima lo que te deben.</p>
    <h2>Tiempo doble</h2>
    <p>La ley federal nunca exige el ×2, pero California lo obliga pasadas las 12 horas diarias, y muchos convenios colectivos y políticas de empresa ofrecen doble tiempo en festivos voluntariamente.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wer in den USA Überstunden bekommt</h2>
    <p>Nicht freigestellte Beschäftigte unter der FLSA erhalten ab 40 Wochenstunden mindestens das 1,5-Fache ihres Regelstundenlohns. Die Einstufung als freigestellt (exempt) hängt von Gehaltshöhe und Aufgaben des Postens ab — der Jobtitel allein entscheidet nicht.</p>
    <h2>Überstunden mit Festgehalt</h2>
    <p>Nicht freigestellte Festangestellte bekommen ebenfalls Überstunden: das Wochengehalt durch 40 geteilt ergibt den Regelstundenlohn. Manche Bundesstaaten verlangen zusätzlich tägliche Überstunden nach 8 Stunden, unabhängig von der Wochensumme.</p>
    <h2>Was in den Regellohn einfließt</h2>
    <p>Bei der Berechnung des «Regellohns» müssen Boni, Provisionen und Schichtzulagen in der Regel eingerechnet werden — der bloße Stundenlohn unterschätzt, was dir zusteht.</p>
    <h2>Doppelte Zeit</h2>
    <p>Das Bundesrecht verlangt nie ×2, aber Kalifornien schreibt es ab 12 Stunden pro Tag vor, und viele Tarifverträge und Firmenrichtlinien bieten Feiertags-Doppellohn freiwillig an.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function OvertimeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
