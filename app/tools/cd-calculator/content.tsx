/**
 * CD Calculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function CdCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What is a Certificate of Deposit?</h2>
      <p>
        A <strong>Certificate of Deposit (CD)</strong> trades flexibility for yield: you lock a lump sum for a fixed
        term (3 months to 5 years) and the bank pays a guaranteed rate — often beating savings accounts. The catch is
        the <strong>early-withdrawal penalty</strong>: break the CD early and you forfeit several months of interest.
      </p>

      <h2>How maturity value is calculated</h2>
      <p>
        The balance grows as <code>A = P × (1 + r/n)^(n·t)</code>, where r is the annual rate, n the compounding
        frequency (daily, monthly, or quarterly), and t the term in years. Because the rate is fixed, the maturity
        value is known to the penny on day one — that certainty is the whole point of a CD.
      </p>

      <h2>Modeling the early-exit penalty</h2>
      <p>
        US banks typically charge <strong>1 month of interest</strong> for CDs under 12 months, <strong>3 months</strong>{' '}
        for 12-48 month terms, and <strong>6-12 months</strong> for 5-year CDs. Penalties come out of accrued interest,
        never principal — but if you exit in month 2 of a 3-month CD, the penalty can wipe out everything you earned.
        Use the &quot;Early exit at&quot; slider to see exactly what breaking the CD would cost you at any point.
      </p>

      <h2>CD ladder strategy</h2>
      <p>
        Instead of one 5-year CD, split the money across 1/2/3/4/5-year terms. As each rung matures you either take the
        cash or reinvest at the 5-year rate — giving you annual liquidity AND long-term rates. Rate-cut cycles are when
        laddering shines: you keep rolling maturing rungs into whatever the new normal is.
      </p>
    </section>
  )
}
