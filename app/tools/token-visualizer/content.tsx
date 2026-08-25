/**
 * TokenVisualizer 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function TokenVisualizerContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Why visualize tokens</h2>
      <p>LLMs see chunks, not words: a long word may cost three tokens while a short one costs one. Watching your text split builds the intuition that makes prompts cheaper and truncation surprises rarer.</p>
      <h2>How the approximation works</h2>
      <p>Words up to 5 characters form one chunk, longer words split at 4-character boundaries, CJK characters count individually, and whitespace merges into the following chunk — mirroring BPE behavior closely enough for intuition.</p>
      <h2>Not a billing tool</h2>
      <p>Exact tokenization varies per model and tokenizer version. For cost math use the GPT Token Counter; use this to understand structure: why code eats tokens, why line breaks matter, why translations surprise.</p>
      <h2>Reading the colors</h2>
      <p>Each color block is one approximate token; spaces render as ␣ and attach to the next chunk. Long unbroken strings (URLs, hashes, base64) visibly explode into many chunks — exactly why they bloat prompts.</p>
    </section>
  )
}
