import type { Metadata } from 'next'
import { LocalizedPageShell } from '@/components/LocalizedPageShell'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

const title = 'Contact ToolHub — Bugs & Tool Requests'
const description =
  'Found a bug or wish a tool existed? Send feedback, bug reports, and new-tool ideas to the ToolHub maintainer — every message gets read.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact/' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/contact/`,
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${SITE_NAME} — Contact` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
}

export default function ContactPage() {
  return <LocalizedPageShell pageKey="contact" />
}
