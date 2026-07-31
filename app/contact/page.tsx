import type { Metadata } from 'next'
import { PageShell } from '@/components/PageShell'
import { SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with the ${SITE_NAME} team. Send us your feedback, bug reports, or tool requests.`,
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      description="Questions, feedback, or a tool you wish existed? We'd love to hear from you."
    >
      <h2>Get in Touch</h2>
      <p>
        We read every message and do our best to reply within a few business days. Whether you found
        a bug, have a feature request, or just want to say hello — you are in the right place.
      </p>

      <h3>Email</h3>
      <p>
        The most reliable way to reach us. Write to:{' '}
        <a href="mailto:hello@example.com">hello@example.com</a>
        <br />
        <em className="text-sm text-slate-500">
          (Please replace <code>example.com</code> with your actual domain after deployment.)
        </em>
      </p>

      <h3>What to Include</h3>
      <p>To help us help you faster, please include:</p>
      <ul>
        <li>The tool name and the URL of the page you were on.</li>
        <li>A short description of what happened versus what you expected.</li>
        <li>Your browser and device (e.g. Chrome on Windows, Safari on iPhone).</li>
        <li>Any text or input that triggered the issue, if relevant.</li>
      </ul>

      <h3>Tool Requests</h3>
      <p>
        We build new tools based on what readers actually need. If there is a utility you keep
        searching for and never finding a good version of, tell us about it. Describe the job you
        are trying to do, and we will consider it for a future release.
      </p>

      <h3>Business &amp; Partnerships</h3>
      <p>
        For advertising, sponsorship, or partnership inquiries, please use the same email address
        with the subject line &quot;Partnership.&quot;
      </p>

      <h2>Response Time</h2>
      <p>
        ToolHub is maintained by a small team. We typically respond within 1–3 business days. Thank
        you for your patience.
      </p>
    </PageShell>
  )
}
