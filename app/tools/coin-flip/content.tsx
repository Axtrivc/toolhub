/**
 * CoinFlip 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function CoinFlipContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>When coin flips are appropriate</h2>
      <p>Any two-way decision where both options are acceptable: who serves first, which restaurant tonight, settling "I do not care, you pick" standoffs. Behavioral research shows people usually already prefer one side — notice your reaction when it lands.</p>
      <h2>Best-of-three still fair?</h2>
      <p>Yes. Independent fair flips stay fair in sequence; best-of-three only changes which subset decides. The tally tracks your whole session so drift becomes visible — over hundreds of flips expect convergence to ~50%.</p>
      <h2>Not for security</h2>
      <p>A fair flip settles games, not keys or passwords. Cryptographic decisions need cryptographic randomness used properly, not a single visible bit.</p>
    </section>
  )
}
