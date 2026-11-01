'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DcaCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why average cost beats the average price</h2>
    <p>Spend a fixed $500 a month and you automatically buy more shares when prices are low and fewer when they are high — your average cost ends up below the simple average of the prices you paid. This is the harmonic-mean effect, and it is the one mechanical edge DCA has: volatility itself lowers your entry.</p>
    <h2>DCA versus lump sum, honestly</h2>
    <p>Because markets rise more often than they fall, investing everything on day one has historically beaten spreading it out about two-thirds of the time. DCA wins mechanically when the endpoint is below the start — try a falling price in the calculator and watch the gap. Its real-world edge is behavioral: it removes the guessing and keeps you invested through the dips that scare lump-sum investors.</p>
    <h2>Pick an amount you will not flinch at</h2>
    <p>Align contributions with your paycheck — monthly or every two weeks — and automate them. The exact frequency barely moves the average cost; the consistency does. The whole strategy fails the first time you pause the plan because prices dropped, because buying the dips is not a bug of DCA, it is the entire mechanism.</p>
    <h2>Where DCA quietly costs you</h2>
    <p>Cash held back for future contributions misses early gains in fast-rising markets, per-trade fees bite if the amount is tiny, and years of purchases create a pile of tax lots to track. If you receive a lump sum and choose DCA anyway, do it as a deliberate, time-boxed plan — not an open-ended delay of a decision you have already made.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué el coste medio queda por debajo del precio medio</h2>
    <p>Si inviertes 500 $ fijos al mes, compras automáticamente más participaciones cuando está barato y menos cuando está caro: tu coste medio termina por debajo de la media simple de los precios pagados. Es el efecto de la media armónica, la única ventaja mecánica de la DCA — la propia volatilidad abarata tu entrada.</p>
    <h2>DCA contra lump sum, sin adornos</h2>
    <p>Como los mercados suben más a menudo de lo que bajan, invertirlo todo el primer día ha ganado históricamente unas dos de cada tres veces. La DCA gana mecánicamente cuando el precio acaba por debajo del inicio: prueba un precio a la baja en la calculadora y mira la brecha. Su ventaja real es conductual: elimina el pronóstico y te mantiene invertido en las caídas que asustan al inversor de golpe.</p>
    <h2>Elige un importe que no te haga dudar</h2>
    <p>Alinea las aportaciones con tu nómina —mensual o quincenal— y automatízalas. La frecuencia exacta apenas mueve el coste medio; la constancia sí. La estrategia entera se rompe la primera vez que pausas el plan porque cayó el precio: comprar en las caídas no es un efecto secundario de la DCA, es todo su mecanismo.</p>
    <h2>Dónde te cuesta dinero la DCA sin que lo notes</h2>
    <p>El efectivo reservado para futuras aportaciones se pierde las primeras subidas de los mercados rápidos; las comisiones por operación muerden si el importe es pequeño; y años de compras generan un montón de lotes fiscales que llevar. Si recibes un capital y aun así eliges DCA, hazlo como un plan con fecha de fin — no como una postergación indefinida de una decisión ya tomada.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum der Durchschnittskurs unter dem Durchschnittspreis liegt</h2>
    <p>Wer monatlich feste 500 $ investiert, kauft automatisch mehr Anteile, wenn es billig ist, und weniger, wenn es teuer ist — der Durchschnittskurs landet damit unter dem einfachen Mittel der gezahlten Preise. Das ist der harmonische-Mittel-Effekt und der einzige mechanische Vorsprung des Sparplans: Die Volatilität selbst verbilligt den Einstieg.</p>
    <h2>Sparplan gegen Einmalanlage — ehrlich</h2>
    <p>Da Märkte öfter steigen als fallen, hat die Einmalanlage am ersten Tag historisch etwa zwei von drei Malen gewonnen. Rechnerisch gewinnt der Sparplan, wenn der Endkurs unter dem Startkurs liegt — gib im Rechner einen fallenden Kurs ein und sieh die Lücke. Der echte Vorteil ist verhaltenspsychologisch: kein Timing-Rätsel, und man bleibt in den Dipps investiert, die Einmalanleger erschrecken.</p>
    <h2>Wähle einen Betrag, bei dem du nicht zögerst</h2>
    <p>Koppel die Ausführung ans Gehalt — monatlich oder vierzehntägig — und automatisiere sie. Die exakte Frequenz verschiebt den Durchschnittskurs kaum; die Regelmäßigkeit schon. Die Strategie bricht beim ersten Pause-Knopf im Abwärtstrend: Billig kaufen ist kein Nebeneffekt des Sparplans, es ist sein gesamter Mechanismus.</p>
    <h2>Wo der Sparplan unbemerkt kostet</h2>
    <p>Zurückgehaltenes Bargeld verpasst die frühen Gewinne schneller Märkte; Ordergebühren schmerzen bei winzigen Beträgen; und jahrelange Käufe türmen einen Berg Steuer-Depotpaket-Dateien auf. Wenn du eine Summe erhältst und dich trotzdem für den Sparplan entscheidest, dann als planvolles, befristetes Vorhaben — nicht als endloses Aufschieben einer längst gefällten Entscheidung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function DcaCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
