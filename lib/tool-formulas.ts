/**
 * 工具公式注册表 —— "Formula / 原理公式" 区的数据源
 *
 * 作用:
 *  为计算器类工具在详情页中部 SEO 区渲染一段「原理公式」,
 *  解释工具背后的数学/物理/金融公式。利于:
 *   1. SEO 内容厚度(权威性、长尾词如 "x formula");
 *   2. 用户信任(透明展示计算依据);
 *   3. 教育/引用价值(吸引外链)。
 *
 * 维护规范(与 tool-faqs.ts 一致):
 *  - 只在此文件加/改公式,不要在内容组件里另写;
 *  - 每条 = { formula(展示主公式), explain(1-3 句通俗解释,可选) };
 *  - formula 支持纯文本;组件以等宽字体渲染,保留换行;
 *  - 只给有明确闭式公式的工具填,工具型(文本/生成器)不要硬凑。
 *
 * 语言:explain 为英文(英文站面向 Google 的可见正文,必须英文)。
 * 本地化的 explain 见 lib/i18n/tools-l10n/<slug>.ts(FormulaSection 优先取本地化)。
 *
 * 用法:
 *   <FormulaSection slug="loan-calculator" />
 *   getToolFormula('loan-calculator') → ToolFormula | null
 */

export interface ToolFormula {
  /** 主公式,等宽展示,保留换行。例: "M = P × r(1+r)^n / ((1+r)^n − 1)" */
  formula: string
  /** 变量说明 / 通俗解释(可选),普通文本(英文) */
  explain?: string
}

