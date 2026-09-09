export function RunwayCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Understanding Cash Runway for Startups and Creators</h2>
      <p>
        <strong>Runway</strong> is the number of months your company can operate before running completely out of money.
        For venture-backed startups and bootstrapped indie builders alike, knowing your exact runway is the difference
        between making calm, strategic hiring decisions and scrambling in panic when bank accounts dry up.
      </p>

      <h2>Gross Burn vs. Net Burn</h2>
      <p>
        <strong>Gross burn</strong> is the total amount of cash going out the door every month (salaries, AWS bills,
        office rent, marketing software). <strong>Net burn</strong> subtracts your incoming monthly revenue from gross burn:
      </p>
      <pre><code>Net Burn = Monthly Gross Expenses − Monthly Revenue</code></pre>
      <p>
        If your company spends $30,000 per month but makes $10,000 in monthly recurring revenue (MRR), your gross burn is
        $30,000 and your net burn is $20,000. Your cash runway depends on net burn, not gross burn.
      </p>

      <h2>Are You Default Alive or Default Dead?</h2>
      <p>
        Paul Graham coined the terms <em>Default Alive</em> and <em>Default Dead</em>. A startup is default alive if its
        current revenue growth rate will take it to profitability before its cash runs out. If not, the startup is default
        dead and will die unless it raises another round or slashes costs. This calculator projects compound monthly growth
        to show whether you will reach profitability organically or hit a zero cash wall.
      </p>

      <h2>When to Start Fundraising</h2>
      <p>
        Closing an institutional funding round typically takes 4 to 6 months from first pitch to wired funds. Never wait until
        you have 3 months of runway left. The ideal time to kick off fundraising is when you still have 10 to 14 months of runway,
        giving you maximum leverage in negotiations.
      </p>
    </section>
  )
}
