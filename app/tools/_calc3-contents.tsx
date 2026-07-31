import type { ReactNode } from 'react'
import { ToolContent } from '@/lib/content-templates'

/** 健康类(4 个)+ 数学类(3 个)+ 金融类(6 个)= 13 个计算器内容 */

// ── 健康类 ──

export function CalorieCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This calculator estimates your daily calorie needs using the{' '}
          <strong>Mifflin-St Jeor equation</strong>, the most accurate formula for most people. It
          shows your BMR (calories at rest) and TDEE (total daily burn including activity), plus
          targets for losing or gaining weight.
        </p>
      }
      sections={[
        {
          heading: 'How Calorie Needs Are Calculated',
          body: (
            <p>
              The Mifflin-St Jeor formula estimates BMR from your weight, height, age, and sex. Your
              TDEE multiplies BMR by an activity factor (1.2 for sedentary up to 1.9 for very
              active). To lose weight, eat below TDEE; to gain, eat above.
            </p>
          ),
        },
        {
          heading: 'Safe Rate of Change',
          body: (
            <ul>
              <li><strong>Mild loss:</strong> −250 cal/day ≈ −0.25 kg (0.5 lb) per week</li>
              <li><strong>Standard loss:</strong> −500 cal/day ≈ −0.5 kg (1 lb) per week</li>
              <li><strong>Aggressive loss:</strong> −1000 cal/day ≈ −1 kg (2 lb) per week (not for everyone)</li>
              <li>Don&apos;t eat below 1,200 cal (women) or 1,500 cal (men) without medical supervision</li>
            </ul>
          ),
        },
        {
          heading: 'Why Estimates Vary',
          body: (
            <p>
              These formulas are accurate within about ±10% for most people, but individual
              metabolism varies based on muscle mass, genetics, hormones, and gut health. Use the
              number as a starting point and adjust based on real-world results over 2-3 weeks.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Should I count "net" or "total" calories?', a: 'For weight loss, total calories matter most. Exercise apps often overestimate calories burned by 20-30%, so don\'t "eat back" all your exercise calories.' },
      ]}
    />
  )
}

export function BMRCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          <strong>BMR</strong> (Basal Metabolic Rate) is the number of calories your body burns at
          complete rest, just to keep you alive — breathing, circulating blood, maintaining body
          temperature. It accounts for 60-75% of the calories you burn each day.
        </p>
      }
      sections={[
        {
          heading: 'The Mifflin-St Jeor Formula',
          body: (
            <p>
              This calculator uses the most accurate modern formula:
            </p>
          ),
        },
        {
          heading: 'Factors That Affect BMR',
          body: (
            <ul>
              <li><strong>Muscle mass</strong> — muscle burns more than fat, even at rest</li>
              <li><strong>Age</strong> — BMR drops about 2% per decade after 20</li>
              <li><strong>Sex</strong> — men typically have higher BMR due to more muscle</li>
              <li><strong>Body size</strong> — larger bodies burn more calories</li>
              <li><strong>Genetics</strong> — some people naturally burn more or less</li>
            </ul>
          ),
        },
        {
          heading: 'BMR vs. TDEE',
          body: (
            <p>
              BMR is calories at <em>complete rest</em>. Your actual daily burn (TDEE) is BMR
              multiplied by an activity factor. Even light activity adds 20-40% on top of BMR. Use
              the Calorie Calculator if you want your full daily burn.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Can I speed up my metabolism?', a: 'Building muscle is the only reliable way to raise BMR long-term — each pound of muscle burns about 6 calories/day at rest vs. 2 for fat. Extreme diets actually slow metabolism.' },
      ]}
    />
  )
}

export function WaterIntakeCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This calculator estimates how much water you should drink daily, based on body weight,
          exercise, and climate. It uses the widely cited guideline of ~35 ml per kg of body weight,
          adjusted for activity and heat.
        </p>
      }
      sections={[
        {
          heading: 'General Guidelines',
          body: (
            <ul>
              <li><strong>Sedentary adults:</strong> ~35 ml per kg body weight</li>
              <li><strong>Add 350-500 ml</strong> per hour of exercise</li>
              <li><strong>Hot/humid climates:</strong> add 10-20%</li>
              <li><strong>Pregnancy or breastfeeding:</strong> add 500-700 ml</li>
              <li>Coffee, tea, and food all count toward your total water intake</li>
            </ul>
          ),
        },
        {
          heading: 'Listen to Your Body',
          body: (
            <p>
              Formulas are starting points, not rules. Thirst is a reliable signal for most people.
              Check urine color — pale yellow means you&apos;re well hydrated; dark yellow means
              drink more. Clear urine means you may be overhydrated.
            </p>
          ),
        },
        {
          heading: 'Can You Drink Too Much Water?',
          body: (
            <p>
              Yes. <strong>Hyponatremia</strong> (low blood sodium from excessive water) is rare but
              dangerous, and has affected endurance athletes who drink far more than they lose. Don&apos;t
              force multiple liters beyond thirst unless advised by a doctor.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Does coffee and tea count?', a: 'Yes. Despite being mild diuretics, caffeinated beverages still contribute net positive water. The old idea that coffee "doesn\'t count" has been debunked.' },
      ]}
    />
  )
}

