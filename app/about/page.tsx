import type { Metadata } from 'next'
import { LocalizedPageShell } from '@/components/LocalizedPageShell'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

const title = 'About ToolHub — Independent & Browser-First'
const description =
  'Who builds ToolHub, how a static-exported Next.js + TypeScript site ships 350 tools that run locally in your browser, and what data stays on your device.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/about/' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/about/`,
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${SITE_NAME} — About` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
}

export default function AboutPage() {
  return <LocalizedPageShell pageKey="about" />
}
