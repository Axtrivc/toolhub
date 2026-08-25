/**
 * ContextWindowChecker 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function ContextWindowCheckerContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Why windows matter now</h2>
      <p>Modern models range from 128k to 2M tokens — but long prompts still degrade reasoning (the "lost in the middle" effect) and cost real money per request. Fitting is necessary, not sufficient.</p>
      <h2>How the estimate works</h2>
      <p>Latin text approximates 4 characters per token; CJK characters run ~1.1 tokens each. Real tokenizers vary by 5-10% per model — treat the bars as gauge, not odometer.</p>
      <h2>Reserve headroom for output</h2>
      <p>The window is shared: prompt + response must fit together. A 200k prompt against a 200k window leaves zero room for any answer — keep prompts under ~80% unless streaming.</p>
      <h2>Trimming strategies</h2>
      <p>System prompts compress well (drop few-shot examples first), retrieved documents should re-rank before stuffing, and chat history benefits from summarizing turns older than a dozen.</p>
    </section>
  )
}
