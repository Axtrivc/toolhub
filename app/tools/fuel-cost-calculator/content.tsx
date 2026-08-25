/**
 * FuelCostCalculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function FuelCostCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>The trip-cost formula</h2>
      <p>Fuel money = distance ÷ (100 ÷ consumption per 100 km) × price. The calculator handles the round-trip doubling and passenger splitting that make real trips messy.</p>
      <h2>Where to find your consumption</h2>
      <p>Your trip computer shows a real-world average — trust it over the brochure number, which is a lab figure. City driving with air conditioning can run 30% above highway cruising.</p>
      <h2>Commuting adds up fast</h2>
      <p>A 30 km each-way commute at 7.5 L/100km and $1.65/L burns about $2,200 per year. Multiply before you accept a job across town.</p>
      <h2>Splitting fairly</h2>
      <p>Per-person splitting divides fuel only. If friends chip in for tolls and wear too, the common convention is adding 10-20% on top of pure fuel cost.</p>
    </section>
  )
}
