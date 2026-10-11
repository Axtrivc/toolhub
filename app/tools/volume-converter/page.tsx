import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { VolumeConverterClient } from '@/components/calculators/batch2Clients'
import { VolumeConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('volume-converter')

export default function VolumeConverterPage() {
  const tool = getTool('volume-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('volume-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('volume-converter')}>
        <VolumeConverterClient />
        <VolumeConverterContent />
      </ToolLayout>
    </>
  )
}
