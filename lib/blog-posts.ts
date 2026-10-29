/**
 * 博客文章注册表(单一数据源)——app/blog/page.tsx 与 app/sitemap.ts 共用。
 * 按日期倒序排列;新文章四件套:内容模块 + BlogArticleBody 注册 +
 * page.tsx + 在此登记(sitemap 自动收录)。
 */
import type { BlogPostMeta } from '@/components/BlogIndex'

export const posts: BlogPostMeta[] = [
  {
    slug: 'mortgage-piti-and-amortization-guide',
    title: 'The Complete Guide to Mortgage Amortization, PITI Breakdown, and Prepayment Strategies',
    description:
      'Open the black box of a 30-year loan: the amortization formula, why 87% of your first payment is interest, the full PITI stack, and the prepayment math that saves five figures — with free in-browser calculators.',
    date: '2026-09-05',
    readTime: '11 min',
    tags: ['mortgage', 'amortization', 'piti', 'prepayment', 'personal-finance'],
    published: true,
    modifiedAt: '2026-10-29',
    relatedSlugs: ['mortgage-loan-calculators', 'home-flooring-and-renovation-math', 'hysa-vs-cd-wealth-building-guide'],
    featuredToolSlugs: ['mortgage-calculator', 'amortization-table-generator', 'mortgage-affordability-calculator', 'down-payment-calculator', 'biweekly-mortgage-payment-calculator', 'refinance-break-even-calculator'],
    i18n: {
      zh: {
        title: '房贷摊销完全指南:PITI 分解与提前还款策略',
        description:
          '拆开 30 年贷款的黑盒:摊销公式、为什么首期还款 87% 是利息、PITI 全口径,以及省下五位数的提前还款数学——配套浏览器本地运行的免费计算器。',
      },
      es: {
        title: 'Guía completa de amortización hipotecaria, desglose PITI y estrategias de prepago',
        description:
          'Abre la caja negra de un préstamo a 30 años: la fórmula de amortización, por qué el 87 % de tu primera cuota es interés, el PITI completo y la matemática del prepago que ahorra cinco cifras — con calculadoras gratuitas en el navegador.',
      },
      de: {
        title: 'Der komplette Leitfaden zu Hypotheken-Tilgung, PITI-Aufschlüsselung und Sondertilgung',
        description:
          'Die Blackbox eines 30-Jahres-Kredits geöffnet: die Tilgungsformel, warum 87 % der ersten Rate Zinsen sind, das volle PITI und die Sondertilgungs-Mathematik, die fünfstellig spart — mit kostenlosen Rechnern im Browser.',
      },
    },
  },
  {
    slug: 'hysa-vs-cd-wealth-building-guide',
    title: 'HYSA vs. CD vs. Money Market: The Optimal Cash Allocation Strategy for 2026',
    description:
      'One dollar, three prices. The 2026 cash stack — emergency fund in HYSA, dated goals in a CD ladder, the real-yield math after inflation, and the APY-vs-APR conversion banks hope you skip.',
    date: '2026-09-05',
    readTime: '5 min',
    tags: ['hysa', 'cd-ladder', 'cash-management', 'apy', 'inflation'],
    published: true,
    modifiedAt: '2026-10-29',
    relatedSlugs: ['fire-movement-retire-early-playbook', 'mortgage-piti-and-amortization-guide', 'mortgage-loan-calculators'],
    featuredToolSlugs: ['hysa-calculator', 'cd-calculator', 'apy-calculator', 'compound-interest-calculator', 'inflation-calculator', 'emergency-fund-calculator'],
    i18n: {
      zh: {
        title: 'HYSA vs CD vs 货币基金:2026 年最优现金配置策略',
        description:
          '同一块钱,三种定价。2026 现金堆栈——应急金放 HYSA、有日期的目标进 CD 阶梯、通胀后的实际收益数学,以及银行希望你跳过的 APY 与 APR 换算。',
      },
      es: {
        title: 'HYSA vs. CD vs. mercado monetario: la estrategia óptima de asignación de efectivo para 2026',
        description:
          'Un dólar, tres precios. La pila de efectivo 2026 — emergencias en HYSA, metas con fecha en una escalera de CDs, la matemática del rendimiento real tras la inflación y la conversión APY/APR que los bancos esperan que ignores.',
      },
      de: {
        title: 'HYSA vs. Festgeld vs. Geldmarkt: Die optimale Cash-Allokation für 2026',
        description:
          'Ein Dollar, drei Preise. Der Cash-Stack 2026 — Notfallfonds im HYSA, terminierte Ziele in der CD-Leiter, die Realzins-Mathematik nach Inflation und die APY/APR-Umrechnung, die Banken gern überspringen.',
      },
    },
  },
  {
    slug: 'fire-movement-retire-early-playbook',
    title: 'The 2026 FIRE Playbook: Safe Withdrawal Rates, Coast FIRE, and Tax-Advantaged Stacking',
    description:
      'FIRE is a solvency equation, not a vibe: the Trinity Study\u2019s real 4% rule, the Coast FIRE checkpoint you hit shockingly early, the account-stacking order that beats taxes, and guardrails for sequence risk.',
    date: '2026-09-05',
    readTime: '12 min',
    tags: ['fire', 'early-retirement', '4-percent-rule', 'roth-ira', 'coast-fire'],
    published: true,
    modifiedAt: '2026-10-29',
    relatedSlugs: ['hysa-vs-cd-wealth-building-guide', 'mortgage-piti-and-amortization-guide', 'mortgage-loan-calculators'],
    featuredToolSlugs: ['fire-calculator', 'retirement-calculator', 'compound-interest-calculator', 'roth-ira-calculator', '401k-match-calculator', 'net-worth-calculator'],
    i18n: {
      zh: {
        title: '2026 FIRE 行动手册:安全提取率、Coast FIRE 与税优账户堆叠',
        description:
          'FIRE 是偿付方程不是玄学:Trinity 研究真实的 4% 法则、你会早得吃惊地到达的 Coast FIRE 检查点、跑赢税收的账户堆叠顺序,以及序列风险的护栏。',
      },
      es: {
        title: 'Playbook FIRE 2026: tasas de retirada seguras, Coast FIRE y apilado con ventaja fiscal',
        description:
          'FIRE es una ecuación de solvencia, no una vibra: la regla del 4 % real del Trinity Study, el hito Coast FIRE que llega sorprendentemente pronto, el orden de cuentas que vence a los impuestos y barandillas contra el riesgo de secuencia.',
      },
      de: {
        title: 'Das 2026-FIRE-Playbook: Sichere Entnahmeraten, Coast FIRE und steuerbegünstigtes Stacking',
        description:
          'FIRE ist eine Solvenz-Gleichung, kein Gefühl: die echte 4-%-Regel der Trinity-Studie, der Coast-FIRE-Checkpoint, der überraschend früh kommt, die Konto-Reihenfolge gegen die Steuer und Leitplanken für das Sequenzrisiko.',
      },
    },
  },
  {
    slug: 'saas-unit-economics-cac-ltv-churn',
    title: 'Mastering SaaS Unit Economics: The Mathematical Relationship Between CAC, LTV, and Churn',
    description:
      'CAC, LTV, and churn are one equation, not three KPIs. Fully-loaded CAC, margin-based LTV with churn in the denominator, the LTV/CAC ≥ 3 rule, payback period, and why 3% monthly churn is really 31% a year.',
    date: '2026-09-05',
    readTime: '10 min',
    tags: ['saas', 'unit-economics', 'cac', 'ltv', 'churn'],
    published: true,
    modifiedAt: '2026-10-29',
    relatedSlugs: ['pricing-strategies-margin-vs-markup', 'llm-api-pricing-and-tokenomics'],
    featuredToolSlugs: ['cac-ltv-calculator', 'saas-ltv-churn-calculator', 'runway-calculator', 'break-even-calculator', 'roi-calculator', 'profit-margin-calculator'],
    i18n: {
      zh: {
        title: '精通 SaaS 单位经济:CAC、LTV 与流失率的数学关系',
        description:
          'CAC、LTV、流失率是同一个方程,不是三个 KPI。全口径 CAC、分母坐流失率的毛利 LTV、LTV/CAC ≥ 3 法则、回本期,以及为什么 3% 月流失其实是 31% 年流失。',
      },
      es: {
        title: 'Dominar la economía unitaria SaaS: la relación matemática entre CAC, LTV y churn',
        description:
          'CAC, LTV y churn son una ecuación, no tres KPI. CAC totalmente cargado, LTV por margen con el churn en el denominador, la regla LTV/CAC ≥ 3, el periodo de recuperación y por qué un 3 % mensual es un 31 % anual.',
      },
      de: {
        title: 'SaaS-Unit-Economics meistern: Die mathematische Beziehung zwischen CAC, LTV und Churn',
        description:
          'CAC, LTV und Churn sind eine Gleichung, nicht drei KPIs. Voll beladener CAC, margenbasierter LTV mit Churn im Nenner, die LTV/CAC-≥-3-Regel, Payback — und warum 3 % monatlich 31 % jährlich sind.',
      },
    },
  },
  {
    slug: 'client-side-cryptography-web-crypto-guide',
    title: 'Demystifying In-Browser AES-256-GCM and PBKDF2: A Developer\u2019s Practical Guide',
    description:
      'Zero-knowledge architecture in the browser: why GCM\u2019s auth tag beats CBC, the IV-reuse rule that must never break, PBKDF2 parameters that stretch passwords properly, CSPRNG key generation, and JWT decoding vs verifying.',
    date: '2026-09-05',
    readTime: '12 min',
    tags: ['webcrypto', 'aes-gcm', 'pbkdf2', 'security', 'jwt'],
    published: true,
    modifiedAt: '2026-10-29',
    relatedSlugs: ['how-i-built-toolhub', 'llm-api-pricing-and-tokenomics'],
    featuredToolSlugs: ['aes-encrypt-decrypt', 'password-generator', 'password-entropy-checker', 'jwt-decoder', 'jwt-generator', 'hmac-generator'],
    i18n: {
      zh: {
        title: '揭秘浏览器内 AES-256-GCM 与 PBKDF2:开发者实战指南',
        description:
          '浏览器里的零知识架构:GCM 认证标签为何胜过 CBC、绝不能破的 IV 复用禁令、正确拉伸口令的 PBKDF2 参数、CSPRNG 密钥生成,以及 JWT 解码与验签之别。',
      },
      es: {
        title: 'Desmitificar AES-256-GCM y PBKDF2 en el navegador: guía práctica para desarrolladores',
        description:
          'Arquitectura de conocimiento cero en el navegador: por qué la etiqueta GCM supera a CBC, la regla de reutilización de IV que jamás se rompe, los parámetros PBKDF2 correctos, generación de claves CSPRNG y decodificar vs verificar JWT.',
      },
      de: {
        title: 'AES-256-GCM und PBKDF2 im Browser entmystifiziert: Der Praxis-Leitfaden für Entwickler',
        description:
          'Zero-Knowledge-Architektur im Browser: warum GCMs Auth-Tag CBC schlägt, die nie zu brechende IV-Regel, korrekte PBKDF2-Parameter, CSPRNG-Schlüsselerzeugung und JWT-Dekodieren vs. -Verifizieren.',
      },
    },
  },
  {
    slug: 'metabolism-fasting-and-calorie-deficit',
    title: 'The Science of Human Metabolism: Calculating BMR, TDEE, Caloric Deficits, and 16:8 Fasting',
    description:
      'The clinician\u2019s equation set — Mifflin-St Jeor BMR, honest TDEE activity tiers, the 7,700-kcal-per-kg deficit ledger, where 16:8 fasting actually helps, and how to fight adaptive thermogenesis.',
    date: '2026-09-05',
    readTime: '11 min',
    tags: ['metabolism', 'bmr', 'tdee', 'calorie-deficit', 'intermittent-fasting'],
    published: true,
    modifiedAt: '2026-10-29',
    relatedSlugs: ['canine-nutrition-and-calorie-guide'],
    featuredToolSlugs: ['bmr-calculator', 'tdee-calculator', 'calorie-calculator', 'intermittent-fasting-calculator', 'macro-calculator', 'weight-loss-goal-calculator'],
    i18n: {
      zh: {
        title: '人体代谢科学:BMR、TDEE、热量缺口与 16:8 断食的计算',
        description:
          '临床营养师的方程组——Mifflin-St Jeor 基础代谢、诚实的 TDEE 活动档位、每公斤 7,700 kcal 的缺口账簿、16:8 断食真正有用的地方,以及如何对抗适应性产热。',
      },
      es: {
        title: 'La ciencia del metabolismo humano: calcular BMR, TDEE, déficit calórico y ayuno 16:8',
        description:
          'El juego de ecuaciones del clínico — BMR de Mifflin-St Jeor, niveles honestos de actividad para el TDEE, el libro del déficit de 7 700 kcal por kg, dónde ayuda de verdad el 16:8 y cómo combatir la termogénesis adaptativa.',
      },
      de: {
        title: 'Die Wissenschaft des Stoffwechsels: BMR, TDEE, Kaloriendefizit und 16:8-Fasten berechnen',
        description:
          'Der Gleichungssatz der Kliniker — BMR nach Mifflin-St Jeor, ehrliche TDEE-Aktivitätsstufen, das 7 700-kcal-pro-kg-Defizitkonto, wo 16:8 wirklich hilft und wie man der adaptiven Thermogenese begegnet.',
      },
    },
  },
  {
    slug: 'llm-api-pricing-and-tokenomics',
    title: 'The 2026 LLM Pricing Handbook: Measuring Token Density, Context Caching, and Monthly API Budgets',
    description:
      'LLM bills are multiplication: requests × tokens × price. Measure real p50/p95 token density, capture the 50–90% caching discount, split batch from interactive traffic, route easy work to small models, and stop over-optimizing embeddings.',
    date: '2026-09-05',
    readTime: '10 min',
    tags: ['llm', 'api-pricing', 'tokens', 'prompt-caching', 'ai-budget'],
    published: true,
    modifiedAt: '2026-10-29',
    relatedSlugs: ['saas-unit-economics-cac-ltv-churn', 'how-i-built-toolhub', 'client-side-cryptography-web-crypto-guide'],
    featuredToolSlugs: ['llm-api-cost-calculator', 'llm-cost-calculator', 'gpt-token-counter', 'token-visualizer', 'context-window-checker', 'embedding-price-calculator'],
    i18n: {
      zh: {
        title: '2026 LLM 定价手册:度量 Token 密度、上下文缓存与每月 API 预算',
        description:
          'LLM 账单就是乘法:请求 × token × 单价。实测 p50/p95 token 密度、吃下 50–90% 的缓存折扣、批量与实时流量分流、简单任务路由给小模型,别再过度优化嵌入成本。',
      },
      es: {
        title: 'Manual de precios LLM 2026: medir densidad de tokens, caché de contexto y presupuestos mensuales de API',
        description:
          'Las facturas LLM son multiplicación: peticiones × tokens × precio. Mide la densidad real p50/p95, captura el descuento del 50–90 % de la caché, separa batch de interactivo, enruta lo fácil a modelos pequeños y deja de sobre-optimizar embeddings.',
      },
      de: {
        title: 'Das 2026-LLM-Preishandbuch: Token-Dichte messen, Kontext-Caching und monatliche API-Budgets',
        description:
          'LLM-Rechnungen sind Multiplikation: Anfragen × Tokens × Preis. Echte p50/p95-Dichte messen, den 50–90-%-Cache-Rabatt mitnehmen, Batch von interaktiv trennen, einfache Arbeit an kleine Modelle routen — und Embeddings nicht überoptimieren.',
      },
    },
  },
  {
    slug: 'pricing-strategies-margin-vs-markup',
    title: 'Markup vs. Margin: The Math of Profitable E-commerce and Retail Pricing',
    description:
      'A 50% markup is only a 33% margin — the gap is where profits leak. The formulas, price-from-target-margin, the real fee stack (2.9% + $0.30 is really 3.9% on a $30 order), freelance rates, and discount discipline.',
    date: '2026-09-05',
    readTime: '10 min',
    tags: ['pricing', 'margin', 'markup', 'ecommerce', 'freelance'],
    published: true,
    modifiedAt: '2026-10-29',
    relatedSlugs: ['saas-unit-economics-cac-ltv-churn', 'llm-api-pricing-and-tokenomics'],
    featuredToolSlugs: ['profit-margin-calculator', 'markup-calculator', 'discount-calculator', 'reverse-stripe-fee-calculator', 'freelance-rate-calculator', 'break-even-calculator'],
    i18n: {
      zh: {
        title: 'Markup vs Margin:电商与零售盈利的定价数学',
        description:
          '50% 加价率只是 33% 利润率——差额正是利润漏掉的地方。公式、按目标利润率反推定价、真实费用栈($30 订单上 2.9% + $0.30 实为 3.9%)、自由职业报价与折扣纪律。',
      },
      es: {
        title: 'Markup vs. margin: la matemática del pricing rentable en e-commerce y retail',
        description:
          'Un markup del 50 % es solo un margen del 33 % — la brecha es por donde se fuga el beneficio. Las fórmulas, precio desde margen objetivo, la pila real de comisiones (2,9 % + $0,30 es un 3,9 % en un pedido de $30), tarifas freelance y disciplina de descuentos.',
      },
      de: {
        title: 'Markup vs. Margin: Die Mathematik profitabler Preise im E-Commerce und Handel',
        description:
          'Ein 50-%-Aufschlag ist nur eine 33-%-Marge — in der Lücke versickert der Gewinn. Die Formeln, Preis aus Zielmarge, der echte Gebührenstapel (2,9 % + $0,30 sind 3,9 % bei $30), Freelance-Sätze und Rabatt-Disziplin.',
      },
    },
  },
  {
    slug: 'canine-nutrition-and-calorie-guide',
    title: 'Veterinary Math for Dog Owners: Decoding RER, MER, and Accurate Daily Calorie Intake',
    description:
      'Bag guidelines are written for intact, active, young dogs — yours probably isn\u2019t. The RER = 70 × kg^0.75 baseline, MER life-stage multipliers from 3.0× puppies to 1.0× weight loss, the 10% treat rule, and the body condition score.',
    date: '2026-09-05',
    readTime: '9 min',
    tags: ['dog-nutrition', 'rer', 'mer', 'pet-health', 'calories'],
    published: true,
    modifiedAt: '2026-10-29',
    relatedSlugs: ['metabolism-fasting-and-calorie-deficit'],
    featuredToolSlugs: ['dog-food-calculator', 'dog-age-calculator'],
    i18n: {
      zh: {
        title: '养犬人的兽医数学:解读 RER、MER 与每日精确热量',
        description:
          '狗粮袋建议是按未绝育、高活动、年轻犬写的——你家狗多半不是。RER = 70 × kg^0.75 基线、从幼犬 3.0× 到减重 1.0× 的 MER 生命阶段乘数、10% 零食规则与体况评分。',
      },
      es: {
        title: 'Matemática veterinaria para dueños de perros: descifrar RER, MER y la ingesta calórica diaria exacta',
        description:
          'Las guías del saco están escritas para perros jóvenes, activos e intactos — el tuyo probablemente no. La base RER = 70 × kg^0,75, los multiplicadores MER del 3,0× de cachorros al 1,0× de adelgazamiento, la regla del 10 % de premios y la condición corporal.',
      },
      de: {
        title: 'Veterinär-Mathematik für Hundehalter: RER, MER und die genaue Tageskalorienmenge entschlüsselt',
        description:
          'Sack-Empfehlungen sind für intakte, aktive, junge Hunde geschrieben — deiner ist es wohl nicht. Die Basis RER = 70 × kg^0,75, MER-Lebensstufen von 3,0× Welpe bis 1,0× Abnahme, die 10-%-Leckerli-Regel und der Body Condition Score.',
      },
    },
  },
  {
    slug: 'home-flooring-and-renovation-math',
    title: 'The Contractor\u2019s Guide to Material Estimating: Calculating Tile, Flooring, and Paint Waste Factors',
    description:
      'The waste factor separates a DIY weekend from a third trip to the store: 10% straight-lay flooring, 15–20% diagonal tile, 350–400 ft² per gallon per coat, batch-number matching, and the 10–20% budget contingency.',
    date: '2026-09-05',
    readTime: '9 min',
    tags: ['renovation', 'flooring', 'tile', 'paint', 'waste-factor'],
    published: true,
    modifiedAt: '2026-10-29',
    relatedSlugs: ['mortgage-piti-and-amortization-guide', 'mortgage-loan-calculators'],
    featuredToolSlugs: ['flooring-calculator', 'paint-calculator', 'paver-calculator', 'drywall-calculator', 'concrete-calculator', 'deck-board-calculator'],
    i18n: {
      zh: {
        title: '包工头的材料估算指南:瓷砖、地板与油漆的损耗系数计算',
        description:
          '损耗系数把"DIY 一个周末"和"第三次跑建材店"分开:直铺地板 10%、斜铺瓷砖 15–20%、每加仑每遍 350–400 ft²、批次号对齐,以及 10–20% 预算不可预见费。',
      },
      es: {
        title: 'Guía del contratista para estimar materiales: factores de desperdicio en baldosa, suelo y pintura',
        description:
          'El factor de desperdicio separa un fin de semana DIY del tercer viaje a la tienda: 10 % en suelo recto, 15–20 % en baldosa diagonal, 350–400 ft² por galón por mano, lotes casados y un 10–20 % de contingencia.',
      },
      de: {
        title: 'Der Handwerker-Leitfaden zur Materialkalkulation: Verschnitt-Faktoren für Fliesen, Boden und Farbe',
        description:
          'Der Verschnitt-Faktor trennt das DIY-Wochenende von der dritten Baumarkt-Fahrt: 10 % gerade verlegt, 15–20 % diagonal, 350–400 ft² pro Gallone pro Anstrich, Chargenabgleich und 10–20 % Budget-Rückstellung.',
      },
    },
  },
  {
    slug: 'mortgage-loan-calculators',
    title: 'Mortgage & Loan Calculators: The Honest Guide (PITI, PMI, Payoff Curves)',
    description:
      'Lenders quote P&I and skip taxes, insurance, and PMI. The real numbers — full PITI, the five-figure lever of extra payments, the rent-vs-buy crossover year, and the minimum-payment trap — with free in-browser calculators.',
    date: '2026-08-26',
    readTime: '7 min',
    tags: ['mortgage', 'loans', 'personal-finance', 'calculators'],
    published: true,
    modifiedAt: '2026-10-29',
    relatedSlugs: ['mortgage-piti-and-amortization-guide', 'hysa-vs-cd-wealth-building-guide', 'home-flooring-and-renovation-math'],
    featuredToolSlugs: ['mortgage-calculator', 'loan-calculator', 'rent-vs-buy-calculator', 'credit-card-minimum-payment-calculator', 'amortization-table-generator', 'refinance-break-even-calculator'],
    i18n: {
      zh: {
        title: '房贷与贷款计算器诚实指南(PITI、PMI、还款曲线)',
        description:
          '银行只报本息、跳过税费保险与 PMI。真实数字——PITI 全口径、提前还款的五位数杠杆、租买交叉年与最低还款陷阱,配套全程浏览器本地运行的免费计算器。',
      },
      es: {
        title: 'Calculadoras hipotecarias y de préstamos: la guía honesta (PITI, PMI, curvas de amortización)',
        description:
          'Los bancos citan capital e intereses y omiten impuestos, seguro y PMI. Los números reales — PITI completo, la palanca de cinco cifras de los pagos extra, el cruce alquilar/comprar y la trampa del mínimo — con calculadoras gratuitas en el navegador.',
      },
      de: {
        title: 'Hypotheken- und Kreditrechner: der ehrliche Leitfaden (PITI, PMI, Tilgungskurven)',
        description:
          'Banken nennen Tilgung und Zins und lassen Steuern, Versicherung und PMI weg. Die echten Zahlen — volle PITI, der fünfstellige Hebel der Sondertilgung, das Mieten-Kaufen-Schnittpunkt-Jahr und die Mindestzahlungs-Falle — mit kostenlosen Rechnern im Browser.',
      },
    },
  },
  {
    slug: 'how-i-built-toolhub',
    title: 'How I Built ToolHub: A Static PWA That Stays Sub-Second',
    description:
      'An architecture retrospective updated October 29, 2026: 350 browser tools, Next.js static export, lazy Service-Worker caching, 1,400 tool-level JSON-LD blocks, and space-reserving ad slots.',
    date: '2026-08-04',
    readTime: '9 min',
    tags: ['architecture', 'seo', 'pwa', 'build-in-public'],
    published: true,
    modifiedAt: '2026-10-29',
    relatedSlugs: ['client-side-cryptography-web-crypto-guide', 'llm-api-pricing-and-tokenomics'],
    featuredToolSlugs: ['json-formatter', 'slug-generator', 'faq-schema-generator', 'open-graph-generator', 'robots-txt-generator'],
    i18n: {
      zh: {
        title: '我是如何构建 ToolHub 的:始终亚秒级的静态 PWA',
        description:
          '2026 年 10 月 29 日更新的架构复盘:350 个浏览器工具、Next.js 静态导出、懒加载 Service Worker 缓存、1,400 个工具级 JSON-LD 块与预留广告空间。',
      },
      es: {
        title: 'Cómo construí ToolHub: una PWA estática que sigue siendo sub-segundo',
        description:
          'Retrospectiva actualizada el 29 de octubre de 2026: 350 herramientas, Next.js estático, caché Service Worker perezosa, 1.400 bloques JSON-LD y espacio reservado para anuncios.',
      },
      de: {
        title: 'Wie ich ToolHub baute: Eine statische PWA, die unter einer Sekunde bleibt',
        description:
          'Aktualisiert am 29. Oktober 2026: 350 Browser-Werkzeuge, Next.js Static Export, Lazy Service-Worker-Cache, 1.400 JSON-LD-Blöcke und reservierter Werbeplatz.',
      },
    },
  },
]

export const publishedBlogPosts = posts.filter((p) => p.published)

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return publishedBlogPosts.find((post) => post.slug === slug)
}
