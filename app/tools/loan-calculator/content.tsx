'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Loan Calculator 长文正文 —— 四语 dispatcher
 *
 * SEO 安全:SSR/预渲染时 locale 恒为 'en' → 渲染 en 分支(与改造前字节一致,
 * Google 索引不变)。zh/es/de 仅在客户端 hydration 后按 locale 切换。
 * 缺失 locale → 回退 en。
 */

// ──────────────────────────── en(保持原样) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How Loan Payments Are Calculated</h2>
    <p>
      Most installment loans — mortgages, auto loans, personal loans, and student loans — use a
      formula called <strong>amortization</strong>. Each month, you pay a fixed amount that covers
      both the interest accrued and a portion of the principal. Early in the loan, most of your
      payment goes to interest; by the end, most goes to principal.
    </p>
    <p>The monthly payment formula is:</p>
    <p>
      <code>M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]</code>
    </p>
    <ul>
      <li><strong>M</strong> = monthly payment</li>
      <li><strong>P</strong> = principal (the amount borrowed)</li>
      <li><strong>r</strong> = monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
      <li><strong>n</strong> = total number of monthly payments</li>
    </ul>

    <h2>What Affects Your Monthly Payment?</h2>
    <p>Three variables determine your payment, and understanding them helps you save money:</p>
    <ul>
      <li>
        <strong>Loan amount (principal).</strong> The more you borrow, the higher your payment —
        but the relationship is linear. Borrow twice as much and you pay roughly twice as much per
        month.
      </li>
      <li>
        <strong>Interest rate.</strong> This has a powerful effect, especially on long loans. On a
        30-year mortgage, even a 1% rate difference can mean tens of thousands of dollars over the
        life of the loan.
      </li>
      <li>
        <strong>Loan term.</strong> A longer term lowers your monthly payment but dramatically
        increases total interest paid. A 15-year mortgage costs more per month than a 30-year, but
        often saves six figures in interest.
      </li>
    </ul>

    <h2>The Trade-off: Monthly Payment vs. Total Cost</h2>
    <p>
      Here&apos;s the key insight most borrowers miss: <strong>extending the term makes the loan
      feel cheaper but costs far more in total.</strong> Consider a $20,000 loan at 7.5%:
    </p>
    <ul>
      <li><strong>3-year term:</strong> ~$622/month, ~$2,400 in total interest</li>
      <li><strong>5-year term:</strong> ~$400/month, ~$4,000 in total interest</li>
      <li><strong>7-year term:</strong> ~$306/month, ~$5,770 in total interest</li>
    </ul>
    <p>
      Going from 3 to 7 years cuts your monthly payment by half — but more than doubles your
      interest cost. Always look at <em>total interest</em>, not just the monthly number.
    </p>

    <h2>Common Loan Types</h2>
    <ul>
      <li>
        <strong>Mortgages.</strong> 15-30 year loans for buying a home, typically the largest debt
        most people take on. Secured by the property itself.
      </li>
      <li>
        <strong>Auto loans.</strong> 3-7 year loans for vehicles. Secured by the car, so rates are
        lower than unsecured loans.
      </li>
      <li>
        <strong>Personal loans.</strong> 1-7 year unsecured loans for any purpose. Rates are
        higher because there&apos;s no collateral.
      </li>
      <li>
        <strong>Student loans.</strong> 10-25 year terms, often with deferred payments while in
        school. Rates vary widely between federal and private loans.
      </li>
    </ul>

    <h2>How to Lower Your Interest Costs</h2>
    <ol>
      <li>
        <strong>Choose a shorter term.</strong> If you can afford the higher payment, you&apos;ll
        save dramatically on interest.
      </li>
      <li>
        <strong>Make extra payments.</strong> Even one extra payment a year, applied directly to
        principal, can knock years off a mortgage. Confirm your lender allows this without
        prepayment penalties.
      </li>
      <li>
        <strong>Improve your credit score.</strong> Better credit unlocks lower interest rates,
        which compounds into big savings over a long loan.
      </li>
      <li>
        <strong>Refinance when rates drop.</strong> If market rates fall below what you&apos;re
        paying, refinancing into a lower-rate loan can save you thousands — just weigh the closing
        costs.
      </li>
    </ol>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>月供是怎么算出来的</h2>
    <p>
      大多数分期贷款——房贷、车贷、个人贷款和学生贷款——都用一种叫<strong>等额本息(摊销)</strong>的公式。每个月你还一个固定金额,同时覆盖已产生的利息和一部分本金。贷款前期,还款大部分是利息;到后期,大部分才是本金。
    </p>
    <p>月供的计算公式是:</p>
    <p>
      <code>M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]</code>
    </p>
    <ul>
      <li><strong>M</strong> = 月供</li>
      <li><strong>P</strong> = 本金(借款金额)</li>
      <li><strong>r</strong> = 月利率(年利率 ÷ 12 ÷ 100)</li>
      <li><strong>n</strong> = 还款总月数</li>
    </ul>

    <h2>什么影响你的月供?</h2>
    <p>三个变量决定月供,搞懂它们能帮你省钱:</p>
    <ul>
      <li>
        <strong>贷款金额(本金)。</strong>借得越多,月供越高——但这是线性关系。借一倍,月供大约也翻一倍。
      </li>
      <li>
        <strong>利率。</strong>利率影响很大,尤其是长期贷款。在 30 年房贷上,哪怕利率只差 1%,整个贷款期也可能相差数万美元。
      </li>
      <li>
        <strong>期限。</strong>期限越长月供越低,但总利息会大幅增加。15 年房贷的月供比 30 年高,但往往能省下六位数的利息。
      </li>
    </ul>

    <h2>权衡:月供 vs 总成本</h2>
    <p>
      多数借款人忽略的关键点是:<strong>拉长期限让贷款显得更便宜,但总成本要高得多。</strong>以一笔 20,000 美元、利率 7.5% 的贷款为例:
    </p>
    <ul>
      <li><strong>3 年期:</strong>月供约 $622,总利息约 $2,400</li>
      <li><strong>5 年期:</strong>月供约 $400,总利息约 $4,000</li>
      <li><strong>7 年期:</strong>月供约 $306,总利息约 $5,770</li>
    </ul>
    <p>
      把期限从 3 年拉到 7 年,月供减半——但利息成本翻了一倍多。永远要看<em>总利息</em>,别只盯着月供数字。
    </p>

    <h2>常见贷款类型</h2>
    <ul>
      <li>
        <strong>房贷。</strong>买房用的 15–30 年贷款,通常是大多数人最大的一笔债务。以房产本身作抵押。
      </li>
      <li>
        <strong>车贷。</strong>买车的 3–7 年贷款。以车辆作抵押,所以利率比无抵押贷款低。
      </li>
      <li>
        <strong>个人贷款。</strong>1–7 年的无抵押贷款,用途不限。因为没有抵押物,利率更高。
      </li>
      <li>
        <strong>学生贷款。</strong>10–25 年期限,在校期间常有延期还款。联邦贷款和私人贷款的利率差异很大。
      </li>
    </ul>

    <h2>如何降低利息成本</h2>
    <ol>
      <li>
        <strong>选较短的期限。</strong>如果你能承担较高的月供,利息能省下一大笔。
      </li>
      <li>
        <strong>提前还款。</strong>哪怕一年多还一次,直接冲本金,也能让房贷少还好几年。先确认你的贷款机构允许提前还款且无违约金。
      </li>
      <li>
        <strong>提升信用分。</strong>信用越好,能拿到的利率越低,长期累积下来能省不少。
      </li>
      <li>
        <strong>利率下降时再融资。</strong>如果市场利率低于你现在的利率,再融资到更低利率的贷款能省几千美元——只是要权衡一下过户费用。
      </li>
    </ol>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cómo se calculan los pagos de un préstamo</h2>
    <p>
      La mayoría de los préstamos a plazos —hipotecas, préstamos de coche, personales y
      estudiantiles— usan una fórmula llamada <strong>amortización</strong>. Cada mes pagas un
      importe fijo que cubre tanto los intereses devengados como una parte del capital. Al
      principio del préstamo, la mayor parte del pago son intereses; al final, la mayor parte es
      capital.
    </p>
    <p>La fórmula del pago mensual es:</p>
    <p>
      <code>M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]</code>
    </p>
    <ul>
      <li><strong>M</strong> = pago mensual</li>
      <li><strong>P</strong> = capital (el importe prestado)</li>
      <li><strong>r</strong> = tasa de interés mensual (tasa anual ÷ 12 ÷ 100)</li>
      <li><strong>n</strong> = número total de pagos mensuales</li>
    </ul>

    <h2>¿Qué afecta a tu pago mensual?</h2>
    <p>Tres variables determinan el pago, y entenderlas te ayuda a ahorrar:</p>
    <ul>
      <li>
        <strong>Importe del préstamo (capital).</strong> Cuanto más pides prestado, más alto es el
        pago —pero la relación es lineal. Pide el doble y pagas más o menos el doble al mes.
      </li>
      <li>
        <strong>Tasa de interés.</strong> Tiene un efecto potente, sobre todo en préstamos largos.
        En una hipoteca a 30 años, una diferencia de 1 % puede significar decenas de miles de
        dólares a lo largo del préstamo.
      </li>
      <li>
        <strong>Plazo del préstamo.</strong> Un plazo más largo reduce el pago mensual, pero
        aumenta mucho el interés total. Una hipoteca a 15 años cuesta más al mes que una a 30, pero
        a menudo ahorra seis cifras en intereses.
      </li>
    </ul>

    <h2>El equilibrio: pago mensual frente a coste total</h2>
    <p>
      La idea clave que la mayoría pasa por alto: <strong>alargar el plazo hace que el préstamo
      parezca más barato, pero cuesta mucho más en total.</strong> Considera un préstamo de 20 000
      $ al 7,5 %:
    </p>
    <ul>
      <li><strong>Plazo de 3 años:</strong> ~622 $/mes, ~2 400 $ en intereses totales</li>
      <li><strong>Plazo de 5 años:</strong> ~400 $/mes, ~4 000 $ en intereses totales</li>
      <li><strong>Plazo de 7 años:</strong> ~306 $/mes, ~5 770 $ en intereses totales</li>
    </ul>
    <p>
      Pasar de 3 a 7 años reduce tu pago mensual a la mitad, pero más que duplica el coste en
      intereses. Fíjate siempre en los <em>intereses totales</em>, no solo en la cuota mensual.
    </p>

    <h2>Tipos comunes de préstamo</h2>
    <ul>
      <li>
        <strong>Hipotecas.</strong> Préstamos a 15–30 años para comprar vivienda; suelen ser la
        mayor deuda que asume la mayoría. Garantizadas con la propia vivienda.
      </li>
      <li>
        <strong>Préstamos de coche.</strong> Préstamos a 3–7 años para vehículos. Garantizados con
        el coche, por lo que sus tasas son más bajas que las de los préstamos sin garantía.
      </li>
      <li>
        <strong>Préstamos personales.</strong> Préstamos sin garantía a 1–7 años para cualquier
        fin. Las tasas son más altas porque no hay colateral.
      </li>
      <li>
        <strong>Préstamos estudiantiles.</strong> Plazos de 10–25 años, a menudo con pagos
        diferidos mientras estudias. Las tasas varían mucho entre préstamos federales y privados.
      </li>
    </ul>

    <h2>Cómo reducir tus intereses</h2>
    <ol>
      <li>
        <strong>Elige un plazo más corto.</strong> Si puedes asumir un pago más alto, ahorrarás
        muchísimo en intereses.
      </li>
      <li>
        <strong>Haz pagos extra.</strong> Aunque sea un pago más al año aplicado al capital, puedes
        quitar años a una hipoteca. Confirma que tu prestamista lo permite sin penalizaciones por
        amortización anticipada.
      </li>
      <li>
        <strong>Mejora tu puntaje de crédito.</strong> Un crédito mejor abre la puerta a tasas más
        bajas, lo que se acumula en grandes ahorros en un préstamo largo.
      </li>
      <li>
        <strong>Refinancia cuando bajen las tasas.</strong> Si las tasas del mercado caen por
        debajo de lo que pagas, refinanciar a un préstamo con tasa menor puede ahorrarte miles
        —solo pondera los gastos de cierre.
      </li>
    </ol>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>So werden Kreditraten berechnet</h2>
    <p>
      Die meisten Ratenkredite —Hypotheken, Autokredite, Privatkredite und Studienkredite— nutzen
      eine Formel namens <strong>Tilgung</strong>. Jeden Monat zahlst du einen festen Betrag, der
      sowohl die aufgelaufenen Zinsen als auch einen Teil des Kredits abdeckt. Zu Beginn des
      Kredits geht der Großteil der Rate in Zinsen; am Ende überwiegt die Tilgung.
    </p>
    <p>Die Formel für die Monatsrate lautet:</p>
    <p>
      <code>M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]</code>
    </p>
    <ul>
      <li><strong>M</strong> = monatliche Rate</li>
      <li><strong>P</strong> = Kreditbetrag (der aufgenommene Betrag)</li>
      <li><strong>r</strong> = monatlicher Zinssatz (Jahreszins ÷ 12 ÷ 100)</li>
      <li><strong>n</strong> = Gesamtzahl der Monatsraten</li>
    </ul>

    <h2>Was beeinflusst deine Monatsrate?</h2>
    <p>Drei Variablen bestimmen die Rate —wenn du sie verstehst, sparst du Geld:</p>
    <ul>
      <li>
        <strong>Kreditbetrag.</strong> Je mehr du leihst, desto höher die Rate —aber die Beziehung
        ist linear. Leih das Doppelte, zahlst du monatlich ungefähr das Doppelte.
      </li>
      <li>
        <strong>Zinssatz.</strong> Er hat besonders bei langen Krediten große Wirkung. Bei einer
        30-jährigen Hypothek kann 1 % Zinsunterschied über die Laufzeit zigtausend Dollar ausmachen.
      </li>
      <li>
        <strong>Laufzeit.</strong> Eine längere Laufzeit senkt die Monatsrate, erhöht aber die
        Zinsen insgesamt deutlich. Eine 15-jährige Hypothek kostet pro Monat mehr als eine
        30-jährige, spart aber oft sechsstellige Zinsen.
      </li>
    </ul>

    <h2>Der Kompromiss: Monatsrate vs. Gesamtkosten</h2>
    <p>
      Der entscheidende Punkt, den die meisten Kreditnehmer übersehen: <strong>Längere Laufzeit
      lässt den Kredit günstiger wirken, kostet aber insgesamt weit mehr.</strong> Bei einem
      Kredit von 20 000 $ und 7,5 % Zins:
    </p>
    <ul>
      <li><strong>3 Jahre Laufzeit:</strong> ~622 $/Monat, ~2 400 $ Zinsen gesamt</li>
      <li><strong>5 Jahre Laufzeit:</strong> ~400 $/Monat, ~4 000 $ Zinsen gesamt</li>
      <li><strong>7 Jahre Laufzeit:</strong> ~306 $/Monat, ~5 770 $ Zinsen gesamt</li>
    </ul>
    <p>
      Ein Wechsel von 3 auf 7 Jahre halbiert die Monatsrate —mehr als verdoppelt aber die
      Zinskosten.
      Schau immer auf die <em>gesamten Zinsen</em>, nicht nur auf die Monatsrate.
    </p>

    <h2>Häufige Kreditarten</h2>
    <ul>
      <li>
        <strong>Hypotheken.</strong> 15–30-jährige Kredite für den Hauskauf, meist die größte
        Schuld, die Menschen eingehen. Durch die Immobilie selbst besichert.
      </li>
      <li>
        <strong>Autokredite.</strong> 3–7-jährige Kredite für Fahrzeuge. Durch das Auto besichert,
        daher sind die Zinsen niedriger als bei ungesicherten Krediten.
      </li>
      <li>
        <strong>Privatkredite.</strong> 1–7-jährige ungesicherte Kredite für jeden Zweck. Die
        Zinsen sind höher, weil es keine Sicherheit gibt.
      </li>
      <li>
        <strong>Studienkredite.</strong> 10–25-jährige Laufzeiten, oft mit gestundeten Raten
        während des Studiums. Die Zinsen unterscheiden sich stark zwischen staatlichen und privaten
        Krediten.
      </li>
    </ul>

    <h2>So senkst du deine Zinskosten</h2>
    <ol>
      <li>
        <strong>Wähl eine kürzere Laufzeit.</strong> Wenn du die höhere Rate tragen kannst, sparst
        du bei den Zinsen erheblich.
      </li>
      <li>
        <strong>Leiste Sondertilgungen.</strong> Schon eine zusätzliche Rate pro Jahr, direkt auf
        den Kredit angewendet, kann Jahre von einer Hypothek nehmen. Kläre vorher, ob dein
        Kreditgeber das ohne Vorfälligkeitsentschädigung erlaubt.
      </li>
      <li>
        <strong>Verbessere deinen Bonitätsscore.</strong> Bessere Bonität öffnet die Tür zu
        niedrigeren Zinsen, was sich über lange Kredite zu großen Ersparnissen summiert.
      </li>
      <li>
        <strong>Refinanziere bei fallenden Zinsen.</strong> Wenn die Marktzinsen unter deinen
        aktuellen Zins sinken, kann eine Umschuldung in einen günstigeren Kredit Tausende sparen
        —wiege nur die Abschlusskosten ab.
      </li>
    </ol>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function LoanCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
