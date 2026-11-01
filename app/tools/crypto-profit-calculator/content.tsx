'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CryptoProfitCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Fees are the quiet tax on every trade</h2>
    <p>Exchanges charge per side, so a 0.1% fee costs roughly 0.2% round trip before the bid-ask spread — and the spread on thin altcoins can dwarf the fee schedule. A 30% price move that nets 29.77% is the honest arithmetic; at 0.5% taker fees per side, scalping small moves can pay the exchange more than yourself.</p>
    <h2>Back-solving your exit price</h2>
    <p>Most profit calculators stop at "here is what you made." The more useful question before you enter is the reverse: given my size, entry, and fee tier, what price must this hit for me to net $1,000? That number, straight from the calculator, is a limit order waiting to be placed — it removes hope from the exit.</p>
    <h2>ROI is only honest on invested capital</h2>
    <p>Percentage gains on "what I almost invested" are a classic cope. Measure ROI on the money actually committed, after both fee legs, and compare it against the risk taken to get it. Leveraged positions add funding rates every few hours, liquidation risk, and a payoff that no spot calculator will capture.</p>
    <h2>The taxman holds a share of the exit</h2>
    <p>In the US and most of Europe, selling crypto for fiat — or spending it, or swapping it for another token — is a disposal and usually a taxable event. Gains reserve a slice for taxes the moment the trade closes; reassessing that slice in April is how successful years become painful ones. Track your lots now, not later.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Las comisiones son el impuesto silencioso</h2>
    <p>Los exchanges cobran por pierna: un 0,1 % cuesta ~0,2 % por round trip antes del spread, y en altcoins poco líquidas el spread puede superar con creces la tarifa. Un movimiento del 30 % que netea 29,77 % es la aritmética honesta; con un 0,5 % de taker por lado, el scalping de movimientos pequeños puede pagarle más al exchange que a ti.</p>
    <h2>Deducir tu precio de salida</h2>
    <p>La mayoría de calculadoras se quedan en «esto ganaste». La pregunta útil antes de entrar es la inversa: con mi tamaño, mi entrada y mi nivel de comisión, ¿qué precio debe tocar para netear 1.000 $? Esa cifra, directa de la calculadora, es una orden limit lista para colocarse — saca la esperanza de la salida.</p>
    <h2>El ROI solo es honesto sobre el capital invertido</h2>
    <p>Los porcentajes sobre «lo que casi invierto» son autoconsuelo clásico. Mide el ROI sobre el dinero realmente comprometido, tras ambas comisiones, y compáralo con el riesgo asumido. El apalancamiento añade funding rates cada pocas horas, riesgo de liquidación y un pago que ninguna calculadora de spot recoge.</p>
    <h2>Hacienda guarda su porción de la salida</h2>
    <p>En EE. UU. y la mayor parte de Europa, vender cripto por fiat —o gastarla, o cambiarla por otro token— es una disposición y normalmente un hecho imponible. Aparta la recaudación en el momento de cerrar el trade; rebuscarla en abril es como los años buenos se vuelven dolorosos. Registra tus lotes ahora, no después.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Gebühren sind die stille Steuer auf jeden Trade</h2>
    <p>Börsen berechnen je Seite: 0,1 % kostet rund 0,2 % pro Roundtrip vor dem Spread — und bei dünnen Altcoins kann der Spread die Gebührentabelle locker übersteigen. Eine 30-%-Bewegung, die 29,77 % nettet, ist ehrliche Arithmetik; bei 0,5 % Taker je Seite zahlt manche Scalping-Strategie der Börse mehr als sich selbst.</p>
    <h2>Den Ausstiegskurs herleiten</h2>
    <p>Die meisten Rechner enden bei „so viel hast du verdient". Die nützlichere Frage vor dem Einstieg ist die Umkehrung: Bei meiner Größe, meinem Entry und meiner Gebührenstufe — welcher Kurs muss stehen, damit 1.000 $ netto übrig bleiben? Diese Zahl, direkt aus dem Rechner, ist eine fertige Limit-Order — sie nimmt die Hoffnung aus dem Ausstieg.</p>
    <h2>ROI ist nur auf echtem Einsatz ehrlich</h2>
    <p>Prozente auf „das, was ich fast investiert hätte" sind klassische Selbstberuhigung. Miss den ROI auf das tatsächlich gebundene Geld, nach beiden Gebührenbeinen, und stell ihn dem eingegangenen Risiko gegenüber. Hebelpositionen bringen dazu Funding Rates alle paar Stunden, Liquidationsrisiko und einen Payoff, den kein Spot-Rechner abbildet.</p>
    <h2>Das Finanzamt hält einen Teil des Ausstiegs</h2>
    <p>In den USA und dem Großteil Europas ist der Krypto-Verkauf gegen Fiat — oder das Ausgeben, oder das Tauschen gegen einen anderen Token — eine Veräußerung und meist ein steuerpflichtiger Vorgang. Lege den Steueranteil im Moment des Abschlusses beiseite; ihn erst im April zu suchen macht gute Jahre schmerzhaft. Führ deine Pakete jetzt, nicht später.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CryptoProfitCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
