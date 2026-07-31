import type { ReactNode } from 'react'

export function VolumeConverterContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Metric vs. US Volume Units</h2>
      <p>
        Volume measurement is where cooking gets complicated. The <strong>metric system</strong>{' '}
        (milliliters, liters, cubic meters) is simple and consistent. The{' '}
        <strong>US customary system</strong> (teaspoons, tablespoons, cups, fluid ounces, pints,
        quarts, gallons) uses irregular relationships that have to be memorized.
      </p>

      <h2>US Cooking Unit Relationships</h2>
      <ul>
        <li><strong>3 teaspoons</strong> = 1 tablespoon</li>
        <li><strong>16 tablespoons</strong> = 1 cup</li>
        <li><strong>1 cup</strong> = 8 fluid ounces</li>
        <li><strong>2 cups</strong> = 1 pint</li>
        <li><strong>2 pints</strong> = 1 quart</li>
        <li><strong>4 quarts</strong> = 1 gallon</li>
      </ul>

      <h2>Metric to US Conversions</h2>
      <ul>
        <li><strong>1 liter</strong> = 0.264172 US gallons = 4.22675 cups</li>
        <li><strong>1 US gallon</strong> = 3.78541 liters</li>
        <li><strong>1 US cup</strong> = 236.588 ml</li>
        <li><strong>1 tablespoon</strong> = 14.7868 ml</li>
        <li><strong>1 teaspoon</strong> = 4.92892 ml</li>
        <li><strong>1 fluid ounce (US)</strong> = 29.5735 ml</li>
      </ul>

      <h2>Watch Out: US vs. Imperial (UK)</h2>
      <p>
        US and UK volume units <strong>are not the same</strong>. A UK pint is 568 ml; a US pint is
        473 ml — a 20% difference. UK gallons, quarts, and fluid ounces are also larger. This
        matters when following recipes or filling up a car in a different country. This converter
        uses <strong>US customary units</strong>.
      </p>

      <h2>Common Uses</h2>
      <ul>
        <li><strong>Cooking &amp; baking:</strong> Converting between cups/spoons and ml</li>
        <li><strong>Beverages:</strong> Soda and wine in ml/L, beer in pints, milk in gallons</li>
        <li><strong>Fuel:</strong> Gasoline sold in liters or gallons depending on country</li>
        <li><strong>Medicine:</strong> Liquid doses in ml</li>
        <li><strong>Engineering:</strong> Engine displacement, tank capacities in m³</li>
      </ul>

      <h2>Quick Cooking Conversions</h2>
      <ul>
        <li><strong>250 ml</strong> ≈ 1 cup</li>
        <li><strong>1 liter</strong> ≈ 4 cups ≈ 1 quart</li>
        <li><strong>4 liters</strong> ≈ 1 gallon</li>
        <li><strong>15 ml</strong> ≈ 1 tablespoon</li>
        <li><strong>5 ml</strong> ≈ 1 teaspoon</li>
      </ul>

      <h2>Cubic Meters for Large Volumes</h2>
      <p>
        For industrial, construction, and shipping contexts, cubic meters (m³) are standard.{' '}
        <code>1 m³ = 1,000 liters</code>. A shipping container, swimming pool, or concrete pour is
        measured this way. For smaller-scale work, liters and milliliters are more practical.
      </p>
    </section>
  )
}
