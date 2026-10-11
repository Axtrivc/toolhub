import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { PressureConverterClient } from '@/components/converters/batchConverters'
import { PressureConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('pressure-converter')

export default function Page() {
  const tool = getTool('pressure-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('pressure-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('pressure-converter')}>
        <PressureConverterClient />
        <PressureConverterContent />
      </ToolLayout>
    </>
  )
}
