export function FreelanceRateCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>The Freelancer Pricing Fallacy</h2>
      <p>
        The most common mistake new freelancers, consultants, and contractors make is dividing an employee salary by
        2,080 hours (40 hours × 52 weeks). An employee earning $100,000 thinks they can charge $48/hour as a contractor.
        In reality, they will take home barely half of that after factoring in self-employment taxes, unpaid vacation,
        equipment, health insurance, and non-billable client acquisition time.
      </p>

      <h2>The Reality of Billable Hours</h2>
      <p>
        Full-time employees get paid for every hour they sit at their desks, including internal meetings, downtime, and
        paid sick leave. Freelancers only get paid for billable client work. Marketing, writing proposals, invoicing,
        bookkeeping, and client communication take 30% to 50% of your working week. Most successful solo operators bill
        between <strong>20 and 25 hours per week</strong> over 44 to 48 working weeks per year (roughly 1,000 to 1,200 annual billable hours).
      </p>

      <h2>The Back-Calculation Formula</h2>
      <p>
        To set sustainable rates, work backwards from your desired annual net take-home salary:
      </p>
      <ol>
        <li><strong>Pre-tax target:</strong> Divide desired take-home salary by <code>(1 − Tax Rate)</code> to cover income and self-employment taxes.</li>
        <li><strong>Add business overhead:</strong> Add annual software subscriptions, hardware depreciation, health insurance premiums, and professional accounting fees.</li>
        <li><strong>Add profit buffer:</strong> Add a 10%–20% profit margin to weather slow months and delayed client payments.</li>
        <li><strong>Divide by billable hours:</strong> Divide total gross billing target by your annual billable hours to find your true hourly rate.</li>
      </ol>

      <h2>Hourly Rates vs. Day Rates vs. Value Pricing</h2>
      <p>
        For short tasks under 15–20 hours, an hourly rate works best. For multi-week contracts or advisory consulting,
        quote day rates (calculated as 8× your hourly rate). Day rates eliminate disputes over 15-minute intervals and
        shift client focus onto strategic outcomes rather than tracked time.
      </p>
    </section>
  )
}
