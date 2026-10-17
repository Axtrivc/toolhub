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
      a: 'Headers are built from the union of every object\'s keys in first-seen order, so extra keys in later objects are kept, and objects missing a key get an empty value. Normalizing your data structure first still gives the cleanest output.',
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
      a: 'The default bullet is •. Append " ||| -", " ||| *", or " ||| 1." at the end of your text to switch to hyphens, asterisks, or numbered items instead.',
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
      a: 'Yes. When block-level tags like <p> and <div> are stripped, a line break is added after them, so paragraphs stay separated even though the tags themselves are gone. Inline tags (<b>, <span>) simply disappear without affecting spacing.',
    },
  ],
  'character-frequency': [
    {
      q: "Why doesn't it count spaces?",
      a: 'Whitespace — spaces, tabs, and line breaks — is never counted; the tool focuses on actual characters and there is no option to include it. If you need the space count, use the character counter under the input box, which includes spaces.',
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
    {
      q: 'How is SHA-256 different from MD5 and SHA-1?',
      a: 'MD5 (128 bits) and SHA-1 (160 bits) have both been broken by practical collision attacks and must not be used for signatures or certificates; SHA-256 outputs 256 bits and still has no feasible collision method. MD5 remains acceptable for checksumming downloads — for anything security-related, use SHA-256 or higher.',
    },
    {
      q: 'Can two different inputs produce the same hash?',
      a: 'In theory yes — a hash maps infinitely many inputs onto a fixed-length output, and that is called a collision. But finding one SHA-256 collision takes on the order of 2^128 operations; all the computing power on Earth running for hundreds of millions of years would not get there, so it is treated as impossible in practice.',
    },
    {
      q: 'Is SHA-256 good for storing passwords?',
      a: 'Not on its own. SHA-256 is too fast — attackers can try billions of guesses per second. Passwords need deliberately slow, salted algorithms like bcrypt, scrypt, or Argon2. The SHA-256 here is right for verifying files and generating fingerprints, not for password storage.',
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
      a: 'Yes — each space-separated group is one byte, and consecutive groups decode together as full UTF-8, so multi-byte characters (Chinese, emoji) work as long as their bytes are entered as consecutive groups. Example: 你好 is three bytes per character (E4 BD A0 E5 A5 BD), so six groups decode both characters at once.',
    },
    {
      q: 'Why does my decoded text come out garbled?',
      a: 'Almost always misaligned groups: the bytes of a multi-byte UTF-8 character must stay together as consecutive groups, and a missing or extra byte shifts everything after it. First confirm each group is exactly 8 bits with single spaces between groups, then check whether the source text was saved in a non-UTF-8 encoding like GBK.',
    },
    {
      q: 'How do I convert binary to hexadecimal or octal by hand?',
      a: 'From the right, every 4 binary digits map to 1 hex digit and every 3 to 1 octal digit. For example, 01001000 = 0x48 = decimal 72 = the letter H. It is the fastest path for reading memory dumps.',
    },
    {
      q: 'What range can one byte represent?',
      a: 'An unsigned 8-bit integer covers 0-255; signed (two\'s complement) covers −128 to 127. That is also why ASCII fits in 0-127, while Chinese characters and emoji need several bytes combined into a UTF-8 sequence.',
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
      a: 'A common baseline is 30–35 ml per kg of body weight — about half your weight in pounds, in ounces. A 70 kg adult lands near 2.45 L daily before adjusting for exercise, hot climate, or pregnancy, which this calculator adds on top.',
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
      q: 'Does this calculator include PMI, property taxes, and insurance?',
      a: "Yes. Enter your yearly property tax and homeowners insurance, monthly HOA dues, and a PMI rate (0.5% per year is typical). PMI is added automatically only when your down payment is under 20% — with 20% or more down it drops to $0. The highlighted result is your full PITI payment, with each component broken out separately.",
    },
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
      a: 'Yes, dramatically. Extra payments go straight to principal (confirm with your lender there\'s no prepayment penalty). On a $400k home with 20% down at 6.8% for 30 years, paying an extra $200/month shaves about 7 years off the term and saves roughly $113,000 in interest. Even one extra full payment per year makes a meaningful difference. Use the extra monthly payment field to simulate it on your own loan — you\'ll see the new payoff time, interest saved, and months cut.',
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
      a: 'Some emojis (family, flags) are composed of multiple code points. This tool reverses by Unicode code point, so single-codepoint emojis reverse correctly, but complex composed emojis (ZWJ sequences, flags) may still separate.',
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
      a: 'Yes. Add " ||| desc" after the last line for descending order (Z → A); use " ||| numeric,desc" to sort numerically from largest to smallest.',
    },
    {
      q: 'How are numbers sorted?',
      a: 'By default lines sort as text, so "10" comes before "9" (because "1" < "9"). Add the instruction " ||| numeric" after the last line to sort naturally by value ("9" before "10").',
    },
  ],
  'remove-line-breaks': [
    {
      q: 'Will it remove the spaces between words?',
      a: 'No — line breaks are replaced with a single space, and multiple consecutive spaces collapse to one. Words stay properly separated.',
    },
    {
      q: 'What happens to blank lines between paragraphs?',
      a: 'A blank line is also a line break and becomes a space — the whole text becomes one continuous line. To keep paragraphs, process them in blocks or mark the boundaries with an uncommon separator first.',
    },
    {
      q: 'How much text can it handle at once?',
      a: 'As a plain-text operation the browser comfortably handles hundreds of thousands of characters (1-2 MB); beyond that, device memory is the limit. Split very long texts into batches.',
    },
    {
      q: 'Can I use it on CSV or code?',
      a: 'Carefully: in those formats line breaks are legitimate syntax (a new record in CSV, a new statement in code). Replace real line breaks with commas, semicolons, or escapes before joining.',
    },
  ],
  'find-and-replace': [
    {
      q: 'Is the search case-sensitive?',
      a: 'No — by default "Cat" also matches "cat". Check "Case sensitive" to require exact case.',
    },
    {
      q: 'Can I use regular expressions?',
      a: 'Yes. With "Regex" enabled, the find field matches patterns (e.g. \\d+, [a-z]+) and the replacement supports references like $1 or $&; an invalid pattern shows a friendly warning.',
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
    {
      q: 'Which "calories" are on food labels?',
      a: 'Nutrition "calories" are kilocalories: 1 kcal = 4.184 kJ = 1,000 cal. So 500 kcal ≈ 2,092 kJ. If a conversion doesn\'t check out, the units were probably mixed.',
    },
    {
      q: 'What does BTU mean on an air conditioner?',
      a: '1 BTU ≈ 1,055 J — the energy to raise 1 pound of water by 1°F. AC units are rated in BTU/h: 12,000 BTU/h ≈ 3.5 kW of cooling. BTU is energy; BTU/h is power — don\'t mix them when converting.',
    },
    {
      q: 'How do I estimate an appliance\'s electricity cost?',
      a: 'Power × hours × price per kWh. A 1,500 W heater on for 8 hours uses 12 kWh; at $0.15/kWh that\'s $1.80 a day, about $54 a month. Convert to kWh first and the math is easy.',
    },
  ],
  'frequency-converter': [
    {
      q: 'How do I convert RPM to Hz?',
      a: 'Divide RPM by 60. A motor spinning at 3,600 RPM runs at 60 Hz. This is why AC power in the US is 60 Hz — generators spin at 3,600 RPM.',
    },
    {
      q: 'Why does Europe use 50 Hz and the US 60 Hz?',
      a: 'A historical choice with no clear winner: Europe and China (220-230 V) use 50 Hz; the US (120 V) uses 60 Hz. Generators spin at 3,000 RPM at 50 Hz and 3,600 RPM at 60 Hz. Before plugging in an appliance abroad, check its label supports both frequencies.',
    },
    {
      q: 'How do I convert between rad/s and Hz?',
      a: '1 Hz = 2π rad/s ≈ 6.283 rad/s; for example, 60 Hz is about 377 rad/s. Engineering uses rad/s for angular quantities and Hz for cyclic ones — this 2π conversion comes up constantly in motors and vibration analysis.',
    },
    {
      q: 'What frequencies can humans hear?',
      a: 'Roughly 20 Hz to 20 kHz (20,000 Hz). Subwoofers typically reach down to 20-30 Hz and CD audio tops out at 22.05 kHz; high-frequency hearing goes first with age — many people over 40 no longer hear above 15 kHz.',
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
    {
      q: 'Which characters get escaped exactly?',
      a: 'Five core characters: & becomes &amp;, < becomes &lt;, > becomes &gt;, " becomes &quot;, and \' becomes &#39; (or &#x27;). This is the set of HTML entities recommended by OWASP, covering both tag injection and breaking out of attributes.',
    },
    {
      q: 'What\'s the difference between escaping and sanitizing?',
      a: 'Escaping turns special characters into entities so the browser displays text instead of parsing tags; sanitizing filters out or removes dangerous tags and attributes while keeping some HTML. Escape user input for display; sanitize only when you truly allow rich text (e.g. bold in comments).',
    },
    {
      q: 'Escaped text gets longer — does it matter?',
      a: 'Yes, it grows: &amp; is five characters instead of one, and long text can expand by 10-20%, which can hit length limits in database fields or textareas. When displayed, the browser reverses it — readers see exactly the original text.',
    },
  ],
  'html-unescape': [
    {
      q: 'Is unescaping safe?',
      a: 'This tool uses a detached textarea element, which decodes entities without executing any HTML. The output is plain text, so it cannot trigger scripts.',
    },
    {
      q: 'What\'s the difference between &amp; and &amp;amp;?',
      a: '&amp; is "&" escaped once; &amp;amp; is escaped twice. After one pass the first yields "&" while the second still leaves &amp; — it needs a second decode. It\'s the classic pitfall of nested templates.',
    },
    {
      q: 'When should I use the Encode direction?',
      a: 'To escape & < > " and \' before putting user input into HTML, preventing XSS. Unescaping is the reverse path: turning entities in scraped content or database fields back into readable characters.',
    },
    {
      q: 'Does it decode numeric entities like &#169;?',
      a: 'Yes. Both decimal (&#169;) and hexadecimal (&#xA9;) entities are handled by the textarea decoding mechanism: ©, ™, and numeric character references come back correctly.',
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
      a: 'In query strings, + often represents a space (form encoding). This tool uses standard percent decoding, but the "Treat + as space when decoding" toggle converts + to spaces automatically.',
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
    {
      q: 'What do the bits in the strength meter mean?',
      a: 'Each random character contributes log₂(charset size) of entropy: about 4.7 bits per character with lowercase only, about 6.6 bits across the 94 printable characters. Sixteen characters over the full set is roughly 105 bits — brute force is infeasible on cosmic timescales. The bits value shown by the tool is exactly that entropy reading.',
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
    {
      q: 'Can I compare a dollar-off deal with a percentage discount?',
      a: 'Not directly. $50 off $300 is about 17% off at exactly $300 — but on a $250 cart it saves nothing, while a percentage discount applies at any amount. Convert the threshold deal into its equivalent percentage at your actual cart value before comparing.',
    },
    {
      q: 'How do I spot a fake "was/now" discount?',
      a: 'Check the 30-day lowest-price record or a price-history tool. If the "original" price was inflated just before the sale, 30% off can cost more than the everyday price — judge the real discount by the gap between the final price and the historical low.',
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
      a: 'Mach 1 is the speed of sound, about 1,225 km/h (761 mph) at sea level and 15°C. It changes with altitude and temperature because the speed of sound depends on air density. "Mach" is a ratio of local speed to local speed of sound, not a fixed number.',
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
    {
      q: 'What is the difference between og:title and <title>?',
      a: 'They are independent: <title> shows in the browser tab and search results, while og:title only appears on social share cards. Write each deliberately — the share title can be more conversational and hook-driven, while <title> stays keyword-first and under 60 characters.',
    },
    {
      q: 'Do messaging apps like WhatsApp read these tags too?',
      a: 'Yes — WhatsApp builds its link previews from Open Graph tags (og:title, og:description, og:image), as do LinkedIn, Slack, and most chat apps. The same 1200×630 image and concise description that serve Facebook will serve your chat previews, provided the tags are in the server-rendered HTML.',
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
    {
      q: 'How do I write multiple box-shadow layers?',
      a: 'box-shadow accepts comma-separated layers: a close contact shadow (0 2px 4px) plus a larger ambient shadow (0 8px 24px rgba(0,0,0,0.12)). Two or three layers read more naturally than one — it is the idea behind Material Design elevation.',
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
      a: 'PNG, JPG/JPEG, GIF, and WebP. PNG with transparency is recommended because favicons look best on colored browser tabs. SVG source also works but is rasterized to PNG favicons here, since 16×16 and 32×32 raster favicons have the widest browser support.',
    },
    {
      q: 'Why do I need multiple sizes?',
      a: 'Different contexts use different sizes: 16×16 for the browser tab, 32×32 for retina tabs and the Windows taskbar, and 180×180 (Apple Touch Icon) for iOS home-screen bookmarks. Serving one large image and letting the browser scale it looks blurry at 16×16.',
    },
    {
      q: 'Is my image uploaded to a server?',
      a: 'No. The image is loaded into an in-browser canvas, cropped and scaled, and exported via canvas.toBlob — all locally. Your file never leaves your device, which also means this works offline once the page is loaded.',
    },
    {
      q: 'What\'s inside the generated favicon.ico?',
      a: 'It bundles 16, 32, and 48 px PNGs into a single .ico file, and the browser picks the right size for each context. Together with the 180×180 apple-touch-icon.png and the 192/512 px PWA icons, the included HTML snippet covers every scenario.',
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
      a: 'Fit (contain) scales the image so the whole thing is visible inside the box, which may leave empty space. Fill (cover) scales so the box is completely covered, which may crop the image. When in doubt for photos, use cover; for logos and screenshots that must stay fully visible, use contain. These are the same terms CSS object-fit / background-size use, and the aspect-ratio math determines how much is cropped or left empty.',
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
      a: 'Raw HTML is escaped, links with unsafe protocols (javascript:) degrade to plain text, and both the preview and the copied output are additionally sanitized with DOMPurify. If your Markdown contains user-submitted content, still pass the output through a sanitizer like DOMPurify in your own rendering pipeline before inserting it into a live page, to prevent XSS.',
    },
    {
      q: 'Why do my line breaks not appear?',
      a: 'Standard Markdown treats a single newline as a space and requires two spaces at the end of a line, or a blank line, for a break. If you need every newline to render as a <br>, that is the "hard line breaks" extension — common in chat-style Markdown. This tool follows the standard soft-break behavior.',
    },
    {
      q: 'Does the conversion happen locally or on a server?',
      a: 'Entirely in your browser — nothing is uploaded, and it also works offline, so it suits internal documents that must not leave your network. The input limit is 100,000 characters; beyond that, you are asked to trim the input before converting.',
    },
    {
      q: 'How do I write a pipe | inside a table cell?',
      a: 'Escape it with \\|. The number of columns is defined by the --- separator row; you do not need to align the pipes with spaces in the source — alignment is purely for readability, and the resulting HTML is identical.',
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
      q: 'What do "Only in A", "Only in B", and "In Both (Intersection)" mean?',
      a: '"Only in A" lists items present in the first list but not the second; "Only in B" is the reverse; "In Both (Intersection)" lists the items present in both. The "Union (All Unique)" section combines every unique item from either list. Together these four sets fully describe how the two lists differ.',
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
      a: 'Yes. Paste a whole list (one identifier per line) and each line is converted independently, preserving the line order. Blank lines are skipped.',
    },
    {
      q: 'When is CONSTANT_CASE used?',
      a: 'All caps with underscores, reserved for constants: MAX_RETRY_COUNT = 5. Companion conventions include Python\'s PEP 8 (PascalCase for classes, snake_case for modules) and Java\'s UPPER_SNAKE constants — pick per your language\'s convention when unifying team style.',
    },
    {
      q: 'What about acronyms like iOS or XMLHttp?',
      a: 'Consecutive uppercase runs count as one word: HTMLParser splits into HTML and Parser, matching html_parser, so round trips stay consistent. For unconventional casings like iOS the split can be ambiguous — spot-check the output before replacing in bulk.',
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
    {
      q: 'How do I deploy the generated config?',
      a: 'Save the server block to /etc/nginx/sites-available/<your-domain>, symlink it into sites-enabled/ to enable it, run nginx -t to validate the syntax, then apply it with systemctl reload nginx — a reload keeps existing connections, a restart drops them.',
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
      a: 'Add stops with the \'+ Add stop\' button and set each stop\'s position in its percentage number input (0-100). The generator writes the full stops list into the CSS, so multi-color blends and hard-edged bands both copy out ready to paste.',
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
      a: 'Yes. You can set left, center, or right alignment for the whole table, which becomes the Markdown alignment row (:---, :---:, ---:). The default (---) is rendered left-aligned by most viewers, matching what most READMEs expect.',
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
      a: 'It applies sales tax to the vehicle price after subtracting your trade-in value, so the loan amount reflects what you actually finance. Registration, dealer doc fees, and add-on products are not itemized — fold them into the vehicle price if needed.',
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
      q: 'Can I add tax?',
      a: 'Yes. You set a tax rate that applies to the subtotal, and the total updates automatically, so the final amount due is always calculated consistently.',
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
    {
      q: 'What is the difference between "no repeat winners" and "remove winner after picking"?',
      a: 'No repeat winners limits a single draw: within one round each option wins at most once (sampling without replacement). Remove winner after picking strikes the option from the list itself, affecting all later rounds. Use the former to hand out several prizes at once, the latter to cross names off a list round by round.',
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
  // ══════════ _2025-08 扩张批1(10 个)══════════
  'epoch-converter': [
    {
      q: 'Seconds or milliseconds — which do I have?',
      a: 'Count the digits: 10 digits is seconds, 13 digits is milliseconds (the JavaScript convention). The converter auto-detects both; input it cannot interpret reliably — non-numeric characters or more than 14 digits — gets a warning instead of a guess, so odd values never silently misparse.',
    },
    {
      q: 'Does it handle dates before 1970?',
      a: 'Yes. Unix time counts from 1970-01-01 00:00 UTC, and negative timestamps represent earlier dates. Paste a negative number and you get the matching pre-1970 moment in both ISO 8601 UTC and your local time.',
    },
    {
      q: 'Why do 13-digit timestamps exist?',
      a: "JavaScript's Date object works in milliseconds, so JS-heavy systems — browser logs, MongoDB, many APIs — store 13-digit values. Unix tools and databases like MySQL default to 10-digit seconds. Both conventions are everywhere, which is why auto-detection matters.",
    },
    {
      q: 'Are leap seconds included?',
      a: 'No. Unix time defines every day as exactly 86,400 seconds and ignores leap seconds entirely. That keeps timestamp math linear; the tiny drift against real UTC is corrected by time servers, not inside the timestamp itself.',
    },
  ],
  'json-diff': [
    {
      q: 'Does key order matter?',
      a: 'No. The comparison is structural: two objects match when their keys and values match, regardless of the order keys appear in. Array order does matter — [1,2] versus [2,1] is reported as changed, matching how JSON treats lists.',
    },
    {
      q: 'How are nested differences reported?',
      a: 'Every difference gets a dot-notation path such as user.address.city, the change type (added, removed, or changed), and the old and new values side by side. You can pinpoint where two API responses diverge without eyeballing the raw files.',
    },
    {
      q: 'What happens with invalid JSON?',
      a: "The parser error from your browser's JSON engine is shown in red — no guessing, no partial results. Fix the syntax error on the flagged side and the diff re-runs instantly as you type.",
    },
    {
      q: 'Can I export the diff?',
      a: 'Yes. Copy Summary produces one line per difference, prefixed + / − / ~, plus the total count — ready to paste into a pull request, ticket, or chat. There is also a plain-text download of the same data.',
    },
  ],
  'line-diff-checker': [
    {
      q: 'What algorithm does it use?',
      a: 'Longest common subsequence (LCS) — the same family of algorithms behind git diff. It computes the smallest set of added and removed lines that turns the original text into the changed one, then displays them with + and − markers.',
    },
    {
      q: 'How big can the inputs be?',
      a: 'Up to 100,000 characters or 2,000 lines per side. Beyond that the O(n²) LCS table would strain a browser tab, so the tool asks you to trim instead of freezing. That ceiling comfortably covers emails, contracts, and config files.',
    },
    {
      q: 'Do blank lines count as differences?',
      a: 'Yes. Empty lines participate in the comparison exactly the way version control treats them, so a deleted blank line shows as a removal. If you only care about content, strip blank lines on both sides first.',
    },
    {
      q: 'Can I copy the result?',
      a: 'The Copy button exports the full annotated output — every line prefixed "+ ", "− ", or two spaces — with added/removed counts shown above. A ready-made diff for email, docs, or a bug report.',
    },
  ],
  'robots-txt-generator': [
    {
      q: 'Where do I put robots.txt?',
      a: 'In your domain root, served as plain text at example.com/robots.txt — crawlers only look there. A missing file means everything is allowed; syntax errors can make well-meaning rules fail silently, so keep one rule set per user-agent block.',
    },
    {
      q: 'Does the block-AI preset really work?',
      a: 'It emits explicit disallow rules for the major AI training crawlers — GPTBot, ClaudeBot, PerplexityBot, Bytespider, Google-Extended, Applebot-Extended, Cohere-ai, and Amazonbot. Those operators currently honor robots.txt, so it works as long as they keep doing so; treat it as a respected request, not a technical wall.',
    },
    {
      q: 'Why is my crawl-delay ignored?',
      a: 'Google has never supported Crawl-delay and skips the line entirely; Bing and Yandex honor it. The generator includes the field for those engines — for Googlebot load problems, use Search Console crawl-rate settings instead.',
    },
    {
      q: 'If Allow and Disallow both match, which wins?',
      a: "In Google's implementation the more specific (longest) matching path wins. The presets emit conventional, unambiguous combinations — block-everything is a bare Disallow: / with no competing Allow — so you don't have to reason about precedence.",
    },
  ],
  'roman-numeral-converter': [
    {
      q: 'What is the supported range?',
      a: '1 to 3999. Classical notation has no zero and no standard way to write 4000+ without overline marks that keyboards and most fonts cannot express. For years, chapter numbers, and copyright lines, 3999 covers essentially every real use.',
    },
    {
      q: 'Why is 4 written IV, not IIII?',
      a: 'Standard form uses subtractive pairs — IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900. Clock faces show IIII by tradition, but this converter enforces standard form: it rejects IIII or VX and suggests the canonical spelling instead.',
    },
    {
      q: 'Does it show the breakdown?',
      a: 'Yes. Number-to-numeral lists the symbols in order (2024 becomes MM + XX + IV), and numeral-to-number validates the input against canonical form before trusting it — invalid combinations are refused rather than misread.',
    },
  ],
  'pace-calculator': [
    {
      q: 'How do I enter my time?',
      a: 'h:mm:ss, mm:ss, or plain seconds all parse: 50:00 is fifty minutes, 1:45:30 is one hour forty-five. Enter any distance with it and you get pace per kilometer or per mile, whichever you select, plus speed in matching units.',
    },
    {
      q: 'Are the race predictions realistic?',
      a: 'They assume you hold the exact same pace at every distance — an optimistic ceiling. Real runners slow as distance grows, so treat the marathon projection as a best case; predictors using the Riegel fatigue model give slower, more achievable targets.',
    },
    {
      q: 'What is a decent pace for a beginner?',
      a: 'Most new runners land between 7:00 and 8:30 per kilometer (about 11:00-13:30 per mile). Below 6:00/km is a solid recreational level. In your first year, consistent weekly mileage improves you far more than chasing speed.',
    },
    {
      q: 'Pace or speed — which do I need?',
      a: 'Pace (time per km or mile) is what training plans, races, and running watches use; speed (km/h or mph) is what treadmills display. You get both, converted with the exact 1.609344 km-per-mile factor.',
    },
  ],
  'protein-intake-calculator': [
    {
      q: 'How much protein do I need?',
      a: 'It scales with body weight and training. About 0.8 g per kg is the RDA floor for sedentary adults, moderate exercisers do well on 1.2-1.6 g/kg, and serious strength or endurance training pushes needs to 1.6-2.2 g/kg — the ranges here follow ISSN and ACSM position stands.',
    },
    {
      q: 'Should I eat more protein while cutting?',
      a: 'Yes. In a calorie deficit, 1.6-2.7 g/kg helps preserve muscle and keeps you fuller for longer. Choose the lose-fat goal and the calculator automatically shifts your personal range into that higher band.',
    },
    {
      q: 'Is a high protein intake dangerous?',
      a: 'For healthy adults, trials show no harm at intakes up to roughly 2.8 g/kg per day — kidneys handle the load fine. People with existing kidney disease should consult a doctor first; that caution does not apply to the general population.',
    },
    {
      q: 'Does timing across the day matter?',
      a: 'Somewhat. Muscle protein synthesis responds better to 3-5 feedings of at least about 0.4 g/kg each than to one giant dose, which is why the result includes a per-meal target assuming four meals.',
    },
  ],
  'electricity-cost-calculator': [
    {
      q: 'How is the cost calculated?',
      a: 'Watts × hours ÷ 1000 gives kWh per day; multiplying by your rate gives the daily cost. Monthly uses 30.44 days (the true annual average) and yearly uses 365 — so the annual line is the honest number for always-on devices.',
    },
    {
      q: "Where do I find an appliance's wattage?",
      a: 'On the nameplate, the power brick, or the spec sheet, usually marked W or input. The spread is huge: a 1500 W space heater costs roughly 30× more per hour than a 50 W laptop — exactly the comparison this tool makes easy.',
    },
    {
      q: 'What rate should I enter?',
      a: 'Your marginal rate from a recent bill, including per-kWh delivery charges when they are billed that way. The US residential average sits around $0.16-0.17 per kWh, but rates vary widely by state, plan, and time of use.',
    },
  ],
  'sleep-calculator': [
    {
      q: 'What is the 90-minute rule?',
      a: 'A full sleep cycle — light sleep, deep sleep, and REM — averages about 90 minutes. Waking between cycles feels dramatically easier than being pulled out of deep sleep, so the tool times bedtimes and wake-ups to land on cycle boundaries.',
    },
    {
      q: 'Why does it subtract 15 minutes?',
      a: 'That is the assumed time to fall asleep — healthy sleep latency averages 10-20 minutes and 15 is the standard midpoint. Every suggested time already includes it; if you drop off much faster or slower, adjust by that difference.',
    },
    {
      q: 'How many cycles should I get?',
      a: 'Five to six cycles (7.5-9 hours) suits most adults, and those options are marked recommended. Four cycles is survivable occasionally, but regularly sleeping under 7 hours carries health costs no clever timing can erase.',
    },
    {
      q: 'I must wake at 6 AM — when should I sleep?',
      a: 'Switch to the wake-up mode, enter 06:00, and you get a ladder of bedtimes counting back in 90-minute steps: 22:15 for five cycles, 20:45 for six. Pick the one you can actually keep consistently.',
    },
  ],
  'cooking-converter': [
    {
      q: 'Why is a cup of flour not a cup of sugar?',
      a: 'Cups measure volume, but ingredients differ in density: a US cup of all-purpose flour is about 120 g while a cup of granulated sugar is 200 g. This converter uses a per-ingredient density table (USDA-based) instead of one blanket factor.',
    },
    {
      q: 'How accurate is it?',
      a: 'Good enough for everyday baking — values are standard spoon-and-level averages. How you fill the cup shifts results by up to ~20% (sifted versus scooped flour), so a kitchen scale still wins for delicate recipes like macarons or sourdough.',
    },
    {
      q: 'Which ingredients are supported?',
      a: 'Twenty common ones: all-purpose, bread, cake, whole-wheat, and almond flour; granulated, brown, and powdered sugar; butter, oil, milk, water, honey, cooked and uncooked rice, rolled oats, cocoa, chocolate chips, yogurt, and peanut butter.',
    },
    {
      q: 'Can I go from grams to cups?',
      a: 'Yes. Pick grams (or ounces) as the input unit, enter the weight, and you get cups, tablespoons, and teaspoons back for the selected ingredient — the usual fix for European recipes written purely by weight.',
    },
  ],
  // ══════════ _2025-08 扩张批2(11 个)══════════
  'fuel-cost-calculator': [
    {
      q: 'How is the fuel cost calculated?',
      a: 'Distance × consumption ÷ 100 gives liters needed; liters × price gives the total. A round trip simply doubles the distance before anything else, and the per-person figure divides the total by your passenger count.',
    },
    {
      q: "How do I find my car's real consumption?",
      a: "Your trip computer's long-term average is the best source — official WLTP/EPA figures run 10-20% optimistic. Highway driving typically beats city consumption by 20-30%, so enter the mix you will actually drive.",
    },
    {
      q: 'I think in MPG — can this help?',
      a: 'The fields are metric (km, L/100km, price per liter), so convert once: divide 235.215 by your US MPG to get L/100km, and divide your per-gallon price by 3.785 for a per-liter price. After that everything flows through unchanged.',
    },
    {
      q: 'What is cost per 100 km good for?',
      a: 'It equals consumption × price, making it the cleanest comparison metric — between cars, fuel grades, or stations — because it strips out distance. The tool shows it alongside your trip total for exactly that purpose.',
    },
  ],
  'subscription-cost-calculator': [
    {
      q: 'How does the math work?',
      a: 'Yearly subscriptions are divided by 12 and quarterly by 3, then added to your monthly total — that is the true monthly cost. Yearly multiplies by 12 and the 5-year figure by 60, all in consistent monthly-equivalent terms.',
    },
    {
      q: 'What is the work-hours figure?',
      a: 'It divides your yearly total by 25 — roughly an average after-tax hourly wage — to show how many work hours your subscriptions consume per year. Seeing "42 hours of my life" often motivates a cleanup faster than any dollar figure.',
    },
    {
      q: 'Which charges should I include?',
      a: 'Every recurring one: streaming, cloud storage, apps, gym, domains, news, and the small in-app subscriptions too. Scan a card statement for charges you do not recognize — the average household carries several forgotten ghost subscriptions.',
    },
    {
      q: 'Why show five years?',
      a: 'Long horizons reveal the real price of "it is only $9.99 a month" — one service at that rate is about $600 over five years. It is the same framing lenders use for interest: the total matters more than the bite-sized payment.',
    },
  ],
  'overtime-calculator': [
    {
      q: 'When is overtime legally required?',
      a: 'US federal law (FLSA) requires 1.5× pay past 40 hours per week for non-exempt employees. Some states add daily overtime (California after 8 h/day, double past 12 h); holiday double time typically comes from union contracts or employer policies — pick the multiplier your jurisdiction or contract specifies.',
    },
    {
      q: 'How is my pay computed?',
      a: 'Regular pay is rate × regular hours; overtime pay is rate × multiplier × overtime hours. The two multiplier tiers cover time-and-a-half and double time — union contracts, shift differentials, and holiday rates all fit the same math.',
    },
    {
      q: 'I am salaried — does this apply to me?',
      a: 'Only if you are non-exempt. Derive your regular hourly rate as weekly salary ÷ 40, enter it with your overtime hours, and the multiplier applies from there. Truly exempt employees receive no overtime regardless of hours worked.',
    },
  ],
  'take-home-pay-calculator': [
    {
      q: 'How accurate is this estimate?',
      a: 'It applies the real 2025 federal brackets and standard deduction ($15,000 single, $30,000 married filing jointly), plus exact FICA rates: 6.2% Social Security up to the $176,100 wage base and 1.45% Medicare with no cap. State tax, credits, and supplemental withholding are not modeled — treat it as a baseline, not a payroll system.',
    },
    {
      q: 'Why does 401(k) cut income tax but not FICA?',
      a: 'Traditional 401(k) contributions leave taxable income, so the calculator subtracts them before applying brackets. FICA taxes that money anyway — it only excludes pre-tax health premiums — matching how real paychecks behave.',
    },
    {
      q: 'Is the biweekly number my actual paycheck?',
      a: 'Close, but it is annual net ÷ 26 with no smoothing, and any benefits you did not enter (HSA, dental, life insurance) will shift it. Use it to sanity-check an offer or a raise, not to reconcile with payroll to the cent.',
    },
    {
      q: 'Does it handle state taxes?',
      a: 'No — state income tax runs from zero (Texas, Florida) to over 10% at the top (California, Hawaii), so one national model would mislead almost everyone. Estimate your state burden separately and subtract it from the annual net shown here.',
    },
  ],
  'wedding-budget-calculator': [
    {
      q: 'Are the percentages reliable?',
      a: 'They reflect common US planning guidance — venue and catering together absorb 55%, which matches where real budgets land. City weddings skew toward venue, destination weddings toward travel; treat the split as a sensible first draft to adjust, not gospel.',
    },
    {
      q: 'Why does guest count matter so much?',
      a: 'Catering scales per head and venues charge per-person minimums, so guests move multiple lines at once. The per-guest figure makes the lever visible: at $150 a head, cutting 10 guests frees $1,500 — usually more than skipping favors or décor upgrades entirely.',
    },
    {
      q: 'What does the buffer line cover?',
      a: 'Stationery, favors, and the inevitable surprises: cake-cutting fees, vendor tips, overtime charges, last-minute plus-ones. Planners budget 10-15% contingency for good reason — and if it goes unspent, it becomes your honeymoon upgrade.',
    },
  ],
  'amortization-table-generator': [
    {
      q: 'What exactly does the table show?',
      a: 'Every payment in order: number, amount, the principal/interest split, and the remaining balance. Early rows are interest-heavy — on typical rates most of the first payment goes to interest — and you can watch the crossover where principal takes over.',
    },
    {
      q: 'How is the monthly payment computed?',
      a: 'The standard amortization formula P × r(1+r)^n ÷ ((1+r)^n − 1), with r as the monthly rate and n the payment count. Each row then applies interest = balance × r, principal = payment − interest, exactly simulating how a lender services the loan.',
    },
    {
      q: 'Can I export the full schedule?',
      a: 'Yes — the download is a complete CSV (with a UTF-8 BOM so Excel opens it cleanly), one row per payment for the whole term. The page previews the first 12 payments with an expand button, but the exported file is always the entire schedule.',
    },
    {
      q: 'Would extra payments change this table?',
      a: 'Not in this tool — it shows the contractual schedule. But the table explains why prepaying works: every extra dollar hits principal directly, so all later interest is charged on a smaller balance. That is how modest extra payments cut years off a 30-year loan.',
    },
  ],
  'heart-rate-zone-calculator': [
    {
      q: 'Why Karvonen instead of percent of max?',
      a: 'Karvonen zones use heart-rate reserve — max minus resting heart rate — then add resting back per zone. Two runners with the same max but different resting rates get genuinely different training bands, which raw percent-of-max math cannot do.',
    },
    {
      q: 'How do I measure resting heart rate?',
      a: 'Right after waking, before getting up, count your pulse for a full 60 seconds and average two or three mornings. Caffeine, stress, and poor sleep all inflate it, so a morning average beats any single reading — enter that average here.',
    },
    {
      q: 'Is 220 minus age accurate?',
      a: 'It is a population average; individual max heart rates scatter roughly ±12 bpm around it. For casual zone training it is fine, but if exact thresholds matter (racing, cardiac rehab), a lab test or supervised field test gives your personal max.',
    },
    {
      q: 'Which zone should I train in?',
      a: 'Most weekly volume belongs in Zone 2 (60-70% of reserve) — conversational-effort base work. Zones 4-5 are sharp sessions done sparingly. The classic error is living in Zone 3: too hard to recover from, too easy to drive adaptation.',
    },
  ],
  'caffeine-calculator': [
    {
      q: 'How does the half-life math work?',
      a: 'Caffeine roughly halves every 5 hours: 50% remains after one half-life, 25% after two. The tool applies mg × 0.5^(hours ÷ 5) to show what is left now and — the number that matters — what will still be circulating at your bedtime.',
    },
    {
      q: 'How much caffeine is OK at bedtime?',
      a: 'By this tool\'s thresholds: under ~50 mg at bedtime is fine for most people, 50-100 mg is borderline for sensitive sleepers, and above 100 mg likely disturbs sleep. Research generally suggests stopping caffeine 6-8 hours before bed.',
    },
    {
      q: 'What counts toward my daily total?',
      a: 'Everything: brewed coffee ≈ 95 mg per cup, espresso ≈ 63 per shot, black tea ≈ 47, cola ≈ 34, energy drinks 80-300, and dark chocolate contributes a few mg per square. Sum your actual sources before entering the dose.',
    },
    {
      q: 'Why does coffee hit me harder than my friends?',
      a: 'The CYP1A2 gene controls caffeine metabolism — slow metabolizers feel effects for hours longer and lose more sleep; fast metabolizers clear it comfortably. Smoking roughly doubles clearance speed, while oral contraceptives slow it.',
    },
  ],
  'steps-to-calories-calculator': [
    {
      q: 'How are the calories estimated?',
      a: 'Distance is steps × stride length, with stride ≈ height × 0.414. Calories use the MET method from the 2011 Compendium: MET value (2.8 slow, 3.5 moderate, 5.0 brisk) × body weight × hours walked — the standard exercise-science approximation.',
    },
    {
      q: 'Why does my fitness tracker show more?',
      a: 'Trackers often credit all movement, including calories your body burns at rest anyway (BMR overlap), and their step-counting algorithms vary. This tool counts only the walking increment, which is why its number is lower — and usually closer to the true extra energy spent.',
    },
    {
      q: 'How far is 10,000 steps?',
      a: 'About 7-8 km (4.5-5 miles) for average adults. The tool computes your exact distance from your height, because stride length drives it — taller walkers cover more ground per step — shorter walkers cover less for the same count.',
    },
  ],
  'paint-calculator': [
    {
      q: 'How much paint will I need?',
      a: 'Wall area is perimeter × height, minus 1.85 m² per door and 1.4 m² per window. Multiply by coats, divide by coverage (10 m²/L on smooth primed walls), and the built-in 10% margin is added before rounding up to whole 2.5 L buckets or gallon cans.',
    },
    {
      q: 'When would I need more than shown?',
      a: 'Textured surfaces, bare drywall, or dramatic color changes eat 20-40% more than the standard coverage rate — fresh drywall is the thirstiest. The tool\'s note flags this; for those cases buy one extra can beyond the calculated number.',
    },
    {
      q: 'Should doors and windows really be subtracted?',
      a: 'Yes — you paint around them, so their area is mostly not painted, and subtracting keeps you from overbuying. If you plan to paint the frames and trim too, note that trim product needs its own smaller calculation anyway.',
    },
    {
      q: 'Why buy all cans at once?',
      a: 'Tint varies slightly between production batches — invisible in the can, visible on the wall. Calculate the total first and buy it in one shopping trip; if you must top up later, box the new can together with leftovers to blend any difference.',
    },
  ],
  'dog-age-calculator': [
    {
      q: 'Why not just multiply by 7?',
      a: 'The ×7 rule fails at both ends: a one-year-old dog is already mature and teenage (≈15 human years), and dogs sprint through their first two years. This tool uses the AVMA consensus curve — 15 at year one, 24 at year two, then 4-6.5 human years per dog year by breed size.',
    },
    {
      q: 'How does breed size change the math?',
      a: 'After year two, small dogs (<9 kg) add about 4 human years per dog year, medium 5, large 6.5. That is why a 13-year-old Chihuahua maps to a sprightly ~68 while a 13-year-old Great Dane maps to ~96 — big breeds mature at the same pace but age faster afterward.',
    },
    {
      q: 'When is a dog a senior?',
      a: 'Roughly when the human-equivalent age passes the mid-50s — around 7-9 calendar years for large breeds, 10-12 for small ones, which the life-stage output reflects. Veterinarians recommend senior screenings from those ages even for healthy-looking dogs.',
    },
  ],
  // ══════════ _2025-08 扩张批3(9 个)══════════
  'keycode-info': [
    {
      q: 'Which property should I match on?',
      a: 'event.key in modern code — it holds the printed character ("a", "Enter") adjusted for keyboard layout and Shift. event.code names the physical key regardless of layout (KeyA stays KeyA on AZERTY); keyCode is deprecated legacy kept only for old-browser compatibility.',
    },
    {
      q: 'Why does keyCode show 0 or odd values?',
      a: 'keyCode was never standardized; modern engines ship only an approximation of old IE behavior, so some keys report 0 and the same key can differ across browsers. It can still help when reproducing a legacy bug — write new code against key or code.',
    },
    {
      q: 'How do I inspect shortcut combinations?',
      a: 'Press the combo and read the modifiers row: Ctrl, Meta/Cmd, Shift, and Alt are listed joined with +. The repeat flag shows whether OS key-repeat fired, which is how you tell a held key from fresh presses.',
    },
    {
      q: 'Do Tab and arrow keys work here?',
      a: 'Yes — the tool intercepts Tab, arrows, and space so pressing them for inspection does not scroll the page or move focus away. Their key, code, and keyCode values display like any other key, and recent presses stay in a history list.',
    },
  ],
  'mime-type-lookup': [
    {
      q: 'What is a MIME type used for?',
      a: 'Browsers and servers use it to decide how to treat a file: text/html renders, application/json parses, application/octet-stream forces a download. Serving the wrong type breaks rendering or triggers downloads — this table is the quick reference for getting it right.',
    },
    {
      q: 'Is .js application/javascript?',
      a: 'Not anymore — the current standard says text/javascript, and browsers treat both as equivalent. The old application/ prefix survives in legacy configs; either works, but text/javascript is what modern code should send.',
    },
    {
      q: 'How do I find a type fast?',
      a: 'Type the extension (.svg) or part of the MIME string (image/) and the table filters live, with a copy button on every row. Searching "zip" instantly shows .zip → application/zip — and since MIME strings match too, .gz (application/gzip) and .epub (application/epub+zip) turn up as well.',
    },
    {
      q: 'What about fonts and modern formats?',
      a: 'Font files moved to the top-level font/ type in 2017 — font/woff2 rather than application/font-woff — and WebP is image/webp. Old server defaults still ship the obsolete forms, which is one of the most common misconfigurations this table helps you catch.',
    },
  ],
  'xml-formatter': [
    {
      q: 'Does it validate my XML?',
      a: "Yes — parsing goes through your browser's own DOMParser, and malformed input surfaces the exact parsererror message. Nothing is formatted until the document parses cleanly, so the output is always well-formed XML.",
    },
    {
      q: 'What happens to whitespace between tags?',
      a: 'On beautify, whitespace-only text nodes between elements are discarded and the tree is re-indented from scratch — the pretty output does not depend on how the input was spaced. Text content inside elements is preserved as-is.',
    },
    {
      q: 'Can it minify as well?',
      a: 'Yes — Minify serializes the parsed DOM back out without added whitespace. Because it round-trips through the real parser, the result is canonical XML, not merely your input with line breaks stripped.',
    },
    {
      q: 'Does it handle namespaces?',
      a: 'Yes, because the browser XML engine is namespace-aware: xmlns declarations and prefixed elements parse like any spec-compliant processor handles them, and errors are reported exactly as the spec says — no regex-based shortcuts involved.',
    },
  ],
  'markdown-toc-generator': [
    {
      q: 'Why does the TOC start at H2?',
      a: 'A document has one H1 — the page title — so a table of contents of its sections starts at H2. The depth selector (H2-H6) controls how deep the list nests; headings beyond the chosen level are skipped.',
    },
    {
      q: 'Do the anchors match GitHub exactly?',
      a: 'Yes — slugs follow GitHub\u2019s algorithm: lowercase, spaces to dashes, punctuation stripped, and duplicate headings suffixed -1, -2. Links built this way land on the right heading on GitHub and on most static-site generators that copy its behavior.',
    },
    {
      q: 'Are headings inside code blocks ignored?',
      a: 'Yes — headings inside triple-backtick fences are skipped because rendered pages show them as code samples, not real headings. The extractor tracks fence state line by line across your whole document.',
    },
    {
      q: 'What about headings with links or bold text?',
      a: 'Inline markdown is stripped before slugging: [text](url) contributes just its text, and bold/italic markers are removed. The TOC therefore shows the plain heading text, matching how the rendered anchor appears.',
    },
  ],
  'log-filter-tool': [
    {
      q: 'Is it safe to paste production logs?',
      a: 'Yes — filtering runs entirely client-side; nothing is uploaded or stored anywhere. Do scrub tokens and personal data before sharing the filtered output, though, since matching lines still contain whatever was in them.',
    },
    {
      q: 'How does level filtering work?',
      a: 'Levels match on word boundaries: choosing WARN matches WARN but not WARNING, and ERROR keeps only error lines wherever the token appears. Combine with include/exclude terms to narrow further, like ERROR lines containing timeout.',
    },
    {
      q: 'Can I use regular expressions?',
      a: 'Yes — enable the regex toggle and both include and exclude become case-insensitive regexes, so timeout|refused matches either word. Invalid patterns are flagged in red rather than silently matching nothing.',
    },
  ],
  'ascii-table': [
    {
      q: 'What range does the table cover?',
      a: 'Codes 0-127, the true ASCII set. Control characters (0-31) are unprintable and shown by name (NUL, LF, ESC…), 32-126 are printable, and 127 is DEL. Anything above 127 is extended encoding or Unicode — a different story.',
    },
    {
      q: 'How do I search it?',
      a: 'Type a character ("A"), a decimal (65), hex (41), or binary and the table filters live on any column. Searching ESC, for example, jumps straight to the escape character at code 27.',
    },
    {
      q: 'Why is line feed a control character?',
      a: 'LF (10) was ASCII\u2019s line separator from teleprinter days; Windows later paired it with CR (13) as CRLF. Both are control codes — that heritage is why line endings still differ between Windows and Unix systems.',
    },
    {
      q: 'What is the relationship between ASCII and Unicode?',
      a: 'ASCII was standardized in 1963 as a 7-bit code; Unicode adopts it verbatim in its first 128 code points (0-127), and in UTF-8 those characters still take 1 byte each. ASCII is the base subset of UTF-8 — memorizing it keeps paying off.',
    },
    {
      q: 'Which codes are worth memorizing?',
      a: 'The high-frequency groups: "0" is 48 (through 9 = 57), "A" is 65 (Z = 90), "a" is 97 (z = 122). Digit checks, case toggling (always a difference of 32), and hand-rolled base conversion all lean on these groups.',
    },
  ],
  'screen-time-calculator': [
    {
      q: 'How are the full days computed?',
      a: 'Hours × 365 ÷ 24 — four daily hours is about 61 full 24-hour days per year. The waking-hours share divides by an assumed 16 awake hours instead, which is the more honest denominator for a daily percentage.',
    },
    {
      q: 'What does the lifetime number assume?',
      a: 'It projects from your current age to 80 and counts waking-time spent on screens: 4 hours a day from age 30 is roughly 12.5 waking years. The figure is deliberately sobering rather than precise — life expectancy varies.',
    },
    {
      q: 'Where does reclaiming 1 hour come from?',
      a: 'The same projection applied to a single hour: one hour a day reclaimed from 30 to 80 returns about 3 waking years — time for hundreds of books. It scales linearly, so two hours doubles it.',
    },
    {
      q: 'How much screen time is normal?',
      a: 'US adults average 4.5-5 hours on mobile alone, and adding TV pushes total screen time past 7 hours. Under 2 hours of recreational screen time is a common healthy baseline; the calculator shows what your number means at any level.',
    },
  ],
  'reading-level-checker': [
    {
      q: 'Which formulas does it use?',
      a: 'Flesch Reading Ease (206.835 − 1.015 × words/sentence − 84.6 × syllables/word) and Flesch-Kincaid Grade Level — the same pair word processors use. Everything computes locally from your text; nothing is uploaded.',
    },
    {
      q: 'What score should I aim for?',
      a: 'General web copy targets 60-70 reading ease, roughly 8th-9th grade. Legal and academic prose legitimately scores 30-50. When your longest sentence runs past 25 words, the tool nudges you to split it — sentence length is the easiest lever.',
    },
    {
      q: 'How are syllables counted?',
      a: 'By the standard English vowel-group heuristic: short words count as one syllable; longer ones by vowel clusters after stripping silent endings like -e and -ed. It is accurate for most words and off by one on irregulars — whole-passage scores absorb that noise.',
    },
  ],
  'hmac-generator': [
    {
      q: 'How is HMAC different from hashing?',
      a: 'A plain SHA-256 hash depends only on the message, so anyone can compute it. HMAC mixes in a secret key, so the digest proves possession of that key and cannot be forged — which is why APIs use HMACs to authenticate webhooks and signed requests.',
    },
    {
      q: 'Which algorithm should I pick?',
      a: 'SHA-256 is the default everywhere — webhook verifiers, JWT HS256, AWS-style signatures. SHA-384 and SHA-512 exist for systems standardized on them. All three run via WebCrypto here, using your browser\u2019s cryptographic primitives rather than a JS reimplementation.',
    },
    {
      q: 'Does my secret leave the page?',
      a: 'No. Signing happens in your browser; the secret and message are never sent anywhere or stored. WebCrypto does require HTTPS (or localhost) — the tool tells you if the context is insecure.',
    },
    {
      q: 'Why hex and base64 outputs?',
      a: 'Systems expect different encodings: webhook docs usually show hex digests, JWT segments use base64url, some APIs want base64. Both outputs here are the same digest bytes, so copy whichever form your verifier expects.',
    },
  ],
  // ══════════ _2025-08 扩张批4(7 个)══════════
  'jwt-generator': [
    {
      q: 'Which algorithms are supported?',
      a: 'HS256, HS384, and HS512 — the HMAC family, signed in your browser with WebCrypto. RS256/ES256 require a private key that must never live in front-end code, so asymmetric signing belongs on a server or CLI.',
    },
    {
      q: 'Can I generate a token without a secret?',
      a: 'Yes — leave the secret empty and you get the unsigned preview: base64url(header).base64url(payload) with a trailing dot. Useful for seeing exactly what a verifier receives, but no auth system will accept it.',
    },
    {
      q: 'Is signing tokens in the browser safe?',
      a: 'For testing and learning only. A secret held in a browser page is visible to anyone with devtools and would ship inside production bundles. Prototype payloads and debug verifiers here; keep production signing server-side.',
    },
    {
      q: 'Does it add anything to my header?',
      a: 'No — the header is exactly the JSON you provide; the default includes typ and alg, but nothing is injected. Some verifiers are strict about alg matching the key, so keep it consistent with what will verify the token.',
    },
  ],
  'hash-comparator': [
    {
      q: 'Is the comparison timing-safe?',
      a: 'Yes — it accumulates an XOR across every character and checks the total only at the end, never returning early at the first mismatch. Timing attacks that try to read where two hashes diverge get nothing to observe.',
    },
    {
      q: 'Are case and spacing normalized?',
      a: 'Yes — both inputs are lowercased and stripped of all whitespace before comparing, so an uppercase published hash that line-wraps still matches. The hex digits themselves are compared strictly, character by character.',
    },
    {
      q: 'What does a mismatch actually mean?',
      a: 'For file downloads: corruption or tampering — re-download from the official source and compare again before running anything. For verifying a value you computed: at least one character differs from the published digest.',
    },
  ],
  'base-converter': [
    {
      q: 'Which bases are supported?',
      a: 'Every integer base from 2 to 36, with digits above 9 written as letters a-z (base 36 is 0-9 then a-z). The result panel shows binary, octal, decimal, hex, base32, and base36 simultaneously, each with its own copy button.',
    },
    {
      q: 'Can it convert fractional numbers?',
      a: 'Yes — enter 255.5 and the fractional part converts positionally, truncated at roughly 10 digits. Be aware many decimal fractions (0.1 included) repeat forever in binary; the tool truncates instead of implying false exactness.',
    },
    {
      q: 'Why might it differ from my calculator?',
      a: 'Floating point: values pass through JavaScript numbers, so integers beyond 2^53 (about 9 quadrillion) lose precision. For everyday ranges — colors, permission masks, memory sizes — the conversion is exact.',
    },
  ],
  'cron-expression-generator': [
    {
      q: 'What syntax does it generate?',
      a: 'Standard five-field Vixie cron: minute, hour, day-of-month, month, day-of-week. That covers crontab, GitHub Actions schedules, Kubernetes CronJobs, and most cloud schedulers. Quartz users must prepend a seconds field.',
    },
    {
      q: 'What does */15 * * * * mean?',
      a: 'Every 15 minutes — the */n step fires at n-minute intervals within each hour (00:00, 00:15, 00:30…). Note that steps on hours restart at midnight: */6 runs at 0, 6, 12, and 18.',
    },
    {
      q: 'How do I run something weekdays at 9?',
      a: 'Pick the Weekdays preset and set 9:00 — it emits 0 9 * * 1-5. Day-of-week runs 0-7 where both 0 and 7 mean Sunday, so 1-5 is Monday through Friday.',
    },
    {
      q: 'Does it explain the expression?',
      a: "Yes — every generated expression is rendered into plain language by the same engine behind this site's cron parser, so you can confirm the schedule reads back the way you intended before deploying it.",
    },
  ],
  'htaccess-redirect-generator': [
    {
      q: 'Where does the .htaccess file go?',
      a: "In your document root — the same folder as your homepage. Rules apply to that directory and everything beneath it. Apache with mod_rewrite is required, which is near-universal on shared hosting; managed platforms like Vercel or Netlify don't use .htaccess at all.",
    },
    {
      q: '301 or 302 while testing?',
      a: 'Test with 302. Browsers and search engines cache 301s aggressively and for a very long time, so a wrong permanent redirect keeps haunting you. The generator emits 301s — change R=301 to R=302 while testing, then flip back.',
    },
    {
      q: 'How do I move my whole domain?',
      a: 'Fill in old and new domain and the generator emits a host RewriteRule that forwards every path one-to-one (old.com/page → new.com/page). Keep it live for at least a year so search indexes and saved bookmarks fully migrate.',
    },
    {
      q: 'Are special characters escaped?',
      a: 'Yes — source paths are regex-escaped automatically, so dots and question marks match literally, and the pattern accepts both /old-url and /old-url/ forms. Destinations are not escaped, so query strings can be included where needed.',
    },
  ],
  'unicode-character-lookup': [
    {
      q: 'How many characters are included?',
      a: 'A curated few hundred people actually search for: arrows, math symbols, Greek letters, typographic dashes, quotes and ellipses, currency signs, checks and stars, box-drawing, and Mac keys like ⌘. Full Unicode has 150,000+ characters — emoji pickers cover that territory.',
    },
    {
      q: 'How do I find a character?',
      a: 'Search by name — "arrow", "star", "quote" — or paste the character itself to identify it. Each result shows its code point (U+2192 for →) with a copy button for the character itself.',
    },
    {
      q: 'Why show the code point?',
      a: 'Code points are how characters are referenced everywhere: CSS \\2192 escapes, HTML entities, and rendering bug reports. They also disambiguate lookalikes, such as the degree sign versus a superscript zero.',
    },
  ],
  'toml-to-json': [
    {
      q: 'Which TOML features are supported?',
      a: 'The TOML 1.0 core: named tables, arrays of tables, inline tables, dotted keys, every numeric format (0x/0o/0b, inf, nan), booleans, and datetimes — which become strings, since JSON has no date type. Multi-line strings are rejected with their line number rather than mis-parsed.',
    },
    {
      q: 'Why do dates become strings?',
      a: 'JSON has no native date type — RFC 8259 defines only strings, numbers, booleans, arrays, objects, and null. The converter keeps datetime text exactly as written, which matches what most JSON APIs do with ISO 8601 strings.',
    },
    {
      q: 'How are errors reported?',
      a: 'Parse failures surface with the offending line number and a short reason, so a missing quote or malformed key is quick to locate. Nothing is output until the whole document parses — no half-converted results.',
    },
  ],

  // ══════════ batch18 高商业意图工具(6 个,2026-09)══════════
  'hysa-calculator': [
    {
      q: 'How is HYSA interest calculated?',
      a: 'Most high-yield savings accounts compound daily and credit interest monthly: your balance grows by (1 + APY/365)^365 per year. This calculator converts that into an effective monthly rate and projects your balance with deposits included.',
    },
    {
      q: 'Is HYSA interest taxable?',
      a: 'Yes — savings interest is ordinary income reported on a 1099-INT (in the US) and taxed at your marginal rate, even if you leave it in the account. A 4.5% APY in a 22% bracket nets about 3.5% after tax.',
    },
    {
      q: 'What if my bank changes the APY?',
      a: 'HYSA rates are variable and follow the Fed. This projection assumes a constant rate, so treat long horizons as estimates and re-run the numbers whenever your bank reprices — the tool makes that a 10-second check.',
    },
  ],
  'cd-calculator': [
    {
      q: 'How is CD interest compounded?',
      a: 'Most CDs compound daily or monthly and pay the full amount at maturity. The maturity value follows A = P × (1 + r/n)^(n·t), with n the compounding frequency and t the term in years — this calculator exposes all three.',
    },
    {
      q: 'What is a typical early-withdrawal penalty?',
      a: 'US banks commonly charge 1 month of interest for CDs under a year, 3 months for 1-4 year terms, and 6-12 months for 5-year CDs. The penalty comes out of accrued interest, never principal — but exiting very early can wipe out everything you earned.',
    },
    {
      q: 'What happens if I withdraw at exactly 50% of the term?',
      a: 'Use the "Early exit at" slider: you accrue half the term\'s interest, then forfeit the penalty months. If the penalty exceeds accrued interest, you simply get your principal back — the tool never shows less than you deposited.',
    },
  ],
  'break-even-calculator': [
    {
      q: 'What is the break-even formula?',
      a: 'Break-even units = Fixed Costs ÷ (Price per Unit − Variable Cost per Unit). Each unit contributes its margin toward fixed costs; the moment contributions equal fixed costs, you break even.',
    },
    {
      q: 'What is contribution margin ratio?',
      a: 'It is (Price − Variable Cost) ÷ Price — the share of every revenue dollar left after variable costs. A 60% ratio means $0.60 of each sales dollar is available to cover fixed costs, and becomes profit after that.',
    },
    {
      q: 'Does the calculator handle semi-variable costs?',
      a: 'Split them: put the fixed monthly base (e.g., base salary) into fixed costs and the per-unit piece (e.g., hourly labor or packaging) into variable cost. The formula only understands those two buckets.',
    },
  ],
  'profit-margin-calculator': [
    {
      q: 'What is the difference between margin and markup?',
      a: 'Margin is profit divided by selling price; markup is profit divided by cost. A 100% markup (cost × 2) equals a 50% margin. Confusing them is the most common pricing error — this tool converts both ways instantly.',
    },
    {
      q: 'How do I price for a target margin?',
      a: 'Divide cost by (1 − target margin). For a 40% margin on a $40 cost: 40 ÷ 0.60 = $66.67. Pick "Profit margin" mode, enter 40, and the selling price, markup, and per-unit profit fill themselves in.',
    },
    {
      q: 'Is this gross margin or net margin?',
      a: 'Gross margin — it uses cost of goods only. Net margin also subtracts operating expenses, shipping, taxes, and fees. Marketplace sellers should add platform fees to cost before calculating to see a truer margin.',
    },
  ],
  'intermittent-fasting-calculator': [
    {
      q: 'Which intermittent fasting schedule is best for beginners?',
      a: 'Most people start with 16:8 (16 hours fasting, 8 hours eating) or the gentler 14:10. Consistency matters more than intensity — a moderate window you keep every day beats an aggressive one you abandon.',
    },
    {
      q: 'When does fat burning and autophagy start?',
      a: 'Fat burning (ketosis) typically becomes significant around 12+ hours after your last meal as liver glycogen depletes; cellular cleanup processes like autophagy ramp up around 16-24 hours. Timings vary by meal size, activity, and your body — the timeline marks them as estimates.',
    },
    {
      q: 'Does coffee break a fast?',
      a: 'Plain water, black coffee, and unsweetened tea are generally considered fast-safe. Anything with calories — cream, sugar, or a "small" latte — ends the fasted state and restarts the clock.',
    },
  ],
  'llm-api-cost-calculator': [
    {
      q: 'How is my monthly LLM API bill calculated?',
      a: 'Bill = (monthly input tokens ÷ 1M × input price) + (monthly output tokens ÷ 1M × output price), per model. Enter your volumes once and the table ranks every major model by projected monthly cost, cheapest first.',
    },
    {
      q: 'Why are output tokens so expensive?',
      a: 'Generation is compute-heavier than reading a prompt, so output tokens cost 3-8× input on nearly every model. An app that writes long answers can pay more for output than for a much larger prompt — trimming max_tokens is often the biggest lever.',
    },
    {
      q: 'Are cached or batch prices included?',
      a: 'The table shows uncached list prices — the worst case. Prompt caching cuts input costs 50-90% on OpenAI, Anthropic, and DeepSeek, and batch/async APIs roughly halve output costs, so real bills are usually lower than these projections.',
    },
  ],

  // ══════════ batch19 变现漏斗修复轮工具(5 个,2026-09 v4)══════════
  'roth-ira-calculator': [
    {
      q: 'When is a Roth IRA better than a Traditional IRA?',
      a: 'Roth wins when your marginal tax rate today is lower than the effective rate you expect in retirement — early career, low-income years, or if you predict tax rates will rise. Traditional wins when today\'s bracket is higher, which is typical in peak earning years: deduct at 24-32% now, withdraw at 10-12% later.',
    },
    {
      q: 'What is the IRA contribution limit?',
      a: '$7,500 per year in 2026, plus a $1,100 catch-up (total $8,600) if you are 50 or older. The limit is shared between Roth and Traditional — contributing to both doesn\'t double it. Your employer 401(k) limit is separate and much higher.',
    },
    {
      q: 'Does the calculator account for income phase-outs?',
      a: 'No — it isolates the tax-timing decision by growing identical contributions in both accounts. Roth contributions phase out above ~$153k single / $242k married (2026), and Traditional deductibility phases out if you have a workplace plan. Check IRS Publication 590-A for your situation.',
    },
  ],
  'fire-calculator': [
    {
      q: 'What is my FIRE number?',
      a: 'Annual spending divided by your safe withdrawal rate. At the classic 4% SWR that equals 25× spending: $40,000/year needs $1,000,000. Lean FIRE ($28k/yr) targets ~$700k, while a $100k lifestyle needs $2.5M.',
    },
    {
      q: 'What withdrawal rate should I use?',
      a: '4% is the Trinity-study classic, designed for 30-year retirements. Retiring in your 30s or 40s means a 40-50 year horizon, so many FIRE planners use 3.25-3.5% (roughly 29-31× spending) for extra safety against sequence-of-returns risk.',
    },
    {
      q: 'Why does savings rate matter more than returns?',
      a: 'Saving more attacks the problem from both ends: the portfolio grows faster while the required FIRE number shrinks. Going from 10% to 50% savings rate cuts a ~50-year journey to roughly 15-17 years — no return assumption change can match that lever.',
    },
  ],
  'cac-ltv-calculator': [
    {
      q: 'What is a good LTV:CAC ratio?',
      a: 'About 3:1 — enough gross profit per customer to cover overhead and errors while staying efficient. Below 1:1 you lose money on every customer; 1-3:1 leaves little margin for mistakes; above 5:1 is efficient but often signals you are underinvesting in growth.',
    },
    {
      q: 'How do you calculate LTV from churn?',
      a: 'LTV = ARPU × gross margin ÷ monthly churn. A 5% monthly churn means an average lifetime of 20 months (1 ÷ 0.05); a $50 ARPU at 80% margin yields $800. Always use gross margin, not revenue — only retained margin can repay acquisition cost.',
    },
    {
      q: 'What is CAC payback period?',
      a: 'The months of gross margin needed to recover acquisition cost: CAC ÷ (ARPU × margin). A $250 CAC on $40/month margin takes 6.3 months. SaaS investors typically want payback under 12 months so growth funds itself rather than eating cash.',
    },
  ],
  'flooring-calculator': [
    {
      q: 'How much waste should I add for flooring?',
      a: '5-10% for straight-lay plank and standard tile in simple rooms; 10-15% for diagonal or herringbone patterns, large-format tile, or spaces with many jogs and closets. The waste covers cuts, staggered seams, and the ripped last row — it is not optional.',
    },
    {
      q: 'How do I calculate how many boxes I need?',
      a: 'Multiply length × width, apply the waste factor, divide by the coverage printed on the box, and round up: boxes = ⌈area × (1 + waste) ÷ box coverage⌉. This tool does it automatically for tile, hardwood, vinyl, and marble in ft² or m².',
    },
    {
      q: 'How many square feet are in a box of flooring?',
      a: 'Typically 15-30 ft²: ceramic tile ~15.5 ft², marble ~16 ft², engineered hardwood ~24 ft², vinyl plank ~28 ft². Formats vary by manufacturer — always verify the label and keep one spare box for future repairs, since dye lots are discontinued.',
    },
  ],
  'dog-food-calculator': [
    {
      q: 'How is a dog\'s daily calorie need calculated?',
      a: 'Two steps: RER (resting energy requirement) = 70 × body weight in kg raised to the 0.75 power, then MER = RER × a life-stage factor — 1.2 for weight loss/seniors, 1.6 for neutered adults, 1.8 for intact adults, 2-3 for puppies and working dogs (AAHA guidelines).',
    },
    {
      q: 'Which MER factor should I pick?',
      a: 'Most pet dogs today are neutered adults → ×1.6. Use ×1.2 for weight loss or obesity-prone seniors, ×1.8 for intact dogs, ×2 for puppies 4-12 months, ×3 under 4 months, and ×2.5+ for active working or sporting breeds.',
    },
    {
      q: 'How do I convert kcal per cup into grams per day?',
      a: 'Find the kcal-per-cup and grams-per-cup figures on the bag label. Daily grams = daily kcal ÷ kcal-per-cup × grams-per-cup. This calculator handles both label styles (kcal/cup or kcal/100g) and outputs cups and grams together — grams are more accurate because scoops vary by ±20%.',
    },
  ],

  // ══════════ _batch9-contents(19 个)══════════
  'dice-roller': [
    {
      q: 'Are the dice rolls actually random?',
      a: "Yes — the tool uses the browser's crypto.getRandomValues(), the same cryptographic randomness used for secure keys, not the older Math.random(). Each die is rolled independently, so a d20 has an exactly even 5% chance per face.",
    },
    {
      q: 'Can I roll multiple dice at once, like 3d6+2?',
      a: 'Yes. Pick the die type (d4, d6, d8, d10, d12, d20, or d100) and set how many dice to roll. You see each individual die result plus the total, so a DM or player can verify every roll.',
    },
    {
      q: 'Does it work for tabletop RPGs like D&D?',
      a: "That's the main use case: d20 attack and saving throws, 4d6 drop-low ability score rolling, percentile d100 checks, and everything in between. Nothing is stored or sent anywhere — it is a pure in-browser roller, so it also works offline.",
    },
    {
      q: 'Why do I get the same numbers often — is it rigged?',
      a: 'Randomness is clumpy: in 20 rolls of a d6, seeing a 4 three times is statistically normal. Over hundreds of rolls the counts converge toward even. The history panel keeps only your most recent rolls, so verifying the convergence means tallying the counts yourself over a longer session.',
    },
  ],
  'coin-flip': [
    {
      q: 'Is the coin actually fair?',
      a: "It uses crypto-grade randomness (crypto.getRandomValues), which is unbiased and unpredictable — arguably fairer than a physical coin, which can be slightly biased by weight distribution or the flipper's technique. Heads and tails each come up exactly 50% of the time.",
    },
    {
      q: 'Can I flip the coin multiple times?',
      a: 'Yes — flip repeatedly and the running heads/tails tally keeps count for you. This is handy for statistics demonstrations, settling multiple ties at once, or verifying fairness empirically.',
    },
    {
      q: 'Does flipping work offline?',
      a: "Yes. The randomness comes from your own device's Web Crypto API — no server round-trip, no stored results. Once the page is loaded it keeps working with no connection.",
    },
    {
      q: 'What else can I use instead of a coin for decisions?',
      a: 'For more than two options, a dice roller handles 2-100 faces, and a wheel spinner lets you pick visually from custom entries. For a plain binary tie-break, a coin flip remains the cleanest mental model.',
    },
  ],
  'wheel-spinner': [
    {
      q: 'How random is the wheel?',
      a: 'The winning entry is drawn with crypto-grade randomness before the animation plays — the spin animation is a visual reveal, not the decision itself. Every entry has an equal chance regardless of its position on the wheel.',
    },
    {
      q: 'Can I remove a name after it wins?',
      a: "Yes — after each spin you can delete the winner and spin again with the remaining entries, which is exactly the flow for giveaways and \"who's next\" queues. You can also duplicate entries to weight someone's odds higher.",
    },
    {
      q: "What's the maximum number of entries?",
      a: 'The wheel holds at most 12 options — enter more and the extra lines are ignored with a notice. For large groups, consider splitting into rounds or using the random team generator instead.',
    },
    {
      q: 'Is my list of names saved anywhere?',
      a: 'No. Everything runs in your browser with no account and no server storage — close the tab and the entries are gone. This makes it classroom-safe and suitable for confidential picks like employee giveaways.',
    },
  ],
  'morse-code-translator': [
    {
      q: 'Which Morse code standard does this use?',
      a: 'International Morse Code (ITU standard), the one used worldwide for amateur radio and emergency signaling. It covers A-Z, 0-9, common punctuation, and procedural signs like SOS. Non-Latin alphabets have their own standards not covered here.',
    },
    {
      q: 'How does the audio playback work?',
      a: 'The tool synthesizes the standard timing: a dot is one unit, a dash three units, with one-unit gaps inside a letter, three between letters, and seven between words — usually at a 600 Hz tone. You can follow along visually with the dot-dash pattern at the same time.',
    },
    {
      q: "Why won't my Morse decode correctly?",
      a: 'Spacing is everything when decoding: use a single space between letters and a slash or multiple spaces between words. If you paste dots and dashes with no letter gaps, the decoder cannot know where one letter ends and the next begins.',
    },
    {
      q: 'Is Morse code still used today?',
      a: "Yes — ham radio operators keep it alive because it cuts through poor conditions with minimal power, and it remains an official distress signal (SOS). It's also popular in puzzles, escape rooms, and as an accessibility channel.",
    },
  ],
  'typing-speed-test': [
    {
      q: 'What is a good typing speed?',
      a: 'The average adult types 38-42 net WPM; professional transcriptionists exceed 80, and competitive typists top 150. Accuracy matters as much as speed — 55 WPM at 98% accuracy beats 70 WPM at 90% in real work.',
    },
    {
      q: 'How is WPM calculated here?',
      a: 'Standard formula: every 5 typed characters (including spaces) counts as one "word", divided by the elapsed minutes, then corrected for errors. The test runs on one full real sentence — the clock starts on your first keystroke and stops when you finish it — so the score reflects genuine typing, not repeated short words.',
    },
    {
      q: 'Why is my WPM lower than in games like TypeRacer?',
      a: 'Different tests count errors differently. This test emphasizes accuracy against natural full sentences — typos cost you directly. Scores are also consistently lower on the first run of a session while your hands warm up; take two or three tests and compare the later ones.',
    },
    {
      q: 'Does the test work on mobile?',
      a: 'You can take it on a phone, but expect 25-40 WPM with thumbs versus 40-70 on a physical keyboard. For a fair baseline, use a keyboard — and sit with your wrists floating rather than resting for the best numbers.',
    },
  ],
  'random-team-generator': [
    {
      q: 'How are the teams made fair?',
      a: 'Names are shuffled with crypto-grade randomness, then dealt round-robin like cards — so if your list has 13 people and 4 teams, teams get 4/3/3/3 members with the spots decided purely by shuffle order. Re-shuffling re-rolls everything with a new seed.',
    },
    {
      q: 'Can I choose the number of teams?',
      a: 'Yes. Set a number of teams (2-10) and the generator balances sizes automatically. Leftover people are distributed one per team rather than dumped into the last group.',
    },
    {
      q: 'Can I keep some people together on the same team?',
      a: 'The simplest trick: put the people who must stay together on a single line (e.g. "Alex & Sam") so they enter the draw as one entry — dealing adjacent lines to different teams is exactly what the round-robin does. For strict pairing constraints, generate, then manually swap two names; the shuffle gives you a fair baseline to start from.',
    },
    {
      q: 'Does anything get saved or shared?',
      a: 'No. Pasting names only fills a local text box — nothing leaves the page. Refresh or navigate away and the roster is gone, which makes it safe for HR sessions and classrooms.',
    },
  ],
  'password-entropy-checker': [
    {
      q: 'What exactly is password entropy?',
      a: 'Entropy measures unpredictability in bits: entropy ≈ length × log₂(charset size). A 12-character random password over 94 printable characters carries ~78.7 bits — each extra bit doubles the guesses an attacker needs. Length contributes more than exotic characters because it multiplies directly.',
    },
    {
      q: "Why does my password score low even though it's long?",
      a: 'Patterns get penalized. "Password12345678" is long but low-entropy: dictionary words, leetspeak substitutions, and repeated sequences are what cracking tools try first. Entropy is about genuine unpredictability, not character count alone.',
    },
    {
      q: 'Is my password sent anywhere?',
      a: 'No. The check runs entirely offline in your browser using the same math security auditors use — nothing is typed into a network request, logged, or stored. That matters: online "password strength testers" that phone home are themselves a leak risk.',
    },
    {
      q: 'How much entropy is enough?',
      a: 'Rough guide for 2026 hardware: under 40 bits is trivially crackable, 60+ bits resists casual attacks, 80+ bits resists well-funded ones, and 100+ bits is beyond any realistic brute force. Random 16+ characters over the full printable set (~104 bits) or a 4-5 word diceware passphrase gets you there.',
    },
  ],
  'llm-cost-calculator': [
    {
      q: 'How is the monthly API cost calculated?',
      a: 'Monthly cost = requests/day × days × (input tokens × input price + output tokens × output price), scaled per million tokens. The tool breaks the number into per-request, per-day, and per-month views and compares models side by side at your actual traffic, not marketing assumptions.',
    },
    {
      q: 'What are cached-input tokens and how much do they save?',
      a: 'Providers like Anthropic and OpenAI discount tokens that repeat across requests — a fixed system prompt, retrieved documents, few-shot examples — by 50-90%. Set the prompt cache hit-rate slider to your expected share and the calculator blends it into each model\'s effective input price — input × (1 − hit rate) + cached-input price × hit rate — shown in green next to the list price. With a stable prefix, caching routinely cuts input spend by more than half.',
    },
    {
      q: 'Why do my real invoices differ from the estimate?',
      a: 'Three usual reasons: output tokens run longer than you assumed (streaming models rarely stop where you predict), cache misses when your prompt prefix shifts, and provider price changes. Treat the estimate as a budgeting baseline and re-check monthly.',
    },
    {
      q: 'Which models are included in the price table?',
      a: "GPT, Claude, Gemini, DeepSeek, Kimi, Qwen, and GLM families with their standard per-million-token rates. Prices are a snapshot — frontier model pricing moves quarterly — so always confirm against the provider's current page before signing a contract.",
    },
  ],
  'context-window-checker': [
    {
      q: 'How are tokens estimated?',
      a: 'The tool applies per-language heuristics calibrated against modern tokenizers: English averages ~4 characters per token, code and non-Latin scripts differ. Expect counts to vary by 5-10% per model versus an exact tokenizer count — good enough for capacity planning, not for billing reconciliation.',
    },
    {
      q: "What happens when text exceeds a model's context window?",
      a: 'Requests either fail outright or, on APIs that support it, the oldest context gets silently truncated — which is how users lose earlier instructions mid-conversation. The remaining-room percentage tells you how close you are to that cliff before it bites.',
    },
    {
      q: 'Do I have less room than the advertised window?',
      a: 'Yes, in practice: the advertised count covers prompt + generated output + provider-internal overhead. Reserve 10-20% headroom, and remember that a 200k-token window is not an invitation to stuff 199k tokens in — attention quality degrades in very long contexts.',
    },
    {
      q: 'Does pasting code or secrets expose them?',
      a: "No. Counting happens locally in your browser; nothing is uploaded to any API. It's safe to paste proprietary code or sample data to size it — the tool never calls a model.",
    },
  ],
  'json-to-zod': [
    {
      q: 'How are types inferred from my JSON?',
      a: 'Each value maps by its JavaScript type: strings → z.string(), numbers → z.number(), booleans → z.boolean(), null → z.null(), arrays → z.array() of the element type, nested objects → nested z.object(). Keys present in the sample become required — add .optional() by hand where your API omits fields.',
    },
    {
      q: 'Does it handle mixed arrays and nested objects?',
      a: "Yes. Arrays with mixed element types produce a union schema (z.union), and arbitrarily deep nesting is preserved in the output. Empty arrays can't infer an element type, so they come out as z.array(z.unknown()) — tighten those by hand.",
    },
    {
      q: 'Where is this most useful?',
      a: 'Three spots: validating API responses at runtime with parse(), constraining AI structured output (many providers accept Zod directly for function/tool schemas), and generating form validation from sample payloads. Paste a realistic response — not a toy example — to get an accurate schema.',
    },
    {
      q: 'Is my JSON uploaded anywhere?',
      a: 'No. Conversion runs entirely in your browser — nothing is sent to a server or stored. Safe for customer data, internal API payloads, and other confidential samples.',
    },
  ],
  'aes-encrypt-decrypt': [
    {
      q: 'Which encryption is used here?',
      a: 'AES-256-GCM via your browser\'s native WebCrypto — the same authenticated-encryption standard used by TLS 1.3 and government systems. GCM adds an authentication tag, so tampered or wrongly-decrypted ciphertext fails loudly instead of returning garbage.',
    },
    {
      q: 'How is my password turned into a key?',
      a: 'PBKDF2 (PBKDF2-HMAC-SHA256) stretches your password with a random salt and many iterations into a 256-bit key. Salting guarantees that identical passwords produce different ciphertexts and defeats rainbow-table attacks.',
    },
    {
      q: 'Can my data be recovered if I forget the password?',
      a: 'No — and that is by design, not a bug. AES-256 has no practical brute-force path; there is no backdoor and the tool never sees your password. Encrypting is safe; treat the password as unrecoverable.',
    },
    {
      q: 'Why is browser encryption trustworthy — where does my text go?',
      a: "Nowhere. All crypto runs locally through the Web Crypto API; the plaintext, password, and ciphertext never leave your machine and nothing is logged. You can verify with DevTools' network tab: zero requests during encrypt or decrypt.",
    },
  ],
  'car-cost-calculator': [
    {
      q: 'What does "true cost of ownership" include?',
      a: 'Five lines beyond the loan payment: fuel (from your actual mileage and local price), insurance, maintenance and repairs, registration/fees, and depreciation — the biggest and most ignored cost, often 30-40% of total ownership on newer cars. The result is a monthly figure plus a cost-per-km.',
    },
    {
      q: 'How is depreciation estimated?',
      a: 'From vehicle age and value using typical market curves: cars lose roughly 15-25% of value in year one and 10-15% annually after. Enter what the car would sell for today versus what you paid for the most accurate picture.',
    },
    {
      q: 'Should I include financing in the comparison?',
      a: 'Yes if you borrowed — interest is part of the cost of driving. The tool takes no loan input: figure the payment with the auto loan calculator, then fold the interest into the insurance line if significant. Cash buyers can compare pure operating cost as-is.',
    },
    {
      q: 'Why does my cost per km look so high?',
      a: "Because fixed costs don't shrink with low mileage: insurance, depreciation, and registration hit just as hard at 5,000 km/year as at 20,000. Drivers with low annual mileage routinely see the highest per-km costs — which is why car-sharing or occasional rentals sometimes wins.",
    },
  ],
  'json-repair': [
    {
      q: 'What kinds of broken JSON can it fix?',
      a: 'The classic LLM failures: truncated output (unterminated objects/arrays/strings), trailing commas, single-quoted or unquoted keys, Markdown code fences around the payload, smart quotes, NaN/Infinity literals, and raw control characters. It reports each fix so you can audit the repair.',
    },
    {
      q: 'Can repair produce wrong data?',
      a: 'Possibly — repair is best-effort inference, not magic. A truncated string might be closed at a guess boundary, and an unquoted key is taken literally. Always review the fix log and validate semantically before feeding the output to production code.',
    },
    {
      q: 'Why do LLMs emit invalid JSON at all?',
      a: 'Sampling: models generate text token by token and can stop at max tokens mid-object, or drift from a JSON instruction without structured-output mode. The durable fixes are structured output / JSON mode where the provider supports it, plus exactly this kind of repair pass as a safety net.',
    },
    {
      q: 'Is there a size limit or privacy concern?',
      a: 'Repair runs locally in your browser — nothing is uploaded, so confidential payloads stay on your machine. Practical limits are browser memory: payloads in the low tens of megabytes process fine.',
    },
  ],
  'markdown-fence-extractor': [
    {
      q: 'What counts as a fenced code block?',
      a: 'Anything between triple backticks (```lang ... ```) in Markdown, with or without a language tag. Four-or-more-backtick fences are not recognized — if a code sample itself contains triple backticks, re-fence the outer block before extracting.',
    },
    {
      q: 'Can I filter blocks by language?',
      a: 'Yes — filter to just python, javascript, json, sql, bash, and so on. This is the main workflow: paste a long LLM response, pull only the code blocks, and copy or download them individually without scraping the prose by hand.',
    },
    {
      q: 'Why do indented code blocks sometimes get missed?',
      a: "Markdown has two code syntaxes: fenced (backticks) and indented (4 spaces). The extractor targets fences — indented blocks are ambiguous inside lists and quotes, so they're skipped to avoid false positives. Re-fence indented code first if you need it captured.",
    },
    {
      q: 'Does downloading work for many blocks at once?',
      a: 'Yes — copy each block individually, or download all extracted blocks in one go as a single code-blocks.txt file. When you need each snippet as its own file, use the per-block copy buttons.',
    },
  ],
  'prompt-template-filler': [
    {
      q: 'What placeholder syntax does it support?',
      a: 'Two styles: {{double_braces}} and {single} (f-string style). Undeclared variables in the template are detected and listed, and unfilled variables are left in place and flagged with warnings.',
    },
    {
      q: 'How do I fill variables — form or JSON?',
      a: 'Via JSON: the right-hand textarea accepts an object like {"audience": "CTOs", "tone": "direct"} and its values are stringified into the template — strings verbatim, numbers and booleans too. That makes batch or scripted filling straightforward.',
    },
    {
      q: 'Can I use this for few-shot prompt batching?',
      a: "That's a core use case: define a template with slots like {{product}} and {{tone}}, fill it from a JSON object, copy the result, then refill for the next row. It turns a prompt into a repeatable, version-controlled asset instead of a hand-edited blob.",
    },
    {
      q: 'Does my template or data leave the browser?',
      a: 'No. Filling runs entirely client-side — templates, values, and outputs never touch a server. Safe for internal prompts and customer data.',
    },
  ],
  'openai-tools-builder': [
    {
      q: 'What schema does this generate?',
      a: 'A function definition for the OpenAI-style tools API parameter: a name, a natural-language description, and a JSON Schema parameters object with typed properties (string, number, boolean, integer, array, object), enum constraints, and a required list — all built through a form instead of hand-writing JSON Schema.',
    },
    {
      q: 'What makes a good function name and description?',
      a: 'Names should be snake_case verbs like get_weather or search_orders — the model picks tools primarily from name + description, so describe when and why to call it, not just what it does. "Returns current weather for a city when the user asks about weather today" beats "Weather API".',
    },
    {
      q: 'How do enums and required fields affect the model?',
      a: 'Enums constrain the model to listed values (great for categories, currencies, units), and marking parameters required prevents the model from guessing omissions. Fewer, well-constrained parameters reliably beat sprawling schemas — the model has fewer ways to go wrong.',
    },
    {
      q: 'Is the output compatible with other LLM providers?',
      a: "The tools parameter shape shown here (OpenAI function calling) has become the de-facto pattern adopted by most compatible APIs, so output generally ports with minor field renames. Always check the target provider's current function-calling docs.",
    },
  ],
  'csv-to-finetune-jsonl': [
    {
      q: 'What format does fine-tuning require?',
      a: 'One JSON object per line (JSONL), each shaped as a chat conversation: {"messages": [{"role": "system", ...}, {"role": "user", ...}, {"role": "assistant", ...}]}. Your CSV columns map onto those roles — typically a prompt column to user, a completion column to assistant, and an optional shared system prompt.',
    },
    {
      q: 'What are the most common validation errors?',
      a: 'The tool validates structure, not content: it needs a header row plus at least one data row, the user and assistant (and optional system) columns must be found by name in that header, fully empty rows are skipped, and any row with an empty assistant cell is reported with its line number. Fixing the CSV once beats a failed upload cycle.',
    },
    {
      q: 'How much training data do I need?',
      a: 'Providers generally suggest 50-100 examples as a useful floor and 500-1,000+ for consistent style transfer. Quality beats quantity: 200 clean, diverse, consistently formatted pairs outperform 2,000 noisy ones scraped from a chat log.',
    },
    {
      q: 'Is my training data uploaded anywhere here?',
      a: 'No — conversion and validation run entirely in your browser. Your dataset only goes to the provider when you upload the finished JSONL to their fine-tuning endpoint yourself.',
    },
  ],
  'token-visualizer': [
    {
      q: 'How accurate is the tokenization?',
      a: "It's a high-fidelity approximation of modern BPE tokenizers (GPT/Claude/Gemini class), accurate within a few percent for English prose. Exact counts vary because each provider's tokenizer differs — for billing, always use the provider's own reported usage numbers.",
    },
    {
      q: 'Why do some words cost multiple tokens?',
      a: 'BPE splits words into learned subword units: common short words ("the", "and") are single tokens; rare words split ("tokenization" → several); a leading space attaches to the following word; numbers often split digit-by-digit after the first 1-3 digits. Non-English scripts typically cost 2-4× more tokens per word.',
    },
    {
      q: 'What is this actually useful for?',
      a: 'Building intuition for cost and context budgets: seeing that your 2,000-word blog post is ~2,700 tokens, that a system prompt repeated across 10,000 requests is the real line item, and why trimming filler text saves API spend proportionally.',
    },
    {
      q: 'Can I paste code and JSON?',
      a: "Yes — code tokenizes visibly differently from prose (indentation, symbols, and long identifiers each consume tokens). It's a quick way to see why a 50 KB config file can eat a meaningful slice of a context window.",
    },
  ],
  'embedding-price-calculator': [
    {
      q: 'How is the embedding cost computed?',
      a: 'Cost = tokens processed × price per million tokens, with dimensions and model chosen from each provider\'s current rate card. For recurring workloads the tool computes per-run and monthly spend from your document count, average tokens per document, and re-embed runs per month.',
    },
    {
      q: 'Do dimensions affect the price?',
      a: "It depends on the provider: some price uniformly regardless of dimension count, while others (notably OpenAI's embeddings) offer cheaper tiers for shortened vectors via a dimensions parameter — reducing from 1536 to 256 dimensions can cut cost dramatically with modest retrieval-quality loss. Test on your own retrieval evals before downscaling.",
    },
    {
      q: 'How do open-source models change the math?',
      a: 'Self-hosted models (BGE, E5, GTE class) shift cost from per-token API spend to GPU time and infrastructure. Above roughly 50-100 million tokens per month, hosting usually wins; below that, API pricing is cheaper than keeping hardware warm. Estimate the crossover yourself with the per-run and monthly columns.',
    },
    {
      q: "What's a realistic token count per document?",
      a: 'A typical web page runs 500-1,500 tokens; a PDF report 3,000-15,000; a support ticket 100-400. Chunk before embedding — most retrieval systems embed 300-800 token chunks rather than whole documents, so multiply your document count by chunks-per-document for the honest estimate.',
    },
  ],
  'runway-calculator': [
    {
      q: 'What is the difference between gross burn and net burn?',
      a: 'Gross burn is the total money your company spends each month on payroll, servers, rent, and software. Net burn is gross burn minus incoming customer revenue. If you spend $30,000 and earn $10,000, gross burn is $30,000 and net burn is $20,000.',
    },
    {
      q: 'How many months of runway should a startup have?',
      a: 'Most venture-backed founders and bootstrappers aim for 18 to 24 months. 12 months is the minimum safety buffer: it gives you 6 months to build and grow, and 6 months to raise your next round or reach breakeven before running out of cash.',
    },
    {
      q: 'What does "default alive" mean?',
      a: 'A startup is default alive if its current cash plus projected revenue growth will carry it to cash-flow breakeven before running out of money, without needing additional external funding.',
    },
    {
      q: 'How does revenue growth impact my runway?',
      a: 'Static runway assumes net burn never changes. With compound revenue growth, each month brings in more cash, steadily shrinking your net burn and extending your runway by several additional months.',
    },
  ],
  'freelance-rate-calculator': [
    {
      q: "Why can't I just divide my old full-time salary by 2,080 hours?",
      a: 'A standard employee gets paid for 40 hours a week, including vacations, sick days, and company-paid benefits. Freelancers only bill 20 to 25 hours per week because non-billable client pitches, invoicing, and admin work take up the rest.',
    },
    {
      q: 'What expenses should freelancers include?',
      a: 'Include health insurance, software subscriptions, laptop and hardware amortization, legal/accounting fees, and self-employment taxes (which in the US includes both halves of FICA: 15.3%).',
    },
    {
      q: 'Why add a profit margin to freelance rates?',
      a: 'A 10% to 20% profit margin acts as your safety buffer for client payment delays, unpaid bench time between projects, and savings for emergency equipment replacements.',
    },
    {
      q: 'Should I quote hourly or daily rates to clients?',
      a: 'For short projects (under 20 hours), hourly pricing is standard. For multi-week contracts or enterprise consulting, quoting daily rates (8× your hourly rate) minimizes micro-scrutiny over individual hours.',
    },
  ],
  'docker-run-to-compose': [
    {
      q: 'Why convert docker run commands to docker-compose.yml?',
      a: 'A long docker run command is fragile, easy to lose, and hard to version-control. Docker Compose lets you commit your entire container setup to Git, document ports and volume paths, and restart everything with a single docker compose up -d command.',
    },
    {
      q: 'How does this tool handle named volumes vs host bind mounts?',
      a: 'If a volume starts with a relative path (./), absolute path (/), or Windows drive (C:), it is formatted as a host bind mount. If it starts with a bare name like pgdata:/var/lib/postgresql, the tool automatically declares it under the root volumes: section.',
    },
    {
      q: 'Does this converter run securely in the browser?',
      a: 'Yes — the command parser runs 100% locally in your browser with zero server calls. Your environment variables, passwords, and server tokens never leave your computer.',
    },
    {
      q: 'What version of Docker Compose is generated?',
      a: 'By default, it outputs modern Compose Specification YAML (compatible with docker compose v2). You can also toggle on the legacy version: "3.8" header if your deployment pipeline requires it.',
    },
  ],
  'mortgage-affordability-calculator': [
    {
      q: 'How much house can I afford with a $100,000 salary?',
      a: 'At the standard 28/36 rules, $100,000 a year supports about $2,333 of monthly PITI; with $80,000 down at 6.5% in a low-tax area that lands near a $375,000 home — less where property taxes run 2%+. Run your actual debts and rates through the calculator for a firm number.',
    },
    {
      q: 'What are the 28/36 rules?',
      a: 'Lenders cap your total housing payment at 28% of gross monthly income (front-end) and housing plus all recurring debts at 36% (back-end). The tighter of the two limits your maximum price; FHA and some conventional loans stretch to 43-50% with compensating factors.',
    },
    {
      q: 'Do car loans and student loans count against me?',
      a: 'Yes — every recurring obligation on your credit report (car, student loans, card minimums, child support) reduces your housing budget dollar for dollar under the 36% back-end rule. Paying off a $650 car loan before applying raises your housing allowance by $650 a month.',
    },
    {
      q: 'Why does the calculator include property tax and insurance?',
      a: 'Underwriters qualify you on the full PITI payment, not just principal and interest. A 2.4% property tax area versus 0.6% changes the house you can buy at the same income by six figures, so taxes, insurance, and HOA are solved into the loan equation here.',
    },
  ],
  'refinance-break-even-calculator': [
    {
      q: 'How do I calculate my refinance break-even point?',
      a: 'Divide total closing costs by monthly savings. Saving $303 a month on $4,800 of costs breaks even in 15.8 months — keep the new loan past that and you are ahead. This tool runs the division and shows the cumulative savings curve crossing your cost line.',
    },
    {
      q: 'Is it worth refinancing for 1%?',
      a: 'Usually yes: a 1-point drop on a $320,000 balance saves over $200 a month at the same remaining term (more if you also stretch to 30 years), recouping $4,800 of costs in about two years. The honest threshold is lower than folklore — even 0.5 point often pays back within three to four years.',
    },
    {
      q: 'Why did my payment drop but my total interest go up?',
      a: 'Term reset: rolling a balance with 27 years left into a new 30-year loan re-spreads principal over 360 months, so the payment falls partly from amortization, not savings. Compare the interest-change figure and consider a new term that matches your remaining years.',
    },
    {
      q: 'What counts toward refinance closing costs?',
      a: 'Everything you would not pay otherwise: appraisal, origination or points, title search, lender title insurance, recording, and escrow setup — typically 2-5% of the loan. Prepaid interest and escrow deposits are excluded because you owe them regardless.',
    },
  ],
  'biweekly-mortgage-payment-calculator': [
    {
      q: 'How much does a biweekly payment plan save?',
      a: 'On a $320,000 loan at 6.5% for 30 years, biweekly half-payments pay off in about 290 months instead of 360 and save roughly $93,000 in interest. The higher your rate, the bigger the saving — at 3.5% the same trick saves about $28,000.',
    },
    {
      q: 'Can I set up biweekly payments myself for free?',
      a: 'Yes — adding 1/12 of your monthly payment to every check, marked "apply to principal", produces virtually the same payoff. Third-party biweekly plans charge $300-500 in setup fees for what your own discipline does for nothing.',
    },
    {
      q: 'Why does one extra payment a year matter so much?',
      a: 'Because it hits principal in year one and stops compounding for decades: every prepaid dollar of principal skips 25+ years of interest at your note rate. Twenty-six half-payments equal 13 full payments — the 13th is the entire engine.',
    },
    {
      q: 'Is biweekly better than investing the extra money?',
      a: 'It depends on your rate. Above roughly 5-6%, the guaranteed interest saving from prepayment beats most risk-free alternatives; at a 3.5% pandemic-era rate, a money-market fund paying more wins, and you keep the liquidity.',
    },
  ],
  'closing-cost-calculator': [
    {
      q: 'How much are closing costs for a buyer?',
      a: 'Typically 2-5% of the purchase price: on a $400,000 home, roughly $8,000-12,000 covering lender fees, title and escrow charges, appraisal, and prepaid taxes and insurance. FHA and low-down-payment loans run at the high end because more is escrowed.',
    },
    {
      q: 'Who pays closing costs — buyer or seller?',
      a: 'Both, on different bills. Buyers pay lender, title, and escrow setup; sellers pay agent commissions (5-6%) plus transfer taxes and their settlement share — 6-10% of the price in total. In a buyer market, sellers can credit part of the buyer costs as a negotiation lever.',
    },
    {
      q: 'Can I roll closing costs into the mortgage?',
      a: 'Sometimes: lender-paid options build costs into a higher rate, and FHA/VA allow limited seller credits, while true no-cost refinances trade roughly 0.25% more rate for the fees. Rolling costs in always costs more over time than paying them at the table.',
    },
    {
      q: 'Which closing costs can I shop for?',
      a: 'More than most buyers think: title insurance varies 30%+ between providers, and settlement and escrow fees are negotiable in many states. The Loan Estimate marks shoppable services in its Services You Can Shop For section — compare at least two providers.',
    },
  ],
  'property-tax-calculator': [
    {
      q: 'How do I calculate my property tax?',
      a: 'Multiply assessed value by the millage rate and divide by 1,000: a $320,000 assessment at 20 mills owes $6,400 a year. Assessed value is usually market value times the county assessment ratio, minus any exemptions you have filed.',
    },
    {
      q: 'What is a mill in property tax?',
      a: 'One mill equals $1 of tax per $1,000 of assessed value — a 20-mill rate charges $20 per $1,000. Mills and percentages convert directly: 20 mills = 2% of assessed value.',
    },
    {
      q: 'Will my taxes go up if I buy above the assessment?',
      a: 'Often yes. Caps like California Prop 13 protect current owners, but many jurisdictions reassess a long-held home at your purchase price after the sale. Budget your taxes on what you paid, not on the seller current bill.',
    },
    {
      q: 'How do I lower my property tax bill?',
      a: 'File every exemption you qualify for (homestead, senior, veteran) — they are usually not automatic — and appeal the assessment when it outruns comparable sales. Appeals typically must be filed within 30-60 days of the assessment notice.',
    },
  ],
  'prorated-rent-calculator': [
    {
      q: 'How is prorated rent calculated?',
      a: 'Divide monthly rent by the days in that month and multiply by days occupied: $1,800 rent with a November 10 move-in means 21 days × $60.00 = $1,260. Some leases use annual rent ÷ 365 as the daily rate instead — $59.18 here — so check the lease first.',
    },
    {
      q: 'Which is better, prorating by month or by 365 days?',
      a: 'For tenants the 365-day basis is slightly cheaper because it spreads rent across a uniform year; in February the month basis is the priciest ($64.29/day on $1,800 rent). The difference is usually under $20 — the lease clause decides, not preference.',
    },
    {
      q: 'Does the move-in day itself count?',
      a: 'Normally yes — you hold the keys, you pay for the day. A November 10 move-in owes the 10th through the 30th, 21 days. Some leases count from the lease start date instead; confirm which convention yours uses before signing.',
    },
    {
      q: 'How do I prorate the last month of rent?',
      a: 'Same math, fewer days: a June 8 move-out owes 8 days × the daily rate ($480 on $1,800 month-basis). Landlords typically prorate the final month and return the balance of any last-month deposit collected upfront.',
    },
  ],
  'rental-property-calculator': [
    {
      q: 'What is a good cap rate?',
      a: 'It depends on market and leverage: 4-6% is common in appreciation-driven coastal cities, 8%+ in slower-growth Midwest markets. Cap rate grades the asset before financing — compare it against your borrowing rate; deals rarely work when cap rate sits below the mortgage rate without a big down payment.',
    },
    {
      q: 'What is the 1% rule in real estate?',
      a: 'Monthly rent should equal at least 1% of the purchase price — a screen from a higher-yield era. This sample shows 0.73% and still cash-flows positively; treat the rule as a fast filter for sorting listings, then let NOI, cash flow, and cash-on-cash decide.',
    },
    {
      q: 'How do you calculate cash-on-cash return?',
      a: 'Annual pre-tax cash flow divided by total cash invested. With $2,078 of annual flow on $81,000 of cash in (down payment plus closing costs), the return is 2.57%. It measures your actual leverage — the same property all-cash shows a different number.',
    },
    {
      q: 'What expenses should a landlord budget?',
      a: 'Property tax, insurance, maintenance, property management (8-10% of rent if outsourced), leasing fees, and vacancy of 5-8%. The 50% rule of thumb — half of gross rent goes to expenses before the mortgage — remains the sanest first-pass filter.',
    },
  ],
  'house-flip-calculator': [
    {
      q: 'What is the 70% rule in house flipping?',
      a: 'Pay at most 70% of the after-repair value minus repair costs: on a $450,000 ARV with $60,000 of repairs, that is a $255,000 maximum purchase. The margin covers hard-money interest, closing costs on both ends, and the rehab running over.',
    },
    {
      q: 'How much profit should a house flip make?',
      a: 'Experienced flippers target 10-20% of ARV after all costs — $45,000-90,000 on a $450,000 ARV — because thinner margins evaporate with one surprise. This sample projects $73,200 (21.2% ROI), squarely in the professional zone.',
    },
    {
      q: 'What are holding costs on a flip?',
      a: 'Everything the property burns monthly while you own it: taxes, vacant-property insurance (2-3× normal), utilities, and hard-money interest at 10-12% plus points. Six months at $1,200 plus loan interest is typical carry — budget one month more than the contractor promises.',
    },
    {
      q: 'Do I need a hard money loan to flip houses?',
      a: 'No, but most flippers use them: banks rarely finance distressed properties, and hard money closes in days based on the deal, not your W-2. The cost — points plus double-digit rates — is exactly why the 70% rule exists: it reserves the spread that pays for that money.',
    },
  ],
  'college-savings-calculator': [
    {
      q: 'Why not just use regular inflation?',
      a: 'US college costs have historically risen 4-6% per year while general CPI runs closer to 2-3%, so a target built on ordinary inflation almost guarantees a shortfall in the enrollment year. The 5% default comes from that historical range.',
    },
    {
      q: 'How is the total cost computed?',
      a: 'Today\'s annual cost is inflated to the enrollment year, and each later academic year inflates one more year - a four-year degree is the sum of four rising numbers, not the first year times four.',
    },
    {
      q: 'How are current savings and monthly contributions handled?',
      a: 'Existing savings compound monthly to enrollment, and monthly contributions use the future value of an ordinary annuity. The remaining gap divided by the annuity factor is the required monthly amount.',
    },
    {
      q: 'What are the tax advantages of a 529 plan?',
      a: 'Growth withdrawn for qualified education expenses is federally tax-free, and many states add deductions. The 529 is just the container - this tool computes how much to save, whether the money sits in a 529, Coverdell, or a taxable account.',
    },
  ],
  '401k-match-calculator': [
    {
      q: 'What does "50% up to 6%" mean?',
      a: 'For every dollar you contribute, the employer adds 50 cents, but only on the first 6% of your salary. At $75,000 contributing the full 6%, the maximum match is $2,250 per year; contributing only 4% earns $1,500.',
    },
    {
      q: 'How is the "free money left on table" calculated?',
      a: 'Maximum possible match minus the match you actually receive. It compounds year after year - a decade below the 6% threshold at the example salary is $7,500 of declined employer money, before any growth.',
    },
    {
      q: 'What is the 2025 contribution limit?',
      a: 'The elective deferral limit is $23,500 for employees under 50 in 2025, with additional catch-up room at 50-59 and 60+. Employer matching is paid on top and does not consume your personal limit, though combined contributions face a separate pay-percentage ceiling.',
    },
    {
      q: 'Does vesting affect the result?',
      a: 'Yes - the tool shows what the employer deposits; if you leave before vesting is complete, part or all of the match can be forfeited. Common schedules are 3-5 year cliffs or annual graded vesting per your plan document.',
    },
  ],
  'social-security-break-even-calculator': [
    {
      q: 'How much do I lose by claiming at 62?',
      a: 'It depends on your full retirement age: those born in 1960 or later have an FRA of 67 and receive 70% at 62; with an FRA of 66 it is 75%. The rule is 5/9 of a percent per month for the first 36 early months, then 5/12 per month.',
    },
    {
      q: 'How much does waiting until 70 pay?',
      a: 'Those born in 1943 or later earn 2/3 of a percent per delayed month - 8% per year. An FRA of 67 reaches 124% of PIA at 70; an FRA of 66 tops out at 132%. No further credits accrue past 70.',
    },
    {
      q: 'What does the break-even age mean?',
      a: 'Claiming early pays smaller checks for more months; delaying pays larger checks that start later. The break-even age is where the cumulative totals cross - outlive it and delaying won; die before it and claiming early paid more. This tool solves the crossings month-precisely.',
    },
    {
      q: 'What does this model simplify?',
      a: 'Benefits are nominal: no COLA, no taxes, no investment returns on early benefits, and no spousal or survivor effects - each of those moves the real crossover. It answers the core question of where the cumulative curves intersect at these monthly amounts.',
    },
  ],
  'student-loan-payment-calculator': [
    {
      q: 'How are the three payments calculated?',
      a: 'The standard plan amortizes over 10 years (120 payments); extended stretches to 25 years (300); graduated also runs 10 years but starts lower and rises every two years - this tool solves the exact starting payment with 25% biennial steps.',
    },
    {
      q: 'What is the grace-period capitalization trap?',
      a: 'Federal loans have 6 months after graduation: subsidized loans have the government paying interest, while unsubsidized loans accrue it and add it to principal at repayment - you then pay interest on that extra principal for 10-25 years.',
    },
    {
      q: 'How much does extending to 25 years really cost?',
      a: 'With $35,000 at 6.8% and 6 grace months: the 10-year payment is about $416 with roughly $13,800 in interest; over 25 years it drops to about $251 but interest climbs to about $39,200 - the extra $25,000 is the price of the easier payment.',
    },
    {
      q: 'Does this work for private student loans?',
      a: 'The math does - any fixed-payment loan computes the same way. But private loans do not offer the federal graduated or extended plans and often accrue interest during school; your promissory note governs.',
    },
  ],
  'car-lease-calculator': [
    {
      q: 'How do I convert money factor to APR?',
      a: 'Money factor × 2400 ≈ the equivalent annual rate: 0.00225 is about 5.4%. It is an industry convention rather than exact math, but it is enough to decode fine print - when a salesperson says the rate is low, ask for the money factor and multiply.',
    },
    {
      q: 'What makes up the monthly payment?',
      a: 'Two parts: depreciation = (adjusted cap cost − residual value) ÷ months, and the rent charge = (adjusted cap cost + residual value) × money factor. Note the plus sign - you are financing the whole car, not just the part you consume.',
    },
    {
      q: 'What is adjusted cap cost?',
      a: 'Negotiated price plus fees (like the acquisition fee) minus down payment or trade-in credit. Dealers often capitalize fees without highlighting them; verify line by line before signing - it is the usual source of inflated payments.',
    },
    {
      q: 'Is buying the car at lease end worth it?',
      a: 'Usually not arithmetically: total lease cost plus residual almost always exceeds buying the same car from the start (the tool shows both). Buying out makes sense when the residual is below market, the car is known-good, or you value skipping the shopping trip.',
    },
  ],
  'ev-charging-cost-calculator': [
    {
      q: 'How is cost per mile calculated?',
      a: 'Blended rate ÷ efficiency in miles per kWh. With $0.17 home, $0.45 public, and 80% home charging, the blended rate is about $0.226; divided by 3.5 miles/kWh that is about $0.065 per mile - versus $0.117 for a 30-MPG gas car at $3.50.',
    },
    {
      q: 'What efficiency should I enter?',
      a: 'Typical EVs range 2.5-4.5 miles per kWh: compacts around 3.5-4.5, large SUVs and pickups 2-3. Winter can knock off another 20-30%. Use the real figure from your dashboard or app, not the EPA peak.',
    },
    {
      q: 'Why does public charging matter so much?',
      a: 'DC fast charging commonly costs 2-4× the home rate. At 12,000 miles a year and 3.5 miles/kWh, every 10% of mileage moved from home to $0.45 public charging adds roughly $95 a year - and "occasional" fast charging becomes a habit quickly.',
    },
    {
      q: 'What is not included?',
      a: 'Time-of-use rates (off-peak plans can cut home charging sharply), one-time home charger installation, insurance and maintenance differences, and battery degradation. As a fuel comparison it is accurate; full cost of ownership needs those added.',
    },
  ],
  'rent-budget-calculator': [
    {
      q: 'How do I use the 30% rule?',
      a: 'Keep rent under 30% of your monthly income - traditionally gross. Above that, US housing policy considers you rent-burdened. At $6,000 a month the cap is $1,800. It is a screening tool, not a law: expensive cities often force a breach.',
    },
    {
      q: 'Why is the 50/30/20 cap 50% instead of 30%?',
      a: 'The 50/30/20 budget splits after-tax income into needs, wants, and savings, and rent lives inside the needs bucket. The bucket is 50% total, but rent is only one need - food, commuting, and insurance come from the same bucket. In practice aim for 25-30% of net for rent.',
    },
    {
      q: 'How different are gross and net?',
      a: 'The 30% rule is traditionally applied to gross income; 50/30/20 works on after-tax. When you choose gross, this tool estimates net at about 22% effective tax and shows both - that band is your decision range.',
    },
    {
      q: 'Is going over 30% automatically bad?',
      a: 'No, but compensate deliberately: rent at 40% of net usually pushes savings below 20% - either accept a low-saving phase, cut transport and food, or move farther out. The rule makes the trade-off explicit; it does not decide for you.',
    },
  ],
  'christmas-budget-calculator': [
    {
      q: 'What split does the budget use?',
      a: 'A typical split is gifts 70%, decorations 15%, and food or hosting 15%. Inside the gift pool, weighting family 60%, friends 30%, and coworkers 10% matches how closeness works - the structure most holiday spending guides converge on.',
    },
    {
      q: 'How are per-person amounts calculated?',
      a: 'Each group\'s share of the gift pool divided by its headcount. On an $800 budget the pool is $560: family gets $336 (5 people ≈ $67 each), friends $168 ($28 each), coworkers $56 ($14 each). Change a count and the per-person figure updates.',
    },
    {
      q: 'How much "should" I spend per person?',
      a: 'There is no universal answer - the budget method is total sets the frame, proportions set the structure, headcount sets the unit price. Fix what you can afford first and let the calculator allocate, rather than deciding in the store aisle.',
    },
    {
      q: 'How do I avoid the January bill shock?',
      a: 'Set the total in October, finish the list before Black Friday, and keep any single purchase under 1.5× the planned per-person amount. Put the calculator\'s numbers on your shopping list - last-week add-ons are what blow the budget.',
    },
  ],
  'one-rep-max-calculator': [
    {
      q: 'Which formula should I trust?',
      a: 'Up to five reps the three formulas agree within 2-4%: Epley reads highest, Lander and Brzycki slightly more conservative. The average of all three is a sane default; take the lowest estimate for conservative training blocks.',
    },
    {
      q: 'Why estimate instead of testing a true max?',
      a: 'A true 1RM test is deeply fatiguing, carries real injury risk, and needs a spotter. Estimating from a hard set of ten reps or fewer typically lands within 5-10% — plenty accurate mid-program at a fraction of the recovery cost.',
    },
    {
      q: 'What percentage should I train at?',
      a: 'Strength phases live at 85-95% for 1-3 reps; hypertrophy responds best to 65-80% for 6-12; speed work and deloads sit at 50-60%. The table keys off the three-formula average, so log which basis you used to stay consistent.',
    },
    {
      q: 'Is it accurate for high-rep sets?',
      a: 'Beyond 10-12 reps muscular endurance dominates and every formula drifts upward — Epley most of all. To refresh your estimate, re-test with a weight you can lift 3-5 times rather than extrapolating a 15-rep set.',
    },
  ],
  'race-time-predictor': [
    {
      q: 'How accurate is the Riegel formula?',
      a: 'For adjacent distances and well-trained runners it usually lands within ±5%. Error grows with the size of the jump: projecting a marathon from a 5K is only the ceiling for "if I also did the long runs".',
    },
    {
      q: 'Why does the marathon prediction look too fast?',
      a: 'Riegel extrapolates the fatigue curve but models no fueling, no wall, and no glycogen debt. First-time marathoners should add 3-5% and plan 60-90 g of carbohydrate per hour of racing.',
    },
    {
      q: 'What does the 1.06 exponent mean?',
      a: 'It is the fatigue exponent: 1.0 would mean your pace never slows with distance. Riegel fitted 1.06 to large race databases in 1981; elite runners sit nearer 1.03-1.05 and novices above it.',
    },
    {
      q: 'Can I use training runs?',
      a: 'Prefer race efforts or all-out time trials: solo training typically runs 2-5% slower than race day (no rivals, no adrenaline, no aid stations), which drags every prediction down with it.',
    },
  ],
  'vo2-max-calculator': [
    {
      q: 'Which method is better?',
      a: 'The Cooper 12-minute run is the field substitute for what labs measure directly and typically lands within ±3-5 ml/kg/min; the heart-ratio method (Uth-Sørensen) only captures cardiovascular efficiency and varies more between people. Use Cooper whenever you can run it.',
    },
    {
      q: 'What counts as a good VO2 max?',
      a: 'Values in the 40s already beat most age peers; the 50s are competitive-runner territory; elites reach 70-85 for men and 60-75 for women. The bands slide down with age — a 45 at 40 is not a 45 at 25.',
    },
    {
      q: 'How do I run a Cooper test?',
      a: 'Warm up properly, then cover the maximum distance in exactly 12 minutes on a measured course. Bad pacing (going out too hard in the first two minutes) visibly skews the result; avoid hard training in the prior 24 hours.',
    },
    {
      q: 'Can I improve my VO2 max?',
      a: 'Yes — a large Zone 2 base plus 1-2 weekly interval sessions at 90-95% of max heart rate. Beginners commonly gain 10-15% in 8-12 weeks; gains shrink with training age as genetics set much of the ceiling.',
    },
  ],
  'body-surface-area-calculator': [
    {
      q: 'Why are there two formulas?',
      a: 'DuBois (1916) was fitted from wax molds of just nine subjects; Mosteller (1987) simplified it to √(height × weight / 3600). They agree within about 2% for typical adults — Mosteller reads slightly lower at extreme body sizes.',
    },
    {
      q: 'What is BSA used for?',
      a: 'Chemotherapy dosing in mg/m², cardiac index (cardiac output ÷ BSA, normal 2.5-4.0 L/min/m²), pediatric fluid rules, burn-area charts, and some renal function conversions.',
    },
    {
      q: 'Is it accurate at very high BMI?',
      a: 'Both formulas underestimate surface area in severe obesity. Oncology protocols commonly cap BSA at 2.2-2.5 m² to avoid overdosing — dosing decisions always belong to the treating institution.',
    },
    {
      q: 'Can I enter pounds and inches?',
      a: 'The constants here are calibrated for cm and kg, so convert first (1 in = 2.54 cm, 1 lb ≈ 0.4536 kg). For imperial inputs the equivalent Mosteller form is √(lb × in / 3131).',
    },
  ],
  'waist-to-height-ratio-calculator': [
    {
      q: 'Where exactly do I measure my waist?',
      a: 'At the midpoint between your lowest rib and the top of your hip bone, tape horizontal and snug without digging in, reading after a normal exhale. Measuring over clothing or while sucking in are the classic errors and shave 0.03-0.05 off the ratio.',
    },
    {
      q: 'Why is 0.5 the threshold?',
      a: 'Multiple systematic reviews (notably Ashwell\'s) support waist-at-half-height as the flag for central obesity and rising insulin resistance. Between 0.4 and 0.5 metabolic markers look best; 0.5-0.6 climbs; above 0.6 risk is clearly elevated.',
    },
    {
      q: 'How does WHtR compare to BMI?',
      a: 'BMI cannot tell muscle from visceral fat — muscular people get flagged as overweight while "normal weight, big waist" gets missed entirely. WHtR measures abdominal storage directly and needs no age or sex tables.',
    },
    {
      q: 'Does it work for children and older adults?',
      a: 'From about age 5 the same 0.5 cutoff works as a screen, which is its practical advantage over BMI percentiles. Below that age use age-specific percentiles and check with a pediatrician when in doubt.',
    },
  ],
  'steps-to-miles-calculator': [
    {
      q: 'How accurate is estimating stride from height?',
      a: 'Walking stride ≈ height × 0.414 (the Hatano relationship), typically within about 10%. For precision, walk 10 steps at normal pace, measure the distance, and divide by 10 — or count steps around a full 400 m track lap.',
    },
    {
      q: 'How many steps are in a mile?',
      a: 'Roughly 2,000-2,500 for adults, averaging about 2,100: taller walkers take fewer steps per mile. In the other direction, 10,000 steps come to about 4-5 miles (7-8 km).',
    },
    {
      q: 'Why does this tool not calculate calories?',
      a: 'Calories depend on body weight, terrain, and pace — a different question from distance conversion, which is all this tool does. For the energy side, pair it with the steps-to-calories calculator (see Next Steps below).',
    },
    {
      q: 'Do fitness trackers and phones count the same steps?',
      a: 'No. Wrist devices count arm swings (dishwashing included) and miss stroller-pushing; phones undercount slow walking by 5-10%. A 10-20% disagreement between devices on the same day is normal — track the trend on one device.',
    },
  ],
  'weight-loss-goal-calculator': [
    {
      q: 'Why 7,700 kcal per kilogram?',
      a: 'It converts the Wishnofsky convention (3,500 kcal per pound) into metric — a working rule, not physics. Real values run about 5,000-9,000 kcal depending on adherence and how much your metabolism adapts as you diet.',
    },
    {
      q: 'What happens if my deficit is over 1,000 kcal?',
      a: 'It gets hard to sustain, muscle-loss risk climbs, and training performance drops. Most people do better at a 500-750 kcal deficit while keeping protein at 1.6-2.2 g per kg to protect lean mass.',
    },
    {
      q: 'Why did I lose weight so fast in week one?',
      a: 'The early drop is mostly water and glycogen: each gram of stored carbohydrate holds about 3 g of water, so cutting carbs flushes 1-2 kg in days. That is not fat — do not extrapolate week-one speed to the whole plan.',
    },
    {
      q: 'What weekly rate should I choose?',
      a: 'The common guidance is 0.5-1% of body weight per week — for most people 0.25-0.75 kg. Stay at the low end if you train hard or are already lean; slower rates measurably improve your odds of keeping the weight off.',
    },
  ],
  'fiber-intake-calculator': [
    {
      q: 'Why does the target drop after age 50?',
      a: 'These are the Institute of Medicine Adequate Intakes, which scale with average energy intake: 30 g for men and 21 g for women aged 51+. If you are still active and eating more, the 14 g per 1,000 kcal rule may exceed the AI — which is fine.',
    },
    {
      q: 'What about soluble vs insoluble fiber?',
      a: 'Both count toward the total. Oats, barley, and legumes skew soluble (cholesterol, blood sugar); wheat bran and vegetables skew insoluble (regularity). A varied diet delivers both without any bookkeeping.',
    },
    {
      q: 'Can I cover the gap with supplements?',
      a: 'Food first — it brings potassium, magnesium, and antioxidants along. If you supplement, psyllium husk has the strongest evidence; inulin-type fructanes ferment quickly and cause gas when overdosed, so start small.',
    },
    {
      q: 'Is it possible to eat too much fiber?',
      a: 'Above roughly 60-70 g per day, bloating and gas are common and mineral absorption (iron, zinc) can suffer. Increase by about 5 g per week and drink extra water — your microbiome adapts within weeks.',
    },
  ],
  'paypal-fee-calculator': [
    {
      q: 'How much does PayPal charge per transaction?',
      a: 'The standard US commercial rate is 3.49% + $0.49 per transaction. International buyers add a 1.50% cross-border fee, and currency conversion adds roughly a 3-4% spread on top — often the biggest hidden cost.',
    },
    {
      q: 'How do I calculate how much to charge so I net a specific amount?',
      a: 'Divide backwards: charge = (target net + fixed fee) ÷ (1 − percentage rate). To net $100 at 3.49% + $0.49, charge $100.49 ÷ 0.9651 ≈ $104.12. Switch the calculator to reverse mode and it does this automatically.',
    },
    {
      q: 'Does PayPal charge a fee for friends and family?',
      a: 'US Friends & Family payments funded by PayPal balance or bank are free, but card-funded ones cost the sender 2.9% + $0.30. Sellers must never use it — it offers no seller protection.',
    },
    {
      q: 'Why does my effective rate differ from 3.49%?',
      a: 'The $0.49 fixed fee dominates small payments: on a $10 sale it alone is 4.9%, pushing the effective rate near 8.4%. On $1,000 the same fee is negligible and the effective rate approaches the headline 3.49%.',
    },
  ],
  'etsy-fee-calculator': [
    {
      q: 'How much does Etsy take per sale?',
      a: 'Etsy charges a $0.20 listing fee per item, a 6.5% transaction fee on the item price plus shipping, and payment processing (3% + $0.25 in the US). Offsite Ads adds 15% (12.5% above $10k/yr) on attributed orders — a typical $29 order with ads runs near 26% total.',
    },
    {
      q: 'What are Offsite Ads and when do they apply?',
      a: "Offsite Ads is Etsy's off-platform advertising. If a buyer clicks an ad on Google or social media before purchasing, Etsy adds 15% of the order total — 12.5% if you sell more than $10k in a 12-month period, at which point participation becomes mandatory.",
    },
    {
      q: 'Do Etsy fees apply to shipping?',
      a: 'Yes — the 6.5% transaction fee and payment processing are calculated on the item price plus whatever shipping you charge. Offering "free shipping" by building it into the price changes only what the buyer sees, not what Etsy takes.',
    },
    {
      q: 'How can I lower my Etsy fees?',
      a: 'The controllable lever is Offsite Ads (opt out while under $10k in 12-month sales), plus catalog mix: listing fees are fixed per item, so fewer, higher-priced listings waste less in $0.20 increments. Processing rates vary by seller country, so set up your bank and shop country deliberately.',
    },
  ],
  'amazon-seller-fee-calculator': [
    {
      q: 'What percentage does Amazon take?',
      a: 'Most categories carry a 15% referral fee, though it ranges from 8% (consumer electronics) to 45% (Amazon device accessories), with a $0.30-per-item minimum. FBA fulfillment is a separate per-unit fee set by size tier.',
    },
    {
      q: 'What is the FBA fulfillment fee?',
      a: "It's Amazon's charge for picking, packing, and shipping your order — roughly $2-$7 per unit for standard-size items as of 2026, set by size tier and weight. Bulky items can pay far more, so always check the current rate card before pricing.",
    },
    {
      q: 'Is FBA cheaper than fulfilling myself (FBM)?',
      a: 'For small, light, fast-moving items FBA usually wins on per-unit cost and Buy Box visibility. For large, slow, or low-margin items the fee can swallow the margin — run both numbers before committing inventory.',
    },
    {
      q: 'What costs does this calculator leave out?',
      a: 'Monthly storage fees (spiking in Q4), long-term storage surcharges, ad spend, returns processing, and inbound shipping unless you fold them into the prep cost field. A common rule of thumb: leave 15-20% headroom under your calculated margin.',
    },
  ],
  'square-fee-calculator': [
    {
      q: 'What are Square\u2019s fees?',
      a: 'Square US pricing: 2.6% + 10¢ for tapped, dipped, or QR payments in person; 2.9% + 30¢ for Square Online; 3.5% + 15¢ for manually keyed-in cards; 3.3% + 30¢ for invoices paid by card. Standard plans have no monthly fee.',
    },
    {
      q: 'Why is my effective rate higher than 2.6%?',
      a: 'The 10¢ fixed fee dominates small tickets: on a $5 coffee it adds 2%, making the effective rate 4.6%. Average across a full day of mixed tickets for the number that actually matters.',
    },
    {
      q: 'How do I pass Square fees to customers?',
      a: "Many US states restrict card surcharges and Square enforces its own rules — a common workaround is a cash-discount price. To net a target, switch to reverse mode: charge = (net + fixed fee) ÷ (1 − rate). Check your state's surcharge law first.",
    },
    {
      q: 'Does Square charge a monthly fee?',
      a: 'No — the standard plan charges only per transaction, with no monthly minimum, setup, or PCI-compliance fees. Optional paid subscriptions add loyalty programs and team management, but basic card acceptance stays pay-as-you-go.',
    },
  ],
  'youtube-money-calculator': [
    {
      q: 'What is RPM and how is it different from CPM?',
      a: 'RPM (revenue per mille) is what YOU earn per 1,000 views after YouTube keeps its 45% cut of ads; CPM is what advertisers pay per 1,000 ad impressions. RPM is always the lower number and the honest one for channel revenue.',
    },
    {
      q: 'What RPM should I use?',
      a: 'Long-form finance and business content typically clears $8-15, tech $4-10, general vlogs $2-5, gaming $1.5-3, and Shorts a fraction of that ($0.05-0.15). Once monetized, your own YouTube Studio RPM report replaces every estimate.',
    },
    {
      q: 'How many views do you need to make money on YouTube?',
      a: 'You need 1,000 subscribers plus 4,000 public watch hours (or 10 million Shorts views in 90 days) to join the Partner Program. At a $4 RPM that is roughly $4 per 1,000 views, so 100,000 monthly views ≈ $400/month.',
    },
    {
      q: 'Does AdSense pay for all views?',
      a: 'No — only monetized playbacks with served ads earn. Repeat views, ad-blocker sessions, and restricted or demonetized content earn nothing, which is why real checks often land 10-20% under naive view-times-RPM estimates.',
    },
  ],
  'nps-calculator': [
    {
      q: 'How is NPS calculated?',
      a: 'Subtract the percentage of detractors (0-6) from the percentage of promoters (9-10). Passives (7-8) count in the denominator but cancel out. With 250 promoters, 90 passives, and 60 detractors: 62.5% − 15% = 47.5, rounded to +48.',
    },
    {
      q: 'What is a good NPS score?',
      a: "Bain's widely used reading: 0-30 is good, 31-70 is great, 71+ is excellent, and anything negative means detractors outnumber promoters. Most industries average somewhere in the 30s — compare against your own sector, not Apple.",
    },
    {
      q: 'Why do passives not count in the score?',
      a: 'NPS measures active recommendation, not satisfaction. Passives are satisfied but unenthusiastic — they neither promote nor damage you, so they only dilute the denominator. Converting even a few passives into promoters moves the score sharply.',
    },
    {
      q: 'How many responses do I need for a reliable NPS?',
      a: 'Treat NPS as a margin-of-error statistic. With 100 responses the margin is roughly ±8-10 points; 400 responses bring it near ±5. Track the trend across waves rather than reacting to single small-sample swings.',
    },
  ],
  'conversion-rate-calculator': [
    {
      q: 'How do I calculate conversion rate?',
      a: 'Divide conversions by visitors (or sessions) and multiply by 100: 120 conversions from 5,000 visitors = 2.4%. Use the same denominator consistently — sessions and unique visitors produce different rates.',
    },
    {
      q: 'What is a good conversion rate?',
      a: 'Typical e-commerce sits near 2-3%; well-optimized stores clear 5%+. Landing pages for a warm, targeted audience often reach 10%+. Benchmark against your own traffic quality, not industry averages.',
    },
    {
      q: 'Is it cheaper to raise conversion or buy more traffic?',
      a: 'Mathematically interchangeable (+20% rate equals +20% traffic) but not in cost: rate gains compound on the ad spend you already pay, while traffic gains scale the spend. Improve rate first, then reinvest.',
    },
    {
      q: 'How much traffic do I need for more conversions?',
      a: 'At the current rate, extra conversions need proportionally extra visitors: +24 conversions at 2.4% requires about +1,000 visitors. That linear math is exactly why conversion improvements are so valuable — they bend the line.',
    },
  ],
  'gym-cost-per-visit-calculator': [
    {
      q: 'How do I calculate cost per visit?',
      a: 'Divide your effective monthly cost by how many times you actually go: a $45/month plan used 8 times costs $5.63 per visit. For annual plans, divide the payment by 12 first to get the true monthly figure.',
    },
    {
      q: 'How many gym visits make a membership worth it?',
      a: 'Divide the monthly fee by your gym\u2019s drop-in rate: $45 ÷ $15 = 3 visits/month just to break even. Survey data keeps finding the average member goes about 4 times a month, so most people are only marginally ahead.',
    },
    {
      q: 'Are annual gym memberships worth it?',
      a: 'They usually run 15-25% cheaper than paying monthly, but only if you keep going. If your visit habit collapses, you have prepaid for nothing — a monthly plan is the honest test before committing to a year.',
    },
    {
      q: 'What counts as a visit?',
      a: 'Count the sessions you realistically complete, not the ones you plan. Check-ins, shower-and-leave days, and twice-a-day sessions all distort the math in different directions — pick one definition and stay consistent.',
    },
  ],
  'concrete-calculator': [
    {
      q: 'How many 80 lb bags of concrete for a 10×10 slab?',
      a: 'At 4 inches thick, a 10×10 slab holds 33.3 ft³ — about 1.23 cubic yards. With the 10% waste margin you order 1.36 yd³, which is 62 eighty-pound bags if you are mixing by hand.',
    },
    {
      q: 'How many bags make one cubic yard?',
      a: 'An 80 lb bag yields 0.60 ft³, so a full yard takes 45 bags — or 61 sixty-pound bags, or 90 forty-pound bags. Past one yard, ready-mix delivered by truck is cheaper and far less labor.',
    },
    {
      q: 'Why add a 10% waste margin?',
      a: 'Spills, an uneven subgrade, and over-dug edges all eat volume. Ten percent is the trade standard for formed work; bump it to 15% for hand-dug footings where dimensions wander.',
    },
    {
      q: 'How does it calculate columns and steps?',
      a: 'Round columns use π × (diameter ÷ 2)² × height × quantity. Steps are treated as triangular prisms — tread run × rise ÷ 2, times width, per step — which matches the pour for steps formed against the house.',
    },
  ],
  'mulch-calculator': [
    {
      q: 'How deep should mulch be?',
      a: 'Two to three inches is the sweet spot for beds: enough to suppress weeds and hold moisture, thin enough for air and water to reach roots. Going past 4 inches can suffocate roots and invite rot.',
    },
    {
      q: 'How many bags is a cubic yard?',
      a: 'One yard is 27 ft³ — fourteen 2-ft³ bags or nine 3-ft³ bags. Bulk delivery usually wins on price once a project passes about six yards.',
    },
    {
      q: 'Why does depth matter so much to cost?',
      a: 'Volume scales linearly with depth: going from 2 to 4 inches doubles the order. The depth comparison chart shows the cost of each common depth at your bag price.',
    },
    {
      q: 'Is playground mulch different?',
      a: 'Yes. Play areas need 9-12 inches of certified engineered wood fiber tested for impact attenuation — decorative mulch is not rated for falls and should never substitute.',
    },
  ],
  'gravel-calculator': [
    {
      q: 'How many tons in a cubic yard of gravel?',
      a: 'Crushed stone runs about 2,700 lb (1.35 tons) per yard, pea gravel about 2,600 lb, dry sand about 2,500 lb. Suppliers sell by weight, so convert volume to tons before comparing quotes.',
    },
    {
      q: 'How thick should a gravel driveway be?',
      a: 'Four to six inches of compacted crushed stone over decent subgrade for passenger cars; heavier vehicles want 6-12 inches with larger stone at the base. Keep finish layers near pea-gravel size.',
    },
    {
      q: 'Gravel vs mulch — which calculator?',
      a: 'Use this one when weight and compaction matter (driveways, bases, drainage); mulch work is sold and spread by volume. The two tools even price differently: per ton vs per bag.',
    },
    {
      q: 'How much does a dump truck deliver?',
      a: 'Small end-dumps carry 1-5 yards, full-size tri-axles 10 or more (roughly 13-14 tons of crushed stone). Surcharges kick in past the truck tier, so matching load to project saves a second delivery fee.',
    },
  ],
  'drywall-calculator': [
    {
      q: 'Should I use 4×8 or 4×12 sheets?',
      a: 'Twelve-foot sheets mean fewer joints — about a quarter less taping on 8-ft walls — but need two people and strain handling. Solo first-timers usually pick 4×8; crews with lifts hang 4×12 horizontally.',
    },
    {
      q: 'Why the 10% waste factor?',
      a: 'Cutouts at openings, broken corners, and odd angles consume stock; 10% is the standard allowance, 15% if rooms have many bump-outs. Sheets come in whole units, so the count always rounds up.',
    },
    {
      q: 'How is joint compound estimated?',
      a: 'At roughly one gallon per 100 ft² for tape plus two finish coats — so a typical room needs one 4.5-gallon pail. Textured finishes add 25-50% on top.',
    },
    {
      q: 'What about screws?',
      a: 'About one screw per square foot (every 12 inches on ceilings, 16 on walls) works out to a pound per 250 ft². Screws are cheap; buy an extra box rather than stretch spacing.',
    },
  ],
  'roofing-calculator': [
    {
      q: 'How do I measure my roof from the ground?',
      a: 'Multiply building length × width — the footprint, both slopes included — then apply the pitch factor. For a 30×20 footprint at 6/12, that is 600 × 1.118 ≈ 671 ft² of actual roof.',
    },
    {
      q: 'What is a roofing square?',
      a: 'One hundred square feet of roof area — the trade unit for materials and labor bids. Three bundles of 3-tab shingles cover one square, which is why bundles = squares × 3.',
    },
    {
      q: 'Why does pitch change the area?',
      a: 'A steeper slope covers more surface over the same footprint. The multiplier rises from 1.054 at 4/12 to 1.25 at 9/12 — a 30×20 roof gains about 1.2 squares, or 3-4 extra bundles, between those pitches.',
    },
    {
      q: 'Does 3 bundles per square always hold?',
      a: 'Only for standard 3-tab. Architectural and premium shingles are thicker and often need 4-5 bundles per square — check the wrapper and adjust before ordering.',
    },
  ],
  'fence-calculator': [
    {
      q: 'How far apart should fence posts be?',
      a: 'Six to eight feet for privacy panels and pickets, 8-10 for post-and-rail. Wider spacing saves posts and concrete but sags mid-span; never exceed the panel rating.',
    },
    {
      q: 'How much concrete per post hole?',
      a: 'A 10-inch-diameter, 24-inch-deep hole is about 1.09 ft³ — nearly two 80-lb bags. The tool sizes this from your hole dimensions and multiplies by post count.',
    },
    {
      q: 'How deep should posts go?',
      a: 'Below the frost line and at least one-third of the above-ground height — a 6-ft fence wants 2-3 ft buried. Crown the concrete above grade and slope it away so water does not pool at the post.',
    },
    {
      q: 'Why does picket count ignore posts?',
      a: 'Pickets fasten to rails, not posts, and field cuts absorb the difference at ends and corners — the count is total run ÷ picket-plus-gap width, rounded up.',
    },
  ],
  'paver-calculator': [
    {
      q: 'How many 4×8 pavers in a square foot?',
      a: 'Four and a half — so a 16×12 patio (192 ft²) needs 864 exact pieces plus the 10% waste, ordering 951. Bigger pavers drop the count fast: 12×12 needs just one per foot.',
    },
    {
      q: 'How thick should the base be?',
      a: 'Four inches of compacted crushed stone for patios and walkways; driveways want 6-12 inches. The stone is structural — sand is only ever a 1-inch bedding layer.',
    },
    {
      q: 'Why only 1 inch of bedding sand?',
      a: 'Thicker sand beds hold water, creep under load, and develop ruts. Screed exactly 1 inch, lay pavers, then sweep polymeric sand into the joints.',
    },
    {
      q: 'Does the waste margin matter?',
      a: 'Yes — cuts at edges, broken corners, and pattern changes consume stock. Ten percent covers straight layouts; herringbone and diagonal patterns cut more, so allow 15%.',
    },
  ],
  'deck-board-calculator': [
    {
      q: 'How do I calculate decking boards?',
      a: 'Deck area divided by board coverage: (width + gap) in feet per lineal foot. A 16×12 deck with 5.5-inch boards and a 1/8-inch gap needs 410 linear feet — 29 sixteen-footers with waste.',
    },
    {
      q: 'What gap should I leave?',
      a: 'An 1/8-1/4 inch for pressure-treated lumber (it shrinks as it dries); 3/16 inch or more for composite per the manufacturer spec. Butt treated boards tight and shrinking opens the gap; composite never shrinks, so the gap must be built in.',
    },
    {
      q: 'How is joist count calculated?',
      a: 'Deck length ÷ on-center spacing, plus one. At 16 inches OC a 16-ft deck carries 13 joists. 24-inch OC only works with boards perpendicular to joists.',
    },
    {
      q: 'Deck boards vs indoor flooring?',
      a: 'This tool assumes exterior structure: exposed fasteners, gaps for drainage, 16-inch OC framing, and 10% waste for end splits. Interior flooring uses tighter tolerances and finish materials — that is the flooring calculator job.',
    },
  ],
  'dividend-calculator': [
    {
      q: 'How is dividend yield calculated?',
      a: 'Divide the annual dividend per share by the current share price — $2.40 on a $50 stock is a 4.8% yield. Most US payers distribute quarterly, so multiply the quarterly payout by 4 before entering it.',
    },
    {
      q: 'How does the DRIP projection work?',
      a: 'Each year your dividends buy new shares at the price you entered, and those shares generate their own dividends next year, so income compounds annually. The model holds the share price constant and grows the dividend at your growth rate — it shows the power of reinvestment, not a price forecast.',
    },
    {
      q: 'What is a good dividend yield?',
      a: 'The S&P 500 has historically averaged 1.3-2%; yields far above 6-8% often signal a payout at risk (a dividend trap). A long record of consistent growth beats a fat starting yield.',
    },
    {
      q: 'Are dividends guaranteed?',
      a: 'No — boards can cut or suspend them any quarter (2009 and 2020 both saw waves of cuts). The growth input assumes steady raises; stress-test your plan by setting it to 0%.',
    },
  ],
  'dca-calculator': [
    {
      q: 'How is the average cost computed?',
      a: 'Each contribution buys shares at that moment price, and total cash divided by total shares gives your average cost. On the assumed linear path it lands slightly below the midpoint price when markets fall, because more shares are bought cheaply.',
    },
    {
      q: 'When does DCA beat a lump sum?',
      a: 'Mechanically, whenever the price ends below where it started — the calculator shows the gap directly. Historically lump sum wins about two-thirds of the time because markets rise more often than they fall; DCA\'s real edge is discipline and buying the dips.',
    },
    {
      q: 'Does dollar cost averaging reduce risk?',
      a: 'It spreads entry-point risk across time and removes timing anxiety, but the cash held back for later buys misses early gains. It is a discipline tool more than a return maximizer.',
    },
    {
      q: 'What contribution frequency should I pick?',
      a: 'Align it with your paycheck — monthly or every two weeks. With the same total cash, a higher frequency only shaves the average cost marginally; consistency matters far more.',
    },
  ],
  'stock-average-calculator': [
    {
      q: 'How is the average cost calculated?',
      a: 'Each lot counts shares × price, commissions are added once per order, and the total divides by total shares — the same weighted-average cost basis your broker reports. Lots with zero shares are skipped.',
    },
    {
      q: 'Does averaging down make sense?',
      a: 'It lowers your break-even price but increases your exposure to an idea the market has been rejecting. The honest test for the next lot is: would I open this position fresh, today, at this price?',
    },
    {
      q: 'How does the wash-sale rule affect this?',
      a: 'If you sold this stock at a loss within ±30 days, a repurchase — including shares bought by dividend reinvestment — makes the loss non-deductible this year; it moves into your cost basis instead. Averaging down right after a tax-loss sale is the classic trap.',
    },
    {
      q: 'Are commissions included?',
      a: 'Yes. Enter the commission per order and the tool charges it once per active lot, folded into cost basis exactly the way tax reporting treats it.',
    },
  ],
  'options-profit-calculator': [
    {
      q: 'How is breakeven calculated?',
      a: 'Strike ± premium: a long call breaks even at strike + premium per share and a long put at strike − premium. The figure is at expiration and excludes commissions.',
    },
    {
      q: 'Why is max profit or loss "Unlimited"?',
      a: 'A short call\'s loss grows one-for-one as the stock rises with no cap, and a long call mirrors that upside. Long puts cap at (strike − premium) × 100 × contracts with the stock at zero; short puts lose that same amount at most.',
    },
    {
      q: 'Does the payoff curve include time value?',
      a: 'No — all figures are at expiration, when time value is zero and the option is worth pure intrinsic value. Closing early gives different results because remaining extrinsic value and early assignment risk come into play.',
    },
    {
      q: 'What does the 100 multiplier mean?',
      a: 'One US equity option contract controls 100 shares, so the per-share premium × 100 × contracts is the actual cash at stake. Watch for corporate actions that change the multiplier.',
    },
  ],
  'crypto-profit-calculator': [
    {
      q: 'How are exchange fees applied?',
      a: 'The percentage fee is charged on both legs: on capital in at the buy and on gross proceeds at the sell. Even 0.1% per side costs about 0.2% round trip, before the spread.',
    },
    {
      q: 'What does "sell price needed for target" mean?',
      a: 'It back-solves the exit price that nets your profit target after both fee legs: S = (target + invested × (1 + fee)) ÷ (quantity × (1 − fee)). Use it directly as a limit order price.',
    },
    {
      q: 'Why is my ROI lower than the price move?',
      a: 'ROI is measured on invested capital after both fees: a 30% price move nets about 29.8% with 0.1% fees per side. Leverage adds funding rates and liquidation risk that this calculator does not model.',
    },
    {
      q: 'Does this include taxes?',
      a: 'No. In the US and many other countries selling crypto is a taxable disposal, so set aside part of the gain or check the capital-gains rules for your jurisdiction.',
    },
  ],
  'treasury-bill-calculator': [
    {
      q: 'Why are there two different yields?',
      a: 'The auction quotes the bank discount yield: discount ÷ face value × (360 ÷ days). The investment yield divides by the price you actually paid and uses a 365-day year, so it is always slightly higher and is the number comparable to CDs and bonds.',
    },
    {
      q: 'How is the purchase price determined?',
      a: 'Price = face value × (1 − rate × days ÷ 360). A 13-week bill at a 4.5% discount rate costs $988.63 per $1,000 of face value.',
    },
    {
      q: 'How are T-bills taxed?',
      a: 'The interest is exempt from state and local income tax but fully federally taxable as ordinary income, reported on a 1099-INT. That state exemption is a real edge in high-tax states.',
    },
    {
      q: 'What if I sell before maturity?',
      a: 'You receive the market price, which moves with interest rates — only holding to maturity locks the yield. Short bills have minimal rate sensitivity, but it is not zero.',
    },
  ],
  'bond-yield-calculator': [
    {
      q: 'What is the difference between current yield and YTM?',
      a: 'Current yield is the annual coupon divided by price and ignores what happens at maturity. Yield to maturity also annualizes the pull-to-par gain or loss: a discount bond\'s YTM is above its current yield, a premium bond\'s below.',
    },
    {
      q: 'How accurate is the YTM here?',
      a: 'It uses the classic approximation [C + (F − P)/n] ÷ [(F + P)/2]. Within about ±10% of par it lands within a few basis points of the exact IRR; deep discounts and very long maturities widen the error.',
    },
    {
      q: 'Why do bond prices fall when rates rise?',
      a: 'New bonds pay the going rate, so an old bond with fixed coupons must be cheaper to compete. That is why market price is an input here — price and yield move opposite by construction.',
    },
    {
      q: 'What does this calculator leave out?',
      a: 'Semiannual compounding (US convention; the effective yield is slightly higher than the annual figure shown), accrued interest and clean-versus-dirty pricing, credit risk, and call features.',
    },
  ],
  'lottery-odds-calculator': [
    {
      q: 'How are the odds calculated?',
      a: 'Exact hypergeometric probability on both pools: C(K,a) × C(N−K, K−a) ÷ C(N,K) for the main numbers, multiplied by the same formula on the bonus pool. That reproduces the official Powerball jackpot of 1 in 292,201,338.',
    },
    {
      q: 'Does buying more tickets help?',
      a: 'Each ticket is an independent combination: ten tickets make the jackpot chance 10 in 292,201,338 — about 1 in 29 million. Proportionally ten times better, absolutely still near zero, and expected value stays negative.',
    },
    {
      q: 'Which lottery is easiest to win?',
      a: 'EuroMillions: its jackpot is 1 in 139,838,160, roughly half as hard as Powerball\'s 292,201,338, and any-prize odds are about 1 in 13 versus roughly 1 in 24-25 for the US games.',
    },
    {
      q: 'How does custom mode work?',
      a: 'Enter your main pool size N, numbers picked K, and optionally a bonus pool M/J. Jackpot odds are 1 ÷ [C(N,K) × C(M,J)], and "any prize" becomes "at least one main number matched" since prize tiers vary by operator.',
    },
  ],
  'self-employment-tax-calculator': [
    {
      q: 'How is self-employment tax calculated?',
      a: 'Net profit is multiplied by 92.35% to get net earnings; then 12.4% Social Security applies up to the wage base ($176,100 in 2025) and 2.9% Medicare with no cap, plus 0.9% Additional Medicare above $200k single / $250k joint.',
    },
    {
      q: 'Why is it taxed on 92.35% and not my full profit?',
      a: 'Employees never pay FICA on the employer half, so the law lets the self-employed subtract the equivalent (7.65%) before rates apply — net earnings = profit × 0.9235, making the effective rate about 14.13% rather than 15.3%.',
    },
    {
      q: 'What is the deductible half?',
      a: 'Half of the SE tax is an above-the-line adjustment: it lowers AGI even if you take the standard deduction, and it never counts back into the SE tax base itself. Remember it when you estimate quarterly payments or you will overpay every quarter.',
    },
    {
      q: 'I have a W-2 job and a side business — do I pay Social Security twice?',
      a: 'No. Wages and self-employment income share one Social Security wage base: if your salary already covers $176,100, side income skips the 12.4% layer and owes only the 2.9% Medicare part. The calculator subtracts your W-2 wages from the remaining headroom.',
    },
  ],
  'depreciation-calculator': [
    {
      q: 'Which depreciation method should I pick?',
      a: 'Even benefit over the years (buildings, long-lived improvements) fits straight line. Assets that earn most of their value early — vans, laptops — fit double-declining or sum-of-the-years-digits. Your tax return does not get a vote: MACRS classes decide that one.',
    },
    {
      q: 'Is this the depreciation I use on my tax return?',
      a: 'No. US federal returns run MACRS: salvage value is ignored, recovery periods are fixed by property class (5 years for computers and cars, 27.5 for residential rentals), and the half-year convention blurs year one. This tool does book/GAAP depreciation; Section 179 and bonus depreciation can expense small assets immediately.',
    },
    {
      q: 'Why does double-declining balance never quite reach zero?',
      a: 'It applies a fixed percentage to a shrinking book value, so it only approaches zero asymptotically. Real schedules stop at salvage value — built into this calculator — and commonly switch to straight-line on the remaining balance once that deduction becomes larger.',
    },
    {
      q: 'What salvage value should I use?',
      a: 'In accounting, a realistic estimate of what you will sell the asset for; 0 or a symbolic dollar works if you have none. Tax-side MACRS forces salvage to 0 no matter what you enter here.',
    },
  ],
  'mileage-reimbursement-calculator': [
    {
      q: 'What are the IRS standard mileage rates for 2025?',
      a: '70 cents per business mile (up from 67 cents in 2024), 21 cents for medical and moving mileage, and 14 cents for charitable volunteer driving. The charitable rate is written into statute and moves only when Congress changes it.',
    },
    {
      q: 'Can my employer reimburse more or less than the IRS rate?',
      a: 'Yes — the standard rate is not a legal ceiling. Under an accountable plan, reimbursement up to the IRS rate stays tax-free; anything above becomes taxable wages. The self-employed deduct directly at the rate for their purpose.',
    },
    {
      q: 'Is moving mileage still deductible?',
      a: 'Only for active-duty members of the Armed Forces moving under orders — that has been the rule since 2018. Everyone else deducts nothing for relocation driving, even for a new job across the country.',
    },
    {
      q: 'Which records do I need to keep?',
      a: 'A mileage log: date, miles, and purpose. Choosing the standard rate replaces fuel receipts and maintenance records, but the log itself is non-negotiable — verbal estimates rarely survive an audit.',
    },
  ],
  'contractor-vs-employee-calculator': [
    {
      q: 'How much more should a 1099 contractor charge?',
      a: 'The recruiting rule of thumb says 20-30% more per year to cover the extra SE tax, self-bought health insurance, and unpaid leave. That is a starting point: enter your actual premiums, match, and tax rate here and let the arithmetic decide.',
    },
    {
      q: 'Why does 1099 owe more tax on the same pay?',
      a: 'On W-2, employee and employer split FICA 7.65% each; on 1099 you are both sides at 15.3% of 92.35% of pay — about 14.13% effective. At $100,000 that difference alone is roughly $6,480 per year.',
    },
    {
      q: 'Does health insurance change the picture?',
      a: 'It is the biggest lever. Employer plans are subsidized and paid pre-tax; a contractor buys on the marketplace with after-tax money (the SE health deduction softens income tax only, never the SE tax). Add a 401(k) match and unemployment insurance and the gap widens fast.',
    },
    {
      q: 'What is not modeled here?',
      a: 'State income taxes, the QBI pass-through deduction of up to 20%, HSA eligibility, and the value of protections like workers compensation. Treat the result as a well-informed directional gap, not a tax return.',
    },
  ],
  'gross-up-calculator': [
    {
      q: 'What tax rate should I use to gross up a bonus?',
      a: 'US bonus payments under $1 million use 22% federal supplemental withholding; add 7.65% FICA for the 29.65% working rate most payroll systems apply. Above $1 million the supplemental rate is 37%, and state withholding stacks on top of both.',
    },
    {
      q: 'Is the withholding the same as my final tax?',
      a: 'No. A gross-up guarantees the net at payment time, not at filing. If your true marginal rate is lower you reclaim the difference on your return; if higher, you owe it — the formula itself never changes.',
    },
    {
      q: 'What is the gross-up formula?',
      a: 'Gross = desired net ÷ (1 − tax rate), and tax = gross − net. Example: $5,000 net at 29.65% means 5,000 ÷ 0.7035 = $7,107.32 gross, with $2,107.32 withheld.',
    },
    {
      q: 'When do people actually gross up payments?',
      a: 'Taxable relocation packages are the classic case — the employer wants the transferee to keep a round number. Award payments, spot bonuses, and certain legal settlements follow the same pattern wherever a fixed net is promised.',
    },
  ],
  'commute-cost-calculator': [
    {
      q: 'Can I deduct my commuting miles?',
      a: 'No. Miles between home and a regular workplace have never counted as deductible business mileage for employees, and unreimbursed employee expenses disappeared entirely after 2017. For deductible business trips, use the mileage reimbursement calculator.',
    },
    {
      q: 'Which costing method should I use?',
      a: 'The per-mile rate (70 cents is the 2025 IRS-style figure) prices the whole car: fuel, tires, maintenance, insurance, depreciation. The MPG method prices fuel only and typically understates the true cost by half.',
    },
    {
      q: 'How is the time value computed?',
      a: 'One-way minutes × 2 × days per week × working weeks ÷ 60 gives annual hours, multiplied by your after-tax hourly rate. Thirty minutes each way, five days a week, is about 240 hours a year — six work weeks.',
    },
    {
      q: 'What does this calculator leave out?',
      a: 'Parking, tolls, transit passes, and occasional remote weeks sit outside it — add them by hand. It also prices the present, not the commitment: a commute you can quit in a month by moving is a different decision from one locked into a 30-year mortgage.',
    },
  ],
  'smoking-cost-calculator': [
    {
      q: 'How is the invested value calculated?',
      a: 'The yearly cigarette spend is invested once a year and compounded annually at your chosen return for ten years: yearly amount × ((1 + r)^10 − 1) ÷ r. A pack a day at $12 with a 7% return grows to about $60,500 — assuming prices never rise, which tobacco taxes make unlikely.',
    },
    {
      q: 'What if cigarette prices keep rising?',
      a: 'They almost certainly will: a pack runs $6-7 in Missouri and $12-15 in New York, with taxes often more than half the sticker. Entering today\'s price already understates the future — the real ten-year number will be higher.',
    },
    {
      q: 'I smoke less than a pack a day — how do I enter that?',
      a: 'Just type the cigarettes per day (packs are 20): half a pack is 10, and a few a day works too. The price field is your local retail price for a 20-pack.',
    },
    {
      q: 'How fast does quitting pay off?',
      a: 'Cash flow improves from the first smoke-free day; the investment line needs a few years of compounding to pull away. Insurance surcharges of up to 50% on marketplace plans and the health costs weigh even more than the cash this tool counts.',
    },
  ],
  'emergency-fund-calculator': [
    {
      q: 'How many months of expenses do I actually need?',
      a: 'Three fits stable dual-income households with replaceable jobs; six is the standard for single earners and volatile industries; freelancers, commission sales, and seasonal workers should think nine to twelve — the fund bridges the whole slow season, not just one layoff.',
    },
    {
      q: 'What counts as an essential expense?',
      a: 'The must-pays: housing, groceries, utilities, insurance premiums, minimum debt payments, and the childcare that keeps you employable. Dining out and subscriptions are the first things a real emergency cuts — leave them out of the target.',
    },
    {
      q: 'Where should the money sit?',
      a: 'In a high-yield savings account or money market fund — same-day liquid with zero volatility. Investing the fund defeats the purpose: markets can drop 30% in exactly the quarter you lose your job.',
    },
    {
      q: 'Should I save the full fund before paying off credit cards?',
      a: 'No — build a one-month mini fund first, then attack the card: paying off 20%+ APR debt is a guaranteed 20% return no savings account matches. Finish the full fund after the card is gone.',
    },
  ],
  'btu-calculator': [
    {
      q: 'How many BTU do I need per square foot?',
      a: 'The classic rule is 20 BTU per sq ft at 8 ft ceilings, so a 350 ft² room starts at 7,000 BTU. The calculator then adjusts for ceiling height, sun, top floor, extra people, and kitchens.',
    },
    {
      q: 'Why is an oversized air conditioner a problem?',
      a: 'It short-cycles: the room cools fast, the compressor shuts off before moisture condenses, and humidity stays high. Buy the calculated size, not the next one up.',
    },
    {
      q: 'How do I convert BTU to tons?',
      a: '12,000 BTU/hr equals 1 ton of cooling. A 24,000 BTU result is a 2-ton unit — central and mini-split systems are quoted in tons, window units in BTU.',
    },
    {
      q: 'Do kitchens really need 4,000 extra BTU?',
      a: 'Appliance heat and cooking gain make kitchens the hottest rooms, and DOE guidance adds about 4,000 BTU if the unit runs while cooking. Skip it if the AC only runs at night.',
    },
  ],
  'board-foot-calculator': [
    {
      q: 'How do I calculate board feet?',
      a: 'Board feet = thickness (inches) × width (inches) × length (feet) ÷ 12. A 1.5 × 5.5 in board 8 ft long is 5.5 board feet; ten of them are 55.',
    },
    {
      q: 'How much do nominal and actual dimensions differ?',
      a: 'A planed "2×6" measures 1.5 × 5.5 inches. Computing with nominal dimensions overstates volume by about 23% — on a 200 bf order, that is 46 board feet of error.',
    },
    {
      q: 'What do BDFT, FBM, and MBF mean?',
      a: 'BDFT is a single board foot; MBF (also written FBM) is 1,000 board feet — the unit sawmills use for volume pricing. Enter their per-BDFT price and the tool extends it to the order total.',
    },
    {
      q: 'How many board feet is a 2×4×8?',
      a: 'Use actual dimensions — 1.5 in thick and 3.5 in wide: 1.5 × 3.5 × 8 ÷ 12 = 3.5 board feet. The nominal-size math (5.33) would badly overstate the bill.',
    },
  ],
  'wallpaper-calculator': [
    {
      q: 'Why count strips instead of dividing wall area?',
      a: 'Every strip must start at the same point in the pattern, so a repeat adds real length to each strip. Area division ignores that waste and regularly leaves you a roll short.',
    },
    {
      q: 'What is the difference between US single and double rolls?',
      a: 'US wallpaper is priced per single roll (about 36 ft²) but nearly always sold as a double roll — 27 in wide × 33 ft long, the format with decent yield; 16.5 ft singles waste heavily.',
    },
    {
      q: 'How do I measure pattern repeat?',
      a: 'Find the vertical distance over which the motif repeats completely — from the top of one figure to the top of its next occurrence. Plain paper is 0; a drop match uses the full repeat.',
    },
    {
      q: 'Why should I buy one extra roll?',
      a: 'Wallpaper is dyed in batches and adjacent lot numbers can differ visibly. A spare roll is cheap insurance for repairs, and stores accept unopened returns.',
    },
  ],
  'raised-bed-soil-calculator': [
    {
      q: 'How much soil does a 4×8 raised bed need?',
      a: 'Exactly 32 cubic feet (about 906 L, or 1.19 yd³) at 12 inches deep. Bulk soil sells by the yard and bags by the liter — the tool gives both figures.',
    },
    {
      q: 'Why does soil settle after filling?',
      a: 'Bagged soil is measured fluffed and settles 20-30% in the first season as water and roots work it down. The "settled" figure is what the bed actually holds next spring.',
    },
    {
      q: "Should I use Mel's Mix or a topsoil blend?",
      a: "Mel's Mix (equal thirds compost, coir, vermiculite) is weed-free and drains superbly but costs more; 50% topsoil + 30% compost + 20% coir is the budget option — heavier and more compacting.",
    },
    {
      q: 'What should I put in the bottom of a deep bed?',
      a: 'Cardboard or weed barrier, then sticks, leaves, or untreated wood scraps as filler below the root zone. A 24 in bed can legitimately need only half its depth in purchased mix.',
    },
  ],
  'generator-wattage-calculator': [
    {
      q: 'Why do starting watts exceed running watts?',
      a: 'Motors — refrigerator compressors, furnace blowers, pumps — briefly draw 2-3× their running watts to overcome inertia. Generators are sized by surge capacity, not running load.',
    },
    {
      q: 'How do you add up the total surge?',
      a: 'Sum the running watts of everything running at once, then add the largest single surge margin, because you can sequence starts: biggest motor first, then the rest. That is the method this tool uses.',
    },
    {
      q: 'Are inverter generators worth it?',
      a: 'Their clean output is safe for laptops, TVs, and chargers, and they run quieter and thriftier. But motor loads still depend on the surge rating — the word "inverter" is not a capacity number.',
    },
    {
      q: 'Why not run a water heater on a generator?',
      a: 'Heating elements have no surge but draw thousands of watts for hours — an electric water heater alone claims 4,000 W. Outage priority goes to refrigeration, heat, pumps, and lights.',
    },
  ],
  'pool-volume-calculator': [
    {
      q: 'How do I find average depth on a sloped floor?',
      a: 'The standard approximation is (shallow end + deep end) ÷ 2. A 3 ft shallow and 8 ft deep pool uses 5 ft; hopper-bottom pools run a few percent off, which still keeps you inside pump-sizing accuracy.',
    },
    {
      q: 'How many gallons are in a cubic foot?',
      a: '7.48 US gallons. Length × width × average depth in feet × 7.48 gives rectangular-pool gallons — a 32×16×5 ft pool holds about 19,150 gallons.',
    },
    {
      q: 'How do you compute a kidney pool area?',
      a: 'The surveyor approximation: 0.45 × (width A + width B) × length, measured at the two widest lobes, then × average depth. An estimate, but accurate enough for pumps and heaters.',
    },
    {
      q: 'How often should pool water circulate?',
      a: 'Residential guidance turns the full volume over every 8-12 hours; commercial pools run faster. Divide gallons by your pump GPM for one turnover — this tool does circulation sizing only, not chemical dosing.',
    },
  ],
  'coffee-ratio-calculator': [
    {
      q: 'What is the golden pour-over ratio?',
      a: 'Balanced drip cups live near 1:15-1:17 (water to coffee); 1:16 is a safe start. That is 500 g of water to about 31 g of coffee — two honest cups.',
    },
    {
      q: 'Why weigh coffee instead of using scoops?',
      a: 'Bean density varies widely — a scoop can swing 2-3 g between light and dark roasts. And 1 g of water = 1 ml, so grams scale cleanly; espresso ratios are mass ratios, not volume.',
    },
    {
      q: 'What about French press and cold brew ratios?',
      a: 'French press runs about 1:12 (richer to balance immersion extraction) and cold brew concentrate 1:8, diluted when serving. Both presets are built in.',
    },
    {
      q: 'Should I adjust the ratio or the grind first?',
      a: 'Grind first. Harsh and drying points to too fine (over-extraction); sour and thin points too coarse. The ratio changes strength, the grind changes extraction flavor — fix extraction, then tune strength.',
    },
  ],
  'bread-hydration-calculator': [
    {
      q: "What are baker's percentages and hydration?",
      a: "In baker's percentages flour is always 100% and everything else is measured against it. Hydration = water ÷ flour: 350 g water on 500 g flour is 70%.",
    },
    {
      q: 'Why calculate an effective hydration?',
      a: 'Levain carries its own flour and water: 100 g of a 100%-hydration starter is 50 g + 50 g. Counting it shows what the dough really feels like — heavy levain use otherwise reads dry.',
    },
    {
      q: 'What counts as high hydration?',
      a: '60-68% is standard loaf territory; 70-78% opens the crumb on artisan breads; above 80% is ciabatta-class, needing autolysis and fold-based development rather than kneading.',
    },
    {
      q: 'Why is salt also given as a percentage?',
      a: 'Salt sits at 1.8-2.2% of flour weight, steering fermentation, tightening gluten, and seasoning — 500 g flour × 2% = 10 g salt. Calculating it against flour keeps any batch size consistent.',
    },
  ],
  'ovulation-calculator': [
    {
      q: 'How does the calculator find my ovulation day?',
      a: 'Ovulation happens a fixed 14 days (your luteal phase) before the NEXT period, not a fixed time after the last one. The tool adds your cycle length to your last period\'s first day, then counts back your luteal phase - which is why cycle length matters more than anything else.',
    },
    {
      q: 'Are my chances equal on every day of the fertile window?',
      a: 'No - the window is the five days before ovulation plus the day itself. Sperm survive up to five days, but the egg is viable for only about 24 hours; intercourse 1-2 days before ovulation actually has the highest conception odds.',
    },
    {
      q: 'My cycle is irregular - is this still accurate?',
      a: 'Only roughly. With cycles swinging between, say, 26 and 40 days, ovulation can shift by two weeks; the 21-45 day range is accepted but treat results as a window, not a date. OPKs or basal temperature tracking confirm the actual day.',
    },
    {
      q: 'Can I use this to avoid pregnancy?',
      a: 'Calendar prediction alone is not reliable contraception - sperm survival and cycle shifts make the real window wider. It is a conception-planning aid; for avoiding pregnancy use proven methods.',
    },
  ],
  'pregnancy-weight-gain-calculator': [
    {
      q: 'Where do the recommended ranges come from?',
      a: 'The 2009 IOM (now National Academy of Medicine) guidelines: 11.5-16 kg for normal BMI, 12.5-18 kg underweight, 7-11.5 kg overweight, 5-9 kg obese - wider ranges for twins (17-25 kg at normal BMI).',
    },
    {
      q: 'How much should I gain each week?',
      a: 'Almost nothing in trimester one (0.5-2 kg total), then a steady 0.42 kg/week at normal BMI - 0.51 underweight, 0.28 overweight, 0.22 obese. The calculator prorates this to your current week.',
    },
    {
      q: 'I have gained more than the range - should I diet?',
      a: 'No. Restricting calories during pregnancy risks nutrients the baby needs; discuss the trend with your OB or midwife instead. Gains above range are common with fluid retention and are a conversation, not a verdict.',
    },
    {
      q: 'Does this work for twins?',
      a: 'Yes - it applies the IOM twin ranges (17-25 kg normal BMI, 14-23 kg overweight, 11-19 kg obese). There is no IOM twin guideline for underweight BMI, so the tool tells you rather than inventing numbers.',
    },
  ],
  'diaper-cost-calculator': [
    {
      q: 'How many diapers does a baby actually use?',
      a: 'Newborns run 8-12 a day, easing to 6-8 by six months and 4-6 as toddlers - roughly 2,500-3,000 diapers in the first year alone and 6,000-8,000 before potty training.',
    },
    {
      q: 'Is cloth really cheaper?',
      a: 'Usually, if you reuse the same stash across siblings: a $400-800 set plus laundry beats $1,500-2,500 of disposables. For a single child the gap narrows once water, electricity and your time are counted.',
    },
    {
      q: 'What is the real per-diaper price?',
      a: 'Small packs run $0.30-0.40 per diaper; jumbo boxes and subscribe-and-save drop it to $0.18-0.25. Sizing up to the biggest box your baby fits is the single biggest lever.',
    },
    {
      q: 'When should I stock up?',
      a: 'Buy ahead only in sizes you are sure to reach - many babies skip or blow through a size, and most retailers exchange unopened boxes within 90 days.',
    },
  ],
  'cat-age-calculator': [
    {
      q: 'How is cat age converted to human years?',
      a: 'Year one equals about 15 human years, year two adds nine more (24 total), and every year after adds four - so a 5-year-old cat is roughly 36 in human terms. Unlike dogs, the curve does not depend on breed size.',
    },
    {
      q: 'Why is the x7 rule wrong for cats?',
      a: 'It makes kittens absurdly young (a 1-year-old cat is fully mature, yet x7 says "7") and seniors too old. The 15/24/+4 curve matches how cats actually mature and age.',
    },
    {
      q: 'When is a cat a senior?',
      a: 'Around 11 years old (about 60 in human terms), with 15+ considered super senior. Indoor cats routinely live to 18-20 - roughly 88-96 human years.',
    },
    {
      q: 'Do outdoor cats age faster?',
      a: 'Statistically they live much shorter lives (2-5 years on average) due to traffic, predators and disease, though aging itself does not tick faster - the risk profile does.',
    },
  ],
  'cat-food-calculator': [
    {
      q: 'How many calories does a cat need per day?',
      a: 'RER = 70 x weight(kg)^0.75 gives the resting need - about 198 kcal for a 4 kg cat - then multiply by a life-stage factor: 1.2 for a neutered indoor cat, 0.8 for weight loss, up to 2.5 for a kitten.',
    },
    {
      q: 'How do I read the results in cans or grams?',
      a: 'Enter the label\'s kcal per can (plus can weight) for wet food or kcal per 100 g for dry; the tool divides daily calories by that density - e.g. 238 kcal is about 2.5 of a 95-kcal can or 63 g of a 380 kcal/100 g dry food.',
    },
    {
      q: 'Why is my neutered cat gaining weight?',
      a: 'Neutering drops energy needs by roughly 20-30% while appetite rises. The x1.2 factor - not the x1.4 of an intact cat - is the honest baseline for the typical indoor cat.',
    },
    {
      q: 'Can I use this to put my cat on a diet?',
      a: 'As a starting point only. Cats must lose weight slowly (0.5-1% of body weight per week); crash dieting triggers hepatic lipidosis, which is life-threatening. Design the plan with your vet.',
    },
  ],
  'zodiac-sign-calculator': [
    {
      q: 'Which sign am I if I was born on a cusp date?',
      a: 'You are exactly one sign - the one the Sun was in at your birth moment. Pop astrology calls the boundary 1-2 days a "cusp"; the calculator flags it but always assigns one definite sign.',
    },
    {
      q: 'Does the year I was born matter?',
      a: 'Not for your Sun sign - the boundary dates shift by at most a day across years (leap years nudge things slightly). Only Chinese astrology and slow-moving placements use the birth year.',
    },
    {
      q: 'What do element, modality and polarity mean?',
      a: 'Each sign belongs to one of four elements (Fire, Earth, Air, Water), one of three modalities (Cardinal starts, Fixed holds, Mutable adapts), and a positive/negative polarity - the shared grammar behind compatibility talk.',
    },
    {
      q: 'Is the zodiac scientifically accurate?',
      a: 'No - constellation boundaries, precession of the equinoxes and decades of drift mean the Sun is not where newspaper horoscopes put it. It is culture and entertainment, not astronomy.',
    },
  ],
  'chinese-zodiac-calculator': [
    {
      q: 'Why does my birth year sometimes give the wrong animal?',
      a: 'The zodiac year starts at Lichun (Start of Spring, Feb 3-5), not January 1. Born in January or early February, you likely belong to the previous year\'s animal - pick the "Jan 1 - Feb 3" option.',
    },
    {
      q: 'How do the animal, element and yin-yang cycles work?',
      a: 'Twelve animals rotate yearly (Rat through Pig), elements change every two years (Wood, Fire, Earth, Metal, Water) and yin/yang alternates - a full 60-year cycle (1984 and 2044 are both Yang Wood Rat).',
    },
    {
      q: 'What is my Ben Ming Nian?',
      a: 'Your zodiac sign\'s year, recurring every 12 years (2026 for Horse natives) - traditionally a year to wear red and be a bit careful, not a lucky jackpot.',
    },
    {
      q: 'Lichun or Chinese New Year - which starts the zodiac?',
      a: 'Both traditions exist: the solar-term (Bazi) school uses Lichun, the folk calendar uses Lunar New Year, which falls Jan 21-Feb 20 and moves yearly. This tool follows the Lichun school used by Bazi practitioners.',
    },
  ],
  'shoe-size-converter': [
    {
      q: 'Is there a single conversion formula between US, UK and EU sizes?',
      a: 'No - that is the trap. US and UK sizes differ by about 0.5-1 (and US women\'s from men\'s by 1.5), while EU sizes use Paris points on a different scale entirely. Lookup tables are the only honest method, and even then brands vary by about one size.',
    },
    {
      q: 'How do I measure my foot at home?',
      a: 'Stand on paper, trace both feet, measure heel-to-longest-toe in cm at the end of the day (feet swell), and use the larger foot. That centimeter number converts into every system.',
    },
    {
      q: 'Why do women\'s and men\'s sizes differ?',
      a: 'A US women\'s size runs 1.5 numbers above the men\'s size for the same foot length - a women\'s 8.5 fits like a men\'s 7. UK charts do not do this, which is why US women\'s to UK conversions subtract about 2.',
    },
    {
      q: 'Which size should I actually buy?',
      a: 'Trust the manufacturer\'s own chart first - Nike, Adidas and ASICS each publish different EU mappings for the same US size. Between sizes, go up a half for running shoes (feet swell about one size over a run).',
    },
  ],
  'time-card-calculator': [
    {
      q: 'How do I convert time-card hours to decimal for payroll?',
      a: 'Divide the minutes by 60 — 7 h 45 m becomes 7.75 — and payroll multiplies your rate by that decimal. The tool shows both the h:mm and the decimal figure so you copy the right one.',
    },
    {
      q: 'Does it handle overnight and past-midnight shifts?',
      a: 'Yes. When clock-out is earlier than clock-in, 24 hours are added automatically: 22:00 to 06:00 counts 8 hours before the unpaid break comes off.',
    },
    {
      q: 'How does the 40-hour overtime threshold work?',
      a: 'It follows the US FLSA convention of counting overtime past 40 hours in a workweek. Change the threshold for daily-overtime states like California or union rules; for the dollar amounts use the overtime pay calculator.',
    },
    {
      q: 'Should paid breaks be subtracted?',
      a: 'No — only unpaid time comes off the total, so enter paid breaks as 0. If your employer rounds punches to the quarter hour, apply the same rounding to the times you enter so the totals reconcile.',
    },
  ],
  'business-days-calculator': [
    {
      q: 'Does the start date count as a business day?',
      a: 'No. Counting starts the next calendar day, and the target is the day that completes N business days — adding 10 business days from a Monday with no holidays lands on the Monday two weeks out.',
    },
    {
      q: 'How are holidays handled?',
      a: 'Paste any YYYY-MM-DD dates and each weekday on the list is skipped like a weekend. Holidays that fall on Saturday or Sunday are already skipped by the weekend rule and are never double-counted.',
    },
    {
      q: 'Can I subtract business days from a deadline?',
      a: 'Yes — choose Subtract and the calculator counts backward, which answers clauses like "submit five business days before the closing date" without finger-counting.',
    },
    {
      q: 'How is this different from counting business days between dates?',
      a: 'This tool projects a target date forward or backward from a start. If you already have two dates and want the number of business days between them, the date difference calculator is the right tool.',
    },
  ],
  'week-number-calculator': [
    {
      q: 'What does ISO week number mean?',
      a: 'ISO 8601 numbers weeks from Monday, and week 1 is the week containing the year\'s first Thursday. A year therefore has 52 or 53 ISO weeks — 2026 is a 53-week year.',
    },
    {
      q: 'Why can January 1st be week 52 or 53 of the previous year?',
      a: 'When New Year\'s Day falls on a Friday, Saturday, or Sunday, that week\'s Thursday belongs to the old year, so the whole week is numbered there — January 1, 2027 sits inside 2026-W53.',
    },
    {
      q: 'Is the US week number the same as ISO?',
      a: 'Not always. The common US system starts weeks on Sunday and calls the week containing January 1 "week 1", which can sit one week off ISO in border weeks. International schedules should state which standard they use.',
    },
    {
      q: 'How many ISO weeks are in a year?',
      a: 'Either 52 or 53 — a year gets 53 when it starts on a Thursday, or on a Wednesday in a leap year. The calculator derives it from the date rather than a fixed table.',
    },
  ],
  'pto-accrual-calculator': [
    {
      q: 'How is my current PTO balance calculated?',
      a: 'Allowance ÷ pay periods gives the accrual rate; that rate times the periods elapsed so far, minus hours already used, is your spendable balance. Mid-year you can only spend what has actually accrued.',
    },
    {
      q: 'What happens at the carryover cap?',
      a: 'Year-end balance above the cap is forfeited — carried hours equal min(balance, cap). A cap of zero models use-it-or-lose-it plans where everything resets on January 1.',
    },
    {
      q: 'Why is my balance negative?',
      a: 'You took time off before accruing it — advance PTO. Most policies allow it but claw the unaccrued hours back from your final paycheck if you leave before earning them.',
    },
    {
      q: 'How much PTO is normal in the US?',
      a: 'There is no federal minimum. Private-industry averages run about 11 days after one year and 20 after twenty; the EU mandates at least 20 working days, which is why forfeiture there is rare.',
    },
  ],
  'download-time-calculator': [
    {
      q: 'Why is my real download slower than my plan\'s speed?',
      a: 'Plans quote megabits and files measure megabytes — an 8× gap — and another 10-15% disappears into TCP overhead, retransmits, and Wi-Fi contention. The effective MB/s output is what your file manager actually sees.',
    },
    {
      q: 'Should I include protocol overhead?',
      a: 'Yes — 10% is the honest default for a wired connection; pick 15% for busy Wi-Fi. The "None" option shows the theoretical best case, which no real network achieves.',
    },
    {
      q: 'How do I calculate upload time?',
      a: 'Run the same numbers with your upload speed, which on asymmetric plans is often 10-20× slower than download. That is why backing up a large drive to the cloud takes days, not hours.',
    },
    {
      q: 'Are file sizes decimal or binary here?',
      a: 'Network math uses decimal units — 1 GB = 1,000 MB — matching how ISPs quote speeds. Windows counts binary GiB, which is why a downloaded "4.5 GB" file shows as about 4.19 GB on disk.',
    },
  ],
  'gps-coordinate-converter': [
    {
      q: 'Which coordinate format should I use?',
      a: 'Decimal degrees for anything digital — Google Maps, GeoJSON, GPS APIs. DMS (degrees° minutes\' seconds") fits charts, aviation, and legal descriptions; degrees decimal minutes is what handheld GPS units and NMEA displays show.',
    },
    {
      q: 'How do hemisphere letters map to signs?',
      a: 'N and E are positive, S and W are negative, so 74.0060° W equals -74.0060. The converter accepts letters at the start or end, glued to the number or standing alone.',
    },
    {
      q: 'How many decimal places do I need?',
      a: 'Four decimals locates within about 11 m, five within 1.1 m, and six within 0.11 m. Street-level work needs five; geocaching and surveying use six.',
    },
    {
      q: 'Why does GeoJSON want longitude first?',
      a: 'GeoJSON, PostGIS, and shapely order coordinates [x, y] — longitude, latitude — the reverse of spoken convention. The output includes a lon-first line so you can paste without swapping by hand.',
    },
  ],
  'tire-size-calculator': [
    {
      q: 'What do the numbers in 225/45R17 mean?',
      a: '225 mm section width, 45% aspect ratio (a 101 mm sidewall), radial construction, and a 17-inch rim. Diameter = 17 × 25.4 + 2 × 101.25 ≈ 634 mm, or about 24.97 inches.',
    },
    {
      q: 'How much does a bigger tire throw off my speedometer?',
      a: 'The speedo counts wheel revolutions, so a +1.4% diameter change (225/45R17 → 235/45R17) makes a true 60 mph read about 59.2. Past roughly +3% the error, gearing, and ABS calibration stop being acceptable.',
    },
    {
      q: 'What is the ±3% rule?',
      a: 'The industry rule of thumb keeps the new diameter within 3% of stock so speedometer error stays small and the tire clears the wheel well. Plus-sizing stays inside it by pairing wider treads with lower profiles.',
    },
    {
      q: 'Does tire width change fuel economy?',
      a: 'Usually — going 10 mm wider typically costs 1-2% more fuel from rolling resistance, in exchange for a slightly larger contact patch and better dry grip.',
    },
  ],
  'wind-chill-calculator': [
    {
      q: 'What formula does this calculator use?',
      a: 'The JAG/TI wind chill model adopted by Environment Canada and the US National Weather Service in 2001: W = 13.12 + 0.6215T − 11.37·V^0.16 + 0.3965·T·V^0.16, with T in °C and V in km/h.',
    },
    {
      q: 'When is wind chill not valid?',
      a: 'The formula is defined only up to 10°C (50°F) and above 4.8 km/h (3 mph) of wind. Outside that window the calculator still returns a number but flags it as an extrapolation.',
    },
    {
      q: 'Can wind chill make objects colder than the air?',
      a: 'No. Wind chill describes how fast exposed skin loses heat; an engine block or a bucket of water never drops below the actual air temperature no matter how hard the wind blows.',
    },
    {
      q: 'Which is colder: -10°C calm or -5°C with 30 km/h wind?',
      a: 'On skin, the windy one — -5°C at 30 km/h feels near -13°C, colder than still air at -10°C. That is the point of wind chill: comparing heat-loss rates, not thermometer readings.',
    },
  ],
  'quadratic-equation-solver': [
    {
      q: 'How do I solve ax² + bx + c = 0?',
      a: 'The quadratic formula x = (−b ± √(b² − 4ac)) / (2a) always works. The discriminant b² − 4ac tells you the root type before you compute: positive gives two real roots, zero one double root, negative a complex conjugate pair.',
    },
    {
      q: 'What do the vertex and axis of symmetry mean?',
      a: 'The vertex (−b/2a, k) is the parabola\'s turning point, and the axis x = −b/2a is the vertical mirror line through it. With a > 0 the vertex is the minimum, with a < 0 the maximum.',
    },
    {
      q: 'Why does my result show complex numbers?',
      a: 'A negative discriminant means the parabola never touches the x-axis, so the roots exist only as the complex pair p ± qi. The tool switches to completed-square form a(x − h)² + k, which stays true over the reals and shows how far the vertex sits from zero.',
    },
    {
      q: 'Can a be zero?',
      a: 'Then it is not quadratic — the calculator solves the linear equation bx + c = 0 with the single root x = −c/b. If a and b are both zero there is no equation in x to solve.',
    },
  ],
  'slope-calculator': [
    {
      q: 'How is the slope calculated?',
      a: 'm = (y₂ − y₁)/(x₂ − x₁) — rise over run between the two points. The y-intercept follows as b = y₁ − m·x₁, which completes the line equation y = mx + b.',
    },
    {
      q: 'What does a negative or undefined slope mean?',
      a: 'A negative slope falls left to right; undefined means a vertical line (x₁ = x₂) where the run is zero and the equation is simply x = c. A horizontal line has m = 0.',
    },
    {
      q: 'How do I find a parallel or perpendicular slope?',
      a: 'Parallel lines share exactly the same m; perpendicular slopes multiply to −1, so m⊥ = −1/m. The perpendicular to a horizontal line is vertical and vice versa — the tool states this instead of dividing by zero.',
    },
    {
      q: 'What is the inclination angle?',
      a: 'θ = arctan(m), measured from the positive x-axis: m = 1 gives 45° and m = 2 gives 63.43°. Road grade percentages are rise/run × 100, so an 8% grade is only arctan(0.08) ≈ 4.6°.',
    },
  ],
  'confidence-interval-calculator': [
    {
      q: 'Which formula is used?',
      a: 'For a mean, CI = x̄ ± z·s/√n; for a proportion, p̂ ± z·√(p̂(1−p̂)/n) (the Wald interval). z is 1.645, 1.96 or 2.576 at the 90/95/99% levels.',
    },
    {
      q: 'What does 95% confident actually mean?',
      a: 'It is about the method, not this one interval: 95% of intervals built this way from repeated samples would contain the true value. Any single interval either contains it or does not — no probability remains once the numbers are fixed.',
    },
    {
      q: 'Why does a bigger sample help so little?',
      a: 'The margin of error shrinks with 1/√n: doubling n cuts it only about 29%, and you need to quadruple n to halve it. That is why ±1% precision costs four times the sample of ±2%.',
    },
    {
      q: 'When is this approximation invalid?',
      a: 'The z approach wants n ≥ 30 for means (use a t-interval below that) and np̂ ≥ 5 with n(1−p̂) ≥ 5 for proportions. For rare events or proportions near 0 or 1, use the Wilson score interval — Wald undercovers there.',
    },
  ],
  'sample-size-calculator': [
    {
      q: 'Which formula is used?',
      a: 'n₀ = z²·p(1−p)/e², then the finite-population correction n = n₀/(1 + n₀/N) when the population N is small enough to matter. The result is always rounded up, never down.',
    },
    {
      q: 'Why does p = 50% give the biggest sample?',
      a: 'p(1−p) peaks at 0.25 when p = 0.5, so it is the conservative choice when you have no prior estimate. A p of 90% needs only 36% of that sample for the same margin.',
    },
    {
      q: 'When does the population correction matter?',
      a: 'Only below roughly N = 20,000. At N = 100,000 the famous 385 drops just to 383; at N = 500 it drops to 218 — surveying more than a fifth of a small population buys real precision.',
    },
    {
      q: 'Why does ±1% cost so much?',
      a: 'Sample size scales with 1/e²: at 95% confidence, ±3% needs about 1,068 respondents but ±1% needs 9,604 — nine times the sample for three times the precision. That is why national polls settle for ±3%.',
    },
  ],
  'z-score-calculator': [
    {
      q: 'How is the z score computed?',
      a: 'z = (x − μ)/σ — subtract the mean, divide by the standard deviation. It counts how many σ a value sits from the mean, which makes unlike scales comparable (IQ, exam scores, process measurements).',
    },
    {
      q: 'What are the percentile and two-tailed p?',
      a: 'Φ(z) is the share of the population below your value (the percentile); the two-tailed p is 2·(1 − Φ(|z|)), the probability of landing at least this far from the mean in either direction. Beyond ±1.96, p < 0.05.',
    },
    {
      q: 'How accurate are the probabilities?',
      a: 'The normal CDF uses the Abramowitz-Stegun 26.2.17 rational approximation, with an absolute error below 7.5×10⁻⁸ — more digits than any real dataset justifies.',
    },
    {
      q: 'How do I reverse from z back to x?',
      a: 'Switch the direction to z → x and apply x = μ + z·σ. For example, the top-5% cutoff of a μ = 100, σ = 15 distribution is 100 + 1.645×15 = 124.7.',
    },
  ],
  'bayes-theorem-calculator': [
    {
      q: 'How does the calculator apply Bayes theorem?',
      a: 'P(disease|positive) = sensitivity × prior ÷ P(positive), where P(positive) = sensitivity × prior + (1 − specificity) × (1 − prior). Everything is expressed the medical-screening way: base rate, sensitivity, specificity.',
    },
    {
      q: 'Why is a positive only 8.8% with a 95% sensitive test?',
      a: 'The 1% base rate means 9,900 of 10,000 people are healthy, and the 10% false-positive rate turns 990 of them positive — swamping the 95 true positives. The chart shows exactly this composition of a positive result.',
    },
    {
      q: 'What is the base-rate fallacy?',
      a: 'Confusing P(positive|disease) with P(disease|positive). The first is high (95%); the second depends on how rare the condition is, and it falls as the prior falls. That is why universal screening of rare conditions produces mostly false alarms.',
    },
    {
      q: 'How can the number be improved?',
      a: 'Raise specificity, not sensitivity: cutting the false-positive rate from 10% to 1% lifts the same 1% prior from 8.8% to about 49%. Confirmatory second tests work the same way — the first positive raises the prior for the second.',
    },
  ],
  'heat-index-calculator': [
    {
      q: 'Which formula is used?',
      a: 'The NWS Rothfusz regression HI = −42.379 + 2.04901523T + 10.14333127R − 0.22475541TR − 0.00683783T² − 0.05481717R² + 0.00122874T²R + 0.00085282TR² − 0.00000199T²R² (T in °F, R in %), with the 1984 low/high-humidity adjustments and a simple-formula fallback below 80°F.',
    },
    {
      q: 'Why does humidity make it feel hotter?',
      a: 'Sweat cools the body by evaporating; high humidity stalls that evaporation, so the body loses its main cooling channel. The heat index folds the effect into one apparent temperature.',
    },
    {
      q: 'When is the heat index defined?',
      a: 'The NWS treats it as meaningful from about 80°F and 40% relative humidity. Below that the formula still computes, but the thermometer alone is a fair guide — the tool applies the official fallback formula there.',
    },
    {
      q: 'What are the health risk bands?',
      a: '80-90°F caution (fatigue with prolonged exposure), 90-103°F extreme caution (sunstroke and cramps possible), 103-125°F danger (heat exhaustion likely), above 125°F extreme danger (heat stroke imminent). Full sun adds up to 15°F; shade, light clothing and water move all of these in your favor.',
    },
  ],
  'dew-point-calculator': [
    {
      q: 'Which formula is used?',
      a: 'Magnus-Tetens: γ = ln(RH/100) + 17.27T/(237.7 + T) and Td = 237.7γ/(17.27 − γ) with T in °C — accurate to about ±0.35°C for RH above 50%.',
    },
    {
      q: 'Why is dew point better than relative humidity for comfort?',
      a: 'Relative humidity swings with temperature through the day even when the moisture does not change, while dew point measures the actual water content. Below a 10°C dew point air feels dry, 10-16°C is comfortable, and above 18°C most people call it sticky.',
    },
    {
      q: 'What is absolute humidity?',
      a: 'The literal grams of water vapor per cubic meter of air, here computed from the Magnus saturation vapor pressure. At 25°C and 60% RH that is about 13.8 g/m³ — the most direct metric for drying, storage or humidity-control work.',
    },
    {
      q: 'What does a dew point close to the air temperature mean?',
      a: 'The gap between Td and T is the evaporation headroom. When they are equal the air is saturated (RH = 100%) and fog, dew or condensation can form; a large gap means thirsty air that dries things fast.',
    },
  ],
  'passphrase-generator': [
    {
      q: 'How many words should I use?',
      a: 'Six words from the 256-word list give 48 bits of entropy; ten words give 80 bits, the level security teams recommend for high-value accounts. Four words (32 bits) only suit throwaway logins.',
    },
    {
      q: 'How is the entropy calculated?',
      a: 'Each word is a uniform pick from exactly 256 options, so every word contributes log2(256) = 8 bits, and each trailing digit adds log2(10) ≈ 3.3 bits. Capitalization adds at most 1 bit per word and is left out of the estimate.',
    },
    {
      q: 'Passphrase or random password - which should I use?',
      a: 'At equal entropy, passphrases are far easier to type and remember. Use the character-based password generator when a site caps password length; use passphrases for master passwords and phone keyboards.',
    },
    {
      q: 'Is it safe to generate a passphrase online?',
      a: 'The word list is built into this page and words are drawn with the browser Web Crypto API - nothing is transmitted, and no word list is downloaded from anywhere.',
    },
  ],
  'border-radius-generator': [
    {
      q: 'What does the slash in border-radius mean?',
      a: 'Values before the slash are horizontal radii, values after it are vertical radii - border-radius: 30% 70% / 40% 60% creates elliptical corners. A single value with no slash gives a circular arc.',
    },
    {
      q: 'Should I use px or percentages?',
      a: 'Pixels are predictable but stop matching when the box resizes. Percentages resolve against each side they touch, so 50% on a non-square box gives an ellipse - prefer % in fluid layouts and px in fixed components.',
    },
    {
      q: 'How does the CSS shorthand collapse?',
      a: 'Four values run clockwise from top left (TL TR BR BL); when TR equals BL it can be omitted, and when both diagonals pair up you get two values - the generator always emits the shortest valid form.',
    },
    {
      q: 'How do I make a pill or a perfect circle?',
      a: 'Any radius at least half the shorter side fully rounds the box - 999px is the common idiom. A circle needs width equal to height plus a 50% radius.',
    },
  ],
  'color-palette-generator': [
    {
      q: 'Which harmony scheme should I choose?',
      a: 'Analogous (±30°) is the safest and most cohesive; complementary gives a high-contrast accent pair; split-complementary keeps contrast with less tension; triadic suits playful brands; monochrome reads calm and premium.',
    },
    {
      q: 'Why does the generator work in HSL?',
      a: 'Harmony is about hue distance, and HSL puts hue on a 0-360° wheel where rotations are simple additions. Every swatch also shows hex and rgb() because CSS accepts all three notations.',
    },
    {
      q: 'What is the 60-30-10 rule?',
      a: 'Use the base color for about 60% of a surface, a secondary palette color for 30%, and the most contrasting one for roughly 10% as an accent - the tint and shade fill hover and border states.',
    },
    {
      q: 'How is this different from a gradient generator?',
      a: 'This tool produces a set of discrete, flat colors for a design system; a CSS gradient generator blends colors into one continuous background image.',
    },
  ],
  'image-compressor': [
    {
      q: 'Does compressing change the image dimensions?',
      a: 'No - pixels are redrawn at the original width and height; only the lossy encoding changes. To reduce resolution, use an image resizer first.',
    },
    {
      q: 'What quality setting should I choose?',
      a: '70-85 is the usual sweet spot where artifacts stay invisible on screens; above 90 the file barely shrinks. At equal quality, WebP is typically 25-35% smaller than JPEG.',
    },
    {
      q: 'Why did my file get bigger?',
      a: 'Re-encoding an already-optimized JPEG at high quality, or a tiny PNG into JPEG, can inflate the file - lower the quality, switch to WebP, or keep the original.',
    },
    {
      q: 'Are my photos uploaded anywhere?',
      a: 'No. Decoding and re-encoding happen in an in-browser canvas on your device; the download link points at a local blob and nothing leaves the page.',
    },
  ],
  'username-generator': [
    {
      q: 'Can I use the same username on every platform?',
      a: 'Length rules differ - Instagram allows 30 characters, X 15, Discord 32 - so set the max length to the strictest platform you use and favor lowercase letters plus digits for portability.',
    },
    {
      q: 'Are these usernames safe to use as passwords?',
      a: 'No. Handles are public and guessable by design; use the password generator for anything that protects an account.',
    },
    {
      q: 'Why does it say no candidate fits?',
      a: 'The max-length filter drops longer combinations - raise the limit or use a shorter keyword. The generator never truncates, because a cut-off name looks worse than a different one.',
    },
    {
      q: 'What do the four styles do?',
      a: 'Gamer adds leet digits and xX...Xx decoration, Retro picks an 80s/90s year suffix, Minimal stays clean lowercase, and Underscore joins two words with the classic _.',
    },
  ],
  'secret-santa-generator': [
    {
      q: 'How do exclusion pairs work?',
      a: 'Enter one pair per line like "Alice - Bob" and those two will never draw each other - useful for couples, teammates, or rivals. Everyone still gives and receives exactly one gift.',
    },
    {
      q: 'Can anyone draw their own name?',
      a: 'No. The result is a derangement - a closed loop where every giver maps to a different receiver - and it is verified before anything is shown.',
    },
    {
      q: 'What if the exclusions make a draw impossible?',
      a: 'The tool tells you instead of quietly bending a rule, for example three people where every pair is banned. Loosen one exclusion and draw again.',
    },
    {
      q: 'How do I share the results without spoiling them?',
      a: 'Pass the device around: each person picks their own name, sees only their recipient, and copies the message to their notes. The organizer never needs to see any pairing.',
    },
  ],
  'faq-schema-generator': [
    {
      q: 'Where do I paste the generated FAQ schema?',
      a: 'Anywhere in the page HTML - the head or just before the closing body tag both work. Search engines read the whole document, so placement does not affect parsing.',
    },
    {
      q: 'Does the FAQ text have to be visible on the page?',
      a: 'Yes. Google\'s guidelines require the questions and answers in the markup to also appear on the page for users. Schema-only FAQs that visitors cannot see risk losing rich results entirely.',
    },
    {
      q: 'Will my page get FAQ rich results in Google?',
      a: 'Since August 2023 Google shows FAQ rich results mostly for authoritative government and health sites. The markup is still valid and helps other search engines and AI answer engines understand your page.',
    },
    {
      q: 'Why JSON-LD instead of microdata?',
      a: 'Google recommends JSON-LD: it lives in one script tag, survives CMS and theme changes, and can be generated server-side without touching your visible HTML.',
    },
  ],
  'number-to-words-converter': [
    {
      q: 'How large a number can it spell out?',
      a: 'Up to 999 trillion in the short scale used in American English - thousand, million, billion, trillion. Beyond that English needs quadrillion, which this tool flags as out of range.',
    },
    {
      q: 'How are decimals and negative numbers written?',
      a: 'The whole-number part is spelled normally, the decimal point becomes the word "point", and the following digits are read one at a time: 3.14 is "three point one four". Negatives get "negative" in front.',
    },
    {
      q: 'When do I use the ordinal form?',
      a: 'Use ordinals for positions and dates: 21 becomes "twenty-first", 42 "forty-second". Legal and financial writing usually spells the cardinal ("forty-two") and adds digits in parentheses for clarity.',
    },
    {
      q: 'Should there be an "and" as in British English?',
      a: 'American style omits it: 123 is "one hundred twenty-three". British usage inserts "and" ("one hundred and twenty-three"). Both are correct; this tool follows the American convention.',
    },
  ],
  'ohms-law-calculator': [
    {
      q: 'Why exactly two values?',
      a: 'V = I × R and P = V × I tie the four quantities together with two degrees of freedom: any two fix the other two. Enter more and the system is over-determined, fewer and it is unsolvable.',
    },
    {
      q: "What are the twelve Ohm's law formulas?",
      a: 'Combining V = IR with P = VI yields twelve equations: V from I and R or P and I or P and R; I from V and R or P and V or P and R; and so on. This calculator applies whichever pair you supply.',
    },
    {
      q: 'Does it work for AC circuits?',
      a: 'Yes, with RMS values. Use the RMS voltage and current and the formulas hold for resistive loads. For reactive components you need impedance and power factor, which is a different calculation.',
    },
    {
      q: 'Why does my 9 V battery not give 9 V under load?',
      a: 'Every real source has internal resistance that drops the terminal voltage as current rises. A small 9 V battery sags noticeably above about 100 mA - measure under load, not open-circuit.',
    },
  ],
  'led-resistor-calculator': [
    {
      q: 'Why round up to the next E12 value?',
      a: 'A larger resistor means less current, and less current is always safe for the LED. Rounding up typically costs a few percent brightness; rounding down can push the LED past its rated current.',
    },
    {
      q: 'Can I skip the resistor on a 3 V coin cell?',
      a: "Often yes - a coin cell's internal resistance (tens of ohms) limits current naturally, which is why 3 V lithium cells run LEDs directly. Any stiffer supply needs the resistor.",
    },
    {
      q: 'What power rating should the resistor have?',
      a: 'Pick a rating at least twice the dissipation shown, and four times for enclosed or hot builds. A 1/4 W part running at 200 mW is fine on a bench but toasts inside a sealed enclosure.',
    },
    {
      q: 'Should I wire LEDs in series or parallel?',
      a: 'Series, whenever the supply allows it: one resistor serves the string and currents stay matched. Parallel LEDs share unevenly because of forward-voltage spread - give each branch its own resistor.',
    },
  ],
  'resistor-color-code-calculator': [
    {
      q: 'Which end of the resistor do I start reading from?',
      a: 'Hold it so the gold or silver tolerance band sits on the right - that band has a visibly wider gap to its neighbor. On 5-band parts without gold or silver, put the extra digit band on the left.',
    },
    {
      q: 'What is the difference between 4, 5, and 6 bands?',
      a: 'Four bands give two significant digits, a multiplier, and tolerance (±5% or ±10% typical). Five bands add a third digit for ±1% and better precision. The rare sixth band is temperature drift in ppm/K.',
    },
    {
      q: 'How do I read resistances under 10 ohms?',
      a: 'Gold and silver appear as multipliers: gold multiplies by 0.1 and silver by 0.01. So brown-black-gold-gold reads 1.0 Ω ±5% - the decimal lives in the multiplier band.',
    },
    {
      q: 'Why does my multimeter disagree with the code?',
      a: 'Within tolerance, it should. A ±5% 470 Ω part may legally read anywhere from 446.5 to 493.5 Ω; if it reads further off, you are likely measuring it in-circuit, where parallel paths skew the reading.',
    },
  ],
  'voltage-divider-calculator': [
    {
      q: 'What load can I hang on a divider?',
      a: 'Treat the load as a resistor in parallel with R2. As a rule of thumb keep the divider current at least ten times the load current, or the output sags well below the calculated value.',
    },
    {
      q: 'How do I get exactly 3.3 V from a divider?',
      a: 'Switch to solve mode, enter Vin and R1, and set the target to 3.3 V - the calculator returns the exact R2 (for 12 V and 10 kΩ that is 3.79 kΩ, so grab the nearest E12 value, 3.9 kΩ).',
    },
    {
      q: 'Can a divider step 12 V down to power a 3.3 V chip?',
      a: 'No. Dividers regulate voltage only, not current - a load that draws milliamps will drag the node everywhere. Use a linear regulator or buck converter for power; dividers are for signals and bias.',
    },
    {
      q: 'Why does my measured Vout read low?',
      a: "Your meter's input impedance (usually 10 MΩ) parallels R2, plus the load itself. Very high-value dividers shift the most - the chart's Vout-vs-R2 curve shows how the node saturates as R2 grows.",
    },
  ],
  'tone-generator': [
    {
      q: 'Is it safe for my speakers and ears?',
      a: 'At moderate volume, yes. Start low: sine tones at 60-80 dB feel louder than music because they concentrate all energy at one frequency. Avoid full volume with headphones, especially below 100 Hz where damage is painless.',
    },
    {
      q: 'Why do equal-volume frequencies sound unequal?',
      a: 'Hearing is not flat - the Fletcher-Munson curves show ears are most sensitive around 2-4 kHz and roll off at the extremes. A 100 Hz tone needs far more level than a 1 kHz tone to sound as loud.',
    },
    {
      q: 'Which frequency is concert pitch A?',
      a: '440 Hz, A4, the orchestral reference. Each semitone is a factor of the twelfth root of two, so A5 is 880 Hz and A3 is 220 Hz - the tool shows the nearest note and cents off for any frequency.',
    },
    {
      q: 'What are square and sawtooth waves used for?',
      a: 'Square waves contain odd harmonics and drive synthesizer brash and distortion pedals; sawtooth waves contain all harmonics and are the classic analog synth string and brass building block. Sine is pure tone with no harmonics.',
    },
  ],
  'bpm-tap-counter': [
    {
      q: 'How many taps do I need for an accurate BPM?',
      a: 'Four to eight is the sweet spot. This counter averages your last eight intervals, so the first impulsive taps fade out and the reading stabilizes - keep tapping until the consistency meter reads steady or locked.',
    },
    {
      q: 'Why is my reading double what the song feels like?',
      a: 'You are probably tapping eighth notes, or the track is in half-time. Tap the pulse you would nod your head to - the quarter note - and halve or double deliberately, not by accident.',
    },
    {
      q: 'Does the counter work with recorded and live music?',
      a: 'Both. Tap along to any audio source - a phone speaker, a band rehearsal, a video. Human taps land a few milliseconds either side of the beat, which is exactly what the windowed average smooths out.',
    },
    {
      q: 'What is the consistency meter telling me?',
      a: 'It is the spread of your tap intervals: locked means under 2% variation, steady under 5%. An uneven reading usually means the rhythm is rubato, not that your fingers failed.',
    },
  ],
  'delay-time-calculator': [
    {
      q: 'How do I sync a delay pedal to a song?',
      a: 'Know the tempo, then dial the delay to a note fraction: 1/4 for spacious repeats, 1/8 for a busier trail, dotted 1/8 for the rhythm-defining syncopation. This calculator gives the exact milliseconds.',
    },
    {
      q: 'Why is the dotted eighth so famous?',
      a: 'A dotted eighth repeats every 3/4 of a beat, so echoes land off-grid and interleave with your playing - the pulse-pushing sound of "Where the Streets Have No Name" and "Run Like Hell".',
    },
    {
      q: 'What do the triplet values mean?',
      a: 'A triplet note plays three-in-the-space-of-two, so a triplet eighth lasts 2/3 of a straight eighth. Use triplet delays over swing or shuffle feels so the repeats sit inside the groove.',
    },
    {
      q: 'What is the LFO rate column for?',
      a: 'Modulation pedals - chorus, flanger, tremolo - repeat at a frequency you can set in Hz. Rate-per-note at the song tempo makes the sweep lock musically to the beat instead of drifting against it.',
    },
  ],
  'utm-link-builder': [
    {
      q: 'What are the five UTM parameters for?',
      a: 'utm_source says where the traffic came from (newsletter, google), utm_medium the channel (email, cpc), utm_campaign the specific push, utm_term the paid keyword, and utm_content the creative variant. GA4 stitches them into session source/medium so campaigns land in reports instead of "(direct)".',
    },
    {
      q: 'Which UTM parameters are required?',
      a: 'source and medium at minimum — GA4 drops attribution without both and the session becomes direct/none. utm_campaign is strongly recommended for any report you slice by campaign.',
    },
    {
      q: 'Do UTM parameters hurt SEO or get indexed?',
      a: 'Google ignores them for ranking, but the URL with parameters can still be crawled and shown in results. Canonical tags or Search Console parameter handling keep the clean version indexed — and never tag internal links, which overwrites the visitor\'s original source.',
    },
    {
      q: 'Why did my report split Email and email into two rows?',
      a: 'Values are case-sensitive, and so are spacing and encoding. Pick lowercase-with-dashes once and keep a shared list of campaign names — naming drift is the number one UTM reporting problem, and this tool flags uppercase input for exactly that reason.',
    },
  ],
  'credit-card-validator': [
    {
      q: 'What does this validator actually check?',
      a: 'Three things: the digit shape (12-19 digits), the brand implied by the issuer prefix with its allowed lengths (Visa, Mastercard, Amex, Discover, JCB, Diners, UnionPay), and the Luhn checksum. It cannot check whether the account exists or is funded — only the issuing bank knows that at authorization time.',
    },
    {
      q: 'Is it safe to paste a real card number here?',
      a: 'Everything runs in your browser with no network request and nothing stored. That said, the good habit is to use published test numbers like Visa\'s 4111 1111 1111 1111 — they pass Luhn and connect to no real account.',
    },
    {
      q: 'Why does a "valid" card still get declined?',
      a: 'Passing Luhn only means the digits are well-formed. Real declines come from account status, funds, fraud rules, expiry or a wrong CVC — none of which live in the number itself.',
    },
    {
      q: 'How does the Luhn checksum work?',
      a: 'From the right, double every second digit, subtract 9 from results over 9, and require the total to be a multiple of 10. It is IBM 1954 anti-typo engineering, not security — it catches single mistyped digits and almost all adjacent transpositions.',
    },
  ],
  'iban-validator': [
    {
      q: 'What does the mod-97 check prove?',
      a: 'That the IBAN is structurally sound: move the first four characters to the end, convert letters to numbers (A=10 … Z=35), and the whole string must leave remainder 1 when divided by 97. That rejects roughly 99% of random typos — but says nothing about whether the account exists or accepts payments.',
    },
    {
      q: 'Why does my correct IBAN fail validation?',
      a: 'The most common cause is wrong length for the country — this tool checks the official registry table, where Norway is 15, Germany and the UK 22, Malta 31. Lookalike characters come next (O and I typed as 0 and 1), and check digits 00, 01 or 99 are always invalid under ISO 13616.',
    },
    {
      q: 'Do I still need the BIC/SWIFT code?',
      a: 'This tool validates IBANs only. Within SEPA (EU/EEA) the IBAN alone is enough; transfers further out usually also require the recipient bank\'s BIC, which is a separate registry.',
    },
    {
      q: 'Do all countries use IBAN?',
      a: 'Around 90 countries and territories do. The US, Canada and Australia still use domestic routing systems (like the ABA routing number), so such inputs here report an uncatalogued country code.',
    },
  ],
  'graphql-formatter': [
    {
      q: 'Does it validate my GraphQL?',
      a: 'It runs a real tokenizer plus bracket-balance checking: unterminated strings, unclosed braces and stray characters are reported with their position, and incomplete input is rejected instead of producing half-formatted output. Semantic schema validation (does this field exist) is a different job for the server side.',
    },
    {
      q: 'What happens to # comments?',
      a: 'Beautify keeps them, realigned to the new indentation; minify drops them, which is the point of minifying. Everything else — strings, block strings, directives, variables, fragment spreads — round-trips unchanged.',
    },
    {
      q: 'Does it work on schema (SDL) files?',
      a: 'Yes. type, interface, union, enum, input and triple-quoted descriptions tokenize with the same rules as operations, so .graphql schema files format here too.',
    },
    {
      q: 'How much does minifying save?',
      a: 'It depends on comment and whitespace density; 30-40% is typical for a long commented query. Remember that gzip already compresses whitespace extremely well, so the real gains are parse time and log readability rather than network bytes.',
    },
  ],
  'http-status-code-lookup': [
    {
      q: 'Are all status codes in this table?',
      a: 'All 62 IANA-registered codes from 100 to 511. Vendor extensions — Cloudflare\'s 52x family, nginx\'s 499, homegrown 599s — are deliberately excluded: they are not standard and mean different things in different stacks.',
    },
    {
      q: 'What is the difference between 401 and 403?',
      a: '401 is "who are you?" — missing or invalid credentials, usually fixed by logging in again or refreshing a token. 403 is "I know you, and no" — an authorization problem where better credentials do not help; only different permissions do.',
    },
    {
      q: 'How do I choose between 301, 302, 307 and 308?',
      a: 'Two axes: permanence and method preservation. 301/302 are historic and browsers may rewrite a POST into a GET; 307/308 guarantee the method and body arrive intact. Use 307 for temporary and 308 for permanent redirects of non-GET requests.',
    },
    {
      q: 'Which status codes matter for SEO?',
      a: '200 (fine), 301/308 (moved for good), 302 (temporary), 404 (not here), 410 (deliberately gone — delists faster than 404) and 503 with Retry-After during maintenance, which signals "come back later" instead of "this site is dead".',
    },
  ],
  'css-minifier': [
    {
      q: 'How much smaller will my CSS get?',
      a: 'Comments plus whitespace typically mean 15-30%. Since gzip already compresses whitespace very well, the network win is modest — the real benefits are parse time, cache-hash stability, and CSS small enough to inline above the fold.',
    },
    {
      q: 'Why does it keep spaces inside calc()?',
      a: 'The CSS grammar requires whitespace around + and - inside calc(); removing it invalidates the whole declaration. That is the number one way naive minifiers corrupt stylesheets, so those spaces stay — as do string contents and /*! banner comments.',
    },
    {
      q: 'Does it merge rules or shorten colors?',
      a: 'Deliberately not. Merging overlapping selectors changes cascade order and can break stylesheets far from the edit. Only provably safe byte-level folds are applied: 0px to 0, 0.5 to .5, dropping trailing semicolons and empty rules.',
    },
    {
      q: 'Is 0% folded to 0 as well?',
      a: 'No — that is a deliberate exception. Inside flex-basis (and a few other corners) 0% and 0 resolve differently, so only absolute units (px, em, rem, vh, vw, pt…) are folded. Percentages pass through untouched.',
    },
  ],
  'csv-to-sql-converter': [
    {
      q: 'Which SQL dialect does it generate?',
      a: 'Plain multi-row INSERT INTO ... VALUES that works in MySQL, PostgreSQL and SQLite. Identifier quoting toggles between MySQL backticks and ANSI double quotes; values use the universal single-quote doubling.',
    },
    {
      q: 'How are quotes and special characters escaped?',
      a: 'Single quotes in values are doubled (the SQL standard, accepted everywhere), and table or column names from the CSV header are sanitized to [A-Za-z0-9_] before quoting — nothing from the file ever becomes raw statement syntax.',
    },
    {
      q: 'How are empty cells handled?',
      a: 'Your choice: NULL or empty string. Type inference also kicks in — a column whose non-empty cells all parse as numbers is emitted unquoted; everything else is quoted as a string.',
    },
    {
      q: 'Can it create the table too?',
      a: 'No — it generates INSERT statements only. The header row becomes your column list, which is exactly what you need for the CREATE TABLE; column types cannot be inferred reliably from CSV and belong in your schema.',
    },
  ],
  'rot13-converter': [
    {
      q: 'Is ROT13 encryption?',
      a: 'No. There are only 25 possible shifts and any decoder reverses it in seconds — it is obfuscation against a passing glance, not confidentiality. Never protect anything real with it.',
    },
    {
      q: 'How do I decode ROT13?',
      a: 'Paste the output back into the input — ROT13 is its own inverse because 13 + 13 = 26, one full turn of the alphabet. Any other shift N is undone by 26 − N, so ROT7 decodes with ROT19.',
    },
    {
      q: 'What happens to numbers and punctuation?',
      a: 'They pass through unchanged unless ROT5 is enabled, which rotates digits by 5 (0↔5, 1↔6) and is also self-inverse. Punctuation, spaces and non-Latin letters never change.',
    },
    {
      q: 'Why do people still use ROT13?',
      a: 'Forum spoiler etiquette, puzzle hints, scrambled answer keys — the classic Usenet use case survives because a veil you must choose to lift is exactly right for "read only if you want to know".',
    },
  ],
}
export function getToolFaqs(slug: string): FaqPair[] {
  return toolFaqs[slug] ?? []
}
