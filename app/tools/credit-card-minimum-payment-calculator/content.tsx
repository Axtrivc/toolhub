'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Credit Card Minimum Payment Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

const formulaStyle = { fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' } as const

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      The <strong>minimum payment</strong> is the smallest amount your card issuer will accept
      each month without charging a late fee or reporting you as delinquent. It is calculated
      as a small percentage of your balance (usually 1%&ndash;3%) plus any interest and fees
      accrued that month. This calculator shows exactly where your minimum payment goes &mdash;
      how much is interest, how much actually reduces your debt, and how long you&apos;d be
      paying if you only ever sent the minimum.
    </p>
    <p>
      The math is brutal. On a typical balance, the minimum payment is deliberately set low
      enough that most of it covers interest, leaving only a tiny sliver for principal. This
      is by design: a low minimum keeps you paying for as long as possible. Understanding the
      breakdown is the first step to escaping it.
    </p>

    <div>
      <h2>How the Minimum Payment Is Calculated</h2>
      <p>Every issuer uses a slightly different formula, but the common pattern is:</p>
      <ul>
        <li>
          <strong>1%&ndash;3% of your statement balance</strong>, plus
        </li>
        <li>
          <strong>That month&apos;s interest charges</strong>, plus
        </li>
        <li>
          <strong>Any late fees or over-limit fees</strong> from the prior cycle.
        </li>
      </ul>
      <p>
        There&apos;s also usually a floor &mdash; a minimum dollar amount (often $25&ndash;$35)
        that applies when the percentage calculation comes out lower. Some issuers instead use
        a formula like &quot;interest + fees + 1% of principal,&quot; which pays the loan down
        slightly faster. Your cardholder agreement spells out the exact method.
      </p>
    </div>

    <div>
      <h2>The Formula</h2>
      <p>This calculator uses the most common model &mdash; a percentage of the balance with a floor:</p>
      <p style={formulaStyle}>
        Minimum&nbsp;Payment = max(Floor, Balance &times; Min%)
      </p>
      <p style={formulaStyle}>
        Monthly&nbsp;Interest = Balance &times; (APR &divide; 12)
      </p>
      <p style={formulaStyle}>
        Goes&nbsp;to&nbsp;Principal = Minimum&nbsp;Payment &minus; Monthly&nbsp;Interest
      </p>
      <p>
        where <strong>Floor</strong> is typically $25&ndash;$35, <strong>Min%</strong> is usually
        1%&ndash;3%, and <strong>APR &divide; 12</strong> converts the annual rate to a monthly rate.
        This is the formula the calculator above applies to your numbers in real time.
      </p>
    </div>

    <div>
      <h2>Example: $5,000 Balance at 19.99% APR</h2>
      <p>This is the part that surprises people. Here is a worked example using this calculator&apos;s default values &mdash; a <strong>$5,000 balance at 19.99% APR</strong> with a 2% minimum payment:</p>
      <ul>
        <li>
          <strong>Monthly interest:</strong> $83.29 (= $5,000 &times; 0.1999 &divide; 12)
        </li>
        <li>
          <strong>Minimum payment (2%, floored at $25):</strong> $100.00 (= $5,000 &times; 2%)
        </li>
        <li>
          <strong>Goes to principal:</strong> only $16.71 (= $100.00 &minus; $83.29)
        </li>
      </ul>
      <p>
        In other words, about <strong>83% of your payment vanishes as interest</strong>, and just
        17% reduces what you owe. At that rate it takes <strong>decades</strong> to pay off &mdash; and
        that&apos;s assuming you never charge another dollar. If your payment is at or below
        the monthly interest, the balance never drops at all. You can verify every number above
        by entering $5,000 / 19.99 / 2 into the calculator.
      </p>
    </div>

    <div>
      <h2>Why Banks Set Minimums So Low</h2>
      <p>
        Minimum payments used to be around 5% of the balance. In the 2000s, regulators pushed
        issuers to raise minimums so consumers could actually pay off debt, and many moved to
        the current ~1%&ndash;3% plus interest model. That formula still extends repayment over
        many years &mdash; but it guarantees the loan is technically repayable, which satisfies
        the rules. From the bank&apos;s perspective, a longer repayment schedule means more
        interest income; from yours, it means thousands of dollars in avoidable interest. The
        system is legal, but the only protection that truly helps you is paying more than the
        minimum.
      </p>
    </div>

    <div>
      <h2>How to Read Your Statement</h2>
      <ul>
        <li>
          <strong>Minimum payment warning box:</strong> Required on US statements since 2010.
          It shows how long repayment takes at the minimum vs. a 3-year payoff amount. Read it
          &mdash; it&apos;s the clearest picture of your situation.
        </li>
        <li>
          <strong>Late payment warning:</strong> The fee (up to ~$41) and penalty APR (often
          29.99%) that apply if you miss the due date.
        </li>
        <li>
          <strong>Interest charge:</strong> The total interest accrued this month. Compare it
          to your minimum payment &mdash; if interest is most of the payment, you&apos;re
          treading water.
        </li>
      </ul>
    </div>

    <div>
      <h2>The Fix: Pay Above the Minimum</h2>
      <p>
        Every dollar you pay above the interest goes 100% to principal. The effect compounds:
        as the principal shrinks, next month&apos;s interest shrinks too, so even more of
        your payment goes to principal. This is the mechanism that makes small extra payments
        so powerful.
      </p>
      <ul>
        <li>
          <strong>$5,000 @ 19.99%, minimum (~$100):</strong> ~44 years, ~$20,150 interest
        </li>
        <li>
          <strong>Same balance, $200/month:</strong> ~2.8 years, ~$1,650 interest
        </li>
        <li>
          <strong>Same balance, $500/month:</strong> ~1 year, ~$610 interest
        </li>
      </ul>
      <p>
        See our related <em>Credit Card Payoff Calculator</em> for full strategy (avalanche,
        snowball, balance transfers) &mdash; this page focuses on understanding the minimum
        payment itself.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>最低还款额</strong>是发卡机构每月允许你偿还的最小金额,低于这个数就会产生滞纳金或被记为逾期。它的计算方式通常是余额的一小部分(1%–3%)加上当月产生的利息和费用。这个计算器清楚地展示你的最低还款都花在哪里——多少是利息,多少才真正减少了债务,以及如果你只还最低额要还多久。
    </p>
    <p>
      算法很残酷。在一般余额下,最低还款额被刻意设得很低,大部分都用来付利息,只剩一小丁点冲本金。这是有意为之:低最低还款让你尽可能长时间地还下去。理解这个拆分,是摆脱债务的第一步。
    </p>

    <div>
      <h2>最低还款额是怎么算的</h2>
      <p>每家发卡机构的公式略有不同,但通用模式是:</p>
      <ul>
        <li><strong>账单余额的 1%–3%</strong>,加上</li>
        <li><strong>当月的利息费用</strong>,加上</li>
        <li><strong>上个周期产生的任何滞纳金或超限费</strong>。</li>
      </ul>
      <p>
        通常还有一个下限——一个最低金额(常见 $25–$35),当百分比算出的金额更低时就用它。有些发卡机构改用「利息 + 费用 + 本金的 1%」这样的公式,还款会稍快一些。具体方法以你的持卡人协议为准。
      </p>
    </div>

    <div>
      <h2>公式</h2>
      <p>本计算器采用最常见的模型——余额的百分比加下限:</p>
      <p style={formulaStyle}>最低还款额 = max(下限, 余额 × 最低%)</p>
      <p style={formulaStyle}>月利息 = 余额 × (APR ÷ 12)</p>
      <p style={formulaStyle}>冲抵本金 = 最低还款额 − 月利息</p>
      <p>
        其中<strong>下限</strong>通常为 $25–$35,<strong>最低%</strong>通常为 1%–3%,<strong>APR ÷ 12</strong> 把年利率转换成月利率。这就是上方计算器实时套用到你的数字上的公式。
      </p>
    </div>

    <div>
      <h2>示例:$5,000 余额,19.99% APR</h2>
      <p>这是最让人意外的部分。以下是用本计算器默认值——<strong>$5,000 余额、19.99% APR、2% 最低还款</strong>——算出的实际例子:</p>
      <ul>
        <li><strong>月利息:</strong>$83.29(= $5,000 × 0.1999 ÷ 12)</li>
        <li><strong>最低还款额(2%,下限 $25):</strong>$100.00(= $5,000 × 2%)</li>
        <li><strong>冲抵本金:</strong>仅 $16.71(= $100.00 − $83.29)</li>
      </ul>
      <p>
        换句话说,约 <strong>83% 的还款作为利息蒸发了</strong>,只有 17% 真正减少了欠款。按这个速度要还<strong>几十年</strong>——而且前提是你一分钱都不再刷。如果你的还款等于或低于月利息,余额根本不会下降。你可以在计算器里输入 5000 / 19.99 / 2 来验证上面的每个数字。
      </p>
    </div>

    <div>
      <h2>银行为什么把最低还款设得这么低</h2>
      <p>
        最低还款曾经大约是余额的 5%。2000 年代监管机构推动发卡机构提高最低还款额,让消费者真能还清债务,很多机构改成了现在约 1%–3% 加利息的模式。这个公式仍然把还款拉长到很多年——但它确保贷款在技术上是可偿还的,从而满足监管。从银行的角度看,还款期越长利息收入越多;从你的角度看,这意味着数千美元本可以避免的利息。这套系统合法,但唯一真正保护你的办法就是多还。
      </p>
    </div>

    <div>
      <h2>如何看懂你的账单</h2>
      <ul>
        <li>
          <strong>最低还款警示框:</strong>自 2010 年起美国账单必须显示。它展示只还最低额要多久 vs. 三年还清的金额。一定要看——这是对你处境最清晰的写照。
        </li>
        <li>
          <strong>逾期还款警示:</strong>错过到期日会产生的费用(最高约 $41)和惩罚性 APR(通常 29.99%)。
        </li>
        <li>
          <strong>利息费用:</strong>本月产生的总利息。把它和最低还款额对比——如果利息占了还款的大头,你就是在原地踏步。
        </li>
      </ul>
    </div>

    <div>
      <h2>解决办法:多还一点</h2>
      <p>
        你付的每一块钱中,超过利息的部分 100% 都冲本金。效果会复利式叠加:本金减少后,下个月的利息也减少,于是你更多的还款又冲本金。这就是小额多还如此强大的机制。
      </p>
      <ul>
        <li><strong>$5,000 @ 19.99%,最低还款(约 $100):</strong>约 44 年,利息约 $20,150</li>
        <li><strong>同样余额,$200/月:</strong>约 2.8 年,利息约 $1,650</li>
        <li><strong>同样余额,$500/月:</strong>约 1 年,利息约 $610</li>
      </ul>
      <p>
        关于完整策略(雪崩法、雪球法、余额转移),请看我们的<em>信用卡还清计算器</em>——本页专注于理解最低还款本身。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El <strong>pago mínimo</strong> es la cantidad más pequeña que el emisor de tu tarjeta
      aceptará cada mes sin cobrarte una comisión por demora ni reportarte como moroso. Se
      calcula como un pequeño porcentaje de tu saldo (normalmente del 1 % al 3 %) más los
      intereses y comisiones devengados ese mes. Esta calculadora muestra exactamente a dónde
      va tu pago mínimo — cuánto son intereses, cuánto reduce realmente tu deuda y cuánto
      tiempo estarías pagando si solo enviaras siempre el mínimo.
    </p>
    <p>
      Las matemáticas son brutales. Con un saldo típico, el pago mínimo se fija deliberadamente
      lo bastante bajo para que la mayor parte cubra intereses, dejando solo una mínima porción
      para el capital. Es por diseño: un pago mínimo bajo te mantiene pagando el máximo tiempo
      posible. Entender el desglose es el primer paso para escapar de ello.
    </p>

    <div>
      <h2>Cómo se calcula el pago mínimo</h2>
      <p>Cada emisor usa una fórmula ligeramente distinta, pero el patrón común es:</p>
      <ul>
        <li><strong>Del 1 % al 3 % del saldo de tu estado de cuenta</strong>, más</li>
        <li><strong>Los cargos por intereses de ese mes</strong>, más</li>
        <li><strong>Cualquier comisión por demora o por exceso del límite</strong> del ciclo anterior.</li>
      </ul>
      <p>
        Suele haber también un suelo — una cantidad mínima (a menudo 25–35 $) que se aplica
        cuando el cálculo porcentual sale más bajo. Algunos emisores usan en su lugar una fórmula
        como «intereses + comisiones + 1 % del capital», que amortiza algo más rápido. El método
        exacto figura en tu acuerdo del titular de la tarjeta.
      </p>
    </div>

    <div>
      <h2>La fórmula</h2>
      <p>Esta calculadora usa el modelo más común — un porcentaje del saldo con un suelo:</p>
      <p style={formulaStyle}>Pago&nbsp;mínimo = max(Suelo, Saldo × Mín%)</p>
      <p style={formulaStyle}>Interés&nbsp;mensual = Saldo × (APR ÷ 12)</p>
      <p style={formulaStyle}>A&nbsp;capital = Pago&nbsp;mínimo − Interés&nbsp;mensual</p>
      <p>
        donde <strong>Suelo</strong> suele ser de 25–35 $, <strong>Mín%</strong> normalmente del
        1 % al 3 %, y <strong>APR ÷ 12</strong> convierte la tasa anual en mensual. Esta es la
        fórmula que la calculadora anterior aplica a tus cifras en tiempo real.
      </p>
    </div>

    <div>
      <h2>Ejemplo: saldo de 5 000 $ al 19,99 % de APR</h2>
      <p>Esta es la parte que sorprende a la gente. Aquí tienes un ejemplo resuelto con los valores predeterminados de esta calculadora — un <strong>saldo de 5 000 $ al 19,99 % de APR</strong> con un pago mínimo del 2 %:</p>
      <ul>
        <li><strong>Interés mensual:</strong> 83,29 $ (= 5 000 $ × 0,1999 ÷ 12)</li>
        <li><strong>Pago mínimo (2 %, suelo de 25 $):</strong> 100,00 $ (= 5 000 $ × 2 %)</li>
        <li><strong>A capital:</strong> solo 16,71 $ (= 100,00 $ − 83,29 $)</li>
      </ul>
      <p>
        En otras palabras, alrededor del <strong>83 % de tu pago se evapora en intereses</strong>,
        y solo el 17 % reduce lo que debes. A ese ritmo se tardan <strong>décadas</strong> en
        pagar — y eso asumiendo que no cargues ni un dólar más. Si tu pago es igual o inferior al
        interés mensual, el saldo no baja en absoluto. Puedes verificar todas las cifras
        anteriores introduciendo 5000 / 19.99 / 2 en la calculadora.
      </p>
    </div>

    <div>
      <h2>Por qué los bancos fijan mínimos tan bajos</h2>
      <p>
        Los pagos mínimos solían rondar el 5 % del saldo. En los años 2000, los reguladores
        presionaron a los emisores para que subieran el mínimo y los consumidores pudieran
        realmente saldar la deuda, y muchos pasaron al modelo actual de ~1 %–3 % más intereses.
        Esa fórmula sigue extendiendo el reembolso a lo largo de muchos años — pero garantiza que
        el préstamo sea técnicamente reembolsable, lo cual cumple las normas. Desde la
        perspectiva del banco, un calendario más largo significa más ingresos por intereses;
        desde la tuya, miles de dólares en intereses evitables. El sistema es legal, pero la
        única protección que de verdad te ayuda es pagar más del mínimo.
      </p>
    </div>

    <div>
      <h2>Cómo leer tu estado de cuenta</h2>
      <ul>
        <li>
          <strong>Casilla de aviso del pago mínimo:</strong> obligatoria en los estados de cuenta
          estadounidenses desde 2010. Muestra cuánto tarda el reembolso al mínimo frente a la
          cantidad para saldar en 3 años. Léela — es la imagen más clara de tu situación.
        </li>
        <li>
          <strong>Aviso de pago atrasado:</strong> la comisión (hasta ~41 $) y la APR penal (a
          menudo 29,99 %) que se aplican si te pasas de la fecha de vencimiento.
        </li>
        <li>
          <strong>Cargo por intereses:</strong> el interés total devengado este mes. Compáralo
          con tu pago mínimo — si el interés es la mayor parte del pago, no estás avanzando.
        </li>
      </ul>
    </div>

    <div>
      <h2>La solución: paga por encima del mínimo</h2>
      <p>
        Cada dólar que pagas por encima de los intereses va 100 % al capital. El efecto se
        acumula: a medida que el capital se reduce, el interés del mes siguiente también, así
        que una parte aún mayor de tu pago va al capital. Este es el mecanismo que hace tan
        poderosos los pequeños pagos extra.
      </p>
      <ul>
        <li><strong>5 000 $ al 19,99 %, mínimo (~100 $):</strong> ~44 años, ~20 150 $ en intereses</li>
        <li><strong>Mismo saldo, 200 $/mes:</strong> ~2,8 años, ~1 650 $ en intereses</li>
        <li><strong>Mismo saldo, 500 $/mes:</strong> ~1 año, ~610 $ en intereses</li>
      </ul>
      <p>
        Consulta nuestra <em>Calculadora de pago de tarjeta de crédito</em> para la estrategia
        completa (avalancha, bola de nieve, transferencias de saldo) — esta página se centra en
        entender el pago mínimo en sí.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Die <strong>Mindestzahlung</strong> ist der kleinste Betrag, den dein Kartenaussteller jeden
      Monat akzeptiert, ohne eine Säumnisgebühr zu erheben oder dich als säumig zu melden. Sie
      wird als ein kleiner Prozentsatz deines Saldos (normalerweise 1 %–3 %) berechnet plus der in
      diesem Monat angefallenen Zinsen und Gebühren. Dieser Rechner zeigt genau, wohin deine
      Mindestzahlung geht — wie viel Zins ist, wie viel deine Schuld tatsächlich reduziert und wie
      lange du zahlen müsstest, wenn du immer nur das Minimum überweist.
    </p>
    <p>
      Die Mathematik ist brutal. Bei einem typischen Saldo wird die Mindestzahlung absichtlich so
      niedrig angesetzt, dass der Großteil davon Zinsen abdeckt und nur ein winziger Schlitz für
      die Tilgung bleibt. Das ist Absicht: Eine niedrige Mindestzahlung hält dich am längsten am
      Zahnen. Den Aufschlüsselungsprozess zu verstehen, ist der erste Schritt, um ihm zu entkommen.
    </p>

    <div>
      <h2>Wie die Mindestzahlung berechnet wird</h2>
      <p>Jeder Aussteller verwendet eine leicht andere Formel, aber das Muster ist:</p>
      <ul>
        <li><strong>1 %–3 % deines Rechnungssaldos</strong>, plus</li>
        <li><strong>Die Zinsbelastungen dieses Monats</strong>, plus</li>
        <li><strong>Etwaige Säumnis- oder Limitüberschreitungsgebühren</strong> aus dem vorherigen Zyklus.</li>
      </ul>
      <p>
        Es gibt meist auch einen Boden — einen Mindestbetrag (oft 25–35 $), der greift, wenn die
        Prozentrechnung niedriger ausfällt. Manche Aussteller verwenden stattdessen eine Formel wie
        „Zinsen + Gebühren + 1 % Tilgung", die den Kredit etwas schneller tilgt. Die genaue Methode
        steht in deiner Kartenvereinbarung.
      </p>
    </div>

    <div>
      <h2>Die Formel</h2>
      <p>Dieser Rechner verwendet das gängigste Modell — ein Prozentsatz des Saldos mit einem Boden:</p>
      <p style={formulaStyle}>Mindestzahlung = max(Boden, Saldo × Min%)</p>
      <p style={formulaStyle}>Monatszins = Saldo × (APR ÷ 12)</p>
      <p style={formulaStyle}>Tilgung = Mindestzahlung − Monatszins</p>
      <p>
        wobei <strong>Boden</strong> typischerweise 25–35 $ ist, <strong>Min%</strong> normalerweise
        1 %–3 %, und <strong>APR ÷ 12</strong> den Jahressatz in einen Monatssatz umrechnet. Das ist
        die Formel, die der obige Rechner in Echtzeit auf deine Zahlen anwendet.
      </p>
    </div>

    <div>
      <h2>Beispiel: 5 000 $ Saldo bei 19,99 % APR</h2>
      <p>Das ist der Teil, der Leute überrascht. Hier ein durchgerechnetes Beispiel mit den Standardwerten dieses Rechners — ein <strong>5 000 $-Saldo bei 19,99 % APR</strong> mit 2 % Mindestzahlung:</p>
      <ul>
        <li><strong>Monatszins:</strong> 83,29 $ (= 5 000 $ × 0,1999 ÷ 12)</li>
        <li><strong>Mindestzahlung (2 %, Boden 25 $):</strong> 100,00 $ (= 5 000 $ × 2 %)</li>
        <li><strong>Tilgung:</strong> nur 16,71 $ (= 100,00 $ − 83,29 $)</li>
      </ul>
      <p>
        Mit anderen Worten: Etwa <strong>83 % deiner Zahlung verschwinden als Zins</strong>, nur
        17 % reduzieren deine Schuld. In diesem Tempo dauert es <strong>Jahrzehnte</strong> bis zur
        Tilgung — und das unter der Annahme, dass du keinen einzigen Dollar mehr belastest. Wenn
        deine Zahlung beim Monatszins oder darunter liegt, sinkt der Saldo gar nicht. Du kannst jede
        Zahl oben nachprüfen, indem du 5000 / 19.99 / 2 in den Rechner eingibst.
      </p>
    </div>

    <div>
      <h2>Warum Banken die Mindestzahlung so niedrig ansetzen</h2>
      <p>
        Mindestzahlungen früher lagen bei etwa 5 % des Saldos. In den 2000ern drängten
        Aufsichtsbehörden die Aussteller, die Mindestzahlungen zu erhöhen, damit Verbraucher ihre
        Schulden tatsächlich tilgen konnten, und viele wechselten zum aktuellen Modell aus ~1 %–3 %
        plus Zinsen. Diese Formel streckt die Rückzahlung noch über viele Jahre — aber sie
        garantiert, dass der Kredit technisch rückzahlbar ist, was den Vorschriften genügt. Aus
        Sicht der Bank bedeutet ein längerer Rückzahlungsplan mehr Zinseinnahmen; aus deiner Sicht
        bedeutet es Tausende an vermeidbaren Zinsen. Das System ist legal, aber der einzige Schutz,
        der dir wirklich hilft, ist, mehr als das Minimum zu zahlen.
      </p>
    </div>

    <div>
      <h2>So liest du deine Abrechnung</h2>
      <ul>
        <li>
          <strong>Mindestzahlung-Warnkasten:</strong> seit 2010 auf US-Abrechnungen vorgeschrieben.
          Zeigt, wie lange die Tilgung beim Minimum dauert vs. den Betrag für 3-jährige Tilgung. Lies
          ihn — er ist das klarste Bild deiner Situation.
        </li>
        <li>
          <strong>Säumniswarnung:</strong> die Gebühr (bis ~41 $) und der Straf-APR (oft 29,99 %),
          die anfallen, wenn du das Fälligkeitsdatum verpasst.
        </li>
        <li>
          <strong>Zinsbelastung:</strong> die gesamten in diesem Monat angefallenen Zinsen.
          Vergleiche sie mit deiner Mindestzahlung — wenn der Zins den Großteil der Zahlung
          ausmacht, trittst du auf der Stelle.
        </li>
      </ul>
    </div>

    <div>
      <h2>Die Lösung: Zahle über dem Minimum</h2>
      <p>
        Jeder Dollar, den du über den Zinsen hinaus zahlst, geht zu 100 % in die Tilgung. Der
        Effekt verstärkt sich: Wenn die Tilgung schrumpft, sinkt auch der Zins im nächsten Monat,
        sodass noch mehr deiner Zahlung in die Tilgung fließt. Das ist der Mechanismus, der kleine
        Sondertilgungen so wirkungsvoll macht.
      </p>
      <ul>
        <li><strong>5 000 $ bei 19,99 %, Minimum (~100 $):</strong> ~44 Jahre, ~20 150 $ Zinsen</li>
        <li><strong>Gleicher Saldo, 200 $/Monat:</strong> ~2,8 Jahre, ~1 650 $ Zinsen</li>
        <li><strong>Gleicher Saldo, 500 $/Monat:</strong> ~1 Jahr, ~610 $ Zinsen</li>
      </ul>
      <p>
        Siehe unseren verwandten <em>Kreditkarten-Abbezahlrechner</em> für die volle Strategie
        (Lawine, Schneeball, Balance-Transfers) — diese Seite konzentriert sich auf das
        Verständnis der Mindestzahlung selbst.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CreditCardMinimumPaymentCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
