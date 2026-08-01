import type { ReactNode } from 'react'

/** Word Counter 配套深度内容 */
export function WordCounterContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>How Does the Word Counter Work?</h2>
      <p>
        This tool counts words, characters, sentences, paragraphs, and estimated reading time in
        real time as you type. A &quot;word&quot; is defined as any sequence of non-whitespace
        characters — so <code>hello</code>, <code>2026</code>, and <code>don&apos;t</code> each count
        as one word. Everything happens locally in your browser, so there is no delay and your text
        never leaves your device.
      </p>

      <h2>Why Count Words?</h2>
      <p>
        Word counts matter in more situations than you might think. Here are the most common ones:
      </p>
      <ul>
        <li>
          <strong>Academic writing.</strong> Essays, dissertations, and journal submissions almost
          always have strict word limits. Going under or over can cost you marks or get your work
          rejected.
        </li>
        <li>
          <strong>SEO and content marketing.</strong> Search engines tend to favor in-depth
          articles. A common benchmark is 1,000-2,000 words for pillar content, though quality
          always beats length.
        </li>
        <li>
          <strong>Legal and professional documents.</strong> Briefs, contracts, and reports often
          have word-count limits set by courts or clients.
        </li>
        <li>
          <strong>Social media.</strong> Each platform has its own limits: X (Twitter) posts, meta
          descriptions for SEO (around 155 characters), ad copy, and more.
        </li>
        <li>
          <strong>Translation and freelance writing.</strong> Many translators and writers are paid
          per word, so accurate counts are essential for invoicing.
        </li>
      </ul>

      <h2>Reading Time vs. Speaking Time</h2>
      <p>
        The tool estimates two durations based on your word count, using standard reading speeds:
      </p>
      <ul>
        <li>
          <strong>Reading time:</strong> ~200 words per minute (the average silent reading speed for
          an adult).
        </li>
        <li>
          <strong>Speaking time:</strong> ~130 words per minute (the average pace for a clear
          presentation or podcast).
        </li>
      </ul>
      <p>
        These are averages — your actual speed depends on content density, technical jargon, and
        whether you&apos;re skimming. Use them as a planning guide, not a stopwatch.
      </p>

      <h2>Character Counts for Common Platforms</h2>
      <p>Quick reference for limits you might be writing toward:</p>
      <ul>
        <li><strong>Google meta description:</strong> ~155 characters (after which it gets truncated).</li>
        <li><strong>X (Twitter) post:</strong> 280 characters.</li>
        <li><strong>Instagram caption:</strong> 2,200 characters (only the first 125 show without tapping &quot;more&quot;).</li>
        <li><strong>Facebook post:</strong> No strict limit, but shorter posts get more engagement.</li>
        <li><strong>LinkedIn post:</strong> 3,000 characters.</li>
        <li><strong>YouTube title:</strong> 100 characters (~70 visible in search).</li>
      </ul>

      <h2>Tips for Reaching Your Target Word Count</h2>
      <ol>
        <li>
          <strong>Don&apos;t pad.</strong> Adding fluff hurts readability and SEO. If you&apos;re
          short, add substance — examples, data, or a deeper explanation — not filler.
        </li>
        <li>
          <strong>Outline first.</strong> A structured outline makes it easier to hit your target
          without rambling. Allocate roughly equal words to each section.
        </li>
        <li>
          <strong>Edit ruthlessly to cut.</strong> If you&apos;re over the limit, look for redundant
          phrases, adverbs, and repetition. Cutting usually improves the writing.
        </li>
      </ol>
    </section>
  )
}
