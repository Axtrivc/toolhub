import { ToolContent } from '@/lib/content-templates'

export function CronParserContent() {
  return (
    <ToolContent
      intro={
        <p>
          A <strong>cron expression</strong> is a compact string that describes a repeating schedule — the same format
          used by Linux <code>crontab</code>, GitHub Actions, Kubernetes CronJobs, and AWS EventBridge. This parser
          turns that string into plain English and shows the next five times it will fire, so you can confirm a schedule
          before deploying it.
        </p>
      }
      sections={[
        {
          heading: 'The five fields',
          body: (
            <p>
              Left to right, the fields are <strong>minute</strong> (0–59), <strong>hour</strong> (0–23),{' '}
              <strong>day of month</strong> (1–31), <strong>month</strong> (1–12 or JAN–DEC), and{' '}
              <strong>day of week</strong> (0–6, where 0 = Sunday, or SUN–SAT). Each field accepts <code>*</code> (any
              value), a comma list (<code>1,15</code>), a range (<code>9-17</code>), or a step (<code>*/15</code> for
              every 15 minutes). A classic example: <code>0 9 * * 1-5</code> means 09:00 on weekdays.
            </p>
          ),
        },
        {
          heading: 'Why day-of-month and day-of-week use OR',
          body: (
            <p>
              When both the day-of-month and day-of-week fields are restricted (neither is <code>*</code>), cron fires if{' '}
              <em>either</em> matches — this is the Vixie cron standard. So <code>0 0 1 * 1</code> runs at midnight on
              the 1st of the month <strong>or</strong> on any Monday. If one of those fields is <code>*</code>, only the
              other is considered. This is the most common source of cron confusion, so always verify with the next-runs
              preview.
            </p>
          ),
        },
        {
          heading: 'Watch out for platform quirks',
          body: (
            <p>
              While the five core fields are standard, macros (<code>@daily</code>, <code>@reboot</code>), seconds, and
              years are <em>not</em> universal. GitHub Actions, Kubernetes, and AWS EventBridge each add their own fields
              or syntax. This parser covers the standard five-field format used by Linux crontab; confirm any extra
              fields against your specific platform&apos;s docs.
            </p>
          ),
        },
      ]}
    />
  )
}
