/**
 * DiceRoller 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function DiceRollerContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Which dice for which game</h2>
      <p>D6 covers mainstream board games; D20 drives Dungeons & Dragons attack and save rolls; percentile D100 resolves percentage tables in Call of Cthulhu and Warhammer. The roller supports all of them plus d4/d8/d10/d12.</p>
      <h2>Reading multiple dice</h2>
      <p>Rolling 2d6 produces two independent results summed — crucial because 2d6 (bell-curved toward 7) plays very differently from 1d12 even though both max at 12. Each die is shown individually above the total.</p>
      <h2>Fairness you can trust</h2>
      <p>Physical dice wear unevenly and casino-grade balanced dice cost real money. This roller draws from crypto.getRandomValues with rejection sampling, so every face is equally likely likely by construction.</p>
    </section>
  )
}