export function IdealWeightCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This calculator shows your <strong>ideal body weight</strong> using three classic medical
          formulas (Devine, Robinson, Hamwi), plus the BMI-based healthy range. Each formula was
          developed for different populations and gives slightly different results.
        </p>
      }
      sections={[
        {
          heading: 'The Three Formulas',
          body: (
            <ul>
              <li><strong>Devine (1974):</strong> Originally developed for drug dosing; still the most widely cited</li>
              <li><strong>Robinson (1983):</strong> Updated Devine with newer data</li>
              <li><strong>Hamwi (1964):</strong> Older formula, still used in some clinical settings</li>
            </ul>
          ),
        },
        {
          heading: 'Why Results Differ',
          body: (
            <p>
              The formulas were built on different data and assumptions about body composition.
              They&apos;re all estimates — your true healthy weight depends on muscle mass, frame
              size, body fat distribution, and overall health, none of which a simple formula can
              capture.
            </p>
          ),
        },
        {
          heading: 'A More Useful Number: BMI Range',
          body: (
            <p>
              The BMI-based healthy range (18.5-24.9 × your height²) is more flexible than a single
              ideal weight. Anywhere in that range is statistically associated with the lowest health
              risks for most adults.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Which formula should I trust?', a: 'None of them is perfect. Use the BMI healthy weight range as your primary guide, and treat the formula numbers as ballpark references. Muscle mass and body composition matter more than any single target weight.' },
      ]}
    />
  )
}

// ── 数学类 ──

export function FractionCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This calculator performs exact arithmetic on fractions — add, subtract, multiply, and
          divide. Results are automatically simplified to lowest terms and shown as both a fraction
          and a decimal.
        </p>
      }
      sections={[
        {
          heading: 'The Four Operations',
          body: (
            <ul>
              <li><strong>Add/Subtract:</strong> Find a common denominator, then combine numerators</li>
              <li><strong>Multiply:</strong> Multiply numerators, multiply denominators</li>
              <li><strong>Divide:</strong> Flip the second fraction (reciprocal), then multiply</li>
              <li>Results are reduced using the greatest common divisor (GCD)</li>
            </ul>
          ),
        },
        {
          heading: 'Example Calculations',
          body: (
            <ul>
              <li>1/2 + 1/3 = 5/6</li>
              <li>3/4 × 2/5 = 6/20 = 3/10</li>
              <li>2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6</li>
              <li>5/2 = 2 1/2 (mixed number)</li>
            </ul>
          ),
        },
        {
          heading: 'Why Fractions Matter',
          body: (
            <p>
              Fractions give exact answers where decimals round off. In carpentry, cooking,
              engineering, and music theory, fractions are the natural language. A measurement of
              1/3 inch is more precise than 0.33 inch — and a fraction calculator prevents
              accumulation of rounding errors.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Can it handle mixed numbers like 2 1/2?', a: 'Enter 5/2 (the improper form). The result will display as "2 1/2" if it\'s greater than 1.' },
      ]}
    />
  )
}

