/**
 * Understanding Roman numerals 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function RomanNumeralConverterContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>The seven symbols</h2>
      <p>Roman numerals use seven letters: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Values add when symbols descend (XVI = 16) and subtract when a smaller symbol precedes a larger one (IX = 9).</p>
      <h2>Subtraction rules</h2>
      <p>Only I, X, and C may act as subtractors, and only before the next two larger values each: IV and IX but not IL or IC; XL and XC but not XD or XM. V, L, and D never subtract.</p>
      <h2>Why the range stops at 3999</h2>
      <p>Classical notation cannot write 4000 without overlining a symbol (multiplying by 1,000), which no keyboard produces. This converter therefore validates input to 1–3999 and rejects non-standard forms like IIII rather than guessing.</p>
      <h2>Where you still meet them</h2>
      <p>Film release years, monarch names (Henry VIII), Super Bowls, book chapters, clock faces, and cornerstone dates keep Roman numerals alive — this converter handles all of them.</p>
    </section>
  )
}
