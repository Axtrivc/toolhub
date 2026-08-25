/**
 * EmbeddingPriceCalculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function EmbeddingPriceCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Embeddings are the cheap part</h2>
      <p>At $0.02 per million tokens, embedding a 100k-document corpus costs about a dollar once. Recompute frequency and document size — not API price — drive real bills, which the monthly column makes visible.</p>
      <h2>Dimensions matter for storage</h2>
      <p>3072-dim vectors cost 3x the vector-DB storage of 1024-dim ones. The dims column exists so you can weigh retrieval quality against infrastructure costs, not just API price.</p>
      <h2>Choosing small vs large</h2>
      <p>text-embedding-3-small wins most retrieval tasks at 6.5x lower price than large; upgrade only when benchmarked recall on your data actually improves. Int8 quantized Cohere halves dims with minor quality loss.</p>
      <h2>RAG cost structure</h2>
      <p>Typical RAG spends more on generation tokens than embedding tokens by orders of magnitude. Optimize chunk sizes and retrieval counts before agonizing over embedding model choice.</p>
    </section>
  )
}
