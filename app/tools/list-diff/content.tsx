import { ToolContent } from '@/lib/content-templates'

export function ListDiffContent() {
  return (
    <ToolContent
      intro={
        <p>
          Comparing two lists is a surprisingly common task: which email addresses are in spreadsheet A but
          not B, which files exist in one folder but not another, which SKUs appeared in last month&apos;s
          report but not this one. Doing it by eye is hopeless for anything beyond a handful of items. This
          tool compares two lists line-by-line and splits them into the four sets that fully describe how
          they differ.
        </p>
      }
      sections={[
        {
          heading: 'The four result sets',
          body: (
            <ul>
              <li>
                <strong>Only in A</strong> — items present in the first list but missing from the second.
                These are the things A has that B does not.
              </li>
              <li>
                <strong>Only in B</strong> — the reverse: items in the second list but not the first.
              </li>
              <li>
                <strong>In both (intersection)</strong> — items present in both lists. Useful for finding
                overlap or shared members.
              </li>
              <li>
                <strong>Union</strong> — every unique item from either list, combined and de-duplicated.
              </li>
            </ul>
          ),
        },
        {
          heading: 'Trimming and case sensitivity',
          body: (
            <p>
              By default the tool trims whitespace from each line (so <code>&quot;apple &quot;</code> matches{' '}
              <code>&quot;apple&quot;</code>) and compares case-insensitively (so{' '}
              <code>&quot;Apple&quot;</code> matches <code>&quot;apple&quot;</code>). Turn off trimming if
              leading spaces matter to you, and turn on case sensitivity if <code>SKU001</code> and{' '}
              <code>sku001</code> are genuinely different items. Each result set has its own Copy button so
              you can paste it straight into a spreadsheet or another tool.
            </p>
          ),
        },
        {
          heading: 'Handling duplicates',
          body: (
            <p>
              Within a single list, duplicates are collapsed — <code>apple</code> appearing three times in
              list A counts as one item. This matches how set operations work mathematically and is almost
              always what you want when diffing. If you need to know that A had three copies and B had one,
              preprocess the lists with a line-counter first, then diff the unique keys.
            </p>
          ),
        },
      ]}
    />
  )
}
