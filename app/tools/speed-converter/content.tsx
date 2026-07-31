import type { ReactNode } from 'react'

export function SpeedConverterContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Common Speed Units</h2>
      <p>
        Speed is measured differently depending on context and country. <strong>km/h</strong> and{' '}
        <strong>mph</strong> dominate everyday driving, <strong>m/s</strong> is standard in physics
        and engineering, <strong>knots</strong> are used in aviation and maritime, and{' '}
        <strong>ft/s</strong> appears in some US engineering contexts.
      </p>

      <h2>Conversion Factors</h2>
      <ul>
        <li><strong>1 km/h</strong> = 0.621371 mph = 0.277778 m/s</li>
        <li><strong>1 mph</strong> = 1.60934 km/h = 0.44704 m/s</li>
        <li><strong>1 m/s</strong> = 3.6 km/h = 2.23694 mph</li>
        <li><strong>1 knot</strong> = 1.15078 mph = 1.852 km/h</li>
        <li><strong>1 ft/s</strong> = 0.681818 mph = 0.3048 m/s</li>
      </ul>

      <h2>When You&apos;ll Need Speed Conversion</h2>
      <ul>
        <li><strong>Driving abroad:</strong> Speed limits in km/h (most countries) vs. mph (US, UK)</li>
        <li><strong>Running &amp; cycling:</strong> Pace often in min/km or min/mile</li>
        <li><strong>Aviation:</strong> Airspeed measured in knots</li>
        <li><strong>Weather:</strong> Wind speed in m/s, km/h, mph, or knots depending on country</li>
        <li><strong>Physics problems:</strong> Almost always in m/s</li>
      </ul>

      <h2>Quick Mental Conversions</h2>
      <ul>
        <li><strong>km/h to mph:</strong> multiply by 0.6, or take 60% (100 km/h ≈ 62 mph)</li>
        <li><strong>mph to km/h:</strong> multiply by 1.6 (60 mph ≈ 97 km/h)</li>
        <li><strong>m/s to km/h:</strong> multiply by 3.6 (10 m/s = 36 km/h)</li>
        <li><strong>knots to mph:</strong> add 15% (100 knots ≈ 115 mph)</li>
      </ul>

      <h2>Reference Speeds</h2>
      <ul>
        <li><strong>Walking:</strong> ~5 km/h (3 mph)</li>
        <li><strong>Marathon runner (elite):</strong> ~20 km/h (12.4 mph)</li>
        <li><strong>Highway speed limit:</strong> 100-130 km/h (60-80 mph)</li>
        <li><strong>Commercial airliner (cruise):</strong> ~900 km/h (560 mph, ~486 knots)</li>
        <li><strong>Speed of sound:</strong> ~1225 km/h (761 mph, Mach 1)</li>
        <li><strong>Speed of light:</strong> ~1.08 billion km/h</li>
      </ul>

      <h2>What Is a Knot?</h2>
      <p>
        A <strong>knot</strong> is one nautical mile per hour, where a nautical mile is based on the
        Earth&apos;s circumference (one minute of latitude). Because nautical miles relate directly
        to navigation, knots remain the standard in aviation and maritime use worldwide, even in
        countries that use metric for everything else.
      </p>
    </section>
  )
}
