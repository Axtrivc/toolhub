'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HouseAffordabilityCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支为 SEO 主文。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Work backwards from your income, not the listing price</h2>
    <p>Most buyers fall in love with a house and then discover the payment. Affordability inverts that: lenders cap your total housing payment — principal, interest, property tax, insurance, and HOA combined — at 28% of gross monthly income (the front-end ratio), and housing plus all other debts at 36% (the back-end ratio). Your real budget is set by whichever ceiling is lower.</p>
    <h2>Why the back-end rule usually wins</h2>
    <p>A $650 car payment quietly shrinks your housing budget by $650: at a 36% back-end cap, every dollar of existing debt comes straight out of the housing allowance. This is why two households with identical salaries get approved for wildly different amounts — and why paying off a car loan months before applying can add tens of thousands to your maximum price.</p>
    <h2>The tax-and-insurance trap</h2>
    <p>Two identical $300,000 houses can carry payments $400 apart: a 2.4% property tax area versus 0.6%, plus flood or high-wind insurance. Because lenders count the full PITI, high-tax states effectively buy you less house at the same income. This calculator solves the loan algebra with taxes, insurance, and HOA baked in, the way underwriters actually do.</p>
    <h2>What this number is not</h2>
    <p>It is the maximum a conventional lender will approve, not the maximum you should spend. Retirement contributions, childcare, and maintenance reserves live outside the 36% ratio. Most planners suggest staying 10-15% under the approval ceiling so a rate bump at lock or an HOA special assessment does not turn the payment into a squeeze.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Calcula hacia atrás desde tus ingresos, no desde el precio</h2>
    <p>La mayoría se enamora de la casa y después descubre la cuota. La asequibilidad invierte ese orden: los prestamistas limitan tu pago total de vivienda —capital, intereses, impuesto predial, seguro y HOA— al 28% del ingreso bruto mensual (ratio frontal), y vivienda más todas las demás deudas al 36% (ratio posterior). Tu presupuesto real lo fija el techo más bajo de los dos.</p>
    <h2>Por qué suele mandar el ratio posterior</h2>
    <p>Una cuota de coche de 650 $ encoge en silencio tu presupuesto de vivienda en 650 $: con el límite posterior del 36%, cada dólar de deuda existente sale directo de la asignación para la casa. Por eso dos hogares con el mismo sueldo reciben aprobaciones muy distintas — y liquidar el coche unos meses antes de solicitar la hipoteca puede sumar decenas de miles al precio máximo.</p>
    <h2>La trampa de impuestos y seguro</h2>
    <p>Dos casas idénticas de 300.000 $ pueden llevar cuotas separadas por 400 $: una zona con impuesto predial del 2,4% frente a otra del 0,6%, más el seguro de inundaciones o viento. Como los bancos cuentan el PITI completo, los estados con impuestos altos te compran menos casa con el mismo sueldo. Esta calculadora resuelve la ecuación con impuestos, seguro y HOA incluidos, igual que hacen los suscriptores.</p>
    <h2>Lo que este número no es</h2>
    <p>Es el máximo que un prestamista convencional aprobará, no el máximo que deberías gastar. El ahorro para jubilación, la guardería y el fondo de mantenimiento viven fuera del 36%. La mayoría de asesores sugiere quedarse un 10-15% por debajo del techo, para que una subida de tipo al cerrar o una derrama de la HOA no ahogue la cuota.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Rückwärts vom Einkommen rechnen, nicht vom Kaufpreis</h2>
    <p>Die meisten verlieben sich zuerst ins Haus und entdecken dann die Rate. Bezahlbarkeit dreht das um: Kreditgeber deckeln die gesamte Wohnrate — Tilgung, Zinsen, Grundsteuer, Versicherung und HOA — bei 28% des Bruttomonatseinkommens (Front-End-Ratio) und Wohnen plus alle anderen Schulden bei 36% (Back-End-Ratio). Dein echtes Budget bestimmt der niedrigere der beiden Deckel.</p>
    <h2>Warum meist die Back-End-Ratio gewinnt</h2>
    <p>Eine Autokreditrate von 650 $ schrumpft dein Wohnbudget still um 650 $: Beim 36%-Back-End-Limit geht jeder Dollar bestehender Schulden direkt vom Wohnrahmen ab. Deshalb bekommen zwei Haushalte mit gleichem Gehalt völlig unterschiedliche Bewilligungen — und warum ein vorzeitig getilgter Autokredit die Preisobergrenze um Zehntausende heben kann.</p>
    <h2>Die Steuer- und Versicherungsfalle</h2>
    <p>Zwei identische 300.000-$-Häuser können 400 $ Rate auseinanderliegen: eine Region mit 2,4% Grundsteuer gegen eine mit 0,6%, plus Hochwasser- oder Sturmversicherung. Weil Banken die volle PITI zählen, kaufst du in Hochsteuerländern mit demselben Einkommen weniger Haus. Dieser Rechner löst die Kreditgleichung mit Steuern, Versicherung und HOA — so wie Underwriter es tatsächlich tun.</p>
    <h2>Was diese Zahl nicht ist</h2>
    <p>Sie ist das Maximum, das ein konventioneller Kreditgeber bewilligt — nicht das Maximum, das du ausgeben solltest. Altersvorsorge, Kinderbetreuung und Instandhaltungsrücklage leben außerhalb der 36%. Die meisten Berater empfehlen 10-15% unter dem Bewilligungsdeckel zu bleiben, damit ein Zinsanstieg beim Locking oder eine HOA-Sonderumlage die Rate nicht erdrückt.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function HouseAffordabilityCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