export function RatioCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          A <strong>ratio</strong> compares two quantities, like 3:2 or 5 to 4. This calculator
          solves proportions — given three values of A:B = C:D, it finds the fourth. It also
          simplifies ratios to lowest terms.
        </p>
      }
      sections={[
        {
          heading: 'How Proportions Work',
          body: (
            <p>
              In a proportion A:B = C:D, the cross products are equal: <code>A × D = B × C</code>. So
              if you know any three values, you can solve for the fourth. To find D:{' '}
              <code>D = (B × C) ÷ A</code>.
            </p>
          ),
        },
        {
          heading: 'Common Uses',
          body: (
            <ul>
              <li><strong>Recipes:</strong> Scaling a recipe from 4 servings to 6</li>
              <li><strong>Maps:</strong> 1 inch = 50 miles → how far is 3.5 inches?</li>
              <li><strong>Business:</strong> Revenue per employee, profit margins</li>
              <li><strong>Photography:</strong> Aspect ratios like 3:2 or 16:9</li>
              <li><strong>Construction:</strong> Mixing concrete at 1:2:3 ratios</li>
            </ul>
          ),
        },
        {
          heading: 'Example',
          body: (
            <p>
              A recipe serves 4 and uses 2 cups of flour. How much flour for 6 servings? Set up the
              proportion 4:2 = 6:D. Solving: <code>D = (2 × 6) ÷ 4 = 3 cups</code>.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'What if my ratio has decimals?', a: 'This calculator handles decimals fine. To work with whole numbers, multiply both sides by 10 or 100 to remove decimals first.' },
      ]}
    />
  )
}

export function LCMGcdCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This calculator finds the <strong>GCD</strong> (greatest common divisor) and{' '}
          <strong>LCM</strong> (least common multiple) of any set of positive integers. These are
          fundamental concepts in number theory with practical uses in math and programming.
        </p>
      }
      sections={[
        {
          heading: 'What GCD and LCM Mean',
          body: (
            <ul>
              <li><strong>GCD</strong> is the largest number that divides all inputs evenly. For 12 and 18, that&apos;s 6 (both divide by 1, 2, 3, and 6 — and 6 is the largest).</li>
              <li><strong>LCM</strong> is the smallest number that all inputs divide into evenly. For 4 and 6, that&apos;s 12 (the smallest number divisible by both).</li>
            </ul>
          ),
        },
        {
          heading: 'Real-World Uses',
          body: (
            <ul>
              <li><strong>Adding fractions:</strong> LCM of denominators gives the common denominator</li>
              <li><strong>Scheduling:</strong> If event A runs every 4 days and B every 6 days, they coincide every LCM(4,6) = 12 days</li>
              <li><strong>Tile patterns:</strong> Find the largest square tile that fits evenly into a rectangular floor</li>
              <li><strong>Cryptography:</strong> GCD is the basis of the RSA algorithm</li>
            </ul>
          ),
        },
        {
          heading: 'The Relationship',
          body: (
            <p>
              For any two numbers: <code>GCD(a,b) × LCM(a,b) = a × b</code>. So if you know one, you
              can find the other instantly. This calculator uses the efficient Euclidean algorithm,
              which works even for very large numbers.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'What if I enter just one number?', a: 'The GCD of a single number is the number itself, and its LCM is also itself. The calculator handles this case correctly.' },
      ]}
    />
  )
}

// ── 金融类 ──

export function MortgageCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This calculator estimates your monthly mortgage payment using the standard amortization
          formula. Enter the home price, down payment, interest rate, and loan term to see your
          monthly payment (principal and interest), loan amount, and total interest paid over the
          life of the loan.
        </p>
      }
      sections={[
        {
          heading: 'What\'s Not Included',
          body: (
            <p>
              This calculator shows <strong>principal and interest only</strong>. Your real monthly
              payment also includes:
            </p>
          ),
        },
        {
          heading: 'How Down Payment Affects Cost',
          body: (
            <ul>
              <li><strong>Larger down payment</strong> → smaller loan → less interest paid overall</li>
              <li><strong>Under 20% down</strong> → most lenders require PMI (private mortgage insurance), adding $50-300/month</li>
              <li><strong>20%+ down</strong> → no PMI, better interest rates, lower monthly payments</li>
            </ul>
          ),
        },
        {
          heading: 'Loan Term Trade-offs',
          body: (
            <p>
              A 30-year mortgage has lower monthly payments but costs dramatically more in interest.
              A 15-year mortgage has higher payments but saves tens of thousands. On a $400,000 loan
              at 6.8%, a 30-year term pays ~$543,000 in interest versus ~$228,000 for 15 years — but
              the monthly payment jumps from ~$2,600 to ~$3,500.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Should I get a 15 or 30 year mortgage?', a: '30-year if you need lower payments or want to invest the difference; 15-year if you can afford it and want to save massively on interest. Many people take a 30-year and pay extra when they can.' },
      ]}
    />
  )
}

