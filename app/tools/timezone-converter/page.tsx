import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TimezoneConverterClient } from '@/components/calculators/TimezoneConverterClient'
import { TimezoneConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('timezone-converter')

export default function Page() {
  const tool = getTool('timezone-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('timezone-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TimezoneConverterClient />
        <TimezoneConverterContent />
      </ToolLayout>
    </>
  )
}
