import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME } from '@/lib/seo'
import { SITE_URL } from '../../../next.config'
import { BlogToolsBanner } from '@/components/BlogToolsBanner'

/**
 * 技术架构复盘博客 —— 面向 HN / 极客社区的全英文长文。
 *
 * 路由:/blog/how-i-built-toolhub/  (trailingSlash: true)
 * 静态导出兼容:本页为纯 server component,无 'use client',
 *   无运行时数据请求,build 时输出为静态 HTML。
 */

const SLUG = '/blog/how-i-built-toolhub/'
const PUBLISH_DATE = '2026-08-04'
const READ_TIME = '9 min read'

export const metadata: Metadata = {
  title: 'How I Built ToolHub: A 138-Tool Static PWA That Stays Sub-Second',
  description:
    'A no-bullshit architecture retrospective on building ToolHub — a Next.js static export of 138 in-browser tools with lazy Service-Worker caching, 138+ JSON-LD pSEO schemas, and zero-CLS AdSense. The tradeoffs, the numbers, and what I would do differently.',
  keywords: [
    'nextjs static export',
    'programmatic seo',
    'pwa service worker',
    'stale-while-revalidate',
    'adsense cls',
    'core web vitals',
    'lighthouse',
    'json-ld structured data',
    'build in public',
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    type: 'article',
    url: `${SITE_URL}${SLUG}`,
    title: 'How I Built ToolHub: A 138-Tool Static PWA That Stays Sub-Second',
    description:
      'A no-bullshit architecture retrospective — Next.js static export, lazy SW caching, 138+ JSON-LD pSEO schemas, zero-CLS AdSense.',
    siteName: SITE_NAME,
    publishedTime: PUBLISH_DATE,
    authors: [SITE_NAME],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How I Built ToolHub: A 138-Tool Static PWA That Stays Sub-Second',
    description:
      'Next.js static export, lazy Service-Worker caching, 138+ JSON-LD schemas, zero-CLS AdSense. The tradeoffs and the numbers.',
  },
}

