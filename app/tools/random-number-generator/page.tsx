import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { RandomNumberGeneratorClient } from '@/components/devtools/batchDevTools'
import { RandomNumberGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('random-number-generator')

export default function Page() {
  const tool = getTool('random-number-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('random-number-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <RandomNumberGeneratorClient />
        <RandomNumberGeneratorContent />
      </ToolLayout>
    </>
  )
}
