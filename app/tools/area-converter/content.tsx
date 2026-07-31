import type { ReactNode } from 'react'

export function AreaConverterContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Metric vs. Imperial Area Units</h2>
      <p>
        Area is measured in squared units — and because length itself has two systems, area units
        multiply that confusion. The <strong>metric system</strong> uses mm², cm², m², hectares, and
        km². The <strong>imperial system</strong> uses in², ft², yd², and acres. Conversions are
        based on the square of the length conversion factor.
      </p>

      <h2>Key Conversion Factors</h2>
      <ul>
        <li><strong>1 square meter</strong> = 10.7639 square feet</li>
        <li><strong>1 square foot</strong> = 0.092903 square meters = 144 square inches</li>
        <li><strong>1 acre</strong> = 43,560 square feet = 4,046.86 m²</li>
        <li><strong>1 hectare</strong> = 10,000 m² = 2.47105 acres</li>
        <li><strong>1 square kilometer</strong> = 0.386102 square miles</li>
        <li><strong>1 square mile</strong> = 640 acres = 2.58999 km²</li>
      </ul>

      <h2>When You&apos;ll Need Area Conversion</h2>
      <ul>
        <li><strong>Real estate:</strong> Home sizes in ft² (US) vs. m² (most of the world)</li>
        <li><strong>Land and agriculture:</strong> Acres (US/UK) vs. hectares (everywhere else)</li>
        <li><strong>Construction:</strong> Material coverage (paint, flooring, roofing)</li>
        <li><strong>Geography:</strong> Comparing country or city sizes</li>
        <li><strong>Gardening:</strong> Seed and fertilizer coverage rates</li>
      </ul>

      <h2>Acres vs. Hectares</h2>
      <p>
        These two large-area units cause the most confusion. An <strong>acre</strong> is a
        traditional unit roughly the size of a football field (without end zones). A{' '}
        <strong>hectare</strong> is exactly 10,000 m² — a square 100 meters on each side. One hectare
        is about 2.47 acres. Farmland, ranches, and forests are typically measured in one or the
        other depending on country.
      </p>

      <h2>Quick Reference Points</h2>
      <ul>
        <li><strong>Tennis court:</strong> ~260 m² (~2,800 ft²)</li>
        <li><strong>Average US single-family home:</strong> ~200-250 m² (~2,200-2,700 ft²)</li>
        <li><strong>Football field (American):</strong> ~5,350 m² (~1.32 acres)</li>
        <li><strong>Standard city block:</strong> ~8,000-10,000 m² (~2 acres)</li>
        <li><strong>Central Park, NYC:</strong> ~3.4 km² (~843 acres)</li>
      </ul>

      <h2>Why Square Units Confuse People</h2>
      <p>
        If 1 meter = 3.28 feet, why isn&apos;t 1 m² = 3.28 ft²? Because area scales with the{' '}
        <em>square</em> of length: <code>1 m² = (3.28)² = 10.76 ft²</code>. The same applies to
        volume, which scales with the cube. This is why converting area and volume requires squaring
        or cubing the length factor, not multiplying directly.
      </p>
    </section>
  )
}
