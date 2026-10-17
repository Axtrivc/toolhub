import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { HttpStatusCodeLookupClient } from '@/components/tools/batch32Tools'
import { HttpStatusCodeLookupContent } from './content'

export const metadata: Metadata = buildToolMetadata('http-status-code-lookup')

export default function HttpStatusCodeLookupPage() {
  const tool = getTool('http-status-code-lookup')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('http-status-code-lookup')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('http-status-code-lookup')}>
        <HttpStatusCodeLookupClient />
        <HttpStatusCodeLookupContent />
      </ToolLayout>
    </>
  )
}
