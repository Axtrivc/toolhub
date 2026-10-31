# Independent browser and code review — 2026-10-31

## Scope and result

A separate review agent checked the final exported site and reviewed the changes to streaming/loading, Wordle multiplicity, text counting, QR borders, extracted loan calculation, string-aware JSON repair, related-tool selection, service-worker fallback, schema cleanup, the rendered-HTML audit fixtures, GSC aggregation guards, and CI execution order. GSC comparisons reject mixed dimensions, overlapping periods and unfiltered overlapping appearance categories, report missing-date coverage, and never synthesize absent query rows. No blocking introduced functional or indexing regression was identified in that scope. This is not exhaustive verification of all 350 algorithms.

`node scripts/seo-browser.mjs reports/seo/browser-final.json` completed **17/17 checks**, with zero uncaught browser exceptions. It exercises mobile loan and percentage inputs, word counts and a real clipboard summary, loan CSV download, favorites and recent history, four client locales with stable title/canonical and no hreflang, search navigation, category navigation, the full directory link set, and initial headings without JavaScript. All measured pages have no horizontal overflow at 390×844.

The same restored baseline export had 13/13 existing functional checks pass. No-JavaScript visibility was recorded as a baseline observation rather than hidden behind an expected passing assertion: home, directory, loan and word-counter H1s were all invisible. After removal of the global loading boundary, all four are visible without JavaScript. The new final assertions prevent reintroduction.

## Local performance observations

| Page | LCP before → after (ms) | Observed CLS before → after |
|---|---:|---:|
| Home | 820 → 636 | 0.0116 → 0.0116 |
| Directory | 540 → 184 | 0.3424 → 0 |
| Loan | 516 → 204 | 0 → 0 |
| Word counter | 368 → 168 | 0 → 0 |

Directory layout-shift attribution identified the footer initially visible at y=555 with height=289, then displaced outside the viewport when streamed main content was inserted. Removing the loading boundary resolves that observed movement. This establishes an immediate rendering benefit, not a historical ranking cause.

These are single fresh-context, headless Chromium samples on an unthrottled local static server. External origins were blocked, excluding optional production advertising and analytics. Do not interpret the LCP variation as statistically established field improvement or these values as CrUX p75. INP was not measured. Resource-byte fields in JSON include browser prefetch and uncompressed local responses; they are not the initial production transfer budget. Word-counter JavaScript bytes increased slightly due to the functional fix. No blanket bundle-size improvement is claimed.

## Remaining limits

- The source review finds existing heuristic limits in JSON repair (including outer-text trimming and guessed truncation recovery). The new string-token protection corrects demonstrated corruption; it does not make recovery lossless.
- Wordle's form describes a combined set of constraints, not a complete sequence of guesses with yellow positions. The extracted solver and guidance retain that scope.
- Service-worker changes have isolated VM behavior tests; the local browser suite does not claim an end-to-end installed PWA/offline deployment test.
- Real advertising shifts, provider APIs, Cloudflare routing, production cache rollout and field CWV need production evidence. Browser clipboard/download checks run against the local static build.
- CI wiring is reviewed and the constituent commands ran locally; no hosted GitHub Actions run is claimed until the branch is pushed and CI actually executes.
