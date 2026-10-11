import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { SentenceCaseConverterClient } from '@/components/texttools/batchTextTools'
import { SentenceCaseConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('sentence-case-converter')

export default function Page() {
  const tool = getTool('sentence-case-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('sentence-case-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('sentence-case-converter')}>
        <SentenceCaseConverterClient />
        <SentenceCaseConverterContent />
      </ToolLayout>
    </>
  )
}
