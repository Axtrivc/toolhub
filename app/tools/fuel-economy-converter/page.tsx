import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { FuelEconomyConverterClient } from '@/components/converters/batchConverters'
import { FuelEconomyConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('fuel-economy-converter')

export default function Page() {
  const tool = getTool('fuel-economy-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('fuel-economy-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('fuel-economy-converter')}>
        <FuelEconomyConverterClient />
        <FuelEconomyConverterContent />
      </ToolLayout>
    </>
  )
}
