/**
 * Roth IRA Calculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function RothIraCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Roth vs. Traditional: the only difference is tax timing</h2>
      <p>
        Both accounts share the same $7,000 contribution limit (2025: $8,000 if you&apos;re 50 or older) and grow
        tax-free inside the account. The entire decision comes down to <em>when</em> you pay tax: a{' '}
        <strong>Traditional IRA</strong> deducts contributions today (lowering this year&apos;s tax bill) but taxes
        every withdrawal in retirement; a <strong>Roth IRA</strong> takes after-tax money now and every qualified
        withdrawal — principal <em>and</em> growth — is 100% tax-free.
      </p>

      <h2>The one rule that decides it</h2>
      <p>
        Compare your <strong>marginal tax rate today</strong> against your <strong>expected effective rate in
        retirement</strong>. If today&apos;s rate is higher (common in peak earning years), Traditional wins — you
        dodge a 24%+ tax today and pay maybe 12% later. If today&apos;s rate is lower (early career, sabbatical,
        low-income years), Roth locks in the bargain rate forever. This calculator runs both accounts through the
        same growth math so you can see the after-tax gap in dollars.
      </p>

      <h2>What the math assumes</h2>
      <p>
        Contributions compound annually at your expected return using the future value of an annuity:
        <code>FV = C × ((1+r)<sup>n</sup> − 1) / r</code>. The Traditional balance grows on pre-tax dollars
        (larger balance, taxed on withdrawal); the Roth balance grows on after-tax dollars (smaller balance, zero
        tax out). The comparison is apples-to-apples because the out-of-pocket cost today is identical.
      </p>

      <h2>Beyond the break-even math</h2>
      <p>
        Even when Traditional projects slightly ahead, Roth has strategic perks: no required minimum distributions
        (RMDs) after age 73, tax-free inheritance for beneficiaries, and a hedge against future tax-rate increases.
        Many people hold <em>both</em> — Traditional for the deduction in high-income years, Roth for flexibility
        and tax diversification. Re-run this comparison whenever your bracket changes.
      </p>
    </section>
  )
}
