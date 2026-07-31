import type { ReactNode } from 'react'

export function CompoundInterestCalculatorContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What Is Compound Interest?</h2>
      <p>
        <strong>Compound interest</strong> is interest earned on both your initial principal and the
        interest that accumulates over time. It&apos;s often called &quot;interest on interest,&quot;
        and it&apos;s the most powerful force in long-term investing. Unlike simple interest, which
        only grows your original deposit, compounding makes your money grow exponentially — slowly
        at first, then dramatically faster as the years pass.
      </p>

      <h2>The Compound Interest Formula</h2>
      <p>
        For a single deposit with no ongoing contributions:
      </p>
      <p>
        <code>A = P × (1 + r/n)<sup>nt</sup></code>
      </p>
      <ul>
        <li><strong>A</strong> = final amount</li>
        <li><strong>P</strong> = principal (initial investment)</li>
        <li><strong>r</strong> = annual interest rate (decimal)</li>
        <li><strong>n</strong> = times compounded per year</li>
        <li><strong>t</strong> = years</li>
      </ul>
      <p>
        This calculator assumes monthly compounding and lets you add monthly contributions, which
        are calculated using the future value of an annuity formula.
      </p>

      <h2>The Power of Starting Early</h2>
      <p>
        Time matters more than the amount you invest. Consider two savers:
      </p>
      <ul>
        <li>
          <strong>Saver A</strong> invests $200/month from age 25 to 35 (10 years, $24,000 total),
          then stops. At 7% return, by age 65 they have ~$245,000.
        </li>
        <li>
          <strong>Saver B</strong> waits until age 35, then invests $200/month for 30 years until
          age 65 ($72,000 total). At 7% return, by age 65 they have ~$245,000.
        </li>
      </ul>
      <p>
        Despite investing one-third as much money, Saver A ends up roughly even — because their
        money had 30 extra years to compound.
      </p>

      <h2>Realistic Return Rates</h2>
      <p>Common reference rates for long-term investing:</p>
      <ul>
        <li><strong>S&amp;P 500 historical average:</strong> ~10% per year (before inflation)</li>
        <li><strong>After inflation (&quot;real&quot; return):</strong> ~7% per year</li>
        <li><strong>Bonds:</strong> ~4-5% per year</li>
        <li><strong>High-yield savings:</strong> ~4-5% (varies with interest rates)</li>
        <li><strong>Conservative mix (stocks + bonds):</strong> ~6-7% per year</li>
      </ul>
      <p>
        Use 7% for stock-market-based long-term investing. Past performance doesn&apos;t guarantee
        future results, and returns vary year to year — but compounding works the same regardless.
      </p>

      <h2>How to Maximize Compound Growth</h2>
      <ol>
        <li><strong>Start now.</strong> Every year you wait costs you exponentially more than the amount you could have invested.</li>
        <li><strong>Invest consistently.</strong> Monthly contributions automate growth and smooth out market volatility.</li>
        <li><strong>Reinvest dividends.</strong> Don&apos;t take the cash — let it compound.</li>
        <li><strong>Keep fees low.</strong> Index funds with 0.03% expense ratios beat actively managed funds with 1%+ fees over the long run.</li>
        <li><strong>Be patient.</strong> The biggest gains come in the later years. Don&apos;t panic-sell during downturns.</li>
      </ol>

      <h2>The Rule of 72</h2>
      <p>
        A quick mental shortcut: divide 72 by your annual return rate to estimate how many years it
        takes to double your money. At 7%, money doubles in about <code>72 ÷ 7 ≈ 10.3 years</code>.
        At 10%, it doubles in 7.2 years. This calculator gives you the exact number.
      </p>
    </section>
  )
}
