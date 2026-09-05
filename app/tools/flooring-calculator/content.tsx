/**
 * Flooring Calculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function FlooringCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>From room size to boxes on a pallet</h2>
      <p>
        Flooring isn&apos;t sold by the square foot — it&apos;s sold by the <strong>box</strong>. That&apos;s why a
        flooring estimate has three steps: multiply length × width for the room&apos;s area, add a{' '}
        <strong>waste factor</strong> for cuts and defects, then divide by the coverage printed on the box and
        round <em>up</em>. This calculator does all three and shows the result in both ft² and m², whatever your
        tape measure reads.
      </p>

      <h2>How much waste should you add?</h2>
      <p>
        <strong>5–10%</strong> covers straight-lay plank flooring and standard tile in simple rectangular rooms.
        Go <strong>10–15%</strong> for diagonal or herringbone patterns, large-format tile, rooms with lots of
        jogs and closets, or hardwood with color-matching needs. Waste isn&apos;t optional: boards must be cut to
        stagger seams, and the last row is almost always ripped lengthwise.
      </p>

      <h2>Typical coverage per box</h2>
      <ul>
        <li><strong>Ceramic tile:</strong> ~1.44 m² (15.5 ft²) per box — varies by format</li>
        <li><strong>Engineered hardwood:</strong> ~2.23 m² (24 ft²) per box</li>
        <li><strong>Vinyl plank (LVP):</strong> ~2.59 m² (27.9 ft²) per box</li>
        <li><strong>Marble / stone:</strong> ~1.5 m² (16.1 ft²) per box</li>
      </ul>
      <p>
        Always check the actual box label — formats differ — and keep one unopened spare box for future repairs;
        dye lots and calibers change, and matching a discontinued floor years later is nearly impossible.
      </p>

      <h2>Measure like a pro</h2>
      <p>
        Measure the longest width and length of each area separately and add them as separate runs (buy to the
        largest section, then sum boxes). For L-shaped rooms, split into rectangles and add the areas before
        applying waste. Underlayment, transitions, baseboards, and adhesive typically add 10–20% on top of the
        material total — budget for them before you fall in love with the display sample.
      </p>
    </section>
  )
}
