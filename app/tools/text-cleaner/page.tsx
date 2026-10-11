import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { TextScrubberClient } from '@/components/texttools/TextScrubberClient'
import { TextCleanerContent } from './content'

export const metadata: Metadata = buildToolMetadata('text-cleaner')

export default function Page() {
  const tool = getTool('text-cleaner')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('text-cleaner')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('text-cleaner')}>
        <TextScrubberClient slug="text-cleaner" />
        <TextCleanerContent />
      </ToolLayout>
    </>
  )
}
