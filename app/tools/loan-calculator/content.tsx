import type { ReactNode } from 'react'

export function LoanCalculatorContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>How Loan Payments Are Calculated</h2>
      <p>
        Most installment loans — mortgages, auto loans, personal loans, and student loans — use a
        formula called <strong>amortization</strong>. Each month, you pay a fixed amount that covers
        both the interest accrued and a portion of the principal. Early in the loan, most of your
        payment goes to interest; by the end, most goes to principal.
      </p>
      <p>The monthly payment formula is:</p>
      <p>
        <code>M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]</code>
      </p>
      <ul>
        <li><strong>M</strong> = monthly payment</li>
        <li><strong>P</strong> = principal (the amount borrowed)</li>
        <li><strong>r</strong> = monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
        <li><strong>n</strong> = total number of monthly payments</li>
      </ul>

      <h2>What Affects Your Monthly Payment?</h2>
      <p>Three variables determine your payment, and understanding them helps you save money:</p>
      <ul>
        <li>
          <strong>Loan amount (principal).</strong> The more you borrow, the higher your payment —
          but the relationship is linear. Borrow twice as much and you pay roughly twice as much per
          month.
        </li>
        <li>
          <strong>Interest rate.</strong> This has a powerful effect, especially on long loans. On a
          30-year mortgage, even a 1% rate difference can mean tens of thousands of dollars over the
          life of the loan.
        </li>
        <li>
          <strong>Loan term.</strong> A longer term lowers your monthly payment but dramatically
          increases total interest paid. A 15-year mortgage costs more per month than a 30-year, but
          often saves six figures in interest.
        </li>
      </ul>

      <h2>The Trade-off: Monthly Payment vs. Total Cost</h2>
      <p>
        Here&apos;s the key insight most borrowers miss: <strong>extending the term makes the loan
        feel cheaper but costs far more in total.</strong> Consider a $20,000 loan at 7.5%:
      </p>
      <ul>
        <li><strong>3-year term:</strong> ~$622/month, ~$2,400 in total interest</li>
        <li><strong>5-year term:</strong> ~$400/month, ~$4,000 in total interest</li>
        <li><strong>7-year term:</strong> ~$306/month, ~$5,700 in total interest</li>
      </ul>
      <p>
        Going from 3 to 7 years cuts your monthly payment by half — but more than doubles your
        interest cost. Always look at <em>total interest</em>, not just the monthly number.
      </p>

      <h2>Common Loan Types</h2>
      <ul>
        <li>
          <strong>Mortgages.</strong> 15-30 year loans for buying a home, typically the largest debt
          most people take on. Secured by the property itself.
        </li>
        <li>
          <strong>Auto loans.</strong> 3-7 year loans for vehicles. Secured by the car, so rates are
          lower than unsecured loans.
        </li>
        <li>
          <strong>Personal loans.</strong> 1-7 year unsecured loans for any purpose. Rates are
          higher because there&apos;s no collateral.
        </li>
        <li>
          <strong>Student loans.</strong> 10-25 year terms, often with deferred payments while in
          school. Rates vary widely between federal and private loans.
        </li>
      </ul>

      <h2>How to Lower Your Interest Costs</h2>
      <ol>
        <li>
          <strong>Choose a shorter term.</strong> If you can afford the higher payment, you&apos;ll
          save dramatically on interest.
        </li>
        <li>
          <strong>Make extra payments.</strong> Even one extra payment a year, applied directly to
          principal, can knock years off a mortgage. Confirm your lender allows this without
          prepayment penalties.
        </li>
        <li>
          <strong>Improve your credit score.</strong> Better credit unlocks lower interest rates,
          which compounds into big savings over a long loan.
        </li>
        <li>
          <strong>Refinance when rates drop.</strong> If market rates fall below what you&apos;re
          paying, refinancing into a lower-rate loan can save you thousands — just weigh the closing
          costs.
        </li>
      </ol>
    </section>
  )
}
