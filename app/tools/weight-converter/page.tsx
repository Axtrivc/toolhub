import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { WeightConverterClient } from '@/components/calculators/batch2Clients'
import { WeightConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('weight-converter')

export default function WeightConverterPage() {
  const tool = getTool('weight-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('weight-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('weight-converter')}>
        <WeightConverterClient />
        <WeightConverterContent />
      </ToolLayout>
    </>
  )
}
