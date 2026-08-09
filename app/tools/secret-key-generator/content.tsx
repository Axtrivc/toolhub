import { ToolContent } from '@/lib/content-templates'

export function SecretKeyGeneratorContent() {
  return (
    <ToolContent
      intro={
        <p>
          This tool generates <strong>high-entropy secrets</strong> — API keys, access tokens, webhook secrets, signing
          keys, or one-time setup passwords — using <code>crypto.getRandomValues</code>, your browser&apos;s
          cryptographically secure random number generator. Pick a format (hex, Base64, Base64URL, alphanumeric, an
          API-key style string with your own prefix, or UUID v4), set the length, and generate one secret or a batch
          of five or ten. Everything happens 100% on your device: nothing is logged, stored, or uploaded.
        </p>
      }
      sections={[
        {
          heading: 'How much entropy do you need?',
          body: (
            <p>
              Entropy measures how many guesses an attacker would need, on average, to find your secret. As a rule of
              thumb: <strong>below 80 bits is weak</strong> (fine for short-lived codes, not for keys),{' '}
              <strong>80–128 bits is good</strong> for most tokens, and <strong>above 128 bits is strong</strong> —
              the right territory for signing keys and long-lived API secrets. The tool labels each result Weak /
              Good / Strong so you can sanity-check at a glance. For byte-based formats the math is simple:{' '}
              <code>bytes × 8</code> bits, so 32 random bytes give a full 256 bits. Alphanumeric strings carry about{' '}
              <code>5.95</code> bits per character (log₂ of 62 symbols), so you need ~22 characters to beat 128 bits.
            </p>
          ),
        },
        {
          heading: 'Picking the right format',
          body: (
            <p>
              <strong>Hex</strong> is the classic for HMAC keys and anything copied into config files;{' '}
              <strong>Base64URL</strong> packs the same entropy into fewer characters and survives URLs and headers
              without escaping, which is why JWT secrets and OAuth tokens often use it.{' '}
              <strong>Alphanumeric</strong> avoids punctuation entirely — handy when a picky system rejects symbols.
              The <strong>API key style</strong> adds a human-readable prefix like <code>sk_live_</code> so keys are
              recognizable in dashboards and leak scanners (the prefix adds no entropy — that all comes from the
              random suffix). <strong>UUID v4</strong> is for identifiers that must be unique and opaque, not for
              secrets: at 122 bits it is fine as a token, but its real job is ID generation.
            </p>
          ),
        },
        {
          heading: 'Why rejection sampling matters',
          body: (
            <p>
              A naive way to pick random characters is <code>byte % 62</code> — but 256 is not a multiple of 62, so a
              few characters become slightly more likely than others. That skew is called <strong>modulo bias</strong>,
              and while small, it is exactly the kind of flaw that weakens keys at scale. This generator discards any
              random byte ≥ <code>248</code> (the largest multiple of 62 that fits in a byte) and draws again, so
              every character is <em>perfectly uniform</em>. The byte-based formats need no such correction: each byte
              is used whole. Two parting tips: generate secrets fresh per environment (never reuse one across dev and
              prod), and <strong>rotate immediately</strong> if a key ever lands in a log, email, or screenshot.
            </p>
          ),
        },
      ]}
    />
  )
}