export function MarkupCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This calculator finds your selling price and profit margin from your cost and markup
          percentage. It&apos;s essential for retailers, restaurants, and any business that prices
          products.
        </p>
      }
      sections={[
        {
          heading: 'Markup vs. Margin: The Critical Difference',
          body: (
            <p>
              These two terms are constantly confused but mean very different things:
            </p>
          ),
        },
        {
          heading: 'Typical Markups by Industry',
          body: (
            <ul>
              <li><strong>Grocery:</strong> 10-15% markup, ~10% margin</li>
              <li><strong>Restaurants:</strong> 60-70% markup on food (food cost ~30-40%)</li>
              <li><strong>Apparel:</strong> 100-300% markup (keystone = 100% = 50% margin)</li>
              <li><strong>Electronics:</strong> 20-40% markup, thin margins</li>
              <li><strong>Jewelry:</strong> 200-400% markup</li>
            </ul>
          ),
        },
        {
          heading: 'Why It Matters',
          body: (
            <p>
              Confusing markup and margin leads to underpricing. If you want a 30% profit margin and
              your cost is $100, you can&apos;t just add 30% — that gives a $130 price with only a
              23% margin ($30 ÷ $130). You need to divide: <code>$100 ÷ (1 − 0.30) = $142.86</code>.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'How do I calculate price for a target margin?', a: 'Price = Cost ÷ (1 − Margin). For a 40% margin on $60 cost: 60 ÷ 0.60 = $100.' },
      ]}
    />
  )
}

export function HourlyToSalaryCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This calculator converts your hourly wage into equivalent annual, monthly, weekly, and
          daily salaries. It assumes 40 hours per week and 52 paid weeks per year, but you can
          adjust the hours for part-time or overtime work.
        </p>
      }
      sections={[
        {
          heading: 'The Standard Formula',
          body: (
            <p>
              Annual salary = hourly rate × hours per week × weeks per year. The default uses 40
              hours and 52 weeks (2,080 hours/year). Adjust the hours field if you work more or less.
            </p>
          ),
        },
        {
          heading: 'Hourly Rates and Annual Salary',
          body: (
            <ul>
              <li>$15/hr ≈ $31,200/year</li>
              <li>$20/hr ≈ $41,600/year</li>
              <li>$25/hr ≈ $52,000/year</li>
              <li>$30/hr ≈ $62,400/year</li>
              <li>$50/hr ≈ $104,000/year</li>
              <li>$100/hr ≈ $208,000/year</li>
            </ul>
          ),
        },
        {
          heading: 'Things This Calculator Doesn\'t Capture',
          body: (
            <ul>
              <li><strong>Overtime</strong> (time-and-a-half over 40 hours in the US)</li>
              <li><strong>Unpaid time off</strong> — many hourly workers don&apos;t get paid leave</li>
              <li><strong>Taxes</strong> — take-home is roughly 65-75% of gross</li>
              <li><strong>Benefits</strong> — health insurance and retirement matching can be worth $10,000+/year</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'Is salary or hourly better?', a: 'Salaried jobs typically offer benefits and stability; hourly jobs offer overtime pay and flexibility. A $50,000 salary working 50 hours/week equals ~$19/hr — less than an hourly $25/hr job at 40 hours.' },
      ]}
    />
  )
}

export function ROIcalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          <strong>ROI</strong> (Return on Investment) measures how much profit an investment made
          relative to its cost. This calculator shows total ROI and annualized return (CAGR), so you
          can compare investments held for different lengths of time.
        </p>
      }
      sections={[
        {
          heading: 'The Formulas',
          body: (
            <ul>
              <li><strong>Total ROI</strong> = (Final Value − Initial Cost) ÷ Initial Cost × 100</li>
              <li><strong>Annualized (CAGR)</strong> = (Final/Initial)^(1/Years) − 1</li>
            </ul>
          ),
        },
        {
          heading: 'Total vs. Annualized ROI',
          body: (
            <p>
              Total ROI doesn&apos;t account for time. A 50% gain in 1 year is excellent; the same
              50% gain over 10 years is mediocre (~4% annually). Annualized return (CAGR) lets you
              compare a 5-year stock investment to a 20-year real estate one on equal footing.
            </p>
          ),
        },
        {
          heading: 'Typical Annual Returns',
          body: (
            <ul>
              <li><strong>S&amp;P 500 (long-term average):</strong> ~10% (7% after inflation)</li>
              <li><strong>Bonds:</strong> ~4-5%</li>
              <li><strong>Real estate:</strong> ~8-10% (with rent + appreciation)</li>
              <li><strong>Savings account:</strong> ~2-5% (varies with rates)</li>
              <li><strong>Inflation (US):</strong> ~3% historical average</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'Should I compare investments by total or annualized ROI?', a: 'Always annualized. Total ROI is meaningless without the time horizon. A 100% gain sounds great — but over 20 years that\'s just 3.5% per year.' },
      ]}
    />
  )
}

