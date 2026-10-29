import type { Metadata } from 'next'
import { LocalizedPageShell } from '@/components/LocalizedPageShell'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

const title = 'Privacy Policy — Browser-Local Tools & Site Data'
const description =
  'How ToolHub handles browser-local calculations, shareable URL settings, advertising, analytics, server logs, and daily-rotating visitor counts.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/privacy/' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/privacy/`,
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${SITE_NAME} — Privacy Policy` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
}

export default function PrivacyPage() {
  return <LocalizedPageShell pageKey="privacy" />
}
