import type { ReactNode } from 'react'

export function SalesTaxCalculatorContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What Is Sales Tax?</h2>
      <p>
        Sales tax is a consumption tax charged on goods and services, calculated as a percentage of
        the sale price. In the United States, rates vary by state, county, and city — ranging from
        0% (Oregon, Delaware) to over 10% in some areas. Many other countries use similar systems
        under different names: <strong>VAT</strong> in Europe, <strong>GST</strong> in Canada,
        Australia, and India.
      </p>

      <h2>How Sales Tax Is Calculated</h2>
      <p>
        To add tax: <code>total = price × (1 + tax rate)</code>. For example, a $100 item with 8.25%
        tax: <code>100 × 1.0825 = $108.25</code>. To remove tax (find the pre-tax amount):{' '}
        <code>pre-tax = total ÷ (1 + tax rate)</code>.
      </p>

      <h2>Adding vs. Removing Tax</h2>
      <p>
        These two operations solve opposite problems:
      </p>
      <ul>
        <li>
          <strong>Add tax</strong> — when you know the sticker price and want the final cost at the
          register. Common in the US, where prices are shown pre-tax.
        </li>
        <li>
          <strong>Remove tax</strong> — when you know the final total and want to find the pre-tax
          amount. Useful for VAT/GST accounting, expense reports, and verifying receipts.
        </li>
      </ul>

      <h2>US Sales Tax by State (Selected)</h2>
      <p>Average combined state + local sales tax rates for major states (verify current rates locally):</p>
      <ul>
        <li><strong>Tennessee:</strong> 9.55%</li>
        <li><strong>California:</strong> 8.82%</li>
        <li><strong>New York:</strong> 8.52%</li>
        <li><strong>Texas:</strong> 8.20%</li>
        <li><strong>Florida:</strong> 7.01%</li>
        <li><strong>Oregon / Delaware / Montana / New Hampshire:</strong> 0% (no state sales tax)</li>
      </ul>
      <p>
        Note: city and county rates stack on top of state rates, so the rate where you actually shop
        may differ.
      </p>

      <h2>VAT and GST Around the World</h2>
      <ul>
        <li><strong>UK VAT:</strong> 20% (standard rate)</li>
        <li><strong>Germany VAT:</strong> 19%</li>
        <li><strong>Australia GST:</strong> 10%</li>
        <li><strong>Canada GST:</strong> 5% (plus provincial tax in some provinces)</li>
        <li><strong>Japan Consumption Tax:</strong> 10%</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>Are groceries taxed?</h3>
      <p>
        In many US states, groceries are exempt or taxed at a lower rate. Essentials like food and
        medicine often receive special treatment, but rules vary widely by jurisdiction.
      </p>

      <h3>Is sales tax the same as VAT?</h3>
      <p>
        They are both consumption taxes but work differently. Sales tax is added once at the final
        sale to the consumer. VAT is charged at every stage of production but credited back, so the
        final consumer effectively pays it. The math for the end buyer is similar.
      </p>

      <h3>Why do US prices not include tax?</h3>
      <p>
        Because the US has thousands of local tax jurisdictions, retailers display pre-tax prices so
        they can advertise consistent national pricing. The tax is added at checkout based on where
        you purchase.
      </p>
    </section>
  )
}
