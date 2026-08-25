/**
 * ReadingLevelChecker 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function ReadingLevelCheckerContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What the scores mean</h2>
      <p>Flesch Reading Ease runs 0-100 (higher is easier); Flesch-Kincaid grade estimates US school-grade reading level. General web copy targets 60-70 ease, roughly 8th-9th grade — plain language, not dumbing down.</p>
      <h2>How the formulas work</h2>
      <p>Both use just three inputs: words per sentence and syllables per word. Short sentences and shorter words raise scores mechanically — which is also why bullet points and concrete nouns improve readability naturally.</p>
      <h2>When low scores are fine</h2>
      <p>Academic papers, legal contracts, and poetry legitimately score hard. Match your audience, not a universal number: medical patient handouts should score easy; a physics paper should not.</p>
    </section>
  )
}
