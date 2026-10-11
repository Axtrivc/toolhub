import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { FlowRateConverterClient } from '@/components/converters/batch2Converters'
import { FlowRateConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('flow-rate-converter')

export default function Page() {
  const tool = getTool('flow-rate-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('flow-rate-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('flow-rate-converter')}>
        <FlowRateConverterClient />
        <FlowRateConverterContent />
      </ToolLayout>
    </>
  )
}
