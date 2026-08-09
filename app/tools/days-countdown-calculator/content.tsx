import { ToolContent } from '@/lib/content-templates'

export function DaysCountdownCalculatorContent() {
  return (
    <ToolContent
      intro={
        <p>
          Whether you&apos;re counting down to a launch, a wedding, or the next public holiday, this{' '}
          <strong>days countdown calculator</strong> answers two everyday questions: <em>how long until a date</em>,
          and <em>how far apart two dates are</em>. Everything is computed locally in your browser — your dates are
          never sent anywhere.
        </p>
      }
      sections={[
        {
          heading: 'Countdown tab',
          body: (
            <p>
              Pick a target date (and an optional time) and the display ticks live, showing{' '}
              <strong>days, hours, minutes, and seconds</strong> remaining. If the moment has already passed, the same
              cards flip to elapsed time — &quot;X days ago&quot;. Breakdown cards add the <strong>total days</strong>{' '}
              (including the partial day), the gap expressed as <strong>weeks + days</strong>, and the number of{' '}
              <strong>business days</strong> with Saturdays and Sundays skipped. The preset buttons jump to New Year,
              Christmas, or 30/90 days from right now.
            </p>
          ),
        },
        {
          heading: 'Days-between tab',
          body: (
            <p>
              Enter any two dates to get the <strong>total calendar days</strong> between them, the same span as{' '}
              <strong>weeks + leftover days</strong>, an <strong>approximate month count</strong> (using the average
              30.44-day month), plus a split into <strong>business days</strong> and <strong>weekend days</strong>. The
              start date counts as day zero, so today-to-tomorrow reports 1 day. The result is signed: an earlier end
              date yields a negative span, but the cards show absolute magnitudes.
            </p>
          ),
        },
        {
          heading: 'Things worth knowing',
          body: (
            <p>
              All arithmetic uses <strong>your device&apos;s local timezone</strong>, so a countdown to &quot;midnight
              New Year&quot; means midnight where you are. Day counts are whole calendar days — the partial hours of the
              current day only show up in the ticking clock and the decimal &quot;total days&quot; figure. The{' '}
              <em>business days</em> figure ignores public holidays (those differ by country and company), so treat it
              as a working-day estimate rather than an official schedule.
            </p>
          ),
        },
      ]}
    />
  )
}
