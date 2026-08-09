import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ReadingSpeakingTimeClient } from '@/components/calculators/ReadingSpeakingTimeClient'
import { ReadingSpeakingTimeContent } from './content'

export const metadata: Metadata = buildToolMetadata('reading-speaking-time')

export default function Page() {
  const tool = getTool('reading-speaking-time')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('reading-speaking-time')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ReadingSpeakingTimeClient />
        <ReadingSpeakingTimeContent />
      </ToolLayout>
    </>
  )
}
