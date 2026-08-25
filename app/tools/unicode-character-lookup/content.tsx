/**
 * UnicodeCharacterLookup 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function UnicodeCharacterLookupContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What Unicode actually is</h2>
      <p>One catalog assigning a number (code point) to every character in every writing system — over 150,000 entries. Fonts decide appearance; Unicode decides identity. U+2014 is an em dash everywhere, however differently fonts draw it.</p>
      <h2>Copy-paste hazards</h2>
      <p>Homoglyphs (Cyrillic а vs Latin a) look identical but break passwords, domains, and code searches invisibly. When text "matches" but comparisons fail, paste both versions here and compare code points.</p>
      <h2>This curated set vs full catalogs</h2>
      <p>150k characters would be noise. These are the arrows, math operators, typographic quotes, currency marks, and box-drawing characters that searches actually target, each with its proper name and code point.</p>
    </section>
  )
}
