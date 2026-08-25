/**
 * HtaccessRedirectGenerator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function HtaccessRedirectGeneratorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Order of rules matters</h2>
      <p>Apache applies RewriteRules top-down; the HTTPS and canonical-host blocks must precede individual redirects or they will chain through them and leak intermediate URLs into browsers.</p>
      <h2>Test with 302 first</h2>
      <p>Browsers cache 301s aggressively and there is no reliable un-cache. Ship new rules as R=302, verify every path, then flip to R=301. This generator emits 301 because that is the end goal.</p>
      <h2>Domain migrations</h2>
      <p>The whole-domain block preserves paths automatically: old.com/any/path lands on new.com/any/path with one rule instead of thousands of lines. Update Search Console afterward to speed reindexing.</p>
      <h2>When htaccess is not read</h2>
      <p>If directives seem ignored, check AllowOverride in the vhost config — shared hosts enable it; some performance-tuned setups disable .htaccess entirely in favor of main config.</p>
    </section>
  )
}
