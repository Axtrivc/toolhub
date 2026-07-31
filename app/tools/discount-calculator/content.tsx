import type { ReactNode } from 'react'

export function DiscountCalculatorContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>How to Calculate a Discount</h2>
      <p>
        A discount reduces an item&apos;s original price by a percentage. To find the sale price,
        multiply the original by <code>(1 − discount%)</code>. For example, a $80 shirt at 25% off:{' '}
        <code>80 × (1 − 0.25) = 80 × 0.75 = $60</code>. You save $20.
      </p>

      <h2>Common Discount Patterns</h2>
      <ul>
        <li><strong>Percentage off:</strong> 20%, 30%, 50% — the most common type</li>
        <li><strong>Buy one get one (BOGO):</strong> Effectively 50% off per item</li>
        <li><strong>Fixed amount off:</strong> $10 off any purchase over $50</li>
        <li><strong>Stacked discounts:</strong> Multiple discounts applied in sequence</li>
      </ul>

      <h2>How Stacked Discounts Work</h2>
      <p>
        When stores offer &quot;an extra 20% off already reduced items,&quot; the second discount
        applies to the already-discounted price, not the original. A $100 item first marked down 30%
        becomes $70. An additional 20% off applies to $70, giving $56 — a total savings of 44%, not
        50%. Use this calculator twice (once per discount) to handle stacked discounts correctly.
      </p>

      <h2>Reverse Discount: Find the Original Price</h2>
      <p>
        If you only know the sale price and the discount percentage, you can find the original price
        by dividing: <code>original = sale price ÷ (1 − discount%)</code>. For example, if an item
        costs $60 after a 25% discount, the original was <code>60 ÷ 0.75 = $80</code>.
      </p>

      <h2>Is the Deal Actually Good?</h2>
      <p>
        Not all discounts are equal. Watch out for:
      </p>
      <ul>
        <li><strong>Inflated original prices:</strong> Some retailers raise the &quot;was&quot; price to make the discount look bigger</li>
        <li><strong>Minimum purchase requirements:</strong> &quot;Save 30% when you spend $100&quot; may push you to overspend</li>
        <li><strong>Compare unit prices:</strong> A discounted large size may still cost more per ounce than a full-price small size</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>How do I calculate 50% off?</h3>
      <p>Just halve the price. 50% off means you pay half — the simplest discount to calculate.</p>

      <h3>How do I add two discounts together?</h3>
      <p>
        You don&apos;t add them directly. Apply the first discount to get the new price, then apply
        the second discount to that new price. Two 30% discounts give a total of 51% off, not 60%.
      </p>

      <h3>What does &quot;percent off&quot; mean?</h3>
      <p>
        It&apos;s the percentage by which the original price is reduced. 30% off means you pay 70%
        of the original price.
      </p>
    </section>
  )
}