export const toolFormulas: Record<string, ToolFormula> = {
  // ───────── 贷款 / 金融 ─────────
  'loan-calculator': {
    formula: 'M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]',
    explain:
      'Equal monthly payment (amortization). P = principal, r = monthly rate (annual rate ÷ 12), n = total number of months. M is the fixed monthly payment.',
  },
  'mortgage-calculator': {
    formula: 'M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]',
    explain:
      'Monthly mortgage payment (amortization). P = loan principal, r = monthly rate, n = number of months. This tool adds PMI, property tax, and insurance estimates on top.',
  },
  'simple-interest-calculator': {
    formula: 'I = P × r × t',
    explain:
      'Simple interest. P = principal, r = annual rate (as a decimal), t = years. I is the interest accrued over the period.',
  },
  'compound-interest-calculator': {
    formula: 'A = P × (1 + r/n)^(n·t) + PMT × [((1 + r/n)^(n·t) − 1) / (r/n)]',
    explain:
      'Compound interest (future value). P = initial principal, PMT = recurring periodic contribution, r = annual rate, n = compounding periods per year, t = years. A is the total balance at the end; the first term grows the principal and the second is the future value of the contributions.',
  },
  'apy-calculator': {
    formula: 'APY = (1 + r/n)^n − 1',
    explain:
      'Annual Percentage Yield. r = nominal annual rate, n = compounding periods per year. APY reflects the true annual return after compounding.',
  },
  'cash-back-calculator': {
    formula: 'Cash back = Σ ( spendᵢ × rateᵢ ) − annual fee',
    explain:
      'Multiply spend in each category by its reward rate, sum across categories, then subtract the card annual fee. Bonus rates apply only up to their quarterly or yearly spend caps.',
  },

  // ───────── 百分比 ─────────
  'percentage-calculator': {
    formula: 'part = ( percent / 100 ) × whole',
    explain:
      'Finding "a percent of a number": convert the percent to a decimal and multiply by the whole. Reverse: percent = part / whole × 100.',
  },

  // ───────── 健康 ─────────
  'bmi-calculator': {
    formula: 'BMI = weight(kg) / height(m)^2',
    explain:
      'Metric BMI. For imperial units, use BMI = 703 × weight(lb) / height(in)². WHO adult categories: 18.5–24.9 is the healthy range.',
  },
  'bmr-calculator': {
    formula: 'BMR(men) = 10W + 6.25H − 5A + 5\nBMR(women) = 10W + 6.25H − 5A − 161',
    explain:
      'Mifflin-St Jeor basal metabolic rate. W = weight (kg), H = height (cm), A = age. BMR is the daily calories burned at rest.',
  },
  'water-intake-calculator': {
    formula: 'Water (ml) ≈ 35 ml × weight (kg)   [ ≈ 0.5 oz × weight (lb) ]',
    explain:
      'A common hydration baseline: about half your body weight in pounds, taken as ounces per day — roughly 35 ml per kg. The calculator then adjusts this baseline upward for exercise, hot climate, and pregnancy.',
  },

  // ───────── 几何 ─────────
  'circle-calculator': {
    formula: 'A = π·r²    C = 2π·r',
    explain: 'Circle area A and circumference C, where r is the radius.',
  },
  'triangle-calculator': {
    formula: 'A = ½ × b × h',
    explain: 'Triangle area. b = base length, h = corresponding height.',
  },
  'rectangle-calculator': {
    formula: 'A = w × h',
    explain: 'Rectangle area. w = width, h = height.',
  },
  'cube-calculator': {
    formula: 'V = s³    SA = 6s²',
    explain: 'Cube volume V and surface area SA, where s is the edge length.',
  },

  // ───────── 单位 / 数学 ─────────
  'weight-converter': {
    formula: 'lb = kg × 2.2046226218    oz = lb × 16    kg = lb × 0.45359237',
    explain:
      'Kilograms to pounds and ounces. 1 kg = 2.20462 lb, 1 lb = 16 oz, 1 g = 0.035274 oz. Conversions use the international avoirdupois pound, the exact standard since 1959.',
  },
  'prime-number-checker': {
    formula: 'n is prime ⟺ n > 1 and n mod d ≠ 0 for every d in [2, √n]',
    explain:
      'Trial division up to the square root: any composite n must have a factor at or below √n, so testing larger divisors is unnecessary. 1 is not prime by definition; 2 is the only even prime.',
  },
  'temperature-converter': {
    formula: '°C = (°F − 32) × 5/9\nK = °C + 273.15',
    explain: 'Fahrenheit → Celsius → Kelvin conversion.',
  },
  'average-calculator': {
    formula: 'mean = ( Σ xᵢ ) / n',
    explain: 'Arithmetic mean. xᵢ are the data points, n is the count.',
  },
  'standard-deviation-calculator': {
    formula: 'σ = √[ Σ(xᵢ − x̄)² / n ]',
    explain:
      'Population standard deviation. x̄ is the mean, n is the number of data points. Sample standard deviation uses n−1 in the denominator.',
  },
  'ip-checker': {
    formula: 'Risk Score = W_type × S_datacenter + W_tz × S_timezone_diff + W_bl × S_blacklist',
    explain:
      'A heuristic weighted model. S_datacenter is scored 1 when the ASN owner matches datacenter keywords such as AWS, hosting, or cloud, and carries the highest weight W_type. S_timezone_diff flags a mismatch between your device timezone and the IP geolocation timezone (a classic proxy leak signal). S_blacklist approximates proxy/VPN keywords and public blacklist traits. The total is scaled to 0–100: 0–20 low risk (native residential), 21–60 medium risk (hosting/VPN traits), 61–100 high risk (proxy/Tor/blacklisted).',
  },

  // ───────── Finance(补缺)─────────
  'roi-calculator': {
    formula: 'ROI = (Gain − Cost) / Cost × 100%',
    explain:
      'Return on investment. Gain = final value − cost (or sale price − purchase price). Expressed as a percentage of the original cost.',
  },
  'credit-card-minimum-payment-calculator': {
    formula: 'Min payment = max( balance × min%, fixed floor )',
    explain:
      'Issuers charge the larger of a small percentage of the balance (often 1–3%) and a fixed floor (e.g. $25). Interest is then added on the remaining balance until it is paid off.',
  },
  'down-payment-calculator': {
    formula: 'Down payment = price × rate\nLoan = price − down payment',
    explain:
      'Down payment is the upfront cash portion, usually quoted as a percentage of the price. The loan covers the rest; a larger down payment lowers the principal, the monthly payment, and often the interest rate.',
  },
  'dti-calculator': {
    formula: 'DTI = ( total monthly debt / gross monthly income ) × 100%',
    explain:
      'Debt-to-income ratio. Include housing, auto, student, and minimum card payments plus the new loan, divided by gross (pre-tax) monthly income. Lenders usually want this under 36–43%.',
  },
  'commission-calculator': {
    formula: 'Commission = sales × rate + bonus',
    explain:
      'Pay tied to sales. Rate is the percentage earned per sale; an optional bonus is added for hitting quotas. Total pay often combines a base salary with this commission.',
  },
  'savings-goal-calculator': {
    formula: 'FV = P(1+r)^n + PMT × [ ((1+r)^n − 1) / r ]',
    explain:
      'Future value of a starting balance P plus a recurring deposit PMT. r = period rate, n = number of periods. This is how regular contributions compound toward a savings target.',
  },
  'net-worth-calculator': {
    formula: 'Net worth = total assets − total liabilities',
    explain:
      'Assets are what you own (cash, investments, home, car); liabilities are what you owe (mortgage, loans, card balances). Positive net worth means assets exceed debts.',
  },
  'annuity-calculator': {
    formula: 'PMT = P × [ r(1+r)^n / ((1+r)^n − 1) ]',
    explain:
      'Fixed payment (PMT) that pays off a present value P over n periods at rate r — the same amortization formula as a loan, used here for annuity payout planning.',
  },
  'capital-gains-tax-estimator': {
    formula: 'Gain = sale − basis\nTax = Σ (bracket share of gain × bracket rate)\nNet = gain − tax',
    explain:
      'Basis is usually the purchase price plus costs. Long-term gains (held more than 1 year) stack on top of your ordinary income and each 0%/15%/20% bracket is applied to the slice of the gain falling inside it, so the rate shown is a blended effective rate; short-term gains are added to ordinary income and taxed at those brackets.',
  },
  'inflation-calculator': {
    formula: 'Future value = present × (1 + i)^n',
    explain:
      'Purchasing-power erosion. i = annual inflation rate, n = years. The same money buys proportionally less as prices compound upward over time.',
  },
  'retirement-calculator': {
    formula: 'Balance = P(1+r)^n + PMT × [ ((1+r)^n − 1) / r ]\nSafe withdrawal ≈ Balance × 4%',
    explain:
      'Compounded savings (starting balance P plus recurring PMT at return r for n years) form the nest egg; a common rule of thumb is to withdraw about 4% of it per year.',
  },
  'unit-price-calculator': {
    formula: 'Unit price = total price / quantity',
    explain:
      'Price per single unit (per ounce, per item, per meter). Comparing unit prices — not package prices — reveals the true best buy when sizes differ.',
  },
  'markup-calculator': {
    formula: 'Selling price = cost × (1 + markup%)',
    explain:
      'Markup is added on top of cost to set the selling price. Note markup% is relative to cost, whereas margin% is relative to the selling price — they are not the same number.',
  },
  'hourly-to-salary-calculator': {
    formula: 'Annual salary = hourly rate × hours/week × weeks/year',
    explain:
      'Convert an hourly wage to a yearly salary. The standard assumption is 40 hours/week and 52 weeks/year (2,080 hours), which you can adjust for part-time or unpaid time off.',
  },
  'credit-card-payoff-calculator': {
    formula: 'months = − ln( 1 + r·B / PMT ) / ln(1 + r)',
    explain:
      'Months to pay off balance B with fixed payment PMT at monthly rate r. Larger payments shrink the time steeply because less interest accrues each month.',
  },
  'income-tax-estimator': {
    formula: 'Tax = Σ ( income in bracket × bracket rate )',
    explain:
      'Progressive (bracketed) tax: each portion of income is taxed at its own bracket rate, then summed. Your marginal rate is the top bracket you touch; your effective rate is tax ÷ income.',
  },
  'salary-converter': {
    formula: 'Annual = hourly × 2080\nMonthly = annual / 12',
    explain:
      'Converts between hourly, weekly, monthly, and annual pay. Assumes 2,080 working hours per year (40 h × 52 w); adjust the hours for a different schedule.',
  },
  'sales-tax-calculator': {
    formula: 'tax = price × rate\ntotal = price × (1 + rate)',
    explain:
      'Sales tax is a percentage of the pre-tax price added at checkout. rate is expressed as a decimal (e.g. 0.08 for 8%).',
  },
  'tip-calculator': {
    formula: 'tip = bill × rate\ntotal = bill + tip',
    explain:
      'Tip is a chosen percentage of the bill (15–20% is common for sit-down service in the US). Split the total by the number of diners for a per-person share.',
  },
  'discount-calculator': {
    formula: 'saved = price × discount%\nfinal = price × (1 − discount%)',
    explain:
      'A percentage discount reduces the original price. For stacked discounts apply them in sequence — each acts on the already-reduced price.',
  },
  'auto-loan-calculator': {
    formula: 'M = P × [ r(1+r)^n ] / [ (1+r)^n − 1 ]',
    explain:
      'Monthly auto-loan payment (amortization). P = amount financed (price − down payment − trade-in + tax/fees), r = monthly APR, n = total months.',
  },
  'ebay-fee-calculator': {
    formula: 'Net = sale − [ sale × finalValue% + fixed + sale × processing% ]',
    explain:
      'eBay deducts a final value fee (a percentage of the total sale) plus a fixed per-order fee and a payment processing percentage. The net is what reaches your account.',
  },
  'saas-ltv-churn-calculator': {
    formula: 'LTV = ARPU / churn\nLTV:CAC = LTV / CAC',
    explain:
      'Customer lifetime value equals average revenue per user divided by the churn rate (average lifetime ≈ 1/churn). LTV:CAC compares value to acquisition cost; 3:1 is a common target.',
  },
  'reverse-stripe-fee-calculator': {
    formula: 'Charge = ( target + fixed ) / (1 − rate%)',
    explain:
      'Reverse fee math: to net a target amount after a percentage rate plus a fixed fee, gross up by dividing by (1 − rate) and adding the fixed part back. This is the price to charge the customer.',
  },

  // ───────── Math(补缺)─────────
  'trapezoid-calculator': {
    formula: 'A = ½ × (a + b) × h',
    explain: 'Trapezoid area. a and b are the two parallel sides (bases), h is the perpendicular height between them.',
  },
  'sphere-calculator': {
    formula: 'V = 4/3 × π × r³\nSA = 4 × π × r²',
    explain: 'Sphere volume V and surface area SA, where r is the radius.',
  },
  'scientific-notation-converter': {
    formula: 'N = a × 10^n    (1 ≤ |a| < 10)',
    explain:
      'Scientific notation writes a number as a mantissa a times a power of ten. The exponent n shows the order of magnitude; converting just moves the decimal point.',
  },
  'prime-factorization-calculator': {
    formula: 'n = p₁^e₁ × p₂^e₂ × … × pₖ^eₖ',
    explain:
      'Every integer > 1 factors uniquely into primes. The exponents count how many times each prime divides n. The tool divides out 2, then 3, 5, … up to √n.',
  },
  'combination-calculator': {
    formula: 'C(n, k) = n! / [ k! × (n − k)! ]',
    explain:
      'Number of ways to choose k items from n without regard to order. Read as "n choose k"; central to binomial probability and Pascal\'s triangle.',
  },
  'permutation-calculator': {
    formula: 'P(n, k) = n! / (n − k)!',
    explain:
      'Number of ordered arrangements of k items chosen from n. Unlike combinations, order matters, so P(n,k) ≥ C(n,k).',
  },
  'percentile-calculator': {
    formula: 'rank = ( P / 100 ) × (n − 1)',
    explain:
      'Position of the P-th percentile in a sorted list of n values. The value is then interpolated between neighboring ranks when rank is not a whole number.',
  },
  'fraction-calculator': {
    formula: 'a/b ± c/d = (a·d ± b·c) / (b·d)\na/b × c/d = (a·c)/(b·d)',
    explain:
      'Add/subtract with a common denominator, multiply numerators and denominators. Results are reduced to lowest terms by dividing out the greatest common divisor.',
  },
  'ratio-calculator': {
    formula: 'a : b = (a/g) : (b/g),    g = GCD(a, b)',
    explain:
      'Simplify a ratio by dividing both terms by their greatest common divisor. Scaling multiplies both terms by the same factor so the proportion is preserved.',
  },
  'lcm-gcd-calculator': {
    formula: 'GCD via Euclid\nLCM(a, b) = (a × b) / GCD(a, b)',
    explain:
      'The GCD is found by repeated remainder (Euclid\'s algorithm). The LCM follows from the identity linking the two — multiplying the numbers and dividing by their GCD.',
  },

  // ───────── Health(补缺)─────────
  'calorie-calculator': {
    formula: 'TDEE = BMR × activity factor',
    explain:
      'Total daily energy expenditure. BMR (Mifflin-St Jeor) is calories at rest; the activity factor (≈1.2 sedentary to ≈1.9 very active) scales it for movement. Eat below TDEE to lose weight.',
  },
  'tdee-calculator': {
    formula: 'TDEE = BMR × activity factor',
    explain:
      'Total Daily Energy Expenditure. Multiply basal metabolic rate by an activity factor: ~1.2 sedentary, ~1.55 moderate, ~1.9 very active. TDEE is the maintenance calorie level.',
  },
  'body-fat-calculator': {
    formula: 'BF% (US Navy) from height, neck, waist (and hip for women)',
    explain:
      'The U.S. Navy method estimates body-fat percentage from circumference measurements. It is convenient and free but less precise than clinical methods like DEXA or hydrostatic weighing.',
  },
  'macro-calculator': {
    formula: 'grams = ( calories × macro% ) / kcalPerGram',
    explain:
      'Split daily calories into protein, carbs, and fat by percentage, then convert each to grams (protein and carbs = 4 kcal/g, fat = 9 kcal/g).',
  },
  'pregnancy-due-date-calculator': {
    formula: 'Due date = LMP + 280 days',
    explain:
      'Naegele\'s rule: add 280 days (40 weeks) to the first day of the last menstrual period. Actual delivery varies by roughly two weeks either way; it is an estimate, not a guarantee.',
  },
  'ideal-weight-calculator': {
    formula: 'Devine: men 50 + 2.3×(height_in − 60)\n         women 45.5 + 2.3×(height_in − 60)',
    explain:
      'A common formula (Devine) estimates ideal body weight in kg from height above 5 feet. It is a population reference, not a personal health target — build and muscle mass vary widely.',
  },

  // ───────── Education(补缺)─────────
  'grade-calculator': {
    formula: 'grade = Σ ( scoreᵢ × weightᵢ ) / Σ weightᵢ',
    explain:
      'Weighted average. Each score is multiplied by its weight (e.g. exam 40%, homework 60%), then divided by the total weight. Higher-weighted items move the grade more.',
  },
  'final-grade-calculator': {
    formula: 'needed = ( target − current × (1 − w) ) / w',
    explain:
      'Score required on the final to reach a target overall grade. current is your grade so far, w is the final\'s weight (as a decimal). It tells you what you must score on what remains.',
  },
  'gpa-calculator': {
    formula: 'GPA = Σ ( gradePoint × credits ) / Σ credits',
    explain:
      'Grade point average. Convert each letter grade to points (A = 4.0), multiply by course credits, sum, then divide by total credits. Weighted GPA adds extra points for honors/AP courses.',
  },

  // ───────── Developer / Web / Time(补缺)─────────
  'gpt-token-counter': {
    formula: 'tokens ≈ characters / 4',
    explain:
      'A rule-of-thumb estimate: English text averages roughly 4 characters per token, refined by splitting on words and punctuation. Real counts depend on the model\'s exact tokenizer.',
  },
  'ip-subnet-calculator': {
    formula: 'addresses = 2^(32 − prefix)\nusable hosts = 2^(32 − prefix) − 2',
    explain:
      'For an IPv4 /prefix, the host bits are (32 − prefix). Two addresses are reserved (network and broadcast), so usable hosts are two fewer than the total address count.',
  },
  'chmod-calculator': {
    formula: 'octal digit = read(4) + write(2) + execute(1)',
    explain:
      'Each of the three groups (owner, group, others) becomes one octal digit by adding the enabled permission values. rwx = 7, rw- = 6, r-x = 5.',
  },
  'aspect-ratio-calculator': {
    formula: 'h₂ = h₁ × ( w₂ / w₁ )',
    explain:
      'Resize while keeping the aspect ratio: the height scales by the same factor as the width. Given one new dimension, the other is computed to preserve the proportion.',
  },
  'color-contrast-checker': {
    formula: 'CR = ( L_lighter + 0.05 ) / ( L_darker + 0.05 )',
    explain:
      'WCAG contrast ratio of two colors from their relative luminance L. Ratios ≥ 4.5 pass AA for normal text; ≥ 7 passes AAA. The 0.05 accounts for ambient light flare.',
  },
  'px-to-rem': {
    formula: 'rem = px / root font size (px)',
    explain:
      'Convert pixels to rem relative to the root font size (default 16 px). rem scales with user font settings, so it is the accessible unit for type and spacing.',
  },
  'date-difference-calculator': {
    formula: 'days = date₂ − date₁',
    explain:
      'The whole-day difference between two calendar dates, counting each midnight crossed. Time-of-day and time-zone settings can add or subtract a day at the edges.',
  },
  'days-countdown-calculator': {
    formula: 'days remaining = target date − today',
    explain:
      'Calendar days from today to the target date. Business-day mode further excludes Saturdays and Sundays from the count.',
  },
  'timezone-converter': {
    formula: 'local time = UTC + offset',
    explain:
      'Every time zone is UTC plus a fixed offset (which may shift with daylight saving). Converting between zones goes through UTC: add one offset, subtract the other.',
  },

  // ───────── batch18 高商业意图工具(2026-09)─────────
  'hysa-calculator': {
    formula: 'FV = P × (1 + r/n)^(n·t) + PMT × [((1 + r/n)^(n·t) − 1) / (r/n)]',
    explain:
      'High-yield savings growth. P = initial deposit, PMT = monthly deposit, r = APY (decimal), n = compounding periods per year (365 for daily), t = years. The first term compounds the principal; the second grows the deposit stream.',
  },
  'cd-calculator': {
    formula: 'Maturity = P × (1 + r/n)^(n·t) · Penalty = P × (r/12) × penalty months',
    explain:
      'Certificate of Deposit value at maturity with r = annual rate, n = compounding frequency, t = term in years. An early exit keeps accrued interest minus the penalty, which banks quote as months of interest on principal — never touching principal itself.',
  },
  'break-even-calculator': {
    formula: 'Break-even units = Fixed Costs ÷ (Price − Variable Cost)',
    explain:
      'Sales volume where total revenue equals total cost. Contribution margin per unit (Price − Variable Cost) chips away at fixed costs until the balance hits zero; multiplying by price gives break-even revenue.',
  },
  'profit-margin-calculator': {
    formula: 'Margin = Profit ÷ Price · Markup = Profit ÷ Cost · Price = Cost ÷ (1 − Margin)',
    explain:
      'Margin and markup describe the same profit from two bases: margin divides by selling price, markup by cost. To hit a target margin m, price at Cost ÷ (1 − m); a 100% markup equals a 50% margin.',
  },
  'intermittent-fasting-calculator': {
    formula: 'eating window = first meal → first meal + E · fasting = first meal + E → first meal + 24',
    explain:
      'Schedule derivation for a fasting ratio F:E: the eating window opens at your first meal and closes E hours later; the fasting window runs F hours until the next day\u2019s first meal. Metabolic phase markers (ketosis ≈ 12h+, autophagy ≈ 16-24h) are added on top as research-informed estimates.',
  },
  'llm-api-cost-calculator': {
    formula: 'monthly cost = (input tokens ÷ 1M × price_in) + (output tokens ÷ 1M × price_out)',
    explain:
      'Per-model API bill from monthly token volumes. Prices are uncached list rates per million tokens; cached-input and batch discounts are not applied, so results are worst-case planning numbers.',
  },
}

/** 读取某工具的公式;未注册返回 null(组件据此不渲染空区) */
export function getToolFormula(slug: string): ToolFormula | null {
  return toolFormulas[slug] ?? null
}
