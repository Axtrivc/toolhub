import { ToolContent } from '@/lib/content-templates'

export function TextCleanerContent() {
  return (
    <ToolContent
      intro={
        <p>
          A <strong>deep text cleaner</strong> that scrubs pasted text down to exactly what you want to keep: strip
          emojis and pictographs, remove accents and diacritics, delete special characters, cut URLs and HTML tags,
          collapse runaway whitespace, drop empty lines, and lowercase everything. It is handy when you are cleaning
          copied web content, preparing data for import, or normalizing user-generated text. Everything runs 100% in
          your browser — your text is never sent anywhere.
        </p>
      }
      sections={[
        {
          heading: 'Each cleaner is an independent toggle',
          body: (
            <p>
              Nothing happens unless you ask for it. Check only the operations you need — the output updates live as
              you type or flip switches. The <strong>Remove special characters</strong> option keeps letters, digits,
              and spaces plus whatever you put in the <em>characters to keep</em> field (default{' '}
              <code>.,!?-&apos;&quot;</code>), so punctuation you care about survives while ™, ©, and stray symbols
              disappear. Accent removal uses Unicode normalization (<code>NFD</code>) to split <code>é</code> into{' '}
              <code>e</code> + accent, then strips the accent — so <em>café</em> becomes <em>cafe</em> cleanly.
            </p>
          ),
        },
        {
          heading: 'Order of operations matters',
          body: (
            <p>
              The pipeline runs in a deliberate order: HTML tags and URLs are removed <em>first</em>, before special
              character stripping — otherwise a URL would be shredded into pieces before the URL remover could
              recognize it. Accents are folded before special-character stripping too, so accented letters become plain
              ASCII instead of being deleted. Whitespace operations (collapse spaces, trim lines, remove empty lines)
              run last, tidying whatever the earlier steps left behind. The before/after character counts show exactly
              how much was removed.
            </p>
          ),
        },
        {
          heading: 'Tips and pitfalls',
          body: (
            <p>
              Emoji stripping also removes dingbats and symbol ranges like ✓ and ❤ — that is intentional, but worth
              knowing if your checkmarks matter. Lowercasing is applied to the whole text, so it is not suitable when
              case carries meaning (acronyms, sentence case for publication). If you need to keep specific symbols —
              say <code>#</code> for headings or <code>@</code> for mentions — simply add them to the keep list. When
              in doubt, enable one cleaner at a time and watch the live preview.
            </p>
          ),
        },
      ]}
    />
  )
}
