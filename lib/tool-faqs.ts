/**
 * 工具 FAQ 注册表 —— 站内唯一的 FAQ 数据源(Single Source of Truth)
 *
 * 作用:
 *  1. `lib/seo.ts` 的 `buildFaqJsonLd(slug)` 从这里读取,生成 FAQPage JSON-LD。
 *  2. `components/VisibleFaqs.tsx` 从这里读取,渲染页面可见的 FAQ 区块。
 *
 * 这样保证「页面可见的 Q&A」与「结构化数据声明的 Q&A」永远一致,
 * 避免两种 Google 处罚/降权场景:
 *  - 页面没有可见 FAQ 却声明 FAQPage schema(虚假结构化数据);
 *  - 可见 FAQ 与 schema 的 Q&A 不一致(失配,丧失富媒体结果资格)。
 *
 * 维护规范:
 *  - 新增/修改某个工具的 FAQ 时,只改本文件,不要在内容组件里另写 FAQ。
 *  - 每个 FAQ 答案保持 1-3 句、信息密度高、自然口语。
 *  - 引号用双引号转义(\");撇号(')和反引号(`)在双引号字符串里无需转义。
 */

export interface FaqPair {
  /** 问题(Q),与页面可见 h3 一致 */
  q: string
  /** 答案(A),与页面可见 p 一致 */
  a: string
}

