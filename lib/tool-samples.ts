/**
 * 工具「加载示例」数据注册表 —— 站内唯一的示例数据源(Single Source of Truth)
 *
 * 作用:
 *  为工具交互区提供一键填充的测试数据,降低用户/爬虫体验门槛,
 *  同时让 HowTo JSON-LD 的 Step 1「Input your values ... click Load Sample」
 *  始终对应一个真实可见的页面按钮(避免 schema 与页面失配)。
 *
 * 数据形态分两种:
 *  - 计算器(配置驱动): `calculatorSamples[slug]` —— key→value,
 *    key 对应 CalculatorConfig.inputs[].key。
 *  - 单位转换器(工厂驱动): `converterSamples[slug]` —— { value, from, to },
 *    匹配 makeUnitConverter 的 value/from/to 三个 state。
 *
 * 维护规范:
 *  - 新增某工具示例时,只改本文件;key 必须与该工具 config.inputs 的 key 完全一致。
 *  - 用贴近真实场景的数值(如房贷 $400k/30y/6.8%),既给用户参照也利于 SEO 长尾。
 *  - 未注册的工具返回空对象/undefined,Load Sample 按钮自动隐藏(见 LoadSampleButton)。
 */

// ─────────────────────────── 计算器示例 ───────────────────────────

/**
 * 计算器示例数据:key 对应 makeCalculatorClient 的 config.inputs[].key,
 * value 为字符串(与 input value 类型一致)。
 */
