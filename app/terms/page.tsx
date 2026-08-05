import type { Metadata } from 'next'
import { LocalizedPageShell } from '@/components/LocalizedPageShell'
import { SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms governing your use of ${SITE_NAME} and its free online tools.`,
  alternates: { canonical: '/terms/' },
}

export default function TermsPage() {
  return <LocalizedPageShell pageKey="terms" />
}
