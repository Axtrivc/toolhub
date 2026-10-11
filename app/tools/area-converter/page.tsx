import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { AreaConverterClient } from '@/components/calculators/batch2Clients'
import { AreaConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('area-converter')

export default function AreaConverterPage() {
  const tool = getTool('area-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('area-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('area-converter')}>
        <AreaConverterClient />
        <AreaConverterContent />
      </ToolLayout>
    </>
  )
}
