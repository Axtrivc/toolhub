/**
 * AsciiTable 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function AsciiTableContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Reading the table</h2>
      <p>Each row shows one character in decimal, hexadecimal, octal, and binary. 65 = 0x41 = 01000001 = "A" — same value, four notations. Control characters (0-31) have standard abbreviations like CR and LF instead of glyphs.</p>
      <h2>The rows worth memorizing</h2>
      <p>32 = space, 48-57 = digits 0-9, 65-90 = uppercase A-Z, 97-122 = lowercase a-z. Case difference is always exactly 32, which is why toggling case is a single bit flip.</p>
      <h2>Beyond ASCII</h2>
      <p>ASCII stops at 127. Modern systems encode text as UTF-8, which keeps ASCII byte-compatible — every ASCII character is itself in UTF-8 — while emoji and accented letters take multiple bytes.</p>
    </section>
  )
}
