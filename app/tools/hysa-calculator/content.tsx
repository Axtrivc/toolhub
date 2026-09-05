/**
 * HYSA Calculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function HysaCalculatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What is a high-yield savings account?</h2>
      <p>
        A <strong>high-yield savings account (HYSA)</strong> pays 10-20× the national average savings rate — online banks
        offer 4-5% APY with no monthly fees. Interest compounds daily at most banks and is credited monthly, so your
        money grows even while you sleep. This calculator projects your balance with daily compounding and regular
        monthly deposits.
      </p>

      <h2>How the math works</h2>
      <p>
        Daily compounding converts the advertised APY into an effective monthly rate:
        <code>r = (1 + APY/365)^(365/12) − 1</code>. Each month the balance grows by that rate and your deposit is
        added. Over years this snowballs — the green gap between the balance curve and your total deposits in the chart
        is pure interest you earned for doing nothing.
      </p>

      <h2>HYSA vs CDs vs index funds</h2>
      <p>
        HYSA rates are <em>variable</em> — the Fed can cut them at any time — but the principal never drops and FDIC
        insurance covers up to $250k. A CD locks today&apos;s rate but charges a penalty for early withdrawal. Index
        funds historically return more (~10%) but can lose 30% in a bad year. A common strategy: keep your emergency
        fund in a HYSA and long-term money invested.
      </p>

      <h2>Tips to maximize yield</h2>
      <p>
        Rates change weekly — banks quietly drop promotional APYs hoping you won&apos;t notice. Check your rate every
        quarter and compare against the current best. Automating a deposit the day after payday is the single most
        effective habit: money you never see is money you never spend.
      </p>
    </section>
  )
}
