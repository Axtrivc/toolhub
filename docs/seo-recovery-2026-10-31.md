# ToolHub search visibility recovery — 2026-10-31

This patch addresses concrete repository-level crawlability and credibility risks. It does **not** claim to reverse or confirm an algorithmic penalty.

## Evidence / chronology

- Google Search Console reported roughly 1,000–1,600 daily impressions before a sudden fall on August 18, 2026. Indexed URL counts did not collapse.
- Google's [August 2026 spam update](https://status.search.google.com/incidents/LEubPCm2octf2uMqCFKE) started August 18 (US/Pacific). Temporal overlap is *not* proof of causation.
- As of the GSC October 23 snapshot, 137 URLs were indexed and 231 were "Discovered — currently not indexed"; many later URLs were added in October.
- Cloudflare's available logs did not show a broad Googlebot 403/5xx failure; a sample of AI-crawler blocks concerns other user agents.

## Changes

1. Stop generating the same keyword-stuffed About/How-to/Why boilerplate for every tool. Keep each tool's dedicated explanatory content, formulas, FAQ, and working UI.
2. Preserve complete, editorial titles; don't inject current years on evergreen pages, or leave broken final clauses.
3. Use unique per-tool metadata descriptions, not a shared "100% Free" pitch.
4. Remove hreflang references to client-only ?lang= variants that serve identical static English HTML; keep language switching for users.
5. Make breadcrumb link/structured data point to the canonical /tools/ directory.
6. Keep sitemap URLs stable; only emit accurate article lastmod values, not a single fabricated freshness date on all tools.
7. Add verification against exported HTML and the sitemap in CI.

## Follow-up (no mass changes until evidence)

- Compare August 10–17 and August 18–25 query and page position metrics in GSC.
- Use URL Inspection on representative indexed and discovered URLs to check Google's selected canonical and last crawl.
- Improve original examples and independently test high-value tools first; avoid scaling more generic pages.
- Check results over several weeks. Ranking and index recovery are not guaranteed by technical fixes.
