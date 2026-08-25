/**
 * TakeHomePayCalculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function TakeHomePayCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What comes out of a US paycheck</h2>
      <p>Four layers: federal income tax (withholding), FICA (6.2% Social Security up to the annual wage base plus 1.45% Medicare on everything), pre-tax deductions like 401(k) and medical premiums, then state tax where applicable.</p>
      <h2>Why 401(k) contributions hurt less than they look</h2>
      <p>Traditional 401(k) dollars come out before income tax, so a 6% contribution does not shrink your check by 6% — typically by about 4.5-5%. This calculator models that interaction directly.</p>
      <h2>Standard deduction assumption</h2>
      <p>The estimate applies the standard deduction ($15,000 single / $30,000 married for 2025). Itemizers with large mortgages or charity may see lower actual withholding.</p>
      <h2>What is not included</h2>
      <p>State and local income tax, Roth contributions (after-tax), HSA, garnishments, and tax credits. Treat results as a close first-order estimate, not payroll-grade output.</p>
    </section>
  )
}