export const toolFaqs: Record<string, FaqPair[]> = {
  // ══════════ _batch5-contents(12 个)══════════
  'color-converter': [
    {
      q: 'What about alpha transparency?',
      a: 'HEX uses 8 digits (#RRGGBBAA), RGB becomes rgba(r,g,b,a), HSL becomes hsla(h,s%,l%,a). The alpha value is 0-1, where 0 is fully transparent.',
    },
  ],
  'uuid-generator': [
    {
      q: 'Are UUIDs truly unique?',
      a: 'For all practical purposes, yes. The chance of two random v4 UUIDs colliding is about 1 in 2.7 × 10^36. You would need to generate billions per second for millennia to see a collision.',
    },
  ],
  'lorem-ipsum-generator': [
    {
      q: 'Is it actually Latin?',
      a: "It started as Latin, but the standard Lorem Ipsum text is scrambled and altered — no real Latin speaker would parse it. That's intentional: it should look like text without reading as any real language.",
    },
  ],
  'circle-calculator': [
    {
      q: 'Why is a 16-inch pizza more than double a 12-inch?',
      a: 'Area scales with radius squared. A 16-inch pizza has area π(8)² = 201 sq in; a 12-inch has π(6)² = 113 sq in. So the 16-inch is 78% bigger, not 33%.',
    },
  ],
  'triangle-calculator': [
    {
      q: 'What about non-right triangles?',
      a: 'The Pythagorean theorem only works for right triangles. For other triangles, use the Law of Cosines (c² = a² + b² − 2ab·cos C) or the Law of Sines.',
    },
  ],
  'rectangle-calculator': [
    {
      q: 'How much extra flooring should I buy?',
      a: 'Add 10% for waste and cutting mistakes. For patterned materials that need matching, add 15-20%. Order slightly more than you think you need — dye lots vary between batches.',
    },
  ],
  'standard-deviation-calculator': [
    {
      q: 'When do I use population vs. sample?',
      a: 'Use population when your data is the entire group of interest (all students in a class). Use sample when your data represents a larger population (100 voters surveyed to estimate a country).',
    },
  ],
  'percentile-calculator': [
    {
      q: 'What is a "good" percentile?',
      a: 'It depends on context. For standardized tests, 90th+ is excellent. For health metrics, anywhere in the 5th-95th range is usually normal. For income, higher percentiles mean more income relative to peers.',
    },
  ],
  'inflation-calculator': [
    {
      q: 'What is a normal inflation rate?',
      a: 'Central banks target ~2% as "healthy" inflation. The US averaged 3% over the last century. High inflation (10%+) or deflation (negative) both cause economic problems.',
    },
  ],
  'retirement-calculator': [
    {
      q: 'How much do I need to retire?',
      a: 'A common rule is 25× your annual expenses (the inverse of the 4% rule). For $40,000/year expenses, aim for $1 million. Many financial advisors now suggest 30× to be safe given longer lifespans.',
    },
  ],
  'simple-interest-calculator': [
    {
      q: 'Why would I ever use simple interest?',
      a: "For short time periods and basic loans, it's simpler to calculate. Most mortgages, credit cards, and investments use compound interest instead — use that calculator for those cases.",
    },
  ],
  'unit-price-calculator': [
    {
      q: 'Does this work for non-food items?',
      a: 'Yes. Use "count" as the unit for toilet paper, diapers, batteries, or anything sold by item count. Use ml for liquids, g for solids. The math is the same.',
    },
  ],

  // ══════════ _batch6-contents(14 个)══════════
  'savings-goal-calculator': [
    {
      q: 'What return rate should I use?',
      a: 'Use 4-5% for high-yield savings or conservative investments. Use 7% for long-term stock market investing. Higher rates mean smaller monthly contributions but more volatility. When in doubt, run the calculator twice — once with an optimistic rate and once with a conservative one — and aim for the higher contribution.',
    },
    {
      q: 'Should I account for inflation?',
      a: 'Yes, if your goal is years away. A $30,000 goal in 5 years will buy less than $30,000 today. To hedge, either raise your target by ~3% per year, or use a "real" return rate (your investment return minus inflation). For example, a 7% nominal return becomes ~4% real.',
    },
    {
      q: 'Is it better to save monthly or in lump sums?',
      a: 'Monthly contributions win for most people because they enforce discipline and spread risk (dollar-cost averaging). Lump-sum investing slightly outperforms on average because money is in the market longer, but it requires having the cash upfront and tolerating short-term swings.',
    },
  ],
  'net-worth-calculator': [
    {
      q: 'Should I include my primary residence?',
      a: 'Yes, but subtract the mortgage. The remaining equity is a real asset. Some calculators exclude primary residence to focus on "investable" net worth — both approaches are valid, as long as you are consistent when comparing year to year.',
    },
    {
      q: 'Is a negative net worth bad?',
      a: 'It is common for young adults with student loans and little savings. A negative number is not a moral failing — it is a starting point. The goal is steady improvement: track it every 6-12 months and focus on paying down high-interest debt while building an emergency fund first.',
    },
    {
      q: 'How often should I recalculate?',
      a: 'Every 6 to 12 months is enough for most people. More frequent checks add noise (market swings) without adding insight. The trend over years matters more than any single snapshot — a net worth rising 8-12% annually is strong progress.',
    },
  ],
  'annuity-calculator': [
    {
      q: 'What if I live longer than N years?',
      a: 'Then the annuity is exhausted. This is the core risk of self-managed drawdowns. Commercial annuities from insurance companies often pay for life, but at lower rates because they pool longevity risk across many buyers.',
    },
    {
      q: 'What return rate should I assume for retirement?',
      a: 'Conservative planners use 4-5% to stay safe, because retirement money needs to survive market downturns early in retirement (sequence-of-returns risk). Using 7% optimistic rates makes the payout look bigger but raises the chance of running out. Run both scenarios.',
    },
    {
      q: 'Is an immediate annuity a good deal?',
      a: 'It depends on your longevity and need for guaranteed income. Annuities shine if you expect to live a long time, because the insurer keeps paying even if you outlive the actuarial average. The trade-off is losing access to the lump sum and leaving less to heirs.',
    },
  ],
  'capital-gains-tax-estimator': [
    {
      q: 'How do I calculate my capital gains tax?',
      a: 'Track purchase and sale prices per lot. Gains = sale − purchase − fees. Long-term gains are taxed at 0/15/20% based on your total taxable income (including the gain itself), while short-term gains use your ordinary income bracket.',
    },
    {
      q: 'What is tax-loss harvesting?',
      a: 'Selling investments at a loss to offset realized gains, lowering your tax bill. Losses offset gains dollar-for-dollar; if losses exceed gains, up to $3,000 per year can offset ordinary income, with the rest carrying forward. Watch out for the wash-sale rule: you cannot repurchase the same security within 30 days.',
    },
    {
      q: 'Do I pay tax if I reinvest the proceeds?',
      a: 'Yes. Selling triggers a taxable event regardless of whether you reinvest — the IRS taxes the realized gain. Only holding inside tax-advantaged accounts (IRA, 401k) defers this, and only specific structures avoid it entirely.',
    },
  ],
  'rent-vs-buy-calculator': [
    {
      q: 'Does this account for home value increasing?',
      a: 'No — this simplified version ignores appreciation, which is a major benefit of buying. But it also ignores the opportunity cost of investing your down payment in stocks instead. Full rent-vs-buy models factor in both. Historically, US homes appreciate 3-4% annually, roughly matching inflation.',
    },
    {
      q: 'How do I know if I will stay long enough?',
      a: 'Job stability, relationship status, and school districts are the usual signals. A good rule of thumb: be confident you will stay at least 5 years, ideally 7-10. Every extra year you stay spreads the closing costs thinner and tilts the math further toward buying.',
    },
    {
      q: 'What about the tax deduction for mortgage interest?',
      a: 'Since the 2017 US tax law change, the higher standard deduction ($14,600 single / $29,200 married in 2024) means most homeowners no longer itemize, so the mortgage-interest deduction helps fewer people than it used to. Only count on it if your total itemized deductions clearly exceed the standard deduction.',
    },
  ],
  'body-fat-calculator': [
    {
      q: 'How accurate is the Navy method?',
      a: 'It has an error range of about ±3-4% compared to DEXA scans. It works best for people near average body composition. For very lean or very muscular people, other methods (calipers, DEXA, hydrostatic) are more accurate.',
    },
  ],
  'macro-calculator': [
    {
      q: 'Do I have to track macros?',
      a: 'No. Many people lose weight or build muscle eating intuitively. But tracking macros for a few weeks teaches you portion sizes and reveals hidden calories — a valuable learning exercise even if you stop later.',
    },
  ],
  'pregnancy-due-date-calculator': [
    {
      q: 'What if my cycles are irregular?',
      a: "Naegele's rule assumes a 28-day cycle with ovulation on day 14. If your cycles are longer or shorter, an early ultrasound (before 12 weeks) provides a more accurate due date.",
    },
  ],
  'json-formatter': [
    {
      q: 'JSON vs JSON5 vs JSONC?',
      a: 'Standard JSON is strict. JSON5 allows comments, trailing commas, and unquoted keys. JSONC is JSON with comments (used by VS Code). This formatter expects standard JSON.',
    },
  ],
  'json-minifier': [
    {
      q: 'Does minification break anything?',
      a: 'No. Whitespace is not significant in JSON syntax. Minified JSON parses identically to formatted JSON. Re-minifying already-minified JSON is a no-op.',
    },
  ],
  'csv-to-json': [
    {
      q: 'What about Excel files (.xlsx)?',
      a: 'This tool handles CSV only — plain text. For Excel files, export to CSV from Excel first, then convert here. Libraries like SheetJS handle .xlsx directly in code.',
    },
  ],
  'json-to-csv': [
    {
      q: 'What if my objects have different keys?',
      a: 'The tool uses keys from the first object. Objects with extra keys will have those keys dropped; objects missing keys will have empty values. Normalize your data structure first for best results.',
    },
  ],
  'add-line-numbers': [
    {
      q: 'Why right-aligned numbers?',
      a: 'Right alignment keeps the text column stable as line counts grow — line 9 and line 10 have the same starting position. This is the convention in code editors and print publications.',
    },
  ],
  'text-to-list': [
    {
      q: 'Can I use different bullet styles?',
      a: 'This tool uses • (bullet). For numbered lists, use the Add Line Numbers tool. For other styles (–, *, 1.), a future update may add options.',
    },
  ],

  // ══════════ _batch7-contents(16 个)══════════
  'scientific-notation-converter': [
    {
      q: 'Why use engineering notation?',
      a: 'The exponent is always a multiple of 3, so it maps cleanly to SI prefixes (kilo = 10³, mega = 10⁶, giga = 10⁹). Engineers prefer 12.3 × 10⁶ over 1.23 × 10⁷.',
    },
  ],
  'prime-number-checker': [
    {
      q: 'Is 1 a prime?',
      a: "No. By modern definition, primes have exactly two distinct divisors (1 and itself). 1 has only one divisor, so it's excluded. This keeps the Fundamental Theorem of Arithmetic (unique factorization) clean.",
    },
    {
      q: 'How does the checker test primality?',
      a: 'By trial division: it tests divisors from 2 up to √n. If none divides n evenly, n is prime. Stopping at the square root works because any composite number must have at least one factor at or below its square root.',
    },
    {
      q: 'Are all prime numbers odd?',
      a: 'No — 2 is the only even prime. Every other even number is divisible by 2, giving it at least three divisors, so it cannot be prime. After 2, all primes are odd; after 2 and 5, every prime ends in 1, 3, 7, or 9.',
    },
  ],
  'prime-factorization-calculator': [
    {
      q: 'Why is factoring hard for large numbers?',
      a: "For small numbers it's easy, but for products of two large primes, no fast algorithm is known. This asymmetry — easy to multiply, hard to factor — is what makes RSA encryption secure.",
    },
  ],
  'combination-calculator': [
    {
      q: 'Combination vs permutation?',
      a: 'In combinations, order doesn\'t matter (a salad of {lettuce, tomato} equals {tomato, lettuce}). In permutations, order matters (a password "abc" differs from "cba"). Use the Permutation Calculator for ordered arrangements.',
    },
  ],
  'permutation-calculator': [
    {
      q: 'When is P(n,r) = n!?',
      a: "When r = n — you're arranging ALL items. The number of ways to arrange n distinct items is n! (n factorial). For 5 books on a shelf: 5! = 120 arrangements.",
    },
  ],
  'mass-converter': [
    {
      q: 'Carat vs. karat?',
      a: 'Carat (ct) measures gemstone mass = 200 mg. Karat (K) measures gold purity — 24K is pure gold. Same word origin, different meanings today.',
    },
  ],
  'density-converter': [
    {
      q: 'Why does ice float?',
      a: 'Water is unusual — it expands when freezing, making ice less dense than liquid water. Most substances are denser as solids. Without this quirk, lakes would freeze from the bottom up.',
    },
  ],
  'power-converter': [
    {
      q: 'Why two horsepowers?',
      a: 'Mechanical horsepower (hp, ~746 W) originated with James Watt. Metric horsepower (PS, ~735 W) is the European equivalent. Cars sold in Europe are rated in PS; US cars in hp. The difference is ~1.4%.',
    },
  ],
  'flow-rate-converter': [
    {
      q: 'CFM in HVAC?',
      a: 'CFM (cubic feet per minute) measures air flow in heating/cooling systems. A typical central AC moves 1000-2000 CFM. The higher the CFM, the faster air circulates.',
    },
  ],
  'url-query-parser': [
    {
      q: 'What about URL encoding in values?',
      a: 'This tool uses the native URLSearchParams parser, so encoded values like %20 are decoded automatically in the output.',
    },
  ],
  'html-tag-stripper': [
    {
      q: 'Does it preserve line breaks?',
      a: 'It depends on the source HTML. Block-level tags like <p> and <div> are removed, but the text they contained gets concatenated. To preserve paragraph breaks, replace <p> with \\n<p> first.',
    },
  ],
  'character-frequency': [
    {
      q: "Why doesn't it count spaces?",
      a: 'Whitespace is excluded by default to focus on actual characters. To include spaces, prefix them in your input — they\'ll appear as " " in the output.',
    },
  ],
  'email-extractor': [
    {
      q: 'Does this validate emails?',
      a: "It detects the format pattern. True validation requires sending an email — no tool can verify an address exists without that. Always respect anti-spam laws when contacting extracted addresses.",
    },
  ],
  'url-extractor': [
    {
      q: 'Why doesn\'t it catch "example.com" without http?',
      a: 'This tool only catches URLs starting with http:// or https://. Domains without protocol could be mistaken for filenames or other text. If you need to find bare domains, a more aggressive pattern is needed.',
    },
  ],
  'text-diff': [
    {
      q: 'Is this a character-level or word-level diff?',
      a: 'Word-level — splits on whitespace and compares word by word. This is usually what people want for prose. Character-level diffs are better for code.',
    },
  ],
  'text-size-estimator': [
    {
      q: 'Why does Base64 add 33%?',
      a: 'Base64 encodes 3 bytes as 4 characters. The size grows by 4/3 ≈ 1.33. This is the standard overhead for embedding binary data in text formats.',
    },
  ],

  // ══════════ _batch8-contents(17 个)══════════
  'apy-calculator': [
    {
      q: 'Why do banks show APY but lenders show APR?',
      a: 'Marketing. APY makes savings look bigger; APR makes loans look cheaper. Always read the fine print to know which metric is being quoted.',
    },
  ],
  'credit-card-minimum-payment-calculator': [
    {
      q: 'Will paying the minimum hurt my credit score?',
      a: 'Paying the minimum on time keeps your account in good standing and avoids late marks, so it doesn\'t directly hurt your score. But it keeps your credit utilization (balance ÷ limit) high, which is a major scoring factor. High utilization can lower your score even with perfect payment history. Paying down balances is the fastest way to improve your score.',
    },
    {
      q: 'How do credit card companies calculate the minimum payment?',
      a: 'Most use 1%–3% of your statement balance plus that month\'s interest and any fees, with a floor around $25–$35. Some use "interest + fees + 1% of principal." The exact formula is in your cardholder agreement. The CARD Act of 2009 requires issuers to apply anything above the minimum to the highest-APR balance first.',
    },
    {
      q: 'What happens if I pay less than the minimum?',
      a: "You're charged a late fee (up to ~$41 for repeat late payments), reported as late to credit bureaus after 30 days, and many issuers trigger a penalty APR of 29.99% that can apply indefinitely. After 60 days late your rate can also apply to existing balances. Set autopay for at least the minimum to avoid this.",
    },
    {
      q: "Does the minimum payment change every month?",
      a: "Yes. Because it's based on your balance and that month's interest, it rises when you carry more or rates go up, and falls as you pay down the balance. New purchases, cash advances, and fees also push it higher. If your balance drops, the minimum eventually drops too — but never count on a low minimum as a reason to keep carrying the debt.",
    },
  ],
  'cash-back-calculator': [
    {
      q: 'Points vs cash back?',
      a: 'Cash back is simpler and guaranteed value. Points can be worth more if redeemed for travel (especially business/first class), but require more effort and have variable value.',
    },
    {
      q: 'When is a card with an annual fee worth it?',
      a: 'When your yearly rewards exceed the fee. Divide the annual fee by the earning rate to find break-even spend — a $95 fee on a 3% dining card breaks even at about $3,167 of dining spend per year. Below that, a no-fee card is the better deal.',
    },
    {
      q: 'Do cash back rewards expire?',
      a: "Usually not while the account stays open and in good standing, but issuers can forfeit rewards on closure or after long inactivity. Points programs can also be devalued over time, while cash back redeemed as a statement credit keeps a fixed dollar value.",
    },
  ],
  'down-payment-calculator': [
    {
      q: 'When does PMI go away?',
      a: 'For conventional loans, PMI cancels automatically at 78% loan-to-value, or you can request removal at 80%. FHA loans (post-2013) require PMI for the life of the loan unless refinanced.',
    },
  ],
  'dti-calculator': [
    {
      q: 'How can I lower my DTI?',
      a: 'Pay down existing debt (especially high-interest), increase income, or avoid new debt before applying. Paying off a credit card can drop your DTI within a billing cycle.',
    },
  ],
  'commission-calculator': [
    {
      q: 'How do real estate commissions work?',
      a: "A 6% total commission is typical, split between buyer's agent (3%) and seller's agent (3%). Each agent then shares with their brokerage — often 50/50 for new agents, more favorable for experienced ones.",
    },
  ],
  'age-difference-calculator': [
    {
      q: 'What\'s the "half your age plus seven" rule?',
      a: "A common social guideline for minimum acceptable dating age: half your age plus 7. For a 30-year-old: 22. It's just a cultural heuristic, not a rule.",
    },
  ],
  'grade-calculator': [
    {
      q: 'What about +/- grades?',
      a: 'Many schools use finer divisions (A-, B+, etc.). This tool uses the basic 5-tier scale. Check your school\'s specific thresholds for plus/minus grades.',
    },
  ],
  'final-grade-calculator': [
    {
      q: 'My final is cumulative — does this still work?',
      a: 'Yes — the formula works for any final exam. The "weight" is just how much the final counts toward your total grade, regardless of what it covers.',
    },
  ],
  'bill-split-calculator': [
    {
      q: 'How do we handle someone who didn\'t drink?',
      a: 'Itemize those parts separately. Subtract the alcohol cost from the total, divide that among drinkers, and split the food evenly.',
    },
  ],
  'trapezoid-calculator': [
    {
      q: "What if my sides aren't parallel?",
      a: "Then it's not a trapezoid — it's an irregular quadrilateral. You'll need more measurements or different formulas (like dividing into triangles).",
    },
  ],
  'cube-calculator': [
    {
      q: 'How is a cube different from a square?',
      a: 'A square is 2D (flat); a cube is 3D. Squares have area; cubes have volume and surface area. A cube is made of 6 identical squares.',
    },
  ],
  'sphere-calculator': [
    {
      q: 'Why are planets and stars spheres?',
      a: 'Gravity pulls equally in all directions, so material settles into the shape with the lowest potential energy — a sphere. Large moons and planets are round; small asteroids aren\'t, because their gravity is too weak to overcome material strength.',
    },
  ],
  'hash-generator': [
    {
      q: 'Can a hash be decrypted?',
      a: 'No — by design. Hashes are one-way functions. The only way to "crack" a hash is to try inputs until one matches (brute force). For SHA-256, this is computationally infeasible for any reasonable-length input.',
    },
  ],
  'slug-to-title': [
    {
      q: 'Will this recover original capitalization?',
      a: 'No — slugs are usually lowercased, so original capitals are lost. This tool applies Title Case, which works well for most uses but won\'t recover names like "iPhone" or "McDonald".',
    },
  ],
  'binary-to-text': [
    {
      q: 'Does this handle UTF-8 / Unicode?',
      a: 'This tool decodes each 8-bit group as a single character (ASCII range 0-127). Multi-byte UTF-8 characters (like emoji) would need each byte separated and decoded as a sequence — this tool does not handle that.',
    },
  ],
  'text-to-binary': [
    {
      q: 'Why 8 bits per character?',
      a: '8 bits (one byte) can represent 256 distinct values (0-255). This is enough for English text, common symbols, and control characters in ASCII/extended ASCII. UTF-8 uses 1-4 bytes per character for full Unicode support.',
    },
  ],

  // ══════════ _calc3-contents(13 个)══════════
  'calorie-calculator': [
    {
      q: 'Should I count "net" or "total" calories?',
      a: 'For weight loss, total calories matter most. Exercise apps often overestimate calories burned by 20-30%, so don\'t "eat back" all your exercise calories.',
    },
  ],
  'bmr-calculator': [
    {
      q: 'Can I speed up my metabolism?',
      a: 'Building muscle is the only reliable way to raise BMR long-term — each pound of muscle burns about 6 calories/day at rest vs. 2 for fat. Extreme diets actually slow metabolism.',
    },
  ],
  'water-intake-calculator': [
    {
      q: 'Does coffee and tea count?',
      a: 'Yes. Despite being mild diuretics, caffeinated beverages still contribute net positive water. The old idea that coffee "doesn\'t count" has been debunked.',
    },
    {
      q: 'How much water should I drink a day?',
      a: 'A common baseline is 30–35 ml per kg of body weight — about two-thirds of your weight in pounds, in ounces. A 70 kg adult lands near 2.3 L daily before adjusting for exercise, hot climate, or pregnancy, which this calculator adds on top.',
    },
    {
      q: 'Can you drink too much water?',
      a: 'Yes. Overhydration (hyponatremia) dilutes blood sodium and can be dangerous, mostly during endurance events. Healthy kidneys clear about 0.8–1.0 L per hour, so spread intake across the day instead of drinking large amounts at once.',
    },
  ],
  'ideal-weight-calculator': [
    {
      q: 'Which formula should I trust?',
      a: 'None of them is perfect. Use the BMI healthy weight range as your primary guide, and treat the formula numbers as ballpark references. Muscle mass and body composition matter more than any single target weight.',
    },
  ],
  'fraction-calculator': [
    {
      q: 'Can it handle mixed numbers like 2 1/2?',
      a: 'Enter 5/2 (the improper form). The result will display as "2 1/2" if it\'s greater than 1.',
    },
  ],
  'ratio-calculator': [
    {
      q: 'What if my ratio has decimals?',
      a: 'This calculator handles decimals fine. To work with whole numbers, multiply both sides by 10 or 100 to remove decimals first.',
    },
  ],
  'lcm-gcd-calculator': [
    {
      q: 'What if I enter just one number?',
      a: 'The GCD of a single number is the number itself, and its LCM is also itself. The calculator handles this case correctly.',
    },
  ],
  'mortgage-calculator': [
    {
      q: 'Should I get a 15 or 30 year mortgage?',
      a: '30-year if you need lower payments or want to invest the difference; 15-year if you can afford it and want to save massively on interest. Many people take a 30-year and pay extra when they can — this gets you the lower required payment of the 30-year with much of the interest savings of the 15-year, plus the flexibility to stop paying extra if money gets tight.',
    },
    {
      q: 'How much house can I afford?',
      a: 'A common guideline: your total monthly housing payment (PITI) should be under 28% of gross monthly income, and all debt payments under 36%. On a $100k income, that\'s roughly $2,300/month for PITI. But affordability also depends on your down payment, existing debts, credit score, property taxes in your area, and your other living costs. Use the 28/36 rule as a starting ceiling, not a target.',
    },
    {
      q: 'What credit score do I need for a mortgage?',
      a: 'Conventional loans typically require 620+. FHA loans accept scores as low as 580 (sometimes 500 with 10% down). But the rate you get improves sharply with your score — a 760+ score can mean a rate 0.5%+ lower than a 680, saving tens of thousands over the loan. Before applying, check your score and correct any report errors.',
    },
    {
      q: 'Does making extra payments help?',
      a: 'Yes, dramatically. Extra payments go straight to principal (confirm with your lender there\'s no prepayment penalty). On a $400k, 30-year, 6.8% loan, paying an extra $200/month shaves about 7 years off the term and saves roughly $130,000 in interest. Even one extra full payment per year makes a meaningful difference.',
    },
  ],
  'markup-calculator': [
    {
      q: 'How do I calculate price for a target margin?',
      a: 'Price = Cost ÷ (1 − Margin). For a 40% margin on $60 cost: 60 ÷ 0.60 = $100.',
    },
  ],
  'hourly-to-salary-calculator': [
    {
      q: 'Is salary or hourly better?',
      a: 'Salaried jobs typically offer benefits and stability; hourly jobs offer overtime pay and flexibility. A $50,000 salary working 50 hours/week equals ~$19/hr — less than an hourly $25/hr job at 40 hours.',
    },
  ],
  'roi-calculator': [
    {
      q: 'Should I compare investments by total or annualized ROI?',
      a: 'Always annualized. Total ROI is meaningless without the time horizon. A 100% gain sounds great — but over 20 years that\'s just 3.5% per year.',
    },
  ],
  'credit-card-payoff-calculator': [
    {
      q: 'What if my payment is below the monthly interest?',
      a: 'The calculator will warn you. If your payment only covers interest (or less), the balance never drops — you could pay forever and never make progress. You must pay more than the monthly interest charge. For example, on $5,000 at 22% APR, monthly interest is about $92; any payment above $92 starts reducing principal.',
    },
    {
      q: 'Does making biweekly payments help?',
      a: 'Yes. Splitting your monthly payment in half and paying every two weeks results in 26 half-payments per year — the equivalent of one extra monthly payment. On a credit card, this also reduces your average daily balance slightly, lowering interest. The combination can shave months off your payoff.',
    },
    {
      q: 'How is the minimum payment calculated?',
      a: 'It varies by issuer, but is typically the higher of: a flat amount (e.g. $25-35), or 1-3% of your balance plus interest and fees. Some issuers also include any amount over your credit limit or past-due. Check your cardholder agreement for the exact formula — it determines how slowly you\'re allowed to pay.',
    },
    {
      q: 'Will paying off my card hurt my credit score?',
      a: 'No — paying off credit card debt usually helps your score. A major factor in credit scores is credit utilization (balance divided by limit). Keeping utilization under 30%, and ideally under 10%, boosts your score. Paying down balances lowers utilization. Keep the card open after paying it off to preserve your available credit and account age.',
    },
  ],
  'income-tax-estimator': [
    {
      q: 'Why does my paycheck show more tax withheld?',
      a: "Employers withhold based on your expected annual tax plus a margin of safety. Withholdings are estimates; your actual tax is settled when you file. You get a refund if you overpaid.",
    },
  ],
  'salary-converter': [
    {
      q: 'How many hours are in a full-time work year?',
      a: 'The standard US full-time year is 2,080 hours (40 hours × 52 weeks). The hourly rate this tool shows uses that figure, scaled by the hours-per-week you enter.',
    },
    {
      q: 'Does this include taxes and benefits?',
      a: 'No. These are gross (pre-tax) conversions. Your actual take-home pay depends on federal and state income tax, Social Security, Medicare, retirement contributions, and benefits deductions.',
    },
  ],

  // ══════════ _text-contents(10 个)══════════
  'uppercase-converter': [
    {
      q: 'Does this work with non-English text?',
      a: 'Yes. The tool uses Unicode-aware conversion, so accented letters like café → CAFÉ and Greek/Cyrillic letters also convert correctly.',
    },
  ],
  'lowercase-converter': [
    {
      q: 'Will lowercase affect my data?',
      a: 'No — numbers, symbols, and punctuation are unaffected. Only letters change. The conversion is lossless for the letters that have case.',
    },
  ],
  'title-case-converter': [
    {
      q: 'Why are some style guides different?',
      a: 'Major style guides (APA, Chicago, AP) have their own rules about which words to capitalize. They typically lowercase articles, conjunctions, and short prepositions. This tool capitalizes every word for simplicity.',
    },
  ],
  'sentence-case-converter': [
    {
      q: 'What about abbreviations like "USA"?',
      a: 'This tool lowercases them to "usa". You will need to manually fix abbreviations and proper nouns after conversion. No automated tool can perfectly distinguish them.',
    },
  ],
  'reverse-text': [
    {
      q: 'Why do emojis sometimes break?',
      a: 'Some emojis (family, flags) are composed of multiple code points. This tool uses grapheme-aware splitting, so most emojis reverse correctly, but complex composed emojis may still separate.',
    },
  ],
  'remove-duplicate-lines': [
    {
      q: 'Will this sort my list?',
      a: 'No — order is preserved. Use the Sort Lines tool if you also want alphabetical ordering.',
    },
    {
      q: 'Is there a size limit?',
      a: 'No hard limit, but very large inputs (millions of lines) may slow down your browser. The tool runs locally.',
    },
  ],
  'sort-lines': [
    {
      q: 'Can I sort in reverse (Z to A)?',
      a: 'This tool sorts ascending. For descending order, sort here then manually reverse the output. We may add a reverse option in a future update.',
    },
    {
      q: 'How are numbers sorted?',
      a: 'Lines are sorted as text, so "10" comes before "9" (because "1" < "9"). For natural numeric sorting, pad numbers with leading zeros first.',
    },
  ],
  'remove-line-breaks': [
    {
      q: 'Will it remove the spaces between words?',
      a: 'No — line breaks are replaced with a single space, and multiple consecutive spaces collapse to one. Words stay properly separated.',
    },
  ],
  'find-and-replace': [
    {
      q: 'Is the search case-sensitive?',
      a: 'Yes — "Cat" and "cat" are different. For case-insensitive replace, convert your whole text to one case first, then replace.',
    },
    {
      q: 'Can I use regular expressions?',
      a: 'This basic version matches literal text only. Regex support may come in a future update.',
    },
  ],
  'whitespace-remover': [
    {
      q: 'Does this remove all line breaks?',
      a: 'No — line breaks are preserved, but empty lines are removed. Use the Remove Line Breaks tool if you also want to join everything into one line.',
    },
  ],

  // ══════════ _converter-contents(8 个)══════════
  'data-storage-converter': [
    {
      q: 'Why does my 256GB phone show less free space?',
      a: 'Two reasons: the OS reports in binary units (256 decimal GB ≈ 238 binary GB), and the operating system itself takes up several GB. The actual usable space is even less.',
    },
    {
      q: 'Internet speed vs. file size?',
      a: 'Internet speeds are in bits per second (Mbps), but file sizes are in bytes. Divide Mbps by 8 to get MB/s. A 100 Mbps connection downloads at about 12.5 MB/s.',
    },
  ],
  'time-converter': [
    {
      q: 'How many hours in a year?',
      a: '8,766 hours on average (365.25 × 24). A leap year has 8,784 hours; a common year has 8,760.',
    },
  ],
  'numeral-system-converter': [
    {
      q: 'Why do programmers use hexadecimal?',
      a: 'Because one hex digit represents exactly 4 binary digits (a "nibble"). This makes long binary numbers much shorter and easier to read. FF is more compact than 11111111.',
    },
  ],
  'angle-converter': [
    {
      q: 'How do I convert degrees to radians in code?',
      a: 'Multiply degrees by π/180, or use the built-in function (e.g., radians() in Python, Math.PI/180 in JavaScript). Most languages also have a degrees-to-radians helper.',
    },
  ],
  'fuel-economy-converter': [
    {
      q: 'Which is more efficient, 40 MPG or 5 L/100km?',
      a: '5 L/100km is better — it equals about 47 MPG (US). 40 MPG equals about 5.9 L/100km.',
    },
  ],
  'pressure-converter': [
    {
      q: 'What PSI should my car tires be?',
      a: "Check the sticker inside the driver's door jamb — most cars are 30-35 PSI (2-2.4 bar). The number on the tire sidewall is the maximum, not the recommended pressure.",
    },
  ],
  'energy-converter': [
    {
      q: 'Why does my electric bill use kWh?',
      a: "A watt is joules per second, so multiplying by hours gives total energy. 1 kWh = using 1,000 watts for 1 hour. It's a convenient unit for household electricity.",
    },
  ],
  'frequency-converter': [
    {
      q: 'How do I convert RPM to Hz?',
      a: 'Divide RPM by 60. A motor spinning at 3,600 RPM runs at 60 Hz. This is why AC power in the US is 60 Hz — generators spin at 3,600 RPM.',
    },
  ],

  // ══════════ _devtool-contents(8 个)══════════
  'random-number-generator': [
    {
      q: 'Can this be used for a real lottery or gambling?',
      a: 'For casual use, yes. For regulated gambling or official lotteries, you need certified hardware RNGs. This tool is fine for office raffles, classroom picks, and simulations.',
    },
  ],
  'password-strength-checker': [
    {
      q: 'Is it safe to type my real password here?',
      a: 'Yes. This tool processes everything locally in your browser. There is no network request — your password never leaves your device. You can also test variations.',
    },
    {
      q: 'What if my password is in a data breach?',
      a: 'Strength only measures guessability, not whether it has been leaked. Check Have I Been Pwned to see if your password has appeared in known breaches.',
    },
  ],
  'base64-encoder': [
    {
      q: 'Why does my non-English text look wrong?',
      a: "This tool uses proper UTF-8 handling, so accented letters and emoji encode correctly. If you see mojibake, the decoder you're using probably assumes a different character encoding.",
    },
  ],
  'base64-decoder': [
    {
      q: 'Can I decode images or files?',
      a: "This tool decodes to text only. For binary data like images, the output may look garbled because it's binary bytes interpreted as text. Use a dedicated Base64-to-file converter for binary content.",
    },
  ],
  'html-escape': [
    {
      q: 'Is this enough to prevent all XSS?',
      a: 'HTML body escaping covers the most common case, but XSS has many variants (attribute-based, script-based, URL-based). Use a reputable library like DOMPurify for untrusted HTML.',
    },
  ],
  'html-unescape': [
    {
      q: 'Is unescaping safe?',
      a: 'This tool uses a detached textarea element, which decodes entities without executing any HTML. The output is plain text, so it cannot trigger scripts.',
    },
  ],
  'url-encoder': [
    {
      q: 'Should I encode the whole URL or just parameters?',
      a: 'Encode individual parameter values, not the whole URL. Encoding the whole URL would break the /, ?, and & that define its structure.',
    },
  ],
  'url-decoder': [
    {
      q: 'What about + for spaces?',
      a: 'In query strings, + often represents a space (form encoding). This tool uses standard percent decoding, which leaves + as +. Convert + to spaces manually if needed.',
    },
  ],

  // ══════════ 独立 content.tsx 文件 —— 原已有可见 FAQ(11 个,迁移过来)══════════
  'qr-code-generator': [
    {
      q: 'Do these QR codes expire?',
      a: 'No. Because the data is embedded directly in the code, static QR codes never expire and never stop working. As long as the content itself (like a URL) remains valid, the code will scan forever.',
    },
    {
      q: 'Is there a limit to how much data I can encode?',
      a: 'Yes. A single QR code holds up to roughly 4,000 alphanumeric characters or 2,900 bytes of binary data. For URLs and WiFi credentials, this is more than enough. If you try to encode a very long text, the code becomes denser and harder to scan.',
    },
    {
      q: 'Are QR codes safe?',
      a: 'QR codes themselves are just a way to deliver text — they are neither safe nor dangerous on their own. The risk is that a malicious code could link to a phishing site. As a user, treat scanned links with the same caution as any other link. As a creator, only link to destinations you control and trust.',
    },
  ],
  'slug-generator': [
    {
      q: 'Should I change a slug after publishing?',
      a: 'Generally, no. Changing a slug breaks the old URL and any inbound links pointing to it. If you must change it, set up a 301 redirect from the old URL to the new one so visitors and search engines are forwarded correctly and no ranking equity is lost.',
    },
    {
      q: 'Hyphens or underscores in URLs?',
      a: 'Use hyphens. Google has explicitly stated that it treats hyphens as word separators, while underscores are considered part of a word. So `seo-friendly-slugs` is read as three words, but `seo_friendly_slugs` is read as a single token. Hyphens are the universal best practice.',
    },
    {
      q: 'How long should a URL slug be?',
      a: 'Three to five words is the sweet spot — roughly 30–50 characters. Shorter slugs are easier to read, easier to share, and put more weight on each keyword. If your title is long, edit the slug down to its essence rather than pasting the whole headline.',
    },
    {
      q: 'Is this tool free?',
      a: 'Yes, completely. There is no signup, no usage limit, and no premium tier. Your text is processed locally in your browser and never uploaded anywhere.',
    },
  ],
  'loan-calculator': [
    {
      q: 'Does this calculator include taxes and insurance?',
      a: "No. It calculates principal and interest only. For a real mortgage payment, you'll also pay property taxes, homeowners insurance, and possibly PMI or HOA fees — these can add hundreds of dollars to your monthly payment.",
    },
    {
      q: 'What is amortization?',
      a: 'Amortization is the process of paying off a loan in equal installments. Each payment is split between interest (the cost of borrowing) and principal (reducing what you owe). The schedule above shows exactly how this split evolves over time.',
    },
    {
      q: "What's a good interest rate?",
      a: "It depends on the loan type and your credit. As of recent years, mortgage rates have ranged from 3% to 7%+, auto loans from 4% to 10%, and personal loans from 6% to 36%. The better your credit score, the lower the rate you'll qualify for.",
    },
  ],
  'bmi-calculator': [
    {
      q: 'Is BMI accurate for everyone?',
      a: 'No. BMI works reasonably for the average sedentary adult but overestimates body fat in muscular people and underestimates it in older adults who have lost muscle. Use it as a starting point, not the final word.',
    },
    {
      q: 'What is a healthy BMI for me?',
      a: 'For most adults aged 20-65, a BMI between 18.5 and 24.9 is considered healthy. People over 65 may benefit from a slightly higher BMI (25-27), as some extra weight can be protective in older age. Consult your doctor for personalized guidance.',
    },
    {
      q: 'Should I use BMI to set weight loss goals?',
      a: "BMI is a useful reference point, but better goals focus on body fat percentage, waist measurement, fitness level, and how you feel. A 5-10% weight loss can significantly improve health markers even if your BMI doesn't cross a category line.",
    },
  ],
  'word-counter': [
    {
      q: 'Does this tool count hyphenated words as one or two?',
      a: 'One. A hyphenated word like `well-being` counts as a single word because there is no space in it. The same applies to contractions like `don\'t`.',
    },
    {
      q: 'Are numbers counted as words?',
      a: 'Yes. Any sequence of non-whitespace characters — including standalone numbers like `2026` — counts as one word.',
    },
    {
      q: 'How accurate is the reading time estimate?',
      a: "It's a reasonable average, not a precise measurement. Real reading speed varies from 100 words per minute (for dense technical material) to 400+ (for easy skimming). Treat the estimate as a planning aid rather than an exact figure.",
    },
  ],
  'password-generator': [
    {
      q: 'Is it safe to use passwords generated online?',
      a: "It depends on the tool. This generator runs entirely in your browser, so the password never touches a server. Avoid generators that send your password over the internet or store it in a database. When in doubt, you can view this page's source code and confirm everything happens client-side.",
    },
    {
      q: 'How often should I change my passwords?',
      a: "Modern guidance from NIST (the U.S. standards body) says you no longer need to change passwords on a fixed schedule — only when there's reason to believe they've been compromised. What matters far more is using a strong, unique password for each account and enabling two-factor authentication.",
    },
    {
      q: "What's the ideal password length?",
      a: 'For online accounts protected by rate limiting, 12-16 characters is plenty. For offline targets like encrypted drives or password manager master passwords, go longer — 20+ characters, since an attacker with the file can brute-force without rate limits.',
    },
  ],
  'percentage-calculator': [
    {
      q: 'How do I calculate a discount?',
      a: 'Use mode 1 to find the discount amount (X% of the original price), then subtract it from the original. Or use mode 4 with a negative percentage to get the final price directly.',
    },
    {
      q: 'How do I calculate a tip?',
      a: 'Enter the bill amount as Y and the tip percentage as X in mode 1. For an 18% tip on a $45 bill: 18% of 45 = $8.10.',
    },
    {
      q: 'How do I calculate my test score percentage?',
      a: 'Use mode 2. Enter your points earned as the part and the total possible points as the whole. For 42 out of 50: 42 is what percent of 50 = 84%.',
    },
  ],
  'age-calculator': [
    {
      q: 'How many days old am I?',
      a: 'Enter your date of birth and leave the "age at date" as today. The calculator shows your total days lived — most adults are somewhere between 7,000 and 30,000 days old.',
    },
    {
      q: 'How do I calculate the time between two dates?',
      a: 'Use the "date of birth" field as the start date and the "age at date" field as the end date. The result shows the precise duration between them in years, months, days, weeks, and hours — useful for projects, contracts, or anniversaries.',
    },
    {
      q: 'How accurate is the calculation?',
      a: "Fully accurate. The calculator uses your browser's built-in date handling, which accounts for leap years, varying month lengths, and daylight saving time. There is no approximation involved.",
    },
  ],
  'length-converter': [
    {
      q: 'How many feet are in a meter?',
      a: '1 meter = 3.28084 feet. To convert meters to feet, multiply by 3.281. To convert feet to meters, divide by 3.281 (or multiply by 0.3048).',
    },
    {
      q: 'How many inches are in a centimeter?',
      a: '1 centimeter = 0.3937 inches. To convert cm to inches, multiply by 0.394. To convert inches to cm, multiply by 2.54.',
    },
    {
      q: 'How do I convert kilometers to miles?',
      a: 'Multiply kilometers by 0.6214. As a quick mental shortcut, take 60% and add a bit — for example, 10 km ≈ 6.2 miles.',
    },
  ],
  'sales-tax-calculator': [
    {
      q: 'Are groceries taxed?',
      a: 'In many US states, groceries are exempt or taxed at a lower rate. Essentials like food and medicine often receive special treatment, but rules vary widely by jurisdiction.',
    },
    {
      q: 'Is sales tax the same as VAT?',
      a: 'They are both consumption taxes but work differently. Sales tax is added once at the final sale to the consumer. VAT is charged at every stage of production but credited back, so the final consumer effectively pays it. The math for the end buyer is similar.',
    },
    {
      q: 'Why do US prices not include tax?',
      a: 'Because the US has thousands of local tax jurisdictions, retailers display pre-tax prices so they can advertise consistent national pricing. The tax is added at checkout based on where you purchase.',
    },
  ],
  'discount-calculator': [
    {
      q: 'How do I calculate 50% off?',
      a: 'Just halve the price. 50% off means you pay half — the simplest discount to calculate.',
    },
    {
      q: 'How do I add two discounts together?',
      a: "You don't add them directly. Apply the first discount to get the new price, then apply the second discount to that new price. Two 30% discounts give a total of 51% off, not 60%.",
    },
    {
      q: 'What does "percent off" mean?',
      a: "It's the percentage by which the original price is reduced. 30% off means you pay 70% of the original price.",
    },
  ],

  // ══════════ 独立 content.tsx 文件 —— 原本无可见 FAQ(新增,补齐 10 个)══════════
  'compound-interest-calculator': [
    {
      q: 'What is the difference between compound and simple interest?',
      a: 'Simple interest is earned only on your original principal. Compound interest is earned on the principal AND on accumulated interest — so your balance grows exponentially. Over long periods, compounding produces dramatically more than simple interest at the same rate.',
    },
    {
      q: 'Is daily or monthly compounding better?',
      a: 'More frequent compounding yields slightly more, but the difference is small. At 5% over a year, annual compounding gives 5.000%, monthly gives 5.116%, and daily gives 5.127%. The marginal gain from daily vs. monthly is tiny — what matters far more is the rate and the time horizon.',
    },
    {
      q: 'How is compound interest taxed?',
      a: 'Interest earned in a standard savings or brokerage account is taxed as ordinary income in the year it is earned, which slows compounding. Tax-advantaged accounts (IRA, 401k, HSA) let interest compound tax-free or tax-deferred, which is a major reason they outperform over decades.',
    },
    {
      q: 'Does this calculator include regular contributions?',
      a: 'Yes. You can enter a monthly contribution, which is computed using the future value of an annuity formula on top of the initial deposit. This reflects how most people actually save — small amounts added consistently over many years.',
    },
  ],
  'average-calculator': [
    {
      q: 'What is the difference between mean, median, and mode?',
      a: 'Mean is the sum divided by the count (what most people call "the average"). Median is the middle value when sorted — less affected by outliers. Mode is the most frequent value. This calculator focuses on the mean; use median when your data has extreme highs or lows.',
    },
    {
      q: 'Should I exclude outliers before averaging?',
      a: 'It depends on your goal. For reporting typical performance (e.g. average salary), outliers like a CEO can skew the mean — the median is more representative. For totals that must account for every value (e.g. total revenue), keep all data points. Always disclose if you removed outliers.',
    },
    {
      q: 'How is a weighted average different?',
      a: 'A weighted average multiplies each value by its importance (weight) before summing, then divides by total weight. Your GPA is a weighted average where credit hours are the weights. A simple mean treats every value equally, which is wrong when some matter more than others.',
    },
  ],
  'volume-converter': [
    {
      q: 'How many fluid ounces are in a cup?',
      a: '1 US cup = 8 US fluid ounces = 16 tablespoons = 237 ml. Note that a US "legal" cup (used on nutrition labels) is exactly 240 ml, and a UK/imperial cup differs again — so confirm which standard a recipe uses.',
    },
    {
      q: 'Why are US and imperial gallons different?',
      a: 'The US gallon (3.785 L) is based on the old English wine gallon; the imperial gallon (4.546 L) was defined in 1824 and is about 20% larger. This is why UK fuel economy (MPG) looks better than US MPG for the same car — the gallon is bigger.',
    },
    {
      q: 'How do I convert cups to grams?',
      a: 'You cannot convert volume to weight without knowing the ingredient\'s density. 1 cup of flour (~120 g) and 1 cup of sugar (~200 g) weigh very different amounts. For baking accuracy, weigh ingredients rather than measuring by volume.',
    },
  ],
  'gpa-calculator': [
    {
      q: 'How is GPA calculated on a 4.0 scale?',
      a: 'Each letter grade maps to points (A=4, B=3, C=2, D=1). Multiply each course\'s points by its credit hours, sum these, then divide by total credit hours. An A in a 4-credit course contributes 16 points; a C in a 3-credit course contributes 6. The weighted average is your GPA.',
    },
    {
      q: 'What is the difference between weighted and unweighted GPA?',
      a: 'Unweighted GPA caps at 4.0 and treats all classes equally. Weighted GPA gives extra points for honors, AP, or IB courses (often up to 5.0), rewarding harder classes. Colleges recalculate GPA their own way, so report the type your school uses.',
    },
    {
      q: 'What GPA do I need for college?',
      a: 'It varies widely. The average admitted student at less-selective schools has around a 3.0, while selective universities often average 3.7-3.9 unweighted. GPA is reviewed in context of course rigor and your school\'s grading standards, not as a raw number alone.',
    },
  ],
  'temperature-converter': [
    {
      q: 'How do I convert Celsius to Fahrenheit in my head?',
      a: 'Double the Celsius value, subtract 10%, then add 32. For 20°C: double to 40, drop 10% to 36, add 32 = 68°F. The exact formula is °F = °C × 9/5 + 32. This shortcut is accurate within a degree for everyday temperatures.',
    },
    {
      q: 'Why is there no "degrees" with Kelvin?',
      a: 'Kelvin is an absolute temperature scale starting at absolute zero, and by convention we say "kelvin" not "degrees Kelvin." 0 K = −273.15°C. Kelvin uses the same increment as Celsius, so converting is just addition or subtraction of 273.15.',
    },
    {
      q: 'At what temperature are Celsius and Fahrenheit equal?',
      a: '−40. That is the one point where the two scales cross: −40°C = −40°F. It is a handy reference for checking whether a conversion formula is correct.',
    },
  ],
  'date-difference-calculator': [
    {
      q: 'Does it count the start or end date?',
      a: 'This calculator counts whole days between the two dates (the end date minus the start date), which excludes the start date itself. If you need "inclusive" counting (both endpoints counted), add 1 day to the result.',
    },
    {
      q: 'How does it handle leap years and time zones?',
      a: 'It uses your browser\'s built-in date arithmetic, which correctly accounts for leap years, varying month lengths, and daylight saving time. For cross-time-zone planning, enter dates rather than exact times to avoid off-by-one results.',
    },
    {
      q: 'How many days are in a year?',
      a: 'A common year has 365 days; a leap year has 366. Averaged over the 400-year Gregorian cycle, a year is 365.2425 days. For quick estimates, use 365; for multi-decade date math, the tool handles the leap years automatically.',
    },
  ],
  'area-converter': [
    {
      q: 'How many square feet are in an acre?',
      a: '1 acre = 43,560 square feet = 4,047 square meters ≈ 0.4047 hectares. A useful visual: an acre is roughly the area of an American football field without the end zones.',
    },
    {
      q: 'How do I convert square meters to square feet?',
      a: 'Multiply square meters by 10.764 to get square feet. Remember that area conversions use the square of the length factor (1 m = 3.281 ft, so 1 m² = 3.281² = 10.764 ft²) — a common source of error.',
    },
    {
      q: 'What is the difference between hectares and acres?',
      a: 'Both measure land area, but a hectare (10,000 m², used in most of the world) is about 2.47 times larger than an acre (4,047 m², used in the US and UK). To convert, 1 hectare ≈ 2.471 acres.',
    },
  ],
  'speed-converter': [
    {
      q: 'How do I convert mph to km/h?',
      a: 'Multiply mph by 1.609 to get km/h. Conversely, multiply km/h by 0.6214 to get mph. So 60 mph ≈ 96.6 km/h, and 100 km/h ≈ 62.1 mph. These are the two most common speed-limit units worldwide.',
    },
    {
      q: 'What is a knot, and who uses it?',
      a: 'A knot is one nautical mile per hour (1.852 km/h or 1.151 mph). It is the standard unit in aviation and maritime contexts because nautical miles are based on the Earth\'s circumference, making navigation calculations simpler.',
    },
    {
      q: 'How fast is Mach 1?',
      a: 'Mach 1 is the speed of sound, about 1,235 km/h (767 mph) at sea level and 15°C. It changes with altitude and temperature because the speed of sound depends on air density. "Mach" is a ratio of local speed to local speed of sound, not a fixed number.',
    },
  ],
  'tip-calculator': [
    {
      q: 'How much should I tip?',
      a: 'In the US, 15-20% is standard for sit-down restaurant service, with 18% a common default. 15% signals adequate service; 20%+ signals excellent. In many other countries tipping is not expected or is included as a service charge — check local customs when traveling.',
    },
    {
      q: 'Should I tip on the pre-tax or post-tax amount?',
      a: 'Tipping on the pre-tax subtotal is the traditional rule, but tipping on the total (including tax) is increasingly common and only adds a small amount. Either is acceptable; the calculator lets you enter whichever base you prefer.',
    },
    {
      q: 'How do I split the tip among a group?',
      a: 'First apply the tip to the total bill, then divide by the number of people for an even split. For fairness when orders vary widely, calculate each person\'s share of the food, apply the same tip percentage to each, and sum.',
    },
  ],
  'weight-converter': [
    {
      q: 'How many pounds are in a kilogram?',
      a: '1 kilogram = 2.20462 pounds. To convert kg to lb, multiply by 2.205. To convert lb to kg, multiply by 0.4536 (or divide by 2.205). So 70 kg ≈ 154 lb, and 180 lb ≈ 81.6 kg.',
    },
    {
      q: 'What is the difference between mass and weight?',
      a: 'Mass (kg) is the amount of matter in an object and stays constant anywhere. Weight (newtons, or the force gravity exerts) changes with gravity — you weigh less on the Moon. In everyday use, "weight" in pounds or kg treats them interchangeably, which works fine on Earth.',
    },
    {
      q: 'How many ounces are in a pound?',
      a: '1 pound (lb) = 16 ounces (oz). So 8 oz = 0.5 lb, and 24 oz = 1.5 lb. Note this is avoirdupois weight (everyday items); precious metals use troy weight, where 1 troy pound = 12 troy ounces.',
    },
  ],

  // ══════════ 第九批:JWT / Cron / SVG / TDEE(4 个)══════════
  'jwt-decoder': [
    {
      q: 'Is it safe to paste my real JWT here?',
      a: 'Yes for decoding — everything runs locally in your browser via the built-in atob function, so your token never touches a server. That said, a JWT is a bearer credential: anyone who has it can act as you until it expires. Avoid pasting real access tokens into screenshots, chats, or public places. Use the "Load Sample" button if you just want to see how decoding works.',
    },
    {
      q: 'Why can\'t this tool verify the signature?',
      a: 'Verifying a signature requires the secret (for HMAC algorithms like HS256) or the public key (for RSA/ECDSA like RS256/ES256). Those are held by the issuing server, not embedded in the token. This tool only decodes the header and payload — it cannot prove the token is authentic or unmodified without that key.',
    },
    {
      q: 'What do the iat, exp, and sub claims mean?',
      a: 'iat (issued-at) and exp (expiration) are Unix timestamps in seconds. sub (subject) identifies who the token is for, usually a user ID. Other common claims include iss (issuer), aud (audience), and role/email fields your app may add. If exp is in the past, the token is expired and servers should reject it.',
    },
  ],
  'cron-parser': [
    {
      q: 'What do the 5 fields in a cron expression mean?',
      a: 'Left to right they are: minute (0-59), hour (0-23), day of month (1-31), month (1-12), and day of week (0-6, where 0 or 7 is Sunday). So "0 9 * * 1-5" means 09:00 on weekdays. Each field accepts *, specific values, comma lists, hyphen ranges, and /steps.',
    },
    {
      q: 'How is day-of-month combined with day-of-week?',
      a: 'By an OR rule (the Vixie cron standard). When both fields are restricted (neither is *), the job fires if EITHER matches. For example, "0 0 1 * 1" runs at midnight on the 1st of the month OR on any Monday. If one of them is *, only the other is considered.',
    },
    {
      q: 'Are @daily, @hourly, and similar macros supported?',
      a: 'This parser focuses on the standard 5-field syntax. The common shorthand macros (@yearly, @monthly, @weekly, @daily, @hourly, @reboot) are widely used but not part of the core cron spec, so verify behavior on your specific platform (Linux crontab, GitHub Actions, Kubernetes, AWS EventBridge each have quirks).',
    },
  ],
  'svg-to-image': [
    {
      q: 'Why does my converted PNG look blurry?',
      a: 'PNG and WebP are raster (pixel) formats, while SVG is vector and scales infinitely. If you convert a small SVG at 1x, you get few pixels. Use the 2x or 3x scale option to render more pixels for crisp output on high-DPI screens, or keep the original SVG if you need it to scale.',
    },
    {
      q: 'Does this work for SVGs that reference external images or fonts?',
      a: 'Only for self-contained SVGs. If your SVG links to external files via <image href="..."> or loads web fonts, those resources are subject to browser same-origin/canvas-tainting rules and may not render or may block export. Inline images as data URIs and convert text to outlines for the most reliable conversion.',
    },
    {
      q: 'Is my SVG uploaded anywhere?',
      a: 'No. Conversion happens entirely in your browser using an HTML5 canvas. Your SVG code or file is read locally and never sent to a server, which also means it works offline once the page is loaded.',
    },
  ],
  'tdee-calculator': [
    {
      q: 'What activity level should I pick?',
      a: 'Sedentary (1.2) = desk job, little exercise. Lightly active (1.375) = light exercise 1-3 days/week. Moderately active (1.55) = exercise 3-5 days/week. Very active (1.725) = hard exercise 6-7 days/week. Extra active (1.9) = physical job or training twice/day. Most people overestimate — when unsure, pick the lower level; you can adjust based on real-world weight change over 2-3 weeks.',
    },
    {
      q: 'How accurate is the TDEE estimate?',
      a: 'The Mifflin-St Jeor BMR formula this tool uses is within about 10% for most people, but individual metabolism varies. Treat the number as a starting point, track your actual weight and intake for 2-3 weeks, then adjust: if you maintain on more calories than shown, your TDEE is higher; if you gain on the "maintenance" figure, it is lower.',
    },
    {
      q: 'How big a calorie surplus or deficit should I use?',
      a: 'For fat loss, a 10-20% deficit (250-500 kcal/day) loses roughly 0.25-0.5 kg per week while preserving muscle. For lean gaining, a 5-15% surplus avoids excessive fat. Aggressive deficits (-1000 kcal) cause muscle loss, hunger, and rebound. Whatever you pick, keep protein high (1.6-2.2 g/kg) and re-evaluate every few weeks.',
    },
  ],

  // ══════════ 第十批:6 个 Web & 开发者工具 ══════════
  'json-to-typescript': [
    {
      q: 'Does it support arrays and nested objects?',
      a: 'Yes. The converter recurses into nested objects and arrays. Arrays are typed as the element type (e.g. string[] for ["a","b"]); arrays of objects become an array of a generated interface. Mixed-type arrays fall back to a union (e.g. (string | number)[]).',
    },
    {
      q: 'How are null and undefined handled?',
      a: 'JSON null is typed as null (and the property marked optional in strict mode). JSON has no undefined, so it never appears. Empty objects {} become Record<string, unknown> so you can add keys later without TypeScript complaining.',
    },
    {
      q: 'Can I choose interface vs type aliases?',
      a: 'This tool generates interfaces (interface Foo {}), which is the most common and extensible convention. Interfaces support declaration merging and are easier to extend, which suits API response shapes. If you prefer type aliases you can do a find-and-replace on the output.',
    },
  ],
  'curl-converter': [
    {
      q: 'Which curl features are supported?',
      a: 'It parses the URL, -X / --request method, -H / --header headers (including Content-Type and Authorization), -d / --data / --data-raw request bodies, and -k / --insecure. Shell quoting (single and double quotes) and the $\'...\' ANSI-C syntax are handled. Unsupported flags are ignored.',
    },
    {
      q: 'How is the request body encoded?',
      a: 'Raw bodies (-d "..." or --data-raw) are passed through as-is. For JavaScript Fetch this becomes body: "..."; for Python requests it becomes data="..." (or json= for JSON Content-Type where possible). Multipart file uploads (-F) are not converted to multipart code — use a dedicated client for those.',
    },
    {
      q: 'Is my curl command sent to a server?',
      a: 'No. Parsing and code generation run entirely in your browser with a hand-written tokenizer. Your command, tokens, or headers are never uploaded, which also matters if your curl contains tokens or secrets — though you should still avoid pasting real credentials anywhere.',
    },
  ],
  'open-graph-generator': [
    {
      q: 'What is the difference between Open Graph and Twitter Cards?',
      a: 'Open Graph (og:) tags are read by Facebook, LinkedIn, Slack, Discord, and most platforms. Twitter Cards (twitter:) tags are specific to X/Twitter but fall back to Open Graph when absent. Generating both ensures the best preview everywhere with minimal duplication.',
    },
    {
      q: 'What image size should I use?',
      a: 'For og:image and twitter:image use a 1.91:1 ratio at 1200x630px, kept under 1 MB (most platforms cap at 5–8 MB). Square 1080x1080 works for some platforms but 1200x630 is the safest universal choice for link previews.',
    },
    {
      q: 'Why is my preview not updating after I deploy?',
      a: 'Platforms cache share previews aggressively. Use Facebook Sharing Debugger, Twitter Card Validator, or LinkedIn Post Inspector to force a re-scrape after your tags are live. The tags must be in the raw server HTML, not injected by JavaScript, for crawlers that do not execute scripts.',
    },
  ],
  'css-shadow-generator': [
    {
      q: 'What is the difference between box-shadow blur and spread?',
      a: 'Blur radius softens the shadow edges — higher values give a softer, more diffuse shadow. Spread radius grows or shrinks the shadow itself — positive makes it larger than the element, negative makes it smaller. A 0 blur with positive spread creates a hard-edged duplicate.',
    },
    {
      q: 'How do I make a glassmorphism effect?',
      a: 'Glassmorphism needs three parts: a semi-transparent background (rgba with low alpha), a backdrop-filter: blur(...) on the element, and a subtle border. This tool exposes all three so you can tune them live. Note backdrop-filter requires the element to have something behind it to blur.',
    },
    {
      q: 'Does backdrop-filter work in all browsers?',
      a: 'It works in all modern Chrome, Edge, Safari (with -webkit- prefix), and Firefox 103+. Older browsers ignore it and the element shows the solid background instead. The generated CSS includes the -webkit-backdrop-filter prefix for Safari compatibility.',
    },
  ],
  'regex-tester': [
    {
      q: 'Which regex flavor does this use?',
      a: 'It uses the JavaScript RegExp engine (the same one running in your browser), which is close to the ECMAScript specification. It supports lookahead, named groups, unicode flag, and the s (dotAll) flag. It does not support lookbehind in older Safari, or PCRE-specific features like atomic groups.',
    },
    {
      q: 'How are capture groups shown?',
      a: 'Each match is highlighted in the text, and below the result every capture group (numbered and named) is listed with its captured value for each match. This helps debug patterns like /(\\d+)-(\\d+)/ by showing exactly what each group captured.',
    },
    {
      q: 'Why did my regex throw an error?',
      a: 'Common causes: unbalanced parentheses, an unescaped special character (use \\. to match a literal dot), or quantifier with nothing to repeat (like *+). The error message from the JavaScript engine is shown inline so you can fix the syntax.',
    },
  ],
  'favicon-generator': [
    {
      q: 'Which image formats can I upload?',
      a: 'PNG, JPG/JPEG, GIF, and WebP. PNG with transparency is recommended because favicons look best on coloured browser tabs. SVG source also works but is rasterised to PNG favicons here, since 16x16 and 32x32 raster favicons have the widest browser support.',
    },
    {
      q: 'Why do I need multiple sizes?',
      a: 'Different contexts use different sizes: 16x16 for the browser tab, 32x32 for retina tabs and the Windows taskbar, and 180x180 (Apple Touch Icon) for iOS home-screen bookmarks. Serving one large image and letting the browser scale it looks blurry at 16x16.',
    },
    {
      q: 'Is my image uploaded to a server?',
      a: 'No. The image is loaded into an in-browser canvas, cropped and scaled, and exported via canvas.toBlob — all locally. Your file never leaves your device, which also means this works offline once the page is loaded.',
    },
  ],

  // ══════════ 第十一批:8 个 Web & 开发者 & 文本工具 ══════════
  'px-to-rem': [
    {
      q: 'What root font size should I use?',
      a: 'The browser default is 16px, which is what most CSS resets assume. If your design sets html { font-size: 62.5% } (10px) so 1rem = 10px for easier mental math, change the root size to 10px here to match. The rem value is always px ÷ root-font-size.',
    },
    {
      q: 'What is the difference between rem and em?',
      a: 'rem is relative to the root (html) font size, so it is consistent everywhere. em is relative to the font size of the nearest parent element, so it compounds in nested elements. Use rem for layout spacing and font sizes that must stay predictable; use em for padding and margins inside components that scale with their own text.',
    },
    {
      q: 'Why does my rem value look wrong in the browser?',
      a: 'The most common cause is a root font size that differs from 16px — a reset, a media query, or user browser settings can change it. Inspect the html element computed font-size in DevTools and enter that exact value here. rem is always calculated against the actual root, not 16px by definition.',
    },
  ],
  'aspect-ratio-calculator': [
    {
      q: 'How is the missing dimension calculated?',
      a: 'From the ratio W:H. If you know the width, the height = width × (H ÷ W). If you know the height, the width = height × (W ÷ H). For 16:9 with a width of 1920, the height is 1920 × (9 ÷ 16) = 1080.',
    },
    {
      q: 'What is the difference between fitting and filling a box?',
      a: 'Fit (contain) scales the image so the whole thing is visible inside the box, which may leave empty space. Fill (cover) scales so the box is completely covered, which may crop the image. This tool shows both the fitted dimensions and the scaling factor so you can choose.',
    },
    {
      q: 'Which aspect ratios are most common?',
      a: '16:9 for YouTube and modern video, 4:3 for older TVs and some cameras, 21:9 for ultrawide monitors, 1:1 for Instagram squares, 9:16 for phone stories (vertical video), and 3:2 for most DSLR photos. Use the presets or enter any custom ratio like 5:4.',
    },
  ],
  'color-contrast-checker': [
    {
      q: 'What contrast ratio do I need to pass WCAG?',
      a: 'For AA, you need at least 4.5:1 for normal text and 3:1 for large text (18pt or 14pt bold). For AAA, the bar rises to 7:1 for normal text and 4.5:1 for large text. Non-text UI components (icons, borders) need 3:1 under AA.',
    },
    {
      q: 'How is the contrast ratio calculated?',
      a: 'It uses the relative luminance of each color. The formula is (L1 + 0.05) ÷ (L2 + 0.05), where L1 is the lighter and L2 the darker luminance. Pure white on pure black is 21:1, the maximum. The ratio is the same whether text is on background or background on text.',
    },
    {
      q: 'Does the checker handle semi-transparent colors?',
      a: 'No — it computes the ratio for opaque foreground and background colors, which is what WCAG specifies. If your text has opacity, first blend it against its actual background to get the effective solid color, then test that. Alpha compositing changes the perceived contrast.',
    },
  ],
  'yaml-to-json': [
    {
      q: 'Which YAML features are supported?',
      a: 'The parser handles mappings, sequences (lists), nested structures, inline flow syntax ([a,b] and {k: v}), single and double quoted strings, plain scalars, numbers, booleans, null, block scalars (| and >), and # comments. Multi-document streams (---) are not split; only the first is converted.',
    },
    {
      q: 'Why did my YAML fail to parse?',
      a: 'YAML is indentation-sensitive — mixing tabs with spaces, or inconsistent indent depth, is the most common cause. Use spaces only and keep indent steps consistent (2 spaces is conventional). Also check for unquoted values that look like special tokens (yes/no/on/off become booleans) — quote them if you want strings.',
    },
    {
      q: 'How are duplicate keys handled?',
      a: 'Unlike some YAML libraries that silently overwrite duplicates, this parser reports an error on duplicate keys in the same mapping, because that usually signals a mistake and produces data loss. Fix the duplicate in the source YAML and re-convert.',
    },
  ],
  'sql-formatter': [
    {
      q: 'Which SQL dialect does this format?',
      a: 'It applies generic ANSI SQL formatting that works for MySQL, PostgreSQL, SQLite, SQL Server, and Oracle. Major keywords (SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY, INSERT, UPDATE, DELETE) are recognized and capitalized. Dialect-specific syntax (PL/pgSQL blocks, T-SQL variables) may not get perfect indentation.',
    },
    {
      q: 'Does it validate or execute my query?',
      a: 'No. It is a pure formatter — it re-indents and capitalizes keywords but does not check that the query is valid SQL or run it against a database. That means it will happily format a query with a syntax error; it just makes the text easier to read.',
    },
    {
      q: 'Can it minify SQL as well as beautify it?',
      a: 'Yes. Use the Minify option to collapse the query into a single line with normalized whitespace, which is useful for storing or sending queries compactly. Toggle back to Format to expand it again for editing.',
    },
  ],
  'markdown-to-html': [
    {
      q: 'Which Markdown features are supported?',
      a: 'Headings (H1-H6), bold, italic, inline code, code blocks, blockquotes, ordered and unordered lists, links, images, horizontal rules, and GFM tables. It follows the CommonMark baseline plus the most common GitHub Flavored Markdown extensions for tables and task lists.',
    },
    {
      q: 'Is the output HTML safe to embed directly?',
      a: 'The generated HTML is escaped for inline code and code blocks, but this tool does not run a full sanitizer. If your Markdown source contains raw HTML or user-submitted content, pass the output through a sanitizer like DOMPurify before inserting it into a live page to prevent XSS.',
    },
    {
      q: 'Why do my line breaks not appear?',
      a: 'Standard Markdown treats a single newline as a space and requires two spaces at the end of a line, or a blank line, for a break. If you need every newline to render as a <br>, that is the "hard line breaks" extension — common in chat-style Markdown. This tool follows the standard soft-break behavior.',
    },
  ],
  'image-to-base64': [
    {
      q: 'What is a data URI and when should I use one?',
      a: 'A data URI embeds the file contents directly in a URL string (data:image/png;base64,....). Use it to inline small images into HTML, CSS, or JSON so the browser does not make a separate request — handy for icons, avatars, or email assets. Avoid it for large files: Base64 adds ~33% size and blocks rendering.',
    },
    {
      q: 'Which image formats are supported?',
      a: 'PNG, JPG/JPEG, GIF, WebP, and SVG. The data URI is tagged with the correct MIME type (image/png, image/jpeg, etc.) so browsers and email clients render it correctly. SVG can be embedded either as Base64 or as raw UTF-8 — Base64 is used here for consistency.',
    },
    {
      q: 'Is my image uploaded anywhere?',
      a: 'No. The file is read with FileReader.readAsDataURL, which produces the Base64 string entirely in your browser. The image never touches a server, which matters for private assets and also means the tool works offline.',
    },
  ],
  'list-diff': [
    {
      q: 'What do "only in A", "only in B", and "both" mean?',
      a: '"Only in A" lists items present in the first list but not the second; "only in B" is the reverse; "both" is the intersection (items in both). The union combines every unique item from either list. Together these four sets fully describe how the two lists differ.',
    },
    {
      q: 'How are duplicates and whitespace handled?',
      a: 'Each line is trimmed of surrounding whitespace by default, and comparison treats each item as a set member — so duplicates within a single list are collapsed. Toggle "case sensitive" off to compare case-insensitively, which is useful when casing is inconsistent across the two lists.',
    },
    {
      q: 'Can I copy each result set separately?',
      a: 'Yes. Each of the four result sections has its own Copy button that copies just that set (one item per line), so you can paste "only in A" straight into a spreadsheet or another tool without manual cleanup.',
    },
  ],
  'ip-checker': [
    {
      q: 'What is an IP fraud score and how is it calculated?',
      a: 'A fraud score is a 0-100 heuristic rating of how risky an IP looks to online platforms. It blends signals like the ASN type (datacenter vs residential), mismatches between your device timezone and the IP geolocation timezone, and hosting/proxy keywords in the ASN owner name. The higher the score, the more the IP resembles a bot, VPN, or proxy exit node.',
    },
    {
      q: 'What is the difference between a residential ISP IP and a datacenter (IDC) IP?',
      a: 'Residential IPs are assigned by consumer ISPs to real households, so platforms treat their traffic as human. Datacenter IPs come from cloud providers like AWS, Google Cloud, or DigitalOcean; they are cheap to obtain in bulk, which is why TikTok, Amazon, and similar platforms flag them — accounts operated on datacenter IPs face far more verification challenges and bans.',
    },
    {
      q: 'Why does my device timezone differ from my IP timezone?',
      a: 'Your device timezone comes from the browser/OS settings, while the IP timezone is derived from geolocating your exit IP. If they disagree — for example the device reports Asia/Shanghai but the IP resolves to America/New_York — you are almost certainly behind a VPN or proxy, and anti-fraud systems use exactly this mismatch as a leak signal.',
    },
  ],
  // ══════════ _batch-faqs-gap(30 个补缺)══════════
  'gpt-token-counter': [
    {
      q: 'Is this token count exact or an estimate?',
      a: 'An estimate. It uses the ~4-characters-per-token rule of thumb refined by a word/punctuation split, so it lands near cl100k_base. Real billing uses the provider\'s exact tokenizer, so treat the number as an order-of-magnitude guide.',
    },
    {
      q: 'Why does my real token count differ from this estimate?',
      a: 'Different models use different tokenizers (cl100k_base, o200k_base, Claude\'s tokenizer), and code, CJK text, emojis, and rare Unicode each break the 4-chars-per-token average. Non-English text typically needs more tokens per character, so the estimate drifts most there.',
    },
    {
      q: 'How is the API cost calculated?',
      a: 'Estimated tokens × the per-million-token price you pick for the chosen model. Because the token count itself is approximate, the cost is also a planning estimate — check your provider dashboard for exact billing.',
    },
  ],
  'ip-subnet-calculator': [
    {
      q: 'What is CIDR notation (e.g. /24)?',
      a: 'CIDR is the /number after an IP that says how many bits are the network part. /24 means the first 24 bits are fixed and the last 8 vary, giving 256 addresses. Smaller numbers (like /16) cover more hosts; larger numbers (like /30) cover fewer.',
    },
    {
      q: 'Why are there two fewer usable hosts than the address count?',
      a: 'In every subnet the first address is reserved as the network address and the last as the broadcast address, so neither can be assigned to a device. A /24 has 256 addresses but only 254 usable hosts; a /30 has 4 addresses but only 2 usable.',
    },
    {
      q: 'What are the network address and broadcast address for?',
      a: 'The network address identifies the subnet itself and is used by routers; the broadcast address sends a packet to every host in that subnet. Neither belongs to an individual device, which is why both are excluded from the usable host range.',
    },
  ],
  'chmod-calculator': [
    {
      q: 'What does chmod 777 mean, and is it safe?',
      a: '777 grants read, write, and execute to everyone (owner, group, and others). It is convenient for testing but unsafe on a server, because any user can modify or run the file. Use 755 for directories and executable scripts, and 644 for regular files, instead.',
    },
    {
      q: 'How do the rwx letters map to octal digits?',
      a: 'Each permission position has a value: read = 4, write = 2, execute = 1. Add them up per group. So rwx = 7 (4+2+1), r-x = 5 (4+0+1), rw- = 6 (4+2+0). 755 therefore means rwxr-xr-x.',
    },
    {
      q: 'What is the difference between 755 and 644?',
      a: '755 (rwxr-xr-x) lets the owner read, write, and execute while others can only read and execute — correct for directories and scripts. 644 (rw-r--r--) lets the owner read and write while others can only read — the safe default for static files like HTML and images.',
    },
  ],
  'ssh-key-generator': [
    {
      q: 'Ed25519 or RSA — which should I choose?',
      a: 'Prefer Ed25519: the keys are much shorter, faster, and offer equivalent or better security than RSA-4096. Use RSA only when you must connect to older servers or hardware that does not yet support Ed25519.',
    },
    {
      q: 'Is my private key ever uploaded anywhere?',
      a: 'No. The key pair is generated locally in your browser with the Web Crypto API, and the private key never leaves your device. Only you can copy or download it — there is no server-side storage.',
    },
    {
      q: 'What RSA key size should I use?',
      a: '4096 bits if you want a long-term margin; 2048 is still acceptable for compatibility. Larger keys are slower to generate and use, so for most new setups Ed25519 is the better choice.',
    },
  ],
  'bcrypt-hash-generator': [
    {
      q: 'Why is bcrypt better than SHA-256 for passwords?',
      a: 'bcrypt is deliberately slow and has a tunable cost factor, so brute-forcing a leaked hash becomes prohibitively expensive as hardware improves. SHA-256 is fast by design — great for file checksums, but bad for passwords because an attacker can guess billions per second.',
    },
    {
      q: 'What cost factor should I use?',
      a: 'Pick the highest value your server can afford at login (commonly 10–12 today). Each increment roughly doubles the hashing time, so the right number depends on your hardware and acceptable login latency. Re-evaluate it every year or two.',
    },
    {
      q: 'Can a bcrypt hash be reversed back to the password?',
      a: 'No — hashing is one-way. What attackers do instead is guess passwords, hash each guess, and compare. That is exactly why the slow cost factor matters: it makes each guess expensive. The salt (embedded in the hash) prevents reusing precomputed rainbow tables.',
    },
  ],
  'user-agent-parser': [
    {
      q: 'Why does my UA say "Chrome" when I use Edge or Brave?',
      a: 'Chromium-based browsers (Edge, Brave, Opera, Vivaldi) all include "Chrome" in their UA string for site compatibility, plus their own token. The parser reports the most specific recognized browser, so Edge and Brave are detected from their dedicated tokens rather than the shared "Chrome" one.',
    },
    {
      q: 'How reliable is browser and OS detection from a UA string?',
      a: 'Useful but not infallible. Browsers are phasing out granular UA strings (User-Agent Client Hints), privacy tools freeze or spoof them, and new or niche products may not yet be in the detection database. Treat the result as a hint, not a guarantee.',
    },
    {
      q: 'What is a user-agent string actually used for?',
      a: 'Servers and analytics use it to choose content (e.g. mobile layout), log browser share, or block known bots. Increasingly, feature detection in JavaScript is preferred over UA sniffing, because UA strings are unreliable and easily spoofed.',
    },
  ],
  'json-schema-generator': [
    {
      q: 'Which JSON Schema draft does it output?',
      a: 'Draft-07. It uses the standard "type", "properties", "required", and "items" keywords that all major validators support, so the schema drops into most existing validation pipelines without changes.',
    },
    {
      q: 'How does it decide which fields are "required"?',
      a: 'A field is marked required when it appears in every object of the sample data. Fields missing in at least one record stay optional, which mirrors how real-world data usually looks and avoids over-constraining your schema.',
    },
    {
      q: 'Does it handle nested objects and arrays?',
      a: 'Yes. Nested objects become nested "properties", and arrays are described with "items" based on their element type. When an array mixes shapes, the tool infers from the elements it can see, so richer samples produce more accurate schemas.',
    },
  ],
  'naming-case-converter': [
    {
      q: 'What is the difference between camelCase and PascalCase?',
      a: 'camelCase starts lowercase and capitalizes each following word (parseHtml), while PascalCase (a.k.a. UpperCamelCase) capitalizes the first word too (ParseHtml). camelCase is the convention for variables and functions; PascalCase is used for classes and React components.',
    },
    {
      q: 'How are word boundaries detected in a name?',
      a: 'The converter splits on hyphens, underscores, spaces, and case transitions, so "HTMLParser", "html_parser", and "html-parser" all become the same word list before reformatting. This lets you convert between every style in either direction.',
    },
    {
      q: 'Does bulk mode keep one converted name per line?',
      a: 'Yes. Paste a whole list (one identifier per line) and each line is converted independently, preserving the line order. Blank lines stay blank, so the output aligns one-to-one with your input.',
    },
  ],
  'nginx-config-generator': [
    {
      q: 'Does this replace manual nginx tuning?',
      a: 'It gives you a correct, production-ready starting server block, but high-traffic setups still need tuning (worker counts, buffering, rate limits) matched to your hardware and traffic. Treat the output as a solid baseline to edit, not a final optimized config.',
    },
    {
      q: 'Does the output include SSL / HTTPS?',
      a: 'When you enable SSL it generates the certificate paths, the HTTPS server block, HTTP-to-HTTPS redirect, and modern cipher/protocol settings. You still point the paths at your real certificates (e.g. from Let\'s Encrypt) before deploying.',
    },
    {
      q: 'Can it configure a WebSocket reverse proxy?',
      a: 'Yes. Enabling the WebSocket option adds the Upgrade and Connection headers and the proxy timeout tuning that WebSocket long-lived connections need, so real-time apps work behind the proxy without extra editing.',
    },
  ],
  'webp-to-png-converter': [
    {
      q: 'Will I lose transparency converting WebP to PNG?',
      a: 'No. PNG supports full alpha transparency and is lossless, so a transparent WebP becomes a transparent PNG with no quality loss. This is the safest format when you must hand an image to software that does not support WebP.',
    },
    {
      q: 'Does converting WebP to JPG lose quality?',
      a: 'JPG is always lossy and does not support transparency, so transparent areas get filled with a background color and fine detail is recompressed. Use PNG for lossless or transparent output, and JPG only when a smaller file matters more than perfect fidelity.',
    },
    {
      q: 'Is my image uploaded to a server?',
      a: 'No. Conversion happens entirely in your browser, so the image never leaves your device. That keeps private assets private and lets the tool work offline.',
    },
  ],
  'png-to-webp-converter': [
    {
      q: 'How much smaller will WebP be than PNG?',
      a: 'Typically 25–35% smaller for the same image at visually identical quality, and often far more for photos. PNG is lossless and inefficient for photographs, so converting photographic PNGs to WebP usually gives the biggest savings.',
    },
    {
      q: 'Does WebP support transparency?',
      a: 'Yes. WebP has lossless alpha transparency just like PNG, so cut-outs, logos, and icons keep their transparent backgrounds while shrinking the file size. Set a high quality value to preserve sharp edges.',
    },
    {
      q: 'What quality setting should I choose?',
      a: 'For photos, 75–85 is visually near-indistinguishable from the original and much smaller. For graphics with flat colors or text, push quality to 90+ (or use lossless) to avoid banding and blurry edges.',
    },
  ],
  'image-resizer': [
    {
      q: 'Does resizing reduce image quality?',
      a: 'Downscaling discards pixels and applies resampling, so there is some softening, but at normal viewing sizes it is barely noticeable. Upscaling cannot add real detail and will look blurry, so always prefer resizing from a larger original.',
    },
    {
      q: 'Can I resize without distorting the aspect ratio?',
      a: 'Yes. The aspect-ratio lock keeps width and height proportional, so when you change one dimension the other updates automatically. Turn it off only when you need a forced, non-proportional crop.',
    },
    {
      q: 'Which output format should I pick after resizing?',
      a: 'WebP for the smallest files, JPG for photographs, and PNG when you need lossless quality or transparency. The tool previews the resulting file size for each option so you can choose the best trade-off before downloading.',
    },
  ],
  'svg-minifier': [
    {
      q: 'Will the SVG look the same after minifying?',
      a: 'Yes. Minification removes only data the renderer ignores — comments, editor metadata, hidden layers, redundant whitespace, and default attributes — so the visual output is identical, just encoded more compactly.',
    },
    {
      q: 'What exactly gets removed?',
      a: 'Comments, the inkscape/sodipodi namespace cruft that editors inject, empty groups and definitions, trailing whitespace, and rounded coordinates where safe. Anything that affects rendering is preserved, so the file size drops without changing the picture.',
    },
    {
      q: 'How much size can I expect to save?',
      a: 'Usually 20–60%, and much more for files exported straight from design tools that bloat the markup with metadata. The before/after byte counts are shown instantly so you can see the exact savings.',
    },
  ],
  'css-gradient-generator': [
    {
      q: 'What is the difference between linear and radial gradients?',
      a: 'A linear gradient blends colors along a straight line at an angle you set, while a radial gradient radiates outward from a center point in a circle or ellipse. Use linear for backgrounds and buttons; radial for spotlights and spherical effects.',
    },
      {
      q: 'How do I add more than two color stops?',
      a: 'Add stops on the preview bar and drag them to position; each gets a percentage position automatically. The generator writes the full stops list into the CSS, so multi-color blends and hard-edged bands both copy out ready to paste.',
    },
    {
      q: 'Does the output work in all browsers?',
      a: 'Yes. It outputs standard linear-gradient() / radial-gradient() CSS, supported by all current browsers. For legacy engines you can add a solid-color fallback behind the gradient, but modern browsers need no extra prefixes.',
    },
  ],
  'css-clamp-calculator': [
    {
      q: 'What does clamp() actually do?',
      a: 'clamp(min, preferred, max) lets a value grow and shrink with the viewport (via the preferred vw part) but never goes below min or above max. It is the cleanest way to make font sizes and spacing fluid without media queries.',
    },
      {
      q: 'Why is my text too big on mobile or too small on desktop?',
      a: 'Usually the min/max bounds or the viewport range are mis-set. Set the min font size for the smallest screen and the max for the largest, then give the viewport range that spans those two breakpoints — the calculator builds the preferred value so the scaling stays smooth between them.',
    },
    {
      q: 'What is "fluid typography"?',
      a: 'Text that scales smoothly with the viewport instead of jumping between fixed sizes at breakpoints. With clamp() one rule covers every screen width, which feels more natural and needs far less CSS than a stack of media queries.',
    },
  ],
  'csv-to-markdown-table': [
    {
      q: 'How does it handle commas inside quoted fields?',
      a: 'It parses the CSV properly, so a comma inside double quotes is treated as literal text, not a delimiter. Quoted fields with newlines and escaped quotes are also handled, so real-world exports from spreadsheets convert cleanly.',
    },
    {
      q: 'Can I control column alignment?',
      a: 'Yes. You can set left, center, or right alignment per column, which becomes the Markdown alignment row (:---, :---:, ---:). Default is left alignment, matching what most READMEs expect.',
    },
    {
      q: 'Does it accept TSV (tab-separated) input?',
      a: 'Yes. Tab-separated data is detected and split the same way as comma-separated, so you can paste output from spreadsheets or databases directly without first converting the delimiter.',
    },
  ],
  'text-cleaner': [
    {
      q: 'What does "remove accents" do exactly?',
      a: 'It converts accented characters to their base form — café becomes cafe, Münster becomes Munster — using Unicode normalization (NFD then stripping combining marks). It removes the diacritic marks, not the letters themselves, so the text stays readable.',
    },
    {
      q: 'Will it delete my normal punctuation?',
      a: 'Only if you enable the "remove special characters" option. By default regular punctuation, digits, and letters are kept; the tool is opt-in per cleaning rule, so you control exactly which transformations run.',
    },
    {
      q: 'Does it remove emojis and URLs?',
      a: 'Yes, both are optional rules. Emojis and symbols are stripped via their Unicode ranges, and URLs are removed by pattern matching — handy for cleaning user comments or preparing text for analysis.',
    },
  ],
  'srt-subtitle-shift': [
    {
      q: 'Does a positive offset shift subtitles earlier or later?',
      a: 'A positive offset adds time, so every cue starts later — use this when the subtitles appear before the speech. A negative offset subtracts time, pulling cues earlier for when they lag behind the audio.',
    },
    {
      q: 'Does it renumber the cue indices?',
      a: 'Yes. After shifting, the cues are renumbered sequentially from 1 in their new chronological order, so the output is always a valid, correctly ordered SRT file even if offsets move cues relative to each other.',
    },
    {
      q: 'Can it strip HTML and ASS formatting tags?',
      a: 'Yes. The tag-stripping option removes inline HTML (<i>, <b>) and ASS-style override tags, leaving clean plain-text subtitles. This is useful when a player renders the tags as visible gibberish instead of styling.',
    },
  ],
  'code-beautifier': [
    {
      q: 'Which languages does it format?',
      a: 'HTML, CSS, JavaScript, and JSON. Each is parsed with a language-aware formatter that re-indents and normalizes spacing, so minified or messy code becomes readable without changing its meaning.',
    },
    {
      q: 'Will beautifying change how my code runs?',
      a: 'No. Formatting only adjusts whitespace, line breaks, and indentation — it does not alter tokens, logic, or values. The beautified output is functionally identical to the input, just easier to read.',
    },
    {
      q: 'Should I use 2 or 4 spaces?',
      a: 'Match your project\'s existing style. Two spaces is common for HTML, CSS, and JSON; four is often used in JavaScript. Consistency within a codebase matters more than the specific number, so pick the option that matches your team\'s convention.',
    },
  ],
  'secret-key-generator': [
    {
      q: 'Are these keys cryptographically secure?',
      a: 'Yes. They use the browser\'s secure random source (crypto.getRandomValues), the same CSPRNG used for TLS keys, so the output is suitable for API secrets, session tokens, and other security-sensitive values — not Math.random().',
    },
    {
      q: 'How long should an API key be?',
      a: '32 hex characters (128 bits) is a sensible minimum and 64 hex characters (256 bits) gives a strong margin. Length matters far more than the alphabet for brute-force resistance, so prefer longer over more exotic characters.',
    },
    {
      q: 'What is the difference between hex and Base64 output?',
      a: 'For the same amount of randomness, hex uses only 0-9 and a-f (longer string), while Base64 uses a larger alphabet (shorter string). Both are equally secure for a given bit length — pick whichever your consuming system expects.',
    },
  ],
  'auto-loan-calculator': [
    {
      q: 'Does it include sales tax and fees?',
      a: 'It factors in sales tax on the purchase price and lets you add fees and a trade-in value, so the loan amount reflects what you actually finance. Registration, dealer doc fees, and add-on products are not itemized — add them as a lump fee if needed.',
    },
    {
      q: 'How does the down payment affect my monthly payment?',
      a: 'A larger down payment shrinks the principal you borrow, which lowers both the monthly payment and the total interest. Putting 20% or more down can also help you qualify for a better APR and avoid being "underwater" on the loan.',
    },
    {
      q: 'What APR is typical for a car loan?',
      a: 'It depends heavily on your credit and whether the car is new or used. In recent years new-car loans have ranged from roughly 5% to 10%+ and used-car loans a few points higher; excellent credit gets the lowest rates. Always check the APR, not just the monthly payment.',
    },
  ],
  'ebay-fee-calculator': [
    {
      q: 'Which fees does eBay charge sellers?',
      a: 'Mainly the final value fee (a percentage of the total sale amount including shipping) plus a per-order fixed fee, and the payment processing fee for handling the buyer\'s payment. Optional promoted-listing fees apply only if you use them.',
    },
    {
      q: 'Is the payment processing fee included?',
      a: 'Yes. The calculator bundles eBay\'s managed-payments processing fee with the final value fee, since both are deducted from your payout on most accounts. The result shows the net you actually receive after both.',
    },
    {
      q: 'Does it work for Etsy too?',
      a: 'Yes. The tool supports Etsy\'s listing, transaction, and payment processing fees so you can compare the true net payout across marketplaces before deciding where to list.',
    },
  ],
  'saas-ltv-churn-calculator': [
    {
      q: 'What is the difference between LTV and ARPU?',
      a: 'ARPU (average revenue per user) is what one customer pays per period right now; LTV (lifetime value) is the total revenue you expect from that customer over their whole relationship. LTV is essentially ARPU multiplied by how many periods an average customer stays.',
    },
    {
      q: 'How does churn rate affect LTV?',
      a: 'LTV is inversely tied to churn: with monthly churn c, the average customer lifetime is about 1/c months, so halving your churn roughly doubles your LTV. That is why retention improvements compound so powerfully into revenue.',
    },
    {
      q: 'What is a healthy LTV:CAC ratio?',
      a: 'A common benchmark is 3:1 — you earn three times what it costs to acquire a customer. Below 2:1 growth is hard to sustain; above 5:1 you may be under-investing in growth and leaving market share on the table.',
    },
  ],
  'freelance-invoice-generator': [
    {
      q: 'Can I save the invoice as a PDF?',
      a: 'Yes. The invoice is laid out for printing, so use your browser\'s "Print to PDF" to save a clean, watermark-free PDF. Because everything runs in your browser, the layout stays exactly as previewed.',
    },
    {
      q: 'Does it store my client or business data?',
      a: 'No. All details — your info, client info, line items, and tax — live only in your browser for the current session; nothing is uploaded or persisted on a server. Refresh or close the tab and the data is gone.',
    },
    {
      q: 'Can I add tax and discounts?',
      a: 'Yes. You set a tax rate that applies to the subtotal, and per-line or overall discounts flow through to the totals automatically, so the final amount due is always calculated consistently.',
    },
  ],
  'reverse-stripe-fee-calculator': [
    {
      q: 'Why is the payout less than the amount I charged?',
      a: 'Stripe deducts a percentage plus a fixed fee from each transaction, so the money that arrives in your account is always below the charge total. For micro-payments the fixed fee eats a large share, which is why small charges feel especially costly.',
    },
    {
      q: 'How does reverse mode work?',
      a: 'You enter the amount you want to actually receive, and it works backward through the fee formula to find the price you must charge so that, after fees, you net exactly your target. This is how you pass fees on to the customer cleanly.',
    },
    {
      q: 'What are Stripe\'s current fees?',
      a: 'In the US the standard rate is around 2.9% + $0.30 per successful card charge, but it varies by country, payment method, and volume. The presets are editable, so update them to match your exact rate from the Stripe dashboard.',
    },
  ],
  'timezone-converter': [
    {
      q: 'Does it account for daylight saving time (DST)?',
      a: 'Yes. Each time zone is handled by its IANA identifier (e.g. America/New_York), which carries its own DST rules, so offsets and the "is it next day" flag update correctly on the exact transition dates. You do not have to add or subtract an hour manually.',
    },
    {
      q: 'How do I find overlapping working hours across regions?',
      a: 'Add every participant\'s time zone, set the meeting time in one, and read off what the local clock says for each. The day-shift indicators show who would be on the next or previous calendar day, so you can spot awkward late-night slots instantly.',
    },
    {
      q: 'What does a "next day" or "previous day" label mean?',
      a: 'It means that while it is still the same calendar moment everywhere, the local date in that time zone has rolled forward (next day) or backward (previous day) relative to the time you entered. It flags scheduling that crosses midnight for one or more attendees.',
    },
  ],
  'days-countdown-calculator': [
    {
      q: 'Can it count business days only?',
      a: 'Yes. The business-days mode excludes Saturdays and Sundays, so contract deadlines, shipping, and SLA windows that are measured in working days are counted correctly. (Public holidays vary by country, so add those manually if needed.)',
    },
    {
      q: 'Does it include or exclude the start and end dates?',
      a: 'It counts the difference between the two dates, so by default neither endpoint is double-counted — the result is the number of full days between them. For a "days until" countdown, the target date is the reference point the timer counts down to.',
    },
    {
      q: 'Can it show hours, minutes, and seconds, not just days?',
      a: 'Yes. The live countdown breaks the remaining time into days, hours, minutes, and seconds and updates in real time, so you see the exact time remaining down to the second for an event or deadline.',
    },
  ],
  'reading-speaking-time': [
    {
      q: 'What reading speed counts as "average"?',
      a: 'Around 200–250 words per minute for silent reading of adult non-fiction. The presets give slow (~150), average (~230), and fast (~320) options, and a custom slider lets you match your own pace or a specific audience.',
    },
    {
      q: 'Why is speaking time longer than reading time?',
      a: 'People read faster than they speak — aloud you add pauses, emphasis, and breath. A common public-speaking pace is 130–150 words per minute, so the same text takes noticeably longer to present than to read silently.',
    },
    {
      q: 'Can I set my own words-per-minute speed?',
      a: 'Yes. The custom speed slider overrides the presets, so you can match a known narration rate, a slide-deck time budget, or a podcast script length precisely instead of relying on the average values.',
    },
  ],
  'random-choice-picker': [
    {
      q: 'Is the selection truly random?',
      a: 'It uses your browser\'s built-in random number generator, which is sufficient for fair picks, raffles, and decision-making. For cryptographic security you would want a dedicated CSPRNG, but for choosing among options it is unbiased and unpredictable enough.',
    },
    {
      q: 'Can it pick multiple unique winners?',
      a: 'Yes. You can draw several winners without repeats — each option is picked at most once per draw — which is ideal for giveaways and assigning prizes or tasks fairly across a list.',
    },
    {
      q: 'Does it keep a history of past picks?',
      a: 'Yes, recent results are kept in a history list so you can review what was chosen across multiple draws. This helps when running several rounds and you need to confirm no one was skipped or double-picked.',
    },
  ],
  'wordle-solver': [
    {
      q: 'Does it use the official Wordle answer list?',
      a: 'It uses a large built-in English word list sized to cover Wordle-style five-letter answers, so suggestions match the kind of words the game accepts. It is a strong solving aid, though no third-party list is guaranteed to mirror the game exactly on every future day.',
    },
    {
      q: 'How do green, yellow, and gray hints map to the inputs?',
      a: 'Green (correct spot) letters go in the "known position" fields; yellow (in the word, wrong spot) go in the "included letters" box; gray (not in the word) go in "excluded letters." The solver filters the dictionary against all three to narrow the candidates.',
    },
    {
      q: 'Does it support anagram and pattern solving?',
      a: 'Yes. Beyond the standard hint filters it can match anagram patterns and known letter positions, which helps when you have scrambled letters or partial information and want every dictionary word that fits.',
    },
  ],
}
export function getToolFaqs(slug: string): FaqPair[] {
  return toolFaqs[slug] ?? []
}
