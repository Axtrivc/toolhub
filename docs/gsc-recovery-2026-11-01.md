# GSC Impressions Recovery Notes — November 1, 2026

## Evidence from the supplied Search Console export

Scope: Web search, July 31–October 30, 2026 (92 days).

- Total: **6 clicks, 9,129 impressions, 0.07% CTR, 72.31 average position**.
- August 11–17: 8,280 impressions (**1,183/day**), 2 clicks.
- August 18–24: 9 impressions (**1/day**), 0 clicks.
- August 1–17 accounts for **8,978 / 9,129 (98.35%)** of all impressions in the export.
- The largest legacy page totals are Reading & Speaking Time (1,599), Loan Calculator (907), Weight Converter (873), and List Diff (620). These are period totals, not day-by-page measurements.

The export does not contain a date × page or date × query cross-tab. It therefore establishes the timing and magnitude of the site-wide loss, but not which individual URL caused or drove it.

## Historical project findings

The repository had site-wide programmatic explanatory copy and generic HowTo markup on the legacy tool pages before August 18. The copy was introduced on August 1 and the markup on August 2. Commit `d465717b` removed those patterns on October 31.

Google's official incident log says the **August 2026 spam update** started at **2026-08-18 09:27 US/Pacific**, globally and for all languages: <https://status.search.google.com/incidents/LEubPCm2octf2uMqCFKE>.

The date matches the GSC cliff and the historical template exposure. This is a credible investigation lead, **not proof of an algorithmic penalty or a manual action**. GSC Manual Actions, URL Inspection, deployment history, and crawl logs remain external checks.

## Improvements in this change

1. **Related-tool coverage:** replaced featured-first selection with a deterministic same-category rotation. Every published tool now receives related-tool links; verification reports 350/350 coverage, with 2–11 inbound recommendations per tool instead of 278 tools receiving none.
2. **Thin legacy content:** expanded the five pages with fewer than 100 words across dedicated copy and FAQ/formula prose: URL Query Parser, Slug to Title, Text to List, Add Line Numbers, and URL Extractor. The additions document actual tool behavior, worked examples, limitations, and practical workflows rather than reusable keyword templates.
3. **Regression gate:** `scripts/verify-seo-export.mjs` now checks related-index cardinality, self-links, duplicate targets, unknown targets, and inbound coverage in addition to rendered HTML and sitemap checks.

## Deliberately not changed

- No new mass-produced SEO paragraphs, synthetic ratings, shared description hooks, or hidden text.
- No canonical consolidation for Mass Converter and Weight Converter yet. They share functionality but have unique explanatory copy; consolidation needs URL Inspection and page-level performance evidence first.
- No assertion that the October 31 or November 1 changes have already restored rankings. Recovery needs subsequent GSC observation.

## Next measurements

1. In GSC, inspect Manual Actions and sample the four highest-impression legacy URLs plus Mass/Weight for indexing, Google-selected canonical, and last crawl.
2. Export page × date and query × date for August 8–31 to identify the actual affected URLs and queries.
3. Compare 7-day and 28-day impressions after the October 31 template removal and this change; do not judge recovery from a single day.
4. Keep real tool content and internal links stable while Google recrawls. Add further editorial improvements based on query intent, not word-count targets.
