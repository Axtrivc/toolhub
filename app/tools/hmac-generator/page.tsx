import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { HmacGeneratorClient } from '@/components/tools/batch12bTools'
import { HmacGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('hmac-generator')

export default function HmacGeneratorPage() {
  const tool = getTool('hmac-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('hmac-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('hmac-generator')}>
        <HmacGeneratorClient />
        <HmacGeneratorContent />
      </ToolLayout>
    </>
  )
}
