/**
 * 《Mortgage & Loan Calculators: The Honest Guide》(2026-08-26)
 * 面向工具使用者的引流文:金融计算器选题,内链 8 个工具页(工具卡块)。
 * 结构遵循 blog-articles.ts 的 LocalizedArticle;SEO 数字措辞尽量常青
 * (用户要求:工具数量会持续变化,不写死总数)。
 */

import type { LocalizedArticle } from './blog-articles'

export const mortgageLoanCalculatorsArticle: LocalizedArticle = {
  en: {
    lead: 'Lenders quote you a monthly payment that quietly excludes taxes, insurance, and PMI. Here is the math they skip — PITI, extra payments, the rent-vs-buy crossover — with calculators that run entirely in your browser.',
    sections: [
      {
        heading: '1. Your Real Payment Is PITI, Not P&I',
        blocks: [
          'The number a bank advertises is principal and interest only. Your actual monthly cost adds property tax, homeowner\u2019s insurance, HOA dues, and — if your down payment is under 20% — PMI. On a $400,000 home with 10% down, PMI alone adds roughly $150/month that the headline rate never mentioned.',
          'A full PITI calculator shows every component as its own line, and adds PMI automatically only when your down payment is below 20% — at 20%+ it zeroes out, exactly like real lenders treat it.',
          {
            card: {
              title: 'Mortgage Calculator with PMI & Taxes',
              href: '/tools/mortgage-calculator/',
              desc: 'Full PITI breakdown, auto-PMI under 20% down, extra-payment payoff comparison with a savings curve.',
            },
          },
        ],
      },
      {
        heading: '2. Extra Payments: the Five-Figure Lever',
        blocks: [
          'Adding $100–$500 to your monthly payment goes straight to principal, and the effect is non-linear: on a 30-year loan at 6.8%, $200 extra per month typically cuts 6–8 years off the term and saves five figures of interest. You cannot feel that from a single number — you need to see the two balance curves diverge.',
          'The mortgage calculator above plots exactly that: your balance with and without the extra payment, with the gap between the curves shaded. The shaded area is the interest you never pay.',
        ],
      },
      {
        heading: '3. Rent vs Buy: Find Your Crossover Year',
        blocks: [
          '\u201cRenting is throwing money away\u201d is true starting in year N — the question is what N is. Buying front-loads the down payment and closing friction; renting keeps rising every year. In expensive markets the cumulative cost curves often cross around year 5–8; in cheap ones, year 2.',
          {
            card: {
              title: 'Rent vs Buy Calculator',
              href: '/tools/rent-vs-buy-calculator/',
              desc: 'Cumulative rent vs net buy cost plotted year by year — the crossover point is the answer.',
            },
          },
        ],
      },
      {
        heading: '4. Any Loan, With the Full Amortization Schedule',
        blocks: [
          'Car loans and personal loans use the same amortization math as mortgages. What most calculators hide is the schedule itself: the month-by-month split of principal vs interest — where you discover your first year of payments is mostly interest.',
          {
            card: {
              title: 'Loan Calculator with Amortization Schedule',
              href: '/tools/loan-calculator/',
              desc: 'Monthly payment, total interest, and the full payment-by-payment schedule with a balance curve.',
            },
          },
          {
            card: {
              title: 'Auto Loan Calculator',
              href: '/tools/auto-loan-calculator/',
              desc: 'Vehicle price, down payment, trade-in, and sales tax — the true cost of driving off the lot.',
            },
          },
        ],
      },
      {
        heading: '5. The Minimum-Payment Trap',
        blocks: [
          'Credit card minimums are engineered to stretch payoff to decades: on a $5,000 balance at 20% APR, paying only the minimum can take over 15 years and double the real cost. Paying $50 more per month collapses that timeline.',
          {
            card: {
              title: 'Credit Card Minimum Payment Calculator',
              href: '/tools/credit-card-minimum-payment-calculator/',
              desc: 'See how little of your minimum goes to principal, and the payoff curve for minimums vs +$50/month.',
            },
          },
          {
            card: {
              title: 'Credit Card Payoff Calculator',
              href: '/tools/credit-card-payoff-calculator/',
              desc: 'Set a fixed monthly payment and get the exact payoff date, total interest, and balance curve.',
            },
          },
        ],
      },
      {
        heading: '6. Compounding, Working for You Instead',
        blocks: [
          'The same math that stretches a card balance to 15 years also grows a retirement fund — if you give it time. The compound interest calculator shows your contributions vs the growth on top, plus a dashed line for \u201cthe same money, started 10 years later.\u201d The gap between those two lines is the most expensive procrastination most people ever commit.',
          {
            card: {
              title: 'Compound Interest Calculator',
              href: '/tools/compound-interest-calculator/',
              desc: 'Contributions vs compound growth, with a start-now vs wait-10-years comparison.',
            },
          },
          {
            card: {
              title: 'Retirement Calculator',
              href: '/tools/retirement-calculator/',
              desc: 'Project your nest egg from age, savings, and monthly contributions — plus the 4% rule income.',
            },
          },
        ],
      },
      {
        heading: 'Why These Calculators Feel Fast',
        blocks: [
          'Every calculator linked above is a static page that runs 100% in your browser. Your salary, balance, and birth date never leave the device — there is no server to send them to. That is also why results update instantly while you drag a slider: no round-trip, no spinners, no \u201csubmitting…\u201d.',
        ],
      },
    ],
  },
  zh: {
    lead: '银行报给你的月供悄悄剔除了税费、保险和 PMI。这里把他们跳过的算给你看——PITI 全口径、提前还款、租房买房的交叉年——所有计算器都在浏览器本地运行。',
    sections: [
      {
        heading: '1. 真实月供是 PITI,不只是本息',
        blocks: [
          '银行宣传的数字只含本金和利息。实际月成本还要加上房产税、房屋保险、HOA,以及首付不足 20% 时的 PMI——$400,000 的房子 10% 首付,仅 PMI 一项每月就多出约 $150,而广告利率从不会提。',
          '完整的 PITI 计算器把每一项单列,且 PMI 只在首付低于 20% 时自动计入,20% 以上自动归零——和真实放贷方的处理完全一致。',
          {
            card: {
              title: '房贷计算器(含 PMI 与税费)',
              href: '/tools/mortgage-calculator/',
              desc: '完整 PITI 分解、20% 以下首付自动 PMI、提前还款对比与省息曲线。',
            },
          },
        ],
      },
      {
        heading: '2. 提前还款:五位数级别的杠杆',
        blocks: [
          '每月多还 $100–$500 直接冲本金,且效果是非线性的:6.8% 的 30 年贷款每月多还 $200,通常缩短 6–8 年期限、省下五位数利息。单看一个数字感受不到——你需要看到两条余额曲线分开的过程。',
          '上面的房贷计算器画的就是它:有/无提前还款的余额双曲线,中间阴影区就是你永远不会付的利息。',
        ],
      },
      {
        heading: '3. 租 vs 买:找到你的交叉年',
        blocks: [
          '“租房是扔钱”从第 N 年开始成立——关键是 N 是几。买房前置了首付与摩擦成本;租房逐年上涨。昂贵市场的累计成本曲线常在第 5–8 年交叉,便宜市场可能第 2 年就交叉。',
          {
            card: {
              title: '租房 vs 买房计算器',
              href: '/tools/rent-vs-buy-calculator/',
              desc: '逐年累计租金 vs 购房净成本曲线,交点就是答案。',
            },
          },
        ],
      },
      {
        heading: '4. 任意贷款 + 完整摊销表',
        blocks: [
          '车贷与个人贷款的数学和房贷完全相同。多数计算器藏起的是摊销表本身:逐月的本金/利息拆分——你会发现在第一年的还款里大头其实是利息。',
          {
            card: {
              title: '贷款计算器(含摊销表)',
              href: '/tools/loan-calculator/',
              desc: '月供、总利息,以及逐期还款明细表与余额曲线。',
            },
          },
          {
            card: {
              title: '车贷计算器',
              href: '/tools/auto-loan-calculator/',
              desc: '车价、首付、置换与消费税——开走那一刻的真实成本。',
            },
          },
        ],
      },
      {
        heading: '5. 最低还款陷阱',
        blocks: [
          '信用卡最低还款被设计成把清偿拖到几十年:$5,000 余额、20% APR 只还最低,可能要还 15 年以上、真实成本翻倍。每月多还 $50 就能击穿这个时间线。',
          {
            card: {
              title: '信用卡最低还款计算器',
              href: '/tools/credit-card-minimum-payment-calculator/',
              desc: '看最低还款里有多少进了本金,以及最低 vs 每月多还 $50 的还款曲线。',
            },
          },
          {
            card: {
              title: '信用卡清偿计算器',
              href: '/tools/credit-card-payoff-calculator/',
              desc: '设定固定月供,得到精确还清日期、总利息与余额曲线。',
            },
          },
        ],
      },
      {
        heading: '6. 让复利为你工作',
        blocks: [
          '把卡债拖到 15 年的数学,同样能让退休金增长——只要你给它时间。复利计算器画出你的投入与其上的增长,还有一条“同样一笔钱、晚 10 年开始”的虚线——两条线的差距,是多数人付出过的最贵的拖延。',
          {
            card: {
              title: '复利计算器',
              href: '/tools/compound-interest-calculator/',
              desc: '投入 vs 复利增长,附“现在开始 vs 晚 10 年”对比。',
            },
          },
          {
            card: {
              title: '退休计算器',
              href: '/tools/retirement-calculator/',
              desc: '从年龄、现有储蓄与月供推算退休金规模,附 4% 法则月收入。',
            },
          },
        ],
      },
      {
        heading: '为什么这些计算器这么快',
        blocks: [
          '上面每个计算器都是静态页面,100% 在浏览器里运行。你的薪资、余额、生日不会离开设备——根本不存在可发送的服务器。这也是拖动滑杆时结果即时刷新的原因:没有往返,没有加载图标。',
        ],
      },
    ],
  },
  es: {
    lead: 'El banco te cotiza una cuota que excluye silenciosamente impuestos, seguro y PMI. Aquí está el cálculo que omiten — PITI completo, pagos extra y el año de cruce entre alquilar y comprar — con calculadoras que corren 100% en tu navegador.',
    sections: [
      {
        heading: '1. Tu cuota real es PITI, no solo capital e intereses',
        blocks: [
          'La cifra que anuncia un banco es solo capital e intereses. El coste mensual real suma impuesto predial, seguro, HOA y — con menos del 20% de entrada — el PMI. En una vivienda de $400,000 con 10% de entrada, solo el PMI añade unos $150/mes que la tasa del anuncio nunca mencionó.',
          {
            card: {
              title: 'Calculadora Hipotecaria con PMI e Impuestos',
              href: '/tools/mortgage-calculator/',
              desc: 'Desglose PITI completo, PMI automático bajo 20% de entrada y comparación de amortización anticipada.',
            },
          },
        ],
      },
      {
        heading: '2. Pagos extra: la palanca de cinco cifras',
        blocks: [
          'Añadir $100–$500 mensuales va directo al capital y el efecto no es lineal: en un préstamo a 30 años al 6,8%, $200 extra suelen recortar 6–8 años y ahorrar cinco cifras en intereses. Solo se ve cuando las dos curvas de saldo se separan.',
        ],
      },
      {
        heading: '3. Alquilar vs comprar: encuentra tu año de cruce',
        blocks: [
          '“Alquilar es tirar el dinero” es cierto a partir del año N — la pregunta es cuál es N. En mercados caros las curvas de coste acumulado suelen cruzarse entre los años 5 y 8; en baratos, el año 2.',
          {
            card: {
              title: 'Calculadora Alquilar vs Comprar',
              href: '/tools/rent-vs-buy-calculator/',
              desc: 'Alquiler acumulado frente a coste neto de compra, año a año — el punto de cruce es la respuesta.',
            },
          },
        ],
      },
      {
        heading: '4. Cualquier préstamo, con el cuadro de amortización completo',
        blocks: [
          'Los préstamos de coche y personales usan la misma matemática. Lo que casi ningún simulador muestra es el cuadro mes a mes — donde descubres que el primer año pagas sobre todo intereses.',
          {
            card: {
              title: 'Calculadora de Préstamos con Amortización',
              href: '/tools/loan-calculator/',
              desc: 'Cuota, intereses totales y el calendario pago a pago con curva de saldo.',
            },
          },
          {
            card: {
              title: 'Calculadora de Préstamo de Coche',
              href: '/tools/auto-loan-calculator/',
              desc: 'Precio, entrada, vehículo a cuenta e impuesto de ventas — el coste real de sacarlo del concesionario.',
            },
          },
        ],
      },
      {
        heading: '5. La trampa del pago mínimo',
        blocks: [
          'Los mínimos de las tarjetas están diseñados para estirar la deuda décadas: $5,000 al 20% TAE pagando solo el mínimo puede tardar más de 15 años y duplicar el coste real. $50 más al mes colapsan ese horizonte.',
          {
            card: {
              title: 'Calculadora de Pago Mínimo de Tarjeta',
              href: '/tools/credit-card-minimum-payment-calculator/',
              desc: 'Cuánto de tu mínimo va al capital, y la curva de mínimo frente a +$50/mes.',
            },
          },
          {
            card: {
              title: 'Calculadora de Amortización de Tarjeta',
              href: '/tools/credit-card-payoff-calculator/',
              desc: 'Fija tu pago mensual y obtén la fecha exacta de liquidación y el interés total.',
            },
          },
        ],
      },
      {
        heading: '6. El interés compuesto, trabajando a tu favor',
        blocks: [
          'La misma matemática que estira una deuda a 15 años también hace crecer un fondo de jubilación — si le das tiempo. La calculadora muestra tus aportaciones frente al crecimiento, más una línea discontinua: «el mismo dinero, 10 años después». Ese hueco es la procrastinación más cara que existe.',
          {
            card: {
              title: 'Calculadora de Interés Compuesto',
              href: '/tools/compound-interest-calculator/',
              desc: 'Aportaciones frente a crecimiento, con comparación empezar ahora vs esperar 10 años.',
            },
          },
          {
            card: {
              title: 'Calculadora de Jubilación',
              href: '/tools/retirement-calculator/',
              desc: 'Proyecta tu fondo desde edad, ahorros y aportación mensual — más la renta de la regla del 4%.',
            },
          },
        ],
      },
      {
        heading: 'Por qué estas calculadoras son tan rápidas',
        blocks: [
          'Cada calculadora es una página estática que corre 100% en tu navegador. Tu salario, saldo y fecha de nacimiento nunca salen del dispositivo — no hay servidor al que enviarlos. Por eso los resultados se actualizan al instante al mover un deslizador.',
        ],
      },
    ],
  },
  de: {
    lead: 'Die Bank nennt dir eine Rate, die Steuern, Versicherung und PMI still ausklammert. Hier ist die Rechnung, die sie weglassen — volle PITI, Sondertilgung und das Mieter-Käufer-Schnittpunkt-Jahr — mit Rechnern, die komplett im Browser laufen.',
    sections: [
      {
        heading: '1. Deine echte Rate ist PITI, nicht nur Tilgung und Zins',
        blocks: [
          'Die beworbene Zahl enthält nur Tilgung und Zins. Die echten Monatskosten addieren Grundsteuer, Versicherung, Hausgeld und — bei unter 20 % Eigenleistung — PMI. Bei einem 400.000-$-Haus mit 10 % Anzahlung bringt allein der PMI rund 150 $/Monat, die der beworbene Satz nie erwähnt.',
          {
            card: {
              title: 'Hypothekenrechner mit PMI & Steuern',
              href: '/tools/mortgage-calculator/',
              desc: 'Voller PITI-Breakdown, automatischer PMI unter 20 % Anzahlung und Sondertilgungs-Vergleich.',
            },
          },
        ],
      },
      {
        heading: '2. Sondertilgung: der fünfstellige Hebel',
        blocks: [
          '100–500 $ extra im Monat gehen direkt auf die Restschuld — und nichtlinear: Bei 30 Jahren und 6,8 % kürzen 200 $ extra meist 6–8 Jahre und sparen fünfstellige Zinsen. Sichtbar wird es erst, wenn die beiden Restschuld-Kurven auseinanderlaufen.',
        ],
      },
      {
        heading: '3. Mieten vs Kaufen: dein Schnittpunkt-Jahr',
        blocks: [
          '„Mieten ist rausgeworfenes Geld“ stimmt ab Jahr N — die Frage ist welches. In teuren Märkten kreuzen sich die Kumulativkosten oft in Jahr 5–8, in günstigen in Jahr 2.',
          {
            card: {
              title: 'Mieten-vs-Kaufen-Rechner',
              href: '/tools/rent-vs-buy-calculator/',
              desc: 'Kumulierte Miete gegen Netto-Kaufkosten, Jahr für Jahr — der Schnittpunkt ist die Antwort.',
            },
          },
        ],
      },
      {
        heading: '4. Jeder Kredit, mit vollem Tilgungsplan',
        blocks: [
          'Autokredite und Ratenkredite folgen derselben Mathematik. Was fast jeder Rechner versteckt: der Monatsplan selbst — wobei auffällt, dass im ersten Jahr überwiegend Zinsen drin sind.',
          {
            card: {
              title: 'Kreditrechner mit Tilgungsplan',
              href: '/tools/loan-calculator/',
              desc: 'Rate, Gesamtzinsen und der komplette Zahlungsplan mit Restschuld-Kurve.',
            },
          },
          {
            card: {
              title: 'Autokredit-Rechner',
              href: '/tools/auto-loan-calculator/',
              desc: 'Preis, Anzahlung, Inzahlungnahme und Umsatzsteuer — die echten Kosten beim Ausrollen.',
            },
          },
        ],
      },
      {
        heading: '5. Die Mindestzahlungs-Falle',
        blocks: [
          'Karten-Mindestbeträge sind darauf ausgelegt, die Tilgung über Jahrzehnte zu strecken: 5.000 $ bei 20 % APR nur mit Minimum kann über 15 Jahre dauern und die Kosten verdoppeln. 50 $ mehr im Monat kollabieren diesen Horizont.',
          {
            card: {
              title: 'Kreditkarten-Mindestzahlungs-Rechner',
              href: '/tools/credit-card-minimum-payment-calculator/',
              desc: 'Wie wenig deines Minimums in die Tilgung geht — und die Kurve Minimum vs +50 $/Monat.',
            },
          },
          {
            card: {
              title: 'Kreditkarten-Tilgungsrechner',
              href: '/tools/credit-card-payoff-calculator/',
              desc: 'Feste Monatsrate festlegen und exaktes Tilgungsdatum plus Gesamtzinsen erhalten.',
            },
          },
        ],
      },
      {
        heading: '6. Zinseszins, jetzt für dich',
        blocks: [
          'Die Mathematik, die eine Kartenschuld auf 15 Jahre streckt, lässt auch ein Rentenkonto wachsen — wenn du ihr Zeit gibst. Der Rechner zeigt Einzahlungen gegen Wachstum, plus eine gestrichelte Linie: „dasselbe Geld, 10 Jahre später“. Die Lücke dazwischen ist die teuerste Prokrastination.',
          {
            card: {
              title: 'Zinseszinsrechner',
              href: '/tools/compound-interest-calculator/',
              desc: 'Einzahlungen gegen Zinseszins-Wachstum, mit Jetzt-vs-10-Jahre-später-Vergleich.',
            },
          },
          {
            card: {
              title: 'Rentenrechner',
              href: '/tools/retirement-calculator/',
              desc: 'Projiziere dein Rentenkapital aus Alter, Ersparnissen und Monatsrate — plus 4%-Regel-Einkommen.',
            },
          },
        ],
      },
      {
        heading: 'Warum diese Rechner so schnell sind',
        blocks: [
          'Jeder verlinkte Rechner ist eine statische Seite, die zu 100 % im Browser läuft. Gehalt, Saldo und Geburtsdatum verlassen das Gerät nie — es gibt gar keinen Server, an den man sie schicken könnte. Deshalb aktualisieren sich Ergebnisse sofort beim Schieben eines Reglers.',
        ],
      },
    ],
  },
}
