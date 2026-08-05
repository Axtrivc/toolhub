import type { Metadata } from 'next'
import { LocalizedPageShell } from '@/components/LocalizedPageShell'
import { SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with the ${SITE_NAME} team. Send us your feedback, bug reports, or tool requests.`,
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return <LocalizedPageShell pageKey="contact" />
}
