/**
 * LlmCostCalculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function LlmCostCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Reading the table</h2>
      <p>Rows are sorted by projected monthly cost — the cheapest model for your exact token mix floats to the top with a green highlight. Input and output prices are uncached per-million rates from tokencost.app, re-checked 2026-08.</p>
      <h2>Where the real bill hides</h2>
      <p>Output tokens cost 3-15× input tokens on most models, so a chatty assistant writing 2k tokens per call dwarfs a long prompt of cheap input. Trimming max_tokens is often the biggest single lever.</p>
      <h2>Pricing tiers that help</h2>
      <p>Cached prompts (same system prompt repeatedly) run 50-90% cheaper on input at OpenAI/Anthropic/DeepSeek. Batch APIs halve output costs when you can wait minutes instead of seconds.</p>
      <h2>Budget sanity check</h2>
      <p>A hobby app at 100 requests/day on a mid-tier model typically lands under $30/month. The same volume on frontier models can exceed $300 — the table makes the 10× gap visible before you commit.</p>
    </section>
  )
}
