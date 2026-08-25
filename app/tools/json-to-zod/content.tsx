/**
 * JsonToZod 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function JsonToZodContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Why Zod for AI output</h2>
      <p>Structured-output APIs promise JSON; Zod verifies shape at runtime and gives you the TypeScript type for free via z.infer. This converter turns one example payload into that schema instantly.</p>
      <h2>Reading the generated code</h2>
      <p>Integers get .int(), nested objects nest z.object, arrays of mixed types produce z.union with up to three sample shapes. The export includes both the schema and the inferred type.</p>
      <h2>What to tighten by hand</h2>
      <p>JSON samples cannot reveal optionality — a key present in your example becomes required. Add .optional() where APIs omit fields, and .nullable() stays where null actually appeared.</p>
      <h2>Using with OpenAI/Anthropic</h2>
      <p>Pass zodResponseFormat(schema) (openai sdk) or feed the JSON Schema equivalent via structured outputs. Validation failures then surface as parse errors instead of silent shape bugs.</p>
    </section>
  )
}
