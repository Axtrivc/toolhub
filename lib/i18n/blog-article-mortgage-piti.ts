/**
 * 《The Complete Guide to Mortgage Amortization, PITI Breakdown, and Prepayment Strategies》
 * Pillar 集群 #1(金融房产,2026-09-05)。
 * 内链:mortgage-calculator / amortization-table-generator /
 * down-payment-calculator / rent-vs-buy-calculator。
 * 结构遵循 blog-articles.ts 的 LocalizedArticle;数字示例全部可按公式复算。
 */

import type { LocalizedArticle } from './blog-articles'

const CODE_AMORTIZATION = `// Monthly payment (fully amortizing, fixed rate)
M = P * r(1+r)^n / ((1+r)^n - 1)
// P = principal, r = annual rate / 12, n = months
//
// Each month then re-splits:
//   interest  = balance * r
//   principal = M - interest
//   balance  -= principal`

export const mortgagePitiGuideArticle: LocalizedArticle = {
  en: {
    lead: 'A 30-year mortgage is the largest amortization schedule most people ever sign — yet lenders quote it as a single monthly number. This guide opens the black box: the payment formula, the full PITI stack, and the prepayment math that quietly saves five figures.',
    sections: [
      {
        heading: '1. Amortization: Same Payment, Different Anatomy Every Month',
        blocks: [
          'A fixed-rate mortgage holds the monthly payment constant for 30 years, but the *composition* of that payment changes every single month. Interest is always charged on the outstanding balance, so the early payments are almost all interest and the late ones almost all principal.',
          { code: CODE_AMORTIZATION },
          'On a **$360,000 loan at 6.8% for 30 years**, the payment is **$2,347**. Month one splits it into **$2,040 interest and $307 principal** — 87% of your money services debt, 13% builds equity. The principal share does not cross 50% until around **payment 239 (year 19.9)**. That is not a bank conspiracy; it is what "constant payment on a shrinking balance" mathematically requires.',
          {
            card: {
              title: 'Amortization Table Generator',
              href: '/tools/amortization-table-generator/',
              desc: 'The full payment-by-payment schedule with running balance, exportable to CSV — watch the interest/principal crossover with your own numbers.',
            },
          },
        ],
      },
      {
        heading: '2. PITI: Your Real Payment Has Four Layers',
        blocks: [
          'Lenders advertise principal + interest (P&I). Your bank account experiences **PITI**:',
          { list: [
            '**Principal + Interest** — the amortized loan payment from the formula above.',
            '**Taxes** — property tax, typically 0.5–2.5% of home value per year depending on state, escrowed monthly.',
            '**Insurance** — homeowner\u2019s insurance, roughly $1,500–$3,500/year for a median home, also escrowed.',
            '**PMI** — private mortgage insurance, 0.5–1% of the loan per year, charged whenever your down payment is under 20%.',
          ] },
          'On a $400,000 purchase with 10% down, P&I might be $2,347 while PITI lands near **$3,050** — the escrow layers add roughly 30%. Affordability calculators that ignore taxes, insurance, and PMI are not optimistic; they are wrong.',
          {
            card: {
              title: 'Mortgage Calculator (Full PITI)',
              href: '/tools/mortgage-calculator/',
              desc: 'P&I plus taxes, insurance, and automatic PMI under 20% down — the number your bank account will actually see.',
            },
          },
        ],
      },
      {
        heading: '3. Prepayment: The Five-Figure Lever Hiding in the Schedule',
        blocks: [
          'Every extra dollar you pay goes **directly to principal**, and every future interest charge is computed on the now-smaller balance. The effect compounds forward: on that $360,000 loan at 6.8%, adding **$200/month** cuts the term by roughly **6 years** and saves about **$117,000 in interest**. A single $10,000 lump sum in year 2 still saves around $52,000.',
          'Two disciplines matter more than the amount. First, **earlier beats bigger**: an extra payment in year 2 saves far more than the same payment in year 20, because it kills decades of future interest. Second, **designate the payment**: write "apply to principal" on the memo line or the servicer may credit it as next month\u2019s payment — same cash, no interest benefit.',
          'The biweekly trick works on the same principle: 26 half-payments equal 13 monthly payments per year, so one full extra payment sneaks in annually without any budgeting pain.',
          {
            card: {
              title: 'Mortgage Calculator (Extra Payments)',
              href: '/tools/mortgage-calculator/',
              desc: 'Dial in an extra monthly amount and watch the payoff curve and interest savings move — the $200/month scenario above, run on your numbers.',
            },
          },
        ],
      },
      {
        heading: '4. Down Payment: 20% Is a PMI Threshold, Not a Moral Virtue',
        blocks: [
          'The 20% rule exists because PMI disappears at 78–80% loan-to-value. But waiting years to save 20% while prices and rents rise has its own cost. The honest comparison runs both paths: a 5% down payment today with PMI versus 20% down three years later with three more years of rent paid.',
          'PMI typically costs **0.5–1% of the loan per year** ($150–$300/month on a $360,000 loan) and — the part people miss — it automatically terminates once you reach 78% LTV on the original schedule, and you can request removal at 80%. Paying PMI for 4 years to stop paying rent for 4 years is often the winning trade.',
          {
            card: {
              title: 'Down Payment Calculator',
              href: '/tools/down-payment-calculator/',
              desc: 'Compare down-payment tiers against PMI cost and monthly payment — find the tier where the trade actually flips.',
            },
          },
        ],
      },
      {
        heading: '5. Rent vs Buy: Find Your Crossover Year',
        blocks: [
          'Buying front-loads enormous friction: closing costs of 2–5% to buy, agent commissions around 5–6% to sell. Amortization adds insult — in the first 5 years of a 30-year loan, barely 15% of your payments built equity. If you sell before the crossover, you paid landlord-grade money *and* the transaction friction.',
          'In most U.S. metros the cumulative rent-vs-buy curves cross around **year 5–8**; in cheap markets, year 2–3. The crossover moves with three levers: price-to-rent ratio, mortgage rates, and how long you actually stay. Run the curves before falling in love with a listing.',
          {
            card: {
              title: 'Rent vs Buy Calculator',
              href: '/tools/rent-vs-buy-calculator/',
              desc: 'Cumulative renting cost vs net ownership cost plotted year by year — the crossing point answers the question honestly.',
            },
          },
        ],
      },
      {
        heading: 'The Five-Minute Pre-Signing Checklist',
        blocks: [
          { list: [
            'Compute **full PITI**, not the advertised P&I — if the lender\u2019s number is 25%+ below yours, you are missing escrow layers.',
            'Open the **amortization schedule** and look at month 1: the interest share will make you respect prepayments.',
            'Test **+$100/+$300/+$500 extra per month** and pick the tier you can sustain — consistency beats heroics.',
            'Check the **crossover year** against your realistic plan to stay — not your optimistic one.',
            'Verify every figure runs in your browser with no sign-up — your loan amount is nobody else\u2019s data.',
          ] },
        ],
      },
    ],
  },
  zh: {
    lead: '30 年房贷是大多数人签过的最大一张摊销表,而银行只报给你一个月供数字。本指南拆开黑盒:月供公式、PITI 全口径,以及悄悄省下五位数的提前还款数学。',
    sections: [
      {
        heading: '1. 摊销的本质:月供不变,结构每月都在变',
        blocks: [
          '固定利率房贷 30 年月供恒定,但这笔钱的*内部结构*每月都在移动。利息永远按剩余本金计提,所以早期还款几乎全是利息,后期几乎全是本金。',
          { code: CODE_AMORTIZATION },
          '以 **36 万美元、6.8%、30 年**为例:月供 **$2,347**,第一个月拆成 **$2,040 利息 + $307 本金**——87% 在养债,13% 在积累净资产。本金占比要到**第 239 期(约第 19.9 年)**才过半。这不是银行阴谋,而是"恒定月供 × 递减余额"的数学必然。',
          {
            card: {
              title: '摊销表生成器',
              href: '/tools/amortization-table-generator/',
              desc: '生成逐期完整摊销表,含运行余额、可导出 CSV——用你自己的数字亲眼看利息/本金的交叉点。',
            },
          },
        ],
      },
      {
        heading: '2. PITI:真实月供有四层',
        blocks: [
          '银行广告只报本息(P&I),你的银行卡实际承受的是 **PITI**:',
          { list: [
            '**本金 + 利息**——上面公式算出的摊销月供。',
            '**房产税**——按房价每年 0.5–2.5%(各州差异巨大),按月托管扣缴。',
            '**房屋保险**——中位房价约 $1,500–$3,500/年,同样走托管账户。',
            '**PMI 房贷保险**——首付不足 20% 时收取,约为贷款额的 0.5–1%/年。',
          ] },
          '40 万美元的房子、10% 首付:P&I 约 $2,347,而 PITI 接近 **$3,050**——托管层多占约 30%。任何忽略税费、保险和 PMI 的"负担能力计算器"不是乐观,是错误。',
          {
            card: {
              title: '房贷计算器(PITI 全口径)',
              href: '/tools/mortgage-calculator/',
              desc: '本息 + 税费 + 保险 + 首付低于 20% 自动计 PMI——和你银行卡实际扣款一致的数字。',
            },
          },
        ],
      },
      {
        heading: '3. 提前还款:藏在摊销表里的五位数杠杆',
        blocks: [
          '每一笔多还的钱都**直接冲减本金**,此后所有利息都按更小的余额计提,效果向前复利:36 万、6.8% 的贷款,每月多还 **$200**,期限缩短约 **6 年**,省下约 **$117,000** 利息;哪怕第 2 年一次性多还 $10,000,也能省约 $52,000。',
          '两条纪律比金额更重要。其一,**越早越值钱**:第 2 年的一笔多还款,消灭的是未来几十年的利息,同样金额在第 20 年还效果差一个数量级。其二,**明确标注用途**:备注"apply to principal",否则服务商可能记成"预缴下月"——钱一样出,省息效果为零。',
          '双周还款法利用同一原理:26 次半月供 = 13 个月供,每年悄悄多还一整期,且毫无预算痛感。',
          {
            card: {
              title: '房贷计算器(提前还款)',
              href: '/tools/mortgage-calculator/',
              desc: '填入每月额外还款额,实时查看还清曲线与省息变化——用你的数字重算上面每月多还 $200 的场景。',
            },
          },
        ],
      },
      {
        heading: '4. 首付:20% 是 PMI 分界线,不是道德标准',
        blocks: [
          '20% 规则的真实来源是:贷款价值比(LTV)降到 78–80% 时 PMI 自动终止。但为攒够 20% 多等几年,房价和租金同时在涨——诚实的算法要两条路都跑:今天 5% 首付 + PMI,对比三年后 20% 首付 + 多付三年房租。',
          'PMI 通常每年收贷款额的 **0.5–1%**(36 万贷款即 $150–$300/月),而人们忽略的一点:LTV 按原计划降到 78% 时它**自动终止**,降到 80% 时可主动申请取消。用 4 年 PMI 换掉 4 年房租,往往是划算的交易。',
          {
            card: {
              title: '首付计算器',
              href: '/tools/down-payment-calculator/',
              desc: '对比各首付档位对应的 PMI 成本与月供——找到交易反转的那个档位。',
            },
          },
        ],
      },
      {
        heading: '5. 租与买:找到你的交叉年',
        blocks: [
          '买房把巨额摩擦前置:买入 Closing Cost 2–5%,卖出佣金约 5–6%。摊销结构雪上加霜——30 年贷款的头 5 年,你的还款只有约 15% 变成了净资产。在交叉年之前卖房,等于付了房东级的钱,还倒贴交易摩擦。',
          '美国多数都市区,租买累计成本曲线在**第 5–8 年**交叉;便宜市场第 2–3 年即交叉。交叉点由三个杠杆决定:房价租金比、贷款利率,以及你真实的居住年限。对房源动心之前,先跑曲线。',
          {
            card: {
              title: '租买对比计算器',
              href: '/tools/rent-vs-buy-calculator/',
              desc: '累计租房成本 vs 净持有成本逐年绘线——交叉点诚实地回答这个问题。',
            },
          },
        ],
      },
      {
        heading: '签约前五分钟清单',
        blocks: [
          { list: [
            '算 **PITI 全口径**,不要广告里的 P&I——如果银行报价比你的结果低 25% 以上,说明托管层没算进去。',
            '打开**摊销表**看第 1 期:利息占比会让你立刻尊重提前还款。',
            '试算 **每月多还 $100/$300/$500** 三档,选你能长期坚持的那档——纪律胜过壮举。',
            '把**交叉年**和你真实的居住计划对照,而不是和乐观版本对照。',
            '确认所有计算都在浏览器本地完成、无需注册——你的贷款金额不属于任何服务器。',
          ] },
        ],
      },
    ],
  },
  es: {
    lead: 'Una hipoteca a 30 años es la mayor tabla de amortización que firma la mayoría — y el banco la resume en una sola cuota. Esta guía abre la caja negra: la fórmula de la cuota, el PITI completo y la matemática de amortización anticipada que ahorra cinco cifras.',
    sections: [
      {
        heading: '1. Amortización: misma cuota, anatomía distinta cada mes',
        blocks: [
          'Una hipoteca fija mantiene la cuota constante 30 años, pero la *composición* de esa cuota cambia cada mes. El interés siempre se cobra sobre el saldo vivo, así que las primeras cuotas son casi todo interés y las últimas casi todo capital.',
          { code: CODE_AMORTIZATION },
          'Con un **préstamo de $360 000 al 6,8 % a 30 años**, la cuota es **$2 347**. El primer mes se divide en **$2 040 de intereses y $307 de capital**: el 87 % alimenta la deuda y el 13 % construye patrimonio. La parte de capital no supera el 50 % hasta el **pago 239 (año 19,9)**. No es una conspiración bancaria: es lo que exige matemáticamente una cuota constante sobre un saldo decreciente.',
          {
            card: {
              title: 'Generador de tabla de amortización',
              href: '/tools/amortization-table-generator/',
              desc: 'El calendario completo pago a pago con saldo corrido, exportable a CSV — mira el cruce intereses/capital con tus propios números.',
            },
          },
        ],
      },
      {
        heading: '2. PITI: tu cuota real tiene cuatro capas',
        blocks: [
          'El banco anuncia capital + intereses (P&I). Tu cuenta sufre el **PITI**:',
          { list: [
            '**Capital + intereses** — la cuota amortizada de la fórmula anterior.',
            '**Impuestos** — el impuesto de propiedad, típicamente 0,5–2,5 % del valor al año según el estado, retenido mensualmente en escrow.',
            '**Seguro** — el seguro de hogar, unos $1 500–$3 500/año para una vivienda mediana, también en escrow.',
            '**PMI** — seguro hipotecario privado, 0,5–1 % del préstamo al año, siempre que la entrada sea inferior al 20 %.',
          ] },
          'En una compra de $400 000 con 10 % de entrada, el P&I puede ser $2 347 mientras el PITI ronda **$3 050** — las capas de escrow añaden cerca de un 30 %. Las calculadoras de asequibilidad que ignoran impuestos, seguro y PMI no son optimistas: están mal.',
          {
            card: {
              title: 'Calculadora hipotecaria (PITI completo)',
              href: '/tools/mortgage-calculator/',
              desc: 'P&I más impuestos, seguro y PMI automático bajo el 20 % de entrada — la cifra que verá tu cuenta bancaria.',
            },
          },
        ],
      },
      {
        heading: '3. Amortización anticipada: la palanca de cinco cifras escondida en la tabla',
        blocks: [
          'Cada dólar extra va **directo a capital**, y todos los intereses futuros se calculan sobre un saldo menor. El efecto se compone hacia adelante: en ese préstamo de $360 000 al 6,8 %, añadir **$200/mes** recorta el plazo unos **6 años** y ahorra unos **$117 000 en intereses**. Un solo pago único de $10 000 en el año 2 aún ahorra alrededor de $52 000.',
          'Dos disciplinas importan más que la cantidad. Primero, **antes gana a más**: un pago extra en el año 2 ahorra mucho más que el mismo pago en el año 20, porque mata décadas de intereses futuros. Segundo, **designa el pago**: escribe «apply to principal» o el administrador puede imputarlo como la cuota del mes siguiente — mismo dinero, cero beneficio de intereses.',
          'El truco quincenal funciona igual: 26 medias cuotas equivalen a 13 mensualidades al año, así que una cuota extra completa se cuela anualmente sin dolor presupuestario.',
          {
            card: {
              title: 'Calculadora de hipoteca (pagos extra)',
              href: '/tools/mortgage-calculator/',
              desc: 'Ajusta el pago extra mensual y mira cómo se mueven la curva de amortización y el ahorro — el escenario de $200/mes, con tus números.',
            },
          },
        ],
      },
      {
        heading: '4. Entrada: el 20 % es un umbral de PMI, no una virtud moral',
        blocks: [
          'La regla del 20 % existe porque el PMI desaparece al llegar al 78–80 % de loan-to-value. Pero esperar años ahorrando el 20 % mientras suben precios y alquileres tiene su propio coste. La comparación honesta corre ambos caminos: 5 % de entrada hoy con PMI frente a 20 % dentro de tres años con tres años más de alquiler.',
          'El PMI cuesta típicamente **0,5–1 % del préstamo al año** ($150–$300/mes en un préstamo de $360 000) y — lo que la gente pasa por alto — se cancela automáticamente al alcanzar el 78 % de LTV en el calendario original, y puedes pedir la baja al 80 %. Pagar PMI 4 años para dejar de pagar alquiler 4 años suele ser la jugada ganadora.',
          {
            card: {
              title: 'Calculadora de entrada (down payment)',
              href: '/tools/down-payment-calculator/',
              desc: 'Compara niveles de entrada contra coste de PMI y cuota mensual — encuentra el nivel donde la jugada cambia de signo.',
            },
          },
        ],
      },
      {
        heading: '5. Alquilar vs comprar: encuentra tu año de cruce',
        blocks: [
          'Comprar adelanta una fricción enorme: un 2–5 % de gastos de cierre al comprar y ~5–6 % de comisión al vender. La amortización añade agravio: en los primeros 5 años de un préstamo a 30, apenas el 15 % de tus pagos construye patrimonio. Vender antes del cruce es pagar dinero de inquilino *y* la fricción de transacción.',
          'En la mayoría de las áreas metropolitanas de EE. UU. las curvas acumuladas de alquiler y compra cruzan hacia el **año 5–8**; en mercados baratos, en el año 2–3. El cruce se mueve con tres palancas: ratio precio/alquiler, tipos hipotecarios y cuánto te quedas de verdad. Corre las curvas antes de enamorarte de un anuncio.',
          {
            card: {
              title: 'Calculadora alquilar vs comprar',
              href: '/tools/rent-vs-buy-calculator/',
              desc: 'Coste acumulado de alquilar vs coste neto de comprar, año a año — el punto de cruce responde con honestidad.',
            },
          },
        ],
      },
      {
        heading: 'La lista de cinco minutos antes de firmar',
        blocks: [
          { list: [
            'Calcula el **PITI completo**, no el P&I del anuncio — si la cifra del banco queda un 25 %+ por debajo de la tuya, faltan capas de escrow.',
            'Abre la **tabla de amortización** y mira el mes 1: la proporción de intereses te hará respetar los pagos extra.',
            'Prueba **+$100/+$300/+$500 al mes** y elige el nivel sostenible — la constancia vence a la heroicidad.',
            'Contrasta el **año de cruce** con tu plan realista de permanencia, no con el optimista.',
            'Verifica que cada cálculo corre en tu navegador sin registro — el importe de tu préstamo no es dato de nadie más.',
          ] },
        ],
      },
    ],
  },
  de: {
    lead: 'Eine 30-jährige Hypothek ist der größte Tilgungsplan, den die meisten je unterschreiben — und die Bank nennt nur eine Monatsrate. Dieser Leitfaden öffnet die Blackbox: die Ratenformel, der volle PITI-Stapel und die Sondertilgungs-Mathematik, die leise fünfstellig spart.',
    sections: [
      {
        heading: '1. Tilgung: gleiche Rate, jeden Monat andere Anatomie',
        blocks: [
          'Eine Festzins-Hypothek hält die Monatsrate 30 Jahre konstant, aber die *Zusammensetzung* dieser Rate ändert sich jeden Monat. Zinsen fallen immer auf den Restsaldo an — frühe Raten sind fast reine Zinsen, späte fast reine Tilgung.',
          { code: CODE_AMORTIZATION },
          'Bei einem **$360 000-Darlehen zu 6,8 % auf 30 Jahre** liegt die Rate bei **$2 347**. Monat eins teilt sie in **$2 040 Zinsen und $307 Tilgung** — 87 % bedienen die Schuld, 13 % bauen Vermögen auf. Die Tilgung übersteigt 50 % erst um **Rate 239 (Jahr 19,9)**. Das ist keine Banken-Verschwörung, sondern mathematische Folge einer konstanten Rate auf sinkendem Saldo.',
          {
            card: {
              title: 'Tilgungsplan-Generator',
              href: '/tools/amortization-table-generator/',
              desc: 'Der komplette Ratenplan mit Restschuld, als CSV exportierbar — beobachte den Zins-/Tilgungs-Kreuzungspunkt mit deinen eigenen Zahlen.',
            },
          },
        ],
      },
      {
        heading: '2. PITI: Deine echte Rate hat vier Schichten',
        blocks: [
          'Banken werben mit Tilgung + Zins (P&I). Dein Konto erlebt **PITI**:',
          { list: [
            '**Tilgung + Zinsen** — die amortisierte Rate aus der Formel oben.',
            '**Steuern** — Grundsteuer, typisch 0,5–2,5 % des Immobilienwerts pro Jahr je nach Bundesstaat, monatlich per Treuhandkonto.',
            '**Versicherung** — Wohngebäudeversicherung, grob $1 500–$3 500/Jahr für ein medianes Haus, ebenfalls treuhänderisch.',
            '**PMI** — private Hypothekenversicherung, 0,5–1 % des Darlehens pro Jahr, fällig bei Eigenkapital unter 20 %.',
          ] },
          'Bei einem $400 000-Kauf mit 10 % Eigenkapital liegt P&I bei $2 347, PITI dagegen nahe **$3 050** — die Treuhand-Schichten addieren rund 30 %. Erschwinglichkeitsrechner, die Steuern, Versicherung und PMI ignorieren, sind nicht optimistisch — sie sind falsch.',
          {
            card: {
              title: 'Hypothekenrechner (volles PITI)',
              href: '/tools/mortgage-calculator/',
              desc: 'P&I plus Steuern, Versicherung und automatischem PMI unter 20 % Eigenkapital — die Zahl, die dein Konto wirklich sieht.',
            },
          },
        ],
      },
      {
        heading: '3. Sondertilgung: der fünfstellige Hebel im Tilgungsplan',
        blocks: [
          'Jeder zusätzliche Dollar fließt **direkt in die Tilgung**, und alle künftigen Zinsen berechnen sich auf den kleineren Saldo. Der Effekt zinst sich nach vorn: Bei jenem $360 000-Darlehen zu 6,8 % kürzen **$200/Monat extra** die Laufzeit um rund **6 Jahre** und sparen etwa **$117 000 Zinsen**. Selbst eine einmalige $10 000-Sondertilgung in Jahr 2 spart noch ~$52 000.',
          'Zwei Disziplinen schlagen den Betrag. Erstens: **Früh schlägt groß** — eine Sondertilgung in Jahr 2 spart um Größenordnungen mehr als dieselbe in Jahr 20, weil sie Jahrzehnte künftiger Zinsen killt. Zweitens: **Zweckbindung angeben** — „apply to principal“ auf die Überweisung schreiben, sonst bucht der Servicer sie als nächste Monatsrate: gleiches Geld, null Zinsvorteil.',
          'Der Zwei-Wochen-Trick nutzt dasselbe Prinzip: 26 Halbraten ergeben 13 Monatsraten pro Jahr — eine volle Extrarate schleicht sich jährlich ein, ganz ohne Budget-Schmerz.',
          {
            card: {
              title: 'Hypothekenrechner (Sondertilgung)',
              href: '/tools/mortgage-calculator/',
              desc: 'Stelle die monatliche Sondertilgung ein und sieh Tilgungskurve und Zinsersparnis wandern — das $200/Monat-Szenario oben mit deinen Zahlen.',
            },
          },
        ],
      },
      {
        heading: '4. Eigenkapital: 20 % sind eine PMI-Schwelle, keine Tugend',
        blocks: [
          'Die 20-%-Regel existiert, weil PMI bei 78–80 % Loan-to-Value entfällt. Aber jahrelang auf 20 % zu sparen, während Preise und Mieten steigen, kostet ebenfalls. Der ehrliche Vergleich rechnet beide Pfade: heute 5 % Eigenkapital mit PMI versus 20 % in drei Jahren plus drei weitere Jahre Miete.',
          'PMI kostet typisch **0,5–1 % des Darlehens pro Jahr** ($150–$300/Monat bei $360 000) und — der übersehene Teil — endet automatisch bei 78 % LTV im ursprünglichen Plan und kann ab 80 % beantragt werden. Vier Jahre PMI gegen vier Jahre Miete zu tauschen ist häufig das bessere Geschäft.',
          {
            card: {
              title: 'Eigenkapitalrechner',
              href: '/tools/down-payment-calculator/',
              desc: 'Vergleicht Eigenkapital-Stufen gegen PMI-Kosten und Monatsrate — finde die Stufe, an der der Tausch kippt.',
            },
          },
        ],
      },
      {
        heading: '5. Mieten oder kaufen: Finde dein Schnittpunkt-Jahr',
        blocks: [
          'Kaufen lädt enorme Reibung vor: 2–5 % Erwerbsnebenkosten, ~5–6 % Maklerprovision beim Verkauf. Die Tilgungsstruktur verschärft es — in den ersten 5 Jahren eines 30-Jahres-Kredits werden kaum 15 % deiner Raten zu Vermögen. Wer vor dem Schnittpunkt verkauft, zahlt Mieter-Geld *und* Transaktionsreibung.',
          'In den meisten US-Metropolen kreuzen sich die kumulierten Miet-/Kaufkurven um **Jahr 5–8**, in günstigen Märkten bei Jahr 2–3. Der Schnittpunkt hängt an drei Hebeln: Preis-Miet-Verhältnis, Hypothekenzins und deiner tatsächlichen Wohndauer. Rechne die Kurven, bevor du dich in ein Inserat verliebst.',
          {
            card: {
              title: 'Mieten-vs-Kaufen-Rechner',
              href: '/tools/rent-vs-buy-calculator/',
              desc: 'Kumulierte Mietkosten vs. Netto-Eigentumskosten, Jahr für Jahr geplottet — der Kreuzungspunkt antwortet ehrlich.',
            },
          },
        ],
      },
      {
        heading: 'Die Fünf-Minuten-Checkliste vor der Unterschrift',
        blocks: [
          { list: [
            'Rechne **volles PITI**, nicht das beworbene P&I — liegt die Bankzahl 25 %+ unter deiner, fehlen Treuhand-Schichten.',
            'Öffne den **Tilgungsplan** und sieh dir Monat 1 an: Der Zinsanteil lehrt Respekt vor Sondertilgungen.',
            'Teste **+$100/+$300/+$500 extra pro Monat** und wähle die Stufe, die du durchhältst — Beständigkeit schlägt Heldentaten.',
            'Halte das **Schnittpunkt-Jahr** gegen deinen realistischen Wohnplan, nicht gegen den optimistischen.',
            'Vergewissere dich, dass jede Berechnung lokal im Browser läuft — deine Darlehenssumme ist niemandes Daten sonst.',
          ] },
        ],
      },
    ],
  },
}
