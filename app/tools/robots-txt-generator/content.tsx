/**
 * Creating your robots.txt 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function RobotsTxtGeneratorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Where the file goes</h2>
      <p>Robots.txt must live at the root of your domain — <code>https://example.com/robots.txt</code>. Search engines never look anywhere else, and subdomains need their own file.</p>
      <h2>Presets explained</h2>
      <p><strong>Standard site</strong> allows everything except a common admin path. <strong>Block everything</strong> is useful for staging sites. <strong>Block AI crawlers</strong> adds directives honored by GPTBot, ClaudeBot, and CCBot operators.</p>
      <h2>Crawl-delay caveats</h2>
      <p>Google explicitly ignores Crawl-delay; Bing and Yandex honor it. If Googlebot hammers your server, use the crawl-rate settings in Search Console instead.</p>
      <h2>robots.txt is advisory</h2>
      <p>Well-behaved crawlers obey it, but it is not authentication. Anything truly private must sit behind access control — disallow rules just ask politely.</p>
    </section>
  )
}
