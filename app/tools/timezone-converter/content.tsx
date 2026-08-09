import { ToolContent } from '@/lib/content-templates'

export function TimezoneConverterContent() {
  return (
    <ToolContent
      intro={
        <p>
          Scheduling across timezones is where good meetings go to die. This <strong>timezone converter</strong> turns a
          local date and time into the equivalent wall-clock time in up to six other zones at once — with UTC offsets,
          day-shift warnings, and a business-hours heat map so you can spot a humane meeting slot at a glance. It runs
          entirely in your browser on the built-in <code>Intl</code> API, so nothing you enter ever leaves your device.
        </p>
      }
      sections={[
        {
          heading: 'How the conversion works',
          body: (
            <p>
              The time you enter is interpreted as <strong>wall-clock time in the source zone</strong>, converted to an
              absolute instant, and then rendered in each target zone with the correct offset — including{' '}
              <strong>daylight saving time</strong>. Because DST is applied by the browser&apos;s own timezone database,
              a meeting in March and the same meeting in November can land on different UTC offsets for zones like New
              York or London. The <code>UTC offset</code> column shows the offset in effect at that exact moment, not a
              yearly average.
            </p>
          ),
        },
        {
          heading: 'Reading the table',
          body: (
            <p>
              Rows tinted <strong>green</strong> fall inside local business hours (9:00–17:00) — aim for slots where
              every row is green. A <strong>day-shift badge</strong> (+1 day / -1 day) appears when the converted time
              lands on a different calendar date than the source; this is the classic source of &quot;wait, your
              Tuesday or my Tuesday?&quot; confusion with Asia-Pacific teammates. The hour bars below the table give a
              visual 0–23 hour strip per zone, with the selected hour marked in blue.
            </p>
          ),
        },
        {
          heading: 'Tips and pitfalls',
          body: (
            <p>
              <em>&quot;My local zone&quot;</em> is detected from your device settings, so double-check it if you travel
              or use a VPN-adjusted system clock. Remember that the input is always read in the <em>source</em> zone —
              pressing <strong>Now</strong> fills in the current time as seen in that zone, which may differ from your
              own clock. Around DST switchover weekends, a given wall time can be ambiguous or nonexistent in the
              affected zone; the converter resolves it to the closest valid instant, but it&apos;s worth confirming
              critical events for those dates with participants directly.
            </p>
          ),
        },
      ]}
    />
  )
}
