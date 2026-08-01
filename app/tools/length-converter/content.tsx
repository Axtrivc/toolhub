import type { ReactNode } from 'react'

export function LengthConverterContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Metric vs. Imperial Units</h2>
      <p>
        The world uses two main measurement systems for length. The <strong>metric system</strong>{' '}
        (millimeters, centimeters, meters, kilometers) is used by nearly every country and is based
        on powers of 10, making conversions simple. The <strong>imperial system</strong> (inches,
        feet, yards, miles) is used primarily in the United States and has more irregular
        relationships between units.
      </p>

      <h2>Common Conversion Factors</h2>
      <p>The most-used length conversions, with exact values:</p>
      <ul>
        <li><strong>1 inch</strong> = 2.54 centimeters (exact)</li>
        <li><strong>1 foot</strong> = 0.3048 meters (exact)</li>
        <li><strong>1 yard</strong> = 0.9144 meters (exact)</li>
        <li><strong>1 mile</strong> = 1.609344 kilometers (exact)</li>
        <li><strong>1 meter</strong> = 3.28084 feet</li>
        <li><strong>1 kilometer</strong> = 0.621371 miles</li>
      </ul>

      <h2>Quick Reference Table</h2>
      <p>Everyday conversions worth memorizing:</p>
      <ul>
        <li>5 km ≈ 3.1 miles (a common &quot;5K&quot; race distance)</li>
        <li>1.6 km ≈ 1 mile (use 1.6 when converting mentally)</li>
        <li>30 cm ≈ 12 inches (1 foot)</li>
        <li>1.8 meters ≈ 6 feet (typical doorway height)</li>
        <li>100 meters ≈ 328 feet (length of a football field)</li>
      </ul>

      <h2>When You&apos;ll Need Length Conversion</h2>
      <ul>
        <li>
          <strong>Travel.</strong> Speed limits in km/h vs. mph, hiking distances, luggage size
          limits.
        </li>
        <li>
          <strong>DIY and construction.</strong> Mixing metric building materials with imperial
          tools, or following international plans.
        </li>
        <li>
          <strong>Science and engineering.</strong> Almost all scientific work uses metric, but US
          manufacturing still uses imperial.
        </li>
        <li>
          <strong>Running and fitness.</strong> Race distances, treadmill speeds, track lengths.
        </li>
        <li>
          <strong>Buying furniture or fabric.</strong> Dimensions listed in different units than
          your measuring tape.
        </li>
      </ul>

      <h2>Why the US Still Uses Imperial</h2>
      <p>
        The US adopted the imperial system before metric became the global standard, and switching
        would be enormously expensive — every road sign, recipe, and manufacturing spec would need
        to change. The UK uses a hybrid: distances in miles, fuel in liters, beer in pints.
        Canada is officially metric but still uses imperial for many everyday measurements due to US
        cultural influence.
      </p>
    </section>
  )
}
