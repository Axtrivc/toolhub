/**
 * Converting recipe measurements correctly 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function CookingConverterContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Why ingredient choice matters</h2>
      <p>A US cup holds 240 milliliters of anything, but weight depends on what fills it: one cup of flour weighs about 120 g while one cup of honey weighs 340 g. Converting "1 cup" without naming the ingredient is where recipes break.</p>
      <h2>Scooped vs sifted vs spooned</h2>
      <p>Flour measured by scooping the cup straight into the bag can weigh 140 g or more; spooned-and-levelled hits ~120 g; sifted drops toward 114 g. This tool uses spoon-and-level averages, the standard in modern baking references.</p>
      <h2>Butter is the exception</h2>
      <p>Stick butter is sold by weight with tablespoon markings already printed on the wrapper — trust those. One US cup of butter equals exactly 227 g or two sticks.</p>
      <h2>When precision really matters</h2>
      <p>Baking (bread, cakes, macarons) rewards scale accuracy; soups and stews forgive everything. If a dough feels wrong by feel, trust the dough over the chart.</p>
    </section>
  )
}
