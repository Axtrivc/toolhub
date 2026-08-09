import { ToolContent } from '@/lib/content-templates'

export function RandomChoicePickerContent() {
  return (
    <ToolContent
      intro={
        <p>
          Can&apos;t decide where to eat, who goes first, or which ticket gets the prize? This{' '}
          <strong>random choice picker</strong> takes a list of options — one per line — and draws one or more winners
          with a quick spinning animation and a satisfying reveal. It uses your browser&apos;s{' '}
          <strong>cryptographically secure random generator</strong>, runs entirely offline, and keeps a history of
          past draws so raffles stay auditable.
        </p>
      }
      sections={[
        {
          heading: 'How the draw works',
          body: (
            <p>
              Winners are selected with <code>crypto.getRandomValues</code> — the same randomness source browsers use
              for security keys — combined with <strong>rejection sampling</strong>, which removes the subtle bias that
              a naive <code>random() % n</code> introduces. Every option therefore has an exactly equal chance. The
              spinning display is pure showmanship: the winners are already decided before the animation starts, so
              the outcome can&apos;t be influenced by when you look away.
            </p>
          ),
        },
        {
          heading: 'Winners, repeats, and removal',
          body: (
            <p>
              Set <strong>number of winners</strong> to draw several at once (it&apos;s clamped to your option count).
              With <em>no repeat winners</em> on — the default — picks are sampled <strong>without replacement</strong>,
              like drawing names from a hat; turn it off to allow the same option to win multiple times, like spinning a
              wheel repeatedly. Enable <em>remove winner after picking</em> to strike winners from the list as you go —
              handy for eliminating rounds or dealing turns to a whole group.
            </p>
          ),
        },
        {
          heading: 'Tips for fair use',
          body: (
            <p>
              Each line is one option; blank lines and surrounding spaces are ignored, and you need{' '}
              <strong>at least two options</strong> to draw. Duplicate lines are treated as separate entries — so
              entering a name twice genuinely doubles its odds, which is a feature if you&apos;re running a weighted
              giveaway. For high-stakes draws, read the <em>history</em> list aloud as you go; it records every result
              newest-first until you clear it.
            </p>
          ),
        },
      ]}
    />
  )
}
