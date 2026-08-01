import type { ReactNode } from 'react'

/**
 * Slug Generator 配套深度内容
 *
 * 这是过 AdSense "low value content" 审核的关键 - 纯工具页会被拒,
 * 必须配真实有价值的原创内容。同时也利于 SEO 长尾词排名。
 */
export function SlugGeneratorContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What Is a URL Slug?</h2>
      <p>
        A <strong>URL slug</strong> is the human-readable part of a web address that identifies a
        specific page. In the URL <code>example.com/blog/{`{slug}`}</code>, the slug is the
        descriptive text at the end — for example, <code>how-to-brew-coffee</code> in{' '}
        <code>example.com/blog/how-to-brew-coffee</code>. A well-crafted slug tells both readers and
        search engines what the page is about before anyone clicks.
      </p>

      <h2>Why Do Slugs Matter for SEO?</h2>
      <p>Search engines like Google use the URL as one of many signals to understand a page&apos;s topic. A clean, descriptive slug contributes to rankings in three concrete ways:</p>
      <ul>
        <li>
          <strong>Keyword relevance.</strong> When the slug contains the target keyword (e.g.{' '}
          <code>best-coffee-grinders</code>), it reinforces the page&apos;s topic. Google has
          confirmed that words in the URL are a (minor) ranking signal.
        </li>
        <li>
          <strong>Click-through rate.</strong> A readable URL like{' '}
          <code>/seo-slug-guide</code> earns more clicks in search results than a cryptic one like{' '}
          <code>/p=12345</code> or <code>/2024/01/15/post-id-987</code>.
        </li>
        <li>
          <strong>Anchor text when linked.</strong> Other sites often paste the raw URL as the link
          text. A descriptive slug becomes natural anchor text, which helps search engines understand
          the link context.
        </li>
      </ul>

      <h2>What Makes a Good Slug?</h2>
      <p>Follow these rules and your slugs will be both SEO-friendly and user-friendly:</p>
      <ol>
        <li>
          <strong>Keep it short.</strong> Aim for 3–5 words. Long slugs dilute keyword weight and get
          truncated in search results. <code>best-coffee-grinders</code> beats{' '}
          <code>the-absolute-best-coffee-grinders-for-home-use-in-2026</code>.
        </li>
        <li>
          <strong>Use lowercase.</strong> URLs are technically case-sensitive on many servers, and
          mixed case causes duplicate-content issues. Lowercase is the safe convention.
        </li>
        <li>
          <strong>Separate words with hyphens.</strong> Google treats hyphens (<code>-</code>) as
          word separators but ignores underscores (<code>_</code>). Always prefer{' '}
          <code>how-to-brew</code> over <code>how_to_brew</code>.
        </li>
        <li>
          <strong>Strip stop words.</strong> Articles and prepositions like &quot;the,&quot;
          &quot;a,&quot; &quot;of,&quot; &quot;for&quot; add length without value.{' '}
          <code>best-coffee-grinders</code> is better than <code>the-best-coffee-grinders-for-you</code>.
        </li>
        <li>
          <strong>Remove special characters.</strong> Avoid apostrophes, quotes, parentheses, and
          accents. They must be percent-encoded in URLs, producing ugly strings like{' '}
          <code>%26</code> or <code>%e2%80%99</code>.
        </li>
      </ol>

      <h2>How This Slug Generator Works</h2>
      <p>
        This tool runs entirely in your browser — no data is sent to any server. When you type a
        title, it applies the following pipeline in real time:
      </p>
      <ol>
        <li>Normalizes Unicode (so <code>café</code> becomes <code>cafe</code>).</li>
        <li>Lowercases the text if the option is enabled.</li>
        <li>Removes special characters, keeping only letters, numbers, and spaces.</li>
        <li>Replaces spaces with your chosen separator (hyphen by default).</li>
        <li>Collapses multiple separators and trims leading/trailing ones.</li>
      </ol>
      <p>The result is a clean, URL-safe string ready to paste into your CMS, static site generator, or routing config.</p>

      <h2>Slug Examples</h2>
      <p>Here are a few real-world conversions to show what to expect:</p>
      <ul>
        <li>
          <code>10 SEO Tips for Better Rankings</code> → <code>10-seo-tips-for-better-rankings</code>
        </li>
        <li>
          <code>How to Use Node.js with Docker</code> → <code>how-to-use-nodejs-with-docker</code>
        </li>
        <li>
          <code>Café &amp; Résumé Guide (2026)</code> → <code>cafe-resume-guide-2026</code>
        </li>
        <li>
          <code>What is a Slug? — Complete Guide</code> → <code>what-is-a-slug-complete-guide</code>
        </li>
      </ul>
    </section>
  )
}