export function CreditCardPayoffCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <>
          <p>
            Credit card debt is among the most expensive borrowing you can carry. Average APRs in the
            US sit between 20% and 28%, far higher than mortgages, auto loans, or personal loans. This
            calculator shows exactly how long it will take to pay off your balance at a given monthly
            payment, and &mdash; more importantly &mdash; how much of your money goes to interest
            versus the actual debt.
          </p>
          <p>
            The results often shock people. A modest balance paid at the minimum can cost more in
            interest than the original purchases, and take decades to clear. The good news: even a
            small increase in your monthly payment dramatically shortens the timeline and slashes the
            total interest paid.
          </p>
        </>
      }
      sections={[
        {
          heading: 'How Credit Card Interest Actually Works',
          body: (
            <>
              <p>
                Most credit cards compound interest <strong>daily</strong>, based on your average
                daily balance. The advertised APR is divided by 365 to get a daily rate, and that
                daily rate is applied to your balance every day. Over a month, this adds up to
                slightly more than APR &divide; 12 would suggest.
              </p>
              <p>
                When you carry a balance, your grace period disappears. New purchases start accruing
                interest immediately, from the day of the transaction. This is why carrying a balance
                is so costly &mdash; you lose the 21-25 day interest-free window that cardholders who
                pay in full enjoy.
              </p>
            </>
          ),
        },
        {
          heading: 'The Minimum Payment Trap',
          body: (
            <>
              <p>
                Minimum payments are deliberately set low &mdash; typically 1% to 3% of your balance
                plus that month&apos;s interest. From the bank&apos;s perspective, a low minimum keeps
                you paying for as long as possible. From yours, it&apos;s a trap.
              </p>
              <p>
                A <strong>$5,000 balance at 22% APR</strong> with a typical minimum payment of around
                $110/month takes <strong>over 27 years</strong> to pay off and costs roughly{' '}
                <strong>$8,000 in interest</strong> &mdash; more than the original debt. You end up
                paying for whatever you bought nearly three times over.
              </p>
            </>
          ),
        },
        {
          heading: 'The Power of Paying More',
          body: (
            <>
              <p>The single most effective move is paying more than the minimum. Same $5,000 at 22% APR:</p>
              <ul>
                <li>
                  <strong>Minimum (~$110/month):</strong> ~27 years, ~$8,000 interest
                </li>
                <li>
                  <strong>$200/month:</strong> ~2.8 years, ~$1,650 interest <em>(saves ~$6,350)</em>
                </li>
                <li>
                  <strong>$300/month:</strong> ~1.8 years, ~$1,050 interest <em>(saves ~$6,950)</em>
                </li>
                <li>
                  <strong>$500/month:</strong> ~1 year, ~$610 interest <em>(saves ~$7,390)</em>
                </li>
              </ul>
              <p>
                Going from the minimum to just $200/month cuts the payoff time by 90% and saves
                thousands. Every extra dollar above the minimum goes straight to principal, which is
                why the effect is so dramatic.
              </p>
            </>
          ),
        },
        {
          heading: 'Proven Strategies to Pay Off Faster',
          body: (
            <>
              <p>If you have multiple cards or want a systematic approach, pick a method and stick with it:</p>
              <ul>
                <li>
                  <strong>Avalanche method (cheapest):</strong> Pay the minimum on every card, then
                  put all extra cash toward the <em>highest-APR</em> card first. Mathematically this
                  saves the most interest. Once that card is gone, roll the payment into the next
                  highest APR.
                </li>
                <li>
                  <strong>Snowball method (psychological):</strong> Pay off the <em>smallest
                  balance</em> first regardless of rate. The quick wins keep you motivated. It costs
                  slightly more than avalanche but many people stick with it longer.
                </li>
                <li>
                  <strong>Balance transfer card:</strong> Move debt to a 0% intro APR card (typically
                  12-21 months). Every dollar goes to principal during the promo period. Watch out
                  for 3-5% transfer fees, and have a plan to clear it before the promo ends.
                </li>
                <li>
                  <strong>Debt consolidation loan:</strong> A personal loan at 8-15% beats a 24%
                  credit card. You trade revolving debt for a fixed installment with a clear end date.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Common Mistakes That Keep You in Debt',
          body: (
            <ul>
              <li>
                <strong>Paying only the minimum.</strong> This is the #1 mistake. Even $20-50 extra
                per month transforms your timeline.
              </li>
              <li>
                <strong>Continuing to use the card.</strong> New charges offset your payments. Freeze
                the card (literally, in a block of ice) while paying it down.
              </li>
              <li>
                <strong>Ignoring the daily compounding.</strong> Making a payment earlier in the
                billing cycle saves a little interest every month, because interest is calculated on
                the daily balance.
              </li>
              <li>
                <strong>Missing payments.</strong> A late payment triggers a late fee (up to $41) and
                often a penalty APR of 29.99% that can last indefinitely. Set autopay for at least the
                minimum.
              </li>
            </ul>
          ),
        },
        {
          heading: 'When to Consider Other Options',
          body: (
            <p>
              If your balance is large and your APR is high, a balance transfer or consolidation loan
              can cut your effective rate to 0-15%. That often matters more than the payment amount.
              If you&apos;re struggling to make even minimums, contact your card issuer&apos;s hardship
              program &mdash; many offer temporary reduced rates or payment plans rather than see you
              default. Avoid payday loans and other high-cost borrowing to &quot;cover&quot; credit
              card payments; that trades one problem for a worse one.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          q: 'What if my payment is below the monthly interest?',
          a: 'The calculator will warn you. If your payment only covers interest (or less), the balance never drops &mdash; you could pay forever and never make progress. You must pay more than the monthly interest charge. For example, on $5,000 at 22% APR, monthly interest is about $92; any payment above $92 starts reducing principal.',
        },
        {
          q: 'Does making biweekly payments help?',
          a: 'Yes. Splitting your monthly payment in half and paying every two weeks results in 26 half-payments per year &mdash; the equivalent of one extra monthly payment. On a credit card, this also reduces your average daily balance slightly, lowering interest. The combination can shave months off your payoff.',
        },
        {
          q: 'How is the minimum payment calculated?',
          a: 'It varies by issuer, but is typically the higher of: a flat amount (e.g. $25-35), or 1-3% of your balance plus interest and fees. Some issuers also include any amount over your credit limit or past-due. Check your cardholder agreement for the exact formula &mdash; it determines how slowly you\'re allowed to pay.',
        },
        {
          q: 'Will paying off my card hurt my credit score?',
          a: 'No &mdash; paying off credit card debt usually helps your score. A major factor in credit scores is credit utilization (balance divided by limit). Keeping utilization under 30%, and ideally under 10%, boosts your score. Paying down balances lowers utilization. Keep the card open after paying it off to preserve your available credit and account age.',
        },
      ]}
    />
  )
}

