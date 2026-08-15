'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Credit Card Payoff Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。zh/es/de 仅客户端 hydration
 * 后按 locale 切换。SSR/预渲染恒渲染 en → Google 索引英文不变。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Credit card debt is among the most expensive borrowing you can carry. Average APRs in the
      US sit between 20% and 28%, far higher than mortgages, auto loans, or personal loans. This
      calculator shows exactly how long it will take to pay off your balance at a given monthly
      payment, and &mdash; more importantly &mdash; how much of your money goes to interest
      versus the actual debt.
    </p>
    <p>
      The results often shock people. A modest balance paid at the minimum can cost more in
      interest than the original purchases, and take decades to clear. The good news: even a
      small increase in your monthly payment dramatically shortens the timeline and slashes the
      total interest paid.
    </p>
    <div>
      <h2>How Credit Card Interest Actually Works</h2>
      <p>
        Most credit cards compound interest <strong>daily</strong>, based on your average
        daily balance. The advertised APR is divided by 365 to get a daily rate, and that
        daily rate is applied to your balance every day. Over a month, this adds up to
        slightly more than APR &divide; 12 would suggest.
      </p>
      <p>
        When you carry a balance, your grace period disappears. New purchases start accruing
        interest immediately, from the day of the transaction. This is why carrying a balance
        is so costly &mdash; you lose the 21-25 day interest-free window that cardholders who
        pay in full enjoy.
      </p>
    </div>
    <div>
      <h2>The Minimum Payment Trap</h2>
      <p>
        Minimum payments are deliberately set low &mdash; typically 1% to 3% of your balance
        plus that month&apos;s interest. From the bank&apos;s perspective, a low minimum keeps
        you paying for as long as possible. From yours, it&apos;s a trap.
      </p>
      <p>
        A <strong>$5,000 balance at 22% APR</strong> paid off at a fixed $110/month still takes{' '}
        <strong>over 8 years</strong> to clear and costs roughly <strong>$5,850 in interest</strong>{' '}
        &mdash; more than the original debt. You end up paying for whatever you bought more than
        twice over, and a declining minimum payment (starting near that same $110) stretches out
        even longer.
      </p>
    </div>
    <div>
      <h2>The Power of Paying More</h2>
      <p>The single most effective move is paying more than the minimum. Same $5,000 at 22% APR:</p>
      <ul>
        <li>
          <strong>Minimum (~$110/month):</strong> ~27 years, ~$8,000 interest
        </li>
        <li>
          <strong>$200/month:</strong> ~2.8 years, ~$1,650 interest <em>(saves ~$6,350)</em>
        </li>
        <li>
          <strong>$300/month:</strong> ~1.8 years, ~$1,050 interest <em>(saves ~$6,950)</em>
        </li>
        <li>
          <strong>$500/month:</strong> ~1 year, ~$610 interest <em>(saves ~$7,390)</em>
        </li>
      </ul>
      <p>
        Going from the minimum to just $200/month cuts the payoff time by 90% and saves
        thousands. Every extra dollar above the minimum goes straight to principal, which is
        why the effect is so dramatic.
      </p>
    </div>
    <div>
      <h2>Proven Strategies to Pay Off Faster</h2>
      <p>If you have multiple cards or want a systematic approach, pick a method and stick with it:</p>
      <ul>
        <li>
          <strong>Avalanche method (cheapest):</strong> Pay the minimum on every card, then
          put all extra cash toward the <em>highest-APR</em> card first. Mathematically this
          saves the most interest. Once that card is gone, roll the payment into the next
          highest APR.
        </li>
        <li>
          <strong>Snowball method (psychological):</strong> Pay off the <em>smallest
          balance</em> first regardless of rate. The quick wins keep you motivated. It costs
          slightly more than avalanche but many people stick with it longer.
        </li>
        <li>
          <strong>Balance transfer card:</strong> Move debt to a 0% intro APR card (typically
          12-21 months). Every dollar goes to principal during the promo period. Watch out
          for 3-5% transfer fees, and have a plan to clear it before the promo ends.
        </li>
        <li>
          <strong>Debt consolidation loan:</strong> A personal loan at 8-15% beats a 24%
          credit card. You trade revolving debt for a fixed installment with a clear end date.
        </li>
      </ul>
    </div>
    <div>
      <h2>Common Mistakes That Keep You in Debt</h2>
      <ul>
        <li>
          <strong>Paying only the minimum.</strong> This is the #1 mistake. Even $20-50 extra
          per month transforms your timeline.
        </li>
        <li>
          <strong>Continuing to use the card.</strong> New charges offset your payments. Freeze
          the card (literally, in a block of ice) while paying it down.
        </li>
        <li>
          <strong>Ignoring the daily compounding.</strong> Making a payment earlier in the
          billing cycle saves a little interest every month, because interest is calculated on
          the daily balance.
        </li>
        <li>
          <strong>Missing payments.</strong> A late payment triggers a late fee (up to $41) and
          often a penalty APR of 29.99% that can last indefinitely. Set autopay for at least the
          minimum.
        </li>
      </ul>
    </div>
    <div>
      <h2>When to Consider Other Options</h2>
      <p>
        If your balance is large and your APR is high, a balance transfer or consolidation loan
        can cut your effective rate to 0-15%. That often matters more than the payment amount.
        If you&apos;re struggling to make even minimums, contact your card issuer&apos;s hardship
        program &mdash; many offer temporary reduced rates or payment plans rather than see you
        default. Avoid payday loans and other high-cost borrowing to &quot;cover&quot; credit
        card payments; that trades one problem for a worse one.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      信用卡债务是你能背负的最昂贵的借款之一。美国的平均年利率(APR)在 20% 到 28% 之间,远高于房贷、车贷或个人贷款。本计算器会清楚显示:按给定的月供需要多久才能还清余额,更重要的是——你的钱有多少流向利息,又有多少真正用于偿还债务。
    </p>
    <p>
      结果常常令人震惊。一笔适中的余额按最低还款支付,利息可能超过原来的消费金额,并需要几十年才能还清。好消息是:哪怕每月只多还一点点,也能大幅缩短还款周期并削减总利息支出。
    </p>
    <div>
      <h2>信用卡利息到底怎么算</h2>
      <p>
        大多数信用卡按<strong>每日</strong>复利计息,基于你的日均余额。宣传的 APR 除以 365 得到日利率,这个日利率每天都应用到你的余额上。一个月累积下来,会比 APR ÷ 12 略高一些。
      </p>
      <p>
        只要你带有未还余额,宽限期就会消失。新的消费从交易当日起立即开始计息。这就是为什么带余额滚动成本如此之高——你失去了全额还款持卡人享受的 21-25 天免息期。
      </p>
    </div>
    <div>
      <h2>最低还款陷阱</h2>
      <p>
        最低还款额被刻意设得很低——通常是余额的 1% 到 3% 加上当月利息。从银行的角度看,低最低还款能让你尽可能长久地还下去。从你的角度看,这是个陷阱。
      </p>
      <p>
        一笔 <strong>22% APR 的 $5,000 余额</strong>,即使按固定 $110/月偿还,也需要 <strong>超过 8 年</strong>才能还清,利息大约 <strong>$5,850</strong>——比原来的债务还多。你最终为你买的东西付了两倍多的价钱;而按逐月递减的最低还款(起点同样约为 $110)则会拖得更久。
      </p>
    </div>
    <div>
      <h2>多还款的威力</h2>
      <p>最有效的办法就是多还最低还款额以上。同样 22% APR 的 $5,000:</p>
      <ul>
        <li>
          <strong>最低还款(约 $110/月):</strong>约 27 年,利息约 $8,000
        </li>
        <li>
          <strong>$200/月:</strong>约 2.8 年,利息约 $1,650 <em>(省下约 $6,350)</em>
        </li>
        <li>
          <strong>$300/月:</strong>约 1.8 年,利息约 $1,050 <em>(省下约 $6,950)</em>
        </li>
        <li>
          <strong>$500/月:</strong>约 1 年,利息约 $610 <em>(省下约 $7,390)</em>
        </li>
      </ul>
      <p>
        从最低还款提高到每月只需 $200,就能把还款时间缩短 90%,并省下数千元。超出最低还款的每一块钱都直接冲抵本金,这就是效果如此显著的原因。
      </p>
    </div>
    <div>
      <h2>加快还款的成熟策略</h2>
      <p>如果你有多张卡或想要一套系统的方法,选一个方法并坚持执行:</p>
      <ul>
        <li>
          <strong>雪崩法(最省钱):</strong>对每张卡都还最低还款,然后把所有额外的钱优先投向 <em>年利率最高</em>的那张卡。从数学上讲这能省下最多利息。这张卡还清后,把这笔还款额滚入下一张年利率最高的卡。
        </li>
        <li>
          <strong>滚雪球法(心理层面):</strong>无论利率多少,先还清 <em>余额最小</em>的卡。快速的小胜利能让你保持动力。它的成本比雪崩法略高,但许多人能坚持得更久。
        </li>
        <li>
          <strong>余额转移卡:</strong>把债务转到一张 0% 入门 APR 的卡上(通常 12-21 个月)。在促销期内每一块钱都用于偿还本金。注意 3-5% 的转移手续费,并制定好在促销结束前还清的计划。
        </li>
        <li>
          <strong>债务合并贷款:</strong>一笔利率 8-15% 的个人贷款胜过 24% 的信用卡。你把循环债务换成了有明确到期日的固定分期贷款。
        </li>
      </ul>
    </div>
    <div>
      <h2>让你一直负债的常见错误</h2>
      <ul>
        <li>
          <strong>只还最低还款额。</strong>这是头号错误。哪怕每月多还 $20-50 也能彻底改变你的还款周期。
        </li>
        <li>
          <strong>继续使用这张卡。</strong>新的消费会抵消你的还款。还款期间把卡冻结起来(真的,冻在冰块里)。
        </li>
        <li>
          <strong>忽视每日复利。</strong>在账单周期内更早还款每月都能省下一点利息,因为利息是按日均余额计算的。
        </li>
        <li>
          <strong>漏还款。</strong>一次逾期还款会触发滞纳金(最高 $41),并且常常是 29.99% 的惩罚性 APR,可能无限期持续。设置自动还款,至少还最低额。
        </li>
      </ul>
    </div>
    <div>
      <h2>什么时候该考虑其他方案</h2>
      <p>
        如果你的余额很大且年利率很高,余额转移或合并贷款可以把你的实际利率降到 0-15%。这往往比还款金额本身更重要。如果你连最低还款都难以支付,请联系发卡机构的困难援助计划——许多机构宁愿提供临时的降低利率或还款计划,也不愿看到你违约。避免用发薪日贷款和其他高成本借款来"应付"信用卡还款;那只是把一个问题换成了更糟的问题。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      La deuda de tarjetas de crédito es una de las formas de crédito más caras que puedes tener.
      Las APR medias en EE. UU. se sitúan entre el 20 % y el 28 %, muy por encima de las hipotecas,
      los préstamos de coche o los préstamos personales. Esta calculadora muestra exactamente cuánto
      tiempo tardarás en pagar tu saldo con un pago mensual dado y — lo que es más importante —
      cuánto de tu dinero se va en intereses frente a la deuda real.
    </p>
    <p>
      Los resultados suelen sorprender. Un saldo modesto pagado al mínimo puede costar más en
      intereses que las compras originales y tardar décadas en liquidarse. La buena noticia: un
      pequeño aumento en tu pago mensual acorta drásticamente el plazo y reduce el total de
      intereses pagados.
    </p>
    <div>
      <h2>Cómo funciona realmente el interés de las tarjetas de crédito</h2>
      <p>
        La mayoría de las tarjetas de crédito calculan el interés compuesto <strong>diariamente</strong>,
        basándose en tu saldo diario medio. La APR anunciada se divide entre 365 para obtener una
        tasa diaria, y esa tasa se aplica a tu saldo cada día. A lo largo de un mes, esto suma algo
        más de lo que sugeriría APR ÷ 12.
      </p>
      <p>
        Cuando mantienes un saldo, tu período de gracia desaparece. Las compras nuevas empiezan a
        devengar interés inmediatamente, desde el día de la transacción. Por eso mantener un saldo
        es tan costoso — pierdes la ventana sin intereses de 21-25 días de la que disfrutan quienes
        pagan el total.
      </p>
    </div>
    <div>
      <h2>La trampa del pago mínimo</h2>
      <p>
        Los pagos mínimos se fijan deliberadamente bajos — típicamente del 1 % al 3 % de tu saldo
        más los intereses de ese mes. Desde el punto de vista del banco, un mínimo bajo te mantiene
        pagando el mayor tiempo posible. Desde el tuyo, es una trampa.
      </p>
      <p>
        Un <strong>saldo de $5,000 al 22 % de APR</strong> pagado con $110 fijos al mes tarda{' '}
        <strong>más de 8 años</strong> en liquidarse y cuesta aproximadamente{' '}
        <strong>$5,850 en intereses</strong> — más que la deuda original. Acabas pagando por lo que
        compraste más del doble, y un pago mínimo decreciente (que empieza en esos mismos $110) se
        alarga todavía más.
      </p>
    </div>
    <div>
      <h2>El poder de pagar más</h2>
      <p>El movimiento más eficaz es pagar más del mínimo. El mismo $5,000 al 22 % de APR:</p>
      <ul>
        <li>
          <strong>Mínimo (~$110/mes):</strong> ~27 años, ~$8,000 de intereses
        </li>
        <li>
          <strong>$200/mes:</strong> ~2,8 años, ~$1,650 de intereses <em>(ahorra ~$6,350)</em>
        </li>
        <li>
          <strong>$300/mes:</strong> ~1,8 años, ~$1,050 de intereses <em>(ahorra ~$6,950)</em>
        </li>
        <li>
          <strong>$500/mes:</strong> ~1 año, ~$610 de intereses <em>(ahorra ~$7,390)</em>
        </li>
      </ul>
      <p>
        Pasar del mínimo a solo $200/mes reduce el tiempo de pago en un 90 % y ahorra miles. Cada
        dólar extra por encima del mínimo va directamente al principal, por eso el efecto es tan
        dramático.
      </p>
    </div>
    <div>
      <h2>Estrategias comprobadas para pagar más rápido</h2>
      <p>Si tienes varias tarjetas o quieres un enfoque sistemático, elige un método y cíñete a él:</p>
      <ul>
        <li>
          <strong>Método avalancha (el más barato):</strong> Paga el mínimo en cada tarjeta y luego
          destina todo el dinero extra a la tarjeta con la <em>APR más alta</em> primero.
          Matemáticamente, esto ahorra la mayor cantidad de intereses. Cuando esa tarjeta
          desaparezca, traslada el pago a la siguiente APR más alta.
        </li>
        <li>
          <strong>Método bola de nieve (psicológico):</strong> Paga primero el <em>saldo más
          pequeño</em> sin importar la tasa. Las victorias rápidas te mantienen motivado. Cuesta un
          poco más que la avalancha, pero muchas personas lo mantienen más tiempo.
        </li>
        <li>
          <strong>Tarjeta de transferencia de saldo:</strong> Traslada la deuda a una tarjeta con
          APR introductoria del 0 % (normalmente 12-21 meses). Cada dólar va al principal durante
          el período promocional. Cuidado con las comisiones de transferencia del 3-5 %, y ten un
          plan para liquidarla antes de que termine la promoción.
        </li>
        <li>
          <strong>Préstamo de consolidación de deuda:</strong> Un préstamo personal al 8-15 %
          supera a una tarjeta de crédito del 24 %. Cambias deuda revolving por una cuota fija con
          una fecha de finalización clara.
        </li>
      </ul>
    </div>
    <div>
      <h2>Errores comunes que te mantienen endeudado</h2>
      <ul>
        <li>
          <strong>Pagar solo el mínimo.</strong> Es el error número 1. Incluso $20-50 extra al mes
          transforman tu plazo.
        </li>
        <li>
          <strong>Seguir usando la tarjeta.</strong> Los nuevos cargos compensan tus pagos. Congela
          la tarjeta (literalmente, en un bloque de hielo) mientras la pagas.
        </li>
        <li>
          <strong>Ignorar el interés compuesto diario.</strong> Hacer un pago más temprano en el
          ciclo de facturación ahorra un poco de interés cada mes, porque el interés se calcula
          sobre el saldo diario.
        </li>
        <li>
          <strong>Saltarse pagos.</strong> Un pago atrasado activa una comisión por mora (hasta
          $41) y, a menudo, una APR penal del 29,99 % que puede durar indefinidamente. Configura
          el pago automático para al menos el mínimo.
        </li>
      </ul>
    </div>
    <div>
      <h2>Cuándo considerar otras opciones</h2>
      <p>
        Si tu saldo es grande y tu APR es alta, una transferencia de saldo o un préstamo de
        consolidación pueden reducir tu tasa efectiva al 0-15 %. Eso suele importar más que el
        importe del pago. Si te cuesta incluso pagar los mínimos, contacta con el programa de
        dificultades del emisor de tu tarjeta — muchos ofrecen tipos reducidos temporales o planes
        de pago antes que verte en impago. Evita los préstamos de día de pago y otros créditos
        caros para «cubrir» los pagos de la tarjeta; eso cambia un problema por otro peor.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Kreditkartenschulden gehören zu den teuersten Krediten, die du haben kannst. Die
      durchschnittlichen APRs in den USA liegen zwischen 20 % und 28 %, weit über Hypotheken,
      Autokrediten oder Privatkrediten. Dieser Rechner zeigt genau, wie lange du brauchst, um
      deinen Saldo bei einer gegebenen monatlichen Zahlung zu tilgen — und wichtiger noch —,
      wie viel deines Geldes in Zinsen fließt im Vergleich zur eigentlichen Schuld.
    </p>
    <p>
      Die Ergebnisse schockieren viele. Ein bescheidener Saldo, der nur mit dem Minimum beglichen
      wird, kann mehr an Zinsen kosten als die ursprünglichen Einkäufe und Jahrzehnte bis zur
      Tilgung brauchen. Die gute Nachricht: Schon eine kleine Erhöhung der monatlichen Zahlung
      verkürzt die Laufzeit drastisch und senkt die gezahlten Gesamtzinsen erheblich.
    </p>
    <div>
      <h2>Wie Kreditkartenzinsen wirklich funktionieren</h2>
      <p>
        Die meisten Kreditkarten berechnen Zinsen <strong>täglich</strong>, basierend auf deinem
        durchschnittlichen Tagessaldo. Der beworbene APR wird durch 365 geteilt, um einen Tageszins
        zu erhalten, und dieser Tageszins wird jeden Tag auf deinen Saldo angewendet. Über einen
        Monat summiert sich das zu etwas mehr, als APR ÷ 12 vermuten ließe.
      </p>
      <p>
        Sobald du einen Saldo mitführst, verschwindet deine Karenzzeit. Neue Einkäufe beginnen
        sofort, ab dem Tag der Transaktion, Zinsen zu sammeln. Deshalb ist das Mitführen eines
        Saldos so teuer — du verlierst das zinsfreie Fenster von 21-25 Tagen, das Kartennutzer
        genießen, die voll bezahlen.
      </p>
    </div>
    <div>
      <h2>Die Mindestzahlungs-Falle</h2>
      <p>
        Mindestzahlungen sind absichtlich niedrig angesetzt — typischerweise 1 % bis 3 % deines
        Saldos plus die Zinsen dieses Monats. Aus Sicht der Bank hält ein niedriges Minimum dich
        möglichst lange am Zahlen. Aus deiner Sicht ist es eine Falle.
      </p>
      <p>
        Ein <strong>Saldo von $5,000 bei 22 % APR</strong>, der mit einer festen Zahlung von
        $110/Monat getilgt wird, braucht <strong>über 8 Jahre</strong> bis zur Tilgung und kostet
        rund <strong>$5,850 an Zinsen</strong> — mehr als die ursprüngliche Schuld. Du zahlst für
        das, was du gekauft hast, am Ende mehr als doppelt — und eine sinkende Mindestzahlung (die
        bei etwa denselben $110 beginnt) zieht sich noch viel länger hin.
      </p>
    </div>
    <div>
      <h2>Die Macht höherer Zahlungen</h2>
      <p>Der wirksamste Schritt ist, mehr als das Minimum zu zahlen. Dieselben $5,000 bei 22 % APR:</p>
      <ul>
        <li>
          <strong>Minimum (~$110/Monat):</strong> ~27 Jahre, ~$8,000 Zinsen
        </li>
        <li>
          <strong>$200/Monat:</strong> ~2,8 Jahre, ~$1,650 Zinsen <em>(spart ~$6,350)</em>
        </li>
        <li>
          <strong>$300/Monat:</strong> ~1,8 Jahre, ~$1,050 Zinsen <em>(spart ~$6,950)</em>
        </li>
        <li>
          <strong>$500/Monat:</strong> ~1 Jahr, ~$610 Zinsen <em>(spart ~$7,390)</em>
        </li>
      </ul>
      <p>
        Vom Minimum auf nur $200/Monat zu wechseln, verkürzt die Tilgungszeit um 90 % und spart
        Tausende. Jeder zusätzliche Dollar über dem Minimum fließt direkt in die Tilgung, deshalb
        ist die Wirkung so dramatisch.
      </p>
    </div>
    <div>
      <h2>Bewährte Strategien für schnellere Tilgung</h2>
      <p>Wenn du mehrere Karten hast oder einen systematischen Ansatz willst, wähle eine Methode und bleib dabei:</p>
      <ul>
        <li>
          <strong>Lawinen-Methode (am günstigsten):</strong> Zahle das Minimum auf jeder Karte und
          stecke dann alles zusätzliche Geld zuerst auf die Karte mit dem <em>höchsten APR</em>.
          Mathematisch spart das die meisten Zinsen. Ist die Karte weg, rolle die Zahlung in die
          nächsthöchste APR.
        </li>
        <li>
          <strong>Schneeball-Methode (psychologisch):</strong> Tilge zuerst den <em>kleinsten
          Saldo</em>, unabhängig vom Zinssatz. Die schnellen Erfolge halten dich motiviert. Sie
          kostet etwas mehr als die Lawine, aber viele halten länger durch.
        </li>
        <li>
          <strong>Umschuldungskarte (Balance Transfer):</strong> Übertrage die Schuld auf eine
          Karte mit 0 % Einführungs-APR (typischerweise 12-21 Monate). Jeder Dollar fließt während
          der Promo-Zeit in die Tilgung. Achte auf 3-5 % Überweisungsgebühren und habe einen Plan,
          sie vor Ende der Promo zu tilgen.
        </li>
        <li>
          <strong>Umschuldungskredit:</strong> Ein Privatkredit zu 8-15 % schlägt eine 24 %
          Kreditkarte. Du tauschst revolvierende Schulden gegen eine feste Rate mit klarem Enddatum.
        </li>
      </ul>
    </div>
    <div>
      <h2>Häufige Fehler, die dich in der Schuld halten</h2>
      <ul>
        <li>
          <strong>Nur das Minimum zahlen.</strong> Das ist der Fehler Nummer 1. Selbst $20-50 extra
          pro Monat verändern deine Laufzeit grundlegend.
        </li>
        <li>
          <strong>Die Karte weiter verwenden.</strong> Neue Abbuchungen machen deine Zahlungen
          zunichte. Friere die Karte ein (wörtlich, in einem Eisblock), während du sie abstotterst.
        </li>
        <li>
          <strong>Den täglichen Zinseszins ignorieren.</strong> Eine Zahlung früher im
          Abrechnungszyklus spart jeden Monat ein wenig Zinsen, weil die Zinsen auf den Tagessaldo
          berechnet werden.
        </li>
        <li>
          <strong>Zahlungen verpassen.</strong> Eine verspätete Zahlung löst eine Säumnisgebühr
          (bis zu $41) und oft einen Straf-APR von 29,99 % aus, der unbegrenzt gelten kann. Richte
          eine Dauerauftrag für mindestens das Minimum ein.
        </li>
      </ul>
    </div>
    <div>
      <h2>Wann du andere Optionen in Betracht ziehen solltest</h2>
      <p>
        Wenn dein Saldo groß und dein APR hoch ist, kann ein Balance Transfer oder ein
        Umschuldungskredit deinen effektiven Zinssatz auf 0-15 % senken. Das ist oft wichtiger als
        die Zahlungshöhe. Wenn du schon die Mindestzahlungen kaum schaffst, wende dich an das
        Härtefall-Programm deines Kartenausstellers — viele bieten vorübergehend gesenkte Zinsen
        oder Zahlungspläne an, statt dich in den Verzug rutschen zu sehen. Vermeide Payday-Kredite
        und andere teure Kredite, um Kreditkartenzahlungen zu „decken"; das tauscht ein Problem
        gegen ein schlimmeres.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CreditCardPayoffCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
