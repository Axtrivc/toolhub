import { ToolContent } from '@/lib/content-templates'

export function JwtDecoderContent() {
  return (
    <ToolContent
      intro={
        <p>
          A <strong>JSON Web Token (JWT)</strong> is a compact, URL-safe string used to securely pass claims between a
          client and a server — most often for authentication. A JWT has three Base64URL-encoded parts separated by dots:{' '}
          <code>header.payload.signature</code>. This decoder splits those three parts and shows the header and payload
          as readable JSON, plus the raw signature.
        </p>
      }
      sections={[
        {
          heading: 'How to read a JWT',
          body: (
            <ul>
              <li>
                <strong>Header</strong> — the algorithm (e.g. HS256, RS256) and token type (JWT).
              </li>
              <li>
                <strong>Payload</strong> — the claims: who the token is for (<code>sub</code>), when it was issued (
                <code>iat</code>), when it expires (<code>exp</code>), and any custom fields your app added.
              </li>
              <li>
                <strong>Signature</strong> — proves the token was not tampered with. It can only be verified with the
                matching secret (HMAC) or public key (RSA/ECDSA), which this decoder does not have.
              </li>
            </ul>
          ),
        },
        {
          heading: 'Is it safe to paste my token here?',
          body: (
            <p>
              Yes. Decoding runs entirely in your browser with the built-in <code>atob</code> function — your token is
              never uploaded to a server, stored, or logged. That said, treat real access tokens like passwords: do not
              share them in screenshots, chat, or public repos. If you only want to understand a token&apos;s structure,
              use the <em>Load Sample</em> button for a harmless example.
            </p>
          ),
        },
      ]}
    />
  )
}
