import { ToolContent } from '@/lib/content-templates'

export function SshKeyGeneratorContent() {
  return (
    <ToolContent
      intro={
        <p>
          This tool generates a complete <strong>SSH key pair</strong> — a public key in the{' '}
          <code>authorized_keys</code> format you paste onto servers, and a matching private key in PKCS#8 PEM — using
          only your browser&apos;s built-in <strong>Web Crypto API</strong>. It is handy for spinning up a key for a new
          server, CI job, or Git hosting account when you are away from a terminal. Everything runs 100% locally: the
          keys are created in your browser tab and are never sent anywhere.
        </p>
      }
      sections={[
        {
          heading: 'How the OpenSSH public key format works',
          body: (
            <p>
              An OpenSSH public key line is just <strong>base64 of a small binary blob</strong>, plus an optional
              comment. The blob is a sequence of length-prefixed fields: for Ed25519 it is the string{' '}
              <code>ssh-ed25519</code> followed by the raw 32-byte public key; for RSA it is <code>ssh-rsa</code>{' '}
              followed by the exponent <code>e</code> and modulus <code>n</code>, each encoded as an{' '}
              <em>mpint</em> (a big-endian integer padded with a <code>0x00</code> byte when its top bit would
              otherwise look negative). The <strong>SHA256 fingerprint</strong> shown after generation is the same one{' '}
              <code>ssh-keygen -l</code> would print, so you can cross-check the key on a server later.
            </p>
          ),
        },
        {
          heading: 'Ed25519 or RSA?',
          body: (
            <p>
              <strong>Pick Ed25519 unless you have a reason not to.</strong> It produces short keys (~68 characters in
              the public line), is fast to generate and verify, and is considered the modern default — GitHub, GitLab
              and every current OpenSSH release accept it. <strong>RSA</strong> is still universally supported and is
              the safer choice for very old servers, appliances, or tooling that predates Ed25519; use{' '}
              <code>4096</code> bits there for a comfortable security margin, <code>2048</code> if the target system
              rejects larger keys. One caveat: Ed25519 in the Web Crypto API needs a recent browser — this tool detects
              that and tells you if yours is too old.
            </p>
          ),
        },
        {
          heading: 'Keeping the private key safe',
          body: (
            <p>
              The private key is the <em>only</em> half that must stay secret, and this page never transmits it — but
              what you do next matters. Save it as <code>~/.ssh/id_ed25519</code> (or <code>id_rsa</code>) and lock it
              down immediately with <code>chmod 600</code>, or ssh will refuse to use it. The exported format is{' '}
              <strong>PKCS#8 PEM</strong>, which modern OpenSSH reads directly; to convert it to the classic OpenSSH
              private-key format, run <code>ssh-keygen -p -m PEM -f id_ed25519</code> (press Enter when asked for a
              passphrase, or set one). Finally, treat a key made in a browser tab like any credential: store it in
              your SSH agent or a password manager, and <strong>regenerate a fresh pair on your own machine</strong>{' '}
              for high-value production systems.
            </p>
          ),
        },
      ]}
    />
  )
}
