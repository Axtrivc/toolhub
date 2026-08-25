import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { HtaccessRedirectGeneratorClient } from '@/components/tools/batch13Tools'
import { HtaccessRedirectGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('htaccess-redirect-generator')

export default function HtaccessRedirectGeneratorPage() {
  const tool = getTool('htaccess-redirect-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('htaccess-redirect-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <HtaccessRedirectGeneratorClient />
        <HtaccessRedirectGeneratorContent />
      </ToolLayout>
    </>
  )
}
