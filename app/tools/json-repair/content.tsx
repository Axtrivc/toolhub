/**
 * JsonRepair 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function JsonRepairContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Why LLMs break JSON</h2>
      <p>Models emit markdown fences around JSON, forget closing brackets when hitting token limits, or lapse into Python habits (single quotes, trailing commas). Each failure mode has a deterministic fix — this tool applies them in order and logs every change.</p>
      <h2>What gets repaired</h2>
      <p>Fence stripping, outer-text trimming, smart quotes, bare keys, single-quoted strings, trailing commas, undefined/NaN/Infinity literals, and truncation closure via a string-aware bracket stack.</p>
      <h2>When it refuses</h2>
      <p>If the payload still fails to parse after all repairs, you get the parser error with position instead of a fabricated guess. Silent wrong answers are worse than loud failures — especially for data pipelines.</p>
      <h2>Pair with validation</h2>
      <p>After repairing, validate the shape: pipe the output through JSON Diff against an expected example, or generate a Zod schema from a known-good sample using our JSON to Zod converter.</p>
    </section>
  )
}
