import type { Metadata } from 'next'
import { PageShell } from '@/components/PageShell'
import { SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE_NAME} handles data. Our tools run in your browser, and we explain clearly what (little) data we collect and why.`,
  alternates: { canonical: '/privacy/' },
}

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy" description="Last updated: January 2026">
      <p>
        This Privacy Policy explains how {SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) handles information when you use our website and tools. We designed this
        policy to be short, clear, and honest — no legal fog.
      </p>

      <h2>The Short Version</h2>
      <ul>
        <li>Our tools run entirely in your browser. The text and files you process never leave your device.</li>
        <li>We do not ask you to create an account, and we do not collect your name or email to use the tools.</li>
        <li>We use third-party advertising companies (notably Google AdSense) to keep the site free. These companies may use cookies to serve relevant ads.</li>
        <li>We use privacy-friendly analytics to understand which tools are used, so we can improve them.</li>
      </ul>

      <h2>Information You Provide to the Tools</h2>
      <p>
        When you use a tool — for example, pasting text into the Slug Generator — that input is
        processed locally in your browser by JavaScript. It is never transmitted to our servers, our
        databases, or any third party. We literally cannot see what you type.
      </p>

      <h2>Information Collected Automatically</h2>
      <p>Like most websites, we and our partners automatically collect certain technical data when you visit:</p>
      <ul>
        <li>Browser type, operating system, and device type.</li>
        <li>Approximate region (country-level, derived from IP address).</li>
        <li>The pages you visit and the referring site.</li>
        <li>Aggregate, anonymized usage metrics.</li>
      </ul>
      <p>This data is used to keep the site secure, understand traffic patterns, and improve the tools.</p>

      <h2>Cookies and Similar Technologies</h2>
      <p>
        We use cookies and similar technologies for two purposes: running third-party ads, and
        privacy-friendly analytics. A cookie is a small text file stored on your device.
      </p>
      <p>
        <strong>Advertising cookies.</strong> We use Google AdSense, which is a third-party vendor
        that may use cookies to serve ads based on your prior visits to this and other websites.
        Google&apos;s use of advertising cookies enables it and its partners to serve ads to you
        based on your visit to our site and/or other sites on the Internet.
      </p>
      <ul>
        <li>
          You may opt out of personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          .
        </li>
        <li>
          Information about how Google uses data from sites that use its APIs and ad products is at{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Partner Sites policy
          </a>
          .
        </li>
        <li>
          For information about the Third-party vendors and ad networks that serve ads, please visit{' '}
          <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">
            aboutads.info
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>Analytics cookies.</strong> We use privacy-friendly, aggregate analytics that do
        not track you across other sites and do not identify you personally.
      </p>

      <h2>Third-Party Services</h2>
      <p>We rely on the following categories of third-party services, each with its own privacy practices:</p>
      <ul>
        <li>
          <strong>Google AdSense</strong> — serves ads; may use cookies for ad personalization. See{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Web hosting and CDN</strong> — delivers the pages; may log standard server request
          data (IP, timestamp, user agent).
        </li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        Because our tools do not transmit your input to us, there is nothing for us to retain about
        your tool usage. Server logs and aggregate analytics data are retained only as long as
        needed for the purposes described above, and then deleted or anonymized.
      </p>

      <h2>Your Choices</h2>
      <ul>
        <li>You can disable cookies in your browser settings at any time.</li>
        <li>You can opt out of personalized ads via the Google Ads Settings link above.</li>
        <li>You can use a content blocker or private browsing mode.</li>
      </ul>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our website is not directed to children under 13, and we do not knowingly collect personal
        information from children. If you believe a child has provided us personal information,
        please contact us so we can delete it.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will revise the
        &quot;Last updated&quot; date at the top of this page. We encourage you to review this page
        periodically.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please{' '}
        <a href="/contact/">contact us</a>.
      </p>
    </PageShell>
  )
}
