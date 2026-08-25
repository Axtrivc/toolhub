/**
 * MorseCodeTranslator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function MorseCodeTranslatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>How Morse timing works</h2>
      <p>A dot lasts one unit, a dash three; gaps are one unit inside letters, three between letters, seven between words. The audio player applies exactly those proportions at 600 Hz, which is how operators learned by ear.</p>
      <h2>SOS is not an abbreviation</h2>
      <p>The distress call was chosen for its unmistakable rhythm (…---…) rather than meaning — no official expansion exists. As prosigns go it is sent as one continuous symbol with no letter gaps.</p>
      <h2>Morse today</h2>
      <p>Aviation beacon identifiers, amateur radio, assistive-text devices, and emergency signalling keep it alive. It also encodes where other encodings fail: on/off keying needs nothing but a switch.</p>
    </section>
  )
}