/** schema.org Article / TechArticle 结构化数据(社区 + SEO 双用) */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['BlogPosting', 'TechArticle'],
  headline: 'How I Built ToolHub: A 138-Tool Static PWA That Stays Sub-Second',
  description:
    'A no-bullshit architecture retrospective on building ToolHub — Next.js static export, lazy SW caching, pSEO, and zero-CLS AdSense.',
  datePublished: PUBLISH_DATE,
  dateModified: PUBLISH_DATE,
  author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}${SLUG}`,
  url: `${SITE_URL}${SLUG}`,
  inLanguage: 'en',
  keywords:
    'nextjs static export, programmatic seo, pwa service worker, stale-while-revalidate, adsense cls, core web vitals',
  about: [
    { '@type': 'Thing', name: 'Next.js (web framework)' },
    { '@type': 'Thing', name: 'Service Worker' },
    { '@type': 'Thing', name: 'Programmatic SEO' },
  ],
}

export default function HowIBuiltToolHubPost() {
  return (
    <div className="container-page py-10">
      {/* JSON-LD:与站点其它页面一致,通过 raw script 注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* 顶部:返回首页 Button(用户明确要求) */}
      <div className="mb-6">
        <Link href="/" className="btn btn-secondary">
          <span aria-hidden="true">←</span> Back to {SITE_NAME}
        </Link>
      </div>

      {/* 面包屑:与 PageShell / ToolLayout 视觉对齐 */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 text-sm"
        style={{ color: 'rgb(var(--text-subtle))' }}
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog/how-i-built-toolhub/" className="hover:text-brand-600">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li style={{ color: 'rgb(var(--text-muted))' }}>How I Built ToolHub</li>
        </ol>
      </nav>

      {/* 文章头部 */}
      <header className="mb-10">
        <div
          className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium"
          style={{ color: 'rgb(var(--text-subtle))' }}
        >
          <span className="rounded-full px-2.5 py-1" style={{ background: 'rgb(var(--bg-subtle))' }}>
            # build-in-public
          </span>
          <span className="rounded-full px-2.5 py-1" style={{ background: 'rgb(var(--bg-subtle))' }}>
            # architecture
          </span>
          <span className="rounded-full px-2.5 py-1" style={{ background: 'rgb(var(--bg-subtle))' }}>
            # seo
          </span>
        </div>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl" style={{ color: 'rgb(var(--text))' }}>
          How I Built ToolHub: A 138-Tool Static PWA That Stays Sub-Second
        </h1>
        <p className="mt-4 max-w-2xl text-lg" style={{ color: 'rgb(var(--text-muted))' }}>
          A no-bullshit retrospective on shipping a Next.js static export of 138 in-browser tools —
          the architecture, the pSEO engine, the zero-CLS ad story, and what I would do differently.
        </p>
        <div
          className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"
          style={{ color: 'rgb(var(--text-subtle))' }}
        >
          <time dateTime={PUBLISH_DATE}>{PUBLISH_DATE}</time>
          <span aria-hidden="true">·</span>
          <span>{READ_TIME}</span>
          <span aria-hidden="true">·</span>
          <span>by the {SITE_NAME} team</span>
        </div>
      </header>

      {/* 正文:复用全站 .prose-content 排版(主题感知) */}
      <article className="prose-content max-w-3xl">
        {/* ─────────── 1. The Problem ─────────── */}
        <h2>1. The Problem: Modern Web Tools Are Quietly Broken</h2>
        <p>
          Open any random &ldquo;free online tool&rdquo; on the first page of Google. Here is the
          experience you almost always get:
        </p>
        <ul>
          <li>
            <strong>Bloat.</strong> A single text-box utility ships 2&ndash;4 MB of JavaScript, a
            client-side router, an analytics SDK, a chat widget, and three cookie banners &mdash; all
            to compute a slug.
          </li>
          <li>
            <strong>Tracking.</strong> Your input leaves the device the moment you paste it. The
            &ldquo;tool&rdquo; is really a form that POSTs to a server, where your data is logged,
            stored, and eventually sold.
          </li>
          <li>
            <strong>Layout shift (CLS).</strong> The ad slot is empty for 800&nbsp;ms, then snaps in
            and shoves the result you were reading down by 250&nbsp;px. Multiply by 3 ad slots per
            page.
          </li>
          <li>
            <strong>Slow server rendering.</strong> A tool that could be a static HTML file is
            instead a Node/PHP render that takes 600&ndash;1200&nbsp;ms TTFB on a cold origin,
            because someone thought every URL needed to be &ldquo;dynamic&rdquo;.
          </li>
        </ul>
        <p>
          None of this is necessary. A <em>unit converter</em> does not need a database. A{' '}
          <em>JSON formatter</em> does not need a backend. The honest version of these tools is: one
          HTML file, one small script, runs in your tab, forgets everything when you close it.
          ToolHub is my attempt to build the honest version, at scale, across{' '}
          <strong>138 tools</strong>.
        </p>

        {/* ─────────── 2. Architecture Choice ─────────── */}
        <h2>2. Architecture Choice: Static Export + Lazy Service-Worker Caching</h2>
        <p>
          The whole site is a <strong>Next.js static export</strong>:
        </p>
        <pre>
          <code>{`// next.config.ts
