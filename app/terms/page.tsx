import type { Metadata } from 'next'
import { LocalizedPageShell } from '@/components/LocalizedPageShell'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

const title = 'Terms of Service — ToolHub Free Tools'
const description =
  'The terms for using ToolHub and its free browser-based tools: acceptable use, availability, and limitations of liability.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/terms/' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/terms/`,
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${SITE_NAME} — Terms of Service` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
}

export default function TermsPage() {
  return <LocalizedPageShell pageKey="terms" />
}
