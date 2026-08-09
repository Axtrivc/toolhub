import { ToolContent } from '@/lib/content-templates'

export function AutoLoanCalculatorClientContent() {
  return (
    <ToolContent
      intro={
        <p>
          This <strong>auto loan calculator</strong> estimates your monthly car payment from the vehicle price, down
          payment, trade-in value, sales tax, APR, and loan term — then builds a complete amortization schedule you can
          export as CSV. It runs 100% in your browser, so the numbers you type never leave your device.
        </p>
      }
      sections={[
        {
          heading: 'How the loan amount is computed',
          body: (
            <p>
              The amount you actually finance is <code>price − down payment − trade-in + sales tax</code>. The tax is
              applied to <strong>(price − trade-in)</strong>, which is how most US states handle trade-in credits — but
              a few states tax the full price, so treat the figure as an estimate. The monthly payment uses the standard
              amortization formula <code>M = P × r / (1 − (1 + r)^−n)</code>, where <code>r</code> is the monthly rate
              (APR ÷ 12) and <code>n</code> is the number of months. A 0% APR loan simply divides the principal by the
              term.
            </p>
          ),
        },
        {
          heading: 'Reading the results',
          body: (
            <p>
              <strong>Monthly payment</strong> is the fixed amount due each month, with an estimated payoff date based
              on starting today. <strong>Total interest</strong> is what the loan costs you on top of the principal.{' '}
              <strong>Total cost</strong> adds your down payment and trade-in to all monthly payments, so it represents
              the full out-of-value cost of the car (excluding insurance, fees, and maintenance). The amortization table
              shows how each payment splits between <em>principal</em> and <em>interest</em> — early payments are
              mostly interest, and the balance falls slowly at first.
            </p>
          ),
        },
        {
          heading: 'Tips before you sign',
          body: (
            <p>
              Longer terms (72–84 months) lower the monthly payment but raise total interest sharply — compare the
              same car at 48 vs. 84 months to see the difference. A bigger down payment or a trade-in reduces both the
              payment and the interest, and keeps you from going <em>upside-down</em> (owing more than the car is
              worth). Get pre-approved by a bank or credit union before visiting a dealer so you can compare APRs, and
              always negotiate the vehicle price, not the monthly payment.
            </p>
          ),
        },
      ]}
    />
  )
}
