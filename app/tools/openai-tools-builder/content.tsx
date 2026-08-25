/**
 * OpenaiToolsBuilder 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function OpenaiToolsBuilderContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>The format in one screen</h2>
      <p>The tools parameter wants an array of function objects carrying name, description, and a JSON Schema for parameters. Hand-writing the nesting is where most typos live; the form makes it structural.</p>
      <h2>Descriptions drive accuracy</h2>
      <p>The model chooses tools and fills arguments mostly from your descriptions. A precise parameter description ("City name, e.g. San Francisco") outperforms any clever schema trick.</p>
      <h2>Enums as guardrails</h2>
      <p>Comma-separated enum values become strict choices the model must pick from — the cheapest way to eliminate invalid arguments before they reach your function.</p>
      <h2>Portability</h2>
      <p>The output targets the OpenAI tools array. Anthropic accepts the same shape with input_schema instead of parameters; most other providers follow one of the two conventions with minimal renames.</p>
    </section>
  )
}
