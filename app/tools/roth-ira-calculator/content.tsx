'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Roth IRA Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Roth vs. Traditional: the only difference is tax timing</h2>
    <p>
      Both accounts share the same $7,500 contribution limit (2026: $8,600 if you&apos;re 50 or older) and grow
      tax-free inside the account. The entire decision comes down to <em>when</em> you pay tax: a{' '}
      <strong>Traditional IRA</strong>{' '}
      deducts contributions today (lowering this year&apos;s tax bill) but taxes
      every withdrawal in retirement; a <strong>Roth IRA</strong> takes after-tax money now and every qualified
      withdrawal — principal <em>and</em> growth — is 100% tax-free.
    </p>

    <h2>The one rule that decides it</h2>
    <p>
      Compare your <strong>marginal tax rate today</strong> against your <strong>expected effective rate in
      retirement</strong>. If today&apos;s rate is higher (common in peak earning years), Traditional wins — you
      dodge a 24%+ tax today and pay maybe 12% later. If today&apos;s rate is lower (early career, sabbatical,
      low-income years), Roth locks in the bargain rate forever. This calculator runs both accounts through the
      same growth math so you can see the after-tax gap in dollars.
    </p>

    <h2>What the math assumes</h2>
    <p>
      Contributions compound annually at your expected return using the future value of an annuity:
      <code>FV = C × ((1+r)<sup>n</sup> − 1) / r</code>. The Traditional balance grows on pre-tax dollars
      (larger balance, taxed on withdrawal); the Roth balance grows on after-tax dollars (smaller balance, zero
      tax out). The comparison is apples-to-apples because the out-of-pocket cost today is identical.
    </p>

    <h2>Beyond the break-even math</h2>
    <p>
      Even when Traditional projects slightly ahead, Roth has strategic perks: no required minimum distributions
      (RMDs) after age 73, tax-free inheritance for beneficiaries, and a hedge against future tax-rate increases.
      Many people hold <em>both</em> — Traditional for the deduction in high-income years, Roth for flexibility
      and tax diversification. Re-run this comparison whenever your bracket changes.
    </p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Roth frente a Tradicional: la única diferencia es cuándo pagas impuestos</h2>
    <p>
      Ambas cuentas comparten el mismo límite de aportación de 7.500 $ (2026: 8.600 $ a partir de los 50 años) y
      crecen libres de impuestos en su interior. Toda la decisión se reduce a <em>cuándo</em> pagas el impuesto: una{' '}
      <strong>Traditional IRA</strong> deduce las aportaciones hoy (reduce la factura de este año) pero grava cada
      retirada en la jubilación; una <strong>Roth IRA</strong> recibe dinero ya tributado y cada retirada
      cualificada — capital <em>y</em> ganancias — es 100 % libre de impuestos.
    </p>

    <h2>La única regla que decide</h2>
    <p>
      Compara tu <strong>tipo marginal de hoy</strong> con el <strong>tipo efectivo esperado en la jubilación</strong>.
      Si el de hoy es más alto (habitual en los años de mayores ingresos), gana la Traditional — evitas un 24 %+ hoy
      y pagas quizá un 12 % después. Si el de hoy es más bajo (primeros años de carrera, sabática, años de ingresos
      bajos), el Roth fija para siempre esa ganga fiscal. Esta calculadora pasa ambas cuentas por la misma
      matemática de crecimiento para que veas la diferencia neta en dólares.
    </p>

    <h2>Qué asume el cálculo</h2>
    <p>
      Las aportaciones capitalizan anualmente a tu rendimiento esperado mediante el valor futuro de una anualidad:
      <code>FV = C × ((1+r)<sup>n</sup> − 1) / r</code>. El saldo Traditional crece sobre dólares brutos (saldo
      mayor, gravado al retirar); el saldo Roth crece sobre dólares netos (saldo menor, cero impuestos a la salida).
      La comparación es de igual a igual porque el coste de bolsillo de hoy es idéntico.
    </p>

    <h2>Más allá del punto de equilibrio</h2>
    <p>
      Incluso cuando la Traditional proyecta ligera ventaja, el Roth tiene bazas estratégicas: sin distribuciones
      mínimas obligatorias (RMD) — que en la Traditional arrancan a los 73 años —, herencia libre de impuestos para
      los beneficiarios y cobertura contra futuras subidas de tipos. Mucha gente mantiene <em>ambas</em>: la
      Traditional por la deducción en años de altos ingresos, la Roth por flexibilidad y diversificación fiscal.
      Repite la comparación cada vez que cambie tu tramo.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Roth vs. Traditional: Der einzige Unterschied ist der Steuerzeitpunkt</h2>
    <p>
      Beide Konten teilen sich dieselbe Beitragsgrenze von 7.500 $ (2026: 8.600 $ ab 50 Jahren) und wachsen im
      Konto steuerfrei. Die gesamte Entscheidung läuft auf <em>wann</em> du Steuern zahlst hinaus: Ein{' '}
      <strong>Traditional IRA</strong> zieht Beiträge heute ab (senkt die diesjährige Steuerrechnung), besteuert
      aber jede Entnahme im Ruhestand; ein <strong>Roth IRA</strong> nimmt heute versteuertes Geld auf, und jede
      qualifizierte Entnahme — Einlage <em>und</em> Ertrag — bleibt zu 100 % steuerfrei.
    </p>

    <h2>Die eine Regel, die entscheidet</h2>
    <p>
      Stelle deinen <strong>heutigen Grenzsteuersatz</strong> dem <strong>erwarteten Effektivsatz im Ruhestand</strong>{' '}
      gegenüber. Ist der heutige höher (typisch in den Top-Einkommensjahren), gewinnt Traditional — du weichst
      heute 24 %+ aus und zahlst später vielleicht 12 %. Ist der heutige niedriger (Berufseinstieg, Sabbatical,
      Jahre mit niedrigem Einkommen), sichert dir Roth diesen Schnäppchensatz für immer. Dieser Rechner schickt
      beide Konten durch dieselbe Wachstumsrechnung, damit du den Nettovorsprung in Dollar siehst.
    </p>

    <h2>Was die Rechnung annimmt</h2>
    <p>
      Beiträge verzinsen sich jährlich mit deiner erwarteten Rendite über den Endwert einer Rente:
      <code>FV = C × ((1+r)<sup>n</sup> − 1) / r</code>. Das Traditional-Guthaben wächst auf Brutto-Dollar
      (größeres Guthaben, bei Entnahme versteuert); das Roth-Guthaben auf Netto-Dollar (kleineres Guthaben, null
      Steuer beim Austritt). Der Vergleich ist fair, weil der heutige Eigenaufwand identisch ist.
    </p>

    <h2>Jenseits der Break-even-Rechnung</h2>
    <p>
      Selbst wenn Traditional leicht vorn liegt, hat Roth strategische Trümpfe: keine Pflicht-Mindestverteilungen
      (RMD) — bei Traditional ab 73 Pflicht —, steuerfreie Erbschaft für Begünstigte und eine Absicherung gegen
      künftige Steuererhöhungen. Viele führen <em>beide</em> — Traditional für den Abzug in Spitzenjahren, Roth für
      Flexibilität und Steuervielfalt. Wiederhole den Vergleich, wann immer sich dein Steuersatz ändert.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function RothIraCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
