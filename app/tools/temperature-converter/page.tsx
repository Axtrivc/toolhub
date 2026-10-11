import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { TemperatureConverterClient } from '@/components/calculators/batch2Clients'
import { TemperatureConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('temperature-converter')

export default function TemperatureConverterPage() {
  const tool = getTool('temperature-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('temperature-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('temperature-converter')}>
        <TemperatureConverterClient />
        <TemperatureConverterContent />
      </ToolLayout>
    </>
  )
}
