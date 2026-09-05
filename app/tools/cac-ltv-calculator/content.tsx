/**
 * CAC & LTV Calculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function CacLtvCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>The two numbers every business must know</h2>
      <p>
        <strong>CAC</strong> (customer acquisition cost) is everything you spend on marketing and sales divided by
        the customers it brought in. <strong>LTV</strong> (customer lifetime value) is the total gross-margin profit
        an average customer generates before they churn. If you don&apos;t know both, you&apos;re guessing at
        whether growth is building value or burning it.
      </p>

      <h2>How LTV is calculated from churn</h2>
      <p>
        With a monthly churn rate, the average customer sticks around for <code>1 ÷ churn</code> months (5% churn →
        20 months). Each month they contribute <code>ARPU × gross margin</code> in profit, so{' '}
        <code>LTV = ARPU × margin ÷ churn</code>. A $50 ARPU at 80% margin and 5% monthly churn yields an $800
        LTV. Margin matters: revenue you don&apos;t keep can&apos;t pay back acquisition spend.
      </p>

      <h2>Reading the LTV:CAC ratio</h2>
      <p>
        Below <strong>1:1</strong> you lose money on every customer — stop scaling and fix retention or targeting.
        Around <strong>3:1</strong> is the classic healthy zone: enough margin to fund operations and mistakes.
        Above <strong>5:1</strong> is efficient but may mean you&apos;re underinvesting in growth competitors will
        happily take. Also watch <strong>CAC payback</strong> — the months of gross margin needed to recover
        acquisition cost; under 12 months keeps cash flow comfortable.
      </p>

      <h2>Using the numbers</h2>
      <p>
        Segment by channel and cohort: paid social often shows a very different ratio than organic or referral.
        When LTV:CAC is strong, the correct move is usually to spend <em>more</em> on acquisition while the ratio
        holds — this calculator makes the ceiling of that spend visible before finance finds it for you.
      </p>
    </section>
  )
}
