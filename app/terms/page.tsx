import type { Metadata } from 'next'
import { PageShell } from '@/components/PageShell'
import { SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms governing your use of ${SITE_NAME} and its free online tools.`,
  alternates: { canonical: '/terms/' },
}

export default function TermsPage() {
  return (
    <PageShell title="Terms of Service" description="Last updated: January 2026">
      <p>
        Welcome to {SITE_NAME}. These Terms of Service (&quot;Terms&quot;) govern your access to and
        use of our website and tools (the &quot;Service&quot;). By using the Service, you agree to
        these Terms. If you do not agree, please do not use the Service.
      </p>

      <h2>1. Using Our Tools</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable license to use the Service for
        lawful purposes. You may use the tools for both personal and commercial work — for example,
        generating slugs for your company blog is fine.
      </p>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful activity or in violation of any applicable law.</li>
        <li>Attempt to disrupt, overload, or gain unauthorized access to the Service.</li>
        <li>Use automated scripts to abuse the Service or to attempt to disable it.</li>
        <li>Reproduce or resell the Service as your own product.</li>
      </ul>

      <h2>2. Your Content</h2>
      <p>
        Because our tools process input locally in your browser, you retain all rights to anything
        you enter. We do not store, copy, or claim any ownership over your input.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        The Service — including its design, text, and code — is owned by {SITE_NAME} and protected
        by intellectual property laws. The output produced by a tool from your input belongs to you.
      </p>

      <h2>4. Disclaimers</h2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available,&quot; without warranties
        of any kind, express or implied. We do not guarantee that the tools will be error-free,
        uninterrupted, or produce results suitable for every purpose. You use the output at your own
        discretion.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {SITE_NAME} shall not be liable for any indirect,
        incidental, or consequential damages arising from your use of, or inability to use, the
        Service. Because the Service is provided free of charge, our total liability for any claim
        is limited to the amounts you have paid us, which is zero.
      </p>

      <h2>6. Advertisements</h2>
      <p>
        The Service is supported by advertising. Third-party ad networks may serve ads and use
        cookies as described in our <a href="/privacy/">Privacy Policy</a>. We are not responsible
        for the content of third-party advertisements.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        The Service may contain links to third-party websites. We are not responsible for the
        content, policies, or practices of any third-party sites and assume no liability for them.
      </p>

      <h2>8. Changes to the Service and Terms</h2>
      <p>
        We may modify or discontinue the Service, or update these Terms, at any time. When Terms
        change, we will update the &quot;Last updated&quot; date above. Continued use of the Service
        after changes take effect constitutes acceptance of the new Terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction in which {SITE_NAME} operates,
        without regard to conflict-of-law principles.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these Terms? Please <a href="/contact/">get in touch</a>.
      </p>
    </PageShell>
  )
}
