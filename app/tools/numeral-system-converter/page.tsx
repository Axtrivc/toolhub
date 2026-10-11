import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { NumeralSystemConverterClient } from '@/components/converters/batchConverters'
import { NumeralSystemConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('numeral-system-converter')

export default function Page() {
  const tool = getTool('numeral-system-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('numeral-system-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('numeral-system-converter')}>
        <NumeralSystemConverterClient />
        <NumeralSystemConverterContent />
      </ToolLayout>
    </>
  )
}
