import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { UnicodeLookupClient } from '@/components/tools/batch13Tools'
import { UnicodeCharacterLookupContent } from './content'

export const metadata: Metadata = buildToolMetadata('unicode-character-lookup')

export default function UnicodeCharacterLookupPage() {
  const tool = getTool('unicode-character-lookup')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('unicode-character-lookup')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('unicode-character-lookup')}>
        <UnicodeLookupClient />
        <UnicodeCharacterLookupContent />
      </ToolLayout>
    </>
  )
}
