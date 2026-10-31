# SEO recovery changes — 2026-10-31

Baseline: `d465717b852c595a85acfc8fcc2070b86e423fff`, matching remote main and merged PR #3. Initial working tree was clean. Branch: `seo/incident-recovery-2026-10-31`. No push, merge, deployment or environment publication performed.

## Review units and rollback

| Change | Evidence and expected effect | Scope / tradeoff | Rollback |
|---|---|---|---|
| Remove root `app/loading.tsx` | Exported baseline placed all 369 indexable pages' main content into hidden React stream segments, with visible Loading until script execution. Browser without JS could not see H1. Render static content directly; reduce directory layout movement | All routes; client navigation loses the global spinner, retains current screen until next route resolves. Interactive components and locale switching retained. This October implementation is not evidence of August causation | Restore this file from baseline; keep audit test to expose renewed JavaScript-dependent visibility |
| `lib/json-repair.ts`, `batch16AITools.tsx` | Malformed `{"message":"undefined",}` silently became a different value. Protect complete/truncated string tokens from syntax replacement; safely convert escaped single quotes | JSON Repair: non-finite numeric literals now become null instead of invented zero. Eleven fixtures assert original values, escaped quotes, trailing commas, truncation, invalid input. Parsing is still heuristic and cannot recover omitted information or arbitrary-precision JSON numbers | Restore component engine and remove extracted module/test as one unit |
| Wordle, Word Counter, QR, Loan helpers | Concrete duplicate-letter/counting/QR-quiet-zone failures and independent amortization fixtures | See FLAGSHIP.md; pure loan extraction does not intentionally change arithmetic. Four-language worked examples added to Wordle/Word Counter | Revert each helper with its component import and tests; do not revert unrelated tools |
| `public/sw.js` | Offline fallback looked in wrong cache; uncached RSC could receive HTML; cleanup deleted unrelated caches | Correct fallback only for navigation and restrict cache ownership. Offline pages still require prior successful caching | Revert SW implementation; deploy a **new, higher** cache version rather than relying on an old installed worker |
| `lib/tools.ts`, generated `lib/related-tools.ts` | Task-specific nextTools existed but recommendation logic ignored them | 72 recommendation lists change; all 350 targets verified. URL membership unchanged | Revert recommendation function and regenerate index together |
| Token estimator content, FAQ and summary | No calibration supports claimed 10–20% error / tokenizer compatibility | Correct four-language limitation text, keep existing approximate counting behavior | Revert text independently, but do not restore unsupported accuracy guarantees |
| `lib/seo.ts`, remove `lib/rating.ts` | Search keyword strings used as SoftwareApplication featureList; unused HowTo builder promised universal instant results/export; dormant hash-rating generator remained after removal from output | Omit unsupported optional featureList; delete unused builder and rating implementation; align unused breadcrumb helper with actual canonical directory. Baseline output already had no fake ratings—this prevents reintroduction, not a new claim that PR #3 failed | Restore individual optional helpers only with genuine visible data and tests |
| Audit, browser, GSC tools and Quality Gate | Existing verifier covered tools only; no all-page graph, hidden-content regression, or reproducible GSC analysis | Standard-library Python and existing TypeScript/Playwright; no dependency/lockfile additions. CI downloads Chromium. Reports distinguish static eligibility from actual indexing | Remove added CI steps/scripts independently; preserve historical evidence |

## Reproduction

From repository root:

```sh
npm ci --no-audit --no-fund
npm run build
npm run lint
node scripts/verify-seo-export.mjs
npm run smoke
node scripts/test-flagship.mjs
node scripts/test-json-repair.mjs
node scripts/test-service-worker.mjs
node scripts/test-related-tools.mjs
python3 scripts/seo-audit.test.py
python3 scripts/test-gsc-analysis.py
python3 scripts/seo-audit.py
node scripts/check-samples.mjs
# Separate persistent shell, then run browser checks in this shell:
# node scripts/static-server.mjs out 3100
node scripts/seo-browser.mjs reports/seo/browser-final.json
```

Next/Turbopack needs local IPC sockets; this managed environment required supported sandbox escalation for installation, build and browser networking. Existing proxy, TLS and artifact verification stayed enabled. No credentials are embedded in scripts. Use installed Chromium (`CHROME_PATH` override supported), or `npx playwright-core install --with-deps chromium` as CI does.

`check-samples.mjs` exits zero despite reporting 3 existing sample/config mismatches and 38 standalone cases. These are not counted as passed functional tests. The all-page inventory also does not certify correctness of every calculator. GitHub-hosted CI has been configured but not remotely executed in this task.

See AUDIT.md for final counts and remaining limits; MONITORING.md for real GSC CSV import. Historical report files are observations, not claims of live search recovery.
