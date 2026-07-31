import type { ReactNode } from 'react'

export function WeightConverterContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Metric vs. Imperial Weight Units</h2>
      <p>
        Weight (or more precisely, mass) is measured in two main systems worldwide. The{' '}
        <strong>metric system</strong> (milligrams, grams, kilograms, metric tons) is used in nearly
        every country and is based on powers of 10. The <strong>imperial system</strong> (ounces,
        pounds, stones) is used primarily in the United States and, for body weight, in the UK and
        Ireland.
      </p>

      <h2>Key Conversion Factors</h2>
      <ul>
        <li><strong>1 kilogram</strong> = 2.20462 pounds</li>
        <li><strong>1 pound</strong> = 0.453592 kilograms = 16 ounces</li>
        <li><strong>1 ounce</strong> = 28.3495 grams</li>
        <li><strong>1 stone</strong> = 14 pounds = 6.35029 kilograms</li>
        <li><strong>1 metric ton</strong> = 1000 kilograms = 2204.62 pounds</li>
      </ul>

      <h2>Common Uses</h2>
      <ul>
        <li><strong>Body weight:</strong> kg in most countries, lb or st in the US/UK</li>
        <li><strong>Cooking:</strong> grams in recipes worldwide, ounces/pounds in US recipes</li>
        <li><strong>Shipping and freight:</strong> kg globally, lb domestically in the US</li>
        <li><strong>Precious metals:</strong> troy ounces (different from regular ounces)</li>
        <li><strong>Babies:</strong> grams at birth in metric countries, pounds/ounces in the US</li>
      </ul>

      <h2>Quick Mental Conversions</h2>
      <ul>
        <li><strong>kg to lb:</strong> multiply by 2.2 (or double and add 10%)</li>
        <li><strong>lb to kg:</strong> divide by 2.2 (or halve and subtract 10%)</li>
        <li><strong>oz to g:</strong> multiply by 28</li>
        <li>80 kg ≈ 176 lb, 150 lb ≈ 68 kg</li>
      </ul>

      <h2>The Difference Between Mass and Weight</h2>
      <p>
        Technically, <strong>mass</strong> (kilograms) measures how much matter something contains,
        while <strong>weight</strong> (newtons, or pounds-force) measures the gravitational force on
        that mass. Your mass is the same on Earth and the Moon; your weight is about 1/6 on the Moon.
        In everyday use, we treat them as interchangeable, and this converter does the same.
      </p>
    </section>
  )
}
