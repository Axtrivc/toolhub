import type { Metadata } from 'next'
import { PageShell } from '@/components/PageShell'
import { SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${SITE_NAME} — our mission to provide fast, free, and privacy-friendly online tools that run entirely in your browser.`,
  alternates: { canonical: '/about/' },
}

export default function AboutPage() {
  return (
    <PageShell
      title="About ToolHub"
      description="Fast, free, and privacy-friendly tools — built for people who just want to get things done."
    >
      <h2>Our Mission</h2>
      <p>
        ToolHub is a collection of simple, focused online tools built to solve everyday problems
        without getting in your way. We believe a utility should load instantly, do one job well,
        and respect your time and privacy. No popups begging for your email, no paywalls hiding the
        useful part, no 12-step onboarding.
      </p>

      <h2>Privacy by Default</h2>
      <p>
        Most tools here run entirely in your browser. That means the text you paste, the files you
        process, and the options you toggle never get sent to a server. We have nothing to store,
        nothing to leak, and nothing to sell. This is not a marketing line — it is a direct
        consequence of how the tools are built.
      </p>
      <p>
        Our website may display advertisements to keep the tools free for everyone. When we do, we
        use reputable ad networks and never tie ad data to any personal information you enter into
        the tools (because, again, it never leaves your device). You can read the full details in our{' '}
        <a href="/privacy/">Privacy Policy</a>.
      </p>

      <h2>What We Build</h2>
      <p>
        We focus on utilities for developers, writers, and anyone who works in a browser. Each tool
        is designed around a single, clearly defined task — like converting a blog post title into a
        clean URL slug — and is accompanied by a guide explaining how to get the most out of it.
      </p>
      <p>
        New tools are added regularly. If there is something you wish existed,{' '}
        <a href="/contact/">let us know</a> — reader requests have shaped more than one tool on this
        site.
      </p>

      <h2>Who Is Behind This</h2>
      <p>
        ToolHub is run by a small team of developers who got tired of bloated, ad-heavy utility
        sites. We maintain this project in our spare time and fund it through unobtrusive
        advertising. There is no investor pressure and no growth-hack agenda — just a quiet effort
        to make the web slightly more useful.
      </p>

      <h2>Get in Touch</h2>
      <p>
        Found a bug? Have an idea? Want a tool that does not exist yet? Head over to our{' '}
        <a href="/contact/">contact page</a>. We read every message.
      </p>
    </PageShell>
  )
}
