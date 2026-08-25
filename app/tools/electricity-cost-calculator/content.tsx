/**
 * Understanding appliance running costs 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function ElectricityCostCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>The formula</h2>
      <p>Cost = watts ÷ 1000 × hours × price per kWh. A 1500 W space heater running 4 hours at $0.15/kWh costs $0.90 per day — about $27 per month if used daily. Small numbers compound fast.</p>
      <h2>Finding your electricity rate</h2>
      <p>Your utility bill states price per kWh; include supply plus delivery charges for the true number (US average ≈ $0.17/kWh in 2024, EU typically €0.20–0.40).</p>
      <h2>Hidden standby loads</h2>
      <p>Devices left plugged in draw 1–5 W continuously. Individually trivial, but a household of twenty such devices wastes $50–150 per year — the yearly row above makes such costs visible.</p>
      <h2>Heating and cooling dominate</h2>
      <p>Anything that moves heat (heaters, dryers, water heaters, AC) is 10–100× a laptop’s draw. Prioritize efficiency there and small gadgets stop mattering.</p>
    </section>
  )
}
