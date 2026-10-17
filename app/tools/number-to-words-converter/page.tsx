import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { NumberToWordsConverterClient } from '@/components/tools/batch33Tools'
import { NumberToWordsConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('number-to-words-converter')

export default function NumberToWordsConverterPage() {
  const tool = getTool('number-to-words-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('number-to-words-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('number-to-words-converter')}>
        <NumberToWordsConverterClient />
        <NumberToWordsConverterContent />
      </ToolLayout>
    </>
  )
}
