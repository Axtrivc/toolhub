import type { ReactNode } from 'react'

export function PercentageCalculatorContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>How to Calculate Percentages</h2>
      <p>
        A percentage expresses a number as a fraction of 100. The word literally means &quot;per
        hundred&quot; — so 25% means 25 out of every 100, or one quarter. This calculator handles
        the four most common percentage calculations in one place, so you don&apos;t have to
        remember the formulas.
      </p>

      <h2>The Four Percentage Formulas</h2>

      <h3>1. What is X% of Y?</h3>
      <p>
        Multiply the whole by the percentage as a decimal. For example, to find 15% of 200:{' '}
        <code>200 × 0.15 = 30</code>. Use this for tips, discounts, and tax calculations.
      </p>

      <h3>2. X is what percent of Y?</h3>
      <p>
        Divide the part by the whole and multiply by 100. For example, to find what percent 30 is of
        200: <code>(30 ÷ 200) × 100 = 15%</code>. Use this to calculate test scores, market share,
        or completion rates.
      </p>

      <h3>3. Percentage increase or decrease</h3>
      <p>
        Subtract the original from the new, divide by the original, and multiply by 100. For
        example, a price change from $100 to $125: <code>((125 − 100) ÷ 100) × 100 = 25%</code>{' '}
        increase. Use this to measure growth, inflation, or salary changes.
      </p>

      <h3>4. Add or subtract a percentage</h3>
      <p>
        Multiply by <code>(1 + percentage/100)</code> to add, or <code>(1 − percentage/100)</code>{' '}
        to subtract. For example, adding 15% tax to $80: <code>80 × 1.15 = $92</code>. Use this for
        applying sales tax, VAT, or discounts.
      </p>

      <h2>Real-World Uses</h2>
      <ul>
        <li>
          <strong>Shopping discounts.</strong> A $60 shirt is 30% off. What is X% of Y tells you the
          discount ($18); subtracting it gives the sale price ($42).
        </li>
        <li>
          <strong>Tips at restaurants.</strong> Calculate 15%, 18%, or 20% of the bill instantly.
        </li>
        <li>
          <strong>Grades and test scores.</strong> You got 42 out of 50 questions right — what
          percent is that?
        </li>
        <li>
          <strong>Business metrics.</strong> Revenue growth, profit margins, conversion rates, and
          market share are all percentages.
        </li>
        <li>
          <strong>Finance.</strong> Interest rates, down payments, and tax rates are all percentage
          calculations.
        </li>
      </ul>

      <h2>Common Percentage Mistakes to Avoid</h2>
      <ul>
        <li>
          <strong>Adding percentages directly.</strong> A 10% discount plus another 10% off is not a
          20% discount — it&apos;s a 19% discount, because the second 10% applies to the already
          reduced price.
        </li>
        <li>
          <strong>Confusing percentage points with percent.</strong> An interest rate rising from
          5% to 7% is a 2 <em>percentage point</em> increase, but a 40% <em>relative</em> increase.
        </li>
        <li>
          <strong>Forgetting the base.</strong> &quot;200% of&quot; is not the same as &quot;200%
          more than.&quot; 200% of 50 is 100; 200% more than 50 is 150.
        </li>
      </ul>
    </section>
  )
}
