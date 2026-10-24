/**
 * 《HYSA vs. CD vs. Money Market: The Optimal Cash Allocation Strategy for 2026》
 * Pillar 集群 #2(现金管理,2026-09-05)。
 * 内链:hysa-calculator / cd-calculator / compound-interest-calculator /
 * inflation-calculator。
 */

import type { LocalizedArticle } from './blog-articles'

const CODE_APY = `// APR vs APY — the compounding conversion
APY = (1 + r/n)^n - 1
// r = nominal annual rate (APR), n = compounding periods/year
//
// 4.40% APR daily:   (1 + 0.044/365)^365 - 1 = 4.498% APY
// 4.40% APR monthly: (1 + 0.044/12)^12  - 1 = 4.490% APY`

// ── 标题类字段英文原值(articleTitle 三语已回填;breadcrumbTitle 暂以 en 值占位)──
const EN_TITLE = 'HYSA vs. CD vs. Money Market: The Optimal Cash Allocation Strategy for 2026'
const EN_CRUMB_TITLE = 'HYSA vs CD Cash Strategy'

export const cashAllocationGuideArticle: LocalizedArticle = {
  en: {
    articleTitle: { en: EN_TITLE, zh: 'HYSA vs. CD vs. 货币基金:2026 年的最优现金分层策略', es: 'HYSA vs. CD vs. mercado monetario: la estrategia óptima de asignación de efectivo para 2026', de: 'HYSA vs. CD vs. Geldmarktfonds: die optimale Cash-Allokationsstrategie für 2026' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE, zh: EN_CRUMB_TITLE, es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 5,
    lead: 'Cash is no longer the idle zero-yield asset it was in 2015 — but only if you park it in the right vehicle. HYSA, CDs, and money market funds price the same dollar three different ways. Here is the 2026 allocation logic, with the math to back each rung.',
    sections: [
      {
        heading: '1. One Dollar, Three Prices',
        blocks: [
          'All three vehicles are safe, boring, and federally insured or near-equivalent. What differs is the trade you make:',
          { list: [
            '**HYSA (high-yield savings)** — variable rate, full liquidity, rate floats with the Fed. You trade rate certainty for access.',
            '**CD (certificate of deposit)** — fixed rate, locked term, early withdrawal penalty of 3–12 months of interest. You trade access for certainty.',
            '**Money market fund** — variable yield tracking short-term Treasuries, check-writing on some, not FDIC-insured but holding government paper. You trade a guarantee for yield.',
          ] },
          'The mistake is treating them as competitors. They are *layers*: each answers a different question about when you need the money.',
        ],
      },
      {
        heading: '2. APY vs APR: Read the Number That Compounds',
        blocks: [
          'Banks advertise whichever number is bigger for the product. APR is the flat annual rate; APY folds in compounding. At 4.40% nominal, daily compounding pays 4.498% — a gap that funds a nice dinner every year on a $50,000 balance, for zero extra risk.',
          { code: CODE_APY },
          'Two accounts quoting 4.4% are not equal if one compounds daily and the other monthly. Always convert to APY before comparing, and always compare APY to APY.',
          {
            card: {
              title: 'APY Calculator',
              href: '/tools/apy-calculator/',
              desc: 'Convert APR to APY at any compounding frequency — run this section\u2019s exact conversion on the rate your bank quotes.',
            },
          },
          {
            card: {
              title: 'Compound Interest Calculator',
              href: '/tools/compound-interest-calculator/',
              desc: 'See compounding frequency change the outcome on your actual balance — contributions vs growth, year by year.',
            },
          },
        ],
      },
      {
        heading: '3. The HYSA Layer: Emergency Money That Works',
        blocks: [
          'Your emergency fund has one job: be there in full, this week. That disqualifies stocks, locks, and penalties — which is exactly what a HYSA offers, plus 4%+ APY while it waits. A $30,000 emergency fund at 4.4% earns **$1,320/year**; at a legacy bank\u2019s 0.01%, it earns **$3**. The switch takes an afternoon.',
          'The catch is that HYSA rates are *variable*: when the Fed cuts, your APY follows within weeks. Treat any projection as a snapshot, re-run it after each Fed meeting, and never build a multi-year plan on today\u2019s HYSA rate.',
          {
            card: {
              title: 'HYSA Calculator',
              href: '/tools/hysa-calculator/',
              desc: 'Project your savings with monthly deposits at any APY — and see what a rate cut actually costs you.',
            },
          },
          {
            card: {
              title: 'Savings Goal Calculator',
              href: '/tools/savings-goal-calculator/',
              desc: 'Still building the fund? Find the monthly deposit that hits your target by a fixed date.',
            },
          },
        ],
      },
      {
        heading: '4. The CD Layer: Sell Liquidity You Don\u2019t Need',
        blocks: [
          'A CD is a contract: the bank pays you a fixed rate for surrendering access. That makes CDs the right vehicle for money with a *known date* — a house down payment in 18 months, tuition in 3 years. You are not "locking money away"; you are selling an option you were never going to exercise.',
          'The professional structure is the **CD ladder**: split $40,000 into four $10,000 CDs maturing at 1, 2, 3, and 4 years. Every year one rung matures — you spend it or roll it into a new 4-year rung at the top. After the first cycle you hold only long-term rates, yet a quarter of the money frees up every 12 months. The ladder converts the liquidity penalty into a schedule.',
          'Know the exit price before entering: early withdrawal penalties run 3–12 months of interest. On a 2-year CD broken at month 6, a 6-month penalty can eat the entire earned yield. Never ladder money whose date is a guess.',
          {
            card: {
              title: 'CD Calculator',
              href: '/tools/cd-calculator/',
              desc: 'Fixed-rate growth with compounding — model each ladder rung before you commit the cash.',
            },
          },
        ],
      },
      {
        heading: '5. The Silent Tax: Your Real Rate Is Nominal Minus Inflation',
        blocks: [
          'A 4.5% APY in a 3% inflation year is a **1.5% real yield**. That is still respectable for cash — but it reframes the decision: cash\u2019s job is *optionality and stability*, not growth. Every dollar beyond your emergency fund and dated expenses should justify why it is not in a growth asset.',
          'Run your own numbers: what did your savings buy last year versus this year? The gap between your APY and CPI is the only yield that actually compounds your purchasing power.',
          {
            card: {
              title: 'Inflation Calculator',
              href: '/tools/inflation-calculator/',
              desc: 'Translate any past amount into today\u2019s dollars — and see what your "safe" cash really returned.',
            },
          },
        ],
      },
      {
        heading: 'The 2026 Cash Stack, Bottom to Top',
        blocks: [
          { list: [
            '**Checking buffer** — one month of expenses, yield irrelevant, friction zero.',
            '**HYSA** — 3–6 months of expenses (the emergency fund) plus any money needed within ~12 months.',
            '**CD ladder** — dated goals 1–5 years out: down payment, tuition, sabbatical.',
            '**Money market fund** — the parking lot for cash between decisions; yield over guarantees.',
            '**Everything else** — if it has no date and no emergency purpose, ask why it is cash at all.',
          ] },
          'Total the layers and the blended yield on a $60,000 cash position moves from ~0.5% at a legacy bank to ~4.3% structured — roughly **$2,300 more per year**, same risk class, one weekend of paperwork.',
        ],
      },
    ],
  },
  zh: {
    articleTitle: { en: EN_TITLE, zh: 'HYSA vs. CD vs. 货币基金:2026 年的最优现金分层策略', es: 'HYSA vs. CD vs. mercado monetario: la estrategia óptima de asignación de efectivo para 2026', de: 'HYSA vs. CD vs. Geldmarktfonds: die optimale Cash-Allokationsstrategie für 2026' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE, zh: EN_CRUMB_TITLE, es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 5,
    lead: '现金不再是 2015 年那种零收益的闲置资产——前提是停对地方。HYSA、CD 存单、货币基金把同一块钱定出三种价格。本文给出 2026 年的现金分层逻辑,每一层都配数学依据。',
    sections: [
      {
        heading: '1. 同一块钱,三种定价',
        blocks: [
          '三种工具都安全、无聊、且受存款保险(或近似)保护。真正不同的是你做的那笔交易:',
          { list: [
            '**HYSA 高息储蓄**——浮动利率、随存随取,利率跟着央行走。你拿利率确定性换流动性。',
            '**CD 定期存单**——固定利率、锁定期限,提前支取罚 3–12 个月利息。你拿流动性换确定性。',
            '**货币市场基金**——收益跟踪短期国债,部分支持开支票,不受 FDIC 保险但持有政府债券。你拿担保换收益。',
          ] },
          '错误在于把它们当竞争对手。它们是*分层*:各自回答"这笔钱什么时候要用"的不同答案。',
        ],
      },
      {
        heading: '2. APY 与 APR:只比那个含复利的数',
        blocks: [
          '银行对哪个产品就报哪个显大的数。APR 是名义年利率,APY 把复利折进去。名义 4.40% 按日复利实际是 4.498%——5 万美元余额,这点差距每年白赚一顿好饭,零额外风险。',
          { code: CODE_APY },
          '两个都标 4.4% 的账户,一个日复利一个月复利,实际并不相等。比较之前一律换算成 APY,且只拿 APY 比 APY。',
          {
            card: {
              title: 'APY 计算器',
              href: '/tools/apy-calculator/',
              desc: '任意计息频率下把 APR 换算成 APY——用你银行报的利率跑一遍本节这步换算。',
            },
          },
          {
            card: {
              title: '复利计算器',
              href: '/tools/compound-interest-calculator/',
              desc: '用你的真实余额看复利频率如何改变结局——本金投入与利息增长逐年对照。',
            },
          },
        ],
      },
      {
        heading: '3. HYSA 层:会干活的应急金',
        blocks: [
          '应急基金只有一个职责:本周内全额可用。这就排除了股票、锁定和罚金——恰好是 HYSA 的形态,等待期间还付 4%+ 的 APY。3 万美元应急金按 4.4% 每年赚 **$1,320**;放在传统大行的 0.01%,一年 **$3**。换银行只要一个下午。',
          '代价是 HYSA 利率*浮动*:央行降息,你的 APY 几周内跟随。任何预测都只是快照,每次议息后重跑一遍,绝不要用今天的 HYSA 利率做多年规划。',
          {
            card: {
              title: 'HYSA 计算器',
              href: '/tools/hysa-calculator/',
              desc: '任意 APY + 每月定存的储蓄推演——并看看降息一次实际让你少赚多少。',
            },
          },
          {
            card: {
              title: '储蓄目标计算器',
              href: '/tools/savings-goal-calculator/',
              desc: '应急金还没攒够?算出按固定日期达标所需的每月存款。',
            },
          },
        ],
      },
      {
        heading: '4. CD 层:卖出你用不到的流动性',
        blocks: [
          'CD 是一份合同:银行付你固定利率,你交出访问权。它因此天然适合*日期确定*的钱——18 个月后的首付、3 年后的学费。你不是"把钱锁死",而是在卖出一个你本来就不会行使的期权。',
          '专业结构是 **CD 阶梯**:4 万美元拆成 4 笔 1 万,分别存 1、2、3、4 年期。每年有一档到期——要么用掉,要么滚成新的 4 年期放在顶端。首轮之后,你手里全是长期利率,但每 12 个月都有四分之一解禁。阶梯把流动性罚金变成了一张时间表。',
          '进场前先看清退出价:提前支取罚金为 3–12 个月利息。2 年期 CD 存到第 6 个月提前支取,6 个月罚金可能吃掉全部已赚利息。日期不确定的钱,永远不要进阶梯。',
          {
            card: {
              title: 'CD 存单计算器',
              href: '/tools/cd-calculator/',
              desc: '固定利率复利增长——承诺现金之前,先建模试算每一级阶梯。',
            },
          },
        ],
      },
      {
        heading: '5. 隐形的税:实际利率 = 名义利率 − 通胀',
        blocks: [
          '通胀 3% 的年份里,4.5% 的 APY 只是 **1.5% 的实际收益**。对现金而言依然体面——但它重塑了决策:现金的职责是*选择权与稳定*,不是增长。超出应急金和既定开支的每一块现金,都应该回答:为什么不放在增值资产里?',
          '自己算一遍:你的存款去年能买什么,今年能买什么?APY 与 CPI 之间的差,才是真正复利你购买力的收益率。',
          {
            card: {
              title: '通胀计算器',
              href: '/tools/inflation-calculator/',
              desc: '把任何历史金额折算成今日购买力——看看你"安全"的现金真实回报是多少。',
            },
          },
        ],
      },
      {
        heading: '2026 现金堆栈,自下而上',
        blocks: [
          { list: [
            '**活期缓冲**——一个月开销,收益无关紧要,摩擦为零。',
            '**HYSA**——3–6 个月开销(应急金),加上约 12 个月内要用的钱。',
            '**CD 阶梯**——1–5 年后有明确日期的目标:首付、学费、间隔年。',
            '**货币基金**——决策之间的停车场:要收益,不要担保。',
            '**其余全部**——没日期、非应急的钱,先回答"为什么还是现金"。',
          ] },
          '把各层加总:6 万美元现金,从传统大行的约 0.5% 混合收益变成结构化的约 4.3%——每年多拿约 **$2,300**,风险等级不变,只需一个周末的手续。',
        ],
      },
    ],
  },
  es: {
    articleTitle: { en: EN_TITLE, zh: 'HYSA vs. CD vs. 货币基金:2026 年的最优现金分层策略', es: 'HYSA vs. CD vs. mercado monetario: la estrategia óptima de asignación de efectivo para 2026', de: 'HYSA vs. CD vs. Geldmarktfonds: die optimale Cash-Allokationsstrategie für 2026' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE, zh: EN_CRUMB_TITLE, es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 5,
    lead: 'El efectivo ya no es ese activo ocioso de rendimiento cero de 2015 — pero solo si lo aparcas en el vehículo correcto. HYSA, CD y fondos de mercado monetario ponen tres precios al mismo dólar. Esta es la lógica de asignación para 2026, con la matemática de cada peldaño.',
    sections: [
      {
        heading: '1. Un dólar, tres precios',
        blocks: [
          'Los tres vehículos son seguros, aburridos y con seguro federal o casi equivalente. Lo que cambia es el trato que haces:',
          { list: [
            '**HYSA (ahorro de alto rendimiento)** — tipo variable, liquidez total, sigue a la Fed. Cambias certeza de tipo por acceso.',
            '**CD (certificado de depósito)** — tipo fijo, plazo cerrado, penalización de 3–12 meses de intereses por retirada anticipada. Cambias acceso por certeza.',
            '**Fondo de mercado monetario** — rendimiento variable ligado a los Treasuries a corto, algunos con cheques, sin FDIC pero con papel gubernamental. Cambias garantía por rendimiento.',
          ] },
          'El error es tratarlos como competidores. Son *capas*: cada una responde a una pregunta distinta sobre cuándo necesitas el dinero.',
        ],
      },
      {
        heading: '2. APY vs APR: lee el número que capitaliza',
        blocks: [
          'Los bancos anuncian el número más grande del producto. El APR es el tipo nominal anual; el APY incorpora la capitalización. Al 4,40 % nominal, la capitalización diaria paga 4,498 % — una diferencia que financia una buena cena al año sobre $50 000, con riesgo cero adicional.',
          { code: CODE_APY },
          'Dos cuentas al 4,4 % no son iguales si una capitaliza a diario y otra al mes. Convierte siempre a APY antes de comparar, y compara APY con APY.',
          {
            card: {
              title: 'Calculadora de APY',
              href: '/tools/apy-calculator/',
              desc: 'Convierte APR a APY con cualquier frecuencia de capitalización — aplica la conversión de esta sección al tipo que te cotiza tu banco.',
            },
          },
          {
            card: {
              title: 'Calculadora de interés compuesto',
              href: '/tools/compound-interest-calculator/',
              desc: 'Mira cómo la frecuencia de capitalización cambia el resultado sobre tu saldo real — aportaciones vs crecimiento, año a año.',
            },
          },
        ],
      },
      {
        heading: '3. La capa HYSA: dinero de emergencia que trabaja',
        blocks: [
          'Tu fondo de emergencia tiene un solo trabajo: estar íntegro esta semana. Eso descalifica acciones, bloqueos y penalizaciones — exactamente lo que ofrece un HYSA, con un APY de más del 4 % mientras espera. Un fondo de $30 000 al 4,4 % gana **$1 320/año**; al 0,01 % de un banco tradicional, **$3**. El cambio lleva una tarde.',
          'La trampa: el tipo del HYSA es *variable* — si la Fed recorta, tu APY la sigue en semanas. Trata cualquier proyección como una foto, recalcula tras cada reunión de la Fed y nunca construyas un plan plurianual sobre el tipo de hoy.',
          {
            card: {
              title: 'Calculadora HYSA',
              href: '/tools/hysa-calculator/',
              desc: 'Proyecta tu ahorro con depósitos mensuales a cualquier APY — y mira lo que de verdad cuesta una bajada de tipos.',
            },
          },
          {
            card: {
              title: 'Calculadora de meta de ahorro',
              href: '/tools/savings-goal-calculator/',
              desc: '¿Aún construyendo el fondo? Calcula el depósito mensual que alcanza tu meta en una fecha fija.',
            },
          },
        ],
      },
      {
        heading: '4. La capa CD: vende liquidez que no necesitas',
        blocks: [
          'Un CD es un contrato: el banco te paga un tipo fijo por renunciar al acceso. Por eso encaja con dinero de *fecha conocida* — la entrada de una casa en 18 meses, la universidad en 3 años. No estás «encarcelando» el dinero: vendes una opción que nunca ibas a ejercer.',
          'La estructura profesional es la **escalera de CDs**: divide $40 000 en cuatro CDs de $10 000 a 1, 2, 3 y 4 años. Cada año vence un peldaño — lo gastas o lo renuevas a 4 años en la cima. Tras el primer ciclo todo tu dinero gana tipos de largo plazo, y un cuarto se libera cada 12 meses. La escalera convierte la penalización de liquidez en un calendario.',
          'Conoce el precio de salida antes de entrar: las penalizaciones van de 3 a 12 meses de intereses. Romper un CD a 2 años en el mes 6 con penalización de 6 meses puede comerse todo lo ganado. Nunca metas en la escalera dinero cuya fecha sea una suposición.',
          {
            card: {
              title: 'Calculadora de CD',
              href: '/tools/cd-calculator/',
              desc: 'Crecimiento a tipo fijo con capitalización — modela cada peldaño antes de comprometer el efectivo.',
            },
          },
        ],
      },
      {
        heading: '5. El impuesto silencioso: tu tipo real es el nominal menos inflación',
        blocks: [
          'Un 4,5 % de APY en un año de 3 % de inflación es un **rendimiento real del 1,5 %**. Sigue siendo respetable para efectivo — pero reencuadra la decisión: el trabajo del efectivo es *opcionalidad y estabilidad*, no crecimiento. Cada dólar más allá del fondo de emergencia y los gastos con fecha debe justificar por qué no está en un activo de crecimiento.',
          'Haz tus números: ¿qué compraban tus ahorros el año pasado frente a este? La brecha entre tu APY y el IPC es el único rendimiento que capitaliza tu poder de compra.',
          {
            card: {
              title: 'Calculadora de inflación',
              href: '/tools/inflation-calculator/',
              desc: 'Traduce cualquier cantidad del pasado a dólares de hoy — y mira lo que rindió de verdad tu efectivo «seguro».',
            },
          },
        ],
      },
      {
        heading: 'La pila de efectivo 2026, de abajo arriba',
        blocks: [
          { list: [
            '**Colchón en la corriente** — un mes de gastos; el rendimiento da igual, la fricción cero.',
            '**HYSA** — 3–6 meses de gastos (el fondo de emergencia) más lo necesario en ~12 meses.',
            '**Escalera de CDs** — metas con fecha a 1–5 años: entrada, universidad, año sabático.',
            '**Fondo monetario** — el aparcamiento entre decisiones: rendimiento sobre garantías.',
            '**Todo lo demás** — si no tiene fecha ni propósito de emergencia, pregúntate por qué sigue siendo efectivo.',
          ] },
          'Suma las capas: una posición de $60 000 pasa de ~0,5 % combinado en un banco tradicional a ~4,3 % estructurado — unos **$2 300 más al año**, misma clase de riesgo, un fin de semana de papeleo.',
        ],
      },
    ],
  },
  de: {
    articleTitle: { en: EN_TITLE, zh: 'HYSA vs. CD vs. 货币基金:2026 年的最优现金分层策略', es: 'HYSA vs. CD vs. mercado monetario: la estrategia óptima de asignación de efectivo para 2026', de: 'HYSA vs. CD vs. Geldmarktfonds: die optimale Cash-Allokationsstrategie für 2026' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE, zh: EN_CRUMB_TITLE, es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 5,
    lead: 'Bargeld ist nicht mehr der renditelose Parkplatz von 2015 — aber nur, wenn es im richtigen Vehikel liegt. HYSA, CDs und Geldmarktfonds bepreisen denselben Dollar dreifach unterschiedlich. Hier die Allokationslogik für 2026, mit der Mathematik hinter jeder Stufe.',
    sections: [
      {
        heading: '1. Ein Dollar, drei Preise',
        blocks: [
          'Alle drei Vehikel sind sicher, langweilig und staatlich abgesichert oder nahe dran. Was sich unterscheidet, ist der Tausch:',
          { list: [
            '**HYSA (Hochzins-Sparen)** — variabler Zins, volle Liquidität, folgt der Notenbank. Du tauschst Zinssicherheit gegen Zugriff.',
            '**CD (Festgeld)** — Festzins, gebundene Laufzeit, Vorfälligkeitsstrafe von 3–12 Monatszinsen. Du tauschst Zugriff gegen Sicherheit.',
            '**Geldmarktfonds** — variabler Ertrag entlang kurzlaufender Staatsanleihen, teils mit Scheckrecht, ohne Einlagensicherung, aber mit Staatspapieren. Du tauschst Garantie gegen Ertrag.',
          ] },
          'Der Fehler ist, sie als Konkurrenten zu sehen. Sie sind *Schichten*: Jede beantwortet eine andere Frage danach, wann du das Geld brauchst.',
        ],
      },
      {
        heading: '2. APY vs. APR: Lies die Zahl, die sich verzinst',
        blocks: [
          'Banken bewerben die jeweils größere Zahl. APR ist der Nominalzins, APY rechnet die Verzinsung ein. Bei 4,40 % nominal zahlt tägliche Verzinsung 4,498 % — die Differenz finanziert auf $50 000 jedes Jahr ein gutes Abendessen, ohne jedes Mehr-Risiko.',
          { code: CODE_APY },
          'Zwei Konten mit 4,4 % sind nicht gleich, wenn eines täglich und eines monatlich verzinst. Vor jedem Vergleich in APY umrechnen — und nur APY mit APY vergleichen.',
          {
            card: {
              title: 'APY-Rechner',
              href: '/tools/apy-calculator/',
              desc: 'Rechne APR bei jeder Zinsperiode in APY um — führe die Umrechnung aus dieser Sektion mit dem Satz deiner Bank durch.',
            },
          },
          {
            card: {
              title: 'Zinseszins-Rechner',
              href: '/tools/compound-interest-calculator/',
              desc: 'Sieh, wie die Verzinsungsfrequenz das Ergebnis auf deinem echten Saldo verändert — Einzahlungen vs. Wachstum, Jahr für Jahr.',
            },
          },
        ],
      },
      {
        heading: '3. Die HYSA-Schicht: Notgeld, das arbeitet',
        blocks: [
          'Dein Notfallfonds hat genau einen Job: diese Woche voll da sein. Das disqualifiziert Aktien, Bindungen und Strafen — exakt das Profil eines HYSA, das wartend 4 %+ APY zahlt. Ein $30 000-Fonds bei 4,4 % bringt **$1 320/Jahr**; bei 0,01 % einer Filialbank **$3**. Der Wechsel kostet einen Nachmittag.',
          'Der Haken: HYSA-Zinsen sind *variabel* — senkt die Notenbank, folgt dein APY binnen Wochen. Jede Prognose ist ein Schnappschuss; rechne nach jeder Zinssitzung neu und baue nie einen Mehrjahresplan auf dem heutigen HYSA-Satz.',
          {
            card: {
              title: 'HYSA-Rechner',
              href: '/tools/hysa-calculator/',
              desc: 'Projiziere dein Sparguthaben mit Monatsraten bei beliebigem APY — und sieh, was eine Zinssenkung wirklich kostet.',
            },
          },
          {
            card: {
              title: 'Sparziel-Rechner',
              href: '/tools/savings-goal-calculator/',
              desc: 'Notfallfonds noch im Aufbau? Finde die Monatsrate, die dein Ziel zum Stichtag erreicht.',
            },
          },
        ],
      },
      {
        heading: '4. Die CD-Schicht: Verkaufe Liquidität, die du nicht brauchst',
        blocks: [
          'Ein CD ist ein Vertrag: Die Bank zahlt einen Festzins dafür, dass du auf Zugriff verzichtest. Damit passt er zu Geld mit *bekanntem Datum* — Anzahlung in 18 Monaten, Studiengebühr in 3 Jahren. Du „sperrst“ kein Geld weg; du verkaufst eine Option, die du nie gezogen hättest.',
          'Die Profi-Struktur ist die **CD-Leiter**: $40 000 in vier $10 000-CDs mit 1, 2, 3 und 4 Jahren aufteilen. Jedes Jahr läuft eine Sprosse aus — ausgeben oder als neue 4-Jahres-Sprosse oben anlegen. Nach dem ersten Zyklus hältst du nur Langfrist-Zinsen, und doch wird jährlich ein Viertel frei. Die Leiter verwandelt die Liquiditätsstrafe in einen Kalender.',
          'Kenne den Ausstiegspreis vor dem Einstieg: Vorfälligkeitsstrafen liegen bei 3–12 Monatszinsen. Ein 2-Jahres-CD, der in Monat 6 vorzeitig aufgelöst wird, kann mit einer Strafe von 6 Monatszinsen den gesamten Ertrag verlieren. Geld mit geratenem Datum gehört nie in die Leiter.',
          {
            card: {
              title: 'Festgeld-Rechner',
              href: '/tools/cd-calculator/',
              desc: 'Festzins-Wachstum mit Zinseszins — modelliere jede Leitersprosse, bevor du das Geld bindest.',
            },
          },
        ],
      },
      {
        heading: '5. Die stille Steuer: Realzins = Nominalzins minus Inflation',
        blocks: [
          'Ein 4,5-%-APY in einem 3-%-Inflationsjahr ist ein **Realertrag von 1,5 %**. Für Cash respektabel — aber es rahmt die Entscheidung neu: Cashs Aufgabe ist *Optionalität und Stabilität*, nicht Wachstum. Jeder Dollar jenseits von Notfallfonds und terminierten Ausgaben muss begründen, warum er nicht in einem Wachstumsasset liegt.',
          'Rechne selbst: Was konnten sich deine Ersparnisse letztes Jahr leisten, was dieses? Die Lücke zwischen deinem APY und der Inflationsrate ist der einzige Ertrag, der deine Kaufkraft wirklich verzinst.',
          {
            card: {
              title: 'Inflationsrechner',
              href: '/tools/inflation-calculator/',
              desc: 'Übersetze jeden früheren Betrag in heutige Kaufkraft — und sieh, was dein „sicheres“ Cash wirklich brachte.',
            },
          },
        ],
      },
      {
        heading: 'Der Cash-Stack 2026, von unten nach oben',
        blocks: [
          { list: [
            '**Girokonto-Puffer** — ein Monat Ausgaben; Ertrag egal, Reibung null.',
            '**HYSA** — 3–6 Monatsausgaben (Notfallfonds) plus alles, was in ~12 Monaten fällig wird.',
            '**CD-Leiter** — terminierte Ziele in 1–5 Jahren: Anzahlung, Studium, Sabbatical.',
            '**Geldmarktfonds** — der Parkplatz zwischen Entscheidungen: Ertrag vor Garantie.',
            '**Alles andere** — ohne Datum und ohne Notfallzweck: Warum ist es überhaupt Cash?',
          ] },
          'Alle Schichten summiert: Eine $60 000-Cash-Position steigt von ~0,5 % Mischzins bei der Filialbank auf ~4,3 % strukturiert — rund **$2 300 mehr pro Jahr**, gleiche Risikoklasse, ein Wochenende Papierkram.',
        ],
      },
    ],
  },
}
