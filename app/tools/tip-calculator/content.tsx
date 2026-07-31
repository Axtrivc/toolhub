import type { ReactNode } from 'react'

export function TipCalculatorContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>How Much Should You Tip?</h2>
      <p>
        Tipping customs vary by country, but in the United States and Canada, tipping is expected
        for most sit-down service. The standard ranges are <strong>15-20%</strong> of the pre-tax
        bill for restaurant service, with 18% being the most common default for satisfactory service.
        This calculator handles the math instantly and splits the result evenly across any number of
        people.
      </p>

      <h2>Standard Tip Rates</h2>
      <ul>
        <li><strong>15%</strong> — Adequate service</li>
        <li><strong>18%</strong> — Good service (the most common default)</li>
        <li><strong>20%</strong> — Excellent service</li>
        <li><strong>25%+</strong> — Exceptional service or fine dining</li>
      </ul>

      <h2>Tipping Etiquette by Situation</h2>
      <ul>
        <li><strong>Restaurants (sit-down):</strong> 15-20% of the pre-tax bill</li>
        <li><strong>Bars:</strong> $1-2 per drink, or 15-20% of the tab</li>
        <li><strong>Food delivery:</strong> 15-20%, minimum $3-5</li>
        <li><strong>Taxis / rideshare:</strong> 10-20%</li>
        <li><strong>Hairdressers:</strong> 15-20%</li>
        <li><strong>Hotel housekeeping:</strong> $2-5 per night</li>
      </ul>

      <h2>How to Calculate a Tip</h2>
      <p>
        To calculate a tip manually, move the decimal point one place left on your bill to get 10%,
        then double it for 20% or halve it for 5%. For example, on a $45 bill: 10% is $4.50, so 20%
        is $9.00 and 15% is roughly $6.75 (halfway between). Or just use this calculator to avoid
        the mental math.
      </p>

      <h2>Tipping Around the World</h2>
      <p>
        Tipping norms differ dramatically by country. In Japan, tipping can actually be considered
        rude. In much of Europe, a service charge is already included in the bill, and rounding up
        is appreciated. Always check local customs when traveling — the &quot;right&quot; tip in one
        country may be insulting in another.
      </p>

      <h2>Should You Tip on Tax?</h2>
      <p>
        Convention is to tip on the <strong>pre-tax amount</strong>, since tax is not service.
        However, many people tip on the total for simplicity, and the difference is usually small.
        Either is acceptable; this calculator uses the bill amount you enter.
      </p>
    </section>
  )
}
