'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Auto Loan Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This <strong>auto loan calculator</strong> estimates your monthly car payment from the vehicle price, down
      payment, trade-in value, sales tax, APR, and loan term — then builds a complete amortization schedule you can
      export as CSV. It runs 100% in your browser, so the numbers you type never leave your device.
    </p>

    <div>
      <h2>How the loan amount is computed</h2>
      <p>
        The amount you actually finance is <code>price − down payment − trade-in + sales tax</code>. The tax is
        applied to <strong>(price − trade-in)</strong>, which is how most US states handle trade-in credits — but
        a few states tax the full price, so treat the figure as an estimate. The monthly payment uses the standard
        amortization formula <code>M = P × r / (1 − (1 + r)^−n)</code>, where <code>r</code> is the monthly rate
        (APR ÷ 12) and <code>n</code> is the number of months. A 0% APR loan simply divides the principal by the
        term.
      </p>
    </div>

    <div>
      <h2>Reading the results</h2>
      <p>
        <strong>Monthly payment</strong> is the fixed amount due each month, with an estimated payoff date based
        on starting today. <strong>Total interest</strong> is what the loan costs you on top of the principal.{' '}
        <strong>Total cost</strong> adds your down payment and trade-in to all monthly payments, so it represents
        the full out-of-value cost of the car (excluding insurance, fees, and maintenance). The amortization table
        shows how each payment splits between <em>principal</em> and <em>interest</em> — early payments are
        mostly interest, and the balance falls slowly at first.
      </p>
    </div>

    <div>
      <h2>Tips before you sign</h2>
      <p>
        Longer terms (72–84 months) lower the monthly payment but raise total interest sharply — compare the
        same car at 48 vs. 84 months to see the difference. A bigger down payment or a trade-in reduces both the
        payment and the interest, and keeps you from going <em>upside-down</em> (owing more than the car is
        worth). Get pre-approved by a bank or credit union before visiting a dealer so you can compare APRs, and
        always negotiate the vehicle price, not the monthly payment.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      这个<strong>汽车贷款计算器</strong>根据车辆价格、首
      付、置换价值、销售税、APR 和贷款期限来估算你每月的车贷还款——然后生成一份可以
      导出为 CSV 的完整摊销计划。它 100% 在你的浏览器中运行，你输入的数字永远不会离开你的设备。
    </p>

    <div>
      <h2>贷款金额是如何计算的</h2>
      <p>
        你实际融资的金额是 <code>price − down payment − trade-in + sales tax</code>。税费会作用在
        <strong>(price − trade-in)</strong>上，这是美国大多数州处理置换抵扣的方式——但
        有少数几个州按全价计税，因此请把这个数字当作估算值。月供使用标准
        摊销公式 <code>M = P × r / (1 − (1 + r)^−n)</code>，其中 <code>r</code> 是月利率
        （APR ÷ 12），<code>n</code> 是月数。0% APR 的贷款只是简单地把本金除以
        期数。
      </p>
    </div>

    <div>
      <h2>如何解读结果</h2>
      <p>
        <strong>月供</strong>是每月到期的固定金额，并附带一个以今天为起点的预计还清日期。<strong>总利息</strong>是你在本金之上为这笔贷款付出的代价。{' '}
        <strong>总成本</strong>把你的首付和置换价值加到全部月供之上，因此它代表
        这辆车的完整花费（不含保险、手续费和保养）。摊销表展示每笔还款如何在<em>本金</em>和<em>利息</em>之间分配——早期的还款主要是
        利息，而且最初余额下降得很慢。
      </p>
    </div>

    <div>
      <h2>签字前的几点提示</h2>
      <p>
        更长的期限（72–84 个月）会降低月供，但会大幅抬高总利息——把同一辆车在
        48 和 84 个月之间比较一下就能看出差别。更大的首付或一次置换既能减少月供也能减少利息，还能让你避免<em>「倒挂」</em>（欠的比车本身的价值还多）。在看车之前先去银行或信用合作社拿到预批，这样你就可以比较各家 APR，并且
        永远去谈车辆价格，而不是月供。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta <strong>calculadora de préstamo de coche</strong> estima tu pago mensual del coche a partir del precio del vehículo, la
      entrada, el valor de entrega (trade-in), el impuesto sobre las ventas, la APR y el plazo del préstamo — y luego construye un calendario de amortización completo que puedes
      exportar como CSV. Se ejecuta 100 % en tu navegador, por lo que los números que escribes nunca salen de tu dispositivo.
    </p>

    <div>
      <h2>Cómo se calcula el importe del préstamo</h2>
      <p>
        El importe que realmente financieras es <code>price − down payment − trade-in + sales tax</code>. El impuesto se
        aplica a <strong>(price − trade-in)</strong>, que es como la mayoría de los estados de EE. UU. gestionan el crédito por entrega — pero
        unos pocos estados gravan el precio completo, así que trata la cifra como una estimación. El pago mensual usa la fórmula de
        amortización estándar <code>M = P × r / (1 − (1 + r)^−n)</code>, donde <code>r</code> es la tasa mensual
        (APR ÷ 12) y <code>n</code> es el número de meses. Un préstamo al 0 % de APR simplemente divide el principal entre el
        plazo.
      </p>
    </div>

    <div>
      <h2>Cómo interpretar los resultados</h2>
      <p>
        <strong>Pago mensual</strong> es la cantidad fija que vence cada mes, con una fecha de liquidación estimada a partir
        de hoy. <strong>Interés total</strong> es lo que te cuesta el préstamo además del principal.{' '}
        <strong>Coste total</strong> suma tu entrada y tu entrega a todos los pagos mensuales, por lo que representa
        el coste real total del coche (excluyendo seguro, tasas y mantenimiento). La tabla de amortización
        muestra cómo se reparte cada pago entre <em>principal</em> e <em>intereses</em> — los primeros pagos son
        casi todo interés y el saldo baja despacio al principio.
      </p>
    </div>

    <div>
      <h2>Consejos antes de firmar</h2>
      <p>
        Los plazos más largos (72–84 meses) reducen el pago mensual pero disparan el interés total — compara el
        mismo coche a 48 frente a 84 meses para ver la diferencia. Una entrada mayor o una entrega reducen tanto
        el pago como el interés, y evitan que quedes <em>al revés</em> (debiendo más de lo que vale el coche). Consigue una preaprobación de un banco o cooperativa de crédito antes de visitar al concesionario para poder comparar APR, y
        negocia siempre el precio del vehículo, no el pago mensual.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieser <strong>Autokredit-Rechner</strong> schätzt deine monatliche Autorate aus Fahrzeugpreis, An
      zahlung, Trade-in-Wert, Mehrwertsteuer, APR und Kreditlaufzeit — und erstellt danach einen vollständigen Tilgungsplan, den du
      als CSV exportieren kannst. Er läuft zu 100 % in deinem Browser, sodass die Zahlen, die du eingibst, dein Gerät nie verlassen.
    </p>

    <div>
      <h2>Wie der Darlehensbetrag berechnet wird</h2>
      <p>
        Der Betrag, den du tatsächlich finanzierst, ist <code>price − down payment − trade-in + sales tax</code>. Die Steuer wird
        auf <strong>(price − trade-in)</strong> erhoben, was die meisten US-Bundesstaaten beim Trade-in-Kredit so handhaben — aber
        einige wenige Staaten besteuern den vollen Preis, betrachte die Zahl also als Schätzung. Die monatliche Rate verwendet die Standard
        tilgungsformel <code>M = P × r / (1 − (1 + r)^−n)</code>, wobei <code>r</code> der monatliche Zinssatz
        (APR ÷ 12) und <code>n</code> die Anzahl der Monate ist. Ein Kredit mit 0 % APR teilt den Tilgungsbetrag einfach durch die
        Laufzeit.
      </p>
    </div>

    <div>
      <h2>Die Ergebnisse lesen</h2>
      <p>
        <strong>Monatliche Rate</strong> ist der feste Betrag, der jeden Monat fällig wird, mit einem geschätzten Tilgungsdatum basierend
        auf heute. <strong>Gesamtzins</strong> ist, was dich der Kredit zusätzlich zum Tilgungsbetrag kostet.{' '}
        <strong>Gesamtkosten</strong> addieren deine Anzahlung und deinen Trade-in zu allen Monatsraten, und stellen damit
        die tatsächlichen Gesamtkosten des Autos dar (ohne Versicherung, Gebühren und Wartung). Der Tilgungsplan
        zeigt, wie sich jede Zahlung zwischen <em>Tilgung</em> und <em>Zins</em> aufteilt — frühe Zahlungen sind
        größtenteils Zins, und der Saldo sinkt anfangs langsam.
      </p>
    </div>

    <div>
      <h2>Tipps vor der Unterschrift</h2>
      <p>
        Längere Laufzeiten (72–84 Monate) senken die Monatsrate, treiben aber den Gesamtzins stark nach oben — vergleiche dasselbe
        Auto bei 48 gegenüber 84 Monaten, um den Unterschied zu sehen. Eine höhere Anzahlung oder ein Trade-in senken sowohl
        die Rate als auch den Zins und bewahren dich davor, <em>„underwater"</em> zu sein (mehr zu schulden, als das Auto
        wert ist). Hol dir vor dem Händlerbesuch eine Vorabgenehmigung von einer Bank oder Kreditgenossenschaft, damit du APRs vergleichen kannst, und
        verhandle immer den Fahrzeugpreis, nicht die Monatsrate.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function AutoLoanCalculatorClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
