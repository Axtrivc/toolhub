/**
 * HmacGenerator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function HmacGeneratorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>HMAC versus plain hashing</h2>
      <p>SHA-256 alone lets anyone re-compute the digest of a modified message. HMAC folds a secret key into the computation, making forgery infeasible without the key — that is why webhooks use it.</p>
      <h2>Verifying webhook signatures</h2>
      <p>Stripe, GitHub, and Slack sign payloads as HMAC-SHA256 of the raw body with your signing secret. Paste the exact raw body (not re-serialized JSON) and compare the computed hex against the header value.</p>
      <h2>Hex vs base64 output</h2>
      <p>Same bytes, different encoding. Services differ: Stripe shows hex-style comparisons, AWS SigV4 uses hex, OAuth1 uses base64. This tool gives both so no conversion step is needed.</p>
      <h2>Key hygiene</h2>
      <p>Short secrets undermine HMAC. Use 32+ random bytes. Rotating a leaked key invalidates old signatures immediately — compute a new expected signature after any rotation before debugging mismatches.</p>
    </section>
  )
}
