import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { SpeechToTextClient } from '@/components/tools/speechPdfTools'
import { SpeechToTextContent } from './content'

export const metadata: Metadata = buildToolMetadata('speech-to-text')

export default function SpeechToTextPage() {
  const tool = getTool('speech-to-text')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('speech-to-text')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('speech-to-text')}>
        <SpeechToTextClient />
        <SpeechToTextContent />
      </ToolLayout>
    </>
  )
}
