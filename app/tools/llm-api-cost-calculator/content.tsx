/**
 * LLM API Cost Calculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function LlmApiCostContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Monthly bills, not per-request trivia</h2>
      <p>
        Per-token prices mean nothing until you multiply by volume. This calculator works from your{' '}
        <strong>monthly token totals</strong> — prompt input and output — and lays every major provider&apos;s projected
        bill side by side, sorted cheapest first with the gap to the most expensive model spelled out in dollars. The
        same workload routinely costs 10-20× more on a frontier model than on a budget tier.
      </p>

      <h2>Why output tokens dominate the bill</h2>
      <p>
        Output tokens run 3-15× the input price on nearly every model. An agent that reads a 20k-token page but writes
        a 2k-token answer often pays more for the answer. Trimming <code>max_tokens</code>, forcing concise response
        styles, and caching repeated system prompts are the three biggest levers — the last one alone cuts input costs
        50-90% on OpenAI, Anthropic, and DeepSeek.
      </p>

      <h2>Reading the comparison table</h2>
      <p>
        Rows are the current uncached list prices per 1M tokens (aggregated from tokencost.app, re-checked August 2026
        — providers change prices often, so treat numbers as planning estimates). &quot;vs cheapest&quot; shows what
        switching away from the budget tier costs you; &quot;you save vs priciest&quot; shows what picking any row over
        the frontier model banks every month.
      </p>

      <h2>Budgeting rule of thumb</h2>
      <p>
        Prototype on the cheapest capable model, measure real token distributions for a week, then decide where the
        final route deserves premium intelligence. Most production apps end up routing 80% of traffic to a budget
        model and reserving the flagship for the hard 20% — this table shows exactly what that split saves.
      </p>
    </section>
  )
}
