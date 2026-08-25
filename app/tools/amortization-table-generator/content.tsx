/**
 * AmortizationTableGenerator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function AmortizationTableGeneratorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Reading an amortization schedule</h2>
      <p>Each fixed payment splits into interest (current balance × monthly rate) and principal (the rest). Month one on a $320k/6.5%/30y loan sends about $1,733 to interest and only $299 to principal.</p>
      <h2>The crossover point</h2>
      <p>Principal overtakes interest roughly halfway through a mortgage term. That asymmetry is why extra principal payments early are disproportionately powerful — each dollar removes all future interest it would have carried.</p>
      <h2>Using the CSV export</h2>
      <p>Download the table and open it in Excel or Sheets to model scenarios: add an extra-principal column, change payment amounts mid-schedule, or total interest paid per year.</p>
      <h2>Rate changes matter enormously</h2>
      <p>On a 30-year term, 1 percentage point swings total interest by tens of thousands. Compare schedules side by side before choosing between lenders or points.</p>
    </section>
  )
}
