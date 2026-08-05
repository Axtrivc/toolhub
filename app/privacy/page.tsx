import type { Metadata } from 'next'
import { LocalizedPageShell } from '@/components/LocalizedPageShell'
import { SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE_NAME} handles data. Our tools run in your browser, and we explain clearly what (little) data we collect and why.`,
  alternates: { canonical: '/privacy/' },
}

export default function PrivacyPage() {
  return <LocalizedPageShell pageKey="privacy" />
}
