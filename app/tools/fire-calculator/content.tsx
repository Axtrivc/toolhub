/**
 * FIRE Calculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function FireCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What is FIRE?</h2>
      <p>
        <strong>FIRE</strong> — Financial Independence, Retire Early — is the strategy of building a portfolio
        large enough that its returns cover your living expenses forever. Once your investments can safely pay for
        your life, work becomes optional. The movement grew from the 4% rule and the observation that savings rate,
        not income, is the real lever on how long working life lasts.
      </p>

      <h2>Your FIRE number: spending ÷ withdrawal rate</h2>
      <p>
        The famous <strong>4% rule</strong> (from the Trinity study) says a portfolio can sustainably withdraw 4%
        of its value per year. Flip that around: your FIRE number = annual spending ÷ 0.04 ={' '}
        <strong>25× your annual spending</strong>. Spend $40,000 a year → $1,000,000 target. Lean FIRE ($28k/yr)
        needs ~$700k; a $80k lifestyle needs $2M. Use 3.5% (28.6×) for extra safety on 40+ year retirements.
      </p>

      <h2>The shockingly simple savings-rate math</h2>
      <p>
        Saving more attacks the target from both sides: the portfolio grows faster <em>and</em> the required number
        shrinks. At a 10% savings rate you&apos;re ~50 years from FIRE; at 50% it&apos;s roughly 15–17 years; at
        65% it can drop under a decade. That&apos;s why this calculator shows exactly how many years each{' '}
        <strong>+10% of savings rate</strong> buys you — the compression effect is the whole game.
      </p>

      <h2>How this calculator projects growth</h2>
      <p>
        Your portfolio compounds at a <em>real</em> (after-inflation) return — defaults to 5%, conservative for a
        stock-heavy mix — on both current savings and annual contributions:{' '}
        <code>balance(t) = P(1+r)<sup>t</sup> + S × ((1+r)<sup>t</sup> − 1) / r</code>. Because everything is in
        today&apos;s dollars, no inflation adjustment is needed. The tool solves for the exact year the balance
        crosses your FIRE number and translates it into a target retirement year.
      </p>
    </section>
  )
}
