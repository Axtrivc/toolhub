/**
 * 《The 2026 FIRE Playbook: Safe Withdrawal Rates, Coast FIRE, and Tax-Advantaged Stacking》
 * Pillar 集群 #3(财务自由,2026-09-05)。
 * 内链:fire-calculator / roth-ira-calculator / retirement-calculator / roi-calculator / compound-interest-calculator。
 */

import type { LocalizedArticle } from './blog-articles'

const CODE_FIRE = `// The FIRE number (4% rule, Trinity Study)
FIRE number  = annual expenses / 0.04 = 25 x expenses
Coast FIRE   = FIRE number / (1 + r)^years_left
// r = real annual return (e.g. 0.05 after inflation)
//
// $40k/yr expenses, age 30, retire at 60, r=5%:
//   FIRE       = $1,000,000
//   Coast FIRE = 1,000,000 / 1.05^30 ≈ $231,000`

// ── 标题类字段英文原值(articleTitle 三语已回填;breadcrumbTitle 暂以 en 值占位)──
const EN_TITLE = 'The 2026 FIRE Playbook: Safe Withdrawal Rates, Coast FIRE, and Tax-Advantaged Stacking'
const EN_CRUMB_TITLE = '2026 FIRE Playbook'

export const firePlaybookArticle: LocalizedArticle = {
  en: {
    articleTitle: { en: EN_TITLE, zh: '2026 FIRE 实战手册:安全提取率、Coast FIRE 与税优账户堆叠', es: 'El playbook FIRE 2026: tasas de retirada seguras, Coast FIRE y el apilado fiscal', de: 'Das FIRE-Playbook 2026: sichere Entnahmeraten, Coast FIRE und steuerbegünstigtes Stacking' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE, zh: EN_CRUMB_TITLE, es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 12,
    lead: 'FIRE is not a vibes-based dream — it is a solvency equation with three variables: your expenses, your portfolio, and time. This playbook covers the 4% rule\u2019s real origin, the Coast FIRE shortcut, and the account-stacking order that decides how much of your number taxes quietly confiscate.',
    sections: [
      {
        heading: '1. The 4% Rule: What the Trinity Study Actually Said',
        blocks: [
          'The 1998 Trinity Study back-tested portfolios of stocks and bonds against every 30-year retirement window since 1926 and asked: what withdrawal rate survived nearly all of them? The answer was roughly **4% of the starting portfolio, adjusted for inflation each year**. Flip it and you get the FIRE number: **annual expenses × 25**.',
          'Two honest caveats. First, 4% was the *historical floor*, not a guarantee — sequence-of-returns risk (a crash in your first retirement years) is what kills plans, not average returns. Second, early retirees face 40–60-year horizons, not 30; many planners now use **3.3–3.5%** for retirements before 45, which raises the number to 28–30× expenses.',
          {
            card: {
              title: 'FIRE Calculator',
              href: '/tools/fire-calculator/',
              desc: 'Your FIRE number from expenses and withdrawal rate — plus the year your current trajectory crosses it.',
            },
          },
        ],
      },
      {
        heading: '2. Coast FIRE: The Milestone That Changes Everything Earlier',
        blocks: [
          'Full FIRE means your portfolio funds you forever starting tomorrow. **Coast FIRE** is weaker and more useful: your invested assets, with *zero further contributions*, grow to your full FIRE number by traditional retirement age. Once you hit Coast, you only need to cover current expenses — you can downshift careers, take the interesting lower-paying job, and let compounding finish the job.',
          { code: CODE_FIRE },
          'At a 5% real return with 30 years of runway, every $1 invested today is $4.32 at retirement — which is why Coast FIRE typically lands at **20–30% of the full number**. It is the highest-leverage checkpoint in the entire FIRE journey.',
          {
            card: {
              title: 'Compound Interest Calculator',
              href: '/tools/compound-interest-calculator/',
              desc: 'Future value with regular contributions at any return rate — the compounding curve that carries a Coast-FIRE portfolio the rest of the way.',
            },
          },
        ],
      },
      {
        heading: '3. The Savings Rate Is the Only Dial That Matters',
        blocks: [
          'FIRE math has a brutal asymmetry: raising your savings rate attacks the problem from both sides — you invest more *and* your target shrinks, because expenses define the FIRE number. At a 10% savings rate, the working horizon is ~50 years; at 25%, about 32; at 50%, roughly **17 years**; at 65%, under 11.',
          'This is why the movement obsesses over the big three — housing, transport, food — rather than lattes. Cutting $1,000/month of recurring expense both adds $12,000/year of investing and removes **$300,000** from your required portfolio.',
        ],
      },
      {
        heading: '4. Tax-Advantaged Stacking: The Order of Operations',
        blocks: [
          'Two people with identical savings end up years apart depending on *which accounts* captured the money. The evidence-based priority queue:',
          { list: [
            '**401(k) up to the employer match** — an instant 100% return; nothing else competes.',
            '**HSA** — triple tax-advantaged (deductible in, tax-free growth, tax-free out for medical); after 65 it behaves like a traditional IRA.',
            '**Roth IRA** — taxed now, never again; decades of compounding arrive tax-free, and contributions (not earnings) can be withdrawn anytime — a stealth early-retirement bridge.',
            '**401(k) to the max** — then taxable brokerage last.',
          ] },
          'The Roth-versus-traditional question reduces to one comparison: your marginal tax rate today versus your expected rate in retirement. High earner in a peak year? Traditional. Early career or planning Roth conversions in low-income FIRE years? Roth.',
          {
            card: {
              title: 'Roth IRA Calculator',
              href: '/tools/roth-ira-calculator/',
              desc: 'Project tax-free growth to retirement — and compare the Roth balance against a taxed account with the same contributions.',
            },
          },
        ],
      },
      {
        heading: '5. Sequence Risk and Guardrails: Retiring Into a Crash',
        blocks: [
          'Two retirees with identical average returns can end in opposite places: the one who crashed in year 1–3 runs out; the one who crashed in year 25 barely notices. Mitigations with real track records: hold **1–2 years of expenses in cash** so you never sell into a bottom; use a **flexible withdrawal rule** (skip the inflation raise after down years); and consider a partial annuity or bond tent for the fragile first decade.',
          {
            card: {
              title: 'Retirement Calculator',
              href: '/tools/retirement-calculator/',
              desc: 'Nest-egg projection with the 4% rule income line — stress-test your plan before it stress-tests you.',
            },
          },
          {
            card: {
              title: 'ROI Calculator',
              href: '/tools/roi-calculator/',
              desc: 'Annualized return on any investment — the honest input every projection above depends on.',
            },
          },
        ],
      },
      {
        heading: 'The First Session, Thirty Minutes',
        blocks: [
          { list: [
            'Compute your real annual expenses — tracking beats guessing by 20–30%.',
            'Get your **FIRE number** (×25, or ×30 if retiring before 45).',
            'Get your **Coast FIRE number** — the checkpoint you will hit shockingly early.',
            'Fix the **account order** before adding a dollar; the queue above is the free lunch.',
            'Re-run the numbers once a year. The plan is a living model, not a tattoo.',
          ] },
        ],
      },
    ],
  },
  zh: {
    articleTitle: { en: EN_TITLE, zh: '2026 FIRE 实战手册:安全提取率、Coast FIRE 与税优账户堆叠', es: 'El playbook FIRE 2026: tasas de retirada seguras, Coast FIRE y el apilado fiscal', de: 'Das FIRE-Playbook 2026: sichere Entnahmeraten, Coast FIRE und steuerbegünstigtes Stacking' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE, zh: EN_CRUMB_TITLE, es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 12,
    lead: 'FIRE 不是玄学梦想——它是一道只有三个变量的偿付方程:开销、组合、时间。本手册讲清 4% 法则的真实出处、Coast FIRE 捷径,以及决定你的目标数字被税收悄悄没收多少的账户堆叠顺序。',
    sections: [
      {
        heading: '1. 4% 法则:Trinity 研究到底说了什么',
        blocks: [
          '1998 年的 Trinity 研究把股票+债券组合放回 1926 年以来每一个 30 年退休窗口回测,问:什么提取率能在几乎所有窗口活下来?答案约为**起始组合的 4%,之后每年随通胀微调**。取倒数就得到 FIRE 数字:**年开销 × 25**。',
          '两个诚实的提醒。其一,4% 是*历史下限*而非保证——杀死计划的是回报序列风险(退休头几年撞上熊市),不是平均回报。其二,提前退休面对的是 40–60 年跨度而非 30 年;如今多数规划师对 45 岁前退休改用 **3.3–3.5%**,目标数字随之升到开销的 28–30 倍。',
          {
            card: {
              title: 'FIRE 计算器',
              href: '/tools/fire-calculator/',
              desc: '由开销与提取率得出你的 FIRE 数字——并算出按当前轨迹哪一年触线。',
            },
          },
        ],
      },
      {
        heading: '2. Coast FIRE:更早改变一切的那个里程碑',
        blocks: [
          '完全 FIRE 意味着组合从明天起永远养你。**Coast FIRE** 更弱也更有用:已投资的资产在*零追加*的情况下,到传统退休年龄能自己滚到完整 FIRE 数字。到达 Coast 之后,你只需覆盖当下开销——可以降速换道、接那份有趣但低薪的工作,让复利替你跑完剩下的路。',
          { code: CODE_FIRE },
          '5% 实际回报、30 年跑道下,今天每投 $1,退休时就是 $4.32——这就是为什么 Coast FIRE 通常只有完整数字的 **20–30%**,是整个 FIRE 旅程中杠杆最高的检查点。',
          {
            card: {
              title: '复利计算器',
              href: '/tools/compound-interest-calculator/',
              desc: '任意回报率下含定投的终值推演——把 Coast 组合送完剩下那段路的复利曲线。',
            },
          },
        ],
      },
      {
        heading: '3. 储蓄率是唯一重要的旋钮',
        blocks: [
          'FIRE 数学有个残酷的不对称性:提高储蓄率同时从两侧进攻——你投得更多,*而且*目标变小,因为开销定义了 FIRE 数字。10% 储蓄率对应约 50 年工龄;25% 约 32 年;50% 约 **17 年**;65% 不到 11 年。',
          '这就是为什么这个运动紧盯住房、交通、食物三大件,而不是拿铁。每月砍掉 $1,000 经常性开销,既一年多投 $12,000,又让所需组合直接减少 **$300,000**。',
        ],
      },
      {
        heading: '4. 税优账户堆叠:操作顺序决定结局',
        blocks: [
          '储蓄相同的两个人,结局可能相差数年,差别只在钱进了*哪个账户*。基于证据的优先级队列:',
          { list: [
            '**401(k) 先拿满雇主匹配**——即时的 100% 回报,没有任何投资能与之竞争。',
            '**HSA 健康储蓄账户**——三重税优(存入抵税、增长免税、医疗支取免税);65 岁后等同传统 IRA。',
            '**Roth IRA**——现在缴税、永不再缴;几十年复利全额免税到账,且本金(非收益)可随时取出——是提前退休的隐形桥梁。',
            '**401(k) 存到上限**——最后才是应税券商账户。',
          ] },
          'Roth 还是 Traditional,归结为一次比较:你今天的边际税率 vs 退休后的预期税率。高收入巅峰年?选 Traditional。职业早期,或计划在 FIRE 低收入年做 Roth 转换?选 Roth。',
          {
            card: {
              title: 'Roth IRA 计算器',
              href: '/tools/roth-ira-calculator/',
              desc: '推演到退休的免税增长——并与同额供款的应税账户并排对比。',
            },
          },
        ],
      },
      {
        heading: '5. 序列风险与护栏:退休即遇熊市怎么办',
        blocks: [
          '平均回报完全相同的两位退休者可能结局相反:第 1–3 年撞熊市的那个会耗尽,第 25 年才撞的那个几乎无感。有实绩的缓释手段:持有 **1–2 年开销的现金**,永不卖在谷底;使用**弹性提取规则**(下跌年暂停通胀上调);脆弱的最初十年可辅以部分年金或债券帐篷(bond tent)。',
          {
            card: {
              title: '退休计算器',
              href: '/tools/retirement-calculator/',
              desc: '养老金推演,含 4% 法则收入线——先压力测试你的计划,别等计划来压力测试你。',
            },
          },
          {
            card: {
              title: 'ROI 计算器',
              href: '/tools/roi-calculator/',
              desc: '任何投资的年化回报——以上所有推演都依赖的这个诚实输入。',
            },
          },
        ],
      },
      {
        heading: '第一次实操,三十分钟',
        blocks: [
          { list: [
            '算出真实年开销——记账比拍脑袋准 20–30%。',
            '得出你的 **FIRE 数字**(×25;45 岁前退休用 ×30)。',
            '得出你的 **Coast FIRE 数字**——它会早得让你吃惊。',
            '先修好**账户顺序**再加钱——上面的队列就是免费午餐。',
            '每年重跑一次。计划是活模型,不是纹身。',
          ] },
        ],
      },
    ],
  },
  es: {
    articleTitle: { en: EN_TITLE, zh: '2026 FIRE 实战手册:安全提取率、Coast FIRE 与税优账户堆叠', es: 'El playbook FIRE 2026: tasas de retirada seguras, Coast FIRE y el apilado fiscal', de: 'Das FIRE-Playbook 2026: sichere Entnahmeraten, Coast FIRE und steuerbegünstigtes Stacking' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE, zh: EN_CRUMB_TITLE, es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 12,
    lead: 'FIRE no es una vibra — es una ecuación de solvencia con tres variables: tus gastos, tu cartera y el tiempo. Este playbook cubre el origen real de la regla del 4 %, el atajo de Coast FIRE y el orden de cuentas que decide cuánto de tu número se llevan los impuestos.',
    sections: [
      {
        heading: '1. La regla del 4 %: lo que dijo de verdad el Trinity Study',
        blocks: [
          'El Trinity Study de 1998 sometió carteras de acciones y bonos a cada ventana de retiro de 30 años desde 1926 y preguntó: ¿qué tasa de retirada sobrevivió a casi todas? La respuesta fue aproximadamente el **4 % de la cartera inicial, ajustado a inflación cada año**. Inviértelo y obtienes el número FIRE: **gastos anuales × 25**.',
          'Dos matices honestos. Primero, el 4 % era el *suelo histórico*, no una garantía — lo que mata los planes es el riesgo de secuencia (un crash en tus primeros años de retiro), no la rentabilidad media. Segundo, los retiros tempranos miran horizontes de 40–60 años, no 30; muchos planificadores usan hoy un **3,3–3,5 %** para retiros antes de los 45, lo que eleva el número a 28–30× los gastos.',
          {
            card: {
              title: 'Calculadora FIRE',
              href: '/tools/fire-calculator/',
              desc: 'Tu número FIRE a partir de gastos y tasa de retirada — y el año en que tu trayectoria actual lo cruza.',
            },
          },
        ],
      },
      {
        heading: '2. Coast FIRE: el hito que lo cambia todo antes',
        blocks: [
          'El FIRE completo significa que tu cartera te financia para siempre desde mañana. **Coast FIRE** es más débil y más útil: tus activos invertidos, con *cero aportaciones adicionales*, crecen hasta tu número FIRE completo a la edad de jubilación tradicional. Al llegar a Coast solo necesitas cubrir los gastos corrientes — puedes bajar de marcha, aceptar ese trabajo interesante peor pagado y dejar que el interés compuesto termine el trabajo.',
          { code: CODE_FIRE },
          'Con un 5 % real y 30 años de pista, cada $1 invertido hoy son $4,32 en la jubilación — por eso Coast FIRE suele caer en el **20–30 % del número completo**. Es el punto de control de mayor apalancamiento de todo el viaje FIRE.',
          {
            card: {
              title: 'Calculadora de interés compuesto',
              href: '/tools/compound-interest-calculator/',
              desc: 'Valor futuro con aportaciones a cualquier rentabilidad — la curva de interés compuesto que lleva una cartera Coast el resto del camino.',
            },
          },
        ],
      },
      {
        heading: '3. La tasa de ahorro es el único dial que importa',
        blocks: [
          'La matemática FIRE tiene una asimetría brutal: subir tu tasa de ahorro ataca por dos lados — inviertes más *y* tu objetivo se encoge, porque los gastos definen el número. Con un 10 % de ahorro, el horizonte laboral es ~50 años; con 25 %, unos 32; con 50 %, aproximadamente **17 años**; con 65 %, menos de 11.',
          'De ahí la obsesión del movimiento con las tres grandes — vivienda, transporte, comida — y no con los lattes. Recortar $1 000/mes de gasto recurrente suma $12 000/año de inversión y resta **$300 000** a la cartera necesaria.',
        ],
      },
      {
        heading: '4. Apilado fiscal: el orden de operaciones',
        blocks: [
          'Dos personas con el mismo ahorro acaban a años de distancia según *qué cuentas* capturaron el dinero. La cola de prioridades basada en evidencia:',
          { list: [
            '**401(k) hasta el match del empleador** — un retorno instantáneo del 100 %; nada más compite.',
            '**HSA** — triple ventaja fiscal (deducible al entrar, crece libre, sale libre para gasto médico); tras los 65 funciona como una IRA tradicional.',
            '**Roth IRA** — pagas ahora, nunca más; décadas de interés compuesto llegan libres de impuestos, y las aportaciones (no las ganancias) se pueden retirar en cualquier momento — un puente sigiloso hacia el retiro temprano.',
            '**401(k) hasta el máximo** — y la cuenta de bróker gravada, la última.',
          ] },
          '¿Roth o tradicional? Se reduce a una comparación: tu tipo marginal hoy contra tu tipo esperado en el retiro. ¿Ingresos altos en año pico? Tradicional. ¿Carrera temprana o planeando conversiones Roth en años FIRE de bajos ingresos? Roth.',
          {
            card: {
              title: 'Calculadora Roth IRA',
              href: '/tools/roth-ira-calculator/',
              desc: 'Proyecta el crecimiento libre de impuestos hasta el retiro — y compáralo con una cuenta gravada con las mismas aportaciones.',
            },
          },
        ],
      },
      {
        heading: '5. Riesgo de secuencia y barandillas: retirarse en pleno crash',
        blocks: [
          'Dos jubilados con la misma rentabilidad media pueden acabar en lugares opuestos: el que sufrió el crash en los años 1–3 se queda sin nada; el que lo sufrió en el año 25 apenas lo nota. Mitigaciones con historial real: mantén **1–2 años de gastos en efectivo** para no vender nunca en el fondo; usa una **regla de retirada flexible** (salta la subida por inflación tras años malos); y considera una anualidad parcial o un «bond tent» para la frágil primera década.',
          {
            card: {
              title: 'Calculadora de jubilación',
              href: '/tools/retirement-calculator/',
              desc: 'Proyección del patrimonio con la línea de ingresos de la regla del 4 % — haz el stress-test antes de que él te lo haga a ti.',
            },
          },
          {
            card: {
              title: 'Calculadora de ROI',
              href: '/tools/roi-calculator/',
              desc: 'Retorno anualizado de cualquier inversión — la entrada honesta de la que depende toda proyección anterior.',
            },
          },
        ],
      },
      {
        heading: 'La primera sesión, treinta minutos',
        blocks: [
          { list: [
            'Calcula tus gastos anuales reales — el registro supera a la intuición en un 20–30 %.',
            'Obtén tu **número FIRE** (×25, o ×30 si te retiras antes de los 45).',
            'Obtén tu **número Coast FIRE** — el hito que alcanzarás sorprendentemente pronto.',
            'Arregla el **orden de cuentas** antes de añadir un dólar; la cola de arriba es el almuerzo gratis.',
            'Recalcula una vez al año. El plan es un modelo vivo, no un tatuaje.',
          ] },
        ],
      },
    ],
  },
  de: {
    articleTitle: { en: EN_TITLE, zh: '2026 FIRE 实战手册:安全提取率、Coast FIRE 与税优账户堆叠', es: 'El playbook FIRE 2026: tasas de retirada seguras, Coast FIRE y el apilado fiscal', de: 'Das FIRE-Playbook 2026: sichere Entnahmeraten, Coast FIRE und steuerbegünstigtes Stacking' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE, zh: EN_CRUMB_TITLE, es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 12,
    lead: 'FIRE ist kein Bauchgefühl-Traum — es ist eine Solvenz-Gleichung mit drei Variablen: Ausgaben, Portfolio und Zeit. Dieses Playbook deckt den echten Ursprung der 4-%-Regel, die Coast-FIRE-Abkürzung und die Konto-Reihenfolge ab, die entscheidet, wie viel deiner Zielzahl die Steuer still konfisziert.',
    sections: [
      {
        heading: '1. Die 4-%-Regel: Was die Trinity-Studie wirklich sagte',
        blocks: [
          'Die Trinity-Studie von 1998 testete Aktien-Anleihen-Portfolios gegen jedes 30-jährige Ruhestandsfenster seit 1926 und fragte: Welche Entnahmerate überlebte fast alle? Die Antwort: rund **4 % des Startportfolios, jährlich inflationsangepasst**. Umgedreht ergibt das die FIRE-Zahl: **Jahresausgaben × 25**.',
          'Zwei ehrliche Vorbehalte. Erstens war 4 % der *historische Boden*, keine Garantie — Pläne tötet das Sequenzrisiko (ein Crash in den ersten Ruhestandsjahren), nicht die Durchschnittsrendite. Zweitens stehen Frührentner vor 40–60 Jahren, nicht 30; viele Planer nutzen vor 45 heute **3,3–3,5 %**, was die Zielzahl auf das 28–30-Fache der Ausgaben hebt.',
          {
            card: {
              title: 'FIRE-Rechner',
              href: '/tools/fire-calculator/',
              desc: 'Deine FIRE-Zahl aus Ausgaben und Entnahmerate — plus das Jahr, in dem deine aktuelle Bahn sie kreuzt.',
            },
          },
        ],
      },
      {
        heading: '2. Coast FIRE: Der Meilenstein, der früher alles ändert',
        blocks: [
          'Volles FIRE heißt: Dein Portfolio finanziert dich ab morgen für immer. **Coast FIRE** ist schwächer und nützlicher: Deine angelegten Vermögenswerte wachsen *ohne weitere Einzahlungen* bis zum traditionellen Rentenalter zur vollen FIRE-Zahl. Nach Coast musst du nur die laufenden Ausgaben decken — du kannst runterschalten, den interessanteren, schlechter bezahlten Job nehmen und den Zinseszins den Rest erledigen lassen.',
          { code: CODE_FIRE },
          'Bei 5 % real und 30 Jahren Laufstrecke wird jeder heute investierte $1 zu $4,32 im Ruhestand — darum liegt Coast FIRE typisch bei **20–30 % der vollen Zahl**. Es ist der Checkpoint mit der größten Hebelwirkung der gesamten FIRE-Reise.',
          {
            card: {
              title: 'Zinseszinsrechner',
              href: '/tools/compound-interest-calculator/',
              desc: 'Endwert mit laufenden Einzahlungen bei jeder Rendite — die Zinseszins-Kurve, die ein Coast-Portfolio den Rest des Wegs trägt.',
            },
          },
        ],
      },
      {
        heading: '3. Die Sparquote ist der einzige Regler, der zählt',
        blocks: [
          'Die FIRE-Mathematik hat eine brutale Asymmetrie: Eine höhere Sparquote attackiert von zwei Seiten — du investierst mehr *und* dein Ziel schrumpft, denn die Ausgaben definieren die FIRE-Zahl. Bei 10 % Sparquote liegt der Arbeitshorizont bei ~50 Jahren; bei 25 % bei etwa 32; bei 50 % bei rund **17 Jahren**; bei 65 % unter 11.',
          'Deshalb fixiert sich die Bewegung auf die großen drei — Wohnen, Mobilität, Essen — statt auf Lattes. $1 000/Monat wiederkehrende Ausgaben zu streichen bringt $12 000/Jahr mehr Investition *und* entfernt **$300 000** vom nötigen Portfolio.',
        ],
      },
      {
        heading: '4. Steuerbegünstigtes Stacking: Die Reihenfolge der Operationen',
        blocks: [
          'Zwei Menschen mit identischer Sparleistung landen Jahre auseinander — je nachdem, *welche Konten* das Geld aufnahmen. Die evidenzbasierte Prioritätswarteschlange:',
          { list: [
            '**401(k) bis zum Employer Match** — eine sofortige 100-%-Rendite; nichts anderes kann konkurrieren.',
            '**HSA** — dreifach steuerbegünstigt (absetzbar rein, steuerfrei wachsend, steuerfrei raus für Medizin); ab 65 verhält sie sich wie eine traditionelle IRA.',
            '**Roth IRA** — jetzt versteuert, nie wieder; Jahrzehnte Zinseszins kommen steuerfrei an, und Beiträge (nicht Erträge) sind jederzeit entnehmbar — eine unauffällige Brücke in den Frühruhestand.',
            '**401(k) bis zum Maximum** — das steuerpflichtige Depot zuletzt.',
          ] },
          'Roth oder Traditional reduziert sich auf einen Vergleich: dein Grenzsteuersatz heute gegen deinen erwarteten Satz im Ruhestand. Spitzenverdiener im Peak-Jahr? Traditional. Frühe Karriere oder Roth-Konversionen in einkommensschwachen FIRE-Jahren geplant? Roth.',
          {
            card: {
              title: 'Roth-IRA-Rechner',
              href: '/tools/roth-ira-calculator/',
              desc: 'Projiziere steuerfreies Wachstum bis zum Ruhestand — im Vergleich zum versteuerten Konto bei gleichen Beiträgen.',
            },
          },
        ],
      },
      {
        heading: '5. Sequenzrisiko und Leitplanken: In den Crash in Rente gehen',
        blocks: [
          'Zwei Ruheständler mit identischer Durchschnittsrendite können gegensätzlich enden: Wer in Jahr 1–3 crasht, geht leer aus; wer in Jahr 25 crasht, merkt es kaum. Bewährte Abfederungen: **1–2 Jahre Ausgaben in Cash** halten, damit du nie im Tief verkaufst; eine **flexible Entnahmeregel** (Inflationserhöhung nach Verlustjahren aussetzen); und für die fragile erste Dekade eine Teilrente oder ein Bond-Zelt erwägen.',
          {
            card: {
              title: 'Ruhestandsrechner',
              href: '/tools/retirement-calculator/',
              desc: 'Vermögensprojektion mit der Einkommenslinie der 4-%-Regel — stressteste deinen Plan, bevor er dich stresstestet.',
            },
          },
          {
            card: {
              title: 'ROI-Rechner',
              href: '/tools/roi-calculator/',
              desc: 'Annualisierte Rendite jeder Anlage — der ehrliche Input, von dem jede Projektion oben abhängt.',
            },
          },
        ],
      },
      {
        heading: 'Die erste Sitzung, dreißig Minuten',
        blocks: [
          { list: [
            'Ermittle deine echten Jahresausgaben — Tracking schlägt Schätzen um 20–30 %.',
            'Hole deine **FIRE-Zahl** (×25, oder ×30 bei Ruhestand vor 45).',
            'Hole deine **Coast-FIRE-Zahl** — der Checkpoint kommt überraschend früh.',
            'Repariere die **Konto-Reihenfolge**, bevor ein weiterer Dollar fließt — die Warteschlange oben ist das Gratis-Mittagessen.',
            'Rechne einmal im Jahr nach. Der Plan ist ein lebendes Modell, kein Tattoo.',
          ] },
        ],
      },
    ],
  },
}
