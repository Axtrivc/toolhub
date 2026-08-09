import { ToolContent } from '@/lib/content-templates'

export function BcryptHashGeneratorContent() {
  return (
    <ToolContent
      intro={
        <p>
          This tool turns a password into a <strong>bcrypt hash</strong> (or a salted SHA-256/SHA-512 digest) and can
          verify a password against an existing hash — all 100% in your browser, with nothing sent over the network.
          It is useful for checking what a stored hash really contains, generating a hash for a config file or a
          seeded test user, or learning how password hashing parameters behave before wiring them into a backend.
        </p>
      }
      sections={[
        {
          heading: 'What makes bcrypt different',
          body: (
            <p>
              bcrypt is a <strong>deliberately slow, adaptive</strong> password hash built on the Blowfish cipher. Each
              hash embeds everything needed to verify it: the version (<code>$2a$</code>/<code>$2b$</code>), the cost
              factor, and a 16-byte random salt — so a bcrypt string like{' '}
              <code>$2a$10$N9qo8uLOickgx2ZMRZoMye…</code> is fully self-describing. Slowness is the feature: an
              attacker who steals your database must pay the same expensive computation for <em>every guess</em>,
              which makes bulk cracking of strong passwords impractical. Salts are generated automatically per hash, so
              two users with the same password still get different hashes.
            </p>
          ),
        },
        {
          heading: 'Choosing a cost factor',
          body: (
            <p>
              The cost factor is exponential: <strong>2^cost iterations</strong>, so every step doubles the work for
              you <em>and</em> for an attacker. <code>10</code>–<code>12</code> is the common sweet spot today — pick
              the highest value that keeps your login flow comfortably fast on your production hardware, then revisit
              it every year or two as machines get faster. Values above <code>12</code> are noticeably slow in a
              browser tab (this tool warns you), which is exactly the resistance you want against offline cracking.
              Note that bcrypt only reads the <strong>first 72 bytes</strong> of a password; anything beyond that is
              silently ignored by design.
            </p>
          ),
        },
        {
          heading: 'Salted SHA-256/SHA-512 — and their limits',
          body: (
            <p>
              A salted SHA-2 digest (<code>sha256$salt$hash</code>) stops rainbow tables and identical-password
              collisions, but SHA-2 is built for <strong>speed</strong> — a GPU can test billions of candidates per
              second, so it is <em>not</em> suitable for storing real user passwords on its own. Use the SHA options
              here for learning, checksums, or verifying legacy formats; for anything that protects actual accounts,
              hash <strong>server-side</strong> with <code>argon2id</code> or <code>bcrypt</code> (or at minimum PBKDF2
              with a high iteration count), keep the hashes server-side too, and never log plaintext passwords. This
              page never transmits what you type — but your production system should not trust client-side hashing
              either.
            </p>
          ),
        },
      ]}
    />
  )
}
