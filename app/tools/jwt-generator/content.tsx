/**
 * JwtGenerator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function JwtGeneratorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>When to use this</h2>
      <p>Perfect for debugging auth flows: mint a token with known claims, hand it to your API in a test request, and inspect what your middleware extracts. Pair with our JWT Decoder to see exactly what a server will read back.</p>
      <h2>Algorithm notes</h2>
      <p>HS256/384/512 are symmetric — the same secret signs and verifies. That is why this tool works fully client-side: the secret stays in your browser via WebCrypto. RS256/ES256 need a private key and belong in server-side code.</p>
      <h2>Claims worth setting</h2>
      <p>Always set exp (expiry) on real tokens; add iss (issuer) and aud (audience) when multiple services share tokens. The iat timestamp is pre-filled to now for you.</p>
      <h2>Never ship secrets client-side</h2>
      <p>A signing key embedded in front-end JavaScript is public the moment you deploy. Use this generator with throwaway test secrets only.</p>
    </section>
  )
}
