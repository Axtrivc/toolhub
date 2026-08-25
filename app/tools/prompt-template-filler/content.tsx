/**
 * PromptTemplateFiller 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function PromptTemplateFillerContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Two placeholder styles</h2>
      <p>Double-brace placeholders follow the mustache convention and replace first; single-brace placeholders follow Python f-string style. Mixing both is supported and predictable — doubles resolve before singles.</p>
      <h2>Variables from JSON</h2>
      <p>Paste a JSON object as the variable source; non-string values (numbers, arrays, nested objects) are stringified automatically. Missing variables are flagged by name rather than left as silent placeholders.</p>
      <h2>Testing prompts before API spend</h2>
      <p>Iterating prompt wording through real API calls burns tokens on every typo. Filling locally first catches variable mismatches, wrong brace counts, and stray text instantly — the API only sees the final draft.</p>
      <h2>Beyond LLM prompts</h2>
      <p>The same engine works for email templates, SQL skeletons, commit message formats — anywhere variable placeholders appear.</p>
    </section>
  )
}