const nextConfig = {
  output: 'export',        // every route → static HTML on a CDN
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
}`}</code>
        </pre>
        <p>
          That one line does most of the work. There is no origin server, no SSR cold start, no
          database to scale. Every tool page is a pre-rendered HTML file sitting on the edge. TTFB is
          whatever your CDN&rsquo;s is &mdash; typically under 50&nbsp;ms.
        </p>
        <p>
          The catch with a pure static site is that a returning visitor still re-downloads
          everything on a hard reload, and there&rsquo;s no offline story. So I added a hand-written{' '}
          <strong>Service Worker</strong> (<code>public/sw.js</code>) that does two jobs:
        </p>
        <ul>
          <li>
            <strong>HTML navigations → network-first.</strong> You always see the newest version when
            online; if the network dies, it falls back to the cached copy, then to a cached homepage
            as the offline shell.
          </li>
          <li>
            <strong>Static assets → stale-while-revalidate.</strong> The first return visit is
            instant (cache), and the SW refreshes the asset in the background. Because{' '}
            <code>_next/static/*</code> files are content-hashed, this is safe to cache aggressively.
          </li>
        </ul>
        <p>The SWR handler is a dozen lines:</p>
        <pre>
          <code>{`// public/sw.js — stale-while-revalidate for assets
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE)
  const cached = await cache.match(request)
  const networkPromise = fetch(request)
    .then((fresh) => {
      if (fresh && fresh.ok && fresh.type === 'basic') {
        cache.put(request, fresh.clone()).catch(() => {})
      }
      return fresh
    })
    .catch(() => cached)
  // serve cache instantly, refresh in the background
  return cached || networkPromise
}`}</code>
        </pre>
        <p>
          Two details that matter: (a) the SW explicitly <strong>does not cache cross-origin
          requests</strong> &mdash; AdSense and analytics traffic is passed straight through, so I
          never accidentally cache ad creatives or break impression counting; (b) the SW bumps a{' '}
          <code>VERSION</code> constant on every deploy and pairs it with{' '}
          <code>skipWaiting()</code> + old-cache eviction on <code>activate</code>, which sidesteps
          the browser&rsquo;s 24-hour <code>sw.js</code> max-age and gets new code to users in
          minutes. The registration side also calls <code>registration.update()</code> on every page
          load.
        </p>
        <p>
          The result is &ldquo;lazy&rdquo; caching by design: only pages a visitor actually opens get
          cached. Across 138 tool pages, I do not pre-cache the long tail &mdash; that would balloon
          install time. People get offline access to <em>the tools they use</em>, which is the only
          offline access that means anything.
        </p>

        {/* ─────────── 3. pSEO Engine ─────────── */}
        <h2>3. The pSEO Engine: 138+ JSON-LD Schemas &amp; an Automated Internal-Link Mesh</h2>
        <p>
          Programmatic SEO (pSEO) gets a bad name because most of it is thin, templated junk. The
          version that actually works has two halves: <strong>real structured data per page</strong>,
          and a <strong>real internal-link graph</strong> so crawlers can find and trust all of it.
        </p>
        <p>
          Every tool is described once in a single source of truth (<code>lib/tools.ts</code>) and
          then generates four JSON-LD blocks automatically:
        </p>
        <ul>
          <li>
            <code>WebApplication</code> + <code>SoftwareApplication</code> &mdash; tells Google
            &ldquo;this is a free, in-browser app&rdquo; with an <code>Offer</code> at price 0 and
            the right <code>applicationCategory</code> (Finance / Developer / Health / &hellip;).
          </li>
          <li>
            <code>BreadcrumbList</code> &mdash; Home › Category › Tool, rendered both as a visible{' '}
            <code>&lt;nav&gt;</code> and as machine-readable schema.
          </li>
          <li>
            <code>FAQPage</code> &mdash; pulled from the same FAQ data file that renders the visible
            on-page FAQ, so the schema and the visible content can never drift apart (drift is what
            gets you a manual action).
          </li>
          <li>
            <code>HowTo</code> &mdash; the standard three steps (input → view → copy/export), with a{' '}
            <code>totalTime</code> estimate.
          </li>
        </ul>
        <p>
          That&rsquo;s <strong>138 pages × 4 schemas = 552+ structured-data blocks</strong>, all
          generated from one config file. Adding a tool is literally three steps: drop a{' '}
          <code>page.tsx</code>, add one entry to <code>tools.ts</code>, mark{' '}
          <code>published: true</code>. Homepage, sitemap, breadcrumbs, related tools, and all four
          schemas update themselves.
        </p>
        <p>
          The second half is the link mesh. Every tool page ends with a{' '}
          <strong>Related Tools</strong> grid computed by category (same category first, featured
          pinned, backfilled with site-wide populars to always fill the grid). The homepage groups
          all 138 tools by category, which builds clean topical silos. Net effect: crawlers reach
          every tool in ≤ 3 hops, and link equity flows from the high-traffic tools outward to the
          long tail. This is the boring 80% of pSEO &mdash; no AI content, just a real graph.
        </p>

        {/* ─────────── 4. AdSense & Performance ─────────── */}
        <h2>4. AdSense &amp; Performance: Zero-CLS Placeholders, Sub-Second Loads</h2>
        <p>
          The single biggest performance killer on ad-supported utility sites is{' '}
          <strong>Cumulative Layout Shift</strong> from late-loading ads. The fix is dumb and
          absolute: <em>reserve the space before the ad exists</em>.
        </p>
        <p>
          ToolHub renders an <code>AdPlaceholder</code> component on every tool page that always
          occupies a fixed <code>min-height: 250px</code> box, whether or not AdSense has filled it
          yet:
        </p>
        <pre>
          <code>{`// components/AdPlaceholder.tsx (simplified)
