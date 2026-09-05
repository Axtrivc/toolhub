/**
 * Break-Even Calculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function BreakEvenCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What is the break-even point?</h2>
      <p>
        The <strong>break-even point</strong> is the sales volume where total revenue exactly covers total cost — every
        unit sold before it loses money, every unit after contributes pure profit. It is the first number any lender,
        investor, or franchise disclosure asks for, and the fastest sanity check on a business idea.
      </p>

      <h2>The formula behind it</h2>
      <p>
        Each unit sold contributes <code>Price − Variable Cost</code> toward your fixed costs, so{' '}
        <code>Break-even units = Fixed Costs ÷ (Price − Variable Cost)</code>. Multiply by price for the break-even
        revenue. The <strong>contribution margin ratio</strong> — contribution ÷ price — shows what share of every
        revenue dollar is available to cover fixed costs once variable costs are paid.
      </p>

      <h2>Fixed vs variable costs</h2>
      <p>
        Fixed costs (rent, salaries, insurance, software subscriptions) stay the same no matter how many units you
        sell. Variable costs (materials, payment fees, shipping, per-unit commissions) scale with each sale. The
        classic mistake is burying semi-variable costs — like hourly labor — in the wrong bucket; split them into a
        fixed base plus a per-unit piece.
      </p>

      <h2>How founders use it</h2>
      <p>
        Raise price 10% and break-even can drop 20%+; let variable costs creep and it silently climbs. Run the numbers
        before every pricing change, supplier switch, or ad campaign: if the required break-even volume exceeds what
        your market can realistically absorb, the model needs to change — not the marketing.
      </p>
    </section>
  )
}
