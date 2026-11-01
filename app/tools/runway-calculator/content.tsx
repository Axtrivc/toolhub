'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Runway Calculator 长文正文 —— 三语 dispatcher
 * en 分支与改造前渲染输出一致;es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Understanding Cash Runway for Startups and Creators</h2>
    <p>
      <strong>Runway</strong> is the number of months your company can operate before running completely out of money.
      For venture-backed startups and bootstrapped indie builders alike, knowing your exact runway is the difference
      between making calm, strategic hiring decisions and scrambling in panic when bank accounts dry up.
    </p>

    <h2>Gross Burn vs. Net Burn</h2>
    <p>
      <strong>Gross burn</strong> is the total amount of cash going out the door every month (salaries, AWS bills,
      office rent, marketing software). <strong>Net burn</strong> subtracts your incoming monthly revenue from gross burn:
    </p>
    <pre><code>Net Burn = Monthly Gross Expenses − Monthly Revenue</code></pre>
    <p>
      If your company spends $30,000 per month but makes $10,000 in monthly recurring revenue (MRR), your gross burn is
      $30,000 and your net burn is $20,000. Your cash runway depends on net burn, not gross burn.
    </p>

    <h2>Are You Default Alive or Default Dead?</h2>
    <p>
      Paul Graham coined the terms <em>Default Alive</em> and <em>Default Dead</em>. A startup is default alive if its
      current revenue growth rate will take it to profitability before its cash runs out. If not, the startup is default
      dead and will die unless it raises another round or slashes costs. This calculator projects compound monthly growth
      to show whether you will reach profitability organically or hit a zero cash wall.
    </p>

    <h2>When to Start Fundraising</h2>
    <p>
      Closing an institutional funding round typically takes 4 to 6 months from first pitch to wired funds. Never wait until
      you have 3 months of runway left. The ideal time to kick off fundraising is when you still have 10 to 14 months of runway,
      giving you maximum leverage in negotiations.
    </p>
  </section>
)



// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué entender el runway es vital para startups y creadores</h2>
    <p>
      El <strong>runway</strong> es el número de meses que tu empresa puede operar antes de quedarse completamente sin
      dinero. Tanto para startups con capital de riesgo como para creadores independientes bootstrapped, conocer tu
      runway exacto marca la diferencia entre tomar decisiones de contratación serenas y estratégicas, o entrar en
      pánico cuando la cuenta bancaria se seca.
    </p>

    <h2>Quema bruta (Gross Burn) vs. quema neta (Net Burn)</h2>
    <p>
      La <strong>quema bruta</strong> es todo el efectivo que sale por la puerta cada mes (salarios, facturas de AWS,
      alquiler de oficina, software de marketing). La <strong>quema neta</strong> resta los ingresos mensuales
      entrantes a la quema bruta:
    </p>
    <pre><code>Quema Neta = Gastos Brutos Mensuales − Ingresos Mensuales</code></pre>
    <p>
      Si tu empresa gasta 30.000 $ al mes pero factura 10.000 $ de ingresos recurrentes mensuales (MRR), tu quema bruta
      es de 30.000 $ y la neta de 20.000 $. Tu runway depende de la quema neta, no de la bruta.
    </p>

    <h2>¿Estás Default Alive o Default Dead?</h2>
    <p>
      Paul Graham acuñó los términos <em>Default Alive</em> y <em>Default Dead</em>. Una startup está default alive si
      su tasa actual de crecimiento de ingresos la llevará a la rentabilidad antes de agotar su caja. Si no, está
      default dead y morirá salvo que levante otra ronda o recorte costes drásticamente. Esta calculadora proyecta el
      crecimiento mensual compuesto para mostrarte si llegarás a ser rentable de forma orgánica o si te estrellarás
      contra el muro de caja cero.
    </p>

    <h2>Cuándo empezar a levantar financiación</h2>
    <p>
      Cerrar una ronda institucional suele llevar de 4 a 6 meses desde el primer pitch hasta la transferencia de los
      fondos. Nunca esperes a tener solo 3 meses de runway. El momento ideal para arrancar el proceso es cuando aún
      te quedan entre 10 y 14 meses de runway, lo que te da el máximo poder de negociación.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum Runway für Startups und Solo-Gründer entscheidend ist</h2>
    <p>
      <strong>Runway</strong> ist die Anzahl der Monate, die dein Unternehmen noch operieren kann, bevor das Geld
      vollständig aufgebraucht ist. Ob VC-finanziertes Startup oder bootstrapped Solo-Entwickler: Wer die Runway
      exakt kennt, trifft ruhige, strategische Einstellungsentscheidungen — wer sie nicht kennt, gerät in Panik,
      wenn das Konto leergeht.
    </p>

    <h2>Gross Burn vs. Net Burn</h2>
    <p>
      <strong>Gross Burn</strong> ist das gesamte Bargeld, das jeden Monat abfließt (Gehälter, AWS-Rechnungen,
      Büromiete, Marketing-Software). <strong>Net Burn</strong> zieht vom Gross Burn die monatlich eingehenden
      Umsätze ab:
    </p>
    <pre><code>Net Burn = Monatliche Gesamtausgaben − Monatsumsatz</code></pre>
    <p>
      Gibt dein Unternehmen 30.000 $ im Monat aus, nimmt aber 10.000 $ an monatlich wiederkehrenden Umsätzen (MRR)
      ein, beträgt der Gross Burn 30.000 $ und der Net Burn 20.000 $. Deine Runway hängt vom Net Burn ab, nicht vom
      Gross Burn.
    </p>

    <h2>Bist du Default Alive oder Default Dead?</h2>
    <p>
      Paul Graham prägte die Begriffe <em>Default Alive</em> und <em>Default Dead</em>. Ein Startup ist default alive,
      wenn seine aktuelle Umsatzwachstumsrate es vor dem Cash-Ende in die Profitabilität trägt. Wenn nicht, ist es
      default dead und stirbt, sofern es keine neue Runde aufnimmt oder die Kosten drastisch senkt. Dieser Rechner
      projiziert den Cashflow mit monatlich compoundierendem Umsatzwachstum und zeigt, ob du organisch profitabel
      wirst oder gegen die Null-Cash-Wand fährst.
    </p>

    <h2>Wann die nächste Finanzierungsrunde starten?</h2>
    <p>
      Vom ersten Pitch bis zum Geldtransfer dauert eine institutionelle Runde in der Regel 4 bis 6 Monate. Warte nie,
      bis nur noch 3 Monate Runway übrig sind. Der ideale Startzeitpunkt ist bei 10 bis 14 Monaten verbleibender
      Runway — das gibt dir maximale Verhandlungsmacht.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function RunwayCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
