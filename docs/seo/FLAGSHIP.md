# Flagship tool verification — 2026-10-31

These are product correctness changes, not evidence of the cause of the August incident. No URL, indexability, metadata or rating changes are made here. Tests use real pure modules (the existing TypeScript harness only transpiles them) and the installed QR encoder; they do not claim full browser or scanning coverage.

## Confirmed defects repaired

| Tool / scope | Before | After and evidence | Risk / rollback |
| --- | --- | --- | --- |
| Wordle Solver | A green A plus a yellow A allowed ALONE, despite requiring two copies. Green positions and yellow lower bounds were checked separately. | Shared pure `lib/wordle-solver.ts` combines green and yellow multiplicity; the grey cap uses that same total. ADAPT survives, ALONE does not; repeated grey/green/yellow tests cover the exact-count case. | Candidates become stricter where previously incorrect. Revert helper import and extraction together. |
| Word counter and consumers of `lib/text-stats.ts` | `Hello — world!` counted punctuation as a word; Chinese punctuation also inflated mixed counts. Shared sentence counter omitted an unfinished final sentence, unlike the separate Word Counter implementation. | Only space-delimited non-CJK units containing a Unicode letter/number count. Both counters use the same sentence helper: `One sentence. Another unfinished` → 2; punctuation-only text → 0. | Reading/token-adjacent word statistics change for punctuation. This intentionally remains a heuristic, not language-aware word segmentation. Revert shared helper and client together. |
| QR Code Generator preview and both downloads | Two-module border around QR matrix. | Four-module quiet zone shared by preview, PNG and SVG. QR Code developer guidance: https://www.qrcode.com/en/howto/code.html . SVG fixture verifies matrix size + 8 and module offset 4. | At the same overall image size, data modules become slightly smaller. Test scanning on intended devices/print size; automated SVG inspection does not prove camera readability. Revert constant/import and three margins together. |

Wordle and Word Counter receive concrete examples and limitations in all four existing language variants. Wordle explicitly explains that yellow positions are not captured and the bundled list is not an official daily-answer list. No generated filler was added.

## Six-tool review disposition

- Loan: existing zero-rate handling, term limits, final-payment correction and amortization schedule were present. Extracted the unchanged pure `calcLoan` into `lib/loan.ts` for regression tests: $1,200 at 0% for one year → $100/month; $20,000 at 7.5% for five years → $400.76/month; principal conservation and final zero balance verified. UI guards continue to own input validation.
- Wordle: multiplicity defect above fixed. No full guess-history engine or entropy ranking added. Manual yellow-position exclusions remain a clearly disclosed limitation.
- Percentage: existing four modes and zero-denominator guard reviewed. No formula change made; negative-baseline percentage interpretation needs a separate deliberate UX decision. No claim that every mathematical convention is covered.
- Compound interest: implementation uses monthly compounding and end-of-month contributions with zero-rate branch. Existing sample presets are illustrative assumptions, not market forecasts. No claim of live rates; no code change in this pass.
- QR: quiet-zone defect fixed; existing byte-capacity, equal-color and contrast checks retained. Browser download and real scanning still require integration/device validation beyond the unit suite.
- Word counter: punctuation and sentence consistency defects repaired with multilingual methodology examples. Grapheme clustering, abbreviations, and linguistic tokenization are explicitly not promised.

## Commands actually run

`node scripts/test-flagship.mjs`: 7 tests passed, 0 failed, 0 skipped. Cases cover three Wordle constraints, word counting, sentence counting, loan reference/conservation, and QR quiet-zone geometry. Run this exact command in CI to see individual cases. Full build and browser verification are recorded in the main audit by the coordinating agent.

`npm run lint` is run by the coordinating agent after merging all concurrent edits; its final outcome is authoritative for the integrated branch.
