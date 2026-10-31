# Rendered HTML audit: method and limits

Run from the repository root after `npm run build`:

```sh
python3 scripts/seo-audit.test.py
python3 scripts/seo-audit.py
```

The audit writes `reports/seo/page-inventory.json` and `page-inventory.csv`, then exits nonzero for high-confidence defects. JSON includes the generation timestamp, errors, methodology and classification counts. Each exported HTML document gets a row, including explicitly nonindexable error documents. CI uploads the reports even if the gate fails.

The Python standard-library HTML parser reads real markup. It excludes scripts (including Next.js Flight payloads), styles, navigation, page headers and footers from main-content similarity. Main-targeted React stream containers are included in the *source-content* measurement but explicitly flagged: this does **not** claim their text is visible without JavaScript. A hidden primary heading fails the regression gate. A streamed container by itself remains informational because a page may legitimately stream secondary content.

## Hard checks

- Every published registry slug has exported HTML; unpublished tool exports fail.
- Every normal page has one nonempty H1, a title, a description and exactly one self-referencing canonical. No mechanical title-length limit is used.
- No unexpected noindex, robots exclusion, parameter hreflang, differing Open Graph URL, or known removed filler phrase.
- XML sitemap parses, has unique URLs, includes every normal exported page, and contains no missing HTML or error document.
- JSON-LD parses as JSON objects/arrays. Unverified rating/review claims fail because this project has no established review data source. This is **JSON syntax validation**, not full schema.org or Google rich-result eligibility validation.
- Internal standard anchor destinations resolve to exported pages or files. Linked JS/CSS is checked against Googlebot robots rules. Header-level restrictions remain unmeasured offline.

## Informational checks and triage

The graph counts distinct source pages, not repeated menu links. It computes shortest homepage click depth, parameter links, missing fragment targets and orphans. Duplicate titles/descriptions, repeated explanatory paragraphs and close page pairs are review signals.

Similarity uses visible/source-streamed main-text five-word shingles and Jaccard overlap. A shared paragraph is at least 12 words appearing on at least five pages. Shared UI can still influence both measures. Thresholds (Jaccard ≥0.8 or shared-paragraph ratio ≥0.6) are reproducible triage thresholds, not Google thresholds. Low overlap cannot establish original authorship, useful content, correct calculations or policy compliance.

Classification is deliberately provisional:

- **A**: at least 350 extracted words and no strong duplication/static defect signal; differentiated explanation candidate, **not** a certification of tool functionality.
- **B**: needs editorial/example review; **not** proof the page is thin or broken.
- **C**: confirmed static-output defect, with precise findings; functional defects found through separate tests should be documented alongside the inventory.
- **D**: never assigned automatically. A conclusion of no user value requires individual product review.

Every row carries its reason, priority and evidence. No script deletes, redirects or noindexes any page.

## HTTP and production evidence

`http_status` and `x_robots_tag` are deliberately null in the offline report. `eligible_static_html` means only that the rendered export has no detected static indexing block. It does **not** mean Google indexed it, production returns 200, or Cloudflare accepts Googlebot. Use separate HTTP/browser and deployment evidence before drawing those conclusions. The initial baseline came from the restored published filesystem snapshot; the final inventory must be regenerated from the final local build.
