import { ToolContent } from '@/lib/content-templates'

export function JsonSchemaGeneratorContent() {
  return (
    <ToolContent
      intro={
        <p>
          A <strong>JSON Schema</strong> describes the shape of a JSON document — which fields exist, what types they
          have, and which ones are required — so APIs, config files, and databases can be validated automatically.
          This generator infers a <strong>Draft-07 schema</strong> from any example JSON you paste, and it runs 100%
          in your browser: nothing is uploaded, so it is safe for private payloads, API responses, and production
          configs.
        </p>
      }
      sections={[
        {
          heading: 'How the inference works',
          body: (
            <p>
              Every value in your JSON is walked recursively. Objects become <code>type: &quot;object&quot;</code>{' '}
              with a <code>properties</code> map, all observed keys listed in <code>required</code>, and{' '}
              <code>additionalProperties: true</code> so the schema stays permissive. Numbers are split into{' '}
              <code>integer</code> and <code>number</code>, and strings are tested against common formats —{' '}
              <code>date-time</code>, <code>date</code>, <code>email</code>, <code>uri</code>, and <code>uuid</code> —
              with the <code>format</code> keyword only added when the value actually matches.
            </p>
          ),
        },
        {
          heading: 'Arrays are merged, not sampled',
          body: (
            <p>
              Instead of describing only the first array element, the generator <strong>merges the schemas of every
              element</strong>. Two objects with the same fields collapse into one schema; a field that is missing
              from some elements drops out of <code>required</code>; and genuinely mixed arrays — say{' '}
              <code>[1, &quot;two&quot;, true]</code> — become an <code>anyOf</code> union. For the best result, paste
              an example whose arrays contain several representative elements.
            </p>
          ),
        },
        {
          heading: 'Tips and pitfalls',
          body: (
            <p>
              A generated schema is only as complete as your sample: optional fields that are absent from the example
              cannot be inferred, and <code>null</code> values are typed as <code>null</code> rather than their
              eventual type. Treat the output as a <strong>starting point</strong> — review <code>required</code>{' '}
              lists, tighten <code>format</code> hints, and add constraints like <code>minimum</code> or{' '}
              <code>maxLength</code> by hand. Finally, note that <code>format</code> is annotation-only in many
              validators unless you explicitly enable format checking.
            </p>
          ),
        },
      ]}
    />
  )
}
