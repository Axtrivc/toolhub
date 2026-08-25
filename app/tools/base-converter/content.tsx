/**
 * BaseConverter 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function BaseConverterContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Digits past 9</h2>
      <p>Bases above ten need extra digit symbols: a=10, b=11 … z=35. Base 36 therefore spells 0-9 then a-z, which is why it appears in URL shorteners and auto-generated IDs where case-insensitive compactness matters.</p>
      <h2>Fractions behave differently</h2>
      <p>Decimal 0.1 has no exact binary form — binary fractions repeat forever, like 1/3 does in decimal. The converter shows up to ten fractional digits, which is plenty for inspection but not bit-exact storage math.</p>
      <h2>Where each base shows up</h2>
      <p>Binary underlies everything, octal survives in file permissions, decimal is for humans, hex is the programmer default (colors, memory, hashes), base32 labels data centers and backup codes, base36 packs IDs into URLs.</p>
    </section>
  )
}
