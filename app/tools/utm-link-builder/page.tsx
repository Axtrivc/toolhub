import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { UtmLinkBuilderClient } from '@/components/tools/batch32Tools'
import { UtmLinkBuilderContent } from './content'

export const metadata: Metadata = buildToolMetadata('utm-link-builder')

export default function UtmLinkBuilderPage() {
  const tool = getTool('utm-link-builder')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('utm-link-builder')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('utm-link-builder')}>
        <UtmLinkBuilderClient />
        <UtmLinkBuilderContent />
      </ToolLayout>
    </>
  )
}
