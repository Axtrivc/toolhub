import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ReadingSpeakingTimeClient } from '@/components/calculators/ReadingSpeakingTimeClient'
import { ReadingSpeakingTimeContent } from './content'

export const metadata: Metadata = buildToolMetadata('reading-speaking-time')

export default function Page() {
  const tool = getTool('reading-speaking-time')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('reading-speaking-time')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('reading-speaking-time')}>
        <ReadingSpeakingTimeClient />
        <ReadingSpeakingTimeContent />
      </ToolLayout>
    </>
  )
}
