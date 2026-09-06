/**
 * 《Mastering SaaS Unit Economics: The Mathematical Relationship Between CAC, LTV, and Churn》
 * Pillar 集群 #4(商业分析,2026-09-05)。
 * 内链:cac-ltv-calculator / saas-ltv-churn-calculator /
 * break-even-calculator / profit-margin-calculator。
 */

import type { LocalizedArticle } from './blog-articles'

const CODE_LTV = `// Core unit economics (per customer)
LTV  = ARPU * gross margin / monthly churn
// e.g. $50 ARPU, 80% margin, 2% churn:
//   LTV = 50 * 0.8 / 0.02 = $2,000
//
// CAC  = total sales + marketing spend / new customers
// Payback (months) = CAC / (ARPU * gross margin)
//
// Rules of thumb:  LTV/CAC >= 3   |   payback <= 12 months`

export const saasEconomicsArticle: LocalizedArticle = {
  en: {
    lead: 'SaaS businesses do not die from bad products; they die from inverted unit economics — paying $600 to acquire a customer worth $400. CAC, LTV, and churn are one equation, not three KPIs. Here is the math that decides whether growth is an engine or a bonfire.',
    sections: [
      {
        heading: '1. CAC: The Fully-Loaded Price of a Customer',
        blocks: [
          'CAC is total sales and marketing spend divided by new customers acquired — *fully loaded*: ads, salaries, commissions, tools, agency fees. A startup spending $120,000/month on S&M to win 200 customers has a **CAC of $600**, no matter what the ad dashboard claims the "cost per click" was.',
          'The common failure is partial accounting: counting ad spend but not the team running it. If your "CAC" excludes salaries, it is not CAC — it is a media metric wearing a costume.',
        ],
      },
      {
        heading: '2. LTV: Revenue Is Vanity, Margin Times Lifetime Is Sanity',
        blocks: [
          'Lifetime value is not "revenue until they leave" — it is **gross profit** until they leave. A $50/month customer at 80% gross margin contributes $40/month; at 2% monthly churn, the average lifetime is 1/0.02 = **50 months**, and LTV is $40 × 50 = **$2,000**.',
          { code: CODE_LTV },
          'Notice what the formula exposes: **churn sits in the denominator**. Halving churn doubles LTV without touching price, sales, or product marketing. This is why retention work compounds and acquisition work merely adds.',
          {
            card: {
              title: 'CAC & LTV Calculator',
              href: '/tools/cac-ltv-calculator/',
              desc: 'LTV/CAC ratio and payback from your ARPU, margin, churn, and S&M spend — the investor-grade sanity check.',
            },
          },
          {
            card: {
              title: 'SaaS LTV & Churn Calculator',
              href: '/tools/saas-ltv-churn-calculator/',
              desc: 'LTV under different churn scenarios — watch what a single point of monthly churn does to lifetime value.',
            },
          },
        ],
      },
      {
        heading: '3. The Ratio That Decides: LTV/CAC ≥ 3, Payback ≤ 12 Months',
        blocks: [
          'The venture-grade heuristics exist for a reason. **LTV/CAC below 1** means you burn money on every customer — growth accelerates the bleeding. **Between 1 and 3** the model works but is fragile: any churn spike or CAC inflation erases the margin of safety. **Above 3** with a payback under 12 months, growth spend is a machine: put a dollar in, get three out within the customer\u2019s lifetime, with the first one back inside a year.',
          'Above 5 is not "great" — it usually means you are *under-investing* in growth and leaving the market to competitors. The ratio is a steering wheel, not a trophy.',
        ],
      },
      {
        heading: '4. Churn Compounds: The Monthly-to-Annual Trap',
        blocks: [
          'Monthly churn is quoted small because it sounds small. **3% monthly churn is 31% annual** (1 − 0.97¹²); 5% monthly is 46% annual — you replace nearly half your customer base every year just to stand still. At 8% monthly, the base fully turns over annually and the business is a treadmill, not a flywheel.',
          'The operational threshold: consumer subscriptions live with 5–7% monthly; SMB SaaS must stay under 3%; enterprise with annual contracts needs logo churn in single digits *per year*. If your monthly churn is above 4%, stop buying growth and fix the leak — every acquired dollar is pouring into a bucket with a hole.',
        ],
      },
      {
        heading: '5. From Unit Economics to Company Economics',
        blocks: [
          'Unit economics scale up into the two numbers operators actually run: **contribution margin** (does each customer pay back before they leave?) and the **break-even point** (at how many customers does the machine cover fixed costs?). A $40/month contribution per customer against $100,000/month of fixed costs means the company needs 2,500 paying customers before it earns its first dollar of operating profit.',
          {
            card: {
              title: 'Break-Even Calculator',
              href: '/tools/break-even-calculator/',
              desc: 'Fixed costs vs per-unit contribution — the customer count where your SaaS stops burning and starts earning.',
            },
          },
          {
            card: {
              title: 'Profit Margin Calculator',
              href: '/tools/profit-margin-calculator/',
              desc: 'Gross, operating, and net margin from any cost/price pair — the m in the LTV formula, verified.',
            },
          },
        ],
      },
      {
        heading: 'The Monthly Ritual',
        blocks: [
          { list: [
            'Recompute **CAC fully loaded** — include salaries, or the number lies.',
            'Recompute **LTV** with trailing 3-month churn; a single month of churn data is noise.',
            'Watch **payback period** drift — it degrades silently as ad auctions inflate.',
            'Convert monthly churn to annual in every deck; honesty compounds too.',
            'When in doubt: retention first, acquisition second. The denominator decides.',
          ] },
        ],
      },
    ],
  },
  zh: {
    lead: 'SaaS 公司很少死于烂产品,它们死于倒挂的单位经济——花 $600 获取一个只值 $400 的客户。CAC、LTV、流失率不是三个 KPI,而是同一个方程。本文给出判断"增长是引擎还是篝火"的数学。',
    sections: [
      {
        heading: '1. CAC:一个客户的全口径成本',
        blocks: [
          'CAC = 销售与市场总支出 ÷ 新增客户数——*全口径*:广告、工资、佣金、工具、代理费全算。每月花 $120,000 换来 200 个客户,CAC 就是 **$600**——不管广告后台的"单次点击成本"显得多便宜。',
          '最常见的失败是半口径记账:只算广告费,不算操盘的人。如果你的"CAC"不含人力,那不是 CAC,是穿了戏服的媒介指标。',
        ],
      },
      {
        heading: '2. LTV:营收是虚荣,毛利 × 寿命才是真相',
        blocks: [
          '客户终身价值不是"离开前的总营收",而是离开前的**总毛利**。$50/月的客户在 80% 毛利率下每月贡献 $40;月流失 2% 意味着平均寿命 1/0.02 = **50 个月**,LTV = $40 × 50 = **$2,000**。',
          { code: CODE_LTV },
          '注意公式暴露了什么:**流失率坐在分母上**。流失减半,LTV 翻倍——不动价格、不动销售、不动市场。这就是为什么留存工作会复利,而获客工作只做加法。',
          {
            card: {
              title: 'CAC 与 LTV 计算器',
              href: '/tools/cac-ltv-calculator/',
              desc: '由 ARPU、毛利、流失与 S&M 支出得出 LTV/CAC 与回本期——投资人级别的健全性检查。',
            },
          },
          {
            card: {
              title: 'SaaS LTV 与流失计算器',
              href: '/tools/saas-ltv-churn-calculator/',
              desc: '不同流失情景下的 LTV——亲眼看月流失率变动一个百分点对终身价值的影响。',
            },
          },
        ],
      },
      {
        heading: '3. 决定生死的比值:LTV/CAC ≥ 3,回本 ≤ 12 个月',
        blocks: [
          '风投级的经验阈值自有其道理。**LTV/CAC < 1** 意味着每个客户都在烧钱——增长只是加速失血。**1 到 3 之间**模式成立但脆弱:任何流失尖峰或 CAC 通胀都会抹掉安全边际。**3 以上且回本在 12 个月内**,增长支出就是一台机器:投入 $1,客户生命周期内拿回 $3,第一年内先回 $1。',
          '超过 5 不是"优秀"——通常说明增长*投入不足*,把市场让给了竞争对手。这个比值是方向盘,不是奖杯。',
        ],
      },
      {
        heading: '4. 流失会复利:月度到年度的换算陷阱',
        blocks: [
          '月流失率报出来小,因为听起来小。**3% 月流失 = 31% 年流失**(1 − 0.97¹²);5% 月流失 = 46% 年流失——原地不动也要每年换掉近一半客户。8% 月流失意味着客户基盘每年整体换血,这门生意是跑步机,不是飞轮。',
          '操作阈值:消费订阅可以忍 5–7% 月流失;SMB SaaS 必须压在 3% 以下;年合同的企业级,年度 logo 流失要个位数。月流失超过 4% 时,停止购买增长,先补漏——每一块钱获客预算都在往破桶里倒。',
        ],
      },
      {
        heading: '5. 从单位经济到公司经济',
        blocks: [
          '单位经济放大后变成运营者真正管理的两个数:**单位贡献**(客户在离开前能否回本)与**盈亏平衡点**(多少客户才够机器覆盖固定成本)。每客户月贡献 $40、固定成本 $100,000/月,意味着公司需要 2,500 个付费客户才能赚到第一块经营利润。',
          {
            card: {
              title: '盈亏平衡计算器',
              href: '/tools/break-even-calculator/',
              desc: '固定成本 vs 单位贡献——你的 SaaS 从烧钱转赚钱的临界客户数。',
            },
          },
          {
            card: {
              title: '利润率计算器',
              href: '/tools/profit-margin-calculator/',
              desc: '任意成本/售价组合的毛利、经营与净利率——LTV 公式里那个 m,验证一下。',
            },
          },
        ],
      },
      {
        heading: '每月例行功课',
        blocks: [
          { list: [
            '重算**全口径 CAC**——含人力,否则数字在撒谎。',
            '用滚动 3 个月流失率重算 **LTV**;单月流失数据是噪声。',
            '盯紧**回本期**漂移——广告竞价通胀会让它悄悄恶化。',
            '每份 BP 里把月流失换算成年流失;诚实也会复利。',
            '拿不准时:留存优先,获客其次。分母说了算。',
          ] },
        ],
      },
    ],
  },
  es: {
    lead: 'Las SaaS no mueren por malos productos; mueren por economía unitaria invertida: pagar $600 por un cliente que vale $400. CAC, LTV y churn no son tres KPI, son una sola ecuación. Aquí está la matemática que decide si el crecimiento es un motor o una hoguera.',
    sections: [
      {
        heading: '1. CAC: el precio totalmente cargado de un cliente',
        blocks: [
          'El CAC es el gasto total de ventas y marketing dividido entre clientes nuevos — *totalmente cargado*: anuncios, salarios, comisiones, herramientas, agencias. Una startup que gasta $120 000/mes en S&M para ganar 200 clientes tiene un **CAC de $600**, diga lo que diga el «coste por clic» del panel publicitario.',
          'El fallo habitual es la contabilidad parcial: contar el gasto en anuncios pero no al equipo que lo opera. Si tu «CAC» excluye salarios, no es CAC — es una métrica de medios disfrazada.',
        ],
      },
      {
        heading: '2. LTV: los ingresos son vanidad; margen por vida es cordura',
        blocks: [
          'El valor de vida no es «ingresos hasta que se va» — es **beneficio bruto** hasta que se va. Un cliente de $50/mes con un 80 % de margen bruto aporta $40/mes; con un 2 % de churn mensual, la vida media es 1/0,02 = **50 meses**, y el LTV es $40 × 50 = **$2 000**.',
          { code: CODE_LTV },
          'Fíjate en lo que expone la fórmula: **el churn está en el denominador**. Reducir el churn a la mitad duplica el LTV sin tocar precio, ventas ni marketing. Por eso la retención capitaliza y la adquisición solo suma.',
          {
            card: {
              title: 'Calculadora de CAC y LTV',
              href: '/tools/cac-ltv-calculator/',
              desc: 'Ratio LTV/CAC y periodo de recuperación desde tu ARPU, margen, churn y gasto S&M — el chequeo de cordura nivel inversor.',
            },
          },
          {
            card: {
              title: 'Calculadora SaaS de LTV y churn',
              href: '/tools/saas-ltv-churn-calculator/',
              desc: 'LTV bajo distintos escenarios de churn — observa lo que un punto de churn mensual hace al valor de vida.',
            },
          },
        ],
      },
      {
        heading: '3. La ratio que decide: LTV/CAC ≥ 3, recuperación ≤ 12 meses',
        blocks: [
          'Las heurísticas de capital riesgo existen por algo. **LTV/CAC por debajo de 1** significa quemar dinero en cada cliente — crecer acelera la hemorragia. **Entre 1 y 3** el modelo funciona pero es frágil: cualquier pico de churn o inflación de CAC borra el margen de seguridad. **Por encima de 3** con recuperación bajo 12 meses, el gasto en crecimiento es una máquina: entra un dólar, salen tres en la vida del cliente, y el primero vuelve dentro del año.',
          'Por encima de 5 no es «genial» — suele significar que *inviertes de menos* en crecimiento y dejas el mercado a la competencia. La ratio es un volante, no un trofeo.',
        ],
      },
      {
        heading: '4. El churn capitaliza: la trampa mensual-anual',
        blocks: [
          'El churn mensual se cita pequeño porque suena pequeño. **Un 3 % mensual es un 31 % anual** (1 − 0,97¹²); un 5 % mensual es un 46 % anual — repones casi la mitad de tu base cada año solo para no retroceder. Con un 8 % mensual, la base rota entera cada año: el negocio es una cinta de correr, no un volante.',
          'El umbral operativo: las suscripciones de consumo viven con 5–7 % mensual; la SaaS para pymes debe quedar bajo el 3 %; la enterprise con contratos anuales necesita churn de logos de un dígito *al año*. Si tu churn mensual supera el 4 %, deja de comprar crecimiento y tapona la fuga — cada dólar de adquisición cae en un cubo agujereado.',
        ],
      },
      {
        heading: '5. De la economía unitaria a la economía de empresa',
        blocks: [
          'La economía unitaria escala a las dos cifras que de verdad operan: el **margen de contribución** (¿cada cliente se paga antes de irse?) y el **punto de equilibrio** (¿con cuántos clientes la máquina cubre los costes fijos?). Una contribución de $40/mes por cliente contra $100 000/mes de costes fijos significa que la empresa necesita 2 500 clientes de pago antes de su primer dólar de beneficio operativo.',
          {
            card: {
              title: 'Calculadora de punto de equilibrio',
              href: '/tools/break-even-calculator/',
              desc: 'Costes fijos vs contribución por unidad — el número de clientes donde tu SaaS deja de quemar y empieza a ganar.',
            },
          },
          {
            card: {
              title: 'Calculadora de margen de beneficio',
              href: '/tools/profit-margin-calculator/',
              desc: 'Margen bruto, operativo y neto desde cualquier par coste/precio — la m de la fórmula LTV, verificada.',
            },
          },
        ],
      },
      {
        heading: 'El ritual mensual',
        blocks: [
          { list: [
            'Recalcula el **CAC totalmente cargado** — incluye salarios o el número miente.',
            'Recalcula el **LTV** con churn de 3 meses móviles; un solo mes es ruido.',
            'Vigila la deriva del **periodo de recuperación** — se degrada en silencio con la inflación de las subastas publicitarias.',
            'Convierte el churn mensual a anual en cada presentación; la honestidad también capitaliza.',
            'Ante la duda: retención primero, adquisición después. El denominador decide.',
          ] },
        ],
      },
    ],
  },
  de: {
    lead: 'SaaS-Firmen sterben nicht an schlechten Produkten; sie sterben an umgedrehter Unit-Economics — $600 für einen Kunden, der $400 wert ist. CAC, LTV und Churn sind keine drei KPIs, sondern eine Gleichung. Hier die Mathematik, die entscheidet, ob Wachstum ein Motor oder ein Freudenfeuer ist.',
    sections: [
      {
        heading: '1. CAC: Der voll beladene Preis eines Kunden',
        blocks: [
          'CAC ist der gesamte Vertriebs- und Marketingaufwand geteilt durch Neukunden — *voll beladen*: Anzeigen, Gehälter, Provisionen, Tools, Agenturhonorare. Ein Startup, das $120 000/Monat in S&M steckt und 200 Kunden gewinnt, hat einen **CAC von $600** — egal, wie niedrig der „Cost per Click" im Werbe-Dashboard aussieht.',
          'Der übliche Fehler ist Teil-Buchhaltung: Werbebudget zählen, das Team dahinter nicht. Wenn dein „CAC" Gehälter ausklammert, ist es kein CAC — es ist eine Media-Kennzahl im Kostüm.',
        ],
      },
      {
        heading: '2. LTV: Umsatz ist Eitelkeit, Marge mal Lebensdauer ist Verstand',
        blocks: [
          'Der Lifetime Value ist nicht „Umsatz bis zur Kündigung" — er ist der **Bruttogewinn** bis zur Kündigung. Ein $50/Monat-Kunde bei 80 % Bruttomarge trägt $40/Monat bei; bei 2 % monatlichem Churn liegt die mittlere Lebensdauer bei 1/0,02 = **50 Monaten**, der LTV bei $40 × 50 = **$2 000**.',
          { code: CODE_LTV },
          'Beachte, was die Formel freilegt: **Der Churn steht im Nenner**. Churn zu halbieren verdoppelt den LTV — ohne Preis, Vertrieb oder Marketing anzufassen. Darum verzinst sich Retention-Arbeit, während Akquise nur addiert.',
          {
            card: {
              title: 'CAC- & LTV-Rechner',
              href: '/tools/cac-ltv-calculator/',
              desc: 'LTV/CAC-Verhältnis und Payback aus ARPU, Marge, Churn und S&M-Ausgaben — der Sanity-Check auf Investoren-Niveau.',
            },
          },
          {
            card: {
              title: 'SaaS-LTV- & Churn-Rechner',
              href: '/tools/saas-ltv-churn-calculator/',
              desc: 'LTV unter verschiedenen Churn-Szenarien — sieh, was ein Prozentpunkt Monats-Churn mit dem Lebenszeitwert macht.',
            },
          },
        ],
      },
      {
        heading: '3. Das entscheidende Verhältnis: LTV/CAC ≥ 3, Payback ≤ 12 Monate',
        blocks: [
          'Die VC-Heuristiken existieren aus gutem Grund. **LTV/CAC unter 1** heißt: Jeder Kunde verbrennt Geld — Wachstum beschleunigt die Blutung. **Zwischen 1 und 3** funktioniert das Modell, bleibt aber fragil: Jeder Churn-Spike oder CAC-Anstieg wischt die Sicherheitsmarge weg. **Über 3** mit Payback unter 12 Monaten ist Wachstumsausgabe eine Maschine: Ein Dollar rein, drei raus über die Kundenlebensdauer, der erste zurück innerhalb eines Jahres.',
          'Über 5 ist nicht „großartig" — meist heißt es, du *unterinvestierst* in Wachstum und überlässt den Markt der Konkurrenz. Das Verhältnis ist ein Lenkrad, keine Trophäe.',
        ],
      },
      {
        heading: '4. Churn verzinst sich: Die Monat-zu-Jahr-Falle',
        blocks: [
          'Monats-Churn wird klein zitiert, weil es klein klingt. **3 % monatlich sind 31 % jährlich** (1 − 0,97¹²); 5 % monatlich sind 46 % jährlich — du ersetzt fast die halbe Kundenbasis pro Jahr, nur um stillzustehen. Bei 8 % monatlich rotiert die Basis komplett pro Jahr: Das Geschäft ist ein Laufband, kein Schwungrad.',
          'Die operative Schwelle: Consumer-Abo lebt mit 5–7 % monatlich; SMB-SaaS muss unter 3 % bleiben; Enterprise mit Jahresverträgen braucht Logo-Churn im einstelligen Bereich *pro Jahr*. Liegt dein Monats-Churn über 4 %, hör auf, Wachstum zu kaufen, und dichte das Leck — jeder Akquise-Dollar fließt in einen Eimer mit Loch.',
        ],
      },
      {
        heading: '5. Von Unit- zu Company-Economics',
        blocks: [
          'Unit Economics skaliert in die zwei Zahlen, mit denen Operatoren wirklich steuern: **Deckungsbeitrag** (zahlt sich jeder Kunde zurück, bevor er geht?) und den **Break-even** (ab wie vielen Kunden deckt die Maschine die Fixkosten?). $40/Monat Deckungsbeitrag pro Kunde gegen $100 000/Monat Fixkosten heißt: 2 500 zahlende Kunden, bevor der erste Dollar Betriebsgewinn fällt.',
          {
            card: {
              title: 'Break-even-Rechner',
              href: '/tools/break-even-calculator/',
              desc: 'Fixkosten vs. Deckungsbeitrag je Einheit — die Kundenzahl, ab der dein SaaS verdient statt verbrennt.',
            },
          },
          {
            card: {
              title: 'Gewinnmargen-Rechner',
              href: '/tools/profit-margin-calculator/',
              desc: 'Brutto-, Betriebs- und Nettomarge aus jedem Kosten-/Preispaar — das m in der LTV-Formel, verifiziert.',
            },
          },
        ],
      },
      {
        heading: 'Das monatliche Ritual',
        blocks: [
          { list: [
            '**CAC voll beladen** neu rechnen — inklusive Gehälter, sonst lügt die Zahl.',
            '**LTV** mit rollierendem 3-Monats-Churn neu rechnen; ein einzelner Monat ist Rauschen.',
            'Die Drift des **Payback** beobachten — sie verschlechtert sich lautlos mit der Anzeigen-Inflation.',
            'Monats-Churn in jedem Deck aufs Jahr umrechnen; Ehrlichkeit verzinst sich ebenfalls.',
            'Im Zweifel: Retention zuerst, Akquise danach. Der Nenner entscheidet.',
          ] },
        ],
      },
    ],
  },
}
