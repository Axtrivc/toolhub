import type { ReactNode } from 'react'

/** Password Generator 配套深度内容 - 过 AdSense 审核 + SEO 长尾词 */
export function PasswordGeneratorContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What Makes a Password Strong?</h2>
      <p>
        Password strength comes down to one thing: <strong>entropy</strong> — how unpredictable the
        password is to an attacker. The more entropy (measured in bits), the longer it takes to
        crack. A random 16-character password using uppercase, lowercase, numbers, and symbols has
        roughly 100 bits of entropy, which would take billions of years to brute-force on modern
        hardware.
      </p>

      <h2>How to Create a Strong Password</h2>
      <p>Follow these principles and your accounts will be dramatically harder to compromise:</p>
      <ol>
        <li>
          <strong>Go long.</strong> Length beats complexity. A 20-character password of random
          words is stronger than a short, garbled one. Aim for at least 12 characters; 16+ is ideal.
        </li>
        <li>
          <strong>Mix character types.</strong> Combine uppercase letters, lowercase letters,
          numbers, and symbols. Each type you add roughly doubles the character pool.
        </li>
        <li>
          <strong>Avoid the predictable.</strong> Never use names, birthdays, &quot;password123,&quot;
          keyboard patterns (qwerty), or anything found in a dictionary. Attackers try these first.
        </li>
        <li>
          <strong>Use a unique password for every account.</strong> If one service is breached,
          attackers will try the same password on your email, banking, and social accounts.
        </li>
        <li>
          <strong>Store them in a password manager.</strong> Trying to memorize dozens of strong
          passwords is impossible. Use a reputable manager (Bitwarden, 1Password, KeePass) to store
          them encrypted.
        </li>
      </ol>

      <h2>How Secure Is This Generator?</h2>
      <p>
        This tool uses the <code>Web Crypto API</code> (<code>crypto.getRandomValues</code>), which
        pulls randomness from your operating system&apos;s cryptographically secure random number
        generator. This is the same standard used by banks and security software. It is dramatically
        more secure than <code>Math.random()</code>, which is predictable and unsafe for passwords.
      </p>
      <p>
        Even better: the password is generated entirely in your browser and is never transmitted
        anywhere. There is no server log, no database, and no tracking. Once you copy it, it lives
        only on your clipboard.
      </p>

      <h2>Understanding Password Strength Scores</h2>
      <p>
        The strength meter shown above estimates entropy based on your password&apos;s length and
        the size of the character pool used. Here&apos;s what each level means:
      </p>
      <ul>
        <li>
          <strong>Very Weak (&lt;40 bits):</strong> Crackable in seconds to minutes. Never use for
          anything important.
        </li>
        <li>
          <strong>Weak (40–60 bits):</strong> Crackable in hours to days with consumer hardware.
          Upgrade your length.
        </li>
        <li>
          <strong>Strong (60–80 bits):</strong> Would take years to crack. Suitable for most
          personal accounts.
        </li>
        <li>
          <strong>Very Strong (&gt;80 bits):</strong> Effectively uncrackable. Use for email,
          banking, and password manager master passwords.
        </li>
      </ul>

      <h2>Should I Memorize or Use a Manager?</h2>
      <p>
        For most people, a password manager is the right answer. The only password you need to
        memorize is the <strong>master password</strong> that unlocks your manager — make it a long
        passphrase (4-5 random words) rather than a short complex string. Every other password can
        be a random 20+ character string generated here, since you&apos;ll never need to type it.
      </p>
    </section>
  )
}
