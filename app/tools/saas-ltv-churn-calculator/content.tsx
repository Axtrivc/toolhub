import { ToolContent } from '@/lib/content-templates'

export function SaasLtvChurnCalculatorClientContent() {
  return (
    <ToolContent
      intro={
        <p>
          This <strong>SaaS metrics calculator</strong> turns a handful of inputs — ARPU, gross margin, churn, CAC,
          growth, and customer count — into the numbers founders and investors actually watch: customer lifetime, LTV,
          LTV:CAC ratio, CAC payback, churned MRR, and a simplified net revenue retention hint. It runs entirely in
          your browser; nothing is sent anywhere.
        </p>
      }
      sections={[
        {
          heading: 'How LTV and lifetime are derived',
          body: (
            <p>
              With a constant monthly churn rate, a customer survives <code>1 / churn</code> months on average — 5%
              churn means a 20-month expected lifetime. Multiplying by monthly gross profit per customer gives{' '}
              <code>LTV = ARPU × gross margin ÷ churn</code>. Using <em>gross margin</em> (not raw revenue) matters:
              at 80% margin, only $0.80 of every revenue dollar is available to repay acquisition costs. At 0% churn
              the lifetime is mathematically unbounded, which the tool shows as ∞.
            </p>
          ),
        },
        {
          heading: 'Reading the health signals',
          body: (
            <p>
              The <strong>LTV:CAC ratio</strong> is the classic unit-economics test: below 1 you lose money on every
              customer, 1–3 is workable, and above 3 is considered healthy growth. <strong>CAC payback</strong> tells
              you how many months of gross profit are needed to recover acquisition spend — under 12 months is a
              common benchmark. The churned-customers and lost-MRR cards translate an abstract percentage into the
              actual number of accounts and revenue walking out the door each month.
            </p>
          ),
        },
        {
          heading: 'Caveats and pitfalls',
          body: (
            <p>
              These formulas assume churn and ARPU stay constant over the lifetime — real cohorts decay non-linearly,
              and early churn is usually higher than steady-state. The <strong>NRR hint</strong> (
              <code>1 + growth − churn</code>) is a simplification: true net revenue retention also counts expansion,
              downgrades, and reactivations within the existing base. Use these numbers for quick sanity checks and
              pitch-deck math, not as a substitute for cohort analysis on real billing data.
            </p>
          ),
        },
      ]}
    />
  )
}