export function IncomeTaxEstimatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This estimator calculates your US federal income tax using 2024 tax brackets. It applies
          the standard deduction automatically and shows your estimated tax, effective rate, and
          take-home pay. This is an estimate only — your actual tax depends on deductions, credits,
          and state taxes.
        </p>
      }
      sections={[
        {
          heading: 'How Progressive Tax Brackets Work',
          body: (
            <p>
              Many people think moving into a higher bracket means all their income is taxed at the
              higher rate. That&apos;s a myth. Only the income <em>above</em> each bracket threshold
              is taxed at that rate. Your marginal rate is the rate on your last dollar earned; your
              effective rate is your total tax divided by total income.
            </p>
          ),
        },
        {
          heading: 'What\'s Included and Excluded',
          body: (
            <ul>
              <li><strong>Included:</strong> Federal income tax using 2024 brackets</li>
              <li><strong>NOT included:</strong> State tax (0-13% depending on state), FICA (Social Security + Medicare = 7.65%), local taxes</li>
              <li><strong>Standard deduction:</strong> $14,600 single / $29,200 married (2024)</li>
              <li><strong>Not considered:</strong> 401(k) contributions, child credits, education credits, itemized deductions</li>
            </ul>
          ),
        },
        {
          heading: 'Marginal vs. Effective Rate',
          body: (
            <p>
              A single person earning $75,000 has a <strong>marginal rate</strong> of 22% (their
              top bracket), but their <strong>effective rate</strong> is only about 13% because most
              of their income is taxed at lower rates. Always know your effective rate — that&apos;s
              what you actually pay.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Why does my paycheck show more tax withheld?', a: 'Employers withhold based on your expected annual tax plus a margin of safety. Withholdings are estimates; your actual tax is settled when you file. You get a refund if you overpaid.' },
      ]}
    />
  )
}
