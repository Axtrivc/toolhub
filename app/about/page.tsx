import type { Metadata } from 'next'
import { LocalizedPageShell } from '@/components/LocalizedPageShell'
import { SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${SITE_NAME} — our mission to provide fast, free, and privacy-friendly online tools that run entirely in your browser.`,
  alternates: { canonical: '/about/' },
}

export default function AboutPage() {
  return <LocalizedPageShell pageKey="about" />
}
