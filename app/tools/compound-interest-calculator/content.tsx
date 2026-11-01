'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Compound Interest Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支 = 改造前原文(字节不变)。es/de 仅客户端 hydration 后按 locale
 * 切换。SSR/预渲染恒渲染 en → Google 索引英文不变。
 */

// ──────────────────────────── en(保持原样) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is Compound Interest?</h2>
    <p>
      <strong>Compound interest</strong>{' '}
      is interest earned on both your initial principal and the
      interest that accumulates over time. It&apos;s often called &quot;interest on interest,&quot;
      and it&apos;s the most powerful force in long-term investing. Unlike simple interest, which
      only grows your original deposit, compounding makes your money grow exponentially — slowly
      at first, then dramatically faster as the years pass.
    </p>

    <h2>The Compound Interest Formula</h2>
    <p>
      For a single deposit with no ongoing contributions:
    </p>
    <p>
      <code>A = P × (1 + r/n)<sup>nt</sup></code>
    </p>
    <ul>
      <li><strong>A</strong> = final amount</li>
      <li><strong>P</strong> = principal (initial investment)</li>
      <li><strong>r</strong> = annual interest rate (decimal)</li>
      <li><strong>n</strong> = times compounded per year</li>
      <li><strong>t</strong> = years</li>
    </ul>
    <p>
      This calculator assumes monthly compounding and lets you add monthly contributions, which
      are calculated using the future value of an annuity formula.
    </p>

    <h2>The Power of Starting Early</h2>
    <p>
      Time matters more than the amount you invest. Consider two savers:
    </p>
    <ul>
      <li>
        <strong>Saver A</strong> invests $200/month from age 25 to 35 (10 years, $24,000 total),
        then stops. At 7% return, by age 65 they have ~$281,000.
      </li>
      <li>
        <strong>Saver B</strong> waits until age 35, then invests $200/month for 30 years until
        age 65 ($72,000 total). At 7% return, by age 65 they have ~$244,000.
      </li>
    </ul>
    <p>
      Despite investing only one-third as much money, Saver A still ends up meaningfully ahead —
      because their money had 30 extra years to compound.
    </p>

    <h2>Realistic Return Rates</h2>
    <p>Common reference rates for long-term investing:</p>
    <ul>
      <li><strong>S&amp;P 500 historical average:</strong> ~10% per year (before inflation)</li>
      <li><strong>After inflation (&quot;real&quot; return):</strong> ~7% per year</li>
      <li><strong>Bonds:</strong> ~4-5% per year</li>
      <li><strong>High-yield savings:</strong> ~4-5% (varies with interest rates)</li>
      <li><strong>Conservative mix (stocks + bonds):</strong> ~6-7% per year</li>
    </ul>
    <p>
      Use 7% for stock-market-based long-term investing. Past performance doesn&apos;t guarantee
      future results, and returns vary year to year — but compounding works the same regardless.
    </p>

    <h2>How to Maximize Compound Growth</h2>
    <ol>
      <li><strong>Start now.</strong> Every year you wait costs you exponentially more than the amount you could have invested.</li>
      <li><strong>Invest consistently.</strong> Monthly contributions automate growth and smooth out market volatility.</li>
      <li><strong>Reinvest dividends.</strong> Don&apos;t take the cash — let it compound.</li>
      <li><strong>Keep fees low.</strong> Index funds with 0.03% expense ratios beat actively managed funds with 1%+ fees over the long run.</li>
      <li><strong>Be patient.</strong> The biggest gains come in the later years. Don&apos;t panic-sell during downturns.</li>
    </ol>

    <h2>The Rule of 72</h2>
    <p>
      A quick mental shortcut: divide 72 by your annual return rate to estimate how many years it
      takes to double your money. At 7%, money doubles in about <code>72 ÷ 7 ≈ 10.3 years</code>.
      At 10%, it doubles in 7.2 years. This calculator gives you the exact number.
    </p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es el interés compuesto?</h2>
    <p>
      El <strong>interés compuesto</strong> es el interés que ganas tanto sobre tu capital inicial
      como sobre el interés que se acumula con el tiempo. Se le suele llamar «interés sobre
      interés» y es la fuerza más poderosa en la inversión a largo plazo. A diferencia del interés
      simple, que solo hace crecer tu depósito original, el compuesto hace que tu dinero crezca de
      forma exponencial — despacio al principio, y luego cada vez más rápido a medida que pasan
      los años.
    </p>

    <h2>La fórmula del interés compuesto</h2>
    <p>Para un depósito único sin aportaciones periódicas:</p>
    <p>
      <code>A = P × (1 + r/n)<sup>nt</sup></code>
    </p>
    <ul>
      <li><strong>A</strong> = importe final</li>
      <li><strong>P</strong> = capital (inversión inicial)</li>
      <li><strong>r</strong> = tasa de interés anual (decimal)</li>
      <li><strong>n</strong> = veces que se capitaliza al año</li>
      <li><strong>t</strong> = años</li>
    </ul>
    <p>
      Esta calculadora asume capitalización mensual y te permite añadir aportaciones mensuales,
      que se calculan con la fórmula del valor futuro de una anualidad.
    </p>

    <h2>El poder de empezar pronto</h2>
    <p>El tiempo importa más que la cantidad que inviertes. Considera dos ahorradores:</p>
    <ul>
      <li>
        El <strong>Ahorrador A</strong> invierte $200/mes desde los 25 hasta los 35 (10 años,
        $24,000 en total) y luego para. Al 7% de retorno, a los 65 tiene $281,000.
      </li>
      <li>
        El <strong>Ahorrador B</strong> espera hasta los 35 y luego invierte $200/mes durante
        30 años hasta los 65 ($72,000 en total). Al 7% de retorno, a los 65 tiene $244,000.
      </li>
    </ul>
    <p>
      A pesar de invertir solo un tercio del dinero, el Ahorrador A acaba claramente por delante —
      porque su dinero tuvo 30 años extra de capitalización.
    </p>

    <h2>Tasas de retorno realistas</h2>
    <p>Tasas de referencia habituales para invertir a largo plazo:</p>
    <ul>
      <li><strong>Promedio histórico del S&amp;P 500:</strong> ~10%/año (antes de inflación)</li>
      <li><strong>Después de inflación (retorno «real»):</strong> ~7%/año</li>
      <li><strong>Bonos:</strong> ~4–5%/año</li>
      <li><strong>Cuentas de ahorro de alto rendimiento:</strong> ~4–5% (varía con las tasas)</li>
      <li><strong>Cartera conservadora (acciones + bonos):</strong> ~6–7%/año</li>
    </ul>
    <p>
      Usa el 7% para inversiones a largo plazo basadas en bolsa. El rendimiento pasado no
      garantiza resultados futuros y los retornos varían de un año a otro — pero la capitalización
      funciona igual sin importar eso.
    </p>

    <h2>Cómo maximizar el crecimiento compuesto</h2>
    <ol>
      <li><strong>Empieza ahora.</strong> Cada año que esperas te cuesta exponencialmente más de lo que podrías haber invertido.</li>
      <li><strong>Invierte con constancia.</strong> Las aportaciones mensuales automatizan el crecimiento y suavizan la volatilidad del mercado.</li>
      <li><strong>Reinvierte los dividendos.</strong> No retires el efectivo — deja que capitalice.</li>
      <li><strong>Mantén bajas las comisiones.</strong> Los fondos indexados con ratios de gastos del 0,03% superan a los fondos gestionados activamente con comisiones del 1%+ a largo plazo.</li>
      <li><strong>Ten paciencia.</strong> Las mayores ganancias llegan en los últimos años. No vendas por pánico en las caídas.</li>
    </ol>

    <h2>La regla del 72</h2>
    <p>
      Un atajo mental rápido: divide 72 entre tu tasa de retorno anual para estimar cuántos años
      tarda en duplicarse tu dinero. Al 7%, se duplica en aproximadamente{' '}
      <code>72 ÷ 7 ≈ 10,3 años</code>. Al 10%, en 7,2 años. Esta calculadora te da el número
      exacto.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist Zinseszins?</h2>
    <p>
      <strong>Zinseszins</strong> ist der Zins, den du sowohl auf deine anfängliche Einlage als
      auch auf die im Laufe der Zeit angesammelten Zinsen verdienst. Er wird oft als „Zins auf
      Zins“ bezeichnet und ist die stärkste Kraft bei langfristigen Investitionen. Anders als der
      einfache Zins, der nur deine Ersteinlage wachsen lässt, lässt der Zinseszins dein Geld
      exponentiell wachsen — anfangs langsam, dann mit den Jahren immer dramatischer schneller.
    </p>

    <h2>Die Zinseszinsformel</h2>
    <p>Für eine Einmalanlage ohne laufende Einzahlungen:</p>
    <p>
      <code>A = P × (1 + r/n)<sup>nt</sup></code>
    </p>
    <ul>
      <li><strong>A</strong> = Endbetrag</li>
      <li><strong>P</strong> = Einlage (Anfangsinvestition)</li>
      <li><strong>r</strong> = Jahreszinssatz (Dezimal)</li>
      <li><strong>n</strong> = Zinsperioden pro Jahr</li>
      <li><strong>t</strong> = Jahre</li>
    </ul>
    <p>
      Dieser Rechner geht von monatlicher Verzinsung aus und erlaubt dir monatliche Einzahlungen,
      die mit der Formel für den zukünftigen Wert einer Rente berechnet werden.
    </p>

    <h2>Die Macht des frühen Beginns</h2>
    <p>Zeit ist wichtiger als die investierte Summe. Stell dir zwei Sparer vor:</p>
    <ul>
      <li>
        <strong>Sparer A</strong> investiert $200/Monat von 25 bis 35 (10 Jahre, insgesamt
        $24,000) und hört dann auf. Bei 7% Rendite hat er mit 65 etwa $281,000.
      </li>
      <li>
        <strong>Sparer B</strong> wartet bis 35 und investiert dann $200/Monat für 30 Jahre bis
        65 (insgesamt $72,000). Bei 7% Rendite hat er mit 65 etwa $244,000.
      </li>
    </ul>
    <p>
      Obwohl er nur ein Drittel investiert hat, liegt Sparer A am Ende deutlich vorn — weil sein Geld
      30 Jahre länger Zinseszins sammeln konnte.
    </p>

    <h2>Realistische Renditen</h2>
    <p>Übliche Richtrenditen für langfristiges Investieren:</p>
    <ul>
      <li><strong>S&amp;P 500 historischer Durchschnitt:</strong> ~10%/Jahr (vor Inflation)</li>
      <li><strong>Nach Inflation („reale“ Rendite):</strong> ~7%/Jahr</li>
      <li><strong>Anleihen:</strong> ~4–5%/Jahr</li>
      <li><strong>Tagesgeld mit hoher Verzinsung:</strong> ~4–5% (schwankt mit den Zinsen)</li>
      <li><strong>Konservativer Mix (Aktien + Anleihen):</strong> ~6–7%/Jahr</li>
    </ul>
    <p>
      Nutze 7% für aktienbasierte Langfristanlagen. Vergangene Rendite garantiert keine
      zukünftigen Ergebnisse, und die Erträge schwanken von Jahr zu Jahr — aber der Zinseszins
      wirkt immer gleich.
    </p>

    <h2>So maximierst du das Zinseszinzwachstum</h2>
    <ol>
      <li><strong>Fang jetzt an.</strong> Jedes Jahr, das du wartest, kostet dich exponentiell mehr, als du hättest investieren können.</li>
      <li><strong>Investiere beständig.</strong> Monatliche Einzahlungen automatisieren das Wachstum und glätten die Marktschwankungen.</li>
      <li><strong>Dividenden reinvestieren.</strong> Nimm kein Bargeld — lass es Zinseszins sammeln.</li>
      <li><strong>Halte Gebühren niedrig.</strong> Indexfonds mit 0,03% Kostenquote schlagen aktiv gemanagte Fonds mit 1%+ Gebühren langfristig.</li>
      <li><strong>Sei geduldig.</strong> Die größten Gewinne kommen in den späteren Jahren. Verkaufe nicht in Panik bei Rückgängen.</li>
    </ol>

    <h2>Die 72er-Regel</h2>
    <p>
      Eine schnelle Kopfrechnung: Teile 72 durch deine jährliche Rendite, um zu schätzen, wie
      viele Jahre dein Geld braucht, um sich zu verdoppeln. Bei 7% verdoppelt sich das Geld in
      etwa <code>72 ÷ 7 ≈ 10,3 Jahren</code>. Bei 10% in 7,2 Jahren. Dieser Rechner gibt dir die
      genaue Zahl.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CompoundInterestCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
