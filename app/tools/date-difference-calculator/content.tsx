import type { ReactNode } from 'react'

export function DateDifferenceCalculatorContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>How Date Difference Is Calculated</h2>
      <p>
        Calculating the time between two dates sounds simple, but doing it precisely requires
        handling varying month lengths (28-31 days), leap years, and calendar-aware arithmetic.
        This calculator counts <strong>completed years, months, and days</strong> separately, plus
        totals in days, weeks, hours, and business days.
      </p>

      <h2>Why Calculate Date Differences?</h2>
      <ul>
        <li><strong>Project management:</strong> How many working days until a deadline?</li>
        <li><strong>Contracts and leases:</strong> Duration of agreements, notice periods</li>
        <li><strong>Pregnancy:</strong> Tracking weeks along a due date</li>
        <li><strong>Age and anniversaries:</strong> How long since an event</li>
        <li><strong>Finance:</strong> Accrued interest periods, loan terms</li>
        <li><strong>Legal:</strong> Statutes of limitation, filing deadlines</li>
      </ul>

      <h2>Business Days vs. Calendar Days</h2>
      <p>
        Calendar days count every day. <strong>Business days</strong> (also called working days)
        exclude weekends and sometimes holidays. For a Friday-to-Monday span, that&apos;s 3 calendar
        days but only 1 business day. Use business days when estimating delivery times, project
        timelines, or anything that depends on people working.
      </p>
      <p>
        This calculator excludes Saturday and Sunday. It does <strong>not</strong> subtract public
        holidays, since those vary by country and region — add those manually if precision matters.
      </p>

      <h2>The Leap Year Complication</h2>
      <p>
        A year isn&apos;t exactly 365 days — it&apos;s about 365.2422 days. Leap years (every 4
        years, except century years not divisible by 400) add February 29 to keep the calendar
        aligned with Earth&apos;s orbit. This is why date math done by simply multiplying by 365
        drifts over time. This calculator uses your browser&apos;s date handling, which accounts for
        leap years automatically.
      </p>

      <h2>Common Date Math Mistakes</h2>
      <ul>
        <li><strong>&quot;30 days&quot; ≠ &quot;1 month.&quot;</strong> Months have 28-31 days. A month-from-January 31 lands on February 28 (or 29), not March 2.</li>
        <li><strong>Time zones.</strong> The same moment can fall on different calendar dates depending on time zone. This calculator uses your local date.</li>
        <li><strong>Inclusive vs. exclusive counting.</strong> &quot;From Jan 1 to Jan 31&quot; is 30 days of difference, or 31 days if both endpoints are counted. Be clear which convention you&apos;re using.</li>
      </ul>

      <h2>Working with Time Spans</h2>
      <p>
        When planning, it&apos;s often more useful to think in <em>months</em> than days, because
        human activities (rent, salaries, meetings) run on monthly cycles. This calculator gives
        you both views: the precise year/month/day breakdown for legal accuracy, and the total-day
        count for technical calculations.
      </p>
    </section>
  )
}
