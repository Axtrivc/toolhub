/**
 * RandomTeamGenerator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function RandomTeamGeneratorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Why shuffle-then-deal</h2>
      <p>Fisher-Yates shuffling gives every permutation identical probability, then round-robin dealing keeps sizes within one player across teams. Naive approaches (picking random names per slot) subtly favor earlier slots.</p>
      <h2>Keeping rival pairs apart</h2>
      <p>Paste names with temporary prefixes to force outcomes: put two must-not-team members into the same numbered line position logic by splitting lists manually, then reshuffle the rest. Simple beats configurable for one-off splits.</p>
      <h2>Beyond sports teams</h2>
      <p>Code review pair rotations, presentation orders, room assignments at events, dinner groups at conferences — anywhere a visible-fair split defuses "you always pick favorites".</p>
    </section>
  )
}
