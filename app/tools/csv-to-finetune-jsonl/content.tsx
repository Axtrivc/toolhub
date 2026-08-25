/**
 * CsvToFinetuneJsonl 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function CsvToFinetuneJsonlContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>The fine-tuning format</h2>
      <p>Each training example is one JSON line containing a messages array — the same chat structure as the API. This converter maps your CSV columns onto system/user/assistant roles and emits valid .jsonl directly.</p>
      <h2>Column mapping</h2>
      <p>Name the columns in the three fields above; a system column is optional and omitted from rows where the cell is empty. The header row is consumed, not exported.</p>
      <h2>Validation before you pay</h2>
      <p>Rows with empty assistant cells are flagged with their line number instead of silently dropped — training on empty completions quietly ruins runs. Quotes and embedded commas follow RFC 4180.</p>
      <h2>Sizing expectations</h2>
      <p>Hundreds of examples teach style; thousands teach behavior. Before fine-tuning at all, try few-shot prompting — many "needs fine-tuning" tasks are actually prompt-engineering tasks.</p>
    </section>
  )
}