export const calculatorSamples: Record<string, Record<string, string>> = {
  // ── 金融 / 生活计算器 ──
  'loan-calculator': { amount: '400000', rate: '6.8', years: '30' },
  'mortgage-calculator': { home: '400000', down: '20', rate: '6.8', years: '30', tax: '3600', insurance: '1500', hoa: '0', pmiRate: '0.5', extra: '0' },
  'compound-interest-calculator': { principal: '10000', rate: '7', years: '20', monthly: '200' },
  'simple-interest-calculator': { principal: '5000', rate: '5', years: '3' },
  'savings-goal-calculator': { goal: '50000', years: '5', rate: '4', current: '5000' },
  'annuity-calculator': { principal: '300000', years: '20', rate: '5' },
  'credit-card-payoff-calculator': { balance: '8000', apr: '22', payment: '300' },
  'credit-card-minimum-payment-calculator': { balance: '5000', apr: '22', minPct: '2' },
  'roi-calculator': { initial: '10000', final: '15000', years: '3' },
  'apy-calculator': { principal: '10000', apr: '4.5', compound: '12', years: '5' },
  'hysa-calculator': { initial: '10000', monthly: '500', apy: '4.5', years: '5', compound: 'daily' },
  'cd-calculator': { deposit: '10000', apy: '4', term: '12', compound: 'daily', exitAt: '50', penalty: '3' },
  'break-even-calculator': { fixed: '5000', price: '25', variable: '10' },
  'profit-margin-calculator': { cost: '40', mode: 'markup', value: '100' },
  'markup-calculator': { cost: '60', markup: '40' },
  'commission-calculator': { sales: '400000', rate: '3', base: '3000' },
  'tip-calculator': { bill: '85', tipPct: '18', people: '2' },
  'bill-split-calculator': { total: '120', tip: '18', people: '4' },
  'discount-calculator': { price: '79.99', discount: '30' },
  'sales-tax-calculator': { amount: '50', rate: '8.25', mode: 'add' },
  'percentage-calculator': { x: '25', y: '200', mode: '1' },
  'cash-back-calculator': { spend: '24000', rate: '2', fee: '0' },
  'down-payment-calculator': { price: '400000', down: '20' },
  'dti-calculator': { income: '6000', debts: '1500' },
  'income-tax-estimator': { income: '75000', filing: 'single' },
  'capital-gains-tax-estimator': { purchase: '10000', sale: '16000', years: '2', taxableIncome: '80000', filing: 'single' },
  'rent-vs-buy-calculator': { home: '400000', rent: '1800', down: '20', rate: '6.8', term: '30', years: '7' },
  'hourly-to-salary-calculator': { hourly: '28', hours: '40' },
  'salary-converter': { unit: 'annual', amount: '65000', hours: '40' },
  'retirement-calculator': { current: '120000', monthly: '800', rate: '6', years: '30' },
  'net-worth-calculator': { assets: '450000', liabilities: '180000' },
  'inflation-calculator': { amount: '1000', rate: '3', years: '14' },
  'unit-price-calculator': { price1: '12.99', size1: '500', unit1: 'g', price2: '19.99', size2: '750', unit2: 'g' },

  // ── 健康 ──
  'bmi-calculator': { weight: '70', height: '175' },
  'bmr-calculator': { gender: 'male', age: '30', weight: '70', height: '175' },
  'calorie-calculator': { gender: 'male', age: '30', weight: '70', height: '175', activity: 'moderate' },
  'body-fat-calculator': { gender: 'male', height: '175', neck: '38', waist: '85', hip: '95' },
  'macro-calculator': { calories: '2200', goal: 'maintain' },
  'ideal-weight-calculator': { gender: 'male', height: '175' },
  'water-intake-calculator': { weight: '70', activity: '30', climate: 'normal' },
  'pregnancy-due-date-calculator': { lmp: '2026-06-15' },
  'tdee-calculator': { weight: '70', height: '175', age: '30', sex: 'male', activity: '1.55' },

  // ── 计算器型转换器(length 用 makeCalculatorClient,inputs 为 value/from/to)──
  'length-converter': { value: '100', from: 'm', to: 'ft' },

  // ── 数学 / 几何 ──
  'circle-calculator': { r: '8' },
  'triangle-calculator': { a: '3', b: '4' },
  'rectangle-calculator': { w: '12', h: '8' },
  'trapezoid-calculator': { a: '6', b: '10', h: '4' },
  'cube-calculator': { side: '5' },
  'sphere-calculator': { r: '7' },
  'fraction-calculator': { num1: '1', den1: '2', op: 'add', num2: '1', den2: '3' },
  'ratio-calculator': { a: '3', b: '4', c: '9' },
  'lcm-gcd-calculator': { numbers: '12, 18, 24' },
  'combination-calculator': { n: '10', r: '3' },
  'permutation-calculator': { n: '8', r: '3' },
  'average-calculator': { numbers: '12, 15, 22, 9, 30' },
  'standard-deviation-calculator': { numbers: '4, 8, 15, 16, 23, 42' },
  'percentile-calculator': { numbers: '40, 55, 60, 70, 80, 90', p: '75' },
  'prime-number-checker': { n: '9973' },
  'prime-factorization-calculator': { n: '360' },

  // ── 教育成绩 ──
  'gpa-calculator': { courses: '4' },
  'grade-calculator': { earned: '85', possible: '100' },
  'final-grade-calculator': { current: '85', goal: '90', finalWeight: '25' },
  'age-calculator': { dob: '1995-06-15' },
  'age-difference-calculator': { birth1: '1990-06-15', birth2: '1995-03-20' },
  'date-difference-calculator': { start: '2024-01-01', end: '2024-12-31' },

  // ── 其它 ──
  'scientific-notation-converter': { number: '12345.678' },
  // ── 2025-08 新增批次 ──
  'roman-numeral-converter': { num: '2024', roman: '' },
  'pace-calculator': { distance: '10', time: '50:00', unit: 'km' },
  'protein-intake-calculator': { weight: '70', activity: 'moderate', goal: 'gain' },
  'electricity-cost-calculator': { watts: '1500', hours: '4', rate: '0.15' },
  // 自定义 client 的示例(json-diff/line-diff/cooking 经 getCalculatorSample 取)
  'json-diff': {
    left: '{\n  "version": "1.2.0",\n  "deps": { "react": "^18" },\n  "private": true\n}',
    right: '{\n  "version": "1.3.0",\n  "deps": { "react": "^19", "vite": "^5" },\n  "private": false\n}',
  },
  'line-diff-checker': {
    left: 'const retries = 3;\nasync function fetchUser(id) {\n  const res = await api.get(`/users/${id}`);\n  return res.data;\n}',
    right: 'const retries = 5;\nasync function fetchUser(id) {\n  const res = await api.get(`/users/${id}`);\n  if (!res.ok) throw new Error("not found");\n  return res.data;\n}',
  },
  'cooking-converter': { amount: '3', from: 'cup', ingredient: 'flour' },
  // ── 2025-08 第二批 ──
  'fuel-cost-calculator': { distance: '450', consumption: '7.5', price: '1.65', people: '3', roundTrip: 'round' },
  'subscription-cost-calculator': { monthlySubs: '45', yearlySubs: '120', quarterlySubs: '30' },
  'overtime-calculator': { base: '25', regularHours: '40', otMultiplier: '1.5', otHours: '8' },
  'take-home-pay-calculator': { gross: '75000', filing: 'single', preTaxPct: '6', premiums: '2000' },
  'wedding-budget-calculator': { total: '25000', guests: '80' },
  'amortization-table-generator': { principal: '320000', rate: '6.5', years: '30' },
  'heart-rate-zone-calculator': { age: '30', resting: '60' },
  'caffeine-calculator': { mg: '200', hoursAgo: '3', bedtimeIn: '8' },
  'steps-to-calories-calculator': { steps: '10000', weight: '70', height: '175', pace: 'moderate' },
  'paint-calculator': { perimeter: '14', wallHeight: '2.4', doors: '2', windows: '2', coats: '2', unit: 'liter' },
  'dog-age-calculator': { dogAge: '5', size: 'medium' },
  // ── 2025-08 第三批 ──
  'reading-level-checker': {
    text: 'The committee convened to deliberate the ramifications of the proposed infrastructural amendments. Subsequent deliberations illuminated several previously unconsidered contingencies, necessitating further analysis.',
  },
  'hmac-generator': { message: '{"amount":"12.00","currency":"usd"}', secret: 'whsec_test_5f1a2b3c4d' },
  // ── 2025-08 第四批 ──
  'base-converter': { value: '255.5', base: '10' },
  'toml-to-json': {
    toml: '[package]\nname = "my-app"\nversion = "1.2.0"\nedition = "2021"\n\n[dependencies]\nserde = { version = "1", features = ["derive"] }\ntokio = "1"\n\n[[bin]]\nname = "server"\npath = "src/main.rs"',
  },
  // ── 2025-08 第五批(趣味)──
  'wheel-spinner': { items: 'Pizza\nSushi\nTacos\nBurgers\nPasta\nSalad' },
  'morse-code-translator': { text: 'SOS we are here' },
  // ── 2025-08 第六批(AI+安全+养车)──
  'json-to-zod': {
    json: '{\n  "name": "Ada Lovelace",\n  "born": 1815,\n  "verified": true,\n  "tags": ["math", "pioneer"],\n  "profile": { "era": "victorian", "fields": ["analytical engine"] }\n}',
  },
  'car-cost-calculator': { carPrice: '25000', ownYears: '5', kmPerYear: '15000', fuelPrice: '1.6', consumption: '7.5', insurance: '1200', maintenance: '800', resale: '12000' },
  // ── 2025-08 batch7(AI workflow)
  'json-repair': {
    input: 'Here is the data you asked for:\n```json\n{"user": "Ada", age: 36, "tags": [\'math\', \'pioneer\'],}\n```',
  },
  'markdown-fence-extractor': {
    md: 'Solution overview here.\n```python\ndef greet(name):\n    return f"hello {name}"\n```\nRun tests:\n```bash\npytest -q\n```',
  },
  'prompt-template-filler': {
    template: 'You are a {role}. Explain {{topic}} to {{audience}} in {words} words.',
    vars: '{\n  "role": "senior dev",\n  "topic": "closures",\n  "audience": "beginners",\n  "words": 100\n}',
  },
  // ── 2025-08 batch8(AI data)──
  'csv-to-finetune-jsonl': {
    csv: 'system,prompt,completion\n"You are a terse assistant.","Explain closures in one sentence.","Closures capture variables so inner functions keep access after the outer call returns."\n,"Translate: hello","Bonjour"',
  },
  'token-visualizer': {
    text: 'The unbelievable truth about tokenization: quick brown foxes do not really jump over lazy dogs, but URLs like https://example.com/a/very/long/path certainly add up.',
  },

  // ── 2026-09 batch19(变现漏斗修复轮 v4)──
  'roth-ira-calculator': { age: '30', retireAge: '65', contribution: '7000', currentTax: '24', retireTax: '12', returnRate: '7' },
  'fire-calculator': { annualSpending: '40000', currentSavings: '100000', annualSavings: '30000', realReturn: '5', swr: '4' },
  'cac-ltv-calculator': { marketingSpend: '50000', newCustomers: '200', arpu: '50', grossMargin: '80', churn: '5' },
  'flooring-calculator': { length: '15', width: '12', unit: 'ft', type: 'hardwood', waste: '10', boxPrice: '62' },
  'dog-food-calculator': { weight: '20', activity: '1.6', basis: 'cup', density: '375', gramsPerCup: '110' },
  'runway-calculator': { cash: '250000', monthlyBurn: '30000', monthlyRevenue: '10000', revenueGrowth: '5' },
  'freelance-rate-calculator': { targetIncome: '85000', billableHours: '25', weeksPerYear: '46', businessExpenses: '8000', taxRate: '28', profitMargin: '15' },
  // ── B1 房贷与房产金融批次 ──
  'mortgage-affordability-calculator': { income: '84000', debts: '650', down: '40000', rate: '6.6', years: '30', taxRate: '1.1', insurance: '1800', hoa: '0' },
  'refinance-break-even-calculator': { balance: '320000', oldRate: '7.0', remainingYears: '27', newRate: '5.9', newTerm: '30', costs: '4800' },
  'biweekly-mortgage-payment-calculator': { amount: '320000', rate: '6.5', years: '30' },
  'closing-cost-calculator': { price: '400000', downPct: '20', origPct: '0.5', titleEscrowPct: '1.0', fixedFees: '1100', taxRate: '1.1', taxMonths: '4', insYear: '1800', commissionPct: '5.5', sellerOtherPct: '0.9' },
  'property-tax-calculator': { marketValue: '400000', ratio: '80', millage: '20', exemption: '0' },
  'prorated-rent-calculator': { rent: '1800', date: '2026-11-10', period: 'first', basis: 'month' },
  'rental-property-calculator': { price: '300000', downPct: '25', rate: '6.8', years: '30', rent: '2200', vacancyPct: '5', opexMonthly: '450', extraCash: '6000' },
  'house-flip-calculator': { arv: '450000', offer: '240000', repairs: '60000', rehabMonths: '6', holdingMonthly: '1200', buyPct: '3', sellPct: '7' },
  // ── batch24(B4 家庭与人生大事)──
  'college-savings-calculator': { childAge: '8', annualCost: '30000', years: '4', inflation: '5', currentSavings: '10000', returnRate: '6' },
  '401k-match-calculator': { salary: '75000', contribPct: '4', matchPct: '50', matchLimitPct: '6' },
  'social-security-break-even-calculator': { birthYear: '1965', pia: '2000' },
  'student-loan-payment-calculator': { balance: '35000', rate: '6.8', deferred: '6' },
  'car-lease-calculator': { msrp: '45000', price: '41000', residualPct: '55', moneyFactor: '0.00225', months: '36', down: '3000', fees: '995' },
  'ev-charging-cost-calculator': { annualMiles: '12000', efficiency: '3.5', homeRate: '0.17', publicRate: '0.45', publicShare: '20', mpg: '30', gasPrice: '3.50' },
  'rent-budget-calculator': { income: '6000', basis: 'gross' },
  'christmas-budget-calculator': { total: '800', family: '5', friends: '6', coworkers: '4' },
  // ── 2026-10 batch26(B6 健身与身体指标)──
  'one-rep-max-calculator': { weight: '100', reps: '5', unit: 'kg' },
  'race-time-predictor': { dist: '10', hours: '0', minutes: '50', seconds: '0', target: 'marathon' },
  'vo2-max-calculator': { distance: '2400', hrmax: '190', hrrest: '60' },
  'body-surface-area-calculator': { height: '175', weight: '70' },
  'waist-to-height-ratio-calculator': { waist: '85', height: '175' },
  'steps-to-miles-calculator': { steps: '10000', mode: 'auto', height: '175', stride: '72', pace: 'moderate' },
  'weight-loss-goal-calculator': { current: '85', goal: '75', rate: '0.5' },
  'fiber-intake-calculator': { age: '35', sex: 'male' },
  // ── B5 平台费与营销批次 ──
  'paypal-fee-calculator': { mode: 'forward', amount: '100', feePct: '3.49', fixedFee: '0.49' },
  'etsy-fee-calculator': { price: '25', shipping: '4', quantity: '1', ordersMonth: '10', procPct: '3', procFixed: '0.25', offsiteAds: '15' },
  'amazon-seller-fee-calculator': { price: '25', cogs: '8', otherCost: '2', referral: '15', fbaFee: '5.00' },
  'square-fee-calculator': { mode: 'forward', amount: '100', pct: '2.6', fixed: '0.10' },
  'youtube-money-calculator': { monthlyViews: '100000', rpmLow: '2', rpmTypical: '4', rpmHigh: '8' },
  'nps-calculator': { promoters: '250', passives: '90', detractors: '60' },
  'conversion-rate-calculator': { visitors: '5000', conversions: '120', spend: '600', liftPct: '20' },
  'gym-cost-per-visit-calculator': { fee: '45', cycle: 'monthly', visits: '8', dropIn: '15' },
  // ── B8 建材与施工 ──
  'concrete-calculator': { shape: 'slab', length: '10', width: '8', thickness: '4', waste: '10' },
  'mulch-calculator': { length: '20', width: '10', depth: '3', bagSize: '2', price: '4.50' },
  'gravel-calculator': { length: '20', width: '10', depth: '3', material: 'crushed', price: '45' },
  'drywall-calculator': { perimeter: '40', height: '8', ceilL: '12', ceilW: '10', panel: '4x8' },
  'roofing-calculator': { length: '30', width: '20', pitch: '6', waste: '10' },
  'fence-calculator': { length: '100', spacing: '8', style: 'privacy', picketW: '5.5', gap: '0', holeD: '10', holeDepth: '24' },
  'paver-calculator': { length: '16', width: '12', paver: '4x8', base: '4', waste: '10' },
  'deck-board-calculator': { length: '16', width: '12', boardW: '5.5', gap: '0.125', boardLen: '16', joist: '16' },
  // ── 2025-10 B2 投资与交易批次 ──
  'dividend-calculator': { shares: '200', price: '50', dps: '2.40', growth: '3', drip: 'yes', years: '10' },
  'dca-calculator': { amount: '500', freq: 'monthly', months: '12', startPrice: '100', endPrice: '80' },
  'stock-average-calculator': { q1: '100', p1: '48', q2: '100', p2: '38', q3: '50', p3: '30', q4: '0', p4: '0', fee: '0', current: '36' },
  'options-profit-calculator': { pos: 'longCall', strike: '100', premium: '3.50', contracts: '1', target: '110' },
  'crypto-profit-calculator': { qty: '0.5', buy: '40000', sell: '52000', feePct: '0.1', targetProfit: '1000' },
  'treasury-bill-calculator': { face: '1000', rate: '4.5', days: '91' },
  'bond-yield-calculator': { face: '1000', coupon: '5', price: '950', years: '8' },
  'lottery-odds-calculator': { game: 'powerball' },
  // ── 2026-10 batch23(B3 税与工作收入)──
  'self-employment-tax-calculator': { netProfit: '80000', w2Wages: '0', year: '2025', filing: 'single' },
  'depreciation-calculator': { cost: '50000', salvage: '5000', life: '5', method: 'sl' },
  'mileage-reimbursement-calculator': { miles: '1200', purpose: 'business', year: '2025', customRate: '0.35' },
  'contractor-vs-employee-calculator': { pay: '100000', effRate: '22', health1099: '7200', premiumsW2: '2400', matchValue: '2000' },
  'gross-up-calculator': { targetNet: '5000', rate: '29.65' },
  'commute-cost-calculator': { distance: '20', days: '5', weeks: '48', method: 'irs', rate: '0.70', mpg: '28', gasPrice: '3.50', minutes: '30', wage: '30' },
  'smoking-cost-calculator': { perDay: '15', packPrice: '12', returnRate: '7' },
  'emergency-fund-calculator': { monthlyExpenses: '3500', currentSavings: '4000', monthlySave: '500', targetMonths: '6' },
  // ── B9 家居与厨房 batch29 ──
  'btu-calculator': { area: '350', ceiling: '9', sun: 'sunny', topFloor: 'yes', occupants: '3', kitchen: 'no' },
  'board-foot-calculator': { thickness: '1.5', width: '5.5', length: '8', qty: '10', price: '6.5' },
  'wallpaper-calculator': { perimeter: '48', height: '8', doors: '2', windows: '2', rollWidth: '27', rollLength: '33', repeat: '10' },
  'raised-bed-soil-calculator': { unit: 'ft', length: '8', width: '4', depth: '12' },
  'generator-wattage-calculator': { fridge: '1', furnace: '1', lights: '1', microwave: '1' },
  'pool-volume-calculator': { shape: 'rect', length: '32', width: '16', width2: '10', depth: '5', flow: '60' },
  'coffee-ratio-calculator': { method: '16', amount: '500', known: 'water' },
  'bread-hydration-calculator': { flour: '500', water: '350', levain: '100', levainHyd: '100', saltPct: '2' },
  // ── 2026-10 batch27(B7 家庭健康与宠物)──
  'ovulation-calculator': { lmp: '2026-10-01', cycle: '28', luteal: '14' },
  'pregnancy-weight-gain-calculator': { height: '165', preWeight: '61.9', curWeight: '67.5', week: '24', babies: 'single' },
  'diaper-cost-calculator': { perDay: '7', cost: '0.28', months: '30', clothCost: '600' },
  'cat-age-calculator': { catAge: '5' },
  'cat-food-calculator': { weight: '4', factor: '1.2', basis: 'can', density: '95', canWeight: '85' },
  'zodiac-sign-calculator': { month: '3', day: '21' },
  'chinese-zodiac-calculator': { year: '1990', edge: 'after' },
  // ── B10 时间与日期推算批(batch30)──
  'time-card-calculator': { clockIn: '08:30', clockOut: '17:00', breakMin: '45', weekSoFar: '32.5', otThreshold: '40' },
  'business-days-calculator': { startDate: '2026-11-23', direction: 'add', count: '5', holidays: '2026-11-26, 2026-12-25' },
  'week-number-calculator': { date: '2026-12-28' },
  'pto-accrual-calculator': { annualHours: '120', frequency: '26', periodsElapsed: '18', usedHours: '40', carryCap: '40' },
  'download-time-calculator': { size: '4.5', sizeUnit: 'GB', speed: '100', speedUnit: 'Mbps', overhead: '10' },
  'tire-size-calculator': { tire1: '225/45R17', tire2: '235/45R17', speed: '60' },
  'wind-chill-calculator': { temp: '-5', tUnit: 'C', wind: '30', wUnit: 'kmh' },
  // ── B11 数学与统计(batch31)──
  'quadratic-equation-solver': { a: '1', b: '-3', c: '2' },
  'slope-calculator': { x1: '1', y1: '2', x2: '4', y2: '8' },
  'confidence-interval-calculator': { mode: 'mean', mean: '4.2', sd: '1.1', n: '150', level: '95' },
  'sample-size-calculator': { N: '100000', level: '95', moe: '5', p: '50' },
  'z-score-calculator': { mode: 'x2z', x: '130', z: '1.96', mu: '100', sigma: '15' },
  'bayes-theorem-calculator': { prior: '1', sens: '95', spec: '90' },
  'heat-index-calculator': { temp: '92', tUnit: 'F', rh: '70' },
  'dew-point-calculator': { temp: '25', tUnit: 'C', rh: '60' },
  // ── B14 生成器与趣味批(batch34)──
  'username-generator': { keyword: 'nova', style: 'gamer', maxLen: '20' },
  'secret-santa-generator': { names: 'Alice\nBob\nCarla\nDev\nEmma\nFrank', exclusions: 'Alice - Bob\nCarla - Dev' },
  // ── B13 电子与音频批(batch33)──
  'ohms-law-calculator': { voltage: '12', current: '0.5', resistance: '', power: '' },
  'led-resistor-calculator': { supply: '5', vf: '2.0', current: '20' },
  'voltage-divider-calculator': { mode: 'forward', vin: '12', r1: '10000', r2: '4700', targetVout: '3.3' },
  'delay-time-calculator': { bpm: '120' },
  // ── 2026-10 batch32(B12 开发者数据)──
  'utm-link-builder': { url: 'https://example.com/pricing', source: 'newsletter', medium: 'email', campaign: 'october-2026-launch', term: '', content: 'footer-cta' },
  'graphql-formatter': {
    gql: '# Fetch one user with their 3 latest posts\nquery UserProfile($id: ID!, $withPosts: Boolean! = true) {\n  user(id: $id) {\n    id name\n    email\n    posts(first: 3, orderBy: {field: CREATED_AT, direction: DESC}) @include(if: $withPosts) {\n      edges { node { title publishedAt } }\n      totalCount\n    }\n    ...UserAvatar\n  }\n}\n\nfragment UserAvatar on User { avatarUrl(size: 96) }',
  },
  'css-minifier': {
    css: '/* Base card styles */\n.card {\n  padding: 0px;\n  margin: 0 auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  font-family: "Open Sans", sans-serif;\n}\n\n.card__title {\n  font-size: 1.5rem;\n  line-height: 1.2;\n  letter-spacing: 0.02em;\n}\n\n/*! keep this banner after minify */\n@media (max-width: 600px) {\n  .card {\n    width: calc(100% - 32px);\n  }\n}',
  },
  'csv-to-sql-converter': {
    csv: 'id,name,email,signup_date,plan\n1,Ada Lovelace,ada@example.com,2026-01-14,pro\n2,"Liskov, Barbara",bl@example.com,2026-02-02,free\n3,Alan Turing,,2026-03-30,pro',
  },
}