<div
  data-ad-placeholder={slot}
  className="min-h-[250px] w-full rounded-xl
             border border-dashed
             bg-slate-100/50 dark:bg-slate-900/30"
>
  <span>ADVERTISEMENT</span>
</div>`}</code>
        </pre>
        <p>
          When AdSense injects a creative, it renders <em>inside</em> the already-sized box. The
          page never moves. CLS from ads is effectively zero. This also happens to be what AdSense
          reviewers want to see, and it&rsquo;s a direct Core Web Vitals ranking signal &mdash; so a
          decision made for UX doubles as an SEO decision.
        </p>
        <p>
          Combine that with the static-export + SWR story from section 2 and the load math gets
          boring in the best way:
        </p>
        <ul>
          <li>HTML is on a CDN, served in tens of milliseconds.</li>
          <li>JS is split per tool; the interactive chunk is small.</li>
          <li>Return visits are instant (SWR cache).</li>
          <li>Ads do not shift the layout, so the CWV &ldquo;good&rdquo; band is stable.</li>
        </ul>
        <p>
          The realistic outcome is a sub-second first contentful paint on a warm cache and a clean
          Lighthouse pass on a cold one. I am not chasing a 100; I am chasing &ldquo;the page is
          obviously fast to a human,&rdquo; which is a much lower bar and the only one a user
          actually notices.
        </p>

        {/* ─────────── 5. Key Takeaways & Open Metrics ─────────── */}
        <h2>5. Key Takeaways &amp; Open Metrics</h2>
        <p>If I had to compress the whole project into a few lines:</p>
        <ul>
          <li>
            <strong>Default to static.</strong> 95% of &ldquo;tools&rdquo; have no business being
            server-rendered. <code>output: 'export'</code> deletes an entire class of latency and
            ops problems.
          </li>
          <li>
            <strong>A Service Worker is a caching layer, not a framework.</strong> 150 lines of
            vanilla JS gave me offline support + SWR across 138 pages. No <code>workbox</code>, no
            abstraction.
          </li>
          <li>
            <strong>pSEO is a data model, not a content farm.</strong> One config file → 552+
            structured-data blocks + an automatic internal-link mesh. The schema and the visible page
            share one source of truth, so they can never disagree.
          </li>
          <li>
            <strong>Reserve ad space always.</strong> Zero-CLS is not a polish task; it&rsquo;s a
            1-component architectural decision that pays off in UX, CWV, and ad review.
          </li>
          <li>
            <strong>Privacy is an architecture, not a promise.</strong> &ldquo;Your data never leaves
            the device&rdquo; is a true statement here only because the tools literally have no
            backend to send it to.
          </li>
        </ul>

        <h3>Open metrics (as of this post)</h3>
        <p>
          I believe in build-in-public with real numbers, so here is the honest current state instead
          of a victory lap:
        </p>
        <ul>
          <li>
            <strong>Tools shipped:</strong> 138 live (out of 141 configured; the rest are staged).
          </li>
          <li>
            <strong>Structured-data blocks:</strong> 552+ (4 per tool, generated from one file).
          </li>
          <li>
            <strong>Build target:</strong> fully static export; no origin server, no SSR.
          </li>
          <li>
            <strong>Caching:</strong> network-first HTML + SWR assets, lazy per-visit; cross-origin
            (AdSense/analytics) never cached.
          </li>
          <li>
            <strong>Not yet measured (being honest):</strong> real-user CrUX field data (needs more
            traffic), per-tool revenue/RPM, and SW cache-hit ratio. I will update this post when I
            have those.
          </li>
        </ul>
        <p>
          If you want to poke at the toolbox, the featured tools below are a good starting point. If
          you build utility sites and want to compare notes &mdash; especially on pSEO at scale and
          keeping CWV clean with ads &mdash; that&rsquo;s the conversation I want to have.
        </p>
      </article>

      {/* 底部:ToolHub 工具箱推荐 Banner(用户明确要求) */}
      <BlogToolsBanner />
    </div>
  )
}
