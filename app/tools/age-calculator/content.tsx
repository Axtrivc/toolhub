import type { ReactNode } from 'react'

export function AgeCalculatorContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>How Age Is Calculated</h2>
      <p>
        Calculating age sounds simple, but there&apos;s more to it than subtracting two years.
        Proper age calculation counts <strong>completed years, months, and days</strong> — you are
        not &quot;25 years old&quot; until your 25th birthday has fully passed. This calculator uses
        calendar-aware logic that handles varying month lengths, leap years, and month-end edge
        cases (for example, the difference between January 31 and February 28).
      </p>

      <h2>Why Calculate Age Precisely?</h2>
      <ul>
        <li>
          <strong>Age verification.</strong> Many services — driving, voting, drinking, retirement
          benefits, and age-restricted content — depend on exact age thresholds.
        </li>
        <li>
          <strong>Legal and medical.</strong> Insurance premiums, pediatric dosing, and legal
          documents often require age in years and months, not just years.
        </li>
        <li>
          <strong>Pediatrics.</strong> A baby&apos;s development is tracked in months for the first
          two years and sometimes weeks for newborns.
        </li>
        <li>
          <strong>Pets.</strong> Animal ages, especially for young pets, are often measured in
          months.
        </li>
        <li>
          <strong>Historical research.</strong> Find exactly how old a person was at a specific
          historical event, or how long ago something happened.
        </li>
      </ul>

      <h2>Different Ways to Express Age</h2>
      <p>
        Depending on the context, you might want age expressed in different units. This calculator
        provides all of them:
      </p>
      <ul>
        <li><strong>Years + months + days</strong> — the everyday format, ideal for most uses</li>
        <li><strong>Total months</strong> — useful for infant development and subscriptions</li>
        <li><strong>Total weeks</strong> — common for pregnancy and infant age</li>
        <li><strong>Total days</strong> — fun for celebrating &quot;10,000 days alive&quot; milestones</li>
        <li><strong>Total hours</strong> — for when precision matters, or just curiosity</li>
      </ul>

      <h2>Cultural Differences in Age Counting</h2>
      <p>
        Age isn&apos;t counted the same way everywhere. Be aware of these differences when comparing
        ages internationally:
      </p>
      <ul>
        <li>
          <strong>International (most common):</strong> You are 0 at birth and gain a year on each
          birthday. This is the system this calculator uses.
        </li>
        <li>
          <strong>Traditional East Asian (Korean):</strong> You are 1 at birth and gain a year on
          New Year&apos;s Day rather than your birthday. A baby born on December 31 turns 2 the next
          day. South Korea officially shifted to the international system in 2023.
        </li>
        <li>
          <strong>Vietnamese:</strong> Similar to the traditional East Asian system.
        </li>
      </ul>

      <h2>The Leap Year Complication</h2>
      <p>
        People born on February 29 only have a true birthday every four years. By convention, in
        non-leap years their birthday is celebrated on February 28 or March 1, depending on the
        country and context. This calculator handles February 29 births by treating March 1 as the
        age-increment day in non-leap years.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>How many days old am I?</h3>
      <p>
        Enter your date of birth and leave the &quot;age at date&quot; as today. The calculator
        shows your total days lived — most adults are somewhere between 7,000 and 30,000 days old.
      </p>

      <h3>How do I calculate the time between two dates?</h3>
      <p>
        Use the &quot;date of birth&quot; field as the start date and the &quot;age at date&quot;
        field as the end date. The result shows the precise duration between them in years, months,
        days, weeks, and hours — useful for projects, contracts, or anniversaries.
      </p>

      <h3>How accurate is the calculation?</h3>
      <p>
        Fully accurate. The calculator uses your browser&apos;s built-in date handling, which
        accounts for leap years, varying month lengths, and daylight saving time. There is no
        approximation involved.
      </p>
    </section>
  )
}