// ─────────────────────────── 单位转换器示例 ───────────────────────────

/**
 * 单位转换器示例数据:匹配 makeUnitConverter 的 value/from/to 三个 state。
 * from/to 用的是 unit key(对应 makeUnitConverter config.units 的 key),非显示标签。
 */
export interface ConverterSample {
  value: string
  /** 起始单位 key(对应 makeUnitConverter config.units 的 key) */
  from: string
  /** 目标单位 key */
  to: string
}

export const converterSamples: Record<string, ConverterSample> = {
  // 仅 makeUnitConverter 工厂型转换器在此(单位键对应该 config.units 的 key)。
  // length 用的是 makeCalculatorClient,其示例在上方 calculatorSamples 里;
  // temperature 是独立组件。
  'weight-converter': { value: '70', from: 'kg', to: 'lb' },
  'speed-converter': { value: '100', from: 'kmh', to: 'mph' },
  'area-converter': { value: '1', from: 'acre', to: 'sqm' },
  'volume-converter': { value: '2', from: 'cup', to: 'ml' },
  'time-converter': { value: '2', from: 'h', to: 'min' },
  'data-storage-converter': { value: '500', from: 'gb', to: 'gib' },
  'mass-converter': { value: '5', from: 'kg', to: 'carat' },
  'density-converter': { value: '1', from: 'kgm3', to: 'gl' },
  'power-converter': { value: '1', from: 'hp', to: 'w' },
  'flow-rate-converter': { value: '1000', from: 'cfm', to: 'm3h' },
  'angle-converter': { value: '1', from: 'rev', to: 'deg' },
  'fuel-economy-converter': { value: '45', from: 'mpg-us', to: 'kml' },
  'pressure-converter': { value: '32', from: 'psi', to: 'bar' },
  'energy-converter': { value: '1', from: 'kwh', to: 'j' },
  'frequency-converter': { value: '3600', from: 'rpm', to: 'hz' },
}

// ─────────────────────────── 取数 helper ───────────────────────────

/** 读取计算器示例;无记录返回 undefined(LoadSampleButton 自动隐藏)。 */
export function getCalculatorSample(slug: string): Record<string, string> | undefined {
  return calculatorSamples[slug]
}

/** 读取单位转换器示例;无记录返回 undefined。 */
export function getConverterSample(slug: string): ConverterSample | undefined {
  return converterSamples[slug]
}
