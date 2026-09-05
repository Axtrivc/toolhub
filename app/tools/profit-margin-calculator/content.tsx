/**
 * Profit Margin Calculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function ProfitMarginCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Margin vs markup — finally unmuddled</h2>
      <p>
        <strong>Margin</strong> is profit divided by the <em>selling price</em>; <strong>markup</strong> is profit
        divided by your <em>cost</em>. A 100% markup (doubling a $40 cost to $80) is only a 50% margin. A &quot;30%
        markup&quot; is a 23% margin. Sellers who price at &quot;30% margin&quot; when they meant &quot;30% markup&quot;
        systematically underprice — this tool converts between the two instantly so quotes, decks, and marketplaces
        always speak the same language.
      </p>

      <h2>The conversion formulas</h2>
      <p>
        From markup to margin: <code>Margin = Markup ÷ (1 + Markup)</code>. From margin to markup:{' '}
        <code>Markup = Margin ÷ (1 − Margin)</code>. To hit a target margin, price at{' '}
        <code>Cost ÷ (1 − Margin)</code>; to apply a markup, price at <code>Cost × (1 + Markup)</code>. Enter cost plus
        any one of price / margin / markup and every other figure fills in automatically.
      </p>

      <h2>Gross margin in the real world</h2>
      <p>
        Grocery stores run 25-30% gross margins, software companies 70-90%, luxury fashion 60-75%, and restaurants
        barely 60-70% on food before labor. Amazon&apos;s marketplace fees alone eat 8-15% of price, so an FBA seller
        quoting &quot;50% margins&quot; without landing costs is really running 25%. Benchmark against your industry
        before assuming your margin is healthy.
      </p>

      <h2>Pricing guardrails</h2>
      <p>
        Margin tells you if a product is worth selling; markup multipliers keep quotes fast. Keep both in view when
        costs rise: a supplier increase of 10% on an item you mark up 50% only needs a ~7% price bump to hold margin —
        most sellers round up and quietly pocket the difference.
      </p>
    </section>
  )
}
