/**
 * Dog Food Calculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function DogFoodCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Why the bag chart is often wrong for your dog</h2>
      <p>
        Feeding charts on kibble bags are broad averages — they can&apos;t know whether your dog is neutered, a
        marathon athlete, or a couch-loving senior. The veterinary standard is a two-step calculation:{' '}
        <strong>RER</strong> (resting energy requirement) = <code>70 × weight<sup>0.75</sup></code> in kilograms,
        then multiplied by a life-stage <strong>MER factor</strong> from the AAHA guidelines.
      </p>

      <h2>Choosing the right MER factor</h2>
      <ul>
        <li><strong>×1.2</strong> — weight loss, obesity-prone, or seniors</li>
        <li><strong>×1.6</strong> — typical neutered adult (most pets today)</li>
        <li><strong>×1.8</strong> — intact adult</li>
        <li><strong>×2.0</strong> — puppy 4–12 months</li>
        <li><strong>×2.5+</strong> — active working or sporting dogs</li>
        <li><strong>×3.0</strong> — puppy under 4 months (rapid growth)</li>
      </ul>
      <p>
        Neutering lowers metabolic rate by roughly 20–30% — one reason the ×1.6 neutered factor, not ×1.8, is the
        right default after the surgery.
      </p>

      <h2>From calories to cups and grams</h2>
      <p>
        Every food has a different energy density, printed on the bag as <strong>kcal per cup</strong> or{' '}
        <strong>kcal per 100 g</strong> (typically 300–450 kcal/cup). This calculator reads either label format
        and converts your dog&apos;s daily kcal into cups <em>and</em> grams using the grams-per-cup figure.
        Grams are the more accurate unit: measuring cups vary by up to 20% depending on who scoops.
      </p>

      <h2>Feeding smart</h2>
      <p>
        Split the daily amount into two meals (three for puppies) to aid digestion and reduce bloat risk. Treats
        should stay under 10% of daily calories. Re-check the math every few months — weight creeps, and the
        feeding amount should follow the <em>ideal</em> weight, not the current one. For medical diets and
        weight-loss plans, partner with your veterinarian.
      </p>
    </section>
  )
}
